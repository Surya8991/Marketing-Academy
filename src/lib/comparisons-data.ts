export type FeatureRow = {
  feature: string;
  toolAVal: string;
  toolBVal: string;
};

export type CustomComparison = {
  winner: string;
  winnerReason: string;
  verdict: string;
  features: FeatureRow[];
  prosA: string[];
  consA: string[];
  prosB: string[];
  consB: string[];
  pricingBreakdown: string;
  recommendedLesson: {
    title: string;
    path: string;
  };
};

export const CUSTOM_COMPARISONS: Record<string, CustomComparison> = {
  "semrush-vs-ahrefs": {
    winner: "SEMrush (for all-in-one search marketing)",
    winnerReason: "SEMrush is the superior choice for comprehensive digital campaigns because it includes extensive PPC tools, local SEO tracking, and content audits alongside its core organic search tools.",
    verdict: "Ahrefs remains the gold standard for backlink analysis and technical site audits due to its speed and data crawling accuracy. However, SEMrush is a better all-in-one suite. If your focus is purely link building and organic rank tracking, go with Ahrefs. If you need PPC research, social tools, and content optimization, choose SEMrush.",
    features: [
      { feature: "Backlink Index Quality", toolAVal: "Excellent (Very fast crawling, historically the best)", toolBVal: "Outstanding (Fast updates, massive historic index)" },
      { feature: "Keyword Research & Data", toolAVal: "Best-in-class (Massive search volume database)", toolBVal: "Excellent (High accuracy, lists click metrics)" },
      { feature: "PPC & Paid Ad Auditing", toolAVal: "Strong (Detailed competitor ad budgets & history)", toolBVal: "Basic (Lists PPC keywords but fewer visual insights)" },
      { feature: "Technical Site Audits", toolAVal: "Excellent (Includes detailed alerts and solutions)", toolBVal: "Outstanding (Highly configurable desktop/cloud crawler)" },
    ],
    prosA: [
      "Superior competitor ad history and PPC analysis.",
      "Vast keyword database with highly accurate search volumes.",
      "Excellent local SEO listings management tools.",
    ],
    consA: [
      "User interface has high density and can feel overwhelming.",
      "Pricing plans restrict user seats heavily.",
    ],
    prosB: [
      "Industry-standard backlink checker interface.",
      "Unique click metric metrics show searchers who don't click ads.",
      "Configurable Site Explorer interface is cleaner than SEMrush.",
    ],
    consB: [
      "No historical PPC ad creative copies.",
      "Credits system on newer plans restricts usage volume.",
    ],
    pricingBreakdown: "Both start around $120-$130/month for entry-level tiers. SEMrush limits user seats more strictly on basic plans, whereas Ahrefs uses a credit system for crawls that can exhaust limits quickly if you audit large sites regularly.",
    recommendedLesson: {
      title: "SEO Keyword Research",
      path: "/learn/seo/keyword-research",
    },
  },
  "mailchimp-vs-klaviyo": {
    winner: "Klaviyo (for E-commerce)",
    winnerReason: "Klaviyo integrates natively with Shopify and other store systems, pulling actual purchase events, cart status, and historical LTV. This makes creating hyper-personalized revenue flows much easier.",
    verdict: "Mailchimp is an excellent, user-friendly general-purpose newsletter sender ideal for content creators, B2B services, and small businesses who need standard broadcasting. Klaviyo, on the other hand, is a specialized database built from the ground up for e-commerce stores that require automated flows driven by buying behavior.",
    features: [
      { feature: "Shopify & Store Integration", toolAVal: "Basic (Requires third-party connectors for advanced data)", toolBVal: "Native & Deep (Pulls cart value, product codes, LTV)" },
      { feature: "Automation Triggers", toolAVal: "Standard (Time-based drips and basic behavioral clicks)", toolBVal: "Advanced (Flows triggered by item views, cart value, SMS splits)" },
      { feature: "Visual Email Builder", toolAVal: "Outstanding (Extremely clean, drag-and-drop editor)", toolBVal: "Good (Functional, but focused on data blocks over graphics)" },
      { feature: "SMS Marketing Integration", toolAVal: "Basic (Offered as add-on, limited coverage)", toolBVal: "Native (Unified email + SMS automation splits)" },
    ],
    prosA: [
      "Very easy to set up and start sending within minutes.",
      "Great templates and creative assistant for visuals.",
      "Better pricing for general content newsletters.",
    ],
    consA: [
      "Difficult to build complex behavioral logic chains.",
      "E-commerce attribution reports are not as precise as Klaviyo.",
    ],
    prosB: [
      "Behavioral segmentation is unmatched in e-commerce.",
      "Pre-built automation triggers (cart, checkout, browse) recover 20%+ lost revenue.",
      "Unified attribution reports show actual store sales driven by flows.",
    ],
    consB: [
      "Significantly higher cost as your subscriber list grows.",
      "Interface has a steeper learning curve for beginners.",
    ],
    pricingBreakdown: "Mailchimp offers a free plan and affordable starter tiers. Klaviyo is much more expensive at scale, but ecommerce brands usually justify the cost by the attribution revenue generated by automated checkout flows.",
    recommendedLesson: {
      title: "Abandoned Cart & Browse Flows",
      path: "/learn/email/abandon-cart",
    },
  },
  "google-analytics-4-vs-mixpanel": {
    winner: "Google Analytics 4 (for Web Traffic), Mixpanel (for Product Analytics)",
    winnerReason: "They serve different purposes. GA4 tracks who visits your site and how they got there. Mixpanel tracks exactly what logged-in users do inside your product or application.",
    verdict: "Do not choose between them—use them together. Use GA4 to measure marketing campaign performance, UTM traffic channels, and overall SEO page views. Use Mixpanel to build retention charts, user cohort funnels, and feature usage maps.",
    features: [
      { feature: "Traffic Source Attribution", toolAVal: "Outstanding (Standard Google Ads & marketing integration)", toolBVal: "Basic (Requires manual UTM mapping, not built for search auditing)" },
      { feature: "User Journey Funnels", toolAVal: "Difficult (Rigid structure, slow reporting updates)", toolBVal: "Outstanding (Instant, drag-and-drop funnel builds)" },
      { feature: "Cohort & Retention Analysis", toolAVal: "Limited (Basic templates only)", toolBVal: "Best-in-class (Detailed retention grids and recurring behavior)" },
      { feature: "Data Ownership & Export", toolAVal: "Google Cloud (Free BigQuery export on daily limits)", toolBVal: "Excellent (Robust API integrations with data platforms)" },
    ],
    prosA: [
      "Completely free to use for almost all website sizes.",
      "Integrates natively with Google Search Console and Google Ads.",
      "The global standard for auditing SEO traffic.",
    ],
    consA: [
      "Interface is complex and confusing for beginners.",
      "Data latency takes up to 24-48 hours to fully populate.",
    ],
    prosB: [
      "Real-time event tracking with zero data latency.",
      "Funnels and cohort charts update instantly.",
      "Intuitive UI that non-technical product managers can use easily.",
    ],
    consB: [
      "Requires developer setup to define custom track events.",
      "Pricing scales up quickly based on Monthly Tracked Users (MTUs).",
    ],
    pricingBreakdown: "GA4 is free. Mixpanel offers a generous free tier (up to 20M events/month), after which paid plans start around $20/month but scale up as monthly tracked users increase.",
    recommendedLesson: {
      title: "Attribution Models",
      path: "/learn/analytics/attribution-models",
    },
  },
  "chatgpt-vs-claude": {
    winner: "Claude (for Marketing Writing), ChatGPT (for Coding & Web Browsing)",
    winnerReason: "Anthropic's Claude models generate much more natural, varied, and human-like copy than OpenAI's default ChatGPT models, which often overuse jargon and repetitive sentence structures.",
    verdict: "For content drafts, email copy, and translation, Claude is the industry leader due to its superior writing tone. For data analysis, web research, custom scripting, and multimodal image creation, ChatGPT's feature set and tool integrations make it the superior choice.",
    features: [
      { feature: "Creative Writing Tone", toolAVal: "Good (Clean but often generic, repetitive patterns)", toolBVal: "Outstanding (Rich vocabulary, reads like a human writer)" },
      { feature: "Coding & Technical Tasks", toolAVal: "Outstanding (Fast, highly accurate interpreter)", toolBVal: "Excellent (Strong logic, but lacks built-in environment runtime)" },
      { feature: "Web Browsing & Research", toolAVal: "Native & Fast (Integrated Bing Search)", toolBVal: "Lacks Native Web Search (Depends on tool integration)" },
      { feature: "Context Window Capacity", toolAVal: "Standard (Good for typical prompts)", toolBVal: "Massive (Can process entire books or codebase files)" },
    ],
    prosA: [
      "Includes DALL-E 3 for generating marketing visuals.",
      "Built-in advanced data analysis (runs Python code in sandbox).",
      "Very fast response speeds on GPT-4o.",
    ],
    consA: [
      "Text outputs require heavy editing to sound natural.",
      "Web browsing can occasionally reference poor quality blog pages.",
    ],
    prosB: [
      "Unmatched reading and summarization accuracy for long documents.",
      "Artifacts UI displays side-by-side code/content blocks cleanly.",
      "Writing voice is friendly, professional, and less artificial.",
    ],
    consB: [
      "No native image generation features.",
      "Lacks direct plugin/live execution tools inside standard chat.",
    ],
    pricingBreakdown: "Both offer free models with rate limits. Paid tiers for both are priced at $20/month, providing access to their highest-tier models (GPT-4o vs. Claude 3.5 Sonnet).",
    recommendedLesson: {
      title: "Prompt Engineering for Marketers",
      path: "/learn/ai-marketing/prompt-engineering-marketers",
    },
  },
  "buffer-vs-hootsuite": {
    winner: "Buffer (for small teams & creators), Hootsuite (for enterprise social hubs)",
    winnerReason: "Buffer's pricing structure is per-channel, making it highly affordable for small businesses. Hootsuite's high entry price makes it only suitable for large corporations needing social listening.",
    verdict: "Buffer is a simple, modern social scheduler with a clean grid planner and affordable pricing. Hootsuite is an all-in-one social suite that handles not only scheduling, but customer service ticketing, brand mention alerts, and multi-team approvals.",
    features: [
      { feature: "Scheduling Interface", toolAVal: "Clean & Simple (Calendar grid layout)", toolBVal: "Streams Dashboard (Multi-column stream overview)" },
      { feature: "Social Listening", toolAVal: "Basic (No mention alerts across public forums)", toolBVal: "Advanced (Track keywords, brands, and competitors)" },
      { feature: "Pricing for Small Teams", toolAVal: "Very Affordable (Pay only for channels you connect)", toolBVal: "Expensive (High monthly entry cost, limits seats)" },
      { feature: "Team Approvals Flow", toolAVal: "Standard (Basic approve/reject flow)", toolBVal: "Enterprise (Detailed role access and compliance checks)" },
    ],
    prosA: [
      "Very clean, distraction-free queue interface.",
      "Pay-per-channel billing is budget friendly.",
      "Includes a simple landing page builder.",
    ],
    consA: [
      "Lacks brand monitoring/listening capabilities.",
      "Inbox tool for replying to comments is basic.",
    ],
    prosB: [
      "Track brand mentions across the web in real-time.",
      "Excellent reporting templates for executive slides.",
      "Robust inbox tool for social customer service teams.",
    ],
    consB: [
      "Extremely expensive entry price point.",
      "Interface is cluttered and takes time to master.",
    ],
    pricingBreakdown: "Buffer has a free tier and starts paid plans at $6/month per channel. Hootsuite has no free plan and starts paid tiers at $99/month, making it unsuitable for freelancers.",
    recommendedLesson: {
      title: "Social Media Strategy",
      path: "/learn/social/social-media-strategy",
    },
  },
  "optimizely-vs-vwo": {
    winner: "VWO (for Mid-Market / Fast Setup), Optimizely (for Enterprise Scale)",
    winnerReason: "VWO offers a complete testing suite (A/B testing, heatmaps, session recordings) that is easier to deploy via a single script. Optimizely is built for high-performance server-side SDK flags in large codebases.",
    verdict: "If you want to quickly run visual A/B tests on landing pages, analyze visitor behavior heatmaps, and operate with a mid-market budget, VWO is excellent. If you are a large enterprise engineering team that wants to run server-side tests behind SDK flags to minimize page flicker, Optimizely is the industry gold standard.",
    features: [
      { feature: "Visual Editor Experience", toolAVal: "Good (Standard WYSIWYG editor)", toolBVal: "Outstanding (Clean visual editor, handles dynamic SPA pages)" },
      { feature: "Server-Side Testing (SDKs)", toolAVal: "Best-in-class (Lightning fast SDKs in Node, Go, React)", toolBVal: "Strong (Supports server-side tests but historically client-first)" },
      { feature: "Integrated Behavior Analytics", toolAVal: "No (Requires Hotjar or Mixpanel integration)", toolBVal: "Yes (Built-in heatmaps, session recordings, surveys)" },
      { feature: "Pricing Transparency", toolAVal: "Custom Only (Requires sales call, high contract minimums)", toolBVal: "Clear Tiers (Starter packages listed online)" },
    ],
    prosA: [
      "Zero page flicker when using server-side SDKs.",
      "Robust feature flag controls for safe rollouts.",
      "Excellent multivariate testing statistics engines.",
    ],
    consA: [
      "Prohibitively expensive contract minimums.",
      "Requires significant developer resources to integrate.",
    ],
    prosB: [
      "Includes heatmaps and records in a single script install.",
      "Fast, visual editor does not require developer code edits.",
      "Offers free starter plans for low-volume testing.",
    ],
    consB: [
      "Client-side scripts can cause layout shifts if not configured correctly.",
      "Advanced enterprise reporting is limited compared to Optimizely.",
    ],
    pricingBreakdown: "VWO offers free starter tiers and listed monthly plans. Optimizely requires annual contracts, typically starting in the tens of thousands of dollars, making it strictly enterprise-only.",
    recommendedLesson: {
      title: "A/B Testing Frameworks",
      path: "/learn/cro/ab-testing",
    },
  },
  "wordpress-vs-ghost": {
    winner: "Ghost (for Newsletters & Blogs), WordPress (for Complex Web Portals)",
    winnerReason: "Ghost is built purely for publishers—it includes membership management, newsletter dispatch, and subscription payments natively. WordPress is a massive ecosystem that can build anything, but requires complex plugin stacks.",
    verdict: "For content websites, clean blogs, and membership newsletters, Ghost is superior because it is fast, secure, and has zero plugin maintenance. For e-commerce stores (WooCommerce), custom directory databases, and highly stylized corporate sites, WordPress's vast theme and plugin library is required.",
    features: [
      { feature: "Ecosystem & Plugins", toolAVal: "Infinite (50,000+ plugins, can build anything)", toolBVal: "Minimalist (Built-in features first, integration webhooks)" },
      { feature: "Newsletter & Membership", toolAVal: "Needs Plugins (Requires Mailchimp, member plugins)", toolBVal: "Native & Free (Built-in subscriber lists and payments)" },
      { feature: "Page Speed & SEO", toolAVal: "Depends (Requires caching and speed optimization)", toolBVal: "Outstanding (Clean code, lightning fast out of the box)" },
      { feature: "Maintenance & Security", toolAVal: "High (Requires regular updates to core and plugins)", toolBVal: "Very Low (Core platform is secure, hosted is auto-updated)" },
    ],
    prosA: [
      "Total control over every detail of the database and code.",
      "Vast community support and endless plugins.",
      "WooCommerce turns any blog into a shopping cart.",
    ],
    consA: [
      "Plugins frequently clash, break pages, or create security leaks.",
      "Page load speeds can lag without optimization setup.",
    ],
    prosB: [
      "Extremely clean, clutter-free markdown writing editor.",
      "No plugins required for SEO, newsletters, or membership fees.",
      "Lightning-fast server response speeds.",
    ],
    consB: [
      "Cannot build complex non-publishing websites (e-commerce, forums).",
      "Very few themes compared to WordPress.",
    ],
    pricingBreakdown: "Both offer open-source code that is free to self-host. For managed hosting, WordPress starts around $5/month, while managed Ghost hosting starts at $9/month.",
    recommendedLesson: {
      title: "Content Marketing Hubs",
      path: "/learn/content/content-hubs",
    },
  },
};
