import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Marketing Interview Questions 2025 | Marketing Academy",
  description:
    "Ace your next marketing job interview with 30+ real digital marketing interview questions and answers covering SEO, paid ads, content, analytics, and general marketing strategy.",
  keywords: [
    "digital marketing interview questions",
    "marketing interview questions and answers",
    "SEO interview questions",
    "paid advertising interview questions",
    "content marketing interview questions",
    "analytics interview questions",
    "marketing job interview prep",
  ],
};

const sections = [
  {
    id: "general",
    title: "General Marketing Interview Questions",
    categorySlug: "fundamentals",
    categoryLabel: "Marketing Fundamentals",
    qas: [
      {
        q: "What is the difference between brand marketing and performance marketing?",
        a: "Brand marketing builds long-term perception and awareness - it is harder to measure but creates the demand that performance marketing later captures. Performance marketing focuses on direct, measurable actions like clicks, leads, and purchases with a clear ROI. Most companies need both: brand creates pull, performance converts it.",
      },
      {
        q: "Explain the 4Ps of marketing and how they apply today.",
        a: "Product, Price, Place, and Promotion. In a digital context, Place has expanded beyond shelves to include app stores, social commerce, and Amazon. Promotion now includes organic content and paid algorithms. The 4Ps still hold - they just have more channels to work through. Interviewers ask this to see if you can connect classic theory to modern execution.",
      },
      {
        q: "What is Customer Acquisition Cost (CAC) and why does it matter?",
        a: "CAC is total marketing and sales spend divided by the number of new customers acquired in the same period. It matters because if your CAC exceeds what a customer is worth over their lifetime (LTV), you are losing money on every customer. A healthy LTV:CAC ratio is typically 3:1 or higher.",
      },
      {
        q: "How do you calculate Customer Lifetime Value (LTV)?",
        a: "A simple formula: Average Purchase Value x Purchase Frequency x Average Customer Lifespan. For subscription businesses, it is often Monthly Recurring Revenue per customer divided by monthly churn rate. LTV helps you decide how much you can afford to spend acquiring each customer.",
      },
      {
        q: "How would you prioritize marketing channels with a limited budget?",
        a: "Start with the channel that has the shortest feedback loop for your business model - usually paid search for high-intent buyers, or content/SEO for longer consideration cycles. Allocate the minimum viable budget to test 2-3 channels, measure CAC and conversion rate at each stage, then double down on what works before cutting what does not. Avoid spreading too thin.",
      },
      {
        q: "What is a marketing funnel and what are its stages?",
        a: "A marketing funnel maps the customer journey from first awareness to purchase and beyond. Common stages: Awareness (they learn you exist), Consideration (they evaluate options), Decision (they choose to buy), and Retention/Advocacy (they stay and refer). Different tactics work at each stage - broad content at the top, comparison pages and demos in the middle, testimonials and pricing clarity at the bottom.",
      },
    ],
  },
  {
    id: "seo",
    title: "SEO Interview Questions",
    categorySlug: "seo",
    categoryLabel: "SEO",
    qas: [
      {
        q: "What is the difference between on-page and off-page SEO?",
        a: "On-page SEO is everything you control on your own site: title tags, meta descriptions, content quality, internal linking, page speed, and schema markup. Off-page SEO is everything outside your site that signals trust and authority, primarily backlinks from other domains but also brand mentions and social signals. You need both - on-page gets you technically eligible, off-page determines how high you rank among eligible pages.",
      },
      {
        q: "What are Core Web Vitals and why do they matter for SEO?",
        a: "Core Web Vitals are Google's user experience metrics that became a ranking signal in 2021. The three are: LCP (Largest Contentful Paint, measures loading speed), FID/INP (interaction responsiveness), and CLS (Cumulative Layout Shift, measures visual stability). Pages that fail these thresholds can be penalized in rankings even with strong content and links.",
      },
      {
        q: "Walk me through your keyword research process.",
        a: "Start with seed keywords around your product or service, then expand using tools like Ahrefs, Semrush, or Google's own Search Console. Evaluate each keyword on three dimensions: search volume, keyword difficulty (based on competing pages' authority), and business relevance. Prioritize keywords with clear intent that match what your page can credibly answer. Group related keywords into clusters rather than targeting one keyword per page.",
      },
      {
        q: "What is keyword cannibalization and how do you fix it?",
        a: "Keyword cannibalization happens when multiple pages on your site compete for the same keyword, confusing Google about which page to rank. Fix it by auditing your content, consolidating overlapping pages into one strong piece, and using canonical tags or 301 redirects to point authority to the primary URL.",
      },
      {
        q: "How do you approach link building without violating Google's guidelines?",
        a: "Focus on earning links through genuinely useful content - original research, tools, comprehensive guides, and strong opinions that journalists and bloggers want to cite. Supplement with digital PR, guest posts on relevant (not spammy) sites, and fixing broken links on external pages. Avoid link farms, paid links without nofollow, and private blog networks - they work until they get you penalized.",
      },
      {
        q: "What is technical SEO and what are the most important technical factors?",
        a: "Technical SEO ensures search engines can crawl, index, and understand your site. Key factors include: a clean sitemap and robots.txt, fast page load times, mobile-friendly design, HTTPS, proper canonical tags, structured data/schema markup, and fixing crawl errors in Google Search Console. Technical issues can negate great content - Google cannot rank a page it cannot access.",
      },
    ],
  },
  {
    id: "paid-ads",
    title: "Paid Advertising Interview Questions",
    categorySlug: "paid-ads",
    categoryLabel: "Paid Ads",
    qas: [
      {
        q: "What is ROAS and how is it different from ROI?",
        a: "ROAS (Return on Ad Spend) is revenue generated divided by ad spend. If you spend $1,000 and generate $4,000 in revenue, ROAS is 4x or 400%. ROI is broader - it accounts for all costs including product cost, fulfillment, and overhead. ROAS tells you if your ads are generating revenue. ROI tells you if the business is profitable after all expenses.",
      },
      {
        q: "What is Quality Score in Google Ads and how do you improve it?",
        a: "Quality Score (1-10) is Google's estimate of how relevant your ad, keyword, and landing page are to someone searching. Higher Quality Scores lower your cost per click and improve ad position. Improve it by tightening keyword-to-ad relevance (write ads that contain the keyword), improving click-through rate, and making sure your landing page directly addresses what the ad promises.",
      },
      {
        q: "Explain the difference between manual and automated bidding strategies in Google Ads.",
        a: "Manual bidding gives you direct control over max CPC bids for each keyword - useful when you have a small account or want to test specific price points. Automated strategies like Target CPA, Target ROAS, and Maximize Conversions use Google's machine learning to optimize bids in real time based on auction signals like device, location, and time. Automated bidding generally outperforms manual once you have enough conversion data (usually 30-50 conversions per month).",
      },
      {
        q: "What is audience targeting and what types are available in Meta Ads?",
        a: "Meta Ads offers three main audience types: Core Audiences (interest, demographic, and behavior targeting from Facebook/Instagram data), Custom Audiences (your own data - email lists, website visitors via pixel, app events), and Lookalike Audiences (Meta finds new users who statistically resemble your Custom Audience). Custom and Lookalike audiences typically outperform broad interest targeting for performance campaigns.",
      },
      {
        q: "How do you structure a paid ad campaign for a new product launch with no data?",
        a: "Start with broad top-of-funnel awareness campaigns to build pixel data and retargeting pools. Run parallel tests with 2-3 ad creative angles and 2-3 audience hypotheses. Keep budgets equal across tests initially. After 7-14 days and enough impressions, cut underperformers and reallocate to winners. Then add retargeting campaigns for people who visited but did not convert - these will have better efficiency as you scale.",
      },
      {
        q: "What is ad frequency and when does it become a problem?",
        a: "Frequency is how many times the average person in your target audience has seen your ad. For awareness campaigns, a frequency of 2-4 over a week is often healthy. Above 6-7 in a short window, you typically see diminishing CTR and rising CPMs as people become ad-blind. Signs of frequency fatigue: falling CTR, rising CPC, and comments saying 'I keep seeing this ad.' Fix it by refreshing creative, expanding audiences, or pausing and restarting.",
      },
    ],
  },
  {
    id: "content",
    title: "Content Marketing Interview Questions",
    categorySlug: "content",
    categoryLabel: "Content Marketing",
    qas: [
      {
        q: "What is a content strategy and what does it include?",
        a: "A content strategy is the plan for creating, publishing, and governing content to achieve business goals. It includes: defining your target audience and their questions at each funnel stage, choosing the right formats (blog, video, podcast, etc.), setting a publishing cadence you can sustain, defining a distribution plan so content gets seen, and establishing how you will measure success. Without strategy, content creation is just publishing into the void.",
      },
      {
        q: "How do you decide what content to create?",
        a: "Start at the intersection of what your audience is actively searching for and what your brand can credibly speak to. Use keyword research for search-driven content, social listening for trend-driven content, and customer interviews for pain-point-driven content. Prioritize topics where you have a genuine perspective or proprietary data - that is what earns links and trust over generic listicles.",
      },
      {
        q: "What is content distribution and why is it as important as creation?",
        a: "Distribution is how you get content in front of the right people after publishing. Channels include: SEO (organic search), email newsletter, social media posting and ads, syndication to other publications, and outreach to people likely to share or link. The 80/20 rule applies: spend at least as much time distributing as creating. A great piece with no distribution plan will get little traffic regardless of quality.",
      },
      {
        q: "How do you measure content marketing success?",
        a: "Metrics depend on the goal. For awareness: organic traffic, impressions, and social reach. For engagement: time on page, scroll depth, email open rates, and social shares. For conversion: leads generated, demo requests, or revenue attributed to content-assisted conversions. Avoid vanity metrics like raw pageviews - connect content performance to pipeline or revenue to prove business impact.",
      },
      {
        q: "What is pillar content and topic clustering?",
        a: "A pillar page is a comprehensive guide covering a broad topic (like 'email marketing') that links out to cluster pages covering specific subtopics ('email subject line best practices', 'email list segmentation'). The cluster pages link back to the pillar. This structure signals topical authority to Google and helps users navigate related content. It is how you build rankings for competitive head terms through a set of interconnected pages rather than a single page.",
      },
      {
        q: "How would you repurpose a single piece of long-form content?",
        a: "A 2,000-word guide can become: a Twitter/LinkedIn thread (key insights), a short video explainer, an email mini-series (one section per email), an infographic (statistics and frameworks), a podcast episode (read and discuss it), and slide deck for SlideShare or a webinar. Repurposing multiplies reach without proportionally multiplying effort - the research and thinking are already done.",
      },
    ],
  },
  {
    id: "analytics",
    title: "Analytics Interview Questions",
    categorySlug: "analytics",
    categoryLabel: "Analytics",
    qas: [
      {
        q: "What are attribution models and what are the most common types?",
        a: "Attribution models assign credit for a conversion across the touchpoints a customer had before converting. Common models: Last-Click (100% credit to the final touchpoint, common default), First-Click (credits the first touchpoint), Linear (equal credit to all touchpoints), Time Decay (more credit to touchpoints closer to conversion), and Data-Driven (uses machine learning on your actual conversion data). Last-click undervalues awareness channels like content and social - be aware of this bias when evaluating channel performance.",
      },
      {
        q: "What is conversion rate and how do you improve it?",
        a: "Conversion rate is the percentage of visitors who complete a desired action (purchase, sign-up, demo request). Formula: Conversions / Total Visitors x 100. To improve it: identify where in the funnel drop-off happens using funnel reports, run A/B tests on the highest-traffic pages with the most drop-off, reduce friction (fewer form fields, faster load time, clearer CTAs), and add trust signals (testimonials, security badges) near conversion points.",
      },
      {
        q: "Explain A/B testing. What makes a valid test?",
        a: "A/B testing shows two versions of a page or element to different user segments and measures which performs better. A valid test requires: a single variable changed (to know what caused the difference), a large enough sample size to reach statistical significance (typically 95% confidence), and running the test long enough to cover natural traffic variation (usually at least one full week, preferably two). Running underpowered tests or stopping early when you see a lift leads to false positives.",
      },
      {
        q: "What is the difference between a session and a user in Google Analytics?",
        a: "A user is a unique visitor (identified by browser/device cookie). A session is a single visit - one user can have multiple sessions across different days. A session expires after 30 minutes of inactivity or at midnight. This distinction matters for reporting: session-based metrics measure visit behavior, while user-based metrics measure how many distinct people engage with your site.",
      },
      {
        q: "How do you set up and use UTM parameters?",
        a: "UTM parameters are tags appended to URLs that let Google Analytics identify where traffic came from. The five parameters: utm_source (where - google, newsletter, twitter), utm_medium (how - cpc, email, organic), utm_campaign (which campaign), utm_content (which ad variation), utm_term (which keyword). Use a consistent naming convention so your reports stay clean. Without UTMs, traffic from email, social, and ads can show up as 'direct' and you lose visibility into channel performance.",
      },
      {
        q: "What is cohort analysis and when is it useful?",
        a: "Cohort analysis groups users by a shared starting event (usually their first visit or purchase date) and tracks their behavior over time. It is useful for understanding retention - do users acquired in January stick around longer than users acquired in March? It is also how you measure the true impact of product or marketing changes by comparing cohorts before and after the change, rather than looking at aggregate numbers that mix all users together.",
      },
    ],
  },
];

