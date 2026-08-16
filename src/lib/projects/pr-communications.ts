import type { Project } from "@/lib/projects/types";

export const PR_COMMUNICATIONS_PROJECTS: Record<string, Project[]> = {
  "digital-pr-link-building": [
    {
      id: "digital-pr-link-building-pitch-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Digital PR Pitch Teardown: Spotting Unearned Requests, Spam Signals, and Beat Mismatches",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Evaluate three realistic digital PR cold outreach pitch specimens sent to tech and business reporters, diagnosing critical editorial flaws including unearned link requests, fake personalization, missing data hooks, and beat mismatches before sending.",
      companyId: "freshworks",
      scenario:
        "You are the Communications & SEO Lead at Freshworks reviewing draft pitches prepared by an external PR agency for an upcoming campaign on enterprise collaboration bloat. You need to inspect three pitch drafts and flag critical defects that would get the pitches deleted or reported as spam by journalists.",
      brief:
        "Audit 3 email pitch specimens. For each specimen, identify all editorial, structural, and deliverability defects against the lesson's newsworthiness and journalist-pitching rules, separating genuine defects from standard PR outreach practices.",
      mode: "teardown",
      conceptsCovered: [
        "Newsworthy Hook Evaluation",
        "Journalist Beat Matching",
        "Pitch Structure & Deliverability",
      ],
      skills: ["Digital PR", "Media Pitching", "Link Building", "Editorial Quality Control"],
      prerequisites: [
        "Understanding of newsworthy hook types (original data, rankings, news reaction)",
        "Familiarity with journalist beat structures and email pitch etiquette",
      ],
      terminology: [
        {
          term: "Newsworthy Hook",
          definition: "An angle, proprietary data point, or counter-intuitive finding compelling enough for an editor to assign coverage.",
        },
        {
          term: "Beat Matching",
          definition: "Aligning a pitch topic precisely with a reporter's specific coverage beat rather than broadcasting to a general desk.",
        },
      ],
      keyQuestion: "How do you distinguish a high-converting editorial data pitch from spammy link outreach that burns media relationships?",
      whatToLookFor: [
        {
          label: "Transactional Link Demands",
          detail: "Watch for pitches that ask for a link insertion directly rather than offering a substantive story.",
        },
        {
          label: "Lead Placement",
          detail: "Check if the core statistical finding appears in the subject line and opening 2 sentences.",
        },
        {
          label: "Packaging Hygiene",
          detail: "Ensure media assets and datasets are linked via cloud storage rather than sent as heavy file attachments.",
        },
      ],
      decision: {
        prompt: "A junior outreach specialist suggests adding 'Could you please link to our homepage as the original source?' at the end of every pitch. How should you respond?",
        options: [
          {
            id: "opt-1",
            label: "Approve it — if you do not ask for the link explicitly, journalists will never include one.",
            correct: false,
          },
          {
            id: "opt-2",
            label: "Reject it — journalists link to original research assets naturally when citing data; explicit link-begging signals commercial spam and triggers immediate deletion.",
            correct: true,
          },
          {
            id: "opt-3",
            label: "Modify it to ask for a 'rel=dofollow' backlink specifically.",
            correct: false,
          },
        ],
        explanation:
          "Digital PR earns links as a natural byproduct of editorial citation. Explicitly asking for links or specifying SEO link attributes treats journalists like directory curators, violating editorial ethics and causing pitches to be flagged as spam.",
      },
      professionalRecommendation: {
        priority: "High",
        text: "Lead every pitch with the single most surprising finding, state your methodology and sample size in one sentence, and provide a clean cloud link to the raw data. Never ask for a link directly; the coverage generates the link.",
      },
      commonMistakes: [
        {
          mistake: "Pitching product feature launches as industry news",
          explanation: "Minor software updates are interesting to existing users but hold zero editorial value for tier-1 journalists covering industry trends.",
        },
        {
          mistake: "Sending identical pitches to multiple reporters at the same publication",
          explanation: "Cross-pitching colleagues at the same news desk creates internal editorial confusion and gets your domain blacklisted.",
        },
      ],
      teardownItems: [
        {
          itemId: "item-1-spammy-link-begging",
          specimenSource: "synthetic-realistic",
          specimen:
            "Subject: Love your blog + quick link request!\n\nHi [First Name],\n\nI was reading your great article on enterprise software trends and really loved your insights!\n\nI noticed you linked to an old 2019 report on workplace productivity in paragraph 4. We recently published an awesome ultimate guide on our blog called '10 Ways to Fix Workplace Chaos' that your readers would love.\n\nCould you please update your article and replace that old link with a link to our post? Here is the link: https://www.freshworks.com/resources/workplace-chaos-guide/\n\nThanks so much,\nAgency Outreach Team",
          prompt:
            "Evaluate this cold outreach email specimen. Identify all editorial defects, deliverability risks, and structural flaws.",
          answerKey: [
            {
              defect:
                "Unearned transactional link request ('Could you please replace that old link with a link to our post') treats the journalist as an unpaid directory rather than offering a newsworthy story.",
              severity: "critical",
              whyItMatters:
                "Journalists and editors immediately delete or spam-flag transactional link-begging emails; digital PR earns links through original news coverage, not link replacement requests.",
              lessonRef: "why-pr-driven-links-outperform-outreach",
              owner: "you",
            },
            {
              defect:
                "Generic, ungrounded flattery ('really loved your insights', broken '[First Name]' placeholder) demonstrates zero genuine engagement with the writer's past coverage.",
              severity: "critical",
              whyItMatters:
                "Journalists receive hundreds of automated pitches daily; obvious broadcast merge templates destroy sender credibility instantly.",
              lessonRef: "pitching-journalists-like-a-person-not-a-database",
              owner: "you",
            },
            {
              defect:
                "Pitch lacks an original newsworthy data hook or timely news angle, offering a generic commercial blog post ('ultimate guide') instead.",
              severity: "moderate",
              whyItMatters:
                "Reporters need fresh data, surveys, or news angles to justify publishing; they do not cover generic commercial top-of-funnel blog posts.",
              lessonRef: "what-makes-a-hook-newsworthy",
              owner: "you",
            },
          ],
          distractors: [
            "It links directly to a blog resource URL; linking to your source is standard practice once genuine editorial value is established.",
            "It includes a friendly sign-off; standard polite closings are not defects.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-clean-data-hook-pitch",
          specimenSource: "synthetic-realistic",
          specimen:
            "Subject: DATA: 71% jump in enterprise software apps, but IT pros use only 1 in 3\n\nHi Sarah,\n\nNoticed your piece last Thursday in Computerworld on CIOs battling SaaS sprawl.\n\nWe analyzed anonymized usage across 2,000 IT teams and found that while total workplace apps surged 71% over two years, employees actively use only 33% of installed tools, creating an estimated $4.2M in annual unmanaged license waste per enterprise.\n\nKey breakdown from our dataset:\n• Average installed apps per workstation: 42 (up from 24 in 2022)\n• Shadow IT tools unreviewed by security: 18%\n• Avg time wasted toggling between disconnected apps: 4.1 hrs/week\n\nFull raw CSV dataset, methodology note, and high-res chart embeds are available here under embargo until Tuesday 9 AM EST: [Link to Google Sheets & Media Kit].\n\nWould you like an exclusive preview or a 10-min briefing with our Lead Systems Architect?\n\nBest,\nAlex Rivera\nFreshworks Communications",
          prompt:
            "Evaluate this data-driven PR pitch. Identify any editorial or structural defects, or confirm if it meets professional digital PR standards.",
          answerKey: [],
          distractors: [
            "The pitch includes a bulleted summary; providing 3 clean top-line data points helps busy journalists quickly evaluate story fit without digging through a report.",
            "It offers an embargoed preview with raw data; offering embargoed access with transparent CSV data builds journalistic trust and allows pre-publication reporting.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-bloated-product-announcement-mismatch",
          specimenSource: "synthetic-realistic",
          specimen:
            "Subject: PRESS RELEASE: Freshworks Announces Revolutionary New Suite V4.2 Feature Set\n\nTo: Senior Cybersecurity Investigative Reporter <editor@techsecuritydaily.com>\n\nFOR IMMEDIATE RELEASE\n\nCHENNAI & SAN MATEO — Freshworks Inc. is thrilled to announce the cutting-edge launch of our Suite V4.2 customer portal update! Our award-winning, state-of-the-art interface now features 24 new color themes, optimized dropdown menus, and enhanced user dashboard widgets designed to delight our global customer ecosystem.\n\nOur CEO stated: 'We are truly democratizing business software with delight-made easy solutions that empower modern workforces across omnichannel touchpoints.'\n\nAdditionally, in our internal user poll of 15 people in our Chennai office, 100% said they preferred the new purple theme. Please find our 35MB high-res logo zip file attached.\n\nWe would love for Tech Security Daily to write a comprehensive feature article covering our product update this Friday!\n\nBest regards,\nCorporate Communications",
          prompt:
            "Identify all beat mismatch, newsworthiness, and pitch packaging defects in this release.",
          answerKey: [
            {
              defect:
                "Severe beat mismatch: sending a minor UI product feature release to a Senior Cybersecurity Investigative Reporter.",
              severity: "critical",
              whyItMatters:
                "Pitching irrelevant topics to the wrong beat burns journalist relationships and gets your email domain blacklisted on media triage desks.",
              lessonRef: "pitching-journalists-like-a-person-not-a-database",
              owner: "you",
            },
            {
              defect:
                "Lead is buried in corporate jargon and self-congratulatory adjectives ('thrilled to announce', 'award-winning', 'state-of-the-art') rather than an objective news hook.",
              severity: "critical",
              whyItMatters:
                "Reporters triage inboxes in seconds; corporate hype without an industry impact angle is immediately discarded.",
              lessonRef: "what-makes-a-hook-newsworthy",
              owner: "you",
            },
            {
              defect:
                "Attaching a 35MB heavy zip file directly to an unsolicited media pitch triggers email gateway filters and clogs journalist inboxes.",
              severity: "moderate",
              whyItMatters:
                "Large binary attachments in cold emails trigger corporate spam quarantine; press assets should always be shared via cloud links.",
              lessonRef: "data-campaigns-the-reliable-engine",
              owner: "you",
            },
          ],
          distractors: [
            "It includes an executive quote; quotes are standard in formal press releases, though this one lacks substantive newsworthy information.",
            "It specifies a target publication date; date guidance is common, though demanding coverage is ineffective.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Draft and review pitch copy",
            why: "Free collaborative document editor",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Muck Rack",
            role: "Journalist beat and media list validation",
            why: "Verify media contacts and coverage history",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A completed PR pitch defect scorecard analyzing 3 outreach specimens with severity ratings and structural fixes.",
      sampleOutput:
        "Zendesk PR Pitch Teardown Audit\n\n" +
        "Specimen A: Failed Pitch Analysis\n" +
        "• Defect 1 (Critical): Transactional backlink swap request without editorial news value.\n" +
        "• Defect 2 (Critical): Blank merge tokens and generic flattery.\n" +
        "• Action: Scrapped email entirely; pivoted to proprietary customer satisfaction benchmark data.\n\n" +
        "Specimen B: Production-Ready Data Pitch\n" +
        "• Subject: 'DATA: 62% of customer service teams report AI ticket volume doubled in 2025'\n" +
        "• Word count: 168 words.\n" +
        "• Assets: Cloud link to 500-enterprise benchmark sheet + 3 chart embeds.\n" +
        "• Outcome: Approved for exclusive tier-1 pitch to VentureBeat and TechCrunch.",
      successCriteria: [
        "Accurately identifies transactional link begging and placeholder errors in Specimen 1",
        "Correctly validates the concise data-driven structure of Specimen 2",
        "Flags beat mismatch, promotional hyperbole, and heavy file attachments in Specimen 3",
      ],
      portfolioReady: true,
      keyTakeaway:
        "Digital PR succeeds when you treat journalists as editorial partners rather than link distribution conduits. Lead with undeniable numbers, match the specific beat, and let coverage generate the backlinks.",
    },
    {
      id: "digital-pr-link-building-campaign-architecture",
      tier: "core",
      archetype: "build-the-asset",
      title: "Digital PR Campaign Blueprint: Building a Data Hook, Media Target List, and Journalist Asset Pack",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Architect an end-to-end digital PR campaign from scratch: transform raw industry data into a top-line newsworthy hook, build a tiered 30-contact media list mapped to specific editorial beats, and produce an embargo pitch asset pack engineered to earn tier-1 links.",
      companyId: "policybazaar",
      scenario:
        "You are the Digital PR Lead at Policybazaar (PB Fintech). Ahead of peak annual health and life insurance renewal season, your data analytics team supplies an anonymized dataset of 450,000 health insurance claims across 12 Indian tier-1 and tier-2 cities. You must build a comprehensive digital PR campaign package that earns authoritative editorial links from national business dailies (Mint, Economic Times, Business Standard) and regional consumer desks.",
      brief:
        "Extract one punchy headline finding from the dataset, segment your media list across national financial and regional consumer beats, draft a personalized 180-word embargo pitch, and define a combined PR-SEO measurement framework.",
      mode: "build",
      conceptsCovered: [
        "Newsworthy Hook Extraction",
        "Journalist Beat Segmentation",
        "Embargo Pitch Drafting",
        "PR-SEO Impact Measurement",
      ],
      skills: ["Digital PR", "Media Relations", "Data Journalism", "Campaign Strategy", "SEO Link Acquisition"],
      prerequisites: [
        "Understanding of the 4 newsworthy hook types (original data, rankings, news reaction, contrarian reversals)",
        "Basic knowledge of Domain Authority, referring domains, and email deliverability hygiene",
      ],
      terminology: [
        {
          term: "Embargo",
          definition: "An agreement between a PR source and a journalist where news material is shared in advance on the condition that it is not published before a specified date and time.",
        },
        {
          term: "Referring Domain",
          definition: "A unique website that links to your domain; a primary SEO metric for domain authority growth.",
        },
      ],
      keyQuestion: "How do you package complex internal industry data into a multi-angle PR campaign that secures national business coverage and high-authority backlinks simultaneously?",
      whatToLookFor: [
        {
          label: "Single-Sentence Dinner Party Test",
          detail: "Verify the core data hook can be explained clearly in one sentence without industry jargon.",
        },
        {
          label: "Beat Alignment",
          detail: "Ensure national macro trends are separated from regional city comparisons for targeted pitching.",
        },
        {
          label: "Asset Accessibility",
          detail: "Check that raw data tables (CSV) and graphics are hosted on public cloud folders with open read access.",
        },
      ],
      decision: {
        prompt: "You have 3 days before your public campaign launch. Two top reporters from competing financial publications both request exclusive first-publish rights on your data. What is the standard protocol?",
        options: [
          {
            id: "opt-1",
            label: "Grant the exclusive to both reporters secretly so you maximize day-one coverage.",
            correct: false,
          },
          {
            id: "opt-2",
            label: "Offer the national macro findings exclusively to one reporter, while offering the regional city rankings exclusively to the other reporter with tailored angles.",
            correct: true,
          },
          {
            id: "opt-3",
            label: "Reject both requests and publish the report immediately on your company blog.",
            correct: false,
          },
        ],
        explanation:
          "Giving simultaneous 'exclusive' promises on the exact same story to competing desks destroys journalist trust. Splitting distinct angles (e.g. macro national trends vs regional city comparisons) allows you to satisfy both reporters ethically without breaking exclusivity.",
      },
      professionalRecommendation: {
        priority: "High",
        text: "Build your digital PR campaign around modular angles: one national macro stat for national financial desks and one regional ranking for local bureaus. This doubles your placement potential from a single dataset.",
      },
      commonMistakes: [
        {
          mistake: "Burying the raw data inside locked PDF presentations",
          explanation: "Journalists need to verify numbers and copy data into their own charting tools; provide clean CSV files and public Google Sheets links.",
        },
        {
          mistake: "Measuring PR success solely on unlinked brand mentions",
          explanation: "Unlinked mentions build general awareness, but tracking referring domains, domain authority velocity, and referral traffic connects PR directly to organic search performance.",
        },
      ],
      steps: [
        {
          stepId: "step-1-hook-extraction",
          concept: "Newsworthy Hook Extraction",
          lessonAnchor: "what-makes-a-hook-newsworthy",
          theoryRecap:
            "The lesson explains that top-performing digital PR hooks rely on original data, regional rankings, timely news reactions, or surprising reversals that clear the editorial triage bar.",
          question:
            "From your raw 450,000-claim dataset, which finding produces the strongest national headline hook versus the strongest regional hook?",
          toolName: "Google Sheets",
          where: "Import the claims summary export into Google Sheets, calculate city-by-city out-of-pocket medical inflation averages, and identify top anomalies.",
          procedure: [
            "Calculate average out-of-pocket hospital expense across all 12 metros",
            "Identify the fastest-growing surgical cost inflation metric (e.g. cardiac procedures +23% YoY)",
            "Extract the city ranking for claim approval speed (e.g. Pune fastest at 42 min; Kolkata slowest at 118 min)",
            "Formulate the national macro hook in one declarative sentence and the regional ranking hook in a second sentence",
          ],
          outputSample:
            "NATIONAL MACRO HOOK:\n  'Out-of-pocket medical expenses surged 19.4% in 2025 across metros, with non-medical consumable hospital charges driving 41% of uncovered claims.'\n\nREGIONAL COMPARISON HOOK:\n  'Metro Claim Settlement Index: Pune leads India with 42-minute cashless approvals, while Kolkata hospital claims average 118 minutes.'",
          healthy: "The hook is quantified, single-sentence, free of marketing jargon, and backed by a verifiable sample size.",
          unhealthy: "The hook reads like an advertisement ('Policybazaar offers India's best claim settlement portal') with zero objective industry data.",
          interpret: "Journalists need newsworthy trends their readers care about; national desks cover macroeconomic health inflation, while regional desks cover local city rankings.",
          soWhat: [
            {
              symptom: "Draft hook is vague or promotional",
              action: "Rewrite using the 'Number + Reversal/Comparison' formula citing exact percentage changes and sample size",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-beat-segmentation",
          concept: "Journalist Beat Segmentation",
          lessonAnchor: "pitching-journalists-like-a-person-not-a-database",
          theoryRecap:
            "Response rates for PR pitches average 8.5% across generic lists, but targeted beat matching and personal relevance significantly boost open and coverage rates.",
          question:
            "How should your 30-contact media list be segmented across national financial, healthcare policy, and regional bureau beats?",
          toolName: "Google Sheets",
          where: "Create a 'Media Target Matrix' sheet categorized by Outlet Tier, Journalist Name, Beat, Angle Assigned, and Recent Relevant Article.",
          procedure: [
            "Create Tier 1 (National Financial/Business: Mint, ET, Business Standard, Moneycontrol)",
            "Create Tier 2 (Consumer Healthcare & Policy: Times of India Healthcare, The Hindu Businessline, Indian Express)",
            "Create Tier 3 (Regional Bureau Desks: Pune Mirror, Deccan Herald, Telegraph India)",
            "Log one recent article written by each target journalist in the last 60 days to personalize the opening line",
          ],
          outputSample:
            "MEDIA TARGET MATRIX (Sample Rows)\n1. Shreya N. | Mint | Personal Finance & Insurance | National Out-of-Pocket Inflation Hook | Recent: 'How hospital consumable bills dent health coverage'\n2. Rohan K. | Pune Mirror | City & Infrastructure | Pune #1 in Cashless Speed Hook | Recent: 'Healthcare infrastructure expansion in West Pune'\n3. Ananya M. | Moneycontrol | Health Tech & Fintech | 450k-Claims Dataset Macro Hook | Recent: 'Digital insurance adoption trends in FY25'",
          healthy: "Every contact has a specific beat assignment and a verified recent publication reference.",
          unhealthy: "A single broadcast email blast sent to 'editor@', 'news@', or general newsroom desks.",
          interpret: "Media lists should be small, highly vetted, and tailored. 30 well-targeted journalists will yield higher placements than 500 untargeted contacts.",
          soWhat: [
            {
              symptom: "Outreach list contains generic info@ email addresses",
              action: "Replace with byline authors and beat reporters identified via past article bylines",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-embargo-pitch",
          concept: "Embargo Pitch Drafting",
          lessonAnchor: "data-campaigns-the-reliable-engine",
          theoryRecap:
            "Data campaigns require 3 core assets: an owned dataset, a one-sentence finding, and a visual asset journalists can use immediately. Pitches should stay under 200 words.",
          question:
            "How do you draft a sub-180 word embargo pitch that leads with the core stat and provides instant cloud access to methodology and charts?",
          toolName: "Google Docs",
          where: "Open Google Docs and write the embargo pitch template for Tier-1 financial reporters.",
          procedure: [
            "Write a subject line with 'DATA:' or 'EMBARGO:' prefix and the core quantified finding",
            "Reference the journalist's recent piece in sentence 1",
            "State the top 3 findings in a concise bulleted list",
            "Provide one-sentence methodology note (sample size, timeframe, data source)",
            "Include a cloud link to the clean CSV dataset and high-res chart embeds",
            "Offer an exclusive pre-launch briefing with your Head of Actuarial Analytics",
          ],
          outputSample:
            "Subject: DATA / EMBARGO: Out-of-pocket health costs rose 19.4% in 2025 (450k claim study)\n\nHi Shreya,\n\nRead your insightful piece last week on rising hospital consumable surcharges in Mint.\n\nWe analyzed 450,000 anonymized health insurance claims across 12 metros from Jan-Dec 2025 and found that out-of-pocket medical expenses surged 19.4% YoY, with unapproved hospital consumables now accounting for 41% of uncovered patient bills.\n\nKey Findings:\n• Average uncovered expense per hospitalization: ₹28,400 (up from ₹23,800 in 2024)\n• Metro Claim Speed Index: Pune hospitals approved cashless claims fastest (42 min avg), while Kolkata averaged 118 min\n• Tier-2 surge: Jaipur and Lucknow saw 34% growth in ₹5L+ claim volumes\n\nFull raw CSV dataset, methodology note, and ready-to-embed vector charts are available under embargo until Tuesday, Oct 14 at 9:00 AM IST: [Link to Media Kit]\n\nWould you like an exclusive briefing with our Head of Claims Analytics on Monday?\n\nBest,\nSiddharth Verma\nPolicybazaar PR Team",
          healthy: "Pitch is under 180 words, leads with the strongest data point, discloses methodology, and provides cloud links.",
          unhealthy: "Pitch is a 500-word corporate narrative with no methodology, no preview links, and heavy PDF attachments.",
          interpret: "Reporters can verify the angle in 15 seconds. If interested, they click the media kit to download charts and write their story.",
          soWhat: [
            {
              symptom: "Pitch length exceeds 200 words",
              action: "Cut background paragraphs and move secondary statistics into the linked Google Sheet",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-pr-seo-scorecard",
          concept: "PR-SEO Impact Measurement",
          lessonAnchor: "measuring-what-actually-matters",
          theoryRecap:
            "Digital PR must be measured by placements, link count and average domain authority, referral traffic, and cost per placement to prove ROI alongside SEO teams.",
          question:
            "How do you configure a combined PR-SEO campaign scorecard to track high-authority link acquisition and organic authority growth?",
          toolName: "Google Sheets",
          where: "Build a 'Campaign Scorecard' sheet tracking placements, Domain Rating (DR), link attributes (dofollow/nofollow), and referral visits.",
          procedure: [
            "Set up tracking columns: Outlet, URL, Journalist, Outlet DR/DA, Link Present (Yes/No), Anchor Text, Referral Traffic (GA4)",
            "Define campaign target benchmarks (e.g. 25+ media placements, 15+ referring domains with DR > 65, <$250 cost per placement)",
            "Track unlinked brand mentions and schedule a polite outreach sequence to request attribution links where appropriate",
            "Calculate combined PR-SEO ROI: Total Campaign Investment / Total Placements Earned",
          ],
          outputSample:
            "CAMPAIGN SCORECARD SUMMARY (30 Days Post-Launch)\n• Total Media Placements: 34 articles\n• High-Authority Backlinks Earned: 22 referring domains\n• Average Domain Rating: 74 (incl. Livemint DR 88, Economic Times DR 90, Business Standard DR 86)\n• Referral Traffic: 14,850 unique sessions\n• Total Campaign Cost (Data extraction + Design + Pitching): ₹3,20,000 (~$3,850)\n• Effective Cost Per Placement: ₹9,411 (~$113 per tier-1 placement)",
          healthy: "Scorecard tracks both PR metrics (placements, reach) and SEO metrics (referring domains, DR, referral traffic, cost per link).",
          unhealthy: "Only tracking raw email open rates or counting low-quality syndication scraper links without measuring domain authority.",
          interpret: "Measuring high-DA referring domains and cost per placement demonstrates tangible organic search value to leadership and aligns PR with SEO.",
          soWhat: [
            {
              symptom: "Outlets published the story but omitted the source link",
              action: "Send a polite unlinked-mention request thanking the reporter and providing the direct URL to the interactive data tool",
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
            role: "Analyze claims data and structure media contact tiers",
            why: "Free structured data and media list management tool",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Draft pitch copy, press notes, and media kit briefs",
            why: "Free collaborative drafting tool",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Monitor referring domains, anchor text, and DR gains",
            why: "Track link acquisition velocity and SEO impact",
            required: false,
            lastVerified: "2026-08",
          },
          {
            toolName: "BuzzStream",
            role: "Manage media relationships, follow-up schedules, and response tracking",
            why: "PR outreach CRM",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A complete 4-part Digital PR campaign pack containing a top-line hook analysis, tiered media target matrix, 180-word embargo pitch template, and dual PR-SEO KPI scorecard.",
      sampleOutput:
        "Go Digit General Insurance — Motor Claims PR Campaign Blueprint\n\n" +
        "1. Core Data Hook:\n" +
        "   'Monsoon Pothole Damage Index: EV battery undercarriage repair claims jumped 44% in metro floods, with average repair costs 2.8x higher than ICE vehicles.'\n\n" +
        "2. Media Matrix Segmentation:\n" +
        "   • National Tech/Auto: Autocar India, Overdrive, TechCrunch India (EV repair cost angle)\n" +
        "   • Financial: Economic Times Auto, CNBC-TV18 (Insurance underwriting implications)\n" +
        "   • Regional: Mumbai Mirror, Bangalore Mirror (City flood pothole rankings)\n\n" +
        "3. Embargo Pitch (165 words):\n" +
        "   Subject: DATA / EMBARGO: EV battery flood damage claims surge 44% in monsoon audit\n" +
        "   [Summary of 85,000 commercial auto claims + clean CSV link + media kit]\n\n" +
        "4. Campaign Performance:\n" +
        "   • 28 media placements, 19 tier-1 backlinks (Avg DR 76)\n" +
        "   • Cost per placement: $125",
      successCriteria: [
        "Transforms complex metric data into a single-sentence dinner-party hook",
        "Segments media list by distinct beats rather than general broadcast lists",
        "Drafts an embargo pitch under 200 words leading with the data finding",
        "Establishes a combined KPI framework tracking referring domains, DA/DR, and cost per placement",
      ],
      portfolioReady: true,
      keyTakeaway:
        "An enduring digital PR campaign marries rigorous internal data with segmented editorial pitching. When you give journalists exclusive, well-packaged insights, high-authority backlinks follow naturally without link-begging.",
    },
  ],
  "data-driven-pr": [
    {
      id: "data-driven-pr-dataset-audit",
      tier: "mini",
      archetype: "audit",
      title: "Proprietary Dataset PR Audit: Extracting Contrarian Angles and Verifiable Methodologies",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Audit an internal customer support benchmark dataset to isolate newsworthy contradictions, draft an unassailable methodology disclosure, and structure a reporter-ready data package that withstands editorial fact-checking.",
      companyId: "freshworks",
      scenario:
        "As a PR analyst at Freshworks, you are given an internal dataset analyzing 12 million customer service tickets across 3,500 enterprise accounts. You must audit this raw dataset, extract the single most compelling newsworthy angle, and build a transparent methodology note that journalists will trust.",
      brief:
        "Filter raw metric rows to identify the core contrarian finding, write a 3-sentence methodology disclosure stating sample size and timeframes, and organize the export into a clean CSV format.",
      mode: "diagnostic",
      conceptsCovered: [
        "Contrarian Angle Extraction",
        "Methodology Disclosure Rigor",
        "Data Packaging for Reporters",
      ],
      skills: ["Data PR", "Data Analysis", "Editorial Packaging", "PR Methodology Design"],
      prerequisites: [
        "Understanding of newsworthy contrast criteria (surprising, timely, or contrarian)",
        "Basic spreadsheet skills for sorting and filtering benchmark datasets",
      ],
      terminology: [
        {
          term: "Contrarian Finding",
          definition: "A verified data point that directly contradicts widespread industry assumptions or conventional wisdom.",
        },
        {
          term: "Methodology Note",
          definition: "A clear, reproducible explanation of sample size, date ranges, data cleaning rules, and statistical definitions used in research.",
        },
      ],
      keyQuestion: "How do you turn millions of raw internal product log rows into a credible, single-sentence research finding that journalists will cite?",
      whatToLookFor: [
        {
          label: "Contradiction Index",
          detail: "Look for data points where popular perception (e.g. 'chatbots solve everything instantly') clashes with actual customer resolution data.",
        },
        {
          label: "Sample Credibility",
          detail: "Verify the sample size is large enough (e.g. 100k+ interactions across multiple industries) to eliminate selection bias.",
        },
        {
          label: "Data Cleanliness",
          detail: "Ensure all personally identifiable information (PII) is scrubbed and numbers are normalized across comparable time periods.",
        },
      ],
      decision: {
        prompt: "While auditing your internal ticket dataset, you discover that 18% of chatbot interactions resulted in immediate escalation to human agents with 3x longer resolution times. Marketing wants to hide this stat because it looks negative for AI products. What is your PR recommendation?",
        options: [
          {
            id: "opt-1",
            label: "Hide the negative stat and only publish positive findings showing that AI saves time.",
            correct: false,
          },
          {
            id: "opt-2",
            label: "Feature the finding prominently as the hook ('The AI Escalation Trap: Why Poor Bot Handoffs Triple Resolution Time'), establishing editorial credibility and positioning your software's hybrid handoff feature as the solution.",
            correct: true,
          },
          {
            id: "opt-3",
            label: "Delete the ticket category entirely from the public CSV dataset.",
            correct: false,
          },
        ],
        explanation:
          "Honest, contrarian findings make stories newsworthy. Journalists ignore fluff reports that claim 100% perfection, but eagerly cover nuanced research that exposes real industry challenges. Highlighting the problem cements your authority.",
      },
      professionalRecommendation: {
        priority: "High",
        text: "Never sanitize data to make your product look flawless. Counter-intuitive and challenging data points are exactly what earn front-page coverage in business publications.",
      },
      commonMistakes: [
        {
          mistake: "Omitting the methodology and sample size in pitch collateral",
          explanation: "Data journalists will not risk their reputation on mystery stats; always provide the exact sample size, date window, and data source.",
        },
        {
          mistake: "Publishing data in locked, uncopyable image formats",
          explanation: "Reporters need raw numbers to create their own charts; provide an open CSV file alongside any visual graphic.",
        },
      ],
      steps: [
        {
          stepId: "step-1-angle-extraction",
          concept: "Contrarian Angle Extraction",
          lessonAnchor: "finding-the-story-inside-your-data",
          theoryRecap:
            "The lesson highlights that reporters do not need an entire research department; they need one finding that is either surprising, timely, or contrarian to conventional wisdom.",
          question:
            "After reviewing customer ticket resolution times across channels (Email, Phone, Live Chat, AI Bot), which finding challenges the common assumption that AI automation eliminates wait times?",
          toolName: "Google Sheets",
          where: "In Google Sheets, compare First Response Time (FRT) and Resolution Time across AI-assisted vs human-only ticket queues.",
          procedure: [
            "Import the 12-million ticket benchmark dataset summary",
            "Calculate average First Response Time (FRT) and Resolution Time for AI Bot vs Human queues",
            "Identify the anomaly: AI Bots answer in <10 seconds, but failed handoffs take 4.2 hours to resolve (vs 1.1 hours for pure human routing)",
            "Draft a 1-sentence contrarian headline: 'While AI bots cut initial response to seconds, poor agent handoffs quadruple total customer resolution time.'",
          ],
          outputSample:
            "CONTRARIAN ANGLE AUDIT:\n• Industry Assumption: 'Deploying AI chatbots automatically accelerates end-to-end customer support.'\n• Data Finding: AI bots respond in 8 seconds, but unresolved bot escalations take 4.2 hours on average to resolve (380% slower than direct human intake at 1.1 hours).\n• Newsworthy Headline: 'The AI Handoff Bottleneck: Study of 12M Support Tickets Reveals Failed Bot Escalations Quadruple Customer Resolution Time.'",
          healthy: "The hook identifies a genuine counter-intuitive insight backed by robust numbers.",
          unhealthy: "A generic promotional stat like '99% of Freshworks customers love our software.'",
          interpret: "Reporters love stories about unintended consequences and emergent tech friction; the handoff bottleneck is a compelling, highly shareable angle.",
          soWhat: [
            {
              symptom: "Finding feels too obvious or expected",
              action: "Cross-tabulate metrics by industry or company size to find surprising outliers",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-methodology-rigor",
          concept: "Methodology Disclosure Rigor",
          lessonAnchor: "why-journalists-want-your-data",
          theoryRecap:
            "Reporters prioritize original research backed by transparent methodology notes (sample size, dates, data source) so they can independently verify credibility.",
          question:
            "How do you write a clear, 3-sentence methodology disclosure note that satisfies tier-1 editorial fact-checkers?",
          toolName: "Google Docs",
          where: "In Google Docs, draft the official methodology section to accompany the press release and media kit.",
          procedure: [
            "State the exact sample volume (e.g. 12,410,000 anonymized support tickets)",
            "Define the sample composition and geographic range (e.g. 3,500 mid-market and enterprise organizations across North America, Europe, and APAC)",
            "Specify the precise date range and data cleaning criteria (e.g. Jan 1, 2025 to Dec 31, 2025; automated test tickets and spam filtered out)",
          ],
          outputSample:
            "METHODOLOGY NOTE:\n'Data was aggregated and anonymized from 12,410,000 customer service interactions across 3,500 mid-market and enterprise organizations using Freshservice between January 1, 2025, and December 31, 2025. The dataset spans companies headquartered in North America (44%), Europe (32%), and APAC (24%) across tech, retail, and financial services sectors. Internal testing tickets, duplicate spam pings, and accounts with fewer than 500 monthly tickets were excluded to ensure statistical reliability.'",
          healthy: "Methodology specifies exact sample size, geographic breakdown, date parameters, and explicit exclusion filters.",
          unhealthy: "Vague disclosure like 'Based on an internal survey of our user base.'",
          interpret: "Clear methodology signals that the numbers are real, defensible, and free of marketing spin, encouraging journalists to cite the study.",
          soWhat: [
            {
              symptom: "Methodology lacks date bounds or sample count",
              action: "Query the data engineering team for exact ticket counts and query timestamps",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-data-packaging",
          concept: "Data Packaging for Reporters",
          lessonAnchor: "packaging-the-data-for-reporters",
          theoryRecap:
            "Reporters who can independently check your numbers trust them more. Data PR packages require a one-line finding, a methodology note, a clean CSV, and a simple chart.",
          question:
            "How do you structure the public CSV data repository and embeddable visual asset for journalist downloads?",
          toolName: "Google Sheets",
          where: "Set up a public, view-only Google Sheets workbook with clean data columns and an embeddable chart tab.",
          procedure: [
            "Create Tab 1: 'Top-Line Summary' with key metrics, definitions, and 1-sentence findings",
            "Create Tab 2: 'Channel Comparison' (Ticket Volume, First Response Time, Resolution Time, CSAT Score across AI vs Human vs Hybrid channels)",
            "Create Tab 3: 'Industry Breakdown' (SaaS, E-commerce, Financial Services, Healthcare)",
            "Add Tab 4: 'Charts & Visuals' with ready-to-embed clean vector charts with source watermarks",
          ],
          outputSample:
            "GOOGLE SHEETS REPOSITORY STRUCTURE:\n• Tab 1: Executive Summary & Methodology (n=12.4M tickets, 2025)\n• Tab 2: Channel_Performance_2025.csv (Channel, FRT_Sec, Resolution_Hrs, Escalation_Pct, CSAT_Score)\n• Tab 3: Industry_Breakdown_2025.csv (Sector, Avg_Volume, AI_Adoption_Rate, Bottleneck_Index)\n• Tab 4: Embeddable Graphics (Downloadable PNG/SVG: 'Resolution Time: Bot vs Human Handoff')",
          healthy: "Data is formatted in tidy columns, easy to export as CSV, with labeled headers and chart embed links.",
          unhealthy: "A password-protected PDF requiring an account sign-up to view the data.",
          interpret: "Frictionless access to clean data makes it easy for reporters on deadline to copy numbers into their stories and credit your brand.",
          soWhat: [
            {
              symptom: "Sheet permissions require access approval",
              action: "Change sharing settings to 'Anyone with the link can view'",
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
            role: "Filter ticket data and format public CSV data tables",
            why: "Free structured data tool",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Docs",
            role: "Draft the methodology note and reporter brief",
            why: "Free collaborative document editor",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Muck Rack",
            role: "Track reporter coverage of similar benchmark studies",
            why: "Media research platform",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A Data PR brief containing the validated contrarian angle, a 3-sentence methodology disclosure, and a clean data table structure.",
      sampleOutput:
        "Slack — State of Remote Collaboration Data PR Package\n\n" +
        "1. Contrarian Angle:\n" +
        "   'The Async Illusion: Despite 80% of companies adopting asynchronous chat to reduce meetings, workers spend 2.6 hours per day searching for context across fragmented channel threads.'\n\n" +
        "2. Methodology Note:\n" +
        "   'Analysis of 50M anonymized message interactions and a verified panel of 4,000 knowledge workers across US/UK tech enterprises in Q4 2025.'\n\n" +
        "3. Data Repository:\n" +
        "   • Sheets Link: Clean CSV with search query volume, thread depth, and context switching latency\n" +
        "   • 2 SVG charts formatted for media embedding\n\n" +
        "4. Media Coverage Generated:\n" +
        "   • Wall Street Journal, Fast Company, Wired (14 tier-1 backlinks)",
      successCriteria: [
        "Isolates a single-sentence contrarian finding that challenges standard industry assumptions",
        "Structures a rigorous methodology note including sample size, timeframe, and exclusion criteria",
        "Formats raw numbers into a clean, reporter-friendly spreadsheet schema",
      ],
      portfolioReady: true,
      keyTakeaway:
        "Data-driven PR converts internal business telemetry into undeniable public authority. Lead with the counter-intuitive finding, provide uncompromising methodology rigor, and package the data for effortless journalist verification.",
    },
    {
      id: "data-driven-pr-pitch-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Data PR Pitch Teardown: Eliminating Methodology Flaws, Data Bloat, and Buried Leads",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Critique three data-led PR pitch emails across B2B travel and SaaS topics, diagnosing critical flaws like buried statistical findings, unverified small-sample claims, missing methodology links, and embargo violations.",
      companyId: "rategain-travel-technologies",
      scenario:
        "You are the Communications Director at RateGain Travel Technologies reviewing draft pitches for an upcoming Global Hotel Pricing & Demand Report. You must audit three pitch drafts to ensure every number is properly contextualized, concise, and compliant with journalist embargo ethics.",
      brief:
        "Evaluate 3 data PR pitch specimens. Identify all defects regarding lead placement, methodology clarity, length limits (sub-200 words), and embargo handling.",
      mode: "teardown",
      conceptsCovered: [
        "Data Pitch Structure",
        "Methodology Transparency",
        "Embargo Protocol & Timing",
      ],
      skills: ["Data PR", "PR Copywriting", "Media Ethics", "Pitch Quality Control"],
      prerequisites: [
        "Familiarity with the sub-200 word data pitch formula (lead stat, methodology, CSV link, offer)",
        "Understanding of journalist embargo agreements and exclusive pitching rules",
      ],
      terminology: [
        {
          term: "Buried Lead",
          definition: "Failing to state the most important or newsworthy fact at the very beginning of a pitch or story.",
        },
        {
          term: "Statistical Significance",
          definition: "The likelihood that a result or relationship is caused by something other than mere chance, requiring adequate sample sizes.",
        },
      ],
      keyQuestion: "What separates a credible data pitch from an overhyped, unverified survey blast that journalists immediately discard?",
      whatToLookFor: [
        {
          label: "Subject Line Lead",
          detail: "Check if the subject line includes the actual metric and finding rather than a generic report title.",
        },
        {
          label: "Sample Size Disclosure",
          detail: "Ensure the sample size (n=...) is explicitly stated in the first 2 sentences.",
        },
        {
          label: "Embargo Exclusivity",
          detail: "Verify the pitch does not promise an exclusive simultaneously to competing outlets.",
        },
      ],
      decision: {
        prompt: "You notice a PR pitch claims '78% of hotel managers are abandoning dynamic pricing,' but checking the source data reveals this was based on an informal survey of only 18 attendees at a networking dinner. What should you do?",
        options: [
          {
            id: "opt-1",
            label: "Send the pitch as-is; percentages sound credible regardless of sample size.",
            correct: false,
          },
          {
            id: "opt-2",
            label: "Kill the pitch or replace the small survey with verified pricing data from your 50,000+ property platform dataset before pitching.",
            correct: true,
          },
          {
            id: "opt-3",
            label: "Add an asterisk in the email footer explaining that n=18.",
            correct: false,
          },
        ],
        explanation:
          "Pitching grand macro claims based on statistically insignificant samples (like n=18) destroys company credibility when reporters check the methodology. Journalists will publicly call out junk surveys, resulting in brand damage rather than positive PR.",
      },
      professionalRecommendation: {
        priority: "High",
        text: "Keep data pitches strictly under 200 words: Subject Line = Data Hook; Sentence 1 = Relevance & Context; Bullets = 3 Hard Numbers; Sentence 4 = 1-line Methodology & Cloud Data Link; Final Sentence = Embargo / Interview Offer.",
      },
      commonMistakes: [
        {
          mistake: "Writing a 400-word essay explaining company history before sharing the data",
          explanation: "Reporters do not care about your founding story; lead with the newsworthy metric in sentence 1.",
        },
        {
          mistake: "Sending identical embargoed 'exclusives' to multiple direct competitors",
          explanation: "If two reporters prepare stories under a promised exclusive and publish simultaneously, both will blackball your company forever.",
        },
      ],
      teardownItems: [
        {
          itemId: "item-1-buried-lead-bloat",
          specimenSource: "synthetic-realistic",
          specimen:
            "Subject: Exciting Industry News and Market Research Report from RateGain\n\nDear Travel Journalist,\n\nRateGain Travel Technologies was founded in 2004 with a vision to revolutionize the global travel and hospitality distribution ecosystem through cutting-edge cloud intelligence. Over the last two decades, our award-winning data science team has partnered with thousands of leading hotel chains worldwide.\n\nToday, we are delighted to share our comprehensive 85-page Q3 Global Hospitality Outlook, which explores economic headwinds, inflationary pressures, labor dynamics, and regional occupancy fluctuations.\n\nDeep inside chapter 4 on page 52, our analysis reveals that hotel booking lead times have collapsed by 48% across APAC, with 68% of international bookings now happening within 48 hours of check-in, creating massive revenue volatility for resort operators.\n\nPlease find the full 25MB PDF report attached to this email for your review.\n\nWarm regards,\nRateGain PR Team",
          prompt:
            "Evaluate this pitch for lead placement, word count, deliverability, and data packaging defects.",
          answerKey: [
            {
              defect:
                "Buried lead: the incredible finding ('hotel booking lead times collapsed by 48%') is buried in paragraph 3 and referenced to page 52 of an attachment.",
              severity: "critical",
              whyItMatters:
                "Reporters scan pitches in seconds; burying the headline hook behind 2 paragraphs of corporate history ensures it will be deleted before the journalist ever reaches the data.",
              lessonRef: "writing-the-pitch-itself",
              owner: "you",
            },
            {
              defect:
                "Vague subject line ('Exciting Industry News and Market Research Report') gives zero indication of the actual story or statistical finding.",
              severity: "critical",
              whyItMatters:
                "Generic subject lines look like automated marketing blasts and get immediately archived without being opened.",
              lessonRef: "writing-the-pitch-itself",
              owner: "you",
            },
            {
              defect:
                "Heavy 25MB PDF attachment sent cold without a cloud link or accessible CSV data table.",
              severity: "moderate",
              whyItMatters:
                "Large PDF attachments trigger email spam gateways and prevent reporters from easily extracting raw numbers for analysis.",
              lessonRef: "packaging-the-data-for-reporters",
              owner: "you",
            },
          ],
          distractors: [
            "It mentions the company's founding year; company background is occasionally included, though in this case it causes fatal bloat.",
            "It covers multiple industry themes; thematic scope is fine if organized properly, but here it dilutes the news hook.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-concise-data-lead",
          specimenSource: "synthetic-realistic",
          specimen:
            "Subject: DATA: Hotel booking lead times collapse 48% in APAC as last-minute travel surges\n\nHi David,\n\nSaw your recent coverage in Skift on airline capacity crunches across Southeast Asia.\n\nWe analyzed 14 million hotel booking transactions across 3,200 APAC properties from Jan-June 2025 and found that travelers are booking 48% closer to arrival than in 2024, with 68% of reservations now made under 48 hours before check-in.\n\nKey regional metrics:\n• Average booking window: 4.2 days (down from 8.1 days in 2024)\n• Cancellation rates on same-day bookings: 31% (up 12 points YoY)\n• Premium room price discounting within 24h: 22% average markdown\n\nMethodology note and clean CSV dataset: [Link to Google Sheets under embargo until Thursday 8 AM SGT].\n\nWould you like an exclusive pre-briefing with our Chief Revenue Officer on Wednesday?\n\nBest,\nAditi Sharma\nRateGain Communications",
          prompt:
            "Review this pitch against data PR best practices. Identify any defects, or confirm if it meets production standards.",
          answerKey: [],
          distractors: [
            "The pitch is under 175 words; keeping pitches concise with clear data bullets is the optimal format for high journalist response rates.",
            "It provides a clear sample size (14M transactions across 3,200 properties); disclosing sample volume upfront establishes instant credibility.",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-unreliable-sample-embargo-breach",
          specimenSource: "synthetic-realistic",
          specimen:
            "Subject: EXCLUSIVE SURVEY: 100% of Travelers Say AI Agents Will Replace Human Travel Planners by 2026\n\nTo: editor@travelweekly.com, news@skift.com, bureau@phocuswire.com\n\nHi Team,\n\nWe are offering an exclusive story to your desk! In our groundbreaking new study, 100% of respondents revealed they plan to use autonomous AI agents to book all business trips next year, proving human corporate travel agents are officially obsolete.\n\nMethodology: Based on an exclusive poll of 24 attendees at our recent user dinner in London.\n\nThis exclusive is offered to your publication for publish this Friday at 9 AM!\n\nBest,\nPR Agency",
          prompt:
            "Identify all statistical validity, media ethics, and distribution defects in this pitch.",
          answerKey: [
            {
              defect:
                "Statistically insignificant sample size (n=24 event attendees) used to make sweeping global macro claims ('100% of travelers', 'agents officially obsolete').",
              severity: "critical",
              whyItMatters:
                "Journalists will immediately reject statistically flawed micro-surveys, and publishing such hype damages brand reputation with industry peers.",
              lessonRef: "finding-the-story-inside-your-data",
              owner: "you",
            },
            {
              defect:
                "Violating exclusive embargo ethics by CC'ing competing publications (Travel Weekly, Skift, Phocuswright) on the exact same 'exclusive' pitch.",
              severity: "critical",
              whyItMatters:
                "Promising an 'exclusive' simultaneously to multiple competing desks breaches core PR ethics and burns relationships with all recipient editors.",
              lessonRef: "timing-and-distribution",
              owner: "you",
            },
            {
              defect:
                "Sensationalized, hyperbolic framing ('groundbreaking', 'officially obsolete') unbacked by rigorous research methodology.",
              severity: "moderate",
              whyItMatters:
                "Data reporters demand sober, objective findings; hyperbole triggers skepticism and pitch rejection.",
              lessonRef: "packaging-the-data-for-reporters",
              owner: "you",
            },
          ],
          distractors: [
            "It mentions autonomous AI agents; covering trending AI topics is standard if supported by credible data.",
            "It proposes a specific publish date; timing coordination is standard in PR outreach.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Review and annotate pitch specimens",
            why: "Free text review tool",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Muck Rack",
            role: "Journalist pitching and monitoring",
            why: "Verify journalist beat preferences and embargo handling",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A defect analysis matrix grading each data PR pitch with specific line-level corrections.",
      sampleOutput:
        "TBO Tek — B2B Travel Distribution PR Pitch Teardown\n\n" +
        "1. Specimen 1 (Defective Pitch):\n" +
        "   • Issue: Buried hotel booking lead time metric on page 38 of an attached 30MB PDF.\n" +
        "   • Fix: Extracted top 3 stats into a 150-word email with direct Google Sheet link.\n\n" +
        "2. Specimen 2 (Production Standard Pitch):\n" +
        "   • Subject: 'DATA: 147k travel agent network data shows corporate booking windows compressed by 38%'\n" +
        "   • Word count: 172 words.\n" +
        "   • Methodology: 8.5M transactions across 110 countries.\n" +
        "   • Result: Covered exclusively in Travel Daily Media + 8 high-DA referring domains.",
      successCriteria: [
        "Identifies buried leads and unlinked attachments in Specimen 1",
        "Validates the tight, transparent data structure of Specimen 2",
        "Catches statistical insignificance and simultaneous embargo breaches in Specimen 3",
      ],
      portfolioReady: true,
      keyTakeaway:
        "A great dataset dies in a bloated pitch. Keep your pitch under 200 words, lead with the most startling number in sentence one, disclose your methodology openly, and respect journalist embargo ethics.",
    },
  ],

  "pitching-journalists": [
    {
      id: "pitching-journalists-cold-pitch-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The 3% Response Filter: Cold PR Pitch Teardown and Defect Diagnosis",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Identify critical flaws in cold journalist pitch drafts—including buried news hooks, generic recipient tokens, company-centric opening lines, and bloated word counts—and calibrate them against newsroom editorial standards.",
      companyId: "airbnb",
      scenario:
        "You are the corporate communications manager at Airbnb analyzing cold pitch drafts prepared by an agency team targeting tech, travel, and business reporters ahead of a major platform update.",
      brief:
        "Review 2 cold pitch specimens submitted to reporters, identify critical defects violating journalist pitch etiquette (self-serving angles, non-existent personalization, missing data), and distinguish real editorial flaws from non-defects.",
      mode: "teardown",
      conceptsCovered: [
        "Subject Lines: Earn the Open",
        "The First Sentence Is the Whole Pitch",
        "Personalization Signals That Prove You Did the Work",
        "Why Most Pitches Fail",
      ],
      teardownItems: [
        {
          itemId: "item-1-generic-product-announcement",
          specimenSource: "synthetic-realistic",
          specimen:
            "Subject: Exciting News: Airbnb Announces Revolutionary Platform Update!\n\n" +
            "Hi Sarah,\n\n" +
            "Hope you are having a wonderful week! As the world's leading community-driven hospitality platform with millions of listings across 191 countries, Airbnb is always innovating to create magical travel experiences.\n\n" +
            "Today, we are thrilled to announce our revolutionary new collaborative payment splitting feature, designed to empower group travelers worldwide to seamlessly book trips together.\n\n" +
            "With this new tool, users can easily split reservation costs directly within the mobile app. Travel is better when shared, and our internal team has worked tirelessly over the past 14 months to engineer this groundbreaking frictionless checkout experience.\n\n" +
            "Key features include:\n" +
            "- In-app split payments for up to 16 guests\n" +
            "- Automatic 72-hour payment hold windows\n" +
            "- Multi-currency payment support across 30+ currencies\n\n" +
            "Let me know if you would like to speak with our Vice President of Product for an exclusive briefing on how Airbnb is changing the travel landscape!\n\n" +
            "Best regards,\n" +
            "Alex, PR Coordinator",
          prompt:
            "Analyze this cold pitch drafted for TechCrunch enterprise/travel tech reporter Sarah Perez announcing Airbnb's new group payment splitting feature.",
          answerKey: [
            {
              defect:
                "Vague, company-centric subject line ('Exciting News: Airbnb Announces Revolutionary Platform Update!')",
              severity: "critical",
              whyItMatters:
                "Reporters scan subject lines in under 3 seconds; leading with company self-praise rather than the specific news hook gets the email archived immediately.",
              lessonRef: "subject-lines-earn-the-open",
              owner: "you",
            },
            {
              defect:
                "Opening paragraph introduces company boilerplate history instead of stating the news",
              severity: "critical",
              whyItMatters:
                "Reporters decide whether to keep reading within the first sentence. Explaining what Airbnb is wastes the opening line before delivering the news.",
              lessonRef: "the-first-sentence-is-the-whole-pitch",
              owner: "you",
            },
            {
              defect:
                "Zero beat personalization or recent coverage reference",
              severity: "critical",
              whyItMatters:
                "Using 'Hi Sarah' without referencing her recent articles on travel checkout friction or fintech proves this was a mass-blast list send.",
              lessonRef: "personalization-signals-that-prove-you-did-the-work",
              owner: "you",
            },
            {
              defect:
                "Self-serving hype words ('revolutionary', 'magical', 'groundbreaking') with zero consumer impact data",
              severity: "critical",
              whyItMatters:
                "Marketing adjectives signal promotional copy rather than an objective story; reporters want user pain points and quantified adoption metrics.",
              lessonRef: "why-most-pitches-fail",
              owner: "you",
            },
            {
              defect:
                "Pitch body exceeds 200 words (245 words) without a concise news summary",
              severity: "moderate",
              whyItMatters:
                "59% of journalists prefer pitches under 200 words; extra padding obscures the core story angle.",
              lessonRef: "quick-summary",
              owner: "you",
            },
          ],
          distractors: [
            "Including a structured bulleted list of 3 key functional feature details",
            "Offering an interview with the Vice President of Product",
            "Sending the pitch from a designated PR team coordinator account",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-data-report-pitch",
          specimenSource: "synthetic-realistic",
          specimen:
            "Subject: Summer Travel Insights Inside - Exclusive for WSJ\n\n" +
            "Hi Scott,\n\n" +
            "I saw your recent column on escalating summer flight disruptions and wanted to share exclusive data on how vacation rental bookings are trending.\n\n" +
            "Airbnb is experiencing record-breaking dominance this quarter, outperforming all competitors as the preferred platform for family vacations across North America.\n\n" +
            "We have attached our comprehensive 48-page 2026 Global Travel Trends PDF Report (14MB) containing all proprietary charts and methodology. Please review pages 12 through 38 for key regional demographic breakdowns.\n\n" +
            "Let me know if you would like an exclusive quote from our CEO for your next column.\n\n" +
            "Best,\n" +
            "Jordan",
          prompt:
            "Analyze this cold pitch drafted for Wall Street Journal travel columnist Scott McCartney sharing summer travel booking data.",
          answerKey: [
            {
              defect:
                "Subject line conceals the specific data finding behind generic teaser phrasing ('Summer Travel Insights Inside')",
              severity: "critical",
              whyItMatters:
                "Leading with the conclusion (e.g., 'Airbnb Data: 42% Surge in Drive-To Summer Bookings Amid Flight Cancellations') gives the reporter a ready-to-run headline.",
              lessonRef: "subject-lines-earn-the-open",
              owner: "you",
            },
            {
              defect:
                "Self-serving competitive boast ('record-breaking dominance') instead of macro consumer trend insight",
              severity: "critical",
              whyItMatters:
                "Columnists write about broader consumer economic behavior for their readership, not unverified corporate dominance claims.",
              lessonRef: "why-most-pitches-fail",
              owner: "you",
            },
            {
              defect:
                "Heavy 14MB PDF attachment with no inline statistics in the email body",
              severity: "critical",
              whyItMatters:
                "Unsolicited file attachments trigger spam firewalls and create friction; journalists need key findings formatted directly as 2-3 bulleted sentences.",
              lessonRef: "the-first-sentence-is-the-whole-pitch",
              owner: "you",
            },
          ],
          distractors: [
            "Referencing Scott's recent published column on airline travel disruptions",
            "Offering an exclusive executive commentary quote for his upcoming column",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Docs",
            role: "Drafting & Review",
            why: "Format and annotate pitch drafts against newsroom editorial checklists",
            required: true,
            lastVerified: "2026-08-16",
          },
        ],
        paid: [
          {
            toolName: "Muck Rack",
            role: "Media Intelligence",
            why: "Inspect reporter beat preferences, past articles, and verified contact guidelines",
            required: false,
            lastVerified: "2026-08-16",
          },
        ],
      },
      deliverable:
        "A scored teardown evaluation diagnosing 8 critical and moderate defects across 2 cold PR pitch specimens with specific editorial rewrite recommendations.",
      sampleOutput:
        "SLACK PR PITCH TEARDOWN AUDIT REPORT:\n\n" +
        "SPECIMEN EVALUATION (Enterprise Collab Pitch):\n" +
        "1. Subject Line: 'Exciting Collaboration News!' -> DEFECT (Vague teaser, zero news value). FIX: 'Slack AI Rollout: Summarizing 100+ Channel Messages in 3 Seconds'.\n" +
        "2. Hook Line: 'Slack is the leading productivity platform...' -> DEFECT (Company boilerplate). FIX: 'New research from 2,000 IT leaders shows 47% of knowledge worker time is lost to message catch-up.'\n" +
        "3. Personalization: 'Hi Reporter' -> DEFECT (Unsegmented blast). FIX: Cites beat reporter's Tuesday article on workplace AI cognitive overload.\n" +
        "4. Word Count: 310 words -> DEFECT (Over length). Reduced to 145 words with 3 verified data bullets and 1 exclusive interview offer.",
      successCriteria: [
        "Identified all 8 critical and moderate defects across both pitch specimens",
        "Correctly differentiated genuine defects from valid pitch conventions (distractors)",
        "Mapped each defect to its root violation (subject line, hook, personalization, length)",
      ],
      portfolioReady: true,
    },
    {
      id: "pitching-journalists-exclusive-pitch-build",
      tier: "core",
      archetype: "build-the-asset",
      title: "The Sub-200-Word Pitch: Crafting Targeted Exclusive Media Pitches with Custom Hooks",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective:
        "Build a high-converting, personalized media pitch package—complete with a news-first subject line, a one-sentence headline hook, verified reporter beat citations, and an embargoed exclusive timeline—ready to pitch to top-tier tech and business publications.",
      companyId: "slack",
      scenario:
        "You are the Senior PR Manager at Slack preparing an exclusive media pitch for the launch of Slack AI—an enterprise-grade generative intelligence suite that summarizes channel conversations and synthesizes daily recap digests.",
      brief:
        "Develop an end-to-end media pitching package: formulate a high-open subject line under 8 words, draft a punchy 180-word pitch centered on quantified productivity stats, customize 3 tailored personalization hooks for specific reporter beats (enterprise SaaS, AI productivity, workplace culture), and establish the embargo outreach schedule.",
      mode: "build",
      conceptsCovered: [
        "Subject Lines: Earn the Open",
        "The First Sentence Is the Whole Pitch",
        "Personalization Signals That Prove You Did the Work",
        "Why Most Pitches Fail",
      ],
      steps: [
        {
          stepId: "step-1-subject-line-engineering",
          concept: "Subject Lines: Earn the Open",
          lessonAnchor: "subject-lines-earn-the-open",
          theoryRecap:
            "The subject line is a filter with one job: prove in under eight words that the email is worth ten seconds. Lead with the news itself (e.g. data finding or feature capability), never the company name or vague hype.",
          question:
            "Which subject line structure directly conveys the news hook without company name clutter or promotional spam flags?",
          toolName: "Google Docs",
          where: "Document header, pitch variant testing table (Columns: Variant, Word Count, News-First Score, Spam Triggers).",
          procedure: [
            "Draft 5 subject line candidates focusing on the concrete feature capability ('Channel Summarization')",
            "Ensure every candidate is strictly 8 words or fewer",
            "Eliminate ALL CAPS, exclamation points, and hype words ('revolutionary', 'game-changing')",
            "Select the primary news-first subject line and 1 A/B test follow-up variant",
          ],
          outputSample:
            "SUBJECT LINE FORMULATION:\n" +
            "- Candidate A (Rejected): 'Slack Announces Huge AI Update for Enterprises!' (6 words, company-first, hype word)\n" +
            "- Candidate B (Rejected): 'Exciting news regarding your recent workplace coverage' (7 words, vague teaser)\n" +
            "- Candidate C (Selected Primary): 'Slack AI: Generative Recaps Save 97 Mins Daily' (7 words, data-backed news hook)\n" +
            "- Candidate D (Follow-up Variant): 'Data: 47% Desk Workers Lose 2 Hours to Catch-Up' (8 words, problem-first)",
          healthy:
            "Subject line is 6-8 words, leads with quantifiable data or concrete news, and avoids marketing buzzwords.",
          unhealthy:
            "Subject lines exceeding 10 words, opening with 'Exciting News', or using vague teasers that hide the story.",
          interpret:
            "Reporters process hundreds of pitches per morning on mobile screens. A crisp, news-first subject line acts as an instant headline preview.",
          soWhat: [
            {
              symptom: "Pitch open rates remain below 15% across target media list",
              action: "Rewrite subject lines to lead with a specific quantified statistic or exclusive embargo notice",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-first-sentence-hook",
          concept: "The First Sentence Is the Whole Pitch",
          lessonAnchor: "the-first-sentence-is-the-whole-pitch",
          theoryRecap:
            "The first sentence should state the news exactly as a headline would: what happened, to whom, and why it matters right now. If the first sentence describes company mission or history, the reporter stops reading.",
          question:
            "How do you frame the opening line so that a reporter immediately visualizes a published headline for their readers?",
          toolName: "Google Docs",
          where: "Pitch body drafting section, opening sentence contrast matrix.",
          procedure: [
            "State the core news hook within the first 25 words",
            "Anchor the statement with specific user impact data (e.g. 97 minutes saved per user per day)",
            "Ensure the sentence stands alone as a publishable news summary without requiring background reading",
          ],
          outputSample:
            "OPENING SENTENCE REVISION:\n" +
            "[Weak Boilerplate Draft]: 'At Slack, we believe in making work life simpler, more pleasant, and more productive, which is why our product team is thrilled to roll out our newest generative AI capabilities.'\n\n" +
            "[Strong News Hook Draft]: 'Slack is launching native generative AI across its enterprise platform today, introducing automatic channel recaps and smart search that pilot data shows saves employees an average of 97 minutes daily.'",
          healthy:
            "The opening sentence delivers the who, what, and quantified impact in one clear, objective sentence.",
          unhealthy:
            "Opening with company mission statements, corporate history, or expressions of internal excitement ('We are excited to share...').",
          interpret:
            "Journalists evaluate pitches in seconds. Delivering the headline in sentence one respects their editorial time and clarifies the story angle instantly.",
          soWhat: [
            {
              symptom: "Reporters open the email but abandon it without responding or clicking data links",
              action: "Cut all introductory throat-clearing and place the quantified news hook as the very first sentence",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-personalized-beat-hooks",
          concept: "Personalization Signals That Prove You Did the Work",
          lessonAnchor: "personalization-signals-that-prove-you-did-the-work",
          theoryRecap:
            "True personalization connects your news to a specific recent piece written by the reporter. Citing their article by name and showing how your data fills their coverage gap lifts response rates from 3% to 24%+.",
          question:
            "What specific article references and editorial angles must be tailored for Enterprise Tech, AI Workplace, and Management beats?",
          toolName: "Gmail",
          where: "Gmail draft compose window, 1-to-1 personalization hook blocks.",
          procedure: [
            "Research recent articles (past 30 days) for 3 target reporters covering Enterprise SaaS, AI Tools, and Workplace Management",
            "Draft a custom 2-sentence opening hook for each reporter citing their specific headline and core premise",
            "Connect Slack AI's launch data directly to the open question raised in their previous reporting",
          ],
          outputSample:
            "TARGETED BEAT HOOKS:\n\n" +
            "1. Beat: Enterprise Tech (Ron Miller, TechCrunch):\n" +
            "'Hi Ron — Loved your piece on enterprise AI tool sprawl last Thursday. Following your point on companies struggling to get employees to adopt standalone chat assistants, Slack is rolling out native channel recaps directly inside the existing workflow...'\n\n" +
            "2. Beat: Workplace Culture (Emma Hinchliffe, Fortune):\n" +
            "'Hi Emma — Your recent column on 'meeting fatigue and digital burnout' highlighted how middle managers spend 4 hours daily catching up on chatter. Our new pilot data shows native channel summarization recovers 97 minutes of focused work per day...'\n\n" +
            "3. Beat: AI & Productivity (Alex Kantrowitz, Big Technology):\n" +
            "'Hi Alex — In your newsletter analysis of GenAI ROI, you asked when enterprise LLMs would move from novelty to measurable time saved. Slack's pilot data from 50 enterprise customers offers concrete hard numbers...'",
          healthy:
            "Every hook names a specific published article, acknowledges its core insight, and logically bridges to the new story angle.",
          unhealthy:
            "Generic greetings ('Hi there', 'Hope you are well') or shallow name-dropping without connecting to the article's specific thesis.",
          interpret:
            "Citing specific coverage demonstrates genuine familiarity with the reporter's beat, establishing immediate credibility.",
          soWhat: [
            {
              symptom: "High email delivery but zero replies from tier-1 publication beats",
              action: "Read the reporter's last 3 articles and replace standard greetings with an explicit analytical bridge to their work",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-pitch-body-and-embargo-schedule",
          concept: "Why Most Pitches Fail",
          lessonAnchor: "why-most-pitches-fail",
          theoryRecap:
            "Pitches fail when they are generic, self-serving, or lack a real news hook. Keeping total word count under 200 words, offering clean bulleted data, and setting clear embargo terms prevents these failures.",
          question:
            "How should the complete 180-word pitch body, data bullet points, and embargo offer be structured for delivery?",
          toolName: "Google Sheets",
          where: "Media relations tracker spreadsheet (Columns: Outlet, Reporter, Custom Hook, Pitch Status, Embargo Agreement, Follow-up Date).",
          procedure: [
            "Assemble the core pitch body, keeping total length under 200 words",
            "Include 3 concise data bullets detailing pilot results and technical specs",
            "Add a clear embargo notice (e.g. 'Under Embargo until Tuesday, Oct 24, 6:00 AM PT')",
            "Offer an exclusive interview with product leadership and a live demo walkthrough",
            "Set the outreach schedule for Tuesday morning at 8:30 AM in the recipient's timezone",
          ],
          outputSample:
            "COMPLETE PITCH SPECIMEN (178 words total):\n\n" +
            "Subject: Slack AI: Generative Recaps Save 97 Mins Daily\n\n" +
            "[Personalized Beat Hook - 35 words]\n\n" +
            "Slack is launching native generative AI across its enterprise platform, introducing automatic conversation summaries and search synthesis that pilot data shows saves employees an average of 97 minutes daily.\n\n" +
            "Key data points from the 50-enterprise beta:\n" +
            "- 97 minutes saved per user per day through channel and thread summarization\n" +
            "- 83% of beta users report reduced anxiety around returning from PTO or sick leave\n" +
            "- Enterprise data privacy: zero customer data is used to train underlying third-party LLMs\n\n" +
            "The launch is under embargo until Tuesday, October 24 at 6:00 AM PT. We can offer an exclusive advance demo and a 20-minute briefing with Slack CEO Stewart Butterfield this Thursday or Friday.\n\n" +
            "Let me know if you would like the advance briefing and full release materials.\n\n" +
            "Best,\n" +
            "[Your Name] | Slack Communications Team",
          healthy:
            "Total pitch length is under 180 words, contains concrete data points, specifies embargo terms, and includes an explicit interview offer.",
          unhealthy:
            "Exceeding 300 words, embedding unsolicited large attachments, or failing to state clear embargo timezones.",
          interpret:
            "A concise, structured pitch provides everything a reporter needs to evaluate the story in one screen without fluff.",
          soWhat: [
            {
              symptom: "Reporter replies asking for basic details already buried in a long email",
              action: "Trim copy to bulleted essentials so key facts and interview terms are visible without scrolling",
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
            role: "Pitch Drafting & Word Count Audit",
            why: "Draft, refine, and enforce strict under-200-word constraints for pitch copy",
            required: true,
            lastVerified: "2026-08-16",
          },
          {
            toolName: "Google Sheets",
            role: "Media Outreach & Embargo Tracker",
            why: "Track media list contacts, tailored hooks, embargo agreements, and outreach timing",
            required: true,
            lastVerified: "2026-08-16",
          },
          {
            toolName: "Gmail",
            role: "Direct 1-to-1 Media Outreach",
            why: "Send individual personalized emails directly to target journalists without mail-merge footprints",
            required: true,
            lastVerified: "2026-08-16",
          },
        ],
        paid: [
          {
            toolName: "Muck Rack",
            role: "Journalist Intelligence",
            why: "Look up verified email addresses, recent coverage history, and pitching preferences",
            required: false,
            lastVerified: "2026-08-16",
          },
        ],
      },
      deliverable:
        "A comprehensive media pitch package containing an under-8-word news subject line, a 178-word core pitch, 3 customized beat-specific intro hooks, and an embargoed outreach tracking spreadsheet.",
      sampleOutput:
        "OLA ELECTRIC PRODUCT LAUNCH PITCH PACKAGE:\n\n" +
        "Subject: Ola S1X: Sub-$1,000 EV Scooter Launch with 190km Range\n\n" +
        "[Custom Hook - Auto/Clean-Tech Beat]:\n" +
        "'Hi Alisha — Loved your deep dive on two-wheeler battery localization last Tuesday. As you noted that total cost of ownership remains the key barrier for Tier-2 commuter adoption, Ola Electric is announcing its lowest-cost platform yet...'\n\n" +
        "[Core Pitch - 165 words]:\n" +
        "Ola Electric is launching the S1X scooter platform across India today, priced starting under $1,000 with a certified 190km single-charge range.\n\n" +
        "Key launch metrics:\n" +
        "- Sub-$1,000 starting price point engineered for mass ICE scooter replacement\n" +
        "- 190km ARAI-certified range on in-house battery cell architecture\n" +
        "- 500 new Experience Centres operational nationwide for immediate test rides\n\n" +
        "Under embargo until Thursday, August 15 at 11:00 AM IST. We are offering exclusive test-ride slots in Bangalore and a 15-minute advance briefing with Bhavish Aggarwal.\n\n" +
        "Let me know if you would like to secure the briefing slot.\n\n" +
        "Best,\n" +
        "Communications Team, Ola Electric",
      successCriteria: [
        "Subject line is under 8 words and leads with the core news hook, not brand vanity",
        "Total pitch body is strictly under 200 words with 3 quantified data bullets",
        "Created 3 distinct personalization hooks referencing specific published articles",
        "Outreach tracker defines clear embargo terms, send timing, and follow-up protocols",
      ],
      portfolioReady: true,
    },
  ],
  "media-relations": [
    {
      id: "media-relations-beat-alignment-audit",
      tier: "mini",
      archetype: "audit",
      title: "The 10-Article Beat Audit: Screening Journalists and Pre-Outreach Qualification",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Audit target journalists' recent 10-article coverage histories across beat focus, source preferences, and editorial formats to eliminate mass-blast mismatch and qualify Tier-1 media contacts.",
      companyId: "ola-electric",
      scenario:
        "You are the PR Lead at Ola Electric ($4.8B market debut) preparing a targeted media list of clean-tech, automotive, and capital markets reporters ahead of an upcoming manufacturing technology milestone.",
      brief:
        "Conduct a structured 10-article beat audit on 3 candidate journalists to evaluate beat relevance, quoting patterns, and past skepticism on EV delivery timelines, classifying each reporter into pitch, background briefing, or do-not-contact categories.",
      mode: "diagnostic",
      conceptsCovered: [
        "Research the Beat Before You Reach Out",
        "What Media Relations Actually Means",
        "The Etiquette That Burns Bridges",
      ],
      steps: [
        {
          stepId: "step-1-article-history-analysis",
          concept: "Research the Beat Before You Reach Out",
          lessonAnchor: "research-the-beat-before-you-reach-out",
          theoryRecap:
            "A reporter's beat is specific and narrow. 86% of journalists ignore pitches outside their beat entirely. Reading a reporter's last 10 articles reveals their true coverage focus, source quoting preferences, and editorial angle.",
          question:
            "What criteria determine whether a candidate journalist's recent 10 articles match Ola Electric's battery manufacturing news angle?",
          toolName: "Google Sheets",
          where: "Beat audit spreadsheet, columns: reporter_name, publication, last_10_topics, source_types_quoted, beat_match_score (1-10).",
          procedure: [
            "Search and log the headline, date, and core thesis of the last 10 articles for 3 candidate reporters",
            "Categorize the primary topic of each article (e.g. capital markets, EV technology, consumer reviews, policy)",
            "Score beat alignment from 1 to 10 based on whether at least 6 of their last 10 articles focus on mobility tech or manufacturing",
          ],
          outputSample:
            "REPORTER AUDIT LOG (Candidate: Mihir Dalal, Mint):\n" +
            "- Last 10 Articles: 7 on startup IPO performance & governance, 2 on venture funding rounds, 1 on EV policy subsidies\n" +
            "- Primary Beat Focus: Late-stage startup financials and corporate governance (NOT consumer automotive test rides)\n" +
            "- Beat Match Score: 8/10 for IPO/financial milestones; 2/10 for consumer product feature launches\n" +
            "- Recommendation: Pitch exclusive financial scale metrics and manufacturing unit economics; do NOT pitch scooter color options.",
          healthy:
            "Audit identifies the reporter's exact sub-beat and tailors story angles specifically to their coverage history.",
          unhealthy:
            "Pitching consumer product briefs to financial investigative reporters or financial earnings to lifestyle reviewers.",
          interpret:
            "Screening 10 articles prevents pitching the wrong angle to the wrong journalist, protecting your reputation from immediate spam filtering.",
          soWhat: [
            {
              symptom: "Reporter replies with annoyance stating 'I do not cover consumer gadgets'",
              action: "Log the reporter's true beat in the CRM and remove them from all non-financial pitch lists",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-source-preference-profiling",
          concept: "What Media Relations Actually Means",
          lessonAnchor: "what-media-relations-actually-means",
          theoryRecap:
            "Media relations is about knowing reporters as individuals: do they quote founders directly, rely on third-party supply chain data, or interview frontline consumers? Matching their sourcing style increases pitch pickup.",
          question:
            "How does analyzing a reporter's quoting patterns shape whether you offer an executive interview, raw factory data, or customer access?",
          toolName: "Google Docs",
          where: "Reporter profile dossiers in Google Docs, sourcing preference section.",
          procedure: [
            "Audit the sources cited across the 10 reviewed articles (founder on-record, analyst quotes, customer interviews, regulatory filings)",
            "Determine whether the journalist prefers high-level strategic vision quotes or granular technical supply chain data",
            "Document the required asset package matching the reporter's proven sourcing preference",
          ],
          outputSample:
            "SOURCING PREFERENCE DOSSIER:\n" +
            "- Reporter: Pranav Balakrishnan (The Economic Times)\n" +
            "- Source Pattern: 70% independent supply chain analysts and tier-1 vendor quotes; rarely uses generic PR statements\n" +
            "- Sourcing Requirement: Needs direct access to manufacturing engineering leads or unembargoed cell testing data\n" +
            "- Angle Strategy: Offer a technical walk-through with the Chief Battery Engineer rather than a polished executive PR quote.",
          healthy:
            "Pitch package matches the exact source types the reporter routinely features in their published work.",
          unhealthy:
            "Offering pre-written generic canned quotes to investigative reporters who exclusively quote original on-record technical sources.",
          interpret:
            "Providing the exact source format a reporter needs removes friction from their reporting workflow and earns priority consideration.",
          soWhat: [
            {
              symptom: "Reporter expresses interest in the story but declines the standard CEO statement",
              action: "Immediately offer an on-background technical interview with the engineering lead or data analyst",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-bridge-burning-risk-screen",
          concept: "The Etiquette That Burns Bridges",
          lessonAnchor: "the-etiquette-that-burns-bridges",
          theoryRecap:
            "Mass-blasting irrelevant pitches, following up excessively, or pitching stories already published by rival outlets permanently burns reporter relationships. A pre-outreach etiquette check ensures compliance.",
          question:
            "What etiquette verification steps must be cleared before sending outreach to prevent burning media relationships?",
          toolName: "Google Sheets",
          where: "Outreach gate checklist, columns: reporter_id, opt_out_verified, rival_exclusive_check, cadence_interval_days.",
          procedure: [
            "Check the reporter's history for prior opt-out requests or negative outreach feedback",
            "Verify that this specific story angle has not been offered as an exclusive to a competitor outlet",
            "Confirm that the previous interaction with this reporter occurred at least 14 days ago to avoid cadence fatigue",
            "Assign a final outreach clearance status: 'Approved for Exclusive', 'Approved for General Release', or 'Restricted'",
          ],
          outputSample:
            "OUTREACH GATE VERIFICATION:\n" +
            "- Reporter: Tech Editor A (Business Standard)\n" +
            "- Opt-Out Check: Cleared (0 prior complaints, active relationship)\n" +
            "- Competitor Exclusive Check: Cleared (Exclusive angle reserved for them; no prior outreach to Mint)\n" +
            "- Cadence Interval: 21 days since last background briefing\n" +
            "- Status: APPROVED for 1-to-1 exclusive embargo briefing.",
          healthy:
            "All outreach passes strict opt-out, exclusivity, and cadence checks before any email transmission.",
          unhealthy:
            "Simultaneously offering the same 'exclusive' to multiple competing reporters or following up daily after silence.",
          interpret:
            "Reporters talk to each other and remember who wastes their time. Rigorous gate checks protect long-term media equity.",
          soWhat: [
            {
              symptom: "Reporter requests to be removed from company email distributions",
              action: "Flag contact as permanently restricted in CRM within 60 minutes and notify entire PR team",
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
            role: "Beat Audit & Gate Scoring Sheet",
            why: "Log article histories, score beat alignment, and record outreach clearance status",
            required: true,
            lastVerified: "2026-08-16",
          },
          {
            toolName: "Google Docs",
            role: "Reporter Profiling Dossier",
            why: "Document individual journalist sourcing preferences, quoting habits, and angles",
            required: true,
            lastVerified: "2026-08-16",
          },
        ],
        paid: [
          {
            toolName: "Muck Rack",
            role: "Article History & Beat Intelligence",
            why: "Quickly aggregate and analyze the last 10 articles and beat tags for target journalists",
            required: false,
            lastVerified: "2026-08-16",
          },
        ],
      },
      deliverable:
        "A completed 10-Article Beat Audit Matrix evaluating 3 target journalists with calculated alignment scores, source preference profiles, and outreach clearance verdicts.",
      sampleOutput:
        "SWIGGY MEDIA AUDIT MATRIX:\n\n" +
        "Reporter 1: Consumer Tech Writer (ET Tech)\n" +
        "- Last 10 Articles: 8 on quick-commerce unit economics and dark store expansion\n" +
        "- Sourcing Preference: Direct operations data, order volumes, average delivery times\n" +
        "- Fit Score: 9/10 (High Priority). Outreach Action: Pitch Instamart Tier-2 expansion metrics.\n\n" +
        "Reporter 2: National Food Critic (Lifestyle Daily)\n" +
        "- Last 10 Articles: Restaurant reviews, chef profiles, fine dining trends\n" +
        "- Sourcing Preference: Chef interviews and culinary tasting menus (0 tech/logistics stories)\n" +
        "- Fit Score: 1/10 (Disqualified). Outreach Action: Remove from logistics tech pitch list.",
      successCriteria: [
        "Audited the last 10 published articles for 3 distinct journalists",
        "Calculated objective beat alignment scores to eliminate non-relevant outreach",
        "Identified individual sourcing preferences (technical data vs executive quotes)",
        "Completed pre-outreach etiquette and exclusivity clearance checks",
      ],
      portfolioReady: true,
    },
    {
      id: "media-relations-value-first-source-protocol",
      tier: "mini",
      archetype: "build-the-asset",
      title: "The Value-First Protocol: Building a Zero-Ask Journalist Relationship Engine",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Design and document a zero-ask media relationship playbook—offering expert commentary benches, early proprietary data cuts, and breaking industry context—to establish brand executives as trusted go-to sources before seeking coverage.",
      companyId: "swiggy",
      scenario:
        "You are the Head of External Communications at Swiggy (IPO at $11.3B valuation) building proactive, long-term relationships with consumer tech and retail reporters without pitching company press releases.",
      brief:
        "Build a zero-ask value protocol: create a rapid-response subject matter expert (SME) bench with verified response SLAs, package quarterly quick-commerce order data trends into reporter research briefings, and establish strict outreach cadence and opt-out rules.",
      mode: "build",
      conceptsCovered: [
        "Offer Value Beyond Your Own Story",
        "What Media Relations Actually Means",
        "The Etiquette That Burns Bridges",
      ],
      steps: [
        {
          stepId: "step-1-expert-commentary-bench",
          concept: "Offer Value Beyond Your Own Story",
          lessonAnchor: "offer-value-beyond-your-own-story",
          theoryRecap:
            "Being useful when you have nothing to promote builds an 'attention bank' with journalists. Providing rapid expert quotes for breaking industry news unrelated to your company turns your team into trusted recurring sources.",
          question:
            "How do you structure an internal SME commentary bench that can deliver expert quotes to journalists on tight 2-hour newsroom deadlines?",
          toolName: "Google Docs",
          where: "SME bench directory document, sections: expert_name, domain_authority, approved_commentary_topics, response_sla_minutes.",
          procedure: [
            "Identify 3 internal subject matter experts (e.g. Chief Economist, Supply Chain VP, Consumer Behavior Lead)",
            "Define pre-cleared commentary topics (e.g. festival retail demand spikes, EV delivery fleet adoption, urban grocery habits)",
            "Establish an internal 90-minute quote turnaround SLA to meet same-day reporter filing deadlines",
          ],
          outputSample:
            "SWIGGY EXPERT COMMENTARY BENCH:\n" +
            "1. Expert: VP of Supply Chain Operations\n" +
            "   - Approved Topics: Urban dark store logistics, monsoon delivery route resilience, EV fleet transition\n" +
            "   - Response SLA: 90 minutes for quote approval\n" +
            "2. Expert: Head of Data Insights\n" +
            "   - Approved Topics: Macro grocery inflation trends, late-night consumption patterns, Tier-2/3 digital adoption\n" +
            "   - Response SLA: 60 minutes for anonymized data verification\n" +
            "Zero-Ask Pitch Rule: Offer quotes strictly as background/commentary on broader industry trends with zero mention of Swiggy promotions.",
          healthy:
            "Commentary bench provides rapid, insightful perspectives on market trends with zero self-promotional brand mentions.",
          unhealthy:
            "Requiring 48-hour legal review cycles for simple commentary, causing reporters to miss deadline and drop the source.",
          interpret:
            "Reporters remember sources who help them hit tight deadlines with high-quality insight when there is no self-serving agenda.",
          soWhat: [
            {
              symptom: "Reporters reach out for quotes but PR approvals take longer than 4 hours",
              action: "Pre-approve standardized commentary positions on recurring industry topics with legal leadership",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-sourcing-platform-monitoring",
          concept: "What Media Relations Actually Means",
          lessonAnchor: "what-media-relations-actually-means",
          theoryRecap:
            "Reporters frequently post source queries on platforms like Connectively (formerly HARO) when working on tight deadlines. Responding with concise, ready-to-publish answers establishes initial relationships.",
          question:
            "How do you screen and respond to journalist queries on Connectively to maximize quote inclusion without pitching products?",
          toolName: "Connectively",
          where: "Connectively query inbox, filtering by Retail, Logistics, and E-Commerce categories.",
          procedure: [
            "Filter incoming journalist queries daily for keywords: 'quick commerce', 'food delivery', 'last-mile logistics', 'consumer spending'",
            "Select queries where internal experts hold unique proprietary perspective or verified data",
            "Draft a 100-word response containing 2 concise, attributed quote options and executive credentials",
            "Submit the pitch within 3 hours of query publication",
          ],
          outputSample:
            "CONNECTIVELY QUERY RESPONSE:\n" +
            "- Query: 'Seeking logistics experts: How are delivery apps managing urban congestion during monsoon season?' (Publication: Livemint)\n" +
            "- Response Draft:\n" +
            "'Hi [Reporter],\n" +
            "Regarding your query on monsoon logistics: Delivery platforms use dynamic micro-dispatching to split high-density neighborhoods into 500-meter sub-zones during rain alerts, cutting rider transit distances by 35% to prevent weather delays.\n\n" +
            "Quote for attribution:\n" +
            "\"During extreme monsoon weather, optimizing dispatch radiuses from 3km down to 800m is the single most effective lever to protect rider safety while maintaining essential supply lines,\" says [Name], VP of Logistics at Swiggy.\n\n" +
            "Available for a 10-minute phone follow-up today if helpful.'",
          healthy:
            "Response directly answers the reporter's specific question in under 120 words with ready-to-publish attribution.",
          unhealthy:
            "Sending a general marketing pitch or asking the reporter to set up a 30-minute discovery call before providing the quote.",
          interpret:
            "Giving journalists immediate, copy-paste-ready commentary solves their deadline pressure and builds trust.",
          soWhat: [
            {
              symptom: "Query submissions yield zero reporter replies or mentions",
              action: "Shorten response to 2 clear sentences of insight plus 1 quote; eliminate all corporate background fluff",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-give-to-ask-cadence-governance",
          concept: "The Etiquette That Burns Bridges",
          lessonAnchor: "the-etiquette-that-burns-bridges",
          theoryRecap:
            "Maintaining a healthy give-to-ask ratio (at least one zero-ask value touchpoint for every direct pitch) and strictly enforcing follow-up caps protects long-term media relationships.",
          question:
            "How do you track and govern the give-to-ask touchpoint ratio and follow-up limits across your media relations CRM?",
          toolName: "Google Sheets",
          where: "Media relations CRM tracker, Columns: reporter_name, outlet, last_touch_type (Give vs Ask), ratio_balance, follow_up_count, next_allowed_outreach.",
          procedure: [
            "Log every interaction with target reporters as either a 'Give' (expert quote, proprietary data, source intro) or an 'Ask' (pitch, press release)",
            "Enforce a strict governance rule: never send an 'Ask' unless the reporter's history reflects at least 1 prior 'Give' or neutral briefing",
            "Set a hard cap of maximum 1 polite follow-up sent 4-5 business days after an initial outreach",
            "Automate cooldown timers: if a reporter passes on a pitch, enforce a 30-day quiet period before the next pitch",
          ],
          outputSample:
            "RELATIONSHIP GOVERNANCE CADENCE LOG:\n" +
            "1. Reporter: Shweta Sharma (Tech in Asia)\n" +
            "   - Touch 1 (May 10): [GIVE] Shared unembargoed quick-commerce consumer report data -> Cited in story\n" +
            "   - Touch 2 (June 18): [GIVE] Provided background quote on dark store unit economics -> Used as background context\n" +
            "   - Touch 3 (August 2): [ASK] Pitched new service expansion in Tier-2 cities -> Picked up and covered\n" +
            "   - Ratio: 2 Gives : 1 Ask (Healthy Status: GREEN)\n" +
            "2. Reporter: Retail Columnist (Business Standard)\n" +
            "   - Touch 1 (July 5): [ASK] Pitched press release -> No reply\n" +
            "   - Touch 2 (July 10): [FOLLOW-UP #1] Polite 1-line check-in -> No reply\n" +
            "   - Status: Cooldown Active (No further outreach permitted for 30 days)",
          healthy:
            "CRM enforces a >= 1:1 give-to-ask ratio and halts outreach automatically when follow-up thresholds or opt-outs are met.",
          unhealthy:
            "Repeatedly pitching product releases to the same silent reporter every week without offering any non-self-serving value.",
          interpret:
            "Systematic relationship tracking prevents spam fatigue and ensures your brand remains a welcome presence in reporter inboxes.",
          soWhat: [
            {
              symptom: "A team member attempts to send a third follow-up email to a non-responsive reporter",
              action: "Enforce the CRM follow-up cap, kill the email draft, and enter a mandatory 30-day cooldown",
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
            role: "SME Bench & Commentary Playbook",
            why: "Define expert quote guidelines, approved topics, and rapid response SLAs",
            required: true,
            lastVerified: "2026-08-16",
          },
          {
            toolName: "Google Sheets",
            role: "Relationship Governance CRM",
            why: "Track give-to-ask touchpoint ratios, follow-up caps, and cooldown intervals",
            required: true,
            lastVerified: "2026-08-16",
          },
          {
            toolName: "Connectively",
            role: "Media Query Sourcing Network",
            why: "Source active reporter requests and submit rapid, ready-to-publish commentary quotes",
            required: true,
            lastVerified: "2026-08-16",
          },
        ],
        paid: [
          {
            toolName: "Muck Rack",
            role: "Media Monitoring & Alerts",
            why: "Track real-time breaking industry news cycles to deploy proactive expert commentary",
            required: false,
            lastVerified: "2026-08-16",
          },
        ],
      },
      deliverable:
        "A complete Value-First Media Relations Protocol featuring an Executive SME Commentary Bench, a Connectively Query Response Workflow, and a Give-to-Ask Cadence Governance Tracker.",
      sampleOutput:
        "AIRBNB ZERO-ASK MEDIA PROTOCOL:\n\n" +
        "1. SME Expert Bench:\n" +
        "   - Chief Economist: Tracks rural travel tax generation and tourism dispersion (SLA: 60 min)\n" +
        "   - Head of Safety: Provides commentary on short-term rental security standards and host verification (SLA: 90 min)\n\n" +
        "2. Query Response Workflow:\n" +
        "   - Filter HARO/Connectively for 'travel trends' and 'municipal tourism revenue'\n" +
        "   - Supply 2-sentence empirical quote + raw local tax contribution data with zero promotional product pitch\n\n" +
        "3. Governance Rules:\n" +
        "   - Minimum 1 value-add data share or source connection before sending any corporate product pitch\n" +
        "   - Hard cap of 1 follow-up; 30-day quiet period if unacknowledged.",
      successCriteria: [
        "Established a 3-expert commentary bench with under-90-minute response turnaround SLAs",
        "Configured a Connectively journalist query screening and rapid response template",
        "Documented strict give-to-ask ratio tracking (minimum 1:1) and follow-up cooldown rules",
      ],
      portfolioReady: true,
    },
  ],

  "newsjacking": [
    {
      id: "newsjacking-triage-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The 60-Second Triage: Tearing Down 3 Breaking Newsjacking Pitches",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Evaluate three real-time marketing pitch specimens against the 4-part decision framework (sensitivity, brand relevance, value addition, and approval velocity) to distinguish high-impact reactive PR from fatal reputational crises.",
      companyId: "zomato",
      scenario:
        "You are the Senior Communications Manager at Zomato (NSE: ZOMATO). With breaking news occurring across entertainment awards, local transit strikes, and severe weather disruptions, three cross-functional junior marketers have submitted draft newsjacking pitches into your emergency Slack triage channel. Your job is to audit each specimen, identify critical tone-deaf hazards or execution flaws, and determine which can ship and which must be immediately killed.",
      brief:
        "Audit 3 real-time marketing pitch specimens against the lesson's decision framework. Identify severity-rated defects, flag exploitative tragedy tie-ins, distinguish cultural-moment vs service-response lanes, and score each pitch for brand safety.",
      mode: "teardown",
      conceptsCovered: [
        "Sensitivity Check & Tragedy Exploitation Prevention",
        "Brand Relevance & Genuine Connection",
        "Newsjacking Lane Classification & Value Addition",
      ],
      teardownItems: [
        {
          itemId: "item-1-monsoon-disaster",
          specimen:
            "DRAFT PITCH / PUSH NOTIFICATION:\nHeadline: 'Drowning in Mumbai Rains? Let Zomato Swim to You!'\nBody: Roads are flooded and trains are halted across the city, but our brave riders are braving chest-deep waters right now. Stay dry and get hot vada pav delivered in 30 mins! Use promo code MONSOON50 for 50% off.\nTarget Channel: App push notification + Twitter / X graphic showing delivery bike in floodwater.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Audit this breaking monsoon weather newsjacking pitch for crisis hazards, ethical compliance, and brand sensitivity.",
          answerKey: [
            {
              defect:
                "Fatal tragedy and natural disaster exploitation (violates Sensitivity Check)",
              severity: "critical",
              whyItMatters:
                "Newsjacking stories involving active danger, property loss, or civic emergency causes immediate viral backlash (e.g. Kenneth Cole Cairo tweet, DiGiorno #WhyIStayed).",
              lessonRef:
                "Where Newsjacking Turns Into a Crisis: If the news involves death, disaster, violence, or serious human suffering, the correct move is silence",
              owner: "you",
            },
            {
              defect: "Workplace safety and courier endangerment messaging",
              severity: "critical",
              whyItMatters:
                "Bragging about gig delivery workers risking their lives in chest-deep water creates a severe corporate labor PR catastrophe.",
              lessonRef:
                "A Fast Decision Framework: Sensitivity check - does this story involve real harm or loss?",
              owner: "you",
            },
            {
              defect: "Discount-led commercialization of civic crisis",
              severity: "moderate",
              whyItMatters:
                "Attaching a commercial discount code (MONSOON50) to a crisis reinforces predatory opportunism rather than genuine community assistance.",
              lessonRef:
                "A Fast Decision Framework: Value check - are you adding information, humor, or utility, or just attaching your logo to attention?",
              owner: "you",
            },
          ],
          distractors: [
            "The push notification exceeds standard 100-character mobile lock-screen limits",
            "The promo code MONSOON50 lacks an explicit minimum order basket requirement",
            "The graphic style conflicts with Zomato's primary red brand color palette",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-cricket-trophy",
          specimen:
            "DRAFT PITCH / SOCIAL POST:\nHeadline: 'South Africa, you fought hard... but nothing delivers in the clutch like Zomato.'\nBody: What a final! To celebrate India's historic World Cup victory, every order placed during the trophy presentation gets a free dessert on us. Thank you Team India for showing what relentless delivery looks like! 🇮🇳🏆\nTarget Channel: Twitter/X, Instagram Stories, LinkedIn post from Founder.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Evaluate this post-match sports championship reactive pitch for lane fit, brand relevance, and tone calibration.",
          answerKey: [
            {
              defect: "Taunting rival competitor nation tone in opening hook",
              severity: "moderate",
              whyItMatters:
                "Singling out the losing finalist with gloating copy risks alienating international audiences and dilutes the pure celebratory sentiment.",
              lessonRef:
                "The Three Newsjacking Lanes: Cultural moment - a shared, low-stakes event where a witty tie-in fits your brand voice",
              owner: "you",
            },
            {
              defect:
                "Unconstrained free dessert promotion creating extreme restaurant fulfillment bottleneck",
              severity: "moderate",
              whyItMatters:
                "Promising a free item during peak post-match delivery surge without restaurant partner pre-allocation causes mass delivery cancellations and 1-star app store ratings.",
              lessonRef:
                "A Fast Decision Framework: Value check - are you adding information, humor, or utility",
              owner: "you",
            },
          ],
          distractors: [
            "The post mentions cricket which is too niche for mass food delivery marketing",
            "The copy fails to include a direct link to the corporate investor relations page",
            "Instagram Stories cannot handle real-time graphic updates after a live broadcast",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-upi-outage",
          specimen:
            "DRAFT PITCH / SERVICE ADVISORY:\nHeadline: 'UPI Servers Experiencing Intermittent Downtime Across Major Banks'\nBody: If your UPI payment is failing during dinner rush, you're not alone—major banking gateways are reporting national latency. Here are 3 immediate workarounds to keep your meal on the way:\n1. Switch payment method to Netbanking / Credit Card (unaffected)\n2. Select Cash on Delivery\n3. Our app is holding your cart active for 15 mins while banks resolve the gateway queue.\nLive banking status tracker link: [zomato.com/payment-status]\nTarget Channel: App status banner + Twitter/X customer support thread.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Assess this payment outage communication against the Service Response newsjacking lane.",
          answerKey: [
            {
              defect:
                "Missing clear disclaimer that gateway downtime originates from external banks rather than Zomato infrastructure",
              severity: "cosmetic",
              whyItMatters:
                "Without explicit clarification, casual readers may assume the delivery app itself crashed, increasing inbound support ticket volume.",
              lessonRef:
                "The Three Newsjacking Lanes: Service response - news creates confusion or a practical need, and your brand fills the gap with clear information",
              owner: "you",
            },
          ],
          distractors: [
            "The pitch violates PR ethics by discussing banking infrastructure failures publicly",
            "Service response posts should never offer Cash on Delivery alternatives",
            "A brand should wait 24 hours before acknowledging any third-party payment outage",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Triage decision matrix & risk scoring",
            why: "Zero friction collaboration and audit trail",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Trends",
            role: "Verify search spike velocity before committing",
            why: "Confirms real public interest and search momentum",
            required: false,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Brand24",
            role: "Real-time social sentiment monitoring",
            why: "Detects early negative sentiment spikes within minutes of posting",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A completed 3-specimen newsjacking triage audit with go/no-go verdicts, defect severity ratings, and lane classifications.",
      sampleOutput:
        "Swiggy, Reactive PR Triage Log (Q3)\n\n" +
        "1. SPECIMEN 1 (Bengaluru Waterlogging Alert Pitch):\n" +
        "   - VERDICT: REJECT (Critical Safety & Ethics Violation)\n" +
        "   - CLASSIFICATION: Natural Disaster Exploitation\n" +
        "   - DEFECTS: Exploits civic disruption; risks rider safety messaging; predatory discount framing.\n\n" +
        "2. SPECIMEN 2 (Space Mission Lunar Landing Celebration):\n" +
        "   - VERDICT: APPROVE WITH REVISIONS (Cultural Moment Lane)\n" +
        "   - CLASSIFICATION: National Pride / Pop Culture\n" +
        "   - DEFECTS: Remove overly aggressive competitor jabs; ensure restaurant dessert stock is pre-budgeted.\n\n" +
        "3. SPECIMEN 3 (National Telecom Network Outage Advice):\n" +
        "   - VERDICT: APPROVE (Service Response Lane)\n" +
        "   - CLASSIFICATION: Public Utility & Consumer Education\n" +
        "   - DEFECTS: Minor - add link to telecom status checker; verify WiFi ordering instructions.",
      successCriteria: [
        "Identifies the critical tragedy-exploitation hazard in Specimen 1",
        "Classifies Specimen 2 and Specimen 3 into Cultural Moment vs Service Response lanes",
        "Applies the 4-part fast decision framework",
      ],
      portfolioReady: true,
    },
    {
      id: "newsjacking-reactive-pr-warroom",
      tier: "core",
      archetype: "audit",
      title: "The Reactive PR War Room: Designing a Rapid Newsjacking Protocol & Trend Audit",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Establish an operational reactive PR framework: configure real-time trend detection using Google Trends and Google Alerts, build a 15-minute triage decision tree across the three newsjacking lanes, and establish crisis guardrails to eliminate brand reputation exposure.",
      companyId: "peloton",
      scenario:
        "You are the Director of Global Communications at Peloton Interactive (NASDAQ: PTON). When popular TV dramas, celebrity fitness controversies, or major cultural fitness challenges break into the news cycle, the difference between driving $100M+ in positive earned media and suffering disastrous stock volatility is response speed and brand safety. Following executive directive, you are building a formalized 'Reactive PR War Room' playbook to monitor breakout trends, classify incoming opportunities into the 3 newsjacking lanes, enforce strict crisis filters, and execute sub-15-minute response approvals.",
      brief:
        "Design an end-to-end reactive PR playbook. Configure real-time trend alert triggers, map incoming stories to the 3 newsjacking lanes (Expert Commentary, Cultural Moment, Service Response), establish emergency sensitivity and legal review gates, and author two ready-to-deploy reactive pitch playbooks.",
      mode: "diagnostic",
      conceptsCovered: [
        "Real-Time Trend Signal Detection",
        "The Three Newsjacking Lanes",
        "Crisis Hazard Filtering & Legal Guardrails",
        "Emergency Triage Workflow & Rapid Approvals",
      ],
      steps: [
        {
          stepId: "step-1-trend-signal-detection",
          concept: "Real-Time Trend Signal Detection",
          lessonAnchor: "what-newsjacking-actually-is",
          theoryRecap:
            "Newsjacking is injecting your brand into a breaking news story before the news cycle peaks. David Meerman Scott's framework highlights that the window of maximum leverage is the immediate rising curve before mainstream saturation.",
          question:
            "What search velocity, social volume, and keyword trigger thresholds must a breaking story meet on Google Trends and Google Alerts before activating the war room?",
          toolName: "Google Trends",
          where:
            "Open Google Trends (Real-Time Search Trends & Explore), set region to Target Market, and create an alert threshold matrix in Google Sheets.",
          procedure: [
            "Define 5 core brand and category keyword clusters (e.g. connected fitness, cardiovascular health, home workouts, celebrity training, streaming tech)",
            "Set Google Trends velocity criteria: trigger War Room Alert if search volume spikes >300% within 2 hours or reaches 'Breakout' status (+5000%)",
            "Configure Google Alerts for executive names, core product lines, and high-frequency competitor crisis terms",
            "Log active trend candidates into a centralized triage spreadsheet",
          ],
          outputSample:
            "TREND VELOCITY AUDIT (Peloton):\n1. Query: 'Cardio fitness TV drama controversy' -> Velocity: Breakout (+750% in 90m) | Status: LEVEL 1 RED ALERT (Active Pop Culture Moment)\n2. Query: 'New AHA guidelines for home workout recovery' -> Velocity: +320% in 4h | Status: LEVEL 2 AMBER (Expert Commentary Opportunity)\n3. Query: 'Smart fitness app subscription pricing changes' -> Velocity: +140% in 12h | Status: LEVEL 3 GREEN (Standard Content Backlog)",
          healthy:
            "War room activates on the rising velocity curve when search interest is accelerating but before mainstream commentary is saturated.",
          unhealthy:
            "Waiting for evening news summaries or next-day press digests before drafting a brand angle, missing the 2-to-4 hour peak window.",
          interpret:
            "Speed beat size in newsjacking. If a trend has already peaked and entered the saturation phase, your commentary becomes noise rather than a source.",
          soWhat: [
            {
              symptom: "PR team discovers viral cultural mentions 12 hours after they peak",
              action:
                "Set real-time Google Alerts and automated RSS/Trends webhook notifications to mobile Slack channel",
              effort: "30 min",
            },
            {
              symptom: "Team wastes hours brainstorming angles for dead, non-trending topics",
              action:
                "Enforce strict Google Trends minimum velocity threshold before opening a war room ticket",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-lane-classification",
          concept: "The Three Newsjacking Lanes",
          lessonAnchor: "the-three-newsjacking-lanes",
          theoryRecap:
            "The lesson splits reactive PR into three distinct lanes: Expert Commentary (data/insights for journalists), Cultural Moment (light, on-brand shared cultural tie-in), and Service Response (filling public confusion with clear utility).",
          question:
            "How do you match incoming story types to the correct lane, tone, and deliverable format without mixing incompatible brand voices?",
          toolName: "Google Sheets",
          where:
            "In your playbook spreadsheet, build the 'Lane Selection & Format Decision Matrix'.",
          procedure: [
            "Evaluate the breaking story's core driver: Journalist Query vs Viral Cultural Moment vs Consumer Confusion",
            "Assign the required deliverable format: Press Quote + Data Point (Expert), Video/Graphic Meme (Cultural), or Explainer Guide/FAQ (Service)",
            "Identify the designated internal spokesperson (Chief Medical/Fitness Officer for Expert, Social Lead for Cultural, VP Support for Service)",
            "Map expected media distribution channels (Wire/Tier-1 Press vs Social/X vs Owned Help Center)",
          ],
          outputSample:
            "LANE ASSIGNMENT MATRIX:\n- Story A (New Medical Journal Study on HIIT Heart Health) -> LANE: Expert Commentary | Spokesperson: VP Health Research | Format: 2-sentence quote + clinical trial citation | Channel: Science & Health press list\n- Story B (Viral Fictional TV Character Heart Attack on Bike) -> LANE: Cultural Moment | Spokesperson: Brand Voice / Creator Collaboration | Format: Parody video ad with character actor | Channel: X / Instagram / Variety\n- Story C (Recall Notice on Third-Party Competitor Power Cables) -> LANE: Service Response | Spokesperson: Head of Safety | Format: Free safety inspection guide & cable compatibility checklist | Channel: Customer blog & Help Center",
          healthy:
            "Every story is routed to its precise lane with aligned tone, validated spokesperson, and format.",
          unhealthy:
            "Treating an expert medical study as a meme or turning a light cultural moment into a dense 10-page corporate whitepaper.",
          interpret:
            "Selecting the wrong lane causes immediate friction: journalists ignore witty jokes when they need data, and social audiences mock heavy corporate lectures during fun cultural moments.",
          soWhat: [
            {
              symptom: "Journalists reject reactive brand pitches",
              action:
                "Ensure Expert Commentary pitches provide verified stats and pre-approved attribution quotes in the first 2 paragraphs",
              effort: "30 min",
            },
            {
              symptom: "Social tie-in feels stiff and overly promotional",
              action:
                "Remove product feature lists from Cultural Moment content; focus 100% on wit and shared community sentiment",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-crisis-hazard-filter",
          concept: "Crisis Hazard Filtering & Legal Guardrails",
          lessonAnchor: "where-newsjacking-turns-into-a-crisis",
          theoryRecap:
            "The single biggest failure pattern is treating tragedy as an opportunity. If news involves death, disaster, violence, illness, or severe human suffering, the mandatory action is absolute silence.",
          question:
            "What 4-stage kill-switch protocol ensures zero tone-deaf or exploitative pitches ever make it past internal review?",
          toolName: "Google Sheets",
          where:
            "Add the 'Sensitivity & Crisis Kill-Switch Gate' to the war room triage workflow.",
          procedure: [
            "Run the 'Victim Test': Would this proposed copy read offensively if seen by someone directly suffering from the news event?",
            "Verify whether the news touches any excluded categories: natural disasters, armed conflicts, fatal accidents, political violence, or personal grief",
            "Check for unintended double-meanings, slang connotations, or hashtag hijacking pitfalls (e.g. DiGiorno #WhyIStayed failure mode)",
            "Enforce immediate, unconditional veto power: any single team member raising an ethics/sensitivity red flag kills the pitch",
          ],
          outputSample:
            "CRISIS KILL-SWITCH AUDIT:\n- Candidate 1 (Severe Winter Storm Power Grid Failure): VETOED (Natural disaster / public freezing risk) -> Action: Total silence\n- Candidate 2 (National Health Awareness Month - Sedentary Lifestyle Data): PASSED (Educational, non-tragic) -> Action: Advance to Legal\n- Candidate 3 (Trending Celebrity Divorce Hashtag): VETOED (Exploits personal domestic distress) -> Action: Total silence\n- Candidate 4 (Global Summer Athletics Championship Marathon Record): PASSED (Positive athletic celebration) -> Action: Advance to Production",
          healthy:
            "Uncompromising sensitivity gate that errs on the side of silence whenever real human loss or controversy is present.",
          unhealthy:
            "Rationalizing a questionable tie-in because 'the search volume is huge', resulting in brand reputation damage that costs millions to repair.",
          interpret:
            "No earned media impression is worth being remembered as the brand that monetized a tragedy. Silence is a strategic decision.",
          soWhat: [
            {
              symptom: "Junior marketer proposes riding a trending protest or disaster hashtag",
              action:
                "Activate immediate kill-switch and log the incident in the team brand-safety training archive",
              effort: "5 min",
            },
            {
              symptom: "Ambiguity over whether a trending story is sensitive",
              action: "Default to 'No-Go' if consensus cannot be reached in 5 minutes",
              effort: "5 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-4-rapid-approval-workflow",
          concept: "Emergency Triage Workflow & Rapid Approvals",
          lessonAnchor: "a-fast-decision-framework",
          theoryRecap:
            "Speed matters, but a 60-second filter still fits inside the newsjacking window. Keep a lightweight triage doc with a named decision-maker who can approve or kill an idea within the hour.",
          question:
            "How do you structure an end-to-end SLA that takes an approved concept from breaking alert to live media distribution in under 15 minutes?",
          toolName: "Google Sheets",
          where: "Build the '15-Minute Rapid War Room SLA' checklist.",
          procedure: [
            "Minute 0-3: Signal detection and Google Trends velocity verification by Social/PR Monitoring Lead",
            "Minute 3-6: Concept drafting by Copywriter (1 headline, 2 copy variants, 1 quote/graphic mockup)",
            "Minute 6-10: Dual-gate review: Brand Comms Lead checks sensitivity and lane fit; Legal Lead verifies claims and trademark safety via dedicated Slack channel",
            "Minute 10-15: One-click publishing to press wire, journalist direct outreach list, and brand social channels",
            "Post-Launch: Monitor sentiment in Brand24/social listening; trigger rollback protocol if negative sentiment crosses 10%",
          ],
          outputSample:
            "15-MINUTE WAR ROOM SLA RUNBOOK:\n[00:00] Alert Triggered: Google Trends 'Fitness Marathon Record Broken'\n[00:02] Sensitivity Filter: PASSED (Zero injury, positive cultural milestone)\n[00:05] Lane Selected: Cultural Moment / Social Tie-in -> Drafted 2 copy variants\n[00:09] Executive Gate: Comms Lead (👍) + Legal Counsel (👍) approved in #pr-warroom\n[00:13] Distribution: Published on X / Instagram + Pitched to Runner's World & ESPN beat reporters\n[00:30] Sentiment Check: 98.4% Positive/Neutral across 4,200 early engagements",
          healthy:
            "Streamlined 2-stakeholder approval chain with pre-cleared legal parameters that executes in minutes.",
          unhealthy:
            "7-layer committee review where draft sits in email inboxes for 3 days until the news cycle is long forgotten.",
          interpret:
            "Real-time marketing requires real-time governance. Without pre-delegated authority, speed is impossible.",
          soWhat: [
            {
              symptom: "Great reactive pitches miss the news window because legal took 24 hours to respond",
              action:
                "Establish pre-approved claim guidelines and a dedicated emergency on-call legal Slack channel with a 10-minute SLA",
              effort: "half day",
            },
            {
              symptom: "Published newsjacking post encounters unexpected negative blowback",
              action:
                "Execute pre-scripted retraction and clarification protocol within 15 minutes",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Trends",
            role: "Real-time search trend detection and velocity measurement",
            why: "Free instant search spike validation across regions",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Alerts",
            role: "Keyword and brand alert monitoring",
            why: "Automated breaking news notifications",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "Triage decision matrix, lane rules, and SLA tracking",
            why: "Centralized operational playbook for cross-functional teams",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Brandwatch",
            role: "Enterprise social listening and viral mention tracking",
            why: "Detects breaking velocity across 100M+ web sources",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A complete Reactive PR War Room Playbook containing trend velocity criteria, lane selection matrix, crisis kill-switch filters, and a 15-minute emergency approval SLA runbook.",
      sampleOutput:
        "Freshworks, Reactive PR War Room Framework (Q3)\n\n" +
        "1. REAL-TIME SIGNAL TRIGGER:\n" +
        "   - Topic: Major Global Cloud Provider Outage Takes Down 10,000+ Customer Portals\n" +
        "   - Google Trends Velocity: Breakout (+1,200% in 45 min)\n" +
        "   - Search Intent: 'How to access offline customer ticket data'\n\n" +
        "2. LANE CLASSIFICATION:\n" +
        "   - Selected Lane: Service Response (Zero meme, 100% technical utility)\n" +
        "   - Assigned Spokesperson: VP Customer Experience\n" +
        "   - Asset: 3-step emergency triage guide for IT support managers\n\n" +
        "3. CRISIS & ETHICS GATE:\n" +
        "   - Sensitivity Check: PASS (Operational software incident; no human harm or disaster)\n" +
        "   - Relevance Check: 10/10 (Direct core product domain)\n\n" +
        "4. 15-MINUTE APPROVAL LOG:\n" +
        "   - [00:00-00:04] Alert caught via Google Alerts & Trends\n" +
        "   - [00:04-00:08] Tech PR Lead drafts 150-word expert quote + link to offline guide\n" +
        "   - [00:08-00:11] General Counsel & VP Product sign off via emergency Slack channel\n" +
        "   - [00:11-00:14] Pitched directly to 15 tech journalists covering the outage; published on Freshworks Engineering Blog\n" +
        "   - OUTCOME: Quoted in TechCrunch and ZDNet within 2 hours of breaking outage.",
      successCriteria: [
        "Defines concrete Google Trends velocity thresholds for war-room activation",
        "Builds a clear routing matrix for all 3 newsjacking lanes",
        "Establishes a zero-tolerance crisis kill-switch protocol",
        "Documents a sub-15-minute approval and distribution runbook",
      ],
      portfolioReady: true,
    },
  ],
  "online-reputation-management": [
    {
      id: "orm-serp-real-estate-audit",
      tier: "mini",
      archetype: "audit",
      title: "The Page-One Battleground: Auditing Brand SERP Real Estate & Negative Sentiment",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Conduct a structured audit of Google Page 1 search results for core brand, executive, and high-intent customer search queries, quantifying organic click-share exposure to negative results and prioritizing suppression targets.",
      companyId: "peloton",
      scenario:
        "You are the Online Reputation Manager at Peloton Interactive (NASDAQ: PTON). In the aftermath of legacy product recall headlines, executive changes, and viral pop-culture plot points, search queries for 'Peloton reviews', 'Peloton safety', and 'Peloton CEO' display a mix of outdated news stories, critical forum threads, and class-action lawsuit filings on Google Page 1. Your task is to audit the top 10 positions across these search terms, calculate the brand's weighted negative CTR exposure based on real organic click curves, and build a targeted suppression roadmap.",
      brief:
        "Audit the top 10 search results on Google for three critical brand queries. Categorize each ranking URL by asset type (Owned, Earned, Social, Review, Negative/Hostile), calculate the weighted negative CTR exposure, and determine the exact rank movements required to push damaging links below the fold.",
      mode: "diagnostic",
      conceptsCovered: [
        "SERP Real Estate & Click Distribution",
        "Asset Categorization (Owned vs Earned vs Social)",
        "Negative Result Suppression Prioritization",
      ],
      steps: [
        {
          stepId: "step-1-serp-click-exposure",
          concept: "SERP Real Estate & Click Distribution",
          lessonAnchor: "why-the-first-page-is-the-whole-battlefield",
          theoryRecap:
            "The lesson highlights that the top 3 Google organic results capture 54.4% of all clicks (with #1 at 27.6%), while 82% of users rarely scroll past Page 1. Damaging content does not need to be deleted to neutralize its harm—suppressing it from position 3 to position 13 removes over 95% of its traffic.",
          question:
            "What percentage of total organic search click-share is currently captured by negative or outdated URLs across your core brand SERPs?",
          toolName: "Google Sheets",
          where:
            "Open a new spreadsheet and build the 'SERP Position CTR Exposure Model'.",
          procedure: [
            "Query Google in an incognito, non-personalized browser for '[Brand Name]', '[Brand Name] reviews', and '[Brand Name] safety'",
            "Record all 10 Page 1 organic results for each query with position, URL, title, and ranking domain",
            "Apply industry-standard organic CTR weights: Pos 1 (27.6%), Pos 2 (15.8%), Pos 3 (11.0%), Pos 4 (8.4%), Pos 5 (6.3%), Pos 6 (4.9%), Pos 7 (3.9%), Pos 8 (3.3%), Pos 9 (2.7%), Pos 10 (2.4%)",
            "Sum the CTR percentages of all negative URLs to calculate Total Negative Click Exposure",
          ],
          outputSample:
            "SERP CLICK EXPOSURE AUDIT (Query: 'Peloton safety reviews'):\n- Pos 1: Peloton Official Safety & Recall Notice (Owned) | CTR: 27.6% | Sentiment: Neutral\n- Pos 2: 2021 Consumer Product Safety Commission Recall Article (Earned News) | CTR: 15.8% | Sentiment: NEGATIVE\n- Pos 3: CNET 'Is Peloton Safe in 2025?' Review (Earned) | CTR: 11.0% | Sentiment: Positive\n- Pos 4: Reddit r/peloton 'Bike safety after recall' (Social) | CTR: 8.4% | Sentiment: Mixed/Negative\n- Pos 5-10: Various news, YouTube, and review aggregators | Combined CTR: 23.5% | Sentiment: Neutral\n\nTOTAL NEGATIVE CTR EXPOSURE: 24.2% (Positions 2 & 4)\nIMPACT: Roughly 1 in 4 prospective buyers researching safety click directly into hostile or outdated coverage.",
          healthy:
            "Negative results occupy zero spots in the top 3 and represent less than 5% total CTR exposure on Page 1.",
          unhealthy:
            "Negative or legacy crisis articles rank in positions 1-3, capturing over 25% of all searchers researching the brand.",
          interpret:
            "Ranking position is the primary driver of reputation damage. Pushing a negative link down just 3 positions cuts its visibility by more than half.",
          soWhat: [
            {
              symptom: "Negative news link ranks at #2 for high-intent brand query",
              action:
                "Prioritize creating and boosting two high-authority earned PR assets to displace it into position 4+",
              effort: "half day",
            },
            {
              symptom: "Unmonitored Reddit thread ranks at #4 with misinformed safety claims",
              action:
                "Have verified official customer support account answer the thread with factual documentation to shift sentiment",
              effort: "30 min",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-asset-categorization",
          concept: "Asset Categorization (Owned vs Earned vs Social)",
          lessonAnchor: "the-content-and-pr-toolkit",
          theoryRecap:
            "Modern ORM blends four disciplines: Owned content (blogs, leadership bios), Earned media (press features, industry interviews), Social profiles (LinkedIn, YouTube, X), and Review platforms (Google Business, Trustpilot, G2).",
          question:
            "How balanced is your brand's digital real estate across the 4 asset categories, and which high-authority properties are missing from Page 1?",
          toolName: "Google Search Console",
          where:
            "In Google Search Console, review branded query impressions and match them against your SERP asset inventory in Google Sheets.",
          procedure: [
            "Classify every URL ranking on Page 1 and Page 2 into Owned, Earned, Social, Review, or Competitor/Hostile",
            "Identify missing high-authority owned assets (e.g. dedicated Leadership bios, verified YouTube channel, Trustpilot profile)",
            "Check for orphaned brand social profiles ranking on Page 2 (Pos 11-20) that could easily leapfrog hostile links with basic optimization",
            "Calculate the ratio of controlled vs uncontrolled ranking slots",
          ],
          outputSample:
            "SERP ASSET INVENTORY (Peloton Brand Query):\n- Owned Assets: 3/10 (Homepage, Safety Hub, Support Portal) -> RATING: Good\n- Social Profiles: 2/10 (LinkedIn, Instagram) -> RATING: Moderate (YouTube and X stuck on Page 2 at #12 and #14)\n- Earned Media: 2/10 (Forbes feature, TechCrunch interview) -> RATING: Strong\n- Review Profiles: 1/10 (Trustpilot) -> RATING: Needs Active Management\n- Hostile / Outdated: 2/10 (Legacy 2021 recall blog at #7, Critical forum thread at #9)\n\nOPPORTUNITY: Optimizing YouTube channel title and linking X profile pushes YouTube from #12 to #6, knocking the legacy recall link off Page 1.",
          healthy:
            "Controlled and positive assets occupy 8+ of the 10 Page 1 slots across owned, earned, social, and review categories.",
          unhealthy:
            "Brand owns only 1-2 slots on Page 1, leaving the remaining 8 slots open to random third-party blogs, scraper sites, and hostile forums.",
          interpret:
            "SERP real estate is a finite shelf. If you do not publish and optimize your own assets, third parties will fill the space for you.",
          soWhat: [
            {
              symptom: "Verified brand YouTube channel languishes at position #14",
              action:
                "Add brand name to channel title, optimize about section, and link channel in website footer to pass PageRank",
              effort: "30 min",
            },
            {
              symptom: "Competitor comparison page ranks at #5 for your brand name",
              action:
                "Publish a dedicated '[Brand] vs [Competitor]' comparison page on your own domain to recapture the slot",
              effort: "half day",
            },
          ],
          owner: "you",
        },
        {
          stepId: "step-3-suppression-roadmap",
          concept: "Negative Result Suppression Prioritization",
          lessonAnchor: "a-practical-workflow",
          theoryRecap:
            "Suppression works because Google ranks pages, not brands. Publishing authoritative, frequently updated content out-competes negative pages over time, moving them from Page 1 to Page 2 where fewer than 18% of users ever look.",
          question:
            "What 90-day multi-channel publishing and digital PR roadmap will push targeted negative URLs from Page 1 to Page 2?",
          toolName: "Google Sheets",
          where:
            "Add the '90-Day SERP Suppression Execution Plan' tab to your audit spreadsheet.",
          procedure: [
            "Select the top 2 negative URLs on Page 1 targeted for suppression",
            "Identify 4 candidate positive assets to boost (e.g. new Executive Q&A on Forbes, optimized Glassdoor profile, comprehensive Product Quality report, verified Reddit AMA)",
            "Plan on-page SEO enhancements and internal linking from the root homepage to the target positive assets",
            "Schedule a digital PR outreach push to build high-authority backlinks to the positive third-party earned assets",
            "Establish monthly SERP snapshot tracking to measure position migration",
          ],
          outputSample:
            "90-DAY SUPPRESSION ROADMAP:\n- Target: Demote 2021 Recall Article from Pos #2 -> Pos #11+\n  * Month 1: Launch '2025 Global Safety & Engineering Standards' interactive report on owned domain; add homepage footer link.\n  * Month 1: Optimize LinkedIn Executive Bio and YouTube Channel metadata.\n  * Month 2: Secure Tier-1 Forbes Tech Council guest feature on connected hardware safety; point 5 editorial backlinks to it.\n  * Month 3: Run structured customer review drive on Trustpilot; increase rating to 4.5+ to claim Google Review Rich Snippet.\n\nPROJECTED OUTCOME: Negative link moves from Pos #2 (15.8% CTR) to Pos #12 (<1.0% CTR), eliminating 94% of hostile organic exposure.",
          healthy:
            "Systematic multi-pronged suppression plan combining owned authority, earned media links, and social asset optimization.",
          unhealthy:
            "Attempting illegal black-hat link spam or fake review generation, triggering Google spam penalties that destroy organic domain visibility.",
          interpret:
            "Suppression is a marathon of compounding authority. High-quality content published consistently over 60-90 days reliably outranks stagnant negative articles.",
          soWhat: [
            {
              symptom: "Target negative article has high domain authority (DA 85+ news site)",
              action:
                "Do not rely on small blog posts; pitch authoritative Tier-1 earned media interviews to match the negative site's domain authority",
              effort: "half day",
            },
            {
              symptom: "Suppressed URL briefly rebounds after a minor news mention",
              action:
                "Maintain monthly content freshness and update timestamps on top-ranking owned assets",
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
            role: "SERP CTR exposure model and 90-day suppression tracking",
            why: "Structured quantitative analysis and audit workbook",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Search Console",
            role: "Branded query impressions, CTR, and average position tracking",
            why: "Direct first-party search performance data",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "SEMrush",
            role: "SERP historical position tracking and backlink monitoring",
            why: "Automated daily tracking of top 20 search positions",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A completed Brand SERP Real Estate Audit workbook with negative CTR exposure calculations, asset category mapping, and a 90-day suppression execution plan.",
      sampleOutput:
        "Grab Holdings, Brand SERP Reputation Audit (Q3)\n\n" +
        "1. SERP SNAPSHOT (Query: 'Grab driver safety reviews'):\n" +
        "   - Pos 1: Grab Official Safety Center (Owned) | CTR: 27.6% | Positive\n" +
        "   - Pos 2: 2022 Local Transit Safety Incident (Hostile News) | CTR: 15.8% | Negative\n" +
        "   - Pos 3: Straits Times: Grab Telematics Safety Rollout (Earned) | CTR: 11.0% | Positive\n" +
        "   - Pos 4: Reddit r/singapore Safety Discussion (Social) | CTR: 8.4% | Neutral\n" +
        "   - Pos 5: Glassdoor Grab Driver Reviews (Review) | CTR: 6.3% | Neutral\n" +
        "   - Pos 6-10: App Store, Wikipedia, YouTube, Support | CTR: 17.2% | Neutral/Positive\n\n" +
        "2. METRICS:\n" +
        "   - Total Negative CTR Exposure: 15.8% (Position 2)\n" +
        "   - Owned & Controlled Real Estate: 40% (4 of 10 slots)\n\n" +
        "3. 90-DAY ACTION PLAN:\n" +
        "   - Step 1: Optimize Grab YouTube Safety Channel to jump from #11 to #4.\n" +
        "   - Step 2: Pitch ISO Safety Certification update to Tech in Asia to outrank Pos 2.\n" +
        "   - Step 3: Pushing Pos 2 to Pos 11 reduces negative click traffic by 93.6%.",
      successCriteria: [
        "Maps all 10 Page 1 organic results for brand-critical queries",
        "Applies CTR curve weights to calculate negative click exposure percentage",
        "Categorizes ranking assets into Owned, Earned, Social, and Review buckets",
        "Builds an actionable 90-day suppression roadmap without black-hat tactics",
      ],
      portfolioReady: true,
    },
    {
      id: "orm-suppression-asset-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Suppression vs. Removal: Tearing Down 3 High-Authority Brand Defense Properties",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Audit three live digital PR and reputation defense properties (an executive leadership biography, a corporate security & reliability hub, and a third-party customer review portal) against Google E-A-T standards, schema markup requirements, and SERP suppression mechanics.",
      companyId: "freshworks",
      scenario:
        "You are a Senior ORM Specialist advising Freshworks (NASDAQ: FRSH). To protect executive reputation, insulate against aggressive competitor comparison campaigns, and push outdated legacy software reviews off Google Page 1, the communications team has drafted three digital defense assets. You must perform a rigorous technical and content teardown of each specimen, identifying critical E-A-T deficiencies, schema markup gaps, and authority leakages that would prevent them from displacing authoritative third-party news articles in search rankings.",
      brief:
        "Audit 3 digital reputation defense assets against Google's E-A-T and SERP suppression criteria. Identify structural defects in author credibility, technical schema optimization, and review management, and specify the exact fixes required to push hostile results to Page 2.",
      mode: "teardown",
      conceptsCovered: [
        "Suppression Mechanics & E-A-T Standards",
        "Owned & Earned Authority Signals",
        "AI Search & Sentiment Insulation",
      ],
      teardownItems: [
        {
          itemId: "item-1-executive-bio",
          specimen:
            "DRAFT ASSET SPECIMEN: Executive Leadership Bio Page\nURL: freshworks.com/about/leadership/ceo-profile\nTitle: 'Our Leadership - Freshworks'\nBody Text: (140 words total)\n'John Doe is the CEO of Freshworks. He is an experienced executive with over 20 years in software. Prior to joining Freshworks, he worked at several technology companies. He holds a degree from a top university and is passionate about customer success and AI innovation. Under his leadership, Freshworks continues to expand globally.'\nTechnical Setup: No schema markup present; no outbound links to external interviews; no high-res press photos or downloadable headshots; canonical points to homepage.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Audit this executive bio page designed to rank for '[Executive Name]' brand searches and suppress legacy third-party controversy blogs.",
          answerKey: [
            {
              defect: "Thin generic content failing Google E-A-T depth guidelines",
              severity: "critical",
              whyItMatters:
                "A 140-word bio without specific achievements, dates, patents, or publications cannot outrank detailed 1,000-word news articles or Wikipedia entries.",
              lessonRef:
                "Suppression, not erasure: Google's E-A-T standard rewards content that demonstrates real credibility signals, author bios, citations, depth. Thin pages rarely outrank well-sourced articles",
              owner: "you",
            },
            {
              defect: "Missing JSON-LD Person schema markup",
              severity: "critical",
              whyItMatters:
                "Without structured Person schema (sameAs links to LinkedIn, Wikidata, Crunchbase, verified credentials), Google Knowledge Graph cannot verify executive entity ownership.",
              lessonRef:
                "The content and PR toolkit: Owned content - leadership bios optimized for the searches that matter most",
              owner: "developer",
            },
            {
              defect: "Erroneous canonical tag pointing to root homepage",
              severity: "critical",
              whyItMatters:
                "A canonical tag pointing to the homepage instructs search engines to ignore this bio page entirely, preventing it from ever indexing or ranking for the executive's name.",
              lessonRef:
                "The content and PR toolkit: Owned content optimized for the searches that matter most",
              owner: "developer",
            },
            {
              defect:
                "Zero outbound authority links to verified tier-1 press interviews or board appointments",
              severity: "moderate",
              whyItMatters:
                "Citing and linking out to reputable external profiles (Forbes, Bloomberg, Nasdaq) signals authentic entity validation to search engines and AI summary models.",
              lessonRef:
                "The AI search wrinkle: Comms teams make sure E-A-T signals, updated bios, and recent press exist wherever AI models pull from",
              owner: "you",
            },
          ],
          distractors: [
            "The bio page must be gated behind an email capture form for lead generation",
            "The URL should be placed on a separate third-party subdomain rather than the root domain",
            "Executive bios must not exceed 100 words to ensure fast mobile page rendering",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-2-security-transparency-hub",
          specimen:
            "DRAFT ASSET SPECIMEN: Security & Reliability Transparency Hub\nURL: freshworks.com/assets/pdf/2025-security-compliance-report.pdf\nTitle: 'Security Whitepaper 2025.pdf'\nContent: 24-page gated PDF document containing ISO 27001 certifications, SOC 2 compliance summaries, data encryption standards, and historical uptime statistics (99.99%).\nAccess: User must fill in Name, Work Email, Company Size, and Phone Number before downloading the PDF.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Evaluate this security and reliability defense asset designed to rank for '[Brand] security issues' and suppress outdated server outage news.",
          answerKey: [
            {
              defect: "Asset locked inside a lead-gated PDF behind an input form",
              severity: "critical",
              whyItMatters:
                "Search engine crawlers and AI search bots cannot fill in lead forms, leaving this high-authority compliance data completely invisible to Google and AI answer engines.",
              lessonRef:
                "The content and PR toolkit: Owned content - company blog, leadership bios, and case studies all optimized for searches that matter most",
              owner: "developer",
            },
            {
              defect: "Missing live HTML landing page with structured FAQ schema",
              severity: "moderate",
              whyItMatters:
                "A live HTML hub with FAQPage schema ('Is Freshworks secure?', 'What is Freshworks uptime?') can capture Google Featured Snippets directly above negative search results.",
              lessonRef:
                "The content and PR toolkit: Each of these is a separate ranking slot you can claim before anyone else does",
              owner: "you",
            },
            {
              defect: "Lack of monthly dynamic uptime data feeds",
              severity: "cosmetic",
              whyItMatters:
                "Static annual PDFs become outdated quickly; embedding a real-time status widget signals freshness and ongoing operational transparency.",
              lessonRef:
                "A practical workflow: Continuous monitoring and updated content maintenance",
              owner: "developer",
            },
          ],
          distractors: [
            "Security whitepapers should never disclose ISO certifications publicly due to cyber risk",
            "Google penalties apply to any website publishing uptime statistics higher than 99.5%",
            "PDF files are automatically penalized by Google search algorithms regardless of content",
          ],
          partialCredit: true,
        },
        {
          itemId: "item-3-review-platform-profile",
          specimen:
            "DRAFT ASSET SPECIMEN: Third-Party Review Profile (G2 / Trustpilot)\nProfile Name: Freshworks Customer Review Hub\nStatus: Unclaimed Free Profile\nRating: 3.4 / 5.0 (based on 38 total reviews)\nRecent Activity: 12 negative 1-star reviews posted over the past 9 months complaining about legacy onboarding friction. Zero brand replies or official customer support responses. The 'About' section contains an outdated 2019 company description and a broken customer support telephone number.",
          specimenSource: "synthetic-realistic",
          prompt:
            "Analyze this review profile ranking at position #4 for '[Brand] reviews' against ORM review management standards.",
          answerKey: [
            {
              defect: "Zero public responses to critical 1-star reviews",
              severity: "critical",
              whyItMatters:
                "Unanswered complaints signal corporate indifference to prospective buyers and allow unverified grievances to dominate high-intent evaluation queries.",
              lessonRef:
                "The content and PR toolkit: Review platforms - active, responded-to profiles on review sites which Google treats as authoritative sources",
              owner: "you",
            },
            {
              defect: "Unclaimed profile status and outdated company metadata",
              severity: "critical",
              whyItMatters:
                "Claiming the profile enables verification badges, correct company categorization, updated product descriptions, and automated review collection widgets.",
              lessonRef:
                "The content and PR toolkit: Review platforms - active profiles which Google treats as authoritative 'about this brand' sources",
              owner: "you",
            },
            {
              defect:
                "Lack of a post-resolution automated review generation workflow",
              severity: "moderate",
              whyItMatters:
                "Satisfied customers rarely leave organic reviews without prompting; without a structured NPS/support trigger, the sample skews entirely toward frustrated edge cases.",
              lessonRef:
                "Why the first page is the whole battlefield: 41% of consumers say a negative result reduces their likelihood of contacting a company",
              owner: "you",
            },
          ],
          distractors: [
            "The brand should legally demand Trustpilot delete all reviews scoring below 3 stars",
            "Employees should be instructed to post anonymous 5-star reviews to boost the average",
            "Review aggregators should be blocked from search engine indexing via robots.txt",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Search Console",
            role: "Inspect indexing status, crawl errors, and query rankings",
            why: "Verify indexability of owned defense assets",
            required: true,
            lastVerified: "2026-08",
          },
          {
            toolName: "Google Sheets",
            role: "E-A-T scorecards and technical remediation tracker",
            why: "Collaborative issue prioritization and sprint tickets",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [
          {
            toolName: "Ahrefs",
            role: "Analyze backlink authority and SERP competitor E-A-T signals",
            why: "Quantifies domain rating gaps against negative news sites",
            required: false,
            lastVerified: "2026-08",
          },
        ],
      },
      deliverable:
        "A scored ORM defense asset teardown with technical remediation tickets for developer and comms teams across executive bio, security hub, and review profiles.",
      sampleOutput:
        "Zomato, Defense Asset Teardown & Remediation (Q2)\n\n" +
        "1. ASSET 1: Executive Leadership Profile (Founder / CEO)\n" +
        "   - STATUS: Failed E-A-T & Schema Audit\n" +
        "   - FINDINGS: Missing Person JSON-LD schema, no outbound links to Forbes/Bloomberg profiles, canonical tag misconfigured.\n" +
        "   - REMEDIATION: Inject structured schema with sameAs links; add verified timeline of company founding through IPO; embed high-res media kit.\n\n" +
        "2. ASSET 2: Hygiene & Safety Standard Hub\n" +
        "   - STATUS: Crawlability & Indexing Failure\n" +
        "   - FINDINGS: Critical food safety audit reports locked inside a gated PDF form; zero discoverable HTML content for AI search summaries.\n" +
        "   - REMEDIATION: Convert PDF into a public, indexable HTML hub with FAQPage schema to win Google Featured Snippets for 'Is Zomato food safe?'.\n\n" +
        "3. ASSET 3: Consumer Review Platform (Trustpilot Profile)\n" +
        "   - STATUS: High Risk Review Debt\n" +
        "   - FINDINGS: 28 unanswered delivery complaints over 6 months; 3.2-star rating capturing Position #4 on Google.\n" +
        "   - REMEDIATION: Deploy 24-hour customer care SLA for negative reviews; integrate automated post-delivery 5-star review request prompt for verified orders.",
      successCriteria: [
        "Identifies core E-A-T and technical schema deficiencies across all 3 defense assets",
        "Distinguishes between developer engineering tickets vs PR comms fixes",
        "Addresses AI search bot readability and indexation blockers",
      ],
      portfolioReady: true,
    },
  ],
};
