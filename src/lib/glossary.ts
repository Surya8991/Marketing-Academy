export type GlossaryTerm = {
  term: string;
  slug: string;
  definition: string;
  category: string;
  relatedTerms: string[];
};

export const GLOSSARY_TERMS: GlossaryTerm[] = [
  // Analytics
  {
    term: "A/B Test",
    slug: "ab-test",
    definition:
      "An experiment where two versions of a page, email, or ad are shown to different user groups to determine which performs better. The variant that wins is statistically significant, meaning the result is unlikely to be due to chance. Also called split testing.",
    category: "Analytics",
    relatedTerms: ["conversion-rate", "statistical-significance", "multivariate-test", "cro"],
  },
  {
    term: "Attribution",
    slug: "attribution",
    definition:
      "The process of assigning credit to marketing channels or touchpoints that contributed to a conversion. Common models include first-touch, last-touch, linear, and data-driven. No attribution model is perfectly accurate.",
    category: "Analytics",
    relatedTerms: ["multi-touch", "utm", "mmm", "conversion-rate"],
  },
  {
    term: "Bounce Rate",
    slug: "bounce-rate",
    definition:
      "The percentage of visitors who leave a page without taking any action or visiting another page. A high bounce rate can signal a mismatch between the ad or search result that brought someone in and the content they found. In GA4, bounce rate is the inverse of engagement rate.",
    category: "Analytics",
    relatedTerms: ["session", "engagement-rate", "cro", "landing-page"],
  },
  {
    term: "Cohort",
    slug: "cohort",
    definition:
      "A group of users who share a common characteristic during a specific time period, such as everyone who signed up in January. Cohort analysis tracks how different groups behave over time, revealing whether your product is getting better or worse at retention.",
    category: "Analytics",
    relatedTerms: ["retention", "churn", "ltv", "dau"],
  },
  {
    term: "Conversion Rate",
    slug: "conversion-rate",
    definition:
      "The percentage of visitors or users who complete a desired action, such as a purchase, sign-up, or download. Calculated as conversions divided by total visitors times 100. Improving conversion rate is often cheaper than buying more traffic.",
    category: "Analytics",
    relatedTerms: ["cro", "ab-test", "cac", "landing-page"],
  },
  {
    term: "DAU",
    slug: "dau",
    definition:
      "Daily Active Users - the number of unique users who engage with a product on a given day. Often used alongside MAU to calculate the DAU/MAU ratio, which measures how sticky a product is. A ratio above 20% is generally considered strong.",
    category: "Analytics",
    relatedTerms: ["mau", "retention", "engagement-rate", "cohort"],
  },
  {
    term: "Engagement Rate",
    slug: "engagement-rate",
    definition:
      "A measure of how actively users interact with content, calculated differently by platform. On social media, it typically divides total interactions by total reach or followers. In GA4, engagement rate is the percentage of sessions that lasted over 10 seconds or had a conversion event.",
    category: "Analytics",
    relatedTerms: ["reach", "impressions", "dau", "social-proof"],
  },
  {
    term: "Funnel",
    slug: "funnel",
    definition:
      "A model that maps the stages a prospect moves through on the way to becoming a customer, typically from awareness to consideration to decision. The funnel gets narrower at each stage because some people drop off. Funnel analytics reveals where you lose the most people.",
    category: "Analytics",
    relatedTerms: ["aarrr", "conversion-rate", "cac", "activation"],
  },
  {
    term: "MAU",
    slug: "mau",
    definition:
      "Monthly Active Users - the number of unique users who engage with a product at least once in a calendar month. A standard benchmark for measuring an app or platform's scale and health. Meaningful only when paired with retention data.",
    category: "Analytics",
    relatedTerms: ["dau", "retention", "churn", "cohort"],
  },
  {
    term: "MoM",
    slug: "mom",
    definition:
      "Month-over-Month - a period comparison that shows how a metric changed from one month to the next. Used for short-term trend analysis. MoM growth compounds into YoY growth: 6% MoM growth equals roughly 100% YoY growth.",
    category: "Analytics",
    relatedTerms: ["yoy", "arr", "mrr", "north-star-metric"],
  },
  {
    term: "Multi-Touch Attribution",
    slug: "multi-touch",
    definition:
      "An attribution approach that assigns credit to multiple touchpoints in a customer journey instead of giving all credit to one interaction. Common models include linear (equal credit) and time-decay (more credit to recent touches). More realistic than single-touch but still imperfect.",
    category: "Analytics",
    relatedTerms: ["attribution", "utm", "mmm", "cac"],
  },
  {
    term: "North Star Metric",
    slug: "north-star-metric",
    definition:
      "The single metric that best captures the core value a product delivers to customers. For Spotify it is time spent listening; for Airbnb it is nights booked. The North Star aligns teams around the metric most predictive of long-term growth.",
    category: "Analytics",
    relatedTerms: ["kpi", "funnel", "activation", "retention"],
  },
  {
    term: "Retention",
    slug: "retention",
    definition:
      "The percentage of users or customers who continue using a product or service over a given period. Retention is the single best predictor of long-term growth. Improving retention is almost always more efficient than increasing acquisition spend.",
    category: "Analytics",
    relatedTerms: ["churn", "cohort", "ltv", "dau"],
  },
  {
    term: "Session",
    slug: "session",
    definition:
      "A group of interactions a single user takes within a defined time window on a website or app. In GA4, a session ends after 30 minutes of inactivity. Sessions are a proxy for visit quality but can be misleading on their own.",
    category: "Analytics",
    relatedTerms: ["bounce-rate", "conversion-rate", "utm", "engagement-rate"],
  },
  {
    term: "UTM",
    slug: "utm",
    definition:
      "Urchin Tracking Module - five URL parameters (source, medium, campaign, term, content) appended to links to track where traffic comes from in analytics tools. Without UTM tags, much of your referral traffic appears as 'direct' in GA4.",
    category: "Analytics",
    relatedTerms: ["attribution", "session", "conversion-tracking", "dark-social"],
  },
  {
    term: "YoY",
    slug: "yoy",
    definition:
      "Year-over-Year - a comparison of a metric against the same period in the prior year. YoY removes seasonal noise and gives a cleaner picture of underlying growth than MoM. Commonly used in board and investor reporting.",
    category: "Analytics",
    relatedTerms: ["mom", "arr", "mrr", "kpi"],
  },

  // Paid Ads
  {
    term: "Ad Rank",
    slug: "ad-rank",
    definition:
      "Google's formula that determines the position of a search ad. It factors in your bid, quality score, expected impact of ad extensions, and the context of the search. A high quality score can let a lower bid outrank a higher one.",
    category: "Paid Ads",
    relatedTerms: ["quality-score", "cpc", "ctr", "bidding-strategy"],
  },
  {
    term: "CPC",
    slug: "cpc",
    definition:
      "Cost Per Click - the amount an advertiser pays each time someone clicks their ad. Calculated as total ad spend divided by total clicks. CPC varies by industry, competition, and platform. Google Search CPCs for competitive keywords can exceed $50.",
    category: "Paid Ads",
    relatedTerms: ["cpm", "ctr", "roas", "quality-score"],
  },
  {
    term: "CPM",
    slug: "cpm",
    definition:
      "Cost Per Mille (thousand impressions) - the price paid for every 1,000 times an ad is displayed, regardless of clicks. CPM is the standard pricing model for brand awareness campaigns on display and video channels.",
    category: "Paid Ads",
    relatedTerms: ["cpc", "impressions", "reach", "roas"],
  },
  {
    term: "CTR",
    slug: "ctr",
    definition:
      "Click-Through Rate - the percentage of people who see an ad or link and click on it. Calculated as clicks divided by impressions. A high CTR signals relevance. Google Search CTR benchmarks vary widely by position: position 1 averages roughly 28%.",
    category: "Paid Ads",
    relatedTerms: ["cpc", "impressions", "quality-score", "ad-rank"],
  },
  {
    term: "Impressions",
    slug: "impressions",
    definition:
      "The number of times an ad or piece of content is displayed, regardless of whether anyone clicked it. Unlike reach, impressions count multiple views by the same person. High impressions with low CTR suggest a creative or targeting problem.",
    category: "Paid Ads",
    relatedTerms: ["reach", "ctr", "cpm", "share-of-voice"],
  },
  {
    term: "Lookalike Audience",
    slug: "lookalike-audience",
    definition:
      "A targeting option on platforms like Meta and TikTok that finds users who share characteristics with your existing customers or email list. Lookalike audiences expand your reach while maintaining relevance. Quality depends entirely on the seed audience.",
    category: "Paid Ads",
    relatedTerms: ["remarketing", "icp", "cac", "roas"],
  },
  {
    term: "Negative Keywords",
    slug: "negative-keywords",
    definition:
      "Search terms added to a Google Ads campaign to prevent ads from showing for irrelevant queries. For example, a premium software company might add 'free' as a negative keyword. Properly managed negatives can reduce wasted spend by 20-30%.",
    category: "Paid Ads",
    relatedTerms: ["quality-score", "cpc", "ad-rank", "roas"],
  },
  {
    term: "Quality Score",
    slug: "quality-score",
    definition:
      "Google Ads metric rated 1 to 10 that estimates how relevant your ads, keywords, and landing pages are to the user. A higher quality score lowers your cost per click and improves ad rank. The three components are expected CTR, ad relevance, and landing page experience.",
    category: "Paid Ads",
    relatedTerms: ["ad-rank", "cpc", "ctr", "landing-page"],
  },
  {
    term: "Reach",
    slug: "reach",
    definition:
      "The number of unique people who see a piece of content or ad within a given period. Unlike impressions, reach counts each person only once. Reach is a measure of how wide your message spread; frequency measures how many times each person saw it.",
    category: "Paid Ads",
    relatedTerms: ["impressions", "cpm", "share-of-voice", "engagement-rate"],
  },
  {
    term: "Remarketing",
    slug: "remarketing",
    definition:
      "Showing ads to people who have previously visited your website or interacted with your brand. Also called retargeting. Remarketing audiences convert at 2-10x the rate of cold audiences because they already have intent or awareness.",
    category: "Paid Ads",
    relatedTerms: ["lookalike-audience", "cpc", "roas", "attribution"],
  },
  {
    term: "ROAS",
    slug: "roas",
    definition:
      "Return on Ad Spend - revenue generated divided by ad spend. A ROAS of 4x means you earned $4 in revenue for every $1 spent on ads. ROAS does not equal profit: a 4x ROAS can still lose money if margins are thin or CAC payback is too long.",
    category: "Paid Ads",
    relatedTerms: ["cac", "ltv", "cpc", "cpm"],
  },

  // SEO
  {
    term: "Anchor Text",
    slug: "anchor-text",
    definition:
      "The clickable, visible text of a hyperlink. Descriptive anchor text like 'marketing automation guide' signals to search engines what the linked page is about. Over-optimized exact-match anchors can trigger Google penalties.",
    category: "SEO",
    relatedTerms: ["backlink", "domain-authority", "serp", "internal-linking"],
  },
  {
    term: "Backlink",
    slug: "backlink",
    definition:
      "A link from another website pointing to your website. Backlinks are a primary ranking signal for Google because they represent an editorial vote of confidence. Quality matters far more than quantity: one link from a top publication outweighs hundreds from low-authority sites.",
    category: "SEO",
    relatedTerms: ["domain-authority", "anchor-text", "serp", "share-of-voice"],
  },
  {
    term: "Core Web Vitals",
    slug: "core-web-vitals",
    definition:
      "Google's set of page experience metrics used as a ranking signal: Largest Contentful Paint (LCP) measures load speed, Interaction to Next Paint (INP) measures responsiveness, and Cumulative Layout Shift (CLS) measures visual stability. Failing these thresholds can hurt search rankings.",
    category: "SEO",
    relatedTerms: ["serp", "domain-authority", "backlink", "cro"],
  },
  {
    term: "Domain Authority",
    slug: "domain-authority",
    definition:
      "A third-party metric (created by Moz, also called DR by Ahrefs) that predicts how well a domain will rank in search results, scored 0 to 100. It is not a Google metric but correlates with ranking ability. Built primarily through earning high-quality backlinks.",
    category: "SEO",
    relatedTerms: ["backlink", "anchor-text", "serp", "featured-snippet"],
  },
  {
    term: "Featured Snippet",
    slug: "featured-snippet",
    definition:
      "A highlighted box at the top of Google search results that displays a direct answer to the query, pulled from a webpage. Also called position zero. Winning a featured snippet can dramatically increase CTR and brand authority, even if you already rank on page one.",
    category: "SEO",
    relatedTerms: ["serp", "domain-authority", "zero-click", "backlink"],
  },
  {
    term: "SERP",
    slug: "serp",
    definition:
      "Search Engine Results Page - the page displayed when someone submits a query to a search engine. Modern SERPs include organic results, paid ads, featured snippets, local packs, image carousels, and AI Overviews, meaning organic links now compete with many more elements.",
    category: "SEO",
    relatedTerms: ["featured-snippet", "domain-authority", "ctr", "zero-click"],
  },

  // Email
  {
    term: "Click Rate",
    slug: "click-rate",
    definition:
      "The percentage of email recipients who click a link in an email, calculated as clicks divided by emails delivered. Industry average click rates are typically 2-5%. Also called click-through rate (CTR) in email contexts, though click-to-open rate (CTOR) is a more useful engagement metric.",
    category: "Email",
    relatedTerms: ["open-rate", "deliverability", "segmentation", "drip-campaign"],
  },
  {
    term: "Deliverability",
    slug: "deliverability",
    definition:
      "The ability of an email to reach the recipient's inbox rather than spam or promotions folders. Determined by sender reputation, authentication (SPF, DKIM, DMARC), list hygiene, and engagement rates. Poor deliverability is the silent killer of email programs.",
    category: "Email",
    relatedTerms: ["open-rate", "click-rate", "segmentation", "drip-campaign"],
  },
  {
    term: "Drip Campaign",
    slug: "drip-campaign",
    definition:
      "A series of pre-written emails sent automatically on a schedule or triggered by user actions, designed to nurture prospects over time. Drip campaigns deliver the right content at each stage of the buyer journey. Also called email sequences or nurture flows.",
    category: "Email",
    relatedTerms: ["welcome-series", "segmentation", "open-rate", "click-rate"],
  },
  {
    term: "Open Rate",
    slug: "open-rate",
    definition:
      "The percentage of delivered emails that are opened by recipients. Since Apple Mail Privacy Protection (2021), open rates are partially inflated by machine-level tracking. Use click rate and revenue per email as more reliable engagement signals.",
    category: "Email",
    relatedTerms: ["click-rate", "deliverability", "segmentation", "drip-campaign"],
  },
  {
    term: "Segmentation",
    slug: "segmentation",
    definition:
      "Dividing an audience into smaller groups based on shared characteristics such as behavior, demographics, purchase history, or engagement level. Segmented email campaigns generate 30-760% more revenue than unsegmented broadcasts, according to DMA research.",
    category: "Email",
    relatedTerms: ["personalization", "drip-campaign", "open-rate", "deliverability"],
  },
  {
    term: "Welcome Series",
    slug: "welcome-series",
    definition:
      "A sequence of automated emails sent to new subscribers or customers immediately after they join your list. Welcome emails have 4x the open rate and 5x the CTR of standard newsletters. They set expectations and are the highest-leverage emails in any email program.",
    category: "Email",
    relatedTerms: ["drip-campaign", "open-rate", "segmentation", "activation"],
  },

  // Growth
  {
    term: "AARRR",
    slug: "aarrr",
    definition:
      "A framework by Dave McClure that breaks growth into five stages: Acquisition, Activation, Retention, Referral, and Revenue. Also called Pirate Metrics. Useful for diagnosing where a growth problem actually lives in the funnel.",
    category: "Growth",
    relatedTerms: ["funnel", "activation", "retention", "viral-coefficient"],
  },
  {
    term: "Activation",
    slug: "activation",
    definition:
      "The moment a new user first experiences the core value of a product, often called the 'aha moment.' For Dropbox it was uploading a first file; for Twitter it was following 30 accounts. Improving activation rate is usually the highest-leverage growth lever for early-stage products.",
    category: "Growth",
    relatedTerms: ["aarrr", "retention", "funnel", "north-star-metric"],
  },
  {
    term: "CAC",
    slug: "cac",
    definition:
      "Customer Acquisition Cost - the total cost to acquire one new customer, including all sales and marketing spend. Calculated as total acquisition spend divided by new customers in a period. CAC must be significantly lower than LTV for a business to be profitable.",
    category: "Growth",
    relatedTerms: ["ltv", "roas", "cpc", "payback-period"],
  },
  {
    term: "Churn",
    slug: "churn",
    definition:
      "The percentage of customers or subscribers who stop using a product within a given period. Monthly churn of 5% means you lose 46% of your customer base annually. Churn is the primary ceiling on growth: if your bucket leaks fast enough, more acquisition cannot save you.",
    category: "Growth",
    relatedTerms: ["retention", "ltv", "cohort", "mau"],
  },
  {
    term: "K-factor",
    slug: "k-factor",
    definition:
      "A measure of viral growth, calculated as the number of invitations sent by each user multiplied by the conversion rate of those invitations. A K-factor above 1 means the product grows on its own. Most consumer products have K-factors well below 1.",
    category: "Growth",
    relatedTerms: ["viral-coefficient", "referral-program", "plg", "aarrr"],
  },
  {
    term: "LTV",
    slug: "ltv",
    definition:
      "Lifetime Value (also CLV or Customer Lifetime Value) - the total revenue a business can expect from a single customer throughout the entire relationship. The LTV/CAC ratio is one of the most important unit economics metrics in growth. A ratio of 3:1 or higher is generally healthy.",
    category: "Growth",
    relatedTerms: ["cac", "churn", "mrr", "payback-period"],
  },
  {
    term: "PLG",
    slug: "plg",
    definition:
      "Product-Led Growth - a go-to-market strategy where the product itself is the primary driver of acquisition, conversion, and expansion. Users experience value before talking to sales. Slack, Figma, and Notion are canonical examples. Opposite of Sales-Led Growth.",
    category: "Growth",
    relatedTerms: ["viral-coefficient", "activation", "freemium", "cac"],
  },
  {
    term: "Viral Coefficient",
    slug: "viral-coefficient",
    definition:
      "The average number of new users each existing user generates. Mathematically the same as K-factor. A viral coefficient of 0.5 means every two users bring in one more. True virality (above 1.0) is extremely rare and usually short-lived.",
    category: "Growth",
    relatedTerms: ["k-factor", "referral-program", "plg", "aarrr"],
  },

  // Business Metrics
  {
    term: "ARR",
    slug: "arr",
    definition:
      "Annual Recurring Revenue - the annualized value of all active subscription contracts, excluding one-time fees. ARR is the primary valuation metric for SaaS businesses. ARR = MRR x 12. Investors often use ARR multiples to value growth-stage companies.",
    category: "Business Metrics",
    relatedTerms: ["mrr", "ltv", "churn", "gmv"],
  },
  {
    term: "GMV",
    slug: "gmv",
    definition:
      "Gross Merchandise Value - the total value of goods sold through a marketplace or platform over a period, before subtracting platform fees or returns. GMV is a top-line scale metric for marketplaces like Amazon, Etsy, or Shopify. It is not the same as revenue.",
    category: "Business Metrics",
    relatedTerms: ["arr", "mrr", "ltv", "roas"],
  },
  {
    term: "MRR",
    slug: "mrr",
    definition:
      "Monthly Recurring Revenue - the predictable subscription revenue a company collects each month. MRR is broken into new MRR, expansion MRR, contraction MRR, and churned MRR. Net MRR growth is the pulse of a subscription business.",
    category: "Business Metrics",
    relatedTerms: ["arr", "churn", "ltv", "cac"],
  },
  {
    term: "NPS",
    slug: "nps",
    definition:
      "Net Promoter Score - a loyalty metric based on one question: how likely are you to recommend this product on a scale of 0 to 10? Respondents scoring 9-10 are promoters; 0-6 are detractors. NPS = % promoters minus % detractors. Scores above 50 are considered excellent.",
    category: "Business Metrics",
    relatedTerms: ["retention", "churn", "ltv", "social-proof"],
  },
  {
    term: "Payback Period",
    slug: "payback-period",
    definition:
      "The number of months it takes to recoup the cost of acquiring a customer from the gross margin that customer generates. A payback period under 12 months is healthy for most SaaS businesses. Long payback periods require more working capital and create cash flow risk.",
    category: "Business Metrics",
    relatedTerms: ["cac", "ltv", "mrr", "roas"],
  },
  {
    term: "SAM",
    slug: "sam",
    definition:
      "Serviceable Addressable Market - the portion of TAM that your product can realistically target given its current features, channels, and geography. SAM is a more honest number than TAM and the one serious investors scrutinize when evaluating market size claims.",
    category: "Business Metrics",
    relatedTerms: ["tam", "som", "icp", "value-proposition"],
  },
  {
    term: "SOM",
    slug: "som",
    definition:
      "Serviceable Obtainable Market - the share of SAM your company can realistically capture in the near term, given competition, sales capacity, and go-to-market constraints. SOM is the credible near-term revenue ceiling founders pitch to early investors.",
    category: "Business Metrics",
    relatedTerms: ["sam", "tam", "icp", "cac"],
  },
  {
    term: "TAM",
    slug: "tam",
    definition:
      "Total Addressable Market - the maximum revenue opportunity available if a product captured 100% of its target market. TAM is often used in pitch decks and is frequently overstated. Always pair with SAM and SOM for a credible market size story.",
    category: "Business Metrics",
    relatedTerms: ["sam", "som", "icp", "positioning"],
  },

  // Strategy
  {
    term: "Brand Equity",
    slug: "brand-equity",
    definition:
      "The commercial value derived from consumer perception of a brand name rather than the product itself. Brand equity allows companies to charge premium prices, launch new products more easily, and weather crises better. It is built slowly through consistent messaging and memorable experiences.",
    category: "Strategy",
    relatedTerms: ["positioning", "value-proposition", "share-of-voice", "social-proof"],
  },
  {
    term: "ICP",
    slug: "icp",
    definition:
      "Ideal Customer Profile - a detailed description of the company or person most likely to buy your product, get maximum value from it, and stay a customer. ICP is about fit, not demographics. Getting ICP wrong is the most common reason marketing spend underperforms.",
    category: "Strategy",
    relatedTerms: ["tam", "positioning", "cac", "segmentation"],
  },
  {
    term: "Positioning",
    slug: "positioning",
    definition:
      "The deliberate choice of how your brand or product occupies a distinct place in the mind of the customer relative to alternatives. Positioning is about the frame of reference you compete in and the differentiated value you claim. April Dunford's 'Obviously Awesome' is the canonical modern reference.",
    category: "Strategy",
    relatedTerms: ["value-proposition", "icp", "brand-equity", "share-of-voice"],
  },
  {
    term: "Share of Voice",
    slug: "share-of-voice",
    definition:
      "The percentage of total advertising or marketing activity in a category that belongs to your brand, relative to competitors. Research by Binet and Field shows that excess share of voice (your SOV minus your market share) is one of the strongest predictors of market share growth.",
    category: "Strategy",
    relatedTerms: ["brand-equity", "impressions", "reach", "positioning"],
  },
  {
    term: "Value Proposition",
    slug: "value-proposition",
    definition:
      "A clear statement of the benefit a product delivers, who it is for, and why it is better than alternatives. A good value proposition is specific, measurable, and customer-centric. It answers: 'Why should I buy from you instead of anyone else?'",
    category: "Strategy",
    relatedTerms: ["positioning", "icp", "brand-equity", "cta"],
  },

  // CRO
  {
    term: "Above the Fold",
    slug: "above-the-fold",
    definition:
      "The portion of a webpage visible without scrolling. Borrowed from newspaper printing where the top half of a folded paper had the most important stories. In digital, the fold varies by screen size. Content above the fold must immediately communicate value.",
    category: "CRO",
    relatedTerms: ["hero-section", "cta", "landing-page", "conversion-rate"],
  },
  {
    term: "CRO",
    slug: "cro",
    definition:
      "Conversion Rate Optimization - the systematic process of increasing the percentage of visitors who complete a desired action. CRO combines quantitative data (analytics, A/B tests) with qualitative research (heatmaps, session recordings, user interviews) to find and fix what stops people from converting.",
    category: "CRO",
    relatedTerms: ["a-b-test", "conversion-rate", "landing-page", "heatmap"],
  },
  {
    term: "CTA",
    slug: "cta",
    definition:
      "Call to Action - a button, link, or instruction prompting the user to take a specific next step, such as 'Start Free Trial' or 'Download Now.' CTAs should be specific about what happens next. 'Get Started' consistently outperforms 'Submit' in testing.",
    category: "CRO",
    relatedTerms: ["landing-page", "above-the-fold", "microcopy", "conversion-rate"],
  },
  {
    term: "Gated Content",
    slug: "gated-content",
    definition:
      "Content that requires visitors to submit information (usually an email address) before accessing it. Ebooks, whitepapers, and webinar recordings are common gated content types. Gating trades traffic for leads; the right choice depends on your conversion funnel and content quality.",
    category: "CRO",
    relatedTerms: ["lead-magnet", "landing-page", "conversion-rate", "drip-campaign"],
  },
  {
    term: "Heatmap",
    slug: "heatmap",
    definition:
      "A visual data representation showing where users click, move, and scroll on a webpage. Heatmaps reveal what draws attention and what gets ignored. Tools like Hotjar and Microsoft Clarity generate heatmaps. Used in CRO research to identify friction and prioritize changes.",
    category: "CRO",
    relatedTerms: ["cro", "session-recording", "conversion-rate", "bounce-rate"],
  },
  {
    term: "Hero Section",
    slug: "hero-section",
    definition:
      "The prominent banner area at the top of a webpage, typically containing a headline, subheadline, supporting image or video, and a primary CTA. The hero section is the highest-leverage section of any landing page because it is seen by every visitor before they decide to stay or leave.",
    category: "CRO",
    relatedTerms: ["above-the-fold", "cta", "landing-page", "value-proposition"],
  },
  {
    term: "Landing Page",
    slug: "landing-page",
    definition:
      "A standalone web page designed for a single conversion goal, typically tied to a specific ad or campaign. Unlike homepages, landing pages remove navigation and distractions. A good landing page matches the message and intent of the ad that sent someone there.",
    category: "CRO",
    relatedTerms: ["cta", "hero-section", "conversion-rate", "lead-magnet"],
  },
  {
    term: "Lead Magnet",
    slug: "lead-magnet",
    definition:
      "A free resource or incentive offered in exchange for a visitor's contact information. Common lead magnets include checklists, templates, ebooks, free trials, and discount codes. The strongest lead magnets solve a specific, urgent problem for the target customer.",
    category: "CRO",
    relatedTerms: ["gated-content", "landing-page", "drip-campaign", "welcome-series"],
  },
  {
    term: "Microcopy",
    slug: "microcopy",
    definition:
      "Small pieces of instructional or reassuring text on a webpage or app that guide users: button labels, form field hints, error messages, tooltips, and empty state descriptions. Well-crafted microcopy reduces hesitation and improves completion rates on forms and checkouts.",
    category: "CRO",
    relatedTerms: ["cta", "above-the-fold", "conversion-rate", "power-words"],
  },
  {
    term: "Session Recording",
    slug: "session-recording",
    definition:
      "A video replay of an individual user's interaction with a website, capturing mouse movements, clicks, scrolls, and keystrokes. Session recordings provide qualitative context that analytics cannot. They reveal why people drop off, not just where.",
    category: "CRO",
    relatedTerms: ["heatmap", "cro", "bounce-rate", "funnel"],
  },
  {
    term: "Statistical Significance",
    slug: "statistical-significance",
    definition:
      "A measure of confidence that the result of an experiment is real and not due to random variation. Typically set at 95% confidence in marketing experiments. Calling a test winner too early is the most common A/B testing mistake, especially with small sample sizes.",
    category: "CRO",
    relatedTerms: ["ab-test", "cro", "conversion-rate", "sample-size"],
  },

  // Psychology
  {
    term: "Anchoring",
    slug: "anchoring",
    definition:
      "A cognitive bias where the first piece of information encountered heavily influences subsequent judgments. In pricing, showing a higher price first makes subsequent prices feel like a bargain. Anchoring is why 'was $199, now $99' outperforms 'only $99.'",
    category: "Psychology",
    relatedTerms: ["decoy-effect", "loss-aversion", "fomo", "pricing-psychology"],
  },
  {
    term: "Decoy Effect",
    slug: "decoy-effect",
    definition:
      "A phenomenon where adding a third, dominated option changes preferences between two existing options. The Economist famously used a print-only option ($125) to make a print+digital bundle ($125) look like a bargain compared to digital-only ($59). Used extensively in pricing design.",
    category: "Psychology",
    relatedTerms: ["anchoring", "loss-aversion", "pricing-psychology", "cro"],
  },
  {
    term: "FOMO",
    slug: "fomo",
    definition:
      "Fear of Missing Out - the anxiety that others are experiencing something desirable that you are not. In marketing, FOMO is triggered by scarcity cues, countdowns, social proof, and exclusivity signals. Genuine scarcity is effective; manufactured scarcity erodes long-term trust.",
    category: "Psychology",
    relatedTerms: ["social-proof", "loss-aversion", "anchoring", "cta"],
  },
  {
    term: "Loss Aversion",
    slug: "loss-aversion",
    definition:
      "The psychological tendency for losses to feel approximately twice as painful as equivalent gains feel pleasurable, as established by Kahneman and Tversky. Copy framed around what someone stands to lose ('Stop losing customers') consistently outperforms gain-framed alternatives.",
    category: "Psychology",
    relatedTerms: ["fomo", "anchoring", "decoy-effect", "social-proof"],
  },
  {
    term: "Power Words",
    slug: "power-words",
    definition:
      "Emotionally charged words that trigger psychological responses and increase engagement or conversion. Examples include: 'proven,' 'instantly,' 'secret,' 'guaranteed,' 'limited,' and 'you.' Power words work because they activate sensory and emotional processing rather than analytical reading.",
    category: "Psychology",
    relatedTerms: ["microcopy", "cta", "storytelling", "loss-aversion"],
  },
  {
    term: "Social Proof",
    slug: "social-proof",
    definition:
      "The psychological tendency to look to others' behavior as a guide for our own, especially in uncertain situations. In marketing, social proof takes the form of reviews, testimonials, case studies, user counts, and media logos. 'Used by 50,000 marketers' is social proof.",
    category: "Psychology",
    relatedTerms: ["fomo", "nps", "brand-equity", "cro"],
  },
  {
    term: "Storytelling",
    slug: "storytelling",
    definition:
      "The use of narrative structure to communicate a brand or product message in a way that is emotionally engaging and memorable. Neuroscience research shows that stories activate more brain regions than data alone, making narrative-driven content more persuasive and easier to recall.",
    category: "Psychology",
    relatedTerms: ["power-words", "social-proof", "brand-equity", "value-proposition"],
  },

  // Content
  {
    term: "Content Cluster",
    slug: "content-cluster",
    definition:
      "A content strategy where a pillar page covers a broad topic in depth and is supported by multiple cluster pages covering subtopics in detail, all linked together. Content clusters build topical authority with search engines, helping all pages rank better for their target terms.",
    category: "Content",
    relatedTerms: ["serp", "domain-authority", "backlink", "featured-snippet"],
  },
  {
    term: "Dynamic Content",
    slug: "dynamic-content",
    definition:
      "Website or email content that automatically changes based on the viewer's characteristics, behavior, location, or stage in the customer journey. Dynamic content is a form of personalization at scale. It requires data infrastructure and segmentation to execute correctly.",
    category: "Content",
    relatedTerms: ["personalization", "segmentation", "drip-campaign", "cro"],
  },
  {
    term: "Personalization",
    slug: "personalization",
    definition:
      "Tailoring marketing messages, content, or product experiences to individual users based on their behavior, preferences, or attributes. Effective personalization increases conversion rates. Poor personalization (using someone's first name while ignoring their behavior) creates the illusion of relevance without the substance.",
    category: "Content",
    relatedTerms: ["segmentation", "dynamic-content", "drip-campaign", "cro"],
  },

  // Additional terms
  {
    term: "Bidding Strategy",
    slug: "bidding-strategy",
    definition:
      "The method an advertiser uses to set bids for ad auctions. Options range from manual CPC (full control) to automated strategies like target CPA, target ROAS, and maximize conversions (algorithmic control). Automated strategies require sufficient conversion data to perform well.",
    category: "Paid Ads",
    relatedTerms: ["ad-rank", "quality-score", "cpc", "roas"],
  },
  {
    term: "Dark Social",
    slug: "dark-social",
    definition:
      "Traffic that arrives through private sharing channels that analytics tools cannot track: direct messages, emails, WhatsApp, Slack, and copy-pasting URLs. Estimated to account for 84% of social sharing. Dark social causes analytics tools to misattribute traffic as 'direct.'",
    category: "Analytics",
    relatedTerms: ["utm", "attribution", "share-of-voice", "social-proof"],
  },
  {
    term: "Freemium",
    slug: "freemium",
    definition:
      "A monetization model where a core product is free forever, with premium features available for a paid subscription. Freemium drives top-of-funnel volume but requires high conversion rates from free to paid to be economically viable. Slack, Spotify, and Dropbox use this model.",
    category: "Growth",
    relatedTerms: ["plg", "ltv", "cac", "activation"],
  },
  {
    term: "Growth Loop",
    slug: "growth-loop",
    definition:
      "A self-reinforcing cycle where the output of one user action becomes the input for acquiring more users. Unlike funnels that run out, loops compound. Dropbox's referral program is a classic loop: users invite friends, friends sign up, some become users who invite more friends.",
    category: "Growth",
    relatedTerms: ["viral-coefficient", "k-factor", "aarrr", "plg"],
  },
  {
    term: "KPI",
    slug: "kpi",
    definition:
      "Key Performance Indicator - a quantifiable measure used to evaluate success against objectives. Good KPIs are specific, measurable, and tied directly to business outcomes. Most teams track too many KPIs; the best teams identify the 3 to 5 that actually predict what matters.",
    category: "Analytics",
    relatedTerms: ["north-star-metric", "arr", "mrr", "conversion-rate"],
  },
  {
    term: "Multivariate Test",
    slug: "multivariate-test",
    definition:
      "An experiment that tests multiple variables simultaneously to find which combination produces the best result. Unlike A/B tests that change one element, multivariate tests can reveal interaction effects between elements. They require very large sample sizes to reach statistical significance.",
    category: "CRO",
    relatedTerms: ["ab-test", "statistical-significance", "cro", "conversion-rate"],
  },
  {
    term: "MMM",
    slug: "mmm",
    definition:
      "Marketing Mix Modeling - a statistical technique that quantifies the contribution of each marketing channel to sales outcomes using aggregated historical data. MMM does not require user-level tracking, making it privacy-safe. It is best for measuring long-term brand investment.",
    category: "Analytics",
    relatedTerms: ["attribution", "multi-touch", "roas", "incrementality"],
  },
  {
    term: "Incrementality",
    slug: "incrementality",
    definition:
      "The true causal impact of a marketing action on business outcomes, measured by comparing a test group exposed to an ad with a holdout group that was not. Incrementality testing is the gold standard for measuring whether an ad actually caused a conversion.",
    category: "Analytics",
    relatedTerms: ["mmm", "attribution", "ab-test", "roas"],
  },
  {
    term: "Referral Program",
    slug: "referral-program",
    definition:
      "A structured incentive for existing customers to refer new customers, usually rewarding both parties. Dropbox's referral program (500MB for each referral) grew their user base 3900% in 15 months. The most effective referral programs make sharing feel generous, not transactional.",
    category: "Growth",
    relatedTerms: ["viral-coefficient", "k-factor", "cac", "ltv"],
  },
  {
    term: "Zero-Click Search",
    slug: "zero-click",
    definition:
      "A search that ends on the results page without the user clicking any result, because Google's SERP itself answered the question via a featured snippet, knowledge panel, or AI Overview. Studies show roughly 50% of searches are zero-click. Brands must optimize for visibility, not just clicks.",
    category: "SEO",
    relatedTerms: ["serp", "featured-snippet", "ctr", "domain-authority"],
  },
  {
    term: "Internal Linking",
    slug: "internal-linking",
    definition:
      "The practice of linking from one page on your website to another page on the same site. Internal links distribute page authority (PageRank), help search engines crawl and understand your content, and guide users to related information. Often called the most underrated lever in SEO.",
    category: "SEO",
    relatedTerms: ["backlink", "anchor-text", "domain-authority", "content-cluster"],
  },
];

export function getTermBySlug(slug: string): GlossaryTerm | undefined {
  return GLOSSARY_TERMS.find((t) => t.slug === slug);
}

export function getRelatedTermObjects(relatedTermSlugs: string[]): GlossaryTerm[] {
  return relatedTermSlugs
    .map((slug) => getTermBySlug(slug))
    .filter((t): t is GlossaryTerm => t !== undefined);
}

export const GLOSSARY_CATEGORIES = Array.from(
  new Set(GLOSSARY_TERMS.map((t) => t.category))
).sort();