export default function InterviewQuestionsPage() {
  return (
    <main
      style={{
        maxWidth: "860px",
        margin: "0 auto",
        padding: "2rem 1.5rem 4rem",
        color: "var(--foreground)",
        background: "var(--background)",
      }}
    >
      <h1
        style={{
          fontSize: "2.25rem",
          fontWeight: 700,
          marginBottom: "1rem",
          lineHeight: 1.2,
        }}
      >
        Digital Marketing Interview Questions 2025
      </h1>

      <p
        style={{
          fontSize: "1.1rem",
          color: "var(--muted-foreground)",
          marginBottom: "2.5rem",
          lineHeight: 1.7,
        }}
      >
        Marketing roles are more competitive than ever. Employers in 2025 expect
        candidates who can speak fluently across channels - from SEO and paid
        ads to analytics and content. This guide covers the questions that
        actually come up, with concise answers that show strategic thinking, not
        just definitions.
      </p>

      <nav
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "1.25rem 1.5rem",
          marginBottom: "3rem",
        }}
      >
        <p
          style={{
            fontWeight: 600,
            marginBottom: "0.75rem",
            fontSize: "0.9rem",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
            color: "var(--muted-foreground)",
          }}
        >
          Jump to section
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                style={{
                  display: "inline-block",
                  padding: "0.35rem 0.85rem",
                  background: "var(--accent)",
                  color: "var(--accent-foreground)",
                  borderRadius: "20px",
                  fontSize: "0.875rem",
                  textDecoration: "none",
                  fontWeight: 500,
                }}
              >
                {section.title.replace(" Interview Questions", "")}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          style={{ marginBottom: "3.5rem" }}
        >
          <h2
            style={{
              fontSize: "1.6rem",
              fontWeight: 700,
              marginBottom: "1.25rem",
              paddingBottom: "0.5rem",
              borderBottom: "2px solid var(--border)",
            }}
          >
            {section.title}
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {section.qas.map((qa, i) => (
              <details
                key={i}
                style={{
                  border: "1px solid var(--border)",
                  borderRadius: "8px",
                  background: "var(--card)",
                  overflow: "hidden",
                }}
              >
                <summary
                  style={{
                    padding: "1rem 1.25rem",
                    fontWeight: 600,
                    fontSize: "1rem",
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <span>{qa.q}</span>
                  <span
                    style={{
                      fontSize: "1.25rem",
                      color: "var(--muted-foreground)",
                      flexShrink: 0,
                      marginLeft: "1rem",
                    }}
                  >
                    +
                  </span>
                </summary>
                <div
                  style={{
                    padding: "0 1.25rem 1.25rem",
                    color: "var(--muted-foreground)",
                    lineHeight: 1.75,
                    borderTop: "1px solid var(--border)",
                    paddingTop: "1rem",
                  }}
                >
                  {qa.a}
                </div>
              </details>
            ))}
          </div>

          <div
            style={{
              marginTop: "1.5rem",
              padding: "1rem 1.25rem",
              background: "var(--accent)",
              borderRadius: "8px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: "0.75rem",
            }}
          >
            <span style={{ color: "var(--accent-foreground)", fontWeight: 500 }}>
              Want to go deeper on {section.categoryLabel}?
            </span>
            <Link
              href={`/learn/${section.categorySlug}`}
              style={{
                color: "var(--accent-foreground)",
                fontWeight: 600,
                textDecoration: "underline",
              }}
            >
              Study {section.categoryLabel} lessons →
            </Link>
          </div>
        </section>
      ))}

      <section
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "2.5rem",
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <h2
          style={{
            fontSize: "1.75rem",
            fontWeight: 700,
            marginBottom: "0.75rem",
          }}
        >
          Prepare with Full Lessons at Marketing Academy
        </h2>
        <p
          style={{
            color: "var(--muted-foreground)",
            marginBottom: "1.5rem",
            fontSize: "1.05rem",
            lineHeight: 1.7,
          }}
        >
          Interview answers only take you so far. Our structured lessons teach
          you how to actually apply these concepts - with real examples, tools,
          and frameworks used by marketing teams today.
        </p>
        <Link
          href="/learn"
          style={{
            display: "inline-block",
            padding: "0.85rem 2rem",
            background: "var(--foreground)",
            color: "var(--background)",
            borderRadius: "8px",
            fontWeight: 700,
            fontSize: "1rem",
            textDecoration: "none",
          }}
        >
          Start Learning Free
        </Link>
      </section>
    </main>
  );
}
