export type GlossaryTerm = {
  term: string;
  slug: string;
  definition: string;
  category: string;
  relatedTerms: string[];
  whyItMatters?: string;
  example?: string; // illustrative arithmetic, never a real-world statistic
  lessons?: string[]; // "category/slug" of lessons that teach the term (checked in tests/seo-data.test.ts)
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
    whyItMatters: "Without a controlled test you can't tell whether a change caused a result or luck did. Teams that skip testing ship opinions as if they were facts and slowly fill the site with changes that do nothing.",
    example: "You split 10,000 visitors evenly between two headlines. Version A converts 200 of 5,000 and version B converts 250 of 5,000. B looks 25% better, but you still check significance before rolling it out.",
    lessons: ["growth/ab-testing", "cro/sample-size-math"],
  },
  {
    term: "Attribution",
    slug: "attribution",
    definition:
      "The process of assigning credit to marketing channels or touchpoints that contributed to a conversion. Common models include first-touch, last-touch, linear, and data-driven. No attribution model is perfectly accurate.",
    category: "Analytics",
    relatedTerms: ["multi-touch", "utm", "mmm", "conversion-rate"],
    whyItMatters: "Attribution decides which channels get more budget and which get cut. If you only credit the last click, you will starve the channels that created the interest in the first place.",
    example: "A shopper sees your video ad, later reads a blog post, then clicks an email and buys. Last-click gives email 100% of the credit, while a first-click view gives the ad 100%. Same sale, very different budget decisions.",
    lessons: ["analytics/attribution", "analytics/attribution-models"],
  },
  {
    term: "Bounce Rate",
    slug: "bounce-rate",
    definition:
      "The percentage of visitors who leave a page without taking any action or visiting another page. A high bounce rate can signal a mismatch between the ad or search result that brought someone in and the content they found. In GA4, bounce rate is the inverse of engagement rate.",
    category: "Analytics",
    relatedTerms: ["session", "engagement-rate", "cro", "landing-page"],
    whyItMatters: "Bounce rate hints at whether a page matches what visitors expected. A high number on a key landing page often means a mismatch between the promise and the page, though it can also mean the visitor found the answer fast.",
    example: "If 1,000 people land on a recipe page and 600 leave without clicking anything, the bounce rate is 60%. That may be fine for a recipe, but it would worry you on a pricing page.",
    lessons: ["analytics/analytics-101", "cro/landing-page-anatomy"],
  },
  {
    term: "Cohort",
    slug: "cohort",
    definition:
      "A group of users who share a common characteristic during a specific time period, such as everyone who signed up in January. Cohort analysis tracks how different groups behave over time, revealing whether your product is getting better or worse at retention.",
    category: "Analytics",
    relatedTerms: ["retention", "churn", "ltv", "dau"],
    whyItMatters: "Averages hide change over time. Grouping people by when they joined shows whether newer customers behave better or worse than older ones, which tells you if your product and marketing are actually improving.",
    example: "Everyone who signed up in January forms the January cohort. If 40 of 100 are still active after a month, while the February cohort keeps 55 of 100, something you changed in February is working.",
    lessons: ["analytics/cohort-analysis", "growth/retention-cohorts"],
  },
  {
    term: "Conversion Rate",
    slug: "conversion-rate",
    definition:
      "The percentage of visitors or users who complete a desired action, such as a purchase, sign-up, or download. Calculated as conversions divided by total visitors times 100. Improving conversion rate is often cheaper than buying more traffic.",
    category: "Analytics",
    relatedTerms: ["cro", "ab-test", "cac", "landing-page"],
    whyItMatters: "It tells you how well traffic turns into results, so you can improve the page instead of just buying more visitors. A small lift here often beats a large traffic increase because it multiplies everything upstream.",
    example: "If 2,000 people visit a page and 60 buy, the conversion rate is 3%. Lifting it to 4% with the same traffic gives you 80 buyers without spending extra on ads.",
    lessons: ["cro/conversion-rate-math", "cro/cro-101"],
  },
  {
    term: "DAU",
    slug: "dau",
    definition:
      "Daily Active Users: the number of unique users who engage with a product on a given day. Often used alongside MAU to calculate the DAU/MAU ratio, which measures how sticky a product is. A ratio above 20% is generally considered strong.",
    category: "Analytics",
    relatedTerms: ["mau", "retention", "engagement-rate", "cohort"],
    whyItMatters: "DAU shows how often people actually come back, not just how many signed up. It is an early warning for products that people try once and forget.",
    example: "If 2,500 different people open your app on Tuesday, your DAU for that day is 2,500. Counting the same person twice on one day would inflate it, so each user counts once.",
    lessons: ["analytics/product-vs-marketing-analytics", "growth/engagement-loops"],
  },
  {
    term: "Engagement Rate",
    slug: "engagement-rate",
    definition:
      "A measure of how actively users interact with content, calculated differently by platform. On social media, it typically divides total interactions by total reach or followers. In GA4, engagement rate is the percentage of sessions that lasted over 10 seconds or had a conversion event.",
    category: "Analytics",
    relatedTerms: ["reach", "impressions", "dau", "social-proof"],
    whyItMatters: "It shows whether your content is actually resonating or just being shown. Reach alone can look healthy while nobody cares, so engagement tells you which posts deserve more effort.",
    example: "If a post reaches 5,000 people and gets 150 likes, comments and shares combined, the engagement rate is 3%. Check which formula the platform uses before comparing across channels.",
    lessons: ["social/algorithm-basics", "analytics/kpis-for-marketers"],
  },
  {
    term: "Funnel",
    slug: "funnel",
    definition:
      "A model that maps the stages a prospect moves through on the way to becoming a customer, typically from awareness to consideration to decision. The funnel gets narrower at each stage because some people drop off. Funnel analytics reveals where you lose the most people.",
    category: "Analytics",
    relatedTerms: ["aarrr", "conversion-rate", "cac", "activation"],
    whyItMatters: "A funnel shows where people drop off, so you fix the leakiest stage instead of guessing. Without it, teams pour traffic in at the top while most of it quietly disappears in the middle.",
    example: "Say 1,000 people visit, 200 sign up, 50 start a trial and 10 pay. The biggest relative loss is between visit and sign-up, which is where you would look first.",
    lessons: ["analytics/funnel-analysis", "fundamentals/aida-funnel"],
  },
  {
    term: "MAU",
    slug: "mau",
    definition:
      "Monthly Active Users: the number of unique users who engage with a product at least once in a calendar month. A standard benchmark for measuring an app or platform's scale and health. Meaningful only when paired with retention data.",
    category: "Analytics",
    relatedTerms: ["dau", "retention", "churn", "cohort"],
    whyItMatters: "MAU gives a steady read on how big your active audience is, smoothing out daily swings. Comparing it with total sign-ups shows how many people drifted away.",
    example: "If 8,000 different people used your product at least once in November, your MAU is 8,000. Someone who logs in 20 times still counts only once.",
    lessons: ["analytics/product-vs-marketing-analytics", "growth/retention-cohorts"],
  },
  {
    term: "MoM",
    slug: "mom",
    definition:
      "Month-over-Month: a period comparison that shows how a metric changed from one month to the next. Used for short-term trend analysis. MoM growth compounds into YoY growth: 6% MoM growth equals roughly 100% YoY growth.",
    category: "Analytics",
    relatedTerms: ["yoy", "arr", "mrr", "north-star-metric"],
    whyItMatters: "Month-over-month shows momentum and helps you spot a problem early. It can mislead during seasonal months, so pair it with a year-over-year check. Treat one odd month with caution.",
    example: "If you had 4,000 leads in October and 4,400 in November, MoM growth is 10%. If November always has a sales event, that jump may be seasonal rather than real progress.",
    lessons: ["analytics/kpis-for-marketers", "analytics/dashboards"],
  },
  {
    term: "Multi-Touch Attribution",
    slug: "multi-touch",
    definition:
      "An attribution approach that assigns credit to multiple touchpoints in a customer journey instead of giving all credit to one interaction. Common models include linear (equal credit) and time-decay (more credit to recent touches). More realistic than single-touch but still imperfect.",
    category: "Analytics",
    relatedTerms: ["attribution", "utm", "mmm", "cac"],
    whyItMatters: "Customers rarely buy after one interaction. Splitting credit across the whole journey stops you from cutting upper-funnel channels that quietly set up the sale. It gives a fairer view of what is really working.",
    example: "A buyer clicks a social ad, reads an email, then searches your brand and buys. A linear model gives each of the three touches one third of the credit instead of handing it all to the search.",
    lessons: ["analytics/attribution-models", "paid-ads/mmm-vs-mta"],
  },
  {
    term: "North Star Metric",
    slug: "north-star-metric",
    definition:
      "The single metric that best captures the core value a product delivers to customers. For Spotify it is time spent listening; for Airbnb it is nights booked. The North Star aligns teams around the metric most predictive of long-term growth.",
    category: "Analytics",
    relatedTerms: ["kpi", "funnel", "activation", "retention"],
    whyItMatters: "One shared number keeps teams pulling in the same direction instead of optimising separate vanity stats. A badly chosen one, like sign-ups, can push people to chase volume over value.",
    example: "A note-taking app might pick weekly active notes created as its north star. If a campaign boosts sign-ups but not notes created, the team knows it did not move what matters.",
    lessons: ["growth/north-star-metric", "analytics/kpis-for-marketers"],
  },
  {
    term: "Retention",
    slug: "retention",
    definition:
      "The percentage of users or customers who continue using a product or service over a given period. Retention is the single best predictor of long-term growth. Improving retention is almost always more efficient than increasing acquisition spend.",
    category: "Analytics",
    relatedTerms: ["churn", "cohort", "ltv", "dau"],
    whyItMatters: "Keeping customers is usually cheaper than finding new ones, and strong retention makes every acquisition dollar worth more. Weak retention means you are filling a leaky bucket.",
    example: "If 500 people sign up in January and 200 are still active in March, two month retention is 40%. Raising that to 50% adds 50 active users without any extra ad spend.",
    lessons: ["growth/retention-cohorts", "analytics/cohort-analysis"],
  },
  {
    term: "Session",
    slug: "session",
    definition:
      "A group of interactions a single user takes within a defined time window on a website or app. In GA4, a session ends after 30 minutes of inactivity. Sessions are a proxy for visit quality but can be misleading on their own.",
    category: "Analytics",
    relatedTerms: ["bounce-rate", "conversion-rate", "utm", "engagement-rate"],
    whyItMatters: "Sessions are the basic unit most analytics tools use to count visits. Knowing how they are defined stops you from misreading traffic numbers when a tool changes its timeout rules.",
    example: "A visitor reads your blog for ten minutes, leaves for lunch, then comes back an hour later. Many tools would count that as two sessions from one user.",
    lessons: ["analytics/analytics-101", "analytics/ga4-setup"],
  },
  {
    term: "UTM",
    slug: "utm",
    definition:
      "Urchin Tracking Module: five URL parameters (source, medium, campaign, term, content) appended to links to track where traffic comes from in analytics tools. Without UTM tags, much of your referral traffic appears as 'direct' in GA4.",
    category: "Analytics",
    relatedTerms: ["attribution", "session", "conversion-tracking", "dark-social"],
    whyItMatters: "Without tags, a lot of traffic lands in a vague bucket and you cannot tell which campaign worked. Consistent naming also keeps reports clean as the team grows.",
    example: "A link ending in ?utm_source=newsletter&utm_medium=email&utm_campaign=spring_sale tells your analytics that the click came from the spring sale email, not from some unknown source. Without the tags, that visit might just show up as direct traffic.",
    lessons: ["analytics/utm-tagging", "analytics/attribution"],
  },
  {
    term: "YoY",
    slug: "yoy",
    definition:
      "Year-over-Year: a comparison of a metric against the same period in the prior year. YoY removes seasonal noise and gives a cleaner picture of underlying growth than MoM. Commonly used in board and investor reporting.",
    category: "Analytics",
    relatedTerms: ["mom", "arr", "mrr", "kpi"],
    whyItMatters: "Year-over-year strips out seasonality, so it is the fairest way to judge real growth in businesses with busy and quiet periods. It stops you celebrating a holiday spike.",
    example: "If you had 12,000 visits in November last year and 15,000 this November, YoY growth is 25%. Comparing to October instead would mix growth with the seasonal effect.",
    lessons: ["analytics/kpis-for-marketers", "analytics/dashboards"],
  },

  // Paid Ads
  {
    term: "Ad Rank",
    slug: "ad-rank",
    definition:
      "Google's formula that determines the position of a search ad. It factors in your bid, quality score, expected impact of ad extensions, and the context of the search. A high quality score can let a lower bid outrank a higher one.",
    category: "Paid Ads",
    relatedTerms: ["quality-score", "cpc", "ctr", "bidding-strategy"],
    whyItMatters: "Ad Rank decides whether your ad shows and where, so a bigger bid alone does not guarantee a good spot. Improving relevance can win better positions at a lower price.",
    example: "Two advertisers bid on the same keyword. One bids $2 with a weak ad, the other bids $1.50 with a highly relevant ad, and the cheaper bid can still win the higher position.",
    lessons: ["paid-ads/quality-score", "paid-ads/google-search-ads"],
  },
  {
    term: "CPC",
    slug: "cpc",
    definition:
      "Cost Per Click: the amount an advertiser pays each time someone clicks their ad. Calculated as total ad spend divided by total clicks. CPC varies by industry, competition, and platform. Google Search CPCs for competitive keywords can exceed $50.",
    category: "Paid Ads",
    relatedTerms: ["cpm", "ctr", "roas", "quality-score"],
    whyItMatters: "CPC is a main cost lever in search and social ads. Tracking it alongside conversion rate shows whether cheap clicks are actually turning into customers.",
    example: "If you spend $300 and get 150 clicks, your CPC is $2. A $0.50 click that never converts can cost you more than a $3 click that does.",
    lessons: ["paid-ads/bidding-strategies", "paid-ads/google-search-ads"],
  },
  {
    term: "CPM",
    slug: "cpm",
    definition:
      "Cost Per Mille (thousand impressions): the price paid for every 1,000 times an ad is displayed, regardless of clicks. CPM is the standard pricing model for brand awareness campaigns on display and video channels.",
    category: "Paid Ads",
    relatedTerms: ["cpc", "impressions", "reach", "roas"],
    whyItMatters: "CPM lets you compare how expensive attention is across platforms and audiences. Rising CPMs often signal heavy competition or tired creative. It is the number to watch when your goal is awareness, not clicks.",
    example: "If you pay $50 and your ad is shown 10,000 times, your CPM is $5. The same $50 on a pricier audience at a $10 CPM would only buy 5,000 views.",
    lessons: ["paid-ads/paid-ads-101", "paid-ads/meta-ads"],
  },
  {
    term: "CTR",
    slug: "ctr",
    definition:
      "Click-Through Rate: the percentage of people who see an ad or link and click on it. Calculated as clicks divided by impressions. A high CTR signals relevance. Google Search CTR benchmarks vary widely by position: position 1 averages roughly 28%.",
    category: "Paid Ads",
    relatedTerms: ["cpc", "impressions", "quality-score", "ad-rank"],
    whyItMatters: "CTR shows whether your message grabs attention. A low rate points to weak copy or targeting, and on search it also feeds into how the platform judges your ad.",
    example: "If your ad is shown 5,000 times and gets 100 clicks, the CTR is 2%. Testing a new headline that lifts it to 3% brings 50 more clicks for the same impressions.",
    lessons: ["paid-ads/ad-copy-frameworks", "paid-ads/quality-score"],
  },
  {
    term: "Impressions",
    slug: "impressions",
    definition:
      "The number of times an ad or piece of content is displayed, regardless of whether anyone clicked it. Unlike reach, impressions count multiple views by the same person. High impressions with low CTR suggest a creative or targeting problem.",
    category: "Paid Ads",
    relatedTerms: ["reach", "ctr", "cpm", "share-of-voice"],
    whyItMatters: "Impressions show how often your ad had a chance to be seen. If they are low, nothing else in the funnel can perform because nobody is looking.",
    example: "If your ad loads on someone's feed three times in a day, that is three impressions, even if only one person saw it. That is why impressions are higher than reach.",
    lessons: ["paid-ads/paid-ads-101", "paid-ads/ad-frequency-creative-fatigue"],
  },
  {
    term: "Lookalike Audience",
    slug: "lookalike-audience",
    definition:
      "A targeting option on platforms like Meta and TikTok that finds users who share characteristics with your existing customers or email list. Lookalike audiences expand your reach while maintaining relevance. Quality depends entirely on the seed audience.",
    category: "Paid Ads",
    relatedTerms: ["remarketing", "icp", "cac", "roas"],
    whyItMatters: "It lets you find new people who resemble your best customers, which is often cheaper than broad guessing. The quality of the source list decides the quality of the results.",
    example: "You upload a list of 1,000 of your highest-spending customers. The platform then finds new people who share similar traits and shows your ads to them.",
    lessons: ["paid-ads/meta-ads", "paid-ads/first-party-data-activation"],
  },
  {
    term: "Negative Keywords",
    slug: "negative-keywords",
    definition:
      "Search terms added to a Google Ads campaign to prevent ads from showing for irrelevant queries. For example, a premium software company might add 'free' as a negative keyword. Properly managed negatives can reduce wasted spend by 20-30%.",
    category: "Paid Ads",
    relatedTerms: ["quality-score", "cpc", "ad-rank", "roas"],
    whyItMatters: "They stop you paying for clicks that will never convert. Skipping them is one of the most common ways small search budgets leak money. A short list added early saves real money.",
    example: "If you sell paid accounting software, adding free as a negative keyword keeps your ad from showing for the search 'free accounting software', saving clicks from people who will not buy.",
    lessons: ["paid-ads/google-search-ads", "paid-ads/ai-max-broad-match"],
  },
  {
    term: "Quality Score",
    slug: "quality-score",
    definition:
      "Google Ads metric rated 1 to 10 that estimates how relevant your ads, keywords, and landing pages are to the user. A higher quality score lowers your cost per click and improves ad rank. The three components are expected CTR, ad relevance, and landing page experience.",
    category: "Paid Ads",
    relatedTerms: ["ad-rank", "cpc", "ctr", "landing-page"],
    whyItMatters: "A better score can lower what you pay per click and improve your ad position. A poor one means you are paying a premium for the same traffic.",
    example: "Your ad promises 'winter boots' but the landing page is a general shoe homepage, so relevance scores low. Matching the page to the ad is a cheap fix that can raise the score.",
    lessons: ["paid-ads/quality-score", "paid-ads/landing-page-message-match"],
  },
  {
    term: "Reach",
    slug: "reach",
    definition:
      "The number of unique people who see a piece of content or ad within a given period. Unlike impressions, reach counts each person only once. Reach is a measure of how wide your message spread; frequency measures how many times each person saw it.",
    category: "Paid Ads",
    relatedTerms: ["impressions", "cpm", "share-of-voice", "engagement-rate"],
    whyItMatters: "Reach tells you how many different people you touched, which matters for awareness goals. Looking only at impressions can hide the fact that a small group saw your ad again and again.",
    example: "If your ad is shown 30,000 times but only 10,000 different people saw it, your reach is 10,000 and the average person saw it three times.",
    lessons: ["paid-ads/ad-frequency-creative-fatigue", "social/social-strategy-basics"],
  },
  {
    term: "Remarketing",
    slug: "remarketing",
    definition:
      "Showing ads to people who have previously visited your website or interacted with your brand. Also called retargeting. Remarketing audiences convert at 2-10x the rate of cold audiences because they already have intent or awareness.",
    category: "Paid Ads",
    relatedTerms: ["lookalike-audience", "cpc", "roas", "attribution"],
    whyItMatters: "People who already showed interest convert far more cheaply than strangers. Reminding them at the right time recovers sales that would otherwise be lost. Keep the frequency modest so it does not feel like stalking.",
    example: "A visitor adds a jacket to the cart but leaves. Over the next few days they see an ad showing that jacket, which nudges them back to finish the purchase.",
    lessons: ["paid-ads/retargeting", "email/abandon-cart"],
  },
  {
    term: "ROAS",
    slug: "roas",
    definition:
      "Return on Ad Spend: revenue generated divided by ad spend. A ROAS of 4x means you earned $4 in revenue for every $1 spent on ads. ROAS does not equal profit: a 4x ROAS can still lose money if margins are thin or CAC payback is too long.",
    category: "Paid Ads",
    relatedTerms: ["cac", "ltv", "cpc", "cpm"],
    whyItMatters: "ROAS tells you whether an ad channel pays for itself before you account for other costs. Scaling a campaign without watching it can quietly burn margin.",
    example: "If you spend $1,000 on ads and they bring in $4,000 in sales, your ROAS is 4. Whether that is profitable depends on your product margins.",
    lessons: ["fundamentals/marketing-math", "analytics/ltv-cac"],
  },

  // SEO
  {
    term: "Anchor Text",
    slug: "anchor-text",
    definition:
      "The clickable, visible text of a hyperlink. Descriptive anchor text like 'marketing automation guide' signals to search engines what the linked page is about. Over-optimized exact-match anchors can trigger Google penalties.",
    category: "SEO",
    relatedTerms: ["backlink", "domain-authority", "serp", "internal-linking"],
    whyItMatters: "Anchor text signals what the linked page is about, for both search engines and readers. Overusing exact-match keywords in links can look manipulative. Natural, descriptive wording is the safest approach.",
    example: "A link that says 'our guide to keyword research' tells readers and search engines what to expect. A link that just says 'click here' gives them no clue.",
    lessons: ["seo/internal-linking", "seo/link-building"],
  },
  {
    term: "Backlink",
    slug: "backlink",
    definition:
      "A link from another website pointing to your website. Backlinks are a primary ranking signal for Google because they represent an editorial vote of confidence. Quality matters far more than quantity: one link from a top publication outweighs hundreds from low-authority sites.",
    category: "SEO",
    relatedTerms: ["domain-authority", "anchor-text", "serp", "share-of-voice"],
    whyItMatters: "Links from trusted sites act as votes of confidence and are a major ranking factor. One relevant link from a respected site often beats dozens from low-quality pages.",
    example: "A well-known industry blog quotes your research and links to your report. That single link brings referral visitors and tells search engines your page is worth trusting.",
    lessons: ["seo/link-building", "content/original-research-content"],
  },
  {
    term: "Core Web Vitals",
    slug: "core-web-vitals",
    definition:
      "Google's set of page experience metrics used as a ranking signal: Largest Contentful Paint (LCP) measures load speed, Interaction to Next Paint (INP) measures responsiveness, and Cumulative Layout Shift (CLS) measures visual stability. Failing these thresholds can hurt search rankings.",
    category: "SEO",
    relatedTerms: ["serp", "domain-authority", "backlink", "cro"],
    whyItMatters: "These measure how fast and stable a page feels, which affects both rankings and whether people stay. Slow or jumpy pages lose visitors before they read anything.",
    example: "If a page's main image takes 4 seconds to appear and buttons shift while it loads, visitors may tap the wrong thing or leave. Compressing the image and reserving space fixes both.",
    lessons: ["seo/core-web-vitals", "cro/speed-and-cro"],
  },
  {
    term: "Domain Authority",
    slug: "domain-authority",
    definition:
      "A third-party metric (created by Moz, also called DR by Ahrefs) that predicts how well a domain will rank in search results, scored 0 to 100. It is not a Google metric but correlates with ranking ability. Built primarily through earning high-quality backlinks.",
    category: "SEO",
    relatedTerms: ["backlink", "anchor-text", "serp", "featured-snippet"],
    whyItMatters: "It gives a quick sense of how strong a site's link profile is compared with competitors, helping you decide which keywords are realistic. It is a third-party estimate, not a Google metric.",
    example: "If your site scores 25 and the sites ranking for a keyword all score 70 or more, ranking soon is unlikely. A lower-competition keyword is a smarter first target.",
    lessons: ["seo/link-building", "seo/keyword-research"],
  },
  {
    term: "Featured Snippet",
    slug: "featured-snippet",
    definition:
      "A highlighted box at the top of Google search results that displays a direct answer to the query, pulled from a webpage. Also called position zero. Winning a featured snippet can dramatically increase CTR and brand authority, even if you already rank on page one.",
    category: "SEO",
    relatedTerms: ["serp", "domain-authority", "zero-click", "backlink"],
    whyItMatters: "A snippet can put your page above the normal results and capture attention before anyone scrolls. Formatting answers clearly is the cheapest way to compete for it.",
    example: "For the search 'how to boil an egg', a page with a short numbered list of steps right under a clear heading is more likely to be pulled into the answer box.",
    lessons: ["seo/aeo", "seo/zero-click-search"],
  },
  {
    term: "SERP",
    slug: "serp",
    definition:
      "Search Engine Results Page: the page displayed when someone submits a query to a search engine. Modern SERPs include organic results, paid ads, featured snippets, local packs, image carousels, and AI Overviews, meaning organic links now compete with many more elements.",
    category: "SEO",
    relatedTerms: ["featured-snippet", "domain-authority", "ctr", "zero-click"],
    whyItMatters: "Understanding the results page shows you who you are really competing with. It also reveals what searchers want, such as videos, maps or quick answers, before you create content.",
    example: "Search 'best running shoes' and you may see ads, a shopping carousel and a few review sites. That tells you a plain blog post will face stiff competition.",
    lessons: ["seo/search-intent", "seo/how-search-works"],
  },

  // Email
  {
    term: "Click Rate",
    slug: "click-rate",
    definition:
      "The percentage of email recipients who click a link in an email, calculated as clicks divided by emails delivered. Industry average click rates are typically 2-5%. Also called click-through rate (CTR) in email contexts, though click-to-open rate (CTOR) is a more useful engagement metric.",
    category: "Email",
    relatedTerms: ["open-rate", "deliverability", "segmentation", "drip-campaign"],
    whyItMatters: "Click rate shows whether your email content and calls to action push people to act, which opens alone cannot show. It is a better signal of interest than opens.",
    example: "If you send an email to 2,000 people and 80 click a link, your click rate is 4%. A clearer button or a single focused offer is a simple thing to test.",
    lessons: ["email/email-analytics", "email/email-copywriting"],
  },
  {
    term: "Deliverability",
    slug: "deliverability",
    definition:
      "The ability of an email to reach the recipient's inbox rather than spam or promotions folders. Determined by sender reputation, authentication (SPF, DKIM, DMARC), list hygiene, and engagement rates. Poor deliverability is the silent killer of email programs.",
    category: "Email",
    relatedTerms: ["open-rate", "click-rate", "segmentation", "drip-campaign"],
    whyItMatters: "If emails land in spam, even great copy is wasted. Poor deliverability also hurts your sender reputation, making future emails harder to place. Fixing it early protects every campaign after.",
    example: "You send 10,000 emails but 1,500 land in spam folders because your authentication is not set up. Setting up SPF, DKIM and DMARC and cleaning the list helps fix that.",
    lessons: ["email/deliverability", "email/inbox-placement-science"],
  },
  {
    term: "Drip Campaign",
    slug: "drip-campaign",
    definition:
      "A series of pre-written emails sent automatically on a schedule or triggered by user actions, designed to nurture prospects over time. Drip campaigns deliver the right content at each stage of the buyer journey. Also called email sequences or nurture flows.",
    category: "Email",
    relatedTerms: ["welcome-series", "segmentation", "open-rate", "click-rate"],
    whyItMatters: "Drips let you nurture people automatically at the right pace, so you do not rely on remembering to follow up. They keep leads warm without a manual push each time.",
    example: "After someone downloads a guide, they get a tip email on day 2, a case study on day 5 and a trial offer on day 9, all sent automatically.",
    lessons: ["email/automation-drips", "email/automation-flows"],
  },
  {
    term: "Open Rate",
    slug: "open-rate",
    definition:
      "The percentage of delivered emails that are opened by recipients. Since Apple Mail Privacy Protection (2021), open rates are partially inflated by machine-level tracking. Use click rate and revenue per email as more reliable engagement signals.",
    category: "Email",
    relatedTerms: ["click-rate", "deliverability", "segmentation", "drip-campaign"],
    whyItMatters: "Open rate hints at whether your subject line and sender name earn attention. Privacy features that pre-load emails now inflate it, so treat it as a rough signal, not a hard fact.",
    example: "If 1,000 emails are delivered and 250 are recorded as opened, the open rate is 25%. Testing two subject lines on small groups can show which one pulls more.",
    lessons: ["email/subject-lines", "email/email-analytics"],
  },
  {
    term: "Segmentation",
    slug: "segmentation",
    definition:
      "Dividing an audience into smaller groups based on shared characteristics such as behavior, demographics, purchase history, or engagement level. Segmented email campaigns generate 30-760% more revenue than unsegmented broadcasts, according to DMA research.",
    category: "Email",
    relatedTerms: ["personalization", "drip-campaign", "open-rate", "deliverability"],
    whyItMatters: "Sending the same message to everyone wastes attention and drives unsubscribes. Relevant messages to smaller groups usually beat a broad blast. Even two or three simple groups make a visible difference.",
    example: "Instead of sending one sale email to everyone, you send a men's offer to people who bought men's items and a women's offer to the rest.",
    lessons: ["email/segmentation", "email/rfm"],
  },
  {
    term: "Welcome Series",
    slug: "welcome-series",
    definition:
      "A sequence of automated emails sent to new subscribers or customers immediately after they join your list. Welcome emails have 4x the open rate and 5x the CTR of standard newsletters. They set expectations and are the highest-leverage emails in any email program.",
    category: "Email",
    relatedTerms: ["drip-campaign", "open-rate", "segmentation", "activation"],
    whyItMatters: "People are most engaged right after signing up, so this is the best moment to set expectations and build trust. A weak start often means the subscriber never really engages.",
    example: "A new subscriber gets a thank-you email right away, a story about your brand the next day and a first-order discount on day three. Each message has one clear job, so the series feels helpful instead of pushy.",
    lessons: ["email/welcome-series", "email/list-building"],
  },

  // Growth
  {
    term: "AARRR",
    slug: "aarrr",
    definition:
      "A framework by Dave McClure that breaks growth into five stages: Acquisition, Activation, Retention, Referral, and Revenue. Also called Pirate Metrics. Useful for diagnosing where a growth problem actually lives in the funnel.",
    category: "Growth",
    relatedTerms: ["funnel", "activation", "retention", "viral-coefficient"],
    whyItMatters: "It gives a simple map of the customer journey so you can find the weakest stage instead of guessing. Teams often over-invest in acquisition when the real leak is activation or retention.",
    example: "You find that 1,000 people visit and 300 sign up, but only 30 finish setup. The framework points you to activation, not more traffic, as the thing to fix.",
    lessons: ["growth/aarrr", "growth/activation"],
  },
  {
    term: "Activation",
    slug: "activation",
    definition:
      "The moment a new user first experiences the core value of a product, often called the 'aha moment.' For Dropbox it was uploading a first file; for Twitter it was following 30 accounts. Improving activation rate is usually the highest-leverage growth lever for early-stage products.",
    category: "Growth",
    relatedTerms: ["aarrr", "retention", "funnel", "north-star-metric"],
    whyItMatters: "Many sign-ups never experience the value of a product and quietly disappear. Getting people to their first win quickly lifts every metric after it. Define your own first win clearly, then measure how many reach it.",
    example: "A budgeting app defines activation as connecting a bank account and categorising five transactions. Users who do both are far more likely to stay than those who only sign up.",
    lessons: ["growth/activation", "growth/activation-rate"],
  },
  {
    term: "CAC",
    slug: "cac",
    definition:
      "Customer Acquisition Cost: the total cost to acquire one new customer, including all sales and marketing spend. Calculated as total acquisition spend divided by new customers in a period. CAC must be significantly lower than LTV for a business to be profitable.",
    category: "Growth",
    relatedTerms: ["ltv", "roas", "cpc", "payback-period"],
    whyItMatters: "CAC tells you whether growth is affordable. If it creeps above what a customer is worth, scaling just loses money faster. Compare it with what each customer is worth before deciding where to spend more.",
    example: "If you spend $500 and get 25 new customers, your CAC is $20. If each customer brings in only $15 of profit, this channel does not pay back.",
    lessons: ["fundamentals/marketing-math", "analytics/ltv-cac"],
  },
  {
    term: "Churn",
    slug: "churn",
    definition:
      "The percentage of customers or subscribers who stop using a product within a given period. Monthly churn of 5% means you lose 46% of your customer base annually. Churn is the primary ceiling on growth: if your bucket leaks fast enough, more acquisition cannot save you.",
    category: "Growth",
    relatedTerms: ["retention", "ltv", "cohort", "mau"],
    whyItMatters: "Churn quietly cancels out your growth, since you must acquire more just to stay level. Reducing it is often the cheapest path to a healthier business.",
    example: "If you start the month with 1,000 customers and 50 cancel, your monthly churn is 5%. At that pace you lose nearly half your base in a year.",
    lessons: ["growth/churn-prediction-early-warning", "growth/retention-cohorts"],
  },
  {
    term: "K-factor",
    slug: "k-factor",
    definition:
      "A measure of viral growth, calculated as the number of invitations sent by each user multiplied by the conversion rate of those invitations. A K-factor above 1 means the product grows on its own. Most consumer products have K-factors well below 1.",
    category: "Growth",
    relatedTerms: ["viral-coefficient", "referral-program", "plg", "aarrr"],
    whyItMatters: "It shows whether your product can grow through word of mouth. A K-factor below one still helps, but it needs paid or organic growth to keep going.",
    example: "If each user invites 5 people and 20% of invitees sign up, each user brings in 1 new user. That K-factor of 1 means growth sustains itself.",
    lessons: ["growth/viral-coefficient", "growth/referral-programs"],
  },
  {
    term: "LTV",
    slug: "ltv",
    definition:
      "Lifetime Value (also CLV or Customer Lifetime Value): the total revenue a business can expect from a single customer throughout the entire relationship. The LTV/CAC ratio is one of the most important unit economics metrics in growth. A ratio of 3:1 or higher is generally healthy.",
    category: "Growth",
    relatedTerms: ["cac", "churn", "mrr", "payback-period"],
    whyItMatters: "Knowing what a customer is worth tells you how much you can afford to spend to win one. Without it, you either overspend or hold back on profitable channels.",
    example: "If a customer pays $20 a month and stays for 18 months on average, their lifetime value is $360 in revenue. Compare that with your CAC before scaling.",
    lessons: ["email/clv", "analytics/ltv-cac"],
  },
  {
    term: "PLG",
    slug: "plg",
    definition:
      "Product-Led Growth: a go-to-market strategy where the product itself is the primary driver of acquisition, conversion, and expansion. Users experience value before talking to sales. Slack, Figma, and Notion are canonical examples. Opposite of Sales-Led Growth.",
    category: "Growth",
    relatedTerms: ["viral-coefficient", "activation", "freemium", "cac"],
    whyItMatters: "PLG lets the product do the selling, which can lower acquisition costs and speed up adoption. It requires a product that delivers value quickly without a sales call.",
    example: "A design tool offers a free plan. People try it, invite teammates, and eventually upgrade because the team needs more features, with no salesperson involved.",
    lessons: ["growth/plg", "growth/freemium-vs-free-trial"],
  },
  {
    term: "Viral Coefficient",
    slug: "viral-coefficient",
    definition:
      "The average number of new users each existing user generates. Mathematically the same as K-factor. A viral coefficient of 0.5 means every two users bring in one more. True virality (above 1.0) is extremely rare and usually short-lived.",
    category: "Growth",
    relatedTerms: ["k-factor", "referral-program", "plg", "aarrr"],
    whyItMatters: "It tells you if sharing is a real growth engine or a nice extra. Small improvements in invites or conversion compound quickly across each cycle.",
    example: "If each user sends 10 invites and 10% of those people join, the coefficient is 1. Raising conversion to 15% pushes it to 1.5, so growth builds on itself.",
    lessons: ["growth/viral-coefficient", "growth/referral-programs"],
  },

  // Business Metrics
  {
    term: "ARR",
    slug: "arr",
    definition:
      "Annual Recurring Revenue: the annualized value of all active subscription contracts, excluding one-time fees. ARR is the primary valuation metric for SaaS businesses. ARR = MRR x 12. Investors often use ARR multiples to value growth-stage companies.",
    category: "Business Metrics",
    relatedTerms: ["mrr", "ltv", "churn", "gmv"],
    whyItMatters: "ARR shows the size and direction of a subscription business at a glance. Investors and leaders use it to judge growth and plan hiring and spend.",
    example: "If you have 200 customers each paying $50 a month, your monthly recurring revenue is $10,000. Multiplied by 12, your ARR is $120,000. Leaders watch this number to see whether the business is growing from one year to the next.",
    lessons: ["fundamentals/marketing-math", "growth/net-revenue-retention"],
  },
  {
    term: "GMV",
    slug: "gmv",
    definition:
      "Gross Merchandise Value: the total value of goods sold through a marketplace or platform over a period, before subtracting platform fees or returns. GMV is a top-line scale metric for marketplaces like Amazon, Etsy, or Shopify. It is not the same as revenue.",
    category: "Business Metrics",
    relatedTerms: ["arr", "mrr", "ltv", "roas"],
    whyItMatters: "GMV shows how much activity runs through a marketplace, but it is not what the business keeps. Confusing the two can make a company look bigger than it is.",
    example: "If shoppers buy $100,000 of goods through a marketplace and it takes a 10% fee, GMV is $100,000 while the marketplace's revenue is $10,000. Always check which of the two numbers a headline is quoting.",
    lessons: ["growth/two-sided-marketplaces", "analytics/kpis-for-marketers"],
  },
  {
    term: "MRR",
    slug: "mrr",
    definition:
      "Monthly Recurring Revenue: the predictable subscription revenue a company collects each month. MRR is broken into new MRR, expansion MRR, contraction MRR, and churned MRR. Net MRR growth is the pulse of a subscription business.",
    category: "Business Metrics",
    relatedTerms: ["arr", "churn", "ltv", "cac"],
    whyItMatters: "MRR is the clearest read on a subscription business's health month to month. Splitting it into new, expansion and churned revenue shows what is driving change.",
    example: "You start the month with $20,000 MRR, add $3,000 from new customers and lose $1,000 to cancellations. Your MRR ends the month at $22,000. Tracking the pieces separately shows whether growth comes from new sales or from keeping people.",
    lessons: ["growth/net-revenue-retention", "analytics/kpis-for-marketers"],
  },
  {
    term: "NPS",
    slug: "nps",
    definition:
      "Net Promoter Score: a loyalty metric based on one question: how likely are you to recommend this product on a scale of 0 to 10? Respondents scoring 9-10 are promoters; 0-6 are detractors. NPS = % promoters minus % detractors. Scores above 50 are considered excellent.",
    category: "Business Metrics",
    relatedTerms: ["retention", "churn", "ltv", "social-proof"],
    whyItMatters: "NPS gives a simple pulse on loyalty and the chance of referrals. The follow-up comments are often more useful than the score itself. Ask why people gave their score, since the reasons tell you what to fix.",
    example: "If 50 of 100 respondents score 9 or 10, 30 score 7 or 8, and 20 score 0 to 6, your NPS is 50 minus 20, which is 30.",
    lessons: ["events-experiential/post-event-nps-feedback", "analytics/kpis-for-marketers"],
  },
  {
    term: "Payback Period",
    slug: "payback-period",
    definition:
      "The number of months it takes to recoup the cost of acquiring a customer from the gross margin that customer generates. A payback period under 12 months is healthy for most SaaS businesses. Long payback periods require more working capital and create cash flow risk.",
    category: "Business Metrics",
    relatedTerms: ["cac", "ltv", "mrr", "roas"],
    whyItMatters: "It tells you how long your cash is tied up before a customer pays you back. A long payback can strain a business even when the long-term numbers look good.",
    example: "If you spend $300 to win a customer who gives you $50 of gross margin each month, you recover your cost in 6 months. Shorter paybacks let you reinvest sooner and grow faster with the same cash.",
    lessons: ["fundamentals/marketing-math", "analytics/ltv-cac"],
  },
  {
    term: "SAM",
    slug: "sam",
    definition:
      "Serviceable Addressable Market: the portion of TAM that your product can realistically target given its current features, channels, and geography. SAM is a more honest number than TAM and the one serious investors scrutinize when evaluating market size claims.",
    category: "Business Metrics",
    relatedTerms: ["tam", "som", "icp", "value-proposition"],
    whyItMatters: "SAM helps you size the opportunity you can realistically pursue instead of the whole world. It stops you from presenting a huge but unreachable market to yourself or investors.",
    example: "If 10 million people buy project software but your product only works in English for small teams, SAM is the slice that fits those limits, perhaps 1 million.",
    lessons: ["product-marketing/icp", "fundamentals/go-to-market-strategy"],
  },
  {
    term: "SOM",
    slug: "som",
    definition:
      "Serviceable Obtainable Market: the share of SAM your company can realistically capture in the near term, given competition, sales capacity, and go-to-market constraints. SOM is the credible near-term revenue ceiling founders pitch to early investors.",
    category: "Business Metrics",
    relatedTerms: ["sam", "tam", "icp", "cac"],
    whyItMatters: "It keeps your revenue plan honest. Investors and managers trust a number you can actually reach in the next few years far more than a share of an enormous market.",
    example: "If the total market is 1,000,000 buyers but your sales team and budget can realistically reach 20,000 of them, your SOM is 20,000 buyers. Multiply by your price to get a believable revenue target.",
    lessons: ["fundamentals/go-to-market-strategy", "fundamentals/stp"],
  },
  {
    term: "TAM",
    slug: "tam",
    definition:
      "Total Addressable Market: the maximum revenue opportunity available if a product captured 100% of its target market. TAM is often used in pitch decks and is frequently overstated. Always pair with SAM and SOM for a credible market size story.",
    category: "Business Metrics",
    relatedTerms: ["sam", "som", "icp", "positioning"],
    whyItMatters: "TAM tells you whether a market is worth entering at all. Too small and growth caps out early, but quoting it alone as your goal is a classic planning mistake.",
    example: "If 2,000,000 businesses could use your tool and each would pay $300 a year, your TAM is $600 million. That is the ceiling, not a forecast of what you will earn.",
    lessons: ["fundamentals/go-to-market-strategy", "fundamentals/stp"],
  },

  // Strategy
  {
    term: "Brand Equity",
    slug: "brand-equity",
    definition:
      "The commercial value derived from consumer perception of a brand name rather than the product itself. Brand equity allows companies to charge premium prices, launch new products more easily, and weather crises better. It is built slowly through consistent messaging and memorable experiences.",
    category: "Strategy",
    relatedTerms: ["positioning", "value-proposition", "share-of-voice", "social-proof"],
    whyItMatters: "It explains why customers pick you at a higher price or with less persuasion. If you never measure it, you can't tell whether your brand work is building anything or just spending money.",
    example: "Two identical sneakers sit on a shelf, one at $60 with a known name and one at $45 unbranded. If shoppers still choose the $60 pair, the extra $15 is a rough picture of brand equity.",
    lessons: ["brand-strategy/brand-equity", "brand-strategy/brand-tracking"],
  },
  {
    term: "ICP",
    slug: "icp",
    definition:
      "Ideal Customer Profile: a detailed description of the company or person most likely to buy your product, get maximum value from it, and stay a customer. ICP is about fit, not demographics. Getting ICP wrong is the most common reason marketing spend underperforms.",
    category: "Strategy",
    relatedTerms: ["tam", "positioning", "cac", "segmentation"],
    whyItMatters: "Without an ICP, sales and marketing chase everyone and win few. A sharp profile focuses your messaging, ad targeting and outreach on the accounts most likely to buy and stay.",
    example: "A scheduling app might define its ICP as dental clinics with 3 to 10 staff and no online booking. Leads that match get fast follow-up, and leads that don't get a light touch.",
    lessons: ["product-marketing/icp", "fundamentals/stp"],
  },
  {
    term: "Positioning",
    slug: "positioning",
    definition:
      "The deliberate choice of how your brand or product occupies a distinct place in the mind of the customer relative to alternatives. Positioning is about the frame of reference you compete in and the differentiated value you claim. April Dunford's 'Obviously Awesome' is the canonical modern reference.",
    category: "Strategy",
    relatedTerms: ["value-proposition", "icp", "brand-equity", "share-of-voice"],
    whyItMatters: "Positioning decides what people compare you to and what they expect to pay. If you leave it vague, buyers fill the gap themselves, usually by lumping you in with cheaper alternatives.",
    example: "A note-taking app could say it is a 'notebook for busy lawyers' instead of 'a note app'. That choice changes the comparison set, the price it can ask and the words in every ad.",
    lessons: ["fundamentals/positioning", "product-marketing/positioning-doc"],
  },
  {
    term: "Share of Voice",
    slug: "share-of-voice",
    definition:
      "The percentage of total advertising or marketing activity in a category that belongs to your brand, relative to competitors. Research by Binet and Field shows that excess share of voice (your SOV minus your market share) is one of the strongest predictors of market share growth.",
    category: "Strategy",
    relatedTerms: ["brand-equity", "impressions", "reach", "positioning"],
    whyItMatters: "It shows whether you are keeping pace with competitors in attention. A brand whose share of voice sits below its market share tends to lose ground, so it guides budget decisions.",
    example: "If five brands spend $100,000 on ads in total and yours spends $30,000, your share of voice is 30%. If you hold only 20% of sales, you are likely under-investing.",
    lessons: ["brand-strategy/how-brands-grow", "brand-strategy/brand-tracking"],
  },
  {
    term: "Value Proposition",
    slug: "value-proposition",
    definition:
      "A clear statement of the benefit a product delivers, who it is for, and why it is better than alternatives. A good value proposition is specific, measurable, and customer-centric. It answers: 'Why should I buy from you instead of anyone else?'",
    category: "Strategy",
    relatedTerms: ["positioning", "icp", "brand-equity", "cta"],
    whyItMatters: "Visitors decide in seconds whether a page is for them. A clear value proposition is what stops them leaving, and a fuzzy one makes every ad and email work harder than it should.",
    example: "'Invoicing for freelancers that gets you paid in 7 days, not 30' is a value proposition. It names who it helps, the result they get and a rough timeframe in one line.",
    lessons: ["fundamentals/value-proposition", "copywriting/value-prop-copy"],
  },

  // CRO
  {
    term: "Above the Fold",
    slug: "above-the-fold",
    definition:
      "The portion of a webpage visible without scrolling. Borrowed from newspaper printing where the top half of a folded paper had the most important stories. In digital, the fold varies by screen size. Content above the fold must immediately communicate value.",
    category: "CRO",
    relatedTerms: ["hero-section", "cta", "landing-page", "conversion-rate"],
    whyItMatters: "Most visitors never scroll, so what appears first on screen decides whether they stay. Burying the offer or the button below the fold quietly wastes your traffic.",
    example: "On a laptop, a landing page might show a headline, one line of proof and a 'Start free trial' button before any scrolling. Everything else supports that first screen.",
    lessons: ["cro/landing-page-anatomy", "cro/hero-formula"],
  },
  {
    term: "CRO",
    slug: "cro",
    definition:
      "Conversion Rate Optimization: the systematic process of increasing the percentage of visitors who complete a desired action. CRO combines quantitative data (analytics, A/B tests) with qualitative research (heatmaps, session recordings, user interviews) to find and fix what stops people from converting.",
    category: "CRO",
    relatedTerms: ["a-b-test", "conversion-rate", "landing-page", "heatmap"],
    whyItMatters: "It lets you grow results without buying more traffic. A small lift in conversion rate is often cheaper than doubling your ad spend, and it shows which parts of a page really work.",
    example: "If 10,000 visitors a month convert at 2%, you get 200 sign-ups. Lifting the rate to 2.5% through page fixes gives 250 sign-ups with no extra traffic cost.",
    lessons: ["cro/cro-101", "cro/conversion-rate-math"],
  },
  {
    term: "CTA",
    slug: "cta",
    definition:
      "Call to Action: a button, link, or instruction prompting the user to take a specific next step, such as 'Start Free Trial' or 'Download Now.' CTAs should be specific about what happens next. 'Get Started' consistently outperforms 'Submit' in testing.",
    category: "CRO",
    relatedTerms: ["landing-page", "above-the-fold", "microcopy", "conversion-rate"],
    whyItMatters: "A weak or unclear CTA leaves interested people with nowhere to go. The wording and placement of this one element often decide whether a good page earns any results.",
    example: "Changing a button from 'Submit' to 'Get my free audit' tells people what they receive. You would then test the two versions to see which one earns more clicks.",
    lessons: ["copywriting/cta-copy", "cro/button-design"],
  },
  {
    term: "Gated Content",
    slug: "gated-content",
    definition:
      "Content that requires visitors to submit information (usually an email address) before accessing it. Ebooks, whitepapers, and webinar recordings are common gated content types. Gating trades traffic for leads; the right choice depends on your conversion funnel and content quality.",
    category: "CRO",
    relatedTerms: ["lead-magnet", "landing-page", "conversion-rate", "drip-campaign"],
    whyItMatters: "Gating trades access for contact details, so the call is about balance. Gate too much and few people see your work, gate nothing and you capture no leads at all.",
    example: "A 40-page buyer's guide sits behind an email form, while the blog posts around it stay open. Readers who want the full guide give an address, and the rest still find you.",
    lessons: ["content/gated-content", "content/lead-magnets"],
  },
  {
    term: "Heatmap",
    slug: "heatmap",
    definition:
      "A visual data representation showing where users click, move, and scroll on a webpage. Heatmaps reveal what draws attention and what gets ignored. Tools like Hotjar and Microsoft Clarity generate heatmaps. Used in CRO research to identify friction and prioritize changes.",
    category: "CRO",
    relatedTerms: ["cro", "session-recording", "conversion-rate", "bounce-rate"],
    whyItMatters: "Numbers tell you a page underperforms but not why. A heatmap shows where people click and scroll, so you can spot ignored buttons and content nobody reaches.",
    example: "If a heatmap shows most clicks landing on a non-clickable image and almost none on your button, you know the image looks like a link. Move or restyle the button.",
    lessons: ["analytics/heatmaps", "tools/hotjar-clarity"],
  },
  {
    term: "Hero Section",
    slug: "hero-section",
    definition:
      "The prominent banner area at the top of a webpage, typically containing a headline, subheadline, supporting image or video, and a primary CTA. The hero section is the highest-leverage section of any landing page because it is seen by every visitor before they decide to stay or leave.",
    category: "CRO",
    relatedTerms: ["above-the-fold", "cta", "landing-page", "value-proposition"],
    whyItMatters: "It is the first thing most visitors read, so it sets whether they keep going. A cluttered or vague hero loses people before your product has had any chance to explain itself.",
    example: "A good hero pairs one clear headline, a short supporting line, a single button and a relevant image. A weak one has three buttons, a slideshow and a slogan nobody understands.",
    lessons: ["cro/hero-formula", "cro/landing-page-anatomy"],
  },
  {
    term: "Landing Page",
    slug: "landing-page",
    definition:
      "A standalone web page designed for a single conversion goal, typically tied to a specific ad or campaign. Unlike homepages, landing pages remove navigation and distractions. A good landing page matches the message and intent of the ad that sent someone there.",
    category: "CRO",
    relatedTerms: ["cta", "hero-section", "conversion-rate", "lead-magnet"],
    whyItMatters: "A page built for one goal converts better than a general site page with many exits. Sending paid traffic to your homepage often wastes money that a focused page would save.",
    example: "An ad for 'free CRM trial' links to a page with only that offer, a short form and a few testimonials. There is no main menu pulling visitors elsewhere.",
    lessons: ["copywriting/landing-page-copy", "paid-ads/landing-page-message-match"],
  },
  {
    term: "Lead Magnet",
    slug: "lead-magnet",
    definition:
      "A free resource or incentive offered in exchange for a visitor's contact information. Common lead magnets include checklists, templates, ebooks, free trials, and discount codes. The strongest lead magnets solve a specific, urgent problem for the target customer.",
    category: "CRO",
    relatedTerms: ["gated-content", "landing-page", "drip-campaign", "welcome-series"],
    whyItMatters: "Visitors rarely hand over an email for nothing. A good lead magnet gives a fair reason, and it also attracts the right people instead of anyone who wants a freebie.",
    example: "A personal finance blog offers a spreadsheet template for tracking monthly spending. Someone who downloads it is clearly interested in budgeting, so follow-up emails stay relevant.",
    lessons: ["content/lead-magnets", "content/gated-content"],
  },
  {
    term: "Microcopy",
    slug: "microcopy",
    definition:
      "Small pieces of instructional or reassuring text on a webpage or app that guide users: button labels, form field hints, error messages, tooltips, and empty state descriptions. Well-crafted microcopy reduces hesitation and improves completion rates on forms and checkouts.",
    category: "CRO",
    relatedTerms: ["cta", "above-the-fold", "conversion-rate", "power-words"],
    whyItMatters: "Tiny words decide whether people finish a form or give up. Unclear labels and cold error messages cause drop-offs that look like traffic problems but are really wording problems.",
    example: "Replace the error 'Invalid input' with 'Your password needs at least 8 characters.' Fewer people get stuck, and fewer abandon the sign-up form halfway, so more sign-ups finish.",
    lessons: ["copywriting/microcopy", "copywriting/ux-writing-microcopy"],
  },
  {
    term: "Session Recording",
    slug: "session-recording",
    definition:
      "A video replay of an individual user's interaction with a website, capturing mouse movements, clicks, scrolls, and keystrokes. Session recordings provide qualitative context that analytics cannot. They reveal why people drop off, not just where.",
    category: "CRO",
    relatedTerms: ["heatmap", "cro", "bounce-rate", "funnel"],
    whyItMatters: "Aggregate stats hide the real struggle. Watching individual visits shows where people hesitate, rage click or hit bugs, which helps you find problems nobody thought to look for.",
    example: "You watch ten recordings of a checkout and notice seven people tap a disabled coupon field repeatedly. That points to a clear fix: make the coupon box obvious or remove it.",
    lessons: ["analytics/session-recording", "tools/hotjar-clarity"],
  },
  {
    term: "Statistical Significance",
    slug: "statistical-significance",
    definition:
      "A measure of confidence that the result of an experiment is real and not due to random variation. Typically set at 95% confidence in marketing experiments. Calling a test winner too early is the most common A/B testing mistake, especially with small sample sizes.",
    category: "CRO",
    relatedTerms: ["ab-test", "cro", "conversion-rate", "sample-size"],
    whyItMatters: "It tells you whether a test result is likely real or just luck. Stopping a test early on a lucky streak leads to changes that don't actually help.",
    example: "If version B beats A by 5% after only 40 visitors each, that could easily be chance. Waiting until the sample is large enough tells you if the gap holds.",
    lessons: ["growth/ab-testing", "cro/sample-size-math"],
  },

  // Psychology
  {
    term: "Anchoring",
    slug: "anchoring",
    definition:
      "A cognitive bias where the first piece of information encountered heavily influences subsequent judgments. In pricing, showing a higher price first makes subsequent prices feel like a bargain. Anchoring is why 'was $199, now $99' outperforms 'only $99.'",
    category: "Psychology",
    relatedTerms: ["decoy-effect", "loss-aversion", "fomo", "pricing-psychology"],
    whyItMatters: "The first number people see shapes how they judge everything after it. If you ignore this, your real price can look expensive simply because nothing made it look reasonable.",
    example: "Show a $200 plan first, then a $80 plan. The $80 option feels like a bargain, even though the same price would feel high if shown alone.",
    lessons: ["psychology/anchoring-framing", "fundamentals/pricing-psychology"],
  },
  {
    term: "Decoy Effect",
    slug: "decoy-effect",
    definition:
      "A phenomenon where adding a third, dominated option changes preferences between two existing options. The Economist famously used a print-only option ($125) to make a print+digital bundle ($125) look like a bargain compared to digital-only ($59). Used extensively in pricing design.",
    category: "Psychology",
    relatedTerms: ["anchoring", "loss-aversion", "pricing-psychology", "cro"],
    whyItMatters: "Adding a deliberately weaker option can steer people toward the one you want. Marketers use it in pricing pages, so it is worth spotting in both your own and others' offers.",
    example: "Offer a small coffee at $3 and a large at $5. Add a medium at $4.80, and the large suddenly looks like the clear deal for most buyers.",
    lessons: ["fundamentals/pricing-psychology", "psychology/anchoring-framing"],
  },
  {
    term: "FOMO",
    slug: "fomo",
    definition:
      "Fear of Missing Out: the anxiety that others are experiencing something desirable that you are not. In marketing, FOMO is triggered by scarcity cues, countdowns, social proof, and exclusivity signals. Genuine scarcity is effective; manufactured scarcity erodes long-term trust.",
    category: "Psychology",
    relatedTerms: ["social-proof", "loss-aversion", "anchoring", "cta"],
    whyItMatters: "Fear of missing out can lift conversions, but fake urgency destroys trust. Knowing the line between genuine scarcity and manipulation protects both your results and your reputation.",
    example: "A course really closes enrolment on Friday because the cohort is capped at 30 seats. Saying so honestly creates urgency; a countdown timer that resets every visit does not.",
    lessons: ["psychology/scarcity-urgency", "cro/urgency-design"],
  },
  {
    term: "Loss Aversion",
    slug: "loss-aversion",
    definition:
      "The psychological tendency for losses to feel approximately twice as painful as equivalent gains feel pleasurable, as established by Kahneman and Tversky. Copy framed around what someone stands to lose ('Stop losing customers') consistently outperforms gain-framed alternatives.",
    category: "Psychology",
    relatedTerms: ["fomo", "anchoring", "decoy-effect", "social-proof"],
    whyItMatters: "People feel a loss more strongly than an equal gain, so how you frame an offer changes the response. Ignoring it means pitching benefits when the pain of missing out might persuade better.",
    example: "'Don't lose your saved progress' often motivates more than 'Keep your progress.' A trial email that says 'Your 14 days end tomorrow' leans on the same instinct.",
    lessons: ["psychology/loss-aversion", "mental-models/loss-aversion-marketing"],
  },
  {
    term: "Power Words",
    slug: "power-words",
    definition:
      "Emotionally charged words that trigger psychological responses and increase engagement or conversion. Examples include: 'proven,' 'instantly,' 'secret,' 'guaranteed,' 'limited,' and 'you.' Power words work because they activate sensory and emotional processing rather than analytical reading.",
    category: "Psychology",
    relatedTerms: ["microcopy", "cta", "storytelling", "loss-aversion"],
    whyItMatters: "Word choice changes how a headline or button feels. Used with care they raise clarity and emotion, but piling them on makes copy sound like spam.",
    example: "Swap 'Learn about our plans' for 'See which plan fits you.' The second uses direct, personal words and tends to feel more useful, so you would test it against the original.",
    lessons: ["copywriting/power-words", "copywriting/ab-testing-copy"],
  },
  {
    term: "Social Proof",
    slug: "social-proof",
    definition:
      "The psychological tendency to look to others' behavior as a guide for our own, especially in uncertain situations. In marketing, social proof takes the form of reviews, testimonials, case studies, user counts, and media logos. 'Used by 50,000 marketers' is social proof.",
    category: "Psychology",
    relatedTerms: ["fomo", "nps", "brand-equity", "cro"],
    whyItMatters: "People copy what others like them do, especially when unsure. Skipping proof leaves visitors alone with the risk, while weak or fake proof can backfire badly.",
    example: "A product page showing '214 reviews, average 4.6 out of 5' and a short quote from a similar buyer reassures newcomers more than a bold claim from the brand itself.",
    lessons: ["psychology/social-proof-psychology", "cro/social-proof-engineering"],
  },
  {
    term: "Storytelling",
    slug: "storytelling",
    definition:
      "The use of narrative structure to communicate a brand or product message in a way that is emotionally engaging and memorable. Neuroscience research shows that stories activate more brain regions than data alone, making narrative-driven content more persuasive and easier to recall.",
    category: "Psychology",
    relatedTerms: ["power-words", "social-proof", "brand-equity", "value-proposition"],
    whyItMatters: "Stories are easier to remember and care about than lists of features. A clear narrative gives people a reason to keep reading and helps them see themselves in your message.",
    example: "Instead of listing a budgeting app's features, you tell of one person who paid off a debt by tracking small daily spending. The features appear as steps in that journey.",
    lessons: ["psychology/storytelling-psychology", "copywriting/storybrand"],
  },

  // Content
  {
    term: "Content Cluster",
    slug: "content-cluster",
    definition:
      "A content strategy where a pillar page covers a broad topic in depth and is supported by multiple cluster pages covering subtopics in detail, all linked together. Content clusters build topical authority with search engines, helping all pages rank better for their target terms.",
    category: "Content",
    relatedTerms: ["serp", "domain-authority", "backlink", "featured-snippet"],
    whyItMatters: "Search engines reward sites that cover a subject in depth. Clusters organise that depth so related pages support each other instead of competing or sitting unconnected.",
    example: "A cluster on 'email marketing' has one broad guide linking to pages on subject lines, list cleaning and automation. Each smaller page links back up to the guide.",
    lessons: ["seo/content-clusters", "content/topic-clusters"],
  },
  {
    term: "Dynamic Content",
    slug: "dynamic-content",
    definition:
      "Website or email content that automatically changes based on the viewer's characteristics, behavior, location, or stage in the customer journey. Dynamic content is a form of personalization at scale. It requires data infrastructure and segmentation to execute correctly.",
    category: "Content",
    relatedTerms: ["personalization", "segmentation", "drip-campaign", "cro"],
    whyItMatters: "One message for everyone wastes relevance. Dynamic content lets a page or email adapt to who is reading, which can raise engagement without writing endless separate versions.",
    example: "An email shows a banner for running shoes to someone who browsed running gear and a banner for hiking boots to someone who browsed trails. The rest stays identical.",
    lessons: ["ai-marketing/ai-personalization", "cro/personalization-cro"],
  },
  {
    term: "Personalization",
    slug: "personalization",
    definition:
      "Tailoring marketing messages, content, or product experiences to individual users based on their behavior, preferences, or attributes. Effective personalization increases conversion rates. Poor personalization (using someone's first name while ignoring their behavior) creates the illusion of relevance without the substance.",
    category: "Content",
    relatedTerms: ["segmentation", "dynamic-content", "drip-campaign", "cro"],
    whyItMatters: "Relevance beats volume. Tailoring messages to behavior or stage improves response, but doing it badly feels creepy or wrong, so it needs a clear data basis and care.",
    example: "A welcome email uses the sign-up goal the person picked, so a user who chose 'save time' sees automation tips first. It is simple, and it uses data they gave willingly.",
    lessons: ["cro/personalization-cro", "ai-marketing/ai-personalization"],
  },

  // Additional terms
  {
    term: "Bidding Strategy",
    slug: "bidding-strategy",
    definition:
      "The method an advertiser uses to set bids for ad auctions. Options range from manual CPC (full control) to automated strategies like target CPA, target ROAS, and maximize conversions (algorithmic control). Automated strategies require sufficient conversion data to perform well.",
    category: "Paid Ads",
    relatedTerms: ["ad-rank", "quality-score", "cpc", "roas"],
    whyItMatters: "The bidding setting decides how your budget turns into clicks or conversions. Choosing the wrong one can burn money fast or starve a campaign of traffic it needs.",
    example: "With manual bidding you set a $1.50 cap per click. With a target cost-per-sale setting you give the platform a goal of $20 and let it adjust each bid for you.",
    lessons: ["paid-ads/bidding-strategies"],
  },
  {
    term: "Dark Social",
    slug: "dark-social",
    definition:
      "Traffic that arrives through private sharing channels that analytics tools cannot track: direct messages, emails, WhatsApp, Slack, and copy-pasting URLs. Estimated to account for 84% of social sharing. Dark social causes analytics tools to misattribute traffic as 'direct.'",
    category: "Analytics",
    relatedTerms: ["utm", "attribution", "share-of-voice", "social-proof"],
    whyItMatters: "A large share of sharing happens in private chats and messages that analytics tools label 'direct'. Ignoring it makes your best channels look weaker than they really are.",
    example: "A reader sends your article link to a friend on a messaging app. The friend visits, and your report logs it as direct traffic, hiding where the visit really began.",
    lessons: ["analytics/dark-social", "social/dark-social-strategy"],
  },
  {
    term: "Freemium",
    slug: "freemium",
    definition:
      "A monetization model where a core product is free forever, with premium features available for a paid subscription. Freemium drives top-of-funnel volume but requires high conversion rates from free to paid to be economically viable. Slack, Spotify, and Dropbox use this model.",
    category: "Growth",
    relatedTerms: ["plg", "ltv", "cac", "activation"],
    whyItMatters: "It can build a large user base cheaply, but only if enough free users upgrade. Without a clear upgrade reason, you pay to serve people who never become customers.",
    example: "A design app lets anyone make three projects free, then asks for $10 a month for unlimited ones. If 5 of every 100 free users upgrade, revenue comes from that group.",
    lessons: ["growth/freemium-vs-free-trial", "growth/reverse-trials-monetization"],
  },
  {
    term: "Growth Loop",
    slug: "growth-loop",
    definition:
      "A self-reinforcing cycle where the output of one user action becomes the input for acquiring more users. Unlike funnels that run out, loops compound. Dropbox's referral program is a classic loop: users invite friends, friends sign up, some become users who invite more friends.",
    category: "Growth",
    relatedTerms: ["viral-coefficient", "k-factor", "aarrr", "plg"],
    whyItMatters: "Funnels leak, while loops feed themselves. A loop uses its output as the next input, so growth can compound instead of needing constant new spend.",
    example: "A user creates a public page with your tool, a visitor sees it, signs up and creates their own page. Each new user brings the next one without an ad.",
    lessons: ["growth/growth-loops", "growth/b2b-growth-loops"],
  },
  {
    term: "KPI",
    slug: "kpi",
    definition:
      "Key Performance Indicator: a quantifiable measure used to evaluate success against objectives. Good KPIs are specific, measurable, and tied directly to business outcomes. Most teams track too many KPIs; the best teams identify the 3 to 5 that actually predict what matters.",
    category: "Analytics",
    relatedTerms: ["north-star-metric", "arr", "mrr", "conversion-rate"],
    whyItMatters: "Tracking everything buries what matters. A few well-chosen KPIs show whether you are hitting your goals, and which team actions to double down on or drop.",
    example: "If your goal is more trial sign-ups, a useful KPI is weekly sign-ups per channel. Page views alone would not say if the traffic is the right kind.",
    lessons: ["analytics/kpis-for-marketers", "marketing-leadership/marketing-kpi-north-star"],
  },
  {
    term: "Multivariate Test",
    slug: "multivariate-test",
    definition:
      "An experiment that tests multiple variables simultaneously to find which combination produces the best result. Unlike A/B tests that change one element, multivariate tests can reveal interaction effects between elements. They require very large sample sizes to reach statistical significance.",
    category: "CRO",
    relatedTerms: ["ab-test", "statistical-significance", "cro", "conversion-rate"],
    whyItMatters: "It reveals how page elements interact, not just which single version wins. It needs far more traffic than an A/B test, so using it on a small site gives unclear results.",
    example: "Test two headlines and two images together, giving four combinations. You might learn headline B wins, but only when it is paired with image A, never with image B.",
    lessons: ["cro/multivariate-vs-ab", "growth/ab-testing"],
  },
  {
    term: "MMM",
    slug: "mmm",
    definition:
      "Marketing Mix Modeling: a statistical technique that quantifies the contribution of each marketing channel to sales outcomes using aggregated historical data. MMM does not require user-level tracking, making it privacy-safe. It is best for measuring long-term brand investment.",
    category: "Analytics",
    relatedTerms: ["attribution", "multi-touch", "roas", "incrementality"],
    whyItMatters: "Click tracking breaks down with privacy limits and offline channels. MMM looks at spend and sales over time to estimate what each channel contributes, without needing user-level data.",
    example: "If sales rise in weeks when TV and search spend both climb, MMM uses many weeks of data to estimate how much of the lift came from each channel.",
    lessons: ["analytics/mmm", "paid-ads/mmm-vs-mta"],
  },
  {
    term: "Incrementality",
    slug: "incrementality",
    definition:
      "The true causal impact of a marketing action on business outcomes, measured by comparing a test group exposed to an ad with a holdout group that was not. Incrementality testing is the gold standard for measuring whether an ad actually caused a conversion.",
    category: "Analytics",
    relatedTerms: ["mmm", "attribution", "ab-test", "roas"],
    whyItMatters: "Reported conversions include people who would have bought anyway. Incrementality shows the extra sales your marketing really caused, which keeps you from paying for results you'd get free.",
    example: "Show an ad to 90% of an audience and hold back the other 10%. If the ad group converts at 5% and the held-back group at 4%, the real lift is one point.",
    lessons: ["analytics/incrementality"],
  },
  {
    term: "Referral Program",
    slug: "referral-program",
    definition:
      "A structured incentive for existing customers to refer new customers, usually rewarding both parties. Dropbox's referral program (500MB for each referral) grew their user base 3900% in 15 months. The most effective referral programs make sharing feel generous, not transactional.",
    category: "Growth",
    relatedTerms: ["viral-coefficient", "k-factor", "cac", "ltv"],
    whyItMatters: "Happy customers are a cheap, trusted source of new buyers. A poorly designed reward, though, attracts one-off deal hunters, so the structure and the rules of the reward matter a great deal.",
    example: "A meal kit gives existing customers $20 credit for each friend who places a first order. If 10 friends join, the cost is $200, which you compare to your ad cost per customer.",
    lessons: ["growth/referral-programs", "legal-compliance/loyalty-referral-program-law"],
  },
  {
    term: "Zero-Click Search",
    slug: "zero-click",
    definition:
      "A search that ends on the results page without the user clicking any result, because Google's SERP itself answered the question via a featured snippet, knowledge panel, or AI Overview. Studies show roughly 50% of searches are zero-click. Brands must optimize for visibility, not just clicks.",
    category: "SEO",
    relatedTerms: ["serp", "featured-snippet", "ctr", "domain-authority"],
    whyItMatters: "More searches end on the results page itself. If you only measure clicks, you miss the visibility and brand exposure you gain from appearing in answers.",
    example: "Someone searches 'how long to boil eggs' and reads the answer in a box at the top. Your site supplied it, but no click appears in your traffic report.",
    lessons: ["seo/zero-click-search"],
  },
  {
    term: "Internal Linking",
    slug: "internal-linking",
    definition:
      "The practice of linking from one page on your website to another page on the same site. Internal links distribute page authority (PageRank), help search engines crawl and understand your content, and guide users to related information. Often called the most underrated lever in SEO.",
    category: "SEO",
    relatedTerms: ["backlink", "anchor-text", "domain-authority", "content-cluster"],
    whyItMatters: "Links between your own pages pass authority and show search engines which pages matter. Weak linking leaves good pages hidden and visitors stuck after one article.",
    example: "A guide on email subject lines links to your pages on open rates and A/B testing. Those pages link back, so readers and crawlers move through the topic.",
    lessons: ["seo/internal-linking"],
  },

  // SEO additions
  {
    term: "E-E-A-T",
    slug: "eeat",
    definition:
      "Experience, Expertise, Authoritativeness, and Trustworthiness: the four qualities Google uses to evaluate content quality through its Search Quality Rater Guidelines. Added 'Experience' in 2022 to reward first-hand expertise. High E-E-A-T matters most in YMYL (your money or your life) topics like health, finance, and legal.",
    category: "SEO",
    relatedTerms: ["domain-authority", "backlink", "serp", "featured-snippet"],
    whyItMatters: "Search quality raters and algorithms look for signals that content comes from people who know the subject. Thin, anonymous pages struggle, especially on health and money topics.",
    example: "A finance article shows the author's credentials, cites sources and explains how figures were calculated. An anonymous article with no references offers readers less reason to trust it.",
    lessons: ["seo/eeat"],
  },
  {
    term: "Canonical Tag",
    slug: "canonical-tag",
    definition:
      "An HTML tag that tells search engines which version of a page is the 'original' when similar or duplicate content exists across multiple URLs. Prevents duplicate content from diluting your rankings. Commonly used on e-commerce sites where the same product appears under multiple filter URLs.",
    category: "SEO",
    relatedTerms: ["serp", "domain-authority", "backlink", "internal-linking"],
    whyItMatters: "Duplicate or near-duplicate pages split ranking signals and confuse crawlers. A canonical tag points search engines to the single version you want counted, so ranking strength stays in one place.",
    example: "A product page loads at a plain URL and at one with a tracking parameter. Adding a canonical tag to the plain version tells search engines to treat both as one page.",
    lessons: ["seo/technical-seo"],
  },
  {
    term: "Crawl Budget",
    slug: "crawl-budget",
    definition:
      "The number of pages a search engine will crawl on your site within a given timeframe. Crawl budget is finite and can be wasted on low-value pages, pagination, and duplicate URLs. Large sites actively manage crawl budget by using robots.txt, canonical tags, and noindex directives.",
    category: "SEO",
    relatedTerms: ["serp", "canonical-tag", "internal-linking", "domain-authority"],
    whyItMatters: "On large sites, search engines may not visit every page often. If bots waste time on junk URLs, your important new pages can be found and updated late.",
    example: "A shop with filters creates thousands of near-identical URLs. Blocking or consolidating them lets crawlers spend their limited visits on real product and category pages.",
    lessons: ["seo/technical-seo"],
  },
  {
    term: "Schema Markup",
    slug: "schema-markup",
    definition:
      "Structured data added to a page's HTML using vocabulary from Schema.org that helps search engines understand the content's context. Schema can unlock rich results like star ratings, FAQs, recipes, and event listings in SERPs. It does not directly boost rankings but can significantly increase click-through rates.",
    category: "SEO",
    relatedTerms: ["serp", "featured-snippet", "ctr", "core-web-vitals"],
    whyItMatters: "It helps search engines and AI tools read what a page is about. Without it they must guess, and you may miss rich results like star ratings or FAQs.",
    example: "A recipe page adds markup for cook time, ingredients and rating. Search engines can then show those details directly in results instead of a plain blue link.",
    lessons: ["seo/schema-structured-data"],
  },
  {
    term: "Long-Tail Keywords",
    slug: "long-tail-keywords",
    definition:
      "Search queries that are longer, more specific, and lower in search volume than head terms. For example, 'best email marketing tool for e-commerce under $50/month' is long-tail versus 'email marketing.' Long-tail keywords convert better because searchers have clearer intent, and competition is typically lower.",
    category: "SEO",
    relatedTerms: ["serp", "featured-snippet", "content-cluster", "zero-click"],
    whyItMatters: "Short, popular terms are crowded and vague. Longer phrases bring fewer searches but clearer intent, so smaller sites can often rank and convert better there than on head terms.",
    example: "'Shoes' is broad and fierce. 'Waterproof trail running shoes for wide feet' gets fewer searches, but the person typing it knows what they want and is closer to buying.",
    lessons: ["seo/keyword-research"],
  },
  {
    term: "PageRank",
    slug: "pagerank",
    definition:
      "Google's original algorithm that scores pages based on the number and quality of links pointing to them, treating each link as a vote of confidence. PageRank still underlies Google's link evaluation but has been layered with hundreds of other signals. Internal links pass PageRank between pages on the same site.",
    category: "SEO",
    relatedTerms: ["backlink", "domain-authority", "internal-linking", "anchor-text"],
    whyItMatters: "It explains why links from respected pages carry weight, and why link quality beats raw link count. That shapes how you plan outreach and site structure.",
    example: "One link from a well-known industry publication can matter more than fifty links from unknown directory pages, since the first passes more trust to your page.",
    lessons: ["seo/link-building", "seo/internal-linking"],
  },
  {
    term: "LLMO",
    slug: "llmo",
    definition:
      "Large Language Model Optimization: the practice of structuring content so that AI tools like ChatGPT, Claude, and Perplexity cite your brand or content in their responses. LLMO overlaps with traditional SEO but emphasizes concise, factual, quotable writing that AI summarizes well. Also called GEO (Generative Engine Optimization).",
    category: "SEO",
    relatedTerms: ["serp", "zero-click", "featured-snippet", "eeat"],
    whyItMatters: "People now ask AI tools for answers instead of searching. If models don't mention or understand your brand, you lose visibility in a growing discovery channel.",
    example: "You publish clear, factual pages describing what your product does and who it's for, and get mentioned on trusted sites. An AI assistant then has better material to quote.",
    lessons: ["seo/llmo", "seo/ai-search-visibility-metrics"],
  },

  // AI Search additions (2026)
  {
    term: "AI Overview",
    slug: "ai-overview",
    definition:
      "Google's AI-generated summary shown above traditional search results, synthesizing multiple web sources, the Knowledge Graph, and Google's own data into one answer box. Rebranded from the 2023 Search Generative Experience (SGE) beta in May 2024, it reached roughly 2.5 billion monthly users and appeared on an estimated 48-60% of Google searches by mid-2026.",
    category: "SEO",
    relatedTerms: ["zero-click", "aeo", "geo", "eeat"],
    whyItMatters: "AI-written summaries at the top of results can answer a question before anyone clicks. You need to know whether you are cited, and how that changes your traffic.",
    example: "A search shows a short generated answer with three source links. Being one of those sources gives you exposure, while those left out may see fewer clicks.",
    lessons: ["seo/ai-overviews-geo", "seo/ai-search-visibility-metrics"],
  },
  {
    term: "AEO",
    slug: "aeo",
    definition:
      "Answer Engine Optimization: structuring content so AI answer engines, ChatGPT, Perplexity, Google AI Overviews, Gemini, quote or cite it directly inside a generated answer instead of just linking to it. AEO competes for the sentence an AI reads back to the user, not just a ranking position. Google's own 2026 guidance frames AEO as an extension of SEO, not a separate ranking system.",
    category: "SEO",
    relatedTerms: ["geo", "ai-overview", "featured-snippet", "llmo"],
    whyItMatters: "More questions are answered directly by assistants and answer boxes. Writing content that gives short, clear answers makes you more likely to be the source chosen.",
    example: "A page answers 'How long does a visa take?' in one plain sentence under a clear heading, then adds detail below. That format is easy for engines to lift.",
    lessons: ["seo/aeo", "seo/zero-click-search"],
  },
  {
    term: "GEO",
    slug: "geo",
    definition:
      "Generative Engine Optimization: the broader discipline of optimizing a brand's entire content and data footprint, site, third-party mentions, reviews, forums, so generative AI models are more likely to retrieve, trust, and reference it. Coined in a 2024 Princeton/Georgia Tech research paper that showed citation share could be boosted 22-41% through statistics, quotations, and authoritative sourcing.",
    category: "SEO",
    relatedTerms: ["aeo", "llmo", "rag", "entity-seo"],
    whyItMatters: "Generative tools build answers from many sources. Optimizing for them means being clear, credible and widely referenced, so your brand is included in what they write.",
    example: "A software company keeps its product facts consistent across its site, review pages and press mentions. Generative tools then find the same details and repeat them correctly.",
    lessons: ["seo/ai-overviews-geo", "seo/llmo"],
  },
  {
    term: "RAG (Retrieval-Augmented Generation)",
    slug: "rag",
    definition:
      "The technique AI search tools use to look up real, current information from the web or a database and ground their generated answer in it, instead of answering purely from training memory. Every major AI answer engine runs some version of retrieve, rerank, then generate, which is why content structure and freshness directly affect whether a page gets pulled into an answer.",
    category: "SEO",
    relatedTerms: ["geo", "vector-embedding", "query-fan-out", "ai-overview"],
    whyItMatters: "It reduces made-up answers by letting a model look things up first. For marketers it means AI that can use your own brand docs, not just general knowledge.",
    example: "A support bot searches your help articles for the closest passages, then writes its reply from those. Without that lookup it might invent a refund policy.",
    lessons: ["ai-marketing/rag-for-marketers"],
  },
  {
    term: "Query Fan-Out",
    slug: "query-fan-out",
    definition:
      "A technique where Google's AI Overviews and AI Mode silently issue multiple related sub-queries beyond the literal search typed, then build the final answer from whichever pages surface consistently across all of them. This is why a page can earn an AI citation without ranking #1 for the exact typed query, and why topical authority across a cluster matters more than single-page optimization.",
    category: "SEO",
    relatedTerms: ["ai-overview", "content-cluster", "rag", "eeat"],
    whyItMatters: "AI search turns one question into many sub-searches. If your content only covers the main phrase, you may miss the related questions the system actually looks up.",
    example: "Someone asks for the best laptop for students. The system may also search battery life, price ranges and reviews, so pages covering those angles have more chances to be used.",
    lessons: ["seo/ai-overviews-geo", "seo/ai-search-visibility-metrics"],
  },
  {
    term: "Vector Embedding",
    slug: "vector-embedding",
    definition:
      "A numerical representation of text's meaning used by AI systems to match content by semantic similarity rather than exact keyword overlap. Retrieval systems chunk a page (commonly 300-1000 tokens), embed each chunk into vector space, and match it to a query by closeness in that space, which is why a page's internal heading structure functions as a de facto retrieval unit.",
    category: "SEO",
    relatedTerms: ["rag", "geo", "content-cluster"],
    whyItMatters: "Modern search and AI match on meaning, not exact words. Understanding this explains why clear, topic-rich writing can surface for queries that never use your exact phrase.",
    example: "The phrases 'cheap flights' and 'low-cost airfare' land close together as number lists, so a system treats them as similar even though they share no words.",
    lessons: ["ai-marketing/rag-for-marketers"],
  },
  {
    term: "Entity SEO",
    slug: "entity-seo",
    definition:
      "Optimizing so search engines and AI systems recognize your brand, products, and people as distinct, disambiguated 'entities' connected within Google's Knowledge Graph and Wikidata, rather than just strings of text matching a query. Wikidata-verified brands are reported roughly 2.7x more likely to appear in AI Overview citations, since ambiguous entities are harder for a system to confidently cite.",
    category: "SEO",
    relatedTerms: ["knowledge-graph", "eeat", "geo", "serp"],
    whyItMatters: "Search engines and AI tools reason about real things, such as brands and people, not just keywords. Clear entity signals help them identify and trust you correctly.",
    example: "A brand uses the same name, description and profile links across its site, social accounts and listings. Search engines then connect these into one recognised entity.",
    lessons: ["seo/entity-seo", "seo/brand-serp-control"],
  },
  {
    term: "Knowledge Graph",
    slug: "knowledge-graph",
    definition:
      "Google's database of real-world entities and the relationships between them, holding over 800 billion facts about 8 billion entities as of 2025. It powers info boxes and facts alongside search results, and AI systems query it directly when deciding what to cite, making Knowledge Graph presence a foundation of Entity SEO.",
    category: "SEO",
    relatedTerms: ["entity-seo", "serp", "eeat"],
    whyItMatters: "If search engines do not recognise your brand as a distinct entity, they may confuse it with others or leave it out of rich results and AI answers. Clear, consistent facts about you across the web help them connect the dots.",
    example: "If your bakery is listed with the same name, address and founder on your site, your profile pages and a local directory, a search engine can more confidently treat it as one real business.",
    lessons: ["seo/entity-seo", "seo/brand-serp-control"],
  },
  {
    term: "Hreflang",
    slug: "hreflang",
    definition:
      "An HTML attribute that tells search engines which language and regional version of a page to show which user, preventing duplicate-content confusion across international sites. Hreflang must be implemented as a complete, self-referencing reciprocal set; a 2026 industry study found 65-75% of enterprise multilingual sites still have at least one conflict that fragments rankings across an entire language cluster.",
    category: "SEO",
    relatedTerms: ["canonical-tag", "serp", "domain-authority"],
    whyItMatters: "Without it, a search engine may show your US page to readers in the UK, or treat near-identical regional pages as duplicates. Visitors land on the wrong currency or language and leave.",
    example: "If you run a site with an English page for India and another for Australia, hreflang tags tell search engines to show each audience its own version instead of picking one at random.",
    lessons: ["seo/international-seo"],
  },
  {
    term: "Topical Authority",
    slug: "topical-authority",
    definition:
      "The depth and breadth of a site's coverage on a specific subject, measured by how many interconnected, internally-linked articles a domain publishes on that topic. Sites with real topical authority rank and get cited by AI systems more reliably than a single strong page alone, since both classic ranking systems and query fan-out reward consistent coverage across a cluster.",
    category: "SEO",
    relatedTerms: ["content-cluster", "query-fan-out", "internal-linking", "eeat"],
    whyItMatters: "Search engines and AI tools prefer sources that clearly know a subject end to end. Scattered posts rarely build that trust, so you end up fighting for each keyword one at a time.",
    example: "A site with 20 connected articles on running shoes, covering sizing, injuries, training plans and reviews, will usually look more trustworthy on that topic than a site with one long shoe post.",
    lessons: ["seo/content-clusters", "seo/internal-linking"],
  },
  {
    term: "Agentic Browser",
    slug: "agentic-browser",
    definition:
      "A browser built around an AI agent that can navigate, click, and complete tasks on a user's behalf, rather than just displaying pages for a human to click through. ChatGPT Atlas, Perplexity Comet, and Dia defined the 2026 'browser war,' though analysts project all agentic browsers combined will capture only 1-3% of global browser share given Chrome's incumbency.",
    category: "SEO",
    relatedTerms: ["ai-overview", "rag", "geo"],
    whyItMatters: "If software can browse and buy for people, your pages are read by machines as often as by humans. Clear structure and plain facts decide whether an agent can complete a task on your site.",
    example: "Imagine a shopper asking their browser to find a waterproof jacket under $100 and order it. If your price, size options and checkout are unclear, the agent skips you and picks another store.",
    lessons: ["seo/agentic-commerce-seo", "ai-marketing/ai-agents-marketing"],
  },
  {
    term: "Citation Rate",
    slug: "citation-rate",
    definition:
      "The percentage of a defined set of test prompts where an AI engine (ChatGPT, Perplexity, Google AI Overviews) links to a brand's content as a source. Paired with share of voice (unlinked mentions relative to competitors), it's the core KPI replacing classic rank tracking for AI-era visibility, since AI answers don't produce a fixed, comparable position the way a traditional SERP does.",
    category: "SEO",
    relatedTerms: ["ai-overview", "geo", "aeo"],
    whyItMatters: "Rankings do not tell you whether AI tools actually mention you. Tracking citations shows if your visibility work is paying off, and where competitors are being quoted instead of you.",
    example: "If you test 20 prompts about your category and an AI engine cites your site in 5 of the answers, your citation rate is 5 divided by 20, which is 25%.",
    lessons: ["seo/ai-search-visibility-metrics", "seo/ai-overviews-geo"],
  },

  // Email additions
  {
    term: "CTOR",
    slug: "ctor",
    definition:
      "Click-to-Open Rate: the percentage of people who opened your email and then clicked a link. CTOR = clicks divided by opens. It isolates email body performance from subject line performance, making it a cleaner engagement metric than click rate alone. Average CTOR across industries is around 10-15%.",
    category: "Email",
    relatedTerms: ["click-rate", "open-rate", "segmentation", "drip-campaign"],
    whyItMatters: "Open rates can be inflated by privacy features, so CTOR gives a cleaner read on whether the email content itself was compelling. It helps you judge copy, layout and link placement without the subject line muddying things.",
    example: "If 1,000 people open your email and 80 click a link, your CTOR is 8%. If another version gets 120 clicks from 1,000 opens, its content is clearly working harder.",
    lessons: ["email/email-analytics", "email/ab-testing-email"],
  },
  {
    term: "Hard Bounce",
    slug: "hard-bounce",
    definition:
      "A permanent delivery failure when an email cannot reach its destination because the address does not exist, the domain is invalid, or the recipient's server has blocked your IP. Hard bounces should be removed from your list immediately. A bounce rate above 2% signals serious list hygiene problems.",
    category: "Email",
    relatedTerms: ["deliverability", "list-hygiene", "open-rate", "segmentation"],
    whyItMatters: "Sending repeatedly to dead addresses signals to inbox providers that you do not manage your list, which can drag down delivery for every email you send afterwards.",
    example: "If a subscriber typed a typo like name@gmial.com, the message will never arrive. Remove that address after the first hard bounce instead of trying again next week.",
    lessons: ["email/deliverability", "email/list-hygiene-sunset-policy"],
  },
  {
    term: "List Hygiene",
    slug: "list-hygiene",
    definition:
      "The ongoing practice of keeping your email list clean by removing invalid addresses, hard bounces, long-term unengaged subscribers, and spam traps. Clean lists have higher deliverability and engagement rates. Re-engagement campaigns are the first step before removing cold subscribers.",
    category: "Email",
    relatedTerms: ["deliverability", "hard-bounce", "segmentation", "open-rate"],
    whyItMatters: "A smaller, engaged list beats a large, stale one. Dead and uninterested addresses hurt deliverability, inflate costs and make your metrics look worse than the real picture.",
    example: "Every quarter, you might remove addresses that bounced and those who have not opened anything in six months. Your list shrinks, but open rates and inbox placement usually improve.",
    lessons: ["email/list-hygiene-sunset-policy", "email/deliverability"],
  },
  {
    term: "Double Opt-In",
    slug: "double-opt-in",
    definition:
      "A subscription confirmation process where a new subscriber must click a confirmation link in a verification email before being added to your list. Double opt-in lists have lower raw subscriber counts but higher engagement and deliverability because every address is verified and intentional.",
    category: "Email",
    relatedTerms: ["list-hygiene", "deliverability", "segmentation", "welcome-series"],
    whyItMatters: "It filters out typos, fake sign-ups and people who never meant to join. You get a smaller list, but it is cleaner and has fewer spam complaints.",
    example: "Someone signs up with your form, then gets an email saying 'Click to confirm'. Only after they click are they added to your list. A mistyped address never confirms, so it never joins.",
    lessons: ["email/list-building", "email/gdpr-can-spam"],
  },
  {
    term: "Send Time Optimization",
    slug: "send-time-optimization",
    definition:
      "The practice of sending emails at the time each individual subscriber is most likely to open them, based on their past behavior. Tools like Klaviyo and Mailchimp offer STO as an automation feature. STO typically lifts open rates 5-10%. It only matters once the fundamentals of subject line and content are solid.",
    category: "Email",
    relatedTerms: ["open-rate", "segmentation", "drip-campaign", "ctor"],
    whyItMatters: "Sending when each person is most likely to check their inbox can lift opens and clicks without changing your content, which makes it a cheap test compared with rewriting emails.",
    example: "If one subscriber usually opens email at 7 am and another at 9 pm, the tool delivers each message at those times instead of blasting everyone at 10 am.",
    lessons: ["email/frequency-send-time-optimization", "email/automation-flows"],
  },

  // Content additions
  {
    term: "Pillar Page",
    slug: "pillar-page",
    definition:
      "A long-form page that covers a broad topic comprehensively and links to multiple cluster pages that go deeper on subtopics. The pillar-cluster model builds topical authority with search engines. A well-executed pillar page often ranks for dozens of keyword variations beyond its primary target.",
    category: "Content",
    relatedTerms: ["content-cluster", "backlink", "domain-authority", "serp"],
    whyItMatters: "It gives you one strong hub that readers and search engines can use to understand a whole subject. Without it, related posts sit disconnected and compete with each other.",
    example: "A page called 'The Complete Guide to Email Marketing' might link to separate posts on subject lines, list building and deliverability, and each of those posts links back to the guide.",
    lessons: ["seo/content-clusters", "content/topic-clusters"],
  },
  {
    term: "TOFU / MOFU / BOFU",
    slug: "tofu-mofu-bofu",
    definition:
      "Top of Funnel, Middle of Funnel, Bottom of Funnel: a framework for matching content to buyer intent. TOFU content attracts awareness (blog posts, social). MOFU nurtures consideration (case studies, webinars). BOFU drives decisions (demos, pricing comparisons). Effective content strategies cover all three stages.",
    category: "Content",
    relatedTerms: ["funnel", "content-cluster", "lead-magnet", "drip-campaign"],
    whyItMatters: "Content that ignores where the buyer is in their journey wastes effort. A beginner does not want a pricing page, and a ready buyer does not want a definition.",
    example: "A top-of-funnel post might be 'What is project management?', a middle piece 'How to compare tools', and a bottom piece 'Our tool vs. a spreadsheet, with a free trial link'.",
    lessons: ["content/content-strategy", "fundamentals/customer-journey"],
  },
  {
    term: "UGC",
    slug: "ugc",
    definition:
      "User Generated Content: any content created by customers or users about a brand, including reviews, social posts, unboxing videos, and forum discussions. UGC is highly trusted because it is perceived as unbiased. Brands that encourage and repurpose UGC reduce content costs while increasing social proof.",
    category: "Content",
    relatedTerms: ["social-proof", "personalization", "engagement-rate", "viral-coefficient"],
    whyItMatters: "People trust other customers more than brand claims, and UGC gives you authentic material without a big production budget. It also shows what customers actually care about.",
    example: "A skincare brand might ask buyers to post a photo of their routine with a branded hashtag, then, with permission, feature the best photos on its product pages.",
    lessons: ["social/ugc", "paid-ads/creator-ugc-ads"],
  },
  {
    term: "Evergreen Content",
    slug: "evergreen-content",
    definition:
      "Content that remains relevant and valuable long after publication, unlike news articles or trend pieces that decay quickly. Evergreen content compounds in value over time through continued search traffic and backlinks. Guides, tutorials, and definitional content ('what is X') are typical evergreen formats.",
    category: "Content",
    relatedTerms: ["pillar-page", "content-cluster", "backlink", "serp"],
    whyItMatters: "It keeps earning traffic long after you publish, so the effort pays back over months or years rather than days. News-style posts fade fast and need constant replacement.",
    example: "A guide called 'How to write a good subject line' can be useful for years with small updates, while a post about this week's trend will be forgotten quickly.",
    lessons: ["content/content-strategy", "seo/content-decay-refresh"],
  },
  {
    term: "Content Repurposing",
    slug: "content-repurposing",
    definition:
      "Taking existing content and adapting it for different formats or platforms. A long webinar becomes a blog post, a slide deck, short clips, and a newsletter digest. Repurposing multiplies distribution without proportional creation cost. The best repurposing adapts the format to the platform rather than just copying.",
    category: "Content",
    relatedTerms: ["pillar-page", "ugc", "engagement-rate", "content-cluster"],
    whyItMatters: "Creating from scratch every time is slow and expensive. Reusing one strong idea in several formats helps you reach people where they already spend time.",
    example: "A 40-minute webinar can become a blog post, five short video clips, a checklist PDF and three social posts. One piece of research, many places to be seen.",
    lessons: ["content/repurposing", "content/content-distribution"],
  },

  // Paid Ads additions
  {
    term: "Performance Max",
    slug: "performance-max",
    definition:
      "Google's campaign type that uses AI to serve ads across all Google channels including Search, Display, YouTube, Gmail, Maps, and Discover from a single campaign. PMAX requires minimal manual setup but needs strong creative assets and clear conversion goals. It replaced Smart Shopping campaigns in 2022.",
    category: "Paid Ads",
    relatedTerms: ["roas", "bidding-strategy", "quality-score", "creative-testing"],
    whyItMatters: "It can find conversions across several channels from one campaign, but it gives you less manual control. You need good assets and clear goals or the system will optimise for the wrong thing.",
    example: "If you give a campaign your product feed, images, headlines and a target of sales, the system decides whether to show an ad on search, video or shopping for each person.",
    lessons: ["paid-ads/google-shopping-pmax", "paid-ads/pmax-advantage-plus"],
  },
  {
    term: "Creative Testing",
    slug: "creative-testing",
    definition:
      "The systematic process of running multiple ad creative variants (different images, headlines, copy, hooks) against the same audience to identify what drives the best performance. At scale, creative is the primary variable that determines ad success. Meta and TikTok both recommend testing at least 3-5 creative variants per audience.",
    category: "Paid Ads",
    relatedTerms: ["ab-test", "roas", "ctr", "cpc"],
    whyItMatters: "Creative is often the biggest lever in paid ads, and guessing wastes budget. Testing shows which message or image works, so you stop funding the ones that do not.",
    example: "Run two ads with the same audience, one showing a customer photo and one showing the product alone. If the first gets twice the clicks at the same cost, shift budget towards it.",
    lessons: ["paid-ads/creative-testing", "paid-ads/ai-creative-testing-at-scale"],
  },
  {
    term: "Frequency Cap",
    slug: "frequency-cap",
    definition:
      "A limit set on how many times a single user sees the same ad within a defined time period. Frequency caps prevent ad fatigue, which occurs when overexposure causes a user to tune out or develop negative associations with a brand. For brand campaigns, a frequency of 3-7 per week is a common starting point.",
    category: "Paid Ads",
    relatedTerms: ["impressions", "reach", "cpm", "remarketing"],
    whyItMatters: "Showing the same ad too often annoys people and burns budget on viewers who have already decided. A cap spreads impressions across more people and reduces creative fatigue.",
    example: "If you cap an ad at 3 views per person per week, someone who has seen it three times stops seeing it, and that spend goes to someone who has not.",
    lessons: ["paid-ads/ad-frequency-creative-fatigue", "paid-ads/programmatic-advertising"],
  },
  {
    term: "Cost Per Lead",
    slug: "cost-per-lead",
    definition:
      "The total ad spend divided by the number of leads generated in a campaign. CPL is the primary efficiency metric for B2B campaigns and lead generation businesses. CPL must be evaluated against lead quality: a low CPL with poor lead quality is worse than a high CPL with high-intent prospects.",
    category: "Paid Ads",
    relatedTerms: ["cac", "roas", "cpc", "ltv"],
    whyItMatters: "It tells you what each enquiry costs, so you can compare channels and decide where to put more money. A low number means little if the leads never turn into customers, though.",
    example: "If you spend $1,000 on ads and get 50 form submissions, your cost per lead is $20. If another channel gets leads for $12 but they never buy, the cheaper one may not be better.",
    lessons: ["paid-ads/paid-ads-101", "analytics/marketing-kpis-okrs"],
  },
  {
    term: "Audience Segments",
    slug: "audience-segments",
    definition:
      "Groups of users defined by shared attributes used to target ads: demographics, interests, purchase intent, life events, or remarketing lists. Audience signals in Google and Meta campaigns tell the algorithm which users to prioritize. More specific segments improve relevance but reduce scale.",
    category: "Paid Ads",
    relatedTerms: ["lookalike-audience", "remarketing", "segmentation", "icp"],
    whyItMatters: "Speaking to everyone fits no one. Segments let you match message, offer and budget to groups that behave differently, which improves results without more spend.",
    example: "A shoe store might split its list into first-time buyers, repeat buyers and people who browsed but never bought, then send each group a different email or ad.",
    lessons: ["fundamentals/stp", "email/segmentation"],
  },

  // Brand (new category)
  {
    term: "Brand Identity",
    slug: "brand-identity",
    definition:
      "The visual and verbal elements a company uses to express itself: logo, color palette, typography, imagery style, and voice. Brand identity is the outward expression of brand strategy. A strong identity is immediately recognizable across all touchpoints, from packaging to social media to job postings.",
    category: "Brand",
    relatedTerms: ["brand-equity", "tone-of-voice", "positioning", "visual-identity"],
    whyItMatters: "A consistent identity makes you easy to recognise and remember. If every channel looks and sounds different, people struggle to connect the dots and trust you less.",
    example: "A coffee shop that always uses the same logo, colours, friendly tone and packaging style looks like one brand across its cup, website and social posts, rather than several unrelated ones.",
    lessons: ["brand-strategy/brand-strategy-101", "brand-strategy/brand-book"],
  },
  {
    term: "Brand Voice",
    slug: "tone-of-voice",
    definition:
      "The consistent personality and style used in all written communication across channels. Brand voice answers: how would this brand speak if it were a person? Mailchimp's voice is friendly and plain-spoken. Apple's is minimal and aspirational. Consistency across writers requires a documented style guide.",
    category: "Brand",
    relatedTerms: ["brand-identity", "brand-equity", "copywriting-101", "positioning"],
    whyItMatters: "How you say something shapes how people feel about you. Inconsistent tone across channels makes a brand seem unreliable, and the wrong tone can put off the very people you want.",
    example: "A bank might sound calm and clear in an error message, while a snack brand sounds playful and casual. Same words, different tone, and each fits its audience.",
    lessons: ["copywriting/voice-and-tone", "brand-strategy/brand-voice-system"],
  },
  {
    term: "Brand Guidelines",
    slug: "brand-guidelines",
    definition:
      "A documented set of rules governing how a brand is represented visually and verbally. Covers logo usage, colors, fonts, photography style, tone of voice, and what not to do. Guidelines exist to maintain consistency when many people create content across many channels. Also called a brand style guide.",
    category: "Brand",
    relatedTerms: ["brand-identity", "tone-of-voice", "visual-identity", "brand-equity"],
    whyItMatters: "Without written rules, every designer, writer and agency makes their own choices and the brand drifts. Guidelines save time and keep things consistent as the team grows.",
    example: "A one-page guide might say: use only these two colours, never stretch the logo, write in short sentences, and avoid jargon. A new freelancer can follow it on day one.",
    lessons: ["brand-strategy/brand-book", "brand-strategy/brand-guidelines-enforcement"],
  },
  {
    term: "Visual Identity",
    slug: "visual-identity",
    definition:
      "The graphic design system that makes a brand recognizable: logo, colors, typography, icons, illustration style, and photography direction. Visual identity is a subset of brand identity. The strongest visual identities work without the logo: think of Coca-Cola's red or Tiffany's blue.",
    category: "Brand",
    relatedTerms: ["brand-identity", "brand-guidelines", "brand-equity", "positioning"],
    whyItMatters: "People notice how a brand looks before they read a word. A clear, consistent visual system helps you be recognised quickly and look more trustworthy.",
    example: "Using the same logo placement, two main colours and one font across your website, slides and social images means a viewer can tell it is you even with the name hidden.",
    lessons: ["brand-strategy/visual-identity", "brand-strategy/brand-book"],
  },
  {
    term: "Rebranding",
    slug: "rebranding",
    definition:
      "The process of changing a brand's visual identity, name, positioning, or all three. Rebrands range from a visual refresh (new logo) to a full repositioning (new name, new market). Most rebrands fail not in design but in communication: customers do not understand why anything changed.",
    category: "Brand",
    relatedTerms: ["brand-identity", "brand-equity", "positioning", "brand-guidelines"],
    whyItMatters: "A rebrand is costly and risky. Done for the wrong reason, you lose recognition you spent years building; done well, it fixes a real mismatch between who you are and how you look.",
    example: "A small firm that moved from selling to consumers to selling to businesses might update its name, look and message so they match its new customers, while keeping its loyal clients informed.",
    lessons: ["brand-strategy/rebrands"],
  },
  {
    term: "Distinctive Assets",
    slug: "distinctive-assets",
    definition:
      "The sensory cues, colors, shapes, sounds, and characters that consumers associate with a specific brand without needing to see the brand name. Byron Sharp's research shows distinctive assets drive brand salience and are built through consistent, long-term repetition rather than clever creativity alone.",
    category: "Brand",
    relatedTerms: ["brand-identity", "brand-equity", "visual-identity", "share-of-voice"],
    whyItMatters: "Being recognised matters as much as being liked. Assets that are uniquely yours help people notice and remember you in a crowded feed or shelf, even at a glance.",
    example: "If people can name your brand just from a colour, a shape or a jingle without seeing the logo, those are distinctive assets. Use them consistently and they build memory over time.",
    lessons: ["brand-strategy/distinctive-assets", "brand-strategy/how-brands-grow"],
  },
  {
    term: "Brand Salience",
    slug: "brand-salience",
    definition:
      "How readily a brand comes to mind when a customer is in a buying situation. Not just awareness but mental availability at the moment of purchase. Byron Sharp's 'How Brands Grow' argues that building broad brand salience through consistent, distinctive communication is the primary driver of long-term market share.",
    category: "Brand",
    relatedTerms: ["brand-equity", "distinctive-assets", "share-of-voice", "positioning"],
    whyItMatters: "When someone needs what you sell, the brand that comes to mind first often gets considered. Low salience means you lose sales to competitors before comparison even begins.",
    example: "If you ask 100 people to name a brand of running shoes and 30 say yours first, you have stronger salience than a rival that only 5 name.",
    lessons: ["brand-strategy/how-brands-grow", "brand-strategy/brand-tracking"],
  },

  // Copywriting (new category)
  {
    term: "AIDA",
    slug: "aida",
    definition:
      "Attention, Interest, Desire, Action: a four-stage copywriting framework describing how effective sales messages move a reader toward a decision. First formalized by E. St. Elmo Lewis in 1898. Still the most widely taught copywriting structure. Nearly every effective ad, email, or landing page follows some version of this arc.",
    category: "Copywriting",
    relatedTerms: ["pas", "usp", "headline", "cta"],
    whyItMatters: "It gives you a simple checklist for writing: if a piece of copy fails to hold attention or never asks for action, you can see which step broke. It stops copy from being all features and no direction.",
    example: "An ad might open with a bold question (attention), explain a surprising benefit (interest), show a customer result (desire), then end with a clear 'Start your free trial' button (action).",
    lessons: ["copywriting/aida-pas-frameworks", "fundamentals/aida-funnel"],
  },
  {
    term: "PAS",
    slug: "pas",
    definition:
      "Problem, Agitate, Solution: a copywriting framework that identifies a reader's pain, amplifies the emotional stakes of not solving it, then positions your product as the resolution. PAS works because it meets people where they are emotionally before selling. Used heavily in email, direct response ads, and landing pages.",
    category: "Copywriting",
    relatedTerms: ["aida", "usp", "headline", "loss-aversion"],
    whyItMatters: "It starts with the reader's real problem, so the copy feels relevant rather than salesy. Skipping the problem step often leaves people unconvinced that they need the fix.",
    example: "A line might read: 'Your emails keep landing in spam (problem). Every missed email is a lost sale (agitate). Fix your sender setup in ten minutes with this checklist (solution).'",
    lessons: ["copywriting/aida-pas-frameworks", "copywriting/copywriting-101"],
  },
  {
    term: "USP",
    slug: "usp",
    definition:
      "Unique Selling Proposition: the specific benefit that differentiates your product from all competitors and is compelling enough to make a buyer choose you. Coined by advertising legend Rosser Reeves. A strong USP is specific (not 'best quality'), provable, and impossible for a competitor to easily claim.",
    category: "Copywriting",
    relatedTerms: ["positioning", "value-proposition", "aida", "headline"],
    whyItMatters: "If you cannot say what makes you different, buyers default to price or to the brand they already know. A clear USP gives people a reason to choose you.",
    example: "A small laundry service might say 'Clean clothes back within 24 hours, or the next wash is free.' That is specific, easy to check and something rivals may not match.",
    lessons: ["fundamentals/positioning", "fundamentals/value-proposition"],
  },
  {
    term: "Headline",
    slug: "headline",
    definition:
      "The first line of copy that a reader sees, responsible for determining whether they continue reading. Advertising research from David Ogilvy suggests 80% of readers never get past the headline. A headline must communicate a benefit, trigger curiosity, or target a specific reader. Copywriters often write 20+ headlines before choosing one.",
    category: "Copywriting",
    relatedTerms: ["aida", "usp", "hook", "cta"],
    whyItMatters: "Most people read the headline and nothing else. If it fails to earn the next sentence, the rest of your copy goes unread, however good it is.",
    example: "Compare 'Our Accounting Software' with 'Close your books in half the time'. The second tells the reader what they get, so more of them keep reading.",
    lessons: ["copywriting/headlines", "copywriting/ab-testing-copy"],
  },
  {
    term: "Hook",
    slug: "hook",
    definition:
      "The opening line or visual that stops a reader's scroll and makes them want to consume the rest of the content. Hooks are especially critical in short-form video and social media where competition for attention is highest. A strong hook creates a curiosity gap, makes a bold claim, or identifies a specific audience immediately.",
    category: "Copywriting",
    relatedTerms: ["headline", "aida", "ugc", "engagement-rate"],
    whyItMatters: "You have a second or two to stop someone scrolling. A weak opening means your message is never seen, no matter how strong the idea behind it is.",
    example: "A short video could open with 'I wasted $500 on ads before learning this' rather than 'Hi, welcome to my channel'. The first gives viewers a reason to stay.",
    lessons: ["social/short-form-video-algorithms", "copywriting/video-script-writing"],
  },
  {
    term: "Copywriting",
    slug: "copywriting-101",
    definition:
      "The craft of writing words designed to persuade people to take action: buy, sign up, click, share. Distinct from content writing (which primarily educates) in that every line of copy exists to move the reader toward a specific goal. Good copy sounds like a conversation, not a brochure.",
    category: "Copywriting",
    relatedTerms: ["aida", "pas", "usp", "cta"],
    whyItMatters: "Words are often what turns attention into action. Understanding the basics means you can write clearer pages, emails and ads, and judge copy from others more critically.",
    example: "Rewrite 'We offer solutions for your business needs' as 'We help small shops get paid faster with one invoice link'. The second says who it is for and what they get.",
    lessons: ["copywriting/copywriting-101", "copywriting/features-vs-benefits"],
  },
  {
    term: "FAB",
    slug: "fab",
    definition:
      "Features, Advantages, Benefits: a copywriting framework for translating product capabilities into customer value. Features describe what a product has. Advantages explain what it does better than alternatives. Benefits describe the emotional or practical outcome for the buyer. Customers buy benefits, not features.",
    category: "Copywriting",
    relatedTerms: ["usp", "value-proposition", "aida", "landing-page"],
    whyItMatters: "Customers care about what a product does for them, not its specs. FAB connects the two, so you avoid lists of features that leave buyers asking 'so what?'.",
    example: "Feature: a 10,000 mAh battery. Advantage: it lasts three days. Benefit: you can travel for a whole weekend without ever carrying a charger or hunting for a plug.",
    lessons: ["copywriting/features-vs-benefits", "product-marketing/messaging-hierarchy"],
  },
  {
    term: "Objection Handling",
    slug: "objection-handling",
    definition:
      "Proactively addressing the reasons a prospect might not buy, directly in your copy. Common objections: price, trust, urgency, and relevance. Good copywriters surface objections through customer research and neutralize them before they become reasons to leave. FAQ sections and testimonials are classic objection-handling tools.",
    category: "Copywriting",
    relatedTerms: ["social-proof", "usp", "landing-page", "cta"],
    whyItMatters: "Buyers rarely say no outright; they hide doubts behind questions. If your copy or sales call does not address the doubt, they leave without telling you why.",
    example: "If shoppers worry about returns, add a line near the buy button: 'Free returns within 30 days.' It answers the concern at the moment it appears.",
    lessons: ["product-marketing/sales-enablement", "copywriting/landing-page-copy"],
  },

  // Social Media (new category)
  {
    term: "Algorithm",
    slug: "algorithm",
    definition:
      "The ranking system a social platform uses to decide which content each user sees and in what order. Social algorithms optimize for engagement signals: likes, comments, shares, saves, and watch time. Understanding platform-specific signals is the foundation of organic social strategy. Algorithms change frequently.",
    category: "Social Media",
    relatedTerms: ["organic-reach", "engagement-rate", "ugc", "hook"],
    whyItMatters: "Platforms decide who sees your content, so understanding what they reward guides what you post and when. Ignoring it means working hard for little reach.",
    example: "If a platform favours videos people watch to the end, a short, tight video may reach more people than a long one with a slow start, even if both cover the same topic.",
    lessons: ["social/algorithm-basics", "social/short-form-video-algorithms"],
  },
  {
    term: "Organic Reach",
    slug: "organic-reach",
    definition:
      "The number of unique people who see your content without paid promotion. Organic reach has declined significantly on most platforms over the past decade as feeds became more competitive and platforms monetized distribution. Instagram organic reach averages 5-20% of followers; Facebook can be under 5%.",
    category: "Social Media",
    relatedTerms: ["reach", "algorithm", "engagement-rate", "impressions"],
    whyItMatters: "It is free exposure, but it is limited and falling on many platforms. Relying on it alone is risky, so you need to know how many people your unpaid posts actually reach.",
    example: "If you have 2,000 followers and a post is shown to 300 of them, your organic reach is 300, or 15% of your audience, while the other 85% never saw it.",
    lessons: ["social/organic-vs-paid", "social/algorithm-basics"],
  },
  {
    term: "Influencer Marketing",
    slug: "influencer-marketing",
    definition:
      "Partnering with people who have established audiences to promote a product or service. Ranges from mega-influencers (millions of followers) to nano-influencers (1,000-10,000 followers). Nano and micro-influencers typically deliver higher engagement rates and more authentic recommendations despite smaller audiences.",
    category: "Social Media",
    relatedTerms: ["ugc", "organic-reach", "social-proof", "cac"],
    whyItMatters: "It borrows an existing audience's trust, which can be faster than building your own. Picking the wrong creator or tracking poorly wastes budget on people who do not fit.",
    example: "A small skincare brand might send products to a creator whose followers match its customers, with a unique discount code so it can count how many sales came from that post.",
    lessons: ["social/influencer-marketing", "social/creator-economy-strategy"],
  },
  {
    term: "Content Pillars",
    slug: "content-pillars",
    definition:
      "The 3-5 core themes that anchor all content a brand creates on social media. Content pillars ensure variety while staying on-brand. A SaaS company might use: product education, customer stories, industry insights, team culture, and thought leadership. Pillars prevent the trap of posting randomly with no strategic direction.",
    category: "Social Media",
    relatedTerms: ["algorithm", "engagement-rate", "ugc", "brand-identity"],
    whyItMatters: "Without themes, posting becomes random and your audience does not know what to expect from you. Pillars make planning easier and keep your message focused.",
    example: "A fitness coach might choose three pillars: workout tips, nutrition basics and client stories. Every post fits one of them, so followers know what they will get.",
    lessons: ["social/social-strategy-basics", "social/content-calendar"],
  },
  {
    term: "Social Listening",
    slug: "social-listening",
    definition:
      "Monitoring social platforms for mentions of your brand, competitors, and relevant keywords to understand what people are saying. Social listening surfaces emerging issues, competitor gaps, product feedback, and content opportunities in real time. Tools include Brandwatch, Sprout Social, and Mention.",
    category: "Social Media",
    relatedTerms: ["engagement-rate", "share-of-voice", "brand-equity", "ugc"],
    whyItMatters: "It shows what people say about you, your competitors and your category without asking them. You can catch complaints early and spot topics worth creating content about.",
    example: "If you notice many posts asking 'is there a cheaper alternative to X?', you might write a comparison page or adjust your offer in response.",
    lessons: ["social/social-listening", "social/social-listening-advanced"],
  },
  {
    term: "Creator Economy",
    slug: "creator-economy",
    definition:
      "The ecosystem of independent content creators who monetize their audiences through brand deals, subscriptions, merchandise, and digital products. The creator economy exceeded $250 billion in 2024. Brands increasingly work directly with creators rather than traditional media because creator audiences are more trusted and engaged.",
    category: "Social Media",
    relatedTerms: ["influencer-marketing", "ugc", "organic-reach", "content-pillars"],
    whyItMatters: "Creators now have audiences that rival traditional media. Knowing how they earn and work helps you partner with them fairly and spot where attention is moving.",
    example: "A single creator may earn from sponsorships, a paid newsletter and product sales. A brand that understands this can offer a partnership that suits how they work.",
    lessons: ["social/creator-economy-strategy", "social/influencer-marketing"],
  },
  {
    term: "Hashtag Strategy",
    slug: "hashtag-strategy",
    definition:
      "The deliberate use of hashtags to increase content discoverability on platforms like Instagram and TikTok. Effective hashtag strategy combines niche-specific tags (high relevance, lower competition) with broader tags for reach. Using only popular hashtags means your content disappears instantly in fast-moving feeds.",
    category: "Social Media",
    relatedTerms: ["organic-reach", "algorithm", "engagement-rate", "impressions"],
    whyItMatters: "Hashtags help the right people find your posts, but too many or irrelevant ones add noise. A small, deliberate set is usually more useful than a long list.",
    example: "For a post about home baking, you might use one broad tag, one niche tag like a bread type, and one branded tag, rather than thirty generic ones.",
    lessons: ["social/instagram", "social/tiktok"],
  },

  // Growth / Strategy additions
  {
    term: "Product-Market Fit",
    slug: "product-market-fit",
    definition:
      "The degree to which a product satisfies strong market demand. Sean Ellis's benchmark: a product has PMF if over 40% of users would be 'very disappointed' if it went away. PMF is not a single moment but a range. You can have PMF in one segment and not in another. Most startup failures are blamed on marketing but caused by missing PMF.",
    category: "Growth",
    relatedTerms: ["north-star-metric", "retention", "churn", "activation"],
    whyItMatters: "Growing before you have fit means pouring money into a leaky bucket. Knowing whether people truly need your product tells you whether to fix the product or scale the marketing.",
    example: "If most of your users keep coming back and would be upset to lose the product, that points to fit. If they try it once and vanish, more ads will not help.",
    lessons: ["fundamentals/product-market-fit", "growth/retention-cohorts"],
  },
  {
    term: "Flywheel",
    slug: "flywheel",
    definition:
      "A growth model where each part of the system reinforces the next, building momentum over time. Jim Collins introduced the concept; Amazon popularized it in business strategy. Unlike funnels that run out, flywheels compound: more customers bring more sellers, which improves selection, which attracts more customers.",
    category: "Growth",
    relatedTerms: ["growth-loop", "viral-coefficient", "plg", "retention"],
    whyItMatters: "A funnel loses customers as they leave, while a flywheel feeds happy customers back into growth. It changes where you invest: in experience and referrals, not just new leads.",
    example: "A delighted customer leaves a review, which brings in a new customer, who is also delighted and does the same. Each turn makes the next one easier.",
    lessons: ["fundamentals/flywheel", "growth/growth-loops"],
  },
  {
    term: "Jobs to Be Done",
    slug: "jtbd",
    definition:
      "A framework that explains why customers 'hire' a product by focusing on the progress they want to make in a specific situation. Developed by Clayton Christensen. Customers do not buy a drill; they buy a hole. Understanding the job reshapes product development, messaging, and positioning to focus on outcomes rather than features.",
    category: "Growth",
    relatedTerms: ["icp", "product-market-fit", "value-proposition", "positioning"],
    whyItMatters: "People buy products to make progress in their lives, not because of demographics. Understanding the job helps you write better messages and spot competitors you had not considered.",
    example: "Someone buying a milkshake on a commute may be 'hiring' it to make a boring drive more interesting, so its real competitors are podcasts and snacks, not other milkshakes.",
    lessons: ["fundamentals/jtbd", "product-marketing/customer-interviews"],
  },
  {
    term: "Expansion Revenue",
    slug: "expansion-revenue",
    definition:
      "Revenue generated from existing customers through upsells, cross-sells, and seat expansions. Net Revenue Retention (NRR) measures expansion minus churn. Best-in-class SaaS companies have NRR above 120%, meaning they grow revenue from the existing customer base even without new acquisitions.",
    category: "Growth",
    relatedTerms: ["mrr", "churn", "ltv", "nps"],
    whyItMatters: "Selling more to existing customers is usually cheaper than finding new ones. It also shows whether customers find enough value to spend more over time.",
    example: "If a customer pays $50 per month and later upgrades to a $80 plan, the extra $30 per month is expansion revenue, earned without a new sale.",
    lessons: ["growth/net-revenue-retention", "product-marketing/expansion-cross-sell-messaging"],
  },
  {
    term: "Go-to-Market Strategy",
    slug: "gtm",
    definition:
      "The plan for how a company will bring a product to market: who the target customer is, what the value proposition is, which channels will reach them, and how sales will close them. A GTM strategy answers the question 'how will we win in this market?' before spending on acquisition.",
    category: "Strategy",
    relatedTerms: ["icp", "positioning", "value-proposition", "plg"],
    whyItMatters: "A great product with no launch plan often stalls. A GTM plan makes sure you know who you are selling to, what you say, and how they will find and buy it.",
    example: "Before launching a budgeting app, a team might decide its buyer is freelancers, its message is 'tax set-asides on autopilot', and its main channels are search and creator partnerships.",
    lessons: ["fundamentals/go-to-market-strategy", "product-marketing/launches"],
  },
  {
    term: "Category Design",
    slug: "category-design",
    definition:
      "The strategy of creating and dominating a new market category rather than competing in an existing one. Popularized by Al Ramadan and Christopher Lochhead. Category designers define the problem in a way that makes their solution obvious. Salesforce did not compete in 'CRM'. They created 'cloud CRM.'",
    category: "Strategy",
    relatedTerms: ["positioning", "brand-equity", "gtm", "value-proposition"],
    whyItMatters: "If you compete in an existing category, you fight on its terms. Naming a new problem and category can make you the obvious leader rather than one of many.",
    example: "Instead of saying 'we are another note-taking app', a team might describe a new category, such as 'meeting memory', and make that the standard everyone compares against.",
    lessons: ["fundamentals/category-design", "product-marketing/category-creation"],
  },

  // Analytics additions
  {
    term: "Incrementality Testing",
    slug: "incrementality-testing",
    definition:
      "A testing method that measures the true causal lift of a marketing activity by comparing a group exposed to it against a holdout group that was not. Incrementality testing answers: did our ad actually cause this purchase, or would the person have bought anyway? It is the gold standard for measuring ad effectiveness.",
    category: "Analytics",
    relatedTerms: ["mmm", "attribution", "ab-test", "roas"],
    whyItMatters: "Platforms report sales they claim credit for, even those that would have happened anyway. Testing shows what your spend actually adds, so you cut waste and fund what works.",
    example: "Show ads to one group and hold them back from a similar group. If 10 in every 1,000 buy with ads and 8 without, only the extra 2 are truly caused by the ads.",
    lessons: ["analytics/incrementality", "analytics/mmm"],
  },
  {
    term: "First-Party Data",
    slug: "first-party-data",
    definition:
      "Data collected directly from your own customers and users through your website, app, CRM, and email list. Unlike third-party data from brokers, first-party data is accurate, consented, and deprecation-proof. As third-party cookies disappear, first-party data has become the most valuable marketing asset a company owns.",
    category: "Analytics",
    relatedTerms: ["cdp", "utm", "attribution", "dark-social"],
    whyItMatters: "With third-party cookies fading and privacy rules tightening, data you collect directly is the most reliable and legal asset you have. It also tends to be more accurate.",
    example: "If a customer joins your newsletter and shares which products they like, that preference is first-party data you can use to send them relevant offers.",
    lessons: ["email/zero-party-data", "paid-ads/first-party-data-activation"],
  },
  {
    term: "CDP",
    slug: "cdp",
    definition:
      "Customer Data Platform: software that collects, unifies, and activates customer data from all touchpoints into a single customer profile. Unlike a CRM (sales-focused), a CDP serves marketing with behavioral, transactional, and engagement data. Segment and Rudderstack are leading CDP tools.",
    category: "Analytics",
    relatedTerms: ["first-party-data", "segmentation", "attribution", "personalization"],
    whyItMatters: "Customer data usually sits in many tools, so you see only pieces of each person. A CDP joins them so you can personalise messages and measure results from one source.",
    example: "A shopper's website visits, email clicks and purchases are combined into one profile, so you can stop sending them ads for something they already bought.",
    lessons: ["analytics/cdp", "analytics/identity-resolution-single-customer-view"],
  },
  {
    term: "Cohort Retention",
    slug: "cohort-retention",
    definition:
      "Tracking what percentage of a specific user group continues to be active over time, expressed as a retention curve. A retention curve that flattens is healthy, meaning you are keeping a stable core. A curve that drops to zero means your product has no habit-forming value. Cohort retention is more diagnostic than aggregate retention.",
    category: "Analytics",
    relatedTerms: ["cohort", "retention", "churn", "dau"],
    whyItMatters: "Overall averages hide whether newer customers stick around better or worse than older ones. Cohorts show whether product or marketing changes truly improved loyalty over time.",
    example: "If 100 people signed up in January and 40 are still active after three months, that cohort's retention is 40%. Compare it with February's cohort to see whether you improved.",
    lessons: ["growth/retention-cohorts", "analytics/cohort-analysis"],
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
