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
};
