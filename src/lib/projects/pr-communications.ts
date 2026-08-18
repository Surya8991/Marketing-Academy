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

  "pr-101": [
    {
      id: "media-pitch-autopsy",
      tier: "core",
      archetype: "teardown",
      mode: "teardown",
      title: "The Pitch Autopsy: Why Journalists Delete Most PR Emails",
      timeEstimate: "35 minutes",
      timeMinutes: 35,
      objective:
        "Given three media pitch emails, one competent and two flawed, correctly identify why a journalist would ignore each flawed pitch and confirm what actually works in the competent one, distinguishing genuine defects from plausible-looking non-issues.",
      companyId: "nykaa",
      scenario:
        "You're a junior comms associate on Nykaa's PR team. Your manager hands you three draft pitch emails other team members wrote before they go out, and asks you to red-flag anything that would get them deleted by a journalist before you approve sending them.",
      brief: "Read each pitch as the receiving journalist would, then decide which pass and which get flagged, and why.",
      conceptsCovered: ["What PR Actually Does", "The Four Core Disciplines"],
      teardownItems: [
        {
          itemId: "pitch-mass-blast",
          specimen:
            "Subject: Exciting News!\n\nHi [First Name],\n\nI hope this finds you well. I'm reaching out to share some exciting news about our latest product launch. We think your readers would love to hear about it!\n\nOur new AI-powered gadget case is now available and we'd love to send you one to try.\n\nLet me know if you're interested in covering this!\n\nBest,\nPR Team",
          specimenSource: "synthetic-realistic",
          prompt:
            "You're the beauty & lifestyle editor at a mid-size publication. This pitch just landed in your inbox. Do you open it further, skim it, or delete it? Identify what's wrong, and confirm what (if anything) about it is actually fine.",
          answerKey: [
            {
              defect: "Personalization token left unfilled ('Hi [First Name]')",
              severity: "critical",
              whyItMatters:
                "It proves the sender never customized this pitch for you specifically, it's a mass blast wearing a personal greeting, which erodes credibility before the editor reads sentence two.",
              lessonRef: "What PR Actually Does",
              owner: "you",
            },
            {
              defect: "Pitched to the wrong beat, an AI gadget case sent to a beauty & lifestyle editor",
              severity: "critical",
              whyItMatters:
                "PR's entire value is persuading a gatekeeper, not buying a slot; wasting that attention on someone with no reason to cover the topic burns the relationship for the next, relevant pitch.",
              lessonRef: "What PR Actually Does",
              owner: "you",
            },
            {
              defect: "No news hook beyond 'we launched a product,' no data point, no timing reason to cover it now",
              severity: "moderate",
              whyItMatters:
                "A journalist needs a reason the story is newsworthy today specifically, not just that a company exists; 'we launched' is a press release headline, not a pitch angle.",
              lessonRef: "The Four Core Disciplines",
              owner: "you",
            },
          ],
          distractors: [
            "Uses the word 'exciting' in the subject line",
            "Email is under 100 words",
            "Includes the sender's job title in the signature",
          ],
          partialCredit: true,
        },
        {
          itemId: "pitch-oversell",
          specimen:
            "Subject: The Biggest Beauty Launch of the Decade\n\nHi Priya,\n\nWe're thrilled to announce a revolutionary, game-changing product that will completely transform the skincare industry forever. This is, without exaggeration, the most important launch our category has ever seen.\n\nWe'd love to get you a sample and quotes from our team whenever you're ready to write this up.\n\nThanks,\nThe Team",
          specimenSource: "synthetic-realistic",
          prompt:
            "Same editor, a different pitch. Read it as the journalist would and identify what makes this one unusable as written, separate from anything that's a reasonable pitch practice.",
          answerKey: [
            {
              defect:
                "Hype language with zero substantiating data, 'revolutionary,' 'game-changing,' 'most important launch ever'",
              severity: "critical",
              whyItMatters:
                "Journalists are trained to distrust unverifiable superlatives; language like this reads as an ad, which defeats the entire premise of PR, that the message carries third-party credibility because it wasn't self-promotional.",
              lessonRef: "What PR Actually Does",
              owner: "you",
            },
            {
              defect: "No named spokesperson offered for a quote or interview, just 'our team'",
              severity: "moderate",
              whyItMatters:
                "A usable story needs an attributable, quotable human; an anonymous 'the team' can't be interviewed or credited, so the pitch can't actually be turned into a story as-is.",
              lessonRef: "The Four Core Disciplines",
              owner: "you",
            },
          ],
          distractors: [
            "The pitch is sent on a Monday morning",
            "The email offers to send a physical product sample",
            "The subject line names the product category",
          ],
          partialCredit: true,
        },
        {
          itemId: "pitch-well-targeted",
          specimen:
            "Subject: Data point for your piece on Gen Z skincare routines\n\nHi Priya,\n\nLoved your piece last week on Gen Z's shrinking skincare routines. We just closed a survey of 2,000 Indian shoppers under 25 and found 61% now use 3 or fewer products daily, down from 6 in 2022.\n\nHappy to share the full dataset early, and our head of research, Ananya Rao, can speak to the causes if useful for a follow-up.\n\nBest,\nMedia Team",
          specimenSource: "synthetic-realistic",
          prompt:
            "A third pitch, referencing the editor's actual recent article. Confirm whether it's genuinely well-built, and flag anything, even minor, that could be tightened.",
          answerKey: [
            {
              defect:
                "The most newsworthy stat (61% down from 6 products) is placed in the second sentence rather than leading the email",
              severity: "cosmetic",
              whyItMatters:
                "A skimming editor reads only the first line before deciding whether to continue; leading with the number instead of the compliment increases the odds of a reply.",
              lessonRef: "What PR Actually Does",
              owner: "you",
            },
          ],
          distractors: [
            "References the editor's byline and a specific recent article",
            "Keeps the pitch under 100 words",
            "Offers the dataset early, before wider distribution",
            "Names a specific, quotable spokesperson",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Draft and mark up the pitch approval memo", why: "Free, easy to comment inline on each pitch", required: true, lastVerified: "2026-08" },
          { toolName: "Muck Rack", role: "Check whether a pitch actually matches the target journalist's real beat", why: "Free searches show a journalist's recent coverage history to verify beat fit", required: false, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable:
        "A one-page pitch approval memo marking each of the three draft pitches Approve, Revise, or Kill, with the specific line-level reasons for any Revise or Kill verdict.",
      sampleOutput:
        "Warby Parker PR desk, pitch approval memo (excerpt)\n\n" +
        "PITCH 1, 'New Frame Collection Drop' — KILL\n" +
        "  - Sent to a finance reporter with no fashion/retail beat history\n" +
        "  - No spokesperson named, no data point, just a product announcement\n\n" +
        "PITCH 2, 'Home Try-On Waitlist Hits Record High' — APPROVE\n" +
        "  - Targeted correctly at a retail-beat reporter who covered DTC waitlists last month\n" +
        "  - Leads with the number (20,000-person waitlist) in sentence one\n" +
        "  - Names Neil B. as spokesperson, available for interview\n\n" +
        "PITCH 3, 'Sustainability Update' — REVISE\n" +
        "  - Real data point buried in paragraph three, move it to the opener\n" +
        "  - Otherwise beat-appropriate and quotable",
      successCriteria: [
        "Correctly identifies both critical defects in the mass-blast pitch",
        "Correctly identifies the oversell pitch's lack of substantiation and missing spokesperson",
        "Does not flag any of the well-targeted pitch's genuine strengths as defects",
      ],
      portfolioReady: true,
    },
    {
      id: "product-recall-crisis-simulation",
      tier: "core",
      archetype: "simulation",
      mode: "simulation",
      title: "The First 24 Hours: A Product Recall Crisis Simulation",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Navigate the first 24 hours after a product-safety complaint goes viral, choosing a public response at each checkpoint and seeing how that choice compounds the story's trajectory, the speed-and-honesty tradeoff crisis communications is built on.",
      companyId: "honasa-mamaearth",
      scenario:
        "You are the head of communications at Honasa Consumer (Mamaearth) when a customer's viral video claims one of your baby-care products caused a skin reaction. It hits 500,000 views in six hours.",
      brief:
        "Make a call at each checkpoint, in order: whether to speak before you have full facts, what you say once you have them, and how you close the loop, then see the outcome your choice produced.",
      conceptsCovered: ["Crisis communications", "The Four Core Disciplines"],
      stages: [
        {
          stageId: "stage-1-first-response",
          label: "Hour 1: The video is trending",
          elapsed: "1 hour",
          concept: "Crisis communications",
          lessonAnchor: "the-four-core-disciplines",
          situation:
            "A viral video with 500K views claims your baby lotion caused a rash. Three journalists have DMed your official account asking for comment. Your internal safety review hasn't started yet.",
          dashboard:
            "Video: 500K views, 12K shares, comments trending negative. 3 journalist DMs unanswered. Internal safety review: not started.",
          spendToDate: "$0",
          budgetRemaining: "$0 (this crisis costs time, not ad spend)",
          decision: {
            prompt: "What do you do in hour one, before the safety review has any findings?",
            options: [
              {
                id: "stay-silent",
                label: "Say nothing publicly until the internal safety team finishes its review",
                verdict: "costly",
                outcome:
                  "By hour 6, two more outlets picked up the story under the headline 'Company refuses to comment,' turning the silence itself into the story.",
                why: "An information vacuum during a fast-moving story gets filled by the worst plausible version of events, not the neutral one.",
                lessonRef: "Crisis communications",
                nextStageId: "end",
              },
              {
                id: "deny",
                label: "Publicly state the product is safe and the reaction is unrelated, before the review even starts",
                verdict: "costly",
                outcome:
                  "The safety review found a real manufacturing defect two days later, and 'company denied it, then had to reverse' became the dominant headline, worse than the original complaint.",
                why: "A denial you can't yet back up converts a product problem into a credibility problem, which is much harder to recover from.",
                lessonRef: "Crisis communications",
                nextStageId: "end",
              },
              {
                id: "acknowledge-fast",
                label:
                  "Post a short public acknowledgment within the hour: 'We've seen these reports, an investigation is underway, updates to follow'",
                verdict: "optimal",
                outcome:
                  "Coverage framed the company as responsive; two of the three journalists held their story pending an update instead of running with only the customer's claim.",
                why: "Acknowledging fast without claiming a conclusion you don't have yet buys credibility and time in the same move.",
                lessonRef: "Crisis communications",
                nextStageId: "stage-2-review",
              },
            ],
          },
        },
        {
          stageId: "stage-2-review",
          label: "Hour 6: The safety review comes back",
          elapsed: "6 hours",
          concept: "Crisis communications",
          lessonAnchor: "the-four-core-disciplines",
          situation:
            "Your safety review finds a manufacturing batch issue affecting a limited number of units. Sentiment has held roughly neutral since your hour-1 acknowledgment.",
          dashboard:
            "Sentiment: neutral-to-slightly-negative, stable since hour 1. 1 outlet ran a balanced 'company investigating' piece. 2 journalists still awaiting your follow-up.",
          spendToDate: "$0",
          budgetRemaining: "$0",
          decision: {
            prompt: "The review confirms a real defect in one batch. What's your move?",
            options: [
              {
                id: "quiet-pull",
                label: "Quietly pull the affected batch from retailers without a public statement",
                verdict: "costly",
                outcome:
                  "A retail employee posted about the unexplained pullback online, which read as a cover-up on top of the original complaint.",
                why: "Fixing the problem without saying so publicly looks identical to hiding it, once someone notices the fix.",
                lessonRef: "Crisis communications",
                nextStageId: "end",
              },
              {
                id: "full-recall",
                label:
                  "Announce a full recall of the affected batch the same day, with lot numbers and a public refund process",
                verdict: "optimal",
                outcome:
                  "Coverage shifted to 'company moves fast to recall affected batch,' and the two waiting journalists both ran the follow-up with your statement as the core quote.",
                why: "Naming the specific lot numbers and the fix publicly closes the credibility gap the original video opened.",
                lessonRef: "Crisis communications",
                nextStageId: "stage-3-close",
              },
            ],
          },
        },
        {
          stageId: "stage-3-close",
          label: "Hour 24: Closing the loop",
          elapsed: "24 hours",
          concept: "Crisis communications",
          lessonAnchor: "the-four-core-disciplines",
          situation:
            "The recall is underway and coverage has turned neutral-to-positive. One question remains: whether to publish a follow-up once the fix is confirmed complete.",
          dashboard: "Sentiment: neutral-to-positive. Recall in progress, refunds processing.",
          spendToDate: "$0",
          budgetRemaining: "$0",
          decision: {
            prompt: "The recall is nearly complete. Do you publish a closing update?",
            options: [
              {
                id: "no-followup",
                label: "Consider the story resolved and move on without a closing statement",
                verdict: "acceptable",
                outcome:
                  "The story faded from the news cycle within a week, but a few customers who never saw a resolution stayed uncertain whether it was actually fixed.",
                why: "Silence after the peak doesn't reopen the crisis, but it leaves your most affected customers without confirmation.",
                lessonRef: "Crisis communications",
                nextStageId: "end",
              },
              {
                id: "public-followup",
                label: "Publish a short update confirming the recall is complete and what changed in the manufacturing process",
                verdict: "optimal",
                outcome:
                  "The follow-up became the closing line in every outlet's coverage, and brand sentiment tracking showed a full recovery to pre-crisis levels within two weeks.",
                why: "Closing the loop publicly is what turns 'company handled a crisis' into the lasting takeaway, instead of leaving the story open-ended.",
                lessonRef: "Crisis communications",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Draft each public statement before it goes out", why: "Free, supports fast collaborative editing under time pressure", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable:
        "A three-checkpoint crisis response log documenting the public statement drafted at each stage and the reasoning behind each call.",
      sampleOutput:
        "Zomato comms desk, crisis response log (excerpt)\n\n" +
        "HOUR 1 — Acknowledgment posted:\n" +
        "  'We've seen the reports circulating and take them seriously. Our safety team is investigating now, we'll share findings as soon as we have them.'\n\n" +
        "HOUR 6 — Recall statement posted:\n" +
        "  'Our review identified an issue with batch #4471. We are recalling all units from that batch effective immediately and offering full refunds. Full details and refund process: [link].'\n\n" +
        "HOUR 24 — Closing update posted:\n" +
        "  'The batch #4471 recall is now complete. We've adjusted our quality-check process at that stage of production to prevent a repeat. Thank you for your patience.'",
      successCriteria: [
        "Chooses to acknowledge publicly within the first hour rather than staying silent or denying",
        "Announces the full recall, with specifics, once the safety review confirms a defect",
        "Closes the loop with a public follow-up rather than letting the story end unresolved",
      ],
      portfolioReady: true,
    },
  ],
  "earned-owned-paid-media": [
    {
      id: "earned-owned-paid-audit",
      tier: "mini",
      archetype: "audit",
      mode: "diagnostic",
      title: "The Media Mix Audit: Classifying a Real Brand's Coverage",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real, currently operating brand's recent online presence, correctly classify ten items into earned, owned, or paid media, then calculate a share-of-voice number against one named competitor.",
      companyId: "delhivery",
      scenario:
        "You're a marketing intern at Delhivery, the logistics and ecommerce fulfillment company, asked to build a quick media-mix snapshot before a stakeholder review.",
      brief: "Pick any real, currently operating brand, pull its last 10 online mentions, tag each earned, owned, or paid, and total what you find.",
      conceptsCovered: ["Classifying earned, owned, and paid media", "Share of voice as a PR metric"],
      steps: [
        {
          stepId: "step-1-classify",
          concept: "Classifying earned, owned, and paid media",
          lessonAnchor: "the-three-media-types-through-a-pr-lens",
          theoryRecap:
            "Earned media is coverage nobody paid for, owned media is anything the brand fully controls, and paid media is anything with placement bought behind it.",
          question:
            "Pull the last 10 online items mentioning a real brand of your choice, its own posts, press coverage, and any ads. How many fall into each of the three buckets?",
          toolName: "Google Alerts",
          where: "Set up a Google Alert for the brand name, then open its own website and one social profile in parallel tabs.",
          procedure: [
            "Set up a Google Alert for the exact brand name and let it populate, or search the brand name directly if you need results faster than the alert digest",
            "Open the brand's own website/blog and one official social profile to capture recent owned posts",
            "Scroll each channel for any content visibly marked 'sponsored' or 'ad' to capture paid examples",
            "List the 10 items in a sheet with a column for earned / owned / paid and one line of reasoning per item",
          ],
          outputSample:
            "Brand: [chosen brand]\n\n" +
            "EARNED (4)\n" +
            "  1. Trade publication feature on Q2 expansion — journalist-written, no sponsorship disclosure\n" +
            "  2. Customer review on a third-party site\n" +
            "  3. Independent YouTuber unboxing video, unpaid per video description\n" +
            "  4. Industry newsletter mention in a roundup\n\n" +
            "OWNED (4)\n" +
            "  5. Brand's own blog post\n" +
            "  6. Brand's Instagram caption\n" +
            "  7. Brand's email newsletter excerpt\n" +
            "  8. Brand's LinkedIn company update\n\n" +
            "PAID (2)\n" +
            "  9. Instagram post marked 'Sponsored'\n" +
            "  10. Search ad appearing above organic results for the brand's category term",
          healthy:
            "The 10 items split roughly across all three buckets, with earned items showing zero sponsorship disclosure and a named third-party author.",
          unhealthy:
            "Every 'earned' item turns out to have a sponsorship disclosure or paid-partnership tag once you look closely, meaning it was actually paid media misclassified as earned.",
          interpret:
            "The disclosure label, or its absence, is the actual test, not how organic the content feels; sponsored content can look exactly like earned coverage until you check.",
          soWhat: [
            { symptom: "An item looked earned but had a sponsorship disclosure", action: "Recategorize it as paid and note why in the reasoning column", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-share-of-voice",
          concept: "Share of voice as a PR metric",
          lessonAnchor: "how-pr-pros-measure-and-report-on-earned-media",
          theoryRecap:
            "Share of voice measures a brand's mention volume against named competitors in a defined time window, one of the metrics that replaced outdated ad-value-equivalent reporting.",
          question:
            "Using the same brand, count its earned mentions over the last 7 days against one named competitor's earned mentions in the same window. What's the share of voice?",
          toolName: "Google Sheets",
          where: "Log both brands' 7-day earned mention counts side by side and compute the percentage.",
          procedure: [
            "Search both brand names individually and count earned (unpaid, third-party) mentions from the last 7 days only",
            "Enter both counts in a sheet: your brand's count, the competitor's count",
            "Calculate share of voice as your brand's mentions divided by the combined total of both brands, as a percentage",
            "Note one likely driver behind whichever brand has the higher share this week",
          ],
          outputSample:
            "7-day earned mention count\n\n" +
            "  Brand A (chosen brand): 14 mentions\n" +
            "  Brand B (named competitor): 22 mentions\n" +
            "  Combined total: 36\n\n" +
            "  Share of voice, Brand A: 14 / 36 = 38.9%\n" +
            "  Share of voice, Brand B: 22 / 36 = 61.1%\n\n" +
            "  Likely driver: Brand B had a product announcement this week that Brand A did not.",
          healthy: "The share-of-voice math is transparent, both counts are dated to the same 7-day window and both use only earned (unpaid) mentions.",
          unhealthy: "Mixing owned or paid mentions into either brand's count, which inflates the number and makes the comparison meaningless.",
          interpret:
            "Share of voice is only a fair comparison when both sides are counted the same way, same time window, same media type; skipping that discipline is how the metric gets gamed by accident.",
          soWhat: [
            { symptom: "One brand's count includes its own owned posts", action: "Strip owned/paid items out of both counts before comparing", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Alerts", role: "Surface recent mentions of the brand across the web", why: "Free, no account needed beyond a Google login", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Log and total the classified mentions and share-of-voice math", why: "Free, sufficient for a 10-item tally", required: true, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "BuzzSumo", role: "Search a longer historical window of earned mentions than a live alert can back-fill", why: "Useful once you need more than the last 7-10 days of coverage", required: false, lastVerified: "2026-08" },
        ],
      },
      deliverable:
        "A one-page media-mix snapshot: 10 classified mentions with reasoning, and a share-of-voice percentage against one named competitor.",
      sampleOutput:
        "Nykaa media-mix snapshot (excerpt)\n\n" +
        "EARNED (5): trade press feature, 2 independent reviewer mentions, industry newsletter roundup, unpaid influencer mention\n" +
        "OWNED (3): app push notification copy, Instagram grid post, email campaign line\n" +
        "PAID (2): Instagram 'Sponsored' post, category search ad\n\n" +
        "Share of voice vs. Myntra (7-day earned mentions): Nykaa 19 / (19+27) = 41.3%",
      successCriteria: [
        "Classifies all 10 items into earned, owned, or paid with correct reasoning",
        "Calculates a share-of-voice percentage against a named competitor using only earned mentions in the same window",
      ],
      portfolioReady: true,
    },
    {
      id: "earned-to-owned-paid-amplification-asset",
      tier: "mini",
      archetype: "build-the-asset",
      mode: "build",
      title: "Borrow the Trust: Turning a Press Mention into Owned and Paid Assets",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Given a sample earned-media excerpt, produce a real owned-channel recap post and a paid-ad headline that both accurately quote the third-party source without overstating what it actually said.",
      companyId: "thredup",
      scenario:
        "You're on the growth team at ThredUp, the online resale marketplace. PR just forwarded a strong quote from a trade-press feature. Turn it into assets before the news cycle moves on.",
      brief: "Write a short owned-channel recap that quotes the coverage accurately, then a paid-ad headline built from the same quote.",
      conceptsCovered: ["Owned media amplifying earned coverage", "Paid media borrowing earned credibility"],
      steps: [
        {
          stepId: "step-1-owned-recap",
          concept: "Owned media amplifying earned coverage",
          lessonAnchor: "how-the-three-media-types-work-together",
          theoryRecap:
            "Owned media amplifies earned coverage by publishing it on channels you control, borrowing its trust for your own audience instead of asking your own claims to do the convincing.",
          question:
            "Given the excerpt: a trade outlet wrote 'ThredUp's resale volume grew 34% year-over-year in its latest earnings report, outpacing the broader secondhand apparel market.' Draft a 100-150 word blog or email recap that quotes this accurately and links to the source.",
          toolName: "Google Docs",
          where: "Draft the recap as a short blog post or email section, with the quote clearly attributed.",
          procedure: [
            "Open the excerpt and identify the exact quotable line, not a paraphrase",
            "Draft a 100-150 word recap that leads with the quote, attributed by publication name",
            "Add one sentence of your own context explaining why the growth number matters to your reader",
            "Link to the original article as the source",
          ],
          outputSample:
            "Blog recap draft (142 words)\n\n" +
            "\"ThredUp's resale volume grew 34% year-over-year in its latest earnings report, outpacing the broader secondhand apparel market,\" [Trade Outlet] reported this week.\n\n" +
            "That's not just a good quarter, it's a sign the shift toward resale is accelerating faster than the category overall. For anyone weighing whether secondhand fits into their wardrobe or their business model, this is the kind of independent signal that's harder to dismiss than a company's own growth claims.\n\n" +
            "Read the full report: [link to original article]",
          healthy: "The recap quotes the exact wording from the source, attributes it clearly, and links out, the reader can verify the claim themselves.",
          unhealthy: "The recap paraphrases the number into a bigger or vaguer claim, like 'ThredUp is dominating the resale market,' which the source never actually said.",
          interpret:
            "The credibility of owned amplification comes entirely from accuracy; the moment the recap says more than the source did, it stops being borrowed trust and becomes an unverified claim again.",
          soWhat: [
            { symptom: "The recap's claim is stronger than the original quote", action: "Rewrite to match the source's exact wording and scope", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-paid-headline",
          concept: "Paid media borrowing earned credibility",
          lessonAnchor: "how-the-three-media-types-work-together",
          theoryRecap:
            "Paid media extends reach fastest, and pairing it with an earned quote means the ad carries a third party's words instead of asking a self-written claim to build trust from zero.",
          question: "Turn the same quote into a retargeting ad headline, under 40 characters, that attributes it to the publication rather than to ThredUp itself.",
          toolName: "Canva for Social",
          where: "Draft the headline text in a simple ad layout, with the publication name visible as the attribution.",
          procedure: [
            "Cut the quote down to its core number and claim, under 40 characters",
            "Attribute the headline to the publication by name, not to ThredUp",
            "Draft the ad in a simple layout, headline plus attribution line",
            "Check the character count before finalizing",
          ],
          outputSample:
            "Ad headline draft (38 characters)\n\n" +
            "\"Resale grew 34% YoY\" — [Trade Outlet]\n\n" +
            "Subhead: Independent reporting on where secondhand fashion is headed.",
          healthy: "The headline attributes the number to the publication, not to ThredUp, so the ad reads as reported fact rather than a self-made marketing claim.",
          unhealthy: "The attribution is dropped or shrunk to unreadable size, so the ad quietly becomes a self-sourced claim with no visible source.",
          interpret:
            "The entire value of this ad over a normal ad is the visible third-party source; removing or hiding the attribution erases that advantage and returns the ad to ordinary self-promotion.",
          soWhat: [
            { symptom: "The publication attribution is missing or too small to read", action: "Increase the attribution's visual weight so it reads at a glance", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Docs", role: "Draft the owned-channel recap post", why: "Free, fast for a short text draft", required: true, lastVerified: "2026-08" },
          { toolName: "Canva for Social", role: "Lay out the paid-ad headline with visible attribution", why: "Free tier covers a single static ad layout", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A short owned-channel recap post plus one paid-ad headline, both accurately quoting the same earned-media excerpt.",
      sampleOutput:
        "Chewy amplification assets (excerpt)\n\n" +
        "OWNED RECAP: \"Chewy's holiday wish-fulfillment program earned 143 media placements reaching 10 million readers and viewers,\" [Trade Outlet] reported. That kind of earned reach is why the program is now a recurring part of our holiday plan...\n\n" +
        "PAID HEADLINE: \"143 press placements, 10M reach\" — [Trade Outlet]",
      successCriteria: [
        "The owned recap accurately quotes the source and adds no claim beyond what it stated",
        "The paid headline attributes the quote to the publication by name, not to the company",
      ],
      portfolioReady: true,
    },
  ],

  "press-release-writing": [
    {
      id: "press-release-teardown-honasa",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Buried Lede: Auditing Two Draft Press Releases",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given two synthetic-realistic draft press releases, identify structural defects against the inverted-pyramid structure and quote/boilerplate conventions journalists expect, while resisting plausible-looking non-defects.",
      companyId: "honasa-mamaearth",
      scenario: "You're a PR coordinator at Honasa Consumer, the NSE-listed parent of Mamaearth, reviewing two draft releases before they go out to journalists this afternoon.",
      brief: "Read both drafts, flag the real structural defects using the lesson's inverted-pyramid framework, and don't flag the distractors that only look like problems.",
      mode: "teardown",
      conceptsCovered: ["Inverted-pyramid structure and the buried lede", "Quotable human quotes vs. marketing copy", "Boilerplate and dateline conventions"],
      teardownItems: [
        {
          itemId: "teardown-item-1-buried-lede",
          specimen:
            "FOR IMMEDIATE RELEASE\n\nHONASA CONSUMER DELIVERS RECORD QUARTER AMID STRONG MARKET CONDITIONS\n\nHonasa Consumer Limited, the parent company of Mamaearth, today reiterated its commitment to sustainable, synergistic growth across its house of brands in a rapidly evolving beauty and personal care landscape.\n\nThe company leverages a robust omnichannel strategy to drive category leadership, with a diversified portfolio spanning multiple consumer touchpoints and a best-in-class supply chain infrastructure.\n\nBuried at the bottom: Honasa is launching a new sunscreen-first sub-brand, Aqua Glow, in 4,000 retail stores starting next month, its first new sub-brand launch in two years.\n\n###",
          specimenSource: "synthetic-realistic",
          prompt: "Identify the structural defects in this draft against the lesson's inverted-pyramid framework. Don't flag things that only look like problems.",
          answerKey: [
            {
              defect: "The real news, a new sub-brand launch, is buried in the last paragraph instead of leading the headline and first sentence.",
              severity: "critical",
              whyItMatters: "Journalists skim the headline and first sentence to decide whether to keep reading; a release that leads with vague positioning language gets discarded before the actual news is ever seen.",
              lessonRef: "The Structure Journalists Expect",
              owner: "you",
            },
            {
              defect: "The headline announces generic corporate performance language ('record quarter', 'strong market conditions') instead of the specific, newsworthy fact.",
              severity: "critical",
              whyItMatters: "A vague headline gives an editor no reason to open the release; specificity is what makes a headline scannable and pitchable.",
              lessonRef: "The Structure Journalists Expect",
              owner: "you",
            },
            {
              defect: "No quote from a named executive anywhere in the release.",
              severity: "moderate",
              whyItMatters: "Reporters often lift the quote directly into their article; without one, the journalist has to ask for a comment, adding friction that gets the release skipped.",
              lessonRef: "Why Most Press Releases Get Ignored",
              owner: "you",
            },
            {
              defect: "The two opening paragraphs are dense with jargon ('synergistic growth', 'category leadership', 'best-in-class supply chain infrastructure') and contain no concrete facts.",
              severity: "moderate",
              whyItMatters: "Jargon-heavy copy signals a release written to sound impressive rather than to inform, which is the single biggest reason journalists skip past a pitch.",
              lessonRef: "Why Most Press Releases Get Ignored",
              owner: "you",
            },
          ],
          distractors: [
            "The release is under 300 words, which is too short for a corporate announcement.",
            "The release uses 'today' instead of a specific calendar date in the second paragraph.",
            "The dateline format at the top follows a different city convention than usual.",
          ],
          partialCredit: true,
        },
        {
          itemId: "teardown-item-2-weak-quote",
          specimen:
            "FOR IMMEDIATE RELEASE\n\nMAMAEARTH LAUNCHES AQUA GLOW SUNSCREEN LINE IN 4,000 STORES\n\nHonasa Consumer's Mamaearth brand announced today it is launching Aqua Glow, a five-product sunscreen line, in 4,000 retail stores across India starting September 2026, its first new sub-brand launch in two years.\n\n\"We are thrilled and excited to announce this amazing and innovative launch that will delight our valued customers and stakeholders alike,\" said a Mamaearth spokesperson.\n\nThe five-product range includes SPF 50 and SPF 30 formulations targeting India's growing sun-care category.\n\nContact: press@honasa.example | +91-XXXXXXXXXX",
          specimenSource: "synthetic-realistic",
          prompt: "This draft fixed the buried lede. Find what's still wrong before it goes out.",
          answerKey: [
            {
              defect: "The quote is generic filler ('thrilled and excited', 'amazing and innovative') with no specific detail, and it's attributed to an unnamed 'spokesperson' instead of a named executive.",
              severity: "critical",
              whyItMatters: "A quote a journalist can't attribute to a real person by name and title is usually cut entirely, wasting the one spot in the release meant to add a human voice.",
              lessonRef: "Why Most Press Releases Get Ignored",
              owner: "you",
            },
            {
              defect: "There is no boilerplate paragraph describing what Honasa Consumer / Mamaearth is, for a journalist unfamiliar with the company.",
              severity: "moderate",
              whyItMatters: "Boilerplate is the standard closing block that gives context without the journalist needing to research the company separately; omitting it forces extra work that gets the release deprioritized.",
              lessonRef: "The Structure Journalists Expect",
              owner: "you",
            },
            {
              defect: "The contact information has a placeholder phone number left in ('+91-XXXXXXXXXX') instead of a real, reachable number.",
              severity: "cosmetic",
              whyItMatters: "A journalist who wants a follow-up quote or interview and hits a placeholder number has no way to reach the company, which can kill a story that was otherwise ready to run.",
              lessonRef: "The Structure Journalists Expect",
              owner: "either",
            },
          ],
          distractors: [
            "The headline uses the brand name 'Mamaearth' instead of the legal entity 'Honasa Consumer Limited'.",
            "The release states the launch month (September 2026) instead of an exact calendar date.",
            "The product range is described as 'five products' rather than listing each SKU by name.",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Track flagged defects against the answer key with severity tags", why: "Free, no setup, easy to share with a reviewing editor", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A defect log for both drafts, each defect tagged with severity (critical/moderate/cosmetic) and a one-line fix recommendation.",
      sampleOutput:
        "Chewy press release teardown log (excerpt)\n\n" +
        "Draft 1, defect log\n" +
        "  CRITICAL   Lede buried in paragraph 4, not headline/para 1   Fix: move Autoship expansion fact to headline\n" +
        "  CRITICAL   Headline is generic corporate language, no news   Fix: name the specific announcement\n" +
        "  MODERATE   No named executive quote                          Fix: add CMO quote with title\n\n" +
        "Draft 2, defect log\n" +
        "  CRITICAL   Quote is unattributed filler language              Fix: name spokesperson, cut filler adjectives\n" +
        "  MODERATE   No boilerplate paragraph                           Fix: add standard 40-60 word company description",
      successCriteria: [
        "Correctly identifies at least 3 of the 4 real defects in item 1 and 2 of the 3 in item 2",
        "Does not flag any of the 6 distractors as defects",
        "Assigns a reasonable severity level to each flagged defect",
      ],
      portfolioReady: false,
    },
    {
      id: "press-release-build-chewy",
      tier: "core",
      archetype: "build-the-asset",
      title: "Write a Launch-Ready Press Release From a Messy Internal Brief",
      timeEstimate: "50 minutes",
      timeMinutes: 50,
      objective: "Turn a messy internal announcement brief into a publication-ready press release that follows the inverted-pyramid structure, includes a genuinely quotable quote, and closes with proper boilerplate and contact details.",
      companyId: "chewy",
      scenario: "You're on the comms team at Chewy, the Nasdaq-listed pet products retailer known for its Autoship subscription model, and product has just handed you a rough internal brief for a same-day-delivery expansion.",
      brief: "Extract the actual news from the messy brief, structure it inverted-pyramid style, write a quote that sounds like a real executive said it, and add proper boilerplate.",
      mode: "build",
      conceptsCovered: ["Inverted-pyramid structure and the buried lede", "Quotable human quotes vs. marketing copy", "Boilerplate and dateline conventions", "Before-and-after editing against a real example"],
      steps: [
        {
          stepId: "step-1-extract-the-lede",
          concept: "Inverted-pyramid structure and the buried lede",
          lessonAnchor: "the-structure-journalists-expect",
          theoryRecap: "The lesson's inverted-pyramid framework puts the single most newsworthy fact in the headline and first sentence, then narrows into supporting detail, context, and boilerplate in that order.",
          question: "The internal brief buries the real news, same-day delivery going live in 15 new metro markets, inside three paragraphs of company strategy talk. What goes in the headline?",
          toolName: "Notion",
          where: "Draft the release in a Notion doc so you can restructure paragraphs freely before finalizing.",
          procedure: [
            "Read the full internal brief and circle every discrete fact",
            "Rank facts by how newsworthy and specific each one is",
            "Write a headline stating the single most newsworthy fact directly",
            "Write a first sentence that answers who, what, when, where in one line",
            "Move all strategy/positioning language to paragraph 3 or later",
          ],
          outputSample:
            "HEADLINE (before): Chewy Continues to Invest in Customer Experience Excellence\n" +
            "HEADLINE (after): Chewy Launches Same-Day Delivery in 15 New Metro Markets\n\n" +
            "FIRST SENTENCE (after): Chewy, Inc. (NYSE: CHWY) today announced same-day delivery is now available in 15 additional U.S. metro markets, expanding the service to a total of 40 markets nationwide.",
          healthy: "The headline and first sentence together tell the full story even if a journalist reads nothing else.",
          unhealthy: "A reader has to get to paragraph 3 or 4 before learning what actually happened.",
          interpret: "If you can delete every paragraph after the first and still have a usable one-line news brief, the lede isn't buried.",
          soWhat: [
            { symptom: "The headline states a strategy or value statement instead of a fact", action: "Rewrite the headline as a single newsworthy sentence with a number or date in it", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-write-the-quote",
          concept: "Quotable human quotes vs. marketing copy",
          lessonAnchor: "why-most-press-releases-get-ignored",
          theoryRecap: "The lesson explains that a usable quote sounds like something a specific person would actually say out loud, with a concrete detail in it, not generic enthusiasm a journalist has to cut.",
          question: "The brief includes this placeholder: 'quote from leadership TBD, something positive about customer experience.' What replaces it?",
          toolName: "Notion",
          where: "Same Notion doc, quote block below the first two paragraphs.",
          procedure: [
            "Identify which named executive should be quoted based on the announcement's subject",
            "Draft a quote containing one concrete detail from the brief, not generic praise",
            "Read the quote aloud to check it sounds like natural speech, not ad copy",
            "Attribute it with full name and exact title",
          ],
          outputSample:
            "BEFORE: \"We are excited to continue delivering excellence to our customers,\" said a Chewy spokesperson.\n\n" +
            "AFTER: \"Same-day delivery started as a pilot in 5 cities last year, and pet parents told us clearly they wanted it everywhere,\" said Sumit Singh, CEO of Chewy. \"Expanding to 40 markets means most of our Autoship customers now have it as an option.\"",
          healthy: "The quote contains a specific number or detail that couldn't apply to any other announcement.",
          unhealthy: "The quote is interchangeable with a quote from any other company's press release.",
          interpret: "A quote a journalist would delete for being generic filler isn't earning its place in the release.",
          soWhat: [
            { symptom: "The quote reads like tagline copy instead of speech", action: "Add one specific number, date, or detail pulled from the brief into the quote itself", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Notion", role: "Draft and restructure the release", why: "Free tier supports rich text drafting and easy reordering of sections", required: true, lastVerified: "2026-08" },
          { toolName: "Google Sheets", role: "Track which facts from the brief made it into which paragraph", why: "Free, simple checklist to confirm nothing newsworthy got dropped", required: false, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A complete, publication-ready press release (headline, dateline, lede, quote, supporting paragraph, boilerplate, contact info) built from the messy internal brief.",
      sampleOutput:
        "FOR IMMEDIATE RELEASE\n\n" +
        "DUOLINGO ADDS SPANISH LISTENING PRACTICE MODE FOR ALL LEARNERS\n\n" +
        "PITTSBURGH, September 3, 2026 — Duolingo, Inc. (NASDAQ: DUOL) today announced a new listening practice mode for Spanish courses, available to all users starting this week.\n\n" +
        "The feature uses native-speaker audio clips at three speeds, addressing the most requested feedback from Spanish course users over the past year.\n\n" +
        "\"Reading and listening are different skills, and our data showed learners were reading Spanish well but freezing up in real conversations,\" said [Name], Head of Learning at Duolingo. \"This mode closes that gap directly.\"\n\n" +
        "Duolingo is the world's leading language-learning platform, offering courses in over 40 languages to more than 500 million learners worldwide.\n\n" +
        "Contact: press@duolingo.example",
      successCriteria: [
        "Headline and first sentence contain the single most newsworthy fact with a concrete number or date",
        "Quote contains at least one specific detail and is attributed to a named person and title",
        "Release includes a boilerplate paragraph and contact information",
      ],
      portfolioReady: true,
    },
  ],
  "press-kit-media-kit": [
    {
      id: "press-kit-audit-duolingo",
      tier: "mini",
      archetype: "audit",
      title: "Audit a Press Kit Before It Goes Live",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective: "Given a description of an existing company press kit page, evaluate it against the lesson's checklist of what belongs in a press kit and how it should be hosted, then produce a prioritized fix list.",
      companyId: "duolingo",
      scenario: "You're a freelance PR consultant reviewing Duolingo's press kit page before a product-launch media push, checking whether it will actually hold up under journalist use.",
      brief: "Walk through the current press kit against the lesson's checklist, flag what's missing or wrong, and rank fixes by how much they'll cost the team in missed coverage if left unfixed.",
      mode: "diagnostic",
      conceptsCovered: ["What belongs in a press kit", "Why hosting format determines whether journalists actually use a kit"],
      steps: [
        {
          stepId: "step-1-content-checklist",
          concept: "What belongs in a press kit",
          lessonAnchor: "what-actually-belongs-in-it",
          theoryRecap: "The lesson lists the core press kit components: company boilerplate, executive bios and headshots, product screenshots or photos, logo files in multiple formats, recent press coverage, and key facts/stats.",
          question: "The current kit has a company boilerplate, one blurry founder headshot from 2018, and no logo files at all. What's missing and what's actively broken?",
          toolName: "Google Sheets",
          where: "Build a checklist with columns: component, present/missing, quality issue, priority.",
          procedure: [
            "List every component the lesson says belongs in a press kit",
            "Mark each as present, missing, or present-but-broken",
            "Note specific quality issues (outdated, wrong format, low resolution)",
            "Rank each gap by priority based on how often journalists would need it",
          ],
          outputSample:
            "Component            Status      Issue                          Priority\n" +
            "Boilerplate           Present     Fine as-is                    Low\n" +
            "Exec headshots        Broken      2018 photo, low-res, 1 person Medium\n" +
            "Logo files            Missing     No SVG/PNG download at all    High\n" +
            "Product screenshots   Missing     None provided                 High\n" +
            "Recent coverage       Missing     No press-mentions page        Medium",
          healthy: "Every core component is present, current, and in a usable file format.",
          unhealthy: "A journalist has to email the company just to get a usable logo file.",
          interpret: "Missing logo files and screenshots are the highest-priority gaps because they're the assets journalists need fastest, on deadline, without contacting anyone.",
          soWhat: [
            { symptom: "No downloadable logo files exist on the kit page", action: "Upload SVG and PNG logo files (light and dark background versions) to the kit immediately", effort: "30 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-hosting-check",
          concept: "Why hosting format determines whether journalists actually use a kit",
          lessonAnchor: "where-to-host-it-and-why-pdfs-lose",
          theoryRecap: "The lesson explains that a single downloadable PDF press kit loses to a web page: PDFs go stale, can't be linked to a specific asset, and are painful to update, while a web page lets a journalist grab exactly the file they need and stays current.",
          question: "The current press kit is a single PDF last updated 14 months ago, linked from a 'Press' footer link. What's wrong with this setup?",
          toolName: "Google Sheets",
          where: "Same sheet, second tab for hosting-format issues.",
          procedure: [
            "Check when the PDF was last updated relative to the company's most recent news",
            "Check whether individual assets (logo, one headshot) can be downloaded separately or only as one bundled file",
            "Check how discoverable the press kit link is from the homepage",
          ],
          outputSample:
            "Hosting format: single PDF, last updated 14 months ago\n" +
            "Issue 1: Company has raised funding and launched 2 products since last update, none reflected\n" +
            "Issue 2: Journalist wanting just the logo must download the entire 40MB PDF\n" +
            "Issue 3: Press kit link buried in footer, not in main nav",
          healthy: "A web page with individually downloadable assets, updated within the last quarter, linked from primary navigation.",
          unhealthy: "A single stale PDF bundling everything together, discoverable only by scrolling to the footer.",
          interpret: "A PDF-only kit fails the moment the company has news the kit doesn't reflect yet, which is exactly when journalists look for it.",
          soWhat: [
            { symptom: "The kit is a single PDF older than the company's most recent news", action: "Migrate to a web page with individually downloadable assets and update it same-day with any major news", effort: "half day" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Build and prioritize the audit checklist", why: "Free, simple structured tracking with no account friction", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A prioritized audit checklist of press kit gaps, split between content gaps and hosting-format gaps, each with a specific fix.",
      sampleOutput:
        "Robinhood press kit audit (excerpt)\n\n" +
        "CONTENT GAPS\n" +
        "  HIGH     No product screenshots available for download\n" +
        "  MEDIUM   Exec bios have no titles listed, just names\n\n" +
        "HOSTING GAPS\n" +
        "  HIGH     Kit is a single 60MB PDF, not a web page\n" +
        "  LOW      Press kit link uses generic anchor text 'Media' instead of 'Press Kit'",
      successCriteria: [
        "Identifies at least 4 missing or broken content components",
        "Identifies the PDF-vs-web-page hosting problem and explains why it matters",
        "Assigns a clear priority to each flagged gap",
      ],
      portfolioReady: false,
    },
    {
      id: "press-kit-build-robinhood",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build a One-Page Press Kit Outline",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective: "Produce a complete, correctly structured press kit outline (as a web page spec, not a PDF) covering every component the lesson requires, ready to hand to a designer or developer to build.",
      companyId: "robinhood",
      scenario: "You're the first PR hire at Robinhood, the Nasdaq-listed commission-free trading app, and the company has never had a formal press kit before this quarter's product launch.",
      brief: "Spec out a complete press-kit web page: every required component, what file formats each asset needs, and how the page should be organized so a journalist can grab exactly what they need in under a minute.",
      mode: "build",
      conceptsCovered: ["What belongs in a press kit", "Why hosting format determines whether journalists actually use a kit"],
      steps: [
        {
          stepId: "step-1-spec-the-components",
          concept: "What belongs in a press kit",
          lessonAnchor: "what-actually-belongs-in-it",
          theoryRecap: "The lesson lists the core press kit components: company boilerplate, executive bios and headshots, product screenshots or photos, logo files in multiple formats, recent press coverage, and key facts/stats.",
          question: "Robinhood has never had a press kit. What exact components and file formats go on the page, and in what order?",
          toolName: "Notion",
          where: "Draft the page spec in Notion as a section-by-section outline with asset format notes.",
          procedure: [
            "List every required component in the order a journalist would want to encounter them",
            "For each visual asset, specify required file formats (SVG/PNG for logos, high-res JPG for photos)",
            "Write a one-paragraph boilerplate draft as a placeholder",
            "Note which components need design/dev work vs. which are just copy",
          ],
          outputSample:
            "PRESS KIT PAGE SPEC\n\n" +
            "1. Boilerplate (copy, ~60 words)\n" +
            "2. Key facts/stats (copy, bulleted, e.g. user count, founding year)\n" +
            "3. Logo files: SVG + PNG, light-background and dark-background versions\n" +
            "4. Executive headshots: high-res JPG, min 1000px wide, current within 12 months\n" +
            "5. Product screenshots: PNG, at least 3 current app screens\n" +
            "6. Recent press coverage: linked list, most recent first",
          healthy: "Every component has a specified file format and a clear owner (copy vs. design/dev).",
          unhealthy: "A component is listed with no format specified, so whoever builds the page has to guess.",
          interpret: "A spec a designer can build from without asking follow-up questions is the actual deliverable, not a vague list of section names.",
          soWhat: [
            { symptom: "A component on the list has no file format specified", action: "Add the exact format and minimum resolution before handing the spec to design", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-spec-the-hosting",
          concept: "Why hosting format determines whether journalists actually use a kit",
          lessonAnchor: "where-to-host-it-and-why-pdfs-lose",
          theoryRecap: "The lesson explains that a web page beats a PDF because assets stay individually downloadable and the whole kit can be updated the same day news happens, without journalists ever holding a stale file.",
          question: "Should this be a PDF, a web page, or both? What does the spec need to say about updating it?",
          toolName: "Notion",
          where: "Same Notion doc, hosting-format section.",
          procedure: [
            "Specify the page as web-hosted, not PDF-only",
            "Note that each asset (logo, each headshot) needs its own individual download link",
            "Add a maintenance note: who updates the kit and how soon after major news",
            "Specify where the page is linked from (main nav, not just footer)",
          ],
          outputSample:
            "HOSTING SPEC\n" +
            "Format: dedicated web page at /press, not a bundled PDF\n" +
            "Each asset individually downloadable via its own button/link\n" +
            "Maintenance owner: PR team, update within 48 hours of major news\n" +
            "Navigation: linked from main site footer AND from the About page",
          healthy: "The spec explicitly rules out a PDF-only kit and names a maintenance owner.",
          unhealthy: "The spec leaves hosting format unspecified, which defaults to whatever's easiest for whoever builds it, often a PDF.",
          interpret: "If the spec doesn't say 'not a PDF,' a busy dev team will default to the fastest thing to ship, which is usually a PDF.",
          soWhat: [
            { symptom: "The build spec doesn't name a hosting format", action: "Add an explicit line ruling out PDF-only and specifying individually downloadable web assets", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Notion", role: "Write the full press kit page spec", why: "Free tier, easy to organize into sections a designer can follow", required: true, lastVerified: "2026-08" },
          { toolName: "Canva", role: "Mock up a rough visual layout of the page for design handoff", why: "Free tier templates are enough for a rough layout mockup", required: false, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A complete press kit web page spec: every component, required file formats, page order, and a hosting/maintenance plan, ready to hand to design or dev.",
      sampleOutput:
        "Wise press kit page spec (excerpt)\n\n" +
        "1. Boilerplate: \"Wise is a global technology company building the best way to move and manage the world's money...\"\n" +
        "2. Key facts: founded 2011, operates in 40+ currencies, publicly listed on LSE\n" +
        "3. Logo files: SVG + PNG, light/dark versions, downloadable individually\n" +
        "4. Exec headshots: 3 leaders, high-res JPG, updated within last 12 months\n" +
        "5. Hosting: web page at wise.com/press, not PDF, updated within 48 hours of major news",
      successCriteria: [
        "Spec covers all 5-6 core components with specific file formats",
        "Spec explicitly requires web hosting with individually downloadable assets, not a PDF bundle",
        "Spec names a maintenance owner and update timeline",
      ],
      portfolioReady: true,
    },
  ],

  "thought-leadership-pr": [
    {
      id: "journalist-pitch-response-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The Six-Hour Quote: Auditing a Journalist Pitch Response",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective:
        "Given a real-style journalist request from a source platform and the executive's drafted pitch response, find the defects that would get the pitch ignored, using the lesson's speed, relationship, and quotability principles.",
      companyId: "duolingo",
      scenario:
        "You're the PR coordinator at Duolingo. A journalist request came in through a source platform about a feature story on habit-building apps, and your comms lead has already drafted a response for the VP of Learning Science to send. You have ten minutes before it goes out.",
      brief:
        "Compare the drafted response against the lesson's core pitching principles: speed, a real quotable line instead of a press release voice, and a specific angle.",
      mode: "teardown",
      conceptsCovered: ["Becoming the Source Reporters Call"],
      teardownItems: [
        {
          itemId: "item-1-pitch-response",
          specimen:
            "JOURNALIST REQUEST (posted on a source platform, 6 hours ago):\n'Writing a feature on habit-building apps for a national outlet. Looking for an expert quote on why some apps succeed at building daily habits and others don't. Need a response within 2-3 hours, deadline is tight.'\n\nDRAFTED RESPONSE (about to be sent, 6 hours after the request was posted):\n'Duolingo is a global leader in language learning, trusted by millions of users worldwide. Our research shows that habit-building works when apps are designed thoughtfully. We would be happy to discuss further on a call at your convenience.'",
          specimenSource: "synthetic-realistic",
          prompt:
            "Read the journalist's request and the drafted response below. List everything wrong with the response before it goes out.",
          answerKey: [
            {
              defect:
                "Drafted six hours after the request was posted, well past the reporter's stated 2-3 hour deadline",
              severity: "critical",
              whyItMatters:
                "A mediocre quote delivered within the hour beats a perfect quote delivered the next day, because the reporter has already filed the story.",
              lessonRef: "becoming-the-source-reporters-call",
              owner: "you",
            },
            {
              defect:
                "Opens with 'Duolingo is a global leader in language learning' instead of a quotable line answering the reporter's actual question",
              severity: "critical",
              whyItMatters:
                "Reporters need a line they can drop straight into copy, not corporate description; a press-release voice gets cut by any editor.",
              lessonRef: "becoming-the-source-reporters-call",
              owner: "you",
            },
            {
              defect:
                "'Our research shows that habit-building works when apps are designed thoughtfully' has no specific data point, study name, or number attached",
              severity: "moderate",
              whyItMatters:
                "A vague claim gets no citation; a number or named study gets quoted directly.",
              lessonRef: "becoming-the-source-reporters-call",
              owner: "you",
            },
          ],
          distractors: [
            "The response is short, only three sentences",
            "It offers a follow-up call instead of answering by email",
            "It doesn't mention Duolingo's app store ranking",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Log journalist request timestamps and response times",
            why: "Free, and a simple timestamp column makes response speed against reporter deadlines visible before it becomes a habit",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A marked-up defect list on the pitch response, with the two must-fix items flagged before send.",
      sampleOutput:
        "Chewy pitch response teardown (reference)\n\nDefects found: 3\n1. CRITICAL — Sent 5 hours after request posted (platform showed a 2-hour average reporter close time)\n2. CRITICAL — Opens with 'Chewy is America's #1 pet retailer' instead of a quotable line\n3. MODERATE — Cites 'strong customer loyalty' with no number attached\n\nRewrite before send: 'We've seen Autoship subscribers reorder 40% faster after their first vet-recommended refill reminder.' One sentence, one number, ready to quote.",
      successCriteria: [
        "Flags the response-time delay against the reporter's stated deadline window",
        "Flags the missing quotable line at the top of the response",
        "Does not flag either distractor as a defect",
      ],
      portfolioReady: false,
      stretch:
        "Time yourself rewriting the response in under 10 minutes to match the real pressure of a same-day journalist deadline.",
    },
    {
      id: "executive-proof-points-doc-build",
      tier: "mini",
      archetype: "build-the-asset",
      title: "Build a Reusable Executive Bio and Proof-Points Doc",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective:
        "Build a one-page, ready-to-drop executive bio and proof-points doc, three to five stats, one customer story, one-line POV, that can go into any award submission or speaker application in minutes.",
      companyId: "nubank",
      scenario:
        "You're on the comms team at Nu Holdings (Nubank). An awards deadline for a fintech industry recognition landed on your desk with five days' notice, and there's no ready executive bio doc to pull from.",
      brief:
        "Build the living doc the lesson's tip callout describes, so the next deadline never starts from a blank page.",
      mode: "build",
      conceptsCovered: ["Living executive bio and proof-points doc"],
      steps: [
        {
          stepId: "step-1-build-proof-points-doc",
          concept: "Living executive bio and proof-points doc",
          lessonAnchor: "awards-and-speaker-slots-as-deliberate-tactics",
          theoryRecap:
            "The lesson's tip callout: keep three to five stats, one customer story, and a one-line POV ready to drop into any award form or speaker application in minutes instead of starting from a blank page every time.",
          question:
            "Using only information you can verify (public reports, customer stories already cleared for external use), build the four sections of the doc for your executive.",
          toolName: "Notion",
          where: "Create a new Notion page titled '[Executive Name] — Bio & Proof Points'.",
          procedure: [
            "Write a 3-sentence executive bio (role, tenure, one credibility marker)",
            "List 3-5 stats the executive can defend live: revenue, growth, customer count, or a named benchmark",
            "Write one customer story with a named or anonymized outcome, 2-3 sentences",
            "Write a single-line POV sentence the executive can say without notes",
          ],
          outputSample:
            "Sample doc excerpt (different company, for reference)\n\nWISE — Kristo Kaarmann, CEO\n\nBIO: Co-founded Wise in 2011 to fix the hidden cost of cross-border payments; led the company through its 2021 direct listing on the London Stock Exchange.\n\nSTATS:\n- 16.3 million active customers (FY2024 annual report)\n- GBP 40 billion+ moved cross-border per quarter\n- 60% of Wise transfers settle in under 20 seconds\n\nCUSTOMER STORY: A UK freelancer switched from a high-street bank and saved an estimated GBP 380 a year in hidden transfer markups across 24 payments.\n\nPOV LINE: 'Cross-border payments shouldn't cost more just because nobody shows you the real exchange rate.'",
          healthy:
            "Every stat has a cited source next to it, and the POV line is one sentence the exec has actually said before.",
          unhealthy:
            "Stats with no source attached, or a POV line that reads like a tagline nobody would say out loud in an interview.",
          interpret:
            "A doc built from unverifiable or invented numbers collapses the first time an analyst or reporter asks 'where's that from?' Every entry needs a source you could point to on the spot.",
          soWhat: [
            {
              symptom: "The doc took more than 30 minutes to build",
              action: "Cut to the 3 stats you're most confident defending live and finish the rest later",
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
            role: "House the living bio and proof-points doc",
            why: "Free tier supports a single shared page with edit history so the doc stays current",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed one-page executive bio and proof-points doc with bio, 3-5 sourced stats, one customer story, and a one-line POV.",
      sampleOutput:
        "WISE — Kristo Kaarmann, CEO (reference doc)\n\nBIO: Co-founded Wise in 2011 to fix the hidden cost of cross-border payments; led the company through its 2021 direct listing on the London Stock Exchange.\n\nSTATS:\n- 16.3 million active customers (FY2024 annual report)\n- GBP 40 billion+ moved cross-border per quarter\n- 60% of Wise transfers settle in under 20 seconds\n\nCUSTOMER STORY: A UK freelancer switched from a high-street bank and saved an estimated GBP 380 a year in hidden transfer markups across 24 payments.\n\nPOV LINE: 'Cross-border payments shouldn't cost more just because nobody shows you the real exchange rate.'",
      successCriteria: [
        "Every stat has a verifiable source noted next to it",
        "Customer story includes a named or clearly anonymized outcome",
        "POV line is a single sentence, not a tagline",
      ],
      portfolioReady: true,
      stretch: "Add a fifth stat sourced from a live dashboard you own, refreshed quarterly.",
    },
  ],
  "analyst-relations": [
    {
      id: "gartner-briefing-request-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "The 500-Character Test: Auditing a Gartner Briefing Request",
      timeEstimate: "20 minutes",
      timeMinutes: 20,
      objective:
        "Given a drafted Gartner briefing request against the platform's roughly 500-character limit, find what wastes space and what's missing before it gets submitted.",
      companyId: "warby-parker",
      scenario:
        "You're the AR lead at Warby Parker's employer-benefits division. Your product marketing lead drafted a Gartner briefing request for the next vision-benefits vendor coverage cycle, and it's due today.",
      brief:
        "Check the draft against the lesson's rule: name the coverage area, state your differentiation, name a client win, and don't waste the character limit.",
      mode: "teardown",
      conceptsCovered: ["The Briefing: Your Core Tool"],
      teardownItems: [
        {
          itemId: "item-1-briefing-request",
          specimen:
            "DRAFT REQUEST (487 characters)\n\n'Warby Parker for Business is an industry-leading, innovative provider of employee vision benefits, trusted by companies nationwide. We have a world-class product roadmap and would love the opportunity to brief your team on our best-in-class platform. We believe your readers would benefit greatly from learning about our unique value proposition and best-in-class customer service. Please let us know your availability for a call at your earliest convenience.'",
          specimenSource: "synthetic-realistic",
          prompt:
            "This request is 487 of the roughly 500 characters Gartner allows. What's wrong with how that space was spent?",
          answerKey: [
            {
              defect:
                "Never names the specific coverage area (e.g. 'employee vision benefits administration') the analyst covers",
              severity: "critical",
              whyItMatters:
                "Every word in a Gartner request has to earn its place: name the coverage area, state your differentiation, and name a client win.",
              lessonRef: "the-briefing-your-core-tool",
              owner: "you",
            },
            {
              defect: "No named client win or customer count anywhere in the request",
              severity: "critical",
              whyItMatters:
                "Analysts are data-driven thinkers; a specific stat gets written down, a vague superlative gets ignored.",
              lessonRef: "preparing-the-briefing-deck",
              owner: "you",
            },
            {
              defect:
                "Uses vague superlatives ('industry-leading', 'world-class', 'best-in-class' twice) instead of a stated differentiator",
              severity: "moderate",
              whyItMatters:
                "Vague superlatives like 'industry-leading' get ignored; a specific stat like a named benchmark gets written down.",
              lessonRef: "preparing-the-briefing-deck",
              owner: "you",
            },
          ],
          distractors: [
            "The request ends by asking for their availability",
            "The request is close to the character limit",
            "The request is addressed to the team rather than one named analyst",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          {
            toolName: "Google Sheets",
            role: "Draft and character-count the request before submitting",
            why: "Free, a LEN() formula enforces the character limit before you paste into Gartner's form",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A rewritten version of the request that fits the character limit and names the coverage area, one stat, and one client win.",
      sampleOutput:
        "Chewy for Business briefing request (reference rewrite)\n\n'Chewy for Business is expanding into pet-benefits administration for 500+ employer accounts, up 60% year over year. We'd like to brief [Analyst Name] on our Autoship-based claims model ahead of your 2026 pet-benefits vendor coverage, and share a case study from a 2,000-employee client. Available this week or next.' (471 characters)",
      successCriteria: [
        "Flags the missing coverage-area name",
        "Flags the missing client win or stat",
        "Does not flag the character count or the availability close as defects",
      ],
      portfolioReady: false,
      stretch:
        "Time yourself rewriting it in under 10 minutes, matching the real deadline pressure of a same-day Gartner request window.",
    },
    {
      id: "analyst-briefing-conversation-simulation",
      tier: "core",
      archetype: "simulation",
      title: "Running the Briefing: A Live Analyst Conversation Simulation",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective:
        "Practice running a two-way analyst briefing conversation, opening, handling probing questions, and closing, choosing responses at each stage and seeing how each choice changes the analyst's read on the company.",
      companyId: "delhivery",
      scenario:
        "You're the AR lead at Delhivery, briefing a Forrester analyst ahead of the next Wave evaluation for third-party logistics platforms in South Asia. You sent your pre-read 48 hours ago; the call starts now.",
      brief:
        "Navigate the opening, the analyst's questions, and the close, applying the lesson's two-way-conversation principle at each decision point.",
      mode: "simulation",
      conceptsCovered: [
        "Open with a 2-minute company snapshot, not a 10-minute origin story",
        "Ask what the analyst is currently hearing from clients in your category",
        "A defensive answer is worse than an honest 'we're still deciding'",
        "Close by asking directly what would move you up in their next report",
      ],
      stages: [
        {
          stageId: "stage-1-open",
          label: "Opening the Call",
          elapsed: "0:00",
          concept: "Open with a 2-minute company snapshot, not a 10-minute origin story",
          lessonAnchor: "running-the-conversation",
          situation:
            "The analyst joins the call, thanks you for the pre-read, and says 'Whenever you're ready, go ahead.' You have 30 minutes total.",
          dashboard: "Time remaining: 30:00 | Pre-read sent: Yes, 48h ago | Analyst engagement: Neutral",
          spendToDate: "$0 (no paid inquiry used)",
          budgetRemaining: "30 minutes of call time",
          decision: {
            prompt: "How do you open?",
            options: [
              {
                id: "a",
                label: "A 2-minute snapshot: what changed in the market, then hand the floor to the analyst",
                verdict: "optimal",
                outcome:
                  "The analyst leans in and starts asking questions immediately; you have 27 minutes left for real conversation.",
                why: "The lesson's own guidance: open with a 2-minute company snapshot, not a 10-minute origin story.",
                lessonRef: "running-the-conversation",
                nextStageId: "stage-2-questions",
              },
              {
                id: "b",
                label: "A 10-minute founding story, building up to the product",
                verdict: "costly",
                outcome:
                  "By minute 8 the analyst is visibly checking something off-screen; you've burned a third of the call before any real exchange happens.",
                why: "Forrester's own research finds analysts remember the conversations where they got to challenge the vendor, not the ones where they just watched slides; a long origin story delays that exchange.",
                lessonRef: "running-the-conversation",
                nextStageId: "stage-2-recover",
              },
              {
                id: "c",
                label: "Skip straight to a product demo walkthrough",
                verdict: "acceptable",
                outcome:
                  "The analyst follows along politely but doesn't ask anything until you finish; you've used 10 minutes without learning what they're actually curious about.",
                why: "A demo isn't wrong, but it front-loads your agenda instead of theirs; it costs engagement time without being an outright origin-story overrun.",
                lessonRef: "running-the-conversation",
                nextStageId: "stage-2-questions",
              },
            ],
          },
        },
        {
          stageId: "stage-2-recover",
          label: "Recovering Lost Time",
          elapsed: "0:10",
          concept: "A defensive answer is worse than an honest 'we're still deciding'",
          lessonAnchor: "running-the-conversation",
          situation:
            "You're 10 minutes in with 20 left. The analyst asks directly: 'What's your differentiation versus the two other platforms I've already briefed this month?'",
          dashboard: "Time remaining: 20:00 | Analyst engagement: Cooling | Pre-read referenced: No",
          spendToDate: "$0",
          budgetRemaining: "20 minutes of call time",
          decision: {
            prompt: "How do you answer?",
            options: [
              {
                id: "a",
                label:
                  "Name one clear differentiator with a number, and admit where a competitor is genuinely stronger",
                verdict: "acceptable",
                outcome:
                  "The analyst re-engages, but you've lost enough time that the closing question gets rushed.",
                why: "Naming one differentiator and defending it, per the lesson, is correct; doing it this late only partially recovers the lost ground.",
                lessonRef: "preparing-the-briefing-deck",
                nextStageId: "stage-3-close",
              },
              {
                id: "b",
                label: "List five vague strengths and avoid naming the competitors directly",
                verdict: "costly",
                outcome:
                  "The analyst's notes now read 'no clear differentiation, defensive on direct questions,' the exact language that shows up in the published report's caveats.",
                why: "Name one clear differentiator and defend it, do not list five vague ones; a defensive answer is worse than an honest 'we're still deciding.'",
                lessonRef: "running-the-conversation",
                nextStageId: "end",
              },
            ],
          },
        },
        {
          stageId: "stage-2-questions",
          label: "The Analyst Probes",
          elapsed: "0:03",
          concept: "Ask what the analyst is currently hearing from clients in your category",
          lessonAnchor: "running-the-conversation",
          situation:
            "The analyst asks about your roadmap gaps, then pauses. You have an opening to ask something back.",
          dashboard: "Time remaining: 27:00 | Analyst engagement: High | Pre-read referenced: Yes",
          spendToDate: "$0",
          budgetRemaining: "27 minutes of call time",
          decision: {
            prompt: "What do you do with the opening?",
            options: [
              {
                id: "a",
                label: "Ask what the analyst is currently hearing from clients in this category",
                verdict: "optimal",
                outcome:
                  "The analyst shares two unprompted client pain points you hadn't heard from your own sales team, real competitive intelligence.",
                why: "This is the exact question the lesson recommends; it turns the briefing into a two-way exchange instead of a one-way pitch.",
                lessonRef: "running-the-conversation",
                nextStageId: "stage-3-close",
              },
              {
                id: "b",
                label: "Move straight into the next slide of your deck",
                verdict: "acceptable",
                outcome: "The call stays on schedule but you learn nothing you didn't already know going in.",
                why: "Not a mistake, but a missed opportunity; the lesson frames the analyst's live read as the most valuable part of the call.",
                lessonRef: "running-the-conversation",
                nextStageId: "stage-3-close",
              },
            ],
          },
        },
        {
          stageId: "stage-3-close",
          label: "Closing the Call",
          elapsed: "0:25",
          concept: "Close by asking directly what would move you up in their next report",
          lessonAnchor: "running-the-conversation",
          situation: "Five minutes remain. The analyst asks if there's anything else before wrapping up.",
          dashboard: "Time remaining: 5:00 | Analyst engagement: Engaged",
          spendToDate: "$0",
          budgetRemaining: "5 minutes of call time",
          decision: {
            prompt: "How do you close?",
            options: [
              {
                id: "a",
                label: "Ask directly: 'What would move us up in your next report?'",
                verdict: "optimal",
                outcome:
                  "The analyst names one specific gap, a missing case study in a particular vertical, that you can now go close before the next cycle.",
                why: "That last question sounds bold, but analysts expect it; it's the fastest way to learn what evidence, not opinion, will actually change your position.",
                lessonRef: "running-the-conversation",
                nextStageId: "end",
              },
              {
                id: "b",
                label: "Thank them for their time and end the call",
                verdict: "costly",
                outcome:
                  "You leave with no concrete next step, and won't know what to fix before the report locks.",
                why: "A briefing without a direct closing question wastes the one moment the analyst is primed to tell you exactly what evidence would change their view.",
                lessonRef: "running-the-conversation",
                nextStageId: "end",
              },
              {
                id: "c",
                label: "Recap your key stats one more time as a closer",
                verdict: "acceptable",
                outcome:
                  "Reinforces what they already heard, but you still leave without knowing what specifically would move your position.",
                why: "Reinforcement isn't wasted, but it's not the same as asking directly what would move you up, the higher-value close the lesson recommends.",
                lessonRef: "running-the-conversation",
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
            role: "Log the interaction afterward: who, when, what was said, what they asked for next",
            why: "Free, and matches the lesson's shared-log discipline for tracking every analyst interaction",
            required: true,
            lastVerified: "2026-08",
          },
        ],
        paid: [],
      },
      deliverable:
        "A completed run through the simulation with a final transcript of your choices and the analyst's resulting read on the company.",
      sampleOutput:
        "Nubank AR briefing simulation run (reference)\n\nStage 1: Opened with 2-minute snapshot (optimal) -> analyst engaged immediately\nStage 2: Asked what the analyst is hearing from clients (optimal) -> learned a competitor is weak on LATAM compliance features\nStage 3: Closed by asking what would move the rating (optimal) -> analyst named one missing case study in SMB lending\n\nResult: Engaged throughout, one concrete follow-up action identified before the report locks.",
      successCriteria: [
        "Reaches stage-3-close with at least one optimal choice made",
        "Can explain in one sentence why the costly option at stage-2-recover would show up in the published report's caveats",
      ],
      portfolioReady: true,
      stretch:
        "Re-run the simulation choosing the costly branch at every stage, and write down exactly where the recovery became impossible.",
    },
  ],

  "crisis-pr-media-response": [
    {
      id: "holding-statement-calibration-drill",
      tier: "mini",
      archetype: "audit",
      title: "Grading Three Holding Statements Against the PRSA Standard",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given transcript excerpts from a mock crisis drill and three draft holding statements, correctly identify the spokesperson-rule violation and score each statement against the acknowledge-act-commit-to-a-time standard, matching the calibration key on all rows.",
      companyId: "nykaa",
      scenario: "You're the PR lead at Nykaa running a quarterly crisis-readiness drill: a simulated packaging-safety complaint went 'viral' internally, three teams responded independently, and you need to score what they produced before the real thing happens.",
      brief: "Read the transcript log, flag the spokesperson violation, then score three draft holding statements against a known-good answer key.",
      mode: "calibration",
      conceptsCovered: ["One spokesperson, one message", "Holding statement structure: acknowledge, act, commit to a time"],
      steps: [
        {
          stepId: "step-1-spokesperson-consistency-check",
          concept: "One spokesperson, one message",
          lessonAnchor: "the-spokesperson-rule",
          theoryRecap: "The lesson's Spokesperson Rule requires exactly one designated spokesperson decided in advance, because reporters cross-reference quotes, and a second, slightly different voice turns the story into one about internal confusion instead of the original issue.",
          question: "Three quotes below were given to the same trade reporter within 90 minutes of the drill starting. Which one breaks the spokesperson rule, and which reporter action does it trigger?",
          toolName: "Google Sheets",
          where: "Log each quote with speaker, outlet, and timestamp in one shared sheet, sorted chronologically.",
          procedure: [
            "Import the 3-quote transcript log into a sheet with columns: speaker, role, quote, timestamp",
            "Flag any quote from someone other than the designated spokesperson",
            "Compare flagged quotes against the spokesperson's quote for factual or tonal contradiction",
            "Write one sentence describing the follow-up story a reporter would now file",
          ],
          outputSample:
            "10:02am  Head of PR (designated spokesperson): \"We're aware of the complaint and are investigating with the vendor. Full update by 2pm.\"\n" +
            "10:41am  Regional Ops Manager (fielded a stray call): \"Honestly this sounds like a one-off, our packaging line passed audit last month.\"\n" +
            "11:15am  Head of PR: \"Investigation ongoing, update still coming at 2pm.\"",
          healthy: "Only the designated spokesperson is ever quoted; every other team member routes press calls to that one person.",
          unhealthy: "The 10:41am quote contradicts the 10:02am holding statement's neutral tone, handing the reporter a 'company downplays complaint while investigating' angle.",
          interpret: "The Ops Manager's quote is the violation. It doesn't just add noise, it actively undercuts the holding statement's 'we're taking this seriously' framing, which is a worse story than the original complaint.",
          soWhat: [
            { symptom: "A non-spokesperson quote appears in the log", action: "Route every future press call through the spokesperson before the drill or crisis continues", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-holding-statement-scoring",
          concept: "Holding statement structure: acknowledge, act, commit to a time",
          lessonAnchor: "the-holding-statement-ready-before-youre-ready",
          theoryRecap: "A holding statement does exactly three things: acknowledges the issue, states that action is underway, and commits to a specific update time. It never assigns blame, admits liability, or speculates on cause.",
          question: "Score Draft A, B, and C below as pass/fail against the three-part structure, and name which single element each failing draft is missing.",
          toolName: "Google Sheets",
          where: "Score each draft in a 3-column checklist: acknowledges / states action / commits to a time.",
          procedure: [
            "Read all three drafts once without scoring",
            "Score each draft against the 3-part checklist, one row per draft",
            "For any draft missing an element, write the one sentence that would fix it",
            "Rank the drafts from most to least ready to send",
          ],
          outputSample:
            "Draft A: \"We take customer safety seriously and are looking into this.\" -> acknowledges: yes, states action: partial, commits to a time: no\n" +
            "Draft B: \"We are aware of the packaging concern and are investigating with our vendor. We will share a full update by 2:00pm IST today.\" -> acknowledges: yes, states action: yes, commits to a time: yes\n" +
            "Draft C: \"This is being handled internally.\" -> acknowledges: no, states action: partial, commits to a time: no",
          healthy: "Draft B passes all three; it is the one a spokesperson should actually send.",
          unhealthy: "Draft C reads as evasive precisely because it skips the acknowledgment, the exact gap that makes reporters write 'the company declined to elaborate.'",
          interpret: "A missing time commitment is the most common and most damaging gap: it is the specific detail that keeps a reporter from writing 'no comment' in their own words.",
          soWhat: [
            { symptom: "A draft has no specific time commitment", action: "Add one exact time before it goes anywhere near a reporter", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Log transcripts and score holding statement drafts", why: "Free, shareable, sortable for a drill of this size", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A scored transcript log flagging the spokesperson violation, plus a 3-draft holding statement scorecard ranking drafts by readiness.",
      sampleOutput:
        "Honasa Consumer (Mamaearth), Crisis Drill Scorecard\n\n" +
        "SPOKESPERSON LOG\n" +
        "  Violation: Regional Sales Lead quoted at 9:50am, contradicts 9:30am official statement\n" +
        "  Follow-up risk: 'Mamaearth gives mixed signals on ingredient complaint' angle\n\n" +
        "HOLDING STATEMENT SCORES\n" +
        "  Draft A: FAIL (no time commitment) - rank 2\n" +
        "  Draft B: PASS (all 3 elements) - rank 1, send this one\n" +
        "  Draft C: FAIL (no acknowledgment) - rank 3",
      successCriteria: [
        "Correctly identifies the spokesperson-rule violation and its consequence",
        "Correctly scores all 3 holding statement drafts against the 3-part structure",
      ],
      portfolioReady: false,
    },
    {
      id: "data-breach-crisis-simulation",
      tier: "core",
      archetype: "simulation",
      title: "The First Six Hours: A Data-Exposure Crisis Simulation",
      timeEstimate: "45 minutes",
      timeMinutes: 45,
      objective: "Play the spokesperson through the first six hours of a live data-exposure crisis, choosing how to respond to reporters at two decision points, and see how an optimal, acceptable, or costly choice compounds into the next stage's starting conditions.",
      companyId: "delhivery",
      scenario: "You're the designated spokesperson at Delhivery, the logistics and ecommerce fulfillment company, when a security researcher tweets that a misconfigured API exposed customer shipping addresses. A trade reporter calls with a 45-minute deadline before you have a single confirmed fact.",
      brief: "Decide what to tell the reporter with no facts yet, then decide how to update them three hours later once the facts are confirmed. Every choice routes to a different outcome, this can't be practiced live without a real breach, so it's played out here instead.",
      mode: "simulation",
      conceptsCovered: ["The holding statement under deadline pressure", "The careful non-response versus 'no comment'"],
      stages: [
        {
          stageId: "stage-1-first-hour",
          label: "The 45-Minute Deadline",
          elapsed: "Hour 1",
          concept: "The holding statement under deadline pressure",
          lessonAnchor: "the-holding-statement-ready-before-youre-ready",
          situation: "A security researcher's tweet about exposed shipping addresses has 400 retweets. A trade reporter calls you, the designated spokesperson, needing comment for a story going live in 45 minutes. Legal has confirmed nothing yet.",
          dashboard: "Tweet: 400 RTs, rising. Inbound press calls: 1 confirmed, 2 voicemails. Confirmed facts: 0.",
          spendToDate: "$0",
          budgetRemaining: "N/A (no live spend required for this simulation)",
          decision: {
            prompt: "The reporter needs something in 45 minutes. What do you tell them?",
            options: [
              {
                id: "no-comment",
                label: "Say 'no comment' until legal confirms the facts",
                verdict: "costly",
                outcome: "The reporter writes 'Delhivery declined to comment on the exposure,' and the story runs framed entirely around the researcher's tweet with no counter-framing from you at all.",
                why: "'No comment' reads as confirmation of guilt even when you genuinely don't have facts yet, this is the exact trap the lesson names.",
                lessonRef: "no-comment-vs-a-careful-non-response",
                nextStageId: "stage-2-the-update",
              },
              {
                id: "holding-statement",
                label: "Give the reporter a proper holding statement: acknowledge, action, time commitment",
                verdict: "optimal",
                outcome: "The reporter runs your quote alongside the researcher's tweet: 'Delhivery says it is aware and investigating, with a full update by 5pm.' The story is balanced instead of one-sided.",
                why: "This is the three-part structure the lesson teaches: acknowledge, state action, commit to a specific time, which is exactly what stops a reporter from filling the gap with speculation.",
                lessonRef: "the-holding-statement-ready-before-youre-ready",
                nextStageId: "stage-2-the-update",
              },
              {
                id: "let-ops-answer",
                label: "Let the regional ops manager, who's already on the phone with the researcher, answer the reporter too",
                verdict: "costly",
                outcome: "The ops manager improvises a reassurance ('this is definitely not as bad as it sounds') that contradicts your later official statement. The reporter now has two Delhivery voices saying different things, and files under 'company sends mixed signals.'",
                why: "Every inbound query must route through the one designated spokesperson; a second, uncoordinated voice is the fastest way to lose control of the story, per the Spokesperson Rule.",
                lessonRef: "the-spokesperson-rule",
                nextStageId: "stage-2-the-update",
              },
            ],
          },
        },
        {
          stageId: "stage-2-the-update",
          label: "The 5pm Update",
          elapsed: "Hour 6",
          concept: "The careful non-response versus 'no comment'",
          lessonAnchor: "no-comment-vs-a-careful-non-response",
          situation: "It's 5pm. Legal and engineering have now confirmed roughly 12,000 customer shipping addresses were exposed via the misconfigured API for about six hours before it was patched. Reporters are waiting for the update you promised.",
          dashboard: "Confirmed facts: 12,000 records, API patched at 2:15pm. Press inquiries logged: 6. Social sentiment: negative, trending toward neutral where you responded early.",
          spendToDate: "$0",
          budgetRemaining: "N/A",
          decision: {
            prompt: "You now have real facts. What goes in the 5pm statement?",
            options: [
              {
                id: "full-transparent-update",
                label: "State the confirmed number, the fix already applied, and what affected customers should do",
                verdict: "optimal",
                outcome: "Coverage shifts from 'Delhivery breach' to 'Delhivery confirms and responds to exposure,' the more defensible framing, and affected-customer complaints drop because they were told directly what to do.",
                why: "A careful, factual answer once you actually have facts is the honest completion of the promise your holding statement made earlier.",
                lessonRef: "no-comment-vs-a-careful-non-response",
                nextStageId: "end",
              },
              {
                id: "vague-still-looking",
                label: "Say you're 'still looking into the scope' even though the number is confirmed",
                verdict: "acceptable",
                outcome: "Reporters note the vagueness but don't escalate, since you did respond by the promised time. A smaller follow-up story asks why the exact number wasn't shared.",
                why: "This isn't a lie, but it wastes the credibility you built with the first holding statement by withholding a fact you already have.",
                lessonRef: "the-holding-statement-ready-before-youre-ready",
                nextStageId: "end",
              },
              {
                id: "miss-the-deadline",
                label: "Let 5pm pass with no update because legal wants another day to review",
                verdict: "costly",
                outcome: "A reporter publishes 'Delhivery still hasn't answered, hours after promising an update,' which is a worse story than the original exposure, it's now about broken trust, not the technical incident.",
                why: "The time commitment in a holding statement is a promise; missing it without any interim communication is the one thing the lesson says never to do.",
                lessonRef: "the-holding-statement-ready-before-youre-ready",
                nextStageId: "end",
              },
            ],
          },
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Log every reporter inquiry with outlet, deadline, and question", why: "Free, shareable, prevents two team members giving different answers", required: true, lastVerified: "2026-08" },
          { toolName: "Notion", role: "Store pre-drafted holding statement templates for fast editing under pressure", why: "Free tier covers a small shared template doc", required: false, lastVerified: "2026-08" },
        ],
        paid: [
          { toolName: "Muck Rack", role: "Monitor live media coverage and journalist activity during a real crisis", why: "Real-time journalist database and coverage tracking beyond what free alerts catch", required: false, lastVerified: "2026-08" },
        ],
        paidUpgradeNote: "The free path (a shared log plus pre-drafted templates) is enough to run this simulation and a real small-scale crisis; a paid media-monitoring tool becomes worth it once you're tracking coverage across dozens of outlets simultaneously.",
      },
      deliverable: "A decision log showing both choices made, the resulting stage-2 situation, and the final outcome, with a one-paragraph reflection on which choice most changed the story's framing.",
      sampleOutput:
        "Wise, Simulation Run Log\n\n" +
        "Stage 1 decision: Holding statement (optimal)\n" +
        "  Outcome: Reporter ran a balanced story citing the 5pm commitment.\n\n" +
        "Stage 2 decision: Full transparent update (optimal)\n" +
        "  Outcome: Coverage reframed from 'breach' to 'confirmed and responded,' affected-customer complaints dropped.\n\n" +
        "Reflection: The stage-1 holding statement bought the six hours needed to get real facts without a 'no comment' story running in the meantime; the stage-2 transparency then cashed in that credibility instead of spending it on vagueness.",
      successCriteria: [
        "Chooses the optimal or acceptable path at both decision points and can explain why the costly options fail",
        "Reflection correctly names how the stage-1 choice changed the starting conditions of stage 2",
      ],
      portfolioReady: true,
    },
  ],
  "measuring-pr-impact": [
    {
      id: "avE-report-rescoring-audit",
      tier: "mini",
      archetype: "audit",
      title: "Rescoring a PR Report That Leads With Ad Value Equivalency",
      timeEstimate: "30 minutes",
      timeMinutes: 30,
      objective: "Given an agency's quarterly PR report that leads with clip count and AVE, rebuild the same quarter's story using share of voice against a real competitive set paired with sentiment, correctly separating relevant coverage from noise.",
      companyId: "warby-parker",
      scenario: "You're the marketing analyst at Warby Parker, the DTC eyewear and omnichannel retailer, reviewing your PR agency's quarterly report before it goes to the exec team. The report leads with '$2.4M in Advertising Value Equivalency' from 40 clips.",
      brief: "Strip out the AVE number, re-sort the 40 clips by relevance, then compute share of voice against your two real competitors, paired with sentiment.",
      mode: "diagnostic",
      conceptsCovered: ["Retiring AVE and raw reach as headline metrics", "Share of voice paired with sentiment"],
      steps: [
        {
          stepId: "step-1-retire-ave-and-reach",
          concept: "Retiring AVE and raw reach as headline metrics",
          lessonAnchor: "why-clip-counts-and-reach-lie",
          theoryRecap: "AMEC's Barcelona Principles explicitly reject Advertising Value Equivalency: it prices editorial coverage as if it were a paid ad, ignores that readers trust the two differently, and can't be benchmarked consistently across outlets.",
          question: "The report's 40 clips include 12 from eyewear-specific trade press and 28 from general 'roundup' blogs that mention Warby Parker in a list of 10 brands. Which of the 40 clips should actually count toward this quarter's PR story?",
          toolName: "Google Sheets",
          where: "Import the 40-row clip export, add a 'relevance' column, filter out AVE and total reach columns entirely.",
          procedure: [
            "Import the 40-clip export and delete the AVE and total-publication-reach columns",
            "Tag each clip: 'dedicated coverage' vs. 'listed among competitors'",
            "Keep only dedicated coverage from outlets your actual buyers read",
            "Recount: how many of the original 40 clips survive the relevance filter?",
          ],
          outputSample:
            "Original report: 40 clips, $2.4M AVE, 6.1M 'reach'\n" +
            "After relevance filter:\n" +
            "  Dedicated coverage (eyewear trade press): 9 clips\n" +
            "  Listed among competitors (general roundups): 3 clips worth keeping\n" +
            "  Discarded (irrelevant or duplicate): 28 clips",
          healthy: "The exec summary now says '12 relevant placements' instead of '40 clips worth $2.4M,' a defensible number instead of an inflated one.",
          unhealthy: "Reporting '$2.4M in AVE' to the exec team, who will ask why paid media spend didn't produce equivalent results next quarter, a comparison the number invites but can't survive.",
          interpret: "A clip count only means something after a relevance filter; the AVE number was never real money and should never appear in the summary at all.",
          soWhat: [
            { symptom: "A PR report opens with an AVE dollar figure", action: "Delete the AVE line before the report reaches an exec deck", effort: "5 min" },
          ],
          owner: "you",
        },
        {
          stepId: "step-2-sov-with-sentiment",
          concept: "Share of voice paired with sentiment",
          lessonAnchor: "share-of-voice-with-context",
          theoryRecap: "Share of voice (SOV) is your mentions divided by total category mentions among your real competitive set, and it must always travel paired with sentiment, since SOV can rise for bad reasons too.",
          question: "This quarter Warby Parker had 12 relevant mentions against Zenni and EyeBuyDirect's combined 30 mentions in the same eyewear trade coverage. What's the SOV, and does the sentiment column change how good that number actually is?",
          toolName: "Google Sheets",
          where: "Build a 3-row SOV table: your mentions, competitor mentions, sentiment split for each.",
          procedure: [
            "Count your 12 relevant mentions and competitors' 30 combined mentions",
            "Calculate SOV: your mentions / (your mentions + competitor mentions)",
            "Tag each of your 12 mentions positive, neutral, or negative",
            "Write one sentence on whether rising SOV this quarter is a real signal or a false one",
          ],
          outputSample:
            "SOV = 12 / (12 + 30) = 28.6%\n" +
            "Sentiment on your 12 mentions: 9 positive, 3 neutral, 0 negative\n" +
            "Verdict: SOV rose from 21% last quarter to 28.6% this quarter, and sentiment held mostly positive, a real signal, not a recall-driven spike.",
          healthy: "SOV rises alongside stable or improving sentiment, meaning you're winning more of the conversations that matter, not just generating more noise.",
          unhealthy: "SOV rises while sentiment turns negative, e.g. a product recall generating mentions, which looks identical to a win on the SOV number alone.",
          interpret: "SOV without a sentiment column is not a finished metric, it's half of one.",
          soWhat: [
            { symptom: "A report shows SOV with no sentiment breakdown", action: "Add the sentiment split before presenting the SOV number to anyone", effort: "5 min" },
          ],
          owner: "you",
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Filter clips by relevance and compute SOV with sentiment", why: "Free, sufficient for a quarterly report of this size", required: true, lastVerified: "2026-08" },
          { toolName: "Google Alerts", role: "Catch mentions the agency report might have missed", why: "Free ongoing monitoring for your brand and named competitors", required: false, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A rescored one-page PR scorecard replacing AVE and raw clip count with relevant-mention count, SOV against real competitors, and sentiment.",
      sampleOutput:
        "ThredUp, Q2 PR Scorecard (rescored)\n\n" +
        "RELEVANT COVERAGE: 15 of 52 total clips (37 clips discarded as irrelevant or duplicate)\n" +
        "SHARE OF VOICE: 31% vs. Poshmark + The RealReal combined (up from 24% last quarter)\n" +
        "SENTIMENT: 11 positive, 4 neutral, 0 negative\n" +
        "VERDICT: Real signal, SOV growth paired with stable positive sentiment",
      successCriteria: [
        "Correctly separates dedicated coverage from listed-among-competitors clips",
        "Calculates SOV correctly and pairs it with a sentiment read before calling it a win",
      ],
      portfolioReady: true,
    },
    {
      id: "vanity-metrics-report-teardown",
      tier: "mini",
      archetype: "teardown",
      title: "Spot the Vanity Metric: A PR Report Teardown",
      timeEstimate: "25 minutes",
      timeMinutes: 25,
      objective: "Given a synthetic-realistic one-page PR summary written the way most agency reports actually look, correctly identify every vanity-metric defect and distinguish them from the parts of the report that are legitimately fine.",
      companyId: "hellofresh",
      scenario: "You're a new marketing hire reviewing a PR summary that's been circulating internally at HelloFresh for two quarters without anyone questioning it.",
      brief: "Read the one-page summary below and flag every defect against the lesson's four real metrics: relevance, SOV+sentiment, referral/conversion tracking, and message pull-through.",
      mode: "teardown",
      conceptsCovered: ["Retiring AVE and raw reach as headline metrics", "Message pull-through"],
      teardownItems: [
        {
          itemId: "item-1-quarterly-summary",
          specimen:
            "Q3 PR SUMMARY, prepared for leadership review\n\n" +
            "HEADLINE RESULT: 58 media placements generating $3.1M in Advertising Value Equivalency and a combined reach of 14.2M readers across all outlets.\n\n" +
            "COVERAGE HIGHLIGHTS:\n" +
            "- Featured in a '25 Meal Kit Services to Try' roundup (Outlet A, listed 25th of 25)\n" +
            "- Featured in a '30 Subscription Boxes for Busy Families' roundup (Outlet B, listed 12th of 30)\n" +
            "- Dedicated 800-word feature in a food-industry trade publication on our new sourcing partnership\n" +
            "- Quoted in a national morning show segment on meal-kit trends (60-second clip, brand named once)\n\n" +
            "SHARE OF VOICE: We now hold 22% share of voice in the meal-kit category, up from 19% last quarter.\n\n" +
            "NEXT QUARTER: Continue current media outreach cadence.",
          specimenSource: "synthetic-realistic",
          prompt: "This report reads as a solid quarter on the surface. Identify every place it substitutes a vanity metric for a real one, and note which two coverage highlights are actually fine as written.",
          answerKey: [
            {
              defect: "Leads with AVE ($3.1M) as the headline result",
              severity: "critical",
              whyItMatters: "The Barcelona Principles explicitly reject AVE; it invites the exec team to compare it to paid media ROI, a comparison it can't survive, and it isn't real money.",
              lessonRef: "why-clip-counts-and-reach-lie",
              owner: "you",
            },
            {
              defect: "Reports a combined 14.2M 'reach' figure with no breakdown of how many people actually saw the HelloFresh mention specifically",
              severity: "critical",
              whyItMatters: "Reach is a publication's total readership, not the number of people who saw this specific mention; the two roundup placements listed near the bottom of a 25-30 item list contribute almost nothing to real exposure despite counting fully toward the reach total.",
              lessonRef: "why-clip-counts-and-reach-lie",
              owner: "you",
            },
            {
              defect: "Reports SOV (22%, up from 19%) with no sentiment column at all",
              severity: "moderate",
              whyItMatters: "A rising SOV number means nothing on its own, since negative-sentiment mentions (a recall, a controversy) also raise it; without a sentiment split there's no way to tell if this is a real win.",
              lessonRef: "share-of-voice-with-context",
              owner: "you",
            },
            {
              defect: "No referral traffic, conversions, or pipeline data anywhere in the report despite every placement including a linkable URL",
              severity: "critical",
              whyItMatters: "This is the one section that connects PR to revenue; omitting it means leadership has no way to see whether any of this coverage did anything beyond exist.",
              lessonRef: "referral-traffic-conversions-and-message-pull-through",
              owner: "developer",
            },
            {
              defect: "No message pull-through scoring on any placement, including the 60-second TV segment where the brand was 'named once' with no mention of what was actually said about the product",
              severity: "moderate",
              whyItMatters: "A placement that names the brand once without conveying the intended message earned visibility, not persuasion; without scoring pull-through there's no way to tell which placements actually worked.",
              lessonRef: "referral-traffic-conversions-and-message-pull-through",
              owner: "you",
            },
          ],
          distractors: [
            "The 800-word trade publication feature on the sourcing partnership is itself a legitimate, relevant placement, the defect is that the report never scores what it said, not that the placement is bad",
            "Being listed 25th of 25 in a roundup is not automatically worthless, it's a real defect only because the report counts it identically to the dedicated trade feature instead of weighting it lower",
            "The 'continue current outreach cadence' recommendation is vague but is a strategy note, not a metrics defect, don't flag it as a vanity-metric issue",
          ],
          partialCredit: true,
        },
      ],
      toolStack: {
        free: [
          { toolName: "Google Sheets", role: "Log each defect found against the four real-metric categories", why: "Free, simple table for a single-page teardown", required: true, lastVerified: "2026-08" },
        ],
        paid: [],
      },
      deliverable: "A completed defect log naming every vanity-metric substitution in the report, each mapped to which real metric should have replaced it.",
      sampleOutput:
        "Chewy, PR Report Teardown Log\n\n" +
        "DEFECT 1: AVE headline figure -> critical -> replace with relevant-placement count\n" +
        "DEFECT 2: Undifferentiated reach total -> critical -> replace with per-placement relevance tagging\n" +
        "DEFECT 3: SOV with no sentiment -> moderate -> add sentiment split\n" +
        "DEFECT 4: No referral/conversion data -> critical -> add UTM-tagged referral tracking\n" +
        "DEFECT 5: No message pull-through scoring -> moderate -> score each placement yes/partial/no",
      successCriteria: [
        "Identifies all 5 defects and correctly maps each to the real metric that should replace it",
        "Correctly leaves the 2 distractor items unflagged as defects",
      ],
      portfolioReady: false,
    },
  ],
};
