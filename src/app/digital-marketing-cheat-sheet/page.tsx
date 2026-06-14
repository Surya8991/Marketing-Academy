"use client";

import Link from "next/link";

function PrintButton() {
  return (
    <button
      onClick={() => window.print()}
      style={{
        padding: "0.6rem 1.4rem",
        background: "var(--foreground)",
        color: "var(--background)",
        border: "none",
        borderRadius: "6px",
        fontWeight: 600,
        fontSize: "0.9rem",
        cursor: "pointer",
      }}
    >
      Print / Save as PDF
    </button>
  );
}

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
            Key metrics, formulas, funnel stages, and benchmarks - all in one
            quick-reference page. Bookmark it or print it.
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
        }}
      >
        <strong>Jump to:</strong>{" "}
        <a href="#metrics" style={{ color: "var(--foreground)", marginRight: "1rem" }}>Key Metrics</a>
        <a href="#funnel" style={{ color: "var(--foreground)", marginRight: "1rem" }}>Funnel Stages</a>
        <a href="#seo" style={{ color: "var(--foreground)", marginRight: "1rem" }}>SEO Reference</a>
        <a href="#paid-ads" style={{ color: "var(--foreground)", marginRight: "1rem" }}>Paid Ads Glossary</a>
        <a href="#email" style={{ color: "var(--foreground)" }}>Email Benchmarks</a>
      </nav>

      {/* Section 1 - Key Marketing Metrics */}
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
                metric: "ROAS",
                name: "Return on Ad Spend",
                formula: "Revenue from Ads / Ad Spend",
                meaning: "How much revenue each dollar of ad spend generates. A 4x ROAS means $4 earned per $1 spent.",
              },
              {
                metric: "CTR",
                name: "Click-Through Rate",
                formula: "Clicks / Impressions x 100",
                meaning: "Percentage of people who clicked after seeing your ad or content. Measures creative relevance.",
              },
              {
                metric: "CVR",
                name: "Conversion Rate",
                formula: "Conversions / Total Visitors x 100",
                meaning: "Percentage of visitors who take the desired action. Core measure of landing page or funnel effectiveness.",
              },
              {
                metric: "LTV:CAC",
                name: "LTV to CAC Ratio",
                formula: "LTV / CAC",
                meaning: "Measures business health. Under 1x = losing money per customer. 3x+ = healthy growth engine.",
              },
              {
                metric: "CPL",
                name: "Cost Per Lead",
                formula: "Ad Spend / Number of Leads",
                meaning: "How much each lead costs. Must be weighed against lead-to-customer conversion rate.",
              },
              {
                metric: "MoM Growth",
                name: "Month-over-Month Growth",
                formula: "(This Month - Last Month) / Last Month x 100",
                meaning: "Percentage change from one month to the next. A quick health check for any metric.",
              },
            ].map((row, i) => (
              <tr key={i} style={i % 2 === 0 ? trEvenStyle : {}}>
                <td style={{ ...tdStyle, fontWeight: 700, whiteSpace: "nowrap" }}>{row.metric}</td>
                <td style={tdStyle}>{row.name}</td>
                <td style={{ ...tdStyle, fontFamily: "monospace", fontSize: "0.88rem", color: "var(--muted-foreground)" }}>
                  {row.formula}
                </td>
                <td style={tdStyle}>{row.meaning}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      {/* Section 2 - Marketing Funnel Stages */}
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
                tactics: "Blog posts, social content, YouTube videos, podcasts, display ads, PR",
                metrics: "Impressions, reach, traffic, brand search volume",
              },
              {
                stage: "MOFU",
                name: "Middle of Funnel",
                mindset: "Evaluating options, comparing solutions",
                tactics: "Email nurture sequences, comparison content, webinars, case studies, retargeting ads, demo videos",
                metrics: "Leads, email open rate, content downloads, time on site",
              },
              {
                stage: "BOFU",
                name: "Bottom of Funnel",
                mindset: "Ready to decide, needs final reassurance",
                tactics: "Pricing pages, testimonials, free trials, demos, discount offers, sales outreach",
                metrics: "Conversion rate, trial-to-paid rate, close rate, CAC",
              },
              {
                stage: "Post-Purchase",
                name: "Retention and Advocacy",
                mindset: "Customer seeks ongoing value; may refer others",
                tactics: "Onboarding emails, loyalty programs, referral programs, community, customer success",
                metrics: "Churn rate, NPS, LTV, referral rate",
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

      {/* Section 3 - SEO Quick Reference */}
      <section id="seo">
        <h2 style={sectionHeadingStyle}>3. SEO Quick Reference</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Category</th>
              <th style={thStyle}>What It Covers</th>
              <th style={thStyle}>Key Actions</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                category: "On-Page SEO",
                covers: "Elements inside your pages you directly control",
                actions: "Title tags (60 chars), meta descriptions (155 chars), H1-H3 hierarchy, keyword placement in first 100 words, internal linking, image alt text, URL structure",
              },
              {
                category: "Off-Page SEO",
                covers: "External signals that build authority",
                actions: "Earn backlinks from relevant sites, digital PR, brand mentions, disavow toxic links via Google Search Console",
              },
              {
                category: "Technical SEO",
                covers: "Crawlability and site infrastructure",
                actions: "Submit sitemap.xml, check robots.txt, fix crawl errors, use HTTPS, improve Core Web Vitals (LCP under 2.5s, CLS under 0.1), mobile-first design",
              },
              {
                category: "Core Web Vitals",
                covers: "Google's UX-based ranking signals (since 2021)",
                actions: "LCP under 2.5s (largest element loads fast), INP under 200ms (interactions respond quickly), CLS under 0.1 (no layout shifts)",
              },
              {
                category: "Keyword Research",
                covers: "Finding what your audience searches for",
                actions: "Map keywords to funnel stage, target informational queries at TOFU, commercial/transactional at BOFU, group into topic clusters",
              },
              {
                category: "E-E-A-T",
                covers: "Google's quality rater framework",
                actions: "Experience, Expertise, Authoritativeness, Trust. Add author bios, cite sources, earn mentions from credible sites, keep content accurate and updated",
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

      {/* Section 4 - Paid Ads Glossary */}
      <section id="paid-ads">
        <h2 style={sectionHeadingStyle}>4. Paid Ads Glossary</h2>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Term</th>
              <th style={thStyle}>Definition</th>
              <th style={thStyle}>How to Use It</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                term: "CPC",
                def: "Cost Per Click - how much you pay each time someone clicks your ad",
                use: "Lower CPC is not always better if click quality is low. Compare CPC alongside CVR.",
              },
              {
                term: "CPM",
                def: "Cost Per Thousand Impressions - ad pricing model based on views not clicks",
                use: "Use for awareness campaigns. Good CPM is under $10 for broad audiences, under $25 for tight targeting.",
              },
              {
                term: "ROAS",
                def: "Revenue generated per dollar of ad spend (e.g., 4x = $4 revenue per $1 spent)",
                use: "Minimum ROAS threshold depends on margins. A 2x ROAS is bad at 20% margins; fine at 60% margins.",
              },
              {
                term: "Quality Score",
                def: "Google's 1-10 score of keyword, ad, and landing page relevance",
                use: "Higher score = lower CPC and better position. Improve by tightening keyword-ad-landing page alignment.",
              },
              {
                term: "Lookalike Audience",
                def: "Meta/TikTok finds new users who statistically resemble your existing customers",
                use: "Best built from high-value signals: purchasers, not just page visitors. Start with 1-3% similarity.",
              },
              {
                term: "Retargeting",
                def: "Showing ads to people who previously visited your site or engaged with your content",
                use: "Highest efficiency audience. Segment by action: product viewers, cart abandoners, past purchasers (upsell).",
              },
              {
                term: "Ad Frequency",
                def: "Average times a unique user sees your ad in a given time window",
                use: "Frequency above 6-7 per week often signals ad fatigue. Refresh creative or expand audiences.",
              },
              {
                term: "Conversion Window",
                def: "How long after an ad click or view a conversion is credited to that ad",
                use: "Default is 7-day click, 1-day view on Meta. Longer windows inflate reported conversions - set consistently.",
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

      {/* Section 5 - Email Marketing Benchmarks */}
      <section id="email">
        <h2 style={sectionHeadingStyle}>5. Email Marketing Benchmarks by Industry (2024-2025)</h2>
        <p style={{ color: "var(--muted-foreground)", marginBottom: "1rem", fontSize: "0.95rem" }}>
          Source: Mailchimp, Klaviyo, and Campaign Monitor industry benchmarks (2024). Use these as targets, not guarantees - your list quality matters more than your industry.
        </p>
        <table style={tableStyle}>
          <thead>
            <tr>
              <th style={thStyle}>Industry</th>
              <th style={thStyle}>Avg Open Rate</th>
              <th style={thStyle}>Avg Click Rate</th>
              <th style={thStyle}>Avg Unsubscribe Rate</th>
              <th style={thStyle}>Notes</th>
            </tr>
          </thead>
          <tbody>
            {[
              { industry: "E-commerce", open: "17-22%", click: "2-3%", unsub: "0.2%", note: "Promotional emails perform lower; abandon cart emails average 40%+ open rates" },
              { industry: "SaaS / Tech", open: "21-28%", click: "3-5%", unsub: "0.15%", note: "Transactional and onboarding emails outperform newsletters" },
              { industry: "Education", open: "25-30%", click: "4-6%", unsub: "0.1%", note: "High engagement when content is genuinely useful to learners" },
              { industry: "Healthcare", open: "20-25%", click: "2-4%", unsub: "0.2%", note: "Subject line personalization matters more here" },
              { industry: "Media / Publishing", open: "22-28%", click: "4-7%", unsub: "0.1%", note: "Curated newsletters with a strong editorial voice outperform average significantly" },
              { industry: "Non-profit", open: "26-32%", click: "3-5%", unsub: "0.1%", note: "Mission-driven messaging boosts engagement" },
              { industry: "All Industries (avg)", open: "21.5%", click: "2.6%", unsub: "0.26%", note: "Baseline benchmark. If you are below this, prioritize list hygiene and subject line testing." },
            ].map((row, i) => (
              <tr key={i} style={i % 2 === 0 ? trEvenStyle : {}}>
                <td style={{ ...tdStyle, fontWeight: i === 6 ? 700 : 400 }}>{row.industry}</td>
                <td style={tdStyle}>{row.open}</td>
                <td style={tdStyle}>{row.click}</td>
                <td style={tdStyle}>{row.unsub}</td>
                <td style={{ ...tdStyle, color: "var(--muted-foreground)", fontSize: "0.88rem" }}>{row.note}</td>
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
          <strong style={{ color: "var(--foreground)" }}>Key levers for email performance:</strong> Subject line (A/B test for open rate), send time (test Tuesday-Thursday, 9-11am local), segmentation (targeted sends outperform blasts), and plain-text vs HTML (plain-text often wins for personal-sounding emails).
        </div>
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
          Marketing Academy has focused cheat sheets for SEO, paid ads, analytics, and more - each paired with full lessons so you can go from reference to real skill.
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
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
