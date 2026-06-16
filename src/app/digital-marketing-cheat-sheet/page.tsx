import Link from "next/link";
import PrintButton from "./PrintButton";

const tableStyle: React.CSSProperties = {
  width: "100%",
  borderCollapse: "collapse",
  marginBottom: "2rem",
  fontSize: "0.95rem",
};

const thStyle: React.CSSProperties = {
  background: "var(--accent)",
  color: "var(--accent-foreground)",
  padding: "0.65rem 1rem",
  textAlign: "left",
  fontWeight: 600,
  borderBottom: "2px solid var(--border)",
};

const tdStyle: React.CSSProperties = {
  padding: "0.65rem 1rem",
  borderBottom: "1px solid var(--border)",
  verticalAlign: "top",
  lineHeight: 1.6,
  color: "var(--foreground)",
};

const trEvenStyle: React.CSSProperties = {
  background: "var(--card)",
};

const sectionHeadingStyle: React.CSSProperties = {
  fontSize: "1.4rem",
  fontWeight: 700,
  margin: "2.5rem 0 1rem",
  paddingBottom: "0.4rem",
  borderBottom: "2px solid var(--border)",
};

export const metadata = {
  title: "Digital Marketing Cheat Sheet 2025: Key Metrics, Formulas & Benchmarks",
  description:
    "Quick-reference cheat sheet: marketing metrics, funnel stages, SEO, paid ads, email benchmarks, AI/GEO tactics, and social media stats for 2025.",
};

