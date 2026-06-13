export type Level = "Beginner" | "Intermediate" | "Advanced";

export type LessonRef = {
  slug: string;
  title: string;
  level: Level;
  summary: string;
};

export type Category = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  emoji: string;
  color: string;
  lessons: LessonRef[];
};

export const CATEGORIES: Category[] = [
  {
    slug: "fundamentals",
    title: "Marketing Fundamentals",
    tagline: "The mental models every marketer starts with.",
    description:
      "Before any channel — SEO, ads, social — you need the bedrock: who you serve, what you sell, where it sits in their head, and how they move from stranger to buyer.",
    emoji: "🎯",
    color: "from-rose-500/15 to-orange-500/10",
    lessons: [
      { slug: "what-is-marketing", title: "What Marketing Actually Is", level: "Beginner", summary: "Why marketing is not advertising, and the one-sentence definition that survives every era." },
      { slug: "4ps-7ps", title: "The 4 Ps (and the extra 3)", level: "Beginner", summary: "Product, Price, Place, Promotion — and when People, Process, Physical evidence matter." },
      { slug: "stp", title: "Segmentation, Targeting, Positioning", level: "Beginner", summary: "How to slice a market and pick the slice you'll actually win." },
      { slug: "value-proposition", title: "The Value Proposition", level: "Beginner", summary: "A one-paragraph promise that earns the right to be heard." },
      { slug: "buyer-personas", title: "Buyer Personas (without the fluff)", level: "Beginner", summary: "Personas that drive decisions, not decks." },
      { slug: "positioning", title: "Positioning", level: "Intermediate", summary: "The category you choose, the frame of reference, and why 'better' loses to 'different'." },
      { slug: "branding", title: "Branding vs. Identity vs. Logo", level: "Intermediate", summary: "What a brand actually is — and the parts most teams confuse." },
      { slug: "customer-journey", title: "The Customer Journey", level: "Intermediate", summary: "From unaware to advocate — the stages and the questions they're asking at each." },
      { slug: "aida-funnel", title: "AIDA & the Marketing Funnel", level: "Intermediate", summary: "The 120-year-old model that still maps how people decide to buy." },
      { slug: "jtbd", title: "Jobs To Be Done", level: "Advanced", summary: "Don't sell to demographics. Sell to the job the customer 'hires' your product for." },
      { slug: "product-market-fit", title: "Product–Market Fit", level: "Advanced", summary: "The only milestone that matters before you scale spend." },
      { slug: "brand-vs-performance", title: "Brand vs. Performance Marketing", level: "Advanced", summary: "Why the 60/40 split exists and when to break it." },
      { slug: "marketing-math", title: "Marketing Math: CAC, LTV, ROAS, Payback", level: "Beginner", summary: "The four numbers every marketer must know — and how they fit together." },
      { slug: "flywheel", title: "The Marketing Flywheel", level: "Intermediate", summary: "Why HubSpot retired the funnel — and what replaced it." },
      { slug: "category-design", title: "Category Design", level: "Advanced", summary: "Stop competing. Create the category and win by default — the Salesforce, Drift, Gong playbook." },
      { slug: "pricing-psychology", title: "Pricing Psychology", level: "Intermediate", summary: "Anchoring, decoy effect, charm pricing — the levers that move conversion without changing the product." },
      { slug: "mission-vision-values", title: "Mission, Vision, Values", level: "Beginner", summary: "The foundational doc most companies fake their way through — and why it matters when it's real." },
      { slug: "strategy-vs-tactics", title: "Strategy vs. Tactics", level: "Beginner", summary: "The most common confusion in marketing planning — and how to tell them apart instantly." },
      { slug: "5cs-framework", title: "The 5 Cs Framework", level: "Intermediate", summary: "Customer, Company, Competitors, Collaborators, Context — the situational analysis every strategy starts with." },
    ],
  },
  {
    slug: "seo",
    title: "SEO",
    tagline: "Earn traffic from search — for free, forever.",
    description:
      "Search engine optimization is content + technical excellence + earned authority. We'll go from 'what is a keyword' to schema, Core Web Vitals, and the new AI-Overview era.",
    emoji: "🔎",
    color: "from-emerald-500/15 to-teal-500/10",
    lessons: [
      { slug: "how-search-works", title: "How Search Engines Actually Work", level: "Beginner", summary: "Crawl, index, rank — the three stages your page must survive." },
      { slug: "keyword-research", title: "Keyword Research", level: "Beginner", summary: "Find the questions your customers ask Google before they know you exist." },
      { slug: "search-intent", title: "Search Intent", level: "Beginner", summary: "Informational, navigational, commercial, transactional — and why mismatching kills rankings." },
      { slug: "on-page-seo", title: "On-Page SEO", level: "Beginner", summary: "Titles, headings, content depth, internal links — the controllable basics." },
      { slug: "technical-seo", title: "Technical SEO", level: "Intermediate", summary: "Crawlability, indexability, sitemaps, robots.txt, canonicals, JS rendering." },
      { slug: "core-web-vitals", title: "Core Web Vitals", level: "Intermediate", summary: "LCP, INP, CLS — the page-experience metrics Google uses." },
      { slug: "internal-linking", title: "Internal Linking & Site Architecture", level: "Intermediate", summary: "The most underrated lever in SEO." },
      { slug: "link-building", title: "Off-Page SEO & Link Building", level: "Intermediate", summary: "Earn links that move rankings — without getting penalized." },
      { slug: "schema-structured-data", title: "Schema & Structured Data", level: "Intermediate", summary: "Help search engines understand your pages — and earn rich results." },
      { slug: "content-clusters", title: "Content Clusters & Pillar Pages", level: "Intermediate", summary: "The topical-authority playbook for ranking on hard terms." },
      { slug: "local-seo", title: "Local SEO", level: "Advanced", summary: "Win the map pack and 'near me' searches." },
      { slug: "international-seo", title: "International SEO", level: "Advanced", summary: "hreflang, ccTLDs, subfolders — getting global SEO right." },
      { slug: "eeat", title: "E-E-A-T", level: "Advanced", summary: "Experience, Expertise, Authoritativeness, Trustworthiness — how Google evaluates quality." },
      { slug: "ai-overviews-geo", title: "AI Overviews & Generative Engine Optimization", level: "Advanced", summary: "Optimizing for AI answers when search itself is changing." },
      { slug: "aeo", title: "Answer Engine Optimization (AEO)", level: "Advanced", summary: "Featured snippets, People Also Ask, voice answers — the pre-LLM evolution of search." },
      { slug: "llmo", title: "LLM Optimization (LLMO)", level: "Advanced", summary: "Getting cited inside ChatGPT, Claude, Perplexity, and Gemini answers." },
      { slug: "entity-seo", title: "Entity SEO & Knowledge Graph", level: "Advanced", summary: "Why Google ranks entities, not just keywords — and how to become one." },
      { slug: "programmatic-seo", title: "Programmatic SEO", level: "Advanced", summary: "Database-driven pages at scale — the Zapier, Webflow, and Zillow playbook." },
      { slug: "zero-click-search", title: "Zero-Click Search", level: "Advanced", summary: "Half of Google searches end without a click. Here's how to still win." },
      { slug: "voice-search-seo", title: "Voice Search SEO", level: "Advanced", summary: "Alexa, Siri, Google Assistant — optimizing for spoken queries." },
    ],
  },
  {
    slug: "paid-ads",
    title: "Paid Ads",
    tagline: "Buy attention, profitably.",
    description:
      "Paid acquisition is part math, part copy, part platform politics. We'll cover the four big platforms, bidding theory, creative testing, and how to survive iOS-era attribution.",
    emoji: "💰",
    color: "from-amber-500/15 to-yellow-500/10",
    lessons: [
      { slug: "paid-ads-101", title: "Paid Ads 101", level: "Beginner", summary: "Auctions, bids, impressions, clicks, conversions — the economic primitives." },
      { slug: "google-search-ads", title: "Google Search Ads", level: "Beginner", summary: "The original intent channel — bidding on what people Google." },
      { slug: "meta-ads", title: "Meta Ads (Facebook & Instagram)", level: "Beginner", summary: "Interest-based reach at scale, plus the world's best lookalike audiences." },
      { slug: "quality-score", title: "Quality Score & Ad Rank", level: "Intermediate", summary: "Why a lower bid can win — and how to lower your CPCs by being relevant." },
      { slug: "bidding-strategies", title: "Bidding Strategies", level: "Intermediate", summary: "Manual CPC, tCPA, tROAS, Max Conversions — when each makes sense." },
      { slug: "ad-copy-frameworks", title: "Ad Copy Frameworks", level: "Intermediate", summary: "PAS, AIDA, the 4 Us — copy that earns the click." },
      { slug: "creative-testing", title: "Creative Testing", level: "Intermediate", summary: "Why creative is now the #1 lever, and how to test it systematically." },
      { slug: "retargeting", title: "Retargeting", level: "Intermediate", summary: "Closing the loop on visitors who didn't convert." },
      { slug: "google-shopping-pmax", title: "Google Shopping & Performance Max", level: "Advanced", summary: "Feed-driven commerce and Google's AI-blended campaign type." },
      { slug: "youtube-ads", title: "YouTube Ads", level: "Advanced", summary: "Video at scale — skippable, non-skippable, bumper, in-feed." },
      { slug: "linkedin-ads", title: "LinkedIn Ads", level: "Advanced", summary: "The most expensive ad platform — and where B2B works." },
      { slug: "tiktok-ads", title: "TikTok Ads", level: "Advanced", summary: "Creative-first paid social and the rise of the Spark Ad." },
      { slug: "ios-attribution", title: "iOS 14+ & The Attribution Mess", level: "Advanced", summary: "SKAdNetwork, CAPI, modeled conversions — and why your dashboard is lying to you." },
      { slug: "mmm-vs-mta", title: "MMM vs. MTA", level: "Advanced", summary: "When to trust marketing mix modeling vs. multi-touch attribution." },
      { slug: "apple-search-ads", title: "Apple Search Ads", level: "Advanced", summary: "App Store ads — the only place to buy intent on iOS, plus the privacy advantages." },
      { slug: "ctv-ott-ads", title: "Connected TV & Streaming Ads", level: "Advanced", summary: "Netflix, Hulu, YouTube CTV — buying TV at the price of digital." },
      { slug: "reddit-ads", title: "Reddit Ads", level: "Advanced", summary: "The most contextual, niche-targeted ad platform — when it works and when it doesn't." },
      { slug: "retail-media", title: "Retail Media Networks", level: "Advanced", summary: "Amazon Ads, Walmart Connect, Instacart Ads — selling where people already buy." },
      { slug: "programmatic-advertising", title: "Programmatic Advertising", level: "Intermediate", summary: "DSPs, SSPs, RTB — the automated auction system behind most display advertising." },
      { slug: "native-advertising", title: "Native Advertising", level: "Intermediate", summary: "Outbrain, Taboola, sponsored content — ads that match the look and feel of the platform." },
      { slug: "audio-ads", title: "Audio Advertising", level: "Advanced", summary: "Podcast ads, Spotify, streaming audio — buying ears in the audio-first era." },
    ],
  },
  {
    slug: "growth",
    title: "Growth Marketing",
    tagline: "Experiment your way to compound growth.",
    description:
      "Growth marketing is the discipline of running cheap, fast experiments across the funnel — acquisition through retention — and doubling down on what compounds.",
    emoji: "🚀",
    color: "from-violet-500/15 to-fuchsia-500/10",
    lessons: [
      { slug: "what-is-growth", title: "What Growth Marketing Really Is", level: "Beginner", summary: "Not 'hacks' — a system for compounding learnings across the whole funnel." },
      { slug: "aarrr", title: "AARRR: Pirate Metrics", level: "Beginner", summary: "Acquisition, Activation, Retention, Referral, Revenue — the canonical funnel." },
      { slug: "north-star-metric", title: "The North Star Metric", level: "Beginner", summary: "The one number that captures the value your product delivers." },
      { slug: "activation", title: "Activation & Aha Moments", level: "Intermediate", summary: "The single best lever for most early-stage products." },
      { slug: "retention-cohorts", title: "Retention & Cohort Analysis", level: "Intermediate", summary: "Why retention is the leaky-bucket fix that beats more acquisition." },
      { slug: "growth-loops", title: "Growth Loops", level: "Intermediate", summary: "Funnels run out. Loops compound. The shift you need to make." },
      { slug: "viral-coefficient", title: "Viral Coefficient & K-factor", level: "Intermediate", summary: "The math of word-of-mouth growth." },
      { slug: "ab-testing", title: "A/B Testing & Statistical Significance", level: "Intermediate", summary: "Run tests that tell you the truth, not what you want to hear." },
      { slug: "ice-rice-prioritization", title: "ICE & RICE Prioritization", level: "Intermediate", summary: "Pick the experiments most likely to move the needle." },
      { slug: "plg", title: "Product-Led Growth", level: "Advanced", summary: "When the product itself does the marketing and sales." },
      { slug: "onboarding", title: "Onboarding That Converts", level: "Advanced", summary: "Get new users to value as fast as possible." },
      { slug: "referral-programs", title: "Referral Programs", level: "Advanced", summary: "What separates Dropbox-class referrals from the duds." },
      { slug: "experimentation-program", title: "Building an Experimentation Program", level: "Advanced", summary: "From ad-hoc tests to a repeatable engine." },
      { slug: "reverse-trials", title: "Reverse Trials", level: "Advanced", summary: "Start users on paid — downgrade to free. The Notion, Loom, Slack monetization shift." },
      { slug: "activation-rate", title: "Activation Rate (the metric)", level: "Intermediate", summary: "The one number that predicts retention better than any other early signal." },
      { slug: "freemium-vs-free-trial", title: "Freemium vs. Free Trial", level: "Intermediate", summary: "Two ways to let people try before they buy — and the math behind which to pick." },
      { slug: "network-effects", title: "Network Effects", level: "Advanced", summary: "The compounding mechanism Metcalfe identified — and why it creates winner-take-most markets." },
      { slug: "two-sided-marketplaces", title: "Two-Sided Marketplaces", level: "Advanced", summary: "The chicken-and-egg problem — and how Uber, Airbnb, and Etsy solved it." },
      { slug: "engagement-loops", title: "Engagement Loops", level: "Intermediate", summary: "Different from growth loops — the retention compounding mechanism that keeps users coming back daily." },
    ],
  },
  {
    slug: "social",
    title: "Social Media Marketing",
    tagline: "Be where attention is — and earn it.",
    description:
      "Each platform is a distinct culture, algorithm, and audience. Strategy comes from understanding which one fits your business, not posting everywhere.",
    emoji: "📱",
    color: "from-pink-500/15 to-rose-500/10",
    lessons: [
      { slug: "social-strategy-basics", title: "Social Strategy Basics", level: "Beginner", summary: "Pick platforms by where your audience actually spends time." },
      { slug: "organic-vs-paid", title: "Organic vs. Paid Social", level: "Beginner", summary: "The collapse of organic reach and what to do about it." },
      { slug: "content-calendar", title: "Building a Content Calendar", level: "Beginner", summary: "A repeatable system beats sporadic inspiration." },
      { slug: "instagram", title: "Instagram Playbook", level: "Intermediate", summary: "Reels, carousels, Stories — what works in 2025." },
      { slug: "tiktok", title: "TikTok Playbook", level: "Intermediate", summary: "Hooks, native edits, sounds — winning the For You Page." },
      { slug: "linkedin", title: "LinkedIn Playbook", level: "Intermediate", summary: "Personal brands, thought leadership, B2B distribution." },
      { slug: "youtube", title: "YouTube Playbook", level: "Intermediate", summary: "The only social platform where content compounds for years." },
      { slug: "x-twitter", title: "X (Twitter) Playbook", level: "Intermediate", summary: "Real-time conversation, niche audiences, and how to use it well." },
      { slug: "pinterest", title: "Pinterest Playbook", level: "Intermediate", summary: "The visual search engine the rest of the internet forgets." },
      { slug: "influencer-marketing", title: "Influencer & Creator Marketing", level: "Advanced", summary: "Picking creators, structuring deals, measuring impact." },
      { slug: "ugc", title: "User-Generated Content", level: "Advanced", summary: "Why UGC outperforms branded content — and how to get more of it." },
      { slug: "community-building", title: "Community Building", level: "Advanced", summary: "Audiences consume. Communities defend, refer, and retain." },
      { slug: "social-listening", title: "Social Listening", level: "Advanced", summary: "Mining social for product insights, sentiment, and crisis signals." },
      { slug: "algorithm-basics", title: "How Social Algorithms Work", level: "Advanced", summary: "The signals every major platform optimizes for." },
      { slug: "threads", title: "Threads Playbook", level: "Intermediate", summary: "Meta's Twitter — and how it actually rewards content very differently." },
      { slug: "substack-notes", title: "Substack & Newsletter-Social", level: "Intermediate", summary: "Building an audience on platforms where the algorithm wants you to leave with them." },
      { slug: "reddit-marketing", title: "Reddit Marketing", level: "Advanced", summary: "The hardest community to market on — and the highest-trust traffic on the internet." },
      { slug: "bluesky", title: "Bluesky & the Open Social Web", level: "Advanced", summary: "Decentralized social — what AT Protocol means for marketers." },
    ],
  },
  {
    slug: "content",
    title: "Content Marketing",
    tagline: "Earn trust at scale by being useful.",
    description:
      "Content marketing is the long game — being the answer when your buyer is looking. From blogs to video to podcasts, it all rests on strategy, not volume.",
    emoji: "✍️",
    color: "from-sky-500/15 to-blue-500/10",
    lessons: [
      { slug: "what-is-content-marketing", title: "What Content Marketing Really Is", level: "Beginner", summary: "Distribution, not production, is the hard part." },
      { slug: "content-strategy", title: "Content Strategy", level: "Beginner", summary: "The doc that keeps you from publishing things that don't matter." },
      { slug: "editorial-calendar", title: "Editorial Calendar", level: "Beginner", summary: "A planning rhythm that survives contact with reality." },
      { slug: "blog-seo-content", title: "Blog & SEO Content", level: "Intermediate", summary: "Writing for search intent without sounding like a robot." },
      { slug: "topic-clusters", title: "Topic Clusters (Content Strategy Edition)", level: "Intermediate", summary: "Build topical authority by going deep, not wide." },
      { slug: "lead-magnets", title: "Lead Magnets", level: "Intermediate", summary: "Trade value for an email — and start a relationship." },
      { slug: "gated-content", title: "Gated vs. Ungated Content", level: "Intermediate", summary: "When to gate, when to give it away." },
      { slug: "video-content", title: "Video Content", level: "Intermediate", summary: "Short-form, long-form, and the production bar you actually need." },
      { slug: "podcasting", title: "Podcasting for Marketers", level: "Intermediate", summary: "When a show makes sense — and when it doesn't." },
      { slug: "content-distribution", title: "Content Distribution", level: "Advanced", summary: "1 hour to write, 4 hours to distribute. That's the right ratio." },
      { slug: "repurposing", title: "Content Repurposing", level: "Advanced", summary: "Turn one pillar into 20 atomic pieces." },
      { slug: "thought-leadership", title: "Thought Leadership", level: "Advanced", summary: "Earning a point of view people actually want to hear." },
      { slug: "newsletter-strategy", title: "Newsletter Strategy", level: "Intermediate", summary: "Substack, Beehiiv, ConvertKit — building an audience you own forever." },
      { slug: "content-moats", title: "Content Moats", level: "Advanced", summary: "Proprietary data, original research, surveys — content competitors literally can't copy." },
      { slug: "ai-content-detection", title: "AI Content & Google's Stance", level: "Intermediate", summary: "What Google actually rewards in 2025: useful content, not the tool that wrote it." },
      { slug: "case-studies", title: "Case Studies", level: "Intermediate", summary: "The highest-converting B2B content format — how to write one that actually sells." },
      { slug: "webinars", title: "Webinars and Live Content", level: "Intermediate", summary: "The format that refuses to die in B2B — how to run webinars that generate pipeline." },
      { slug: "ebooks-whitepapers", title: "Ebooks and Whitepapers", level: "Intermediate", summary: "When the long-form gated asset still earns the email — and what makes them worth downloading." },
      { slug: "interactive-content", title: "Interactive Content", level: "Advanced", summary: "Calculators, quizzes, configurators — the highest-engagement format most companies never invest in." },
    ],
  },
  {
    slug: "email",
    title: "Email & Lifecycle",
    tagline: "The highest-ROI channel, every year, still.",
    description:
      "Email isn't dead. It's the only channel you own. We'll cover list building, automation, deliverability, and lifecycle programs that retain and re-engage.",
    emoji: "📧",
    color: "from-cyan-500/15 to-blue-500/10",
    lessons: [
      { slug: "email-101", title: "Email Marketing 101", level: "Beginner", summary: "Transactional vs. marketing, broadcast vs. automation." },
      { slug: "list-building", title: "List Building", level: "Beginner", summary: "Get permission, not just addresses." },
      { slug: "welcome-series", title: "The Welcome Series", level: "Beginner", summary: "The highest-engagement emails you'll ever send." },
      { slug: "segmentation", title: "Segmentation", level: "Intermediate", summary: "Send less mail to more relevant people. ROI follows." },
      { slug: "automation-drips", title: "Automation & Drip Flows", level: "Intermediate", summary: "The flows every business should have running." },
      { slug: "abandoned-cart", title: "Abandoned Cart & Browse Flows", level: "Intermediate", summary: "The single highest-revenue ecommerce automation." },
      { slug: "winback", title: "Win-back Campaigns", level: "Intermediate", summary: "Resurrecting dormant subscribers without burning your list." },
      { slug: "deliverability", title: "Deliverability: SPF, DKIM, DMARC", level: "Advanced", summary: "Why your beautifully designed email never arrived." },
      { slug: "compliance", title: "CAN-SPAM, GDPR, CASL", level: "Advanced", summary: "The legal floor — and why it matters more than ever." },
      { slug: "rfm", title: "RFM Segmentation", level: "Advanced", summary: "Recency, Frequency, Monetary — segment by behavior, not demographics." },
      { slug: "clv", title: "Customer Lifetime Value", level: "Advanced", summary: "The number that decides what every other number is allowed to be." },
      { slug: "sms-marketing", title: "SMS Marketing", level: "Intermediate", summary: "98% open rates, brutal opt-out costs — how to do SMS without burning the list." },
      { slug: "push-notifications", title: "Push Notifications", level: "Intermediate", summary: "Web push, mobile push, and the 1-minute average attention window." },
      { slug: "whatsapp-marketing", title: "WhatsApp Business Marketing", level: "Advanced", summary: "The dominant marketing channel outside North America — templates, opt-in, and Meta's ecosystem." },
      { slug: "cold-email", title: "Cold Email", level: "Intermediate", summary: "Outbound B2B email that does not get you blacklisted — deliverability, copy, and sequences." },
      { slug: "behavioral-triggers", title: "Behavioral Email Triggers", level: "Advanced", summary: "Send because they did X, not because it is Tuesday — the most relevant email you can send." },
    ],
  },
  {
    slug: "analytics",
    title: "Analytics & Attribution",
    tagline: "Decide with data — not vibes.",
    description:
      "Tracking, dashboards, and attribution. From GA4 events to MMM, you'll learn how to measure what matters and why no model is perfectly accurate.",
    emoji: "📊",
    color: "from-indigo-500/15 to-violet-500/10",
    lessons: [
      { slug: "analytics-101", title: "Analytics 101", level: "Beginner", summary: "Sessions, users, events — the vocabulary you need." },
      { slug: "ga4-setup", title: "GA4 Setup & Events", level: "Beginner", summary: "Set up GA4 the right way the first time." },
      { slug: "utm-tagging", title: "UTM Tagging", level: "Beginner", summary: "The five parameters that decide whether your data makes sense." },
      { slug: "conversion-tracking", title: "Conversion Tracking", level: "Intermediate", summary: "Defining and capturing the events that actually matter." },
      { slug: "dashboards", title: "Dashboards (Looker, etc.)", level: "Intermediate", summary: "The handful of charts that drive 90% of decisions." },
      { slug: "funnel-analytics", title: "Funnel Analytics", level: "Intermediate", summary: "Find the leak before you pour more in." },
      { slug: "cohort-analysis", title: "Cohort Analysis", level: "Intermediate", summary: "The only way to see if your product is actually getting better." },
      { slug: "attribution-models", title: "Attribution Models", level: "Advanced", summary: "First, last, linear, time-decay, data-driven — and what each lies about." },
      { slug: "mmm", title: "Marketing Mix Modeling", level: "Advanced", summary: "Top-down measurement when bottom-up tracking breaks." },
      { slug: "incrementality", title: "Incrementality Testing", level: "Advanced", summary: "Did the ad actually cause the conversion? The only question that matters." },
      { slug: "server-side-tracking", title: "Server-Side Tracking", level: "Advanced", summary: "Why everyone's moving server-side — and how to do it." },
      { slug: "consent-mode", title: "Consent Mode & Privacy", level: "Advanced", summary: "Modeling conversions when users say no to cookies." },
      { slug: "cdp", title: "Customer Data Platforms (CDPs)", level: "Advanced", summary: "Segment, RudderStack, mParticle — the unified-customer-profile layer." },
      { slug: "data-warehouses", title: "Data Warehouses for Marketers", level: "Advanced", summary: "BigQuery, Snowflake, Databricks — when marketing graduates from GA to SQL." },
      { slug: "clean-rooms", title: "Data Clean Rooms", level: "Advanced", summary: "Google Ads Data Hub, Amazon AMC, Meta Advanced Analytics — privacy-safe attribution at scale." },
      { slug: "privacy-sandbox", title: "Privacy Sandbox & Post-Cookie Web", level: "Advanced", summary: "Topics API, FLEDGE, Attribution Reporting — Chrome's privacy-first replacement." },
      { slug: "marketing-kpis-okrs", title: "Marketing KPIs and OKRs", level: "Intermediate", summary: "The 8 numbers a CMO reports to the board — and how to set OKRs that actually align teams." },
      { slug: "reverse-etl", title: "Reverse ETL", level: "Advanced", summary: "Warehouse-to-tool sync (Hightouch, Census) — the new layer in the modern marketing stack." },
    ],
  },
  {
    slug: "tools",
    title: "Marketing Tools",
    tagline: "The best free & paid tools for every marketing job.",
    description:
      "The right tool cuts hours of work. We map the top 10 tools per discipline — SEO, ads, email, analytics, social, content — with honest pros/cons and free tiers explained.",
    emoji: "🛠️",
    color: "from-orange-500/15 to-amber-500/10",
    lessons: [
      { slug: "seo-tools", title: "Top 10 SEO Tools", level: "Beginner", summary: "From Ahrefs to Google Search Console — what each does and when to use it." },
      { slug: "paid-ads-tools", title: "Top 10 Paid Ads Tools", level: "Beginner", summary: "Google Ads Editor, Meta Ads Manager, Semrush, SpyFu and more." },
      { slug: "social-media-tools", title: "Top 10 Social Media Tools", level: "Beginner", summary: "Scheduling, analytics, listening — the stack that runs social." },
      { slug: "content-marketing-tools", title: "Top 10 Content Marketing Tools", level: "Beginner", summary: "Research, writing, distribution — the full content stack." },
      { slug: "email-marketing-tools", title: "Top 10 Email Marketing Tools", level: "Beginner", summary: "Klaviyo, Mailchimp, ActiveCampaign, Brevo — honest comparison." },
      { slug: "analytics-tools", title: "Top 10 Analytics Tools", level: "Intermediate", summary: "GA4, Mixpanel, Amplitude, Hotjar, Looker — what each is built for." },
      { slug: "cro-tools", title: "Top 10 CRO & Testing Tools", level: "Intermediate", summary: "A/B testing, heatmaps, session recordings, form analytics." },
      { slug: "growth-tools", title: "Top 10 Growth & Automation Tools", level: "Intermediate", summary: "Zapier, Make, n8n, HubSpot, Intercom — automate your funnel." },
      { slug: "design-tools", title: "Top 10 Marketing Design Tools", level: "Beginner", summary: "Canva, Figma, Adobe Express — creative tools for non-designers." },
      { slug: "all-in-one-tools", title: "All-in-One Marketing Platforms", level: "Advanced", summary: "HubSpot, Salesforce Marketing Cloud, Marketo — when a suite makes sense." },
      { slug: "free-tools-stack", title: "The $0 Marketing Stack", level: "Beginner", summary: "Run a full marketing operation with zero budget using free tiers." },
      { slug: "ai-tools-overview", title: "AI Marketing Tools Overview", level: "Intermediate", summary: "A map of the AI tool landscape: writing, images, video, research, automation." },
      { slug: "ai-native-tools", title: "AI-Native Marketing Tools", level: "Intermediate", summary: "Cursor, Perplexity, Granola, Cluely — tools built AI-first, not bolted on." },
      { slug: "no-code-marketing-tools", title: "No-Code & Low-Code for Marketers", level: "Intermediate", summary: "Build landing pages, automations, internal tools — without engineering." },
      { slug: "tools-stack-by-stage", title: "The Right Tool Stack by Company Stage", level: "Advanced", summary: "Solo founder → seed → Series B → enterprise. The stack changes 4 times." },
    ],
  },
  {
    slug: "psychology",
    title: "Human Psychology",
    tagline: "Marketing is applied psychology — learn the hidden levers.",
    description:
      "Every great marketer is part psychologist. Cialdini, Kahneman, Thaler, Cialdini — the mental shortcuts, biases, and emotional triggers that decide what people buy. This is the operating system underneath every channel.",
    emoji: "🧠",
    color: "from-purple-500/15 to-pink-500/10",
    lessons: [
      { slug: "psychology-101", title: "Why Psychology Is the Real Marketing", level: "Beginner", summary: "Channels change every year. Human wiring does not. Start here." },
      { slug: "system-1-system-2", title: "System 1 and System 2 Thinking", level: "Beginner", summary: "Kahneman's two modes of thought — and which one buys things." },
      { slug: "maslow-marketing", title: "Maslow's Hierarchy for Marketers", level: "Beginner", summary: "From survival to self-actualization — which need does your product really serve?" },
      { slug: "emotion-vs-logic", title: "Emotion First, Logic Second", level: "Beginner", summary: "People decide emotionally and rationalize afterward. The data on why." },
      { slug: "cialdini-6-principles", title: "Cialdini's 6 Principles of Influence", level: "Intermediate", summary: "Reciprocity, commitment, social proof, authority, liking, scarcity — the canonical six." },
      { slug: "cognitive-biases", title: "Cognitive Biases Every Marketer Uses", level: "Intermediate", summary: "The mental shortcuts that quietly drive every purchase decision." },
      { slug: "social-proof-psychology", title: "The Psychology of Social Proof", level: "Intermediate", summary: "Why reviews, testimonials, and 'X people bought this' work — and when they backfire." },
      { slug: "scarcity-urgency", title: "Scarcity, Urgency, and FOMO", level: "Intermediate", summary: "The most powerful (and most abused) lever in the toolkit." },
      { slug: "anchoring-framing", title: "Anchoring and Framing", level: "Intermediate", summary: "The first number and the first words shape every comparison that follows." },
      { slug: "loss-aversion", title: "Loss Aversion", level: "Intermediate", summary: "Losses hurt twice as much as gains feel good — Kahneman's most actionable finding." },
      { slug: "storytelling-psychology", title: "Why Stories Sell (Narrative Transportation)", level: "Intermediate", summary: "The neuroscience of getting people to feel rather than judge." },
      { slug: "habit-loops", title: "Habit Loops: Cue, Routine, Reward", level: "Intermediate", summary: "Charles Duhigg's framework — how products become habits." },
      { slug: "behavioral-economics", title: "Behavioral Economics for Marketers", level: "Advanced", summary: "Thaler's nudges and the field that finally accepted humans are not rational." },
      { slug: "choice-architecture", title: "Choice Architecture and Nudges", level: "Advanced", summary: "Defaults, ordering, friction — designing the path you want people to take." },
      { slug: "peak-end-rule", title: "The Peak-End Rule", level: "Advanced", summary: "People remember the peak emotion and the end — design experiences accordingly." },
      { slug: "status-belonging-identity", title: "Status, Belonging, and Identity", level: "Advanced", summary: "The deepest motivators in B2C and luxury — why brands become tribes." },
      { slug: "ikea-effect", title: "The IKEA Effect", level: "Intermediate", summary: "Why people overvalue what they helped create — and how to use co-creation in product and marketing." },
      { slug: "mere-exposure-effect", title: "The Mere Exposure Effect", level: "Intermediate", summary: "Familiarity breeds preference — Zajonc's finding and what it means for brand frequency and reach." },
      { slug: "sunk-cost-fallacy", title: "The Sunk Cost Fallacy", level: "Intermediate", summary: "Why people throw good money after bad — and how retention and loyalty programs exploit this wiring." },
      { slug: "default-bias", title: "Default Bias and Status Quo", level: "Advanced", summary: "The most powerful nudge: doing nothing. How defaults shape behavior at scale." },
    ],
  },
  {
    slug: "copywriting",
    title: "Copywriting",
    tagline: "Words that sell, without sounding like they're trying.",
    description:
      "Copy is salesmanship in print. Frameworks (AIDA, PAS), headlines, landing pages, sales letters, email, ad copy, microcopy, and the Ogilvy-Halbert-Sugarman canon. Every marketer writes - this is the craft underneath it.",
    emoji: "✍️",
    color: "from-red-500/15 to-rose-500/10",
    lessons: [
      { slug: "copywriting-101", title: "Copywriting 101", level: "Beginner", summary: "Copy is salesmanship in print. Not decoration." },
      { slug: "aida-pas-frameworks", title: "AIDA, PAS, and the Core Frameworks", level: "Beginner", summary: "The four old reliable structures every copywriter learns first." },
      { slug: "headlines", title: "Headline Writing", level: "Beginner", summary: "80 cents of every ad dollar goes into the headline. Get it right." },
      { slug: "voice-and-tone", title: "Voice and Tone", level: "Beginner", summary: "What makes a brand sound like itself across every email, ad, and tweet." },
      { slug: "features-vs-benefits", title: "Features vs. Benefits", level: "Beginner", summary: "Customers buy outcomes, not specs. The translation rule." },
      { slug: "landing-page-copy", title: "Landing Page Copy", level: "Intermediate", summary: "The hierarchy of a page that converts, top to bottom." },
      { slug: "sales-letter-anatomy", title: "Long-Form Sales Letter Anatomy", level: "Intermediate", summary: "Why 5000-word sales pages still work in 2025." },
      { slug: "email-copy", title: "Email Copywriting", level: "Intermediate", summary: "Subject line, preheader, body, CTA. Each carries different weight." },
      { slug: "ad-copy", title: "Ad Copy (Search, Social, Display)", level: "Intermediate", summary: "Same principles, different word counts and constraints." },
      { slug: "microcopy", title: "Microcopy: Buttons, Forms, Empty States", level: "Intermediate", summary: "The tiny words that decide whether people finish what they started." },
      { slug: "value-prop-copy", title: "Writing the Value Prop", level: "Intermediate", summary: "The hardest 12 words you will ever write." },
      { slug: "cta-copy", title: "CTA Copy That Converts", level: "Intermediate", summary: "Why 'Get Started' beats 'Submit' by 30 percent." },
      { slug: "ogilvy-halbert-sugarman", title: "The Copywriting Canon", level: "Advanced", summary: "What Ogilvy, Halbert, and Sugarman knew that you should learn." },
      { slug: "ab-testing-copy", title: "A/B Testing Copy", level: "Advanced", summary: "Test what matters. Headlines first, button labels last." },
      { slug: "b2b-copy", title: "B2B Copy: Pain, Proof, Process", level: "Advanced", summary: "How B2B copy differs from B2C, and the three pillars that drive enterprise pages." },
      { slug: "storytelling-copy", title: "Storytelling in Copy", level: "Advanced", summary: "Why narrative beats argument every time." },
      { slug: "power-words", title: "Power Words", level: "Intermediate", summary: "Sensory and emotional words that move conversion — the proven vocabulary of influence." },
      { slug: "storybrand", title: "StoryBrand Framework", level: "Advanced", summary: "Donald Miller's 7-part framework — make the customer the hero, not your brand." },
      { slug: "direct-vs-brand-copy", title: "Direct Response vs. Brand Copy", level: "Advanced", summary: "The two camps of copywriting and when each style wins." },
    ],
  },
  {
    slug: "cro",
    title: "Conversion Rate Optimization",
    tagline: "Turn more of the visitors you already have into customers.",
    description:
      "CRO is not a quick win. It is a system: landing page anatomy, friction audits, mobile, urgency design, button science, sample-size math, multivariate vs A/B, and the qualitative research that powers all of it.",
    emoji: "🎯",
    color: "from-lime-500/15 to-green-500/10",
    lessons: [
      { slug: "cro-101", title: "CRO 101", level: "Beginner", summary: "Conversion rate optimization is not a quick win. It is a system." },
      { slug: "conversion-rate-math", title: "Conversion Rate Math", level: "Beginner", summary: "Why a 1 percent lift can be worth millions, and how to compute it." },
      { slug: "landing-page-anatomy", title: "Landing Page Anatomy", level: "Beginner", summary: "The 7 sections every high-converting landing page has." },
      { slug: "hero-formula", title: "The Hero Section Formula", level: "Beginner", summary: "What goes above the fold, in what order." },
      { slug: "form-optimization", title: "Form Optimization", level: "Intermediate", summary: "Every extra field costs you 4 percent of submissions." },
      { slug: "friction-audit", title: "Friction Audit", level: "Intermediate", summary: "Find every moment that makes the user hesitate." },
      { slug: "button-design", title: "The Science of Buttons", level: "Intermediate", summary: "Color, copy, size, position. Decades of testing distilled." },
      { slug: "urgency-design", title: "Designing Urgency Without Sleaze", level: "Intermediate", summary: "Real scarcity works. Fake urgency burns trust." },
      { slug: "mobile-cro", title: "Mobile CRO", level: "Intermediate", summary: "65 percent of traffic is mobile. Most pages still ignore it." },
      { slug: "exit-intent", title: "Exit Intent and Recovery", level: "Intermediate", summary: "The cheapest visitor you will ever buy is the one already leaving." },
      { slug: "sample-size-math", title: "Sample Size and Statistical Power", level: "Intermediate", summary: "Why most A/B tests are called too early." },
      { slug: "multivariate-vs-ab", title: "Multivariate vs A/B Testing", level: "Advanced", summary: "When to use which, and why most teams should not use multivariate." },
      { slug: "cro-vs-growth-experiments", title: "CRO vs Growth Experimentation", level: "Advanced", summary: "Same toolkit, different mandates." },
      { slug: "personalization-cro", title: "Personalization for CRO", level: "Advanced", summary: "Segment-specific pages, dynamic copy, and when it actually moves the needle." },
      { slug: "cro-research", title: "Customer Research for CRO", level: "Advanced", summary: "Heatmaps, recordings, surveys. The qualitative side of a quantitative discipline." },
      { slug: "checkout-optimization", title: "Checkout Optimization", level: "Advanced", summary: "The highest-revenue square foot on the internet — fields, friction, payment options, and trust." },
      { slug: "trust-signals", title: "Trust Signals That Convert", level: "Intermediate", summary: "Badges, reviews, guarantees — what actually moves trust and what does not." },
      { slug: "speed-and-cro", title: "Page Speed and CRO", level: "Intermediate", summary: "The 100ms = 1 percent revenue relationship — the data behind fast pages and higher conversions." },
    ],
  },
  {
    slug: "brand-strategy",
    title: "Brand Strategy",
    tagline: "The discipline underneath every great brand.",
    description:
      "Brand is not a logo. It is a system: archetypes, voice, naming, identity, brand books, distinctive assets (Byron Sharp), Ehrenberg-Bass science, brand vs demand, brand tracking, and the founder-brand era of 2025.",
    emoji: "🎨",
    color: "from-fuchsia-500/15 to-purple-500/10",
    lessons: [
      { slug: "brand-strategy-101", title: "Brand Strategy 101", level: "Beginner", summary: "Strategy is what you do AND what you choose not to do." },
      { slug: "brand-vs-marketing", title: "Brand vs Marketing vs Advertising", level: "Beginner", summary: "Three words people use interchangeably. They are not the same." },
      { slug: "brand-archetypes", title: "Brand Archetypes (Jung's 12)", level: "Beginner", summary: "Why every great brand fits one of 12 archetypes Jung identified a century ago." },
      { slug: "brand-pillars", title: "Brand Pillars", level: "Beginner", summary: "The 3 to 5 promises your brand actually keeps." },
      { slug: "naming", title: "Brand Naming", level: "Intermediate", summary: "Why Tesla beat Better Place. The architecture of memorable names." },
      { slug: "visual-identity", title: "Visual Identity Systems", level: "Intermediate", summary: "Logos, colors, type, and the system that ties them together." },
      { slug: "brand-voice-system", title: "Brand Voice Systems", level: "Intermediate", summary: "The doc that keeps your tweets and your TOS sounding like the same brand." },
      { slug: "brand-book", title: "Building a Brand Book", level: "Intermediate", summary: "What goes in, what does not, and how to make it actually get used." },
      { slug: "distinctive-assets", title: "Distinctive Brand Assets", level: "Intermediate", summary: "Byron Sharp insight: brands grow by being recognizable, not by being different." },
      { slug: "how-brands-grow", title: "How Brands Grow (Ehrenberg-Bass)", level: "Intermediate", summary: "The empirical science of brand growth. Most of what you believe about marketing is wrong." },
      { slug: "rebrands", title: "Rebrands: When and How", level: "Intermediate", summary: "When a rebrand is the right move, and when it is corporate vanity." },
      { slug: "brand-tracking", title: "Brand Tracking", level: "Intermediate", summary: "Awareness, consideration, preference. The KPIs brand teams report to the board." },
      { slug: "brand-vs-demand", title: "The Brand vs Demand Debate", level: "Advanced", summary: "60/40 split, Les Binet, the long and the short of it." },
      { slug: "brand-equity", title: "Brand Equity Measurement", level: "Advanced", summary: "Putting a dollar value on brand." },
      { slug: "b2b-brand", title: "B2B Branding", level: "Advanced", summary: "Why B2B brand is now table stakes, not optional." },
      { slug: "founder-brand", title: "Founder Brand as Distribution", level: "Advanced", summary: "Why founders go viral on LinkedIn while their company accounts struggle." },
      { slug: "brand-crisis", title: "Brand Crisis Management", level: "Advanced", summary: "The 24-hour playbook every brand needs — and will not use until it is too late." },
      { slug: "co-branding", title: "Co-Branding", level: "Advanced", summary: "Lego x Adidas, Spotify x Starbucks — the partnership math and what makes co-brands work." },
      { slug: "employer-brand", title: "Employer Brand", level: "Intermediate", summary: "The under-taught discipline that decides who you can hire — and how to build it deliberately." },
    ],
  },
  {
    slug: "product-marketing",
    title: "Product Marketing",
    tagline: "The function between product, marketing, and sales.",
    description:
      "PMM is the discipline that turns 'what we built' into 'why someone would buy it.' Positioning docs, messaging hierarchy, competitive intel, customer interviews, launches, win/loss, sales enablement, pricing and packaging.",
    emoji: "📦",
    color: "from-blue-500/15 to-indigo-500/10",
    lessons: [
      { slug: "pmm-101", title: "Product Marketing 101", level: "Beginner", summary: "The function that sits between product, marketing, and sales." },
      { slug: "pmm-vs-marketing", title: "PMM vs Marketing vs Product", level: "Beginner", summary: "What each owns, and where the seams are." },
      { slug: "icp", title: "Ideal Customer Profile (ICP)", level: "Beginner", summary: "Most teams describe an audience. PMMs build an ICP. Big difference." },
      { slug: "positioning-doc", title: "The Positioning Doc", level: "Intermediate", summary: "April Dunford framework: the one doc that aligns everyone." },
      { slug: "messaging-hierarchy", title: "Messaging Hierarchy", level: "Intermediate", summary: "From core promise to feature one-liner, in one structured doc." },
      { slug: "competitive-intel", title: "Competitive Intelligence", level: "Intermediate", summary: "How to systematically know more about your competitors than they do." },
      { slug: "customer-interviews", title: "Customer Interviews", level: "Intermediate", summary: "The most valuable hour a PMM can spend." },
      { slug: "launches", title: "Product Launches", level: "Intermediate", summary: "Tier 1, 2, 3 launches and how to scale launch effort to launch size." },
      { slug: "sales-enablement", title: "Sales Enablement", level: "Intermediate", summary: "Decks, battlecards, training. The 50 percent of PMM that touches sales." },
      { slug: "win-loss-analysis", title: "Win/Loss Analysis", level: "Advanced", summary: "Why you lost is a leading indicator. Find out systematically." },
      { slug: "pricing-packaging", title: "Pricing and Packaging", level: "Advanced", summary: "Plan tiers, feature gates, and the math behind a price page." },
      { slug: "category-creation", title: "Category Creation", level: "Advanced", summary: "When to invent a category vs play in an existing one." },
      { slug: "pmm-org-models", title: "PMM Org Models", level: "Advanced", summary: "Centralized, product-aligned, segment-aligned. The tradeoffs." },
      { slug: "analyst-relations", title: "Analyst Relations", level: "Advanced", summary: "Gartner Magic Quadrant, Forrester Wave — the B2B credibility loop and how to win it." },
      { slug: "customer-advisory-board", title: "Customer Advisory Boards", level: "Advanced", summary: "The 8-customer council that aligns product and marketing — and how to run one that works." },
      { slug: "beta-programs", title: "Beta Programs", level: "Intermediate", summary: "Early access as a marketing channel — how to structure a beta that creates advocates." },
    ],
  },
  {
    slug: "ai-marketing",
    title: "AI in Marketing",
    tagline: "Use AI to do more — and think faster.",
    description:
      "AI is reshaping every marketing discipline. Learn to use LLMs, image generators, and AI agents to 10x your output — while keeping the strategy and creativity human.",
    emoji: "🤖",
    color: "from-teal-500/15 to-cyan-500/10",
    lessons: [
      { slug: "ai-marketing-101", title: "AI in Marketing 101", level: "Beginner", summary: "What AI can and can't do for marketers — no hype, just honest." },
      { slug: "ai-content-writing", title: "AI for Content Writing", level: "Beginner", summary: "ChatGPT, Claude, Gemini — prompting for blog posts, ads, emails." },
      { slug: "ai-seo", title: "AI for SEO", level: "Intermediate", summary: "Keyword clustering, content briefs, internal link mapping with AI." },
      { slug: "ai-paid-ads", title: "AI for Paid Ads", level: "Intermediate", summary: "Copy generation, audience research, creative variation with AI." },
      { slug: "ai-email-marketing", title: "AI for Email Marketing", level: "Intermediate", summary: "Subject lines, personalization, send-time optimization." },
      { slug: "ai-social-media", title: "AI for Social Media", level: "Intermediate", summary: "Caption writing, scheduling, hashtag research, trend detection." },
      { slug: "ai-analytics", title: "AI for Analytics & Insights", level: "Intermediate", summary: "Ask your data questions in plain English. No SQL required." },
      { slug: "ai-image-video", title: "AI Image & Video Creation", level: "Intermediate", summary: "Midjourney, DALL-E, Sora, Runway — visuals without a studio." },
      { slug: "ai-personalization", title: "AI Personalization at Scale", level: "Advanced", summary: "Dynamic content, product recommendations, 1:1 messaging." },
      { slug: "ai-agents-marketing", title: "AI Agents for Marketing", level: "Advanced", summary: "Autonomous agents that research, draft, schedule, and report." },
      { slug: "prompt-engineering-marketers", title: "Prompt Engineering for Marketers", level: "Intermediate", summary: "The prompting patterns that make AI output actually usable." },
      { slug: "ai-ethics-brand-safety", title: "AI Ethics & Brand Safety", level: "Advanced", summary: "Hallucinations, copyright, disclosure — the guardrails you need." },
      { slug: "ai-search-ranking", title: "Ranking Inside AI Answers", level: "Advanced", summary: "How ChatGPT, Claude, Perplexity, and Gemini pick which brands to recommend." },
      { slug: "multimodal-ai", title: "Multimodal AI for Marketers", level: "Advanced", summary: "Text + image + video + audio — the next generation of AI marketing workflows." },
      { slug: "rag-for-marketers", title: "RAG for Marketers", level: "Advanced", summary: "Retrieval-Augmented Generation — feeding AI your brand voice, data, and product docs." },
      { slug: "ai-voice-content", title: "AI Voice & Audio Content", level: "Intermediate", summary: "ElevenLabs, Descript, AI dubbing — voice content without a microphone." },
      { slug: "mcp-marketing", title: "MCP & Connected AI Workflows", level: "Advanced", summary: "Model Context Protocol — connecting Claude/ChatGPT directly to your marketing stack." },
    ],
  },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getLesson(categorySlug: string, lessonSlug: string): LessonRef | undefined {
  return getCategory(categorySlug)?.lessons.find((l) => l.slug === lessonSlug);
}

export type FlatLesson = LessonRef & { categorySlug: string; categoryTitle: string };

export function flatLessons(): FlatLesson[] {
  return CATEGORIES.flatMap((c) =>
    c.lessons.map((l) => ({ ...l, categorySlug: c.slug, categoryTitle: c.title }))
  );
}

export function getLessonNav(categorySlug: string, lessonSlug: string) {
  const cat = getCategory(categorySlug);
  if (!cat) return { prev: null, next: null };
  const idx = cat.lessons.findIndex((l) => l.slug === lessonSlug);
  const prev = idx > 0 ? { categorySlug, ...cat.lessons[idx - 1] } : null;
  const next = idx < cat.lessons.length - 1 ? { categorySlug, ...cat.lessons[idx + 1] } : null;
  return { prev, next };
}

export function getCourseNav(categorySlug: string, lessonSlug: string) {
  // Linear "course mode" walks every lesson across all categories.
  const flat = flatLessons();
  const idx = flat.findIndex((l) => l.categorySlug === categorySlug && l.slug === lessonSlug);
  const prev = idx > 0 ? flat[idx - 1] : null;
  const next = idx >= 0 && idx < flat.length - 1 ? flat[idx + 1] : null;
  return { prev, next };
}
