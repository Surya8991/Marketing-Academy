export type Quiz = {
  question: string;
  options: string[];
  correct: number;
  explanation: string;
};

export const QUIZZES: Record<string, Quiz[]> = {
  "fundamentals/what-is-marketing": [
    {
      question: "Which of the following best defines marketing?",
      options: [
        "Advertising a product through paid channels",
        "Creating, communicating, and delivering value to customers at a profit",
        "Designing a logo and brand identity for a company",
        "Running promotions and discounts to drive short-term sales",
      ],
      correct: 1,
      explanation:
        "Marketing is the full process of identifying what customers value, creating offerings that deliver it, and communicating and distributing those offerings profitably. Advertising is just one tactic within that larger system.",
    },
    {
      question: "A company discovers that most potential customers do not know their problem has a solution. What marketing stage does this primarily address?",
      options: ["Activation", "Retention", "Awareness", "Conversion"],
      correct: 2,
      explanation:
        "Awareness is the first stage - making potential customers conscious that a problem exists and that a solution is available. Without awareness, no other marketing stage matters.",
    },
    {
      question: "Peter Drucker said 'The aim of marketing is to make selling superfluous.' What did he mean?",
      options: [
        "Salespeople are unnecessary in modern companies",
        "If you understand your customer deeply enough, the product sells itself",
        "Digital marketing has replaced traditional sales",
        "Marketing budgets should always exceed sales budgets",
      ],
      correct: 1,
      explanation:
        "Drucker meant that truly great marketing - understanding customer needs and creating products that perfectly meet them - reduces the friction of selling. The product becomes self-evidently the right choice.",
    },
    {
      question: "A SaaS company spends 80% of its budget on Google Ads but ignores product reviews, word of mouth, and content. What risk does this create?",
      options: [
        "Too much brand awareness with not enough conversions",
        "Over-reliance on a single paid channel with no compounding assets",
        "Algorithm changes that boost organic traffic unexpectedly",
        "Customer acquisition cost will drop too fast",
      ],
      correct: 1,
      explanation:
        "Relying entirely on one paid channel means no compounding growth assets. If the ad platform changes pricing or policies, revenue collapses. Diversified marketing builds durable, compounding assets over time.",
    },
    {
      question: "Which is an example of marketing creating value BEFORE a sale occurs?",
      options: [
        "Offering a money-back guarantee after purchase",
        "Publishing a free guide that helps potential buyers solve a problem",
        "Sending a thank-you email after a transaction",
        "Reducing prices to match a competitor",
      ],
      correct: 1,
      explanation:
        "Content marketing, free tools, and educational resources create value before any money changes hands. This builds trust and makes prospects more likely to buy - demonstrating that marketing is about delivering value, not just promoting.",
    },
  ],

  "fundamentals/4ps-7ps": [
    {
      question: "The original 4 Ps of marketing are Product, Price, Place, and Promotion. Why did services marketers add 3 more Ps?",
      options: [
        "Services need more complex pricing models than physical goods",
        "Services are produced and consumed simultaneously, so people, process, and physical evidence matter",
        "Digital marketing required new frameworks for online channels",
        "The 4 Ps were only designed for B2B companies",
      ],
      correct: 1,
      explanation:
        "Services cannot be stored, touched, or inspected before purchase. The quality of People delivering the service, the Process they follow, and Physical Evidence (environment, receipts, uniforms) all shape the customer's perception - which is why 3 extra Ps were added.",
    },
    {
      question: "A coffee shop raises prices by 20% but sales stay flat. Which P is most directly being tested?",
      options: ["Product", "Price", "Place", "Promotion"],
      correct: 1,
      explanation:
        "Price elasticity - how demand responds to price changes - is being tested here. The flat sales suggest either inelastic demand (customers value the offering highly) or insufficient price sensitivity in this market.",
    },
    {
      question: "A brand sells the same product on Amazon, in its own website, and in retail stores. Which P does this describe?",
      options: ["Product", "Promotion", "Place", "Process"],
      correct: 2,
      explanation:
        "Place (also called Distribution) covers all the channels through which customers can access and purchase the product. Multi-channel distribution is a Place strategy.",
    },
    {
      question: "A law firm has a strict intake process: initial consultation, needs assessment, proposal, and engagement letter. Which of the 7 Ps does this represent?",
      options: ["People", "Physical Evidence", "Process", "Promotion"],
      correct: 2,
      explanation:
        "Process is the standardized set of procedures through which a service is delivered. For professional services, a clear process builds confidence and consistency - it's a key differentiator.",
    },
    {
      question: "When is it most important to optimize the 'People' P of the 7 Ps?",
      options: [
        "When launching a new e-commerce product",
        "When the service quality varies drastically across customer interactions",
        "When ad spend is decreasing",
        "When physical distribution costs are rising",
      ],
      correct: 1,
      explanation:
        "People matters most when service quality is inconsistent. Hiring, training, and culture directly determine the customer experience in service businesses - and inconsistency is the top complaint in service industries.",
    },
  ],

  "fundamentals/positioning": [
    {
      question: "Al Ries and Jack Trout argued that positioning happens 'in the mind of the prospect.' What does this mean practically?",
      options: [
        "You should focus on what your product actually does, not perception",
        "Positioning is about what customers believe, not what you claim",
        "The best features automatically create the best position",
        "Advertising budgets determine positioning outcomes",
      ],
      correct: 1,
      explanation:
        "Positioning is a perception battle, not a product battle. You can have the objectively superior product but still lose if competitors own the relevant mental space. Marketers must shape the customer's mental frame, not just communicate features.",
    },
    {
      question: "Why does 'better' often lose to 'different' in positioning?",
      options: [
        "Customers cannot evaluate quality differences",
        "Better is hard to prove; different creates its own category where you automatically win",
        "Lower prices always win over quality claims",
        "Differentiation only matters in luxury markets",
      ],
      correct: 1,
      explanation:
        "When you claim 'better', you invite direct comparison with the incumbent - which the incumbent usually wins because they have more trust, reviews, and familiarity. When you claim 'different', you define a new category where you are the default choice.",
    },
    {
      question: "A brand positions itself as 'the safest SUV for families.' What is the frame of reference and the point of difference?",
      options: [
        "Frame of reference: safety; Point of difference: families",
        "Frame of reference: SUVs; Point of difference: safest for families",
        "Frame of reference: families; Point of difference: premium pricing",
        "Frame of reference: cars; Point of difference: SUV body style",
      ],
      correct: 1,
      explanation:
        "The frame of reference (the category you are competing in) is SUVs. The point of difference (why to choose you over others in that category) is being the safest option for families. This is the core structure of any positioning statement.",
    },
    {
      question: "Which company best illustrates 'category creation' as a positioning strategy?",
      options: [
        "Pepsi positioning itself against Coca-Cola",
        "Salesforce coining 'CRM in the cloud' rather than competing with Siebel directly",
        "McDonald's competing on price with Burger King",
        "Apple releasing a faster version of an existing iPhone",
      ],
      correct: 1,
      explanation:
        "Salesforce did not try to beat Siebel at their own game. By creating the 'cloud CRM' category, they changed the evaluation criteria entirely and became the automatic leader of a new category before competitors could respond.",
    },
  ],

  "seo/keyword-research": [
    {
      question: "A keyword has 50,000 monthly searches but a Keyword Difficulty of 85. A second keyword has 2,000 searches and difficulty of 22. Which should a new website prioritize?",
      options: [
        "The high-volume keyword - it has more potential traffic",
        "The lower-difficulty keyword - it is actually rankable for a new site",
        "Neither - both are unsuitable for SEO",
        "The high-volume keyword if you also run paid ads to supplement",
      ],
      correct: 1,
      explanation:
        "Keyword difficulty of 85 means pages ranking #1 have hundreds of referring domains. A new site cannot compete there. Starting with achievable keywords builds rankings, trust, and links that eventually enable targeting harder terms.",
    },
    {
      question: "What does 'search intent' tell you that monthly search volume alone does not?",
      options: [
        "How competitive the keyword is",
        "What stage of the buyer journey the searcher is at and what type of content they expect",
        "Which geographic region the searches come from",
        "Whether the keyword is growing or declining over time",
      ],
      correct: 1,
      explanation:
        "Search intent reveals what the user actually wants - an informational article, a product page, a comparison, or a specific tool. Ranking for a keyword with mismatched intent leads to high bounce rates and no conversions even with good traffic.",
    },
    {
      question: "What is the primary advantage of targeting 'long-tail keywords' (3+ words, lower volume)?",
      options: [
        "They rank faster because Google prioritizes them",
        "They indicate higher purchase intent and face less competition",
        "They generate more backlinks from other sites",
        "Long-tail keywords are cheaper in paid ads",
      ],
      correct: 1,
      explanation:
        "Long-tail keywords like 'best CRM for small law firms' are much more specific, meaning searchers are further down the purchase funnel with clearer intent. They also face fewer established competitors, making them achievable for newer sites.",
    },
    {
      question: "A competitor ranking #1 for your target keyword has 400 referring domains linking to that page. What does this tell you about your strategy?",
      options: [
        "You need to publish your content faster than them",
        "You need a significant link-building effort alongside great content to compete",
        "You should target the same keyword with a lower word count",
        "Paid ads will automatically help your organic rankings",
      ],
      correct: 1,
      explanation:
        "Referring domains are a core ranking signal. If the #1 result has 400 links, you need a substantial link-building program - not just content quality. Knowing the link benchmark before you start prevents wasted effort on unwinnable keywords.",
    },
    {
      question: "Which tool would you use to discover what keywords your competitors rank for but you do not?",
      options: [
        "Google Search Console",
        "Google Trends",
        "A keyword gap analysis tool like Ahrefs or Semrush",
        "Google Analytics audience reports",
      ],
      correct: 2,
      explanation:
        "Keyword gap analysis compares your ranking keywords against competitors' and surfaces terms where they have visibility but you do not. Google Search Console only shows keywords you already rank for, not gaps.",
    },
  ],

  "seo/on-page-seo": [
    {
      question: "You write a page targeting 'email marketing for e-commerce'. Where should the primary keyword appear for maximum SEO impact?",
      options: [
        "Only in the meta description",
        "In the title tag, H1, first paragraph, and at least one subheading",
        "Repeated every 50 words throughout the page",
        "Only in the alt text of all images",
      ],
      correct: 1,
      explanation:
        "Title tag, H1, and early body text are the highest-signal placements. Google uses these to understand what a page is about. Keyword stuffing (repeating every 50 words) is a spam signal. Strategic placement is more effective than repetition.",
    },
    {
      question: "A title tag is cut off in Google search results. What is the typical maximum length?",
      options: ["30 characters", "60 characters", "120 characters", "200 characters"],
      correct: 1,
      explanation:
        "Google typically displays 50-60 characters of a title tag before truncating. Longer titles may still be used for ranking but will not display fully in search results, weakening click-through rates.",
    },
    {
      question: "What is the purpose of the meta description in on-page SEO?",
      options: [
        "It is a direct ranking factor that Google uses to determine page relevance",
        "It appears below the title in search results and influences click-through rate",
        "It tells Google how often to crawl the page",
        "It sets the canonical URL for the page",
      ],
      correct: 1,
      explanation:
        "Meta descriptions are NOT direct ranking factors - Google confirmed this. However, a compelling meta description increases click-through rate, which brings more traffic. Google often rewrites them anyway, but writing them well is still good practice.",
    },
    {
      question: "What does a 'heading hierarchy' (H1, H2, H3) do for on-page SEO?",
      options: [
        "Determines the font size automatically for accessibility",
        "Signals content structure to Google and makes pages easier to scan for users",
        "Prevents duplicate content penalties across the site",
        "Increases the page's domain authority",
      ],
      correct: 1,
      explanation:
        "Headings are both a semantic signal to search engines (helping them understand content structure and topic coverage) and a usability element. Pages with clear heading hierarchies rank better and convert better because they are easier to read.",
    },
  ],

  "seo/link-building": [
    {
      question: "What does Google use backlinks to determine?",
      options: [
        "How recently a page was updated",
        "The authority and trustworthiness of a page based on who links to it",
        "The reading level and audience of the content",
        "How fast the page loads",
      ],
      correct: 1,
      explanation:
        "PageRank (Google's foundational algorithm) treats links as votes of confidence. A link from a high-authority, relevant site signals that your content is trustworthy and valuable, which increases your rankings.",
    },
    {
      question: "Which link-building tactic carries the highest risk of a Google penalty?",
      options: [
        "Guest posting on relevant industry publications",
        "Creating free tools that attract natural links",
        "Paying for links on unrelated high-traffic websites",
        "Being listed in legitimate industry directories",
      ],
      correct: 2,
      explanation:
        "Paid links that attempt to manipulate PageRank violate Google's guidelines. Unrelated paid links are easy for Google to detect and can result in manual penalties. Google's Penguin algorithm also algorithmically discounts manipulative link patterns.",
    },
    {
      question: "You earn 50 links from a single low-quality domain. How does this compare to earning 5 links from 5 different high-authority, relevant domains?",
      options: [
        "50 links are always more valuable than 5 links",
        "5 links from diverse high-authority domains are far more valuable",
        "Both scenarios produce identical SEO outcomes",
        "The 50 links will help more in the short term then fade",
      ],
      correct: 1,
      explanation:
        "Link diversity and domain authority matter far more than raw link count. Google's algorithm is designed to discount link spam. 5 links from respected, relevant sources signal genuine editorial endorsement - which is what the algorithm rewards.",
    },
    {
      question: "What is 'link velocity' and why does it matter?",
      options: [
        "How quickly a linked page loads after being clicked",
        "The rate at which a page acquires new backlinks over time",
        "The number of outbound links on a page",
        "The anchor text diversity of incoming links",
      ],
      correct: 1,
      explanation:
        "Unnatural spikes in link acquisition (e.g., 500 links in one week after months of zero) are a red flag to Google that links may be purchased or manipulated. Steady, organic-looking link growth over time is a positive signal.",
    },
  ],

  "paid-ads/google-search-ads": [
    {
      question: "A user searches for 'buy running shoes online'. Your ad appears. What makes Google Search Ads uniquely valuable for this query?",
      options: [
        "Search ads appear on social media where the user's friends can also see them",
        "The user has demonstrated active purchase intent - you are capturing demand, not creating it",
        "Search ads have lower CPCs than display ads",
        "Google guarantees the user will click the ad",
      ],
      correct: 1,
      explanation:
        "Search ads capture existing demand - people who are actively looking for what you sell right now. This is fundamentally different from interruption advertising (display, social) where you create demand. Capturing intent converts at much higher rates.",
    },
    {
      question: "What determines whether your ad shows and in what position in Google Search?",
      options: [
        "Your daily budget and account age",
        "Ad Rank, which is your bid multiplied by Quality Score",
        "The number of keywords in your ad group",
        "Your click-through rate from the previous month",
      ],
      correct: 1,
      explanation:
        "Ad Rank = Bid x Quality Score (simplified). Quality Score includes expected CTR, ad relevance, and landing page experience. A highly relevant ad with a lower bid can outrank a high bid with a poorly targeted ad.",
    },
    {
      question: "Why would you add negative keywords to a Google Search campaign?",
      options: [
        "To reduce your Quality Score on irrelevant queries",
        "To prevent your ads from showing on irrelevant searches and wasting budget",
        "To block competitor keywords from triggering your ads",
        "To increase impression share on your target keywords",
      ],
      correct: 1,
      explanation:
        "Negative keywords exclude irrelevant traffic. If you sell premium software but 'free' is not a negative keyword, you pay for clicks from users who will never convert. Negative keywords protect ROI by ensuring budget goes only to relevant queries.",
    },
    {
      question: "An advertiser has a Quality Score of 3/10 and bids $5. A competitor has a Quality Score of 8/10 and bids $3. Who wins the auction?",
      options: [
        "The advertiser with the higher bid always wins",
        "The competitor with Quality Score 8 likely wins with a lower cost",
        "Both ads show in equal position",
        "The advertiser who has been running longer wins",
      ],
      correct: 1,
      explanation:
        "Ad Rank = Bid x Quality Score. Advertiser A: 5 x 3 = 15. Competitor: 3 x 8 = 24. The competitor wins AND pays less. This is Google's mechanism to reward relevance - good ads cost less per impression than poor ads.",
    },
  ],

  "paid-ads/meta-ads": [
    {
      question: "Unlike Google Search Ads, Meta Ads are primarily 'interruption' advertising. What does this mean for creative strategy?",
      options: [
        "Meta ads should use the same keyword targeting as Google",
        "The ad must stop the scroll and create interest in users who were not actively looking for the product",
        "Meta ads only work for e-commerce, not services",
        "You should use longer copy because users are in a relaxed browsing mindset",
      ],
      correct: 1,
      explanation:
        "Meta users are not searching for your product - they are watching videos, scrolling friends' updates, or reading posts. Your ad must interrupt that behavior and earn attention in the first 1-3 seconds. Creative (image, video, hook) is the primary lever, not targeting.",
    },
    {
      question: "What is a lookalike audience in Meta Ads?",
      options: [
        "People who look similar to your brand mascot",
        "Users whose demographic and behavioral profile is similar to your existing customers",
        "Accounts that have interacted with competitors",
        "Users who have visited your website in the past 30 days",
      ],
      correct: 1,
      explanation:
        "Lookalike audiences let Meta find new users whose behaviors, interests, and characteristics resemble your best customers (defined by a custom audience seed). It is one of Meta's most powerful prospecting tools.",
    },
    {
      question: "After iOS 14, Meta's ad targeting became less precise. What is the primary reason?",
      options: [
        "Meta reduced its data center capacity",
        "Apple's App Tracking Transparency (ATT) prompt caused most users to opt out of cross-app tracking",
        "GDPR forced Meta to delete all user data",
        "Meta voluntarily reduced data collection to comply with FTC guidelines",
      ],
      correct: 1,
      explanation:
        "Apple's ATT prompt (iOS 14.5+) required apps to ask users for permission to track them across other apps and websites. Most users declined. This broke Meta's ability to attribute conversions and target based on off-Facebook behavior, significantly reducing ad performance data.",
    },
    {
      question: "A Meta ad has a 4% CTR but a 0.5% conversion rate on the landing page. Where is the primary problem?",
      options: [
        "The ad targeting is too broad",
        "The landing page is not delivering on the promise the ad made",
        "The campaign objective is set incorrectly",
        "The daily budget is too low to generate sufficient data",
      ],
      correct: 1,
      explanation:
        "A 4% CTR means the ad is compelling and the audience is interested. But a 0.5% landing page conversion rate (very low) means the page is failing. This is typically a message mismatch - the ad promised something the page does not deliver, or the page has poor UX or trust signals.",
    },
  ],

  "paid-ads/bidding-strategies": [
    {
      question: "What is the key difference between Manual CPC and Target CPA bidding?",
      options: [
        "Manual CPC only works on Google Display; Target CPA only works on Search",
        "Manual CPC gives you direct control over bids; Target CPA lets Google's algorithm optimize bids to hit a conversion cost goal",
        "Target CPA is always more expensive than Manual CPC",
        "Manual CPC requires a conversion tracking setup; Target CPA does not",
      ],
      correct: 1,
      explanation:
        "Manual CPC means you set bids for keywords yourself. Target CPA hands bid decisions to Google's machine learning, which adjusts bids in real time using signals you do not have access to (device, location, time, audience, etc.) to hit your cost per acquisition goal.",
    },
    {
      question: "Why should you avoid switching to Target ROAS bidding when you have fewer than 30-50 conversions per month?",
      options: [
        "Target ROAS is only available to enterprise advertisers",
        "Google's algorithm needs sufficient conversion data to learn and optimize effectively",
        "Target ROAS increases CPCs automatically when data is sparse",
        "Google requires a minimum spend of $10,000 before enabling smart bidding",
      ],
      correct: 1,
      explanation:
        "Smart bidding strategies rely on machine learning trained on your conversion data. With insufficient data (fewer than 30-50 conversions per month), the algorithm cannot make reliable bid predictions and performance will be erratic. More data = better optimization.",
    },
    {
      question: "You want to maximize the number of conversions within a fixed daily budget. Which bidding strategy is best?",
      options: [
        "Manual CPC with bid adjustments",
        "Maximize Conversions",
        "Target Impression Share",
        "Enhanced CPC",
      ],
      correct: 1,
      explanation:
        "Maximize Conversions automatically sets bids to get the most conversions possible within your specified budget. It does not target a specific CPA - it just spends what you give it as efficiently as possible for volume.",
    },
    {
      question: "A campaign switches from Manual CPC to Target CPA and performance drops for the first 2 weeks. What is likely happening?",
      options: [
        "Target CPA is incompatible with the campaign structure",
        "The algorithm is in a learning phase, gathering data before it can optimize effectively",
        "The target CPA is set correctly but the budget is too low",
        "Google is penalizing the account for switching strategies",
      ],
      correct: 1,
      explanation:
        "All smart bidding strategies have a learning period (typically 1-2 weeks) where Google's algorithm tests different bid levels to understand what drives conversions for this campaign. Performance during learning is often inconsistent and should not be judged by normal standards.",
    },
  ],

  "growth/aarrr": [
    {
      question: "In the AARRR framework, why does Dave McClure place Retention before Revenue?",
      options: [
        "Revenue is harder to measure than retention",
        "Without retention, you cannot reliably generate or predict revenue",
        "Retention is a vanity metric that does not affect business outcomes",
        "Revenue depends on advertising spend, not product quality",
      ],
      correct: 1,
      explanation:
        "If users churn quickly, any revenue generated is unsustainable and unpredictable. Retention signals that the product delivers real value. Fixing retention first makes all downstream metrics (referral, revenue) more reliable and scalable.",
    },
    {
      question: "Your app has 10,000 sign-ups per month but only 200 become active users. Which AARRR metric is broken?",
      options: ["Acquisition", "Activation", "Retention", "Referral"],
      correct: 1,
      explanation:
        "Activation is the step where users experience the core value of the product for the first time. A 2% activation rate (200 out of 10,000) means most people sign up but never reach the 'aha moment'. This is the leak to fix before spending more on acquisition.",
    },
    {
      question: "A company has a viral coefficient of 0.8. What does this mean?",
      options: [
        "Each user invites 0.8 new users on average, which is not enough for viral growth",
        "80% of users will refer at least one person within 30 days",
        "The product's Net Promoter Score is 80",
        "0.8% of users have gone viral on social media",
      ],
      correct: 0,
      explanation:
        "A viral coefficient of 0.8 means each user generates 0.8 new users through referral. For viral growth, you need K > 1 (each user brings more than one new user). At 0.8, referrals slow growth but do not cause exponential expansion on their own.",
    },
    {
      question: "Which stage of AARRR should a startup focus on FIRST?",
      options: [
        "Acquisition - get as many users as possible to find what works",
        "Activation - ensure the product delivers value before scaling acquisition",
        "Revenue - generate cash to fund growth",
        "Referral - word of mouth is the most efficient growth channel",
      ],
      correct: 1,
      explanation:
        "Scaling acquisition before activation is fixed is pouring water into a leaky bucket. If users are not activating, more traffic only wastes budget. First prove the product creates value (activation), then pour fuel on the fire.",
    },
  ],

  "growth/ab-testing": [
    {
      question: "You run an A/B test for 3 days and see a 15% lift with p=0.04. Should you call the test and ship variant B?",
      options: [
        "Yes - p < 0.05 means the result is statistically significant",
        "No - 3 days is too short; you need at least one full week to account for day-of-week effects",
        "Yes - a 15% lift is economically significant regardless of time",
        "No - you should wait for p < 0.01 before calling any test",
      ],
      correct: 1,
      explanation:
        "Statistical significance can appear early by chance (the 'peeking problem'). Most businesses have weekly behavior cycles - Monday behavior differs from Friday. A test shorter than one full week risks capturing unrepresentative patterns. Always pre-define your sample size and run until you hit it.",
    },
    {
      question: "What does a p-value of 0.05 actually mean in an A/B test?",
      options: [
        "There is a 95% chance the variant is better than the control",
        "If there was no real difference, there is a 5% chance of seeing results this extreme by chance",
        "The variant will lift conversion by 5%",
        "You need 5% more traffic to confirm the result",
      ],
      correct: 1,
      explanation:
        "The p-value is the probability of observing results at least this extreme assuming the null hypothesis (no difference) is true. p=0.05 does NOT mean 95% confidence the variant wins. It means random chance could produce this result 5% of the time even if there is no real difference.",
    },
    {
      question: "Which of these is NOT a valid reason to stop an A/B test early?",
      options: [
        "The pre-defined sample size has been reached",
        "The test is causing a significant business harm (e.g., crashing checkout)",
        "Variant B already looks great after 2 days and you want to ship it",
        "An external event has fundamentally changed user behavior",
      ],
      correct: 2,
      explanation:
        "Stopping early because a variant 'looks good' is one of the most common A/B testing mistakes. Early apparent wins are statistically fragile and frequently reverse when tests run to full sample size. This is called 'peeking' and inflates false positive rates dramatically.",
    },
    {
      question: "You test a red CTA button vs. blue and find a statistically significant 8% lift. What should you test next?",
      options: [
        "Red vs. green buttons",
        "The CTA copy, since creative often has larger impact than color",
        "The entire page layout",
        "The email subject line that drives traffic to the page",
      ],
      correct: 1,
      explanation:
        "CTA copy (the words on the button) typically has a larger impact on conversion than color. Testing copy like 'Start Free Trial' vs. 'Get Started Today' vs. 'Try It Free' addresses the message, not the aesthetic. Prioritize tests by potential impact.",
    },
  ],

  "growth/north-star-metric": [
    {
      question: "Which of these is the best North Star Metric for Spotify?",
      options: [
        "Total app downloads",
        "Monthly active listeners",
        "Time spent listening per user per week",
        "Number of playlists created",
      ],
      correct: 2,
      explanation:
        "Time spent listening captures both active users AND depth of engagement - the real value Spotify delivers (music enjoyment). Downloads is an acquisition vanity metric. MAL misses frequency. Playlists is a feature metric, not a value metric.",
    },
    {
      question: "A B2B SaaS company tracks 'MRR' as its North Star Metric. What problem does this create?",
      options: [
        "MRR is not correlated with business success",
        "MRR is a lagging outcome, not a leading indicator of value delivered - it tells you the result but not what to fix",
        "MRR is too easy to measure accurately",
        "MRR does not account for customer acquisition costs",
      ],
      correct: 1,
      explanation:
        "A good North Star Metric is a leading indicator of value delivered that predicts future revenue. MRR is a lagging financial outcome. Teams using MRR as a NSM often optimize for short-term billing events rather than long-term retention and engagement.",
    },
    {
      question: "What makes a metric a good North Star Metric?",
      options: [
        "It should be the metric the CEO watches most closely",
        "It should capture the core value the product delivers to users and predict long-term business health",
        "It must be measurable daily in a real-time dashboard",
        "It should be the metric competitors use so you can benchmark",
      ],
      correct: 1,
      explanation:
        "A North Star Metric should be the single number that best captures value delivered to users. When it goes up, the business wins AND users win. It should also be actionable - product, marketing, and engineering can all influence it.",
    },
  ],

  "email/email-marketing-101": [
    {
      question: "What is the fundamental difference between transactional and marketing emails?",
      options: [
        "Transactional emails are automated; marketing emails are always manually sent",
        "Transactional emails are triggered by user actions (receipts, password resets); marketing emails are sent for promotional purposes",
        "Transactional emails require opt-in; marketing emails can be sent to anyone",
        "Transactional emails go to spam more often than marketing emails",
      ],
      correct: 1,
      explanation:
        "Transactional emails (order confirmations, shipping notices, password resets) are triggered by a user's specific action and are expected by the recipient. Marketing emails (newsletters, promotions) are sent for business purposes and require explicit consent under most regulations.",
    },
    {
      question: "Why does email have among the highest ROI of any marketing channel (often cited as $36-42 per $1 spent)?",
      options: [
        "Email platforms have no cost for large lists",
        "You own the list - there is no algorithmic gatekeeping between your message and the audience",
        "Email open rates are higher than social media engagement rates",
        "Email is the only channel that works for both B2B and B2C",
      ],
      correct: 1,
      explanation:
        "Unlike social media (where algorithms decide what people see) or search (where Google controls rankings), your email list is an asset you own. There is no intermediary that can suddenly stop showing your content. This direct, owned relationship is what drives the superior ROI.",
    },
    {
      question: "A subscriber who signed up for a weekly newsletter receives 5 emails in one week from the same brand. What risk does this create?",
      options: [
        "Higher open rates because more emails means more touchpoints",
        "List fatigue, unsubscribes, and spam complaints that harm future deliverability",
        "Google penalizes brands that send too many emails",
        "The brand's email domain will be blocked after a set number of sends",
      ],
      correct: 1,
      explanation:
        "Email frequency mismatches expectations. When a subscriber agreed to weekly emails but receives daily ones, they feel violated. They unsubscribe or mark as spam. Spam complaints above 0.1% (Gmail's threshold) can result in your emails being blocked for all Gmail users.",
    },
  ],

  "email/welcome-series": [
    {
      question: "Research shows that personalized subject lines can increase open rates by up to 50%. What is an example of effective personalization beyond just using the recipient's name?",
      options: [
        "Adding 'Hi [First Name]' to every subject line",
        "Referencing a recent behavior: 'You left something in your cart, [Name]'",
        "Using the city the subscriber lives in",
        "Mentioning the subscriber's job title",
      ],
      correct: 1,
      explanation:
        "Name personalization alone has diminishing returns - subscribers are used to it. Behavioral personalization (triggered by their actions) creates genuine relevance. An abandoned cart email referencing the specific product they left is 2-4x more effective than a generic name mention.",
    },
    {
      question: "Which subject line is most likely to get opened?",
      options: [
        "'Our Q3 Newsletter - Important Updates Inside'",
        "'The one mistake killing your email open rates'",
        "'Email Marketing Tips for Better Results'",
        "'JULY NEWSLETTER | Please Read'",
      ],
      correct: 1,
      explanation:
        "The second option creates specific curiosity without revealing the answer (a 'curiosity gap'). 'The one mistake' implies specific, actionable content. The others are generic, describe the format rather than the value, or use all-caps (which many spam filters flag).",
    },
    {
      question: "Subject line A/B test: 'Save 20% this weekend only' vs 'Your exclusive offer expires Sunday'. Which framing typically performs better and why?",
      options: [
        "The first - specific percentage discounts are more compelling than vague 'exclusive' language",
        "The second - loss aversion (expiring offer) is a stronger motivator than gain framing",
        "Both perform identically - discounts are universally effective",
        "The first - shorter subject lines always outperform longer ones",
      ],
      correct: 1,
      explanation:
        "Loss aversion (Kahneman) means people are more motivated by avoiding a loss than achieving an equivalent gain. 'Expires Sunday' creates urgency around losing access. 'Your exclusive' also adds personalization. This framing typically outperforms plain discount statements.",
    },
  ],

  "email/deliverability": [
    {
      question: "What do SPF, DKIM, and DMARC collectively accomplish for email deliverability?",
      options: [
        "They encrypt the email content so it cannot be read in transit",
        "They allow receiving mail servers to verify that an email actually came from the domain it claims to be from",
        "They set limits on how many emails a domain can send per day",
        "They automatically unsubscribe inactive email addresses",
      ],
      correct: 1,
      explanation:
        "SPF (authorized sending servers), DKIM (cryptographic signature of email content), and DMARC (policy for what to do with failures) work together to prove email authenticity. Without them, your emails look suspicious and major inbox providers (Gmail, Outlook) are more likely to deliver them to spam.",
    },
    {
      question: "Your email list has 100,000 subscribers but only 20% ever opened an email. What should you do before your next send?",
      options: [
        "Send to all 100,000 to maximize reach",
        "Clean the list - remove or re-engage inactive subscribers to protect sender reputation",
        "Switch email service providers for a fresh start",
        "Increase sending frequency to re-engage the inactive segment",
      ],
      correct: 1,
      explanation:
        "Sending to large numbers of unengaged addresses signals to inbox providers that your list is unclean. Low engagement scores (especially Gmail's data-driven approach) can cause your emails to land in promotions or spam even for engaged subscribers. Regular list hygiene protects deliverability.",
    },
    {
      question: "Google and Yahoo introduced new requirements in 2024 for bulk senders (1,000+ emails/day). Which of these was NOT a new requirement?",
      options: [
        "Authenticate email with SPF and DKIM",
        "Keep spam complaint rates below 0.1%",
        "Honor unsubscribe requests within 2 business days",
        "Limit email content to plain text only",
      ],
      correct: 3,
      explanation:
        "Google and Yahoo's 2024 requirements for bulk senders included: email authentication (SPF, DKIM, DMARC), spam rate below 0.1%, and one-click unsubscribe with processing within 2 days. HTML emails are still permitted - there is no plain text requirement.",
    },
  ],

  "analytics/ga4-setup": [
    {
      question: "GA4 replaced Universal Analytics. What is the most significant structural difference?",
      options: [
        "GA4 uses a session-based data model; Universal Analytics used event-based tracking",
        "GA4 uses an event-based data model; Universal Analytics used session-based tracking",
        "GA4 only works with Google Ads; Universal Analytics supported all traffic sources",
        "GA4 does not support ecommerce tracking; Universal Analytics did",
      ],
      correct: 1,
      explanation:
        "Universal Analytics centered on sessions and pageviews. GA4 tracks everything as events (page_view, scroll, click, purchase are all events with parameters). This makes cross-device, cross-platform measurement more consistent and flexible.",
    },
    {
      question: "In GA4, what is an 'engaged session'?",
      options: [
        "Any session where the user clicked at least one link",
        "A session lasting over 10 seconds, with a conversion, or with 2+ page views",
        "A session where the user came from a paid advertising channel",
        "A session where the user interacted with a form or button",
      ],
      correct: 1,
      explanation:
        "GA4 defines engaged sessions as lasting over 10 seconds, resulting in 1+ conversion events, or containing 2+ page/screen views. This replaced bounce rate with 'engagement rate' as the primary quality metric, giving a more meaningful view of content quality.",
    },
    {
      question: "Why does GA4 use machine learning for some reporting, especially for users who decline cookie consent?",
      options: [
        "To make the interface look more modern",
        "To model and estimate behavior for users whose data cannot be collected due to privacy settings",
        "To predict which ads will perform best next quarter",
        "To automatically create audience segments for Google Ads",
      ],
      correct: 1,
      explanation:
        "When users decline consent, GA4 cannot track them directly. Google uses statistical modeling (based on similar users who did consent) to fill in data gaps. This 'consent mode' approach attempts to give marketers usable aggregate data while respecting individual privacy preferences.",
    },
  ],

  "analytics/attribution": [
    {
      question: "A customer sees a Facebook ad on Monday, clicks a Google ad on Wednesday, then converts via a direct visit on Friday. Under last-click attribution, which channel gets credit?",
      options: [
        "Facebook (first touchpoint)",
        "Google (last paid touchpoint)",
        "Direct (last touchpoint before conversion)",
        "All three get equal credit",
      ],
      correct: 2,
      explanation:
        "Last-click attribution gives 100% of conversion credit to the final touchpoint before conversion, which was the direct visit on Friday. This systematically undervalues awareness channels (like Facebook) that started the customer journey.",
    },
    {
      question: "What is the fundamental problem all attribution models share?",
      options: [
        "They are too expensive for small businesses to implement",
        "No model can perfectly prove causality - we know which touchpoints existed, not which caused the conversion",
        "Attribution models only work for digital channels, not TV or out-of-home",
        "Attribution data is always 30-day delayed",
      ],
      correct: 1,
      explanation:
        "All attribution models tell you which marketing touchpoints a converting customer passed through, but correlation is not causation. Would they have converted without the Facebook ad? Without the email? No model answers this question - that requires incrementality testing.",
    },
    {
      question: "Which attribution model is best for a brand running both long-term awareness campaigns and short-term performance campaigns?",
      options: [
        "Last-click - it rewards what drove the final decision",
        "First-click - it rewards what created initial awareness",
        "Linear or data-driven - they distribute credit across the funnel",
        "Time-decay - it weights recent touchpoints most",
      ],
      correct: 2,
      explanation:
        "Linear attribution gives equal credit to each touchpoint; data-driven uses ML to weight touchpoints by their actual contribution. Both provide a more balanced view when you have multiple channel types working across different funnel stages - unlike first or last click, which ignore the full journey.",
    },
  ],

  "email/clv": [
    {
      question: "A business has a CAC of $100 and an average LTV of $300. Is this business healthy from a unit economics perspective?",
      options: [
        "No - a 3:1 LTV:CAC ratio is too low for sustainable growth",
        "Yes - a 3:1 LTV:CAC ratio is generally considered the minimum viable ratio",
        "It depends entirely on the industry - there is no universal benchmark",
        "No - LTV should always be at least 10x CAC",
      ],
      correct: 1,
      explanation:
        "The 3:1 LTV:CAC ratio is the widely-cited benchmark for sustainable unit economics in SaaS and subscription businesses. Below 3:1 often means you are spending too much to acquire customers relative to what they are worth. Above 5:1 might mean you are underinvesting in growth.",
    },
    {
      question: "Your LTV:CAC ratio is 5:1 but your CAC Payback Period is 18 months. What problem does this reveal?",
      options: [
        "No problem - a 5:1 ratio is excellent and payback period is irrelevant",
        "Despite good long-term economics, the business needs cash to survive 18 months before recovering acquisition costs",
        "The LTV calculation is incorrect",
        "The CAC is too low to attract quality customers",
      ],
      correct: 1,
      explanation:
        "A 5:1 LTV:CAC ratio looks great on paper, but if you spend $1,000 today and do not recover it for 18 months, you need substantial working capital. Fast-growing companies with long payback periods often need large funding rounds just to stay cash-flow positive. Short payback periods allow reinvestment of capital faster.",
    },
    {
      question: "Which of these actions directly improves LTV without increasing revenue per customer?",
      options: [
        "Raising prices",
        "Reducing churn so customers stay longer",
        "Increasing ad spend",
        "Adding more features to the product",
      ],
      correct: 1,
      explanation:
        "LTV = Average Revenue per User x Gross Margin / Churn Rate. Cutting churn is often the highest-leverage LTV improvement because it is multiplicative - keeping customers longer dramatically increases their total value. Retention improvements often cost less than acquisition.",
    },
  ],

  "copywriting/copywriting-101": [
    {
      question: "David Ogilvy said 'On average, five times as many people read the headline as read the body copy.' What is the practical implication?",
      options: [
        "Body copy is unnecessary - just write better headlines",
        "The headline is the most critical copy element; if it fails, the rest is never read",
        "You should use five headlines per ad to maximize chances",
        "Headlines should be at least 5x longer than body copy",
      ],
      correct: 1,
      explanation:
        "If 5x more people read the headline than the body, you have already lost most of your audience before they reach your first body paragraph. The headline must earn the right to be read further. Most copywriting effort should go into crafting and testing headlines.",
    },
    {
      question: "What distinguishes direct response copywriting from brand copywriting?",
      options: [
        "Direct response is always shorter; brand copy is always longer",
        "Direct response is designed to produce an immediate, measurable action; brand copy builds long-term perception",
        "Direct response only works in email; brand copy works everywhere",
        "Direct response is written by agencies; brand copy is written in-house",
      ],
      correct: 1,
      explanation:
        "Direct response copy (sales pages, email campaigns, ads) has a clear call to action and is judged by measurable response rates. Brand copy (taglines, manifestos, awareness ads) builds emotional associations over time with no immediate conversion expectation. Both matter, but they use different craft principles.",
    },
    {
      question: "Why does copy that leads with benefits outperform copy that leads with features?",
      options: [
        "Features are too technical for most audiences to understand",
        "People buy outcomes - what the product does for them - not specifications",
        "Benefits are shorter and easier to read than technical specifications",
        "Search engines rank benefit-led copy higher than feature-led copy",
      ],
      correct: 1,
      explanation:
        "Customers do not buy a drill; they buy a hole in the wall. Features describe what a product is. Benefits describe what the customer gains. 'Saves 3 hours per week' (benefit) is more persuasive than '50 automation workflows' (feature) because it speaks to the desired outcome.",
    },
    {
      question: "The PAS copywriting formula stands for Problem, Agitate, Solution. Why is 'Agitate' a critical step?",
      options: [
        "Agitation makes the copy longer, which Google rewards",
        "Deepening the emotional pain of the problem increases motivation to act when the solution is presented",
        "Agitation reduces the need for social proof and testimonials",
        "Readers cannot understand solutions unless problems are mentioned twice",
      ],
      correct: 1,
      explanation:
        "People act when pain is high enough. Agitation makes the cost of inaction visceral - it connects the problem to real consequences (time wasted, money lost, stress, missed opportunities). Without agitation, the problem feels abstract and the solution feels optional.",
    },
  ],

  "cro/cro-101": [
    {
      question: "Your website converts at 2%. What does 'conversion rate optimization' actually mean in practice?",
      options: [
        "Running more ads to bring in traffic that is more likely to convert",
        "Systematically identifying and removing barriers that prevent existing visitors from completing desired actions",
        "Redesigning the website from scratch with a better template",
        "Lowering prices until the conversion rate improves",
      ],
      correct: 1,
      explanation:
        "CRO works with the traffic you already have. It uses research (heatmaps, recordings, surveys, user tests) to identify why visitors are NOT converting, then systematically tests solutions. It is not about more traffic - it is about converting more of the traffic you already pay for.",
    },
    {
      question: "Why is CRO often described as having a compounding effect on other marketing channels?",
      options: [
        "Higher conversion rates automatically improve SEO rankings",
        "A higher conversion rate means every dollar spent on ads, SEO, or email produces more revenue without more spend",
        "CRO reduces the need for retargeting campaigns",
        "Google rewards high-converting pages with lower CPCs in search auctions",
      ],
      correct: 1,
      explanation:
        "If you improve conversion rate from 2% to 4%, every existing marketing channel doubles its output without additional spend. $10,000 in ad spend that previously produced 200 sales now produces 400. CRO multiplies the ROI of every other channel simultaneously.",
    },
    {
      question: "What is the most common reason A/B tests in CRO produce false positive results?",
      options: [
        "The test was run with too many visitors",
        "The test was called early before reaching statistical significance or the required sample size",
        "The wrong metric was set as the primary KPI",
        "The variant design was too different from the control",
      ],
      correct: 1,
      explanation:
        "Peeking at results and stopping tests early is the #1 CRO mistake. When you stop a test the moment it hits p=0.05, you dramatically inflate false positive rates. You need to pre-define your required sample size (based on baseline conversion rate and minimum detectable effect) and run until you hit it.",
    },
    {
      question: "A landing page has a 3% conversion rate. Research shows 70% of visitors leave without scrolling past the hero section. What should you test first?",
      options: [
        "The color of the CTA button below the fold",
        "The hero section headline, subheadline, and CTA copy above the fold",
        "The testimonials section near the bottom of the page",
        "The number of form fields in the checkout flow",
      ],
      correct: 1,
      explanation:
        "If 70% of visitors leave from the hero section, everything below the fold is irrelevant to most visitors. Optimize where the problem actually is. Above-the-fold elements (headline, subheadline, hero image, CTA) are where you win or lose most visitors.",
    },
  ],
};