export default function CheatSheetPage() {
  return (
    <main
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem 1.5rem 4rem",
        color: "var(--foreground)",
        background: "var(--background)",
      }}
    >
      {/* Breadcrumb */}
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          gap: "0.4rem",
          fontSize: "0.875rem",
          color: "var(--muted-foreground)",
          marginBottom: "1.5rem",
          flexWrap: "wrap",
        }}
      >
        <Link href="/" style={{ color: "var(--muted-foreground)", textDecoration: "none" }}>
          Home
        </Link>
        <span style={{ opacity: 0.4 }}>›</span>
        <Link href="/cheat-sheets" style={{ color: "var(--muted-foreground)", textDecoration: "none" }}>
          Cheat Sheets
        </Link>
        <span style={{ opacity: 0.4 }}>›</span>
        <span style={{ color: "var(--foreground)" }}>Digital Marketing Cheat Sheet</span>
      </nav>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "1.25rem",
        }}
      >
        <div>
          <h1
            style={{
              fontSize: "2.25rem",
              fontWeight: 700,
              lineHeight: 1.2,
              marginBottom: "0.5rem",
            }}
          >
            Digital Marketing Cheat Sheet 2025
          </h1>
          <p
            style={{
              color: "var(--muted-foreground)",
              fontSize: "1.05rem",
              lineHeight: 1.6,
            }}
          >
            Metrics, formulas, benchmarks, AI/GEO tactics, and social stats,
            every number you need in one page. Updated for 2025.
          </p>
        </div>
        <PrintButton />
      </div>

      <nav
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "8px",
          padding: "1rem 1.25rem",
          marginBottom: "2rem",
          fontSize: "0.9rem",
          color: "var(--muted-foreground)",
          lineHeight: 1.8,
        }}
      >
        <strong style={{ color: "var(--foreground)" }}>Jump to:</strong>{" "}
        <a href="#metrics" style={{ color: "var(--foreground)", marginRight: "1rem" }}>Key Metrics</a>
        <a href="#funnel" style={{ color: "var(--foreground)", marginRight: "1rem" }}>Funnel Stages</a>
        <a href="#seo" style={{ color: "var(--foreground)", marginRight: "1rem" }}>SEO Reference</a>
        <a href="#paid-ads" style={{ color: "var(--foreground)", marginRight: "1rem" }}>Paid Ads</a>
        <a href="#email" style={{ color: "var(--foreground)", marginRight: "1rem" }}>Email Benchmarks</a>
        <a href="#ai" style={{ color: "var(--foreground)", marginRight: "1rem" }}>AI Marketing</a>
        <a href="#social" style={{ color: "var(--foreground)" }}>Social Media</a>
      </nav>

      {/* Section 1: Key Marketing Metrics */}
      <section id="metrics">
        <h2 style={sectionHeadingStyle}>1. Key Marketing Metrics</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Metric</th>
              <th style={thStyle}>Full Name</th>
              <th style={thStyle}>Formula</th>
              <th style={thStyle}>What It Tells You</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                metric: "CAC",
                name: "Customer Acquisition Cost",
                formula: "(Total Sales + Marketing Spend) / New Customers Acquired",
                meaning: "How much it costs to acquire one new customer. Lower is better, but only if quality is maintained.",
              },
              {
                metric: "LTV",
                name: "Customer Lifetime Value",
                formula: "Avg Purchase Value x Purchase Frequency x Avg Customer Lifespan",
                meaning: "How much revenue a customer generates over their full relationship with your business.",
              },
              {
                metric: "LTV:CAC",
                name: "LTV to CAC Ratio",
                formula: "LTV / CAC",
                meaning: "Business health benchmark. Under 1x = losing money per customer. 3x+ = healthy. 5x+ = efficient growth engine.",
              },
              {
                metric: "ROAS",
                name: "Return on Ad Spend",
                formula: "Revenue from Ads / Ad Spend",
                meaning: "Revenue per dollar of ad spend. A 4x ROAS = $4 earned per $1 spent. Minimum threshold depends on margin.",
              },
              {
                metric: "Blended ROAS",
                name: "Blended / True ROAS",
                formula: "Total Revenue / Total Ad Spend (all channels)",
                meaning:
                  "The real ROAS across your entire ad portfolio. Use this for business decisions. Single-channel ROAS is easily gamed by last-click attribution.",
              },
              {
                metric: "CTR",
                name: "Click-Through Rate",
                formula: "Clicks / Impressions x 100",
                meaning: "Percentage who clicked after seeing your content or ad. Measures creative and copy relevance.",
              },
              {
                metric: "CVR",
                name: "Conversion Rate",
                formula: "Conversions / Total Visitors x 100",
                meaning: "Percentage of visitors who take the desired action. Core measure of landing page effectiveness.",
              },
              {
                metric: "CPL",
                name: "Cost Per Lead",
                formula: "Ad Spend / Number of Leads",
                meaning: "Lead cost. Weigh against lead-to-close rate. A cheap lead that never converts is worthless.",
              },
              {
                metric: "NPS",
                name: "Net Promoter Score",
                formula: "% Promoters (9-10) minus % Detractors (0-6)",
                meaning:
                  "Customer loyalty proxy. Above 50 is excellent. B2B SaaS median is around 36 (Bain 2024). Trend matters more than absolute score.",
              },
              {
                metric: "MoM Growth",
                name: "Month-over-Month Growth",
                formula: "(This Month - Last Month) / Last Month x 100",
                meaning: "Percentage change month to month. Quick health check for any metric.",
              },
            ].map((row, i) => (
              <tr key={i} style={i % 2 === 0 ? trEvenStyle : {}}>
                <td style={{ ...tdStyle, fontWeight: 700, whiteSpace: "nowrap" }}>{row.metric}</td>
                <td style={tdStyle}>{row.name}</td>
                <td
                  style={{
                    ...tdStyle,
                    fontFamily: "monospace",
                    fontSize: "0.88rem",
                    color: "var(--muted-foreground)",
                  }}
                >
                  {row.formula}
                </td>
                <td style={tdStyle}>{row.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Section 2: Marketing Funnel Stages */}
      <section id="funnel">
        <h2 style={sectionHeadingStyle}>2. Marketing Funnel Stages (TOFU / MOFU / BOFU)</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Stage</th>
              <th style={thStyle}>Name</th>
              <th style={thStyle}>Customer Mindset</th>
              <th style={thStyle}>Tactics</th>
              <th style={thStyle}>Key Metrics</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                stage: "TOFU",
                name: "Top of Funnel",
                mindset: "Unaware or just becoming aware of a problem",
                tactics:
                  "Blog posts, social content, YouTube Shorts/Reels, podcasts, display ads, PR, AI-answer-optimized content (GEO)",
                metrics: "Impressions, reach, organic traffic, branded search volume, share of voice",
              },
              {
                stage: "MOFU",
                name: "Middle of Funnel",
                mindset: "Evaluating options, comparing solutions",
                tactics:
                  "Email nurture sequences, comparison content, webinars, case studies, retargeting ads, demo videos, interactive tools",
                metrics: "Leads, email open rate, content downloads, time on site, MQL volume",
              },
              {
                stage: "BOFU",
                name: "Bottom of Funnel",
                mindset: "Ready to decide, needs final reassurance",
                tactics:
                  "Pricing pages, testimonials, reviews (G2/Trustpilot), free trials, demos, discount offers, personalized outreach",
                metrics: "CVR, trial-to-paid rate, close rate, CAC, SQL volume",
              },
              {
                stage: "Post-Purchase",
                name: "Retention and Advocacy",
                mindset: "Customer seeks ongoing value; may refer others",
                tactics:
                  "Onboarding emails, loyalty programs, referral programs, community, customer success, expansion upsells",
                metrics: "Churn rate, NPS, LTV, referral rate, expansion MRR",
              },
            ].map((row, i) => (
              <tr key={i} style={i % 2 === 0 ? trEvenStyle : {}}>
                <td style={{ ...tdStyle, fontWeight: 700 }}>{row.stage}</td>
                <td style={tdStyle}>{row.name}</td>
                <td style={tdStyle}>{row.mindset}</td>
                <td style={tdStyle}>{row.tactics}</td>
                <td style={tdStyle}>{row.metrics}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Section 3: SEO Quick Reference */}
      <section id="seo">
        <h2 style={sectionHeadingStyle}>3. SEO Quick Reference (2025)</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>What It Covers</th>
              <th style={thStyle}>Key Actions (2025)</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                category: "On-Page SEO",
                covers: "Elements inside your pages you directly control",
                actions:
                  "Title tags (60 chars), meta descriptions (155 chars), H1-H3 hierarchy, keyword in first 100 words, internal linking, image alt text, clean URL structure, schema markup",
              },
              {
                category: "Off-Page SEO",
                covers: "External signals that build authority",
                actions:
                  "Earn backlinks from topically relevant sites, digital PR, unlinked brand mentions, disavow toxic links via Google Search Console",
              },
              {
                category: "Technical SEO",
                covers: "Crawlability and infrastructure",
                actions:
                  "Submit sitemap.xml, audit robots.txt, fix crawl errors, enforce HTTPS, structured data (JSON-LD), page speed, mobile-first design, Core Web Vitals",
              },
              {
                category: "Core Web Vitals (2025)",
                covers: "Google's UX ranking signals: INP replaced FID in March 2024",
                actions:
                  "LCP under 2.5s (fastest element load), INP under 200ms (interaction response, replaces FID), CLS under 0.1 (no layout shifts). INP is the new metric to watch.",
              },
              {
                category: "E-E-A-T",
                covers: "Google's quality framework: Experience, Expertise, Authoritativeness, Trust",
                actions:
                  "Add author bios with credentials, cite primary sources, earn mentions from credible sites, keep content accurate and dated, show first-hand experience",
              },
              {
                category: "GEO: Generative Engine Optimization",
                covers: "Optimizing for AI answers (Google AI Overviews, Perplexity, ChatGPT)",
                actions:
                  "Write direct, factual answers in the first 2 sentences. Use structured content (tables, lists, headers). Cite stats with sources. Aim to be the source AI tools quote.",
              },
              {
                category: "Zero-Click Search",
                covers: "~65% of Google searches end without a click (SparkToro 2024)",
                actions:
                  "Optimize for featured snippets, knowledge panels, and AI Overviews to capture brand visibility even when clicks go down. Track impressions separately from clicks.",
              },
            ].map((row, i) => (
              <tr key={i} style={i % 2 === 0 ? trEvenStyle : {}}>
                <td style={{ ...tdStyle, fontWeight: 700 }}>{row.category}</td>
                <td style={tdStyle}>{row.covers}</td>
                <td style={tdStyle}>{row.actions}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Section 4: Paid Ads Glossary */}
      <section id="paid-ads">
        <h2 style={sectionHeadingStyle}>4. Paid Ads Reference (2025)</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Term / Concept</th>
              <th style={thStyle}>Definition</th>
              <th style={thStyle}>2025 Context</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                term: "CPC",
                def: "Cost Per Click: how much you pay each time someone clicks your ad",
                use: "Avg Google Search CPC 2025: $2-$4 (general), $10-$50 (legal/finance). Compare CPC against CVR, not in isolation.",
              },
              {
                term: "CPM",
                def: "Cost Per Thousand Impressions: pricing based on views not clicks",
                use: "Meta CPM 2025: $8-$14 avg. TikTok: $6-$10. Good CPM = brand awareness at scale; optimize CTR to control effective CPC.",
              },
              {
                term: "ROAS / MER",
                def: "ROAS = revenue per ad dollar. MER (Marketing Efficiency Ratio) = total revenue / total marketing spend",
                use: "MER is now preferred over channel ROAS. Single-channel ROAS is distorted by attribution. Track blended MER weekly.",
              },
              {
                term: "Performance Max",
                def: "Google's AI-driven campaign type that runs across all Google channels (Search, Display, YouTube, Gmail, Maps)",
                use: "2025: Default for most Google campaigns. Feed it high-quality creative assets and audience signals. Check Search Terms report for wasted spend.",
              },
              {
                term: "Meta Advantage+",
                def: "Meta's AI campaign automation: automated placements, audiences, and creative testing",
                use: "Advantage+ Shopping outperforms manual campaigns in ~70% of tests (Meta 2024). Requires strong creative library. AI picks the winner.",
              },
              {
                term: "Incrementality Testing",
                def: "Measuring the true causal lift your ads drive vs. what would have happened without them",
                use: "Run holdout tests (geo-based or user-split) to validate if your spend actually causes conversions. Attribution models often double-count.",
              },
              {
                term: "Signal Loss / Cookieless",
                def: "Third-party cookies largely gone in Safari/Firefox; Chrome moving to Privacy Sandbox",
                use: "Invest in first-party data (email lists, CRM), server-side tagging (GTM server), and Meta's Conversions API to restore signal loss.",
              },
              {
                term: "Ad Frequency",
                def: "Average times a unique user sees your ad in a given time window",
                use: "Frequency above 6-7x per week often signals creative fatigue. Refresh creatives regularly. On TikTok, fatigue can hit in 3-5 days.",
              },
              {
                term: "Lookalike Audience",
                def: "Platform finds new users statistically similar to your seed audience",
                use: "2025: Effectiveness declining as privacy limits data. Build from high-value seeds (purchasers, not visitors). Test broad targeting vs. lookalikes.",
              },
            ].map((row, i) => (
              <tr key={i} style={i % 2 === 0 ? trEvenStyle : {}}>
                <td style={{ ...tdStyle, fontWeight: 700, whiteSpace: "nowrap" }}>{row.term}</td>
                <td style={tdStyle}>{row.def}</td>
                <td style={tdStyle}>{row.use}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Section 5: Email Marketing Benchmarks */}
      <section id="email">
        <h2 style={sectionHeadingStyle}>5. Email Marketing Benchmarks by Industry (2025)</h2>
        <p
          style={{
            color: "var(--muted-foreground)",
            marginBottom: "1rem",
            fontSize: "0.95rem",
          }}
        >
          Source: Mailchimp, Klaviyo, Litmus, and Campaign Monitor benchmarks (2024-2025). Note: Apple Mail Privacy Protection (MPP) inflates open rates by ~10-15% for lists with heavy Apple Mail usage. Click rate remains the more reliable engagement signal.
        </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Industry</th>
              <th style={thStyle}>Avg Open Rate</th>
              <th style={thStyle}>Avg Click Rate</th>
              <th style={thStyle}>Avg Unsub Rate</th>
              <th style={thStyle}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                industry: "E-commerce",
                open: "18-23%",
                click: "2-3%",
                unsub: "0.2%",
                note: "Abandon cart emails avg 40%+ open rate. MPP inflates open rates. Watch click rate instead.",
              },
              {
                industry: "SaaS / Tech",
                open: "22-30%",
                click: "3-5%",
                unsub: "0.15%",
                note: "Transactional and onboarding emails outperform newsletters. Behavioral triggers beat time-based sends.",
              },
              {
                industry: "Education",
                open: "26-32%",
                click: "4-6%",
                unsub: "0.1%",
                note: "Highest engagement when content has clear practical value. Course completion nudges work well.",
              },
              {
                industry: "Healthcare",
                open: "21-26%",
                click: "2-4%",
                unsub: "0.2%",
                note: "Subject line personalization matters most. Avoid promotional language. Focus on health outcomes.",
              },
              {
                industry: "Media / Publishing",
                open: "23-30%",
                click: "4-8%",
                unsub: "0.1%",
                note: "Curated newsletters with strong editorial voice outperform average significantly. Consistent send day builds habit.",
              },
              {
                industry: "Non-profit",
                open: "27-34%",
                click: "3-5%",
                unsub: "0.1%",
                note: "Mission-driven storytelling boosts engagement. Avoid over-asking. Space donation requests 6+ weeks apart.",
              },
              {
                industry: "B2B / Professional Services",
                open: "24-28%",
                click: "3-5%",
                unsub: "0.12%",
                note: "Plain-text emails often outperform HTML for personal-feeling B2B outreach.",
              },
              {
                industry: "All Industries (avg)",
                open: "22.4%",
                click: "2.8%",
                unsub: "0.26%",
                note: "Baseline benchmark (Mailchimp 2025). Below this? Prioritize list hygiene + subject line A/B testing first.",
              },
            ].map((row, i) => (
              <tr key={i} style={i % 2 === 0 ? trEvenStyle : {}}>
                <td style={{ ...tdStyle, fontWeight: i === 7 ? 700 : 400 }}>{row.industry}</td>
                <td style={tdStyle}>{row.open}</td>
                <td style={tdStyle}>{row.click}</td>
                <td style={tdStyle}>{row.unsub}</td>
                <td style={{ ...tdStyle, color: "var(--muted-foreground)", fontSize: "0.88rem" }}>
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div
          style={{
            background: "var(--card)",
            border: "1px solid var(--border)",
            borderRadius: "8px",
            padding: "1rem 1.25rem",
            fontSize: "0.9rem",
            color: "var(--muted-foreground)",
            marginTop: "-1rem",
          }}
        >
          <strong style={{ color: "var(--foreground)" }}>2025 email levers:</strong> Subject line
          A/B testing (open rate), send time optimization (Tuesday-Thursday 9-11am local typically
          wins), segmentation by behavior beats blasts by 3-4x, zero-party data (preference centers)
          for post-cookie personalization, Apple MPP means click-to-open rate (CTOR) is now more
          meaningful than raw open rate.
        </div>
      </section>

      {/* Section 6: AI Marketing Quick Reference */}
      <section id="ai">
        <h2 style={sectionHeadingStyle}>6. AI Marketing Quick Reference (2025)</h2>
        <p
          style={{
            color: "var(--muted-foreground)",
            marginBottom: "1rem",
            fontSize: "0.95rem",
          }}
        >
          AI reshaped search, content, and ad buying in 2024-2025. These are the concepts and benchmarks you need to know.
        </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Concept</th>
              <th style={thStyle}>What It Is</th>
              <th style={thStyle}>What to Do in 2025</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                concept: "AI Overviews (Google AIO)",
                what: "Google's AI-generated answer box at the top of search results. Appears in ~20% of all searches as of 2025.",
                action:
                  "Structure content as Q&A. Put the direct answer in the first 2 sentences. Use headers, lists, and tables. Cite stats. Aim to be quoted, not just ranked.",
              },
              {
                concept: "GEO: Generative Engine Optimization",
                what: "Optimizing content to appear in AI-generated answers (Perplexity, ChatGPT, Gemini, Google AIO) not just traditional search results.",
                action:
                  "Write factual, sourced, current content. Be specific with numbers and dates. AI tools prefer quoting exact data. Brand mentions in trusted sources boost GEO authority.",
              },
              {
                concept: "Zero-Click Search",
                what: "~65% of Google searches end without a click (SparkToro 2024). AI Overviews are accelerating this.",
                action:
                  "Track impressions + brand awareness separately from traffic. Optimize for featured snippets to win visibility even without clicks. Diversify traffic sources.",
              },
              {
                concept: "AI-Generated Creative",
                what: "Ad creative (images, copy, video) generated or iterated using AI tools (Meta's AI creative, Google's asset generation, Runway, Midjourney)",
                action:
                  "Use AI to scale creative testing. Run 10-20 variants, let platforms pick the winner. Human art direction + AI iteration outperforms either alone.",
              },
              {
                concept: "First-Party Data",
                what: "Data you own directly: email lists, CRM records, loyalty program data, survey responses. More valuable as third-party cookies disappear.",
                action:
                  "Every campaign should have a first-party data capture goal. Build preference centers and zero-party data flows. Segment by behavior, not just demographics.",
              },
              {
                concept: "AI Content at Scale",
                what: "Using LLMs (ChatGPT, Claude, Gemini) to produce or assist with marketing content at scale.",
                action:
                  "AI drafts, humans edit and add original insight. Google does not penalize AI content. It penalizes low-quality content. E-E-A-T (especially Experience) is your differentiator.",
              },
              {
                concept: "Dark Social / Attribution Gap",
                what: "Direct traffic and untracked sharing (Slack, WhatsApp, email forwards) that appears as 'Direct' in GA4 but actually came from content.",
                action:
                  "Use post-purchase surveys ('how did you hear about us?'), UTM discipline on all shared links, and incrementality tests to understand true channel contribution.",
              },
            ].map((row, i) => (
              <tr key={i} style={i % 2 === 0 ? trEvenStyle : {}}>
                <td style={{ ...tdStyle, fontWeight: 700 }}>{row.concept}</td>
                <td style={tdStyle}>{row.what}</td>
                <td style={tdStyle}>{row.action}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Section 7: Social Media Benchmarks */}
      <section id="social">
        <h2 style={sectionHeadingStyle}>7. Social Media Benchmarks by Platform (2025)</h2>
        <p
          style={{
            color: "var(--muted-foreground)",
            marginBottom: "1rem",
            fontSize: "0.95rem",
          }}
        >
          Source: Hootsuite, Sprout Social, Rival IQ 2024-2025 benchmarks. Engagement rate = (likes + comments + shares) / reach. All figures are median; top-quartile performers are typically 2-4x higher.
        </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Platform</th>
              <th style={thStyle}>Avg Engagement Rate</th>
              <th style={thStyle}>Best Content Format</th>
              <th style={thStyle}>Peak Posting Times</th>
              <th style={thStyle}>2025 Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                platform: "TikTok",
                eng: "5-9%",
                format: "Short-form video (15-60s), trending audio, hooks in first 3s",
                time: "Tue-Fri, 7-9am and 7-9pm local",
                note: "Highest organic reach of any platform. Algorithm favors watch-through rate and replays. Post 3-5x/week minimum.",
              },
              {
                platform: "Instagram",
                eng: "1-3%",
                format: "Reels (2-3x reach vs static posts), carousels (highest saves), Stories (DMs)",
                time: "Mon-Fri, 9am-12pm and 6-9pm local",
                note: "Reels now drive discovery; carousels drive saves and shares. Grid posts declining in reach. Use Stories for community/conversion.",
              },
              {
                platform: "LinkedIn",
                eng: "3-6%",
                format: "Document carousels, native video, personal perspective posts, polls",
                time: "Tue-Thu, 8-10am local",
                note: "Best organic B2B platform in 2025. Employee advocacy posts get 8x more reach than company page posts. Avoid external links in post body.",
              },
              {
                platform: "YouTube",
                eng: "1-4% (CTR)",
                format: "Long-form (8-15 min), YouTube Shorts (under 60s), Tutorials",
                time: "Upload Fri-Sat for weekend views; Tue-Wed for B2B",
                note: "Shorts now drive channel discovery (can convert to long-form subscribers). Chapters, captions, and keyword-rich descriptions improve search ranking.",
              },
              {
                platform: "X / Twitter",
                eng: "0.5-1.5%",
                format: "Threads, real-time commentary, short text with visuals",
                time: "Mon-Fri, 8am-12pm local",
                note: "Declining organic reach since 2023. Best for niche communities, real-time brand commentary, and link amplification (link in replies, not posts).",
              },
              {
                platform: "Facebook",
                eng: "0.5-1.5%",
                format: "Reels (highest reach), Groups content, video",
                time: "Wed-Fri, 1-3pm local",
                note: "Organic reach for pages is very low (1-5%). Best used as a paid retargeting platform and for private community groups. Facebook Reels growing.",
              },
              {
                platform: "Pinterest",
                eng: "0.3-1% (saves)",
                format: "Vertical images (2:3), idea pins, step-by-step guides",
                time: "Sat-Sun, 8-11pm local",
                note: "Long-tail discovery platform. Pins can drive traffic 6-12 months after publishing. E-commerce and DIY niches see the best results.",
              },
            ].map((row, i) => (
              <tr key={i} style={i % 2 === 0 ? trEvenStyle : {}}>
                <td style={{ ...tdStyle, fontWeight: 700 }}>{row.platform}</td>
                <td style={tdStyle}>{row.eng}</td>
                <td style={tdStyle}>{row.format}</td>
                <td style={{ ...tdStyle, fontSize: "0.88rem", color: "var(--muted-foreground)" }}>
                  {row.time}
                </td>
                <td style={{ ...tdStyle, fontSize: "0.88rem", color: "var(--muted-foreground)" }}>
                  {row.note}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* CTA */}
      <section
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
          borderRadius: "12px",
          padding: "2rem",
          marginTop: "3rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
          gap: "1rem",
        }}
      >
        <h2 style={{ fontSize: "1.5rem", fontWeight: 700, margin: 0 }}>
          Want a cheat sheet for a specific topic?
        </h2>
        <p style={{ color: "var(--muted-foreground)", margin: 0, lineHeight: 1.6 }}>
          Marketing Academy has focused cheat sheets for SEO, paid ads, analytics, and more, each
          paired with full lessons so you can go from reference to real skill.
        </p>
        <div
          style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}
        >
          <Link
            href="/cheat-sheets"
            style={{
              padding: "0.75rem 1.75rem",
              background: "var(--foreground)",
              color: "var(--background)",
              borderRadius: "8px",
              fontWeight: 700,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            Browse All Cheat Sheets
          </Link>
          <Link
            href="/learn"
            style={{
              padding: "0.75rem 1.75rem",
              background: "var(--accent)",
              color: "var(--accent-foreground)",
              borderRadius: "8px",
              fontWeight: 600,
              textDecoration: "none",
              fontSize: "0.95rem",
            }}
          >
            Start Learning Free
          </Link>
        </div>
      </section>
    </main>
  );
}
