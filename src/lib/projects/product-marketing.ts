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

  "pmm-vs-marketing": [
    {
      id: "pmm-vs-marketing-role-scope-audit",
      tier: "mini",
      archetype: "audit",
      title: "Whose Job Is This? Auditing a Messy Sprint Board for PMM vs Marketing Ownership",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real 18-item sprint board where every task was dumped into one undifferentiated 'Marketing' list, sort each task into General Marketing, Product Marketing, or Shared ownership using the lesson's dimension framework.",
      companyId: "lenskart",
      scenario:
        "You're the new marketing ops hire at Lenskart. The team's sprint board has 18 tasks tagged only 'Marketing,' so PMM work like battlecards and launch plans keeps losing priority to paid-ads tasks with louder deadlines.",
      brief:
        "Apply the lesson's ownership dimensions (goal, output, audience) to each task, then flag the 3 tasks that are most commonly misrouted between the two functions.",
      mode: "diagnostic",
      conceptsCovered: [
        "Sorting tasks by primary owner using the goal/output/audience dimensions",
        "Distinguishing demand generation from positioning and enablement work",
      ],
      steps: [
        {
          stepId: "step-1-dimension-sort",
          concept: "Sorting tasks by primary owner using the goal/output/audience dimensions",
          lessonAnchor: "pmm-vs-marketing-side-by-side",
          theoryRecap:
            "The lesson's side-by-side table splits ownership by primary goal (awareness/demand vs. positioning/conversion), output (ads/content/emails vs. positioning docs/battlecards/launch plans), and audience (broad market vs. specific buyer segments).",
          question:
            "Row 4 of the board reads 'Write a comparison one-pager for reps facing our #2 competitor in enterprise deals.' Which two dimensions immediately rule out General Marketing ownership here?",
          toolName: "Google Sheets",
          where: "Import sprint-board-export.csv, add an Owner column, freeze the header row.",
          procedure: [
            "Import sprint-board-export.csv (18 rows: task name, current tag, one-line description)",
            "Add an Owner column with three allowed values: General Marketing, Product Marketing, Shared",
            "For each row, check output type first (an ad or email defaults to General Marketing; a battlecard or positioning doc defaults to PMM), then confirm against audience",
            "Flag any row where output and audience point to different owners as Shared",
          ],
          outputSample:
            "Row 4: 'Write a comparison one-pager for reps facing our #2 competitor in enterprise deals'\n  Output: comparison one-pager -> matches 'battlecards' in PMM output column\n  Audience: enterprise reps (internal, specific) -> matches PMM audience column\n  Owner: Product Marketing",
          healthy:
            "14 of 18 rows resolve cleanly to a single owner using output + audience alone.",
          unhealthy:
            "Tagging every customer-facing document as 'Marketing' regardless of whether it's an ad or a sales battlecard, because both involve writing.",
          interpret:
            "Output type is a faster filter than goal, a battlecard is never a demand-gen asset even when the underlying research also feeds a blog post.",
          soWhat: [
            {
              symptom: "PMM-owned tasks keep slipping behind paid-ads deadlines on a shared board",
              action: "Split the board into two swim lanes by the Owner column before the next sprint planning",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-shared-flags",
          concept: "Distinguishing demand generation from positioning and enablement work",
          lessonAnchor: "what-product-marketing-does",
          theoryRecap:
            "The lesson lists PMM's core surface area as positioning, messaging, launch strategy, sales enablement, competitive intelligence, customer research, and onboarding, explicitly separate from demand generation and paid ads.",
          question:
            "3 rows on the board involve customer interviews: one is 'quarterly NPS survey analysis,' one is 'win/loss interviews for Q3 launch,' one is 'interview 5 users for a case-study blog post.' Which is the odd one out?",
          toolName: "Google Sheets",
          where: "Same sprint-board-export.csv, Owner column.",
          procedure: [
            "Re-read the 3 interview-tagged rows against the lesson's 'customer research' bullet vs. 'content marketing' bullet",
            "Mark 'win/loss interviews for Q3 launch' as Product Marketing (feeds positioning and launch strategy directly)",
            "Mark 'interview 5 users for a case-study blog post' as General Marketing (feeds a content asset, not positioning)",
            "Mark 'quarterly NPS survey analysis' as Shared and note who consumes the output first",
          ],
          outputSample:
            "SHARED (1 row)\n  quarterly NPS survey analysis -> PMM reads it for positioning drift, Content reads it for testimonial mining",
          healthy: "Only genuinely dual-purpose research gets tagged Shared, not every task that mentions 'customer.'",
          unhealthy: "Tagging all customer-interview tasks as Shared because 'research' sounds cross-functional.",
          interpret: "The test is who acts on the output first, not who touches the raw data.",
          soWhat: [
            {
              symptom: "Every research task on the board is marked Shared and nobody owns follow-up",
              action: "Require a single named first-owner on every Shared row before the sprint starts",
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
            role: "Sort and tag the 18-row sprint board by owner",
            why: "Free, no account friction, easy to share the tagged board back with the team",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An 18-row sprint board with an Owner column filled in (General Marketing, Product Marketing, or Shared), plus a 3-bullet note on the most commonly misrouted tasks.",
      sampleOutput:
        "Warby Parker Q3 sprint board (excerpt)\n\nGENERAL MARKETING\n  1. Instagram ad set for new frame colorway\n  2. Weekly email nurture for cart abandoners\n\nPRODUCT MARKETING\n  3. Battlecard: Zenni price-comparison objection handling\n  4. Home Try-On launch messaging for the sales-assist team\n\nSHARED\n  5. Quarterly NPS analysis -> PMM reads first for positioning drift",
      successCriteria: [
        "Correctly separates output-type signals from goal signals when a task is ambiguous",
        "Flags the 3 most commonly misrouted tasks with a one-line reason each",
      ],
      portfolioReady: true,
    },
    {
      id: "pmm-vs-marketing-positioning-statement-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Draft a One-Page Positioning Statement Using the PMM Playbook",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given real facts about a product launch, use the lesson's 'Define positioning' and 'Craft messaging' stages to draft a one-page internal positioning statement with a two-audience message hierarchy.",
      companyId: "duolingo",
      scenario:
        "You're the PMM assigned to Duolingo Max at launch. Leadership wants a one-page positioning doc before any sales deck or landing page gets written, per the lesson's five-step framework.",
      brief:
        "Answer the four positioning questions the lesson defines (for whom, against what alternatives, what unique benefit, why believe us), then split messaging for two distinct audiences.",
      mode: "build",
      conceptsCovered: [
        "Answering the four positioning questions before writing any external copy",
        "Building a message hierarchy for two different audiences from one positioning doc",
      ],
      steps: [
        {
          stepId: "step-1-positioning-questions",
          concept: "Answering the four positioning questions before writing any external copy",
          lessonAnchor: "how-it-works-the-pmm-playbook",
          theoryRecap:
            "The lesson's Stage 2 defines positioning as an internal document answering: for whom, against what alternatives, does this product deliver what unique benefit, and why should they believe us.",
          question:
            "Duolingo Max costs roughly 2x the standard Super tier and adds GPT-4-powered Roleplay and Explain My Answer. Who is 'for whom' here: every Duolingo user, or a specific segment?",
          toolName: "Google Docs",
          where: "New doc, four labeled sections matching the positioning questions.",
          procedure: [
            "Write 'For whom' as a specific segment, not 'all learners' (e.g. learners stuck at a conversational plateau after finishing the core course)",
            "Write 'Against what alternatives' as the real competing choice (staying on Super, or hiring a human tutor), not a vague 'other apps'",
            "Write 'Unique benefit' as the one thing only Max delivers (a judgment-free AI conversation partner available anytime)",
            "Write 'Why believe us' as a concrete proof point (GPT-4-powered, built on Duolingo's existing course content)",
          ],
          outputSample:
            "FOR WHOM: Learners who finished the core course but freeze up in real conversation\nAGAINST: Staying on Super (no conversation practice) or a $25/hr human tutor\nUNIQUE BENEFIT: Unlimited, judgment-free AI conversation practice, any time\nWHY BELIEVE: Built on GPT-4 and Duolingo's own course content, not a generic chatbot",
          healthy:
            "Each answer is one specific sentence a rep could repeat verbatim in a sales call.",
          unhealthy:
            "Answers that read like ad copy ('the best way to learn a language') instead of a strategic filter.",
          interpret:
            "A positioning doc that could describe three different competitors interchangeably has not actually answered the questions.",
          soWhat: [
            {
              symptom: "The draft positioning doc reads like a tagline, not a strategic filter",
              action: "Rewrite 'unique benefit' until a competitor's product genuinely could not claim the same sentence",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-message-hierarchy",
          concept: "Building a message hierarchy for two different audiences from one positioning doc",
          lessonAnchor: "how-it-works-the-pmm-playbook",
          theoryRecap:
            "The lesson's Stage 3 explains that one positioning doc must translate into different messages for different audiences and channels, e.g. a technical message for one buyer and a business-outcome message for another.",
          question:
            "This launch has two real audiences: existing free-tier users deciding whether to upgrade, and app-store browsers who have never opened Duolingo. What changes between the two messages?",
          toolName: "Google Docs",
          where: "Same doc, new section: Message Hierarchy.",
          procedure: [
            "Write a headline for existing free-tier users that assumes product familiarity (e.g. leads with the new Roleplay feature by name)",
            "Write a headline for app-store browsers that assumes zero familiarity (e.g. leads with the outcome, not the feature name)",
            "Confirm both headlines still trace back to the same 'unique benefit' answer from Step 1",
          ],
          outputSample:
            "EXISTING USERS: 'New: Practice real conversations with Roleplay, powered by GPT-4'\nNEW USERS: 'Finally have a real conversation in a new language, any time, judgment-free'",
          healthy: "Both headlines sell the same underlying benefit through a different door.",
          unhealthy: "The two headlines describe two different products because they were written independently.",
          interpret: "A message hierarchy fans out from one positioning doc; it does not start from a blank page per audience.",
          soWhat: [
            {
              symptom: "Marketing and lifecycle email are pitching Max with contradictory value props",
              action: "Trace both headlines back to the single 'unique benefit' line and rewrite the one that drifted",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Draft the one-page positioning statement and message hierarchy",
            why: "Free, easy to comment and share across Product, Sales, and Marketing for review",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page positioning statement (four questions answered) plus a two-audience message hierarchy that traces back to the same unique benefit.",
      sampleOutput:
        "Snowflake Cortex launch, internal positioning doc (excerpt)\n\nFOR WHOM: Data teams already on Snowflake who are building AI features in a separate stack\nAGAINST: Standing up a parallel vector database and pipeline\nUNIQUE BENEFIT: Run AI directly on governed data, with no data movement\nWHY BELIEVE: Native to the platform teams already trust with production data",
      successCriteria: [
        "All four positioning questions are answered with specific, falsifiable sentences",
        "The two audience headlines trace back to the same unique-benefit answer",
      ],
      portfolioReady: true,
    },
  ],
  "competitive-intel": [
    {
      id: "competitive-intel-battlecard-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Stale Battlecard: Auditing a Competitor Brief Against Fresh Signals",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given an 8-month-old one-page battlecard and 6 fresh competitive signals (a pricing change, 2 G2 review themes, a job-posting cluster, a press release, a funding announcement), audit which sections are stale and rewrite the 'how we win' section.",
      companyId: "snowflake",
      scenario:
        "You're the PMM at Snowflake covering a data-warehousing competitor. Sales keeps citing an 8-month-old battlecard in live deals, and two reps just lost objection-handling on a pricing point the competitor changed months ago.",
      brief:
        "Tag each new signal by type and confidence per the lesson's Stage 2 framework, then decide which battlecard sections it invalidates.",
      mode: "diagnostic",
      conceptsCovered: [
        "Tagging signals by type and confidence before acting on them",
        "Routing insight to the moment it matters most in a live deal",
      ],
      steps: [
        {
          stepId: "step-1-signal-tagging",
          concept: "Tagging signals by type and confidence before acting on them",
          lessonAnchor: "stage-2-processing",
          theoryRecap:
            "The lesson's Stage 2 requires tagging each raw signal with competitor name, signal type (pricing, product, hiring, messaging, partnership), confidence level (confirmed vs. inferred), and date before it can be acted on.",
          question:
            "One signal is 'a Reddit thread claims the competitor is raising prices next quarter.' What confidence tag does that get, and does it belong in the battlecard yet?",
          toolName: "Google Sheets",
          where: "Import fresh-signals.csv, add Type and Confidence columns.",
          procedure: [
            "Import fresh-signals.csv (6 rows: signal description, source, date)",
            "Tag each row's Type (pricing, product, hiring, messaging, partnership)",
            "Tag each row's Confidence as confirmed (verified on the competitor's own site or filing) or inferred (secondhand, e.g. a forum post)",
            "Exclude any inferred-confidence row from the battlecard rewrite, flag it for monitoring only",
          ],
          outputSample:
            "Row 3: 'Reddit thread claims competitor raising prices next quarter'\n  Type: pricing\n  Confidence: inferred (unverified secondhand claim)\n  Action: monitor only, do not update battlecard yet",
          healthy: "The battlecard only changes on confirmed signals; inferred signals go to a watch list.",
          unhealthy: "Rewriting a battlecard's pricing objection-handling off a single unverified forum post.",
          interpret: "Confidence tagging is what keeps a battlecard from thrashing every time a rumor surfaces.",
          soWhat: [
            {
              symptom: "The battlecard has been rewritten 4 times this month on conflicting rumors",
              action: "Require confirmed-tier confidence before any battlecard section changes",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-section-rewrite",
          concept: "Routing insight to the moment it matters most in a live deal",
          lessonAnchor: "stage-4-activation",
          theoryRecap:
            "The lesson's Stage 4 explains that a battlecard's value comes from timing: delivering the right insight to a rep within minutes of a competitive mention, not from having the most exhaustive document.",
          question:
            "Of the 4 confirmed signals from Step 1, which one directly changes the 'how we win' section reps read during a live objection, versus which one only updates background context?",
          toolName: "Google Sheets",
          where: "Same sheet, new column: Battlecard Section.",
          procedure: [
            "For each confirmed signal, name the exact battlecard section it changes (Positioning, Strengths, Weaknesses, Objections, How We Win)",
            "Rewrite the 'How We Win' section using only the confirmed signals that map to it",
            "Leave background sections (company overview, funding) unchanged if no confirmed signal touches them",
          ],
          outputSample:
            "Confirmed signal: 'Competitor removed free tier from pricing page, effective this month'\n  Battlecard Section: Objections + How We Win\n  Rewrite: Add counter-move 'Their free tier is gone as of [date] -- lead with our still-free starter plan'",
          healthy: "The rewritten section is one that a rep would actually open mid-call, not a paragraph nobody reads.",
          unhealthy: "A 12-paragraph rewrite that buries the one sentence a rep needs during an objection.",
          interpret: "Activation means the section a rep opens under time pressure gets the update first.",
          soWhat: [
            {
              symptom: "Reps say the battlecard is 'too long to use on a call'",
              action: "Cut the How We Win section to 3 bullets max, move everything else to an appendix",
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
            role: "Tag fresh signals by type and confidence before touching the battlecard",
            why: "Free, fast to filter and sort a small signal set",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Rewrite the battlecard's How We Win section",
            why: "Free, easy to track version history on a living document",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A tagged 6-row signal log (type, confidence, action) plus a rewritten 3-bullet 'How We Win' battlecard section using only confirmed signals.",
      sampleOutput:
        "Lenskart competitor battlecard, How We Win (rewritten excerpt)\n\n1. Their in-store try-on wait time averages 12 min per G2 reviews (Aug 2026) -- lead with our 15-min home try-on delivery\n2. They dropped their student discount last quarter -- we still offer 20% off with valid ID\n3. Hiring 4 'AR try-on engineers' since June -- expect a virtual try-on launch within 2 quarters, do not promise this feature as our exclusive",
      successCriteria: [
        "Excludes inferred-confidence signals from the battlecard rewrite",
        "Rewritten How We Win section stays to 3 bullets a rep could use live on a call",
      ],
      portfolioReady: true,
    },
    {
      id: "competitive-intel-battlecard-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build a Battlecard From a Raw Competitive Signal Dataset",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a raw 25-row signal dataset (pricing page snapshots, G2 review excerpts, job postings, a press release) for a named competitor, run it through the lesson's 4-stage CI system to produce a complete one-page battlecard.",
      companyId: "warby-parker",
      scenario:
        "You're the PMM at Warby Parker standing up a CI program for a direct online eyewear competitor. Sales has never had a battlecard for this rival and is currently improvising answers on live calls.",
      brief:
        "Move the raw dataset through Collection, Analysis, and Activation exactly as the lesson's stages define them, ending in a battlecard reps can open during a call.",
      mode: "build",
      conceptsCovered: [
        "Sorting raw signals into the four collection source categories",
        "Answering what changed, why, and what it means during analysis",
        "Structuring a battlecard for the moment a rep opens it mid-call",
      ],
      steps: [
        {
          stepId: "step-1-collection-sort",
          concept: "Sorting raw signals into the four collection source categories",
          lessonAnchor: "stage-1-collection",
          theoryRecap:
            "The lesson's Stage 1 groups raw signals into primary sources (win/loss interviews), secondary digital sources (pricing pages, job boards, filings), community sources (G2, Reddit), and signal sources (job postings, conference abstracts).",
          question:
            "The dataset has 6 G2 review excerpts and 4 job postings mixed together in one column. Which source category does each belong to, and does that change how much you trust it?",
          toolName: "Google Sheets",
          where: "Import raw-signals-25.csv, add a Source Category column.",
          procedure: [
            "Import raw-signals-25.csv (25 rows: raw text, source URL, date)",
            "Tag each row's source category: primary, secondary digital, community, or signal",
            "Sort the sheet by category to group all 6 G2 excerpts and 4 job postings together",
          ],
          outputSample:
            "Category counts after sort:\n  Secondary digital: 9 rows (pricing pages, press releases)\n  Community: 6 rows (G2 excerpts)\n  Signal: 4 rows (job postings)\n  Primary: 6 rows (win/loss interview notes)",
          healthy: "Every row gets exactly one category and the counts are visible before analysis starts.",
          unhealthy: "Treating all 25 rows as equally weighted evidence regardless of source type.",
          interpret: "Source category previews how much weight a signal deserves before you've even read it closely.",
          soWhat: [
            {
              symptom: "The battlecard cites a Reddit comment with the same confidence as a filed press release",
              action: "Add the source category next to every citation in the battlecard draft",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-analysis",
          concept: "Answering what changed, why, and what it means during analysis",
          lessonAnchor: "stage-3-analysis",
          theoryRecap:
            "The lesson's Stage 3 requires analysis to answer three questions in order: what changed, why did it change, and what does it mean for our positioning, pricing, or roadmap.",
          question:
            "The 4 job postings are all for 'AR/3D Engineer' roles posted in the same month. What changed, and what's the most defensible 'why' given only this dataset?",
          toolName: "Google Sheets",
          where: "Same sheet, new tab: Analysis.",
          procedure: [
            "For the job-posting cluster, write one line each for what changed, why (most likely explanation), and what it means for the roadmap",
            "Cross-reference the G2 review theme rows against the job-posting finding to see if they support or contradict it",
            "Flag any conclusion that rests on a single row as low-confidence",
          ],
          outputSample:
            "WHAT CHANGED: 4 AR/3D engineering roles posted within one month (signal source)\nWHY: Likely building a virtual try-on feature, not just headcount growth (matches a G2 review theme: 'wish I could try glasses on virtually')\nMEANS: Expect a virtual try-on launch within 1-2 quarters; do not position virtual try-on as our exclusive advantage in new battlecards",
          healthy: "The 'why' cites at least two independent rows, not one job posting alone.",
          unhealthy: "Jumping straight from 'what changed' to 'what it means,' skipping the why entirely.",
          interpret: "Skipping the why step is how a battlecard ends up confidently wrong about a competitor's intent.",
          soWhat: [
            {
              symptom: "Two analysts read the same 4 job postings and reach opposite conclusions",
              action: "Require every why to cite a second, independent signal row before it ships",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-battlecard-activation",
          concept: "Structuring a battlecard for the moment a rep opens it mid-call",
          lessonAnchor: "stage-4-activation",
          theoryRecap:
            "The lesson's Stage 4 defines a battlecard as a one-page document covering positioning, strengths, weaknesses, common objections, and recommended counter-moves, built to be opened and used inside a live deal.",
          question:
            "Given the Step 2 analysis and the 6 win/loss interview rows, which single objection should sit at the top of the battlecard's 'Objections' section?",
          toolName: "Google Docs",
          where: "New one-page doc: five labeled sections matching the lesson's battlecard structure.",
          procedure: [
            "Count how often each objection theme appears across the 6 win/loss rows, rank the most frequent one first",
            "Write a one-line counter-move for the top 3 objections, each under 20 words",
            "Add the Step 2 job-posting finding as a single 'watch for' line, not a full paragraph",
          ],
          outputSample:
            "OBJECTIONS (ranked by win/loss frequency)\n1. 'Their frames are $20 cheaper' (4 of 6 losses) -> Counter: Our Buy-a-Pair-Give-a-Pair story plus free adjustments for life\n2. 'They have more store locations' (2 of 6 losses) -> Counter: Free home try-on removes the need for a store visit\n\nWATCH FOR: Virtual try-on launch likely within 1-2 quarters (see Analysis)",
          healthy: "The top objection on the card matches the most frequent reason reps actually lose deals.",
          unhealthy: "Leading the battlecard with the competitor's weakest, least-cited objection because it's the easiest one to write a counter for.",
          interpret: "A battlecard's ranking order is itself a claim about what costs the most deals, rank it from evidence, not from what's easy to answer.",
          soWhat: [
            {
              symptom: "Reps say the battlecard doesn't address the objection they actually hear most",
              action: "Re-rank the Objections section against fresh win/loss interview counts every quarter",
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
            role: "Sort raw signals by source category and run the analysis pass",
            why: "Free, handles a 25-row dataset with filtering and a second analysis tab",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Write the final one-page battlecard",
            why: "Free, shareable, easy for sales enablement to pull into a CRM-linked doc",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A tagged 25-row signal sheet, a written analysis (what/why/means) for the highest-signal finding, and a complete one-page battlecard with a ranked Objections section.",
      sampleOutput:
        "Lenskart competitor battlecard (excerpt)\n\nPOSITIONING: Positions as the budget online-only option, no physical stores\nSTRENGTHS: Lower base price, fast shipping\nWEAKNESSES: No try-before-you-buy, single-item returns only\nOBJECTIONS\n1. 'They're cheaper' (5 of 7 losses) -> Counter: our home try-on removes the fit risk that makes cheap glasses a gamble\nWATCH FOR: 3 supply-chain roles posted this month, possible in-house manufacturing push",
      successCriteria: [
        "Objections section is ranked by actual win/loss frequency, not by ease of writing a counter",
        "The job-posting-based finding cites at least one independent corroborating signal in the analysis",
      ],
      portfolioReady: true,
    },
  ],

  "battlecard-design-adoption": [
    {
      id: "battlecard-teardown-casper-sleep",
      tier: "mini",
      archetype: "teardown",
      title: "Find the Defects: Tearing Down a Live-Call Battlecard",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a specimen battlecard a Casper rep flagged after a lost deal, identify which structural and content defects made it unusable under call pressure, and which apparent flaws are actually fine.",
      companyId: "casper-sleep",
      scenario:
        "You're a product marketer at Casper reviewing a battlecard a rep pulled up mid-call against a mattress-in-a-box competitor, then lost the deal on pricing the prospect corrected in real time.",
      brief:
        "Read the specimen battlecard against the lesson's 'what gets read' structure and mark every real defect, not every stylistic choice.",
      mode: "teardown",
      conceptsCovered: [
        "Landmine question placement",
        "Talk tracks written as dialogue, not description",
        "Visible last-updated date for pricing trust",
      ],
      teardownItems: [
        {
          itemId: "casper-battlecard-specimen-1",
          specimenSource: "synthetic-realistic",
          specimen:
            "COMPETITOR X BATTLECARD (last edited: 14 months ago)\n\n" +
            "OVERVIEW: Competitor X is a direct-to-consumer mattress brand founded in 2018, backed by $40M in venture funding, competing primarily in the mid-market segment.\n\n" +
            "FEATURE COMPARISON:\n" +
            "  - 100-night trial (ours: 100-night trial)\n" +
            "  - Free shipping (ours: free shipping)\n" +
            "  - Foam density: 3.5 lb (ours: 4.0 lb)\n" +
            "  - Warranty: 10 years (ours: 10 years)\n\n" +
            "PRICING: Queen size starts at $895 (verified at launch, 2023 pricing page)\n\n" +
            "TALKING POINTS:\n" +
            "  - Better foam density than Competitor X\n" +
            "  - Faster delivery than Competitor X\n" +
            "  - Stronger warranty terms\n\n" +
            "CUSTOMER QUOTE: 'Great mattress, would recommend.' — verified buyer",
          prompt:
            "This is the full battlecard as it exists in the shared drive today. List every defect that would make a rep abandon this card mid-call, using the lesson's structure and staleness/trust framework.",
          answerKey: [
            {
              defect: "No landmine question anywhere on the card",
              severity: "critical",
              whyItMatters:
                "Without one line the rep can ask to surface the competitor's known weakness first, the rep has no way to control the conversation before the prospect brings up the competitor's strengths.",
              lessonRef: "The Battlecard Structure Reps Actually Use",
              owner: "you",
            },
            {
              defect: "Pricing is dated 2023 and not visibly marked with a last-updated date on the card itself",
              severity: "critical",
              whyItMatters:
                "The lesson calls stale pricing the fastest way to lose a rep's trust in a card permanently after one bad call; the prospect corrected the rep live because this number was over a year old.",
              lessonRef: "Why Most Battlecards Get Ignored",
              owner: "you",
            },
            {
              defect: "Talking points are description fragments ('Better foam density'), not talk tracks a rep can say out loud",
              severity: "moderate",
              whyItMatters:
                "A rep cannot repeat 'better foam density' to a prospect as a sentence; it needs to be dialogue like a real objection response, per the lesson's Callout on writing talk tracks as dialogue.",
              lessonRef: "The Battlecard Structure Reps Actually Use",
              owner: "you",
            },
            {
              defect: "No named proof point or reference customer who actually switched from this competitor",
              severity: "moderate",
              whyItMatters:
                "A generic 'great mattress, would recommend' quote with no name or switch story does not function as the proof point the structure calls for.",
              lessonRef: "The Battlecard Structure Reps Actually Use",
              owner: "you",
            },
          ],
          distractors: [
            "The card is exactly one page long",
            "The feature comparison table uses short bullet fragments instead of full sentences",
            "The overview paragraph mentions the competitor's funding and founding year",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Mark up the specimen battlecard inline with comments",
            why: "Free commenting and suggestion mode makes defect-flagging fast without extra tooling",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A defect list scoring the specimen battlecard against the lesson's structure, separating real defects from stylistic non-issues, with severity and fix owner for each.",
      sampleOutput:
        "Squarespace Competitor Y battlecard teardown (excerpt)\n\nCRITICAL: No landmine question, rep has nothing to open the call with\nCRITICAL: Pricing table dated 11 months ago, no visible last-updated stamp\nMODERATE: 'More templates than Competitor Y' is a fragment, not a sentence a rep can say\nNOT A DEFECT: Card length is one page, that's correct per the structure",
      successCriteria: [
        "Flags the missing landmine question as critical",
        "Flags the stale, unstamped pricing as critical",
        "Correctly identifies description fragments as a talk-track defect, not a formatting defect",
        "Does not flag the one-page length or bullet-style feature table as defects",
      ],
      portfolioReady: true,
    },
    {
      id: "battlecard-build-allbirds-landmine",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build the Card: Landmine Question and Talk Track for a Live Deal",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a messy win-loss call transcript, draft the top-of-card elements a rep needs first: a landmine question, the competitor's one-sentence pitch, and one full talk track.",
      companyId: "allbirds",
      scenario:
        "Allbirds keeps losing footwear deals to a fast-fashion sneaker brand undercutting on price. You have one win-loss call transcript and one quarter until the next sales kickoff.",
      brief:
        "Turn the transcript into the top of a usable battlecard: the landmine question, the competitor's pitch in one sentence, and a talk track for the price objection, then set a last-updated date policy.",
      mode: "build",
      conceptsCovered: [
        "Landmine question that surfaces a known weakness before the competitor can hide it",
        "Visible last-updated date builds rep trust",
      ],
      steps: [
        {
          stepId: "step-1-landmine-question",
          concept: "Landmine question that surfaces a known weakness before the competitor can hide it",
          lessonAnchor: "the-battlecard-structure-reps-actually-use",
          theoryRecap:
            "The lesson's top-of-card element is one line the rep asks the prospect that surfaces the competitor's known weakness before the competitor can hide it.",
          question:
            "The transcript shows the prospect discovered the competitor's shoes wear out within 4 months of daily use, after already signing. What question gets that fact on the table during the call, not after signing?",
          toolName: "Google Docs",
          where: "Draft the card in a new Google Doc alongside the transcript",
          procedure: [
            "Read the transcript's loss reason section for the specific, named weakness",
            "Write one question the rep can ask early in the call that gets the prospect to state that weakness themselves",
            "Test it out loud: if it takes more than one breath to ask, cut it down",
          ],
          outputSample:
            "Landmine question: \"How many pairs have you gone through with your current pair in the last year?\"",
          healthy:
            "The rep asks the question in the first two minutes and the prospect volunteers the wear-out timeline unprompted.",
          unhealthy:
            "The question is really a feature pitch in disguise ('Did you know our shoes last longer?'), which reads as a sales line instead of genuine curiosity.",
          interpret:
            "A landmine question sounds like curiosity, not a pitch, and the prospect supplies the damaging fact themselves.",
          soWhat: [
            {
              symptom: "The question reads like a rehearsed sales line",
              action: "Rewrite it as a genuine, open question with no product mention",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-last-updated-policy",
          concept: "Visible last-updated date builds rep trust",
          lessonAnchor: "adoption-tactics-that-actually-move-usage",
          theoryRecap:
            "A visible last-updated date signals freshness to reps and creates social pressure on the card owner to keep it current.",
          question:
            "This card will ship with a price-comparison table that changes seasonally. Where does the date go, and what triggers an update?",
          toolName: "Google Docs",
          where: "Add a header row to the same battlecard doc",
          procedure: [
            "Add a 'Last verified: [date]' line directly above the pricing table, not buried in a footer",
            "Set a trigger: any confirmed competitor price change updates the date within 48 hours",
            "Assign one named owner for the update, not 'the team'",
          ],
          outputSample: "Last verified: Aug 2026 · Owner: PMM lead · Trigger: confirmed price change",
          healthy: "Reps see the date before they see the price and trust the number without double-checking.",
          unhealthy: "The date sits in a footer nobody scrolls to, so it exists but does not build trust.",
          interpret:
            "A date only builds trust if it's positioned where the rep's eyes land right before the number it's verifying.",
          soWhat: [
            {
              symptom: "The date is present but buried at the bottom of the doc",
              action: "Move it directly above the pricing table",
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
            role: "Draft the battlecard top section",
            why: "Free, fast commenting and easy to hand off to a designer later",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Canva",
            role: "Lay out the finished card as a scannable one-pager",
            why: "Templated one-page layouts speed up the design pass once the words are locked",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A top-of-card draft with a landmine question, the competitor's one-sentence pitch, one full price-objection talk track, and a last-updated date policy.",
      sampleOutput:
        "Squarespace vs. Competitor Z, card top section\n\nLandmine question: \"How long did your last free-tier site actually stay live before you hit a paywall?\"\nTheir pitch: \"Build a website for free, forever.\"\nTalk track: \"Free sounds great until you hit the 3-page limit in week two, ours gives you the full builder from day one, no surprise wall.\"\nLast verified: Aug 2026 · Owner: PMM lead",
      successCriteria: [
        "Landmine question reads as genuine curiosity, not a disguised pitch",
        "Talk track is written as sentences a rep would actually say, not fragments",
        "Last-updated date is positioned directly above the data it verifies",
      ],
      portfolioReady: true,
    },
  ],
  "sales-enablement": [
    {
      id: "enablement-audit-squarespace-kit",
      tier: "mini",
      archetype: "audit",
      title: "Audit the Kit: Does This Bundle Survive Discover-Create-Deliver-Measure?",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a real enablement content bundle built without rep interviews, score it against the lesson's four-phase framework and identify which phase was skipped.",
      companyId: "squarespace",
      scenario:
        "Squarespace's PMM team inherited an enablement kit a contractor built last quarter, based on internal strategy docs, with no interviews or call reviews. You're checking it before it ships to the field.",
      brief:
        "Score the kit against Discover, Create, Deliver, and Measure, name the skipped phase, and recommend the fix before launch.",
      mode: "diagnostic",
      conceptsCovered: [
        "Discovery before creation prevents assumption-built content",
        "Delivery method determines whether content gets used",
      ],
      steps: [
        {
          stepId: "step-1-discover-check",
          concept: "Discovery before creation prevents assumption-built content",
          lessonAnchor: "phase-1-discover",
          theoryRecap:
            "The Discover phase means listening to real calls, interviewing winning and losing reps, and reviewing lost-deal analysis before building anything.",
          question:
            "The kit's objection-handling guide lists 8 objections. None cite a call recording or rep interview. What does that tell you about which phase was skipped?",
          toolName: "Google Sheets",
          where: "Log each objection in a tracking sheet with a source column",
          procedure: [
            "List all 8 objections from the guide in a spreadsheet",
            "Add a 'source' column and mark each as 'call recording,' 'rep interview,' or 'assumed'",
            "Count how many fall into 'assumed'",
          ],
          outputSample: "8 objections logged: 8 marked 'assumed', 0 marked 'call recording' or 'rep interview'",
          healthy: "Most objections trace back to a call recording or a named rep interview.",
          unhealthy: "Every objection traces back to internal strategy assumptions with no field source.",
          interpret:
            "A guide built entirely from assumptions is the exact failure mode the lesson's Discover phase exists to prevent.",
          soWhat: [
            {
              symptom: "All objections are marked 'assumed'",
              action: "Pull 5 recent lost-deal call recordings and rebuild the list from what reps actually heard",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-delivery-check",
          concept: "Delivery method determines whether content gets used",
          lessonAnchor: "phase-3-deliver",
          theoryRecap:
            "Content dropped as a Slack link is not enablement; delivery requires a live walkthrough or role-play to drive adoption.",
          question:
            "The kit's rollout plan is a single Slack message with a PDF attachment. What's missing before this counts as delivered?",
          toolName: "Google Sheets",
          where: "Same tracking sheet, add a delivery-method column",
          procedure: [
            "Check the rollout plan for a live session, role-play, or recorded walkthrough",
            "Mark 'delivered' only if at least one of those three exists",
            "Flag the gap for the enablement lead",
          ],
          outputSample: "Rollout plan: Slack message only. Live session: none. Role-play: none. Delivered: NO",
          healthy: "A live meeting or role-play session is scheduled alongside the content drop.",
          unhealthy: "A Slack link is the entire rollout plan.",
          interpret: "A link is a distribution channel, not a delivery method that drives adoption.",
          soWhat: [
            {
              symptom: "Rollout plan is a single Slack message",
              action: "Book a 20-minute live walkthrough and one role-play session before launch",
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
            role: "Track each objection and delivery step against its source",
            why: "Free, fast to set up a two-column audit sheet",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A scored audit of the enablement kit against all four phases, naming the skipped phase and the specific fix needed before launch.",
      sampleOutput:
        "Casper launch kit audit (excerpt)\n\nDiscover: PASS, 6 of 8 objections cite call recordings\nCreate: PASS, battlecard and deck both exist\nDeliver: FAIL, rollout plan is a shared-drive link only\nMeasure: FAIL, no usage tracking configured\n\nFix: add a live launch session and configure content-platform usage tracking before shipping.",
      successCriteria: [
        "Correctly identifies which of the four phases has no supporting evidence",
        "Distinguishes 'content exists' (Create) from 'content was delivered' (Deliver)",
        "Recommends a specific, actionable fix, not a general 'improve enablement' note",
      ],
      portfolioReady: true,
    },
    {
      id: "enablement-build-casper-sleep-launch-kit",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build the Launch Kit: Battlecard, Deck Outline, and Objection Guide",
      timeEstimate: "70 minutes",
      timeMinutes: 70,
      objective:
        "Given a new-product launch brief two weeks before sales kickoff, build the three core deliverables a rep needs on day one: a one-page battlecard, a sales deck outline, and a 5-objection handling guide.",
      companyId: "casper-sleep",
      scenario:
        "Casper is launching a new hybrid mattress line and reps have zero materials two weeks before the sales kickoff. Lost-deal notes from the current line are your only field input.",
      brief:
        "Produce the minimum viable enablement kit: one battlecard against the top competitor, one deck outline following the problem-solution-proof-next-step arc, and five objections with talk tracks, all traceable to real lost-deal notes.",
      mode: "build",
      conceptsCovered: [
        "Building assets in order of impact, starting with what unblocks the most deals",
        "Sales deck follows a consistent problem-solution-proof-next-step arc",
        "Objection-handling guides built from call recordings, not guesswork",
        "Tracking content usage rate after launch",
      ],
      steps: [
        {
          stepId: "step-1-prioritize-assets",
          concept: "Building assets in order of impact, starting with what unblocks the most deals",
          lessonAnchor: "phase-2-create",
          theoryRecap:
            "The Create phase builds assets in order of impact, starting with what unblocks the most deals, not everything at once.",
          question:
            "With two weeks and one PMM, which of battlecard, deck, objection guide, and onboarding curriculum ships first, and why?",
          toolName: "Google Docs",
          where: "Draft a one-paragraph prioritization note before building anything",
          procedure: [
            "List all four possible assets from the lesson's Create phase",
            "Rank them by how many active deals each would unblock this week",
            "Commit to building only the top three in the two-week window",
          ],
          outputSample:
            "Priority order: 1) Battlecard (3 active competitive deals waiting), 2) Deck outline, 3) Objection guide, 4) Onboarding curriculum (deferred to next quarter)",
          healthy: "The onboarding curriculum, the longest build, gets explicitly deferred rather than started late and shipped incomplete.",
          unhealthy: "All four assets get started simultaneously and none ship complete by kickoff.",
          interpret: "Ranking by deals unblocked, not by build order convenience, is what keeps the kit shippable in two weeks.",
          soWhat: [
            {
              symptom: "All four assets are in progress with none finished",
              action: "Cut to the top three by active-deal impact and defer the rest explicitly",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-deck-arc",
          concept: "Sales deck follows a consistent problem-solution-proof-next-step arc",
          lessonAnchor: "sales-decks",
          theoryRecap:
            "The master sales deck follows a consistent arc: the buyer's problem, how the product solves it, proof it works, and the next step.",
          question:
            "The launch brief has a features list but no problem statement. What's the first slide's content before any feature appears?",
          toolName: "Google Docs",
          where: "Outline the deck as a bulleted slide list in the same doc",
          procedure: [
            "Write slide 1 as the buyer's problem, in the buyer's own words, no product mention",
            "Write slide 2 as the solution, tied directly back to the problem stated on slide 1",
            "Write slide 3 as proof (a named result or reference), slide 4 as the next step",
          ],
          outputSample:
            "Slide 1: \"Back pain from an old mattress is the #1 reason shoppers switch brands\"\nSlide 2: Hybrid line's zoned support solves exactly that complaint\nSlide 3: Reference customer result\nSlide 4: Trial offer as the next step",
          healthy: "Slide 1 contains zero product mentions and reads like a customer complaint.",
          unhealthy: "Slide 1 opens with a feature list disguised as a problem statement.",
          interpret: "If a competitor's rep could present your slide 1 with their own logo on it, it's not actually about the buyer's problem yet.",
          soWhat: [
            {
              symptom: "Slide 1 mentions the product name or a feature",
              action: "Rewrite it purely as the buyer's stated pain, sourced from lost-deal notes",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-objection-guide",
          concept: "Objection-handling guides built from call recordings, not guesswork",
          lessonAnchor: "objection-handling-guides",
          theoryRecap:
            "Objection-handling guides are built from call recordings and rep interviews, not guesswork from a conference room, and use conversational language.",
          question:
            "Lost-deal notes show 'too firm' as the top objection on the old mattress line. Does that objection carry over to the new hybrid line as-is, or does it need re-sourcing?",
          toolName: "Google Sheets",
          where: "Build the 5-objection table in a shared sheet",
          procedure: [
            "Check whether each old-line objection still applies to the new hybrid product's actual specs",
            "Drop or rewrite any objection the new product spec already resolves",
            "Write a conversational talk track for the 5 objections that still apply",
          ],
          outputSample:
            "Objection: \"Too firm for side sleepers\" — DROPPED, hybrid line adds a softer top layer that resolves this\nObjection: \"Price is higher than the old line\" — KEPT, talk track: \"It's $150 more, and it replaces two toppers most side-sleepers buy separately anyway.\"",
          healthy: "Objections tied to specs the new product has actually changed get dropped or rewritten, not copy-pasted.",
          unhealthy: "The old line's objection list gets copied over unchanged onto a product with different specs.",
          interpret: "An objection guide is only trustworthy if someone checked whether the product still has that objection.",
          soWhat: [
            {
              symptom: "An objection about a spec the new product no longer has is still on the list",
              action: "Cross-check every old objection against the new product's actual spec sheet before keeping it",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-usage-tracking",
          concept: "Tracking content usage rate after launch",
          lessonAnchor: "phase-4-measure",
          theoryRecap:
            "The Measure phase tracks content usage rate in the content platform 30 days after launch and compares win rates by asset usage.",
          question:
            "The kit ships in two weeks. What gets set up before launch day so usage can actually be measured on day 30?",
          toolName: "Google Sheets",
          where: "Set up a lightweight usage log before kickoff",
          procedure: [
            "Create a shared log where reps note which asset they used per competitive deal",
            "Set a calendar reminder for a 30-day usage-rate review",
            "Define in advance what 'used' means (opened vs. referenced on the call)",
          ],
          outputSample: "Usage log created · 30-day review scheduled for [date] · 'Used' defined as: referenced during the call, not just opened",
          healthy: "The tracking mechanism exists before launch day, so day-30 data is real instead of retroactively guessed.",
          unhealthy: "No tracking is set up and usage gets estimated from memory at the 30-day mark.",
          interpret: "Measurement infrastructure has to exist before the content ships, not get bolted on after adoption is already unclear.",
          soWhat: [
            {
              symptom: "No usage log exists a week before launch",
              action: "Set up the shared log and the 30-day review reminder now, before kickoff",
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
            role: "Draft the battlecard and deck outline",
            why: "Free, fast collaborative drafting for both assets",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Build the objection table and the usage-tracking log",
            why: "Free, easy to share with reps and update live",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Canva",
            role: "Design the final battlecard as a polished one-pager for the kickoff deck",
            why: "Templated layouts speed up the final design pass once content is locked",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paidUpgradeNote:
          "The free path (Docs + Sheets) produces a fully usable kit; Canva only speeds up the final visual polish.",
      },
      deliverable:
        "A launch-ready kit: one battlecard, one deck outline in the problem-solution-proof-next-step arc, a 5-objection guide with talk tracks, and a usage-tracking log set up before launch.",
      sampleOutput:
        "Allbirds new-line launch kit (excerpt)\n\nBattlecard: landmine question + 1 talk track vs. top competitor\nDeck: 4-slide arc, problem stated with zero product mentions on slide 1\nObjection guide: 5 objections re-sourced against new spec sheet, 1 dropped\nUsage log: shared sheet live, 30-day review set for Sept 2026",
      successCriteria: [
        "Battlecard, deck outline, and objection guide are all built and internally consistent with each other",
        "Deck slide 1 contains no product or feature mention",
        "At least one objection from the prior product line is explicitly dropped or rewritten based on the new spec sheet",
        "A usage-tracking mechanism exists before the stated launch date, not after",
      ],
      portfolioReady: true,
      stretch:
        "Record a 3-minute walkthrough video of the battlecard for reps who can't attend the live kickoff session, per the lesson's Deliver-phase guidance.",
    },
  ],

  "pricing-packaging": [
    {
      id: "pricing-packaging-value-metric-tier-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build a Value-Metric-Based Tier Structure",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a new product module and its customer usage data, choose a value metric and build a 3-tier pricing architecture with a clear upgrade trigger for each tier.",
      companyId: "mailchimp",
      scenario:
        "You're the product marketer at an email-marketing SaaS company launching 'Automation Studio,' a new workflow-builder module. Leadership wants a pricing recommendation before the module ships.",
      brief:
        "Given usage data for three customer segments, pick a value metric that scales with customer success, then design Starter/Pro/Enterprise tiers with genuine upgrade triggers, not artificial limits.",
      mode: "build",
      conceptsCovered: [
        "Choosing a value metric that scales with customer success",
        "Designing a three-tier architecture with upgrade triggers",
      ],
      steps: [
        {
          stepId: "step-1-value-metric-selection",
          concept: "Choosing a value metric that scales with customer success",
          lessonAnchor: "step-1-identify-your-value-metric",
          theoryRecap:
            "A value metric is the unit your customer's success scales with, and it is the ideal basis for pricing. Bad value metrics (storage, project count) don't correlate with the outcome the customer is buying.",
          question:
            "Automation Studio usage data shows: Segment A runs 40 workflows/month with 3 team members, Segment B runs 200 workflows/month with 3 team members, Segment C runs 40 workflows/month with 15 team members. Seats or workflows run, which value metric actually tracks value delivered?",
          toolName: "Google Sheets",
          where: "Log into Google Sheets, open a blank sheet, and list each segment's usage pattern in rows.",
          procedure: [
            "List the three segments with their workflow-run count and seat count in a Google Sheet",
            "For each segment, write one sentence describing what 'more value' looks like for that customer",
            "Circle the metric (seats or workflow runs) that increases in both sentences, not just one",
          ],
          outputSample:
            "Segment A: 40 runs, 3 seats -> value = automations working\nSegment B: 200 runs, 3 seats -> value = automations working (seats flat, runs 5x)\nSegment C: 40 runs, 15 seats -> value = team adoption, not automation depth\nDecision: workflow runs tracks the module's actual outcome; seats alone would undercharge Segment B and overcharge Segment C.",
          healthy:
            "The chosen metric increases for both Segment B (heavy automation, few seats) and any future heavy-usage account, meaning price scales with delivered value in both directions.",
          unhealthy:
            "Picking seats as the value metric would charge Segment C 5x more than Segment B despite Segment B extracting far more automation value, an inversion the tier structure would have to work around later.",
          interpret:
            "When a candidate value metric doesn't move for a customer who is clearly getting more value, it's the wrong metric no matter how easy it is to bill.",
          soWhat: [
            {
              symptom: "A heavy-usage, low-seat account is paying the same as a light-usage account with the same seat count",
              action: "Re-run the value-metric test on the current pricing model before the next renewal cycle",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-tier-architecture-design",
          concept: "Designing a three-tier architecture with upgrade triggers",
          lessonAnchor: "step-3-design-your-tier-architecture",
          theoryRecap:
            "Most B2B SaaS products converge on three tiers exploiting anchoring and the compromise effect. The starter tier must deliver genuine value; the trigger to upgrade must feel like natural growth, not a wall.",
          question:
            "Using workflow runs as the value metric, where do you set the Starter cap so it lets a real small team succeed, but still creates a natural upgrade trigger once they're getting value?",
          toolName: "Google Sheets",
          where: "In the same Google Sheet, add a new tab for the tier grid.",
          procedure: [
            "Create three rows: Starter, Pro, Enterprise",
            "Set a workflow-run cap for Starter that covers Segment A's 40 runs but not Segment B's 200",
            "Write the specific upgrade trigger for each tier boundary (e.g. 'hits run cap 2 months in a row')",
            "List one feature reserved for Enterprise only, and justify it as a genuine enterprise need (SSO, SLA, audit log), not an artificial limit",
          ],
          outputSample:
            "Starter: up to 50 runs/mo, 3 seats — trigger: 2 consecutive months over cap\nPro: up to 500 runs/mo, unlimited seats — trigger: needs SSO or audit log\nEnterprise: unlimited runs, SSO + audit log + SLA — custom pricing",
          healthy:
            "Segment A stays comfortably on Starter and Segment B naturally trips the Pro trigger within its first month, both without feeling penalized for normal usage.",
          unhealthy:
            "Setting the Starter cap at 30 runs would push Segment A into an upgrade before they've even seen the module deliver value, creating churn risk before adoption.",
          interpret:
            "A tier boundary set below the value a healthy small customer naturally generates functions as a wall, not a trigger, and reads as bait-and-switch.",
          soWhat: [
            {
              symptom: "New customers hit the tier cap in their first two weeks, before onboarding is even complete",
              action: "Raise the Starter cap or delay when the cap starts counting until after a 14-day onboarding window",
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
            role: "Build the tier grid and document the value-metric decision",
            why: "No account friction, easy to share with leadership for sign-off",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page pricing sheet: the chosen value metric with justification, a 3-tier grid (limits, price anchor, features), and the specific upgrade trigger for each tier boundary.",
      sampleOutput:
        "Chewy Autoship Business Tools, tier proposal (excerpt)\n\nValue metric: active pet profiles managed (not seats)\nStarter: up to 25 profiles, 2 seats — trigger: 2 months over cap\nPro: up to 250 profiles, unlimited seats — trigger: needs reorder automation\nEnterprise: unlimited profiles, SLA + dedicated rep — custom pricing",
      successCriteria: [
        "Value metric is justified against at least two customer segments' actual usage",
        "Each tier boundary has a named upgrade trigger, not just a number",
        "Enterprise gating is tied to a genuine enterprise need, not an arbitrary limit",
      ],
      portfolioReady: true,
    },
    {
      id: "pricing-packaging-tier-sheet-audit",
      tier: "core",
      archetype: "audit",
      title: "The Packaging Review: Auditing a Draft Pricing Sheet for the Six Common Mistakes",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a draft 5-tier pricing sheet for a B2B SaaS tool, apply the lesson's mistake framework to flag cost-plus pricing, feature-gating essentials, and a mismatched billing model.",
      companyId: "policybazaar",
      scenario:
        "You're the product marketer on PolicyBazaar's advisor-facing SaaS tool for independent insurance agents. A sales-led draft pricing sheet has landed in your inbox for review before it goes live.",
      brief:
        "The draft has 5 tiers, gates lead-assignment (a core workflow) behind the third tier, and bills flat-rate regardless of advisor book size. Audit it against the lesson's framework and flag every issue.",
      mode: "diagnostic",
      conceptsCovered: [
        "Diagnosing cost-plus vs value-based pricing",
        "Evaluating billing model fit against customer usage variance",
        "Diagnosing feature-gating of features customers need to succeed",
      ],
      steps: [
        {
          stepId: "step-1-cost-plus-audit",
          concept: "Diagnosing cost-plus vs value-based pricing",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Cost-plus pricing anchors price to internal cost, not customer value. If the product saves a customer far more than the price charged, most of the value goes uncaptured.",
          question:
            "The draft prices the tool at ₹2,000/month because that covers hosting and support cost with a margin. An advisor using it closes 3 extra policies/month worth ₹45,000 in commission. Is ₹2,000/month cost-plus or value-based?",
          toolName: "Google Docs",
          where: "Open the draft pricing sheet in Google Docs and add inline comments.",
          procedure: [
            "Find the sentence in the draft that explains how the price was set",
            "Compare the stated price to the estimated value delivered (commission uplift)",
            "Add a comment flagging the gap between price and value if it exceeds 10x",
          ],
          outputSample:
            "Draft note: 'Priced at ₹2,000/mo to cover server + support costs with 20% margin.'\nComment: Cost-plus. Advisor's own numbers show ~₹45,000/mo commission uplift — price captures under 5% of delivered value. Re-anchor to willingness-to-pay research, not internal cost.",
          healthy:
            "A price set from willingness-to-pay research or a fraction of measurable value delivered (e.g. 10-20% of the uplift).",
          unhealthy:
            "A price justified entirely by internal cost-plus-margin with no reference to what the advisor actually gains.",
          interpret:
            "Any pricing rationale that cites only internal cost, with no customer-value reference point, is a cost-plus red flag regardless of the dollar amount.",
          soWhat: [
            {
              symptom: "The pricing rationale doc never mentions customer outcomes, only internal costs",
              action: "Run a Van Westendorp survey with 10-15 existing advisors before finalizing the price",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-billing-model-audit",
          concept: "Evaluating billing model fit against customer usage variance",
          lessonAnchor: "step-5-choose-your-billing-model",
          theoryRecap:
            "Flat rate is simple but scales poorly with customer size. A billing model should match how much customer usage actually varies.",
          question:
            "Advisor book sizes range from 20 to 2,000 policies under management. The draft bills every advisor the same flat ₹2,000/month regardless of book size. What does flat billing do to a 20-policy advisor vs. a 2,000-policy advisor?",
          toolName: "Google Docs",
          where: "In the same Google Doc, add a comment next to the billing section.",
          procedure: [
            "Note the smallest and largest advisor book sizes from the draft's customer list",
            "Estimate whether the flat price feels fair to the smallest advisor and cheap to the largest",
            "Comment recommending a hybrid model (base fee + per-policy tier) if the gap is large",
          ],
          outputSample:
            "Draft: flat ₹2,000/mo for all advisors.\nComment: A 20-policy advisor pays the same as a 2,000-policy advisor. Small advisors may churn on price; large advisors are hugely underpriced. Recommend hybrid: base fee + per-policy-band multiplier.",
          healthy:
            "A billing model where price scales with book size, so small advisors aren't priced out and large advisors pay proportionate to value received.",
          unhealthy:
            "Flat pricing across a 100x range in customer size, which either overcharges the smallest segment or leaves massive revenue on the table with the largest.",
          interpret:
            "Flat rate only works when customer usage is genuinely similar; a 100x variance in book size is a strong signal a hybrid or usage-based model fits better.",
          soWhat: [
            {
              symptom: "Small customers churn citing price while your largest customers barely notice the bill",
              action: "Segment the customer base by usage and model a hybrid base-plus-usage price for the next review cycle",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-feature-gate-audit",
          concept: "Diagnosing feature-gating of features customers need to succeed",
          lessonAnchor: "step-4-design-upgrade-triggers",
          theoryRecap:
            "Never gate features necessary for customers to experience core value in the starter tier. Gate features that amplify success, not features that enable it.",
          question:
            "Lead assignment, the workflow that routes a new insurance lead to the advisor, is gated behind Tier 3. Without it, what can a Tier 1 advisor actually do with the tool?",
          toolName: "Google Docs",
          where: "In the same Google Doc, review the Tier 1 feature list line by line.",
          procedure: [
            "List every feature included in Tier 1",
            "For each, ask: can the advisor achieve the tool's core promise (closing more policies) without this feature?",
            "Flag any feature where the answer is 'no' as miscategorized, regardless of its current tier",
          ],
          outputSample:
            "Tier 1 features: contact log, policy renewal reminders, document storage.\nMissing from Tier 1: lead assignment (gated to Tier 3).\nFlag: Without lead assignment, a Tier 1 advisor cannot receive new leads at all — this is the tool's core promise, not an amplifier. Move to Tier 1 with a volume cap instead of a hard gate.",
          healthy:
            "Tier 1 includes every feature required to experience the product's core promise, with volume or scale caps as the upgrade path instead of feature walls.",
          unhealthy:
            "A core workflow like lead assignment, without which the product delivers zero value, sits behind a paywall two tiers up.",
          interpret:
            "If removing a feature from the starter tier means a customer cannot experience the product's core promise at all, it's an enabling feature and belongs in every tier.",
          soWhat: [
            {
              symptom: "Starter-tier customers churn within the first month without ever using the product's core workflow",
              action: "Move the gated core feature down to Starter with a volume cap instead of a hard paywall",
              effort: "dev ticket",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Annotate the draft pricing sheet with audit findings",
            why: "Comment threads make findings easy to route back to sales and product for revision",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An annotated pricing sheet (Google Doc with inline comments) flagging every cost-plus, billing-model, and feature-gating issue found, each with a specific fix recommendation.",
      sampleOutput:
        "Chewy Autoship Business Tools, pricing sheet audit (excerpt)\n\nFLAG 1 (cost-plus): Price justified by hosting cost only, no reference to retailer's reorder-rate lift.\nFLAG 2 (feature-gate): Autoship scheduling gated to Tier 2, but it's the tool's core promise. Move to Tier 1.\nFLAG 3 (billing model): Flat fee across retailers ranging 50-5,000 SKUs. Recommend usage-based tier.",
      successCriteria: [
        "Identifies at least one instance of cost-plus pricing rationale",
        "Correctly distinguishes an enabling feature from an amplifying feature in the gate audit",
        "Flags the billing-model mismatch against the stated usage variance",
      ],
      portfolioReady: true,
    },
  ],
  "customer-interviews": [
    {
      id: "customer-interviews-leading-question-calibration",
      tier: "mini",
      archetype: "audit",
      title: "Calibrating a Win-Loss Interview Script for Leading Questions",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a draft 10-question win-loss interview script, identify every leading question and rewrite it as an open question that won't just confirm existing assumptions.",
      companyId: "chewy",
      scenario:
        "You're the product marketer on Chewy's Autoship retention team. A colleague on the retention squad drafted a churn-interview script and asked you to review it before the first calls go out.",
      brief:
        "Open questions surface the real answer; closed or leading questions just confirm what the interviewer already believes. Mark each draft question and rewrite the leading ones.",
      mode: "calibration",
      conceptsCovered: ["Distinguishing open questions from leading questions in a research script"],
      steps: [
        {
          stepId: "step-1-leading-question-calibration",
          concept: "Distinguishing open questions from leading questions in a research script",
          lessonAnchor: "step-3-run-the-interview",
          theoryRecap:
            "Do not ask leading questions like 'Did our pricing seem competitive?' Ask instead: 'How did you think about the pricing across the options you evaluated?' Open questions surface the real answer; closed questions confirm assumptions.",
          question:
            "The draft script asks: 'Was the Autoship discount not generous enough for you?' Is this open or leading, and what would you ask instead?",
          toolName: "Google Docs",
          where: "Open the draft script in Google Docs and mark each question inline.",
          procedure: [
            "Read each of the 10 draft questions and label it OPEN or LEADING",
            "For every LEADING question, note which assumption it bakes in",
            "Rewrite each LEADING question as an open version that doesn't presuppose the answer",
          ],
          outputSample:
            "Q3 (draft): 'Was the Autoship discount not generous enough for you?'\nLabel: LEADING (assumes discount size was the problem)\nRewrite: 'How did the Autoship discount compare to what you expected when you signed up?'",
          healthy:
            "A rewritten question that lets the customer name the actual reason, even if it has nothing to do with the discount at all.",
          unhealthy:
            "A question that already contains the answer the interviewer expects, so every response just confirms the existing theory about why customers churned.",
          interpret:
            "If a question can be answered with a simple 'yes, that was it' without the customer adding new information, it's leading.",
          soWhat: [
            {
              symptom: "Every churn interview comes back blaming the same single factor the team already suspected",
              action: "Re-audit the script for leading questions before running the next batch of interviews",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Mark up and rewrite the draft interview script",
            why: "Comments make it easy to route the calibrated script back to the interviewer",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An annotated version of the 10-question script with every question labeled OPEN or LEADING, and a rewritten open version for each leading question.",
      sampleOutput:
        "Mailchimp churn-interview script, calibration (excerpt)\n\nQ2 (draft): 'Did the automation limits feel too restrictive?'\nLabel: LEADING\nRewrite: 'Walk me through a time the automation limits changed what you were able to do.'",
      successCriteria: [
        "Correctly labels at least 7 of 10 questions as open or leading",
        "Every leading question gets a genuinely open rewrite, not just a softened version of the same assumption",
      ],
      portfolioReady: true,
    },
    {
      id: "customer-interviews-loss-signal-reverse-engineer",
      tier: "mini",
      archetype: "reverse-engineer",
      title: "The Polite Answer vs. the Real Reason: Reverse-Engineering a Loss Interview",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a loss-interview transcript excerpt where the buyer's stated reason and their actual language don't fully line up, reverse-engineer the real objection behind the polite one given to sales.",
      companyId: "policybazaar",
      scenario:
        "You're the product marketer on PolicyBazaar's B2B insurer-partner platform. A prospect chose a competitor's onboarding tool, and you're reviewing the loss-interview transcript before the deal gets tagged closed-lost in the CRM.",
      brief:
        "Sales tagged the loss as 'price.' The transcript tells a more specific story if you read past the polite opening answer. Reverse-engineer the real decision factor from the buyer's own language.",
      mode: "diagnostic",
      conceptsCovered: ["Reverse-engineering the real objection from stated vs. revealed reasons"],
      steps: [
        {
          stepId: "step-1-reverse-engineer-real-objection",
          concept: "Reverse-engineering the real objection from stated vs. revealed reasons",
          lessonAnchor: "step-3-run-the-interview",
          theoryRecap:
            "According to Clozd's 2025 Win-Loss Report, CRM closed-lost reasons are inaccurate 85% of the time. Listen for the language buyers use about their problem, not just their first answer.",
          question:
            "The buyer's first answer was 'honestly, price was the deciding factor.' Two questions later, describing the competitor's tool, they said: 'their setup team walked our whole ops staff through it in one afternoon, we didn't have to figure it out ourselves.' What's the real objection?",
          toolName: "Google Docs",
          where: "Open the transcript excerpt in Google Docs and highlight the two relevant passages.",
          procedure: [
            "Highlight the buyer's stated reason (their first, polite answer)",
            "Highlight any later passage where they describe the competitor in concrete, specific detail",
            "Compare the two: does the specific detail actually support 'price,' or point to something else (onboarding, support, ease of setup)?",
            "Write the real objection in one sentence, grounded in the buyer's own words",
          ],
          outputSample:
            "Stated reason: 'Price was the deciding factor.'\nRevealed detail: '...their setup team walked our whole ops staff through it in one afternoon, we didn't have to figure it out ourselves.'\nReal objection: Onboarding effort and hand-holding, not price. The competitor won on implementation support; price was the easier, less awkward answer to give a salesperson.",
          healthy:
            "A real objection identified from specific, concrete buyer language about what actually happened, distinct from the vague first answer.",
          unhealthy:
            "Taking 'price was the deciding factor' at face value and tagging the CRM closed-lost reason as 'price' without reading further into the transcript.",
          interpret:
            "The first answer in a loss interview is often the socially easiest one to give; the real reason usually surfaces later, in specific descriptive detail rather than a category label.",
          soWhat: [
            {
              symptom: "Most closed-lost deals in the CRM are tagged 'price' with no further detail",
              action: "Re-read the underlying transcripts for the 5 most recent 'price' losses and re-tag based on the buyer's specific language",
              effort: "half day",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Highlight and annotate the transcript excerpt",
            why: "Simple highlighting is enough to compare stated vs. revealed reasons side by side",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-paragraph write-up naming the real objection, backed by a direct quote from the transcript, plus a corrected CRM closed-lost tag recommendation.",
      sampleOutput:
        "Mailchimp loss-interview reverse-engineering (excerpt)\n\nStated reason: 'It came down to features.'\nRevealed detail: 'the competitor's rep actually showed us how their tool would replace three of our existing steps.'\nReal objection: Workflow consolidation value wasn't communicated in our demo. Recommend re-tagging CRM reason from 'features' to 'demo did not show workflow fit.'",
      successCriteria: [
        "Identifies a specific revealed detail that contradicts or sharpens the stated reason",
        "States the real objection as a specific, actionable finding, not a restatement of the CRM tag",
      ],
      portfolioReady: true,
    },
  ],

  "win-loss-analysis": [
    {
      id: "win-loss-loss-reason-audit",
      tier: "core",
      archetype: "audit",
      title: "The Loss Reason Postmortem: Auditing a Win-Loss Interview Dataset",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a coded dataset of 12 loss-interview summaries with matching CRM loss-reason fields, separate CRM guesswork from buyer-verified themes and identify the single priority signal worth acting on this quarter.",
      companyId: "grab",
      scenario:
        "You're the product marketing analyst on Grab's enterprise logistics team. Grab Business lost 12 of 20 competitive deals last quarter, and the CRM says 'Price' was the reason in 9 of them. You have buyer-interview transcripts for all 12 losses.",
      brief:
        "Distrust the CRM field, code the real interview themes, quantify them against the win pool, and segment by competitor before recommending an action.",
      mode: "diagnostic",
      conceptsCovered: [
        "Using CRM data as a substitute for buyer interviews",
        "Quantifying themes across interviews",
        "Segmenting findings by competitor",
      ],
      steps: [
        {
          stepId: "step-1-crm-vs-interview",
          concept: "Using CRM data as a substitute for buyer interviews",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "Anova Consulting and Klue's 2025 research found 85% of CRM loss-reason fields are inaccurate, reps guess, or record whatever is least embarrassing to log.",
          question:
            "The CRM tags 9 of 12 losses as 'Price.' The buyer-interview transcripts for those same 9 deals only mention price directly in 2. What do you trust for the analysis?",
          toolName: "Google Sheets",
          where: "Open loss-dataset.csv, columns: deal_id, crm_reason, interview_theme_1, interview_theme_2, competitor.",
          procedure: [
            "Import loss-dataset.csv and freeze the header row",
            "Add a column flagging every row where crm_reason does not match either interview_theme column",
            "Count the mismatches: 7 of 9 'Price'-tagged deals show a different real theme in the interview",
          ],
          outputSample:
            "MISMATCH FLAGGED (7 of 9 'Price' rows)\n  deal-04: CRM=Price | Interview=implementation timeline concern, sales rep unresponsive after demo\n  deal-11: CRM=Price | Interview=unclear ROI framing, no dedicated onboarding contact named",
          healthy: "The analysis is built entirely from interview_theme columns; CRM fields are used only to spot the gap, never as evidence.",
          unhealthy: "Building the loss-reason chart straight from the CRM's crm_reason column because it's already there and tagged.",
          interpret:
            "A CRM field that agrees with the interview only 22% of the time is not data, it's a guess with a dropdown attached.",
          soWhat: [
            {
              symptom: "CRM loss-reason report says 'we lose on price'",
              action: "Re-tag the same 12 deals from interview transcripts before presenting any loss-reason chart to leadership",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-quantify-themes",
          concept: "Quantifying themes across interviews",
          lessonAnchor: "stage-3-analysis-and-synthesis",
          theoryRecap:
            "A theme appearing in 40% of losses and 5% of wins is a priority signal. A theme appearing at similar rates in both wins and losses is noise, not a fix target.",
          question:
            "Re-coded, 'implementation timeline concern' appears in 7 of 12 losses (58%) and 1 of 8 wins (12.5%). 'Sales rep responsiveness' appears in 3 of 12 losses (25%) and 2 of 8 wins (25%). Which one is the priority signal?",
          toolName: "Google Sheets",
          where: "Same sheet, new pivot tab: theme x outcome (win/loss) counts.",
          procedure: [
            "Build a pivot: rows = theme, columns = win/loss, values = count",
            "Convert counts to percentages within each outcome column",
            "Sort by the gap between loss% and win%, largest gap first",
          ],
          outputSample:
            "THEME                          LOSS%   WIN%   GAP\nImplementation timeline         58%    12.5%   45.5 pts  <- priority\nSales rep responsiveness        25%    25%     0 pts     <- noise\nUnclear ROI framing             33%    25%     8 pts",
          healthy: "'Implementation timeline concern' gets flagged to product marketing as the priority theme with a 45.5-point gap.",
          unhealthy: "Treating 'Sales rep responsiveness' as equally urgent because it also showed up in a quarter of the losses, ignoring that it shows up just as often in wins.",
          interpret: "A theme is only a signal relative to its own base rate in the win pool, not its raw frequency in losses.",
          soWhat: [
            {
              symptom: "Multiple themes appear in 25%+ of losses and nobody knows which to prioritize",
              action: "Compute the win-pool base rate for every theme before ranking priorities",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-segment-competitor",
          concept: "Segmenting findings by competitor",
          lessonAnchor: "stage-3-analysis-and-synthesis",
          theoryRecap:
            "Segmentation reveals insights aggregate data hides. Deal size, vertical, and competitor matchup can flip the story a headline number tells.",
          question:
            "The overall win rate against Competitor X is 45%. Segmented by deal size, it's 70% under $50K and 20% above $50K. What does the aggregate number hide?",
          toolName: "Google Sheets",
          where: "Add a deal_size_band column, pivot win rate by competitor x deal_size_band.",
          procedure: [
            "Bucket deals into under-$50K and over-$50K",
            "Pivot win rate by competitor and size band",
            "Flag any competitor where the size-banded win rates diverge by more than 20 points",
          ],
          outputSample:
            "vs Competitor X          Win rate\n  Under $50K (8 deals)      70%\n  Over $50K (4 deals)       20%\n  Blended (12 deals)        45%  <- hides both realities",
          healthy: "The recommendation is scoped: 'we win the SMB segment against Competitor X, we lose the enterprise segment' with different actions for each.",
          unhealthy: "Reporting a single 45% win rate against Competitor X and recommending one fix for both segments.",
          interpret: "A blended win rate is an average of two different competitive stories, act on the segments, not the blend.",
          soWhat: [
            {
              symptom: "A competitor's blended win rate looks mediocre but not alarming",
              action: "Segment by deal size or vertical before deciding whether it needs an urgent fix",
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
            role: "Code, pivot, and quantify interview themes against CRM fields",
            why: "Free, no account friction, pivot tables handle the theme x outcome cross-tab without a dedicated qual-analysis tool",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page loss-reason report that replaces the CRM's guessed reasons with interview-coded themes, ranks them by loss% minus win% gap, and segments the top competitor matchup by deal size.",
      sampleOutput:
        "Nubank Business, Q2 Loss-Reason Report (excerpt)\n\nPRIORITY SIGNAL: Implementation timeline concern (58% of losses, 12.5% of wins, 45.5-pt gap)\nNOISE: Sales rep responsiveness (25% of losses, 25% of wins, 0-pt gap)\n\nvs Competitor Y: blended win rate 52% hides a 78%/24% split between SMB and enterprise deals. Recommend: enterprise-specific onboarding proof points, not a blanket fix.",
      successCriteria: [
        "Correctly identifies that the CRM's crm_reason field disagrees with the interview themes on the majority of flagged rows",
        "Ranks themes by the loss% minus win% gap, not raw loss frequency",
        "Segments at least one competitor matchup by deal size and flags the divergence",
      ],
      portfolioReady: true,
    },
    {
      id: "win-loss-findings-brief-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "The Findings Brief: Turning Interview Themes into a Stakeholder Action Plan",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given a set of coded win-loss themes, build the four-stakeholder findings brief (product, sales enablement, positioning, leadership) the lesson's Stage 4 describes, each with an owner and a close-the-loop metric.",
      companyId: "adyen",
      scenario:
        "Adyen's product marketing team just wrapped 14 win-loss interviews this quarter. The raw theme list is coded, but nobody has translated it into the four stakeholder briefs the monthly review needs.",
      brief:
        "Route each theme to the right stakeholder, write one findings brief per audience, and define the close-the-loop metric before the meeting.",
      mode: "build",
      conceptsCovered: [
        "Building a findings brief for each stakeholder",
        "Closing the loop by tracking action impact",
      ],
      steps: [
        {
          stepId: "step-1-route-by-stakeholder",
          concept: "Building a findings brief for each stakeholder",
          lessonAnchor: "stage-4-distribution-and-action",
          theoryRecap:
            "Product gets the feature gap analysis. Sales enablement gets objection patterns and competitive intelligence. Positioning gets the language buyers used. Leadership gets the win-rate trend and revenue impact estimate.",
          question:
            "Theme: '6 of 14 buyers said pricing felt opaque until the final call.' Which stakeholder owns this, and what does their version of the brief say?",
          toolName: "Google Docs",
          where: "Create one findings-brief doc with four headed sections: Product, Sales Enablement, Positioning, Leadership.",
          procedure: [
            "List every coded theme in one column",
            "Tag each theme with its primary owning stakeholder",
            "Write a one-paragraph, audience-specific framing of the pricing-opacity theme under each relevant section",
          ],
          outputSample:
            "POSITIONING: 6 of 14 buyers (43%) described pricing as 'opaque until the final call.' Buyers used the phrase 'black box' unprompted twice. Recommend publishing indicative pricing ranges on the pricing page.\n\nSALES ENABLEMENT: Same theme, framed as an objection-handling gap: reps are not proactively addressing pricing transparency before buyers ask.",
          healthy: "The same underlying theme gets reframed for each audience instead of copy-pasted once into a generic doc nobody reads.",
          unhealthy: "One combined bullet list emailed to everyone with no stakeholder-specific framing or owner.",
          interpret: "A finding only becomes actionable once it's translated into the language and unit of work each stakeholder already operates in.",
          soWhat: [
            {
              symptom: "Win-loss findings sent as one flat document to a mixed distribution list",
              action: "Split into stakeholder-specific sections with a named owner per theme before the review meeting",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-close-the-loop",
          concept: "Closing the loop by tracking action impact",
          lessonAnchor: "stage-4-distribution-and-action",
          theoryRecap:
            "Track whether actions taken in response to findings actually move the metrics. If a battlecard was updated based on loss interviews, measure whether win rates in those matchups change over the next two quarters.",
          question:
            "The brief recommends updating the Competitor Z battlecard based on 4 loss interviews. What's the specific, measurable close-the-loop check you schedule for next quarter?",
          toolName: "Google Docs",
          where: "Add a 'Tracking' row under each action item with a metric, baseline, and check-in date.",
          procedure: [
            "For each recommended action, name the one metric that would prove it worked",
            "Record the current baseline value for that metric",
            "Set a check-in date two quarters out",
          ],
          outputSample:
            "ACTION: Update Competitor Z battlecard with the ROI-model rebuttal\nMETRIC: Win rate in Competitor Z head-to-head deals\nBASELINE: 38% (this quarter)\nCHECK-IN: Q3 review, target > 45%",
          healthy: "Every action item in the brief has a named metric, baseline, and check-in date attached before the meeting ends.",
          unhealthy: "A list of action items with no way to later confirm whether any of them worked.",
          interpret: "An action without a tracked metric is a wish, not a program; this is what turns a one-off report into a compounding one.",
          soWhat: [
            {
              symptom: "Last quarter's action items were never revisited",
              action: "Attach a metric, baseline, and check-in date to every action item at the moment it's assigned",
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
            role: "Draft the four stakeholder-specific findings sections and the tracking table",
            why: "Free, shareable, comment threads work well for stakeholder sign-off before the review meeting",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A findings brief with four stakeholder-specific sections (product, sales enablement, positioning, leadership), each theme routed to its owner, and a tracking table with metric, baseline, and check-in date for every recommended action.",
      sampleOutput:
        "Grab Business, Q2 Win-Loss Findings Brief (excerpt)\n\nSALES ENABLEMENT: Update the Competitor Z battlecard with the ROI-model rebuttal (owner: enablement lead)\n  Tracking: win rate in Competitor Z deals, baseline 38%, check-in Q3, target 45%+\n\nLEADERSHIP: Win rate trend flat at 41% this quarter; largest loss driver is implementation timeline concern (45.5-pt gap vs win pool)",
      successCriteria: [
        "Every coded theme is routed to at least one of the four named stakeholders",
        "Each stakeholder section is written in that audience's language, not copy-pasted",
        "Every recommended action has a metric, baseline, and check-in date",
      ],
      portfolioReady: true,
    },
  ],
  "analyst-relations": [
    {
      id: "ar-eligibility-readiness-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Eligibility Check: Auditing Analyst Evaluation Readiness",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a company's current customer count and revenue, determine whether it clears the Gartner Magic Quadrant eligibility bar and decide whether to pursue this cycle or wait.",
      companyId: "nubank",
      scenario:
        "You're the AR lead for a newer small-business banking product line at Nubank, deciding whether to submit for a relevant Gartner Magic Quadrant this cycle.",
      brief:
        "Check the business line's numbers against the eligibility threshold before committing calendar time to a submission that can't qualify.",
      mode: "diagnostic",
      conceptsCovered: ["Gartner Magic Quadrant eligibility thresholds"],
      steps: [
        {
          stepId: "step-1-check-eligibility",
          concept: "Gartner Magic Quadrant eligibility thresholds",
          lessonAnchor: "why-it-matters",
          theoryRecap:
            "To be eligible for a Gartner Magic Quadrant, a vendor generally needs a minimum of 100 paying customers or $5 million in annual revenue.",
          question:
            "The business line has 78 paying customers and $6.4 million in annual revenue. Does it clear the eligibility bar, and which threshold does it clear on?",
          toolName: "Google Sheets",
          where: "Open the metrics doc: customer_count, annual_revenue, category columns.",
          procedure: [
            "Pull current customer_count and annual_revenue for the business line",
            "Check customer_count against the 100-customer threshold: fails (78)",
            "Check annual_revenue against the $5M threshold: passes ($6.4M)",
          ],
          outputSample:
            "Business line: Nubank SMB Banking\n  Customers: 78 (threshold 100) -> FAIL\n  Revenue: $6.4M (threshold $5M) -> PASS\n  Eligible: YES, on revenue threshold",
          healthy: "The memo states clearly which threshold was cleared, since the two criteria are 'either/or,' not both required.",
          unhealthy: "Assuming the business line is ineligible because it missed the customer-count threshold, without checking revenue.",
          interpret: "The eligibility bar is 100 customers OR $5M revenue, missing one criterion doesn't disqualify a vendor that clears the other.",
          soWhat: [
            {
              symptom: "A business line looks too small for analyst evaluation on customer count alone",
              action: "Check the revenue threshold before ruling out a submission this cycle",
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
            role: "Compare current metrics against the published eligibility thresholds",
            why: "Free, fast enough for a two-number eligibility check",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page eligibility memo stating whether the business line qualifies, which threshold it clears, and a go/no-go recommendation for this cycle's submission window.",
      sampleOutput:
        "Adyen Platforms, Eligibility Memo (excerpt)\n\nCustomers: 142 (threshold 100) -> PASS\nRevenue: $4.1M (threshold $5M) -> FAIL\nEligible: YES, on customer-count threshold\nRecommendation: proceed with submission for the Q4 evaluation window.",
      successCriteria: [
        "Correctly evaluates both thresholds independently, not as an 'and' condition",
        "States which specific threshold the business line clears",
        "Produces a clear go/no-go recommendation",
      ],
      portfolioReady: true,
    },
    {
      id: "ar-briefing-calendar-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "The Briefing Calendar: Building a Six-Month Analyst Relations Plan",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a list of analysts covering the category, build a tiered, six-month briefing calendar timed against known Gartner and Forrester evaluation windows.",
      companyId: "grab",
      scenario:
        "Grab's enterprise logistics unit wants to be considered for next year's relevant Forrester Wave. The evaluation submission window opens in six months and there is no AR calendar yet.",
      brief:
        "Tier the analyst list, schedule briefings on a quarterly cadence, and time the final pre-submission briefing to land before the window closes.",
      mode: "build",
      conceptsCovered: [
        "Mapping the analyst landscape into tiers",
        "Booking and preparing a 20-minute analyst briefing",
        "Maintaining a regular briefing cadence ahead of evaluation windows",
      ],
      steps: [
        {
          stepId: "step-1-map-analysts",
          concept: "Mapping the analyst landscape into tiers",
          lessonAnchor: "step-1-map-the-analyst-landscape",
          theoryRecap:
            "Tier 1 analysts cover the exact market and write the evaluation report. Tier 2 analysts cover adjacent markets where buyers also operate.",
          question:
            "Of 6 analysts on the raw list, 2 write the enterprise-logistics Wave report directly, 3 cover adjacent supply-chain-tech categories, and 1 covers an unrelated category. How do you tier them?",
          toolName: "Google Docs",
          where: "Create a tiered table: Tier 1 (Wave authors), Tier 2 (adjacent), Excluded.",
          procedure: [
            "List all 6 analysts with their published coverage area",
            "Tag the 2 Wave-report authors as Tier 1",
            "Tag the 3 adjacent-category analysts as Tier 2, drop the unrelated one",
          ],
          outputSample:
            "TIER 1 (2): Wave report authors, brief every quarter\nTIER 2 (3): Adjacent coverage, brief twice a year\nEXCLUDED (1): No category overlap",
          healthy: "Calendar time goes disproportionately to the 2 Tier 1 analysts who actually write the report the company wants placement in.",
          unhealthy: "Splitting briefing time evenly across all 6 analysts regardless of who authors the target report.",
          interpret: "Tiering isn't a courtesy list, it's how limited AR calendar time gets allocated to the analysts who actually decide placement.",
          soWhat: [
            {
              symptom: "AR outreach is spread evenly across every analyst who has ever mentioned the category",
              action: "Re-tier the list by who authors the target evaluation report before scheduling any briefings",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-book-briefing",
          concept: "Booking and preparing a 20-minute analyst briefing",
          lessonAnchor: "step-2-book-analyst-briefings",
          theoryRecap:
            "A briefing is a no-cost interaction: a crisp 20-minute overview covering target customer, differentiators, and traction, leaving the last 10 minutes for analyst questions.",
          question:
            "The briefing slot is 30 minutes total. How do you split it between the company's overview and the analyst's questions?",
          toolName: "Google Docs",
          where: "Draft the briefing outline doc with timed sections.",
          procedure: [
            "Draft a 20-minute overview: target customer, differentiators, traction metrics, roadmap",
            "Reserve the final 10 minutes explicitly for analyst questions",
            "Send the outline to the analyst's scheduling contact ahead of the call",
          ],
          outputSample:
            "BRIEFING OUTLINE (30 min)\n  0:00-0:20  Company overview, target customer, 3 differentiators, Q2 traction metrics\n  0:20-0:30  Reserved for analyst questions, do not fill with more slides",
          healthy: "The last 10 minutes stay genuinely open; the analyst's questions are what they'll reference when advising clients later.",
          unhealthy: "Running the deck long and leaving 2 minutes for questions because there was 'one more slide' to cover.",
          interpret: "The analyst's questions are the part of the call that becomes their advisory notes, protect that time deliberately.",
          soWhat: [
            {
              symptom: "Briefings routinely run over and leave no time for analyst questions",
              action: "Cap the deck at 20 minutes and rehearse it before the call to protect the last 10",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-quarterly-cadence",
          concept: "Maintaining a regular briefing cadence ahead of evaluation windows",
          lessonAnchor: "step-3-maintain-a-regular-cadence",
          theoryRecap:
            "One briefing per year is not a relationship. Top AR programs brief key analysts every quarter, and relationships built over 12-18 months produce more accurate research representation than a single pre-evaluation sprint.",
          question:
            "The submission window opens in 6 months. Should the first Tier 1 briefing happen now, or 6 weeks before the window opens?",
          toolName: "Google Docs",
          where: "Build the calendar: 4 quarterly touchpoints for Tier 1, spaced across the next 6 months and beyond.",
          procedure: [
            "Schedule the first Tier 1 briefing now, not near the window",
            "Space 2 more Tier 1 touchpoints across the 6-month runway, each with a product-update angle",
            "Schedule the final pre-submission briefing 6-8 weeks before the window closes",
          ],
          outputSample:
            "TIER 1 CALENDAR (6-month runway)\n  Month 0: Initial briefing, company overview\n  Month 2: Product-release update\n  Month 4: Customer-traction update\n  Month 5.5: Pre-submission briefing, formal evaluation case",
          healthy: "The analyst has three prior touchpoints of context before the pre-submission briefing, so that final call isn't a cold introduction.",
          unhealthy: "Booking a single briefing 6 weeks before the window and treating it as the whole relationship.",
          interpret: "A pre-evaluation sprint reads as exactly what it is; a relationship built over the runway reads as informed context by submission time.",
          soWhat: [
            {
              symptom: "The AR calendar has one briefing booked, timed right before the evaluation deadline",
              action: "Add at least 2 earlier touchpoints spaced across the runway before the pre-submission briefing",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Draft the tiered analyst list, briefing outline, and the six-month calendar",
            why: "Free, easy to share with the analyst's scheduling contact and with internal stakeholders",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A tiered analyst list (Tier 1/Tier 2/excluded) and a six-month briefing calendar with 4 Tier 1 touchpoints timed against the evaluation submission window.",
      sampleOutput:
        "Nubank Enterprise, AR Calendar (excerpt)\n\nTIER 1 (2 analysts, Wave authors)\n  Month 0: Initial briefing\n  Month 2: Product-release update\n  Month 4: Customer-traction update\n  Month 5.5: Pre-submission briefing\n\nTIER 2 (3 analysts, adjacent coverage): biannual briefing, Months 1 and 4",
      successCriteria: [
        "Correctly separates Tier 1 (report authors) from Tier 2 (adjacent) and excludes irrelevant analysts",
        "Briefing outline reserves the final third of the call for analyst questions",
        "Calendar places the first Tier 1 touchpoint well before the pre-submission briefing, not as the only touchpoint",
      ],
      portfolioReady: true,
    },
  ],

  "category-creation": [
    {
      id: "category-pov-builder-coinbase",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Name the Category: Drafting a One-Page Point of View",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Apply the lesson's three-part naming test and POV structure to draft the opening of a category manifesto for a real product scenario.",
      companyId: "coinbase",
      scenario:
        "You're a product marketer at Coinbase. Leadership wants to stop being described as 'a crypto exchange' and be recognized as the platform that invented a new category for everyday crypto users. You have one page to pitch the category name and POV opening.",
      brief:
        "Pass the three-part name test, then draft the opening three sentences of the POV manifesto.",
      mode: "build",
      conceptsCovered: ["Passing the three-part category name test"],
      steps: [
        {
          stepId: "step-1-name-and-pov-opening",
          concept: "Passing the three-part category name test",
          lessonAnchor: "phase-2-name-the-category",
          theoryRecap:
            "The lesson's Phase 2 says a category name must describe the problem (not the product), travel in one sentence of word of mouth, and not already be owned by a competitor or a dying technology.",
          question:
            "Coinbase's team has shortlisted 3 candidate names: 'Coinbase Wallet 2.0', 'Onchain Banking', and 'Self-Custody Finance'. Which one survives all three tests, and why do the other two fail?",
          toolName: "Google Docs",
          where:
            "Open a blank Google Doc, list the 3 candidate names in a table, score each against the 3 tests.",
          procedure: [
            "List the 3 candidate names as rows in a table with columns for each of the lesson's 3 naming tests",
            "Mark 'Coinbase Wallet 2.0' as failing test 1: it names the product, not the problem",
            "Mark 'Self-Custody Finance' as failing test 2: it requires explaining 'self-custody' before the listener understands the benefit",
            "Confirm 'Onchain Banking' passes all 3: describes the problem (banking stuck off-chain), travels in one sentence, and is not yet owned by a bank or exchange competitor",
            "Draft the opening 3 sentences of the POV manifesto using the winning name",
          ],
          outputSample:
            "NAMING TEST SCORECARD\n\nCandidate: Coinbase Wallet 2.0\n  Test 1 (describes problem, not product): FAIL - names the product\n  Test 2 (travels in one sentence): PASS\n  Test 3 (not owned by competitor): PASS\n  Verdict: FAIL overall\n\nCandidate: Self-Custody Finance\n  Test 1: PASS\n  Test 2 (travels in one sentence): FAIL - requires explaining 'self-custody' first\n  Test 3: PASS\n  Verdict: FAIL overall\n\nCandidate: Onchain Banking\n  Test 1: PASS - names the problem (banking stuck off-chain)\n  Test 2: PASS - one sentence: 'banking that lives where your money already is'\n  Test 3: PASS - unclaimed by any bank or exchange\n  Verdict: PASS, all 3 tests",
          healthy:
            "The winning name describes a problem a buyer already feels, and a stranger can repeat it back correctly after hearing it once.",
          unhealthy:
            "The team picks the name that sounds the most futuristic, then spends the next quarter explaining what it means in every sales call.",
          interpret:
            "A name that needs a definition attached every time it's said has already failed test 2, no matter how accurate it is.",
          soWhat: [
            {
              symptom: "Sales reps each explain the new category name differently on calls",
              action: "Rewrite the name until it passes the one-sentence test with zero reps disagreeing on the wording",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Draft and score the naming test table plus POV opening",
            why: "Free, real-time collaborative, no account friction for a written deliverable",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page naming scorecard plus a 3-sentence POV manifesto opening for the winning category name.",
      sampleOutput:
        "Robinhood, category POV opening (excerpt)\n\n'For a decade, investing meant filling out forms a bank designed for someone else. Robinhood didn't build a cheaper broker, it built the first brokerage with no forms at all. We call this Zero-Friction Investing, and it's the category every incumbent will spend the next five years trying to retrofit.'",
      successCriteria: [
        "Correctly identifies which candidate name fails which specific test",
        "POV opening names the problem before naming the company",
      ],
      portfolioReady: true,
      stretch:
        "Test the winning name on 3 people outside marketing; if any of them can't repeat it back correctly, revise and retest.",
    },
    {
      id: "category-manifesto-ai-critique-robinhood",
      tier: "core",
      archetype: "ai-critique",
      title: "The Manifesto Isn't Working: AI-Critiquing a Weak Category POV",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Use an AI tool to stress-test a supplied category-creation POV draft against the lesson's failure patterns, then rewrite the weakest section.",
      companyId: "robinhood",
      scenario:
        "You're reviewing a draft POV manifesto written by a product manager at Robinhood who wants to launch a 'category' called 'Robinhood Instant Investing'. The draft reads like a product announcement, not a category manifesto, and you have one review cycle to fix it before it goes to the exec team.",
      brief:
        "Feed the draft to an AI tool with the lesson's failure patterns as your critique criteria, then rewrite the section that fails hardest.",
      mode: "diagnostic",
      conceptsCovered: [
        "Distinguishing category creation from rebranding",
        "Naming the category after your product as a common mistake",
      ],
      steps: [
        {
          stepId: "step-1-detect-rebrand-disguised-as-category",
          concept: "Distinguishing category creation from rebranding",
          lessonAnchor: "what-it-actually-is",
          theoryRecap:
            "The lesson's opening Callout warns that if competitors can adopt your category name without changing their product, you haven't created a category, you've created a tagline.",
          question:
            "The draft claims 'Instant Investing' is a new category. Paste the draft into an AI tool and ask it to test: could a competitor adopt this name today without changing their product at all?",
          toolName: "Google Docs",
          where:
            "Use Google Docs' built-in Gemini assistant (Tools > AI writing help) or paste the draft into any chat AI tool alongside the lesson's rebrand-vs-category test.",
          procedure: [
            "Paste the full POV draft into the AI tool",
            "Prompt it with the exact test: 'Could a competitor use this category name tomorrow without changing their product? Answer yes or no and explain.'",
            "Record the AI's verdict and its stated reasoning",
            "Cross-check the verdict against the draft's own claims: does it describe a new problem, or just faster execution of the old one?",
          ],
          outputSample:
            "AI CRITIQUE, rebrand-vs-category test\n\nVerdict: YES, a competitor could adopt this name without changing anything\nReasoning: 'Instant Investing' describes execution speed, not a newly named problem. Fidelity, Schwab, and E*TRADE could all claim 'instant investing' today since their trades already settle in seconds. The draft never identifies a problem those brokers cannot also solve.",
          healthy:
            "The AI flags that the name describes a feature (speed) any competitor already has, meaning the draft is a tagline, not a category.",
          unhealthy:
            "Approving the draft because it 'sounds exciting,' without ever asking whether a competitor could claim the same name unchanged.",
          interpret:
            "If the rebrand-vs-category test comes back YES, the fix is not better copywriting, it's going back to Phase 1 to find a problem competitors genuinely cannot solve with their current product.",
          soWhat: [
            {
              symptom: "The category name is just an adjective in front of an existing product feature",
              action: "Return to Phase 1 win/loss interviews to find the unnamed problem before rewriting any copy",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-detect-product-named-category",
          concept: "Naming the category after your product as a common mistake",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Common Mistakes table warns that naming the category after your product invites a 'vs. you' framing and locks buyers into feeling pre-sold before they've decided to buy.",
          question:
            "The draft's proposed name is literally 'Robinhood Instant Investing.' Using the lesson's mistakes table, ask the AI tool to flag every instance where the draft conflates the product name with the category name, then rewrite the worst paragraph.",
          toolName: "Google Docs",
          where: "Same Google Docs draft, use AI writing help or a chat AI tool to scan and rewrite.",
          procedure: [
            "Prompt the AI tool: 'Highlight every sentence in this draft where the category name and product name are the same word.'",
            "Count how many of the draft's core claims collapse once 'Robinhood' is removed from the category name",
            "Rewrite the manifesto's opening paragraph using a category name independent of the company name",
            "Re-run the rebrand-vs-category test from step 1 against the rewritten paragraph",
          ],
          outputSample:
            "AI CRITIQUE, product-named-category scan\n\n3 of 4 core claims in the draft only make sense as 'Robinhood does X,' not as 'this category does X'\n\nREWRITE (opening paragraph):\nBEFORE: 'Robinhood Instant Investing changes how people invest.'\nAFTER: 'Every brokerage still makes you wait to feel like an investor. Zero-Wait Investing removes that wait entirely, and Robinhood built the first platform for it.'",
          healthy:
            "The rewritten paragraph reads correctly even with the company name deleted from every sentence.",
          unhealthy:
            "The rewrite still can't be read aloud without saying 'Robinhood' in the category name itself.",
          interpret:
            "A category name that survives having the company name stripped out is describing a market. One that doesn't is describing a product line.",
          soWhat: [
            {
              symptom: "Every core claim in the manifesto breaks when you delete the company name",
              action: "Rename the category using only problem language, then re-test all claims against the new name",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Host the draft and run AI-assisted critique against the lesson's failure patterns",
            why: "Free built-in AI writing help, no separate account needed",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An annotated critique of the POV draft flagging both failure patterns, plus a rewritten opening paragraph using a company-independent category name.",
      sampleOutput:
        "Coinbase, POV critique memo (excerpt)\n\nFLAG 1: Draft claims 'Coinbase One Trading' is a new category. Competitor test: FAIL, Kraken and Binance already offer bundled trading tiers under different names.\nFLAG 2: Category name contains 'Coinbase.' Company-name-stripped test: FAIL, every claim reads as a product feature list once 'Coinbase' is removed.\nRECOMMENDATION: Return to Phase 1 interviews before publishing; the underlying problem has not yet been named.",
      successCriteria: [
        "Correctly identifies both failure patterns using the AI tool's output as evidence",
        "Rewritten paragraph passes the company-name-stripped test",
      ],
      portfolioReady: true,
      stretch:
        "Apply both AI critique tests to a real category claim from a current tech press release and share the verdict.",
    },
  ],

  "customer-advisory-board": [
    {
      id: "customer-advisory-board-roster-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Roster Check: Auditing a Draft CAB Against the 5-5-5 Framework",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a draft candidate list of 14 customers, apply the 5-5-5 framework and the at-risk exclusion rule to land on a final 12-member Customer Advisory Board roster.",
      companyId: "klaviyo",
      scenario:
        "You're the customer marketing lead at Klaviyo, standing up the company's first Customer Advisory Board ahead of a major pricing-model overhaul. Customer Success just sent over a shortlist of 14 candidates pulled from top accounts, with CRM flags attached.",
      brief:
        "Tag every candidate by tier, apply the exclusion rule to anyone with an active risk flag, and backfill to a balanced final 12.",
      mode: "diagnostic",
      conceptsCovered: [
        "Recruiting across the 5-5-5 tiers instead of defaulting to the loudest customers",
        "Excluding at-risk or mid-dispute accounts from the CAB",
      ],
      steps: [
        {
          stepId: "step-1-tier-tagging",
          concept: "Recruiting across the 5-5-5 tiers instead of defaulting to the loudest customers",
          lessonAnchor: "step-2-recruit-with-the-5-5-5-framework",
          theoryRecap:
            "The lesson's 5-5-5 framework splits a 12-15 member CAB into three roughly equal tiers: Power Users, Strategic Buyers, and Adjacent Thinkers, recruited through Customer Success, not by picking the loudest fans or complainers.",
          question:
            "Of the 14 candidates, how many fall into each tier, and does the mix support a balanced board once you cut down to 12?",
          toolName: "Google Sheets",
          where: "Import the candidate list CSV from Customer Success, freeze the header row.",
          procedure: [
            "Import the 14-row candidate list with columns: name, role, usage frequency, CRM flag",
            "Tag each row Power User, Strategic Buyer, or Adjacent Thinker based on role and usage frequency",
            "Count the tier distribution and note any tier that's over- or under-represented",
            "Flag rows where the tier tag is ambiguous for a second pass",
          ],
          outputSample:
            "Klaviyo CAB Candidates, tier tags (14 rows)\n\nPOWER USERS (6 tagged)\n  1. R. Fontaine, Sr. Email Marketing Manager, daily login, flag: none\n  2. T. Okafor, Marketing Ops Lead, daily login, flag: none\n  ...4 more\n\nSTRATEGIC BUYERS (4 tagged)\n  7. M. Reyes, VP Growth, weekly login, flag: churn-risk 8/10\n  ...3 more\n\nADJACENT THINKERS (4 tagged)\n  11. S. Patel, Head of Lifecycle at an agency partner, weekly login, flag: none\n  ...3 more",
          healthy: "A near-even split close to 5-5-5, with only 2 flagged rows needing review.",
          unhealthy: "9 of 14 candidates tagged Power User because Customer Success defaulted to 'who talks to us most.'",
          interpret:
            "An uneven tier count means the recruiting source leaned on one relationship, usually CS's own favorites, not the strategic-question requirement from Step 1.",
          soWhat: [
            {
              symptom: "One tier has more than 7 candidates, another has fewer than 3",
              action: "Go back to Customer Success and ask specifically for names in the under-represented tier",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-exclusion-check",
          concept: "Excluding at-risk or mid-dispute accounts from the CAB",
          lessonAnchor: "step-2-recruit-with-the-5-5-5-framework",
          theoryRecap:
            "The lesson warns against recruiting customers who are mid-contract dispute or in active churn risk. A CAB is not the forum to save an at-risk account, and one such member poisons the dynamic for everyone else.",
          question:
            "Two of the 14 candidates carry CRM flags: one has a churn-risk score of 8/10, one is 45 days into an active contract dispute. What happens to them, and who backfills their seats?",
          toolName: "Google Sheets",
          where: "Same candidate sheet, filter the CRM flag column.",
          procedure: [
            "Filter the CRM flag column for churn-risk and dispute flags",
            "Remove both flagged rows from the roster regardless of how well they fit a tier",
            "Identify the next-best unflagged candidate in the same tier to backfill each removed seat",
            "Log the removal reason next to each name for the recruiting record",
          ],
          outputSample:
            "EXCLUDED (2)\n  7. M. Reyes, Strategic Buyer, churn-risk 8/10 -- excluded per CAB policy, not a support forum\n  12. D. Kwan, Adjacent Thinker, active contract dispute (day 45) -- excluded, revisit next cycle\n\nBACKFILLED\n  Strategic Buyer seat -> 8. L. Chen, VP RevOps, no flags\n  Adjacent Thinker seat -> 13. A. Bianchi, no flags\n\nFINAL ROSTER: 12 members, 4 Power Users, 4 Strategic Buyers, 4 Adjacent Thinkers",
          healthy: "Both flagged accounts removed and backfilled from the same tier, final count still balanced.",
          unhealthy: "Keeping the churn-risk VP on the roster because 'we need their seniority.'",
          interpret:
            "A flagged account's usefulness to the board is irrelevant once the flag is active; the lesson treats this as a hard exclusion, not a judgment call.",
          soWhat: [
            {
              symptom: "A flagged account is still on the final roster",
              action: "Remove it and backfill from the same tier before the kickoff invite goes out",
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
            role: "Import, tag, and filter the candidate list",
            why: "Free, handles the whole audit without any account setup",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A finalized 12-member CAB roster with tier tags, plus an exclusion log naming who was cut, why, and who backfilled the seat.",
      sampleOutput:
        "Adyen, Q3 CAB Roster (excerpt)\n\nPOWER USERS (4)\n  1. Payments Ops Lead, EU enterprise merchant\n  2. Integrations Lead, marketplace platform\n\nSTRATEGIC BUYERS (4)\n  5. VP Finance, cross-border retailer\n\nADJACENT THINKERS (4)\n  9. Head of Risk, fintech partner (non-customer perspective)\n\nEXCLUDED\n  Merchant #14 -- active dispute over chargeback fees, excluded, backfilled from Power User waitlist",
      successCriteria: [
        "Correctly tags all 14 candidates into the three 5-5-5 tiers",
        "Flags and removes both accounts that violate the at-risk exclusion rule",
        "Backfills to a balanced final 12 with a documented removal reason for each cut",
      ],
      portfolioReady: true,
    },
    {
      id: "customer-advisory-board-feedback-loop-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Closing the Loop: Drafting the Post-Meeting Feedback Summary",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given raw facilitator notes from a CAB meeting, build the three-part written follow-up the lesson requires within 5 business days, then flag which commitments are at risk under the 60-day rule.",
      companyId: "wise",
      scenario:
        "You run customer marketing at Wise, six days after the company's first in-person CAB summit. You have raw facilitator notes from two strategic topics and the roadmap-reaction session, and 5 business days left to send a written summary before members start disengaging.",
      brief:
        "Turn messy notes into the heard / doing / not-doing summary the lesson prescribes, then attach ship dates and flag anything that risks the 60-day rule.",
      mode: "build",
      conceptsCovered: [
        "Structuring a written follow-up as heard / doing / not doing",
        "The 60-day rule as the biggest predictor of CAB attendance health",
      ],
      steps: [
        {
          stepId: "step-1-heard-doing-notdoing",
          concept: "Structuring a written follow-up as heard / doing / not doing",
          lessonAnchor: "step-4-close-the-feedback-loop-publicly",
          theoryRecap:
            "The lesson requires a written summary within 5 business days covering what you heard, what you're doing about it, and what you're explicitly not doing and why. The 'not doing' section is the one that proves the feedback was genuinely evaluated.",
          question:
            "The raw notes contain 6 distinct pieces of feedback. How do you sort them into the three sections without softening the 'not doing' items into vague language like 'we'll consider it'?",
          toolName: "Google Docs",
          where: "New doc, three headed sections matching the lesson's structure.",
          procedure: [
            "List all 6 raw feedback items from the facilitator notes as a working table",
            "Sort each into Heard, Doing, or Not Doing based on what leadership actually committed to in the room",
            "For every 'Not Doing' item, write one concrete, specific reason, no hedging language",
            "Draft the summary in the lesson's three-section format",
          ],
          outputSample:
            "WHAT WE HEARD\n- Multi-currency batch payouts are the #1 blocker for our marketplace-seller segment\n- API rate limits are too low for members processing 500+ transfers/day\n\nWHAT WE'RE DOING\n- Batch payouts: entering discovery this quarter, targeting Q1 next year\n\nWHAT WE'RE NOT DOING (AND WHY)\n- Raising default API rate limits for all users: the segment affected is under 3% of members; we're building a dedicated high-volume tier instead, details in 60 days",
          healthy: "Each 'not doing' item names a specific, checkable reason.",
          unhealthy: "'Not doing' items written as 'we'll keep this in mind for the future.'",
          interpret:
            "A vague 'not doing' reason reads as the feedback being ignored, which is exactly the outcome the section is meant to prevent.",
          soWhat: [
            {
              symptom: "A 'not doing' item has no concrete reason attached",
              action: "Go back to the decision-maker in the room and get the actual reason before sending",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-60-day-flag",
          concept: "The 60-day rule as the biggest predictor of CAB attendance health",
          lessonAnchor: "common-mistakes",
          theoryRecap:
            "The lesson's Common Mistakes section names the 60-day rule as the single biggest predictor of long-term CAB health: if members don't see visible movement on their input within 60 days, attendance starts dropping.",
          question:
            "Of the 3 items now in 'What We're Doing,' which ones have a ship date inside 60 days, and which need to be escalated to stay on the clock?",
          toolName: "Google Sheets",
          where: "A simple commitment tracker, one row per 'doing' item.",
          procedure: [
            "List each 'doing' commitment with its current target ship date",
            "Calculate days remaining from the meeting date to each target date",
            "Flag any commitment with no date, or a date past 60 days, in red",
            "Escalate flagged items to the executive sponsor with a specific ask: a date, or a visible interim update",
          ],
          outputSample:
            "COMMITMENT TRACKER\n1. Batch payouts discovery kickoff -- target: day 21 -- ON TRACK\n2. API rate-limit tier scoping doc -- target: day 58 -- ON TRACK, tight\n3. Mobile push notification prefs -- target: none set -- FLAGGED, escalate to exec sponsor today",
          healthy: "Every 'doing' item has a date inside 60 days, or an escalation logged the same day.",
          unhealthy: "A 'doing' commitment with no date sitting unescalated for two weeks.",
          interpret:
            "An undated commitment isn't a commitment; it's the exact gap that erodes trust before the next meeting.",
          soWhat: [
            {
              symptom: "A 'doing' item has no ship date by the time the summary goes out",
              action: "Escalate to the exec sponsor for a hard date before sending, don't send the summary without one",
              effort: "30 min",
            },
          ],
          owner: "either",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Draft the three-part written summary", why: "Free, easy to share and comment on with the exec sponsor", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Build the 60-day commitment tracker", why: "Free, sortable by date for the escalation check", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "HubSpot CRM", role: "Log each commitment against the member's account record for the next meeting's prep", why: "Keeps the commitment history attached to the account instead of a standalone doc", required: false, lastVerified: "2026-08" },
        ],
        paidUpgradeNote: "The free Docs-and-Sheets path covers a single meeting cycle; a CRM log only starts paying off once you're tracking commitments across multiple CAB cycles.",
      },
      deliverable:
        "A written CAB follow-up summary (heard / doing / not-doing) ready to send within 5 business days, plus a 60-day commitment tracker flagging any at-risk item.",
      sampleOutput:
        "Coinbase, CAB Follow-Up Summary -- Q2 2026 (excerpt)\n\nWHAT WE HEARD\n- Institutional members want sub-account permissioning before Q3\n\nWHAT WE'RE DOING\n- Sub-account permissioning: scoping doc due day 45, escalated to VP Product as owner\n\nWHAT WE'RE NOT DOING (AND WHY)\n- Custom API keys per sub-account: security review flagged this as a 2027 roadmap item, not deprioritized, genuinely sequenced behind a compliance dependency",
      successCriteria: [
        "Sorts all 6 raw feedback items into heard / doing / not-doing with no vague language in the not-doing section",
        "Attaches a ship date to every 'doing' commitment",
        "Flags and escalates any commitment that risks breaking the 60-day rule",
      ],
      portfolioReady: true,
    },
  ],
  "category-creation-gtm": [
    {
      id: "category-creation-gtm-naming-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Name the Category: Teardown of Four Candidate Names",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given four candidate category names and a draft launch-narrative opening for a new Snowflake capability, identify which pass the lesson's naming test and which are generic hype or skip problem validation.",
      companyId: "snowflake",
      scenario:
        "You're on the product marketing team at Snowflake, prepping the category narrative for a new cross-cloud data-sharing capability ahead of a launch event. Two drafts are on the table: a shortlist of candidate category names, and the opening paragraph of the launch brief.",
      brief:
        "Apply the naming criteria and the 'naming before validating' mistake check to both specimens before either goes to exec review.",
      mode: "teardown",
      conceptsCovered: ["Naming and Positioning the Space", "Common Mistakes in Category Creation", "Defining the New Problem"],
      teardownItems: [
        {
          itemId: "item-1-candidate-names",
          specimen:
            "Candidate names pitched for the new capability (governed, zero-copy data replication across AWS, Azure, and GCP):\n1. \"Snowflake Data Cloud Extensions\"\n2. \"Next-Gen Data Fabric Platform\"\n3. \"Cross-Cloud Data Handshake\"\n4. \"AI-Powered Data Suite\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "Which of these four candidate names would actually function as a new category name per the lesson's naming test (simple, memorable, descriptive, combines familiar terms in a new way), and which are generic hype dressed up as a name?",
          answerKey: [
            {
              defect: "\"Next-Gen Data Fabric Platform\" reuses the exact generic pattern the lesson names as a failure case",
              severity: "critical",
              whyItMatters: "The lesson explicitly warns against 'next-generation platform' language because it fails to define a distinct category and sounds like hype, not a new frame.",
              lessonRef: "Naming and Positioning the Space",
              owner: "you",
            },
            {
              defect: "\"AI-Powered Data Suite\" is the lesson's other named example of generic hype language",
              severity: "critical",
              whyItMatters: "'AI-powered suite' is called out by name in the lesson as a phrase that fails to create a distinct category.",
              lessonRef: "Naming and Positioning the Space",
              owner: "you",
            },
            {
              defect: "\"Snowflake Data Cloud Extensions\" is a feature name, not a category name",
              severity: "moderate",
              whyItMatters: "It inherits the existing product line's name instead of naming a new problem or space, so it can't stand alone as a category the way 'Conversational Marketing' or 'Revenue Intelligence' does.",
              lessonRef: "Naming and Positioning the Space",
              owner: "you",
            },
          ],
          distractors: [
            "\"Cross-Cloud Data Handshake\" sounds too casual for enterprise buyers",
            "The names are too long to trademark cleanly",
            "None of the names mention Snowflake's existing brand strongly enough",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-problem-narrative",
          specimen:
            "Draft opening paragraph for the launch brief:\n\"Our new Cross-Cloud Data Handshake capability lets you replicate governed data across every major cloud in under 10 minutes, with zero-copy architecture and built-in lineage tracking. Sign up for early access today.\"",
          specimenSource: "synthetic-realistic",
          prompt:
            "What's wrong with this paragraph as the OPENING of a category-creation launch brief, and what would the lesson have you fix first?",
          answerKey: [
            {
              defect: "Leads with the product and features, never names the systemic pain point first",
              severity: "critical",
              whyItMatters: "The lesson requires selling the idea that the status quo is unacceptable before selling any feature; a features-first open skips the problem the whole category is supposed to be named after.",
              lessonRef: "Defining the New Problem",
              owner: "you",
            },
            {
              defect: "No contrast drawn between the old, painful way and the new category",
              severity: "moderate",
              whyItMatters: "Positioning is supposed to create a clear choice for the buyer between the past and the future; this paragraph never mentions what the old way costs a team.",
              lessonRef: "Naming and Positioning the Space",
              owner: "you",
            },
            {
              defect: "No analyst or press validation step planned before the public launch",
              severity: "moderate",
              whyItMatters: "Skipping analyst and press validation misses the credibility layer that determines whether the market treats this as a real category or a rebrand.",
              lessonRef: "Common Mistakes in Category Creation",
              owner: "either",
            },
          ],
          distractors: [
            "Uses the phrase 'zero-copy architecture,' too technical for a launch brief",
            "Mentions a specific time bound ('under 10 minutes'), which is too precise a claim to make this early",
            "The call to action is placed at the end instead of the beginning",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Write the teardown memo and the rewritten opening paragraph", why: "Free, easy to comment on with the PMM lead before exec review", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable:
        "A written teardown memo naming which candidate passes the lesson's naming test, plus a rewritten launch-brief opening that leads with the problem, not the feature.",
      sampleOutput:
        "Robinhood, Category Naming Teardown Memo (excerpt)\n\nCANDIDATE: \"Guided Trading\" -- PASS, names a new relationship to the problem (decision fatigue), not just a feature\nCANDIDATE: \"Next-Gen Investing Suite\" -- FAIL, generic hype pattern, no distinct frame\n\nREWRITTEN OPENING\nMost new investors freeze at the moment of the trade, not before it. That hesitation costs the industry billions in abandoned first trades every year...",
      successCriteria: [
        "Correctly separates the two hype-language candidate names from the two that could function as a real category name",
        "Identifies the problem-narrative paragraph's features-first structure as the core defect, not a surface wording issue",
        "Rewrites the opening to lead with the pain point before any feature mention",
      ],
      portfolioReady: true,
    },
    {
      id: "category-creation-gtm-18-month-rollout-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The 18-Month Clock: Simulating a Category Creation GTM Rollout",
      timeEstimate: "55 minutes",
      timeMinutes: 55,
      objective:
        "Run a category-creation launch through three decision points spread over 18 months and see how each choice plays out against the lesson's named common mistakes.",
      companyId: "coinbase",
      scenario:
        "You're the GTM lead at Coinbase, tasked with launching a new category around programmable, on-chain merchant settlement. Leadership wants press coverage fast; you have three decisions ahead of you over the next 18 months that will decide whether the category sticks or gets copied out from under you.",
      brief:
        "At each stage, pick the option that avoids the mistake the lesson warns about, not just the fastest-looking path.",
      mode: "simulation",
      conceptsCovered: [
        "Naming before validating the problem",
        "Sustained education content over years, not a quarter",
        "Owning the narrative when a competitor adopts your category term",
      ],
      stages: [
        {
          stageId: "stage-1-name-before-validate",
          label: "Pick the Launch Sequence",
          elapsed: "Month 1-3",
          concept: "Naming before validating the problem",
          lessonAnchor: "common-mistakes-in-category-creation",
          situation:
            "Leadership wants a splashy category announcement at next month's industry conference. Nobody outside the company has confirmed the pain point ('settlement float costs merchants real money') actually resonates yet.",
          dashboard: "0 customer interviews logged, 1 conference keynote slot booked in 5 weeks, comms team drafting a press release with the new category name already in the headline",
          spendToDate: "$40,000",
          budgetRemaining: "$460,000 of $500,000 annual GTM budget",
          decision: {
            prompt: "What do you do before that conference slot?",
            options: [
              {
                id: "press-release-first",
                label: "Let comms run the press release with the category name already in the headline",
                verdict: "costly",
                outcome: "The keynote gets modest coverage, but three trade reporters ask 'is this actually a new problem, or just Coinbase's new feature name?' and no one has a validated answer.",
                why: "The lesson's Common Mistakes section names this exact failure: naming before validating leaves the problem story unproven when the first hard question lands.",
                lessonRef: "Common Mistakes in Category Creation",
                nextStageId: "stage-2-sustained-education",
              },
              {
                id: "validate-then-name",
                label: "Run 15 rapid customer interviews over the next 3 weeks to confirm the pain point before finalizing the name",
                verdict: "optimal",
                outcome: "The keynote slips two weeks but ships with three named merchant quotes describing the exact cost of settlement float, giving the press a concrete problem to write about instead of a new buzzword.",
                why: "Validating first means the category name arrives already backed by evidence, which is what makes a name stick instead of sounding invented.",
                lessonRef: "Common Mistakes in Category Creation",
                nextStageId: "stage-2-sustained-education",
              },
              {
                id: "analyst-briefing-first",
                label: "Skip customer interviews, go straight to an analyst briefing instead",
                verdict: "acceptable",
                outcome: "One analyst firm agrees the problem sounds plausible but won't cite it publicly without customer evidence, so the keynote ships with credibility from one source instead of two.",
                why: "Analyst input helps, but the lesson treats it as a second, not a replacement, validation layer; skipping direct customer proof leaves a gap the press will eventually probe.",
                lessonRef: "Common Mistakes in Category Creation",
                nextStageId: "stage-2-sustained-education",
              },
            ],
          },
        },
        {
          stageId: "stage-2-sustained-education",
          label: "Size the Education Investment",
          elapsed: "Month 4-9",
          concept: "Sustained education content over years, not a quarter",
          lessonAnchor: "common-mistakes-in-category-creation",
          situation:
            "The category has a name and some initial coverage. Marketing needs to decide how much to invest in ongoing education content versus moving budget to demand-gen for the quarter.",
          dashboard: "1 launch webinar delivered (400 registrants), no certification or academy content planned yet, sales asking for more collateral to answer prospect questions",
          spendToDate: "$140,000",
          budgetRemaining: "$360,000 of $500,000 annual GTM budget",
          decision: {
            prompt: "How do you allocate the next two quarters of budget?",
            options: [
              {
                id: "one-webinar",
                label: "Call the launch webinar 'done' and shift all remaining budget to demand-gen ads",
                verdict: "costly",
                outcome: "By month 9, prospects still ask sales 'so is this basically just faster settlement?' because nothing reinforced the category story after launch week.",
                why: "The lesson is explicit that a single launch webinar is not category creation; the work requires sustained content over years, not a quarter.",
                lessonRef: "Common Mistakes in Category Creation",
                nextStageId: "stage-3-competitor-adopts-term",
              },
              {
                id: "build-academy",
                label: "Launch a lightweight certification track teaching merchants the category's underlying methodology",
                verdict: "optimal",
                outcome: "By month 9, 300 merchants have completed the certification and a handful start referencing the category name unprompted in support tickets and community posts.",
                why: "Certifying users in the methodology, per the lesson's GTM playbook, builds a community of advocates who evangelize the category for you.",
                lessonRef: "The GTM Playbook Execution",
                nextStageId: "stage-3-competitor-adopts-term",
              },
              {
                id: "two-quarter-cadence",
                label: "Commit to a steady content cadence for two quarters, then reassess based on results",
                verdict: "acceptable",
                outcome: "The category gains modest recognition, but momentum stalls right as the reassessment period begins, since no clear owner is committed past the initial two quarters.",
                why: "A time-boxed cadence is better than one webinar, but the lesson frames this as a multi-year investment; planning to stop and reassess this early risks losing the compounding effect.",
                lessonRef: "Common Mistakes in Category Creation",
                nextStageId: "stage-3-competitor-adopts-term",
              },
            ],
          },
        },
        {
          stageId: "stage-3-competitor-adopts-term",
          label: "Respond to a Fast Follower",
          elapsed: "Month 10-18",
          concept: "Owning the narrative when a competitor adopts your category term",
          lessonAnchor: "common-mistakes-in-category-creation",
          situation:
            "A well-funded competitor just published a blog post using your exact category name to describe their own, older feature, and it's ranking above your own content for the term.",
          dashboard: "Category name now returns 3 competitor mentions in the top 10 search results, sales reports 2 deals where a prospect asked 'aren't they all doing this now?'",
          spendToDate: "$310,000",
          budgetRemaining: "$190,000 of $500,000 annual GTM budget",
          decision: {
            prompt: "How do you respond?",
            options: [
              {
                id: "ignore-it",
                label: "Ignore it, the category is still associated with Coinbase in most people's minds",
                verdict: "costly",
                outcome: "Within 3 more months, two additional competitors adopt the term and Coinbase's own content is now outranked for the category name it invented.",
                why: "The lesson warns that if you don't control the narrative early, a fast-following competitor can adopt your category name and out-market you inside the space you invented.",
                lessonRef: "Common Mistakes in Category Creation",
                nextStageId: "end",
              },
              {
                id: "out-publish-and-cite-analysts",
                label: "Publish a defining piece of content and get an analyst firm to formally cite Coinbase as the category's originator",
                verdict: "optimal",
                outcome: "The analyst citation becomes the reference every subsequent article links to, and Coinbase's own definitional content reclaims the top search position within a quarter.",
                why: "A credible third-party citation is the strongest defense once a term escapes your control; it's the same mechanism the lesson describes as the sign a category effort has actually worked, rivals start speaking your vocabulary, but you can still own the definition of it.",
                lessonRef: "Common Mistakes in Category Creation",
                nextStageId: "end",
              },
              {
                id: "rebrand-again",
                label: "Abandon the term and rebrand to a new category name to differentiate",
                verdict: "acceptable",
                outcome: "The rebrand avoids direct comparison for now, but resets 9 months of accumulated recognition and forces the education content cycle to start over.",
                why: "Switching names sidesteps the immediate confusion but throws away the compounding education investment from Stage 2 rather than defending it.",
                lessonRef: "Common Mistakes in Category Creation",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Log the rollout retro and decision rationale at each stage", why: "Free, shareable with the GTM team for the after-action review", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Track budget spend and search-ranking checkpoints across the 18 months", why: "Free, sufficient for a quarterly checkpoint tracker", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "HubSpot CRM", role: "Track which sales deals surfaced the 'aren't they all doing this now?' objection", why: "Ties the competitive-narrative risk directly to pipeline impact, not just search rankings", required: false, lastVerified: "2026-08" },
        ],
        paidUpgradeNote: "The free Docs-and-Sheets tracker is enough to run this exercise; a CRM link only matters once you're correlating category confusion with real deal outcomes.",
      },
      deliverable:
        "A stage-by-stage rollout log documenting which option was chosen at each of the three decision points, the resulting outcome, and the lesson-referenced reasoning behind each choice.",
      sampleOutput:
        "Mailchimp, Category Rollout Retro -- 'Autonomous Marketing Ops' (excerpt)\n\nMONTH 1-3: Validated the pain point with 12 customer interviews (average of 6 hours/week lost to manual send-time optimization) before finalizing the category name.\n\nMONTH 4-9: Launched a certification track instead of a single webinar; 240 marketers certified by month 9.\n\nMONTH 10-18: A competitor adopted the category name in month 11; countered with an analyst-cited definitional report that reclaimed top search position by month 14.",
      successCriteria: [
        "Selects the optimal or acceptable option at each of the three stages, not the fastest-looking one",
        "Correctly attributes each outcome to the specific common mistake the lesson names",
        "Produces a rollout log that could be handed to a real GTM team as a decision record",
      ],
      portfolioReady: true,
      stretch:
        "Re-run the simulation choosing the costly option at every stage and write a one-paragraph comparison of the 18-month outcome difference.",
    },
  ],

  "gtm-engineering": [
    {
      id: "gtm-engineering-waterfall-enrichment-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Cut Call: Auditing a Clay Waterfall Enrichment Run",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given a real 5-provider Clay waterfall enrichment log (attempts, hits, cost per stage), compute blended coverage and cost-per-match, then decide which provider to cut from the chain.",
      companyId: "mailchimp",
      scenario:
        "You're the growth marketing analyst at Mailchimp validating a new B2B outbound motion for its email/SMS suite. Before scaling the list, you need to know whether the 5-provider waterfall is actually worth its added complexity over a single vendor.",
      brief:
        "Import the waterfall log, compute cost-per-successful-match at each stage, calculate blended coverage, and recommend cutting or keeping the lowest-ROI provider with the number to back it up.",
      mode: "diagnostic",
      conceptsCovered: ["Waterfall enrichment provider sequencing"],
      steps: [
        {
          stepId: "step-1-waterfall-audit",
          concept: "Waterfall enrichment provider sequencing",
          lessonAnchor: "clay-deep-dive-waterfall-enrichment",
          theoryRecap:
            "The lesson's waterfall deep-dive chains providers instead of relying on one: try Apollo first, then Hunter, then Clearbit, and so on, paying only on a successful hit, so coverage climbs from a typical single-provider 30% toward 80%+ without proportionally climbing cost.",
          question:
            "On a 2,500-contact list run through 5 providers in sequence, blended coverage lands at 72.8% but one provider is barely moving the needle at a steep price. Which provider gets cut, and what does keeping it actually cost?",
          toolName: "Google Sheets",
          where: "Import the waterfall run log, freeze the header row, and add a cost-per-match column for each provider stage.",
          procedure: [
            "Import the 5-stage log: Apollo (2,500 attempted, 780 hits, $200 spend), Hunter (1,720 attempted, 430 hits, $86 spend), Clearbit (1,290 attempted, 360 hits, $154.80 spend), People Data Labs (930 attempted, 210 hits, $27.90 spend), Crunchbase (720 attempted, 40 hits, $108 spend)",
            "Add a formula column: cost-per-match = spend / hits for each stage",
            "Sum hits across all 5 stages and divide by 2,500 to get blended coverage",
            "Sum hits and spend for the 4 stages excluding Crunchbase, recompute blended coverage and cost without it",
            "Compare the marginal coverage lift from Crunchbase against its cost-per-match versus the 4-provider blended average",
          ],
          outputSample:
            "Provider      Attempted  Hits  Spend    Cost/Match\nApollo        2,500      780   $200.00  $0.256\nHunter         1,720      430    $86.00  $0.200\nClearbit       1,290      360   $154.80  $0.430\nPeopleDataLabs   930      210    $27.90  $0.133\nCrunchbase       720       40   $108.00  $2.700\n\n5-provider blended: 1,820/2,500 = 72.8% coverage, $0.314/match\n4-provider (no Crunchbase): 1,780/2,500 = 71.2% coverage, $0.263/match",
          healthy: "Blended cost-per-match stays under roughly $0.40 while coverage clears 70%.",
          unhealthy: "A provider's marginal cost-per-match spikes 5-10x above the blended average while contributing under 3% of total coverage.",
          interpret:
            "Order and count both matter — a 5th provider recovering only 40 more contacts at $2.70 apiece isn't paying for itself once you can see the marginal math.",
          soWhat: [
            {
              symptom: "Crunchbase stage adds a 1.6-point coverage lift at roughly 10x the blended cost-per-match",
              action: "Drop Crunchbase from the waterfall and redeploy its $108 budget toward raising the People Data Labs attempt cap",
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
            role: "Import the waterfall log and compute cost-per-match and blended coverage",
            why: "Free, no account friction, handles the formula work for this audit without any paid tool",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A revised 4-provider waterfall order with blended coverage and cost-per-match projections, plus a one-line recommendation on Crunchbase backed by the marginal-cost number.",
      sampleOutput:
        "Klaviyo, Q3 waterfall audit (excerpt)\n\nProvider order: Apollo -> Hunter -> Clearbit -> People Data Labs\nBlended coverage: 71.2% (1,780 / 2,500)\nBlended cost-per-match: $0.263\n\nRecommendation: cut Crunchbase from the chain. It contributed 1.6 points of coverage at $2.70/match, roughly 10x the blended average. Redeploy its $108 budget toward a higher People Data Labs attempt cap instead.",
      successCriteria: [
        "Correctly computes cost-per-match for each of the 5 provider stages",
        "Correctly computes blended coverage with and without the cut provider",
        "Recommends cutting or keeping the lowest-ROI provider with the marginal cost-per-match number to back it up",
      ],
      portfolioReady: true,
    },
    {
      id: "gtm-engineering-signal-routing-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build the Signal-to-Routing Spec: Scoring, Decay, and AE Handoff",
      timeEstimate: "70 minutes",
      timeMinutes: 70,
      objective:
        "Given a raw signal feed for 5 accounts, build a weighted scoring formula, apply score decay for signal age, and assign each account to an AE, SDR, or nurture routing tier with the correct urgency flag.",
      companyId: "snowflake",
      scenario:
        "You're the GTM engineer at Snowflake building the account scoring and routing spec that will decide who an AE calls today versus who sits in a nurture sequence, before it gets handed to an engineer to wire into Clay and Salesforce.",
      brief:
        "Design a weighted signal-scoring formula, apply a decay multiplier based on signal age, then route each of 5 sample accounts into an AE, SDR, or nurture tier, flagging any account that needs outreach inside 2 hours.",
      mode: "build",
      conceptsCovered: [
        "Signal-triggered account scoring rubric",
        "Score-decay-aware routing thresholds",
      ],
      steps: [
        {
          stepId: "step-1-scoring-rubric",
          concept: "Signal-triggered account scoring rubric",
          lessonAnchor: "account-scoring-automation",
          theoryRecap:
            "The lesson's automated scoring architecture joins intent data, firmographics, and web activity, then runs an AI column that weights and scores each account, replacing the stale quarterly spreadsheet exercise with a live signal.",
          question:
            "Given 5 accounts each with a mix of fired signals (VP+ job change, funding round, tech stack install, pricing page visit, G2 review spike), what weighted formula turns those raw signals into one comparable score per account?",
          toolName: "Google Sheets",
          where: "Build a weights table, then a per-account signal matrix that multiplies fired signals by their weight.",
          procedure: [
            "Set signal weights: VP+ job change = 30, funding round = 25, tech stack install = 20, pricing page visit = 15, G2 review spike = 10",
            "Build a 5-account x 5-signal matrix marking which signals fired for each account",
            "Sum weighted values per account to get a raw score out of 100",
            "Rank the 5 accounts by raw score before applying any decay",
          ],
          outputSample:
            "Account              Job Chg  Funding  TechStack  PricingVisit  G2Spike  Raw Score\nBridgepoint Retail      30       25        -          15           -        70\nNorthwind Logistics      -       25       20            -         10        55\nHarrow Manufacturing    30        -       20           15           -        65\nCedar Analytics          -        -        -           15         10        25\nVantage Health          30       25       20            -           -        75",
          healthy: "Raw score spreads accounts across a usable range (roughly 20-80) instead of clustering everyone near the same number.",
          unhealthy: "Two accounts with very different real urgency land on the identical raw score with no way to break the tie.",
          interpret: "Raw score alone tells you relative interest, not urgency — that's what step 2's decay layer is for.",
          soWhat: [
            {
              symptom: "Raw scoring ranks accounts but two are tied and one signal is 3 weeks stale",
              action: "Carry raw scores into the decay step before finalizing any routing decision",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-decay-and-routing",
          concept: "Score-decay-aware routing thresholds",
          lessonAnchor: "signal-based-outbound-the-core-workflow",
          theoryRecap:
            "The lesson's routing logic sends a 70+ score directly to an AE's queue with a Slack alert, 40-69 triggers an automated SDR sequence, and below 40 goes to nurture — and time from signal to outreach under 2 hours consistently outperforms next-day sending by 3-4x in reply rate.",
          question:
            "Applying a 20%-per-week decay to each account's raw score and freshest signal age, which accounts move tiers, and which ones need a Slack alert for outreach inside 2 hours?",
          toolName: "Google Sheets",
          where: "Add a signal-age column and a decay formula next to the raw scores from step 1.",
          procedure: [
            "Record weeks since each account's freshest signal fired: Bridgepoint = 1 week, Northwind = 3 weeks, Harrow = 0 weeks (fired today), Cedar = 2 weeks, Vantage = 0 weeks (fired yesterday)",
            "Apply decay: decayed score = raw score x (1 - 0.20 x weeks since freshest signal)",
            "Assign routing tier from the decayed score: 70+ = AE queue, 40-69 = SDR sequence, under 40 = nurture",
            "Flag any account whose freshest signal fired within the last 24 hours for a <2h AE Slack alert regardless of tier",
          ],
          outputSample:
            "Account              Raw  Weeks Old  Decayed  Tier      <2h Flag\nBridgepoint Retail     70      1          56.0     SDR       no\nNorthwind Logistics    55      3          22.0     Nurture   no\nHarrow Manufacturing   65      0          65.0     SDR       yes\nCedar Analytics        25      2          15.0     Nurture   no\nVantage Health         75      0          75.0     AE        yes",
          healthy: "A fresh, high-scoring account (Vantage) clears the AE threshold and gets the <2h flag on the same pass.",
          unhealthy: "An account with a decent raw score but a 3-week-old signal (Northwind) still gets routed to an AE as if it were fresh.",
          interpret: "Decay is what stops AEs from chasing ghosts — Bridgepoint's raw 70 would have hit the AE queue undecayed, but 1 week of staleness drops it to SDR.",
          soWhat: [
            {
              symptom: "Northwind's raw score of 55 looks SDR-worthy but its freshest signal is 3 weeks old",
              action: "Route by decayed score, not raw score, and confirm nurture is correct for anything decayed under 40",
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
            role: "Build the weighted scoring matrix, apply decay, and assign routing tiers",
            why: "Free and sufficient to design and validate the spec before an engineer wires it into Clay and Salesforce",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A scoring and routing spec: the weighted signal formula, the decay multiplier, and a threshold table (AE/SDR/nurture) validated against 5 sample accounts with urgency flags.",
      sampleOutput:
        "Adyen, signal scoring + routing spec (excerpt)\n\nWeights: VP+ job change 30, funding round 25, tech stack install 20, pricing page visit 15, G2 review spike 10\nDecay: -20% per week since freshest signal\n\nAccount: Northwind Logistics — raw 78, 1 week old -> decayed 62.4 -> SDR sequence\nAccount: Bridgepoint Retail — raw 85, fired yesterday -> decayed 85 -> AE queue + <2h Slack alert",
      successCriteria: [
        "Weighted formula correctly sums signal values per account",
        "Decay is applied based on signal age before routing tier is assigned",
        "Accounts whose freshest signal fired within 24 hours are flagged for <2h AE outreach regardless of score tier",
      ],
      portfolioReady: true,
      stretch:
        "Add a 6th signal (competitor G2 review spike) and re-weight the formula to keep the total at 100 without simply shrinking every other weight proportionally.",
    },
  ],
  "developer-marketing": [
    {
      id: "developer-marketing-docs-trust-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Trust Pyramid Teardown: Three Developer Touchpoints",
      timeEstimate: "40 minutes",
      timeMinutes: 40,
      objective:
        "Given 3 synthetic developer-facing specimens (a docs homepage, a quickstart page, and a Discord channel history), identify the trust-pyramid violations in each and correctly ignore the plausible-but-harmless distractors.",
      companyId: "coinbase",
      scenario:
        "You're the developer marketing lead at Coinbase reviewing three touchpoints a prospective integrator hits before writing a line of code, checking each against the lesson's trust pyramid before a launch review.",
      brief:
        "Read each specimen, list the real defects with severity and why they matter, and correctly exclude the distractors that look suspicious but aren't actual trust violations.",
      mode: "teardown",
      conceptsCovered: [
        "The Developer Trust Pyramid",
        "Community Building That Doesn't Feel Like Marketing",
      ],
      teardownItems: [
        {
          itemId: "item-1-docs-homepage",
          specimen:
            "API docs homepage banner: 'Enterprise-Grade Payments API — Trusted by Fortune 500.' Below it, a 'View on GitHub' button links to a repo whose last commit was 14 months ago, with 340 open issues and 0 closed in the last 6 months. There is no CONTRIBUTING.md. The Community tab still reads 'Coming soon.'",
          specimenSource: "synthetic-realistic",
          prompt: "What in this homepage would make a developer stop evaluating before they ever open the quickstart?",
          answerKey: [
            {
              defect: "The linked GitHub repo shows 14 months of inactivity with 340 open issues and 0 closed in the last 6 months",
              severity: "critical",
              whyItMatters:
                "Developers check issue-close cadence before adopting an SDK — a dead-looking repo signals the integration will be unsupported, no matter what the banner claims",
              lessonRef: "GitHub presence",
              owner: "developer",
            },
            {
              defect: "The Community tab reads 'Coming soon' with no actual channel behind it",
              severity: "moderate",
              whyItMatters: "No community layer means no peer troubleshooting, which reads as 'you're on your own if this breaks'",
              lessonRef: "Community",
              owner: "either",
            },
          ],
          distractors: [
            "The banner claims 'Trusted by Fortune 500' without naming any specific customer",
            "The repo is published under a permissive open-source license",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-quickstart",
          specimen:
            "Quickstart page: 'Our API enables seamless integration with your payment stack. Simply authenticate and start making calls.' No code block appears anywhere on the page. A 'See full reference' link leads to a downloadable PDF.",
          specimenSource: "synthetic-realistic",
          prompt: "A developer lands on this quickstart intending to make their first API call in the next 10 minutes. What stops them?",
          answerKey: [
            {
              defect: "The quickstart has zero working code samples, only prose describing what to do",
              severity: "critical",
              whyItMatters: "Developers copy-paste to learn; prose without a runnable code block kills time-to-first-call before it starts",
              lessonRef: "Documentation quality",
              owner: "developer",
            },
            {
              defect: "The full reference is a static PDF instead of live, searchable docs",
              severity: "moderate",
              whyItMatters: "A PDF goes stale immediately and can't be indexed by the AI assistants developers now ask to integrate an API",
              lessonRef: "The AI Era: LLM-Facing Developer Marketing",
              owner: "developer",
            },
            {
              defect: "The copy uses vague marketing language ('seamless integration') instead of concrete technical detail",
              severity: "cosmetic",
              whyItMatters: "Developers pattern-match vague marketing language as a signal that the docs weren't written by an engineer",
              lessonRef: "Content That Actually Works With Developers",
              owner: "developer",
            },
          ],
          distractors: [
            "The reference link is labeled 'See full reference' instead of 'API Reference'",
            "The quickstart page has no visible page-load performance issues",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-discord-history",
          specimen:
            "Discord #announcements channel: 47 messages in the last 90 days, all authored by 'CommunityBot' or the marketing account, with zero replies from anyone carrying an 'Engineering' role tag. The pinned message reads 'v4.2 released! Read the changelog.' Twelve unanswered developer questions sit below it.",
          specimenSource: "synthetic-realistic",
          prompt: "Does this channel read as an active developer community, or as a broadcast feed nobody reads anymore?",
          answerKey: [
            {
              defect: "Zero engineering-tagged replies across 90 days despite 12 open developer questions sitting unanswered",
              severity: "critical",
              whyItMatters:
                "A community that never gets engineer engagement reads as abandoned, no matter how many messages get posted into it",
              lessonRef: "Community Building That Doesn't Feel Like Marketing",
              owner: "developer",
            },
            {
              defect: "All channel activity is bot- or marketing-authored broadcast content, not conversation",
              severity: "moderate",
              whyItMatters: "Broadcast-only channels train developers to stop checking them, which quietly kills the community layer",
              lessonRef: "Community Building That Doesn't Feel Like Marketing",
              owner: "either",
            },
          ],
          distractors: [
            "The channel is named #announcements rather than #general",
            "The pinned message links out to a changelog",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Draft the defect log with severity ratings for all 3 specimens",
            why: "Free, shareable, and enough structure to log defects, severity, and lesson references before a launch review",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A defect log across all 3 specimens with severity ratings, why-it-matters notes, and distractors correctly excluded.",
      sampleOutput:
        "Wise developer docs teardown (excerpt)\n\nSpecimen 2 — Quickstart page\nDefects found: (1) zero working code samples — critical; (2) reference is a static PDF — moderate; (3) 'seamless integration' language — cosmetic\nDistractors correctly excluded: reference link label wording, page load speed",
      successCriteria: [
        "Identifies all real defects per specimen with a defensible severity rating",
        "Does not flag either listed distractor as a defect",
        "Ties each defect to the specific trust-pyramid layer it violates",
      ],
      portfolioReady: true,
    },
    {
      id: "developer-marketing-metrics-dashboard-audit",
      tier: "core",
      archetype: "audit",
      title: "The QBR Slide Call: Revenue-Predictive Metrics vs Vanity Metrics",
      timeEstimate: "55 minutes",
      timeMinutes: 55,
      objective:
        "Given a synthetic monthly developer-platform dashboard and a synthetic onboarding funnel, decide which 2 metrics deserve the QBR headline slide and identify the single biggest onboarding-friction fix.",
      companyId: "adyen",
      scenario:
        "You're the developer marketing manager at Adyen preparing the quarterly business review deck. Leadership wants a headline metrics slide, and the draft currently leads with GitHub star count.",
      brief:
        "Evaluate the current month's dashboard against the lesson's revenue-predictive metrics, replace the vanity headline, then use a synthetic onboarding funnel to find and fix the biggest single drop-off step.",
      mode: "diagnostic",
      conceptsCovered: [
        "Distinguishing revenue-predictive metrics from vanity metrics",
        "Time-to-first-API-call as an onboarding friction proxy",
      ],
      steps: [
        {
          stepId: "step-1-metrics-triage",
          concept: "Distinguishing revenue-predictive metrics from vanity metrics",
          lessonAnchor: "metrics-that-predict-revenue-not-vanity",
          theoryRecap:
            "GitHub stars correlate weakly with revenue because they measure curiosity, not commitment; documentation NPS, SDK download growth rate, time-to-first-API-call, developer-to-paid conversion, and API call growth are what actually predict revenue.",
          question:
            "This month's dashboard shows GitHub stars +180 MoM, doc NPS 52, SDK downloads +3.1% WoW, TTFC 4m 20s, dev-to-paid conversion 2.8%, and API call growth +11% MoM. Which 2 metrics earn the QBR headline slide, and which one gets demoted to a footnote?",
          toolName: "Google Sheets",
          where: "List all 6 metrics with their current value and trend direction, then rank them by revenue-predictive strength.",
          procedure: [
            "List all 6 metrics with this month's value and month-over-month trend",
            "Mark each metric as revenue-predictive or vanity based on the lesson's guidance",
            "Rank the revenue-predictive metrics by trend strength: API call growth +11%, dev-to-paid conversion 2.8% (trending up), doc NPS 52, SDK downloads +3.1%",
            "Select the top 2 for the QBR headline slide and demote GitHub stars to a context footnote",
          ],
          outputSample:
            "Metric                     Value     Trend        Category\nGitHub stars               12,400    +180 MoM     Vanity\nDoc NPS                    52        flat         Predictive\nSDK downloads               -        +3.1% WoW    Predictive\nTime-to-first-API-call     4m 20s    -            Predictive (friction)\nDev-to-paid conversion     2.8%      +0.3pt QoQ   Predictive\nAPI call growth            -         +11% MoM     Predictive\n\nHeadline slide: dev-to-paid conversion, API call growth\nFootnote: GitHub stars",
          healthy: "The QBR headline leads with dev-to-paid conversion and API call growth trends, not raw star count.",
          unhealthy: "The deck opens with '12,400 GitHub stars, +180 this month' as the top-line win.",
          interpret: "Stars measure curiosity, not commitment — swapping the headline metric for the conversion trend tells leadership something they can act on.",
          soWhat: [
            {
              symptom: "QBR deck opens with GitHub star count as the top metric",
              action: "Replace the headline slide with dev-to-paid conversion rate trend and API call growth, demote stars to a footnote",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-onboarding-funnel",
          concept: "Time-to-first-API-call as an onboarding friction proxy",
          lessonAnchor: "the-sandbox-strategy-try-before-you-register",
          theoryRecap:
            "The lesson's sandbox strategy treats friction as the enemy: the most effective developer funnel lets a developer send their first API call in under two minutes with no email form, sales call, or credit card in the way.",
          question:
            "Current TTFC is 4m 20s against a 2-minute target. Given a 4-step onboarding funnel with a drop-off at each step, which single step should be cut or delayed first?",
          toolName: "Google Sheets",
          where: "Build a 4-step funnel table with percent of signups continuing at each step.",
          procedure: [
            "Record the funnel: signup form (100% start) -> email verification (78% continue) -> API key generation (74% continue) -> first API call (61% continue)",
            "Compute the percentage-point drop at each individual step",
            "Identify the step with the single largest drop-off share",
            "Propose a fix that removes or defers that step's friction without removing the gate entirely",
          ],
          outputSample:
            "Step                    % Continuing  Drop from Prior Step\nSignup form             100%          -\nEmail verification       78%          22 pts\nAPI key generation       74%           4 pts\nFirst API call           61%          13 pts\n\nLargest single drop: email verification (22 pts)",
          healthy: "No single onboarding step accounts for more than roughly 10 points of drop-off.",
          unhealthy: "One step (here, email verification) accounts for more than double any other step's drop-off.",
          interpret: "Email verification is the biggest single leak in the funnel, and it's also the step adding the most wait time before a developer can act.",
          soWhat: [
            {
              symptom: "22% of signups abandon during the email verification wait",
              action: "Issue a rate-limited sandbox key immediately at signup, and require verification only before a production key is issued",
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
            role: "Build the metrics triage table and the onboarding funnel drop-off table",
            why: "Free and sufficient to rank metrics and quantify funnel drop-off before handing a fix to engineering",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A revised QBR metrics slide (2 headline metrics, GitHub stars demoted to a footnote) plus one onboarding-funnel fix ranked by drop-off share.",
      sampleOutput:
        "Squarespace developer platform, Q2 dashboard review (excerpt)\n\nHeadline metrics: dev-to-paid conversion 3.4% (+0.3pt QoQ), API call growth +14% MoM\nDemoted: GitHub stars (context footnote only)\n\nFunnel fix: remove mandatory email verification before sandbox key issuance — recovers roughly 22% of signups per cohort",
      successCriteria: [
        "Correctly demotes GitHub stars from the headline slide based on the lesson's revenue-correlation guidance",
        "Selects the 2 strongest revenue-predictive metrics for the headline slide",
        "Identifies email verification as the largest single drop-off step and proposes a fix that keeps the gate before production access",
      ],
      portfolioReady: true,
    },
  ],

  "partner-ecosystem-marketing": [
    {
      id: "partner-ecosystem-marketing-tier-scorecard-audit",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Broken Partner Tier: Auditing a Co-Marketing Scorecard",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given a draft partner tier and incentive one-pager for Wise's bank and API partners, identify the structural defects that will make the program impossible to run before it ever launches.",
      companyId: "wise",
      scenario: "You're the partner marketing lead at Wise, reviewing a draft partner tier and incentive one-pager written by a product manager before it goes to legal and the first cohort of bank partners.",
      brief: "Read the one-pager. Flag every defect that would confuse a partner about what tier they're in, how they get paid, or how conflicts get resolved. Distinguish real defects from stylistic choices that are simply not your preference.",
      mode: "teardown",
      conceptsCovered: [
        "Tiering with quantifiable thresholds, not subjective labels",
        "Deal registration to prevent channel conflict",
        "Distinguishing partner-sourced from partner-influenced revenue",
      ],
      teardownItems: [
        {
          itemId: "wise-partner-tier-onepager",
          specimenSource: "synthetic-realistic",
          specimen:
            "WISE PARTNER PROGRAM — DRAFT ONE-PAGER (v0.3)\n\nTIERS\n- Bronze: new partners, still learning the API\n- Silver: good partners who are active\n- Gold: our best partners, high performers\n- Platinum: strategic, invite-only\n\nINCENTIVES\n- All partners earn a 15% commission on any customer that transacts through Wise after being referred, sourced, or simply mentioned in a partner's marketing.\n- Partners keep 100% of the commission with no cap, paid out monthly regardless of deal status.\n\nSUPPORT\n- Partner portal with API docs, brand assets, and a certification quiz.\n- Quarterly business reviews for Gold and Platinum tiers.\n- Partners can also list co-marketing wins directly on the Wise blog once approved by comms.\n\nMEASUREMENT\n- Dashboard shows total number of partners who completed certification this quarter.\n- Partner-of-the-quarter award goes to whoever posts the most on LinkedIn about Wise.",
          prompt:
            "Which parts of this one-pager will break the program once it's live, and which are just informal phrasing you'd tighten but wouldn't block launch over?",
          answerKey: [
            {
              defect: "Tier definitions use subjective adjectives ('good', 'best', 'high performers') instead of a quantifiable threshold like annual partner-sourced pipeline.",
              severity: "critical",
              whyItMatters: "A partner moving from Silver to Gold needs to know exactly what they need to hit and what they get. Without a number, no partner can self-assess progress, and Wise has no defensible basis for a tier dispute.",
              lessonRef: "building-your-first-partner-program",
              owner: "you",
            },
            {
              defect: "Commission is paid on any customer 'referred, sourced, or simply mentioned' with no deal registration process to establish which partner gets credit first.",
              severity: "critical",
              whyItMatters: "Without deal registration, two partners can both claim the same customer, and Wise has no record of who found the opportunity first. This is exactly the channel conflict deal registration exists to prevent.",
              lessonRef: "building-your-first-partner-program",
              owner: "developer",
            },
            {
              defect: "The only tracked metric is certification completions, a leading-indicator vanity metric, with no partner-sourced pipeline or partner-influenced revenue tracked anywhere.",
              severity: "moderate",
              whyItMatters: "Certifications tell you partners are engaged, not that they're producing revenue. Wise can't coach underperformers or reward top performers without the pipeline number the program is actually meant to drive.",
              lessonRef: "measuring-partner-performance",
              owner: "you",
            },
            {
              defect: "'Partner-of-the-quarter' is awarded for LinkedIn post volume rather than partner-sourced or partner-influenced revenue.",
              severity: "cosmetic",
              whyItMatters: "A visibility-based award sends the signal that social activity, not revenue, is what Wise rewards, which quietly retrains the partner base to optimize for the wrong behavior.",
              lessonRef: "measuring-partner-performance",
              owner: "you",
            },
          ],
          distractors: [
            "The program includes a partner portal with API docs, brand assets, and a certification quiz.",
            "Gold and Platinum tiers get quarterly business reviews.",
            "Approved co-marketing wins can be featured on the Wise blog.",
            "Commission is paid out monthly rather than quarterly.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Read the one-pager and leave inline comments on each defect found", why: "Free, comment threads make the audit trail visible", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A commented copy of the one-pager with every structural defect flagged, each tagged critical, moderate, or cosmetic, with a one-line fix.",
      sampleOutput:
        "Adyen Partner Tier Audit — Findings (excerpt)\n\nCRITICAL: 'Preferred' tier has no revenue threshold. Fix: define as $250K annual partner-sourced pipeline, reviewed quarterly.\n\nCRITICAL: No deal registration window specified (partners assume 'first mention' wins, no timestamp system exists). Fix: 30-day registration window logged in the partner portal, first-registered wins the margin.\n\nMODERATE: Dashboard tracks integration installs, not pipeline. Fix: add partner-sourced and partner-influenced pipeline as the two headline metrics.",
      successCriteria: [
        "Identifies both critical defects (subjective tiers, missing deal registration) without prompting",
        "Correctly separates real structural defects from stylistic details that aren't blockers",
        "Proposes a concrete fix for each defect, not just a description of the problem",
      ],
      portfolioReady: true,
    },
    {
      id: "partner-ecosystem-marketing-tier-program-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "Build the First Tier and Incentive Structure for a Partner Network",
      timeEstimate: "55 minutes",
      timeMinutes: 55,
      objective: "Design a complete tier structure, incentive plan, and measurement dashboard for Snowflake's ISV partner segment, which currently has ad hoc relationships and no formal program.",
      companyId: "snowflake",
      scenario: "You're the partner marketing lead at Snowflake. The Snowflake Partner Network has 40 ISV partners building on top of Snowflake's data cloud, but relationships have grown organically with no tiers, no clear incentives, and no shared metric for what a 'good' partner looks like.",
      brief: "Design a tiering system with quantifiable thresholds, an incentive plan that avoids channel conflict, and a measurement plan that separates partner-sourced from partner-influenced revenue.",
      mode: "build",
      conceptsCovered: [
        "Tiering with quantifiable thresholds, not subjective labels",
        "Distinguishing partner-sourced from partner-influenced revenue",
      ],
      steps: [
        {
          stepId: "step-1-tier-thresholds",
          concept: "Tiering with quantifiable thresholds, not subjective labels",
          lessonAnchor: "building-your-first-partner-program",
          theoryRecap: "The lesson's tiering section argues tiers only motivate partners when the threshold to move up is a specific number, not a subjective label, and each tier has a defined benefit attached.",
          question: "You have 40 ISV partners at wildly different revenue levels, from $0 in partner-sourced pipeline to one partner at $1.8M. What's the tier structure?",
          toolName: "Google Sheets",
          where: "Build a 4-row table: tier name, annual partner-sourced pipeline threshold, benefit unlocked, number of current partners who qualify.",
          procedure: [
            "List all 40 partners with their trailing-12-month partner-sourced pipeline in one column",
            "Sort descending and look for natural breakpoints in the distribution rather than picking round numbers arbitrarily",
            "Define 4 tiers (Early, Active, Elite, Strategic) with a specific pipeline threshold for each",
            "Attach one concrete benefit per tier (marketplace featuring, co-marketing budget, joint QBR, executive sponsor)",
          ],
          outputSample:
            "Snowflake ISV Partner Tiers (draft)\n\nEarly Partner — $0-$50K annual partner-sourced pipeline (22 partners qualify)\n  Benefit: Partner portal access, certification track\n\nActive Partner — $50K-$250K (11 partners qualify)\n  Benefit: Marketplace listing featured placement, quarterly enablement webinar\n\nElite Partner — $250K-$750K (5 partners qualify)\n  Benefit: Joint QBR, $10K annual MDF\n\nStrategic Partner — $750K+ (2 partners qualify)\n  Benefit: Executive sponsor, joint go-to-market campaign, co-authored case study",
          healthy: "Each tier has a specific pipeline number and every partner can see exactly which tier they're in today and what's required to move up.",
          unhealthy: "Tiers are named Bronze/Silver/Gold with no threshold attached, so partners can't tell whether they're close to the next tier or not.",
          interpret: "A threshold-based tier turns the program into a scoreboard partners can track themselves; a label-based tier turns it into a subjective judgment call Snowflake has to defend in every partner conversation.",
          soWhat: [
            { symptom: "Partners keep asking what tier they're in", action: "Publish the threshold table and refresh it monthly in the partner portal", effort: "30 min" },
            { symptom: "One partner disputes their tier placement", action: "Point to the specific trailing-12-month number, not a subjective assessment", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-measurement-plan",
          concept: "Distinguishing partner-sourced from partner-influenced revenue",
          lessonAnchor: "measuring-partner-performance",
          theoryRecap: "The lesson separates partner-sourced pipeline (the partner brought the opportunity) from partner-influenced revenue (the partner helped close a deal Snowflake already had), noting influenced revenue typically runs 3-5x larger.",
          question: "Snowflake's sales team wants one number to report to the board. Do you report sourced, influenced, or both, and why does it matter which?",
          toolName: "Google Sheets",
          where: "Add two columns to the partner tracking sheet: sourced pipeline and influenced revenue, tagged by deal.",
          procedure: [
            "For each closed deal, tag it sourced (partner brought the lead) or influenced (partner contributed to an existing deal, e.g. required integration or reference call)",
            "Sum both columns separately per partner and per quarter",
            "Report both numbers to the board, sourced as the leading indicator of partner effort, influenced as the lagging proof of ecosystem value",
            "Flag any partner with high influenced revenue but near-zero sourced pipeline as a candidate for a proactive co-selling conversation",
          ],
          outputSample:
            "Q3 Partner Revenue Report (excerpt)\n\nPartner: DataRobot\n  Sourced: $180K (partner originated the opportunity)\n  Influenced: $640K (technical validation on 3 enterprise deals Snowflake already had)\n\nBoard summary: $2.1M sourced across all partners, $7.4M influenced. Influenced is 3.5x sourced, consistent with the lesson's expected ratio.",
          healthy: "Both numbers are tracked and reported separately, so a partner with strong influenced revenue but weak sourcing gets coached toward proactive selling instead of being underrated.",
          unhealthy: "Only one blended 'partner revenue' number exists, hiding whether partners are originating deals or just supporting deals Snowflake already had.",
          interpret: "Sourced pipeline measures partner effort; influenced revenue measures partner value. A program that only tracks one is blind to half the picture.",
          soWhat: [
            { symptom: "A partner looks like a low performer on sourced pipeline alone", action: "Check their influenced revenue before deciding they're underperforming", effort: "30 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Build the tier table and the sourced/influenced tracking sheet", why: "Free, sortable, easy to share with sales ops for validation", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "PartnerStack", role: "Automate commission calculation and payout once the tier structure is finalized", why: "Removes manual spreadsheet chasing once deal registration volume grows past a handful of partners a month", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable: "A 4-tier partner structure with quantifiable pipeline thresholds and attached benefits, plus a sourced-vs-influenced revenue tracking sheet ready to hand to sales ops.",
      sampleOutput:
        "Robinhood Institutional Partner Tiers (excerpt)\n\nActive Partner — $100K-$400K annual partner-sourced pipeline\n  Benefit: Featured API marketplace placement, quarterly enablement session\n\nQ2 Revenue Report: $890K sourced, $3.1M influenced (3.5x ratio) across 12 active partners.",
      successCriteria: [
        "Every tier has a specific, non-overlapping pipeline threshold",
        "Sourced and influenced revenue are tracked as separate columns, never blended into one number",
        "At least one concrete, non-generic benefit is attached to each tier",
      ],
      portfolioReady: true,
      stretch: "Model what happens to the tier distribution if Snowflake's ISV program doubles from 40 to 80 partners next year, does the top tier's threshold need to move?",
    },
  ],
  "ai-product-positioning": [
    {
      id: "ai-product-positioning-buzzword-audit",
      tier: "mini",
      archetype: "teardown",
      title: "AI-Washing or Real Differentiation? Auditing a Positioning Statement",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given a draft AI feature positioning statement for a Robinhood market-insights feature, identify where it hides behind buzzwords instead of naming a real outcome, moat, or proof point.",
      companyId: "robinhood",
      scenario: "You're a product marketer at Robinhood, reviewing a draft positioning statement for a new AI-powered market insights feature before it goes into the app's feature announcement and sales enablement deck.",
      brief: "Read the draft statement. Flag every line that's AI-washing (buzzwords standing in for a real claim) versus real differentiation grounded in outcome, moat, or evidence.",
      mode: "teardown",
      conceptsCovered: [
        "Framing AI value through the Jobs-to-Be-Done lens, not the technology",
        "Specific, methodology-backed accuracy claims over vague superlatives",
        "Naming the real competitive alternative, not just other AI tools",
      ],
      teardownItems: [
        {
          itemId: "robinhood-ai-insights-positioning-draft",
          specimenSource: "synthetic-realistic",
          specimen:
            "ROBINHOOD MARKET INSIGHTS AI — DRAFT POSITIONING (internal)\n\nHeadline: \"Powered by cutting-edge generative AI, our revolutionary market insights engine leverages advanced machine learning to deliver next-generation intelligence.\"\n\nSub-head: \"Our AI is smarter than any other AI on the market, built on a proprietary neural architecture that outperforms the competition.\"\n\nBody: \"Using state-of-the-art large language models, Market Insights AI analyzes vast amounts of data to surface highly accurate, real-time signals. Our AI-powered engine is trained on massive datasets and continuously learns to get even better. Investors who use Market Insights AI report feeling more confident in their decisions.\"\n\nCTA: \"Experience the future of investing with AI.\"",
          prompt:
            "Which claims in this draft are AI-washing that could be cut with no loss of meaning, and which, if any, are real differentiation worth keeping?",
          answerKey: [
            {
              defect: "The headline and sub-head never name a job the AI does (e.g. flagging unusual options activity before a retail investor would notice it); every phrase is technology description, not outcome.",
              severity: "critical",
              whyItMatters: "The lesson's Jobs-to-Be-Done frame argues a feature is valuable because of the job it does, not because it uses AI. A retail investor reading this headline still can't say what the feature actually does for them.",
              lessonRef: "the-jobs-to-be-done-frame-for-ai-features",
              owner: "you",
            },
            {
              defect: "'Highly accurate' and 'smarter than any other AI' are vague superlatives with no methodology, sample size, or comparison basis attached.",
              severity: "critical",
              whyItMatters: "The lesson's skepticism-handling section is explicit: 'highly accurate' signals you don't have data or are hiding something, while a specific claim like '92% precision, validated on 10,000 trades' signals rigor.",
              lessonRef: "handling-skepticism",
              owner: "you",
            },
            {
              defect: "'Outperforms the competition' never says which competition, generic AI tools, or the real alternative most retail investors are actually using (checking a stock app manually or following a forum).",
              severity: "moderate",
              whyItMatters: "The lesson's April Dunford framing argues the real competitive alternative for an AI feature is often a human doing the job manually, not another AI vendor. Naming the real alternative makes the value concrete.",
              lessonRef: "april-dunfords-framework-for-ai-positioning",
              owner: "you",
            },
            {
              defect: "'Investors report feeling more confident' is an unattributed, unquantified claim with no customer name, sample size, or metric.",
              severity: "moderate",
              whyItMatters: "The lesson's proof-over-promises point argues a named case study with a specific timeline and number beats a vague, anonymous sentiment claim every time.",
              lessonRef: "handling-skepticism",
              owner: "you",
            },
          ],
          distractors: [
            "The CTA is short and action-oriented.",
            "The body mentions the model continuously learns from new data.",
            "The statement is written in second person, addressing the investor directly.",
            "The headline is a single sentence rather than a multi-sentence paragraph.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Mark up the draft with inline comments per defect", why: "Free, comment threads double as the review record for the PMM lead", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A commented copy of the draft with every AI-washing claim flagged and tagged critical, moderate, or cosmetic, plus a one-line rewrite direction for each.",
      sampleOutput:
        "Coinbase AI Fraud Alerts — Positioning Audit (excerpt)\n\nCRITICAL: 'Powered by advanced AI' names no job. Rewrite direction: lead with the job ('catches suspicious sign-ins before they become account takeovers').\n\nCRITICAL: 'Industry-leading accuracy' has no number. Rewrite direction: '99.2% precision on flagged sign-ins, validated across 2M logins in Q2 2026.'",
      successCriteria: [
        "Flags both critical defects (no named job, vague superlative) without prompting",
        "Distinguishes AI-washing from stylistic choices that aren't real defects",
        "Proposes a concrete rewrite direction for each flagged claim, not just a critique",
      ],
      portfolioReady: true,
    },
    {
      id: "ai-product-positioning-stance-rebuild",
      tier: "core",
      archetype: "rebuild",
      title: "Rebuild the Positioning: Choosing the Right AI Stance for a Regulated Buyer",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective: "Given Coinbase's institutional AI-powered transaction monitoring feature and a compliance-focused buyer, choose the correct positioning stance and rewrite the statement to fit it.",
      companyId: "coinbase",
      scenario: "You're a product marketer at Coinbase, positioning a new AI-powered transaction monitoring feature to institutional compliance teams at banks and exchanges evaluating Coinbase for custody. The current draft leads with model architecture, and it's not landing with buyers.",
      brief: "Diagnose which of the three AI positioning stances fits a compliance buyer, then rebuild the statement around the Jobs-to-Be-Done frame with specific, methodology-backed proof.",
      mode: "build",
      conceptsCovered: [
        "Choosing the right AI positioning stance for buyer sophistication and risk",
        "Framing AI value through the Jobs-to-Be-Done lens, not the technology",
      ],
      steps: [
        {
          stepId: "step-1-choose-stance",
          concept: "Choosing the right AI positioning stance for buyer sophistication and risk",
          lessonAnchor: "the-three-ai-positioning-stances",
          theoryRecap: "The lesson names three stances: lead with outcome (hide the AI), lead with magic (show the AI), or lead with trust (explain the AI), with trust reserved for buyers facing reputational or regulatory risk from the AI's decision.",
          question: "The buyer is a bank's compliance team deciding whether to trust Coinbase's AI to flag suspicious institutional transactions. Which of the three stances fits, and why do the other two fail here?",
          toolName: "Google Docs",
          where: "Write a 3-sentence justification for the chosen stance before touching the positioning copy itself.",
          procedure: [
            "List the buyer's actual fear (approving a system that misses a suspicious transaction, or can't explain a flagged one to a regulator)",
            "Rule out lead-with-outcome (compliance can't just trust a black-box result with regulatory exposure on the line)",
            "Rule out lead-with-magic (model novelty doesn't reduce the buyer's regulatory risk, it can even increase suspicion)",
            "Confirm lead-with-trust: the positioning must explain what the model was trained on, how it flags, and where a human reviews before any action is taken",
          ],
          outputSample:
            "Stance justification: Lead with trust. The buyer's job isn't 'get faster flags', it's 'defend this decision to a regulator.' Outcome-only positioning ('40% faster flagging') doesn't address that fear. Magic-first positioning actively raises suspicion in a compliance context. Trust-first, explaining training data, flag logic, and human review, is the only stance that removes the actual blocker to adoption.",
          healthy: "The stance decision is made explicitly, in writing, before any copy is drafted, and it's justified by the buyer's specific fear, not a general preference for one stance.",
          unhealthy: "The team picks a stance by instinct or copies whatever a competitor did, without naming the buyer's actual fear first.",
          interpret: "Stance follows buyer risk, not company preference. A compliance buyer's fear (explaining a decision to a regulator) determines the stance more than what the AI is technically capable of.",
          soWhat: [
            { symptom: "Sales says the AI pitch isn't landing with compliance teams", action: "Check whether the deck leads with model architecture instead of the buyer's regulatory fear", effort: "30 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-rewrite-with-jtbd",
          concept: "Framing AI value through the Jobs-to-Be-Done lens, not the technology",
          lessonAnchor: "the-jobs-to-be-done-frame-for-ai-features",
          theoryRecap: "The lesson argues a feature is valuable for the job it does, not the technology behind it, and that trust-first positioning for regulated buyers needs specific, methodology-backed proof, not vague claims.",
          question: "The current draft opens with 'Built on a proprietary transformer model fine-tuned on blockchain transaction data.' What's the job-first, trust-backed rewrite?",
          toolName: "Google Docs",
          where: "Rewrite the opening two sentences of the positioning statement, then add one specific, sourced proof point.",
          procedure: [
            "Name the job first: helping a compliance team clear or escalate a flagged transaction faster and defensibly",
            "State the outcome with a specific, methodology-backed number, not a superlative",
            "Add one sentence on human oversight (a compliance analyst reviews every high-risk flag before action, the model never acts alone)",
            "Cut every remaining mention of model architecture from the customer-facing statement, keep it in the technical appendix instead",
          ],
          outputSample:
            "Rewrite: 'Coinbase's transaction monitoring flags suspicious institutional activity with 91% precision, validated on 500,000 transactions reviewed by our compliance team in Q1 2026, so your analysts spend less time chasing false positives and more time on real risk. Every high-risk flag is reviewed by a human compliance analyst before any account action is taken. Full model documentation is available for your audit team on request.'",
          healthy: "The rewrite leads with the job and a specific number, then explains human oversight, with model architecture detail moved to a technical appendix for buyers who ask.",
          unhealthy: "The rewrite still opens with 'proprietary transformer model' or a vague 'highly accurate' claim, which fails the same skepticism test the original draft did.",
          interpret: "For a regulated buyer, the job is defensibility, so the proof point (sample size, review process) matters more than the phrase 'AI-powered' ever could.",
          soWhat: [
            { symptom: "Compliance buyers ask for more detail after reading the positioning", action: "Point them to the technical appendix instead of front-loading architecture into the main pitch", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Draft the stance justification and rewrite the positioning statement", why: "Free, easy to share with compliance and legal for review before it ships", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A one-paragraph stance justification plus a rewritten positioning statement that leads with the job, a specific methodology-backed proof point, and explicit human oversight language.",
      sampleOutput:
        "Wise AI Sanctions Screening — Rebuilt Positioning (excerpt)\n\n'Wise's sanctions screening flags high-risk cross-border transfers with 94% precision, validated on 1.2M transfers reviewed in Q4 2025, so your compliance team spends less time on false positives and more time on genuine risk. Every flag is reviewed by a licensed compliance analyst before a transfer is held. Full model documentation available on request.'",
      successCriteria: [
        "Explicitly justifies the trust-first stance based on the buyer's regulatory fear, not a generic preference",
        "Rewritten statement leads with the job, not the model architecture",
        "Includes one specific, methodology-backed proof point and one human-oversight sentence",
      ],
      portfolioReady: true,
      stretch: "Write the alternate version of this positioning for a developer buyer instead of a compliance buyer, which stance changes and why?",
    },
  ],

  "product-led-sales-pmm": [
    {
      id: "product-led-sales-pmm-pql-rubric-audit",
      tier: "mini",
      archetype: "audit",
      title: "The PQL Audit: Sorting Signal From Noise",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a mock 15-account usage export for free-trial users, apply the lesson's PQL criteria to decide which accounts are genuine product-qualified leads ready for a sales-assist conversation, and which are vanity activity that would waste a rep's time.",
      companyId: "squarespace",
      scenario:
        "You're the PMM at Squarespace validating a proposed PQL definition before it gets wired into the sales team's queue. Sales is complaining that half of the 'qualified' leads they're getting are single-page hobby sites that will never upgrade.",
      brief:
        "Import the export, score each account against the lesson's PQL signals (feature depth, usage ceiling, team invites, active days), and split the list into route-to-sales, nurture-in-product, and not-yet.",
      mode: "diagnostic",
      conceptsCovered: ["PQLs: proving product-market fit through behavior, not form fills"],
      steps: [
        {
          stepId: "step-1-score-the-export",
          concept: "PQLs: proving product-market fit through behavior, not form fills",
          lessonAnchor: "pqls-the-bridge-between-product-and-sales",
          theoryRecap:
            "The lesson defines a PQL as a free user whose in-product behavior already proves they need the paid tier, repeated feature use, an invited team, or a hit usage ceiling, not a lead score built from campaign clicks.",
          question:
            "Of 15 free-trial accounts, which ones have actually proven they need Squarespace's paid tier, versus accounts that are merely active but not commercially ready?",
          toolName: "Google Sheets",
          where: "Import the 15-row export, freeze the header row, add a verdict column.",
          procedure: [
            "Import the export: account, custom_domain_attempts, team_invites_sent, pages_published, days_active_14d, hit_storage_cap.",
            "Flag any account with team_invites_sent >= 2 OR hit_storage_cap = TRUE as a strong PQL signal.",
            "Flag accounts with pages_published = 1 and days_active_14d <= 2 as low-intent, regardless of custom_domain_attempts.",
            "Cross-check custom_domain_attempts >= 1 as a commercial-intent signal only when paired with at least one other signal.",
            "Sort into three buckets: route-to-sales, nurture-in-product, not-yet.",
          ],
          outputSample:
            "ROUTE TO SALES (4 accounts)\n  acct_1044 - 3 team invites, hit storage cap, 9 active days\n  acct_1091 - 2 team invites, custom domain attempt, 11 active days\n  ...2 more\n\nNURTURE IN PRODUCT (6 accounts)\n  acct_1052 - 1 page, custom domain attempt, but 1 active day only\n  ...5 more\n\nNOT YET (5 accounts)\n  acct_1077 - 1 page, 0 invites, 1 active day, no domain attempt",
          healthy:
            "Route-to-sales bucket only contains accounts with a team-invite or storage-cap signal, the two hardest signals to fake.",
          unhealthy:
            "Treating a single custom-domain click as sufficient to route to sales, that's curiosity, not proof of need.",
          interpret:
            "A PQL definition has to survive the question 'could this signal happen by accident,' team invites and storage caps can't, a domain click alone can.",
          soWhat: [
            {
              symptom: "Sales says half their 'PQLs' are hobby accounts",
              action: "Require two independent signals, not one, before routing to sales",
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
            role: "Import the usage export and build the scoring/verdict columns",
            why: "No account friction, filters and formulas are enough for a 15-row audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A scored 15-account list split into route-to-sales, nurture-in-product, and not-yet, with the specific signal combination that justified each verdict.",
      sampleOutput:
        "Coinbase free-trial PQL audit (excerpt)\n\nROUTE TO SALES\n  acct_2031 - invited 4 teammates, hit API rate cap, 12/14 active days -> strong PQL, route within 24h\n\nNURTURE IN PRODUCT\n  acct_2048 - tried custom webhook setup once, only 2 active days -> send in-product tips, re-check in 7 days\n\nNOT YET\n  acct_2059 - 0 invites, 1 active day, no advanced feature touched -> leave in trial nurture",
      successCriteria: [
        "Every route-to-sales account has at least two independent PQL signals, not one",
        "Verdicts distinguish curiosity clicks (single signal) from proven intent (combined signals)",
      ],
      portfolioReady: true,
    },
    {
      id: "product-led-sales-pmm-champion-roi-one-pager",
      tier: "core",
      archetype: "build-the-asset",
      title: "The Champion's ROI One-Pager: From Free Tier to Economic Buyer",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a free-tier team's usage data and a real expansion trigger, build a champion enablement one-pager that a non-technical champion can forward to their economic buyer without you in the room, translating usage into an ROI argument.",
      companyId: "coinbase",
      scenario:
        "You're the PMM at Coinbase supporting the Coinbase Business self-serve product. A five-person operations team has been using the free tier for three months and just hit the seat and API-call ceiling, their champion wants to go to their finance lead for budget but has no idea how to frame it.",
      brief:
        "Separate what the champion cares about from what the economic buyer cares about, then build a one-pager the champion can send upward on their own.",
      mode: "build",
      conceptsCovered: [
        "Champions vs. economic buyers: different people, different questions",
        "The expansion motion: selling the next step, not the original problem",
      ],
      steps: [
        {
          stepId: "step-1-separate-the-audiences",
          concept: "Champions vs. economic buyers: different people, different questions",
          lessonAnchor: "champions-vs-economic-buyers",
          theoryRecap:
            "The lesson splits PLS buyers into the champion, who already gets value and wants the team to keep using the product, and the economic buyer, who asks about total cost of ownership and payback, not day-to-day convenience.",
          question:
            "The champion's notes say 'this saves me hours every week.' What does the finance lead actually need to see instead?",
          toolName: "Google Docs",
          where: "Draft two short columns side by side: what the champion says, what the economic buyer needs.",
          procedure: [
            "List the champion's own language: time saved, fewer manual reconciliations, team already relies on it daily.",
            "Reframe each item as a cost or risk the economic buyer tracks: hours saved x loaded hourly rate, cost of the manual error it prevents, cost of losing 3 months of team habit if they revert to the free tier's limits.",
            "Drop any champion language that doesn't translate into a dollar or risk figure, it won't move a budget conversation.",
          ],
          outputSample:
            "CHAMPION LANGUAGE -> ECONOMIC BUYER FRAME\n'Saves me 6 hrs/week on reconciliation' -> '6 hrs/week x 5 users x $45/hr loaded rate = $1,170/week in recovered ops time'\n'Team already lives in it' -> 'Reverting to the free tier's 2-seat cap forces 3 of 5 users back to manual spreadsheets'\n'It just works' -> (dropped, no dollar or risk translation)",
          healthy: "Every line that survives into the one-pager has a number or a named risk attached to it.",
          unhealthy: "Shipping 'the team loves it' as a bullet point on a document meant for a finance approver.",
          interpret:
            "Champion enablement fails when it's just the champion's enthusiasm typed up, it works when it does the economic buyer's math for them.",
          soWhat: [
            {
              symptom: "Champion says the pitch 'didn't land' with finance",
              action: "Check whether every bullet has a dollar figure or named risk, not just a feeling",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-build-the-expansion-case",
          concept: "The expansion motion: selling the next step, not the original problem",
          lessonAnchor: "the-expansion-motion",
          theoryRecap:
            "The lesson frames expansion messaging as selling the next step to a team that already knows the product works, not re-selling the original problem the free tier already solved.",
          question:
            "This team hit the 2-seat, 500-call API ceiling. What's the one-pager's actual ask, and how is it different from a new-customer pitch?",
          toolName: "Google Docs",
          where: "Build the final one-pager: trigger, cost of staying, cost of upgrading, payback period.",
          procedure: [
            "State the trigger plainly: 'Team hit the free tier's 2-seat / 500 API-call monthly ceiling in month 3.'",
            "Show the cost of staying: 3 users blocked from the workflow, reverting to manual process at $1,170/week.",
            "Show the cost of upgrading: paid tier at $X/seat/month for 5 seats, plus unlimited API calls.",
            "Calculate payback period: upgrade cost vs. recovered ops time, expressed in weeks, not a vague 'ROI positive' claim.",
            "Close with a single-sentence ask the champion can literally paste into a Slack message to their finance lead.",
          ],
          outputSample:
            "COINBASE BUSINESS - UPGRADE CASE (1 page)\n\nTrigger: Ops team hit the 2-seat / 500-call ceiling in month 3.\nCost of staying: $1,170/week in manual reconciliation across 3 blocked users.\nCost of upgrading: $60/seat/month x 5 seats = $300/month.\nPayback: upgrade cost recovered in under 1 week of avoided manual work.\n\nAsk: 'Approve the 5-seat Business plan ($300/mo), it pays for itself in the first week.'",
          healthy: "The one-pager's ask is one sentence a champion can paste into Slack without editing.",
          unhealthy: "A one-pager that requires the champion to explain or defend the numbers themselves.",
          interpret:
            "Expansion messaging succeeds when the champion becomes an unpaid internal salesperson, that only happens if the document does all the persuading on its own.",
          soWhat: [
            {
              symptom: "Deals stall after the champion goes quiet for two weeks",
              action: "Check whether the one-pager gives them a literal sentence to send, not just data to interpret",
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
            role: "Draft and format the champion one-pager",
            why: "Free, easy to share as a link the champion can forward directly",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Build the payback-period calculation before dropping numbers into the doc",
            why: "Keeps the ROI math auditable and easy to update if pricing changes",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page champion enablement document with the expansion trigger, cost-of-staying vs. cost-of-upgrading math, payback period, and a one-sentence ask the champion can forward unedited.",
      sampleOutput:
        "Klaviyo - Growth Plan Upgrade Case (1 page)\n\nTrigger: Marketing team hit the Email tier's 1,500-contact send limit in month 2.\nCost of staying: campaigns paused mid-send twice this month, an estimated $4,200 in missed promotional revenue.\nCost of upgrading: Growth plan adds unlimited contacts at $150/month.\nPayback: recovered in the first paused campaign alone.\n\nAsk: 'Approve the Growth plan upgrade ($150/mo), one paused campaign already cost us 28x that.'",
      successCriteria: [
        "Every champion-language line is translated into a dollar figure or named risk before it appears in the deliverable",
        "The one-pager ends with a single, forwardable sentence rather than a data dump",
      ],
      portfolioReady: true,
    },
  ],
  "ai-tools-for-pmms": [
    {
      id: "ai-tools-for-pmms-positioning-draft-critique",
      tier: "mini",
      archetype: "ai-critique",
      title: "Editing the Junior Analyst: Critiquing an AI Positioning Draft",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a raw AI-generated positioning doc excerpt for Mailchimp's AI Growth Assistant, identify every place the draft is generic, contradicts known institutional memory, or needs a specific human-sourced detail before it's fit to ship.",
      companyId: "mailchimp",
      scenario:
        "You're the PMM at Mailchimp reviewing a first-pass positioning doc that a teammate generated with an LLM for the AI Growth Assistant feature. It reads fine on a skim, but you know things the model doesn't.",
      brief:
        "Treat the draft like a junior analyst's first pass: mark what's generic filler, what contradicts what sales has told you, and what's missing a real proof point.",
      mode: "diagnostic",
      conceptsCovered: ["AI drafts positioning fast but has no institutional memory of what already failed"],
      steps: [
        {
          stepId: "step-1-mark-the-gaps",
          concept: "AI drafts positioning fast but has no institutional memory of what already failed",
          lessonAnchor: "drafting-positioning-and-messaging-first-pass-not-final-cut",
          theoryRecap:
            "The lesson treats an LLM's first draft as useful structure and phrasing options with zero shipping authority, because it has no memory of which campaigns already flopped or which words your own sales team refuses to say out loud.",
          question:
            "This draft calls the AI Growth Assistant 'a seamless, all-in-one solution.' You know two things the model doesn't. What are they, and what should replace that line?",
          toolName: "Google Docs",
          where: "Read the draft excerpt, annotate every generic or unverified claim inline.",
          procedure: [
            "Read the full draft excerpt once without editing.",
            "Flag any phrase that could describe literally any competitor's AI feature (generic filler).",
            "Cross-check each specific claim against what you know: sales' actual objection language, past campaign angles that already failed.",
            "Mark any claim with no source or number attached as 'needs a real proof point.'",
            "Rewrite the flagged lines with the missing institutional detail.",
          ],
          outputSample:
            "DRAFT: 'Mailchimp's AI Growth Assistant is a seamless, all-in-one solution that transforms your marketing.'\n\nFLAGS:\n  - 'seamless' -> sales has told you prospects roll their eyes at this exact word, drop it\n  - 'all-in-one solution' -> the 'all-in-one platform' angle already flopped in Q1 campaigns per the last debrief, don't reuse it\n  - 'transforms your marketing' -> no proof point attached, needs a real stat\n\nREWRITE: 'Mailchimp's AI Growth Assistant flags your highest-conversion customers automatically, so you stop guessing who to email first.'",
          healthy: "Every generic phrase gets replaced with something only someone who talks to customers weekly would know.",
          unhealthy: "Shipping the AI's draft with a light copyedit pass and no institutional-memory check at all.",
          interpret:
            "The gap between a usable AI draft and a shippable one is exactly the information the model was never given, what already failed and what your own team refuses to say.",
          soWhat: [
            {
              symptom: "A positioning doc reads fine but sales won't use the language in it",
              action: "Run it past sales and support before it ships, not after",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Read and annotate the draft with inline comments",
            why: "Free, comment threads make the critique easy to hand back to the original drafter",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "ChatGPT",
            role: "Regenerate the flagged lines once you've supplied the missing institutional detail",
            why: "Free tier is enough to redraft a paragraph once you've told it what to fix",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "An annotated version of the draft with every generic or unverified line flagged, plus a rewritten version for at least three flagged lines.",
      sampleOutput:
        "Squarespace AI positioning critique (excerpt)\n\nDRAFT: 'Our AI website builder is the smartest way to launch your site.'\nFLAG: 'smartest way' has no proof point, and 'launch your site' ignores that most Squarespace users are redesigning an existing site, not launching a new one.\nREWRITE: 'Squarespace's AI design tools rebuild your existing site's layout in minutes, no template shopping required.'",
      successCriteria: [
        "Every generic, competitor-interchangeable phrase in the draft is flagged with a reason",
        "At least three flagged lines are rewritten using a specific, sourced detail",
      ],
      portfolioReady: true,
    },
    {
      id: "ai-tools-for-pmms-battlecard-skeleton-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Battlecard in Minutes: Drafting With AI, Then Adding the One Thing AI Can't",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given raw competitor intel bullet points, use an AI tool to draft a battlecard skeleton, then add the single human-sourced customer quote or proof point that the lesson says is what actually makes reps use it.",
      companyId: "klaviyo",
      scenario:
        "You're the PMM at Klaviyo and a competitor just shipped a pricing change. Reps need an updated battlecard before their next call, not next week.",
      brief:
        "Draft the battlecard skeleton with AI from the raw intel, then add the one real customer detail that makes it usable instead of generic.",
      mode: "build",
      conceptsCovered: ["Sales enablement content scales with AI, but a human-sourced detail is what makes reps trust it"],
      steps: [
        {
          stepId: "step-1-draft-then-add-the-human-detail",
          concept: "Sales enablement content scales with AI, but a human-sourced detail is what makes reps trust it",
          lessonAnchor: "sales-enablement-content-scale-without-losing-voice",
          theoryRecap:
            "The lesson's example workflow is AI drafts the battlecard from competitive intel, then a PMM adds the one customer quote that killed that competitor in a real deal, that single human addition is what makes reps actually use it.",
          question:
            "The raw intel says the competitor just cut its entry-tier price by 20%. What does the AI-drafted skeleton get right, and what's missing before a rep can use it on a call?",
          toolName: "Claude",
          where: "Feed the raw intel bullets to Claude, generate a battlecard skeleton, then edit by hand.",
          procedure: [
            "Feed Claude the raw intel: competitor name, the pricing change, one known feature gap.",
            "Prompt it to draft a battlecard skeleton: 'When they say X, you say Y' objection-response format.",
            "Review the draft for generic filler, same risk as any AI first pass.",
            "Add one real detail: an actual customer quote or deal outcome where this exact objection came up.",
            "Confirm the final battlecard has at least one line no competitor's AI tool could have generated, because it's specific to a real Klaviyo deal.",
          ],
          outputSample:
            "AI DRAFT SKELETON:\n'When they say: [Competitor] is 20% cheaper on entry tier.\nYou say: Klaviyo's entry tier includes SMS and advanced segmentation that [Competitor] charges extra for.'\n\nADDED HUMAN DETAIL:\n'Proof point: In the Nov 2025 Meridian Apparel deal, the prospect switched back to Klaviyo after 3 months on [Competitor]'s cheaper tier because their segmentation limits cost them an estimated $18K in missed Black Friday revenue.'",
          healthy: "The final battlecard has at least one line that references a real, dated deal outcome.",
          unhealthy: "Shipping the AI skeleton to reps with no edit pass, generic objection-handling language that could belong to any competitor.",
          interpret:
            "AI collapses the drafting time from hours to minutes, the one thing it can't do is remember what actually happened in your last deal, that's the PMM's job.",
          soWhat: [
            {
              symptom: "Reps stop opening the battlecard after the first week",
              action: "Check whether it has a real, specific proof point or just AI-generated objection templates",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Claude",
            role: "Draft the initial battlecard skeleton from raw competitive intel",
            why: "Free tier handles a single-document draft in one prompt",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Finalize and share the battlecard with the sales team",
            why: "Free, easy to link from a shared sales enablement folder",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
        paidUpgradeNote:
          "A dedicated competitive intelligence platform (see the lesson's Competitive Intel section) can auto-generate battlecard updates from a live monitoring feed once you're tracking more than a couple of competitors continuously, but it's an upgrade, not a requirement for this exercise.",
      },
      deliverable:
        "A one-page battlecard skeleton drafted with AI, edited for generic language, with one real customer quote or deal outcome added by hand.",
      sampleOutput:
        "Coinbase battlecard update (excerpt)\n\nWhen they say: [Competitor] has zero trading fees.\nYou say: Coinbase's spread is transparent and built into the quoted price, no surprise fee at settlement.\nProof point: The Harrow Capital deal (Jan 2026) nearly went to [Competitor] until their finance team found $6K in hidden settlement spread over one quarter, they signed with Coinbase the same week.",
      successCriteria: [
        "The AI-drafted skeleton follows a clear 'when they say / you say' objection-response format",
        "The final version includes at least one specific, dated, human-sourced proof point the AI could not have generated",
      ],
      portfolioReady: true,
    },
  ],

  "vertical-saas-gtm": [
    {
      id: "vertical-saas-gtm-positioning-insider-test",
      tier: "mini",
      archetype: "audit",
      title: "The Insider Test: Auditing a Vertical Positioning Statement",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given two candidate homepage headlines for a B2B travel distribution SaaS product, apply the lesson's insider-language test to identify which reads as industry-fluent and rewrite the one that doesn't.",
      companyId: "tbo-tek",
      scenario:
        "You're the marketing lead at TBO Tek, the Gurugram-founded B2B travel distribution platform serving travel agents and OTAs across 100+ countries, testing two draft homepage headlines before a relaunch.",
      brief:
        "Score each headline against the operator's actual vocabulary, not marketing vocabulary, then rewrite the weaker one so it passes the ninety-second insider test.",
      mode: "diagnostic",
      conceptsCovered: [
        "Writing headlines the way a buyer complains, not the way a SaaS category page reads",
      ],
      steps: [
        {
          stepId: "step-1-insider-language-audit",
          concept:
            "Writing headlines the way a buyer complains, not the way a SaaS category page reads",
          lessonAnchor: "building-trust-an-outsider-cant-fake",
          theoryRecap:
            "The lesson's trust section argues jargon fluency is the tell: an operator clocks a vendor as an outsider within ninety seconds if the copy says 'streamline operations' instead of the exact complaint the operator already makes out loud.",
          question:
            "Headline A: 'AI-Powered Travel Distribution Optimization Platform.' Headline B: 'Stop Losing Bookings to Rate Mismatches Across 40 Suppliers.' Which one would a travel agency's ops manager actually recognize as written by someone who has worked a GDS terminal, and why?",
          toolName: "Google Docs",
          where:
            "Open a shared doc, paste both headlines side by side with a scoring column for 'names the actual daily frustration' vs 'names a product category.'",
          procedure: [
            "Paste Headline A and Headline B into two columns",
            "For each, write the one sentence a travel agent would say out loud that the headline is supposedly answering",
            "Score 1-10 on how closely the headline matches that sentence, not how technically accurate it is",
            "Flag every word that only appears in a SaaS category page, never in an operator's actual complaint",
            "Rewrite the lower-scoring headline using the operator's own words",
          ],
          outputSample:
            "HEADLINE A: 'AI-Powered Travel Distribution Optimization Platform.'\nOperator's real sentence: 'I keep losing bookings because our rates don't match across suppliers.'\nScore: 2/10 - names a category, not the complaint. 'Distribution optimization' appears in zero rate-desk conversations.\n\nHEADLINE B: 'Stop Losing Bookings to Rate Mismatches Across 40 Suppliers.'\nScore: 9/10 - names the exact frustration, in the words already used at the rate desk.\n\nREWRITE OF A: 'Stop Reconciling Rates by Hand Across 40 Different Suppliers.'",
          healthy:
            "The winning headline scores 8+ because it repeats a sentence an operator already says, not a phrase from a competitor's category page.",
          unhealthy:
            "Picking Headline A because it 'sounds more sophisticated' or 'covers more features' - that instinct is exactly the outsider tell the lesson warns about.",
          interpret:
            "A headline that could run on any SaaS category page, regardless of industry, has failed the insider test even if every word is technically true.",
          soWhat: [
            {
              symptom: "Homepage headline uses category language ('optimization platform', 'streamline operations')",
              action: "Replace it with the exact sentence a customer says when complaining about the problem to a coworker",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Score and rewrite the headlines side by side",
            why: "Free, shareable, no account friction for a quick copy audit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page headline audit memo scoring both candidates and delivering a rewritten version of the weaker one.",
      sampleOutput:
        "Headline Audit Memo, Travel Distribution Relaunch\n\nHEADLINE A: 'AI-Powered Travel Distribution Optimization Platform.'\nVerdict: Outsider (2/10). Reads like a category-page listing; no agent has ever said 'distribution optimization' at a rate desk.\n\nHEADLINE B: 'Stop Losing Bookings to Rate Mismatches Across 40 Suppliers.'\nVerdict: Insider (9/10). Names the exact daily frustration, a mismatched rate that costs a booking, in the words an ops manager already uses on a call.\n\nREWRITE OF A: 'Stop Reconciling Rates by Hand Across 40 Different Suppliers.'\n\nReference point: HubSpot's own homepage rewrite years ago made the same move, swapping a category noun for the operator's actual complaint, and it is the same test worth applying here before every relaunch.",
      successCriteria: [
        "Correctly identifies Headline B as insider language and explains why using the lesson's jargon-fluency test",
        "Produces a rewrite of Headline A that removes category jargon and names a concrete operational pain",
      ],
      portfolioReady: true,
    },
    {
      id: "vertical-saas-gtm-trade-channel-distribution-plan",
      tier: "core",
      archetype: "build-the-asset",
      title: "Building a Trade-Channel Distribution Plan for a Vertical Launch",
      timeEstimate: "55 minutes",
      timeMinutes: 55,
      objective:
        "Given a paid-search benchmark showing near-zero search volume for a new vertical sub-segment, rank five candidate trade channels by trust-transfer and cost, then draft a one-quarter distribution plan sequenced around the top two.",
      companyId: "rategain-travel-technologies",
      scenario:
        "RateGain Travel Technologies, the Noida-founded hotel and OTA pricing-intelligence SaaS company, is launching a new module for independent boutique hotel chains, a sub-vertical whose paid-search data shows fewer than 80 monthly searches for the product's core terms.",
      brief:
        "Rank hotel-industry trade channels by trust-transfer per rupee, cut the one that doesn't belong, then sequence a quarter plan around the top two.",
      mode: "build",
      conceptsCovered: [
        "Ranking trade channels by trust-transfer instead of reach when paid search volume is near zero",
        "Sequencing a trade-channel plan so early trust compounds into later channels",
      ],
      steps: [
        {
          stepId: "step-1-rank-trade-channels",
          concept:
            "Ranking trade channels by trust-transfer instead of reach when paid search volume is near zero",
          lessonAnchor: "distribution-trade-channels-beat-paid-channels",
          theoryRecap:
            "The lesson's distribution section argues paid search assumes the prospect is searching, and many vertical niches see fewer than 100 monthly searches for their core terms; trade shows, association sponsorships, peer referral, vertical media, and advisory boards work instead because they borrow trust the buyer already has.",
          question:
            "Given 5 candidate channels for the boutique-hotel launch, a regional hospitality trade show, a boutique-hotel association sponsorship, peer referral from existing RateGain hotel customers, a hospitality trade newsletter ad buy, and a generic LinkedIn ad campaign, with cost and an estimated trust-transfer score for each, rank them and cut the one that doesn't belong.",
          toolName: "Google Sheets",
          where:
            "Import the 5-channel list into Sheets with cost and trust-transfer columns, sort descending by trust-transfer per rupee spent.",
          procedure: [
            "List all 5 channels with cost and a 1-10 trust-transfer estimate (does this channel borrow trust the buyer already has, or ask for trust from zero)",
            "Compute trust-transfer per rupee for each",
            "Sort descending",
            "Identify the one channel that scores low on trust-transfer regardless of cost",
            "Cut it from the quarter's plan and reallocate its budget to the top 2",
          ],
          outputSample:
            "CHANNEL RANKING (trust-transfer per Rs spent)\n1. Peer referral from existing hotel customers - near-zero cost, 9/10 trust-transfer\n2. Boutique-hotel association sponsorship - Rs 4L, 8/10 trust-transfer\n3. Regional hospitality trade show booth - Rs 9L, 7/10 trust-transfer\n4. Hospitality trade newsletter ad buy - Rs 2L, 5/10 trust-transfer\n5. Generic LinkedIn ad campaign - Rs 6L, 2/10 trust-transfer - CUT\n\nReallocation: LinkedIn's Rs 6L moves into association sponsorship and referral incentives.",
          healthy:
            "The top 2 ranked channels are peer referral and association sponsorship, both of which borrow trust the association or the referring operator already spent years building.",
          unhealthy:
            "Leading with the LinkedIn ad buy because it is cheap and easy to launch this week; that repeats the horizontal-SaaS mistake at vertical prices.",
          interpret:
            "Cost efficiency without trust-transfer just buys reach nobody in this vertical believes yet.",
          soWhat: [
            {
              symptom: "Team defaults to paid social because it is the fastest channel to set up",
              action: "Cut paid social from the vertical launch budget entirely and reallocate to association sponsorship and referral incentives",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-sequence-quarter-plan",
          concept: "Sequencing a trade-channel plan so early trust compounds into later channels",
          lessonAnchor: "distribution-trade-channels-beat-paid-channels",
          theoryRecap:
            "The lesson closes its distribution section noting that once one channel is trusted, expansion inside the vertical gets cheaper, a compounding effect horizontal SaaS cannot access; that means the channels have to run in an order, not all at once.",
          question:
            "With association sponsorship (weeks 1-4) and peer referral (weeks 3-12) funded as the top 2 channels, what has to happen in weeks 1-4 before the referral channel can even start producing leads?",
          toolName: "Notion",
          where: "Build a two-row quarter timeline in Notion, one row per channel, columns for weeks 1-12.",
          procedure: [
            "Create rows for association sponsorship and peer referral",
            "Mark weeks 1-4 as association-sponsorship-only: sponsor the newsletter, get the advisor seat, land the first 2-3 boutique-hotel customers",
            "Mark weeks 3-12 as peer referral, starting only once at least 2 live boutique-hotel customers exist to refer from",
            "Flag any week where referral activity is scheduled before a single customer exists in the new sub-segment",
          ],
          outputSample:
            "WEEK 1-4: Association sponsorship live. Advisor seat secured. First 2 boutique-hotel customers signed via association intro.\nWEEK 3-12: Peer referral program opens once customer #2 is live, referral ask sent from those first 2 customers to their peer network.\nFLAG: Do not schedule referral outreach before week 3, there is nothing to refer yet.",
          healthy:
            "Association sponsorship visibly precedes referral, because referral needs live customers to act as advocates, and the association intro is what produces those first customers.",
          unhealthy:
            "Launching a referral ask in week 1 with zero customers yet signed in the sub-segment; the ask has nothing real behind it.",
          interpret:
            "Sequence channels by which prerequisite trust each one needs, not by an arbitrary calendar split.",
          soWhat: [
            {
              symptom: "Referral campaign is requested before any customers exist in the new sub-vertical",
              action: "Delay referral outreach until at least 2 boutique-hotel customers are live and willing to be named",
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
            role: "Score and rank the 5 candidate trade channels",
            why: "Free, fast sorting and formula support for a small ranking table",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Notion",
            role: "Build the 12-week sequenced distribution timeline",
            why: "Free tier supports a simple timeline table shareable with the whole GTM team",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A ranked 5-channel trade-distribution scorecard plus a sequenced 12-week plan for the top 2 channels.",
      sampleOutput:
        "Boutique Hotels Launch, Distribution Plan (excerpt)\n\nRANKING: peer referral (1), association sponsorship (2), trade show (3), trade newsletter (4), LinkedIn ads (cut)\n\nWEEK 1-4: Sponsor the Boutique Hotel Alliance newsletter, secure an advisor seat, close first 2 customers via the association intro.\nWEEK 3-12: Open referral outreach once 2 customers are live and willing to be named.\n\nThe same sequencing shows up in Toast's early expansion into new restaurant sub-segments: trade-show presence and association ties came before any referral ask, never the reverse.",
      successCriteria: [
        "Correctly ranks the 5 channels by trust-transfer and cuts the generic paid-social option",
        "Sequences the quarter plan so referral outreach starts only after real customers exist to refer from",
      ],
      portfolioReady: true,
    },
  ],
  "expansion-cross-sell-messaging": [
    {
      id: "expansion-cross-sell-messaging-inbox-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Cash-Grab Test: Tearing Down Three Draft Expansion Emails",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given three draft expansion emails queued for send, apply the lesson's three-move framework (earned context, named constraint, reversible next step) to find which drafts read as a cash grab and specify the exact fix.",
      companyId: "snowflake",
      scenario:
        "You're the lifecycle marketing manager at Snowflake, the cloud data-warehousing company, reviewing three draft expansion emails queued to send to existing customer accounts this week.",
      brief: "Score each draft against the three-move framework and flag exactly which move is missing.",
      mode: "teardown",
      conceptsCovered: [
        "Diagnosing missing earned context in an expansion message",
        "Diagnosing a missing reversible next step",
        "Diagnosing acquisition-tone mismatch in a message sent to an existing customer",
      ],
      teardownItems: [
        {
          itemId: "item-1-blanket-blast",
          specimen:
            "Subject: Unlock More With Snowflake Pro!\n\nHi there,\n\nDid you know Snowflake Pro gives you more of everything you love? Advanced governance, faster query performance, and premium support are all one click away.\n\nUpgrade Now\n\nThe Snowflake Team",
          specimenSource: "synthetic-realistic",
          prompt:
            "This draft is queued to send to every customer account regardless of usage. Identify what's missing against the three-move framework.",
          answerKey: [
            {
              defect: "No earned context - nothing in the copy references what this specific account actually does with the product",
              severity: "critical",
              whyItMatters:
                "The lesson's whole argument is that expansion messaging answers 'is this worth it given what I already know about you'; a message with zero account-specific detail could have been sent to a stranger.",
              lessonRef: "why-this-is-a-different-skill-than-acquisition",
              owner: "you",
            },
            {
              defect: "No named constraint - 'more of everything you love' names no actual limit the account is hitting",
              severity: "critical",
              whyItMatters:
                "Vague urgency without a stated limit reads as pressure, not information the customer can act on.",
              lessonRef: "a-framework-that-doesnt-feel-like-a-cash-grab",
              owner: "you",
            },
            {
              defect: "No reversible next step - the only CTA is a hard 'Upgrade Now' with no trial or opt-out",
              severity: "moderate",
              whyItMatters: "A reversible offer signals confidence in the value; a hard CTA alone reads as a close, not help.",
              lessonRef: "a-framework-that-doesnt-feel-like-a-cash-grab",
              owner: "you",
            },
          ],
          distractors: [
            "The subject line uses an exclamation point",
            "The email signs off as 'The Snowflake Team' instead of a named person",
            "The email is shorter than 100 words",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-missing-reversible-step",
          specimen:
            "Subject: Your team hit 48 of 50 seats this week\n\nHi Priya,\n\nYour workspace added 6 new logins in the last 30 days and is now at 48 of your 50-seat cap. At this pace you'll hit the limit before your next billing cycle.\n\nUpgrade to the 100-seat plan.\n\nSnowflake Customer Success",
          specimenSource: "synthetic-realistic",
          prompt: "This draft is well-targeted but still has one gap against the framework. Find it.",
          answerKey: [
            {
              defect: "No reversible next step - the only option offered is the upgrade itself, no trial period or no-penalty opt-out",
              severity: "moderate",
              whyItMatters:
                "The named constraint and earned context are both done correctly here; skipping the reversible step is the one move that still keeps the ask from feeling fully like help rather than a close.",
              lessonRef: "a-framework-that-doesnt-feel-like-a-cash-grab",
              owner: "you",
            },
          ],
          distractors: [
            "Referencing the exact seat count (48 of 50) is too specific and should be vaguer",
            "Addressing the email to a named contact (Priya) instead of the whole team",
            "Mentioning the billing cycle date",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-acquisition-tone-mismatch",
          specimen:
            "Subject: Welcome! Discover What's Possible with Snowflake\n\nHi there,\n\nThousands of companies trust Snowflake to power their data warehousing. See why leading teams are making the switch and discover what's possible for your business today.\n\nGet Started\n\nThe Snowflake Team",
          specimenSource: "synthetic-realistic",
          prompt:
            "This draft was pulled from the acquisition drip sequence and queued to an account that has been paying for 2 years. What's wrong, beyond it just being off-brand?",
          answerKey: [
            {
              defect:
                "Acquisition-tone mismatch - the copy ('discover what's possible', 'leading teams are making the switch') is written for a stranger with zero context, not a 2-year customer",
              severity: "critical",
              whyItMatters:
                "The lesson's warning is explicit: routing expansion messaging through the same cadence as acquisition drip campaigns is exactly what reads as a cash grab, because the tone mismatch signals the sender stopped paying attention to who the recipient actually is.",
              lessonRef: "a-framework-that-doesnt-feel-like-a-cash-grab",
              owner: "you",
            },
          ],
          distractors: [
            "The subject line says 'Welcome' which is a minor wording issue, not the real defect",
            "The email doesn't mention a specific product tier by name",
            "The CTA button says 'Get Started' instead of 'Upgrade'",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Score each draft against the three-move framework side by side",
            why: "Free, shareable, fast for a short copy review",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A scored teardown memo for all 3 drafts naming the specific missing move (or moves) in each, with a one-line fix per draft.",
      sampleOutput:
        "Expansion Email Teardown, Week of Send\n\nDRAFT 1 (blanket blast): FAIL, all 3 moves missing. Fix: kill this draft, replace with a usage-triggered version per account.\nDRAFT 2 (seat cap): 2 of 3 moves present. Fix: add a 14-day trial of the 100-seat plan before the hard upgrade CTA.\nDRAFT 3 (acquisition tone): FAIL on tone. Fix: never pull copy from the acquisition sequence tool for an existing account, write it fresh in the lifecycle tool instead.\n\nIntercom's own in-app upgrade prompts follow the same logic: the copy only fires from a usage event, never from a shared acquisition template.",
      successCriteria: [
        "Correctly identifies all 3 missing-move defects across the 3 drafts, not just the most obvious one",
        "Does not flag any of the distractor items (subject line style, sign-off, specificity) as real defects",
      ],
      portfolioReady: true,
    },
    {
      id: "expansion-cross-sell-messaging-trigger-to-message-map",
      tier: "core",
      archetype: "build-the-asset",
      title: "Building a Trigger-to-Message Map from Synthetic Usage Data",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given 6 rows of raw account usage data, classify each into a real upgrade trigger or noise, then build complete earned-context, named-constraint, reversible-step copy for each real trigger.",
      companyId: "adyen",
      scenario:
        "You're on the lifecycle marketing team at Adyen, the Amsterdam-founded global payments platform for enterprise merchants, given a weekly usage export across 6 accounts to turn into an expansion messaging plan.",
      brief: "Classify the usage rows first, then write the message only for the rows that are real triggers.",
      mode: "build",
      conceptsCovered: [
        "Classifying raw usage events into the three real trigger signals versus noise",
        "Building an expansion message with earned context, named constraint, and a reversible next step",
      ],
      steps: [
        {
          stepId: "step-1-classify-usage-signals",
          concept: "Classifying raw usage events into the three real trigger signals versus noise",
          lessonAnchor: "timing-the-ask-around-real-usage-signals",
          theoryRecap:
            "The lesson names three signals that do most of the work: hitting a hard limit, requesting a locked feature, and team growth via new unfamiliar logins; the signal, not the calendar, should trigger the message.",
          question:
            "Given 6 usage rows (a merchant nearing its transaction-volume cap, a merchant that clicked into a locked fraud-scoring setting, a merchant with 4 new team logins this month, a merchant that logged in once after 3 months idle, a merchant that opened the product changelog email, and a merchant that hit its API call limit), tag each as hard-limit / locked-feature / team-growth / noise.",
          toolName: "Google Sheets",
          where: "Import the 6-row usage export, add a 'trigger type' column, filter out anything tagged noise.",
          procedure: [
            "Read each row's raw event description",
            "Tag hard-limit for transaction-volume or API-call caps being approached",
            "Tag locked-feature for any click into a gated setting",
            "Tag team-growth for a meaningful jump in unique logins",
            "Tag noise for anything that isn't a self-evident signal (a single login, an email open) and exclude it from the message plan",
          ],
          outputSample:
            "Merchant A, nearing transaction-volume cap -> hard-limit\nMerchant B, clicked locked fraud-scoring setting -> locked-feature\nMerchant C, 4 new team logins this month -> team-growth\nMerchant D, single login after 3 months idle -> noise, exclude\nMerchant E, opened changelog email -> noise, exclude\nMerchant F, hit API call limit -> hard-limit\n\n4 real triggers, 2 excluded as noise.",
          healthy: "Only rows with a self-evident, account-specific signal make it into the message plan; the rest are excluded.",
          unhealthy:
            "Treating every row as a trigger, including a single login or an email open, because 'more messages can't hurt' - this is exactly the blast-in-disguise pattern the lesson warns against.",
          interpret: "A trigger has to be something the account did that makes the upgrade argument for you; anything weaker is noise.",
          soWhat: [
            {
              symptom: "Every usage uptick, however small, gets queued for an expansion email",
              action: "Restrict the trigger list to hard-limit, locked-feature, and team-growth events only, exclude everything else",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-build-message-map",
          concept: "Building an expansion message with earned context, named constraint, and a reversible next step",
          lessonAnchor: "a-framework-that-doesnt-feel-like-a-cash-grab",
          theoryRecap:
            "The lesson's framework requires 3 moves in every expansion message: earned context (the specific thing the account did), a named constraint (what they'll hit if they don't act), and a reversible next step (a trial, downgrade path, or no-penalty opt-out).",
          question:
            "For the 4 real triggers classified in Step 1, write the earned-context opener, the named constraint, and the reversible CTA for each, in a single reference table.",
          toolName: "HubSpot CRM",
          where: "Build the trigger-to-message map as a workflow reference table inside HubSpot CRM's free tier so lifecycle sends can pull from it directly.",
          procedure: [
            "For each real trigger, write one sentence naming the specific account behavior (earned context)",
            "Write one sentence naming the exact limit or gate the account is approaching (named constraint)",
            "Write one CTA that offers a trial, downgrade path, or opt-out, never a hard upgrade-only button (reversible next step)",
            "Load all 4 rows into the HubSpot workflow reference table, tagged by trigger type",
          ],
          outputSample:
            "TRIGGER: hard-limit (transaction volume)\nEarned context: 'Your processed volume is on pace to cross your current plan's cap next month.'\nNamed constraint: 'At your current growth rate you'll hit the cap around the 20th.'\nReversible CTA: 'See a 14-day preview of the next tier, no commitment, cancel any time.'\n\nTRIGGER: locked-feature (fraud scoring)\nEarned context: 'Your team opened the advanced fraud-scoring settings last week.'\nNamed constraint: 'That control is available on the Enterprise plan only.'\nReversible CTA: 'Try it for 14 days on us, no charge until you confirm.'",
          healthy: "Every one of the 4 real-trigger rows has all 3 moves present and specific to that account's actual behavior.",
          unhealthy: "Reusing the same generic constraint sentence across all 4 rows just with the account name swapped in.",
          interpret: "The map is only useful if each row could not be sent to any other account without editing it.",
          soWhat: [
            {
              symptom: "Message map rows are identical except for the merchant name",
              action: "Rewrite each row's earned-context sentence to name the exact behavior from that account's usage data",
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
            role: "Classify the 6 raw usage rows into trigger types",
            why: "Free, fast filtering for a small usage export",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "HubSpot CRM",
            role: "Store the trigger-to-message map as a reusable workflow reference table",
            why: "Free tier supports custom properties and workflow tables without a paid seat",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A trigger-to-message map covering the 4 real usage signals, with complete earned-context, named-constraint, and reversible-step copy for each, ready to load into a lifecycle tool.",
      sampleOutput:
        "Adyen Merchant Expansion Map (excerpt)\n\nTRIGGER: team-growth (4 new logins)\nEarned context: 'Your workspace added 4 new teammates this month.'\nNamed constraint: 'Your current plan supports up to 6 seats before per-seat billing kicks in.'\nReversible CTA: 'Add the next 3 seats on a 30-day trial rate, downgrade any time.'\n\nThe same discipline shows up in how Intercom times its Pro-only publish prompts: the copy only fires the moment a team clicks into the gated setting, never on a fixed send date.",
      successCriteria: [
        "Correctly excludes the 2 noise rows from the message plan",
        "All 4 real-trigger rows contain a distinct, account-specific earned context, named constraint, and reversible CTA",
      ],
      portfolioReady: true,
    },
  ],

  "renewal-marketing": [
    {
      id: "renewal-marketing-risk-triage-audit",
      tier: "mini",
      archetype: "audit",
      title: "The 90-60-30 Triage: Auditing a Renewal-Risk Account List",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a synthetic 20-account renewal list with renewal dates and last-contact dates, apply the lesson's day-90/60/30 structure to flag which accounts are already overdue for a health check.",
      companyId: "mailchimp",
      scenario:
        "You're on the retention marketing team at Mailchimp, reviewing renewal readiness across 20 mid-market accounts whose contracts end this quarter.",
      brief:
        "Compute days-to-renewal and days-since-last-contact for every account, then flag anyone inside the day-90 window with zero logged contact as an urgent health-check.",
      mode: "diagnostic",
      conceptsCovered: ["Timing renewal outreach to the 90/60/30-day structure"],
      steps: [
        {
          stepId: "step-1-day-90-60-30-triage",
          concept: "Timing renewal outreach to the 90/60/30-day structure",
          lessonAnchor: "timing-the-renewal-conversation-around-budget-cycles",
          theoryRecap:
            "The lesson's structure is day-90 internal health check, day-60 value conversation (QBR), day-30 commercial close, and it has to flex around the customer's own budget-planning window, not just your contract date.",
          question:
            "Of the 20 accounts, 6 are inside 90 days of renewal with no logged contact since their last QBR. Which accounts get triaged first, and why does 'no contact' matter more than 'days remaining' alone?",
          toolName: "Google Sheets",
          where:
            "Import the account export, freeze the header row, add computed columns for days-to-renewal and days-since-last-contact.",
          procedure: [
            "Import the 20-row export and freeze row 1",
            "Add a days-to-renewal column: renewal_date minus today",
            "Add a days-since-last-contact column: today minus last_contact_date",
            "Filter to days-to-renewal <= 90 AND days-since-last-contact > 30",
            "Sort the flagged rows by days-to-renewal ascending",
          ],
          outputSample:
            "URGENT HEALTH CHECK (6 accounts, sample)\n  Acct-114 | renews in 42 days | last contact 61 days ago\n  Acct-108 | renews in 58 days | last contact 74 days ago\n  Acct-121 | renews in 71 days | last contact 55 days ago\n  ...3 more rows\n\nON TRACK (14 accounts)\n  Acct-101 | renews in 88 days | last contact 12 days ago\n  ...13 more rows",
          healthy:
            "Every account inside the day-90 window has a logged contact within the last 30 days.",
          unhealthy:
            "Acct-114 renews in 42 days, already inside the day-30 commercial-close window, with no contact logged in over two months.",
          interpret:
            "Days-to-renewal alone hides risk. An account with 90 days left but no recent contact is in worse shape than one with 60 days left and an active QBR on the calendar.",
          soWhat: [
            {
              symptom: "Renewal list sorted only by days-to-renewal",
              action: "Re-sort by days-since-last-contact within the 90-day window first",
              effort: "5 min",
            },
            {
              symptom: "Account inside day-30 window with zero prior contact",
              action: "Escalate for an emergency health check today, not a scheduled QBR",
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
            role: "Compute days-to-renewal and days-since-last-contact, filter and sort the triage list",
            why: "Free, no account friction, handles a 20-row export easily",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A triage sheet flagging every account inside the 90-day window with no recent contact, sorted by urgency.",
      sampleOutput:
        "Squarespace Renewal Triage, Q3 (excerpt)\n\nURGENT (renews < 90 days, no contact > 30 days)\n  1. Studio Plan accounts, agency tier, renews in 38 days, last touch 65 days ago\n  2. Enterprise storefront accounts, renews in 51 days, last touch 70 days ago\n\nON TRACK\n  3. accounts with a QBR logged in the last 30 days",
      successCriteria: [
        "Correctly computes both date columns for all 20 accounts",
        "Flags every account meeting both conditions, not just the earliest renewal dates",
        "Explains why days-since-last-contact matters more than days-to-renewal alone",
      ],
      portfolioReady: true,
    },
    {
      id: "renewal-marketing-value-realization-onepager",
      tier: "core",
      archetype: "build-the-asset",
      title: "Building a Value-Realization One-Pager Before the Day-60 QBR",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Given a synthetic account's usage log and support history, select 3-5 customer-relevant outcomes and build an exportable value-realization one-pager that ties every number to a decision the customer made.",
      companyId: "klaviyo",
      scenario:
        "You're a customer marketing manager at Klaviyo preparing the day-60 QBR deck for a mid-market e-commerce account renewing in nine weeks.",
      brief:
        "Pick outcomes the account actually tracks internally, make each one exportable, and credit the account's own decisions, not just the product, so the report survives their internal budget conversation.",
      mode: "build",
      conceptsCovered: [
        "Selecting 3-5 outcomes the customer already tracks",
        "Tying every number to a decision the customer made",
      ],
      steps: [
        {
          stepId: "step-1-select-outcomes",
          concept: "Selecting 3-5 outcomes the customer already tracks",
          lessonAnchor: "proving-value-delivered-a-practical-framework",
          theoryRecap:
            "The lesson's first move is picking 3-5 outcomes that map to what the customer cares about internally, hours saved, revenue influenced, risk reduced, not vanity metrics from your own dashboard.",
          question:
            "The usage log has 14 trackable metrics (email opens, flows built, SMS sends, revenue attributed, list growth, support tickets, and more). Which 3-5 belong on the one-pager, and which 9 get cut?",
          toolName: "Google Sheets",
          where: "List all 14 candidate metrics, mark which ones map to a business outcome the account's own team reports upward.",
          procedure: [
            "List all 14 candidate metrics from the usage log",
            "Mark each as 'internal metric they'd report to their boss' or 'vendor dashboard vanity stat'",
            "Keep only metrics in the first group",
            "Cut the list to the strongest 3-5",
          ],
          outputSample:
            "KEPT (4 metrics)\n  Revenue attributed to flows: $142K this quarter\n  Abandoned-cart recovery rate: 18% (up from 9%)\n  Hours of manual segmentation saved: ~30/month\n  SMS-driven revenue: $22K this quarter\n\nCUT (10 metrics, sample)\n  Total email opens (vanity, no dollar tie)\n  Login frequency (vendor-side vanity stat)\n  ...8 more rows",
          healthy: "Every kept metric is a number the account's own team would put in their own internal report.",
          unhealthy: "The one-pager leads with 'total email opens: 340,000' with no dollar or time value attached.",
          interpret:
            "A metric only belongs on the report if the customer would already recognize it as something they track, not something only your dashboard shows.",
          soWhat: [
            {
              symptom: "Draft report has 10+ metrics",
              action: "Cut to the 3-5 that map to a business outcome, not a product action",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-tie-to-decision",
          concept: "Tying every number to a decision the customer made",
          lessonAnchor: "proving-value-delivered-a-practical-framework",
          theoryRecap:
            "The lesson's third move: '40 hours saved' is a fact, but '40 hours saved after your team adopted the automation workflow in March' credits the customer's choice, which makes the number easier for them to defend internally.",
          question:
            "The account adopted flow automation in March and expanded SMS in May. How do you rewrite the 4 kept metrics so each one names the account's own decision that produced it?",
          toolName: "Google Docs",
          where: "Draft the one-pager, one sentence per metric, each naming a dated decision.",
          procedure: [
            "For each kept metric, find the account decision (adoption date, feature turned on, workflow change) that produced it",
            "Rewrite each metric as: [number] + [outcome] + 'after your team [decision] in [month]'",
            "Add a one-click export button description (CSV or shareable link, not a screenshot)",
            "Confirm the report was already shared quarterly, not introduced for the first time at this QBR",
          ],
          outputSample:
            "1. $142K in flow-attributed revenue this quarter, after your team adopted flow automation in March\n2. Abandoned-cart recovery up to 18% (from 9%) since expanding SMS in May\n3. ~30 hours/month saved on manual segmentation since automating flows in March\n4. $22K in SMS-driven revenue since the May expansion",
          healthy: "Every sentence names a specific account decision and a month.",
          unhealthy: "'You saved 30 hours a month' with no decision or date attached, reads as a generic vendor claim.",
          interpret:
            "Crediting the customer's decision turns the report from marketing collateral into evidence the champion can use to defend their own choice internally.",
          soWhat: [
            {
              symptom: "Metric sentence has a number but no decision or date",
              action: "Add 'after your team [decision] in [month]' to every sentence before sending",
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
            role: "Sort and score the 14 candidate metrics down to the strongest 3-5",
            why: "Free, fast filtering for a small metric list",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Draft the exportable one-pager",
            why: "Free, shareable, exports cleanly to PDF for the champion to forward",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Databox",
            role: "Live, always-on dashboard version of the same 3-5 metrics, shared quarterly instead of rebuilt each time",
            why: "Removes the 'first time seeing this at renewal' risk the lesson warns against, since the account can check it anytime",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A one-page, exportable value-realization report with 3-5 outcomes, each tied to a dated account decision.",
      sampleOutput:
        "Squarespace, Q3 Value Realization (excerpt)\n\n1. $88K in flow-attributed revenue this quarter, after enabling browse-abandonment flows in April\n2. Support ticket volume down 24% since the team adopted the self-serve help center integration in June\n3. ~18 hours/month saved on manual list segmentation since automating tags in April",
      successCriteria: [
        "Report contains 3-5 outcomes, not more",
        "Every metric is one the account already tracks internally, not a vendor-dashboard vanity stat",
        "Every sentence names a specific account decision and month",
        "Report format is exportable (PDF/CSV/link), not a static screenshot",
      ],
      portfolioReady: true,
      stretch:
        "Rewrite the same report for a scenario where the account made no adoption decisions this quarter, what evidence do you fall back on?",
    },
  ],
  "pmm-metrics-scorecards": [
    {
      id: "pmm-metrics-scorecard-draft-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Grading a PMM Scorecard Draft Before It Reaches the VP of Sales",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given 3 synthetic draft scorecard slides, apply the lesson's tier framework and presentation rules to identify which metrics will fail in front of skeptical leadership and why.",
      companyId: "squarespace",
      scenario:
        "You're a PMM analyst at Squarespace reviewing a colleague's draft scorecard slides the night before they present to the VP of Sales.",
      brief:
        "Spot metrics that are operational rather than commercial, snapshots instead of trends, or unanchored to a business outcome, before they go in front of leadership.",
      mode: "teardown",
      conceptsCovered: [
        "A Scorecard Framework That Survives Executive Scrutiny",
        "Presenting Impact to Skeptical Leadership",
      ],
      teardownItems: [
        {
          itemId: "item-1-operational-heavy-scorecard",
          specimen:
            "Q2 PMM Scorecard, Draft v1\n- 14 blog posts published\n- 6 case studies shipped\n- 3 competitor battlecards updated\n- 22 sales enablement decks created\n- 1 product launch executed\n- Website copy refreshed for 2 pages",
          specimenSource: "synthetic-realistic",
          prompt:
            "This is the entire scorecard slide a colleague plans to bring to tomorrow's QBR with the VP of Sales. What's wrong with it before they present it?",
          answerKey: [
            {
              defect:
                "100% of the listed metrics are operational output counts; zero revenue or commercial-influence metrics appear anywhere on the slide",
              severity: "critical",
              whyItMatters:
                "The lesson's tier framework and its own warning callout say a scorecard reading 80%+ operational gets leadership reading PMM as a production shop, not a strategic function.",
              lessonRef: "a-scorecard-framework-that-survives-executive-scrutiny",
              owner: "you",
            },
          ],
          distractors: [
            "Six metric categories is too few, the scorecard should list closer to 8-10 items",
            "Battlecard updates shouldn't appear on a PMM scorecard at all",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-no-trend-snapshot",
          specimen: "Win rate on enabled deals: 47% (this quarter only)",
          specimenSource: "synthetic-realistic",
          prompt:
            "This is the headline number on the second draft slide. Is this ready to present to a skeptical VP?",
          answerKey: [
            {
              defect: "Single-quarter snapshot with no 4-6 quarter trend line",
              severity: "moderate",
              whyItMatters:
                "The lesson says positioning changes take roughly two sales cycles to show up in win rate; a snapshot can't show direction and invites a 'so what' from leadership.",
              lessonRef: "presenting-impact-to-skeptical-leadership",
              owner: "you",
            },
            {
              defect: "No business-outcome sentence anchoring the number to a dollar value",
              severity: "moderate",
              whyItMatters:
                "The lesson's three-word test, revenue impact, timely delivery, retention, means a bare percentage with no anchoring sentence doesn't pass.",
              lessonRef: "presenting-impact-to-skeptical-leadership",
              owner: "you",
            },
          ],
          distractors: ["47% is too low a win rate to present at all"],
          partialCredit: true,
        },
        {
          itemId: "item-3-vanity-metric-no-counterfactual",
          specimen: "Sales enablement asset downloads this month: 340",
          specimenSource: "synthetic-realistic",
          prompt:
            "This is the headline commercial-influence metric on the third draft slide. Evaluate it against the lesson's framework.",
          answerKey: [
            {
              defect:
                "Raw download count used instead of the win-rate comparison between deals that used the asset and deals that didn't",
              severity: "critical",
              whyItMatters:
                "The lesson's strongest evidence is the counterfactual, win rate on enabled deals versus non-enabled deals, not a consumption count that says nothing about outcomes.",
              lessonRef: "a-scorecard-framework-that-survives-executive-scrutiny",
              owner: "you",
            },
          ],
          distractors: ["340 downloads is too small a number to be worth reporting"],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Write the critique memo listing each defect and its fix",
            why: "Free, fast to draft and share",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-page critique memo listing every scorecard defect found, its severity, and the corrected metric to replace it with.",
      sampleOutput:
        "Adyen PMM Scorecard Critique (excerpt)\n\nDraft slide 1: 9 of 9 metrics operational, zero tied to revenue or win rate. FIX: replace with win-rate-on-enabled-deals and pipeline-influenced.\n\nDraft slide 2: single-quarter win rate, no trend, no dollar anchor. FIX: show 5-quarter trend line, add 'worth ~$X in pipeline' sentence.",
      successCriteria: [
        "Correctly identifies the operational-heavy defect in item 1",
        "Correctly identifies both the snapshot and unanchored-number defects in item 2",
        "Correctly identifies the vanity-metric-over-counterfactual defect in item 3",
        "Does not flag any of the 3 distractors as real defects",
      ],
      portfolioReady: true,
    },
    {
      id: "pmm-metrics-scorecard-build-tiered",
      tier: "core",
      archetype: "build-the-asset",
      title: "Building an 8-Metric PMM Scorecard From a Messy 15-Metric Wishlist",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Given a synthetic 15-metric KPI wishlist from a launch retro, sort it into the lesson's three tiers, cut it to 6-8 metrics, and write an outcome-anchoring sentence for each survivor.",
      companyId: "coinbase",
      scenario:
        "You're the product marketing lead at Coinbase building next quarter's scorecard from a wishlist your team brainstormed after a chaotic feature launch.",
      brief:
        "Sort all 15 candidate metrics into board, commercial, or operational tiers, cut the list to 6-8, and anchor each surviving metric to a business-outcome sentence before it goes on the one-pager.",
      mode: "build",
      conceptsCovered: [
        "Sorting a KPI wishlist into board/commercial/operational tiers",
        "Anchoring each surviving metric to a business-outcome sentence before the chart",
      ],
      steps: [
        {
          stepId: "step-1-tier-sort",
          concept: "Sorting a KPI wishlist into board/commercial/operational tiers",
          lessonAnchor: "a-scorecard-framework-that-survives-executive-scrutiny",
          theoryRecap:
            "The lesson's fix is a fixed, small scorecard: Tier 1 board metrics (revenue attribution, pipeline by ICP, competitive displacement), Tier 2 commercial influence (win rate, enablement adoption, sales confidence), Tier 3 operational health (launch velocity, asset usage), kept internal.",
          question:
            "The 15-metric wishlist mixes all three tiers with no labels, and includes 4 pure vanity metrics with no tier at all. Which metrics go where, and which get cut outright?",
          toolName: "Google Sheets",
          where: "Paste the 15-metric wishlist, add a Tier column, filter and cut.",
          procedure: [
            "Paste all 15 metrics into a sheet with a blank Tier column",
            "Label each as Tier 1, Tier 2, Tier 3, or 'cut, no tier fits'",
            "Cut every metric labeled 'no tier fits'",
            "From the remainder, keep the strongest 6-8 across all three tiers combined",
          ],
          outputSample:
            "TIER 1 (kept)\n  Revenue attributed to PMM-influenced deals\n  Pipeline contribution by ICP segment\n\nTIER 2 (kept)\n  Win rate, enabled vs non-enabled deals\n  Asset utilization within 30 days\n\nTIER 3 (kept)\n  Launch velocity (days to public launch)\n\nCUT (no tier fits, sample)\n  Total social media impressions\n  Internal team NPS\n  ...2 more rows",
          healthy: "6-8 metrics survive, spread across all three tiers, none of them pure vanity counts.",
          unhealthy: "The final list keeps 12 metrics because nothing got cut, or keeps only Tier 3 operational counts.",
          interpret:
            "A scorecard with metrics in only one tier fails the same way an untiered wishlist does, it either buries the board-level story or loses the operational detail leadership needs as backup.",
          soWhat: [
            {
              symptom: "Final scorecard has more than 8 metrics",
              action: "Cut the weakest metric in whichever tier is most crowded until the count hits 6-8",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-anchor-sentences",
          concept: "Anchoring each surviving metric to a business-outcome sentence before the chart",
          lessonAnchor: "presenting-impact-to-skeptical-leadership",
          theoryRecap:
            "The lesson's presentation rule: anchor every metric to a business-outcome sentence before showing the chart, and cut anything that can't be tied to revenue impact, timely delivery, or retention.",
          question:
            "For the 3 Tier 1 and Tier 2 metrics kept in step 1, write the one-sentence anchor that would open the QBR slide for each.",
          toolName: "Google Docs",
          where: "Draft one anchor sentence per surviving Tier 1/2 metric, then run each through the three-word test.",
          procedure: [
            "For each Tier 1/2 metric, write: '[metric] is [direction] [amount] since [period], worth roughly [$ or business impact]'",
            "Check each sentence against the three-word test: revenue impact, timely delivery, or retention",
            "Cut or rewrite any sentence that fails all three",
          ],
          outputSample:
            "1. Win rate on enabled deals is up 12 points since Q2, worth roughly $2M in incremental pipeline this quarter.\n2. Pipeline contribution from the enterprise ICP segment is up 18% since the March repositioning.\n3. Launch velocity dropped from 41 to 26 days since standardizing the launch checklist.",
          healthy: "Every anchor sentence passes the revenue/timely-delivery/retention test.",
          unhealthy: "'Asset utilization improved' with no percentage, no time period, and no tie to a business outcome.",
          interpret:
            "A chart without an anchor sentence forces the room to guess why the number matters, the sentence does the work the chart alone can't.",
          soWhat: [
            {
              symptom: "Anchor sentence describes an activity, not an outcome",
              action: "Rewrite it against the three-word test before it goes on the one-pager",
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
            role: "Sort and tier the 15-metric wishlist down to 6-8 survivors",
            why: "Free, fast filtering for a small metric list",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Draft the outcome-anchor sentences and the final one-pager",
            why: "Free, shareable, exports cleanly to PDF",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Looker Studio",
            role: "Live trended dashboard version of the final 6-8 metrics, refreshed weekly",
            why: "Matches the lesson's 'trend, not snapshot' rule without manually rebuilding the chart every quarter",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable: "A finished 6-8 metric, three-tier PMM scorecard one-pager with an outcome sentence for each metric.",
      sampleOutput:
        "Snowflake PMM Scorecard, Q3 (excerpt)\n\nTIER 1: Pipeline attributed to PMM-influenced deals is up 14% since Q1, worth roughly $3.1M this quarter.\nTIER 2: Win rate on enabled deals is up 9 points since the new battlecard rollout in May.\nTIER 3: Launch velocity down from 38 to 24 days since Q2.",
      successCriteria: [
        "Final scorecard has 6-8 metrics, not more",
        "Metrics span all three tiers, not just one",
        "Every Tier 1/2 metric has an anchor sentence that passes the revenue/timely-delivery/retention test",
        "No metric on the final list is a pure vanity count",
      ],
      portfolioReady: true,
      stretch:
        "Rebuild the same scorecard for a quarter where 2 of your Tier 2 metrics moved in the wrong direction, how do you present that honestly without losing the room?",
    },
  ],

  "beta-programs": [
    {
      id: "beta-programs-applicant-pool-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Cut List: Auditing a Beta Applicant Pool for Fit",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real-style pool of 20 beta applicants with segment, usage intent, and engagement signals, select the strongest 8 for a wave-one cohort using the lesson's fit-over-enthusiasm framework.",
      companyId: "go-digit-insurance",
      scenario:
        "You're the marketing analyst at Go Digit General Insurance, the Bengaluru-founded general insurer, validating a new usage-based motor insurance app feature before its public rollout. 340 people applied for the 50-person wave-one beta; you've been handed a 20-row sample to triage first.",
      brief:
        "Score each applicant on target-segment fit and real usage intent, not just enthusiasm, and flag the ones who dilute the cohort.",
      mode: "diagnostic",
      conceptsCovered: ["Qualifying beta applicants on fit over enthusiasm"],
      steps: [
        {
          stepId: "step-1-fit-scoring",
          concept: "Qualifying beta applicants on fit over enthusiasm",
          lessonAnchor: "phase-1-define-goals-and-recruit",
          theoryRecap:
            "The lesson's Phase 1 warns that a power user in your target segment is worth ten curious people outside it, so qualification should filter on fit, not just enthusiasm.",
          question:
            "Of 20 applicants, 8 are daily commuters who already track mileage manually, 7 are insurance-curious hobbyists with no vehicle, and 5 are competitor-app power users just scouting features. Who makes wave one?",
          toolName: "Google Sheets",
          where: "Import the applicant export, add a fit-score column, sort descending.",
          procedure: [
            "Import the 20-row applicant export and freeze the header row",
            "Tag each row's segment: daily commuter, insurance-curious hobbyist, or competitor-app scout",
            "Score fit 1-3 based on whether the person has real, recurring usage today",
            "Sort by fit score and select the top 8 for wave one",
            "Flag the competitor-app scouts separately, useful for competitive intel, not cohort quality",
          ],
          outputSample:
            "WAVE ONE (fit score 3, 8 selected)\n  1. R. Sharma - daily commute 42km, manual mileage log for 8 months\n  ... 7 more rows\n\nHOLD (fit score 2, informational only)\n  9. Insurance-curious hobbyist, no vehicle yet\n\nFLAG - COMPETITIVE INTEL (fit score 1)\n  15. Active user of a competitor's telematics app, applied to compare features",
          healthy: "8 of 8 wave-one seats go to people already doing the target behavior manually.",
          unhealthy: "Filling wave one with the 8 fastest form submissions regardless of segment.",
          interpret:
            "Enthusiasm to join is not the same signal as fit to test; sorting by fit first keeps a small cohort genuinely useful.",
          soWhat: [
            {
              symptom: "Wave-one feedback reads generic ('cool app!') instead of specific",
              action: "Re-screen for real recurring usage before the next wave, not just interest",
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
            role: "Score and sort the applicant pool",
            why: "Free, familiar, sufficient for a 20-row triage",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable: "A wave-one cohort list of 8 applicants scored and sorted by fit, with competitor scouts flagged separately.",
      sampleOutput:
        "Five-Star Business Finance wave-one beta shortlist (excerpt)\n\nFIT SCORE 3\n  1. Branch loan officer, processes 15+ MSME applications/month\n  2. Field collection agent, tracks repayments manually today\n  ... 6 more rows\n\nFLAGGED - COMPETITOR SCOUT\n  9. Active user of a rival lending-ops app, applied to compare dashboards",
      successCriteria: [
        "Correctly separates high-fit applicants from merely enthusiastic ones",
        "Flags competitor scouts as a distinct category instead of excluding them silently",
      ],
      portfolioReady: true,
    },
    {
      id: "beta-programs-five-phase-rollout-plan",
      tier: "core",
      archetype: "build-the-asset",
      title: "Ship the Cohort: Building a 5-Phase Beta Rollout Plan",
      timeEstimate: "70 minutes",
      timeMinutes: 70,
      objective:
        "Build a complete 5-phase beta program plan, stakeholder KPIs, recruitment target, and a dated beta-to-paid conversion offer, for a real B2B feature launch.",
      companyId: "tbo-tek",
      scenario:
        "You're the product marketer at TBO Tek, the B2B travel distribution platform connecting travel agencies to hotel and airline inventory, launching a new dynamic-packaging API to a beta cohort of 60 travel agency partners before general release.",
      brief:
        "Turn the lesson's 5-phase playbook into a dated, owned plan: stakeholder KPIs and recruitment, plus a beta-to-paid conversion offer with a real deadline.",
      mode: "build",
      conceptsCovered: [
        "Setting phase-specific KPIs for product, marketing, and sales",
        "Structuring a beta-to-paid conversion offer before the beta opens",
      ],
      steps: [
        {
          stepId: "step-1-beta-charter",
          concept: "Setting phase-specific KPIs for product, marketing, and sales",
          lessonAnchor: "phase-1-define-goals-and-recruit",
          theoryRecap:
            "Phase 1 splits beta KPIs by stakeholder: product wants bug rate and adoption, marketing wants testimonials and advocates, sales wants named reference customers.",
          question:
            "TBO Tek's product team, marketing team, and sales team each want something different from this beta. What does each one actually need to walk away with?",
          toolName: "Google Docs",
          where: "A shared one-page beta charter doc.",
          procedure: [
            "List product's success metric (e.g. API error rate under 1%)",
            "List marketing's deliverables (e.g. 8 testimonials, 2 case studies)",
            "List sales's deliverable (e.g. 3 named reference customers for the sales deck)",
            "Set a recruitment target: 60 agency partners across 3 waves of 20",
            "Draft the landing page value proposition and qualification questions",
          ],
          outputSample:
            "BETA CHARTER - Dynamic Packaging API\n\nPRODUCT: <1% error rate across 5,000+ test bookings\nMARKETING: 8 testimonials, 2 published case studies\nSALES: 3 named reference agencies for the enterprise deck\n\nRECRUITMENT: 60 partners, 3 waves of 20, application form live by [date]",
          healthy: "All three stakeholders sign off on the same charter before recruitment opens.",
          unhealthy: "Marketing finds out about the beta after product has already onboarded testers.",
          interpret:
            "A charter forces the tradeoffs (who gets access first, what counts as done) into the open before the program starts.",
          soWhat: [
            {
              symptom: "Beta ends and nobody has agreed testimonials",
              action: "Write the charter with all three stakeholders before recruiting a single tester",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-conversion-offer",
          concept: "Structuring a beta-to-paid conversion offer before the beta opens",
          lessonAnchor: "phase-5-convert-to-advocates",
          theoryRecap:
            "Phase 5 argues the beta's end is a conversion moment, not a finish line; a time-limited early-adopter rate converts at roughly 30% when the offer is exclusive and the relationship is strong.",
          question:
            "TBO Tek's 60 beta partners finish the program in 6 weeks. What's the specific offer, deadline, and ask that turns them into paying API customers?",
          toolName: "Google Docs",
          where: "The same beta charter doc, conversion section.",
          procedure: [
            "Set a time-limited early-adopter API pricing tier (e.g. 20% off year one)",
            "Set a hard deadline: offer expires 2 weeks after beta close",
            "Identify the top 10-15 most engaged partners for testimonial requests",
            "Draft the referral incentive for partners who bring in another agency",
            "Schedule the conversion email sequence: day 0, day 7, day 12 (deadline reminder)",
          ],
          outputSample:
            "CONVERSION OFFER\n\n20% off Dynamic Packaging API, year one\nOffer window: 2 weeks post-beta, expires [date]\nAsk: signed API agreement + 1-sentence testimonial\nREFERRAL: 5% additional discount per referred agency that signs",
          healthy: "A named offer with a deadline goes out to all 60 partners on beta-close day.",
          unhealthy: "The beta quietly ends and partners wait for someone at TBO Tek to follow up.",
          interpret:
            "An exclusive, time-boxed offer converts warm beta relationships before they cool; an open-ended 'let us know if you want to buy' does not.",
          soWhat: [
            {
              symptom: "Beta partners go quiet after the program ends",
              action: "Send the dated conversion offer on beta-close day, not after",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Draft and share the beta charter and conversion plan",
            why: "Free, collaborative, sufficient for a planning document",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A complete 5-phase beta charter document: KPIs by stakeholder, recruitment plan, and a dated conversion offer.",
      sampleOutput:
        "MapmyIndia beta charter (excerpt)\n\nPRODUCT: <2% map-rendering error rate across 10,000 test queries\nMARKETING: 6 testimonials, 1 case study\nSALES: 2 named enterprise reference accounts\n\nCONVERSION OFFER: 15% off enterprise API plan, valid 2 weeks post-beta",
      successCriteria: [
        "Charter names distinct KPIs for product, marketing, and sales",
        "Conversion offer has a specific discount, deadline, and ask",
      ],
      portfolioReady: true,
      stretch: "Add a wave-2 recruitment plan that uses wave-1 testimonials as social proof in the application landing page.",
    },
  ],
  "pmm-org-models": [
    {
      id: "pmm-org-models-org-chart-audit",
      tier: "mini",
      archetype: "audit",
      title: "Name That Model: Auditing a Real PMM Org Chart",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a supplied 6-person PMM org chart with reporting lines, correctly classify it as centralized, embedded, or hybrid, and name the single structural risk the lesson's framework predicts for that model.",
      companyId: "mapmyindia",
      scenario:
        "You're advising MapmyIndia (CE Info Systems), the NSE-listed Indian digital mapping and geospatial technology company, on why its product marketing team keeps missing roadmap context on new product lines.",
      brief:
        "Classify the supplied org chart against the lesson's three models, then name the specific weakness that model predicts, not a generic complaint.",
      mode: "diagnostic",
      conceptsCovered: ["Classifying a PMM org chart against the centralized/embedded/hybrid framework"],
      steps: [
        {
          stepId: "step-1-classify-org-chart",
          concept: "Classifying a PMM org chart against the centralized/embedded/hybrid framework",
          lessonAnchor: "model-1-centralized-pmm",
          theoryRecap:
            "The lesson's three-model framework: centralized (all PMMs report to one Head of PMM), embedded (PMMs report into product groups with no PMM manager), hybrid (a central team sets standards, embedded PMMs run day-to-day and dotted-line report centrally).",
          question:
            "MapmyIndia's org chart shows 6 PMMs reporting to 6 different Product VPs, with no PMM manager anywhere on the chart. Which of the three models is this, and what does the lesson predict will go wrong?",
          toolName: "Google Docs",
          where: "The supplied org chart doc, annotate reporting lines.",
          procedure: [
            "Trace each PMM's direct reporting line on the chart",
            "Check for a central PMM head or dotted-line management layer",
            "Classify: zero dotted lines to a PMM head means embedded, not hybrid",
            "Match the model to its predicted weakness from the lesson",
            "Write a 2-sentence diagnosis naming the specific risk",
          ],
          outputSample:
            "CLASSIFICATION: Embedded (not hybrid)\n  Evidence: 6 PMMs, 6 different Product VP managers, zero PMM management layer\n\nPREDICTED RISK: career development gap, no PMM mentor or promotion advocate; embedded PMMs also duplicate templates and frameworks independently",
          healthy: "The diagnosis names the specific predicted weakness (e.g. career development gap) instead of a vague 'communication issue.'",
          unhealthy: "Labeling any team with product-side reporting lines as 'hybrid' just because a PMM occasionally talks to marketing.",
          interpret:
            "The presence or absence of a dotted-line PMM management layer is what separates embedded from hybrid, not how often PMMs talk to each other.",
          soWhat: [
            {
              symptom: "PMMs on this team say they feel unsupported in career growth",
              action: "Stand up a PMM guild with a senior lead, per the lesson's embedded-model fix, before adding a full management layer",
              effort: "half day",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Annotate and classify the org chart",
            why: "Free, sufficient for reading and marking up a chart",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A one-paragraph classification of the org chart (centralized/embedded/hybrid) plus the specific structural risk the lesson's framework predicts for it.",
      sampleOutput:
        "Utkarsh Small Finance Bank org-chart audit (excerpt)\n\nCLASSIFICATION: Centralized\n  Evidence: all 4 PMMs report to one Head of PMM under the CMO\n\nPREDICTED RISK: model breaks down past 3-4 product lines; Utkarsh has 5 loan products live, each PMM is already spread across more than one",
      successCriteria: [
        "Correctly classifies the org chart using reporting-line evidence, not vibes",
        "Names the specific risk the framework predicts for that model, not a generic complaint",
      ],
      portfolioReady: true,
    },
    {
      id: "pmm-org-models-reorg-brief",
      tier: "core",
      archetype: "rebuild",
      title: "The Reorg Brief: Moving From Embedded to Hybrid",
      timeEstimate: "65 minutes",
      timeMinutes: 65,
      objective:
        "Write a complete reorg brief that moves a 7-PMM embedded team to a hybrid model, applying the lesson's decision framework and naming the central team's exact scope.",
      companyId: "rategain-travel-technologies",
      scenario:
        "You're the Head of Product Marketing at RateGain Travel Technologies, the Nasdaq-listed travel and hospitality SaaS company, where 7 PMMs are embedded across 4 product lines (Distribution, Data, Digital Payments, Demand Intelligence) with no central function, and brand messaging has started to drift between products.",
      brief:
        "Run the lesson's decision framework, then write the reorg brief: what moves to a small central team, what stays embedded, and how dotted-line reporting works.",
      mode: "build",
      conceptsCovered: [
        "Running the centralized/embedded/hybrid decision framework",
        "Defining central-team scope without creating an approval bottleneck",
      ],
      steps: [
        {
          stepId: "step-1-decision-framework-walkthrough",
          concept: "Running the centralized/embedded/hybrid decision framework",
          lessonAnchor: "decision-framework",
          theoryRecap:
            "The lesson's decision framework routes on product-line count, then whether brand consistency or launch speed matters more, then headcount and management layer.",
          question:
            "RateGain has 4 product lines, 7 PMMs, brand consistency is the stated problem, and there's no PMM manager today. Where does the framework land?",
          toolName: "Google Docs",
          where: "A framework worksheet, one row per decision node.",
          procedure: [
            "Confirm product line count: 4, above the 1-2 threshold for centralized",
            "Confirm the stated priority: brand consistency over launch speed",
            "Confirm PMM headcount: 7, above the 3+ threshold for hybrid",
            "Conclude: hybrid model, since brand consistency plus 3 or more PMMs routes to hybrid",
            "Note the one missing piece: no PMM management layer exists yet, so it must be built, not assumed",
          ],
          outputSample:
            "DECISION FRAMEWORK WALKTHROUGH\n\n1. Product lines: 4 (>= 3) -> continue\n2. Priority: brand consistency -> check headcount\n3. Headcount: 7 PMMs (>= 3) -> HYBRID\n\nGAP: no PMM management layer exists today, must be created as part of the reorg, not assumed to already work",
          healthy: "The recommendation follows directly from the framework's decision nodes, evidence-first.",
          unhealthy: "Recommending hybrid because it 'sounds like the best of both worlds' without running the framework.",
          interpret:
            "The framework exists specifically so the model choice isn't a preference, it's a conclusion from product-line count, priority, and headcount.",
          soWhat: [
            {
              symptom: "Leadership resists the reorg as 'more org complexity'",
              action: "Show the framework walkthrough, not just the recommendation, so the logic is visible",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-central-team-scope",
          concept: "Defining central-team scope without creating an approval bottleneck",
          lessonAnchor: "model-3-hybrid-pmm",
          theoryRecap:
            "Model 3's weaknesses list warns that hybrid's central team can become a bottleneck if it tries to approve every launch artifact; scope must be narrow and explicit.",
          question: "What exactly does RateGain's new 3-person central PMM team own, and what stays with the 7 embedded PMMs?",
          toolName: "Google Docs",
          where: "The reorg brief, scope section.",
          procedure: [
            "List central team's 3 owned functions: positioning standards, competitive intelligence, launch playbook",
            "List what stays embedded: day-to-day GTM execution, sales enablement, sprint participation",
            "Explicitly state the central team does NOT approve individual launch decks",
            "Define the dotted-line reporting: embedded PMMs report to product leads day-to-day, to the central Head of PMM for career development",
            "Set the quarterly messaging-sync cadence to catch brand drift early",
          ],
          outputSample:
            "CENTRAL TEAM OWNS: positioning standards, competitive intel, launch playbook\nEMBEDDED PMMs OWN: day-to-day GTM, sales enablement, sprint participation\nCENTRAL DOES NOT: approve individual launch decks or one-pagers\nREPORTING: dotted-line to central Head of PMM for career development only\nCADENCE: quarterly messaging sync, all 7 embedded PMMs present current positioning",
          healthy: "The scope list has an explicit 'does not' line preventing central overreach.",
          unhealthy: "Central team scope is left vague ('central handles strategy'), which invites approval-bottleneck creep within a quarter.",
          interpret:
            "Hybrid failing in execution comes from unscoped central authority, not the model itself; an explicit boundary is what makes hybrid work operationally.",
          soWhat: [
            {
              symptom: "Embedded PMMs start routing every deck through the central team 'just in case'",
              action: "Republish the explicit scope doc and the does-not list at the next quarterly sync",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Draft the decision-framework walkthrough and reorg brief",
            why: "Free, collaborative, sufficient for a planning document",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A reorg brief: the decision-framework walkthrough, the recommended model, explicit central-team scope with a 'does not' boundary, and the dotted-line reporting structure.",
      sampleOutput:
        "Five-Star Business Finance reorg brief (excerpt)\n\nFRAMEWORK RESULT: Hybrid (3 product lines, brand priority, 4 PMMs)\nCENTRAL TEAM OWNS: positioning standards, competitive intel\nCENTRAL DOES NOT: approve regional sales one-pagers\nREPORTING: dotted-line to Head of PMM for career development only",
      successCriteria: [
        "Model recommendation follows explicitly from the framework's decision nodes",
        "Central team scope includes an explicit 'does not' boundary to prevent bottleneck creep",
      ],
      portfolioReady: true,
      stretch: "Draft the first quarterly messaging-sync agenda for the new hybrid structure.",
    },
  ],
};
