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
};
