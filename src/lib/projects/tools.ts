import type { Project } from "@/lib/projects/types";

/**
 * Practice projects for the `tools` category (Session 85).
 * First projects in this category — created for the Freelancer & Agency
 * track rollout (PROJECTS_PLAN.md Stage 8.3a priority #12).
 */
export const TOOLS_PROJECTS: Record<string, Project[]> = {
  "all-in-one-tools": [
    {
      id: "suite-or-stack-client-scorecard",
      tier: "mini",
      archetype: "head-to-head",
      title: "Suite or Stack? The Freelancer Client Call",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real SMB client's budget, team size, and existing tools, apply the lesson's data-gravity and ops-maturity test to recommend an all-in-one suite or a best-of-breed stack, and defend the call in writing.",
      companyId: "squarespace",
      scenario:
        "You're a freelance marketing consultant. A Squarespace-based DTC brand with a 2-person generalist marketing team, no CRM, $2,500/month tool budget, and a growing list of Mailchimp + a separate landing-page tool + a spreadsheet CRM has asked you: 'should we just get HubSpot?'",
      brief:
        "Score the client against the lesson's data-gravity and ops-maturity criteria, then write a one-page recommendation with the actual monthly cost comparison.",
      mode: "diagnostic",
      conceptsCovered: ["Weighing suite vs best-of-breed by data gravity and ops maturity"],
      steps: [
        {
          stepId: "step-1-suite-vs-stack-scorecard",
          concept: "Weighing suite vs best-of-breed by data gravity and ops maturity",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's playbook says to map the data of record and score operational maturity before anything else: teams with no CRM and generalist staff are the profile a suite's all-in-one contact record is built for, not the profile that needs Marketo-grade complexity.",
          question:
            "The client has no CRM (data lives in a spreadsheet), a 2-person generalist team with no dedicated ops hire, and a single-funnel DTC business (no multi-brand, multi-region journeys). Does that profile match 'buy a suite' or 'stay best-of-breed'?",
          toolName: "Google Sheets",
          where: "Build a 4-row scorecard: Data of record, Ops maturity, Journey complexity, Monthly budget.",
          procedure: [
            "List the client's current tools and monthly spend: Mailchimp ($20), a separate landing-page tool ($99), and an hour a week reconciling a spreadsheet CRM by hand",
            "Score data-of-record: no CRM in place scores as a point in favor of a suite (removes a migration project later)",
            "Score ops maturity: 2 generalists with no dedicated admin scores against Marketo-tier complexity and in favor of HubSpot's easier setup",
            "Score journey complexity: single DTC funnel, no multi-region or multi-brand need, scores against needing Salesforce Marketing Cloud",
            "Price out HubSpot Marketing Hub Starter/Professional against the client's $2,500/month ceiling and compare to the current $119/month tool spend",
          ],
          outputSample:
            "SCORECARD\nData of record: No CRM -> favors suite (+1)\nOps maturity: 2 generalists, no admin -> favors HubSpot over Marketo (+1)\nJourney complexity: single DTC funnel -> favors suite over Salesforce MC (+1)\nBudget: $2,500/mo ceiling vs current $119/mo spend -> HubSpot Starter ($20-100/mo) fits with huge headroom; Professional ($890/mo) still fits\nRECOMMENDATION: HubSpot Marketing Hub Starter now, revisit Professional at 2,000+ contacts",
          healthy:
            "The recommendation names a specific starting tier and monthly price the client can actually afford, not just 'get a suite.'",
          unhealthy:
            "Recommending HubSpot Enterprise ($3,600/month) to a client with a $2,500/month ceiling because the sales rep pitched the top tier.",
          interpret:
            "A suite recommendation without a tier and a real number attached is not a recommendation, it's a vendor referral.",
          soWhat: [
            {
              symptom: "Client asks 'which tier do we actually need' and you don't have an answer",
              action: "Re-run the scorecard against each tier's feature list, not just the brand name",
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
            role: "Build the scorecard and cost comparison",
            why: "Free, no account setup, easy to hand to the client as a deliverable",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "HubSpot Marketing Hub",
            role: "The suite being evaluated in the scorecard",
            why: "Reference real published tier pricing instead of estimating",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "You don't need a paid HubSpot account to complete this project, published pricing pages are sufficient for the comparison.",
      },
      deliverable:
        "A one-page client memo: the 4-row scorecard, a monthly cost comparison table, and a named tier recommendation with the reasoning.",
      sampleOutput:
        "Freshworks client memo (excerpt)\n\nRECOMMENDATION: Stay best-of-breed for now.\nData of record: CRM already exists (Freshworks CRM) -> no migration benefit from a suite\nOps maturity: 1 dedicated ops hire -> can run point-tool integrations without breaking\nJourney complexity: 3-region B2B funnel -> needs segmentation a $99/mo landing tool can still handle\nBudget: $800/mo ceiling -> HubSpot Professional ($890/mo) doesn't fit\nVerdict: revisit at 5,000+ contacts or when a second region launches.",
      successCriteria: [
        "Scorecard covers all four criteria from the lesson's playbook, not just budget",
        "Recommendation names a specific tier and a real monthly price, not a vendor name alone",
        "Memo states the condition under which the recommendation would flip",
      ],
      portfolioReady: true,
    },
    {
      id: "three-year-tco-forecast",
      tier: "core",
      archetype: "forecast",
      title: "The Three-Year Bill: Modeling Suite TCO Before the Contract Is Signed",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a mid-market company's current point-tool spend and two competing suite quotes, build a 3-year total cost of ownership model that includes implementation, admin headcount, and contact-tier overages, then flag which feature tier is actually needed.",
      companyId: "zendesk",
      scenario:
        "You're the marketing ops lead at a 200-person B2B SaaS company. Leadership wants to consolidate 6 point tools onto either HubSpot Marketing Hub Enterprise or Adobe Marketo Engage, and has only seen the Year 1 license quote from each vendor.",
      brief:
        "Build the 3-year TCO for both options using the lesson's real pricing data, then write the feature-usage audit that determines whether Enterprise tier is even justified.",
      mode: "calibration",
      conceptsCovered: [
        "Modeling 3-year TCO across license, implementation, and headcount",
        "Auditing feature usage before buying an Enterprise tier",
      ],
      steps: [
        {
          stepId: "step-1-three-year-tco-model",
          concept: "Modeling 3-year TCO across license, implementation, and headcount",
          lessonAnchor: "why-it-matters-with-data",
          theoryRecap:
            "The lesson's pricing data shows HubSpot Marketing Hub Enterprise at $3,600/month plus a $7,000 onboarding fee, versus a Marketo Engage deployment that commonly runs $40,000-$80,000/year in license plus a $60,000-$120,000 Year 1 implementation partner engagement, per the Digital Applied 2026 comparison.",
          question:
            "Using those published figures, what is the 3-year TCO for HubSpot Marketing Hub Enterprise versus a typical Marketo Engage deployment, before adding a single hour of admin headcount?",
          toolName: "Google Sheets",
          where: "Build a 3-row-by-2-column model: Year 1, Year 2, Year 3 for each vendor.",
          procedure: [
            "Row Year 1, HubSpot: ($3,600 x 12) + $7,000 onboarding = $50,200",
            "Row Year 1, Marketo: take the midpoint of $40,000-$80,000 license ($60,000) + midpoint of $60,000-$120,000 implementation ($90,000) = $150,000",
            "Rows Year 2 and Year 3, both vendors: license fee only, no repeat onboarding or implementation cost",
            "Sum all three years per vendor and compare the totals side by side",
          ],
          outputSample:
            "3-YEAR TCO MODEL\nHubSpot Marketing Hub Enterprise\n  Year 1: $50,200 (license $43,200 + onboarding $7,000)\n  Year 2: $43,200\n  Year 3: $43,200\n  3-yr total: $136,600\n\nMarketo Engage (typical mid-market deployment)\n  Year 1: $150,000 (license $60,000 + implementation $90,000)\n  Year 2: $60,000\n  Year 3: $60,000\n  3-yr total: $270,000",
          healthy:
            "The model separates one-time implementation cost from recurring license cost, so Year 2 and Year 3 aren't inflated by a cost that only happens once.",
          unhealthy:
            "Comparing only the Year 1 quotes leadership was shown, which makes Marketo look closer to HubSpot than the 3-year total actually is.",
          interpret:
            "The vendor with the higher Year 1 sticker price isn't always the more expensive one over 3 years, and the reverse is just as true, always run all three years before recommending.",
          soWhat: [
            {
              symptom: "Leadership is comparing two vendors using only the number on the first invoice",
              action: "Send the 3-year model before the contract review meeting, not after",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-feature-usage-audit",
          concept: "Auditing feature usage before buying an Enterprise tier",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Common Mistakes section flags that most teams use under 40% of the Professional tier feature set within the first 12 months, which means an Enterprise-tier purchase is frequently paying for capability nobody will touch this year.",
          question:
            "The vendor's Enterprise-tier pitch deck lists 14 features. The team's actual current workflows (email, forms, basic lead scoring, one integration) map to how many of those 14?",
          toolName: "Google Sheets",
          where: "List all 14 pitched Enterprise features in one column, mark which ones map to a current workflow.",
          procedure: [
            "List all 14 Enterprise-tier features from the sales deck in a single column",
            "Mark each one 'used today', 'used within 12 months', or 'no current plan'",
            "Count the 'used today' + 'used within 12 months' rows against the full list of 14",
            "If that count is under roughly 40%, flag Professional tier as the recommended starting point instead",
          ],
          outputSample:
            "FEATURE AUDIT (14 Enterprise features)\nUsed today: 4 (email, forms, lead scoring, 1 integration)\nUsed within 12 months: 2 (A/B testing, custom reporting)\nNo current plan: 8 (multi-touch attribution, custom objects, hierarchical teams, ...)\nUsage rate: 6/14 = 43%\nRECOMMENDATION: Professional tier now; revisit Enterprise once a second use case is scoped",
          healthy:
            "The tier recommendation is backed by a feature-by-feature count, not a gut call.",
          unhealthy:
            "Buying Enterprise because 'we'll probably grow into it,' with no named use case or timeline for the unused features.",
          interpret:
            "An Enterprise tier bought for features nobody configures in year one is the exact mistake the lesson names, catch it before the contract, not in the renewal conversation.",
          soWhat: [
            {
              symptom: "Sales deck leads with the Enterprise tier and the team hasn't audited feature usage",
              action: "Run the feature-usage audit before the next contract call",
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
            role: "Build the TCO model and feature-usage audit",
            why: "Free, transparent formulas leadership can check line by line",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "HubSpot Marketing Hub",
            role: "Source of the real published Enterprise-tier feature list and pricing",
            why: "Confirms the model uses current tier pricing rather than estimates",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "The model runs entirely on public pricing pages and sales-deck feature lists, no paid account is required to complete this project.",
      },
      deliverable:
        "A 3-year TCO comparison spreadsheet plus a feature-usage audit memo recommending a specific tier, ready to send before a vendor contract review.",
      sampleOutput:
        "Freshworks TCO summary (excerpt)\n\n3-year total, Option A (suite): $136,600\n3-year total, Option B (point-tool stack + admin): $198,400\nFeature usage rate against Option A's Enterprise pitch: 38%\nRecommendation: Option A, Professional tier, revisit Enterprise at the 12-month mark.",
      successCriteria: [
        "TCO model separates one-time implementation cost from recurring annual license cost across all 3 years",
        "Feature-usage audit produces a percentage, not just a list",
        "Final recommendation names a specific tier, not just a vendor",
      ],
      portfolioReady: true,
      stretch:
        "Add a fourth row for a dedicated admin headcount cost (even a fractional FTE estimate) and see whether it changes which vendor wins the 3-year total.",
    },
  ],

  "canva-figma": [
    {
      id: "canva-figma-task-router-headtohead",
      tier: "mini",
      archetype: "head-to-head",
      title: "Which Tool Wins: Routing a Week's Task List",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real 10-item weekly task list from a marketing team, apply the lesson's decision rule (developer handoff vs. self-publish, time-sensitive vs. precision-critical) to route every task to Canva or Figma and justify each call.",
      companyId: "warby-parker",
      scenario:
        "You're the sole marketer at Warby Parker's regional growth team. Your manager hands you next week's task list and asks which design tool each item should go through, before any work starts, so nobody wastes an hour in the wrong app.",
      brief:
        "Sort 10 tasks into Canva or Figma using the lesson's decision tree, then flag the one task that genuinely could go either way and explain the tiebreaker.",
      mode: "diagnostic",
      conceptsCovered: [
        "Developer handoff as the primary routing question",
        "Time-sensitive/template-driven vs. brand-precision-critical",
      ],
      steps: [
        {
          stepId: "step-1-developer-handoff-filter",
          concept: "Developer handoff as the primary routing question",
          lessonAnchor: "the-two-tool-workflow",
          theoryRecap:
            "The lesson's routing flowchart asks one question first: does this task go to a developer? If yes, Figma. If no, keep asking.",
          question:
            "Of these 10 tasks, 3 involve a developer eventually touching the file (landing page mockup, web banner set for the dev team, ad creative with dev handoff). Which tool do those 3 get routed to, and why does that question come before every other consideration?",
          toolName: "Google Sheets",
          where: "List the 10 tasks in a Sheet with a 'Dev involved?' column, mark Yes/No first before touching anything else.",
          procedure: [
            "List all 10 tasks in column A of a fresh Sheet",
            "Mark Yes/No in column B for 'Does a developer touch this file?'",
            "Route every Yes to Figma immediately, regardless of urgency",
          ],
          outputSample:
            "Task                                   Dev involved?   Route\nLanding page mockup, Q3 campaign        Yes             Figma\nWeb banner set (dev builds it)          Yes             Figma\nAd creative for dev handoff             Yes             Figma\nInstagram carousel, product launch      No               (next filter)",
          healthy:
            "Every dev-involved task routes to Figma before any other filter runs, even if it also feels urgent.",
          unhealthy:
            "Starting a landing page mockup in Canva because it 'felt faster,' then rebuilding it in Figma once the developer asks for specs, doubling the work.",
          interpret:
            "Dev handoff is a hard gate, not a tiebreaker: Canva cannot export CSS values or component specs, so any file a developer will touch has to start in Figma.",
          soWhat: [
            {
              symptom: "A developer keeps asking for a file that was designed in Canva",
              action: "Move that task type to the 'always Figma' list on the team's task-routing sheet",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-urgency-precision-filter",
          concept: "Time-sensitive/template-driven vs. brand-precision-critical",
          lessonAnchor: "the-two-tool-workflow",
          theoryRecap:
            "For the remaining 7 non-dev tasks, the lesson's second filter asks: is it time-sensitive/template-driven (Canva) or does it need brand-precision control with no developer involved (still sometimes Figma, e.g. a design system doc)?",
          question:
            "The remaining 7 tasks include a same-day Instagram post, a pitch deck due Friday, and a 'brand guidelines living doc' with no deadline. Which of these 7 is the one edge case that could reasonably go either way?",
          toolName: "Google Sheets",
          where: "Add a second filter column to the same Sheet for the 7 remaining tasks.",
          procedure: [
            "For each of the 7 remaining tasks, mark 'Time-sensitive/template?' Yes/No",
            "Route every Yes to Canva",
            "For the No rows, check whether brand-precision or a living component library is the actual need",
          ],
          outputSample:
            "Task                          Time-sensitive?   Route\nInstagram post, today          Yes               Canva\nPitch deck, due Friday          Yes               Canva\nBrand guidelines living doc     No                Figma (component library)\nWeb banner set, self-published  Yes               Canva OR Figma (edge case)",
          healthy:
            "The self-published web banner set is flagged explicitly as the tiebreaker task, with the reasoning written down (no dev, but brand precision matters) rather than picked by gut feel.",
          unhealthy:
            "Silently defaulting every ambiguous task to whichever tool is open, with no documented reasoning, so the next person repeats the same debate next week.",
          interpret:
            "Most tasks resolve cleanly on the two-question filter; the genuine edge cases are rare and worth naming explicitly so the team doesn't re-litigate them weekly.",
          soWhat: [
            {
              symptom: "The same 'which tool?' debate happens every week for the same task type",
              action: "Add that task type as a named row in a permanent team routing reference, not a one-off decision",
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
            role: "Build the task-routing table",
            why: "Free, fast, and the whole team can reference the same routing sheet going forward",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 10-row routing table assigning every task to Canva or Figma, with the one genuine edge case flagged and its tiebreaker reasoning written out in one sentence.",
      sampleOutput:
        "Duolingo growth team, week-of routing sheet (excerpt)\n\nTask                              Route    Reason\nTikTok caption graphics (5x)      Canva    Templated, same-day, no dev\nOnboarding flow redesign mockup   Figma    Dev builds it next sprint\nApp Store screenshot set          Canva    Magic Resize handles the 6 sizes\nDesign system button audit        Figma    Living component library, no dev this week but precision-critical",
      successCriteria: [
        "All 3 dev-involved tasks correctly routed to Figma before any other filter is applied",
        "The genuine edge-case task is named explicitly with a one-sentence tiebreaker, not silently defaulted",
      ],
      portfolioReady: true,
    },
    {
      id: "canva-figma-brand-kit-drift-audit",
      tier: "mini",
      archetype: "audit",
      title: "Brand Drift Audit: Catching the Off-Brand Files",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a mock list of 12 recently-published assets with their hex codes and fonts, apply the lesson's Brand Kit and single-source-of-truth principles to identify which assets drifted off-brand and why.",
      companyId: "casper-sleep",
      scenario:
        "You've just joined Casper Sleep's marketing team. Nobody set up a Brand Kit before you arrived, and a stakeholder just noticed three shades of blue across last month's assets.",
      brief:
        "Audit 12 recently-shipped assets against the approved brand hex codes and fonts, flag every drifted file, and trace each drift back to a root cause from the lesson's Common Mistakes list.",
      mode: "diagnostic",
      conceptsCovered: [
        "Brand Kit as the single source of truth",
        "Maintaining separate brand kits across two tools without a sync rule",
      ],
      steps: [
        {
          stepId: "step-1-hex-code-audit",
          concept: "Brand Kit as the single source of truth",
          lessonAnchor: "setting-up-your-brand-kit-canva",
          theoryRecap:
            "The lesson's Brand Kit setup locks a primary, secondary, and accent hex code so every new design pulls the right colors automatically instead of a designer eyeballing 'close enough' blue.",
          question:
            "The approved primary hex is #1B2A4A. Of the 12 assets, 4 use a slightly different blue (#1C2E52, #1A2847, #24365E, and one using pure black #000000 for text that should be the brand navy). Which of these actually count as brand drift versus an acceptable variant?",
          toolName: "Google Sheets",
          where: "List all 12 assets with their actual hex codes pulled from the design files, next to the one approved hex code.",
          procedure: [
            "List each asset's file name and the hex code actually used in it",
            "Flag any hex code that differs from #1B2A4A by more than a rounding error",
            "Separate 'wrong hex' drift from 'no Brand Kit was used at all' drift",
          ],
          outputSample:
            "Asset                        Hex used   Approved   Drift?\nInstagram_post_launch.png     #1C2E52    #1B2A4A    Minor drift\nEmail_header_v3.png           #24365E    #1B2A4A    Clear drift\nPitch_deck_slide12.png        #1B2A4A    #1B2A4A    On-brand",
          healthy:
            "Every asset traces back to the exact approved hex because it pulled from a shared Brand Kit, no manual re-entry, no eyeballing.",
          unhealthy:
            "4 of 12 assets show a visibly different blue because whoever built them typed a hex code from memory instead of pulling it from Brand Kit.",
          interpret:
            "Brand drift is invisible file-by-file but obvious the moment 12 assets sit side by side, which is exactly why the lesson calls it invisible until you print a brochure that doesn't match the website.",
          soWhat: [
            {
              symptom: "More than 2 of 12 assets show hex drift",
              action: "Re-set the Brand Kit as the mandatory starting template for every new design, not an optional reference",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-cross-tool-sync-check",
          concept: "Maintaining separate brand kits across two tools without a sync rule",
          lessonAnchor: "common-mistakes-marketers-make",
          theoryRecap:
            "The lesson's Common Mistakes list warns that Canva and Figma brand kits live separately, so a hex code change has to be made in both on the same day or the tools drift apart from each other.",
          question:
            "2 of the drifted assets came from Figma, not Canva, and both use a hex code that matches an OLD Canva brand color from before a rebrand. What does that pattern tell you about when the drift actually started?",
          toolName: "Google Sheets",
          where: "Add a 'source tool' and 'file date' column to the same audit sheet.",
          procedure: [
            "Mark which tool (Canva or Figma) produced each drifted asset",
            "Compare file creation dates against the known rebrand date",
            "Confirm whether the Figma library was ever updated after the rebrand",
          ],
          outputSample:
            "Asset                    Source   Date       Matches old brand?\nLanding_page_mock.png    Figma    Post-rebrand  Yes, old hex\nWeb_banner_v2.png        Figma    Post-rebrand  Yes, old hex",
          healthy:
            "Both tools' brand kits get updated the same day a color changes, verified by checking both libraries against the approved hex list.",
          unhealthy:
            "Canva's Brand Kit was updated after the rebrand but Figma's component library never was, so every Figma-sourced asset since then quietly carries the old color.",
          interpret:
            "The 2 Figma-sourced drifted files aren't random mistakes, they're a single missed update that then repeats itself in every file pulled from that stale library.",
          soWhat: [
            {
              symptom: "Drifted assets cluster by source tool and date rather than being scattered randomly",
              action: "Update both tools' brand kits on the same day, then re-check both libraries a week later to confirm the sync held",
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
            role: "Build and score the drift audit table",
            why: "Free, and every stakeholder can review the same evidence",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 12-row brand drift audit flagging every off-brand asset, with each drift traced to either 'no Brand Kit used' or 'stale cross-tool library' as the root cause.",
      sampleOutput:
        "Warby Parker Q2 asset audit (excerpt)\n\nAsset                     Drift?   Root cause\nBlog_thumbnail_003.png     Yes      No Brand Kit used, hex typed from memory\nCarousel_slide2.png        No       Pulled correctly from Brand Kit\nDev_handoff_banner.fig     Yes      Figma library not updated after rebrand",
      successCriteria: [
        "Correctly separates 'minor rounding' drift from 'clear drift' using the approved hex as the baseline",
        "Traces the 2 Figma-sourced drifts to a stale post-rebrand library rather than treating them as isolated mistakes",
      ],
      portfolioReady: true,
    },
  ],
  "ai-tools-overview": [
    {
      id: "ai-tools-stack-forecast",
      tier: "mini",
      archetype: "forecast",
      title: "Building a 90-Day AI Tool Adoption Plan",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a two-person marketing team's current workflow and a $150/month tool budget, apply the lesson's five-category framework and 'one tool per job' rule of thumb to forecast which tools to adopt in which order over 90 days.",
      companyId: "duolingo",
      scenario:
        "You're a marketer on a small regional growth pod modeled on Duolingo's playful, high-output content style. Leadership approved a $150/month AI tool budget starting next quarter and wants a rollout plan, not a wish list.",
      brief:
        "Sequence tool adoption across the five categories (writing, image, video, research, automation) inside a $150/month cap, following the lesson's 'one writing tool plus one automation tool covers 70% of savings' rule of thumb.",
      mode: "diagnostic",
      conceptsCovered: [
        "Five-category framework for mapping tools to jobs",
        "Start with one writing tool and one automation tool before expanding",
      ],
      steps: [
        {
          stepId: "step-1-map-current-work-to-categories",
          concept: "Five-category framework for mapping tools to jobs",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson groups every AI marketing tool into five jobs: writing, images, video, research, automation. The lesson's rule is to pick the job first, then the tool, never the reverse.",
          question:
            "This week's actual task list is: 8 hours writing ad variants and email copy, 3 hours building social graphics, 4 hours manually copying leads from a form into a CRM, 2 hours researching competitor positioning. Which category is eating the most hours, and does that category currently have zero tool support?",
          toolName: "Google Sheets",
          where: "List the week's tasks with hours spent, then tag each with one of the five categories.",
          procedure: [
            "List each task and its weekly hours in a Sheet",
            "Tag each task with its category: writing, image, video, research, or automation",
            "Sum hours per category and sort descending",
          ],
          outputSample:
            "Category      Hours/week   Current tool support\nWriting        8           None\nAutomation     4           None\nImage           3           Canva free tier\nResearch        2           None",
          healthy:
            "The two highest-hour categories with zero current tool support (writing, automation) become the first adoption targets, matching the lesson's rule of thumb exactly.",
          unhealthy:
            "Buying a video tool first because a demo looked impressive, while the 8-hour writing bottleneck and 4-hour manual CRM entry keep eating the week untouched.",
          interpret:
            "The highest-leverage categories are the ones with the most unsupported hours, not the ones with the flashiest tool demos.",
          soWhat: [
            {
              symptom: "A category with the most weekly hours has zero tool support",
              action: "Move that category to the top of the 90-day adoption sequence",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-sequence-within-budget",
          concept: "Start with one writing tool and one automation tool before expanding",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's rule of thumb: start with one writing tool plus one automation tool, that combination covers roughly 70% of weekly time savings before image or video tools are even considered.",
          question:
            "With $150/month and writing (8 hrs) plus automation (4 hrs) as the top two unsupported categories, which specific tools from the lesson's category map fit inside budget for month 1, and what gets pushed to month 2 or 3?",
          toolName: "Google Sheets",
          where: "Add price columns next to each candidate tool and sum against the $150 cap.",
          procedure: [
            "List one candidate tool per top-priority category with its monthly price",
            "Sum the month-1 picks against the $150 cap",
            "Push any category that doesn't fit to a later month, in priority order",
          ],
          outputSample:
            "Month   Tool                Category      Price     Running total\n1       Claude/ChatGPT       Writing       $20       $20\n1       Zapier AI Actions    Automation    $30       $50\n2       Canva Pro            Image         $15       $65\n3       Perplexity Pro       Research      $20       $85",
          healthy:
            "Month 1 spends roughly a third of the budget on exactly the two highest-leverage categories, leaving room to add image, research, or video later without a budget fight.",
          unhealthy:
            "Front-loading month 1 with five tools across all five categories at once, so the team never learns any single tool deeply before the next one arrives.",
          interpret:
            "A sequenced rollout inside budget beats an all-at-once purchase, both financially and because the lesson's own Common Mistakes section warns tool sprawl beats zero tools but underperforms one well-integrated tool.",
          soWhat: [
            {
              symptom: "The proposed month-1 tool list spans more than 2 categories",
              action: "Cut back to the top 2 unsupported categories only, and schedule the rest for month 2/3",
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
            role: "Build the task-to-category map and the budget sequencing table",
            why: "Free, and the whole team can see the same rollout plan",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 90-day, budget-capped tool adoption sequence naming one tool per priority category per month, justified by weekly hours saved.",
      sampleOutput:
        "Casper Sleep growth pod, 90-day AI tool plan (excerpt)\n\nMonth 1 ($50/mo): Claude ($20) for ad copy + Zapier AI Actions ($30) for lead routing\nMonth 2 (+$15/mo): Canva Pro for templated social graphics\nMonth 3 (+$20/mo): Perplexity Pro for competitor research",
      successCriteria: [
        "Month 1 picks exactly one writing tool and one automation tool, matching the lesson's rule of thumb",
        "The full 3-month plan stays within the $150/month cap at every stage",
      ],
      portfolioReady: true,
    },
    {
      id: "ai-tools-governance-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Governance Gap: Auditing a Team's AI Usage",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a log of 8 recent AI tool interactions from a marketing team, apply the lesson's Common Mistakes framework to flag which ones violate data-privacy or human-review practices before they become a security incident.",
      companyId: "lenskart",
      scenario:
        "You're auditing AI tool usage for Lenskart's regional marketing team after a data-privacy review was flagged company-wide. You have a log of the last 8 times someone on the team used an AI tool.",
      brief:
        "Score all 8 logged interactions against the lesson's two governance-related Common Mistakes (data residency/PII exposure, skipping human review) and recommend a fix for each violation.",
      mode: "diagnostic",
      conceptsCovered: [
        "Data residency and PII exposure in consumer AI accounts",
        "Skipping the human review layer before publishing AI output",
      ],
      steps: [
        {
          stepId: "step-1-pii-exposure-check",
          concept: "Data residency and PII exposure in consumer AI accounts",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson names pasting customer lists into a consumer ChatGPT account as the #1 reason 40% of marketers cite data privacy as their top AI adoption blocker. Enterprise tiers with zero-retention agreements are the fix.",
          question:
            "Of the 8 logged interactions, 2 involve pasting a customer email list into a free-tier consumer chatbot account to draft a segmented campaign. What makes this specifically a governance violation rather than just a workflow shortcut?",
          toolName: "Google Sheets",
          where: "List all 8 interactions with the tool used, account tier (free/enterprise), and whether customer data was involved.",
          procedure: [
            "List each interaction with tool name, account tier, and data type used",
            "Flag any interaction that pastes customer PII into a free consumer-tier account",
            "Note which of those flagged items used an account with no zero-retention agreement",
          ],
          outputSample:
            "Interaction                          Account tier    PII involved?   Flag\nSegment email list via ChatGPT free   Free consumer    Yes             VIOLATION\nDraft ad headline via Claude free     Free consumer    No              OK\nSummarize interview via NotebookLM    Team workspace    Yes (names)     Needs review",
          healthy:
            "Every interaction touching customer PII runs through an enterprise or team-tier account with a zero-retention agreement on file.",
          unhealthy:
            "A customer email list gets pasted into a free consumer chatbot account with no data agreement, exactly the pattern the lesson flags as the top-cited adoption blocker.",
          interpret:
            "The violation isn't using AI to segment a list, it's doing it on the wrong account tier with no data agreement covering what happens to that list afterward.",
          soWhat: [
            {
              symptom: "Any interaction pastes customer PII into a free-tier consumer AI account",
              action: "Move that workflow to an enterprise/team-tier account with a signed zero-retention agreement before it repeats",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-human-review-check",
          concept: "Skipping the human review layer before publishing AI output",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson treats AI as a first-draft engine, not a publisher, citing Sports Illustrated's 2023 fake-author scandal as the cautionary tale for unedited AI output going live.",
          question:
            "Of the 8 interactions, 1 shows an AI-drafted blog post published the same day it was generated, with no edit timestamp between draft and publish. Why does that specific pattern matter more than just 'was it edited'?",
          toolName: "Google Sheets",
          where: "Add a 'draft timestamp' and 'publish timestamp' column to the same log.",
          procedure: [
            "Compare draft generation time against publish time for each content-producing interaction",
            "Flag any same-day, near-zero-gap publish as a likely skipped-review case",
            "Note whether a named human reviewer is logged for that item",
          ],
          outputSample:
            "Interaction                    Draft time   Publish time   Gap        Flag\nBlog post via Jasper            9:02 AM      9:14 AM        12 min     VIOLATION, no reviewer logged\nAd variant via ChatGPT          10:00 AM     Next day 2 PM  ~28 hrs    OK, reviewer logged",
          healthy:
            "Every published piece shows a meaningful time gap between AI draft and publish, with a named human reviewer logged in between.",
          unhealthy:
            "A blog post goes live 12 minutes after being drafted, with no reviewer name attached, the same failure pattern that caused a real, public retraction elsewhere.",
          interpret:
            "A near-zero time gap between draft and publish is a reliable proxy for skipped review, even without knowing exactly what was or wasn't checked.",
          soWhat: [
            {
              symptom: "A published item shows less than a few hours between AI draft and publish with no reviewer logged",
              action: "Add a mandatory named-reviewer field to the publishing checklist before content can go live",
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
            role: "Build and score the governance audit log",
            why: "Free, and the audit trail is easy to share with a compliance stakeholder",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An 8-row governance audit log flagging every PII-exposure and skipped-review violation, each with a specific one-line fix.",
      sampleOutput:
        "Warby Parker regional team, AI usage audit (excerpt)\n\nInteraction                     Flag         Fix\nCustomer list segmentation      PII exposure  Move to enterprise-tier account with zero-retention agreement\nSame-day blog publish            No review     Require a named reviewer before publish, minimum 2-hour gap",
      successCriteria: [
        "Correctly identifies both PII-exposure interactions using account tier as the deciding factor, not just tool name",
        "Correctly flags the same-day publish gap as a review-skip risk using timestamp evidence",
      ],
      portfolioReady: true,
    },
  ],

  "hootsuite-buffer": [
    {
      id: "hootsuite-buffer-team-tool-selection",
      tier: "mini",
      archetype: "head-to-head",
      title: "The Tool Call: Choosing a Scheduler for a Growing Social Team",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given Freshworks' real channel count, headcount, and workflow needs, build a cost and feature comparison to decide between Hootsuite and Buffer.",
      companyId: "freshworks",
      scenario:
        "You're the marketing ops lead at Freshworks. Your social team just grew from 2 to 4 people and now runs 8 channels across 3 product lines. Leadership wants a scheduling tool decision by Friday.",
      brief:
        "Compare the two tools on pricing model, not just headline price, then match the feature list to what the team actually needs.",
      mode: "diagnostic",
      conceptsCovered: [
        "Per-user vs per-channel pricing model",
        "Matching feature checklist to team workflow needs",
      ],
      steps: [
        {
          stepId: "step-1-per-user-vs-per-channel-cost",
          concept: "Per-user vs per-channel pricing model",
          lessonAnchor: "hootsuite-pricing-2026",
          theoryRecap:
            "The lesson's Hootsuite pricing section warns that Hootsuite bills per user, not per channel, so a 5-person team can cost $500+ per month even on modest plans.",
          question:
            "Freshworks' team is 4 people managing 8 channels. Hootsuite's Team plan caps at 3 users, so you'd need an Enterprise quote; Buffer's Team plan is $12/channel with unlimited users. Which pricing model actually favors this team, and why?",
          toolName: "Google Sheets",
          where: "New sheet, two columns: Hootsuite Enterprise quote vs Buffer Team monthly cost",
          procedure: [
            "List headcount (4) and channel count (8) in two cells",
            "Buffer: multiply 8 channels x $12 = $96/month regardless of headcount",
            "Hootsuite: note the 3-user cap on Team ($249/mo), so 4 users forces an Enterprise quote, request one and log the number when it arrives",
            "Recompute both totals if the team grows to 6 people, same 8 channels",
          ],
          outputSample:
            "Freshworks tool cost model\n\n            4 people / 8 ch     6 people / 8 ch\nBuffer      $96/mo              $96/mo (unlimited users)\nHootsuite   Enterprise quote     Enterprise quote (still over the 3-user Team cap)\n            (sales says $620/mo)  (sales says $620/mo, same tier)",
          healthy:
            "The team recognizes Buffer's cost is flat as headcount grows because it bills per channel, while Hootsuite's per-user model means every new hire is a phone call to sales.",
          unhealthy:
            "Comparing only Hootsuite Professional's $99/month sticker price to Buffer without noticing Professional is a single-user plan that can't actually serve a 4-person team.",
          interpret:
            "The published sticker price on the pricing page isn't the price your team will actually pay. Model the real headcount and channel count before comparing numbers.",
          soWhat: [
            {
              symptom: "Leadership approved a tool based on the homepage price and got a surprise Enterprise quote",
              action: "Always model total cost at your actual headcount and channel count before requesting a quote",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-feature-needs-match",
          concept: "Matching feature checklist to team workflow needs",
          lessonAnchor: "who-should-use-what",
          theoryRecap:
            "The lesson's 'Who Should Use What' section splits the decision by need: approval workflows and social listening point to Hootsuite, simplicity and organic-only content point to Buffer.",
          question:
            "Freshworks needs an approval step (an intern drafts, a manager approves before anything goes live) but has no paid ad spend and no requirement to monitor brand mentions. Which tool's feature list actually matches that?",
          toolName: "Google Sheets",
          where: "Same sheet, new tab: feature checklist with a Yes/No column per tool",
          procedure: [
            "List Freshworks' 3 real requirements: approval routing, no ad management needed, no social listening needed",
            "Mark Hootsuite Yes/No(unneeded)/Yes(unneeded) and Buffer Yes(Team plan)/No/No against each",
            "Cross out the two Hootsuite features (ad management, social listening) this team would pay for but never use",
            "Circle the one feature that actually decides it: does Buffer Team's collaboration cover approval routing, or does it need Hootsuite's more granular permissions?",
          ],
          outputSample:
            "Freshworks feature match\n\nApproval routing     Buffer Team: shared drafts, no formal approval gate\n                     Hootsuite Team: role-based approval before publish -- MATCH\nAd management        Not needed by either -- irrelevant to this decision\nSocial listening      Not needed -- irrelevant to this decision",
          healthy:
            "The team pays for Hootsuite's approval routing specifically, because it's the one feature this team will actually use every week, not because Hootsuite has more features overall.",
          unhealthy:
            "Choosing Hootsuite because it 'has more features' without checking whether Freshworks needs any of the features Buffer lacks.",
          interpret:
            "A head-to-head comparison is not won by whichever tool has more checkmarks. It's won by whichever tool's checkmarks match this team's real workflow.",
          soWhat: [
            {
              symptom: "A tool decision defaults to 'the one with more features' every time",
              action: "Cross out every feature your team won't actually use before comparing what's left",
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
            role: "Build the per-user vs per-channel cost model side by side",
            why: "Free, and the whole comparison is just arithmetic across headcount and channel count",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Buffer",
            role: "Test-drive the free 3-channel plan before recommending a paid tier",
            why: "See the actual scheduling UI without a purchase decision",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Hootsuite",
            role: "The enterprise-tier candidate being priced for a 4-person, 8-channel team",
            why: "Professional/Team plans cap at 3 users, so a real quote here means calling sales",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "Only pick a paid tier once the cost model shows which one is actually cheaper at your headcount and channel count, not off the sticker price.",
      },
      deliverable:
        "A one-page recommendation memo for Freshworks leadership: recommended tool, monthly cost at current and projected headcount, and the single feature that decided it.",
      sampleOutput:
        "Nykaa social team, tool recommendation memo (excerpt)\n\nRecommendation: Buffer Team, $12/channel\nCurrent cost: 6 channels x $12 = $72/month, unlimited users\nDeciding factor: Nykaa's team has no ad-management or listening need this quarter; Buffer's flat per-channel cost beats Hootsuite's per-user model as the team scales from 3 to 6 marketers.",
      successCriteria: [
        "Cost model correctly reflects per-user vs per-channel billing at the team's real headcount and channel count",
        "Recommendation is tied to a specific matched feature, not a general 'has more features' claim",
      ],
      portfolioReady: true,
      stretch:
        "Re-run the model assuming Freshworks doubles to 16 channels next year, at what channel count does Hootsuite's Enterprise quote become cheaper than Buffer's linear per-channel cost?",
    },
    {
      id: "buffer-hootsuite-scaling-forecast",
      tier: "mini",
      archetype: "forecast",
      title: "The Scaling Forecast: When Nykaa Outgrows Buffer",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given Nykaa's 12-month channel growth plan, forecast the cost and feature point at which Buffer's per-channel model gets more expensive than Hootsuite's flat team tiers, and the point at which Hootsuite's features become necessary.",
      companyId: "nykaa",
      scenario:
        "Nykaa's beauty brand social team runs 5 channels today and plans to launch channels for each new sub-brand and market, projected to reach 15 channels within 12 months, plus a paid social ads push starting month 6.",
      brief:
        "Forecast cost at 5, 10, and 15 channels for both tools, then flag the month the team's needs (paid ads) outgrow Buffer's feature set entirely.",
      mode: "calibration",
      conceptsCovered: [
        "Volume discount thresholds in per-channel pricing",
        "Feature growth trigger: paid ad management",
      ],
      steps: [
        {
          stepId: "step-1-volume-discount-forecast",
          concept: "Volume discount thresholds in per-channel pricing",
          lessonAnchor: "buffer-pricing-2026",
          theoryRecap:
            "The lesson's Buffer pricing section notes volume discounts apply above 10 channels, as low as $1-4/channel for large accounts, so the flat $12/channel rate does not hold forever.",
          question:
            "At 5, 10, and 15 channels, what does Nykaa actually pay Buffer's Team plan, and does the volume discount kick in before or after Nykaa's 12-month target?",
          toolName: "Google Sheets",
          where: "New sheet, one row per channel milestone (5, 10, 15)",
          procedure: [
            "Row 1: 5 channels x $12 = $60/month, no discount yet",
            "Row 2: 10 channels, the volume-discount threshold, flag this row",
            "Row 3: 15 channels, estimate using the lesson's stated $1-4/channel range for large accounts, so cost could land between $105-180/month above the 10-channel base",
            "Compare the 15-channel Buffer estimate to Hootsuite Team's flat $249/month (3 users, 20 accounts) to see which is cheaper at Nykaa's ceiling",
          ],
          outputSample:
            "Nykaa Buffer cost forecast\n\n5 channels   $60/month   (no discount)\n10 channels  ~$90-120/month  (volume discount threshold)\n15 channels  ~$105-180/month (estimated, large-account rate)\nHootsuite Team flat rate: $249/month regardless of channel count up to 20",
          healthy:
            "The team catches that Buffer likely stays cheaper than Hootsuite Team even at 15 channels once the volume discount applies, so cost alone doesn't force a switch.",
          unhealthy:
            "Assuming Buffer's cost scales linearly at $12/channel all the way to 15 channels and overstating the case for switching to Hootsuite on cost grounds alone.",
          interpret:
            "A pricing forecast has to account for the discount tier the lesson actually states, a flat per-unit rate rarely holds at scale.",
          soWhat: [
            {
              symptom: "A 'we'll outgrow this tool' argument only checks the sticker rate, not the discount tier",
              action: "Re-price every growth milestone against the vendor's actual published discount structure before forecasting a switch",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-ad-feature-trigger",
          concept: "Feature growth trigger: paid ad management",
          lessonAnchor: "who-should-use-what",
          theoryRecap:
            "The lesson's 'Who Should Use What' section lists running paid ads alongside organic posts as a reason to choose Hootsuite, since Buffer has no built-in ad management.",
          question:
            "Nykaa's paid social push starts month 6. Cost aside, does that change which tool the team needs, regardless of channel count?",
          toolName: "Google Sheets",
          where: "Same sheet, add a month-6 marker row",
          procedure: [
            "Mark month 6 as the paid-ads launch point on the timeline",
            "Check Buffer's feature list: no ad management, confirmed in the lesson's comparison table",
            "Check Hootsuite's feature list: built-in ad management on Facebook, LinkedIn, and X",
            "Conclude whether the team needs Hootsuite for ads specifically, or a separate ads tool alongside Buffer",
          ],
          outputSample:
            "Nykaa feature trigger timeline\n\nMonth 1-5: organic only, 5-10 channels -- Buffer covers this fully\nMonth 6: paid social ads launch -- Buffer has no ad management\nDecision: either add a dedicated ads tool alongside Buffer, or migrate to Hootsuite for ads + scheduling in one dashboard",
          healthy:
            "The team treats the ads launch as a feature trigger, not a cost trigger, and decides it separately from the channel-growth cost forecast.",
          unhealthy:
            "Bundling the ads decision into the channel-cost forecast and concluding 'switch to Hootsuite at 15 channels' when the real trigger was the month-6 ad launch, not channel count.",
          interpret:
            "Cost forecasts and feature-need forecasts answer different questions. A scaling forecast has to run both, not just the one that's easier to put in a spreadsheet.",
          soWhat: [
            {
              symptom: "A tool-switch recommendation cites channel growth as the reason when the real driver is a missing feature",
              action: "Separate the cost forecast from the feature-need forecast and cite the correct trigger for each recommendation",
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
            role: "Build the 3-milestone cost and feature-trigger forecast",
            why: "Free, no account needed for spreadsheet modeling",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Hootsuite",
            role: "The candidate tool being evaluated for the month-6 ad-management need",
            why: "Only relevant if the feature trigger, not the cost trigger, forces a switch",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "Don't upgrade on a cost forecast alone, confirm whether the paid-ads feature trigger actually applies before switching tools.",
      },
      deliverable:
        "A 12-month forecast memo: cost at 5/10/15 channels for both tools, plus the month-6 feature trigger flagged separately from the cost trigger.",
      sampleOutput:
        "Freshworks social team, scaling forecast (excerpt)\n\nCost forecast: Buffer stays cheaper than Hootsuite Team through 8 channels even without a volume discount\nFeature trigger: Freshworks has no paid-ads plan this year, so the ad-management gap never applies -- stay on Buffer",
      successCriteria: [
        "Cost forecast correctly applies the lesson's stated volume-discount range instead of a flat linear rate",
        "Feature-need trigger (paid ads) is identified and evaluated separately from the cost trigger",
      ],
      portfolioReady: true,
      stretch:
        "Forecast what happens if the paid-ads launch moves up to month 2, does that change the recommended tool even at only 5 channels?",
    },
  ],

  "martech-stack": [
    {
      id: "martech-stack-tool-audit-five-star",
      tier: "mini",
      archetype: "audit",
      title: "The Redundancy Hunt: Auditing a Lending Company's Tool List",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real list of marketing tools a mid-size NBFC is paying for, apply the lesson's audit framework to flag duplicates, ghost subscriptions, and coverage gaps across the six martech layers.",
      companyId: "five-star-business-finance",
      scenario:
        "You're the marketing ops analyst at Five-Star Business Finance, the Chennai-founded NBFC that listed on the NSE/BSE in November 2022 raising roughly $240M. Finance has asked why the marketing software bill keeps climbing while nobody can say what half the tools actually do.",
      brief:
        "Sort the 14-tool list by martech layer, flag anything duplicating another tool's job, flag anything nobody has logged into in 90 days, and name the one layer with zero coverage.",
      mode: "diagnostic",
      conceptsCovered: [
        "Auditing existing tools for duplicates, ghosts, and gaps",
        "Diagnosing fragmented data as the root cause of stack failure",
      ],
      steps: [
        {
          stepId: "step-1-audit-tool-list",
          concept: "Auditing existing tools for duplicates, ghosts, and gaps",
          lessonAnchor: "step-2-audit-what-you-already-have",
          theoryRecap:
            "The lesson's Step 2 says every audit should surface duplicates (two tools doing the same job), ghost tools (subscriptions nobody uses), and gaps (jobs with no tool at all) — most audits find 2-3 redundant tools and 1-2 critical gaps.",
          question:
            "The list has two social schedulers (Buffer and Hootsuite, both active), zero CDP, and a $400/month 'analytics suite' with no login in 6 months. What do you cut, what do you keep, and what's missing?",
          toolName: "Google Sheets",
          where: "Paste the 14-tool list into a sheet with columns: Tool, Layer, Monthly Cost, Last Login, Owner.",
          procedure: [
            "List all 14 tools with their monthly cost and layer",
            "Flag Buffer and Hootsuite as a duplicate pair (both do Layer 2 social scheduling)",
            "Flag the $400/month analytics suite with no login in 6 months as a ghost tool",
            "Check each of the six layers for zero coverage, mark Layer 1 (Data and Audience) as the gap since there's no CDP",
          ],
          outputSample:
            "Five-Star Business Finance, Tool Audit (excerpt)\n\nDUPLICATES\n  Buffer ($15/mo) + Hootsuite ($99/mo), both Layer 2 social scheduling. Keep Buffer, cancel Hootsuite. Saves $99/mo.\n\nGHOST TOOLS\n  DataSuite Analytics ($400/mo), 0 logins in 180 days. Cancel pending finance sign-off. Saves $400/mo.\n\nGAPS\n  Layer 1 (Data and Audience), no CDP. Lead data lives in 3 disconnected spreadsheets.",
          healthy: "Every tool maps to exactly one layer, no tool sits unused for 90+ days, all six layers have at least baseline coverage.",
          unhealthy: "Two tools doing the same job, a $400/month subscription with zero logins, and a foundational layer (data/audience) with no tool at all.",
          interpret: "The audit isn't about counting tools, it's about counting jobs with no owner and jobs with two owners, both waste money.",
          soWhat: [
            { symptom: "Two schedulers both active and both billed", action: "Cancel the lower-usage one this billing cycle", effort: "5 min" },
            { symptom: "A $400/mo tool with no logins in 6 months", action: "Cancel or reassign an owner with a 30-day usage check-in", effort: "30 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-diagnose-fragmentation",
          concept: "Diagnosing fragmented data as the root cause of stack failure",
          lessonAnchor: "why-most-stacks-fail",
          theoryRecap:
            "The lesson's 'Why Most Stacks Fail' section says the root cause is almost never weak tools, it's fragmented data, when tools don't talk to each other, teams end up with three different versions of the same number and trust none of them.",
          question:
            "Marketing reports 340 leads last month. Sales reports 210. Finance's dashboard shows 275. All three numbers come from different tools tracking the same funnel. Which number is right?",
          toolName: "Google Sheets",
          where: "Build a lead-count reconciliation table pulling the raw count each tool reports plus its data source (form fills, CRM stage change, deal creation).",
          procedure: [
            "List what each of the three numbers actually counts (form fills vs CRM contacts vs closed-won-stage deals)",
            "Identify that none of them are wrong, they're measuring different funnel stages that were never explicitly connected",
            "Recommend the one system of record (CRM) that all three teams should read from going forward",
          ],
          outputSample:
            "Lead Count Reconciliation\n\nMarketing (340): raw website form fills, no dedupe\nSales (210): CRM contacts marked 'Sales Qualified'\nFinance (275): deals created in the billing system\n\nRoot cause: three tools, three definitions of 'lead', zero shared ID between them.",
          healthy: "One system of record, every team's report traces back to the same underlying records.",
          unhealthy: "Three teams reporting three numbers for what should be one metric, each convinced their own tool is correct.",
          interpret: "This isn't a math error, it's a plumbing error, the tools were never connected, so the same event got counted three different ways.",
          soWhat: [
            { symptom: "Marketing, Sales, and Finance report three different lead counts", action: "Designate the CRM as system of record and route the other two reports off it", effort: "half day" },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Build the audit and reconciliation tables", why: "Free, works for any team size, no integration needed to start", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable:
        "A completed tool audit table (duplicates/ghosts/gaps flagged) plus a one-paragraph recommendation naming the single system of record for lead counts.",
      sampleOutput:
        "Jyoti CNC Automation, Q3 Tool Audit Summary\n\nCut: 1 duplicate scheduler ($99/mo), 1 ghost analytics tool ($400/mo). Total savings: $499/mo.\nGap flagged: no CDP, lead data lives in 3 spreadsheets, recommend Segment or HubSpot's native CDP add-on once contact volume passes 5,000.\nSystem of record: CRM stage changes only, marketing and finance dashboards to be rebuilt off CRM data by end of quarter.",
      successCriteria: [
        "Correctly identifies the duplicate tool pair and its cost",
        "Correctly identifies the ghost tool via login/usage data",
        "Names the layer with zero coverage",
        "Recommends a single system of record for the lead-count discrepancy",
      ],
      portfolioReady: true,
    },
    {
      id: "martech-stack-phased-build-jyoti-cnc",
      tier: "core",
      archetype: "build-the-asset",
      title: "The 12-Month Build: Phasing a Martech Stack from Zero",
      timeEstimate: "70 minutes",
      timeMinutes: 70,
      objective:
        "Given Jyoti CNC Automation's 12-month marketing goals and current zero-tool baseline, apply the lesson's goals-first, phased-build framework to produce a month-by-month stack rollout plan with named tools and integration checkpoints.",
      companyId: "jyoti-cnc-automation",
      scenario:
        "You're the newly hired marketing lead at Jyoti CNC Automation, the Rajkot-based machine tool manufacturer that listed on the NSE/BSE in January 2024. Marketing has run entirely on spreadsheets and a shared inbox; you have a 12-month runway and a mandate to build a stack that won't need to be rebuilt in year two.",
      brief:
        "Start from three stated business goals, map each to a tool category, then phase the build across three quarters instead of buying everything in month one.",
      mode: "build",
      conceptsCovered: [
        "Mapping goals to required tool categories before selecting software",
        "Prioritizing integration over standalone features when choosing tools",
        "Phasing a stack build over 12 months by data maturity",
      ],
      steps: [
        {
          stepId: "step-1-map-goals-to-categories",
          concept: "Mapping goals to required tool categories before selecting software",
          lessonAnchor: "step-1-start-with-goals-not-tools",
          theoryRecap:
            "The lesson's Step 1 says every goal points to specific tool categories, write the 12-month goals first, then let each one name the layer it needs, never start by browsing software.",
          question:
            "Jyoti CNC's three goals: '200 qualified dealer/distributor leads globally', 'cut RFQ response time from 5 days to 1', 'track which trade-show contacts actually convert to orders'. Which tool category does each goal require?",
          toolName: "Google Sheets",
          where: "Build a two-column goal-to-category map.",
          procedure: [
            "Write each of the 3 goals in its own row",
            "Name the martech layer each goal requires (Layer 1 CRM for lead tracking, Layer 2 automation for RFQ response, Layer 1+6 CRM plus analytics for trade-show attribution)",
            "Flag any goal that needs more than one layer working together",
          ],
          outputSample:
            "Goal to Category Map\n\n1. 200 qualified dealer leads globally -> CRM (Layer 1) to log and score every inbound RFQ\n2. Cut RFQ response time 5 days to 1 -> Marketing automation (Layer 2) to auto-route RFQs to the right regional rep\n3. Track trade-show-to-order conversion -> CRM (Layer 1) + Analytics (Layer 6), needs both connected",
          healthy: "Every goal names at least one concrete tool category before any vendor gets evaluated.",
          unhealthy: "Shopping for 'the best CRM' before writing down what it needs to do.",
          interpret: "Goal 3 is the one to watch, it needs two layers talking to each other, which becomes the integration test in Step 2.",
          soWhat: [
            { symptom: "Team wants to demo tools before goals are written down", action: "Block vendor demos until the goal-to-category map is signed off", effort: "30 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-score-integration",
          concept: "Prioritizing integration over standalone features when choosing tools",
          lessonAnchor: "step-3-prioritize-integration-over-features",
          theoryRecap:
            "The lesson's Step 3 says when choosing between two tools with similar features, pick the one with the native integration, a tool with fewer features but clean data sync beats a feature-rich tool needing manual exports.",
          question:
            "Two CRM finalists: Tool A has more reporting widgets but only CSV export; Tool B has fewer built-in reports but a native two-way sync with the automation platform you already shortlisted. Which one wins the goal-3 attribution requirement from Step 1?",
          toolName: "HubSpot Marketing Hub",
          where: "Compare each CRM finalist's integration docs against the automation tool's native-integration list before scoring features.",
          procedure: [
            "Pull each CRM's official integration/app-marketplace page",
            "Confirm whether the automation tool appears as a native (not CSV-based) integration",
            "Score Tool B higher despite fewer built-in reports, since native sync directly serves the Step 1 trade-show attribution goal",
          ],
          outputSample:
            "CRM Shortlist Scorecard\n\nTool A: 12 built-in report types, export = manual CSV only\nTool B: 6 built-in report types, native two-way sync with HubSpot Marketing Hub automation\n\nWinner: Tool B. Manual CSV exports would break the trade-show-to-order tracking goal within a month.",
          healthy: "The tool with weaker standalone features but real-time native sync wins the integration-dependent goal.",
          unhealthy: "Picking the tool with the longest feature list and discovering the CSV export gap only after go-live.",
          interpret: "Feature checklists optimize for the demo, integration checks optimize for month three when someone actually needs the combined report.",
          soWhat: [
            { symptom: "Two tools score similarly on features alone", action: "Re-score using native integration with your other confirmed tools as a tiebreaker", effort: "30 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-phase-the-rollout",
          concept: "Phasing a stack build over 12 months by data maturity",
          lessonAnchor: "step-4-phase-your-build",
          theoryRecap:
            "The lesson's Step 4 phases the build: months 1-3 get CRM plus web analytics plus one email tool talking to each other, months 4-6 add SEO and social scheduling, months 7-12 add automation and consider a CDP once data volume justifies it.",
          question:
            "Jyoti CNC wants all three goals solved by month 2. Using the lesson's phasing, which pieces can honestly ship by month 3, and which have to wait?",
          toolName: "Google Sheets",
          where: "Lay out a 3-phase timeline row per quarter.",
          procedure: [
            "Phase 1 (months 1-3): CRM (Tool B) + GA4 + one email tool, get these three talking first",
            "Phase 2 (months 4-6): add Zapier to auto-route RFQs between the CRM and the regional reps' inboxes, solving the response-time goal",
            "Phase 3 (months 7-12): add the trade-show attribution reporting once 6 months of CRM data exists to attribute against",
          ],
          outputSample:
            "12-Month Phased Build\n\nPhase 1 (Mo 1-3): CRM + GA4 + Brevo email, connected\nPhase 2 (Mo 4-6): + Zapier RFQ routing (solves the 1-day response goal)\nPhase 3 (Mo 7-12): + trade-show attribution reporting once CRM has 6 months of deal data",
          healthy: "Each phase only adds tools once the prior phase's tools are actually connected and in use.",
          unhealthy: "Buying all 3 tool categories in month 1 and spending the rest of the year trying to get them talking to each other.",
          interpret: "The attribution goal looks urgent but is structurally a month-9 goal, it needs data that doesn't exist yet in month 1.",
          soWhat: [
            { symptom: "Leadership wants every goal solved by month 2", action: "Show which goals are data-dependent and can't be pulled forward, present the phased plan instead", effort: "half day" },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Build the goal map and phased 12-month timeline", why: "Free, no vendor lock-in for the planning step itself", required: true, lastVerified: "2026-08" },
          { toolName: "HubSpot Marketing Hub", role: "CRM plus automation with native integrations for Phase 1-2", why: "Free tier covers CRM and basic automation, native integrations avoid the CSV-export trap from Step 2", required: true, lastVerified: "2026-08" },
          { toolName: "Zapier", role: "Auto-route RFQs from the CRM to regional reps in Phase 2", why: "Free tier covers 100 tasks/month, enough for RFQ routing at this stage", required: false, lastVerified: "2026-08" },
        ],
        paid: [],
        paidUpgradeNote: "Upgrade HubSpot's paid Marketing Hub tier and Zapier's paid plan only once RFQ volume outgrows the free tiers' contact and task limits.",
      },
      deliverable:
        "A 3-phase, 12-month martech rollout plan with named tools per phase, integration checkpoints, and which business goal each phase unlocks.",
      sampleOutput:
        "Concord Biotech, Year-1 Martech Rollout (excerpt)\n\nPhase 1 (Mo 1-3): Salesforce Essentials + GA4 + Brevo, CRM and analytics connected first\nPhase 2 (Mo 4-6): + Semrush for export-market SEO, + Buffer for LinkedIn distributor updates\nPhase 3 (Mo 7-12): + Segment CDP once contact volume passes 5,000, attribution reporting goes live",
      successCriteria: [
        "Maps all 3 stated goals to a specific tool category before naming any vendor",
        "Chooses the integration-native tool over the feature-richer one where the two conflict",
        "Produces a 3-phase timeline where later phases depend on data/tools established in earlier phases",
        "Free-tier tools alone would deliver Phase 1 and Phase 2",
      ],
      portfolioReady: true,
      stretch: "Add a Phase 4 (month 13+) that only unlocks once dealer contact volume crosses a stated CDP-justifying threshold.",
    },
  ],
  "optimizely-vwo": [
    {
      id: "optimizely-vwo-tool-fit-concord-biotech",
      tier: "mini",
      archetype: "head-to-head",
      title: "Budget vs Scale: Picking Between VWO and Optimizely",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given Concord Biotech's testing budget, team size, and technical capacity, apply the lesson's decision framework to choose between VWO and Optimizely and justify the call against the comparison table.",
      companyId: "concord-biotech",
      scenario:
        "You're the digital marketing manager at Concord Biotech, the Ahmedabad-based pharmaceutical API maker that listed on the NSE in August 2023 at a roughly $1.19B valuation. The B2B site's RFQ (request for quote) form converts at 2%, and leadership wants a formal A/B testing program before committing budget.",
      brief:
        "Score the company against the lesson's 'Choose VWO if / Choose Optimizely if' checklists, using the real budget and team facts, then pick one platform and justify it in writing.",
      mode: "diagnostic",
      conceptsCovered: [
        "Matching testing platform choice to budget and team technical capacity",
        "Weighing feature differences between VWO and Optimizely against actual need",
      ],
      steps: [
        {
          stepId: "step-1-score-budget-and-team-fit",
          concept: "Matching testing platform choice to budget and team technical capacity",
          lessonAnchor: "choosing-the-right-tool",
          theoryRecap:
            "The lesson's decision flowchart routes on budget first: under $30,000/year with a small or non-technical team points to VWO; only a dedicated CRO team running 30+ tests a quarter with $36,000+/year budget justifies Optimizely.",
          question:
            "Concord Biotech has an $8,000/year CRO budget, a 2-person marketing team with no engineers, and plans to run roughly 6 tests this year on the RFQ form. Which platform does the framework point to?",
          toolName: "Google Sheets",
          where: "Build a 2-column scorecard: framework criterion vs company's actual answer.",
          procedure: [
            "List each 'Choose VWO if' and 'Choose Optimizely if' criterion from the lesson as a row",
            "Fill in Concord Biotech's real answer for each (budget $8,000/yr, no engineers, 6 tests planned)",
            "Count how many VWO-criteria vs Optimizely-criteria the company actually matches",
          ],
          outputSample:
            "VWO vs Optimizely Fit Scorecard, Concord Biotech\n\nBudget under $30k/yr? YES (VWO)\nNon-technical team? YES (VWO)\nFewer than 20 tests/quarter? YES, ~1.5/quarter (VWO)\nDedicated CRO + engineering team? NO (rules out Optimizely)\n\nScore: 3/3 VWO criteria met, 0/1 Optimizely criteria met.",
          healthy: "A clear majority match on one side, with the mismatched side ruled out by a hard constraint (no engineering team).",
          unhealthy: "Picking Optimizely because of its Gartner Leader badge without checking whether the team can actually run enterprise-grade concurrent tests.",
          interpret: "The budget alone would already rule out Optimizely, the team-size and test-volume answers just confirm it.",
          soWhat: [
            { symptom: "Leadership is drawn to Optimizely's brand recognition", action: "Present the scorecard showing 0/1 Optimizely-fit criteria met before any vendor call", effort: "30 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-check-feature-gap-against-need",
          concept: "Weighing feature differences between VWO and Optimizely against actual need",
          lessonAnchor: "optimizely-vs-vwo-side-by-side-comparison",
          theoryRecap:
            "The comparison table shows VWO includes built-in heatmaps and a free trial, Optimizely needs a third-party heatmap tool and has no free trial, and VWO's Bayesian statistics give faster reads while Optimizely's frequentist approach is more conservative.",
          question:
            "The RFQ form has never been heat-mapped. Does that change which platform's included features actually save Concord Biotech money?",
          toolName: "VWO",
          where: "Check VWO's Insights module (heatmaps, session recordings) against having to buy Hotjar or Crazy Egg separately if choosing Optimizely.",
          procedure: [
            "Confirm the RFQ page has no existing heatmap data",
            "Price a standalone heatmap tool (roughly $40-100/mo) that Optimizely users would need to add",
            "Add that avoided cost to the case for VWO, since its heatmaps are bundled",
          ],
          outputSample:
            "Feature Gap Cost Check\n\nOptimizely path: A/B testing (won't fit budget anyway) + separate heatmap tool ~$780/yr\nVWO path: A/B testing + heatmaps + session recordings bundled in one $2,376/yr plan\n\nBundled heatmaps close the exact 'why is the form converting at 2%' diagnostic gap the team currently has no tool for.",
          healthy: "The bundled feature directly answers an open question the team already has (why the form underperforms).",
          unhealthy: "Treating heatmaps as a nice-to-have instead of the diagnostic tool that explains WHY before testing WHAT to change.",
          interpret: "VWO's bundled heatmaps aren't just cheaper, they fill the exact gap between 'conversion is low' and 'here's a specific hypothesis to test.'",
          soWhat: [
            { symptom: "Team has no idea why the RFQ form underperforms before testing", action: "Run VWO's heatmap/session-recording tools for 2 weeks before writing the first test hypothesis", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Build the fit scorecard", why: "Free, no signup needed to run the comparison itself", required: true, lastVerified: "2026-08" },
          { toolName: "VWO", role: "Free trial to confirm heatmap/session-recording fit before purchase", why: "Free trial available, unlike Optimizely, matches the mini-budget constraint", required: false, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable:
        "A completed fit scorecard plus a 3-sentence written recommendation naming VWO or Optimizely and citing the specific budget/team/feature reasons.",
      sampleOutput:
        "Five-Star Business Finance, Testing Platform Recommendation\n\nRecommendation: VWO. Budget ($6,500/yr) is under the $30k threshold, the 3-person growth team has no dedicated engineers, and VWO's bundled heatmaps close the existing gap in understanding why the loan-application form underperforms before the first test even launches.",
      successCriteria: [
        "Scores the company against both the VWO and Optimizely fit criteria from the lesson",
        "Correctly rules out Optimizely on the hard budget/team constraint",
        "Names a specific bundled-feature reason (heatmaps) beyond price alone",
        "Recommendation is 3 sentences citing real numbers from the scenario",
      ],
      portfolioReady: true,
    },
    {
      id: "optimizely-vwo-test-report-teardown-jyoti-cnc",
      tier: "core",
      archetype: "teardown",
      title: "Spot the Broken Test: Auditing an A/B Test Report Before It Ships",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a synthetic A/B test report for Jyoti CNC Automation's dealer-inquiry form, apply the lesson's 'Common Mistakes' checklist to find every methodology defect before the 'winning' variation gets rolled out to 100% of traffic.",
      companyId: "jyoti-cnc-automation",
      scenario:
        "You're the CRO analyst reviewing a test report a junior teammate wrote up for Jyoti CNC Automation's dealer-inquiry landing page, tested in VWO. The team wants to ship the 'winner' this week.",
      brief:
        "Read the report closely against the lesson's 5 most common test-killing mistakes and flag every one present, including any that look fine on the surface.",
      mode: "teardown",
      conceptsCovered: [
        "Diagnosing methodology defects in an A/B test report before shipping a false winner",
      ],
      teardownItems: [
        {
          itemId: "jyoti-cnc-dealer-form-test-report",
          specimenSource: "synthetic-realistic",
          prompt:
            "Read the test report below for the Jyoti CNC dealer-inquiry form test. Find every methodology defect that would make the declared 'winner' unreliable, using the lesson's Common Mistakes checklist.",
          specimen:
            "=== TEST REPORT: Dealer Inquiry Form, Variation B ===\n" +
            "Test duration: Monday to Thursday (3 days).\n" +
            "Hypothesis: 'Let's try changing the submit button to green.'\n" +
            "Original goal: form submissions.\n" +
            "Note: form submissions were flat through day 2, so on day 3 we switched to tracking scroll depth instead, and Variation B is winning on that metric.\n" +
            "Results (aggregate, all traffic): Variation B is up 15% over Control. We did not check desktop vs mobile separately.\n" +
            "Statistical significance: not calculated, but the lift looks clearly real.\n" +
            "Traffic split: 50/50 between Control and Variation B, applied correctly from launch.\n" +
            "Recommendation: Ship Variation B to 100% of traffic this week.",
          answerKey: [
            {
              defect: "Test ran only 3 days (Monday to Thursday), not a full business cycle",
              severity: "critical",
              whyItMatters:
                "The lesson's Common Mistakes section requires at least one full business cycle, usually two weeks minimum, because Monday traffic differs from Friday traffic; a 3-day read risks calling a day-of-week pattern a real winner.",
              lessonRef: "Common Mistakes That Kill Test Results: Stopping a test too early",
              owner: "you",
            },
            {
              defect: "Goal metric changed mid-test from form submissions to scroll depth",
              severity: "critical",
              whyItMatters:
                "Changing the goal after launch invalidates the test entirely, per the lesson, since the switch was made specifically because the original goal wasn't moving.",
              lessonRef: "Common Mistakes That Kill Test Results: Changing the goal metric mid-test",
              owner: "you",
            },
            {
              defect: "No statistical significance calculated, 'clearly winning' used instead of a number",
              severity: "critical",
              whyItMatters:
                "Without a calculated significance percentage (the lesson's 95% threshold), a 15% aggregate difference could easily be random noise.",
              lessonRef: "Statistical Significance",
              owner: "you",
            },
            {
              defect: "Results reported only in aggregate, no device or traffic-source segmentation",
              severity: "moderate",
              whyItMatters:
                "The lesson warns aggregate-only results can hide a real device-specific effect, or mask that mobile is actually losing while desktop is winning.",
              lessonRef: "Common Mistakes That Kill Test Results: Not segmenting results",
              owner: "you",
            },
            {
              defect: "Hypothesis is 'let's try a green button' with no stated reason",
              severity: "cosmetic",
              whyItMatters:
                "The lesson defines a real hypothesis as change plus expected result plus reason; a color guess with no reasoning means even a real win teaches nothing repeatable.",
              lessonRef: "Common Mistakes That Kill Test Results: Ignoring the quality of your hypothesis",
              owner: "you",
            },
          ],
          distractors: [
            "The button changed from grey to green (a valid, testable visual change)",
            "The test used VWO's visual editor to build the variation (the correct, standard workflow)",
            "Both Control and Variation B received a 50/50 traffic split (this part of the setup was done correctly)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Track which of the 5 common mistakes appear in the report", why: "Free checklist surface, no VWO/Optimizely account needed to do the review", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable:
        "An annotated copy of the test report with all defects flagged, mapped to the specific 'Common Mistakes' category each one violates, and a recommendation on whether to ship.",
      sampleOutput:
        "Concord Biotech, RFQ Form Test Report Review (excerpt)\n\nFlagged: goal metric changed from 'form submits' to 'time on page' on day 4 (Changing the goal metric mid-test). Flagged: no significance % reported (Statistical Significance). Not flagged: 50/50 traffic split was correctly implemented.\n\nRecommendation: Do not ship. Re-run with the original goal metric locked for a full 2-week cycle.",
      successCriteria: [
        "Identifies all 3 critical defects (short duration, goal switch, missing significance)",
        "Identifies the moderate segmentation defect",
        "Identifies the cosmetic hypothesis-quality defect",
        "Does not flag any of the 3 distractors as defects",
        "Final recommendation is 'do not ship' with a stated reason",
      ],
      portfolioReady: true,
    },
  ],

  "seo-tools": [
    {
      id: "seo-tools-migration-audit-tool-fit",
      tier: "mini",
      archetype: "head-to-head",
      title: "Ahrefs or Screaming Frog: Picking the Right Crawler Before a Migration",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a mid-size ecommerce migration with a fixed one-tool budget this month, decide whether Ahrefs or Screaming Frog SEO Spider is the right choice to catch redirect and technical issues before launch, using the lesson's four-job framework.",
      companyId: "flipkart",
      scenario:
        "You're on Flipkart's SEO team ahead of a category-page URL restructure touching roughly 12,000 pages. You can expense one new SEO tool this month, not two.",
      brief:
        "Match each tool's actual core job, not its marketing, to what this migration needs: a full crawl of every URL checking redirects, status codes, and duplicate titles before launch.",
      mode: "diagnostic",
      conceptsCovered: [
        "Matching a tool's core job to the actual task instead of its brand recognition",
      ],
      steps: [
        {
          stepId: "step-1-match-tool-to-job",
          concept: "Matching a tool's core job to the actual task instead of its brand recognition",
          lessonAnchor: "what-it-actually-is",
          theoryRecap:
            "The lesson splits SEO tools into four distinct jobs: keyword research, technical site audits, rank tracking, and backlink/competitor analysis. Ahrefs' core strength is its roughly 30-trillion-link backlink index; Screaming Frog is a desktop crawler built specifically to walk every URL on a site and report redirects, status codes, and duplicate content.",
          question:
            "The migration needs every one of 12,000 URLs crawled for broken redirects and duplicate titles before launch. Ahrefs or Screaming Frog SEO Spider is the better fit this month?",
          toolName: "Screaming Frog SEO Spider",
          where: "Screaming Frog SEO Spider desktop app, Spider mode pointed at the staging URL list",
          procedure: [
            "List the actual job: full-site crawl for redirects, status codes, duplicate titles, not backlink or keyword research",
            "Open Screaming Frog's free tier and crawl the staging site (free covers up to 500 URLs, enough to sample-test the migration logic before paying)",
            "Filter the Response Codes tab for 3xx and 4xx, export the list of broken and looping redirects",
            "Filter Page Titles for Duplicate, export the list of pages needing a unique title before launch",
            "Compare cost: Screaming Frog's paid tier is 259 GBP/yr for unlimited URLs; Ahrefs Site Audit access sits inside a $129/mo plan built around backlink and keyword tools not needed this month",
          ],
          outputSample:
            "Staging crawl, sample export (18 of 412 flagged rows)\n\nREDIRECT CHAINS (3xx loops)\n  /electronics/mobiles-old -> /electronics/mobiles -> /electronics/mobiles/  (2-hop loop)\n  ...16 more rows\n\nDUPLICATE TITLES\n  /electronics/mobiles/samsung <-> /electronics/mobiles/samsung-phones  (identical title tag)\n  ...14 more rows",
          healthy: "All 412 flagged URLs fixed or collapsed to a single final destination before the migration goes live.",
          unhealthy: "Redirect chains ship live, each hop costs crawl budget and link equity, and duplicate titles confuse which page Google indexes.",
          interpret:
            "Screaming Frog's crawler is purpose-built for this exact job at a fraction of Ahrefs' cost, because the job is crawling, not backlink or keyword analysis. Ahrefs earns its subscription later, once ongoing backlink and competitor tracking becomes the priority.",
          soWhat: [
            {
              symptom: "Migration budget going to the wrong-shaped tool",
              action: "Match the tool to the job category first, price second",
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
            role: "Crawl the staging site for redirects, status codes, and duplicate titles",
            why: "Free tier covers up to 500 URLs, purpose-built for exactly this job",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Track the fix list exported from the crawl",
            why: "Free, no account friction for a shared fix-priority list",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Screaming Frog SEO Spider",
            role: "Unlimited-URL crawl once the site exceeds the 500-URL free cap",
            why: "259 GBP/yr, still the job-matched tool, just removes the URL ceiling",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "Only upgrade Screaming Frog once the site crosses 500 URLs; Ahrefs is a different job (backlinks and keywords) and isn't a substitute purchase for this task.",
      },
      deliverable:
        "A prioritized fix list of every redirect chain and duplicate title found in the staging crawl, ready for a developer ticket before the migration goes live.",
      sampleOutput:
        "Airbnb, staging migration crawl (excerpt)\n\nREDIRECT CHAINS\n  1. /rooms/old-listing-id -> /rooms/listing-id -> /rooms/listing-id/details (2-hop loop)\n  ...9 more rows\n\nDUPLICATE TITLES\n  1. /experiences/tokyo <-> /experiences/tokyo-city (identical title tag)\n  ...6 more rows\n\nFix priority: collapse all loops to a single 301 hop before the redirect map ships.",
      successCriteria: [
        "Correctly identifies Screaming Frog as the job-matched tool for a pre-migration crawl",
        "Produces a complete list of redirect chains and duplicate titles from the free-tier crawl",
        "Prices out the paid-tier decision only if URL count exceeds the free 500-URL cap",
      ],
      portfolioReady: true,
    },
    {
      id: "seo-tools-subscription-stack-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Subscription Teardown: Auditing DoorDash's SEO Tool Stack for Waste",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a synthetic monthly SEO tool bill, apply the lesson's tool-job framework and Common Mistakes list to flag genuinely redundant subscriptions versus tools doing distinct, justified work.",
      companyId: "doordash",
      scenario:
        "You've inherited DoorDash's local-market SEO budget. The previous marketer subscribed to nearly every tool in the lesson without ever checking for overlap.",
      brief:
        "Read the monthly bill like an auditor: which tools do the same job twice, which free setup is missing entirely, and which line item is the fastest win to cut.",
      mode: "teardown",
      conceptsCovered: ["Common Mistakes", "Key Takeaways", "How It Works / The Playbook"],
      teardownItems: [
        {
          itemId: "item-1-monthly-bill",
          specimen:
            "DoorDash Local SEO, Monthly Tool Bill\n\n1. Ahrefs Standard ......... $129/mo\n2. Semrush Guru ............ $249.95/mo\n3. Moz Pro .................. $99/mo (Medium plan)\n4. AccuRanker (20 keywords) . $129/mo\n5. Surfer SEO ............... $89/mo\n6. Ubersuggest .............. $12/mo\n7. Sitebulb .................. $13.50/mo\n\nTotal: $721.45/mo\nGoogle Search Console: not connected\nGoogle Analytics 4: not connected",
          specimenSource: "synthetic-realistic",
          prompt:
            "This team pays $721.45/month across 7 tools and has never connected the two free ones. Using the lesson's four-job framework, which line items are redundant, which is the fastest cut, and what should have been set up first, for $0, before any of this was purchased?",
          answerKey: [
            {
              defect: "GSC and GA4 were never connected despite $721.45/mo in paid tools",
              severity: "critical",
              whyItMatters: "GSC and GA4 are free and show what's already working; every paid tool here is guessing without that baseline data.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
            {
              defect: "Ahrefs and Semrush both run at the same time ($129 + $249.95/mo)",
              severity: "critical",
              whyItMatters: "Both cover backlink analysis and keyword research; the lesson says pick one, not both.",
              lessonRef: "key-takeaways",
              owner: "you",
            },
            {
              defect: "AccuRanker tracking only 20 keywords at $129/mo",
              severity: "moderate",
              whyItMatters: "Ahrefs and Semrush both include rank tracking; a dedicated tracker only earns its cost once daily accuracy at scale matters, not for 20 keywords.",
              lessonRef: "how-it-works-the-playbook",
              owner: "you",
            },
            {
              defect: "Moz Pro running alongside Ahrefs and Semrush",
              severity: "moderate",
              whyItMatters: "Domain Authority, Moz's core selling point, is a third-party relative score, not a Google ranking factor, and Ahrefs/Semrush already cover the rest of Moz Pro's feature set.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
          ],
          distractors: [
            "Sitebulb subscription ($13.50/mo)",
            "Surfer SEO subscription ($89/mo)",
            "Ubersuggest subscription ($12/mo)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the line-item audit table and cut list",
            why: "Free, no account friction",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Search Console",
            role: "Reference for what the missing free setup would have shown",
            why: "Confirms the baseline data the paid tools are guessing without",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A cut list ranking the 7 subscriptions from 'cut now' to 'keep,' plus a one-line note on what free setup was skipped.",
      sampleOutput:
        "Flipkart Local SEO, subscription cut list (excerpt)\n\nCUT NOW: Semrush Guru ($249.95/mo), duplicates Ahrefs backlink/keyword coverage already in use\nCUT NOW: AccuRanker ($129/mo), only 20 keywords tracked, Ahrefs Rank Tracker already covers this\nKEEP: Sitebulb ($13.50/mo), only tool doing visual crawl reporting for client presentations\nMISSING (add first, $0): Google Search Console + GA4, neither is connected",
      successCriteria: [
        "Flags GSC/GA4 as the missing free baseline before any paid tool",
        "Identifies the Ahrefs + Semrush overlap as the primary redundancy",
        "Does not flag Sitebulb, Surfer, or Ubersuggest as redundant, since each does a distinct job",
      ],
      portfolioReady: true,
    },
  ],
  "paid-ads-tools": [
    {
      id: "paid-ads-tools-stack-recommendation-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Building a $5K/Month Tool Stack: What to Adopt Now vs Defer",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a lean, single-person paid media budget of $5,000/month across Google and Meta, build a one-page tool-adoption plan that separates what to use today for free from what to defer until spend justifies the cost.",
      companyId: "airbnb",
      scenario:
        "Early on, before Airbnb's marketing team had automation headcount, one growth marketer had to run Google and Meta campaigns solo with almost no software budget.",
      brief:
        "Use the lesson's own $20K/month automation threshold and its free-tools-first list to build a stack recommendation a solo marketer at this budget could actually defend.",
      mode: "build",
      conceptsCovered: ["Sequencing tool adoption by spend threshold, not by feature list"],
      steps: [
        {
          stepId: "step-1-build-stack-plan",
          concept: "Sequencing tool adoption by spend threshold, not by feature list",
          lessonAnchor: "key-takeaways",
          theoryRecap:
            "The lesson's own Key Takeaways say five free tools cover 80% of beginner needs (Google Ads Editor, Meta Ads Manager, Microsoft Ads Editor, Keyword Planner, TikTok Creative Center), and that automation and attribution tools like Optmyzr and Triple Whale only pay for themselves past roughly $20K/month in spend.",
          question:
            "At $5,000/month spend and one person managing the account, which of the 10 tools go in the plan now, and which get an explicit 'defer until $20K/month' note?",
          toolName: "Google Sheets",
          where: "A single Google Sheet with two columns: Adopt Now (free) and Defer Until Scale",
          procedure: [
            "List every free first-party tool from the lesson: Google Ads Editor, Meta Ads Manager, Google Keyword Planner, Microsoft Advertising Editor, TikTok Ads Manager/Creative Center",
            "Mark all five 'Adopt Now,' $0 cost, no scale threshold required",
            "List the paid tools: Semrush PPC Toolkit ($139.95/mo), SpyFu ($39/mo), Optmyzr ($209/mo), AdEspresso ($49/mo), Triple Whale/Northbeam (~$129/mo)",
            "Apply the lesson's own $20K/month automation threshold: at $5K/month spend, mark Optmyzr and Triple Whale/Northbeam 'Defer'",
            "Keep one low-cost competitive-intel option, SpyFu at $39/mo, as the one paid line item worth adding now, since it's the cheapest way to see a competitor's ad copy and spend",
          ],
          outputSample:
            "Solo-marketer stack plan ($5K/mo spend)\n\nADOPT NOW ($0)\n  Google Ads Editor, Meta Ads Manager, Google Keyword Planner, Microsoft Advertising Editor, TikTok Creative Center\n\nADOPT NOW (low cost)\n  SpyFu ($39/mo), competitor ad copy and spend visibility\n\nDEFER UNTIL ~$20K/mo\n  Optmyzr ($209/mo), Triple Whale/Northbeam (~$129/mo), Semrush PPC Toolkit ($139.95/mo), AdEspresso ($49/mo)",
          healthy: "Five free tools plus one $39/mo line item, total software spend under 1% of ad spend.",
          unhealthy: "Signing up for Optmyzr or Triple Whale at $5K/month spend, where the automation and attribution overhead costs more than the inefficiency it claims to fix.",
          interpret: "Tool adoption should follow the same spend-threshold logic the lesson lays out, not a checklist of everything in the top-10 list.",
          soWhat: [
            {
              symptom: "Software spend outpacing ad spend at a lean budget",
              action: "Defer any tool the lesson flags as a >$20K/mo tool until spend crosses that line",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Ads Editor",
            role: "Bulk-manage the Google Ads side of the $5K/mo account",
            why: "Free, and essential once past a handful of campaigns",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Meta Ads Manager",
            role: "Native build-and-launch console for the Meta side of spend",
            why: "Free, first-party, no substitute needed at this budget",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Build and share the Adopt Now vs Defer stack plan",
            why: "Free, no account friction",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "SpyFu",
            role: "Low-cost competitor ad-copy and spend visibility",
            why: "At $39/mo it's the one paid line item that clears the $20K/mo automation threshold test",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "SpyFu at $39/mo is the one paid line item worth adding below the $20K/month automation threshold; Optmyzr and Triple Whale/Northbeam should wait until spend justifies their cost.",
      },
      deliverable:
        "A one-page Adopt Now vs Defer tool stack plan with total monthly software cost calculated against the $5,000 ad budget.",
      sampleOutput:
        "DoorDash-style solo-marketer stack plan ($5,000/mo spend)\n\nADOPT NOW ($0)\n  Google Ads Editor, Meta Ads Manager, Google Keyword Planner, Microsoft Advertising Editor, TikTok Creative Center\n\nADOPT NOW (low cost)\n  SpyFu ($39/mo)\n\nDEFER UNTIL ~$20K/mo\n  Optmyzr, Triple Whale/Northbeam, Semrush PPC Toolkit, AdEspresso\n\nTotal software cost: $39/mo against $5,000/mo ad spend (0.78%)",
      successCriteria: [
        "Correctly places all 5 free tools in 'Adopt Now'",
        "Applies the lesson's ~$20K/month threshold to defer Optmyzr and Triple Whale/Northbeam",
        "Calculates total software cost as a percentage of ad spend",
      ],
      portfolioReady: true,
    },
    {
      id: "paid-ads-tools-redundant-stack-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Redundant Stack: Tearing Down HelloFresh's Paid Ads Tool Bill",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a synthetic paid-ads tool bill for a scaled ecommerce account, apply the lesson's Common Mistakes list to flag genuine redundancy, missing attribution, and the fastest cuts.",
      companyId: "hellofresh",
      scenario:
        "HelloFresh's performance marketing team has scaled past $20K/month in spend and started layering on tools, but nobody has audited the bill since.",
      brief:
        "Read the bill like an auditor: which tools duplicate the same competitive-intel job, which platform-reported number can't be trusted without an attribution layer, and what's missing.",
      mode: "teardown",
      conceptsCovered: ["Common Mistakes"],
      teardownItems: [
        {
          itemId: "item-1-monthly-bill",
          specimen:
            "HelloFresh Performance Marketing, Monthly Tool Bill\n\n1. Semrush PPC Toolkit ........ $139.95/mo\n2. SpyFu ...................... $39/mo\n3. Optmyzr .................... $209/mo\n4. AdEspresso by Hootsuite .... $49/mo\n5. TikTok Ads Manager ......... $0 (active spend, no Creative Center research)\n\nMeta reported ROAS (in-platform): 4.2x\nBlended ROAS (spreadsheet, post-iOS 14.5): unknown, never calculated\n\nTotal: $436.95/mo",
          specimenSource: "synthetic-realistic",
          prompt:
            "The team trusts Meta's in-platform 4.2x ROAS number and has never built a blended, post-attribution view. Using the lesson's Common Mistakes list, what's redundant on this bill, what's dangerously missing, and what free tool is being ignored?",
          answerKey: [
            {
              defect: "No post-attribution layer (Triple Whale, Northbeam, or even a GA4 + spreadsheet stack) despite quoting Meta's in-platform ROAS as fact",
              severity: "critical",
              whyItMatters: "Meta's in-platform ROAS over-reports performance after iOS 14.5; without a blended view the team can't trust its own numbers when deciding where to spend.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
            {
              defect: "Semrush PPC Toolkit and SpyFu running at the same time for competitive intel",
              severity: "moderate",
              whyItMatters: "The lesson says pick one competitive-intel tool until you actually use it daily; both here do overlapping ad-copy and keyword spying.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
            {
              defect: "TikTok Ads Manager is live with real spend but TikTok Creative Center research was never used",
              severity: "moderate",
              whyItMatters: "Creative Center is free competitive research on trending ads; skipping it means launching TikTok spend blind to what's already working in the category.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
          ],
          distractors: ["Optmyzr subscription ($209/mo)", "AdEspresso subscription ($49/mo)"],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Build the bill audit and cut/keep/fix list",
            why: "Free, no account friction",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "TikTok Ads",
            role: "Access the free Creative Center research the account is missing",
            why: "Already the platform in use for spend, Creative Center is bundled in for free",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A cut/keep/fix list for the bill: which subscription to cut, which platform number to stop trusting, and the one free tool to start using.",
      sampleOutput:
        "Airbnb-style performance team, tool bill teardown (excerpt)\n\nFIX FIRST (not a subscription): stop trusting in-platform Meta ROAS, build a blended post-iOS-14.5 view before the next budget call\nCUT: SpyFu ($39/mo), keep Semrush PPC Toolkit only, drop the duplicate competitive-intel tool\nMISSING ($0): TikTok Creative Center, never opened despite live TikTok spend",
      successCriteria: [
        "Flags the missing post-attribution layer as the critical issue, not a nice-to-have",
        "Identifies the Semrush + SpyFu overlap as the redundant line item",
        "Does not flag Optmyzr or AdEspresso as redundant, since neither duplicates another tool on the bill",
      ],
      portfolioReady: true,
    },
  ],

  "social-media-tools": [
    {
      id: "social-media-tools-buffer-vs-later-headtohead",
      tier: "mini",
      archetype: "head-to-head",
      title: "Buffer vs. Later: Picking ThredUp's Instagram/TikTok Scheduler",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given ThredUp's visual, Instagram- and TikTok-heavy resale content and a small marketing team, compare Buffer and Later feature-by-feature and pick the scheduler that fits the content type and team size, not just the cheapest option.",
      companyId: "thredup",
      scenario:
        "You're a marketing coordinator on ThredUp's small social team. Every week you post 15+ outfit-flip Reels and TikToks plus a handful of LinkedIn/X posts about resale sustainability data, and right now everything gets posted manually from a phone.",
      brief:
        "Compare Buffer and Later against ThredUp's actual content mix, not a generic feature list, then justify the pick with one clear reason.",
      mode: "diagnostic",
      conceptsCovered: ["Matching a scheduler's visual-planning strength to your content type"],
      steps: [
        {
          stepId: "step-1-visual-vs-general-scheduler",
          concept: "Matching a scheduler's visual-planning strength to your content type",
          lessonAnchor: "how-to-pick-your-stack",
          theoryRecap:
            "The lesson's stack-picking guide splits schedulers by strength: Buffer for a lean, general multi-channel queue; Later for visual, Instagram/TikTok-first grid planning with a drag-and-drop feed preview.",
          question:
            "ThredUp posts 15+ visual Reels/TikToks weekly plus a few text-first LinkedIn/X posts. Which scheduler's core strength actually matches that mix?",
          toolName: "Google Sheets",
          where:
            "Build a 2-column comparison sheet: Buffer's published feature list vs Later's published feature list, scored against ThredUp's actual weekly post mix.",
          procedure: [
            "List ThredUp's real weekly post mix: 15 Reels/TikToks, 4 LinkedIn/X text posts",
            "Row 1: grid preview, no on Buffer, yes on Later",
            "Row 2: pricing, Buffer $6/mo per channel, Later a flat monthly tier",
            "Row 3: link-in-bio tool, no on Buffer, yes on Later",
            "Score each tool against the 15:4 visual-to-text ratio, not against a generic checklist",
          ],
          outputSample:
            "ThredUp scheduler comparison\n\nWeekly mix: 15 Reels/TikTok, 4 LinkedIn/X\n\n              Buffer          Later\nGrid preview   No              Yes\nLink-in-bio    No              Yes\nPricing        $6/channel      Flat tier\nText posts     Clean queue     Secondary UI\n\nVerdict: Later wins on the 15:4 visual-heavy mix; Buffer would be the pick if the ratio flipped toward text-first channels.",
          healthy: "The pick is justified by the actual 15:4 post-type ratio, not by price alone.",
          unhealthy: "Picking Buffer because it's cheaper, then fighting a scheduler with no grid preview for 15 weekly Reels.",
          interpret:
            "A scheduler comparison only means something once it's scored against your real weekly content mix; a generic 'Buffer vs Later' review answers a different team's question.",
          soWhat: [
            {
              symptom: "Team picked the cheaper scheduler but keeps reshuffling the Instagram grid manually anyway",
              action: "Re-score the pick against the actual weekly post-type ratio, not the price sheet",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Buffer", role: "Baseline scheduler being compared", why: "Free for 3 channels, no signup friction for a side-by-side trial", required: true, lastVerified: "2026-08" },
          { toolName: "Later", role: "Visual scheduler being compared", why: "Free tier covers 1 social set, enough to test the grid preview", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Build the comparison scoring sheet", why: "Free, no account friction", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A one-page scheduler comparison scored against ThredUp's real weekly post mix, ending in a single justified pick.",
      sampleOutput:
        "Instacart social team scheduler pick (excerpt)\n\nWeekly mix: 3 recipe Reels, 6 promo/X posts\n\n              Buffer          Later\nGrid preview   No              Yes\nPricing        $6/channel      Flat tier\nText posts     Clean queue     Secondary UI\n\nVerdict: Buffer wins here, the mix is text/promo-heavy (6:3), the opposite of ThredUp's ratio, so the same two tools produce a different correct answer.",
      successCriteria: [
        "Comparison is scored against the team's actual weekly post-type ratio, not a generic feature list",
        "Final pick states one clear reason tied to that ratio",
      ],
      portfolioReady: true,
    },
    {
      id: "social-media-tools-listening-gap-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Missing Layer: Auditing Coinbase's Social Stack for a Listening Gap",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Audit a reputation-sensitive brand's current social stack (publishing + creative only) against the lesson's team-size pricing table, and decide whether the risk profile justifies adding a listening tool now.",
      companyId: "coinbase",
      scenario:
        "You're auditing Coinbase's social media stack. Today it's Hootsuite for publishing and Canva for creative, no listening tool, in a category where a single viral complaint about a frozen account can move faster than any scheduled post.",
      brief:
        "Decide, using the lesson's own mid-market pricing band and Common Mistakes warnings, whether Coinbase's current 2-tool stack has a gap worth closing now.",
      mode: "diagnostic",
      conceptsCovered: ["Recognizing when a stack's missing layer is a real risk, not just a nice-to-have"],
      steps: [
        {
          stepId: "step-1-listening-gap-check",
          concept: "Recognizing when a stack's missing layer is a real risk, not just a nice-to-have",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Common Mistakes section warns against both extremes: buying enterprise listening before you need it, and skipping listening entirely so you miss conversations already happening about your brand.",
          question:
            "Coinbase runs Hootsuite (publishing) plus Canva (creative), no listening. Given the mid-market $500-2,000/month pricing band and a reputation-sensitive category, is that gap acceptable or urgent?",
          toolName: "Google Sheets",
          where: "Build a 2-row risk table: what a listening tool would catch vs. what the current 2-tool stack already catches.",
          procedure: [
            "List what Hootsuite + Canva actually cover: scheduled posts and creative assets only",
            "List what neither tool catches: unscheduled complaint threads, competitor mentions, category-wide FUD",
            "Check the mid-market pricing band ($500-2,000/month) against Coinbase's scale to confirm budget fit",
            "Name the specific risk: a frozen-account complaint thread going viral with zero brand visibility until hours later",
          ],
          outputSample:
            "Coinbase stack audit\n\nCovered today: scheduled posts (Hootsuite), creative assets (Canva)\nNot covered: unscheduled complaint threads, competitor mentions, category FUD\n\nRisk: reputation-sensitive fintech, a viral 'my account is frozen' thread compounds for hours with zero brand visibility\nBudget check: mid-market band ($500-2,000/mo) fits an exchange at Coinbase's scale\n\nVerdict: gap is urgent, not nice-to-have, add a listening tool this quarter.",
          healthy: "The team adds a listening tool because a specific, named risk (a viral complaint thread) justifies the cost.",
          unhealthy: "Buying Sprinklr because it's the biggest name on the list, with no one assigned to read the dashboard weekly, the lesson's own named mistake.",
          interpret:
            "The lesson's mistake list cuts both ways: the fix for 'bought enterprise too early' isn't 'never buy listening', it's 'buy it when a specific risk justifies it and someone owns reading it'.",
          soWhat: [
            {
              symptom: "A stack has no listening layer in a reputation-sensitive category",
              action: "Name the specific risk a listening gap creates before pricing a fix",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Build the risk/coverage audit table", why: "Free, no account friction", required: true, lastVerified: "2026-08" },
          {
            toolName: "Hootsuite",
            role: "Existing publishing tool being audited",
            why: "Free trial lets you confirm what its listening add-on would and wouldn't cover",
            required: false,
            fallback: "Read Hootsuite's published feature list instead of trialing it",
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A one-page stack audit naming the specific risk a listening gap creates, with a budget-fit check against the lesson's pricing bands.",
      sampleOutput:
        "Sea Limited (Shopee) social stack audit (excerpt)\n\nCovered today: scheduled posts (Later), creative assets (Canva)\nNot covered: seller complaint threads during flash-sale spikes\n\nRisk: a viral 'my order never arrived' thread during a flash sale compounds fast with no listening visibility\nBudget check: enterprise band ($2,000+/mo) fits Shopee's regional scale\n\nVerdict: gap is urgent during flash-sale windows specifically, staff a listening tool for those weeks at minimum.",
      successCriteria: [
        "Names a specific risk the listening gap creates, not a generic 'we should add listening'",
        "Checks the pick against the lesson's own pricing bands",
      ],
      portfolioReady: true,
    },
  ],
  "content-marketing-tools": [
    {
      id: "content-marketing-tools-instacart-stack-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Building a 5-Tool Content-Ops Stack for Instacart's 2-Person Content Team",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a 2-person content team and a fixed monthly budget, build the lesson's minimum-viable 5-tool stack (research, writing, optimization, design, distribution), choosing one specific tool per job instead of stacking redundant tools.",
      companyId: "instacart",
      scenario:
        "You're the sole content strategist on Instacart's blog, working with one freelance writer. You publish 4 recipe/grocery-trend articles a month and have a $200/month tool budget.",
      brief: "Pick exactly one tool per job from the lesson's five-job framework, justify each pick against the $200 budget, and flag which job you're covering free.",
      mode: "build",
      conceptsCovered: ["Picking one tool per job instead of stacking redundant tools in the same job"],
      steps: [
        {
          stepId: "step-1-one-tool-per-job",
          concept: "Picking one tool per job instead of stacking redundant tools in the same job",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's ten-tool stack groups into five jobs: research, writing, optimization, design, and distribution. Its Common Mistakes section specifically warns against stacking two tools that do the same job, like running both Ahrefs and Semrush before hitting 100 articles a year.",
          question: "With a $200/month budget and 4 articles a month, which single tool covers each of the five jobs, and where can Instacart go free?",
          toolName: "Notion",
          where: "Build a 5-row stack sheet in Notion: job, chosen tool, monthly cost, running total.",
          procedure: [
            "Row 1, research: AnswerThePublic free tier, $0",
            "Row 2, writing: ChatGPT free tier for drafts, Grammarly free for grammar, $0",
            "Row 3, optimization: Surfer SEO one-article plan, roughly $59/mo",
            "Row 4, design: Canva free tier, $0",
            "Row 5, distribution: Buffer free tier (3 channels), $0",
            "Total against budget: roughly $59 of $200, leaving headroom instead of maxing the budget on redundant tools",
          ],
          outputSample:
            "Instacart content-ops stack, $200/mo budget\n\nJob            Tool                Cost\nResearch       AnswerThePublic     $0\nWriting        ChatGPT + Grammarly $0\nOptimization   Surfer SEO          $59\nDesign         Canva               $0\nDistribution   Buffer              $0\n\nTotal: $59/200 ($141 headroom for scaling past 4 articles/month)",
          healthy: "One tool per job, budget headroom left for scaling, not maxed out on day one.",
          unhealthy: "Buying both Ahrefs and Semrush 'to be safe' before hitting 100 articles a year, the lesson's own named mistake.",
          interpret:
            "A content-ops stack for a 2-person team should look boring: one tool per job, most of it free, budget held in reserve for the one job that actually needs a paid tool.",
          soWhat: [
            {
              symptom: "Monthly tool bill already near the ceiling with a 2-person team",
              action: "Audit for two tools doing the same job and cut one",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Notion", role: "Build and track the 5-job stack sheet", why: "Free plan covers a single-person workspace", required: true, lastVerified: "2026-08" },
          { toolName: "Canva", role: "Design job in the 5-tool stack", why: "Free tier covers blog headers and social graphics", required: true, lastVerified: "2026-08" },
          { toolName: "Buffer", role: "Distribution job in the 5-tool stack", why: "Free for 3 channels, enough for a 2-person team's promotion", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Frase", role: "Optimization job alternative to Surfer SEO", why: "Comparable content-scoring workflow if Surfer's plan doesn't fit the budget", required: false, lastVerified: "2026-08" },
        ],
        paidUpgradeNote:
          "The only job worth paying for at this scale is optimization (Surfer SEO or Frase); research, writing, design, and distribution all have a genuinely usable free tier at 4 articles a month.",
      },
      deliverable: "A 5-row content-ops stack sheet, one tool per job, with a running cost total against the $200 budget.",
      sampleOutput:
        "Sea Limited (Shopee) blog content-ops stack, $150/mo budget (excerpt)\n\nJob            Tool                Cost\nResearch       BuzzSumo            $0 (free tier)\nWriting        ChatGPT + Grammarly $0\nOptimization   Frase               $45\nDesign         Canva               $0\nDistribution   Buffer              $0\n\nTotal: $45/150, same one-tool-per-job pattern at a different budget ceiling.",
      successCriteria: [
        "Exactly one tool chosen per job, no redundant stacking",
        "Running total stays under the stated budget with headroom shown",
      ],
      portfolioReady: true,
    },
    {
      id: "content-marketing-tools-sea-limited-stack-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Teardown: Sea Limited's Overstuffed Content Tool Stack",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real-shaped 8-tool content stack description with redundant, unused, and underused pieces, identify which tools are genuine defects (waste, redundancy, gaps) versus which look wasteful but are actually justified.",
      companyId: "sea-limited",
      scenario:
        "You're reviewing Sea Limited's Shopee blog content stack before renewal season. The team has accumulated tools over three years with no one auditing the bill.",
      brief: "Read the stack description, flag the real defects with severity, and don't flag the two tools that look redundant but are actually justified.",
      mode: "teardown",
      conceptsCovered: ["Common Mistakes", "How It Works / The Playbook"],
      teardownItems: [
        {
          itemId: "item-1-shopee-stack-audit",
          specimen:
            "Shopee blog content stack (8 subscriptions, monthly renewal):\n1. Ahrefs, $199/mo, keyword research and backlink tracking\n2. Semrush, $140/mo, keyword research and topic clusters (used by a different regional team for competitor tracking)\n3. Surfer SEO, $89/mo, content scoring, last logged into 4 months ago\n4. Grammarly, $12/mo, grammar checks\n5. Canva, $0 (free tier), blog headers and social graphics\n6. Buffer, $30/mo (5 channels), distribution scheduling\n7. Notion, $0 (free tier), content calendar and briefs\n8. HubSpot, $890/mo, CMS, email, and CRM, used only for the blog CMS, no email or CRM features active",
          specimenSource: "synthetic-realistic",
          prompt: "Which of these 8 tools are real defects worth cutting or downgrading, and which two look wasteful but are actually justified? Assign severity to each real defect.",
          answerKey: [
            {
              defect: "Ahrefs and Semrush both budgeted for keyword research with no documented split of who owns which tool",
              severity: "moderate",
              whyItMatters:
                "The lesson's Common Mistakes section names this exact pattern: stacking two SEO tools that do the same job wastes $140-199/mo until the team crosses 100 articles a year.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
            {
              defect: "Surfer SEO paid at $89/mo with no login in 4 months",
              severity: "critical",
              whyItMatters: "An unused paid subscription is pure waste, the fastest cut on the list, no analysis needed beyond confirming the login gap.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
            {
              defect: "HubSpot at $890/mo used only for its CMS feature, with email and CRM modules paid for but inactive",
              severity: "critical",
              whyItMatters: "Paying full suite price for one-third of the product is the highest-dollar defect on the list; either activate the unused modules or downgrade to a CMS-only plan.",
              lessonRef: "how-it-works-the-playbook",
              owner: "you",
            },
          ],
          distractors: [
            "Canva on the free tier, looks cheap enough to ignore but is actually the correct free-tier pick per the lesson, not a defect",
            "Notion on the free tier for the content calendar, correctly free at this team size per the lesson's 'start free where you can' takeaway, not a defect",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [{ toolName: "Google Sheets", role: "Log each tool's cost, usage evidence, and verdict", why: "Free, no account friction", required: true, lastVerified: "2026-08" }],
        paid: [],
      },
      deliverable: "A defect list with severity ratings for the real waste in the stack, and an explicit note on the two tools that only look wasteful.",
      sampleOutput:
        "ThredUp content stack teardown (excerpt)\n\nCRITICAL: CoSchedule at $400/mo, calendar feature only, used by a team that already has a Notion calendar\nMODERATE: BuzzSumo and AnswerThePublic both budgeted for research with no owner split\nNOT A DEFECT: Buffer free tier for a 2-person team, correctly sized",
      successCriteria: [
        "Correctly flags the genuine waste (unused subscription, overlapping SEO tools, underused suite) with severity",
        "Does not flag the two free-tier tools that are actually correctly sized",
      ],
      portfolioReady: true,
    },
  ],

  "email-marketing-tools": [
    {
      id: "email-marketing-tools-esp-head-to-head",
      tier: "mini",
      archetype: "head-to-head",
      title: "Klaviyo vs. Mailchimp: The Head-to-Head Call for a Growing Subscription Brand",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given Rent the Runway's revenue stage, contact volume, and flow needs, weigh Klaviyo against Mailchimp on automation depth, e-commerce data fit, and cost at scale, then defend a single recommendation.",
      companyId: "rent-the-runway",
      scenario:
        "You're a lifecycle marketing coordinator at Rent the Runway. The team is re-evaluating its ESP as subscriber count and welcome/re-engagement flow complexity both grow past what the current tool handles well.",
      brief:
        "Score both platforms against the lesson's own decision framework (business model, automation need, budget) instead of picking on brand recognition or list price alone.",
      mode: "diagnostic",
      conceptsCovered: ["Matching ESP to business model and revenue stage, not brand recognition"],
      steps: [
        {
          stepId: "step-1-esp-comparison-matrix",
          concept: "Matching ESP to business model and revenue stage, not brand recognition",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's own choosing guide splits by business model: e-commerce stores under $1M graduate to Klaviyo around $500k revenue, while Mailchimp's automation is paywalled below its higher tiers.",
          question:
            "Rent the Runway runs subscription e-commerce with heavy behavioral triggers (cart, renewal, style-profile). At current contact volume, does the lesson's framework point to Klaviyo or Mailchimp, and why does list price alone mislead here?",
          toolName: "Google Sheets",
          where: "A blank sheet with rows for pricing, automation depth, data model fit, and deliverability reputation.",
          procedure: [
            "List both platforms' starting price at the account's real contact count, not the cheapest advertised tier",
            "Score automation depth: is behavioral triggering (renewal date, browse-without-rent) native or bolted on",
            "Score e-commerce data fit: does the platform natively model orders, SKUs, and CLV or just tags",
            "Flag the tier where automation gets paywalled on the cheaper option",
            "Write a one-line recommendation naming the deciding factor, not just the winner",
          ],
          outputSample:
            "ESP comparison, Rent the Runway lifecycle team\n\nKLAVIYO\n  Price at current volume: ~$45/mo higher than Mailchimp equivalent tier\n  Automation: native e-commerce triggers (browse, renewal, CLV-based segments)\n  Data model: order + SKU level, built for subscription behavior\n\nMAILCHIMP\n  Price at current volume: lower sticker price\n  Automation: paywalled above the Standard tier for multi-step journeys\n  Data model: contact + tag based, no native order/CLV modeling\n\nRECOMMENDATION: Klaviyo. The renewal and browse-abandonment flows this team needs are native on Klaviyo and paywalled or absent on Mailchimp's comparable tier, the price gap buys back automation Mailchimp would charge more for anyway.",
          healthy:
            "Recommendation names automation depth and data model fit as the deciding factor, price is acknowledged but not the sole axis.",
          unhealthy:
            "Recommendation picks Mailchimp because it's 'the tool everyone knows' or because the sticker price is lower, without checking what's paywalled.",
          interpret:
            "A cheaper ESP that can't run the flows the business actually needs isn't cheaper, it's a second migration project six months out.",
          soWhat: [
            {
              symptom: "Team is comparing ESPs on advertised starting price only",
              action: "Re-price both platforms at the account's real, current contact count before comparing",
              effort: "5 min",
            },
            {
              symptom: "Automation needs aren't listed anywhere in the comparison",
              action: "Add a row scoring whether each required flow is native, bolted-on, or paywalled",
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
            role: "Build the side-by-side pricing and automation comparison matrix",
            why: "No account needed, sortable, and easy to share with a manager for sign-off",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page ESP comparison matrix scoring pricing, automation depth, and data model fit at the account's real contact volume, ending in a single named recommendation.",
      sampleOutput:
        "ESP comparison, MVMT lifecycle team\n\nKLAVIYO\n  Price at current volume: higher\n  Automation: native, e-commerce-first\n  Data model: order + CLV level\n\nMAILCHIMP\n  Price at current volume: lower\n  Automation: paywalled above Standard\n  Data model: contact + tag only\n\nRECOMMENDATION: Klaviyo. Cart and post-purchase flows are core to MVMT's watch-and-strap upsell motion, and Mailchimp's paywall would force an upgrade to match features Klaviyo includes at this tier already.",
      successCriteria: [
        "Compares both platforms at the account's actual contact volume, not the advertised entry price",
        "Names automation depth or data model fit, not brand recognition, as the deciding factor",
        "Explicitly flags where the cheaper option paywalls a needed feature",
      ],
      portfolioReady: true,
    },
    {
      id: "email-marketing-tools-esp-pricing-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Recommendation That Skips the Fine Print: Auditing an ESP Pitch",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a teammate's Slack-style ESP recommendation memo, find the reasoning defects, brand-recognition bias, missing deliverability check, and single-axis pricing comparison, before it reaches a VP.",
      companyId: "walker-and-company",
      scenario:
        "You're a marketing coordinator at Walker & Company Brands (Bevel). A teammate drafted a quick recommendation to switch ESPs and pinged you to sanity-check it before it goes up the chain.",
      brief:
        "Read the memo like the lesson's Common Mistakes section and flag every place it optimizes for the wrong variable.",
      mode: "teardown",
      conceptsCovered: [
        "Treating contact count as the only pricing axis",
        "Ignoring deliverability when comparing tools",
        "Confusing brand recognition with automation fit",
      ],
      teardownItems: [
        {
          itemId: "item-1-esp-recommendation-memo",
          specimen:
            "Slack message, #marketing-ops\n\n\"Ran the numbers, I think we should switch to Mailchimp. Everyone knows the brand, the editor is really clean, and at our list size it's $26.50/month which is cheaper than what we're paying now. I say we move by end of month, this should be a quick win.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "This memo is about to go to a VP for sign-off. Find every reasoning defect before it ships, not just whether the conclusion is right or wrong.",
          answerKey: [
            {
              defect: "Justifies the switch primarily on brand recognition ('everyone knows the brand') rather than fit for the team's actual automation needs",
              severity: "critical",
              whyItMatters:
                "Brand familiarity says nothing about whether Mailchimp's automation tier matches the team's flow complexity, it's a popularity argument standing in for a fit argument.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
            {
              defect: "Compares tools on list-size pricing only, with no mention of whether automation is paywalled at that tier",
              severity: "critical",
              whyItMatters:
                "The lesson flags this exact trap: Mailchimp's automation gets paywalled well before 10,000 contacts, a lower sticker price can hide a feature gap that costs more to work around later.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
            {
              defect: "No mention of deliverability anywhere in the recommendation",
              severity: "moderate",
              whyItMatters:
                "A cheaper plan that lands in spam costs more than a pricier one that reaches the inbox, deliverability has to be part of any ESP comparison, not an afterthought.",
              lessonRef: "common-mistakes",
              owner: "you",
            },
            {
              defect: "Recommends moving 'by end of month' with no migration or data-export plan mentioned",
              severity: "moderate",
              whyItMatters:
                "ESP migrations risk list hygiene, flow rebuilds, and sending gaps, a one-line timeline with no plan understates the real switching cost.",
              lessonRef: "common-mistakes",
              owner: "either",
            },
          ],
          distractors: [
            "Memo notes the Mailchimp editor is clean and easy to use, this is a true, minor point, not a defect",
            "Memo is short and informal, brevity itself isn't the problem, the missing analysis is",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log each defect found against severity and the lesson concept it violates",
            why: "Turns a read-through into a structured, shareable defect list",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An annotated defect list, each finding tagged with severity and the specific reasoning gap, ready to send back before the memo reaches a VP.",
      sampleOutput:
        "Defect list, Rent the Runway ESP recommendation review\n\n1. [CRITICAL] Brand recognition used as the deciding factor instead of automation fit\n2. [CRITICAL] Pricing compared at one list-size snapshot, no check on whether automation is paywalled at that tier\n3. [MODERATE] No deliverability comparison anywhere in the memo\n4. [MODERATE] No migration plan behind the 'by end of month' timeline\n\nRecommendation: send back for a second pass scoring automation depth and deliverability before this goes to leadership.",
      successCriteria: [
        "Flags the brand-recognition and single-axis pricing defects as critical, not cosmetic",
        "Correctly identifies deliverability as absent from the memo",
        "Does not flag the two distractors as defects",
      ],
      portfolioReady: true,
    },
  ],
  "design-tools": [
    {
      id: "design-tools-stack-consolidation-audit",
      tier: "mini",
      archetype: "audit",
      title: "Five Logins, Five Brand Kits: Auditing a Bloated Design Stack",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given Halo Top's current six-tool design stack, apply the lesson's 'one primary, one secondary' rule to decide what to keep, what to cut, and why, before the next round of tool renewals.",
      companyId: "halo-top",
      scenario:
        "You're the marketing generalist at Halo Top. Renewal invoices just landed for six design tools, some clearly overlapping, and your manager wants a cut list before the next billing cycle.",
      brief:
        "Categorize every tool by job-to-be-done, flag duplicates, and land on a primary plus secondary tool with one shared Brand Kit.",
      mode: "diagnostic",
      conceptsCovered: ["Consolidating to a primary and secondary design tool with one Brand Kit"],
      steps: [
        {
          stepId: "step-1-stack-consolidation-audit",
          concept: "Consolidating to a primary and secondary design tool with one Brand Kit",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Common Mistakes section is explicit: buying every tool means five logins with five outdated brand kits, which is worse than two tools kept current. Pick a primary and a secondary.",
          question:
            "Halo Top's stack is Canva, Figma, Adobe Photoshop, Adobe Express, Midjourney, and Remove.bg, each renewing separately. Which two survive as primary and secondary, and which get cut?",
          toolName: "Google Sheets",
          where: "A sheet with one row per tool: job-to-be-done, weekly usage, and overlap with another row.",
          procedure: [
            "List each tool's actual weekly job (social posts, mockups, pixel editing, AI imagery, background removal)",
            "Mark any tool whose job is already covered by another row",
            "Pick the tool used most weeks as primary; pick one clear complement as secondary",
            "Cut or downgrade every tool whose job the primary or secondary already covers",
          ],
          outputSample:
            "Stack audit, Halo Top marketing\n\nCanva, social + decks, used daily -> KEEP, primary\nAdobe Express, social + decks, used weekly -> CUT, overlaps Canva entirely\nFigma, landing pages / dev handoff, used weekly -> KEEP, secondary\nPhotoshop, pixel editing, used monthly by one person -> KEEP, single seat only\nMidjourney, hero imagery, used monthly -> DOWNGRADE, move to as-needed credits\nRemove.bg, background removal, used rarely -> CUT, Canva's built-in tool covers this",
          healthy: "Two tools survive as primary/secondary, every cut is justified by a named overlap with a kept tool.",
          unhealthy: "Every tool is kept 'just in case', or tools are cut by cost alone without checking what job they cover.",
          interpret:
            "A tool earns its renewal by covering a job nothing else in the stack already does, not by being useful in the abstract.",
          soWhat: [
            {
              symptom: "Two or more tools cover the same job-to-be-done",
              action: "Cut the lower-usage one and route that work through the tool already doing the job",
              effort: "30 min",
            },
            {
              symptom: "No single Brand Kit exists across the surviving tools",
              action: "Set up one Brand Kit in the primary tool and mirror fonts/colors in the secondary",
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
            role: "Score each tool's job-to-be-done and usage to find overlap",
            why: "Free, fast to share with a manager for sign-off on the cut list",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A tool-by-tool audit table naming which two tools survive as primary and secondary, with every cut justified by a named overlap.",
      sampleOutput:
        "Stack audit, MVMT marketing\n\nCanva, social + decks, daily -> KEEP, primary\nFigma, landing pages, weekly -> KEEP, secondary\nAdobe Express, social + decks -> CUT, overlaps Canva\nCapCut, short-form video, weekly -> KEEP, no overlap with kept tools\nUnsplash, stock photos -> KEEP, free, no overlap\n\nCut count: 1 of 5. Two-tool core (Canva + Figma) plus two single-purpose tools (CapCut, Unsplash) with no coverage overlap.",
      successCriteria: [
        "Names exactly one primary and one secondary tool",
        "Every cut is justified by an overlap with a kept tool, not cost alone",
        "Flags where a shared Brand Kit is missing across the surviving tools",
      ],
      portfolioReady: true,
    },
    {
      id: "design-tools-brand-kit-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Building the Brand Kit That Makes Every Asset On-Brand by Default",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Build a real Brand Kit spec, fonts, hex codes, logo usage rules, for MVMT before onboarding two freelance designers, so every asset snaps into brand automatically instead of being checked by hand.",
      companyId: "mvmt-watches",
      scenario:
        "You're the founding marketer at MVMT. Two freelancers start next week making social assets, and nothing about the brand's fonts or colors is documented anywhere yet.",
      brief:
        "Turn the brand's existing visual identity into a Brand Kit spec that can be imported into Canva and mirrored in Figma, closing the exact gap the lesson calls out under Skipping the Brand Kit.",
      mode: "build",
      conceptsCovered: ["Setting up a Brand Kit once so every asset snaps into brand automatically"],
      steps: [
        {
          stepId: "step-1-brand-kit-setup",
          concept: "Setting up a Brand Kit once so every asset snaps into brand automatically",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's playbook names the Brand Kit as one of the two features (with Magic Resize) that cover 80 percent of weekly Canva output, and Common Mistakes warns that skipping it on day one means every later asset has to be checked by hand instead of snapping into brand.",
          question:
            "Given MVMT's logo file, two brand hex codes, and a display + body font pairing, what exact fields does a usable Brand Kit spec need before a freelancer can open Canva and just start designing?",
          toolName: "Canva",
          where: "Canva's Brand Kit panel, then mirrored as a shared type/color library in Figma.",
          procedure: [
            "Collect the logo (primary + reversed/light version), two brand hex codes, and the display/body font pair",
            "Enter hex codes and fonts into Canva's Brand Kit panel so new designs default to them",
            "Write one usage rule per asset (logo minimum size, when to use the reversed logo, banned font substitutes)",
            "Mirror the same hex codes and fonts as a shared library in Figma so both tools stay in sync",
          ],
          outputSample:
            "MVMT Brand Kit spec\n\nColors: Primary #1A1A1A (near-black), Accent #C9A24B (brass)\nFonts: Display, Neue Haas Grotesk Bold; Body, Neue Haas Grotesk Regular\nLogo: primary mark on light backgrounds only, reversed mark on dark or photo backgrounds, minimum width 120px\nRule: no substituting system fonts if Neue Haas fails to load, use Helvetica Neue Bold as the only approved fallback",
          healthy:
            "Freelancer opens Canva, the Brand Kit is already loaded, and a new asset defaults to on-brand colors and fonts with zero manual checking.",
          unhealthy:
            "Freelancer eyeballs the hex code from a screenshot and picks 'a font that looks close', producing an off-brand asset that needs a rework pass.",
          interpret:
            "A Brand Kit set up once removes brand-consistency checking from every asset review after it, that's the actual leverage, not the kit itself.",
          soWhat: [
            {
              symptom: "No Brand Kit exists before a freelancer's first asset is due",
              action: "Build the four-field spec (colors, fonts, logo rules, fallback rule) before kickoff, not after the first revision round",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Canva",
            role: "Store the Brand Kit (colors, fonts, logo) so every new design defaults to it",
            why: "Free tier includes one Brand Kit, enough for a lean team's first setup",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Figma",
            role: "Mirror the same colors and fonts as a shared library for landing-page and dev-handoff work",
            why: "Keeps web assets in sync with the Canva kit once work moves beyond social",
            required: false,
            fallback: "Skip Figma entirely until a web asset is actually needed; Canva alone covers the freelancer onboarding brief",
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A four-field Brand Kit spec (colors, fonts, logo usage rules, fallback rule) loaded into Canva and ready to hand to two incoming freelancers.",
      sampleOutput:
        "Rent the Runway Brand Kit spec\n\nColors: Primary #2B1B3D (plum), Accent #F2E9DA (cream)\nFonts: Display, Canela; Body, Söhne\nLogo: wordmark only above 200px width, monogram mark below that, always on solid backgrounds\nRule: if Canela fails to load, fall back to Georgia, never a sans-serif substitute",
      successCriteria: [
        "Spec includes all four fields: colors, fonts, logo usage rule, and a named fallback rule",
        "Brand Kit is actually loaded into Canva, not just written as a document",
        "Rules are specific enough that a freelancer needs no follow-up question to use them",
      ],
      portfolioReady: true,
    },
  ],

  "free-tools-stack": [
    {
      id: "free-tools-stack-zero-budget-plan-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "The Zero-Budget Stack: Building a Full Marketing Toolkit From Scratch",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a solo founder's marketing funnel needs (analytics, SEO, email, design, social, CRM), select one free-tier tool per layer and justify each choice against the lesson's 2025 free-tier data.",
      companyId: "drunk-elephant",
      scenario:
        "You're advising the solo founder of a bootstrapped skincare micro-brand modeled on Drunk Elephant's early DTC playbook, before any outside funding, with $0 software budget and one quarter to prove traction.",
      brief:
        "Pick exactly one free tool per funnel layer, rule out Mailchimp against 2026's tightened free tier, and flag the single highest-leverage move to make first.",
      mode: "build",
      conceptsCovered: ["Choosing free tiers across every marketing layer"],
      steps: [
        {
          stepId: "step-1-stack-selection",
          concept: "Choosing free tiers across every marketing layer",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's Playbook stage maps 10 marketing layers (analytics, SEO, email, design, social, content, CRM, local, forms, link tracking) to a specific free-tier tool for each, noting the free tiers that quietly cap you (Mailchimp's 2026 drop to 250 contacts and 500 sends) versus the generous ones (Brevo's 300 sends/day with automation included).",
          question:
            "The founder already has 400 email contacts and needs automation. Do they default to Mailchimp because it's the name they know, or pick the tier that actually supports their contact count?",
          toolName: "Google Sheets",
          where: "Build a 10-row layer-by-tool matrix, one row per funnel layer.",
          procedure: [
            "List all 10 layers from the lesson's Playbook stage down column A",
            "For Email, compare Mailchimp's new 250-contact/500-send cap against Brevo's 300 sends/day with automation included",
            "Assign one free tool per layer in column B, leave column C for the reason",
            "Flag any layer where the free tier caps below the founder's actual volume",
          ],
          outputSample:
            "DRUNK ELEPHANT MICRO-BRAND STACK PLAN\n\nLayer -> Tool -> Reason\nAnalytics -> GA4 -> unlimited free\nSEO research -> Google Search Console -> official ranking data, free\nEmail (400 contacts) -> Brevo -> Mailchimp's 250-contact cap fails at 400; Brevo covers it with automation\nDesign -> Canva Free -> 250k+ templates, free brand kit\nSocial scheduling -> Buffer Free -> 3 channels covers launch phase\nCRM -> HubSpot CRM Free -> unlimited contacts and users\nForms -> Tally Free -> unlimited submissions vs Typeform's 10-response cap\n\nFLAG: Email is the layer where defaulting to habit (Mailchimp) breaks the plan.",
          healthy:
            "Every layer has one tool, and the email layer explicitly rules out Mailchimp with a stated number (400 > 250).",
          unhealthy:
            "Mailchimp picked for email 'because everyone uses it' without checking the 2026 cap against actual contact count.",
          interpret:
            "A free-tier stack fails at exactly one predictable layer, email, because that's where caps tightened hardest; catching it before signing up avoids a mid-quarter forced migration.",
          soWhat: [
            {
              symptom: "Founder already has 400 contacts sitting in a spreadsheet",
              action: "Rule out Mailchimp immediately, import straight into Brevo",
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
            role: "Build and hold the layer-by-tool matrix",
            why: "Free, no account friction, sortable",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Write the one-paragraph justification per tool choice",
            why: "Free, shareable with the founder",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed 10-layer stack matrix naming one free tool per layer, with the email layer's tool choice explicitly justified against contact volume.",
      sampleOutput:
        "BLUE BOTTLE COFFEE, seasonal roast launch stack (excerpt)\n\nAnalytics: GA4\nEmail (1,800 contacts): Brevo (Mailchimp's 250-contact free cap ruled out immediately)\nCRM: HubSpot CRM Free\nDesign: Canva Free\n\nHighest-leverage first move: connect GA4 + Search Console before spending any time on social scheduling tools.",
      successCriteria: [
        "All 10 layers from the lesson's Playbook stage are assigned a tool",
        "Email layer choice is justified with a real contact-count comparison, not habit",
        "At least one layer is flagged as the highest-leverage first move",
      ],
      portfolioReady: true,
    },
    {
      id: "free-tools-stack-stack-bloat-audit",
      tier: "mini",
      archetype: "audit",
      title: "Cutting a Bloated Free Stack Back Down to Five Tools",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a founder's current 14-tool signup list, apply the lesson's Common Mistakes framework to identify overlapping tools, stale free-tier choices, and the missing CRM layer, then cut the list to 5-7 tools.",
      companyId: "framebridge",
      scenario:
        "You're auditing the current software stack of a scrappy DTC custom-framing startup modeled on Framebridge's earliest days, who signed up for 14 different free trials over 18 months and has no idea which ones still matter.",
      brief:
        "Cut the list to 5-7 tools using the lesson's Common Mistakes stage, and catch the layer where no CRM exists at all.",
      mode: "diagnostic",
      conceptsCovered: ["Auditing a stack for tool overlap and stale free-tier choices"],
      steps: [
        {
          stepId: "step-1-bloat-audit",
          concept: "Auditing a stack for tool overlap and stale free-tier choices",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Common Mistakes stage flags three failure patterns: stacking 12 tools when 5 would do, defaulting to Mailchimp out of habit as free tiers shift, and skipping the CRM layer entirely.",
          question:
            "The founder's list has both Mailchimp AND Brevo signed up (never fully migrated), plus no CRM at all. Which two calls does the lesson's framework make immediately?",
          toolName: "Google Sheets",
          where: "List all 14 tools in column A, mark KEEP/CUT/ADD in column B.",
          procedure: [
            "List all 14 currently-signed-up tools",
            "Mark any tool duplicating another tool's job (Mailchimp + Brevo both signed up) as CUT the weaker one",
            "Check every KEPT tool's free tier against the lesson's 2025 data for a tighter replacement",
            "Confirm a CRM is present; if absent, ADD HubSpot CRM Free",
          ],
          outputSample:
            "FRAMEBRIDGE-STYLE STARTUP, 14-tool audit\n\nKEEP (6): GA4, Google Search Console, Canva Free, Buffer Free, Google Docs, Brevo\nCUT (7): Mailchimp (duplicate of Brevo, worse cap), an unused SEO trial (abandoned after week 2), 5 more redundant scheduling/design trials\nADD (1): HubSpot CRM Free -- currently zero CRM in the stack, all client data lives in someone's inbox\n\nFinal count: 14 -> 7 tools",
          healthy:
            "Final list drops to 5-7 tools, Mailchimp is cut in favor of Brevo, and a CRM gap gets flagged and filled.",
          unhealthy: "Keeping both Mailchimp and Brevo 'just in case' and never noticing there's no CRM at all.",
          interpret:
            "Every tool is a login and a place data can leak; an audit's job is subtraction as much as addition, and the CRM gap is the most expensive miss because it's invisible until a client is lost.",
          soWhat: [
            {
              symptom: "Two email tools signed up, neither fully used",
              action: "Migrate contacts to the one with the better current free tier, cancel the other",
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
            role: "Hold the KEEP/CUT/ADD audit table",
            why: "Free, easy to sort and share",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A KEEP/CUT/ADD audit table cutting a 14-tool stack to 5-7 tools, with the CRM gap explicitly identified and filled.",
      sampleOutput:
        "WINC, 18-month tool audit (excerpt)\n\nCUT: Typeform (10-response free cap hit weekly) -> replaced by Tally Free\nCUT: a duplicate design trial -> Canva Free already covers it\nADD: HubSpot CRM Free -- no CRM was in place despite 300+ logged customer conversations sitting in a shared inbox\n\nFinal stack: 6 tools, down from 15.",
      successCriteria: [
        "At least 5 tools correctly marked CUT with a stated reason",
        "The CRM gap is identified if absent and filled with HubSpot CRM Free",
        "Final tool count is stated explicitly (before -> after)",
      ],
      portfolioReady: true,
    },
  ],
  "crm-basics": [
    {
      id: "crm-basics-pipeline-setup-audit",
      tier: "mini",
      archetype: "audit",
      title: "Auditing a Two-Stage Pipeline Before 300 Leads Get Imported",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a founder's draft CRM pipeline, compare it against the lesson's Pipeline Management framework and identify which real buying-journey moments have no stage to sit in.",
      companyId: "winc-club-w",
      scenario:
        "You're advising the solopreneur founder of a subscription wine startup modeled on Winc's early days as they set up their first CRM pipeline in HubSpot Free.",
      brief:
        "Compare their draft pipeline against the lesson's Three Core Jobs framework and flag every missing stage before they import 300 real contacts.",
      mode: "diagnostic",
      conceptsCovered: ["Pipeline stages must mirror the real buying journey"],
      steps: [
        {
          stepId: "step-1-pipeline-audit",
          concept: "Pipeline stages must mirror the real buying journey",
          lessonAnchor: "2-pipeline-management",
          theoryRecap:
            "The lesson's Pipeline Management section defines a pipeline as the series of steps a lead goes through before becoming a customer (Lead -> Demo Scheduled -> Proposal Sent -> Deal Won), and the Common Beginner Mistakes callout warns that skipping this setup turns a CRM into 'just an expensive address book.'",
          question:
            "The founder's draft pipeline has only two stages: 'New' and 'Customer'. What's missing before 300 leads get imported into it?",
          toolName: "HubSpot CRM",
          where: "HubSpot CRM Free, Deals/Pipeline settings.",
          procedure: [
            "List the founder's current 2-stage pipeline: New, Customer",
            "Compare against the lesson's example stage sequence: Lead, Demo Scheduled, Proposal Sent, Deal Won",
            "Identify which real buying-journey steps have no stage to sit in",
            "Propose a corrected stage list matching how a wine-subscription trial actually converts (Lead, Trial Box Sent, Subscription Started, Churned)",
          ],
          outputSample:
            "CURRENT PIPELINE (2 stages): New -> Customer\n\nGAP: no stage for 'sent a trial box but hasn't subscribed yet' -- this is where most leads actually sit\n\nCORRECTED PIPELINE (4 stages):\n1. Lead\n2. Trial Box Sent\n3. Subscription Started\n4. Churned (separate from never-converted)\n\nWith only 2 stages, every lead who received a trial box but hasn't decided yet is invisible.",
          healthy: "Corrected pipeline has 4+ stages that map to real, distinguishable moments in the buying journey.",
          unhealthy:
            "Leaving a 2-stage 'New / Customer' pipeline where most leads are invisible until they either convert or silently vanish.",
          interpret:
            "A pipeline this thin can't show which deals need attention, which is the entire point of Pipeline Management per the lesson; the CRM becomes address-book-only exactly as the lesson's mistake warning predicts.",
          soWhat: [
            {
              symptom: "Sales team can't tell who needs a follow-up call",
              action: "Add the missing mid-journey stage before importing any contacts",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "HubSpot CRM",
            role: "Configure and hold the corrected pipeline stages",
            why: "Free forever plan, unlimited contacts and users",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Draft the before/after stage comparison",
            why: "Free, quick to share with the founder",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A corrected pipeline stage list (4+ stages) replacing the founder's 2-stage draft, with each new stage tied to a real moment in the buying journey.",
      sampleOutput:
        "FRAMEBRIDGE, custom-order pipeline redesign (excerpt)\n\nBEFORE (2 stages): New -> Ordered\nAFTER (5 stages): Lead -> Quote Sent -> Artwork Received -> Order Placed -> Delivered\n\nGap found: no stage existed for 'sent a quote, hasn't sent artwork yet' -- 40% of leads were sitting there invisibly.",
      successCriteria: [
        "Identifies the missing mid-journey stage(s) in the draft pipeline",
        "Proposes 4+ stages that map to real buying-journey moments",
        "Ties the fix back to the lesson's 'address book vs pipeline' distinction",
      ],
      portfolioReady: true,
    },
    {
      id: "crm-basics-dirty-import-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Pre-Import Teardown: Catching Dirty Data Before It Hits the CRM",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a 12-row CSV export about to be imported into a new CRM, find every defect the lesson's Common Beginner Mistakes callout warns about before an automated welcome sequence goes out.",
      companyId: "blue-bottle-coffee",
      scenario:
        "You're reviewing a CSV export of 12 contact records a Blue Bottle Coffee wholesale-side intern is about to import into a brand-new HubSpot CRM.",
      brief: "Find every defect before this import goes live and auto-enrolls into a welcome-email sequence.",
      mode: "teardown",
      conceptsCovered: ["3. Automation", "The Main Types of CRM"],
      teardownItems: [
        {
          itemId: "item-1-csv-export",
          specimen:
            "CSV export, 12 rows (synthetic)\n\nName | Email | Company | Stage | Notes\nJ. Rivera | jrivera@gmail | Roast&Co | (blank) | called 3x\nMaria Chen | maria.chen@wholesalecafe.com | Wholesale Cafe | New Lead | \nMaria Chen | m.chen@wholesalecafe.com | Wholesale Cafe | Proposal Sent | duplicate of above, diff email format\nTom O | (blank) | | New Lead | met at trade show\nSarah K. | sarah@brewhub.com | BrewHub | Won | first order placed 3/2026, date only in Notes\nDave Nguyen | dave@urbanroast.com | Urban Roast | New Lead | asked NOT to be contacted again\n... 6 more rows, unremarkable",
          specimenSource: "synthetic-realistic",
          prompt:
            "You have 15 minutes before this list gets imported and auto-enrolled into a welcome-email sequence. Which rows do you fix or pull before import, and why?",
          answerKey: [
            {
              defect: "J. Rivera has no pipeline stage set (blank Stage field)",
              severity: "critical",
              whyItMatters:
                "The lesson's Common Mistakes callout: importing without a defined pipeline stage makes the CRM 'just an expensive address book' for that contact, and they'll never surface in any pipeline view.",
              lessonRef: "the-main-types-of-crm",
              owner: "you",
            },
            {
              defect: "Maria Chen appears twice with two different email formats",
              severity: "critical",
              whyItMatters:
                "Duplicate contact records split a customer's history across two profiles; this is exactly the dirty-data mistake the lesson warns causes a CRM to become 'useless immediately.'",
              lessonRef: "common-beginner-mistakes",
              owner: "you",
            },
            {
              defect: "Tom O has no email address",
              severity: "moderate",
              whyItMatters:
                "No automation (welcome email, follow-up) can reach a contact with no email; this row silently fails to enter the funnel the CRM is meant to automate.",
              lessonRef: "3-automation",
              owner: "you",
            },
            {
              defect:
                "Dave Nguyen is marked 'asked NOT to be contacted again' but only in a free-text Notes field, with no structured opt-out field",
              severity: "critical",
              whyItMatters:
                "A note isn't a structured field automation logic can check; auto-enrolling this contact into a welcome sequence anyway is a compliance and trust failure, not just a data hygiene one.",
              lessonRef: "3-automation",
              owner: "developer",
            },
          ],
          distractors: [
            "Sarah K.'s 'Won' stage has the close date written in the Notes field instead of a dedicated Close Date field",
            "Company names aren't in Title Case consistently across rows",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "HubSpot CRM",
            role: "Import destination, review contact records before/after cleanup",
            why: "Free forever plan, built-in duplicate detection",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Clean the CSV before importing",
            why: "Free, easy to dedupe and flag blank fields",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A cleaned import list with every critical defect fixed or the row pulled, plus a one-line note on why each fix mattered.",
      sampleOutput:
        "DRUNK ELEPHANT, wholesale contact cleanup (excerpt)\n\nPULLED: 2 rows with no email (auto-enrollment can't reach them)\nMERGED: 1 duplicate contact (two email formats for the same buyer)\nFLAGGED: 1 contact marked do-not-contact in free text -- moved to a structured opt-out field before import\n\n9 of 12 rows imported clean; 3 required a fix first.",
      successCriteria: [
        "Identifies both duplicate Maria Chen rows as one issue, not two separate defects",
        "Catches the missing-stage and missing-email rows",
        "Correctly does not flag the two distractor items as critical defects",
      ],
      portfolioReady: true,
    },
  ],

  "hubspot": [
    {
      id: "hubspot-30-day-launch-audit",
      tier: "mini",
      archetype: "audit",
      title: "The 30-Day Launch Audit: Diagnosing a Stalled HubSpot Free CRM Setup",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given a synthetic snapshot of a free-tier HubSpot portal three weeks into setup, apply the lesson's Week 1-4 sequence to diagnose exactly which step was skipped and why the workflow is producing zero leads.",
      companyId: "yeti",
      scenario: "You're the marketing coordinator at YETI Holdings, the Austin-based outdoor gear and coolers company, three weeks into rolling out a free HubSpot CRM for a new wholesale-dealer referral program.",
      brief: "Read the portal snapshot below, match what exists against the lesson's Week 1-4 sequence, and name the single missing step that explains the zero leads.",
      mode: "diagnostic",
      conceptsCovered: ["Sequencing HubSpot setup before turning on automation"],
      steps: [
        {
          stepId: "step-1-sequence-diagnosis",
          concept: "Sequencing HubSpot setup before turning on automation",
          lessonAnchor: "getting-started-your-first-30-days-on-hubspot",
          theoryRecap: "The lesson's 30-day plan is deliberately ordered: Foundation, then Capture, then Connect, then Measure. Automation before content is the single most common beginner mistake it warns against.",
          question: "Week 3 snapshot below. The welcome workflow is live and firing correctly. Zero contacts have entered it in 11 days. What's actually broken?",
          toolName: "HubSpot CRM",
          where: "Portal Admin > Automation > Workflows, cross-referenced against Marketing > Landing Pages.",
          procedure: [
            "Open the workflow: enrollment trigger is 'contact fills form X', 0 enrollments logged",
            "Open Landing Pages: one page exists, titled 'Dealer Program', published, 4 views total in 11 days",
            "Check the page for a lead magnet or reason to fill the form: none present, only a 'Contact Us' field with no offer",
            "Check Week 1 items: Gmail connected yes, pipeline built yes, contacts imported yes",
            "Check Week 2 items: landing page exists but has no content asset attached, no promotion channel used",
          ],
          outputSample: "PORTAL SNAPSHOT, Day 21\n\nWeek 1 (Foundation): COMPLETE\n  - Gmail connected, 340 contacts imported, 1 deal pipeline built\n\nWeek 2 (Capture): PARTIAL\n  - Landing page 'Dealer Program' live, 4 views, 0 form fills\n  - Welcome workflow built and active, 0 enrollments\n  - No lead magnet or downloadable asset attached to the page\n  - Page never shared anywhere (no email, no social post, no link in bio)\n\nWeek 3 (Connect): NOT STARTED\nWeek 4 (Measure): NOT STARTED",
          healthy: "A landing page offering something a dealer actually wants (a margin calculator, a stocking guide), promoted through at least one channel, feeding real enrollments.",
          unhealthy: "A live workflow with a perfect automation logic sitting on top of a page with nothing to offer and no traffic driving to it.",
          interpret: "The workflow isn't broken. There's nothing upstream of it: no lead magnet, no promotion. Automation was built before Week 2's Capture step was actually finished.",
          soWhat: [
            { symptom: "Workflow has 0 enrollments despite being technically correct", action: "Attach a real lead magnet to the landing page and share the link in at least one channel before touching automation further", effort: "30 min" },
            { symptom: "Landing page gets views but no fills", action: "Add a specific offer (guide, calculator, discount) instead of a bare contact form", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "HubSpot CRM", role: "Inspect the live workflow, landing page, and enrollment history", why: "Free tier includes unlimited workflows, landing pages, and contact records, no paid plan needed to run this audit", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A one-paragraph diagnosis naming the exact missing step in the Week 1-4 sequence, plus the two fastest fixes.",
      sampleOutput: "Diagnosis, Care.com Dealer Referral Portal\n\nThe welcome workflow is correctly built and active, but it has zero enrollments because nothing upstream feeds it. The landing page has no lead magnet, no reason for a visitor to trade their email, and has never been shared through email, social, or a partner channel. This is a Week 2 (Capture) gap, not a Week 3 (Connect) or automation problem. Fix: attach a real offer to the page, then share it in the next partner newsletter before touching the workflow logic again.",
      successCriteria: [
        "Correctly identifies that Week 2 (Capture), not the workflow itself, is where the sequence broke",
        "Names both the missing lead magnet and the missing promotion as separate gaps",
      ],
      portfolioReady: true,
    },
    {
      id: "hubspot-welcome-workflow-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build the Asset: A 3-Email Welcome Workflow in HubSpot",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective: "Design a 3-email, 10-day welcome workflow that follows the lesson's 'value before pitch' rule, using HubSpot's free-tier Workflows and Marketing Email tools.",
      companyId: "stitch-fix",
      scenario: "You're the growth marketer at Stitch Fix, the personalized apparel and styling company, building the first automated sequence for people who just took the style quiz.",
      brief: "Write the trigger, timing, and one-line content brief for all 3 emails, then map the workflow logic in HubSpot's builder.",
      mode: "build",
      conceptsCovered: ["Sequencing value before the pitch in an automated workflow", "Using HubSpot Workflows to automate a multi-step follow-up"],
      steps: [
        {
          stepId: "step-1-workflow-design",
          concept: "Sequencing value before the pitch in an automated workflow",
          lessonAnchor: "the-inbound-methodology-the-philosophy-behind-hubspot",
          theoryRecap: "The lesson's inbound mechanics: give value first (helpful content), earn trust, then pitch. Its Week 2 plan calls for '3 emails over 10 days that deliver value before pitching.'",
          question: "A style-quiz taker just became a lead. What should email 1, 2, and 3 each do, and on what day should each send?",
          toolName: "HubSpot Marketing Hub",
          where: "Marketing > Automation > Workflows > Create workflow > Contact-based, trigger 'Form submission: Style Quiz'.",
          procedure: [
            "Set enrollment trigger: form submission = Style Quiz",
            "Email 1 (Day 0): deliver the quiz result, pure value, no product pitch",
            "Delay 3 days",
            "Email 2 (Day 3): a styling tip tied to their quiz result, still no hard pitch",
            "Delay 7 days",
            "Email 3 (Day 10): soft pitch, first Fix box offer with a specific incentive",
            "Add a branch: if they open Email 2 but don't click, send a lighter-touch version of Email 3",
          ],
          outputSample: "WORKFLOW: Style Quiz Welcome Series\nTrigger: Form submission = 'Style Quiz'\n\nDay 0  Email 1: 'Your Style Profile Results' (value, zero pitch)\nDay 3  Email 2: '3 Ways to Wear What You Already Own' (value, tied to their profile)\nDay 10 Email 3: 'Ready for Your First Fix?' (soft pitch, $20 styling-fee waiver)\n\nBranch: opened Email 2, no click -> send lighter Email 3B (no discount, just a reminder)",
          healthy: "Two value-first emails before any pitch, with the pitch tied specifically to what the person already told you (their quiz answers).",
          unhealthy: "A pitch in Email 1, or three generic emails that ignore the quiz data entirely.",
          interpret: "The workflow logic itself is trivial in HubSpot. What makes it work is the content sequencing, which has to be planned before you touch the builder.",
          soWhat: [
            { symptom: "Open rates are fine but click-through on the pitch email is low", action: "Check whether the pitch actually references the person's specific quiz answers, or is generic", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "HubSpot Marketing Hub", role: "Build the workflow, write and schedule the 3 emails", why: "Free tier includes basic workflows and 2,000 email sends a month, enough for this build", required: true, lastVerified: "2026-08" },
          { toolName: "HubSpot CRM", role: "Confirm the form submission trigger fires against a real contact record", why: "Workflows read off the same free CRM contact record the form writes to", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A workflow map (trigger, 3 emails with send-day and one-line content brief, one branch) ready to build directly in HubSpot's workflow editor.",
      sampleOutput: "WORKFLOW: New Member Welcome Series, Peloton Digital App\nTrigger: Form submission = 'Free Trial Signup'\n\nDay 0  Email 1: '5-Minute Rides to Try This Week' (value, zero pitch)\nDay 4  Email 2: 'How to Read Your Output Metrics' (value, builds product fluency)\nDay 9  Email 3: 'Your Trial Ends in 5 Days' (soft pitch, one-tap upgrade link)\n\nBranch: clicked Email 2 but hasn't ridden in 3 days -> send a re-engagement nudge instead of Email 3",
      successCriteria: [
        "First two emails contain zero product pitch",
        "The Day 10 pitch email references something specific the contact already told you",
        "Workflow includes at least one branch based on engagement",
      ],
      portfolioReady: true,
    },
  ],
  "google-analytics": [
    {
      id: "ga4-key-events-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Empty Conversions Report: Auditing a GA4 Key-Events Setup",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given a synthetic GA4 events list for an ecommerce site, apply the lesson's Step 3 process to identify which events should be marked as key events and which mistake is causing the Conversions report to look empty.",
      companyId: "peloton",
      scenario: "You're a marketing analyst at Peloton Interactive auditing the GA4 property for a new accessories microsite that launched a month ago.",
      brief: "Review the raw events list, decide which should be key events, and diagnose why the Conversions report is nearly empty despite real traffic.",
      mode: "diagnostic",
      conceptsCovered: ["Marking the right events as key events", "Diagnosing duplicate tracking code as a false-data cause"],
      steps: [
        {
          stepId: "step-1-key-events-triage",
          concept: "Marking the right events as key events",
          lessonAnchor: "step-3-mark-your-key-events-conversions",
          theoryRecap: "GA4 tracks many events automatically, but the Conversions report only shows events explicitly toggled 'Mark as key event.' The lesson calls this the step beginners skip most.",
          question: "Below are the auto-tracked events and their 30-day counts. Which get marked as key events, and what does the near-zero purchase count actually tell you?",
          toolName: "Google Analytics 4",
          where: "Admin > Events, then Reports > Life cycle > Engagement > Conversions.",
          procedure: [
            "List all events firing in the last 30 days with counts",
            "Cross off events that are just navigation (page_view, scroll), not business outcomes",
            "Mark add_to_cart, begin_checkout, and purchase as key events",
            "Check the purchase count (2) against session count (14,800): a 0.01% rate is not a normal ecommerce conversion rate",
            "Check Admin > Data streams > Tagging Instructions for a second install",
          ],
          outputSample: "EVENTS, LAST 30 DAYS\n  page_view          61,200\n  scroll              38,900\n  add_to_cart          2,140\n  begin_checkout       1,860\n  purchase             1,830  <- shown twice in raw event log per transaction\n  purchase (reported)      2  <- what Conversions report actually shows\n\nTagging Instructions: 2 active installs found (WordPress plugin + manual header snippet)",
          healthy: "purchase, add_to_cart, and begin_checkout all marked as key events, with the reported purchase count roughly matching real order volume.",
          unhealthy: "Zero key events marked at all, or a reported conversion count that's off from the raw event count by orders of magnitude.",
          interpret: "Two separate problems stack here: the right events were never marked as key events, AND the tracking code is installed twice, which the lesson's own warning callout flags as the most common GA4 setup mistake.",
          soWhat: [
            { symptom: "Conversions report is empty despite real sales", action: "Mark add_to_cart, begin_checkout, and purchase as key events in Admin > Events", effort: "5 min" },
            { symptom: "Raw purchase event count doesn't match real order volume", action: "Check Tagging Instructions for a duplicate install, remove one", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Analytics 4", role: "Review the events list, mark key events, check tagging instructions", why: "Free for any site under 10 million hits per month, no paid tier needed", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A list of which events to mark as key events, plus a one-line diagnosis of the duplicate-tracking problem and the fix.",
      sampleOutput: "GA4 Audit, YETI Accessories Microsite\n\nMark as key events: add_to_cart, begin_checkout, purchase.\nDo not mark: page_view, scroll, session_start (navigation, not outcomes).\n\nDiagnosis: raw purchase events (1,830) vastly exceed real order volume, and Tagging Instructions shows two active installs (Shopify's native integration plus a manually pasted snippet). Every page view, and every purchase, is being counted twice. Fix: remove the manual snippet, keep only the Shopify integration.",
      successCriteria: [
        "Correctly separates navigation events from business-outcome events",
        "Identifies duplicate tracking code, not 'no sales happened', as the real cause of the mismatch",
      ],
      portfolioReady: true,
    },
    {
      id: "ga4-checkout-funnel-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Funnel Teardown: Finding the Real Drop-Off in a GA4 Checkout Funnel",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given a 4-step GA4 Funnel Exploration output, identify the real drop-off point and rule out plausible-sounding but wrong explanations.",
      companyId: "care-com",
      scenario: "You're reviewing a GA4 Funnel Exploration report for Care.com's premium membership checkout, built from Product View to Purchase.",
      brief: "Read the funnel percentages, find where the real leak is, and reject the distractor explanations that don't match the data.",
      mode: "teardown",
      conceptsCovered: ["Reading step-over-step drop-off in a GA4 Funnel Exploration"],
      teardownItems: [
        {
          itemId: "funnel-teardown-1",
          specimen: "GA4 FUNNEL EXPLORATION: Premium Membership Checkout\n\nStep 1  Plan Page View        10,000 users   100%\nStep 2  Add to Cart             6,400 users    64.0%  (-36.0%)\nStep 3  Begin Checkout          5,760 users    90.0% of step 2  (-10.0%)\nStep 4  Purchase Complete       1,210 users    21.0% of step 3  (-79.0%)\n\nElapsed time, Step 3 to Step 4: median 6 minutes 40 seconds\nDevice split at Step 4: 78% mobile, 22% desktop",
          specimenSource: "synthetic-realistic",
          prompt: "Where is the real leak in this funnel, and what in the data rules out the most obvious wrong answer?",
          answerKey: [
            { defect: "The 79% drop between Begin Checkout and Purchase Complete is the real leak, not the 36% drop at Add to Cart", severity: "critical", whyItMatters: "A 36% drop from view to cart is within normal ecommerce range; a 79% drop after someone has already started checkout, with a 6-plus-minute median dwell time, signals active friction (form length, unexpected fees, forced account creation), not a browsing decision to abandon", lessonRef: "funnel-exploration", owner: "you" },
            { defect: "The 78% mobile skew at the point of loss is a second, related signal, not a coincidence", severity: "moderate", whyItMatters: "The lesson's own case data shows mobile checkout friction is a common, fixable pattern; this funnel's device split at the drop-off point points the same direction and should be checked before assuming the fix is generic", lessonRef: "funnel-exploration", owner: "you" },
          ],
          distractors: [
            "The Plan Page View to Add to Cart drop (36%) is the biggest problem because it has the largest raw number of lost users",
            "Traffic quality is the issue, not the funnel itself, since so many people view the plan page in the first place",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Analytics 4", role: "Build the Funnel Exploration report used for this teardown", why: "Explore > Funnel exploration is included in every free GA4 property", required: true, lastVerified: "2026-08" },
          { toolName: "Looker Studio", role: "Optional: turn the funnel into a shareable dashboard for stakeholders", why: "Connects directly to GA4 at no cost", required: false, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A one-paragraph teardown naming the real leak, the ruled-out distractor, and the supporting evidence (elapsed time, device split).",
      sampleOutput: "Funnel Teardown, Stitch Fix Style Pass Checkout\n\nThe real leak is the 74% drop between Begin Checkout and Purchase Complete, not the smaller drop at Add to Cart. Median time-on-step of over 5 minutes at that stage points to active friction, likely form length or a surprise fee, rather than a browsing decision. The Add to Cart drop is a distractor: it has the biggest raw number but sits within a normal range for a first-touch action. Fix the checkout step first.",
      successCriteria: [
        "Names the checkout-to-purchase step as the real leak, not the largest raw-number drop",
        "Uses the elapsed-time and device-split evidence to support the diagnosis, not just the percentages",
      ],
      portfolioReady: true,
    },
  ],

  "mailchimp-klaviyo": [
    {
      id: "mailchimp-klaviyo-platform-fit-diagnostic",
      tier: "mini",
      archetype: "head-to-head",
      title: "The Platform Call: Mailchimp or Klaviyo for This Store?",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real ecommerce brand's data depth, budget, and timeline, apply the lesson's four-question framework to decide between Mailchimp and Klaviyo, then name the first three flows to build.",
      companyId: "mvmt-watches",
      scenario:
        "You're the marketing coordinator at MVMT, the direct-to-consumer watch brand. The store runs on Shopify, syncs full order history, and leadership wants abandoned-cart and browse-abandonment emails live within 30 days on a $20-40/month budget.",
      brief:
        "Decide the platform using the lesson's framework, not brand familiarity, then name the first three flows to build in priority order.",
      mode: "diagnostic",
      conceptsCovered: ["Filtering platform choice by ecommerce data depth, not brand familiarity"],
      steps: [
        {
          stepId: "step-1-data-depth-filter",
          concept: "Filtering platform choice by ecommerce data depth, not brand familiarity",
          lessonAnchor: "the-core-difference-how-they-use-your-data",
          theoryRecap:
            "The lesson's core distinction: Mailchimp stores a subscriber list and open/click history. Klaviyo connects directly to the store and tracks browse behavior, full order history, and predicted lifetime value, letting it trigger emails like 'you looked at this three times, here's 10% off' that Mailchimp can't do without a $350/month Premium plan.",
          question:
            "MVMT syncs 40,000+ SKU-level orders a month on Shopify and wants abandoned-cart and browse-abandonment flows live in 30 days on $20-40/month. Which platform fits, and why does Mailchimp's free/Essentials tier fail this specific brief even though it's cheaper?",
          toolName: "Google Sheets",
          where: "A one-tab platform comparison worksheet.",
          procedure: [
            "List MVMT's four inputs: Shopify-native store, full order-history sync needed, 30-day timeline, $20-40/month budget",
            "Score Mailchimp against each input, flag that behavioral segmentation is Premium-only ($350/mo), well above budget",
            "Score Klaviyo against each input, flag that abandoned-cart and browse-abandonment ship on every paid tier from $20/month",
            "Pick the platform that clears the budget line without a feature-tier workaround",
            "Name the first 3 flows in build order: Welcome Series, Abandoned Cart, Browse Abandonment",
          ],
          outputSample:
            "MVMT platform decision\n\nInput -> Mailchimp -> Klaviyo\nShopify order sync -> Manual/limited -> Native, automatic\nBehavioral segmentation -> Premium tier only ($350/mo) -> All paid tiers ($20/mo+)\n30-day flow launch -> Possible but manual setup -> Native flow templates, faster\n\nDecision: Klaviyo. Budget clears at $20-40/mo, behavioral flows don't require a $350/mo upgrade.\n\nFirst 3 flows to build, in order:\n1. Welcome Series (new subscriber -> first purchase)\n2. Abandoned Cart (highest RPR of any flow type)\n3. Browse Abandonment (catches window-shoppers who never added to cart)",
          healthy:
            "The decision cites the specific budget and data-sync inputs from the brief, not a general 'Klaviyo is better for ecommerce' statement.",
          unhealthy:
            "Recommending Klaviyo (or Mailchimp) without checking it against MVMT's actual $20-40/month ceiling and 30-day timeline.",
          interpret:
            "Platform fit is a filter against your own store's data depth and budget, not a popularity contest between two well-known tools.",
          soWhat: [
            {
              symptom: "Picking a platform because it's the one you've heard of",
              action: "Score both platforms against your specific budget and data-sync needs before deciding",
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
            role: "Build the platform comparison worksheet",
            why: "Free, no account friction, sortable columns for scoring each platform",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Mailchimp",
            role: "Confirm current free-tier feature limits before ruling it out",
            why: "Free plan (500 contacts) lets you check Premium's $350/mo segmentation gate firsthand",
            required: false,
            lastVerified: "2026-08",
          },
          {
            toolName: "Klaviyo",
            role: "Confirm which flows ship on the $20/month paid tier",
            why: "Free tier caps at 250 contacts but the pricing page shows exactly what unlocks at $20/month",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page platform recommendation memo naming the platform, the budget it clears, and the first 3 flows to build in priority order.",
      sampleOutput:
        "Allbirds platform decision\n\nInput -> Mailchimp -> Klaviyo\nShopify order sync -> Manual/limited -> Native, automatic\nBehavioral segmentation -> Premium tier only ($350/mo) -> All paid tiers ($20/mo+)\n\nDecision: Klaviyo. Behavioral segmentation ships at $20/month instead of requiring a $350/month upgrade.\n\nFirst 3 flows to build, in order:\n1. Welcome Series\n2. Abandoned Cart\n3. Post-Purchase (cross-sell based on order history)",
      successCriteria: [
        "Scores both platforms against the brief's actual budget and data-sync inputs, not general reputation",
        "Names the correct budget-clearing platform and justifies it against the $350/mo Premium gate",
        "Lists exactly 3 flows in a defensible priority order",
      ],
      portfolioReady: true,
    },
    {
      id: "mailchimp-klaviyo-abandoned-cart-forecast",
      tier: "mini",
      archetype: "forecast",
      title: "Forecasting the Abandoned-Cart Flow's Revenue Lift",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Using Klaviyo's published 2024 benchmark ranges for abandoned-cart revenue per recipient, forecast a realistic monthly revenue range from launching the flow and decide whether it justifies the $20/month platform cost.",
      companyId: "rxbar",
      scenario:
        "RXBAR runs its list on Mailchimp's free plan today with no abandoned-cart automation. Roughly 1,200 shopping carts are abandoned on the site each month.",
      brief:
        "Forecast a low, mid, and high monthly revenue range from an abandoned-cart flow using real benchmark data, then decide if the $20/month Klaviyo cost is justified.",
      mode: "diagnostic",
      conceptsCovered: ["Forecasting flow revenue from benchmark RPR ranges instead of guessing"],
      steps: [
        {
          stepId: "step-1-benchmark-forecast",
          concept: "Forecasting flow revenue from benchmark RPR ranges instead of guessing",
          lessonAnchor: "the-numbers-what-real-performance-looks-like",
          theoryRecap:
            "Klaviyo's 2024 platform benchmarks show abandoned-cart flows average $3.65 revenue per recipient (RPR), with the top 10% of brands reaching $28.89 RPR and a 50.5% average open rate. The lesson notes flows generate nearly 41% of total email revenue from just 5.3% of sends.",
          question:
            "RXBAR has roughly 1,200 abandoned carts a month and no flow. Using the average and top-10% RPR benchmarks, what's the realistic monthly revenue range from launching an abandoned-cart flow, and does it clear the $20/month Klaviyo cost?",
          toolName: "Google Sheets",
          where: "A forecast worksheet with a low/mid/high scenario column.",
          procedure: [
            "Enter 1,200 as the monthly abandoned-cart volume",
            "Low estimate: 1,200 x $3.65 (average RPR) = $4,380/month",
            "High estimate: 1,200 x $28.89 (top 10% RPR) = $34,668/month",
            "Set the mid estimate conservatively at roughly half of average RPR ($1.80) to account for a brand-new, unoptimized flow: 1,200 x $1.80 = $2,160/month",
            "Compare every scenario against the $20/month platform cost",
          ],
          outputSample:
            "RXBAR abandoned-cart revenue forecast (1,200 carts/month)\n\nScenario -> RPR -> Monthly revenue -> vs. $20/mo cost\nConservative (new, unoptimized flow) -> $1.80 -> $2,160 -> 108x\nAverage (industry benchmark) -> $3.65 -> $4,380 -> 219x\nTop 10% (mature, optimized flow) -> $28.89 -> $34,668 -> 1,733x\n\nDecision: even the conservative scenario clears the $20/month cost by two orders of magnitude. Launch the flow.",
          healthy:
            "The forecast shows a range (low/mid/high), not a single optimistic number, and states the assumption behind the mid estimate.",
          unhealthy:
            "Assuming the top-10% benchmark ($28.89 RPR) as the expected outcome on day one of a brand-new flow.",
          interpret:
            "A forecast built on a real benchmark range, even a conservative one, is enough to justify a $20/month tool when the volume is real.",
          soWhat: [
            {
              symptom: "Hesitating to pay for Klaviyo because the ROI feels unproven",
              action: "Run the low-scenario math against your own cart-abandonment volume before deciding",
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
            role: "Build the low/mid/high revenue forecast",
            why: "Free, handles the multiplication and comparison instantly",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Klaviyo",
            role: "Check the $20/month tier's abandoned-cart flow templates before committing",
            why: "The free tier (250 contacts) is enough to preview flow-builder templates before paying",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A low/mid/high monthly revenue forecast with a clear launch/no-launch recommendation.",
      sampleOutput:
        "Casper Sleep abandoned-cart revenue forecast (2,000 carts/month)\n\nScenario -> RPR -> Monthly revenue -> vs. $20/mo cost\nConservative -> $1.80 -> $3,600 -> 180x\nAverage -> $3.65 -> $7,300 -> 365x\nTop 10% -> $28.89 -> $57,780 -> 2,889x\n\nDecision: launch. Conservative scenario alone covers the platform cost 180 times over.",
      successCriteria: [
        "Produces a low/mid/high forecast range using the cited benchmark RPR figures",
        "States the assumption behind the conservative estimate rather than defaulting to the average",
        "Reaches a launch/no-launch decision by comparing the forecast to the actual $20/month cost",
      ],
      portfolioReady: true,
    },
  ],
  "hotjar-clarity": [
    {
      id: "hotjar-clarity-heatmap-finding-audit",
      tier: "mini",
      archetype: "audit",
      title: "Reading a Heatmap: Signal or Noise?",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a synthetic set of heatmap and scroll-map findings from a pricing page, apply the lesson's pattern-over-single-session rule to decide which findings are real problems worth fixing and which are noise or a single user's quirk.",
      companyId: "casper-sleep",
      scenario:
        "You're auditing Casper's pricing page heatmap data after a CRO teammate flags 'something's wrong with this page' but hasn't isolated what.",
      brief:
        "Separate the findings that show a repeated pattern across many sessions from the ones that are a single visitor's quirk, then rank the real problems by fix priority.",
      mode: "teardown",
      conceptsCovered: ["Requiring a repeated pattern across sessions before treating a heatmap finding as real"],
      teardownItems: [
        {
          itemId: "casper-pricing-heatmap-findings",
          specimen:
            "Casper pricing page heatmap + scroll map findings (synthetic, 2-week sample, 3,400 sessions):\n\n1. Scroll map: only 42% of visitors scroll past the mattress comparison table before leaving.\n2. Click map: a red click cluster sits on the word 'financing' in a paragraph, it is not a link (appears in 61% of recorded sessions that reach that section).\n3. Session recording #1,204: one visitor rage-clicked the 'Compare' tab 6 times, then left.\n4. Click map: 38% of sessions click the FAQ accordion for 'Is there a trial period?' before any other element on the page.\n5. Scroll map: 91% of visitors reach the main CTA button, it sits above the fold.\n6. Session recording #2,890: one visitor's cursor moved erratically across the page for 45 seconds with no clicks (their internet connection likely lagged).",
          specimenSource: "synthetic-realistic",
          prompt:
            "For each of the 6 findings, decide: real problem worth fixing, or noise/single-session quirk? Rank the real problems by fix priority.",
          answerKey: [
            {
              defect: "Finding 1: only 42% scroll past the comparison table before leaving",
              severity: "critical",
              whyItMatters:
                "Nearly 6 in 10 visitors never see content below the comparison table, including the CTA-adjacent trust content. A repeated pattern across 3,400 sessions, not a single user.",
              lessonRef: "how-heatmaps-work",
              owner: "either",
            },
            {
              defect: "Finding 2: 61% of sessions click on the non-clickable word 'financing'",
              severity: "critical",
              whyItMatters:
                "A red cluster on a non-clickable element appearing in the majority of sessions means visitors expect it to be a link. This is the exact 'expects a button' signal the lesson describes, and it is blocking a financing-interested buyer segment.",
              lessonRef: "how-heatmaps-work",
              owner: "developer",
            },
            {
              defect: "Finding 4: 38% of sessions open the trial-period FAQ before touching anything else",
              severity: "moderate",
              whyItMatters:
                "Over a third of visitors want trial-period info before anything else, a real repeated pattern that suggests trial terms belong higher on the page, not buried in an FAQ accordion.",
              lessonRef: "how-heatmaps-work",
              owner: "you",
            },
          ],
          distractors: [
            "Finding 3: one rage-click session on the Compare tab (n=1, not a repeated pattern, watch a few more sessions before acting)",
            "Finding 5: 91% reach the CTA above the fold (this is a healthy number, not a problem)",
            "Finding 6: one erratic 45-second cursor session with no clicks (most likely a connectivity issue, not a UX defect)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Hotjar",
            role: "Pull scroll maps and click maps for the page under audit",
            why: "Free tier includes heatmaps on a limited number of daily sessions, enough for a single-page audit",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log each finding with its session count and severity ranking",
            why: "Keeps the audit trail simple and shareable with a team",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A ranked list of the real, pattern-backed problems on the page, with the single-session quirks explicitly excluded and why.",
      sampleOutput:
        "Intertop pricing-page heatmap audit\n\nReal problems (ranked by priority):\n1. Non-clickable price-match badge, 58% click rate, add a real link\n2. Shipping-cost FAQ opened first by 41% of sessions, move above fold\n\nExcluded as noise:\n- 1 session with a stuck cursor (likely a device issue, not a pattern)\n- 1 rage-click on the size guide (n=1, watch more sessions before acting)",
      successCriteria: [
        "Correctly separates the 3 pattern-backed findings from the 3 single-session/healthy-metric distractors",
        "Ranks the real problems using session-count as the priority signal, not their order in the list",
        "States a specific reason a distractor was excluded (n=1, healthy number, likely connectivity) rather than just labeling it noise",
      ],
      portfolioReady: true,
    },
    {
      id: "hotjar-clarity-session-recording-triage",
      tier: "mini",
      archetype: "teardown",
      title: "Session Recording Triage: What Actually Needs Fixing?",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a synthetic batch of 8 session-recording notes from a checkout flow, apply the lesson's dead-click/rage-click/form-abandonment vocabulary to sort real friction from healthy behavior, and propose the first fix.",
      companyId: "allbirds",
      scenario:
        "You're reviewing 8 session-recording notes from Allbirds' checkout flow after Microsoft Clarity flagged an unusual spike in dead clicks on mobile.",
      brief:
        "Classify each session note as a real friction signal or normal behavior, then propose the single highest-priority fix based on the pattern.",
      mode: "teardown",
      conceptsCovered: ["Classifying session-recording behavior into dead clicks, rage clicks, and form abandonment before acting"],
      teardownItems: [
        {
          itemId: "allbirds-checkout-session-notes",
          specimen:
            "Allbirds mobile checkout, 8 session-recording notes (synthetic, 1-week sample):\n\nA. User taps the greyed-out 'Apply' promo code button 4 times in under 3 seconds, then abandons cart.\nB. User fills in shipping address, scrolls to payment, pauses 12 seconds, then completes purchase normally.\nC. User taps a static trust badge icon ('Secure Checkout') twice, nothing happens, then continues to payment normally.\nD. User types a full email into the newsletter opt-in field, then deletes it and leaves the page immediately.\nE. User taps the promo code field label text (not the input box itself) 3 times before finding the actual input.\nF. User completes checkout in 40 seconds with zero extra taps, fastest session in the batch.\nG. User taps 'Apply' promo code button 5 times rapidly on a cart worth $340, then closes the tab.\nH. User scrolls up and down the shipping form twice before completing it normally.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Classify each of the 8 sessions as a real friction signal (name the type: dead click, rage click, or form abandonment) or normal behavior. Propose the highest-priority fix.",
          answerKey: [
            {
              defect: "Session A and G: rage clicks on a greyed-out 'Apply' promo code button, repeated across 2 separate sessions",
              severity: "critical",
              whyItMatters:
                "A repeated rage-click pattern on the same disabled element, one on a $340 cart, signals a broken or unclear promo-code state that is directly costing checkouts.",
              lessonRef: "how-session-recordings-work",
              owner: "developer",
            },
            {
              defect: "Session E: dead click on the promo code field's label text instead of the input box",
              severity: "moderate",
              whyItMatters:
                "Users expect the label to be clickable into the field; a dead click here compounds the same promo-code area flagged in A and G, pointing at one root cause.",
              lessonRef: "how-session-recordings-work",
              owner: "developer",
            },
            {
              defect: "Session D: full newsletter email typed then deleted, immediate exit (form abandonment)",
              severity: "moderate",
              whyItMatters:
                "Typing then deleting an entry before leaving suggests a change of mind or an unclear value exchange for the opt-in, worth a single session watch before ruling on it, but distinct from the checkout-blocking issue.",
              lessonRef: "how-session-recordings-work",
              owner: "you",
            },
          ],
          distractors: [
            "Session B: a 12-second pause before payment (normal deliberation, not friction)",
            "Session C: two taps on a static trust badge icon that don't block the user from continuing (harmless dead click, not the priority)",
            "Session F: a 40-second friction-free completion (this is the healthy baseline, not a problem)",
            "Session H: scrolling the shipping form up and down before completing normally (re-reading, not confusion that blocks conversion)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Hotjar",
            role: "Filter and watch session recordings on the checkout flow",
            why: "Free tier includes session recordings, filterable by page and rage-click flag",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log each session's classification and severity for the triage summary",
            why: "Free, simple audit trail for a small batch of sessions",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A triage table classifying all 8 sessions, with the single highest-priority fix named and justified by the repeated pattern.",
      sampleOutput:
        "TurkNet checkout session triage (8 sessions)\n\nReal friction:\n- 2x rage click on disabled 'gift wrap' checkbox (root cause: checkbox stays greyed out until an unrelated field is filled)\n- 1x dead click on a non-clickable delivery-date icon\n\nNormal behavior:\n- 3x standard-pace completions\n- 1x re-read scroll on the address form\n- 1x form field typed then deleted, single occurrence\n\nPriority fix: make the gift-wrap checkbox active by default, or clearly label the dependency that unlocks it.",
      successCriteria: [
        "Correctly identifies the repeated rage-click pattern (sessions A and G) as the top-priority, checkout-blocking issue",
        "Distinguishes dead clicks, rage clicks, and form abandonment using the lesson's own definitions",
        "Does not flag the 4 healthy/single-occurrence sessions (B, C, F, H) as priority problems",
      ],
      portfolioReady: true,
    },
  ],

  "notion-airtable": [
    {
      id: "notion-airtable-system-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build the Split: A Notion Brief Template Plus a Tracking Sheet",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Apply the lesson's 'search and filter vs. read and understand' rule to build two small, connected artifacts: a Notion-style content brief template and a Google Sheets tracker, so writing and tracking never collide in the same document again.",
      companyId: "klaviyo",
      scenario:
        "You're a marketing ops coordinator at Klaviyo. Content briefs and the publishing calendar currently live in the same shared doc, and nobody can tell what's approved versus what's still a draft.",
      brief:
        "Split the doc into a reusable brief template (the 'thinking' artifact) and a status-tracked sheet (the 'tracking' artifact), then link them so a status change in the sheet always points back to the right brief.",
      mode: "build",
      conceptsCovered: ["Deciding what lives in a writing tool vs. a tracking tool"],
      steps: [
        {
          stepId: "step-1-build-brief-and-tracker",
          concept: "Deciding what lives in a writing tool vs. a tracking tool",
          lessonAnchor: "the-core-difference-in-plain-english",
          theoryRecap:
            "The lesson's core test is: does this need to be searched and filtered by 10 people, or read and understood by 10 people? Writing goes in a doc-style tool; status, dates, and filters go in a sheet-style tool.",
          question:
            "You have one messy doc mixing brief prose with a status column. Which two pieces do you split it into, and what connects them?",
          toolName: "Notion",
          where: "Notion, new page from a blank template; Google Sheets, new blank spreadsheet",
          procedure: [
            "In Notion, create a 'Content Brief Template' page with fixed sections: Goal, Audience, Keyword/Angle, Outline, Review Checklist",
            "In Google Sheets, create a tracker with columns: Title, Owner, Status, Due Date, Notion Brief URL",
            "Copy the current doc's prose into the Notion template, one brief per page",
            "For each row in the sheet, paste the matching Notion page's share link into the 'Notion Brief URL' column",
            "Add a filter view on the sheet's Status column so 'In Review' and 'Published' can be isolated instantly",
          ],
          outputSample:
            "Squarespace Q3 tracker (excerpt)\n\nTitle | Owner | Status | Due Date | Notion Brief URL\nWebsite templates for photographers | J. Alvarez | In Review | Aug 22 | notion.so/brief-photog-templates\nDomain vs. subdomain guide | J. Alvarez | Draft | Aug 29 | notion.so/brief-domain-guide\nSquarespace vs Wix pricing | R. Chen | Published | Aug 15 | notion.so/brief-pricing-compare",
          healthy:
            "Every row's URL opens a Notion page with the full brief; the sheet itself has zero paragraphs of prose.",
          unhealthy:
            "A 'Notes' column in the sheet slowly fills with paragraph-length brief content because it was faster than opening Notion.",
          interpret:
            "The moment a tracker column needs word-wrap to be readable, that content belongs in the writing tool, not the tracking tool.",
          soWhat: [
            {
              symptom: "A sheet column is being used to store paragraph-length briefs",
              action: "Move the prose to a linked Notion page and leave only a URL in the sheet",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Hosts the reusable content brief template, one page per piece",
            why: "Free plan supports unlimited blocks for individuals, no cost barrier to start",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Hosts the status tracker with the linked Notion URL column",
            why: "Free, familiar spreadsheet filtering, no dedicated tracking tool required for a mini system",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "A paid Airtable or Notion database tier adds linked records and automations so the URL-pasting step above happens automatically, worth it once the tracker passes about 50 active rows.",
      },
      deliverable:
        "A Notion brief template plus a Google Sheets tracker, linked by URL, with a working filter view isolating in-review work.",
      sampleOutput:
        "Squarespace Q3 tracker (excerpt)\n\nTitle | Owner | Status | Due Date | Notion Brief URL\nWebsite templates for photographers | J. Alvarez | In Review | Aug 22 | notion.so/brief-photog-templates\nDomain vs. subdomain guide | J. Alvarez | Draft | Aug 29 | notion.so/brief-domain-guide",
      successCriteria: [
        "Every tracker row links to a real Notion brief page, not inline prose",
        "The tracker has a working filter view by Status",
      ],
      portfolioReady: true,
    },
    {
      id: "notion-airtable-workspace-audit",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Defects: A Shared Marketing Ops Workspace Gone Wrong",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a description of a real-feeling shared Notion/tracker setup, tell apart the structural mistakes that break the system from the stylistic choices that are just personal preference.",
      companyId: "squarespace",
      scenario:
        "You're auditing the shared workspace of Squarespace's 6-person lifecycle marketing team, which has grown organically for a year with no one person owning its structure.",
      brief:
        "Read the workspace description and separate the defects that will actively cause missed deadlines or duplicated work from the choices that are merely not how you'd have done it.",
      mode: "teardown",
      conceptsCovered: ["Auditing a mixed writing-and-tracking workspace for structural defects"],
      teardownItems: [
        {
          itemId: "item-1-workspace-audit",
          specimenSource: "synthetic-realistic",
          specimen:
            "The team's single Notion page called 'Marketing Hub' contains: a database with columns Title, Status, Channel, and a long-text 'Brief' column where each row's full brief (goal, audience, outline) is typed directly into the cell. There is no calendar or board view, only the default table view. The 'Status' column has 11 different values typed freely by hand ('draft', 'Draft', 'in review', 'Needs Review', 'ready', 'live', etc.), so filtering by status misses rows. Two people maintain duplicate 'Brief' pages for the same campaign because neither could find the other's version in the long table. The team does keep a separate one-page 'Brand Voice Guide' linked from the hub's sidebar, updated quarterly by the same person each time. New hires are pointed to this hub on day one as their only onboarding document.",
          prompt:
            "List every structural defect in this workspace that would cause missed deadlines, duplicated work, or broken filtering, with severity and why it matters. Then note anything described here that is a legitimate design choice, not a defect.",
          answerKey: [
            {
              defect: "Full brief prose typed directly into a database cell instead of a linked sub-page or separate doc",
              severity: "critical",
              whyItMatters:
                "Long-text database cells don't get their own comment threads or version history the way a page does, and they make the table itself unreadable, which is exactly the 'read vs. filter' collision the lesson warns against.",
              lessonRef: "the-core-difference-in-plain-english",
              owner: "you",
            },
            {
              defect: "Status values typed freely by hand instead of a fixed select property",
              severity: "critical",
              whyItMatters:
                "Free text produces near-duplicate values ('draft' vs 'Draft') that a filter treats as different statuses, so filtered views silently miss rows.",
              lessonRef: "1-editorial-calendar",
              owner: "you",
            },
            {
              defect: "No calendar or board view configured on top of the raw table",
              severity: "moderate",
              whyItMatters:
                "The lesson's whole pitch for a tracking tool is switching views (calendar to see publish dates, board to see stage); a table-only setup gives up that advantage entirely.",
              lessonRef: "1-editorial-calendar",
              owner: "you",
            },
            {
              defect: "Two people maintain duplicate brief pages for the same campaign",
              severity: "moderate",
              whyItMatters:
                "A downstream symptom of the first two defects: when briefs aren't easy to find or filter, people just write a new one instead of searching.",
              lessonRef: "the-core-difference-in-plain-english",
              owner: "you",
            },
          ],
          distractors: [
            "Keeping a separate one-page Brand Voice Guide instead of merging it into the main hub database",
            "Using the hub as the single onboarding document for new hires",
            "Having one person own quarterly updates to the Brand Voice Guide",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "The workspace being audited; also where the fixed 'select' property gets configured",
            why: "Free plan is enough to inspect and fix a database's property types",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A written defect list, each with severity and a one-sentence fix, separated from a short list of things that are fine as-is.",
      sampleOutput:
        "Klaviyo workspace audit (excerpt)\n\nCRITICAL: Brief prose lives in a database cell, not a linked page. Fix: move each brief to its own sub-page.\nCRITICAL: Status typed freely, 11 near-duplicate values. Fix: convert to a fixed select property with 5 options.\nFINE: Separate Brand Voice Guide page, single named owner.",
      successCriteria: [
        "Identifies the free-text Status property as the cause of broken filtering",
        "Correctly separates at least one genuine defect from at least one non-defect",
      ],
      portfolioReady: true,
    },
  ],
  "zapier-automation": [
    {
      id: "zapier-automation-chain-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Design a Zap: Trigger, Filter, and Actions on Paper First",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Apply the lesson's 'map before you build' rule (Common Mistake 2) to design a complete Zap on paper, trigger, filter, and every action in order, before ever opening the Zapier interface.",
      companyId: "mailchimp",
      scenario:
        "You're the growth marketer at Mailchimp's own internal team, standardizing how new webinar registrants get routed into the right nurture sequence.",
      brief:
        "Write the full logic string first ('When X, AND if Y, then do A then B then C'), matching the lesson's Zap anatomy: one trigger, one filter, then ordered actions.",
      mode: "build",
      conceptsCovered: ["Designing a Zap's trigger, filter, and action order before building it"],
      steps: [
        {
          stepId: "step-1-design-zap-spec",
          concept: "Designing a Zap's trigger, filter, and action order before building it",
          lessonAnchor: "how-a-zap-actually-works",
          theoryRecap:
            "Every Zap follows the same shape: a Trigger app event, an optional Filter that stops irrelevant runs, then one or more Actions in sequence. The lesson's Mistake 2 is skipping this on-paper design step and discovering broken logic mid-build.",
          question:
            "New Zoom webinar registrants need to reach the right nurture sequence, but only if they registered for the 'Growth Marketing' series, not any other webinar on the account.",
          toolName: "Google Sheets",
          where: "A blank Google Sheet or plain doc, before opening zapier.com",
          procedure: [
            "Write the trigger: 'New registrant in Zoom webinar'",
            "Write the filter: 'Only continue if Webinar Name contains Growth Marketing'",
            "List Action 1: 'Create/update contact in Mailchimp'",
            "List Action 2: 'Add tag webinar-registered-growth to that contact'",
            "List Action 3: 'Enroll contact in the Growth Marketing nurture automation'",
            "Estimate monthly task volume: registrants/month x 3 action steps",
          ],
          outputSample:
            "Snowflake webinar Zap spec (excerpt)\n\nTRIGGER: New registrant, Zoom webinar 'Data Cloud Deep Dive'\nFILTER: Webinar Name contains 'Data Cloud'\nACTION 1: Create/update contact in Marketo\nACTION 2: Tag 'webinar-data-cloud'\nACTION 3: Enroll in Data Cloud nurture sequence\nEstimated volume: 180 registrants/month x 3 actions = 540 tasks/month",
          healthy:
            "The filter line exists and names the exact field and value it checks, catching cross-webinar contamination before any action runs.",
          unhealthy:
            "Skipping straight to Action 1 with no filter line, so every registrant from every webinar gets the same nurture sequence.",
          interpret:
            "A filter is not optional decoration; a missing filter is the single most common reason a Zap 'sort of works' but pollutes lists over time.",
          soWhat: [
            {
              symptom: "Multiple webinars share one trigger with no filter",
              action: "Add a filter step naming the exact field/value before building any action",
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
            role: "Where the Zap logic gets written out in plain language before touching Zapier",
            why: "Free, fastest way to draft trigger/filter/action order without paying for a Zap you'll rebuild",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Zapier",
            role: "Where the designed spec actually gets built once the logic is confirmed",
            why: "Free plan (5 Zaps, 100 tasks/month) is enough to build and test one Zap from this spec",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Make",
            role: "Alternative build target for Zaps with heavier branching logic",
            why: "Cheaper per-operation pricing once a single Zap needs more than a handful of branches",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "Stay on Zapier's free plan until the spec's estimated task volume gets close to 100/month, then upgrade to Starter rather than switch tools mid-project.",
      },
      deliverable:
        "A written Zap spec (trigger, filter, ordered actions, estimated monthly task volume) ready to build directly in Zapier with zero mid-build surprises.",
      sampleOutput:
        "Snowflake webinar Zap spec (excerpt)\n\nTRIGGER: New registrant, Zoom webinar 'Data Cloud Deep Dive'\nFILTER: Webinar Name contains 'Data Cloud'\nACTION 1: Create/update contact in Marketo\nACTION 2: Tag 'webinar-data-cloud'\nACTION 3: Enroll in Data Cloud nurture sequence",
      successCriteria: [
        "Spec includes a named filter condition, not just a trigger and actions",
        "Monthly task volume is estimated before the Zap is built",
      ],
      portfolioReady: true,
    },
    {
      id: "zapier-automation-chain-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Find the Broken Zap: A Lead-Routing Spec With Hidden Failure Points",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a written Zap spec that looks complete, apply the lesson's Common Mistakes list to find the failure points that won't show up until the Zap has been live for weeks.",
      companyId: "snowflake",
      scenario:
        "You're reviewing a lead-routing Zap spec handed off by a contractor before Snowflake's marketing team turns it on for a launch driving heavy form traffic.",
      brief:
        "Read the spec and flag every failure point against the lesson's four common mistakes, then note which parts of the spec are actually fine.",
      mode: "teardown",
      conceptsCovered: ["Auditing a Zap spec against Zapier's common failure modes"],
      teardownItems: [
        {
          itemId: "item-1-zap-spec-teardown",
          specimenSource: "synthetic-realistic",
          specimen:
            "TRIGGER: New submission, 'Data Cloud Demo Request' form (polls every 15 minutes on the free plan)\nACTION 1: Create contact in Salesforce\nACTION 2: Add contact to Mailchimp list 'Demo Requests'\nACTION 3: Post message to #sales-leads Slack channel\nThe spec was tested once during setup with one sample submission, then turned on. Estimated volume was not calculated before launch; the launch campaign is expected to drive roughly 600 form fills in the first week. Error notifications in the Zapier account are left at the default (off). Slack message content includes the lead's name, company, and which page they submitted from.",
          prompt:
            "Match each failure point in this spec to one of the lesson's four common mistakes, and rate severity. Then note anything in the spec that is already done correctly.",
          answerKey: [
            {
              defect: "No filter step before creating the Salesforce contact",
              severity: "moderate",
              whyItMatters:
                "Without a filter, every submission (including obvious test or spam entries) becomes a Salesforce record and a Slack ping, creating noise the sales team has to manually ignore.",
              lessonRef: "common-mistakes-to-avoid",
              owner: "you",
            },
            {
              defect: "Task volume was never estimated before launch, and the free/Starter plan's 15-minute polling plus low task caps will be overwhelmed by 600 fills in a week",
              severity: "critical",
              whyItMatters:
                "The lesson's Mistake 3 is exactly this: a single high-traffic form can burn through a plan's task limit in days, silently stopping the Zap from running once the cap is hit.",
              lessonRef: "common-mistakes-to-avoid",
              owner: "you",
            },
            {
              defect: "Error notifications are left off",
              severity: "critical",
              whyItMatters:
                "If any one action fails (a Salesforce field mapping error, an expired OAuth token), the whole chain can fail silently for days with nobody aware leads are being dropped.",
              lessonRef: "common-mistakes-to-avoid",
              owner: "you",
            },
            {
              defect: "Only tested once with a single sample submission before going live",
              severity: "moderate",
              whyItMatters:
                "One test run doesn't surface edge cases like blank optional fields or unusual characters in name fields, which a busier launch week will produce at scale.",
              lessonRef: "common-mistakes-to-avoid",
              owner: "you",
            },
          ],
          distractors: [
            "Including the lead's name, company, and source page in the Slack message",
            "Using a 3-action Zap instead of splitting it into three separate Zaps",
            "Choosing Salesforce as Action 1 instead of Mailchimp",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Zapier",
            role: "Where the spec's error-notification setting and task-volume plan get fixed",
            why: "Error notifications and Zap history review are available on every Zapier plan including free",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Zapier",
            role: "A higher task-volume tier once the estimated 600 fills/week x 3 actions is confirmed",
            why: "Free/Starter task caps will be exceeded by the estimated launch-week volume",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A written list of failure points mapped to the lesson's four common mistakes, each rated for severity, plus a short list of what the spec already got right.",
      sampleOutput:
        "Mailchimp lead-routing spec review (excerpt)\n\nCRITICAL: No error notifications enabled, silent failures possible.\nCRITICAL: Task volume never estimated against a 600 fills/week launch.\nMODERATE: No filter step, spam/test entries pass through.\nFINE: Slack message includes name, company, and source page.",
      successCriteria: [
        "Correctly identifies the missing error notifications as the most severe risk",
        "Separates at least one genuine defect from at least one non-defect",
      ],
      portfolioReady: true,
    },
  ],

  "loom-vidyard": [
    {
      id: "loom-vidyard-tool-selection-tbo-tek",
      tier: "mini",
      archetype: "head-to-head",
      title: "Loom or Vidyard? Picking the Right Tool for a B2B Outreach Team",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real team profile (size, CRM dependency, and the specific outreach job to be done), apply the lesson's decision tree to choose Loom or Vidyard and justify the call against the tradeoffs the lesson lays out, not just brand familiarity.",
      companyId: "tbo-tek",
      scenario:
        "You're the marketing ops lead at TBO Tek, the B2B travel distribution platform connecting 147,000+ travel buyers to suppliers. The partnerships team wants to start sending personalized video outreach to travel agencies who haven't logged in for 60+ days, and they've asked you to pick one tool before the pilot starts next week.",
      brief:
        "Score the team against the lesson's decision tree (team size, CRM tracking need, analytics need) and recommend Loom or Vidyard with a one-paragraph justification a non-technical stakeholder can act on.",
      mode: "diagnostic",
      conceptsCovered: ["Choosing between Loom and Vidyard using the team-size and CRM-tracking decision tree"],
      steps: [
        {
          stepId: "step-1-decision-tree-scoring",
          concept: "Choosing between Loom and Vidyard using the team-size and CRM-tracking decision tree",
          lessonAnchor: "loom-vs-vidyard-which-one-should-you-use",
          theoryRecap:
            "The lesson's decision tree splits on two questions in order: team size (under 50 vs. 50+/enterprise), then whether the team needs CRM-triggered follow-ups. Vidyard's heat-map analytics and CRM triggers only pay off once a team is running outbound at real volume through a CRM.",
          question:
            "TBO Tek's partnerships team is 18 people, they already log every touch in Salesforce, and they want a follow-up task auto-created when a travel agency watches 80%+ of a video. Which tool does the decision tree point to, and why does team size alone not settle it here?",
          toolName: "Google Sheets",
          where: "Build a one-tab scoring sheet: columns for team size, CRM dependency, follow-up automation need, budget per seat.",
          procedure: [
            "Score team size: 18 people falls under the lesson's 'under 50' Loom-leaning branch",
            "Score CRM tracking need: the team explicitly wants an automated Salesforce follow-up task on 80% watch, which the lesson flags as a Vidyard-specific trigger feature",
            "Note the branch conflict: team size alone says Loom, but the CRM-trigger requirement overrides it in the lesson's own tree ('Need CRM tracking? Yes -> Loom Business or Vidyard')",
            "Price out both paths at 18 seats using the lesson's listed pricing ($12.50/user/mo Loom paid vs. $59/user/mo Vidyard Plus) to give the stakeholder a real budget number",
            "Write the one-paragraph recommendation naming the tool and the specific feature that decided it",
          ],
          outputSample:
            "RECOMMENDATION: Vidyard (Plus plan)\n\nTeam size (18) alone would point to Loom, but the requirement for an automated Salesforce follow-up task triggered at 80% watch is a Vidyard-specific feature the lesson calls out explicitly — Loom has no CRM-trigger layer at any plan tier. Cost at 18 seats: ~$1,062/mo (Vidyard Plus) vs. ~$225/mo (Loom paid). Recommend piloting Vidyard with 5 reps for one month before rolling out to all 18, since the CRM trigger is the whole point of the ask.",
          healthy:
            "The recommendation names the one deciding feature (CRM triggers) instead of just repeating 'team size says X.'",
          unhealthy:
            "Picking Loom because it's cheaper without addressing that the team's stated requirement (auto follow-up task) doesn't exist on Loom.",
          interpret:
            "The decision tree has an override condition, not just a single branch. A stated automation requirement outranks the size heuristic every time.",
          soWhat: [
            {
              symptom: "Team picks the cheaper tool and then can't build the automation they asked for",
              action: "Confirm the specific trigger/analytics requirement before pricing, not after",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Build the scoring matrix and price comparison", why: "Free, no account friction, easy to share with a non-technical stakeholder", required: true, lastVerified: "2026-08" },
          { toolName: "Loom", role: "Reference the free-tier feature list while scoring", why: "Free plan is enough to confirm what's included before recommending a paid tier", required: false, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Vidyard", role: "Confirm CRM-trigger and heat-map features are on the Plus plan before recommending it", why: "The decision hinges on a feature that's only on Vidyard's paid tier", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A one-page scoring matrix plus a one-paragraph tool recommendation with a per-seat cost estimate.",
      sampleOutput:
        "Go Digit General Insurance, video outreach tool decision (excerpt)\n\nTeam: 12-person renewals team, no CRM integration required, wants speed over analytics.\nScore: team size < 50 (Loom), no CRM trigger need (Loom), no analytics need (Loom).\nRECOMMENDATION: Loom Business ($12.50/user/mo). No branch override applies here — every criterion points the same direction.",
      successCriteria: [
        "Correctly identifies which lesson criterion (size vs. CRM trigger) actually decides the recommendation",
        "Names the specific Vidyard-only feature the requirement depends on, not just 'more analytics'",
        "Includes a real per-seat cost estimate using the lesson's stated pricing",
      ],
      portfolioReady: true,
    },
    {
      id: "loom-vidyard-outreach-video-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Reply-Rate Autopsy: Two Draft Outreach Videos Before They Go Out",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Review two drafted video-outreach scripts against the lesson's 5-step recording framework and common-mistakes list, and flag the specific defects that will suppress reply rate before either video gets sent.",
      companyId: "go-digit-insurance",
      scenario:
        "You're reviewing scripts for Go Digit General Insurance's renewals team before their first video-outreach batch goes out to lapsed policyholders. Two reps submitted their planned video scripts for sign-off.",
      brief: "Find the defects in each script against the lesson's 5-step framework and common-mistakes list, rank by severity, and don't get distracted by things the lesson never actually flags as a problem.",
      mode: "teardown",
      conceptsCovered: [
        "The 5-step framework for recording a reply-worthy sales video",
        "The common mistakes that kill video-outreach results",
      ],
      teardownItems: [
        {
          itemId: "item-1-rep-a-script",
          specimen:
            "REP A SCRIPT — planned for lapsed policyholders (renewal >45 days overdue)\n\"Hi there, hope you're doing well! Just wanted to reach out and introduce myself and let you know about some great new features we've added. Feel free to reach out if you have any questions!\"\nPlanned length: 2:40\nDelivery: recorded as a screen share of the company's generic product deck, no research into the specific policyholder\nSend method: MP4 file attached to the email",
          specimenSource: "synthetic-realistic",
          prompt: "This script is scheduled to go out to 40 lapsed policyholders tomorrow. What's wrong with it against the lesson's framework?",
          answerKey: [
            {
              defect: "No research and no name in the first five seconds ('Hi there' instead of the person's name)",
              severity: "critical",
              whyItMatters: "The lesson's Step 1 and Step 2 both hinge on this: a generic opening is the exact 'introduce myself' pattern the lesson calls worse than no video, because people can tell in three seconds it was recorded once for everyone.",
              lessonRef: "How to Record a Great Sales Video in 5 Steps",
              owner: "you",
            },
            {
              defect: "Runs 2:40, over the 2-minute cliff the lesson names",
              severity: "critical",
              whyItMatters: "The lesson states watch rates fall off a cliff past 2:01. At 2:40 the video is well past the point where most recipients stop watching before the message lands.",
              lessonRef: "How to Record a Great Sales Video in 5 Steps",
              owner: "you",
            },
            {
              defect: "Sent as an MP4 file attachment instead of a shareable link",
              severity: "moderate",
              whyItMatters: "The lesson's common-mistakes list flags attachments specifically: they trigger spam filters and take longer to download, and both tools generate a link automatically, so there's no reason to attach the file.",
              lessonRef: "How to Record a Great Sales Video in 5 Steps",
              owner: "you",
            },
          ],
          distractors: [
            "The video uses a screen share instead of webcam, which the lesson never says is required.",
            "It's being sent to 40 people at once, which the lesson doesn't treat as a defect by itself.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-rep-b-script",
          specimen:
            "REP B SCRIPT — planned for lapsed policyholders\n\"Hey Priya, I pulled up your policy before recording this — noticed your two-wheeler renewal lapsed on the 12th. Quick 40-second update on what changed with our renewal process, then I'll let you go.\"\nPlanned length: 0:42\nThumbnail: generic company logo, same for every recipient\nAnalytics plan: none, rep does not plan to check who watched before following up",
          specimenSource: "synthetic-realistic",
          prompt: "This script fixes the obvious problems from Rep A's draft. What's still wrong against the lesson's full framework?",
          answerKey: [
            {
              defect: "Generic thumbnail identical for every recipient",
              severity: "moderate",
              whyItMatters: "The lesson's Step 4 is specific: a personalized thumbnail (wave, whiteboard with the company name) increases watch rates from 42% to 58%. A generic logo thumbnail throws away that lift for free.",
              lessonRef: "How to Record a Great Sales Video in 5 Steps",
              owner: "you",
            },
            {
              defect: "No plan to check analytics or follow up on high-watch viewers",
              severity: "moderate",
              whyItMatters: "Step 5 says a follow-up within the hour of a full watch performs far better than waiting a day. Skipping the analytics check means the rep loses the single best-timed follow-up opportunity in the whole sequence.",
              lessonRef: "How to Record a Great Sales Video in 5 Steps",
              owner: "you",
            },
          ],
          distractors: [
            "The video is 42 seconds, which is well under the 90-second guideline and not a defect.",
            "It names the specific policyholder and the specific lapse date, which is exactly what the lesson recommends.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Loom", role: "Record and review draft scripts as short test videos before batch-sending", why: "Free tier covers unlimited script review recordings", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Vidyard", role: "Add watch-analytics and follow-up triggers once the script quality is fixed", why: "Analytics only matter after the video itself stops being the problem", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A defect list per script, ranked by severity, with the specific lesson rule each defect violates.",
      sampleOutput:
        "MapmyIndia, video-outreach QA note (excerpt)\n\nScript flagged: opens with 'Hello valued customer' — no name, no research reference. CRITICAL per Step 2. Recommend hold until rep re-records with the recipient's name and one specific reference to their account in the first five seconds.",
      successCriteria: [
        "Identifies all critical defects in Rep A's script (no research/name, over 2 minutes, file attachment)",
        "Identifies both remaining defects in Rep B's improved script (thumbnail, no analytics follow-up plan)",
        "Does not flag either distractor as a real defect",
      ],
      portfolioReady: true,
    },
  ],
  "analytics-tools": [
    {
      id: "analytics-tools-stack-fit-mapmyindia",
      tier: "mini",
      archetype: "head-to-head",
      title: "GA4, Mixpanel, or Amplitude: Matching the Tool to the Question",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given three real business questions from one team, apply the lesson's 'pick by question, not by brand' framework to route each question to the correct analytics tool and explain why the other two would waste budget or produce the wrong kind of answer.",
      companyId: "mapmyindia",
      scenario:
        "You're the analytics lead at MapmyIndia (CE Info Systems), the digital mapping and geospatial technology company. The product team has three open questions about the Move app and one quarter's tooling budget to answer them.",
      brief: "Route each of the three questions to GA4, Mixpanel, or Amplitude using the lesson's job-to-be-done framework, not brand familiarity, and flag the one question none of the three tools can actually answer well alone.",
      mode: "diagnostic",
      conceptsCovered: ["Routing an analytics question to the correct tool by job-to-be-done, not by brand"],
      steps: [
        {
          stepId: "step-1-route-three-questions",
          concept: "Routing an analytics question to the correct tool by job-to-be-done, not by brand",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's playbook routes by question type: 'Where is traffic coming from?' goes to GA4 (session-based, tuned for channel attribution). 'Where are users dropping off in onboarding?' goes to Mixpanel or Amplitude (event-based, built for funnels and cohorts). 'Why are they dropping off?' goes to a qualitative tool, not either analytics platform.",
          question:
            "The product team asks: (1) which paid channel drove the most Move app installs last month, (2) at which onboarding step do new users abandon the app, (3) why users abandon at that step. Which tool answers each, and which question can neither GA4 nor Mixpanel/Amplitude answer alone?",
          toolName: "Google Sheets",
          where: "Build a 3-row table: question, correct tool, one-line justification.",
          procedure: [
            "Route question 1 (channel attribution) to GA4, per the lesson's explicit 'Where is traffic coming from? -> GA4' mapping",
            "Route question 2 (onboarding drop-off step) to Mixpanel or Amplitude, since it needs event-based funnel analysis GA4's session model isn't built for",
            "Flag question 3 (why users drop off) as unanswerable by either analytics platform alone — the lesson states this needs a qualitative tool",
            "Check the lesson's Common Mistakes list before finalizing: confirm the team hasn't already tried using GA4 for question 2, which the lesson names as the single most common tool-fit mistake",
          ],
          outputSample:
            "ROUTING TABLE\n\nQ1 (which channel drove installs) -> GA4. Session-based attribution is exactly what GA4 is tuned for.\nQ2 (where do users drop off in onboarding) -> Mixpanel or Amplitude. Needs event-based funnel/cohort analysis, not GA4's session sampling.\nQ3 (why do they drop off) -> NEITHER. This needs a qualitative tool (session recordings, heatmaps) layered on top of whichever event tool answers Q2.",
          healthy: "Each question lands on a different tool category, and Q3 is correctly flagged as needing a qualitative layer neither analytics platform provides.",
          unhealthy: "Trying to answer all three questions with GA4 because it's already installed and free.",
          interpret: "A single 'analytics tool' can't answer every kind of question. The lesson's stack has four layers for a reason, and skipping straight to the free/familiar one is the most common mistake it names.",
          soWhat: [
            { symptom: "Team keeps building GA4 dashboards that never explain user behavior", action: "Route the funnel/cohort questions to an event-based tool instead", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Analytics 4", role: "Answer the channel-attribution question", why: "Free, already the default for most acquisition reporting", required: true, lastVerified: "2026-08" },
          { toolName: "Mixpanel", role: "Answer the onboarding drop-off question with event-based funnels", why: "Free tier covers up to 20M events/month, enough for most early-stage funnel analysis", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Amplitude", role: "Alternative to Mixpanel for the funnel question if the team already has an Amplitude contract", why: "Same job-to-be-done as Mixpanel, pick one, not both, per the lesson", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A 3-row routing table mapping each business question to the correct tool with a one-line justification.",
      sampleOutput:
        "TBO Tek, analytics tool routing note (excerpt)\n\nQ: 'Which partner integration email drove the most agent signups?' -> GA4 (channel attribution). Q: 'Where do new travel agents abandon the onboarding flow?' -> Mixpanel (event-based funnel). Do not route either question to Hotjar; that's step 2, only after the funnel tool identifies where the drop-off happens.",
      successCriteria: [
        "Correctly routes the channel-attribution question to GA4",
        "Correctly routes the onboarding drop-off question to an event-based tool (Mixpanel or Amplitude)",
        "Correctly flags the 'why' question as unanswerable by either analytics platform alone",
      ],
      portfolioReady: true,
    },
    {
      id: "analytics-tools-stack-audit-tbo-tek",
      tier: "core",
      archetype: "audit",
      title: "Auditing a Broken Analytics Stack Before It Costs Another Quarter",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a real description of a company's current analytics setup, apply the lesson's Common Mistakes list to identify which specific mistakes are present, rank them by cost, and recommend a fix order.",
      companyId: "tbo-tek",
      scenario:
        "You're brought in to review TBO Tek's marketing analytics setup after the CMO notices three different dashboards disagree on last month's signup number. The stack was built incrementally over 18 months with no single owner.",
      brief:
        "Read the stack description, match each symptom to a specific named mistake from the lesson, and produce a ranked fix order the CMO can act on this quarter.",
      mode: "diagnostic",
      conceptsCovered: [
        "Diagnosing which of the lesson's five named analytics mistakes a stack is making",
        "Prioritizing a CDP fix ahead of a new tool purchase when three tools disagree",
      ],
      steps: [
        {
          stepId: "step-1-match-symptoms-to-mistakes",
          concept: "Diagnosing which of the lesson's five named analytics mistakes a stack is making",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson names five specific mistakes: using GA4 for product questions, buying Amplitude/Mixpanel before an event schema exists, treating Hotjar as a statistical tool, confusing Looker Studio with Looker, and skipping a CDP so multiple tools disagree on the same number.",
          question:
            "TBO Tek's stack: GA4 is the only tool anyone uses (including for 'why do users drop mid-signup' questions), a $52K/year Amplitude contract was signed 4 months ago and still shows mostly blank dashboards, and marketing/product/finance each pull their own signup number from GA4, Amplitude, and the CRM export, and none of the three agree. Which named mistakes are present?",
          toolName: "Google Sheets",
          where: "Build a symptom-to-mistake mapping table with a severity column.",
          procedure: [
            "Match 'GA4 used for drop-off/why questions' to Mistake 1 (using GA4 to answer product questions)",
            "Match 'blank Amplitude dashboards 4 months into a $52K contract' to Mistake 2 (buying before an event schema exists) — this is the most expensive mistake on the list per the lesson's own framing",
            "Match 'three teams, three different signup numbers' to Mistake 5 (skipping a CDP, instrumenting each tool separately)",
            "Rank by cost: the standing $52K contract with nothing to show for it outranks the GA4 misuse, which costs time but no direct budget",
            "Write the fix order: pause new tool spend, build the event schema first, then revisit whether a CDP like Segment is justified at TBO Tek's current scale",
          ],
          outputSample:
            "MISTAKES PRESENT (ranked by cost)\n1. Mistake 2 (bought Amplitude before an event schema existed) — $52K/year, mostly unused. Fix first.\n2. Mistake 5 (no CDP, three teams computing signups three different ways) — no direct spend but blocks every decision that depends on a trusted number.\n3. Mistake 1 (using GA4 for the 'why do users drop mid-signup' question) — GA4's session model can't answer this regardless of instrumentation.\nNOT PRESENT: Mistake 3 (Hotjar as a stats tool) and Mistake 4 (Looker/Looker Studio confusion) — team has neither tool yet.",
          healthy: "Fix order starts with the standing contract that's actively losing money, not the cheapest-to-fix issue.",
          unhealthy: "Recommending a new CDP purchase before the existing $52K Amplitude contract's event schema gap is fixed.",
          interpret: "The most expensive mistake on the lesson's list isn't the one that's easiest to fix first; a stack audit has to rank by cost, not by convenience.",
          soWhat: [
            { symptom: "A signed analytics contract sits mostly unused months after purchase", action: "Freeze new analytics spend and build the event schema before touching anything else", effort: "half day" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-build-fix-order",
          concept: "Prioritizing a CDP fix ahead of a new tool purchase when three tools disagree",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's fifth mistake is explicit: skipping a CDP and instrumenting tools separately 'guarantees three tools will disagree on the same number within a quarter,' which is exactly what happened here.",
          question:
            "Given the ranked mistake list from Step 1, what's the actual first deliverable you hand the CMO this week, not this quarter?",
          toolName: "Google Sheets",
          where: "Turn the ranked mistake list into a one-page fix plan with owners and deadlines.",
          procedure: [
            "Write a single-page memo: 'why our three signup numbers disagree' in plain language for the CMO",
            "Propose the event schema as the week-one deliverable, since both the Amplitude contract and the cross-team-number problem trace back to it",
            "Explicitly recommend NOT buying a CDP yet; the lesson doesn't say every team needs one, only that a growing team with 3+ disagreeing tools does",
            "Set a 30-day checkpoint: if the event schema alone resolves the cross-team disagreement, hold off on Segment; if not, that's the trigger to evaluate a CDP",
          ],
          outputSample:
            "WEEK 1 DELIVERABLE: signed-off event schema (what a 'signup' means, tracked identically in GA4, Amplitude, and the CRM export). 30-DAY CHECKPOINT: re-pull all three numbers; if they match, no CDP purchase needed yet.",
          healthy: "The fix plan has a cheap, fast first step (schema alignment) before any new purchase is proposed.",
          unhealthy: "Recommending a Segment contract in week one, adding a fourth tool to a stack that already can't agree with itself.",
          interpret: "Fixing the shared definition usually resolves the disagreement before a CDP purchase is even necessary.",
          soWhat: [
            { symptom: "CMO is being pitched a CDP contract to fix a numbers-disagreement problem", action: "Test whether an aligned event schema alone fixes it before buying anything new", effort: "half day" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Build the mistake-mapping table and the one-page fix memo", why: "No new tool needed to diagnose a stack that already has too many tools", required: true, lastVerified: "2026-08" },
          { toolName: "Google Analytics 4", role: "Pull the existing (disputed) signup number for comparison", why: "Already installed, free, needed to document the current disagreement", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Amplitude", role: "Audit the existing contract's dashboards and confirm the event schema gap", why: "Already under contract; the audit uses what's paid for before recommending anything new", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A ranked mistake-diagnosis table plus a one-page fix-order memo with a week-one deliverable and a 30-day checkpoint.",
      sampleOutput:
        "Go Digit General Insurance, analytics stack audit note (excerpt)\n\nFinding: policy-renewal team uses Hotjar's 35 free sessions/day as their sole evidence for a funnel redesign decision. Mistake 3 (treating Hotjar as a statistical tool) — 35 sessions/day is not a sample size for a decision this size. Recommend pairing with Mixpanel funnel data before committing engineering time to the redesign.",
      successCriteria: [
        "Correctly matches all three present symptoms to their named lesson mistakes",
        "Ranks the $52K underused contract as the highest-cost issue, not just the easiest to name",
        "Fix-order memo proposes the event schema before any new tool purchase",
      ],
      portfolioReady: true,
      stretch: "Extend the audit to a second team (e.g. product) and check whether their event schema agrees with marketing's.",
    },
  ],

  "cro-tools": [
    {
      id: "cro-tools-vwo-vs-optimizely-fit-check",
      tier: "mini",
      archetype: "head-to-head",
      title: "VWO vs. Optimizely: Picking the Right Experimentation Platform for a Mid-Market Lender",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given Five-Star Business Finance's loan-application traffic, team skillset, and budget, decide whether VWO or Optimizely is the better-fit experimentation platform using the lesson's tool-selection criteria, not brand recognition.",
      companyId: "five-star-business-finance",
      scenario:
        "You're the growth marketer at Five-Star Business Finance, the Chennai-founded MSME secured lender that listed on the NSE/BSE in November 2022 at a ~₹13,110 Cr market cap. The digital team wants to start A/B testing the online loan-application funnel and asked you to recommend one experimentation platform before they sign a contract.",
      brief:
        "Compare VWO and Optimizely against monthly traffic, budget, and available engineering time, then recommend one with a stated reason a stakeholder could not argue with.",
      mode: "diagnostic",
      conceptsCovered: ["Matching an experimentation platform to traffic volume, budget, and team technical skill"],
      steps: [
        {
          stepId: "step-1-tool-fit-check",
          concept: "Matching an experimentation platform to traffic volume, budget, and team technical skill",
          lessonAnchor: "the-10-tools-worth-knowing",
          theoryRecap:
            "The lesson describes VWO as an all-in-one platform 'best for mid-market teams that want one bill instead of four,' with a free plan covering up to 50,000 monthly users. Optimizely is 'the enterprise standard for server-side experimentation' aimed at sites doing 1M+ monthly visitors.",
          question:
            "The loan-application page gets roughly 40,000 monthly visits and the digital team has no dedicated engineer to implement server-side experiments. Which platform fits, and why does the other one not?",
          toolName: "VWO",
          where: "VWO's pricing page and Optimizely's platform page, compared side by side in a sheet.",
          procedure: [
            "List Five-Star's constraints: ~40,000 monthly visits, one marketer, no engineer, quarterly test budget under $3,000",
            "Check VWO's free-tier cap (50,000 MAU) against the traffic number",
            "Check whether each platform needs server-side implementation or ships a client-side visual editor",
            "Score both platforms 1-5 on setup speed, cost fit, and technical requirement",
            "Write a one-paragraph recommendation naming the platform and citing the deciding constraint",
          ],
          outputSample:
            "TOOL FIT SCORECARD — Five-Star Business Finance loan funnel\n\nVWO: traffic fit 5/5 (40k under 50k free-tier cap) | cost fit 5/5 (free tier covers current volume) | technical fit 5/5 (client-side visual editor, no engineer needed)\nOptimizely: traffic fit 2/5 (built for 1M+ visitor sites, overkill here) | cost fit 2/5 (enterprise-bracket pricing) | technical fit 2/5 (server-side setup assumes an engineering resource Five-Star does not have)\n\nRECOMMENDATION: VWO. The free tier covers current traffic with room to grow, and the client-side editor means the one marketer on this team can ship tests without waiting on engineering.",
          healthy:
            "VWO recommended, with the recommendation citing the free-tier traffic threshold and the lack of an engineering resource as the deciding factors.",
          unhealthy:
            "Optimizely recommended on brand reputation alone, with no traffic, cost, or technical-skill comparison in the write-up.",
          interpret:
            "A platform recommendation without a stated constraint is not a recommendation, it's a guess dressed up as one.",
          soWhat: [
            {
              symptom: "Team signs an enterprise contract it can't technically implement",
              action: "Score every platform option against traffic, budget, and team skill before recommending one",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "VWO",
            role: "Run the comparison and, if selected, start testing on the free tier",
            why: "Free plan covers up to 50,000 monthly users, which is above Five-Star's current traffic",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Build the tool-fit scorecard",
            why: "Free, no account friction, easy to share with stakeholders",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Optimizely",
            role: "Server-side experimentation and feature flagging once traffic and engineering resources grow past the free-tier fit",
            why: "Enterprise-grade platform for sites doing 1M+ monthly visitors with a dedicated engineering team",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable: "A one-page tool recommendation memo naming the platform and citing the traffic, budget, and technical-skill fit.",
      sampleOutput:
        "TOOL FIT SCORECARD — RateGain Travel Technologies pricing-intelligence dashboard funnel\n\nVWO: traffic fit 4/5 (close to the 50k free-tier cap, will need a paid plan within two quarters) | cost fit 4/5 | technical fit 5/5\nOptimizely: traffic fit 5/5 (RateGain's enterprise site clears 1M+ monthly visitors globally) | cost fit 3/5 (enterprise pricing, but budget exists) | technical fit 4/5 (in-house engineering team available)\n\nRECOMMENDATION: Optimizely. RateGain's traffic volume and existing engineering bandwidth match the platform's server-side experimentation model, and the enterprise contract is within budget for a company at this scale.",
      successCriteria: [
        "Scores both platforms on traffic, cost, and technical fit rather than reputation",
        "Recommendation names the specific constraint that decided the call",
      ],
      portfolioReady: true,
    },
    {
      id: "cro-tools-full-test-brief-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Building a Complete CRO Test Brief: Hypothesis, Sample Size, and a Paired Tool Stack",
      timeEstimate: "55 minutes",
      timeMinutes: 55,
      objective:
        "Given Utkarsh Small Finance Bank's account-opening funnel drop-off data, build a full test brief: a hypothesis written with a metric, a sample-size calculation, and a paired experimentation-plus-behavioral tool recommendation that triangulates the quantitative result.",
      companyId: "utkarsh-small-finance-bank",
      scenario:
        "You're the CRO analyst at Utkarsh Small Finance Bank, the Varanasi-founded small finance bank that listed in July 2023 and closed its debut day 92% above its ₹25 IPO price. The digital account-opening funnel loses 62% of users at the KYC-document upload step, and you've been asked to write the test brief before any test is built.",
      brief:
        "Write a hypothesis with a stated metric, calculate the sample size needed, and name the paired tools (experimentation platform plus behavioral analytics tool) that will run and validate the test.",
      mode: "build",
      conceptsCovered: [
        "Writing a testable hypothesis with sample-size discipline",
        "Triangulating a quantitative test result with behavioral evidence before shipping",
      ],
      steps: [
        {
          stepId: "step-1-hypothesis-and-sample-size",
          concept: "Writing a testable hypothesis with sample-size discipline",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's playbook format is: 'Because we saw X, we believe changing Y for Z users will lift conversion by N%,' followed by calculating sample size up front using the platform's built-in calculator and refusing to peek early.",
          question:
            "62% of users drop at KYC-document upload, and session recordings show repeated failed re-uploads on mobile. What's the hypothesis, and how many users does the test need before you can call a winner?",
          toolName: "VWO",
          where: "VWO's sample size calculator, fed with the current 38% completion rate and a target minimum detectable effect of 5 percentage points.",
          procedure: [
            "State the observed problem in one sentence citing the drop-off rate",
            "Write the hypothesis in the lesson's format: because/believe/for/by",
            "Enter baseline conversion rate and minimum detectable effect into VWO's calculator",
            "Record the required sample size per variant and the estimated days to reach it at current traffic",
            "Set a rule to not check results before the sample size is reached",
          ],
          outputSample:
            "HYPOTHESIS: Because 62% of mobile users abandon at KYC-document upload after a failed re-upload attempt, we believe adding inline file-size and format guidance before the upload button will lift step completion by 8% for mobile applicants.\n\nSAMPLE SIZE: baseline completion 38%, MDE 5pp, 95% confidence, 80% power → 3,900 users per variant (7,800 total). At current traffic of ~1,100 daily mobile applicants, that's roughly 8 days minimum runtime.",
          healthy: "Hypothesis names the observed behavior, the specific change, the audience, and a numeric target; sample size is calculated before the test launches.",
          unhealthy: "Test launches with a vague hypothesis ('improve the upload step') and no sample-size number, so the team calls a winner after 3 days on gut feel.",
          interpret: "A hypothesis without a number is an opinion, and a test without a sample size is a coin flip dressed up as data.",
          soWhat: [
            {
              symptom: "Team calls a winner after 3 days at 95% confidence",
              action: "Calculate sample size before launch and set a minimum runtime rule the team commits to in writing",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-pair-behavioral-tool",
          concept: "Triangulating a quantitative test result with behavioral evidence before shipping",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's final playbook step is to 'triangulate,' pairing the quantitative result with replays and survey responses before shipping a winning variant.",
          question: "The A/B test shows the inline guidance variant winning by 6%. What behavioral evidence closes the loop before you ship it to 100% of traffic?",
          toolName: "Hotjar",
          where: "Hotjar session recordings filtered to the winning variant's KYC-upload step.",
          procedure: [
            "Filter 20-30 session recordings to users who saw the winning variant",
            "Confirm re-upload attempts dropped compared to the control recordings",
            "Check Hotjar's post-upload survey responses for mentions of the new guidance text",
            "Only ship to 100% of traffic once both the number and the behavioral evidence agree",
          ],
          outputSample:
            "BEHAVIORAL CHECK — winning variant, 25 recordings reviewed\nRe-upload attempts per session: 0.4 avg (down from 1.7 in control recordings)\nSurvey mentions of the new file-format guidance: 9 of 14 respondents referenced it positively\nDECISION: Ship to 100% of traffic. Quantitative lift and behavioral evidence agree.",
          healthy: "Winning variant is shipped only after recordings and survey data confirm the same story as the test's numeric result.",
          unhealthy: "Winning variant ships purely on the 6% lift number with no recordings reviewed, and it turns out the lift was driven by a tracking bug on one device type.",
          interpret: "A number that agrees with what you see in a recording is trustworthy; a number that stands alone is not.",
          soWhat: [
            {
              symptom: "A winning variant ships and the lift disappears a month later",
              action: "Review 20-30 recordings of the winning variant before rolling out to 100% of traffic",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "VWO",
            role: "Run the test and calculate required sample size",
            why: "Free tier covers Utkarsh's account-opening funnel traffic and includes the sample-size calculator",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Hotjar",
            role: "Review session recordings on the winning variant before full rollout",
            why: "Free Basic plan captures a working sample of daily sessions, enough to triangulate a test result",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Crazy Egg",
            role: "Scrollmap and confetti-report analysis if the team needs a second behavioral view beyond recordings",
            why: "Starts at $29/month, useful once the free Hotjar session cap is regularly exceeded",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable: "A complete test brief document: hypothesis, sample-size calculation with runtime estimate, and the paired experimentation-plus-behavioral tool stack.",
      sampleOutput:
        "TEST BRIEF — RateGain Travel Technologies, hotel-partner signup form\n\nHYPOTHESIS: Because 44% of partner-hotel signups abandon at the pricing-tier selection step, we believe replacing the three-tier comparison table with a single recommended-tier default will lift signup completion by 6% for first-time visitors.\n\nSAMPLE SIZE: baseline completion 51%, MDE 4pp, 95% confidence, 80% power → 2,600 users per variant. At current traffic, estimated runtime is 11 days.\n\nBEHAVIORAL PAIRING: VWO for the test, Hotjar recordings on the winning variant filtered to first-time visitors before full rollout.",
      successCriteria: [
        "Hypothesis follows the because/believe/for/by format with a stated numeric target",
        "Sample size is calculated before the test launches, with a runtime estimate",
        "A behavioral tool and check step are named before the winning variant ships to 100%",
      ],
      portfolioReady: true,
    },
  ],
  "growth-tools": [
    {
      id: "growth-tools-stack-gap-audit",
      tier: "mini",
      archetype: "audit",
      title: "Auditing RateGain's Growth Stack Against the Connect-Capture-Convert-Retain Framework",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given RateGain Travel Technologies' current ad-hoc tool list, map each tool to the lesson's four required layers (connect, capture, convert, retain) and flag which layer is missing or duplicated before recommending a fix.",
      companyId: "rategain-travel-technologies",
      scenario:
        "You're the growth ops lead at RateGain Travel Technologies, the Noida-founded travel-tech SaaS company that IPO'd on the NSE/BSE in December 2022 at a ~₹3,630 Cr market cap on listing day. Marketing currently uses Typeform for demo requests and Google Sheets for everything else, and leads are visibly slipping between steps.",
      brief:
        "List every tool RateGain currently uses, map it to one of the four layers (connect, capture, convert, retain), and name the layer that has no tool at all.",
      mode: "diagnostic",
      conceptsCovered: ["Auditing a growth stack against the connect-capture-convert-retain framework"],
      steps: [
        {
          stepId: "step-1-four-layer-map",
          concept: "Auditing a growth stack against the connect-capture-convert-retain framework",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's playbook states a real stack has four layers, connector, CRM, conversion, and data pipeline, and to 'buy one tool per layer, not three.'",
          question:
            "RateGain has Typeform (capture) and Google Sheets (a manual, non-connector stand-in for everything else). Which of the four layers has zero real tool, and what breaks because of it?",
          toolName: "Google Sheets",
          where: "A single mapping sheet: one row per current tool, one column per layer.",
          procedure: [
            "List every tool currently in use, including manual spreadsheets standing in for a missing layer",
            "Map each to connect, capture, convert, or retain",
            "Mark any layer with zero tools mapped to it",
            "Note what breaks operationally because that layer is manual (e.g. leads copy-pasted from Sheets to sales, with delays)",
            "Recommend one real tool per missing layer, not three",
          ],
          outputSample:
            "STACK MAP — RateGain\nCAPTURE: Typeform (demo request form) ✓\nCONNECT: none, leads are manually copied from Typeform into Google Sheets\nCONVERT: none, no CRM, sales works off the raw sheet\nRETAIN: none, no lifecycle messaging tool\n\nBREAKS: demo requests sit in a shared sheet for up to 48 hours before a sales rep sees them, and there is no automated follow-up for leads who don't book a call.\n\nRECOMMENDATION: add Zapier (connect) to push Typeform submissions into a CRM in real time, and HubSpot CRM (convert) to replace the raw sheet as the sales system of record.",
          healthy: "Every layer has exactly one recommended tool, and the audit names a specific operational break caused by the missing layer.",
          unhealthy: "Audit lists tools without mapping them to a layer, so the missing layer is never actually identified.",
          interpret: "A stack with a spreadsheet standing in for a layer isn't missing a nice-to-have, it's missing the layer entirely.",
          soWhat: [
            {
              symptom: "Leads sit in a shared sheet for two days before sales sees them",
              action: "Add one connector tool to push new leads into a CRM in real time",
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
            role: "Build the stack-mapping audit",
            why: "Free, fast to share with the growth and sales team",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Zapier",
            role: "Recommend as the connector layer, starting on a free/low-cost plan",
            why: "7,000+ integrations and the easiest setup for a non-technical marketer to push Typeform leads into a CRM",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Segment",
            role: "Upgrade path once RateGain has more than a handful of tools sending duplicate tracking pixels",
            why: "Single customer-data pipeline that ends the duplicate-tracking problem the lesson warns about",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable: "A one-page stack map showing every current tool by layer, the layer with zero tools, and a one-tool-per-layer fix.",
      sampleOutput:
        "STACK MAP — Utkarsh Small Finance Bank, digital account-opening funnel\n\nCAPTURE: Typeform (pre-qualification form) ✓\nCONNECT: Zapier pushing form submissions to the CRM ✓\nCONVERT: HubSpot CRM ✓\nRETAIN: none, no automated onboarding sequence for approved accounts\n\nBREAKS: newly approved account holders get zero automated onboarding emails; branch staff manually call each one, and roughly a third are never contacted in the first week.\n\nRECOMMENDATION: add Customer.io (retain) triggered off the account-approval event already flowing through Segment.",
      successCriteria: [
        "Every current tool is mapped to exactly one of the four layers",
        "The audit names the layer with zero tools and the specific operational break it causes",
        "Recommendation adds exactly one tool per missing layer",
      ],
      portfolioReady: true,
    },
    {
      id: "growth-tools-lead-routing-stack-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Building a Lead-Routing Automation Stack for a New Digital Product Launch",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given Utkarsh Small Finance Bank's launch of a new digital savings product, choose and justify one tool per layer (connector, CRM, conversion, data pipeline) and write the exact automation steps that move a lead from form fill to a routed, followed-up contact.",
      companyId: "utkarsh-small-finance-bank",
      scenario:
        "You're the marketing automation owner at Utkarsh Small Finance Bank, launching a new digital savings account product nationally. The bank has 3.6 million existing customers and 1,105 banking outlets, and the digital team needs leads from the launch landing page routed to the right branch's sales team within minutes, not days.",
      brief:
        "Select one real tool per layer, justify each choice against the lesson's decision criteria, and write the exact automation workflow steps from form submission to branch routing.",
      mode: "build",
      conceptsCovered: [
        "Selecting one tool per growth-stack layer instead of three redundant ones",
        "Writing an automation workflow that routes leads without a human touching each step",
      ],
      steps: [
        {
          stepId: "step-1-select-and-justify-stack",
          concept: "Selecting one tool per growth-stack layer instead of three redundant ones",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson splits the ten tools into four jobs: connect, capture, convert, retain, and warns against 'buying HubSpot Enterprise before you have 1,000 contacts' or picking a tool because it's cheap without the team able to support it.",
          question:
            "Utkarsh needs leads routed to one of 1,105 branches by pincode within minutes. Which tool fills each layer, and why not a fancier alternative?",
          toolName: "Zapier",
          where: "A tool-selection table listing each layer, the chosen tool, and the rejected alternative with a reason.",
          procedure: [
            "Name the capture tool (landing-page form)",
            "Name the connector tool that routes the submission by pincode",
            "Name the CRM/conversion tool the branch sales team works from",
            "For each choice, name one alternative considered and why it was rejected",
          ],
          outputSample:
            "STACK SELECTION — Utkarsh digital savings launch\nCAPTURE: Typeform, conditional logic routes the pincode field first\nCONNECT: Zapier, chosen over n8n because the team has no DevOps resource to self-host\nCONVERT: HubSpot CRM, chosen over a raw spreadsheet because 1,105 branches need a shared, permissioned system of record\nREJECTED: HubSpot Enterprise, the launch has under 1,000 initial leads expected in month one, so Starter plus Zapier covers it at a tenth of the cost",
          healthy: "Every layer has one chosen tool and one explicitly rejected alternative with a stated reason.",
          unhealthy: "Team picks HubSpot Enterprise on day one for a product with no leads yet, per the lesson's named mistake.",
          interpret: "A justified rejection is proof of a real decision; an unexplained tool list is just a shopping cart.",
          soWhat: [
            {
              symptom: "Team overspends on an enterprise CRM before it has 1,000 contacts",
              action: "Start on the smallest plan that fits current lead volume and upgrade only when volume demands it",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-write-workflow-steps",
          concept: "Writing an automation workflow that routes leads without a human touching each step",
          lessonAnchor: "what-it-actually-is",
          theoryRecap:
            "The lesson's own example: 'a visitor fills a HubSpot form, Zapier pushes the contact to a Google Sheet, Slack pings sales, and Intercom queues a welcome chat, all in under three seconds.'",
          question: "Write the exact trigger-then-action steps that take a Typeform submission to a branch rep's inbox with zero manual handling.",
          toolName: "Zapier",
          where: "Zapier's workflow builder, one Zap with a named trigger and ordered action steps.",
          procedure: [
            "Trigger: new Typeform submission on the digital savings landing page",
            "Action 1: look up the branch owning that pincode in a reference sheet",
            "Action 2: create/update the contact in HubSpot CRM, assigned to that branch's rep",
            "Action 3: send the branch rep a routed lead alert",
            "Add an error alert so a failed step notifies the automation owner, not silence",
          ],
          outputSample:
            "ZAP: Digital Savings Launch → Branch Routing\n1. Trigger: New Typeform response (Digital Savings Launch form)\n2. Lookup: match submitted pincode to branch ID in reference sheet\n3. Action: Create/update contact in HubSpot CRM, owner = matched branch rep\n4. Action: Send routed-lead alert to branch rep\n5. Error alert: if the pincode lookup fails, notify the automation owner directly instead of dropping the lead silently",
          healthy: "Workflow has a named trigger, ordered actions, and an explicit error-alert step so a failure is visible.",
          unhealthy: "Workflow has 40 unnamed steps with no error alert, so a broken step drops leads silently for weeks, the exact mistake the lesson warns about.",
          interpret: "An automation without an error alert isn't finished, it's a lead-loss risk waiting for its first bad data row.",
          soWhat: [
            {
              symptom: "A broken automation step silently drops leads for weeks",
              action: "Add an explicit error alert to every workflow before it goes live",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Typeform",
            role: "Capture layer, the launch landing page form",
            why: "Conditional logic on the free tier is enough for a single-form launch",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Zapier",
            role: "Connector layer, routes submissions to the CRM and alerts branch reps",
            why: "Easiest non-technical setup and covers low-volume launch traffic on an entry-tier plan",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "HubSpot CRM",
            role: "Conversion layer, shared system of record across 1,105 branches",
            why: "Free CRM tier works at launch, but a bank-wide rollout across every branch will outgrow it and need a paid tier for permissions and reporting",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "The free tools carry a single-product launch end to end; HubSpot CRM's paid tier becomes worth it only once every branch, not just the launch pilot, is routed through the same system.",
      },
      deliverable: "A tool-selection justification table plus a written, numbered Zap workflow from form submission to routed branch alert.",
      sampleOutput:
        "STACK SELECTION — RateGain Travel Technologies, hotel-partner onboarding launch\nCAPTURE: Typeform\nCONNECT: Make, chosen over Zapier because the routing logic needed multi-step branching by region and partner tier that Make's visual canvas handles more directly\nCONVERT: HubSpot CRM\n\nWORKFLOW\n1. Trigger: New Typeform response (Partner Onboarding form)\n2. Router: branch by partner tier (Enterprise vs. Standard)\n3. Action: Create/update contact in HubSpot CRM, owner = matched regional rep\n4. Action: Send routed-lead alert to regional rep\n5. Error alert: if the tier field is blank, route to a manual review queue instead of dropping the lead",
      successCriteria: [
        "Each stack layer has one chosen tool with a stated, non-brand-based justification",
        "At least one alternative tool is explicitly named and rejected with a reason",
        "Workflow steps are numbered, named, and include an error-alert step",
      ],
      portfolioReady: true,
    },
  ],

  "n8n-make-marketing-automation": [
    {
      id: "n8n-make-marketing-automation-billing-model-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Billing Trap: Auditing Which Automation Platform Actually Fits the Workload",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real workflow's step count and monthly run volume, calculate the actual monthly cost under Zapier's per-task model, Make's per-operation model, and n8n's per-execution model, then recommend the platform that fits the team's budget and technical comfort.",
      companyId: "sula-vineyards",
      scenario:
        "You're the growth marketing lead at Sula Vineyards, India's largest wine producer (listed on NSE/BSE), and you've been asked to pick an automation platform for the DTC newsletter-to-CRM workflow before your team commits to a year-long contract.",
      brief:
        "Calculate real monthly cost across three billing models for a 6-step workflow at a stated volume, then recommend a platform with a stated dollar-per-month reason.",
      mode: "diagnostic",
      conceptsCovered: ["Comparing per-task, per-operation, and per-execution billing models"],
      steps: [
        {
          stepId: "step-1-billing-model-math",
          concept: "Comparing per-task, per-operation, and per-execution billing models",
          lessonAnchor: "n8n-vs-make-vs-zapier-the-fast-comparison",
          theoryRecap:
            "The lesson's comparison table shows Zapier charges per task (each action in a workflow counts separately), Make charges per operation/credit, and n8n charges per execution regardless of node count.",
          question:
            "A 6-step workflow runs 8,000 times a month. What does it cost on each platform, and which one actually fits a $50/month budget?",
          toolName: "Google Sheets",
          where: "Build a 3-row comparison sheet: platform, unit price, units consumed, total cost.",
          procedure: [
            "List the workflow's 6 steps and confirm each one counts as 1 Zapier task",
            "Compute Zapier: 6 tasks x 8,000 runs = 48,000 tasks/month, check against Zapier's tiered pricing",
            "Compute Make: 6 modules x 8,000 runs = 48,000 operations, check against Make's credit tiers",
            "Compute n8n: 8,000 executions/month regardless of step count, check against n8n Cloud's execution tiers",
            "Rank the three totals against the $50/month budget",
          ],
          outputSample:
            "DTC newsletter-to-CRM workflow, 6 steps, 8,000 runs/month\n\nZapier: 48,000 tasks -> Team plan required, ~$470/month\nMake: 48,000 operations -> Core plan, ~$59/month\nn8n Cloud: 8,000 executions -> Starter plan, ~$24/month\n\nRecommendation: n8n Cloud fits the $50 budget with headroom for growth; Zapier is roughly 9x over budget at this volume.",
          healthy: "n8n or Make lands under budget with room to add steps without a cost jump.",
          unhealthy:
            "Zapier's task count multiplies with every added step, so the same budget buys a shrinking workflow over time.",
          interpret:
            "Per-task billing punishes workflow complexity; per-execution billing rewards it. The right platform depends on how many steps the workflow actually needs, not just the sticker price.",
          soWhat: [
            {
              symptom: "Monthly automation bill keeps climbing as the team adds workflow steps",
              action: "Recompute total cost per platform at current step count and volume before renewing",
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
            role: "Build the cost comparison model",
            why: "Free, immediate, no automation account needed to run the math",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "n8n",
            role: "The platform the audit ends up recommending at this volume",
            why: "Execution-based billing is the cheapest of the three at 8,000 runs/month",
            required: false,
            lastVerified: "2026-08",
          },
          {
            toolName: "Make",
            role: "The runner-up platform if the team wants a gentler learning curve",
            why: "Operation-based billing still lands under budget, with a simpler visual builder than n8n",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A 3-platform monthly cost comparison (Zapier/Make/n8n) for the actual workflow step count and run volume, with a platform recommendation and dollar figure.",
      sampleOutput:
        "Go Digit Insurance, claims-alert-to-Slack workflow cost audit\n\n5 steps, 12,000 runs/month\n\nZapier: 60,000 tasks -> Professional plan, ~$620/month\nMake: 60,000 operations -> Pro plan, ~$104/month\nn8n Cloud: 12,000 executions -> Pro plan, ~$60/month\n\nDecision: n8n Cloud selected. Self-hosted Community Edition considered but rejected, the team has no developer bandwidth to manage a VPS this quarter.",
      successCriteria: [
        "Correctly computes total task/operation/execution count for the given step count and volume",
        "Recommends a platform with a stated dollar-per-month justification tied to the budget",
      ],
      portfolioReady: true,
    },
    {
      id: "n8n-make-marketing-automation-lead-enrichment-workflow-spec",
      tier: "core",
      archetype: "build-the-asset",
      title: "Design the Workflow: Specifying a Lead Enrichment and Routing Chain Node-by-Node",
      timeEstimate: "55 minutes",
      timeMinutes: 55,
      objective:
        "Design a complete node-by-node workflow specification (trigger, enrichment call, conditional branch, two output paths) for a B2B lead-routing automation, ready to hand to a developer or build directly in n8n or Make.",
      companyId: "bansal-wire-industries",
      scenario:
        "You're the demand-gen lead at Bansal Wire Industries, the NSE/BSE-listed steel wire manufacturer, and the sales team is manually triaging every website form submission. You've been asked to spec the automation before anyone touches a build tool.",
      brief:
        "Spec every node in a lead enrichment and routing workflow: trigger, enrichment call, conditional branch, two distinct output paths, and the exact data each node passes to the next.",
      mode: "build",
      conceptsCovered: [
        "Designing a conditional branching workflow chain node-by-node",
        "Choosing between self-hosted n8n and Make based on team technical comfort",
      ],
      steps: [
        {
          stepId: "step-1-node-by-node-spec",
          concept: "Designing a conditional branching workflow chain node-by-node",
          lessonAnchor: "5-marketing-workflows-to-build-first",
          theoryRecap:
            "The lesson's lead-enrichment workflow (#2) shows the shape: a webhook trigger, an enrichment call, a conditional node on fit quality, then two branches.",
          question:
            "A steel wire manufacturer's form fills range from a curious student to a 500-ton/month buyer. What field decides which branch a lead goes down, and what does each branch actually do?",
          toolName: "Google Sheets",
          where: "Build a node spec table: node name, node type, input, output, next node.",
          procedure: [
            "Row 1: Webhook trigger, capture form fields (company, monthly volume, product category)",
            "Row 2: Enrichment node, call an enrichment service for company size and industry classification",
            "Row 3: Conditional node, branch on 'monthly volume >= 50 tons' as the fit threshold",
            "Row 4a (high-fit branch): assign to a named sales rep in CRM, send Slack alert",
            "Row 4b (low-fit branch): tag 'nurture' in CRM, add to a drip sequence, no rep alert",
          ],
          outputSample:
            "NODE SPEC: Lead Enrichment & Routing\n\n1. Webhook Trigger - fields: company, monthly_volume_tons, product_category\n2. Enrichment (Clay) - adds: company_size, industry, gst_verified\n3. Conditional - IF monthly_volume_tons >= 50 THEN branch A ELSE branch B\n4A. High-fit - CRM: assign_rep=true, Slack: #sales-hot-leads\n4B. Low-fit - CRM: tag=nurture, sequence: drip-email-8-touch",
          healthy:
            "Every node has a named input field and a named output field, a developer could build this without asking a clarifying question.",
          unhealthy:
            "A spec that says 'enrich the lead' with no named fields, the developer has to guess what data actually moves between nodes.",
          interpret:
            "A workflow spec is only build-ready when every node's input and output fields are named. Vague verbs like 'enrich' or 'route' are not a spec.",
          soWhat: [
            {
              symptom: "Developer keeps asking what data each node passes",
              action: "Add named input/output fields to every row before handoff",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-platform-fit-decision",
          concept: "Choosing between self-hosted n8n and Make based on team technical comfort",
          lessonAnchor: "where-to-start",
          theoryRecap:
            "The lesson's rule of thumb: a team with a developer or a technical marketer should pick n8n for AI capability and long-term cost; a pure marketing/ops team without coding comfort should pick Make.",
          question:
            "Bansal Wire's marketing team has no developer and no plans to hire one this year. Does the spec from Step 1 belong in n8n or Make, and why?",
          toolName: "Make",
          where: "Make's scenario builder, using the same node spec table as the routing map.",
          procedure: [
            "Check whether any node in the spec requires custom code or an unsupported integration",
            "Confirm the team has zero developer hours allocated this quarter",
            "Match against the lesson's rule of thumb: no coding comfort -> Make",
            "Note the fallback: if volume later requires self-hosting for cost, revisit n8n",
          ],
          outputSample:
            "PLATFORM DECISION\n\nSpec requires: webhook, 1 API call, 1 conditional, CRM write, Slack post - no custom code needed.\nTeam technical comfort: none, no developer allocated.\nDecision: Make. Reason: matches the spec's complexity without requiring a developer, and Make's circular builder handles the conditional branch cleanly.\nRevisit trigger: if monthly lead volume exceeds 5,000 and Make's operation costs exceed $150/month, re-evaluate n8n self-hosted.",
          healthy:
            "The platform choice is justified by team capability and spec complexity, not by which tool is trendiest.",
          unhealthy: "Picking n8n because it's 'more powerful' when nobody on the team can debug a broken workflow.",
          interpret: "The right platform is the one the team can actually maintain, not the one with the most features.",
          soWhat: [
            {
              symptom: "A workflow breaks and nobody on the team can fix it",
              action: "Match platform choice to actual team technical comfort before building, not after",
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
            role: "Draft the node-by-node spec before building anything",
            why: "Free, no automation account needed to plan",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Make",
            role: "Build the workflow from the spec, free tier for testing",
            why: "1,000 free credits/month is enough to test the routing logic before committing",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "n8n",
            role: "Fallback platform if volume later requires self-hosting for cost control",
            why: "Execution-based billing scales better than Make's operation count at high volume",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A complete node-by-node workflow specification (trigger, enrichment, conditional, two branches) plus a justified platform recommendation.",
      sampleOutput:
        "Sula Vineyards, DTC restock-alert workflow spec (excerpt)\n\n1. Webhook Trigger - fields: customer_email, sku, last_order_date\n2. Conditional - IF days_since_order >= 60 THEN branch A ELSE branch B\n3A. Re-engagement branch - CRM tag: winback, sequence: 3-email offer\n3B. Active branch - no action, suppress\n\nPlatform: Make selected, no developer on the DTC team.",
      successCriteria: [
        "Every node in the spec names its input and output fields",
        "Platform recommendation is justified against the team's actual technical comfort, not just feature count",
      ],
      portfolioReady: true,
      stretch: "Add a third branch for leads that abandon the form mid-fill, triggered by a partial-submission webhook.",
    },
  ],
  "ai-native-tools": [
    {
      id: "ai-native-tools-bolted-on-vs-native-audit",
      tier: "mini",
      archetype: "ai-critique",
      title: "The Rip-Out Test: Auditing Your Team's Tool Stack for Bolted-On vs AI-Native",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a list of 8 tools a marketing team currently pays for, apply the lesson's 'rip out the model' test to classify each as AI-native or bolted-on, then flag which bolted-on tools are wasted AI spend.",
      companyId: "sula-vineyards",
      scenario:
        "You're the marketing ops lead at Sula Vineyards auditing next year's software budget. Finance wants to know which of the 8 tools on the AI line item are actually AI-dependent.",
      brief:
        "Apply the rip-out test to 8 real tools, classify native vs bolted-on, and recommend which bolted-on AI features to stop paying extra for.",
      mode: "diagnostic",
      conceptsCovered: ["Applying the rip-out test to classify a tool as AI-native or bolted-on"],
      steps: [
        {
          stepId: "step-1-rip-out-test",
          concept: "Applying the rip-out test to classify a tool as AI-native or bolted-on",
          lessonAnchor: "what-it-actually-is",
          theoryRecap:
            "The lesson's test: rip out the model. If the product still works without it, it's bolted on. If it dies, it's native.",
          question: "Sula Vineyards pays for 8 tools with 'AI' in the pitch deck. Which ones would survive if the LLM was switched off tomorrow?",
          toolName: "Google Sheets",
          where: "List each tool in a column, apply the test, mark native or bolted-on.",
          procedure: [
            "List all 8 tools with their AI feature and its monthly cost",
            "For each, ask: does the core workflow still function without the model",
            "Mark native (dies without model) or bolted-on (survives without model)",
            "For bolted-on tools, check whether the AI feature has a separate line-item cost",
          ],
          outputSample:
            "AI SPEND AUDIT (8 tools)\n\nNATIVE (3): Perplexity Pro, Granola, Cursor - all die without the model\nBOLTED-ON (5): CRM 'AI insights' add-on, email tool 'AI subject lines', social scheduler 'AI captions', analytics 'AI summary', CMS 'AI SEO tips'\n\nFlag: 3 of the 5 bolted-on add-ons cost extra and show under one use a month in the usage logs.",
          healthy:
            "Budget concentrates on native tools where the AI is the product; bolted-on add-ons are dropped unless usage data justifies the extra cost.",
          unhealthy:
            "Paying premium tiers for 'AI features' bolted onto tools the team would keep anyway, with no usage to show for it.",
          interpret: "The rip-out test turns a vague 'we use AI tools' line item into a real budget decision.",
          soWhat: [
            {
              symptom: "AI software spend keeps growing with no clear productivity signal",
              action: "Run the rip-out test on every AI line item before the next renewal",
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
            role: "Run the audit table",
            why: "Free, no account needed beyond what the team already has",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Perplexity",
            role: "Research each tool's actual AI dependency if not obvious from the product page",
            why: "Free tier gives enough cited searches to verify a handful of tools",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "An 8-tool audit table classifying each as native or bolted-on, with a recommendation on which bolted-on AI add-ons to cut.",
      sampleOutput:
        "Go Digit Insurance, AI tool spend audit (excerpt)\n\nNATIVE: ChatGPT Team, Claude, Perplexity Pro\nBOLTED-ON: policy-CRM 'AI risk score' (+$40/seat/month, used twice in Q2), support-desk 'AI ticket summary' (+$15/seat/month, used weekly)\n\nRecommendation: cut the risk-score add-on, keep the ticket summary, usage justifies the cost.",
      successCriteria: [
        "Correctly classifies at least 6 of 8 tools using the rip-out test",
        "Flags bolted-on tools with a separate cost and low usage as cut candidates",
      ],
      portfolioReady: true,
    },
    {
      id: "ai-native-tools-adoption-rollout-plan",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build the Rollout: Sequencing an AI-Native Tool Stack Across a Marketing Team",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Design a 4-phase adoption plan for Perplexity, Granola, Cursor, and Cluely across a marketing team, sequenced by switching cost and matched to which of the team's actual jobs each tool replaces.",
      companyId: "bansal-wire-industries",
      scenario:
        "You're the marketing manager at Bansal Wire Industries and have budget approval for an AI-native stack, but the team has never adopted an AI tool beyond ChatGPT. You need a rollout plan finance and the team will actually follow.",
      brief: "Sequence 4 tools by switching cost and map each to the specific job it replaces, with a security check before rollout.",
      mode: "build",
      conceptsCovered: [
        "Matching each AI-native tool to the specific job it replaces",
        "Sequencing AI-native tool adoption by switching cost",
      ],
      steps: [
        {
          stepId: "step-1-job-to-tool-mapping",
          concept: "Matching each AI-native tool to the specific job it replaces",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's playbook maps 4 jobs to 4 tools: research to Perplexity, meetings and discovery to Granola, production work to Cursor, live calls to Cluely.",
          question:
            "Bansal Wire's marketing team spends time on competitor research, buyer calls, landing page edits, and trade-show demos. Which tool maps to which job, and which job should get a tool first?",
          toolName: "Google Sheets",
          where: "4-row table: job, current tool/process, target AI-native tool, weekly hours spent on that job.",
          procedure: [
            "List the team's 4 recurring jobs and current hours spent on each per week",
            "Map each job to its lesson-defined tool (research -> Perplexity, meetings -> Granola, production -> Cursor, live calls -> Cluely)",
            "Rank by weekly hours spent, highest-hours job gets the first rollout slot",
            "Flag any job with no clean 1:1 mapping for a custom decision",
          ],
          outputSample:
            "JOB-TO-TOOL MAP\n\nCompetitor research (6 hrs/wk) -> Perplexity\nBuyer discovery calls (5 hrs/wk) -> Granola\nLanding page edits (4 hrs/wk) -> Cursor\nTrade-show demo prep (2 hrs/wk) -> Cluely\n\nRollout order by hours: Perplexity first, then Granola, then Cursor, then Cluely.",
          healthy: "Every job maps to exactly one tool, and the rollout order matches actual time spent, not tool hype.",
          unhealthy: "Rolling out the flashiest tool first regardless of how few hours the job it replaces actually consumes.",
          interpret: "A rollout plan justified by hours-spent survives a budget review; one justified by 'this tool is cool' does not.",
          soWhat: [
            {
              symptom: "Team adopts a tool nobody ends up using weekly",
              action: "Re-rank rollout order by actual weekly hours on the job before the next tool launch",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-switching-cost-sequence-and-security-check",
          concept: "Sequencing AI-native tool adoption by switching cost",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's sequence rule: lowest switching cost first (Perplexity), then tools that slot into existing habits (Granola), then higher-commitment tools (Cursor, Cluely). It also warns to get security sign-off before rollout since these tools touch customer conversations.",
          question:
            "Before Bansal Wire's rollout plan from Step 1 goes to the team, what does the security sign-off step need to check for each tool, and does the sequence still hold?",
          toolName: "Perplexity",
          where: "Use Perplexity itself to research each tool's data retention policy as the first real task in the rollout.",
          procedure: [
            "Confirm switching-cost order matches Step 1's hours-ranked list, or note any conflict",
            "For each tool, research data retention and customer-data handling policy",
            "Flag any tool touching customer conversations (Granola, Cluely) for a security review before rollout",
            "Finalize the 4-phase sequence with the security checkpoint inserted before phase 2",
          ],
          outputSample:
            "ROLLOUT SEQUENCE (final)\n\nPhase 1: Perplexity - no customer data risk, ship immediately\nSECURITY CHECKPOINT - review Granola and Cluely data retention before Phase 2\nPhase 2: Granola - approved after checkpoint, meeting audio deleted after transcript per policy\nPhase 3: Cursor - internal code/content only, no customer data\nPhase 4: Cluely - approved after checkpoint, live-call audio not stored",
          healthy: "Every tool touching customer conversations passes a security check before rollout, not after a complaint.",
          unhealthy: "Rolling out Granola or Cluely team-wide before anyone confirms what happens to the meeting audio.",
          interpret:
            "Sequencing by switching cost still needs a security gate wherever customer data enters the picture, the two checks aren't the same thing.",
          soWhat: [
            {
              symptom: "A tool touching customer calls ships without a data-retention review",
              action: "Insert a security checkpoint before any phase that adds a customer-data-touching tool",
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
            role: "Build the job-to-tool map and rollout sequence",
            why: "Free, standard planning tool",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Perplexity",
            role: "Research each tool's data retention policy for the security checkpoint",
            why: "Free tier handles a handful of cited policy lookups",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Cursor",
            role: "Phase 3 of the rollout, production work",
            why: "Needed once the team reaches the production-work phase",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "Perplexity Pro and Cursor's paid tiers unlock unlimited Pro Search and multi-file Composer edits respectively; the free tiers are enough to complete this rollout plan itself.",
      },
      deliverable:
        "A 4-phase AI-native tool rollout sequence with a job-to-tool map, hours-based priority order, and a security checkpoint before any customer-data-touching tool ships.",
      sampleOutput:
        "Go Digit Insurance, AI-native rollout plan (excerpt)\n\nPhase 1: Perplexity for competitor policy research (8 hrs/wk) - shipped week 1\nSECURITY CHECKPOINT - Granola's audio retention confirmed as call-only, deleted after transcript\nPhase 2: Granola for claims-call discovery (6 hrs/wk) - shipped week 3\nPhase 3: Cursor for landing page and quote-form edits (3 hrs/wk) - shipped week 6",
      successCriteria: [
        "Every job maps to the correct lesson-defined tool",
        "Rollout order is justified by weekly hours, not tool novelty",
        "A security checkpoint appears before any phase involving a customer-data-touching tool",
      ],
      portfolioReady: true,
      stretch: "Add a fifth job (internal training video scripts) and decide whether it fits an existing tool or needs a fifth phase.",
    },
  ],

  "no-code-marketing-tools": [
    {
      id: "no-code-marketing-tools-lead-flow-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Leaky Funnel: Auditing a No-Code Lead Capture Stack",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a Webflow-to-Zapier-to-Google-Sheets tour-request automation that is quietly losing leads, use the Zap run history to find exactly where the chain breaks and recommend the fastest fix.",
      companyId: "awfis-space-solutions",
      scenario:
        "You're the marketing ops lead at Awfis Space Solutions, the flexible-workspace operator. The 'Book a Tour' form on your Webflow site feeds Zapier, which should log every request to a Google Sheet and ping the sales Slack channel, but the sales team says leads keep going missing.",
      brief:
        "Pull the Zap's run history, classify every failed or skipped run by cause, and recommend the single highest-impact fix before assuming you need a new tool.",
      mode: "diagnostic",
      conceptsCovered: ["Mapping the automation chain before debugging it"],
      steps: [
        {
          stepId: "no-code-lead-flow-audit-step-1",
          concept: "Mapping the automation chain before debugging it",
          lessonAnchor: "how-it-works-the-playbook",
          theoryRecap:
            "The lesson's playbook says to map every trigger, condition, and action on paper before touching a tool, and to add error handling like a fallback email if the automation fails silently.",
          question:
            "The Zap has 3 steps: Webflow form trigger, Google Sheets 'create row' action, Slack 'send message' action. 40 form submissions came in this month but only 31 rows exist in the Sheet and only 24 Slack pings fired. Where is the leak, and what's the fastest fix?",
          toolName: "Zapier",
          where: "Zapier dashboard, the 'Tour Request Router' Zap's Task History tab",
          procedure: [
            "Open Task History and filter to the last 30 days",
            "Count runs by status: Success, Filtered, Error, Held",
            "For every Error run, open the run detail and read the failure reason on each individual step",
            "Cross-check the 9 missing Sheet rows against the 16 missing Slack pings, look for whether they're the same 9 runs or a different set",
            "Check whether a fallback notification exists for a failed run, or whether failures are currently silent",
          ],
          outputSample:
            "Tour Request Router, Task History (last 30 days)\n  Total triggers: 40\n  Success (both steps): 24\n  Error at Slack step only (Sheet row created): 7 -- reason: 'channel #sales-leads archived'\n  Error at Sheet step (Zap halted, Slack never attempted): 9 -- reason: 'required field Company Size was blank on 9 submissions'\n  No fallback notification configured for any Error run.",
          healthy:
            "Every submission produces either a Success run or triggers a fallback alert to a shared inbox so a human catches it same-day.",
          unhealthy:
            "9 leads vanished with zero notification because a required-field mismatch halted the Zap silently, and 7 more never reached sales because a Slack channel was archived without updating the Zap.",
          interpret:
            "Two separate root causes are hiding behind one symptom: a form/Sheet schema mismatch (9 leads) and a stale destination reference (7 leads). Fixing only one leaves the other bleeding.",
          soWhat: [
            {
              symptom: "9 runs halt because 'Company Size' is required in the Sheet but optional on the Webflow form",
              action: "Make the field required on the form, or set a default value in the Zap before the Sheet step",
              effort: "30 min",
            },
            {
              symptom: "7 Slack pings fail because the destination channel was archived",
              action: "Repoint the Zap's Slack step to the live channel and add a fallback email step for any future Error run",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Zapier", role: "Read the Zap's task history to isolate failed and skipped runs", why: "Task History is available on Zapier's free plan and is the only place run-level failure reasons live", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Cross-check which submissions actually landed as rows", why: "Free, and it's already the destination the Zap writes to", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A one-page audit memo listing every broken step in the tour-request automation, ranked by leads lost, with the fastest fix for each.",
      sampleOutput:
        "TAC Security, Demo Request Zap -- Audit Memo (excerpt)\n\nLEAK 1 (highest impact): 11 of 52 demo requests halted at the CRM-write step because the 'Team Size' field was required downstream but optional on the form. Fix: sync required fields between form and destination. Effort: 30 min.\n\nLEAK 2: 4 requests reached the CRM but the Slack alert to the sales-eng channel failed silently, no fallback notification existed. Fix: repoint the channel and add a fallback email step. Effort: 30 min.\n\nNo leak found in the Webflow-to-webhook trigger itself, 52 of 52 form submissions fired the Zap.",
      successCriteria: [
        "Correctly separates the two distinct failure causes instead of treating them as one bug",
        "Recommends a fallback/error-handling fix, not just a one-time patch",
      ],
      portfolioReady: true,
    },
    {
      id: "no-code-marketing-tools-campaign-stack-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Ship It Without Engineering: Building a No-Code Campaign Stack",
      timeEstimate: "3 hours",
      timeMinutes: 180,
      objective:
        "Given a one-week deadline and no available developer, design and sequence a three-layer no-code stack (front end, data, glue) for a lead-gen microsite, then estimate its automation task volume before committing to a plan.",
      companyId: "yatra-online",
      scenario:
        "You're the campaign marketer at Yatra Online, the online travel agency. Sales wants a 'Corporate Travel Perks' microsite live in one week to capture leads from a trade-show push, and engineering has no sprint capacity for a month.",
      brief:
        "Sequence the three-layer stack in build order, then size the automation plan against expected trade-show volume so it doesn't get throttled mid-campaign.",
      mode: "build",
      conceptsCovered: [
        "Layering front end, data, and glue in the right build order",
        "Estimating automation task volume before committing to a plan tier",
      ],
      steps: [
        {
          stepId: "no-code-campaign-stack-build-step-1",
          concept: "Layering front end, data, and glue in the right build order",
          lessonAnchor: "what-it-actually-is",
          theoryRecap:
            "The lesson frames a no-code stack as three layers: a front end for what users see, a data layer for where records live, and glue automations that connect them, built in that order so the page never points at a schema that doesn't exist yet.",
          question:
            "You have one week and no developer. Do you start with the Webflow landing page, the Google Sheet that stores leads, or the Zapier automation that connects them?",
          toolName: "Google Sheets",
          where: "A new Google Sheet, built before opening Webflow or Zapier",
          procedure: [
            "List every field the sales team needs on a lead record (name, company, travel budget tier, trade-show booth visited)",
            "Build the data schema as Sheet columns first, with a frozen header row",
            "Build the Webflow landing page and form second, matching field names exactly to the Sheet's columns",
            "Build the Zapier automation last, mapping form fields to Sheet columns and adding a Slack alert to sales",
            "Submit 3 dummy entries end-to-end before sending the page live",
          ],
          outputSample:
            "Corporate Travel Perks -- Build Sequence Log\n  1. Sheet schema locked: Name, Work Email, Company, Travel Budget Tier, Booth Visited, Submitted At (6 columns)\n  2. Webflow form fields matched 1:1 to Sheet columns, zero renamed fields\n  3. Zap built: Webflow Form Submission -> Google Sheets Create Row -> Slack message to #corporate-sales\n  4. 3 dummy submissions tested, all 3 appeared in the Sheet and Slack within 4 seconds",
          healthy: "The schema is locked before the form exists, so no field is added to the form that has nowhere to land.",
          unhealthy: "Building the Webflow page first, then discovering two form fields have no matching Sheet column and leads silently drop those values.",
          interpret: "Sequencing data before front end before glue removes an entire class of mapping bugs that only show up after launch.",
          soWhat: [
            { symptom: "A form field was added after the Sheet schema was locked", action: "Add the matching column before the campaign goes live, never after", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "no-code-campaign-stack-build-step-2",
          concept: "Estimating automation task volume before committing to a plan tier",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson warns that Zapier and Make bill per task or operation, and a single high-traffic form can burn through a starter plan in a week, so volume needs estimating before committing to a plan.",
          question:
            "The trade show expects 1,200 booth visitors over 2 days, with a historical 8% form-to-lead conversion rate. Each lead triggers 2 Zap tasks (Sheet row + Slack message). Does the free Zapier plan (100 tasks/month) cover this campaign?",
          toolName: "Zapier",
          where: "Zapier's plan comparison page, alongside your own volume math",
          procedure: [
            "Calculate expected leads: 1,200 visitors x 8% = 96 leads",
            "Calculate expected tasks: 96 leads x 2 tasks each = 192 tasks",
            "Compare 192 tasks against the free plan's 100-task monthly cap",
            "Decide whether to upgrade the plan or cut a non-essential automation step (e.g. combine the Sheet write and Slack alert into one multi-action step)",
          ],
          outputSample: "Volume estimate: 96 leads x 2 tasks = 192 tasks needed.\nFree plan cap: 100 tasks/month.\nGap: 92 tasks over cap -> upgrade required before the trade show, not during it.",
          healthy: "The plan tier is confirmed sufficient (or upgraded) before the campaign launches.",
          unhealthy: "The Zap silently stops running mid-trade-show because the free plan's task cap was hit, and nobody notices until sales asks where the leads are.",
          interpret: "Task-volume math is a pre-launch checklist item, not something to discover from a billing alert during the campaign.",
          soWhat: [
            { symptom: "Estimated task volume exceeds the current plan's cap", action: "Upgrade the plan before launch, or reduce the number of chained actions per trigger", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Webflow", role: "Build the landing page and form", why: "Free Starter plan supports a published site for testing and portfolio use", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Store lead records as the data layer", why: "Free, no account friction, works as a lightweight CRM for a single campaign", required: true, lastVerified: "2026-08" },
          { toolName: "Zapier", role: "Connect the form to the Sheet and to a Slack alert", why: "Free plan covers low-volume testing before the real campaign launches", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Zapier", role: "Handle the full trade-show task volume without hitting the free cap", why: "192 estimated tasks exceeds the 100-task free plan, a paid tier removes the mid-campaign throttle risk", required: false, lastVerified: "2026-08" },
        ],
        paidUpgradeNote: "The free plan is fine for building and testing; upgrade only once real volume math (like the 192-task estimate here) shows you'll exceed the cap during the live campaign.",
      },
      deliverable: "A working three-layer no-code stack (Webflow page, Google Sheet, Zapier automation) plus a one-paragraph task-volume estimate justifying the plan tier chosen.",
      sampleOutput:
        "TAC Security, 'Cyber Risk Assessment' Landing Page -- Build Log (excerpt)\n\nSheet schema (locked first): Name, Work Email, Company, Employee Count, Submitted At\nWebflow form fields matched 1:1, published in 2 days\nZap: Form Submission -> Sheet Row -> Slack #sales-leads\nVolume estimate: 400 expected visitors x 12% conversion = 48 leads x 2 tasks = 96 tasks, within the free plan's 100-task cap, no upgrade needed for this campaign size.",
      successCriteria: [
        "Builds the data schema before the front end, so no field is added to the form with nowhere to land",
        "Produces a task-volume estimate that correctly compares against the chosen plan's cap",
      ],
      portfolioReady: true,
      stretch: "Add a fallback email step that fires if the Zap errors, so a failed run never disappears silently.",
    },
  ],
  "ahrefs-semrush": [
    {
      id: "ahrefs-semrush-keyword-targeting-headtohead",
      tier: "mini",
      archetype: "head-to-head",
      title: "PKD vs. Estimated Clicks: A Keyword Targeting Head-to-Head",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a shortlist of cybersecurity keywords, compare Semrush's Personal Keyword Difficulty against Ahrefs' estimated-clicks signal to decide which keywords are worth targeting this quarter.",
      companyId: "tac-security",
      scenario:
        "You're the content strategist at TAC Security, the cybersecurity SaaS company. You have 10 candidate keywords and one quarter's writing capacity, and generic keyword difficulty scores keep steering you toward the wrong ones.",
      brief:
        "Pull both signals for every keyword, flag where they disagree, and build a ranked target list that a generic KD score alone would have gotten wrong.",
      mode: "diagnostic",
      conceptsCovered: ["Choosing a keyword signal based on what it actually measures, not just its label"],
      steps: [
        {
          stepId: "ahrefs-semrush-keyword-headtohead-step-1",
          concept: "Choosing a keyword signal based on what it actually measures, not just its label",
          lessonAnchor: "1-keyword-research",
          theoryRecap:
            "The lesson explains Semrush's Personal Keyword Difficulty (PKD) adjusts difficulty to your specific domain's strength, while Ahrefs shows estimated clicks per keyword because some high-volume keywords get almost no clicks once Google answers the query directly in search results.",
          question:
            "'vulnerability management best practices' has a generic KD of 71 (hard) but a Semrush PKD of 38 for your domain, and Ahrefs shows only 180 estimated monthly clicks despite 4,400 monthly searches. Do you target it this quarter?",
          toolName: "SEMrush",
          where: "SEMrush > Keyword Overview, Personal Keyword Difficulty tab, cross-checked against Ahrefs > Keywords Explorer's Clicks column",
          procedure: [
            "Pull generic KD, PKD, and Ahrefs estimated clicks for all 10 candidate keywords into one sheet",
            "Flag any keyword where PKD is meaningfully lower than generic KD (your domain has earned authority here)",
            "Flag any keyword where search volume is high but Ahrefs estimated clicks is low (a Google-answers-it-directly trap)",
            "Cross the two flags: keep keywords that pass PKD but fail the clicks check off the list, or plan for a featured-snippet-targeted format instead of a standard article",
          ],
          outputSample:
            "vulnerability management best practices: Vol 4,400 | Generic KD 71 | PKD 38 | Ahrefs est. clicks 180 (4.1% of searches) -> LOW PRIORITY, high effort for low realistic traffic despite easy PKD.\nzero trust architecture guide: Vol 2,900 | Generic KD 64 | PKD 41 | Ahrefs est. clicks 1,650 (57%) -> TARGET, easy for this domain and clicks actually convert to traffic.",
          healthy: "Keywords are ranked by realistic traffic potential (PKD easy AND clicks high), not by volume or generic KD alone.",
          unhealthy: "Committing a quarter's writing budget to a keyword with easy PKD but a 4% click-through ceiling because Google answers it directly.",
          interpret: "PKD tells you whether you can win the ranking; estimated clicks tells you whether winning it is worth anything. Both checks are required, neither alone is sufficient.",
          soWhat: [
            { symptom: "A keyword passes the PKD check but has under 10% estimated click-through", action: "Deprioritize it, or reformat the target as a featured-snippet-optimized answer instead of a full article", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "SEMrush", role: "Pull Personal Keyword Difficulty for the domain", why: "Semrush's free account tier includes limited PKD lookups, enough for a 10-keyword shortlist", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Combine both tools' numbers into one ranked table", why: "Free, and neither tool's UI shows both signals side by side", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Ahrefs", role: "Pull estimated-clicks data at scale for a larger keyword list", why: "Ahrefs' estimated-clicks column is a paid-tier feature beyond a handful of free lookups", required: false, fallback: "Manually sanity-check click potential by Googling the keyword and checking whether an AI Overview or featured snippet already answers it", lastVerified: "2026-08" },
        ],
      },
      deliverable: "A 10-keyword target list ranked by realistic traffic potential, with PKD and estimated-clicks flags shown for each.",
      sampleOutput:
        "Yatra Online, Corporate Travel Content -- Keyword Head-to-Head (excerpt)\n\nTARGET: 'business travel expense policy template', Vol 1,900, PKD 29, est. clicks 61% -> easy and clicks convert.\nDEPRIORITIZE: 'what is corporate travel management', Vol 8,100, PKD 33, est. clicks 6% -> easy to rank but AI Overview absorbs almost all clicks.",
      successCriteria: [
        "Every keyword decision cites both PKD and estimated clicks, not just one signal",
        "Correctly deprioritizes at least one high-volume, low-click keyword",
      ],
      portfolioReady: true,
    },
    {
      id: "ahrefs-semrush-site-health-reconciliation",
      tier: "core",
      archetype: "audit",
      title: "The Audit Comparison: Reading Semrush and Ahrefs Site Health Side by Side",
      timeEstimate: "2.5 hours",
      timeMinutes: 150,
      objective:
        "Given a Semrush Site Audit and an Ahrefs Site Audit run against the same domain, reconcile their different issue counts and severities into one prioritized fix backlog, and decide which broken-backlink findings need a developer versus a marketer.",
      companyId: "awfis-space-solutions",
      scenario:
        "You're the SEO lead at Awfis Space Solutions ahead of a national listings push. Semrush's Site Audit and Ahrefs' Site Audit disagree on issue counts and severity for the same pages, and the dev team wants one ranked backlog, not two reports.",
      brief:
        "Reconcile both audits into a single severity-ranked backlog, then separately triage the broken-backlink findings by who actually owns the fix.",
      mode: "diagnostic",
      conceptsCovered: [
        "Reconciling two audit tools' severity scores into one fix backlog",
        "Routing broken-backlink findings to the correct owner",
      ],
      steps: [
        {
          stepId: "ahrefs-semrush-site-health-step-1",
          concept: "Reconciling two audit tools' severity scores into one fix backlog",
          lessonAnchor: "3-technical-seo-audits",
          theoryRecap:
            "The lesson notes Semrush checks 140+ issue types for depth of audit while Ahrefs crawls continuously for real-time monitoring, so the two tools are built for different jobs and won't produce identical issue lists.",
          question:
            "Semrush flags 34 issues as 'Errors' (critical) on the /locations/ pages. Ahrefs' crawl flags only 12 issues on the same pages as critical, but includes 3 issues Semrush didn't catch at all. Which list do you hand to the dev team?",
          toolName: "SEMrush",
          where: "SEMrush > Site Audit > Issues tab, cross-referenced against Ahrefs > Site Audit > Data Explorer for the same URL set",
          procedure: [
            "Export both tools' critical/error-level issues for the /locations/ URL set into one sheet",
            "Match issues by URL and issue type, flag ones both tools agree on as confirmed-critical",
            "Investigate the 3 Ahrefs-only issues individually, since a tool-exclusive finding isn't automatically wrong",
            "Rank the merged, deduplicated list by how many pages each issue affects, not by which tool found it",
          ],
          outputSample:
            "Merged critical backlog (/locations/, 40 pages)\n  Both tools agree: missing canonical tags (22 pages) -> CONFIRMED CRITICAL, top of backlog\n  Semrush-only: duplicate meta descriptions (34 pages) -> confirmed real on manual spot check, kept\n  Ahrefs-only: broken hreflang tags (3 pages) -> confirmed real, added, would have been missed using Semrush alone",
          healthy: "The final backlog includes tool-exclusive findings after manual verification, not just the overlap between both tools.",
          unhealthy: "Handing the dev team only Semrush's 34-issue list and silently dropping the 3 real issues only Ahrefs caught.",
          interpret: "Disagreement between two audit tools isn't a bug in either tool, it's a coverage difference, and the fix backlog needs the union of both, verified, not the list from whichever tool ran first.",
          soWhat: [
            { symptom: "Two site audit tools report different critical-issue counts for the same URL set", action: "Merge and deduplicate by URL and issue type, manually verify tool-exclusive findings before dropping or keeping them", effort: "half day" },
          ],
          owner: "you",
        },
        {
          stepId: "ahrefs-semrush-site-health-step-2",
          concept: "Routing broken-backlink findings to the correct owner",
          lessonAnchor: "2-backlink-analysis",
          theoryRecap:
            "The lesson highlights that Ahrefs shows broken backlinks instantly, and calls out its real-time monitoring as the reason link-building teams lean on it over Semrush for this specific job.",
          question:
            "Ahrefs' Broken Backlinks report shows 14 external links pointing at Awfis URLs that now 404. 9 point at old blog posts, 5 point at a location page that was permanently closed. Who fixes each group?",
          toolName: "Ahrefs",
          where: "Ahrefs > Site Explorer > Backlinks > Broken tab, filtered to your own domain",
          procedure: [
            "Export the Broken Backlinks report and group the 14 links by destination URL type (blog post vs. location page)",
            "For the 9 blog-post links, check whether the content still exists under a new URL, if so this is a 301 redirect, a marketer can request it",
            "For the 5 location-page links, confirm the location is genuinely closed permanently, if so this needs a developer to set up a redirect to the nearest active location page, not a content fix",
            "Log both groups with an owner and a target fix date",
          ],
          outputSample:
            "Broken Backlinks Triage (14 links)\n  Group A (9 links, old blog URLs): content exists at new slug -> OWNER: marketer, action: request 301 redirect, due in 3 days\n  Group B (5 links, closed Koramangala location page): permanent closure -> OWNER: developer, action: 301 to nearest active location page, due in 1 sprint",
          healthy: "Every broken-backlink finding has a named owner and an action type before it sits in a shared backlog untouched.",
          unhealthy: "All 14 broken links get filed as one generic 'fix broken links' ticket, and the 5 requiring a developer sit behind marketer-owned redirect requests that never get escalated.",
          interpret: "Broken backlinks group into two different job types, content relocation and structural redirects, and only one of those is a marketer's job to execute directly.",
          soWhat: [
            { symptom: "A broken-backlink report is filed as one undifferentiated backlog item", action: "Split by whether the fix is a content redirect (marketer) or a structural redirect (developer) before filing", effort: "30 min" },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          { toolName: "SEMrush", role: "Run the primary Site Audit for issue depth", why: "Freemium tier includes a limited Site Audit crawl, enough for a location-page subset", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Merge and deduplicate both tools' issue exports into one backlog", why: "Free, and neither tool natively merges another tool's export", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Ahrefs", role: "Run the continuous crawl and Broken Backlinks report", why: "Real-time crawl frequency and the Broken Backlinks report require a paid Ahrefs plan", required: false, fallback: "Use Ahrefs' free Webmaster Tools tier for a single verified domain's backlink and basic crawl data instead of the paid continuous crawl", lastVerified: "2026-08" },
        ],
        paidUpgradeNote: "The free SEMrush crawl plus Ahrefs' free Webmaster Tools tier covers a single-domain audit; upgrade to Ahrefs paid only once you need continuous real-time crawling across a growing multi-location site.",
      },
      deliverable: "A single deduplicated, severity-ranked fix backlog merging both tools' Site Audit findings, plus a broken-backlink triage sheet with an owner assigned to each group.",
      sampleOutput:
        "Yatra Online, /hotels/ Site Health Reconciliation (excerpt)\n\nCONFIRMED CRITICAL (both tools): 18 pages missing structured data markup\nSemrush-only, verified real: 27 pages with duplicate title tags\nAhrefs-only, verified real: 6 pages returning soft-404s\nBroken backlinks (11 total): 8 -> marketer-owned 301 redirect requests, 3 -> developer-owned structural redirects for a deprecated city page",
      successCriteria: [
        "Final backlog includes verified tool-exclusive findings from both audits, not just the overlap",
        "Every broken-backlink group is assigned a correct owner (marketer vs. developer) based on fix type",
      ],
      portfolioReady: true,
      stretch: "Track how many of the merged backlog's issues each tool would have missed alone, and report that gap as a case for running both audits quarterly.",
    },
  ],

  "clay-for-marketers": [
    {
      id: "clay-for-marketers-waterfall-spec-design",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Design a Waterfall Enrichment Spec (No Clay Seat Required)",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Design a complete waterfall enrichment spec, provider order, credit logic, and single-output AI column prompts, then hand-simulate it in a spreadsheet so you understand exactly what Clay automates before you ever touch the tool.",
      companyId: "tbo-tek",
      scenario:
        "You're on the growth team at TBO Tek, the B2B travel distribution platform that listed on the NSE/BSE in 2024, and you've been asked to build an outbound list of 50 unenriched travel-agency partner leads before your team's Clay seat gets provisioned next week.",
      brief:
        "Spec the waterfall provider order, the credit logic, and three single-output AI column prompts, then simulate the logic by hand in Sheets so the workflow is ready to load straight into Clay on day one.",
      mode: "build",
      conceptsCovered: [
        "Designing a waterfall provider order",
        "Writing single-output AI column prompts",
      ],
      steps: [
        {
          stepId: "step-1-waterfall-order-design",
          concept: "Designing a waterfall provider order",
          lessonAnchor: "the-waterfall-enrichment-concept",
          theoryRecap:
            "The lesson's waterfall concept chains providers so each one only fires if the last one missed, and a provider only charges a credit when it actually finds a result. A 4-5 provider chain discovers emails for 85-95% of B2B prospects.",
          question:
            "You have three providers: Apollo (60% hit rate), Findymail (55% hit rate), Hunter (45% hit rate), all at similar per-credit cost. What order minimizes wasted credits while still reaching 90%+ coverage?",
          toolName: "Google Sheets",
          where:
            "A new sheet with columns: lead_domain, lead_name, provider_that_found_it, final_email, credits_spent.",
          procedure: [
            "List all 50 leads with only domain and name filled in, nothing enriched yet.",
            "Order providers highest-hit-rate-first, Apollo then Findymail then Hunter, so the waterfall burns its best odds before its worst.",
            "Mark 60% of rows as found by Apollo (provider 1); leave the rest blank.",
            "Of the remaining blanks, mark 55% as found by Findymail (provider 2); leave the rest blank.",
            "Of what's still blank, mark 45% as found by Hunter (provider 3).",
            "Set credits_spent to exactly 1 for every row that found an email, 0 for rows still blank after all three, since only the stopping provider bills.",
          ],
          outputSample:
            "lead_domain          provider_that_found_it   final_email              credits_spent\nagoda-partner01.com  Apollo                   ravi.k@agoda...          1\nmakemytrip-b2b.com   Findymail                priya@makemytrip...      1\ncleartrip-corp.com   Hunter                   (not found)              0\n...47 more rows\n\nTOTAL: 46 of 50 found (92%), 46 credits spent (not 150)",
          healthy:
            "Coverage lands at 90%+ and total credits spent equal roughly the number of leads found, not the number of leads times providers attempted.",
          unhealthy:
            "Credits spent are close to 150 (50 leads x 3 providers), meaning every provider was configured to run on every row instead of stopping at the first hit.",
          interpret:
            "A waterfall's cost advantage only exists if it actually stops at the first successful provider; ordering by hit rate first, then verifying the stop logic, is what separates a real waterfall from three parallel lookups.",
          soWhat: [
            {
              symptom: "Coverage stalls below 90% after three providers",
              action: "Add a fourth catch-all provider (e.g. Clearbit) to the end of the chain",
              effort: "30 min",
            },
            {
              symptom: "Credits spent are far higher than leads found",
              action: "Rebuild the waterfall so each provider only fires when the prior one returned blank",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-ai-column-prompt-design",
          concept: "Writing single-output AI column prompts",
          lessonAnchor: "ai-columns-the-second-power-layer",
          theoryRecap:
            "The lesson's rule for AI columns is one column, one output. Asking for a first line AND a subject line AND a company summary in one prompt produces messy, hard-to-map output.",
          question:
            "You need three outputs per enriched row: a personalized opener, an ICP fit score, and a company category label. How many separate AI column prompts should you write?",
          toolName: "ChatGPT",
          where:
            "A prompt-drafting doc with one heading per intended Clay AI column.",
          procedure: [
            "Write three separate prompts, one per output, never combined.",
            "Draft prompt 1: 'Write a one-sentence opener referencing {company_name}'s recent {funding_round} and their focus on {primary_product}.' Output: opener text only.",
            "Draft prompt 2: 'Score this company 1-10 for ICP fit based on headcount {headcount} and tech stack {tech_stack}.' Output: a single number.",
            "Draft prompt 3: 'Classify {company_name} as PLG, enterprise, or SMB based on {headcount} and {pricing_page_text}. Output only the label.' Output: a single label.",
            "Test each prompt against 3 sample rows in ChatGPT and confirm each returns exactly one clean value with no extra commentary.",
          ],
          outputSample:
            "Prompt 1 test row: 'Priya, congrats on TBO Tek's NSE listing, curious how the new B2B travel API is handling your partner volume.'\nPrompt 2 test row: 8\nPrompt 3 test row: enterprise",
          healthy:
            "Each prompt returns one clean value with zero extra commentary, ready to map directly into a single Clay column.",
          unhealthy:
            "A single prompt returns an opener, a score, and a label all mashed into one paragraph, which cannot be mapped into separate CRM fields without manual cleanup.",
          interpret:
            "A messy multi-output response isn't a prompting failure to patch with more instructions, it's a sign the prompt is doing the job of three columns and needs to be split.",
          soWhat: [
            {
              symptom: "AI output mixes multiple pieces of information in one field",
              action: "Split into one prompt per output and map each to its own column",
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
            role: "Simulate the waterfall provider order and credit logic by hand",
            why: "Free, no account friction, and mirrors exactly what a Clay table's rows and columns will look like",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "ChatGPT",
            role: "Draft and test each single-output AI column prompt before it goes into Clay",
            why: "Free tier is enough to test prompt wording against a handful of sample rows",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "This spec is deliberately built without a Clay seat. Clay itself isn't a free tool, once your team's seat is active, the same provider order and prompts load directly into Clay's UI with no changes to the workflow logic.",
      },
      deliverable:
        "A written waterfall enrichment spec: provider order with credit logic, plus three tested single-output AI column prompt drafts, ready to load directly into Clay.",
      sampleOutput:
        "RateGain Travel Technologies, outbound waterfall spec (excerpt)\n\nPROVIDER ORDER: Apollo -> Findymail -> Hunter -> Clearbit (catch-all)\nCREDIT RULE: bill only the provider that returns a result\n\nAI COLUMN 1 (opener): 'Write a one-sentence opener referencing {company_name}'s recent {funding_round} and focus on {primary_product}.'\nAI COLUMN 2 (ICP score): 'Score 1-10 based on {headcount} and {tech_stack}. Output only the number.'\nAI COLUMN 3 (category): 'Classify as PLG, enterprise, or SMB. Output only the label.'",
      successCriteria: [
        "Waterfall provider order is sorted highest-hit-rate first",
        "Credit logic only bills the successful stopping provider, not every attempt",
        "All three AI column prompts request exactly one output each",
      ],
      portfolioReady: true,
    },
    {
      id: "clay-for-marketers-enrichment-table-audit",
      tier: "core",
      archetype: "audit",
      title: "Audit a Messy Enrichment Table Export",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a 30-row enrichment export handed off by a contractor, diagnose where the waterfall is misconfigured and where AI columns are producing unmappable, multi-output text before the data gets pushed to the CRM.",
      companyId: "rategain-travel-technologies",
      scenario:
        "You're the marketing ops analyst at RateGain Travel Technologies, the Noida-founded travel and hospitality SaaS company listed on the NSE since December 2022, reviewing a messy enrichment export from a contractor before it syncs to HubSpot.",
      brief:
        "Find where the waterfall billed more credits than it should have, and where an AI column's output is too messy to map into a CRM field.",
      mode: "diagnostic",
      conceptsCovered: [
        "Diagnosing waterfall credit waste",
        "Spotting multi-output AI column failures",
      ],
      steps: [
        {
          stepId: "step-1-credit-waste-diagnosis",
          concept: "Diagnosing waterfall credit waste",
          lessonAnchor: "pricing-how-credits-work",
          theoryRecap:
            "The lesson's pricing model: a successful waterfall stop costs one credit, not one per provider attempted, since providers that miss don't charge.",
          question:
            "The export has 30 rows and a 3-provider waterfall, but total credits billed is 118, nearly 4 credits per row. What's wrong?",
          toolName: "Google Sheets",
          where:
            "The provided export: columns lead_id, provider_attempted_order, credits_billed, final_email_found.",
          procedure: [
            "Filter to rows where final_email_found is TRUE and sum credits_billed for just those rows.",
            "Filter to rows where final_email_found is FALSE and sum credits_billed for those.",
            "Flag any row billed for a provider listed AFTER a provider that already found a result in the same row.",
            "Count how many rows show more than 1 credit billed despite a successful find.",
          ],
          outputSample:
            "lead_id  provider_attempted_order         credits_billed  final_email_found\nL-014    Apollo(hit), Findymail, Hunter   3               TRUE\nL-019    Apollo(hit), Findymail, Hunter   3               TRUE\n...\n22 of 30 rows billed 3 credits despite an early hit; only 8 rows billed correctly (1 credit)",
          healthy:
            "Credits billed roughly equal the count of successful finds, one credit per stopped row.",
          unhealthy:
            "22 of 30 rows billed 3 credits despite finding an email on the first provider, meaning all three providers ran regardless of whether an earlier one already hit.",
          interpret:
            "This isn't a pricing surprise, it's a broken waterfall: the providers were configured to run in parallel instead of stopping at the first hit, tripling the real cost of the same coverage.",
          soWhat: [
            {
              symptom: "Credits billed are several times higher than successful finds",
              action: "Reconfigure the table so each provider only fires when the prior one returned blank",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-ai-column-output-diagnosis",
          concept: "Spotting multi-output AI column failures",
          lessonAnchor: "ai-columns-the-second-power-layer",
          theoryRecap:
            "The lesson warns that an AI column prompt asking for multiple things at once produces messy, hard-to-map output, one column should do one thing.",
          question:
            "One AI column, meant to hold just a personalized opener, contains a paragraph mixing an opener, a lead score, and a company summary. Where did this go wrong?",
          toolName: "Claude",
          where:
            "The export's 'ai_opener' column, alongside the underlying prompt used to generate it.",
          procedure: [
            "Paste 5 sample values from the ai_opener column into Claude and ask it to identify how many distinct pieces of information each cell contains.",
            "Pull the original prompt used for that column and check whether it asked for more than one output.",
            "Confirm the prompt reads like: 'Write an opener AND score this lead AND summarize the company.'",
            "Recommend splitting it into three separate single-output columns, matching the fix pattern from the waterfall spec project.",
          ],
          outputSample:
            "Cell L-014, ai_opener column:\n'Hi Rahul, congrats on the recent funding round! I'd score this lead around 7/10 given the mid-size headcount, and RateGain looks like a strong enterprise travel-tech fit given their NSE listing and hotel distribution focus.'\n\nDiagnosis: one cell contains an opener, a score, and a fit label, three outputs crammed into one column.",
          healthy:
            "Each AI column contains exactly one clean value that maps directly to one CRM field.",
          unhealthy:
            "A single cell contains multiple distinct pieces of information glued into one paragraph, unusable without manual splitting.",
          interpret:
            "The output looks like a prompting quality problem but is actually a scope problem, the prompt was written to do three columns' worth of work in one shot.",
          soWhat: [
            {
              symptom: "An AI column's cells mix multiple types of information",
              action: "Rewrite as three single-output prompts, one per intended field",
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
            role: "Filter and sum the export to find billing and mapping problems",
            why: "Free, and the export already arrives as a spreadsheet",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Claude",
            role: "Analyze messy AI column output and confirm how many distinct outputs it contains",
            why: "Free tier is enough to review a handful of sample cells",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "The audit itself needs no Clay seat, only the export file. The fixes it recommends (reordering providers, splitting AI columns) are then applied back inside Clay by whoever owns the table.",
      },
      deliverable:
        "A short audit memo flagging every row with waterfall credit waste and every AI column cell with unmappable multi-output text, plus the specific fix for each.",
      sampleOutput:
        "Go Digit General Insurance, enrichment export audit (excerpt)\n\nCREDIT WASTE: 19 of 40 rows billed for 2+ providers despite an early hit. Estimated overspend: 21 credits.\n\nAI COLUMN ISSUE: 'ai_summary' column mixes a company summary with a cold-outreach subject line in 14 of 40 rows. Recommend splitting into 'ai_summary' and 'ai_subject_line' as separate columns.",
      successCriteria: [
        "Correctly identifies rows where the waterfall billed for providers beyond the first hit",
        "Correctly identifies AI column cells mixing more than one output",
        "Recommends a specific fix for each problem type found",
      ],
      portfolioReady: true,
    },
  ],
  "tools-stack-by-stage": [
    {
      id: "tools-stack-by-stage-seed-stack-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build a Stage-Appropriate Tool Stack on a Lean Budget",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a 2-person, pre-revenue pilot team, build a stack that matches its actual stage rather than the parent company's enterprise tooling, and apply the 'Contact Sales' filter to reject premature purchases.",
      companyId: "go-digit-insurance",
      scenario:
        "You've joined a 2-person growth pod inside Go Digit General Insurance, the Bengaluru-headquartered insurer that listed on the NSE/BSE in 2024, piloting a new digital-first micro-insurance product run like a seed-stage startup with its own small, separate budget.",
      brief:
        "Build the stack this 2-person, pre-revenue pilot actually needs today, not the stack the parent company already runs.",
      mode: "build",
      conceptsCovered: [
        "Sizing a stage-appropriate stack against ARR and headcount",
        "Applying the Contact Sales rule to filter out premature tools",
      ],
      steps: [
        {
          stepId: "step-1-stack-sizing",
          concept: "Sizing a stage-appropriate stack against ARR and headcount",
          lessonAnchor: "the-four-stacks",
          theoryRecap:
            "The lesson's Stage 1 (solo founder, under $200/mo total) and Stage 2 (seed, $1,500-$4,000/mo) templates exist because buying the wrong stage's stack either wastes cash or leaks pipeline.",
          question:
            "The pilot has 2 marketers, under 1,000 contacts, and no revenue yet. Does it fit the Stage 1 or Stage 2 template?",
          toolName: "Google Sheets",
          where:
            "A stack-planning sheet with columns: category, tool, monthly cost, stage fit.",
          procedure: [
            "List the required categories: website, CRM, email, analytics, outbound, automation.",
            "For each category, pick the cheapest tool that covers under 1,000 contacts, favoring free tiers.",
            "Total the monthly cost column.",
            "Compare the total against the Stage 1 ceiling (~$200/mo) versus the Stage 2 range ($1,500-$4,000/mo) to confirm which template actually fits.",
          ],
          outputSample:
            "category      tool                monthly cost\nCRM           HubSpot CRM Free     $0\nEmail         Mailchimp Free       $0\nAnalytics     GA4                  $0\nDocs/ops      Notion Free          $0\nTOTAL                              $0/mo  -> fits Stage 1, not Stage 2",
          healthy:
            "Total stays near or under the Stage 1 ceiling, matching a 2-person, pre-revenue, sub-1,000-contact pilot.",
          unhealthy:
            "Total lands in Stage 3 territory (a warehouse, an ABM platform) for a team this small and this early.",
          interpret:
            "A stack sized for the parent company's revenue stage, not the pilot's actual stage, wastes budget the pilot doesn't have and won't get approved for.",
          soWhat: [
            {
              symptom: "Proposed stack cost exceeds $200/mo for a pre-revenue, 2-person team",
              action: "Cut down to free-tier tools per category and revisit paid upgrades at 1,000+ contacts",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-contact-sales-filter",
          concept: "Applying the Contact Sales rule to filter out premature tools",
          lessonAnchor: "what-it-actually-is",
          theoryRecap:
            "The lesson's rule: if a tool has a 'Contact Sales' button, you are not the customer yet at this stage.",
          question:
            "A teammate wants to add a six-figure ABM platform to the pilot's stack. What's the fast filter?",
          toolName: "Notion",
          where:
            "A one-page 'tool request' doc.",
          procedure: [
            "Check the vendor's pricing page for a listed price versus a 'Contact Sales' button only.",
            "If it's 'Contact Sales' only, log it as a Stage 3+ tool and reject the request for now.",
            "Document the specific revenue or headcount trigger that would justify revisiting it.",
            "File the decision under 'revisit at Series B' instead of buying now.",
          ],
          outputSample:
            "TOOL REQUEST: 6sense ABM platform\nPricing page: 'Contact Sales' only, no listed price\nDECISION: Reject for now\nREVISIT WHEN: pilot reaches $5M ARR or 8+ marketers (Stage 3 threshold)",
          healthy:
            "Every rejected tool has a documented revenue/headcount trigger for when to revisit it.",
          unhealthy:
            "The pilot buys a 'Contact Sales' tool it can't yet justify, based on what a bigger team down the hall uses.",
          interpret:
            "The Contact Sales rule isn't a budget rule alone, it's a stage-fit rule: those tools are built for teams with the volume and headcount to use them, which this pilot doesn't have yet.",
          soWhat: [
            {
              symptom: "A tool request has no listed price on its pricing page",
              action: "Reject for now and log the specific trigger that would justify revisiting it",
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
            role: "Build and total the stack-planning sheet",
            why: "Free, and doubles as the deliverable the pilot lead can review",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Notion",
            role: "Document each tool-request decision and its revisit trigger",
            why: "Free tier handles a single one-page doc with no friction",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page stack plan with total monthly cost against the Stage 1 ceiling, plus a documented reject-or-approve decision for any premature tool request.",
      sampleOutput:
        "TBO Tek internal pilot pod, stack plan (excerpt)\n\nCRM: HubSpot CRM Free ($0)\nEmail: Mailchimp Free ($0)\nAnalytics: GA4 + Plausible ($9/mo)\nTOTAL: $9/mo -> fits Stage 1\n\nREJECTED: 6sense ABM platform (Contact Sales only). Revisit at $5M ARR.",
      successCriteria: [
        "Stack total is compared explicitly against the correct stage's cost ceiling",
        "At least one 'Contact Sales' tool request is correctly rejected with a documented revisit trigger",
      ],
      portfolioReady: true,
    },
    {
      id: "tools-stack-by-stage-series-b-sprawl-audit",
      tier: "core",
      archetype: "audit",
      title: "Diagnose Stack Sprawl at a Fast-Growing Business Unit",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a 35-tool inventory from a fast-growing business unit, separate genuinely active, integrated tools from shelfware, then check the inventory against the lesson's four signals that a stack migration is overdue.",
      companyId: "rategain-travel-technologies",
      scenario:
        "You're the newly hired marketing ops lead reviewing a fast-growing business unit within RateGain Travel Technologies, the NSE-listed travel and hospitality SaaS company, that has accumulated classic Series B stack sprawl.",
      brief:
        "Separate the tools actually earning their keep from the shelfware, then check the inventory against the four signals that a migration is overdue.",
      mode: "diagnostic",
      conceptsCovered: [
        "Counting tool sprawl versus active usage",
        "Reading the four signals that a stack migration is overdue",
      ],
      steps: [
        {
          stepId: "step-1-sprawl-vs-usage",
          concept: "Counting tool sprawl versus active usage",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson cites Brinker's 2024 data: enterprise teams run an average of 120 tools, but core integrated stacks average only 8 to 12. Tool count is vanity, active usage is the real metric.",
          question:
            "The inventory lists 35 tools for this business unit. How many are actually integrated and used weekly, versus redundant or dormant?",
          toolName: "Google Sheets",
          where:
            "The provided 35-row tool inventory: columns tool_name, category, last_login_date, connected_to_crm.",
          procedure: [
            "Filter to tools with a last_login_date within the past 30 days, mark the rest 'dormant'.",
            "Filter to tools where connected_to_crm is TRUE, mark the rest 'disconnected'.",
            "Group by category and flag categories with 3+ tools doing the same job (e.g. three separate form tools).",
            "Count the tools that pass both the active-login and connected-to-CRM filters.",
          ],
          outputSample:
            "35 tools total\n14 dormant (no login in 30+ days)\n11 not connected to CRM\nOnly 9 tools pass both filters -> matches the 8-12 active-core benchmark, not the 35-tool inventory count",
          healthy:
            "8 to 12 core tools pass both the active-usage and CRM-connection filters, matching the lesson's benchmark.",
          unhealthy:
            "Fewer than half the inventoried tools are actually active and connected, meaning the real spend problem is redundant, disconnected shelfware, not a genuine capability gap.",
          interpret:
            "A 35-tool inventory doesn't mean 35 tools are needed, it means nobody has audited usage since the team scaled, and the fix is subtraction, not more integration work.",
          soWhat: [
            {
              symptom: "Fewer than 12 tools pass the active-usage and CRM-connection filters out of a much larger inventory",
              action: "Cancel dormant/disconnected tools at next renewal and consolidate redundant categories",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-outgrown-signals-check",
          concept: "Reading the four signals that a stack migration is overdue",
          lessonAnchor: "when-youve-outgrown-your-stack",
          theoryRecap:
            "The lesson lists four signals a migration is overdue: ops spends more time on workarounds than campaigns, attribution lives in scattered spreadsheets, new hires complain tools don't talk to each other, and manual CSV exports happen more than twice a week.",
          question:
            "Given interview notes from three ops team members, how many of the four overdue-migration signals does this business unit actually show?",
          toolName: "Claude",
          where:
            "Three short interview transcripts from the ops team, pasted into a doc.",
          procedure: [
            "Read each transcript and check it against all four signals from the lesson.",
            "Mark each signal present or absent based on direct quotes, not assumptions.",
            "Count how many of the four signals are confirmed present.",
            "If 2 or more signals are confirmed, recommend budgeting a migration per the lesson's Series B guidance.",
          ],
          outputSample:
            "Signal 1 (workarounds > campaigns): CONFIRMED - 'half my week is spreadsheet reconciliation'\nSignal 2 (attribution in spreadsheets): CONFIRMED - 'we pull from 3 different exports every Monday'\nSignal 3 (new hires complain): CONFIRMED - quote from a hire's first week\nSignal 4 (manual CSV exports 2x/week): CONFIRMED - daily, not twice weekly\n\n4 of 4 signals confirmed -> migration is overdue, not optional",
          healthy:
            "Zero or one signal confirmed, meaning the current stack still fits and a migration can wait.",
          unhealthy:
            "Two or more signals confirmed, meaning the team is already paying the cost of the old stack in lost time and lost pipeline.",
          interpret:
            "Each individual signal can look like a minor process complaint; counted together against the lesson's framework, they add up to a clear, budgetable migration case.",
          soWhat: [
            {
              symptom: "Two or more of the four signals are confirmed present",
              action: "Budget a two-quarter Series B stack migration with a dedicated marketing ops hire",
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
            role: "Filter and count the tool inventory by usage and CRM connection",
            why: "Free, and the inventory already arrives as a spreadsheet export",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Claude",
            role: "Check interview transcripts against the four overdue-migration signals",
            why: "Free tier handles reading a few short transcripts against a fixed checklist",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An audit memo: the real count of active, integrated tools versus shelfware, plus a scored checklist of the four overdue-migration signals and a migrate-or-wait recommendation.",
      sampleOutput:
        "Go Digit General Insurance, business unit stack audit (excerpt)\n\nACTIVE TOOLS: 10 of 28 inventoried pass usage + CRM-connection filters\n\nSIGNALS: 1 of 4 confirmed (manual CSV exports, twice weekly)\nRECOMMENDATION: consolidate redundant tools now, migration not yet urgent, revisit at next headcount review",
      successCriteria: [
        "Correctly separates active/integrated tools from dormant or disconnected ones using the provided filters",
        "Scores all four overdue-migration signals against direct evidence, not assumption",
        "Gives a clear migrate-now versus wait recommendation based on the signal count",
      ],
      portfolioReady: true,
    },
  ],

  "marketing-data-stack": [
    {
      id: "marketing-data-stack-silo-audit",
      tier: "mini",
      archetype: "audit",
      title: "Spot the Silo: Auditing Utkarsh Small Finance Bank's Broken Data Flow",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a description of Utkarsh Small Finance Bank's current disconnected marketing stack, identify every point where the composable-CDP principle (one warehouse, one source of truth) is being violated and rank the fixes by urgency.",
      companyId: "utkarsh-small-finance-bank",
      scenario:
        "You're the digital marketing analyst at Utkarsh Small Finance Bank, the Varanasi-founded small finance bank that listed on the NSE and BSE in July 2023. Your CMO just asked why the loan cross-sell campaign keeps targeting customers who closed their accounts three weeks ago.",
      brief:
        "Read the current-state stack description, sort every step into 'silo' (violates single-source-of-truth) or 'fine', then rank the fixes by urgency.",
      mode: "diagnostic",
      conceptsCovered: ["Composable CDP architecture replacing siloed packaged tools"],
      steps: [
        {
          stepId: "step-1-silo-audit",
          concept: "Composable CDP architecture replacing siloed packaged tools",
          lessonAnchor: "the-composable-cdp-architecture",
          theoryRecap:
            "The lesson's composable CDP splits data work into three layers: a collection tool (Segment) gathers events, a warehouse (BigQuery) becomes the single source of truth, and reverse ETL syncs it back out. A packaged, siloed tool that keeps its own private customer database breaks this because two teams end up looking at two different definitions of the same customer.",
          question:
            "Utkarsh's current setup: the collections team exports a CSV of closed accounts from the core banking system every Monday morning and emails it to the marketing intern, who manually removes those customers from the email tool's suppression list. The mobile app team runs its own analytics tool with its own device-based user ID that doesn't match the core banking account number. Which of these is the highest-priority silo to fix first, and why?",
          toolName: "Google Sheets",
          where: "A blank Google Sheet to map the current data flow before proposing a fix.",
          procedure: [
            "List every system in the current stack (core banking, email tool, mobile analytics, ad accounts) as rows",
            "For each system, note what customer ID it uses and how often it's updated",
            "Flag any system whose customer ID doesn't match another system's ID as a 'silo, critical'",
            "Flag any manual CSV/email step as a 'silo, moderate' (works today, breaks under scale or staff turnover)",
            "Rank the flagged items by how much bad targeting they cause per week",
          ],
          outputSample:
            "SYSTEM AUDIT, Utkarsh Small Finance Bank\n\nSystem              | Customer ID        | Update cadence  | Flag\nCore banking         | account_no          | real-time       | source of truth\nEmail tool            | email address only  | weekly, manual  | SILO - critical (no shared ID, 3-week lag)\nMobile app analytics  | device-based UUID   | real-time       | SILO - critical (can't join to account_no at all)\nGoogle Ads             | hashed email        | manual upload    | SILO - moderate (works, but stale)\n\nPriority fix: the mobile app UUID has no path back to account_no, worse than the email lag because it can never be joined, not even manually.",
          healthy: "Every system either shares one customer ID or has a documented, automatable path to it.",
          unhealthy: "A system whose ID can't be joined to any other system, even manually, as with the mobile app UUID here.",
          interpret:
            "A weekly manual lag is a process problem you can patch; an unjoinable ID is an architecture problem that blocks every future fix until it's solved.",
          soWhat: [
            {
              symptom: "Suppression list is always ~3 weeks stale",
              action: "Replace the manual CSV export with an automated daily sync once a warehouse exists",
              effort: "dev ticket",
            },
            {
              symptom: "Mobile app events can't be tied to a bank customer",
              action: "Add a login-linked customer ID to the app's analytics SDK before any personalization work",
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
            role: "Map the current data flow and flag silos",
            why: "Free, and a shared audit doc every stakeholder can review without new tool access",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A one-page current-state data flow map with every silo flagged and ranked by fix urgency.",
      sampleOutput:
        "FIVE-STAR BUSINESS FINANCE, data flow audit (excerpt)\n\nSystem              | Customer ID        | Flag\nLOS (loan origination)| loan_account_id    | source of truth\nCollections call tool  | phone number only  | SILO - critical, can't join to loan_account_id when a customer holds 2 loans\nSMS reminder tool       | phone number only  | SILO - critical, same join problem as above\n\nPriority fix: the collections tool first, a phone-only ID means a repayment reminder can land against the wrong loan.",
      successCriteria: [
        "Correctly flags all silo systems (2+ critical, 1+ moderate)",
        "Ranks the mobile app UUID issue above the manual CSV lag with a stated architectural reason",
        "Names at least one concrete step to fix each flagged system",
      ],
      portfolioReady: true,
      stretch:
        "Sketch the target-state Mermaid diagram (collection -> warehouse -> reverse ETL) using the lesson's architecture diagram as a template.",
    },
    {
      id: "marketing-data-stack-reverse-etl-activation-plan",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build the Sync: A Reverse-ETL Audience Activation Plan for Five-Star Business Finance",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Design a complete reverse-ETL activation plan, audience definition, consent filter, sync cadence, and destination, for a realistic MSME lending audience, using the lesson's activation framework.",
      companyId: "five-star-business-finance",
      scenario:
        "You're the growth marketer at Five-Star Business Finance, the Chennai-based MSME lender that IPO'd in November 2022. Your CRO wants to stop showing loan top-up ads to customers who already closed their loan last month.",
      brief:
        "Define the audience query in plain English, choose the collection and destination tools, write the consent filter, and set the sync cadence, then package it as a one-page brief a data engineer could implement without follow-up questions.",
      mode: "build",
      conceptsCovered: [
        "Reverse ETL as a scheduled or real-time sync from warehouse to destination",
        "Consent filtering before any ad-platform sync",
      ],
      steps: [
        {
          stepId: "step-1-event-collection-audit",
          concept: "Reverse ETL as a scheduled or real-time sync from warehouse to destination",
          lessonAnchor: "activating-data-with-reverse-etl",
          theoryRecap:
            "The lesson explains reverse ETL reads a SQL query result from the warehouse and writes it to a destination tool, replacing custom per-API scripts, using the example of syncing users who spent over $1,000 but haven't purchased in 30 days straight to Meta Ads.",
          question:
            "Five-Star's CRO wants an audience of MSME customers who repaid their current loan in full in the last 60 days but haven't started a new application, a strong top-up candidate. Before you can write that as a warehouse query, what event data does Segment need to be reliably collecting for this audience to even be definable?",
          toolName: "Segment",
          where: "Segment's tracking plan (or, without live access, a written tracking-plan document listing the events).",
          procedure: [
            "List the exact events needed: loan_disbursed, loan_closed (full repayment), application_started",
            "For each event, confirm it fires with a shared customer id (loan_account_id), not a session or device id",
            "Check for gaps: if 'loan_closed' isn't currently tracked as its own event, this audience can't be built yet",
            "Write the tracking-plan gap as a one-line dev requirement if any event is missing",
          ],
          outputSample:
            "TRACKING PLAN CHECK, Five-Star Business Finance\n\nEvent                | Tracked today?                              | Has loan_account_id?\nloan_disbursed         | yes                                          | yes\nloan_closed             | NO, only a generic 'account_status_changed' with no reason code | n/a\napplication_started       | yes                                          | yes\n\nGap: loan_closed doesn't exist as its own event. Add a reason code to account_status_changed, or fire a dedicated loan_closed event, before this audience can be built.",
          healthy: "Every event the audience needs already fires with a shared id.",
          unhealthy: "The audience depends on an event that doesn't exist yet, disguised as 'we probably have that data somewhere.'",
          interpret: "A reverse-ETL audience is only as good as the events feeding the warehouse; fix the collection gap before writing the sync.",
          soWhat: [
            {
              symptom: "Audience defined but 0 rows sync",
              action: "Ship the missing event before building the sync, not after",
              effort: "dev ticket",
            },
          ],
          owner: "either",
        },
        {
          stepId: "step-2-sync-and-consent-design",
          concept: "Consent filtering before any ad-platform sync",
          lessonAnchor: "activating-data-with-reverse-etl",
          theoryRecap:
            "The lesson's Callout warns that reverse-ETL syncs must always enable consent filters, excluding any user who opted out of marketing cookies or data sharing, before the data reaches an ad network.",
          question:
            "You have the audience defined and the missing event shipped. Now design the actual sync: what's the query logic in plain English, which destination, what cadence, and what consent filter goes on top?",
          toolName: "Google Analytics 4",
          where: "GA4 Explorations, to sanity-check the estimated audience size before committing engineering time to the real warehouse query.",
          procedure: [
            "In GA4 Explorations, build a rough proxy segment (users who completed a loan-closed-equivalent event in the last 60 days, no application event since) to estimate size",
            "If the estimated audience is too small (under 500) to be worth ad spend, stop here and note it",
            "Write the final plain-English query logic for the real warehouse implementation",
            "Add the consent filter: exclude any customer with marketing_consent = false or do_not_contact = true",
            "Set the sync cadence (daily, since loan closures aren't high-frequency) and destination (Meta Ads Custom Audience)",
          ],
          outputSample:
            "SYNC BRIEF, Five-Star Business Finance top-up audience\n\nQuery logic: loan_closed in last 60 days AND no application_started since AND marketing_consent = true\nEstimated size (GA4 proxy): ~1,200 users/month\nDestination: Meta Ads Custom Audience\nCadence: daily, 2am IST\nConsent filter: excludes do_not_contact=true and marketing_consent=false (est. 8% of the pool)",
          healthy: "The brief names a query, a destination, a cadence, and a consent filter with an estimated excluded percentage.",
          unhealthy: "A sync that sends 100% of the matched rows because 'we'll add consent filtering later.'",
          interpret:
            "Consent filtering isn't a compliance afterthought, it's a line in the same query. Skip it and you've built a privacy-law violation, not an audience.",
          soWhat: [
            {
              symptom: "Legal flags the campaign after launch",
              action: "Add the consent filter to the query itself, not as a downstream exclusion list",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Segment",
            role: "Confirm the event schema the audience depends on",
            why: "Free tier tracks up to 1,000 monthly visitors, enough to document a tracking plan",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Analytics 4",
            role: "Sanity-check audience size before committing engineering time",
            why: "Free and already deployed on most sites; Explorations approximates a warehouse-query result",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Write the final sync brief for the data engineer",
            why: "No new tool access needed to produce and hand off the spec",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "A real implementation needs a warehouse (BigQuery) and a reverse-ETL tool (Hightouch or Census) to actually run the query and push the sync on schedule, this project designs the brief a data engineer would build from.",
      },
      deliverable: "A one-page reverse-ETL sync brief: query logic, destination, cadence, and consent filter, ready for a data engineer to implement.",
      sampleOutput:
        "SYNC BRIEF, Utkarsh Small Finance Bank FD-maturity cross-sell audience\n\nQuery logic: fd_matured in last 14 days AND no fd_renewed AND marketing_consent = true\nEstimated size: ~3,400 customers/month\nDestination: Google Ads Customer Match\nCadence: daily, 6am IST\nConsent filter: excludes marketing_consent=false (est. 5% of the pool)",
      successCriteria: [
        "Identifies at least one event-collection gap before defining the audience",
        "Query logic includes a consent filter as part of the query, not a separate step",
        "Names a specific destination and sync cadence, not just 'sync to ads'",
      ],
      portfolioReady: true,
    },
  ],
  "drift-intercom": [
    {
      id: "drift-intercom-tool-fit-scorecard",
      tier: "mini",
      archetype: "head-to-head",
      title: "Which Chatbot Wins? Scoring Drift vs Intercom for Awfis Space Solutions",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Apply the lesson's feature comparison to score Drift vs Intercom against Awfis's actual needs (tour bookings plus member support) and defend the winner in one paragraph.",
      companyId: "awfis-space-solutions",
      scenario:
        "You're the growth marketer at Awfis Space Solutions, India's largest flexible workspace operator (200+ centres, 135,000+ seats), which IPO'd on the NSE and BSE in May 2024. Prospective members abandon the pricing page instead of booking a centre tour, and existing members email support with billing questions that take two days to answer.",
      brief:
        "Score both tools against Awfis's two real needs using the lesson's comparison table as your rubric, then write a one-paragraph recommendation defending the pick.",
      mode: "diagnostic",
      conceptsCovered: ["Matching a conversational-marketing tool to its primary design purpose, not its feature list"],
      steps: [
        {
          stepId: "step-1-fit-scorecard",
          concept: "Matching a conversational-marketing tool to its primary design purpose, not its feature list",
          lessonAnchor: "the-core-difference-drift-vs-intercom",
          theoryRecap:
            "The lesson frames Drift as a sales-acceleration tool built around one outcome (book a meeting fast) and Intercom as a full customer-communication platform covering sales, support, and lifecycle messaging in one contact database.",
          question:
            "Awfis needs two things from a chat tool: (1) turn pricing-page visitors into booked centre tours, and (2) cut the 2-day email wait on existing-member billing questions. Weighting need (1) at 60% and need (2) at 40% since new-member acquisition matters more this quarter, which tool scores higher, and by how much?",
          toolName: "Google Sheets",
          where: "A weighted scorecard, criteria as rows, Drift and Intercom as columns.",
          procedure: [
            "List the lesson's comparison-table criteria relevant to Awfis: meeting booking in chat, ABM routing, support ticketing, proactive messaging, email automation",
            "Score each tool 1-5 per criterion using the lesson's Excellent/Good/Basic/Limited language as a guide (Excellent=5, Good=4, Basic or available via integration=2, Limited=1)",
            "Weight meeting-booking and ABM criteria toward the 60% tour-booking need, weight ticketing and messaging toward the 40% support need",
            "Sum the weighted scores per tool",
            "Note that this site's own tools directory doesn't catalog Drift or Intercom individually, flag that as a real-world gap in the free-tool path and name the closest cataloged stand-in",
          ],
          outputSample:
            "WEIGHTED SCORECARD, Awfis Space Solutions\n\nCriterion (weight)                   | Drift score | Intercom score\nMeeting booking in chat (25%)          | 5           | 3\nABM/account routing (20%)               | 5           | 2\nSupport ticketing (25%)                  | 2           | 5\nProactive/behavioral messaging (15%)      | 3           | 5\nEmail campaign automation (15%)            | 2           | 5\n\nWeighted total: Drift 3.55 / Intercom 3.90\n\nRecommendation: Intercom wins by 0.35, close, but Awfis's 2-day support backlog is the more urgent fire, and Intercom's single contact database means a member's tour history is visible the moment they file a billing question.",
          healthy: "A close score with a stated reason for the tie-break, not just the highest raw number.",
          unhealthy: "Picking Drift by reflex because 'it's the sales tool and we do sales', ignoring the 40% weight on support.",
          interpret: "When the weighted scores are close, the tie-break criterion (which need is more urgent right now) matters more than the tool's category reputation.",
          soWhat: [
            {
              symptom: "Team defaults to whichever tool a competitor uses",
              action: "Re-run the weighted scorecard with this quarter's actual priority split before renewing either contract",
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
            role: "Build and weight the scorecard",
            why: "Free, and the scorecard itself is the deliverable, no chat tool access needed to run this exercise",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Brevo",
            role: "Stand-in for hands-on practice with a live, freemium chat widget",
            why: "Neither Drift nor Intercom is individually cataloged in this site's tools directory; Brevo is the closest freemium tool here that ships live chat, use it to see a real chat-widget flow, then apply the scorecard logic to the real Drift and Intercom feature pages",
            required: false,
            fallback: "Sign up for either platform's own free trial directly (both linked in this lesson's resources) to score against the real product instead of a proxy",
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A weighted scorecard plus a one-paragraph recommendation memo naming the winner and the tie-break reason.",
      sampleOutput:
        "WEIGHTED SCORECARD, Utkarsh Small Finance Bank (loan pre-qualification chat)\n\nCriterion (weight)              | Drift | Intercom\nMeeting/callback booking (35%)    | 5     | 3\nABM/account routing (5%)           | 4     | 1\nSupport ticketing (20%)             | 2     | 5\nProactive messaging (20%)            | 3     | 5\nEmail automation (20%)                | 2     | 5\n\nWeighted total: Drift 3.15 / Intercom 3.85\n\nRecommendation: Intercom wins here, a loan applicant asking a billing question after disbursal needs the same contact record as the one who chatted pre-application, which only Intercom's unified database gives Utkarsh.",
      successCriteria: [
        "Scorecard weights criteria toward the stated business need, not equal weighting",
        "Recommendation names a specific tie-break reason, not just the higher score",
        "Flags the Drift/Intercom tools-directory gap and names the fallback path",
      ],
      portfolioReady: true,
    },
    {
      id: "drift-intercom-chatbot-opener-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Teardown: Grading Three Chatbot Opening Scripts",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Apply the lesson's 5-step chatbot framework and its email-timing warning to grade three synthetic opening scripts, separating real defects from plausible-looking non-issues.",
      companyId: "utkarsh-small-finance-bank",
      scenario:
        "You're reviewing three draft chatbot scripts for Utkarsh Small Finance Bank's personal-loan landing page before launch: one written by a junior marketer, one by a sales-focused agency, one by the support team.",
      brief:
        "Grade each script's opener and question flow against the lesson's 5-step framework, flag real defects with severity, and don't flag things that only look like defects.",
      mode: "teardown",
      conceptsCovered: [
        "The 5-step chatbot framework: trigger, opener, qualifying questions, branch, graceful disqualification",
        "Earning the email before asking for it",
      ],
      teardownItems: [
        {
          itemId: "drift-intercom-opener-1-early-email",
          specimen:
            "SCRIPT A (junior marketer draft)\nBot: \"Hi there! Before we get started, what's your email address so I can send you our loan brochure?\"\nVisitor: [drops off, no response]\nBot: (no further messages, chat ends)",
          specimenSource: "synthetic-realistic",
          prompt: "Grade this script against the lesson's framework. What's the defect, and what specifically would you change?",
          answerKey: [
            {
              defect: "Asks for the visitor's email in the very first message, before answering any question or establishing value.",
              severity: "critical",
              whyItMatters:
                "The lesson's own warning: visitors asked for their email within the first two messages drop off at a much higher rate, this script asks in message one.",
              lessonRef: "setting-up-your-first-chatbot-a-step-by-step-framework",
              owner: "you",
            },
          ],
          distractors: [
            "The bot only sent one message before going silent (this is a consequence of the real defect, not a separate one, a better opener would have kept the visitor engaged)",
            "The script doesn't use the visitor's name (minor, not a framework violation)",
          ],
          partialCredit: true,
        },
        {
          itemId: "drift-intercom-opener-2-generic",
          specimen:
            "SCRIPT B (sales agency draft)\nBot: \"Hi! How can I help you today?\"\nVisitor: \"just looking at rates\"\nBot: \"Great! What's your company size, role, and timeline for a decision?\"",
          specimenSource: "synthetic-realistic",
          prompt: "Grade this script. Is the generic opener the real defect, or is something else the bigger problem?",
          answerKey: [
            {
              defect:
                "Jumps straight to three B2B-style qualifying questions (company size, role, timeline) on a personal-loan page, these are Drift's own B2B SaaS qualifiers, not relevant to a retail bank customer.",
              severity: "critical",
              whyItMatters:
                "The lesson's framework says questions should qualify for the actual product; asking a retail loan applicant their 'company size' signals the script wasn't customized for this audience at all.",
              lessonRef: "setting-up-your-first-chatbot-a-step-by-step-framework",
              owner: "either",
            },
          ],
          distractors: [
            "The opener 'How can I help you today?' is generic rather than page-specific (a real weaker choice per the lesson, but moderate, not the critical issue here)",
            "The bot asked 3 questions, which is within the lesson's 2-3 question limit, not a defect by itself",
          ],
          partialCredit: true,
        },
        {
          itemId: "drift-intercom-opener-3-good",
          specimen:
            "SCRIPT C (support team draft)\nBot: \"Looking at personal loan rates? I can check your eligibility in under a minute, want to try?\"\nVisitor: \"sure\"\nBot: \"Two quick things: roughly what loan amount, and is this urgent (next 30 days) or just exploring?\"\nVisitor: \"5 lakh, exploring for now\"\nBot: \"Got it, since you're exploring, here's our EMI calculator and a quick eligibility guide, no forms needed. If you want a callback later just say the word.\"",
          specimenSource: "synthetic-realistic",
          prompt: "Grade this script. Does it have a real defect, or is this a clean pass?",
          answerKey: [
            {
              defect:
                "None, this script follows the framework correctly: page-specific opener, 2 qualifying questions, and a graceful disqualification path (resource offer instead of forcing a callback booking on an 'exploring' visitor).",
              severity: "cosmetic",
              whyItMatters:
                "Confirming a script is correct is as important a skill as catching defects, don't invent a problem just to have something to flag.",
              lessonRef: "setting-up-your-first-chatbot-a-step-by-step-framework",
              owner: "you",
            },
          ],
          distractors: [
            "The bot didn't ask for an email at all in this exchange (this is correct behavior for an 'exploring' visitor per the lesson's graceful-disqualification step, not a missed step)",
            "The bot offered a callback instead of booking one automatically (correct: it's offered as optional, matching the graceful path for a not-yet-qualified visitor)",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Score each script against the framework's 5 steps and log severity",
            why: "Free, structured way to grade multiple scripts consistently",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Brevo",
            role: "See a real live-chat widget's opener and question flow for comparison",
            why: "Closest cataloged freemium chat tool since Drift and Intercom aren't individually in this site's directory",
            required: false,
            fallback: "Use Drift's or Intercom's own free trial (linked in this lesson's resources) to compare against a live playbook builder",
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A graded teardown of all three scripts: defect (or 'clean pass'), severity, and the specific line to fix.",
      sampleOutput:
        "TEARDOWN LOG, Five-Star Business Finance MSME loan chatbot review\n\nScript A: CRITICAL, asks for phone number in message 1 before any qualifying value\nScript B: MODERATE, generic opener not specific to the top-up loan page it's deployed on\nScript C: CLEAN PASS, page-specific opener, 2 relevant questions, graceful disqualification with a resource offer",
      successCriteria: [
        "Correctly identifies the email-timing defect in Script A as critical, citing the lesson's own warning",
        "Correctly identifies Script C as a clean pass without inventing a defect",
        "Does not flag any of the 4 distractors as defects",
      ],
      portfolioReady: true,
    },
  ],

  "gsc-bing-webmaster": [
    {
      id: "gsc-bing-webmaster-coverage-triage",
      tier: "mini",
      archetype: "audit",
      title: "Triage the Coverage Report: Which Crawl Errors Actually Block Rankings",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a synthetic 12-URL GSC Coverage export mixing 404s, robots.txt blocks, redirect loops, and soft 404s, correctly sort each by whether it blocks indexing and assign a fix and an owner.",
      companyId: "bansal-wire-industries",
      scenario:
        "You're the marketing coordinator at Bansal Wire Industries, the Ghaziabad-based stainless steel wire manufacturer that exports to 60+ countries. Buyers in each export market find your product-category pages through search, and this month's Coverage report just landed with 12 flagged URLs.",
      brief:
        "Sort each flagged URL into 'blocks indexing, fix now' vs 'does not block indexing, low priority', then assign a fix and an owner (you vs a developer) for each.",
      mode: "diagnostic",
      conceptsCovered: ["Prioritizing crawl errors by whether they block indexing"],
      steps: [
        {
          stepId: "step-1-coverage-triage",
          concept: "Prioritizing crawl errors by whether they block indexing",
          lessonAnchor: "step-1-fix-crawl-errors-first",
          theoryRecap:
            "The lesson's Step 1 groups crawl errors into four types: 404s (page gone), blocked-by-robots.txt (you blocked the crawler yourself), redirect loops (A to B to A), and soft 404s (a 'not found' page returning a 200 OK status). Search engines cannot rank a page they cannot read, so these get fixed before any content or keyword work.",
          question:
            "Of these 12 flagged URLs, which need a fix today because they block indexing, and which can wait?",
          toolName: "Google Search Console",
          where: "Index > Pages > 'Why pages aren't indexed', filtered to this month's newly flagged URLs",
          procedure: [
            "Export the 12 flagged rows (URL, last crawled, status) from the Coverage report",
            "Tag each row with its error type: 404, blocked-by-robots.txt, redirect loop, or soft 404",
            "Mark 404s and soft 404s on live product-category pages as 'blocks indexing, fix now'",
            "Mark blocked-by-robots.txt rows as 'blocks indexing, fix now' only if the URL should be public",
            "Mark redirect loops as 'blocks indexing, fix now' always, they trap both users and crawlers",
            "Leave already-retired or intentionally-blocked URLs as 'low priority, no action'",
            "Assign an owner: robots.txt and redirect-loop fixes go to a developer, content/URL fixes go to you",
          ],
          outputSample:
            "COVERAGE TRIAGE, Bansal Wire Industries, 12 flagged URLs\n\nBLOCKS INDEXING, FIX NOW (7)\n1. /products/stainless-steel-wire-rod, soft 404 (thin spec page returns 200) -> owner: you, add spec table and pricing tier copy\n2. /products/bright-wire-de, redirect loop (/de <-> /de-de) -> owner: developer, collapse to single canonical URL\n3. /export/germany, blocked by robots.txt (accidental Disallow: /export/) -> owner: developer, remove the blanket rule\n4. /products/spring-wire, 404 (page deleted, still linked from nav) -> owner: developer, 301 redirect to /products/spring-wire-coils\n5. /export/vietnam, redirect loop -> owner: developer\n6. /products/binding-wire, soft 404 -> owner: you\n7. /export/uae, blocked by robots.txt -> owner: developer\n\nLOW PRIORITY, NO ACTION (5)\n8. /old-catalog-2019.pdf, 404 (intentionally retired, no inbound links) -> no action\n9. /internal/pricing-draft, blocked by robots.txt (correctly private) -> no action\n10. /cart, blocked by robots.txt (correctly private) -> no action\n11. /products/discontinued-galvanized-wire, 404 (product line ended, no replacement) -> no action\n12. /test-page-staging, blocked by robots.txt (correctly private) -> no action",
          healthy:
            "7 of 12 rows are correctly sorted into 'fix now' because they sit on live, linked pages that buyers or search engines still expect to reach.",
          unhealthy:
            "Treating every flagged row as equally urgent, or leaving an accidental robots.txt block on a live export-market page unfixed because 'it's just a warning'.",
          interpret:
            "A Coverage flag is not automatically a problem, it's a prompt to check whether the URL is supposed to be reachable.",
          soWhat: [
            {
              symptom: "An export-market landing page is blocked by robots.txt and buyers in that country can't find you in search",
              action: "Remove the Disallow rule for that path and request re-indexing via URL Inspection",
              effort: "5 min",
            },
            {
              symptom: "A retired product page still gets crawled and flagged as 404",
              action: "Leave it alone if nothing links to it; only fix pages with real inbound links or traffic history",
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
            role: "Pull the Coverage report and confirm each URL's real status",
            why: "It's the direct source of truth for how Google sees each page, and it's free with no verification cost",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log the triage decisions and owners in one shared sheet",
            why: "Free, no install, and easy to hand to a developer as a punch list",
            required: false,
            fallback: "Any plain spreadsheet or shared doc works equally well",
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A triaged crawl-error log covering all 12 flagged URLs, sorted into 'blocks indexing, fix now' vs 'low priority, no action', each with an assigned fix and owner.",
      sampleOutput:
        "COVERAGE TRIAGE, Concord Biotech, 8 flagged URLs (excerpt)\n\nBLOCKS INDEXING, FIX NOW (5)\n1. /api-portfolio/fermentation-based, soft 404 -> owner: you, expand thin spec page\n2. /regulatory/us-fda, blocked by robots.txt (accidental) -> owner: developer\n...\nLOW PRIORITY, NO ACTION (3)\n6. /old-investor-deck-2019.pdf, 404, no inbound links -> no action\n...",
      successCriteria: [
        "All 12 rows classified as either 'blocks indexing, fix now' or 'low priority, no action', with a stated reason",
        "Every 'fix now' row has both a specific fix and an owner (you or developer)",
        "No live, linked page is left in 'no action' just because the report showed a warning label",
      ],
      portfolioReady: true,
    },
    {
      id: "gsc-bing-webmaster-performance-pattern-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Diagnose the Performance Report: Four Patterns, Four Different Fixes",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given four isolated rows pulled from a Performance report, diagnose which of the lesson's four patterns each represents (high impressions/low CTR, low impressions, declining position, sudden drop) and pick the matching fix.",
      companyId: "yatharth-hospital",
      scenario:
        "You're the digital marketing analyst at Yatharth Hospital & Trauma Care Services, reviewing this month's Search Performance data across the hospital chain's NCR city pages before your Monday report to the marketing head.",
      brief:
        "Each row below looks like a problem, but they are four different problems with four different fixes. Diagnose each one correctly before you recommend anything.",
      mode: "teardown",
      conceptsCovered: [
        "High Impressions, Low CTR",
        "Low Impressions for a Target Keyword",
        "Declining Average Position",
        "Sudden Traffic Drop on One Page",
      ],
      teardownItems: [
        {
          itemId: "row-noida-orthopedic",
          specimen:
            "Page: /noida/orthopedic-department\nQuery: 'best orthopedic hospital noida'\nImpressions: 8,400/month | Clicks: 92 | CTR: 1.1% | Avg. Position: 6.2\nTitle tag: 'Orthopedic Department | Yatharth Hospital'",
          specimenSource: "synthetic-realistic",
          prompt: "Which of the four patterns does this row show, and what's the fix?",
          answerKey: [
            {
              defect: "High Impressions, Low CTR",
              severity: "moderate",
              whyItMatters:
                "Position 6 means the page is already on page 1, right where people are looking, but a 1.1% CTR against 8,400 monthly impressions means almost everyone scrolls past it. The generic title tag gives no reason to click over competitors.",
              lessonRef: "High Impressions, Low CTR",
              owner: "you",
            },
          ],
          distractors: ["Low Impressions for a Target Keyword", "Declining Average Position", "Sudden Traffic Drop on One Page"],
          partialCredit: true,
        },
        {
          itemId: "row-greater-noida-maternity",
          specimen:
            "Page: /greater-noida/maternity-care\nQuery: 'maternity hospital greater noida'\nImpressions: 140/month | Clicks: 4 | CTR: 2.9% | Avg. Position: 34\nPage published 3 months ago, has 2 internal links pointing to it.",
          specimenSource: "synthetic-realistic",
          prompt: "Which of the four patterns does this row show, and what's the fix?",
          answerKey: [
            {
              defect: "Low Impressions for a Target Keyword",
              severity: "moderate",
              whyItMatters:
                "Position 34 means the page barely ranks at all, so it almost never gets shown, that's why impressions are only 140 despite the query having real search volume. CTR looks fine here because the small sample is noisy, not because the page performs.",
              lessonRef: "Low Impressions for a Target Keyword",
              owner: "you",
            },
          ],
          distractors: ["High Impressions, Low CTR", "Declining Average Position", "Sudden Traffic Drop on One Page"],
          partialCredit: true,
        },
        {
          itemId: "row-faridabad-cardiology",
          specimen:
            "Page: /faridabad/cardiology\nQuery: 'cardiology hospital faridabad'\n3-month trend: Avg. Position 4.1 (month 1) -> 7.8 (month 2) -> 13.2 (month 3)\nImpressions roughly flat across all 3 months.",
          specimenSource: "synthetic-realistic",
          prompt: "Which of the four patterns does this row show, and what's the fix?",
          answerKey: [
            {
              defect: "Declining Average Position",
              severity: "critical",
              whyItMatters:
                "A steady month-over-month slide from position 4 to 13, with impressions staying flat, points to a competitor out-ranking the page or a content/technical issue on this specific page, not a broad algorithm shift, since a broad shift would usually move impressions too.",
              lessonRef: "Declining Average Position",
              owner: "either",
            },
          ],
          distractors: ["High Impressions, Low CTR", "Low Impressions for a Target Keyword", "Sudden Traffic Drop on One Page"],
          partialCredit: true,
        },
        {
          itemId: "row-noida-emergency",
          specimen:
            "Page: /noida/emergency-services\nDaily clicks: ~180/day steady for 8 months, then dropped to ~20/day starting exactly 4 days ago.\nURL Inspection: page shows 'Discovered, currently not indexed' as of 3 days ago.",
          specimenSource: "synthetic-realistic",
          prompt: "Which of the four patterns does this row show, and what's the fix?",
          answerKey: [
            {
              defect: "Sudden Traffic Drop on One Page",
              severity: "critical",
              whyItMatters:
                "An overnight cliff on a page with 8 months of stable traffic, paired with URL Inspection now showing it's not indexed, points at something that changed on the page itself, likely an accidental robots.txt block or a botched redirect, not a ranking decline.",
              lessonRef: "Sudden Traffic Drop on One Page",
              owner: "developer",
            },
          ],
          distractors: ["High Impressions, Low CTR", "Low Impressions for a Target Keyword", "Declining Average Position"],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Pull the Performance rows and run URL Inspection on the flagged page",
            why: "Both the trend history and the indexing status live here, no other free tool shows both together",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Log each row's diagnosis and recommended fix for the report",
            why: "Free, and easy to share with the marketing head as a one-page summary",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page diagnosis table covering all four rows, each correctly labeled with its pattern, severity, and recommended fix.",
      sampleOutput:
        "PERFORMANCE PATTERN DIAGNOSIS, Bansal Wire Industries (excerpt)\n\nRow: /export/germany, query 'stainless steel wire exporter germany'\nPattern: High Impressions, Low CTR (Position 5.4, CTR 0.9%)\nFix: Rewrite title to lead with certification claim ('ISO-Certified Exporter, 60+ Countries') instead of generic company name.\n\nRow: /products/spring-wire-coils\nPattern: Sudden Traffic Drop (clicks fell from ~40/day to ~3/day in 2 days)\nFix: URL Inspection shows a redirect loop introduced by last week's URL restructure, developer to fix immediately.",
      successCriteria: [
        "All four rows correctly matched to their pattern, not a plausible-sounding distractor",
        "Each diagnosis is justified using the specific numbers in the specimen, not a generic description",
        "The recommended fix matches the pattern (a CTR fix is not proposed for an indexing problem, and vice versa)",
      ],
      portfolioReady: true,
    },
  ],
  "ai-native-martech": [
    {
      id: "ai-native-martech-native-or-added-critique",
      tier: "mini",
      archetype: "ai-critique",
      title: "Native or Added? Interrogating Three Vendor Pitches",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given three short vendor pitches, use the lesson's AI-native vs. AI-added test to classify each correctly and justify the call with a specific line from the pitch.",
      companyId: "concord-biotech",
      scenario:
        "You're evaluating martech vendors for Concord Biotech's technical content team, who need to publish regulatory-grade documentation for global pharma buyers without adding a slow new procurement cycle to an already-lean team.",
      brief:
        "Three vendors pitched you this week. Before you take any of them to a demo, classify each as AI-native or AI-added and say why, using the lesson's test.",
      mode: "diagnostic",
      conceptsCovered: ["Distinguishing AI-native architecture from AI-added retrofits"],
      steps: [
        {
          stepId: "step-1-native-or-added",
          concept: "Distinguishing AI-native architecture from AI-added retrofits",
          lessonAnchor: "ai-native-vs-ai-added",
          theoryRecap:
            "AI-added tools are legacy platforms with a bolted-on AI feature, the AI lives in a box inside years of non-AI logic. AI-native tools are built assuming AI does the heavy lifting from the start, so the input-processing-output architecture is different, not just the feature list.",
          question:
            "For each of these three vendor pitches, is the AI the engine or the helper, and how can you tell from the pitch itself?",
          toolName: "ChatGPT",
          where: "New chat, paste one vendor pitch at a time",
          procedure: [
            "Paste the first vendor pitch into ChatGPT with the prompt: 'Is the AI here the core engine or a bolted-on feature? Quote the line that tells you.'",
            "Repeat for the second and third pitches separately, don't batch them, batching lets the model blur the distinction",
            "For each, note whether the product existed in a non-AI form first (a sign of AI-added)",
            "For each, note whether removing the AI would leave a usable, if slower, product (AI-added) or nothing at all (AI-native)",
            "Write a one-line verdict per vendor: AI-native or AI-added, plus the quoted evidence",
          ],
          outputSample:
            "VENDOR CLASSIFICATION, Concord Biotech content team\n\n1. 'DocuFlow AI' - pitch: 'Our 15-year-old document management platform now includes an AI Assist button for first-draft summaries.'\nVerdict: AI-added. Evidence: '15-year-old... now includes' confirms AI was added to an existing non-AI product; removing it leaves a fully functional document manager.\n\n2. 'RegWriter' - pitch: 'Describe the regulatory filing you need and RegWriter generates the full structured draft, citations included, from your source documents.'\nVerdict: AI-native. Evidence: input (a description) to output (a full draft) with nothing else described, there's no underlying non-AI workflow being assisted.\n\n3. 'ComplianceCRM' - pitch: 'Our CRM now scores leads using AI and suggests next steps.'\nVerdict: AI-added. Evidence: 'CRM now scores' signals the CRM existed first; lead scoring is one feature bolted onto core CRM logic.",
          healthy:
            "Each verdict is backed by a specific quoted phrase from the pitch, not a guess based on the vendor's marketing tone.",
          unhealthy:
            "Classifying a tool as AI-native just because the pitch says 'AI-powered' or 'AI-first' in the headline.",
          interpret:
            "The tell isn't the marketing language, it's whether a non-AI version of the product could plausibly exist and still function.",
          soWhat: [
            {
              symptom: "A vendor's homepage headline says 'AI-native' but the pitch describes an 'AI Assist' button",
              action: "Classify by the described architecture, not the headline; ask the vendor directly if the AI is required or optional",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "ChatGPT",
            role: "Interrogate each vendor pitch against the AI-native/AI-added test",
            why: "Free tier handles short-text classification prompts like this without needing a paid plan",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A three-row classification table (vendor, verdict, quoted evidence) ready to hand to the team before any vendor is invited to demo.",
      sampleOutput:
        "VENDOR CLASSIFICATION, Yatharth Hospital marketing team (excerpt)\n\n1. 'PatientCopy Pro' - pitch: 'Type a topic, get a full patient-education article with citations.'\nVerdict: AI-native. Evidence: no prior non-AI workflow described, the AI generates the artifact directly.\n\n2. 'HealthCRM Suite' - pitch: 'Our established patient-engagement CRM now flags at-risk patients using AI.'\nVerdict: AI-added. Evidence: 'established... now flags' confirms the AI was added to a pre-existing CRM.",
      successCriteria: [
        "All three vendors correctly classified as AI-native or AI-added",
        "Each verdict cites a specific phrase from the pitch, not a generic impression",
        "The classification is not based on whether the pitch uses the word 'AI'",
      ],
      portfolioReady: true,
    },
    {
      id: "ai-native-martech-pilot-scorecard-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build a Pilot Scorecard: Oversight and Real ROI for a Regulated-Industry AI Tool",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Build a two-part pilot evaluation asset, a human-oversight and data-security checklist, plus a true-ROI calculator, for piloting an AI-native content tool at a healthcare company where data privacy is a hard constraint.",
      companyId: "yatharth-hospital",
      scenario:
        "Yatharth Hospital & Trauma Care Services wants to pilot Jasper to draft patient-facing city-page content faster. Before anyone touches patient data or publishes AI-drafted health content, you need to decide how much human review it needs and whether the math actually works.",
      brief:
        "Build the two artifacts the lesson's framework calls for: a security/oversight checklist, and an ROI calculator that accounts for review time, not just drafting time.",
      mode: "build",
      conceptsCovered: [
        "Scoping human oversight requirements before piloting",
        "Calculating true ROI beyond time saved",
      ],
      steps: [
        {
          stepId: "step-1-oversight-checklist",
          concept: "Scoping human oversight requirements before piloting",
          lessonAnchor: "the-human-in-the-loop-consideration",
          theoryRecap:
            "Higher automation means higher brand and compliance risk. Patient-facing health content needs a human review step before publishing, unlike a fully-automated internal analytics tool, and a healthcare company additionally needs a written answer on where patient-adjacent data goes and whether the vendor trains on it.",
          question: "What has to be true before a single AI-drafted patient page can be published without incident?",
          toolName: "Google Sheets",
          where: "New sheet, tab labeled 'Oversight & Security'",
          procedure: [
            "List every stage of the content pipeline: brief, AI draft, medical accuracy review, legal/compliance review, publish",
            "Mark which stages require a human sign-off for this use case (health content is never zero-review, per the lesson's rule)",
            "Add a security column: SOC 2 Type II certified? Data encrypted in transit and at rest? Trains on customer data? Data retention period? Can data be deleted on request?",
            "Get Jasper's written answers to each security question, do not proceed on a verbal assurance",
            "Flag any 'no' or 'unknown' answer as a blocker, not a caveat, before the pilot starts",
          ],
          outputSample:
            "OVERSIGHT & SECURITY CHECKLIST, Yatharth Hospital pilot: AI-drafted city-page content\n\nPIPELINE SIGN-OFFS\nBrief -> AI draft (Jasper, no review needed) -> Medical accuracy review (required, clinical staff) -> Legal/compliance review (required, patient-safety claims) -> Publish\n\nSECURITY\nSOC 2 Type II certified: Yes (vendor documentation attached)\nData encrypted in transit/at rest: Yes\nTrains on customer data: No, per written vendor policy\nData retention: 90 days, deletable on request: Yes\nBlockers found: None, pilot cleared to proceed with 2 mandatory review stages",
          healthy:
            "Every patient-facing content stage has a named human reviewer before publish, and every security question has a written, not verbal, answer.",
          unhealthy:
            "Approving the pilot because 'Jasper is a reputable company' without a written data-training and retention policy on file.",
          interpret:
            "For a regulated industry, the checklist is the pilot's actual gatekeeper, not the tool's marketing claims.",
          soWhat: [
            {
              symptom: "Vendor won't confirm in writing whether it trains models on customer data",
              action: "Treat as a hard blocker for this pilot, do not proceed until you have it in writing",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-roi-calc",
          concept: "Calculating true ROI beyond time saved",
          lessonAnchor: "building-your-evaluation-framework",
          theoryRecap:
            "Time saved is not ROI. A tool is only ROI-positive if it saves time AND holds or improves output quality AND costs less than the fully-loaded team time it replaces, including the review time the human-in-the-loop step above just added.",
          question: "After adding the mandatory review stages, does the math on this pilot still work?",
          toolName: "Google Sheets",
          where: "Same workbook, new tab labeled 'ROI Calculator'",
          procedure: [
            "List the fully-loaded hourly cost of the content team's writer and the clinical/legal reviewers",
            "Estimate hours saved on drafting with AI vs. the current manual process, per page",
            "Estimate the added review hours from step 1's mandatory sign-offs, per page",
            "Net hours saved = drafting hours saved minus added review hours",
            "ROI = (net hours saved x blended hourly cost) minus the monthly tool cost",
            "Only call it ROI-positive if the number is positive AND output quality held or improved in the pilot sample",
          ],
          outputSample:
            "ROI CALCULATOR, Yatharth Hospital, 20-page city-page pilot\n\nDrafting time saved: 3.5 hrs/page x 20 pages = 70 hrs\nAdded clinical + legal review time: 1.5 hrs/page x 20 pages = 30 hrs\nNet hours saved: 40 hrs\nBlended team cost: $45/hr fully loaded\nValue of net hours saved: 40 x $45 = $1,800\nJasper monthly cost (team tier): $500\nNet ROI this pilot: $1,300 positive, plus quality held (0 clinical-accuracy corrections needed on final drafts vs. 2 in the manual baseline)\nVerdict: ROI-positive, proceed past pilot with the 2-stage review process kept in place",
          healthy:
            "The ROI calculation subtracts the review hours the checklist just added, not just the raw drafting time saved.",
          unhealthy:
            "Reporting '70 hours saved' as the headline number without netting out the 30 hours of new mandatory review time.",
          interpret:
            "In a regulated pilot, the oversight checklist and the ROI calculator are not separate exercises, the first changes the input to the second.",
          soWhat: [
            {
              symptom: "Net ROI comes out negative once review hours are counted",
              action: "Don't kill the pilot yet, first check if a lighter review tier (spot-check vs. full review) is safe for lower-risk page types",
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
            role: "Build both the checklist and the ROI calculator",
            why: "Free, shareable, and enough for a 20-page pilot's math without needing a BI tool",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Jasper",
            role: "The AI-native content tool being piloted for city-page drafts",
            why: "Purpose-built for marketing content generation with brand-voice controls, the actual subject of the pilot",
            required: false,
            fallback: "Any AI-native content tool the checklist and ROI math can be re-run against",
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "The checklist and ROI calculator are free to build regardless of which tool you pilot; only the content tool itself (Jasper or a competitor) is a paid line in the final ROI math.",
      },
      deliverable:
        "A two-tab Google Sheet: an oversight & security checklist with a clear pilot-blocker verdict, and an ROI calculator that nets out added review time against drafting time saved.",
      sampleOutput:
        "ROI CALCULATOR, Concord Biotech, 15-page technical documentation pilot (excerpt)\n\nDrafting time saved: 4 hrs/page x 15 = 60 hrs\nAdded regulatory review time: 2 hrs/page x 15 = 30 hrs\nNet hours saved: 30 hrs\nBlended cost: $60/hr\nValue: $1,800 minus $500 tool cost = $1,300 net ROI, quality held at 0 regulatory corrections\nVerdict: ROI-positive",
      successCriteria: [
        "Checklist covers every content-pipeline stage and every required security question, with a written, not assumed, answer for each",
        "ROI calculation explicitly nets added review hours against drafting hours saved, not just raw time saved",
        "Final verdict states clearly whether the pilot is ROI-positive and whether output quality held",
      ],
      portfolioReady: true,
      stretch:
        "Re-run the ROI calculator with a lighter 'spot-check' review tier for lower-risk page types (e.g. general hospital-info pages vs. clinical-claim pages) and see whether a tiered review process changes the verdict.",
    },
  ],

  "revenue-intelligence-tools": [
    {
      id: "revenue-intelligence-tools-objection-loss-audit",
      tier: "mini",
      archetype: "audit",
      title: "Which Objection Is Actually Costing You Deals? Auditing a Call-Tagged Export",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a synthetic 30-row export of loan-conversation snippets tagged by objection type, competitor mentioned, and deal outcome, calculate win rate per objection and identify which single objection deserves a dedicated battle card this quarter.",
      companyId: "five-star-business-finance",
      scenario:
        "You're the marketing analyst at Five-Star Business Finance, the Chennai-founded MSME secured lender that listed on the NSE/BSE in 2022. Branch relationship managers tag every loan conversation with an objection category, a competitor NBFC mentioned (if any), and the deal outcome. You've been handed the quarterly export.",
      brief:
        "Don't build a battle card for the loudest objection, build one for the objection that correlates with the most lost deals.",
      mode: "diagnostic",
      conceptsCovered: ["Prioritizing objections by deal-outcome correlation, not raw frequency"],
      steps: [
        {
          stepId: "step-1-objection-win-rate",
          concept: "Prioritizing objections by deal-outcome correlation, not raw frequency",
          lessonAnchor: "why-marketers-need-revenue-intelligence",
          theoryRecap:
            "The lesson's 'Why Marketers Need Revenue Intelligence' section frames objection data as a pattern across hundreds of calls, not a single anecdote, and warns against trusting the objection that talks the loudest instead of the one that closes the fewest deals.",
          question:
            "Objection A (collateral valuation delay) appears in 14 of 30 rows but only loses 3 deals. Objection B (processing time vs. competitor) appears in 8 rows but loses 6. Which gets the dedicated battle card?",
          toolName: "Google Sheets",
          where: "Import the export, add a computed win-rate column per objection category.",
          procedure: [
            "Import the 30-row export and freeze the header row",
            "Pivot by objection_type, count total mentions and lost-deal count per category",
            "Compute loss rate = lost_deals / total_mentions for each objection",
            "Rank by loss rate, not by mention count",
            "Cross-check the top-ranked objection against competitor_mentioned to see which NBFC it's tied to",
          ],
          outputSample:
            "Objection audit, Five-Star Business Finance Q2 export (30 rows)\n\nOBJECTION                 MENTIONS  LOST  LOSS RATE\ncollateral delay               14      3     21%\nprocessing time vs comp         8      6     75%\ninterest rate                   5      2     40%\nbranch distance                 3      1     33%\n\nTop competitor tied to 'processing time': Bajaj Finserv (5 of 8 mentions)",
          healthy:
            "The team builds a battle card around 'processing time vs. Bajaj Finserv' because it has the highest loss rate despite fewer total mentions.",
          unhealthy:
            "The team builds a battle card around 'collateral delay' because it's mentioned most often, even though it barely correlates with losses.",
          interpret:
            "Frequency tells you what buyers talk about; loss rate tells you what actually kills the deal. Sort by the second one.",
          soWhat: [
            {
              symptom: "Battle card backlog is ranked by mention count",
              action: "Re-rank by loss rate before greenlighting the next battle card",
              effort: "5 min",
            },
            {
              symptom: "No competitor tagged against the top objection",
              action: "Ask branch RMs to tag competitor name during the loss-reason call debrief",
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
            role: "Pivot the export and compute loss rate per objection",
            why: "Free, handles a 30-row pivot with zero setup",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "HubSpot CRM",
            role: "Store the objection/outcome tags at the deal level so this pivot updates automatically each quarter",
            why: "Keeps the tagging system live instead of a one-off export",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "A real Gong/Chorus contract would auto-tag these categories from call transcripts; this exercise uses a pre-tagged export to isolate the analysis step.",
      },
      deliverable:
        "A one-page objection-priority ranking (by loss rate, not mention count) with the top-ranked objection's most-cited competitor flagged.",
      sampleOutput:
        "Bajaj Finserv comparison battle card, draft v1\n\nOBJECTION: 'Your processing time is longer than [competitor]'\nLOSS RATE: 75% of calls where raised\n\nRESPONSE FRAMEWORK:\n1. Acknowledge: 'Fair, we ask for physical collateral verification, they may not for smaller tickets.'\n2. Reframe: cite average 4-day sanction-to-disbursal time for repeat MSME borrowers\n3. Proof point: branch RM to cite 2 recent same-week disbursals\n\nDO NOT lead with rate comparison, buyers didn't raise rate as the objection.",
      successCriteria: [
        "Ranks objections by loss rate, not raw mention count",
        "Correctly identifies the top-ranked objection's tied competitor",
      ],
      portfolioReady: true,
    },
    {
      id: "revenue-intelligence-tools-battle-card-teardown",
      tier: "core",
      archetype: "teardown",
      title: "Battle Card Teardown: Real Call Language or Consultant Copy?",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given two synthetic battle cards claiming to be built from Gong-style call data, identify which claims are properly sourced from call evidence and which are unsupported, overreaching, or a compliance risk.",
      companyId: "go-digit-insurance",
      scenario:
        "You're reviewing battle cards submitted by two regional PMMs at Go Digit General Insurance ahead of a renewal-season campaign. Both claim to be 'built from call intelligence data.'",
      brief:
        "A battle card citing revenue-intelligence data needs a call count, a specific quote, and a compliant way of using it. Spot the ones that don't.",
      mode: "teardown",
      conceptsCovered: ["Turning Intelligence Into Messaging", "Privacy and Compliance"],
      teardownItems: [
        {
          itemId: "battle-card-a-motor-renewal",
          specimen:
            "BATTLE CARD: Motor Insurance Renewal vs. [Competitor]\n\nClaim 1: 'Customers say our claim settlement is faster.' (source: general market perception)\nClaim 2: '92% of calls mention our app is easier to use.' (source: Q2 call analysis, 340 calls)\nClaim 3: Direct quote from a customer call: 'Their app crashed twice during my claim, yours didn't' — [Customer full name], [phone number], March 2026 call\nClaim 4: 'We win against [Competitor] whenever price comes up first.' (source: Q2 call analysis, deals where price mentioned in first 2 minutes, 61% close rate vs. 38% baseline)",
          specimenSource: "synthetic-realistic",
          prompt:
            "Score each of the 4 claims: is it properly sourced from call data, and is it safe to publish externally?",
          answerKey: [
            {
              defect:
                "Claim 1 has no call-count or source behind it, it's stated as fact from 'general market perception'",
              severity: "critical",
              whyItMatters:
                "The lesson's core distinction is that revenue intelligence replaces guessing with evidence from hundreds of calls; a claim with no call count is the guess it was supposed to replace.",
              lessonRef: "why-marketers-need-revenue-intelligence",
              owner: "you",
            },
            {
              defect:
                "Claim 3 includes the customer's full name and phone number in a document meant for campaign use",
              severity: "critical",
              whyItMatters:
                "The lesson's Privacy and Compliance section requires anonymizing any quote pulled into external materials; a full name and phone number is a direct compliance breach if this card is shared beyond the internal team.",
              lessonRef: "privacy-and-compliance",
              owner: "you",
            },
            {
              defect:
                "Claim 2's '92% of calls mention the app' is a raw mention count with no tie to deal outcome",
              severity: "moderate",
              whyItMatters:
                "A high mention rate alone doesn't prove the app is driving wins, it's an easy claim to over-index on without checking it against win/loss outcomes.",
              lessonRef: "why-marketers-need-revenue-intelligence",
              owner: "you",
            },
          ],
          distractors: [
            "Claim 4 is fine to publish as-is, it has a call count, a specific behavioral trigger, and a tied outcome metric",
            "The battle card format itself (numbered claims) is a defect, it should be prose",
          ],
          partialCredit: true,
        },
        {
          itemId: "battle-card-b-health-cross-sell",
          specimen:
            "BATTLE CARD: Health Insurance Cross-Sell\n\nClaim 1: 'In 28 calls where agents raised pre-existing condition coverage in the first call, 19 converted (68% close rate) vs. 31% baseline across all calls this quarter.'\nClaim 2: 'Anonymized quote from a converted customer: \"I switched because the pre-existing condition waiting period was shorter than my current insurer's.\"'\nClaim 3: 'This works because our product is better.'\nClaim 4: 'Competitor mentioned by name in 40% of these 28 calls; buyers specifically compared waiting periods.'",
          specimenSource: "synthetic-realistic",
          prompt:
            "Score each of the 4 claims: is it properly sourced from call data, and is it safe to publish externally?",
          answerKey: [
            {
              defect:
                "Claim 3 ('our product is better') has no call evidence behind it and adds nothing actionable",
              severity: "moderate",
              whyItMatters:
                "Every other claim on this card cites a call count or a quote; this one is filler that dilutes an otherwise well-sourced card.",
              lessonRef: "turning-intelligence-into-messaging",
              owner: "you",
            },
          ],
          distractors: [
            "Claim 1's sample size (28 calls) is too small to be usable, discard the whole card",
            "Claim 2 is a compliance risk because it quotes a customer at all",
            "Claim 4 shouldn't name the competitor even internally",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Score each claim against a sourced/unsourced, compliant/non-compliant rubric",
            why: "Free, a simple 2-column scoring table is enough",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A scored teardown of both battle cards with every unsourced, overreaching, or non-compliant claim flagged and a one-line fix for each.",
      sampleOutput:
        "Battle card review, Acko General Insurance renewal campaign\n\nFLAGGED (3):\n- Claim 2: no call count, remove or find the source calls\n- Claim 5: contains customer PII, anonymize before this leaves the internal folder\n- Claim 7: mention count without outcome tie, reframe or drop\n\nCLEARED (4): claims 1, 3, 4, 6 each cite a call count and, where relevant, an outcome delta.",
      successCriteria: [
        "Correctly flags the unsourced claim in Card A",
        "Correctly flags the PII compliance breach in Card A",
        "Does not falsely flag Card B's well-sourced claims as defects",
      ],
      portfolioReady: true,
    },
  ],
  "marketing-data-stack-2026": [
    {
      id: "marketing-data-stack-2026-source-inventory-audit",
      tier: "mini",
      archetype: "audit",
      title: "Siloed or Warehoused? Auditing a Data Source Inventory",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a synthetic inventory of 7 data sources in use at a mid-size financial services company, determine which feed a shared warehouse and which remain siloed, and flag where the same customer-qualification concept is defined twice.",
      companyId: "utkarsh-small-finance-bank",
      scenario:
        "You're the marketing operations lead at Utkarsh Small Finance Bank, which now runs digital lending, WhatsApp banking, branch CRM, and paid acquisition side-by-side. You've been handed a spreadsheet inventory of every data source someone logs into to check a number.",
      brief:
        "Find every source that still requires a manual login-and-export, and find the one definition that's silently drifted between two tools.",
      mode: "diagnostic",
      conceptsCovered: ["Point solutions duplicate lead-definition logic and drift"],
      steps: [
        {
          stepId: "step-1-source-warehouse-audit",
          concept: "Point solutions duplicate lead-definition logic and drift",
          lessonAnchor: "why-this-beats-point-solutions",
          theoryRecap:
            "The lesson's 'Why This Beats Point Solutions' section warns that when 'qualified lead' is defined separately in two tools, the definitions drift apart silently and the two systems start disagreeing about the same customer.",
          question:
            "HubSpot CRM defines a qualified lead as '2+ engagement touches AND loan amount inquiry >= Rs 50,000.' The paid-ads platform's custom-audience rule syncs anyone who 'clicked the loan calculator.' Are these the same population?",
          toolName: "Google Sheets",
          where:
            "List every source system in one column, mark warehouse-connected (Y/N), and note each tool's own 'qualified lead' rule in a second column.",
          procedure: [
            "List all 7 sources: GA4, HubSpot CRM, WhatsApp banking logs, branch CRM export, Meta Ads, digital lending app, Segment",
            "Mark each Y/N for 'flows into a shared warehouse automatically'",
            "For HubSpot CRM and Meta Ads specifically, write out their own stated qualified-lead rule verbatim",
            "Compare the two rules side by side, note where they diverge",
            "Flag every N-marked source as a manual-export risk",
          ],
          outputSample:
            "Source inventory, Utkarsh SFB\n\nSOURCE                   WAREHOUSE-CONNECTED   OWN LEAD RULE\nGA4                            Y                    n/a (raw events)\nHubSpot CRM                    Y                    2+ touches AND inquiry >= Rs50k\nWhatsApp banking logs          N                    n/a\nBranch CRM export              N                    n/a\nMeta Ads                       Y                    clicked loan calculator\nDigital lending app            Y                    n/a\nSegment                        Y                    n/a\n\nDRIFT: HubSpot's rule requires a Rs50k+ inquiry; Meta Ads' rule only requires a calculator click. Meta's synced audience is broader than HubSpot's actual qualified list.",
          healthy:
            "The team documents the drift and routes both definitions through one dbt model so both tools sync from the same rule.",
          unhealthy:
            "The team assumes both platforms are counting the same people because both use the word 'qualified.'",
          interpret:
            "Two tools can each be internally consistent and still disagree with each other; the drift is invisible until someone lines the rules up side by side.",
          soWhat: [
            {
              symptom: "Meta Ads lookalike audience underperforms against HubSpot's actual close rate",
              action: "Rebuild the Meta sync from the HubSpot-defined rule, not the calculator-click proxy",
              effort: "half day",
            },
            {
              symptom: "2 of 7 sources still require manual export",
              action: "Prioritize WhatsApp banking logs and branch CRM for the next connector build",
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
            role: "Build the source-inventory and rule-comparison table",
            why: "Free, a 7-row inventory needs nothing more",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Segment",
            role: "Centralize the WhatsApp and branch CRM exports so they stop requiring manual pulls",
            why: "Purpose-built to collect scattered sources into one stream, per the lesson's Layer 1",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "The audit itself is free; fixing the two manually-exported sources is what actually needs a paid connector or engineering time.",
      },
      deliverable:
        "A source inventory marking warehouse-connected vs. manual-export sources, plus the specific rule-drift finding between two tools' lead definitions.",
      sampleOutput:
        "Source audit, Five-Star Business Finance digital acquisition stack\n\nWAREHOUSE-CONNECTED: 5 of 8 sources\nMANUAL-EXPORT RISK: branch loan-officer spreadsheets, IVR call logs\n\nDRIFT FOUND: Google Ads 'qualified' audience syncs on 'loan application started'; internal CRM 'qualified' requires 'credit check passed.' Application-started is a much wider net than credit-check-passed.",
      successCriteria: [
        "Correctly marks all 7 sources warehouse-connected or not",
        "Correctly identifies the specific rule mismatch between HubSpot CRM and Meta Ads",
      ],
      portfolioReady: true,
    },
    {
      id: "marketing-data-stack-2026-renewal-audience-sync-design",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build the Asset: A dbt Model Spec and Reverse-ETL Sync Plan",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Design a documented dbt-model spec for a 'high-intent policy renewal' audience from raw GA4 and CRM fields, then write the reverse-ETL sync plan that activates it to a paid-ads platform and a CRM, without touching a live warehouse.",
      companyId: "go-digit-insurance",
      scenario:
        "You're the growth marketer at Go Digit General Insurance, the Bengaluru-founded general insurer that listed on the NSE/BSE in 2024. Renewal season is 6 weeks out and the data team needs your model spec before they'll build it.",
      brief:
        "Write the model logic a data engineer could actually implement, then write the sync plan that gets it into the two places it needs to activate.",
      mode: "build",
      conceptsCovered: [
        "Layer 4: Transformation, dbt (Data Build Tool)",
        "Layer 5: Activation (Reverse ETL)",
      ],
      steps: [
        {
          stepId: "step-1-dbt-model-spec",
          concept: "Layer 4: Transformation, dbt (Data Build Tool)",
          lessonAnchor: "layer-4-transformation-dbt-data-build-tool",
          theoryRecap:
            "The lesson's dbt layer takes raw fields from separate sources (a policy record, a site-visit event) and joins/filters them into one named, reusable model that every downstream tool references instead of each redefining the logic itself.",
          question:
            "You have raw fields from GA4 (policy_page_visit, quote_calculator_used) and the CRM (renewal_date, prior_claims_count, policy_tier). What's the actual filter logic for 'high-intent policy renewal'?",
          toolName: "Claude",
          where:
            "Draft the model logic as documented pseudo-SQL in a spec doc, since no live warehouse exists for this exercise.",
          procedure: [
            "List every raw field needed from GA4 and the CRM",
            "Write the join key (customer_id) connecting the two sources",
            "Define the filter: renewal_date within 45 days AND (policy_page_visit in last 14 days OR quote_calculator_used)",
            "Exclude prior_claims_count > 2 (high-risk renewals route to a retention specialist, not a self-serve campaign)",
            "Ask Claude to review the logic for an edge case you missed (e.g. customers with a renewal_date but no site visit at all)",
          ],
          outputSample:
            "MODEL: high_intent_policy_renewal\n\nSOURCE: ga4.events JOIN crm.policies ON customer_id\n\nFILTER:\n  renewal_date <= today + 45 days\n  AND (policy_page_visit_last_14d = true OR quote_calculator_used = true)\n  AND prior_claims_count <= 2\n\nEDGE CASE (flagged by Claude): customers with a renewal_date in range but zero GA4 events, likely offline/branch-only customers, model excludes them; needs a separate branch-sourced flag before the sync fires.",
          healthy:
            "The spec has a named model, explicit join key, explicit filter, and one documented edge case the data team can decide how to handle.",
          unhealthy:
            "The spec says 'sync anyone likely to renew' with no field-level definition, forcing the data engineer to guess.",
          interpret:
            "A model spec a data engineer can implement without a follow-up meeting is the actual deliverable, not a description of the goal.",
          soWhat: [
            {
              symptom: "Data team keeps asking clarifying questions before building the model",
              action: "Rewrite the spec with explicit field names and a stated join key",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-reverse-etl-sync-plan",
          concept: "Layer 5: Activation (Reverse ETL)",
          lessonAnchor: "layer-5-activation-reverse-etl",
          theoryRecap:
            "The lesson's reverse-ETL layer pushes a warehouse model back out to the tools people actually work in, on a schedule, so the audience stays current instead of going stale between manual exports.",
          question:
            "The model refreshes daily at 2 AM. Where does this audience need to land, and how fresh does each destination actually need to be?",
          toolName: "Google Sheets",
          where: "Document the sync plan: destination, sync cadence, and what field gets passed.",
          procedure: [
            "List each activation destination: Meta/Google Ads custom audience, HubSpot CRM 'renewal-ready' flag",
            "For each, state the sync cadence (matches the daily dbt run, or faster if the destination supports it)",
            "State exactly which fields pass through (customer_id, renewal_date, policy_tier, no raw event data)",
            "Note the one destination requiring a paid connector vs. one that can be handled with a scheduled CSV export as a fallback",
          ],
          outputSample:
            "SYNC PLAN: high_intent_policy_renewal\n\nDESTINATION            CADENCE     FIELDS PASSED                FALLBACK IF NO REVERSE-ETL TOOL\nGoogle/Meta Ads         Daily 3am   customer_id, policy_tier     Manual CSV upload to Ads audience, weekly\nHubSpot CRM flag        Daily 3am   customer_id, renewal_date    Scheduled HubSpot import, weekly\n\nNOTE: weekly manual fallback means the ads audience is up to 6 days stale during renewal season, flag this as the reason to prioritize a real reverse-ETL connector before next renewal cycle.",
          healthy:
            "The plan states cadence, fields, and an honest fallback for teams without a reverse-ETL tool yet.",
          unhealthy:
            "The plan just says 'sync everywhere in real time' without naming a fallback for teams still on manual exports.",
          interpret:
            "A sync plan needs a real answer for 'what happens without the paid tool,' not just the ideal-state architecture.",
          soWhat: [
            {
              symptom: "No reverse-ETL budget approved yet",
              action: "Ship the weekly manual-CSV fallback for this renewal cycle, revisit budget after",
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
            role: "Document the model spec and sync plan",
            why: "Free, a spec doc needs no special tooling",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Claude",
            role: "Review the filter logic for missed edge cases before handing it to the data team",
            why: "Free tier is enough for a single logic-review pass",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "HubSpot CRM",
            role: "Destination for the 'renewal-ready' flag once a live sync exists",
            why: "Real CRM the sales/retention team already works in",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "This exercise documents the spec and sync plan by hand; a real reverse-ETL tool (e.g. Hightouch, Census) would automate the actual daily sync once the model is built.",
      },
      deliverable:
        "A documented dbt-model spec (fields, join key, filter, one flagged edge case) and a reverse-ETL sync plan (destination, cadence, fields passed, manual fallback) for a renewal-season audience.",
      sampleOutput:
        "high_intent_policy_renewal, Acko General Insurance renewal audience spec\n\nMODEL: join GA4 site events to CRM policy records on customer_id, filter to renewal within 30 days plus a calculator visit in the last 10 days, exclude 3+ prior claims.\n\nSYNC: daily push to Google Ads custom audience and a CRM 'renewal-ready' tag; weekly manual CSV fallback confirmed for the first cycle since no reverse-ETL tool is live yet.",
      successCriteria: [
        "Model spec names explicit fields and a join key, not a vague description",
        "Sync plan states cadence and a fallback for teams without a reverse-ETL tool",
      ],
      portfolioReady: true,
      stretch: "Convert the model spec into real SQL against a free BigQuery sandbox dataset.",
    },
  ],

  "slack-teams-marketing-workflows": [
    {
      id: "slack-teams-marketing-workflows-notification-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Firehose Diagnosis: Auditing TBO Tek's Alert-Routing Chaos",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a synthetic 15-row channel activity log, apply the lesson's three notification guardrails to decide which alerts should move channels, get batched into a digest, or lose their @mention entirely.",
      companyId: "tbo-tek",
      scenario:
        "You're a marketing ops analyst at TBO Tek, the Gurugram-founded, Nasdaq-listed B2B travel distribution platform (BSE/NSE-listed, ~$1.79B IPO market cap) serving a 147,000+ travel-agent network. Five tools, HubSpot, a social listening tool, the ad platform, the CMS, and a partner-alert bot, all post into #general, and the team wants to know what to fix before people start muting the channel.",
      brief:
        "Score each row of the activity log against the three guardrails from the lesson (separate by urgency not tool, batch what can wait, only @mention what's actionable), then produce a triage list of moves, batches, and demotions.",
      mode: "diagnostic",
      conceptsCovered: [
        "Separating channels by urgency, not by tool",
        "Routing only actionable alerts to @mentions",
      ],
      steps: [
        {
          stepId: "step-1-channel-audit",
          concept: "Separating channels by urgency, not by tool",
          lessonAnchor: "avoiding-notification-fatigue",
          theoryRecap:
            "The lesson's three guardrails: separate channels by urgency (not by tool), batch what can wait, and reserve @mentions for alerts that need a decision within the hour.",
          question:
            "Of 15 rows posting into #general, a CRM lead-alert bot pings @channel for every new signup, a weekly analytics digest also posts live, and a sentiment-spike alert has no @mention at all. Which of these is actually backwards?",
          toolName: "Google Sheets",
          where:
            "Import the synthetic activity log (columns: tool, alert_type, current_channel, frequency, has_mention) and freeze the header row.",
          procedure: [
            "Import the 15-row log and freeze row 1",
            "Add an `urgency` column: crisis (needs action within the hour), operational (needs eyes today), informational (can wait for a digest)",
            "Flag every row where `has_mention` = yes but urgency = informational as a demotion candidate",
            "Flag every row where frequency = live but urgency = informational as a batching candidate",
            "Flag the one row where urgency = crisis but has_mention = no as a promotion candidate",
          ],
          outputSample:
            "TRIAGE RESULT (15 rows)\n\nPROMOTE TO @MENTION (1)\n  Sentiment-spike alert (Brandwatch) -> #brand-crisis, add @on-call-mention, currently silent\n\nDEMOTE FROM @CHANNEL (6)\n  New-signup alert (HubSpot) -> #general @channel every signup -> move to #pipeline-log, no mention\n  ...5 more rows\n\nBATCH INTO DIGEST (4)\n  Weekly analytics summary -> currently live-posts -> switch to Friday 9am digest\n  ...3 more rows\n\nLEAVE AS-IS (4)\n  Deal-stage change (HubSpot) -> #deals-active, correctly scoped, no change",
          healthy:
            "Only the genuinely time-sensitive row (sentiment spike) carries an @mention; routine signups and weekly summaries are demoted or batched.",
          unhealthy:
            "A live signup counter pings the whole channel while an actual reputation crisis posts silently, which is what the un-triaged log shows.",
          interpret:
            "Urgency and mention-worthiness are not the same axis as 'how often does this tool fire' — a tool that fires constantly (signups) is rarely the one that needs a ping, and a tool that fires rarely (crisis alerts) usually is.",
          soWhat: [
            {
              symptom: "6 of 15 alert types over-mention relative to their real urgency",
              action: "Strip @channel/@mention from routine operational posts, reserve it for the crisis-tier row only",
              effort: "30 min",
            },
            {
              symptom: "A live sentiment-crisis feed has zero mention despite needing action within the hour",
              action: "Add a targeted @on-call mention to the one row that actually needs it",
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
            role: "Import, tag, and triage the channel activity log",
            why: "Free, no account friction, filtering and column tagging is all this audit needs",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A triage table sorting all 15 alert types into promote/demote/batch/leave-as-is, with the target channel and mention setting for each.",
      sampleOutput:
        "Freshworks marketing ops, channel triage (excerpt)\n\nPROMOTE (1): Sentiment-spike alert -> #brand-crisis, add @on-call\nDEMOTE (5): New-trial-signup pings -> #pipeline-log, drop @channel\nBATCH (3): Daily ad-spend recap -> fold into Friday digest\nLEAVE (6): Deal-stage change in #deals-active -> already correctly scoped",
      successCriteria: [
        "Every row is classified by urgency, not by which tool sent it",
        "The one under-mentioned crisis-tier alert is correctly flagged for promotion",
        "At least 5 over-mentioned operational alerts are correctly flagged for demotion",
      ],
      portfolioReady: true,
    },
    {
      id: "slack-teams-marketing-workflows-alert-routing-map",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build the Alert-Routing Map: A Channel Taxonomy for Awfis' Marketing Team",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Design and build a real channel taxonomy plus a trigger-condition-action table for a marketing team's tool-to-chat alert routing, the actual artifact a marketing ops lead would hand to their team before wiring up automations.",
      companyId: "awfis-space-solutions",
      scenario:
        "You're setting up marketing ops workflows at Awfis Space Solutions, India's largest coworking brand by centre count (BSE/NSE-listed, ~$351M IPO market cap). The team is expanding into new city tiers and wants campaign, lead, and sentiment signals routed correctly from day one, not retrofitted after people start muting channels.",
      brief:
        "Build a channel taxonomy (name, purpose, urgency tier) and a trigger-condition-action table mapping each marketing signal to its channel and mention rule, using the no-code pattern the lesson describes.",
      mode: "build",
      conceptsCovered: [
        "Trigger-condition-action workflow design",
        "Batching non-urgent alerts",
      ],
      steps: [
        {
          stepId: "step-1-build-routing-map",
          concept: "Trigger-condition-action workflow design",
          lessonAnchor: "practical-integrations-marketing-teams-use-today",
          theoryRecap:
            "No-code automation layers like Slack Workflow Builder and Power Automate all follow the same three-part pattern: a trigger (an event fires), a condition (does it meet a threshold), and an action (post, assign, or escalate).",
          question:
            "Awfis is opening 6 new centres this quarter. Campaign alerts, lead-stage changes, and social mentions all need a home, what channel taxonomy and trigger-condition-action rules make that scale without becoming #general 2.0?",
          toolName: "Zapier",
          where:
            "Draft the taxonomy in Google Sheets first, then prototype the actual trigger-condition-action logic as a Zap (Trigger app -> Filter/Condition -> Action app) in Zapier's free-tier editor.",
          procedure: [
            "List every marketing signal source (CRM lead events, ad platform alerts, social listening, CMS publish events)",
            "Design 4 channels by urgency tier: #brand-crisis (immediate), #campaign-alerts (same-day), #campaign-digest (weekly), #pipeline-log (reference only, no mentions)",
            "For each signal, write a trigger-condition-action row: e.g. 'New lead (trigger) -> deal value > ₹2L (condition) -> post to #campaign-alerts with @mention (action)'",
            "Build one of these rows as a real single-step Zap in Zapier's free tier to confirm the pattern actually works end to end",
            "Document the taxonomy and rule table as the final deliverable",
          ],
          outputSample:
            "Awfis alert-routing map (excerpt)\n\nCHANNEL TAXONOMY\n  #brand-crisis     — immediate, @mention allowed, sentiment spikes only\n  #campaign-alerts  — same-day, @mention for high-value leads only\n  #campaign-digest  — weekly rollup, no live posts\n  #pipeline-log     — reference only, never mentioned\n\nTRIGGER -> CONDITION -> ACTION\n  New enterprise lead -> deal value > ₹2L -> post #campaign-alerts, @mention AE\n  New lead (any) -> deal value <= ₹2L -> post #pipeline-log, no mention\n  Negative mention detected -> sentiment score < -0.5 -> post #brand-crisis, @on-call\n  Weekly spend report -> always -> queue for Friday #campaign-digest batch",
          healthy:
            "Every signal has exactly one channel and one mention rule, decided before any tool gets wired up.",
          unhealthy:
            "Teams skip the taxonomy step and wire tools into #general one at a time as they get adopted, which is how the firehose problem starts.",
          interpret:
            "The taxonomy is the actual deliverable, the automation tool (Zapier, Workflow Builder, Power Automate) is just the mechanism that enforces it. Building the map before touching a tool prevents the retrofit problem.",
          soWhat: [
            {
              symptom: "No documented channel taxonomy exists before automations get built",
              action: "Draft the 4-tier taxonomy and trigger-condition-action table first, wire tools second",
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
            role: "Draft the channel taxonomy and the full trigger-condition-action table",
            why: "Free, shareable, easiest way to review the map with a team before building anything",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Zapier",
            role: "Prototype one real trigger-condition-action rule as a working single-step Zap",
            why: "Free tier supports single-step Zaps, enough to confirm the pattern works before scaling to Workflow Builder or Power Automate",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "Zapier's free tier caps at single-step Zaps; multi-step Zaps (e.g. trigger -> condition -> two parallel actions) need a paid plan once the taxonomy grows past simple routing.",
      },
      deliverable:
        "A 4-tier channel taxonomy plus a trigger-condition-action table covering every marketing signal source, with one row proven out as a working Zap.",
      sampleOutput:
        "Chargebee marketing ops, routing map (excerpt)\n\n#brand-crisis: sentiment score < -0.5, @on-call, immediate\n#campaign-alerts: enterprise lead > $5K ACV, @mention AE, same-day\n#campaign-digest: weekly spend + performance rollup, no mentions\n#pipeline-log: all other lead events, reference only",
      successCriteria: [
        "Taxonomy covers at least 4 urgency tiers with a clear rule for each",
        "Every listed signal source maps to exactly one channel and mention rule",
        "At least one rule is proven out as a real working Zap, not just documented",
      ],
      portfolioReady: true,
    },
  ],
  "marketing-tool-migration": [
    {
      id: "marketing-tool-migration-field-mapping-builder",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build the Field-Mapping Doc: Concord Biotech's CRM Migration Prep",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Build a real field-mapping document and phase timeline, the two artifacts the lesson says must exist on paper before a single record moves, for a company migrating CRMs.",
      companyId: "concord-biotech",
      scenario:
        "You're supporting the marketing operations lead at Concord Biotech, the Ahmedabad-based, Nasdaq-adjacent NSE/BSE-listed pharmaceutical API manufacturer (~$1.19B IPO market cap), who is migrating from a legacy CRM to a modern one before a global partner-conference push. Regulatory and audit-trail requirements mean nothing can move without documentation.",
      brief:
        "Build a field-mapping table (old field, new field, transformation needed) for a realistic 12-field CRM schema, then lay out the 5-phase migration timeline from the lesson.",
      mode: "build",
      conceptsCovered: [
        "Field mapping before data moves",
        "Phased migration timeline",
      ],
      steps: [
        {
          stepId: "step-1-build-field-map",
          concept: "Field mapping before data moves",
          lessonAnchor: "a-practical-migration-checklist-and-timeline",
          theoryRecap:
            "Phase 1 of the lesson's framework is field mapping: documenting every field in the old system, where it lands in the new one, and what transformation it needs, approved on paper before anything moves.",
          question:
            "The legacy CRM has a free-text 'industry' field and a single 'contact_notes' blob. The new CRM uses a picklist for industry and separate structured fields for notes. What does the mapping doc need to capture that a simple 1-to-1 export would miss?",
          toolName: "Google Sheets",
          where:
            "Build the mapping table with columns: old_field, new_field, data_type_change, transformation_needed, owner.",
          procedure: [
            "List all 12 legacy fields (contact info, deal stage, industry, notes, last-touch date, lifecycle stage, etc.)",
            "For each, identify the destination field in the new CRM",
            "Flag any field needing a real transformation (free-text industry -> picklist, blob notes -> structured fields)",
            "Assign an owner to each transformation (marketing ops vs. the CRM vendor's migration team)",
            "Build the 5-phase timeline (audit, mapping, sandbox test, parallel run, cutover) with real week-by-week durations",
          ],
          outputSample:
            "Concord Biotech field-mapping doc (excerpt)\n\nold_field: industry (free text) -> new_field: industry (picklist)\n  transformation: map 40+ free-text variants to 12 standard picklist values\n  owner: marketing ops\n\nold_field: contact_notes (single blob) -> new_field: notes[] (structured, dated entries)\n  transformation: parse blob by date-stamp pattern into separate note records\n  owner: CRM vendor migration team\n\nold_field: lifecycle_stage -> new_field: lifecycle_stage\n  transformation: none, direct 1:1 map\n  owner: either\n\nTIMELINE\n  Phase 0 Audit & cleanup: 3 weeks\n  Phase 1 Field mapping: 2 weeks\n  Phase 2 Sandbox test load: 1 week\n  Phase 3 Parallel run: 3 weeks\n  Phase 4 Cutover: 1 week",
          healthy:
            "Every field with a real transformation has a named owner and an explicit rule before migration starts.",
          unhealthy:
            "A 1:1 export/import with no mapping doc, which silently drops the industry picklist mapping and mangles the notes blob.",
          interpret:
            "The mapping doc's real value is catching the fields that need transformation, not the ones that map 1:1. Those are the ones that break silently during a rushed migration.",
          soWhat: [
            {
              symptom: "Free-text fields get exported with no transformation rule",
              action: "Write the exact mapping (which free-text values become which picklist option) before the sandbox load",
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
            role: "Build the field-mapping table with transformation rules and owners",
            why: "Free, easy to share for sign-off before migration starts",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Notion",
            role: "Track the 5-phase timeline as a checklist the team can update live during migration",
            why: "Free tier handles a single migration project tracker without needing a dedicated project-management tool",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A 12-field mapping table with transformation rules and owners, plus a 5-phase timeline checklist ready for sign-off.",
      sampleOutput:
        "Postman marketing ops, field-mapping doc (excerpt)\n\nold_field: lead_source (free text) -> new_field: lead_source (picklist, 8 values)\n  transformation: map 60+ variants down to 8 standard sources, owner: marketing ops\nold_field: deal_stage -> new_field: deal_stage, transformation: none, owner: either\n\nTIMELINE: Audit 2wk -> Mapping 2wk -> Sandbox 1wk -> Parallel run 4wk -> Cutover 1wk",
      successCriteria: [
        "All 12 fields are mapped with an explicit transformation rule or 'none'",
        "Every transformation has a named owner",
        "The 5-phase timeline has real week-by-week durations, not placeholder text",
      ],
      portfolioReady: true,
    },
    {
      id: "marketing-tool-migration-failure-point-audit",
      tier: "core",
      archetype: "audit",
      title: "The Pre-Cutover Audit: Catching TBO Tek's Migration Failure Points",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a synthetic migration plan document, apply the lesson's three failure points (lost historical data, broken automations, IP warmup) to catch what the plan is missing before cutover, not after.",
      companyId: "tbo-tek",
      scenario:
        "You're reviewing a draft migration plan at TBO Tek, the Gurugram-based B2B travel distribution platform (Nasdaq-adjacent NSE/BSE listing, ~$1.79B IPO market cap) ahead of a CRM and ESP switch serving its 147,000+ travel-agent network. The plan looks complete on paper, your job is to find what it's missing before the migration team signs off.",
      brief:
        "Read a synthetic 1-page migration plan and score it against the lesson's three common failure points, flagging any gap that would cause silent data loss, broken automations, or a deliverability collapse.",
      mode: "diagnostic",
      conceptsCovered: [
        "Testing every automation against sandbox data before cutover",
        "Budgeting gradual IP warmup before full-volume sending",
      ],
      steps: [
        {
          stepId: "step-1-automation-test-audit",
          concept: "Testing every automation against sandbox data before cutover",
          lessonAnchor: "common-failure-points",
          theoryRecap:
            "The lesson's second failure point: every workflow trigger references specific field names and values, so a renamed or reformatted field breaks the automation silently, or fires it incorrectly, unless every single automation is tested against sandbox data before cutover.",
          question:
            "TBO Tek's draft plan says 'test top 3 automations in sandbox.' Their marketing stack actually runs 14 automations, including agent-tier upgrade emails tied to a field that's being renamed during migration. What's wrong with 'test the top 3'?",
          toolName: "Google Sheets",
          where:
            "Build an automation inventory checklist: automation name, trigger field, does that field change during migration, tested in sandbox (yes/no).",
          procedure: [
            "List all 14 automations from the plan's appendix, not just the top 3 the plan calls out",
            "For each, identify the trigger field it depends on",
            "Cross-reference against the field-mapping doc to flag any automation whose trigger field is being renamed or reformatted",
            "Mark which of the flagged automations the plan actually tests in sandbox",
            "Flag the gap: automations tied to a changed field but not sandbox-tested",
          ],
          outputSample:
            "TBO Tek automation audit (excerpt)\n\nTested in plan: 3 of 14 automations\nFlagged as trigger-field-affected: 6 of 14\nUNTESTED + AFFECTED (the real risk): 4\n  1. Agent-tier upgrade email -> trigger field 'agent_tier' being reformatted, NOT in test-3 list\n  2. Renewal reminder sequence -> trigger field 'contract_end_date' format changing, NOT tested\n  3. Win-back campaign -> untouched field, low risk, not urgent to test\n  4. High-volume booking alert -> trigger field renamed, NOT tested",
          healthy:
            "All automations whose trigger field changes are tested in sandbox before cutover, regardless of how prominent they are.",
          unhealthy:
            "Only the 3 most visible automations get tested, while 4 lower-profile ones tied to renamed fields go untested and break silently on cutover day.",
          interpret:
            "'Test the top 3' is a false sense of coverage, the automations that actually break are the ones tied to a changed field, not the ones anyone remembers to check by default.",
          soWhat: [
            {
              symptom: "4 automations depend on a renamed field but were never sandbox-tested",
              action: "Add all 4 to the sandbox test list before the plan gets sign-off",
              effort: "half day",
            },
          ],
          owner: "either",
        },
        {
          stepId: "step-2-ip-warmup-audit",
          concept: "Budgeting gradual IP warmup before full-volume sending",
          lessonAnchor: "common-failure-points",
          theoryRecap:
            "The lesson's third failure point: domain reputation usually carries over to a new ESP, but IP reputation does not, so sending full volume on day one from a brand-new IP reads as a spam signal and craters deliverability.",
          question:
            "The draft plan schedules the ESP cutover for a Monday with 'resume full sends immediately.' TBO Tek sends to roughly 60,000 travel-agent contacts. What's missing from that plan?",
          toolName: "Google Sheets",
          where:
            "Build a warmup schedule table: week, % of list, engagement filter, expected volume.",
          procedure: [
            "Confirm the plan has zero mention of a warmup ramp before full-volume resumption",
            "Calculate a realistic warmup schedule: start with the most-engaged 10% of the 60,000-contact list, scale over 6-8 weeks",
            "Add the schedule as a required addition to the plan before it goes to sign-off",
            "Flag the specific risk: sending 60,000 emails from a brand-new IP on day one",
          ],
          outputSample:
            "Recommended warmup schedule (excerpt)\n\nWeek 1: 6,000 contacts (most-engaged 10%)\nWeek 2: 12,000 contacts\nWeek 3: 24,000 contacts\nWeek 4-6: scale to 42,000\nWeek 7-8: full 60,000 list, only after inbox placement holds steady\n\nPLAN GAP: original draft schedules full 60,000-send for cutover Monday, no ramp",
          healthy: "A documented multi-week ramp starting with the most-engaged subscribers before resuming full volume.",
          unhealthy: "Full-volume resumption on cutover day, treated as a formality rather than a deliverability risk.",
          interpret:
            "IP warmup is the one failure point unique to ESP migrations specifically, and it's the easiest to miss because domain reputation surviving the move creates false confidence that everything else did too.",
          soWhat: [
            {
              symptom: "Migration plan has no warmup schedule before full-volume resumption",
              action: "Insert a 6-8 week warmup ramp starting with the most-engaged 10% of the list",
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
            role: "Build the automation inventory checklist and the IP warmup schedule",
            why: "Free, and both artifacts are simple tables well suited to a spreadsheet",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An automation-risk checklist flagging untested-but-affected automations, plus a documented 6-8 week IP warmup schedule to add to the migration plan.",
      sampleOutput:
        "Razorpay marketing ops, pre-cutover audit (excerpt)\n\nAUTOMATION RISK: 3 of 11 automations tied to a renamed field are untested\nWARMUP GAP: plan has no ramp, resumes 40,000-contact full volume on cutover day\nRECOMMENDATION: add all 3 automations to sandbox test list, insert 6-week warmup ramp before sign-off",
      successCriteria: [
        "Correctly identifies every automation tied to a changing field, not just the plan's stated top 3",
        "Flags the missing IP warmup ramp as a required addition, not an optional nice-to-have",
        "Produces a realistic week-by-week warmup schedule scaled to the actual list size",
      ],
      portfolioReady: true,
    },
  ],

  "headless-cms-selection": [
    {
      id: "headless-cms-selection-contentful-vs-sanity-scorecard",
      tier: "mini",
      archetype: "head-to-head",
      title: "Contentful vs Sanity: Scoring a Real Content-Ops Requirement Set",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given RateGain's actual content-ops requirements (multi-channel publishing, no dedicated CMS engineer, a customer-facing docs portal needing SLAs), build a weighted scorecard and pick Contentful or Sanity based on requirement fit, not brand familiarity.",
      companyId: "rategain-travel-technologies",
      scenario:
        "You're the content-ops lead at RateGain Travel Technologies, the Nasdaq-listed travel & hospitality SaaS company. Product docs, the marketing blog, and an in-app help widget all need to pull from one content source, and no engineer is dedicated to CMS maintenance.",
      brief:
        "Score Contentful and Sanity against RateGain's five real requirements, weight each by business impact, and recommend one platform with the scorecard as your justification.",
      mode: "diagnostic",
      conceptsCovered: ["Matching CMS choice to content-ops requirements, not brand popularity"],
      steps: [
        {
          stepId: "step-1-requirement-scorecard",
          concept: "Matching CMS choice to content-ops requirements, not brand popularity",
          lessonAnchor: "comparing-the-major-options",
          theoryRecap:
            "The lesson splits the major options by strength: Contentful for enterprise SLAs and mature permissions, Sanity for developer/editor experience and a usage-based free tier, Strapi for full control at the cost of ongoing maintenance. The Callout warns against picking based on which name is trending.",
          question:
            "RateGain needs SLA-backed uptime for a customer-facing docs portal, zero dedicated CMS engineering headcount, and real-time co-editing for a distributed content team. Contentful's Team plan runs ~$300/month; Sanity's free tier scales with usage. Which wins on requirement fit?",
          toolName: "Google Sheets",
          where: "A blank spreadsheet with one row per requirement and one column per platform.",
          procedure: [
            "List RateGain's 5 requirements as rows: SLA/uptime guarantee, no dedicated CMS engineer needed, real-time collaborative editing, omnichannel API delivery, predictable cost at current scale.",
            "Score each platform 1-5 per row based only on the lesson's documented strengths (Contentful: SLAs, permissions; Sanity: dev experience, real-time editing, usage-based free tier).",
            "Weight the SLA and no-dedicated-engineer rows 2x, since a docs-portal outage and an unstaffed maintenance burden are the two risks RateGain named explicitly.",
            "Sum weighted scores per column and flag the higher total as the recommendation, not the platform anyone already recognizes.",
          ],
          outputSample:
            "REQUIREMENT SCORECARD (RateGain content-ops)\n\nRequirement                          Weight  Contentful  Sanity\nSLA-backed uptime                      2x        5          3\nNo dedicated CMS engineer needed        2x        4          3\nReal-time collaborative editing         1x        2          5\nOmnichannel API delivery                1x        4          4\nPredictable cost at current scale       1x        3          4\n\nWeighted totals: Contentful 27, Sanity 25\nRecommendation: Contentful, driven almost entirely by the 2x-weighted SLA and staffing rows.",
          healthy:
            "The recommendation traces back to specific weighted rows an executive can question and re-weight themselves.",
          unhealthy:
            "A one-line verdict like 'Sanity is more modern, let's use that' with no requirement trace.",
          interpret:
            "When the top two platforms are close on raw score, the weighting decision (which requirement matters 2x) is the real recommendation, not the final number.",
          soWhat: [
            {
              symptom: "Team is deadlocked between two platforms that score almost identically",
              action: "Re-interview stakeholders on which single requirement is truly non-negotiable, then weight only that row",
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
            role: "Build and weight the requirement-by-platform scorecard",
            why: "No account friction, and a scorecard other stakeholders need to review and re-weight belongs in a shared spreadsheet, not a slide.",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A weighted requirements scorecard naming Contentful or Sanity as the recommendation, with every row traceable to a specific RateGain requirement.",
      sampleOutput:
        "Five-Star Business Finance, CMS scorecard summary (excerpt)\n\nRecommendation: Sanity\n\nDriving rows:\n- Real-time collaborative editing (1x): loan-product copy is reviewed by compliance and marketing simultaneously; Sanity scored 5 vs Contentful's 2.\n- Predictable cost at current scale (1x): usage-based free tier covers projected traffic through next fiscal year with zero committed spend.\n\nSLA row scored lower (3 vs Contentful's 5) but was not weighted 2x here, since no customer-facing portal is planned this year.",
      successCriteria: [
        "Scores both platforms against all 5 requirement rows before naming a winner",
        "Applies 2x weighting only to the requirements the scenario explicitly flags as highest-risk",
        "States the recommendation as a traceable total, not a brand preference",
      ],
      portfolioReady: true,
    },
    {
      id: "headless-cms-selection-self-hosting-cost-audit",
      tier: "core",
      archetype: "audit",
      title: "The Hidden Line Item: Auditing Strapi's True Self-Hosting Cost",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given Five-Star Business Finance's engineering bandwidth and content-shape requirements, calculate the real annual cost of self-hosting Strapi against a managed platform's subscription price, then apply the lesson's decision tree to name a final recommendation.",
      companyId: "five-star-business-finance",
      scenario:
        "You're the content-ops analyst at Five-Star Business Finance, the MSME secured-lending NBFC. Engineering is proposing self-hosted Strapi to avoid vendor lock-in on loan-product content; you've been asked to audit whether that's actually cheaper.",
      brief:
        "Calculate Strapi's fully-loaded annual engineering cost, compare it against Contentful's and Sanity's subscription pricing, then walk the lesson's decision tree using Five-Star's actual constraints to name a recommendation.",
      mode: "diagnostic",
      conceptsCovered: [
        "Calculating the hidden engineering cost of self-hosting",
        "Applying the platform decision tree to a team's real constraints",
      ],
      steps: [
        {
          stepId: "step-1-self-hosting-cost-calc",
          concept: "Calculating the hidden engineering cost of self-hosting",
          lessonAnchor: "the-real-tradeoff-setup-cost-vs-flexibility",
          theoryRecap:
            "The lesson states that running a self-hosted option reliably (upgrades, backups, monitoring, plugin compatibility) typically consumes 0.25 to 0.5 FTE per year, which at a senior engineer's fully-loaded cost runs roughly $50K-$100K annually, often dwarfing a managed platform's subscription price.",
          question:
            "Five-Star's senior engineers are fully loaded at ₹42L (~$50K) per year. Strapi self-hosting is estimated at 0.35 FTE. Contentful's Team plan runs ~$300/month. Which is actually cheaper on paper?",
          toolName: "Google Sheets",
          where: "A simple two-row cost comparison spreadsheet.",
          procedure: [
            "Row 1: Strapi annual cost = 0.35 FTE x $50,000 fully-loaded engineer cost = $17,500/year in engineering time alone.",
            "Row 2: Contentful annual cost = $300/month x 12 = $3,600/year in subscription fees.",
            "Compare the two totals directly, ignoring which option 'feels' more in-house or more modern.",
            "Flag any qualitative factor (vendor lock-in, data residency, customization ceiling) as a separate line, not folded into the dollar comparison.",
          ],
          outputSample:
            "SELF-HOSTING COST AUDIT (Five-Star Business Finance)\n\nOption           Annual $ cost         Notes\nStrapi (self-host)  $17,500          0.35 FTE at $50K fully-loaded engineer cost\nContentful (Team)   $3,600           $300/month subscription, no engineering FTE required\n\nDelta: Strapi costs ~$13,900/year more once engineering time is priced in, despite having no subscription fee.",
          healthy:
            "The audit prices engineering time explicitly, so 'free and open-source' gets compared on the same basis as a subscription.",
          unhealthy:
            "Comparing Strapi's $0 license fee directly against Contentful's $300/month without ever pricing the engineering time Strapi requires.",
          interpret:
            "'Self-hosted' is not free, it is a cost that moved from a subscription line to a headcount line, and headcount lines are usually larger.",
          soWhat: [
            {
              symptom: "Engineering proposes self-hosting to 'save money' with no cost comparison attached",
              action: "Require the FTE-cost line before approving, using the lesson's 0.25-0.5 FTE range as the estimate floor",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-decision-tree-walk",
          concept: "Applying the platform decision tree to a team's real constraints",
          lessonAnchor: "comparing-the-major-options",
          theoryRecap:
            "The lesson's decision tree routes on two questions in order: does the team already run WordPress, and does the team have strong in-house dev resources? Only teams with strong dev resources land on self-hosted Strapi; limited resources route to Sanity or Contentful based on whether dev experience or enterprise SLAs matter more.",
          question:
            "Five-Star doesn't run WordPress and has one engineer with partial CMS bandwidth (not a dedicated platform team). Per the decision tree, where does that route, and does it match what the Step 1 cost audit found?",
          toolName: "Google Sheets",
          where: "Add a third row below the cost table naming the decision-tree path taken.",
          procedure: [
            "Answer 'Existing WordPress site?' -> No.",
            "Answer 'In-house dev resources?' -> Limited (one partial-bandwidth engineer, not a dedicated team).",
            "Follow the tree to the final branch: dev experience vs enterprise SLAs. Loan-product content needs compliance-grade audit trails, which reads closer to enterprise SLA needs.",
            "State whether the tree's answer (Contentful) agrees with the Step 1 dollar comparison (it does, both point away from self-hosted Strapi).",
          ],
          outputSample:
            "DECISION TREE PATH\n\nWordPress? No -> Dev resources? Limited -> Priority? Enterprise SLAs -> Contentful\n\nAgreement check: Step 1's cost audit also favored Contentful ($3,600/yr vs $17,500/yr). Two independent methods, same recommendation.",
          healthy:
            "The qualitative decision tree and the quantitative cost audit are checked against each other before finalizing.",
          unhealthy:
            "Running only the decision tree, or only the cost audit, and treating either alone as sufficient justification for a five-figure annual decision.",
          interpret:
            "When a structural framework (decision tree) and a financial calculation independently agree, that's a much stronger recommendation to bring to stakeholders than either alone.",
          soWhat: [
            {
              symptom: "The decision tree and the cost audit disagree",
              action: "Re-check the FTE estimate first (0.25-0.5 is a range, not a fixed number) before overriding either method",
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
            role: "Build the FTE-cost comparison and record the decision-tree path",
            why: "A cost audit that will be shown to finance and engineering needs to be a reviewable spreadsheet, not a verbal estimate.",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A cost-audit spreadsheet showing Strapi's fully-loaded annual cost against a managed platform's subscription, plus the decision-tree path, with a single final recommendation.",
      sampleOutput:
        "RateGain Travel Technologies, self-hosting cost audit (excerpt)\n\nStrapi (self-host): $22,000/year (0.4 FTE, higher due to multi-property upgrade cadence)\nSanity (usage-based): $6,200/year projected at current traffic\n\nDecision tree path: No existing WordPress -> Strong in-house dev team available -> still routes toward self-hosting on paper, but the $15,800/year delta against Sanity was flagged for the CTO to weigh against the lock-in concern directly, rather than defaulting to 'we have the engineers, so we should.'",
      successCriteria: [
        "Prices Strapi's engineering time explicitly using the lesson's 0.25-0.5 FTE range, not a $0 assumption",
        "Walks the decision tree using Five-Star's actual WordPress and staffing answers, not a generic default",
        "Checks whether the cost audit and the decision tree agree before finalizing the recommendation",
      ],
      portfolioReady: true,
      stretch:
        "Re-run the cost audit at 2x current content volume to see whether the FTE estimate (and therefore the recommendation) still holds at scale.",
    },
  ],
};
