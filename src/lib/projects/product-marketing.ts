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
};
