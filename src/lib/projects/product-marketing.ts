import type { Project } from "@/lib/projects/types";

export const PRODUCT_MARKETING_PROJECTS: Record<string, Project[]> = {
  "pmm-101": [
    {
      id: "pmm-101-pitch-specimen-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Spec Sheet Teardown: Finding the Flawed Inside-Out Launch Pitch",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given an engineering-written product release proposal full of internal jargon and technical specifications, identify every inside-out messaging defect, distinguish genuine customer benefits from product capabilities, and grade each flaw against the lesson's feature-vs-benefit framework.",
      companyId: "zendesk",
      scenario:
        "You are the newly hired Product Marketing Manager at Zendesk auditing an internal launch proposal drafted by engineering for an upcoming automated ticket routing release. The draft is packed with architecture diagrams and API latency specs rather than business outcomes.",
      brief:
        "Inspect the internal draft specimen. Flag every instance where engineering jargon replaces customer value, identify why it harms sales velocity, and separate true defects from legitimate technical context.",
      mode: "teardown",
      conceptsCovered: [
        "Confusing features with benefits",
        "Positioning is an internal document",
        "Writing for the product team instead of for the customer",
      ],
      teardownItems: [
        {
          itemId: "pmm-pitch-specimen-1",
          specimen:
            "PRODUCT LAUNCH PROPOSAL: Automated Ticket Routing v2.4\n" +
            "Prepared by Core Infrastructure Engineering for GTM Teams\n\n" +
            "1. Headline: 'Next-Generation Asynchronous Webhook-Driven Ticket Dispatch Engine'\n" +
            "2. Subheadline: 'Now featuring sub-50ms queue latency with horizontal auto-scaling across Kubernetes worker nodes.'\n" +
            "3. Key Capability 1: 'Configurable multi-condition regex trigger matrix with custom JSON payload interpolation.'\n" +
            "4. Key Capability 2: 'Enterprise-grade 99.99% uptime SLA backed by multi-region redundant database failover.'\n" +
            "5. Pricing & Packaging Pitch: 'Upgrade to Enterprise Plus to unlock our proprietary multi-tenant concurrency optimization algorithm.'\n\n" +
            "Engineering Note: 'This architecture eliminates backlog queue lag by 80%, so customers will instantly know our tech is superior.'",
          specimenSource: "synthetic-realistic",
          prompt:
            "Read this product launch proposal exactly as an enterprise customer support buyer would. For each numbered claim, decide: is this a customer-facing business benefit, or an inside-out engineering feature that will stall sales conversations? Identify each defect with its severity and explain why it fails.",
          answerKey: [
            {
              defect: "Headline leads with technical architecture ('Asynchronous Webhook-Driven Engine') instead of customer outcome",
              severity: "critical",
              whyItMatters:
                "Support leaders do not buy webhooks or queue architectures; they buy faster first-response times and reduced agent burnout. Leading with internal architecture forces the prospect to do the translation work.",
              lessonRef: "Common Mistakes New PMMs Make: Confusing features with benefits",
              owner: "you",
            },
            {
              defect: "Subheadline highlights 'sub-50ms queue latency' rather than customer wait-time reduction",
              severity: "critical",
              whyItMatters:
                "50ms queue latency is an engineering metric. The business outcome is that high-priority tickets reach the right specialized support agent instantly without getting lost in general queues.",
              lessonRef: "What It Actually Is: Translating features into benefits",
              owner: "you",
            },
            {
              defect: "Feature capability described in developer syntax ('regex trigger matrix with custom JSON payload')",
              severity: "moderate",
              whyItMatters:
                "Customer support managers and operations directors who purchase support software do not write regex or JSON payloads. The capability should be framed as 'Automated routing rules that match VIP customers to dedicated account reps in clicks.'",
              lessonRef: "Common Mistakes New PMMs Make: Writing positioning for the product team instead of for the customer",
              owner: "you",
            },
            {
              defect: "Packaging pitch uses technical jargon ('multi-tenant concurrency algorithm') as the upgrade justification",
              severity: "critical",
              whyItMatters:
                "Buyers do not pay premium tiers for algorithms; they pay for uninterrupted service during peak holiday surges. The pitch must focus on business continuity during volume spikes.",
              lessonRef: "The PMM Playbook: Stage 2 Positioning",
              owner: "either",
            },
          ],
          distractors: [
            "Enterprise-grade 99.99% uptime SLA (Item 4) is a legitimate technical proof point for enterprise IT and security procurement. While it shouldn't be the lead headline, it is a valid supporting trust signal in an enterprise pitch deck rather than a positioning defect.",
            "The engineering note's observation that 'backlog queue lag is reduced by 80%' contains the raw seed of a real customer benefit (80% faster resolution), but the flaw is in how it was framed, not in the underlying performance improvement.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Review and markup messaging proposal with structured feedback",
            why: "Zero-setup collaborative editor for reviewing marketing drafts",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A marked-up teardown identifying all inside-out messaging defects with severity ratings and customer-facing benefit reframes.",
      sampleOutput:
        "Freshworks / Freshdesk Messaging Teardown (Sample Extract)\n\n" +
        "DEFECT 1 (Critical): 'Sub-second event-driven webhook dispatch architecture'\n" +
        "  Why: Highlights back-end architecture rather than agent productivity.\n" +
        "  Reframe: 'Instant ticket updates across your entire support team with zero lag.'\n\n" +
        "DEFECT 2 (Moderate): 'Configurable multi-condition regex trigger matrix'\n" +
        "  Why: Uses developer syntax that confuses support managers.\n" +
        "  Reframe: 'Route urgent VIP customer queries to senior agents automatically.'\n\n" +
        "DEFECT 3 (Critical): 'Multi-tenant concurrency optimization algorithm'\n" +
        "  Why: Technical jargon used as upgrade justification.\n" +
        "  Reframe: 'Handle holiday traffic spikes with zero downtime and fast responses.'\n\n" +
        "LEGITIMATE CONTEXT (Distractor): '99.99% uptime SLA guarantee'\n" +
        "  Why: Valid proof point for enterprise procurement and security review.",
      successCriteria: [
        "Identifies all inside-out messaging defects in the proposal",
        "Accurately distinguishes technical product features from customer benefits",
        "Provides clear customer-facing reframes for each technical claim",
      ],
      portfolioReady: false,
    },
    {
      id: "pmm-101-sales-battlecard-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "The Competitive Battle Card: Arming Sales Against Legacy Rivals",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Build an executive one-page sales battle card for a modern cloud customer service platform competing against complex legacy enterprise vendors, translating technical capabilities into objection-handling talk tracks, landmine questions, and quantified proof points.",
      companyId: "freshworks",
      scenario:
        "You are a Senior Product Marketing Manager at Freshworks (FRSH) supporting the enterprise sales team. In head-to-head mid-market opportunities against legacy helpdesk software, reps are getting bogged down in 200-item RFP feature checklists. You need to author a battle card that shifts the conversation to deployment speed, total cost of ownership, and modern omnichannel usability.",
      brief:
        "Follow the lesson's battle card structure to construct a complete sales enablement asset: top 3 differentiated strengths, top 3 competitor traps to expose, 2 landmine questions for reps to plant early in discovery, and objection reframes for price vs value.",
      mode: "build",
      conceptsCovered: [
        "Core PMM Deliverables",
        "Battle card structure",
        "Discovery and customer interviews",
        "Launch enablement",
      ],
      steps: [
        {
          stepId: "step-1-differentiated-strengths",
          concept: "Core PMM Deliverables",
          lessonAnchor: "core-pmm-deliverables",
          theoryRecap:
            "The lesson highlights that core PMM deliverables include positioning documents and battle cards that distill product strengths into clear, evidence-backed proof points for sales reps.",
          question:
            "What are the top 3 differentiated strengths and verified proof points that separate modern cloud support from complex legacy competitors?",
          toolName: "Google Sheets",
          where: "Create a 'Competitive Matrix' tab and define the top 3 differentiation pillars.",
          procedure: [
            "Identify 3 core areas where modern cloud customer support outperforms legacy platforms (e.g., 30-day onboarding vs 9-month implementation, unified omnichannel inbox, predictable all-inclusive pricing)",
            "Attach a verified customer proof point or benchmark to each strength",
            "Draft a 15-second elevator pitch summarizing the core value proposition for sales reps",
          ],
          outputSample:
            "DIFFERENTIATION MATRIX (Freshworks vs Legacy Enterprise):\n" +
            "1. Time-to-Value: Live in 30 days vs. 6-9 month complex setup (Proof: 4,000+ mid-market migrations)\n" +
            "2. Unified Omnichannel: WhatsApp, Email, Phone, Chat in one agent screen (Proof: 35% reduction in handle time)\n" +
            "3. Total Cost of Ownership: Zero mandatory implementation consultant fees (Proof: 60% lower 3-year TCO)",
          healthy:
            "Every strength is backed by a concrete operational outcome and quantified proof point that a sales rep can state in 10 seconds.",
          unhealthy:
            "Listing generic claims like 'better user interface' or 'faster' without proof points or comparative benchmarks.",
          interpret:
            "A competitive strength is only effective in sales enablement if it is specific, provable, and directly tied to an executive buyer's ROI.",
          soWhat: [
            {
              symptom: "Reps make vague claims about usability during demos",
              action: "Equip reps with exact time-to-value benchmarks (30 days vs 9 months)",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-competitor-vulnerabilities",
          concept: "Battle card structure",
          lessonAnchor: "slack-selling-collaboration-not-messaging",
          theoryRecap:
            "The lesson's battle card structure specifies identifying competitor weaknesses backed by G2 reviews, pricing structure, and deployment traps to steer buyers away from competitors.",
          question:
            "Which 3 competitor vulnerabilities expose the total cost of ownership traps and operational overhead of legacy vendors?",
          toolName: "Google Sheets",
          where: "Add a 'Competitor Weaknesses & Traps' section to the battle card.",
          procedure: [
            "Audit competitor public pricing and review site complaints regarding hidden add-on costs and paid professional service requirements",
            "Synthesize findings into 3 crisp vulnerability points",
            "Formulate the exact trap reps should help the prospect identify in their evaluation",
          ],
          outputSample:
            "COMPETITOR VULNERABILITY AUDIT:\n" +
            "1. Hidden Implementation Cost: Legacy vendors mandate expensive third-party systems integrators costing $50k+.\n" +
            "2. Add-on Pricing Penalties: Basic analytics, SLA routing, and additional channels require paid premium tier upgrades.\n" +
            "3. Clunky Agent Experience: Disconnected legacy tools cause tab-switching fatigue and higher support agent turnover.",
          healthy:
            "Focuses on structural weaknesses (cost architecture and implementation delays) that the competitor cannot easily fix.",
          unhealthy:
            "Attacking minor UI bugs or features that the competitor is likely to patch in their next sprint.",
          interpret:
            "Aim competitive attacks at business model flaws and architectural overhead rather than surface-level feature checklists.",
          soWhat: [
            {
              symptom: "Prospect believes the competitor's sticker price is comparable",
              action: "Provide a 3-year TCO calculation worksheet detailing integration and admin costs",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-landmine-questions",
          concept: "Discovery and customer interviews",
          lessonAnchor: "the-pmm-playbook-a-5-stage-cycle",
          theoryRecap:
            "Discovery-driven battle cards arm reps with 'landmine questions'—inquiry questions that lead prospects to discover competitor shortcomings on their own during sales conversations.",
          question:
            "What 2 landmine discovery questions can sales reps ask to expose the competitor's implementation and customization friction?",
          toolName: "Google Docs",
          where: "Draft the 'Landmine Questions' callout block in the sales battle card.",
          procedure: [
            "Formulate questions that prompt the prospect to ask competitors about implementation timelines and admin maintenance hours",
            "Ensure questions sound consultative rather than confrontational",
            "Provide reps with the expected customer response and follow-up talk track",
          ],
          outputSample:
            "LANDMINE QUESTIONS FOR DISCOVERY CALLS:\n" +
            "- Question 1: 'When you evaluated your last support platform, how many hours per week did your team spend maintaining custom routing scripts?'\n" +
            "  Goal: Exposes heavy administrative overhead required by legacy tools.\n" +
            "- Question 2: 'Did the quote you received include the third-party implementation consultant fees, or is onboarding billed separately?'\n" +
            "  Goal: Exposes hidden 5-figure professional service fees.",
          healthy:
            "Questions invite the buyer to reflect on their own operational pain and uncover hidden vendor costs.",
          unhealthy:
            "Leading questions that sound like aggressive sales traps and put the prospect on the defensive.",
          interpret:
            "A good landmine question makes the customer ask the competing vendor tough questions during their next demo.",
          soWhat: [
            {
              symptom: "Prospect is running parallel demos with legacy vendors",
              action: "Send the discovery checklist for the prospect to take into competitor meetings",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-objection-reframing",
          concept: "Launch enablement",
          lessonAnchor: "the-pmm-playbook-a-5-stage-cycle",
          theoryRecap:
            "Stage 4 (Enablement) requires turning common prospect objections into structured 'When They Say / You Say' reframes so reps maintain deal momentum under pressure.",
          question:
            "How should reps reframe the common enterprise objection: 'Legacy Vendor X is the safe, established industry standard'?",
          toolName: "Google Docs",
          where: "Finalize the 'Objection Handling & Reframing' section of the one-page battle card.",
          procedure: [
            "Document the top 2 enterprise objections heard in win/loss reviews",
            "Draft the 'When They Say / You Say' script acknowledging the concern and pivoting to modern agility",
            "Package the complete asset into a clean, 1-page reference card",
          ],
          outputSample:
            "OBJECTION HANDLING TALK TRACK:\n" +
            "- When They Say: 'Legacy Vendor X is the enterprise standard; nobody gets fired for buying them.'\n" +
            "- You Say: 'Legacy Vendor X was built 15 years ago for desktop-only ticketing. Today's modern support teams choose us because our consumer-grade interface gets agents fully productive in days, not months, cutting onboarding time by 70% and saving $40,000 in annual consulting retainers.'",
          healthy:
            "Validates the customer's instinct for safety while demonstrating that modern speed and lower TCO are the true low-risk choice.",
          unhealthy:
            "Dismissing the competitor's reputation or arguing defensively about feature parity.",
          interpret:
            "Effective objection handling reframes the buyer's risk perception from 'established brand' to 'hidden organizational drag.'",
          soWhat: [
            {
              symptom: "Deals stall in security and executive committee reviews",
              action: "Attach executive summary one-pager with enterprise security certs (SOC2, ISO) and ROI proof",
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
            role: "Tabulate competitive feature analysis and pricing breakdown",
            why: "Structured tabular layout for cross-functional comparison",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Format finalized 1-page sales battle card",
            why: "Clean executive formatting ready for sales distribution",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "HubSpot CRM",
            role: "Embed battle cards into live CRM deal records",
            why: "Real-time contextual enablement during active sales cycles",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A complete, field-ready one-page competitive sales battle card containing differentiated strengths, competitor vulnerability teardown, landmine discovery questions, and objection reframing scripts.",
      sampleOutput:
        "Figma vs. Adobe InDesign/Illustrator Enterprise Battle Card (Sample Extract)\n\n" +
        "ONE-SENTENCE POSITIONING:\n" +
        "'Figma is the only browser-native product design platform that unites designers, developers, and product managers in real time, eliminating version drift and expensive desktop license lock-in.'\n\n" +
        "TOP 3 STRENGTHS & PROOF POINTS:\n" +
        "1. Real-Time Multiplayer Collaboration: Zero sync lag; PMs and devs inspect live files without purchasing full design licenses.\n" +
        "2. Frictionless Browser Access: Runs on any OS (Mac, Windows, Chromebooks) with zero local software installation.\n" +
        "3. Single Source of Truth: Design system components update instantly across all team projects.\n\n" +
        "COMPETITOR WEAKNESSES TO EXPOSE:\n" +
        "1. Disconnected Desktop Files: Requires manual file sharing, leading to broken developer handoffs and version confusion.\n" +
        "2. Heavy Hardware Requirements: Demands high-end local workstations and rigid per-seat licensing.\n" +
        "3. Slow Feedback Cycles: Non-designers cannot comment directly on canvas without third-party plugins.\n\n" +
        "LANDMINE DISCOVERY QUESTIONS:\n" +
        "- 'How many days does your engineering team typically wait between a design spec handoff and production QA?'\n" +
        "- 'What percentage of your non-design stakeholders actually open desktop design files today?'\n\n" +
        "OBJECTION REFRACTION ('When They Say / You Say'):\n" +
        "- When They Say: 'We already have enterprise Adobe Creative Cloud site licenses.'\n" +
        "- You Say: 'Creative Cloud is great for print and illustration, but Figma is purpose-built for digital product software teams. Our customers keep CC for marketing graphics while moving product engineering to Figma, cutting handoff cycle time by 60%.'",
      successCriteria: [
        "Populates all 4 core battle card sections with specific, verified evidence",
        "Includes 2 consultative landmine questions and structured objection reframes",
        "Focuses on business outcomes and total cost of ownership over raw feature specs",
      ],
      portfolioReady: true,
    },
  ],
  "icp": [
    {
      id: "icp-firmographic-scoring-audit",
      tier: "mini",
      archetype: "audit",
      title: "The ICP Scoring Audit: Qualifying Outbound Accounts",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Audit a real-world pipeline export of 25 B2B prospect accounts using the lesson's 5-dimension ICP framework (firmographics, technographics, and behavioral triggers) to score fit, eliminate low-intent tire-kickers, and prioritize the top 20% high-LTV accounts for sales outreach.",
      companyId: "freshworks",
      scenario:
        "You are the marketing operations lead at Freshworks reviewing a list of 25 inbound trial signups and outbound targets. With sales reps spending too much time on accounts that churn after 60 days, you must build an objective ICP scoring model in a spreadsheet to separate high-retention mid-market targets from unqualified leads.",
      brief:
        "Apply a 100-point ICP scoring rubric across firmographics (employee count 50-500, B2B SaaS/services), technographics (uses modern CRM/helpdesk stack), and behavioral intent (active hiring for support leads or high trial activity). Rank accounts into Tier 1 (Outreach Now), Tier 2 (Nurture), and Tier 3 (Disqualify).",
      mode: "diagnostic",
      conceptsCovered: [
        "Firmographics",
        "Technographics",
        "Behavioral Signals",
      ],
      steps: [
        {
          stepId: "step-1-firmographic-filters",
          concept: "Firmographics",
          lessonAnchor: "1-firmographics",
          theoryRecap:
            "The lesson defines firmographics as the hard, filterable attributes (industry, employee count, ARR range, geography) that establish the baseline qualification threshold for any target account.",
          question:
            "Across a sample of 25 B2B inbound trial accounts, which firmographic criteria immediately disqualify low-fit accounts and isolate the mid-market target tier?",
          toolName: "Google Sheets",
          where: "Import the prospect CSV and apply firmographic filter columns for employee count (50-500) and target industry.",
          procedure: [
            "Import pipeline prospect dataset into Google Sheets",
            "Create filter rules: Employee headcount between 50 and 500 (+25 pts), Target Verticals (B2B SaaS, E-commerce, Fintech) (+15 pts)",
            "Flag accounts under 10 employees or outside target geographies as Out-of-ICP",
          ],
          outputSample:
            "FIRMOGRAPHIC QUALIFICATION:\n" +
            "- Account: CloudScale Systems | 180 employees | B2B SaaS | North America -> PASS (+40 pts)\n" +
            "- Account: Apex Retail Hub | 320 employees | E-commerce | UK -> PASS (+40 pts)\n" +
            "- Account: Dave's Corner Deli | 3 employees | Local Dining | USA -> DISQUALIFIED (Under 10 headcount, Non-target vertical)",
          healthy:
            "Out-of-ICP micro-accounts and non-target industries are immediately filtered before SDRs expend outbound effort.",
          unhealthy:
            "Treating all inbound trial signups with equal priority regardless of employee count or revenue scale.",
          interpret:
            "Firmographic filtering prevents sales pipeline bloat by enforcing strict baseline account characteristics.",
          soWhat: [
            {
              symptom: "SDRs spend 40% of their outreach time on 2-person businesses that cannot afford annual contracts",
              action: "Implement automated CRM lead routing that automatically archives non-ICP headcount signups",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-technographic-fit",
          concept: "Technographics",
          lessonAnchor: "2-technographics",
          theoryRecap:
            "Technographic criteria evaluate the existing software stack and integration readiness of the prospect to predict adoption velocity and integration compatibility.",
          question:
            "Which technographic indicators confirm the prospect has the necessary CRM, billing, and communication infrastructure to realize rapid product value?",
          toolName: "Google Sheets",
          where: "Add 'Technographic Stack' scoring columns to the account evaluation sheet.",
          procedure: [
            "Score existing stack: Deployed modern CRM (HubSpot, Salesforce) (+15 pts), Cloud ticketing/chat tool active (+15 pts)",
            "Check for presence of required webhook or API integration capabilities",
            "Deduct points for legacy on-premise air-gapped infrastructure",
          ],
          outputSample:
            "TECHNOGRAPHIC STACK AUDIT:\n" +
            "- CloudScale Systems: Stack = Salesforce CRM + Stripe + Jira -> Tech Score: 30/30 (High integration readiness)\n" +
            "- Apex Retail Hub: Stack = Shopify Plus + Gorgias + Slack -> Tech Score: 30/30 (Ideal migration candidate)\n" +
            "- LegacyCorp Manufacturing: Stack = On-Premise AS400 -> Tech Score: 0/30 (Air-gapped, zero cloud API compatibility)",
          healthy:
            "High scores correlate with modern cloud tech stacks that enable 1-click API integration.",
          unhealthy:
            "Assuming any company with a high employee count is qualified, ignoring incompatible legacy technology stacks.",
          interpret:
            "Technographics indicate whether the customer can actually activate and use your product without bespoke engineering.",
          soWhat: [
            {
              symptom: "Deals stall during technical onboarding due to lack of supported API connectors",
              action: "Make technographic stack verification a required field before creating an opportunity in CRM",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-behavioral-triggers",
          concept: "Behavioral Signals",
          lessonAnchor: "3-behavioral-signals",
          theoryRecap:
            "Behavioral signals are observable actions (hiring for specific roles, recent funding, high product usage) indicating an immediate buying trigger.",
          question:
            "What behavioral signals indicate the highest buying intent across qualified accounts?",
          toolName: "Google Sheets",
          where: "Calculate final composite ICP score incorporating hiring data and product trial usage.",
          procedure: [
            "Add behavioral points: Actively hiring 2+ support reps (+15 pts), Trial invited 3+ teammates in first 48 hours (+15 pts)",
            "Sum total composite score (Firmographics + Technographics + Behavioral) out of 100",
            "Classify accounts into Tier 1 (80-100 pts -> Immediate SDR Outreach), Tier 2 (50-79 pts -> Marketing Nurture), Tier 3 (<50 pts -> Disqualified)",
          ],
          outputSample:
            "COMPOSITE ICP ACCOUNT RANKING:\n" +
            "1. CloudScale Systems: Firmo 40 + Techno 30 + Behav 30 = 100/100 -> TIER 1 (Immediate Outbound SDR Call)\n" +
            "2. Apex Retail Hub: Firmo 40 + Techno 30 + Behav 15 = 85/100 -> TIER 1 (Immediate Outbound SDR Call)\n" +
            "3. MidMarket Logistics: Firmo 30 + Techno 15 + Behav 0 = 45/100 -> TIER 2 (Automated Email Nurture)\n" +
            "4. Dave's Corner Deli: Firmo 0 + Techno 0 + Behav 0 = 0/100 -> DISQUALIFIED",
          healthy:
            "Tier 1 accounts exhibit clear buying triggers alongside strong firmographic and technographic fit.",
          unhealthy:
            "Reaching out to all accounts with identical cadence regardless of behavioral intent.",
          interpret:
            "Timing outreach to behavioral triggers increases reply rates and accelerates sales cycle velocity.",
          soWhat: [
            {
              symptom: "Outbound SDR response rates sit below 3%",
              action: "Restrict SDR outbound cadences strictly to accounts with confirmed hiring or funding triggers",
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
            role: "Build weighted account scoring algorithm and filter pipeline rows",
            why: "Free, universal formula-driven calculation tool",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "HubSpot CRM",
            role: "Deploy custom account fit score properties and automated list routing",
            why: "Automates pipeline prioritization in real-world sales operations",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A completed 100-point ICP Account Scoring Spreadsheet with automated tiering formulas (Tier 1, Tier 2, Disqualified).",
      sampleOutput:
        "Snowflake ICP Account Scoring Matrix (Sample Extract)\n\n" +
        "SCORING FORMULA (Max 100 pts):\n" +
        "- Firmographics (40 pts): 200-2,000 employees (+25), Cloud-first tech/Fintech (+15)\n" +
        "- Technographics (30 pts): AWS/GCP data infrastructure (+15), Looker/Tableau deployed (+15)\n" +
        "- Behavioral Signals (30 pts): Hiring Head of Data (+15), Visited pricing page 3+ times (+15)\n\n" +
        "ACCOUNT AUDIT RESULTS:\n" +
        "1. FinStream Analytics (Score: 95/100 -> TIER 1 - IMMEDIATE SDR OUTREACH)\n" +
        "   - 450 employees, Series C Fintech, running AWS Redshift + Tableau, hiring 3 Data Engineers\n" +
        "2. NexaRetail Tech (Score: 60/100 -> TIER 2 - MARKETING NURTURE)\n" +
        "   - 120 employees, E-commerce SaaS, uses Google BigQuery, no active data hiring triggers\n" +
        "3. UrbanBakery Supplies (Score: 10/100 -> TIER 3 - DISQUALIFIED)\n" +
        "   - 15 employees, Local retail distributor, on-prem legacy accounting, zero cloud data infrastructure",
      successCriteria: [
        "Applies all 3 ICP scoring dimensions with clear weighting",
        "Correctly identifies out-of-ICP disqualification triggers",
        "Generates segmented account tiers based on total fit score",
      ],
      portfolioReady: false,
    },
    {
      id: "icp-definition-template-rebuild",
      tier: "mini",
      archetype: "rebuild",
      title: "The 5-Dimension ICP Blueprint: Codifying Your Target Account",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Rebuild an ambiguous, persona-confused target customer document into a rigorous, organization-level 5-Dimension Ideal Customer Profile blueprint with explicit inclusion criteria, technographic triggers, and out-of-ICP red flags.",
      companyId: "slack",
      scenario:
        "You are the Head of Product Marketing at Slack during its early high-growth expansion. The sales team has been pursuing any company with an email address, resulting in bloated pipeline and rapid churn among single-user accounts. You need to formalize Slack's first documented 5-Dimension ICP to focus sales on high-retention collaborative teams.",
      brief:
        "Use the lesson's 5-dimension template to author a complete ICP profile: Firmographics (distributed knowledge workers), Technographics (GitHub/Jira/Google Workspace), Behavioral Triggers (rapid sprint cycles or remote hiring), Psychographics (transparency-driven culture), and Success Indicators (2,000+ messages in 30 days).",
      mode: "build",
      conceptsCovered: [
        "Firmographics",
        "Psychographics",
        "Success Indicators (Value Realization Signals)",
      ],
      steps: [
        {
          stepId: "step-1-firmographic-technographic-spec",
          concept: "Firmographics",
          lessonAnchor: "1-firmographics",
          theoryRecap:
            "The lesson outlines that building an ICP requires moving beyond generic industry labels to establish exact company size, revenue, and technographic integration requirements.",
          question:
            "How should an organization-level ICP define firmographic parameters and technographic prerequisites for collaborative team communication?",
          toolName: "Notion",
          where: "Create the 'Firmographic & Technographic Profile' section of the ICP specification document.",
          procedure: [
            "Define target employee headcount ranges (50-1,000 knowledge workers) and organizational structure",
            "Specify core technographic requirements (Google Workspace / Microsoft 365, GitHub, Jira, Figma)",
            "Document why single-person companies and non-desk workforces are excluded from the primary sales ICP",
          ],
          outputSample:
            "ICP SPECIFICATION - SECTION 1: FIRMOGRAPHICS & TECHNOGRAPHICS\n" +
            "- Target Industries: Technology, Digital Agencies, Modern Financial Services, Media\n" +
            "- Company Scale: 50 - 1,000 employees (min 15 knowledge workers collaborating daily)\n" +
            "- Technographic Stack: Must use cloud-based productivity suites (Google Workspace/M365) and developer/collaboration tools (GitHub, Jira, Figma)\n" +
            "- Business Model: Distributed, remote-friendly, or hybrid teams with high cross-functional project velocity",
          healthy:
            "Focuses on organization-level attributes and integration prerequisites rather than individual user personas.",
          unhealthy:
            "Defining the ICP as 'anyone who needs better team communication' or describing a single buyer persona.",
          interpret:
            "A clear ICP establishes who the product is built for and what infrastructure must already exist for value realization.",
          soWhat: [
            {
              symptom: "Marketing campaigns target solo freelancers resulting in high churn after free trials",
              action: "Update ad audience targeting to exclude companies under 15 employees",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-psychographic-culture-fit",
          concept: "Psychographics",
          lessonAnchor: "4-psychographics",
          theoryRecap:
            "Psychographics capture the internal culture, decision-making velocity, and core organizational beliefs of the best-fit customer.",
          question:
            "What organizational culture traits, communication norms, and decision styles distinguish high-retention collaborative teams?",
          toolName: "Notion",
          where: "Author the 'Psychographics & Culture Profile' section of the document.",
          procedure: [
            "Identify 3 core beliefs shared by high-value customers (e.g., transparency over siloed emails, asynchronous collaboration, tool autonomy for teams)",
            "Describe the internal champion profile and decision-making style (engineering lead or VP product, fast 14-day team trial evaluation)",
            "Document common cultural objections and how to identify them during discovery",
          ],
          outputSample:
            "ICP SPECIFICATION - SECTION 2: PSYCHOGRAPHICS & ORGANIZATIONAL MINDSET\n" +
            "- Core Organizational Belief: Transparency and rapid async communication beat formal email chains and status meetings.\n" +
            "- Decision-Making Style: Bottom-up developer/team advocacy validated by engineering/product leadership; evaluates software via live team pilot.\n" +
            "- Innovation Stance: Early adopter of cloud tools; comfortable with open public channels and distributed team rituals.",
          healthy:
            "Captures the operational values and work habits that make the product an indispensable daily workflow.",
          unhealthy:
            "Listing superficial personality traits ('innovative, smart') that cannot be verified during sales qualification.",
          interpret:
            "Psychographics explain WHY an account buys and champions your software internally.",
          soWhat: [
            {
              symptom: "Sales pitches face rigid resistance from command-and-control IT gatekeepers",
              action: "Include qualification question assessing company-wide communication transparency before scheduling technical proof of concepts",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-success-indicators-red-flags",
          concept: "Success Indicators (Value Realization Signals)",
          lessonAnchor: "5-success-indicators-value-realization-signals",
          theoryRecap:
            "Dimension 5 requires defining concrete value realization signals (e.g., Slack's 2,000-message milestone) alongside explicit out-of-ICP red flags to halt misaligned deals.",
          question:
            "What 90-day value realization metrics and out-of-ICP disqualification rules keep sales, CS, and marketing aligned?",
          toolName: "Google Docs",
          where: "Complete the 'Success Indicators & Disqualification Criteria' section of the master ICP document.",
          procedure: [
            "Define 2 quantified success indicators that prove the customer achieved product value in their first 60-90 days",
            "Establish 3 explicit out-of-ICP red flags that disqualify accounts immediately",
            "Format the completed 5-dimension profile for executive sign-off across Sales, Marketing, and Customer Success",
          ],
          outputSample:
            "ICP SPECIFICATION - SECTION 3: SUCCESS INDICATORS & OUT-OF-ICP RED FLAGS\n" +
            "- 90-Day Success Indicators:\n" +
            "  1. Activation Milestone: Workspace generates 2,000+ sent messages within first 30 days.\n" +
            "  2. Team Engagement: >70% of licensed knowledge workers active daily across 5+ public channels.\n" +
            "  3. Email Reduction: Team reports >30% drop in internal email volume within 60 days.\n\n" +
            "- Out-of-ICP Red Flags (Disqualify Immediately):\n" +
            "  1. Rigid top-down hierarchical culture forbidding public channel communication.\n" +
            "  2. Single-person businesses or teams under 10 members looking for free chat tools.\n" +
            "  3. Air-gapped compliance requirements prohibiting cloud multi-tenant infrastructure.",
          healthy:
            "Provides unambiguous, observable milestones for customer success and clear disqualifiers for sales reps.",
          unhealthy:
            "Vague success metrics like 'improved collaboration' without measurable behavioral numbers.",
          interpret:
            "Explicit out-of-ICP red flags save more sales and customer success time than positive criteria alone.",
          soWhat: [
            {
              symptom: "Customer Success team spends hours trying to onboard culturally incompatible clients who churn at 90 days",
              action: "Establish mandatory sales qualification sign-off on out-of-ICP red flags prior to contract execution",
              effort: "half day",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Author and publish centralized 5-dimension ICP blueprint",
            why: "Clean collaborative documentation accessible across GTM teams",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Gather cross-functional stakeholder input from Sales and CS",
            why: "Fast feedback and commenting with zero setup friction",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Salesforce Marketing Cloud",
            role: "Configure account scoring and routing rules based on ICP blueprint",
            why: "Automates enterprise lead scoring and SDR assignment",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A complete, cross-functionally approved 5-Dimension Ideal Customer Profile Blueprint documenting firmographic parameters, psychographic fit, 90-day success metrics, and out-of-ICP disqualification red flags.",
      sampleOutput:
        "Zendesk Mid-Market Customer Support ICP Blueprint (Sample Extract)\n\n" +
        "1. FIRMOGRAPHICS:\n" +
        "- Industry: Fast-growing B2C E-commerce & B2B SaaS\n" +
        "- Company Size: 75 - 500 employees (Support team: 10 - 50 agents)\n" +
        "- Geography: North America, Western Europe, APAC tech hubs\n" +
        "- Revenue: $10M - $100M ARR\n\n" +
        "2. TECHNOGRAPHICS:\n" +
        "- Core Stack: Shopify Plus, Salesforce CRM, Jira, Stripe\n" +
        "- Replacing: Shared Gmail inboxes, fragmented ticketing plugins\n\n" +
        "3. BEHAVIORAL SIGNALS:\n" +
        "- Trigger 1: Posting 3+ customer support specialist job openings in 30 days\n" +
        "- Trigger 2: Holiday season support ticket backlog spike (>500 unanswered tickets/week)\n\n" +
        "4. PSYCHOGRAPHICS:\n" +
        "- Mindset: Customer experience is a competitive differentiator, not just a cost center\n" +
        "- Decision Style: Fast 30-day evaluation led by VP of Customer Support or Head of CX\n\n" +
        "5. SUCCESS INDICATORS (Value Realization in 60 Days):\n" +
        "- First response time reduced by >45%\n" +
        "- First contact resolution (FCR) improved from 52% to 78%\n\n" +
        "OUT-OF-ICP RED FLAGS (Immediate Disqualification):\n" +
        "- Solopreneurs or single-agent teams wanting free permanent tiers\n" +
        "- Highly air-gapped on-premise government security requirements with no cloud clearance",
      successCriteria: [
        "Documents all 5 ICP dimensions with concrete, observable criteria",
        "Includes quantified 90-day success indicators",
        "Defines explicit out-of-ICP disqualification rules",
      ],
      portfolioReady: true,
    },
  ],

  "positioning-doc": [
    {
      id: "positioning-doc-five-component-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Positioning Doc Teardown: Spotting Aspirational vs. Evidenced Positioning",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given three candidate positioning doc summaries for enterprise SaaS tools, apply April Dunford's 5-component framework to separate rigorous, evidence-grounded positioning from aspirational fluff, identifying misplaced alternatives, feature-led value claims, and category traps.",
      companyId: "freshworks",
      scenario:
        "You are the Product Marketing Manager at Freshworks (Nasdaq: FRSH) preparing to launch a new workflow automation add-on. Before finalizing your team's positioning canvas, leadership asks you to evaluate three candidate positioning briefs drafted by different regional PMMs.",
      brief:
        "Audit all three specimens against Dunford's five components: competitive alternatives, unique attributes, value, target customer, and market category. Name every structural defect or declare clean positioning with clear justification.",
      mode: "teardown",
      conceptsCovered: [
        "Competitive Alternatives",
        "Unique Attributes",
        "Value, Not Features",
        "Target Customer",
        "Market Category",
      ],
      teardownItems: [
        {
          itemId: "freshworks-teardown-item-1",
          specimenSource: "synthetic-realistic",
          specimen:
            "CANDIDATE POSITIONING DOC A (Regional Sales Enablement Draft):\n\n" +
            "1. Competitive Alternatives: Salesforce Service Cloud, HubSpot Service Hub, and ServiceNow.\n" +
            "2. Unique Attributes: Next-generation intuitive UI, modern AI copilot, and flexible workflow engine.\n" +
            "3. Value Delivered: Faster team workflows and higher user delight across customer operations.\n" +
            "4. Target Customer: Any growing business from early-stage SMBs to Fortune 500 enterprises.\n" +
            "5. Market Category: Next-Generation AI Customer Operations Platform.",
          prompt:
            "Evaluate Candidate Doc A against Dunford's 5-component framework. Identify all structural positioning defects.",
          answerKey: [
            {
              defect:
                "Competitive alternatives list only tier-1 enterprise market leaders (Salesforce, ServiceNow) while completely ignoring the real baseline alternative: spreadsheets, shared inboxes, and doing nothing.",
              severity: "critical",
              whyItMatters:
                "Dunford's Step 1 requires identifying what buyers actually replace; omitting manual processes distorts all subsequent uniqueness and value definitions.",
              lessonRef: "Step 1: Competitive Alternatives",
              owner: "you",
            },
            {
              defect:
                "Target customer is defined as 'Any growing business from early-stage SMBs to Fortune 500', which is far too broad to inform messaging, pricing, or go-to-market qualification.",
              severity: "critical",
              whyItMatters:
                "Positioning that attempts to serve everyone resonates with no one and dramatically inflates customer acquisition costs.",
              lessonRef: "Step 4: Target Customer",
              owner: "you",
            },
            {
              defect:
                "Unique attributes ('intuitive UI', 'modern AI copilot') are generic category table-stakes rather than genuinely defensible capabilities that alternatives lack.",
              severity: "moderate",
              whyItMatters:
                "If competitors make identical claims, the attributes fail the strict uniqueness test in Step 2.",
              lessonRef: "Step 2: Unique Attributes",
              owner: "you",
            },
          ],
          distractors: [
            "It chooses 'Next-Generation AI Customer Operations Platform' as the category, the category name itself is not the defect, the issue is that the underlying attributes and target segment provide zero differentiated support for that frame.",
            "It summarizes each component in one bullet point, conciseness is an asset if the underlying criteria are sound.",
          ],
          partialCredit: true,
        },
        {
          itemId: "freshworks-teardown-item-2",
          specimenSource: "synthetic-realistic",
          specimen:
            "CANDIDATE POSITIONING DOC B (ITSM Product Line Brief):\n\n" +
            "1. Competitive Alternatives: Jira Service Management plus unmanaged triage in shared Slack/Teams channels.\n" +
            "2. Unique Attributes: Native bi-directional Slack and MS Teams virtual agent that resolves 40% of routine password and provisioning requests without opening a web portal.\n" +
            "3. Value Delivered: Internal IT teams reclaim 12 hours per week on tier-1 ticket triage; employees get instant self-service resolutions directly inside existing chat workspaces.\n" +
            "4. Target Customer: IT Operations Directors at mid-market tech-forward companies (200-1,500 employees) operating primarily on Slack or Microsoft Teams.\n" +
            "5. Market Category: Conversational IT Service Management (Conversational ITSM).",
          prompt:
            "Evaluate Candidate Doc B against Dunford's 5-component framework. Identify any defects or confirm clean positioning.",
          answerKey: [],
          distractors: [
            "It narrows the target customer to companies with 200-1,500 employees on Slack/Teams, this tight qualification is a best practice, not a defect, because it enables high-converting, role-specific messaging.",
            "It names informal internal habits ('shared Slack channels') as competitive alternatives, this is correct practice under Dunford's framework where status-quo behavior is the true competitor.",
            "It uses 'Conversational ITSM' rather than standard 'ITSM', category framing is a deliberate strategic choice to avoid commoditized feature comparisons with legacy ITSM vendors.",
          ],
          partialCredit: true,
        },
        {
          itemId: "freshworks-teardown-item-3",
          specimenSource: "synthetic-realistic",
          specimen:
            "CANDIDATE POSITIONING DOC C (Feedback Intelligence Add-on):\n\n" +
            "1. Competitive Alternatives: Exporting SurveyMonkey and Typeform CSVs into Google Sheets for manual tagging.\n" +
            "2. Unique Attributes: Automated multi-lingual NLP sentiment clustering with 94.2% accuracy and REST webhook ingestion.\n" +
            "3. Value Delivered: Our proprietary NLP pipeline tokenizes 25,000 customer feedback records in under 4 seconds with BERT-based entity recognition.\n" +
            "4. Target Customer: Customer Success VPs and Heads of Support at B2B SaaS companies ($10M-$50M ARR).\n" +
            "5. Market Category: Customer Feedback Intelligence Platform.",
          prompt:
            "Evaluate Candidate Doc C against Dunford's 5-component framework. Identify all structural positioning defects.",
          answerKey: [
            {
              defect:
                "The Value Delivered section lists technical software specifications ('tokenizes 25,000 records in 4 seconds with BERT recognition') instead of buyer business outcomes.",
              severity: "critical",
              whyItMatters:
                "Buyers purchase outcomes (e.g., 'detect churn risks 3 weeks before renewal'), not technical processing benchmarks.",
              lessonRef: "Step 3: Value, Not Features",
              owner: "you",
            },
          ],
          distractors: [
            "Target customer is constrained to B2B SaaS companies between $10M and $50M ARR, precise segmentation improves positioning efficacy and is not a defect.",
            "Competitive alternatives include Google Sheets and SurveyMonkey exports, manual spreadsheet analysis is the actual baseline alternative for feedback synthesis.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Positioning teardown evaluation sheet",
            why: "Free, collaborative review workspace without account friction",
            required: true,
            lastVerified: "2026-08-16",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "This project needs nothing paid. The entire evaluation is conducted using Dunford's framework against structured text specimens.",
      },
      deliverable:
        "A completed evaluation scorecard identifying critical and moderate positioning defects across the three candidate documents with remediation notes for each component.",
      sampleOutput:
        "Zendesk Enterprise PMM Positioning Audit (Reference Sample)\n\n" +
        "Doc Evaluated: Zendesk AI Service Workspace Brief\n\n" +
        "1. Competitive Alternatives: Legacy CRM macros + outsourced Tier-1 BPO staff\n" +
        "   Status: PASS (Accurately identifies human labor as the primary baseline alternative)\n\n" +
        "2. Unique Attributes: Pre-trained on 18 billion customer service interactions across 100K+ brands\n" +
        "   Status: PASS (Defensible proprietary data volume that point-solution startups cannot replicate)\n\n" +
        "3. Value vs Feature Check: DEFECT REVISED\n" +
        "   Initial Draft: 'Embeds 120 pre-built LLM customer intents and API webhooks.' (Feature)\n" +
        "   Revised Value: 'Resolves 60% of tier-1 billing and order status inquiries instantly without human routing, cutting first-contact resolution time from 4 hours to 30 seconds.' (Outcome)\n\n" +
        "4. Target Customer: VP of Customer Experience at high-volume B2C e-commerce brands ($50M+ GMV)\n" +
        "   Status: PASS (Specific, measurable segment qualification)\n\n" +
        "5. Market Category: AI-Powered Customer Service Solution\n" +
        "   Status: PASS (Frames evaluation around service resolution rather than generic LLM chatbot)",
      successCriteria: [
        "Correctly identifies Candidate Doc A's ungrounded alternatives and overly broad ICP",
        "Validates Candidate Doc B as clean, evidenced positioning",
        "Catches Candidate Doc C's feature-for-value substitution in Step 3",
        "Applies Dunford's strict sequential logic to each evaluation",
      ],
      portfolioReady: true,
    },
    {
      id: "positioning-doc-matrix-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "The 5-Step Positioning Matrix: Building a One-Page Positioning Doc",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Build a complete, 5-component positioning document for a targeted enterprise product line using April Dunford's sequential framework, translating competitive alternatives and unique attributes into defensible customer value and category framing.",
      companyId: "slack",
      scenario:
        "You are the Senior Product Marketing Manager at Slack (Salesforce), tasked with crafting the internal positioning doc for 'Slack Connect' (secure cross-company channel collaboration) to align sales, product, and marketing ahead of an enterprise push.",
      brief:
        "Work through Dunford's 5 steps in strict sequence. Do not skip to the market category or value until you have rigorously documented what buyers use today and what Slack Connect uniquely does that alternatives cannot.",
      mode: "build",
      conceptsCovered: [
        "Competitive Alternatives",
        "Unique Attributes",
        "Value, Not Features",
        "Target Customer",
        "Market Category",
      ],
      steps: [
        {
          stepId: "step-1-alternatives-and-attributes",
          concept: "Competitive Alternatives",
          lessonAnchor: "step-1-competitive-alternatives",
          theoryRecap:
            "Dunford's Step 1 and Step 2 establish the foundation: competitive alternatives define what customers would do if you did not exist, and unique attributes list only the capabilities you have that those alternatives lack.",
          question:
            "What do enterprise teams use today to collaborate with external vendors and partners, and what technical capabilities does Slack Connect possess that those methods lack?",
          toolName: "Google Docs",
          where: "Open a clean document and create a two-column table for 'Competitive Alternatives' and 'Unique Attributes'.",
          procedure: [
            "List the top 3 alternatives external teams use today (e.g. shared email distribution lists, guest accounts on internal portals, weekly status sync calls).",
            "For each alternative, isolate its primary failure mode (e.g. email threads lose attachments, guest accounts create security and licensing sprawl).",
            "List Slack Connect's unique technical attributes (e.g. bi-directional encrypted channels between separate enterprise Slack workspaces, retention policy compliance for both orgs).",
            "Filter out table-stakes attributes that email or standard chat already offer (e.g. 'instant messaging', 'file sharing').",
          ],
          outputSample:
            "COMPETITIVE ALTERNATIVES:\n" +
            "1. Email chains with 15+ external CCs (unstructured, context lost, attachments version-clashed)\n" +
            "2. Multi-tenant Guest Accounts (expensive per-seat licensing, security blindspot for IT)\n" +
            "3. Ad-hoc Zoom status syncs (synchronous, time-zone friction)\n\n" +
            "UNIQUE ATTRIBUTES (Strict Filter):\n" +
            "1. Direct federated channel linking two sovereign Enterprise Grid organizations\n" +
            "2. Each organization retains administrative sovereignty and DLP/eDiscovery compliance over its own data\n" +
            "3. Real-time multi-org workflows and bot automations operating natively across the boundary",
          healthy:
            "Unique attributes only contain features that external email chains and guest accounts literally cannot provide.",
          unhealthy:
            "Listing generic messaging features like 'rich text editing' or 'mobile push notifications' as unique attributes.",
          interpret:
            "Uniqueness is relative only to what the customer would use instead. If email already does it, it is not a unique attribute.",
          soWhat: [
            {
              symptom:
                "Unique attributes list features available in standard email or chat",
              action:
                "Cross out any capability that exists in competitive alternatives until only defensible differentiators remain",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-value-translation",
          concept: "Value, Not Features",
          lessonAnchor: "step-3-value-not-features",
          theoryRecap:
            "Step 3 maps each unique attribute directly to a commercial outcome the buyer cares about, converting 'what it is' into 'what it enables for the business'.",
          question:
            "How does each unique federated security and workflow capability translate into tangible time, risk reduction, or deal velocity for enterprise leaders?",
          toolName: "Google Docs",
          where: "Add a 'Customer Value' column next to each validated Unique Attribute.",
          procedure: [
            "Take each unique attribute from Step 1 and ask: 'So what does this change for the VP of Sales or CISO?'",
            "Write the value statement in terms of speed, risk mitigation, or customer retention rather than software mechanisms.",
            "Ensure each value statement links directly to one unique attribute, avoiding ungrounded benefit claims.",
          ],
          outputSample:
            "ATTRIBUTE -> VALUE TRANSLATION:\n" +
            "- Federated Grid Link -> Closes partner deals and resolves client escalations 4x faster by replacing 3-day email tag with real-time shared channel triage.\n" +
            "- Sovereign DLP/Compliance -> CISO approves external partner collaboration in 24 hours instead of blocking guest account provisioning for 6 weeks.\n" +
            "- Cross-Org Workflow Bots -> Automates shared ticketing and billing approvals between vendor and client without manual status reconciliation.",
          healthy:
            "Value claims describe business velocity and security clearance outcomes that matter to budget holders.",
          unhealthy:
            "Value claims merely restate the feature (e.g., 'allows two companies to chat in real-time').",
          interpret:
            "Buyers purchase outcomes, not engineering. The value column is what equips sales reps to defend pricing.",
          soWhat: [
            {
              symptom:
                "Value column describes software mechanics rather than buyer outcomes",
              action:
                "Rewrite using the formula: 'Enables [buyer role] to [achieve outcome] in [timeframe] without [painful alternative]'",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-target-and-category",
          concept: "Target Customer",
          lessonAnchor: "step-4-target-customer",
          theoryRecap:
            "Step 4 defines the target customer segment that feels this value most acutely, and Step 5 establishes the market category that sets the correct evaluation criteria in the buyer's mind.",
          question:
            "Which exact enterprise segment suffers most from multi-company email chaos, and what category framing prevents them from viewing Slack Connect as merely an expensive chat add-on?",
          toolName: "Google Docs",
          where: "Draft the 'Target Customer' definition and 'Market Category' section at the bottom of the positioning doc.",
          procedure: [
            "Define the Target Customer using specific firmographic and operational triggers (e.g. enterprise B2B companies managing 50+ strategic agency/vendor partners).",
            "Evaluate 3 candidate market categories: 'B2B Chat Plugin' vs. 'Enterprise Collaboration' vs. 'Secure Inter-Company Communications Platform'.",
            "Select the category that activates enterprise security evaluation criteria and premium budget pools.",
            "Synthesize all 5 components into a single-page internal reference brief.",
          ],
          outputSample:
            "TARGET CUSTOMER:\n" +
            "- Profile: Enterprise SaaS and professional services firms ($50M+ ARR, 500+ employees) whose revenue depends on managing complex, multi-party client accounts and external vendor ecosystems.\n" +
            "- Trigger: IT/Security audits failing due to unmanaged guest access and sensitive client data leaking across unencrypted email attachments.\n\n" +
            "MARKET CATEGORY:\n" +
            "- Chosen Frame: \"Secure Inter-Company Communications Platform\"\n" +
            "- Why This Frame: Positions the product as enterprise infrastructure (funded from IT/CISO budget) rather than an optional internal chat perk (competing with internal messaging budgets).",
          healthy:
            "Target customer includes operational triggers and category activates enterprise IT budget lines.",
          unhealthy:
            "Target customer is 'all enterprise companies' and category is 'team chat'.",
          interpret:
            "Category framing dictates which budget pool the purchase comes from and who the primary decision maker is.",
          soWhat: [
            {
              symptom:
                "Category framing triggers comparisons with low-cost consumer chat apps",
              action:
                "Refocus category frame around enterprise security, governance, and business-to-business infrastructure",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "One-page positioning doc canvas",
            why: "Clean, collaborative, version-controlled documentation",
            required: true,
            lastVerified: "2026-08-16",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "This project is entirely complete using free Google Docs. No paid software required.",
      },
      deliverable:
        "A completed 1-page internal positioning document for Slack Connect covering all 5 Dunford components with verified uniqueness filters and category justification.",
      sampleOutput:
        "Freshworks Freshservice Positioning Brief (Reference Sample)\n\n" +
        "1. Competitive Alternatives: Legacy enterprise ITSM (ServiceNow) and fragmented IT email inboxes.\n\n" +
        "2. Unique Attributes:\n" +
        "   - Out-of-the-box ITIL workflows deployed in under 14 days without third-party implementation consultants.\n" +
        "   - Unified service catalog spanning IT, HR, and Facilities on a single mid-market pricing tier.\n\n" +
        "3. Value Delivered:\n" +
        "   - Mid-market enterprises reduce ticket resolution time by 35% within 30 days of launch.\n" +
        "   - IT directors achieve 100% service visibility without the $250k consulting overhead of legacy platforms.\n\n" +
        "4. Target Customer: IT Directors and VP of Ops at mid-market companies (500-3,000 employees) experiencing rapid headcount growth with lean IT teams.\n\n" +
        "5. Market Category: Right-Sized Enterprise Service Management (ESM)",
      successCriteria: [
        "Follows Dunford's 5 components in strict sequential order",
        "Filters out table-stakes chat features from the unique attributes list",
        "Defines target customer with concrete operational and trigger-based criteria",
        "Justifies market category choice based on buyer evaluation criteria",
      ],
      portfolioReady: true,
    },
  ],
  "messaging-hierarchy": [
    {
      id: "messaging-hierarchy-channel-audit",
      tier: "mini",
      archetype: "audit",
      title: "The 4-Level Messaging Audit: Diagnosing Copy Alignment from Hero to Sales Deck",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Audit customer-facing assets across four touchpoints (homepage hero, paid ad copy, sales deck slide, and onboarding email) against a product's 4-level messaging hierarchy, identifying message drift, unsupported claims, and tone dissonance.",
      companyId: "zendesk",
      scenario:
        "You are the Lead Product Marketing Manager at Zendesk (acquired for $10.2B). Following a major product suite update, you are auditing 4 touchpoints across marketing, growth, and sales to ensure every customer communication traces cleanly back to Zendesk's core brand promise and 3 value pillars.",
      brief:
        "Inspect each channel asset against the established brand promise and value pillars. Identify whether the copy aligns with Level 1-3 hierarchy rules or exhibits channel fragmentation.",
      mode: "diagnostic",
      conceptsCovered: [
        "What It Actually Is",
        "Why It Matters in Product Marketing",
        "Validate Each Proof Point",
        "Map Pillars to Channels",
      ],
      steps: [
        {
          stepId: "step-1-hero-and-promise-audit",
          concept: "What It Actually Is",
          lessonAnchor: "what-it-actually-is",
          theoryRecap:
            "Level 1 (Brand Promise) and Level 2 (Value Pillars) must directly govern top-of-funnel copy. The homepage hero must deliver the primary brand promise and top universal pillar in clear, confident language without collapsing into feature jargon.",
          question:
            "Does the homepage hero headline and subhead communicate the core brand promise and universal pillar, or does it collapse into feature jargon?",
          toolName: "Google Docs",
          where: "Compare the live homepage hero copy against Level 1 (Promise) and Level 2 (Pillar 1).",
          procedure: [
            "Extract the hero headline: 'AI-Powered Omnichannel Customer Service Platform'.",
            "Compare against Brand Promise: 'Build champion customer relationships with effortless service'.",
            "Evaluate whether the hero communicates an outcome transformation or merely names product features.",
            "Rewrite the hero copy to align Level 1 promise with Pillar 1 (Effortless resolution across every channel).",
          ],
          outputSample:
            "CURRENT HERO COPY:\n" +
            "Headline: \"AI-Powered Omnichannel Customer Service Platform\"\n" +
            "Subhead: \"Deploy custom AI agents, ticketing workflows, and omnichannel voice routing.\"\n\n" +
            "AUDIT DIAGNOSIS:\n" +
            "- Level 1 Traceability: FAILS. Leads with product mechanics ('AI-Powered Omnichannel...') instead of customer transformation.\n" +
            "- Recommended Realignment: Headline: \"Effortless service for every customer, everywhere.\" Subhead: \"Resolve issues faster on messaging, email, and voice with intelligent AI that works from day one.\"",
          healthy:
            "Hero headline leads with the core brand promise and transformation before naming technology.",
          unhealthy:
            "Hero headline is a string of feature keywords (e.g. 'Omnichannel CRM Platform with AI').",
          interpret:
            "Top-of-funnel copy must establish the promise in under 5 seconds. Feature lists belong in Level 3 proof points.",
          soWhat: [
            {
              symptom:
                "Homepage hero leads with feature descriptions rather than brand promise",
              action:
                "Rewrite hero using Level 1 brand promise as headline and Pillar 1 proof point as subhead",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-proof-point-validation",
          concept: "Validate Each Proof Point",
          lessonAnchor: "step-3-validate-each-proof-point",
          theoryRecap:
            "Every proof point in Level 3 must be specific, verifiable (sourced), and relevant to its supporting pillar. Vague claims like 'trusted by thousands' erode buyer trust.",
          question:
            "Do the performance claims across the paid ad and sales deck pass the specificity, verifiability, and relevance tests?",
          toolName: "Google Docs",
          where: "Review 3 candidate proof points used in paid ads and sales collateral.",
          procedure: [
            "Audit Claim 1 (Ad): 'Zendesk makes support teams dramatically faster.'",
            "Audit Claim 2 (Sales Deck): 'Teams see 30% faster first-response times in 60 days (Zendesk Customer Benchmark Study, 2024).'",
            "Audit Claim 3 (One-Pager): 'Loved by 100,000+ support agents worldwide.'",
            "Identify which claims lack verification sources and replace them with qualified Level 3 data points.",
          ],
          outputSample:
            "PROOF POINT AUDIT TABLE:\n" +
            "1. 'Dramatically faster' -> REJECT. Vague superlative, no metric, zero verification source. Fails Test 1 & 2.\n" +
            "2. '30% faster first-response times in 60 days (Benchmark Study 2024)' -> PASS. Specific percentage, definite timeframe, named research source. Supports Pillar 1.\n" +
            "3. 'Loved by 100,000+ agents' -> ACCEPTABLE for social proof, but lacks functional relevance for technical sales battlecards.",
          healthy:
            "All performance claims include exact percentage improvements and cited benchmark or cohort data.",
          unhealthy:
            "Using unverified adjectives like 'dramatically faster' or 'industry-leading efficiency'.",
          interpret:
            "Proof points are the foundation of credibility. Unsubstantiated claims reset customer trust.",
          soWhat: [
            {
              symptom: "Marketing assets use unsourced superlatives",
              action:
                "Replace with verified customer benchmark data and add the source attribution",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-cross-channel-matrix",
          concept: "Map Pillars to Channels",
          lessonAnchor: "step-4-map-pillars-to-channels",
          theoryRecap:
            "Step 4 maps value pillars and proof points to distinct marketing channels based on customer context, audience mindset, and message density.",
          question:
            "How should Zendesk's 3 value pillars (Effortless Resolution, Fast Time-to-Value, and Enterprise-Grade AI) be deployed across email, ads, and sales slides?",
          toolName: "Google Docs",
          where: "Build a 4-channel messaging distribution matrix.",
          procedure: [
            "Map Pillar 1 (Effortless Resolution) to Paid Ads and Homepage Hero for broad appeal.",
            "Map Pillar 2 (Fast Time-to-Value) to Onboarding Email #1 and Mid-Funnel Webinars to reduce activation friction.",
            "Map Pillar 3 (Enterprise-Grade AI) to Sales Deck Slide 4 and Technical Whitepapers for security-conscious buyers.",
            "Verify that each channel uses the appropriate tone (Punchy for Ads, Story-driven for Sales, Helpful for Onboarding).",
          ],
          outputSample:
            "CHANNEL MAPPING MATRIX:\n" +
            "- Paid LinkedIn Ad: Pillar 2 (Time-to-Value) | Stat: 'Deploy in 8 weeks vs 9 months' | Tone: Punchy, ROI-focused\n" +
            "- Onboarding Email #2: Pillar 1 (Effortless Resolution) | Stat: 'Enable messaging in 3 clicks' | Tone: Instructive, encouraging\n" +
            "- Enterprise Sales Slide: All 3 Pillars | Key Stat: '82% CSAT average across 100k+ deployments' | Tone: Authoritative, story-driven",
          healthy:
            "Each channel focuses on 1-2 primary pillars with tailored tone and relevant proof points.",
          unhealthy:
            "Attempting to force all 3 pillars and 10 feature specs into a single 50-character ad.",
          interpret:
            "Messaging hierarchy provides channel clarity: audience context determines which pillar leads.",
          soWhat: [
            {
              symptom:
                "Paid ads attempt to explain the entire product suite",
              action:
                "Trim ad copy to highlight exactly one pillar and one verified proof point",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Channel messaging audit scorecard",
            why: "Free, accessible spreadsheet/doc template for cross-functional copy reviews",
            required: true,
            lastVerified: "2026-08-16",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "This audit project requires zero paid tooling. Everything is performed via structured text review in Google Docs.",
      },
      deliverable:
        "A channel messaging audit report evaluating 4 customer touchpoints against a 4-level hierarchy with specific copy realignments.",
      sampleOutput:
        "Klaviyo Cross-Channel Messaging Hierarchy Audit (Reference Sample)\n\n" +
        "Level 1 Promise: Turn customer data into personalized revenue.\n\n" +
        "Channel Audit Results:\n\n" +
        "1. Meta Retargeting Ad:\n" +
        "   - Current Copy: 'Klaviyo has advanced segmentation and automated email flows.'\n" +
        "   - Defect: Leads with Level 3 features instead of Level 2 pillar (Personalized Revenue).\n" +
        "   - Corrected Copy: 'Make every email generate 3x more revenue. Automate personalized flows in minutes.'\n\n" +
        "2. Post-Signup Welcome Email:\n" +
        "   - Current Copy: 'Welcome to Klaviyo! Connect your Shopify store to get started.'\n" +
        "   - Defect: Misses Pillar 2 (Fast Time-to-Value) proof point.\n" +
        "   - Corrected Copy: 'Welcome! Stores that sync their catalog on day one see their first automated sale within 48 hours.'\n\n" +
        "3. Enterprise Deck Slide 3:\n" +
        "   - Pillar Tested: Real-time CDP scale.\n" +
        "   - Validated Proof Point: 'Processes 500M+ events/day with sub-second segment updates.'",
      successCriteria: [
        "Audits all 4 channel touchpoints against the 4 levels of the hierarchy",
        "Applies the 3 proof-point tests (specific, verifiable, relevant)",
        "Maps appropriate tone and message density to each channel",
        "Provides concrete before-and-after copy fixes",
      ],
      portfolioReady: true,
    },
    {
      id: "messaging-hierarchy-pyramid-rebuild",
      tier: "mini",
      archetype: "rebuild",
      title: "Rebuilding a Fractured Messaging Hierarchy: From Feature List to 3-Pillar Pyramid",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Reconstruct a disorganized, feature-heavy marketing document into a structured 4-level messaging hierarchy pyramid (Brand Promise -> 3 Value Pillars -> Verified Proof Points -> Multi-Channel Copy).",
      companyId: "klaviyo",
      scenario:
        "You are the Senior Product Marketing Manager at Klaviyo (NYSE: KVYO). After expanding from email marketing into SMS, mobile push, and customer data platforms, internal teams are using conflicting descriptions. You need to rebuild the messaging hierarchy to unite product, marketing, and sales.",
      brief:
        "Take the raw list of 12 disparate features and claims, extract a single transformation brand promise, cluster the capabilities into 3 distinct value pillars, validate 2 proof points per pillar, and draft ready-to-use channel copy.",
      mode: "build",
      conceptsCovered: [
        "Brand Promise",
        "Extract Your Three to Five Pillars",
        "Validate Each Proof Point",
        "Map Pillars to Channels",
      ],
      steps: [
        {
          stepId: "step-1-brand-promise-synthesis",
          concept: "Brand Promise",
          lessonAnchor: "step-1-start-with-the-brand-promise",
          theoryRecap:
            "Step 1 defines the apex of the pyramid: a single transformation sentence that articulates the fundamental shift created for the customer, avoiding any mention of individual software features.",
          question:
            "What is the single core transformation Klaviyo delivers to ecommerce brands transitioning from generic batch-and-blast marketing to individualized customer experiences?",
          toolName: "Notion",
          where: "Create a new Notion page titled 'Klaviyo Master Messaging Hierarchy' and write the Level 1 Brand Promise.",
          procedure: [
            "Review the painful current state: ecommerce merchants blasted generic emails, treated all shoppers identically, and wasted ad spend on acquired customers.",
            "Review the desired future state: personalized, automated multi-channel messages that increase repeat purchase revenue.",
            "Draft 3 candidate promise statements using the formula: 'We help [audience] achieve [transformation] without [pain]'.",
            "Select the most compelling, outcome-focused promise and eliminate all feature references (e.g. remove 'email', 'SMS', 'database').",
          ],
          outputSample:
            "CANDIDATE PROMISES:\n" +
            "1. 'The best all-in-one email and SMS marketing automation platform.' (REJECTED: Feature list)\n" +
            "2. 'Turn everyday shoppers into lifelong high-value customers with intelligent data.' (ACCEPTABLE)\n" +
            "3. 'Turn your customer data into revenue with personalized experiences that keep shoppers coming back.' (SELECTED: Clear transformation, outcome-driven, zero tool jargon)",
          healthy:
            "Brand promise captures the emotional and financial transformation of the buyer.",
          unhealthy:
            "Brand promise names specific technical tools (e.g., 'email and SMS marketing software').",
          interpret:
            "The promise is the north star. Every pillar and channel copy snippet must logically trace back to it.",
          soWhat: [
            {
              symptom:
                "Brand promise reads like a product feature description",
              action:
                "Strip all tool nouns and reframe around the business outcome for the customer",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-pillar-clustering",
          concept: "Extract Your Three to Five Pillars",
          lessonAnchor: "step-2-extract-your-three-to-five-pillars",
          theoryRecap:
            "Step 2 clusters product capabilities into 3 distinct value pillars that answer 'How do we deliver on the brand promise?' Each pillar must represent a clear customer benefit theme.",
          question:
            "How do 12 disparate features (e.g., predictive analytics, SMS campaigns, Shopify sync, drag-and-drop editor, flow branching) cluster into exactly 3 cohesive value pillars?",
          toolName: "Notion",
          where: "Group the feature backlog into 3 columns representing Level 2 Value Pillars.",
          procedure: [
            "Cluster features related to real-time data ingestion and customer profiles into Pillar 1: 'Consolidated Customer Intelligence'.",
            "Cluster multi-channel automation, branching flows, and AI copy into Pillar 2: 'Automated 1-to-1 Personalization at Scale'.",
            "Cluster attribution dashboards, predictive LTV, and benchmark data into Pillar 3: 'Proven Revenue Growth & ROI Transparency'.",
            "Assign at least 2 specific, quantifiable proof points (Level 3) to validate each pillar.",
          ],
          outputSample:
            "LEVEL 2 VALUE PILLARS & LEVEL 3 PROOF POINTS:\n\n" +
            "Pillar 1: Consolidated Customer Intelligence\n" +
            "- Proof Point 1a: Instant 1-click integration with 300+ platforms (Shopify, WooCommerce, Stripe)\n" +
            "- Proof Point 1b: Unified real-time profile updating sub-second on every browser click and purchase\n\n" +
            "Pillar 2: Automated 1-to-1 Personalization at Scale\n" +
            "- Proof Point 2a: Pre-built automated flows (abandoned cart, winback) driving 29% of email revenue from 2% of send volume\n" +
            "- Proof Point 2b: Multi-channel orchestration across Email, SMS, and Push within a single visual builder\n\n" +
            "Pillar 3: Proven Revenue Growth & ROI Transparency\n" +
            "- Proof Point 3a: Average customer achieves 46x ROI across customer marketing lifecycle\n" +
            "- Proof Point 3b: Real-time revenue attribution assigning every dollar directly to specific campaigns and flows",
          healthy:
            "Pillars are limited to 3 distinct themes, each supported by quantified proof points.",
          unhealthy:
            "Creating 7 overlapping pillars that confuse product capabilities with benefits.",
          interpret:
            "Three pillars provide maximum cognitive retention. More than five dilutes message recall.",
          soWhat: [
            {
              symptom: "Team proposes 6 or more value pillars",
              action:
                "Force a ranking exercise and consolidate overlapping features under the top 3 customer-centric themes",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-channel-copy-derivation",
          concept: "Map Pillars to Channels",
          lessonAnchor: "step-4-map-pillars-to-channels",
          theoryRecap:
            "Level 4 channel copy translates the validated pillars and proof points into channel-ready copy for homepage, sales pitch, and cold outreach.",
          question:
            "How do the 3 pillars translate into copy for a homepage hero, a paid social ad, and a sales deck slide?",
          toolName: "Notion",
          where: "Draft Level 4 channel copy for Homepage Hero, Meta Ad, and Sales Slide.",
          procedure: [
            "Draft Homepage Hero Headline and Subhead from Level 1 Promise and Pillar 2.",
            "Draft a Meta Ad copy snippet focused on Pillar 2's high-ROI abandoned cart flow stat.",
            "Draft a Sales Deck value slide headline and 3-bullet narrative leveraging all 3 pillars.",
            "Verify that every word in Level 4 links directly back to Level 1, 2, or 3.",
          ],
          outputSample:
            "LEVEL 4 CHANNEL COPY:\n\n" +
            "1. Homepage Hero:\n" +
            "   - Headline: Turn Customer Data Into Revenue.\n" +
            "   - Subhead: Power smarter digital relationships across email, SMS, and push that grow revenue on autopilot.\n\n" +
            "2. Paid Ad (Meta / LinkedIn):\n" +
            "   - Hook: What if 2% of your emails generated 29% of your revenue?\n" +
            "   - Body: Klaviyo's automated flows turn abandoned carts and browse history into repeat orders while you sleep.\n" +
            "   - CTA: See the ROI Calculator.\n\n" +
            "3. Sales Deck Slide (Executive Summary):\n" +
            "   - Header: The Intelligent Customer Growth Platform\n" +
            "   - Bullet 1: Connect your tech stack in 1 click with 300+ pre-built integrations.\n" +
            "   - Bullet 2: Orchestrate personalized email and SMS journeys with industry-leading automation.\n" +
            "   - Bullet 3: Track every dollar with transparent, real-time revenue attribution.",
          healthy:
            "Every piece of channel copy traces a direct line back to a validated pillar and proof point.",
          unhealthy:
            "Channel copy invents new claims or jargon not grounded in the hierarchy.",
          interpret:
            "Consistency across channels drives the 5-7 exposures required for message retention.",
          soWhat: [
            {
              symptom:
                "Copywriters invent unapproved messaging hooks in campaign briefs",
              action:
                "Institute a copy review checklist requiring writers to cite the supporting pillar and proof point ID",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Notion",
            role: "Messaging hierarchy pyramid workspace",
            why: "Free, flexible tiered workspace for structured product marketing guidelines",
            required: true,
            lastVerified: "2026-08-16",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "This rebuild project requires zero paid tooling. Everything is documented using Notion's free tier.",
      },
      deliverable:
        "A comprehensive 4-level messaging hierarchy pyramid (Promise, 3 Pillars, 6 Proof Points, 3 Channel Copy assets) organized in a master internal reference document.",
      sampleOutput:
        "Loom Messaging Hierarchy Reference (Completed Pyramid)\n\n" +
        "LEVEL 1: BRAND PROMISE\n" +
        "Say it with video — unlock faster, more connected work without another meeting.\n\n" +
        "LEVEL 2: VALUE PILLARS\n" +
        "1. Async Speed (Communicate 3x faster than typing)\n" +
        "2. Meeting Reduction (Reclaim 3+ hours of weekly meeting fatigue)\n" +
        "3. Expressive Clarity (Convey emotion and screen context that text loses)\n\n" +
        "LEVEL 3: PROOF POINTS\n" +
        "- Pillar 1: 5-minute video recorded and shared in 2 clicks with instant transcription.\n" +
        "- Pillar 2: 97% watch rate vs 22% email open rates across 21M+ users.\n" +
        "- Pillar 3: Viewers retain 95% of a message when watched on video vs 10% when read in text.\n\n" +
        "LEVEL 4: CHANNEL COPY (Homepage Hero)\n" +
        "Headline: Supercharge your team with async video.\n" +
        "Subhead: Record quick screen and cam messages to update teammates, review work, and skip the calendar tag.",
      successCriteria: [
        "Synthesizes a clean Level 1 brand promise free of feature jargon",
        "Clusters capabilities into exactly 3 cohesive value pillars",
        "Includes specific, verifiable proof points for each pillar",
        "Generates consistent Level 4 channel copy for at least 3 distinct marketing channels",
      ],
      portfolioReady: true,
    },
  ],

  "launches": [
    {
      id: "launches-tier-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Launch Tier Audit: Classifying a Release Pipeline",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a realistic quarterly product release pipeline of 4 upcoming features, apply the 5 Tier-Assignment Questions to evaluate strategic impact against engineering effort, classify each feature into its correct tier (Tier 0 to Tier 3), and allocate the right marketing activities without over-investing in routine updates.",
      companyId: "slack",
      scenario:
        "You are the product marketing lead for Slack. Heading into Q3, product and engineering teams have submitted four distinct feature proposals with competing requests for full press tours, dedicated blog posts, and sales enablement webinars. You need to run each release through the launch tier rubric to establish an agreed-upon GTM plan before marketing budget and sprint bandwidth are locked.",
      brief:
        "Evaluate four prospective releases across the five tier questions, score each from Tier 0 (Ship and Note) to Tier 3 (Company-Defining), and define the exact channel deliverables and timelines for each tier.",
      mode: "diagnostic",
      conceptsCovered: [
        "The Five Tier-Assignment Questions",
        "The Four Tiers",
        "Launch Timelines by Tier",
      ],
      steps: [
        {
          stepId: "step-1-score-tier-questions",
          concept: "The Five Tier-Assignment Questions",
          lessonAnchor: "the-five-tier-assignment-questions",
          theoryRecap:
            "The lesson outlines five evaluation questions: does it change purchase decisions, expand addressable market, shift competitive positioning, create new revenue, or require market education? Scoring 4-5 'yes' answers marks a Tier 3, 2-3 marks a Tier 2, and 0-1 marks a Tier 0 or Tier 1.",
          question:
            "Evaluating 4 candidate releases (Custom Emoji Packs, HubSpot Bi-directional CRM Sync, Native Canvas Collaborative Docs, and Mobile Dark Mode), how many 'yes' answers does each earn across the five strategic criteria?",
          toolName: "Google Sheets",
          where:
            "Open a spreadsheet, create 5 columns for the strategic impact questions, and score each candidate release with 1 (Yes) or 0 (No).",
          procedure: [
            "List the four candidate features in Column A: Emoji Packs, CRM Sync, Canvas Docs, and Dark Mode",
            "Evaluate Question 1 (Changes purchase decisions?) and Question 2 (Expands addressable market?) for each feature",
            "Evaluate Question 3 (Shifts competitive positioning?), Question 4 (Creates new revenue/upsell?), and Question 5 (Requires market education?)",
            "Sum the 'Yes' scores (0 to 5) in a Total Score column to determine the preliminary tier boundary",
          ],
          outputSample:
            "FEATURE SCORING MATRIX\n" +
            "1. Native Canvas Docs:  Q1(Y) Q2(Y) Q3(Y) Q4(Y) Q5(Y) -> Total: 5/5 (Tier 3 Candidate)\n" +
            "2. HubSpot CRM Sync:    Q1(Y) Q2(N) Q3(Y) Q4(N) Q5(N) -> Total: 2/5 (Tier 2 Candidate)\n" +
            "3. Custom Emoji Packs:  Q1(N) Q2(N) Q3(N) Q4(N) Q5(N) -> Total: 0/5 (Tier 0 Candidate)\n" +
            "4. Mobile Dark Mode:    Q1(N) Q2(N) Q3(N) Q4(N) Q5(N) -> Total: 0/5 (Tier 0 Candidate)",
          healthy:
            "Tier assignment is strictly grounded in commercial and competitive impact rather than the number of developer hours spent building the feature.",
          unhealthy:
            "Giving a minor UI tweak or internal refactor a Tier 2 campaign simply because engineering spent four months building it.",
          interpret:
            "A score of 4-5 unlocks cross-functional company-wide resources; 2-3 triggers a targeted multi-channel campaign; 0-1 stays strictly within product notifications or segmented customer success notes.",
          soWhat: [
            {
              symptom:
                "Product management demands a press release for a feature that scored 0/5 on strategic criteria",
              action:
                "Share the 5-question scoring rubric to show why a changelog entry and in-app tooltip maximize ROI without burning press goodwill",
              effort: "30 min",
            },
            {
              symptom: "A 5/5 company-defining launch is only given a 2-week lead time",
              action:
                "Enforce the mandatory 10-12 week Tier 3 runway to secure executive alignment, analyst briefings, and partner co-marketing",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-map-timelines-and-channels",
          concept: "Launch Timelines by Tier",
          lessonAnchor: "launch-timelines-by-tier",
          theoryRecap:
            "Launch timelines scale with tier: Tier 0 is same-day changelog, Tier 1 is a 2-3 week targeted campaign, Tier 2 is a 6-8 week multi-channel motion, and Tier 3 requires a 10-12 week cross-functional runway.",
          question:
            "What exact deliverables, team resourcing, and runway timeline belong to each of your scored releases?",
          toolName: "Notion",
          where:
            "Create a launch roadmap table with columns for Feature, Assigned Tier, Runway Timeline, Core Channels, and Team Size.",
          procedure: [
            "Assign Native Canvas Docs to Tier 3: 10-12 week runway, full GTM team, keynote event, executive PR, and partner enablement",
            "Assign HubSpot CRM Sync to Tier 2: 6-8 week runway, PMM + Demand Gen, customer webinars, targeted email sequences, and co-marketing blog",
            "Assign Custom Emoji & Dark Mode to Tier 0: same-day release, in-app notification modal, help center documentation, and changelog update",
            "Verify that 60-80% of quarterly releases remain Tier 0/1 to preserve team energy for Tier 3 moments",
          ],
          outputSample:
            "GTM LAUNCH PLAN\n" +
            "- Tier 3 (Canvas Docs): 12-week runway | Press embargo, customer keynote, sales certification, paid acquisition\n" +
            "- Tier 2 (HubSpot Sync): 6-week runway | Segmented email blast, partner blog swap, CS enablement deck\n" +
            "- Tier 0 (Dark Mode / Emoji): Same-day | In-app changelog, help center article, community release note",
          healthy:
            "Resource commitments strictly follow tier definitions, keeping team burnout low and launch execution quality high.",
          unhealthy:
            "Spreading marketing bandwidth equally across all 4 releases, resulting in a rushed, mediocre Tier 3 launch.",
          interpret:
            "A disciplined launch calendar balances 1-2 major moments per year with steady Tier 0/1 product rhythm.",
          soWhat: [
            {
              symptom:
                "Marketing team experiences burnout from running 5 concurrent 'major' campaigns",
              action:
                "Audit the roadmap and reclassify routine updates to Tier 0 changelogs",
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
            role: "Score features across the 5 tier-assignment questions",
            why: "Clean tabular scoring model with zero friction",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Notion",
            role: "Document the launch tier matrix and channel deliverables",
            why: "Structured collaboration workspace for cross-functional GTM teams",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed Launch Tier Classification Matrix and GTM Roadmap document containing 5-question scoring, tier assignments, and channel resource plans for 4 quarterly releases.",
      sampleOutput:
        "Freshworks Q3 Release Tiering Rubric & Roadmap\n\n" +
        "1. Freshdesk Freddy AI Copilot (Scored 5/5 -> Tier 3)\n" +
        "   - Changes purchase decisions: Yes | Expands TAM: Yes | Shifts positioning: Yes | New revenue: Yes | Needs education: Yes\n" +
        "   - Runway: 12 weeks | Owner: VP PMM + CMO\n" +
        "   - Channels: Press embargo, Analyst briefing (Gartner), Keynote livestream, Sales certification\n\n" +
        "2. Shopify Multichannel Connector (Scored 2/5 -> Tier 2)\n" +
        "   - Changes purchase decisions: Yes | Shifts positioning: Yes | Other: No\n" +
        "   - Runway: 6 weeks | Owner: Lead PMM\n" +
        "   - Channels: E-commerce segment email, Shopify App Store spotlight, Customer webinar\n\n" +
        "3. Ticket Priority Custom Colors (Scored 0/5 -> Tier 0)\n" +
        "   - All 5 questions: No\n" +
        "   - Runway: Same-day | Owner: Product Owner\n" +
        "   - Channels: In-app release notes, Knowledge base update, Community forum post",
      successCriteria: [
        "Scores all 4 candidate features accurately against the 5 strategic impact questions",
        "Assigns appropriate tiers (Tier 0 to Tier 3) without confusing engineering effort with market impact",
        "Allocates the correct channel assets and lead-time runway to each tier",
      ],
      portfolioReady: true,
    },
    {
      id: "launches-release-fatigue-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Over-Tiered Launch Teardown: Spotting Release Fatigue",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Analyze a synthetic-realistic 6-month product launch calendar for a B2B SaaS company experiencing plummeting announcement engagement, identify the over-tiered and misallocated releases that violated launch tier principles, and defend each correction with the lesson's framework.",
      companyId: "freshworks",
      scenario:
        "You have been hired as a GTM consultant by Freshworks after their marketing team reported a 50% drop in email open rates, declining press coverage, and acute team burnout. You are provided with their H1 launch log containing 4 announcements and their associated marketing investments. You must diagnose where the team over-invested in routine releases and neglected proper positioning.",
      brief:
        "One specimen, one prompt: inspect the 4 launch campaign logs, flag the defects where releases were improperly tiered or where launch day was treated as the finish line, and explain the correct tier assignment for each.",
      mode: "teardown",
      conceptsCovered: [
        "The Four Tiers",
        "Treating every release as a Tier 3 launch",
        "Assigning tier based on engineering effort, not strategic impact",
        "Treating launch day as the finish line",
      ],
      teardownItems: [
        {
          itemId: "launch-log-teardown-01",
          specimen:
            "H1 PRODUCT LAUNCH LOG & RETROSPECTIVE (Freshworks CRM Division)\n\n" +
            "Launch 1: \"Custom Field Color-Coding\"\n" +
            "- Engineering Effort: 5 months (database architecture refactor)\n" +
            "- Launch Campaign: Tier 3 treatment (global press release, CEO video keynote, full-base email blast to 100k users, $15k paid LinkedIn ads)\n" +
            "- Outcome: 11% email open rate (historical avg 26%), 3 press inquiries asking why this warranted an embargo, negative customer feedback about spam.\n\n" +
            "Launch 2: \"AI Deal Health Scoring & Win Probability\"\n" +
            "- Engineering Effort: 2 months (leveraged existing foundational LLM APIs)\n" +
            "- Launch Campaign: Tier 1 treatment (single in-app popup and 1 blog post published on launch day; zero sales enablement decks or post-launch adoption tracking)\n" +
            "- Outcome: 3% feature adoption among enterprise accounts after 60 days; sales reps still pitching against competitor AI tools without battlecards.\n\n" +
            "Launch 3: \"Slack & Microsoft Teams Notifications Connector\"\n" +
            "- Engineering Effort: 3 weeks\n" +
            "- Launch Campaign: Tier 2 treatment (press wire distribution, dedicated webinar, 4-week outbound email sequence to all prospects)\n" +
            "- Outcome: 12 webinar attendees; high unsubscribe rate among non-Slack users.\n\n" +
            "Launch 4: \"SOC 2 Type II Annual Security Certification Renewal\"\n" +
            "- Engineering Effort: 6 months of compliance audits\n" +
            "- Launch Campaign: Tier 3 treatment (press release, homepage banner takeover, mandatory company-wide social sharing)\n" +
            "- Outcome: Ignored by media; confused trial prospects who assumed the platform was previously uncertified.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Examine the 4 launch campaigns in this log. For each release, identify whether it was over-tiered, under-tiered, or mismanaged, identify the specific launch framework rule violated, and prescribe the correct tier assignment.",
          answerKey: [
            {
              defect:
                "Treating 'Custom Field Color-Coding' as a Tier 3 launch because of 5 months of engineering effort",
              severity: "critical",
              whyItMatters:
                "Tier assignment must follow strategic market impact, not development effort. A UI customization tweak does not change purchase decisions or expand the TAM; giving it Tier 3 treatment burned $15k in budget and fatigued 100,000 email subscribers.",
              lessonRef:
                "Common Mistakes: Mistake 2: Assigning tier based on engineering effort, not strategic impact",
              owner: "you",
            },
            {
              defect:
                "Under-tiering 'AI Deal Health Scoring' to Tier 1 and treating launch day as the finish line",
              severity: "critical",
              whyItMatters:
                "AI Deal Health Scoring shifts competitive positioning against enterprise CRM competitors and creates deal expansion opportunities (a classic Tier 2 or Tier 3). Launching with only a blog post and no sales enablement or 30/60/90 day adoption tracking left enterprise adoption stranded at 3%.",
              lessonRef:
                "Common Mistakes: Mistake 4: Treating launch day as the finish line",
              owner: "either",
            },
            {
              defect:
                "Over-tiering standard Slack/Teams integration connector to a Tier 2 campaign with broad email blasts",
              severity: "moderate",
              whyItMatters:
                "Standard workflow integrations are classic Tier 1 targeted releases. Blasting the entire database rather than targeting existing Slack/Teams workspace users created irrelevant noise and elevated unsubscribe rates.",
              lessonRef: "How It Works: The Launch Tier Playbook: The Four Tiers",
              owner: "you",
            },
            {
              defect:
                "Promoting routine annual SOC 2 renewal with Tier 3 homepage takeover and press release",
              severity: "moderate",
              whyItMatters:
                "Annual compliance maintenance is a Tier 0 operational update. Turning it into a press release and homepage banner creates audience numbness and confuses prospective buyers about baseline product security.",
              lessonRef:
                "Common Mistakes: Mistake 1: Treating every release as a Tier 3 launch",
              owner: "you",
            },
          ],
          distractors: [
            "Using paid LinkedIn ads for B2B product marketing is standard practice, but the defect here was applying paid spend to a minor UI feature rather than an enterprise-grade capability.",
            "The engineering effort on SOC 2 compliance (6 months) was genuinely high, but confusing internal operational effort with external customer value is the root issue, not the compliance work itself.",
            "In-app popups are a valid channel, but deploying them without sales enablement or post-launch nurture for a major AI capability represents an under-investment.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log and categorize the launch post-mortem defects",
            why: "Standard tabular structure for post-launch audit tracking",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Notion",
            role: "Compile the launch retrospective report and revised tiering guidelines",
            why: "Clean documentation format for cross-functional alignment",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A structured Launch Post-Mortem and Teardown Analysis detailing the 4 misallocated campaigns, estimated audience fatigue cost, and revised tier classification guidelines.",
      sampleOutput:
        "Zendesk Launch Post-Mortem Analysis (Excerpt)\n\n" +
        "DEFECT 1: Ticket Tag Sorting Dropdown (Treated as Tier 3 -> Correct: Tier 0)\n" +
        "- Root Cause: 4 months of backend refactoring led PM to demand executive launch webinar.\n" +
        "- Impact: 9% open rate, high unsubscribe rate from IT buyer list.\n" +
        "- Correction: Downgrade to in-app release note and changelog.\n\n" +
        "DEFECT 2: Zendesk AI Agent Assist (Treated as Tier 1 -> Correct: Tier 3)\n" +
        "- Root Cause: Rushed out with a single blog post on launch day; no sales enablement battlecards.\n" +
        "- Impact: Enterprise deal win rate remained flat; competitors won bake-offs on AI perception.\n" +
        "- Correction: Re-launch as Tier 3 with 10-week runway, customer ROI webinars, and sales demo certification.",
      successCriteria: [
        "Correctly identifies all 4 misallocated launches and specifies the underlying framework error",
        "Distinguishes between development effort and commercial market impact",
        "Reassigns each release to its correct tier (Tier 0 through Tier 3) with proper channel recommendations",
      ],
      portfolioReady: true,
    },
  ],
};
