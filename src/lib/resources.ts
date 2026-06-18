export type Resource = {
  name: string;
  url: string;
  category: string;
  tier: "daily" | "weekly" | "deep" | "tool";
  cost: "free" | "paid" | "freemium";
  note?: string;
};

export const RESOURCES: Resource[] = [
  // Newsletters - daily
  { name: "Marketing Brew", url: "https://www.marketingbrew.com/", category: "Newsletters", tier: "daily", cost: "free" },
  { name: "Stacked Marketer", url: "https://www.stackedmarketer.com/", category: "Newsletters", tier: "daily", cost: "free" },
  { name: "Demand Curve Growth", url: "https://www.demandcurve.com/newsletter", category: "Newsletters", tier: "weekly", cost: "free" },
  { name: "Lenny's Newsletter", url: "https://www.lennysnewsletter.com/", category: "Newsletters", tier: "weekly", cost: "freemium" },
  { name: "Why We Buy by Katelyn Bourgoin", url: "https://katelynbourgoin.com/", category: "Newsletters", tier: "weekly", cost: "free" },
  { name: "MKT1 by Emily Kramer", url: "https://www.mkt1.co/", category: "Newsletters", tier: "weekly", cost: "free" },
  { name: "GrowthUnhinged by Kyle Poyar", url: "https://www.growthunhinged.com/", category: "Newsletters", tier: "weekly", cost: "free" },
  { name: "Elena Verna Substack", url: "https://elenaverna.substack.com/", category: "Newsletters", tier: "weekly", cost: "free" },
  // SEO + GEO
  { name: "SEOFOMO (Aleyda Solis)", url: "https://www.seofomo.co/", category: "SEO + GEO", tier: "weekly", cost: "free" },
  { name: "Search Engine Roundtable", url: "https://www.seroundtable.com/", category: "SEO + GEO", tier: "daily", cost: "free" },
  { name: "Search Engine Land", url: "https://searchengineland.com/", category: "SEO + GEO", tier: "daily", cost: "free" },
  { name: "Detailed.com (Glen Allsopp)", url: "https://detailed.com/", category: "SEO + GEO", tier: "weekly", cost: "freemium" },
  { name: "Ahrefs Blog", url: "https://ahrefs.com/blog/", category: "SEO + GEO", tier: "weekly", cost: "free" },
  { name: "Backlinko (Brian Dean)", url: "https://backlinko.com/blog", category: "SEO + GEO", tier: "weekly", cost: "free" },
  { name: "Aleyda's AI Search resources", url: "https://www.aleydasolis.com/en/list-of-the-best-resources-on-ai-search-and-llm-optimization/", category: "SEO + GEO", tier: "deep", cost: "free", note: "Bookmark this. Update yourself monthly." },
  { name: "Profound (GEO measurement)", url: "https://www.tryprofound.com/", category: "SEO + GEO", tier: "tool", cost: "freemium" },
  // Paid
  { name: "PPC Hero", url: "https://www.ppchero.com/", category: "Paid Ads", tier: "weekly", cost: "free" },
  { name: "WordStream Blog", url: "https://www.wordstream.com/blog", category: "Paid Ads", tier: "weekly", cost: "free" },
  { name: "Common Thread Collective Blog", url: "https://commonthreadco.com/blogs/coachs-corner", category: "Paid Ads", tier: "weekly", cost: "free" },
  { name: "Motion Blog (Creative Ops)", url: "https://www.motionapp.com/blog", category: "Paid Ads", tier: "weekly", cost: "free" },
  { name: "Aaron Young 'Define Digital'", url: "https://www.youtube.com/@DefineDigitalAcademy", category: "Paid Ads", tier: "weekly", cost: "free" },
  { name: "Ben Heath", url: "https://www.youtube.com/@BenHeath", category: "Paid Ads", tier: "weekly", cost: "free" },
  // Analytics + SQL
  { name: "Simo Ahava Blog", url: "https://www.simoahava.com/", category: "Analytics", tier: "deep", cost: "free" },
  { name: "MeasureSchool", url: "https://www.youtube.com/@measureschool", category: "Analytics", tier: "weekly", cost: "free" },
  { name: "Mode SQL Tutorial", url: "https://mode.com/sql-tutorial", category: "Analytics", tier: "deep", cost: "free" },
  { name: "Luke Barousse SQL", url: "https://www.youtube.com/@LukeBarousse", category: "Analytics", tier: "deep", cost: "free" },
  { name: "StrataScratch", url: "https://www.stratascratch.com/", category: "Analytics", tier: "tool", cost: "freemium" },
  // CRO
  { name: "Speero Blog", url: "https://speero.com/blog", category: "CRO", tier: "weekly", cost: "free" },
  { name: "CXL Blog", url: "https://cxl.com/blog/", category: "CRO", tier: "weekly", cost: "free" },
  { name: "GrowthBook docs", url: "https://docs.growthbook.io/", category: "CRO", tier: "deep", cost: "free" },
  // Email + Lifecycle
  { name: "Val Geisler 'Fixing Hellos'", url: "https://valgeisler.com/", category: "Email + Lifecycle", tier: "deep", cost: "free" },
  { name: "Really Good Emails", url: "https://reallygoodemails.com/", category: "Email + Lifecycle", tier: "tool", cost: "free" },
  // AI
  { name: "The Rundown AI", url: "https://www.therundown.ai/", category: "AI Workflows", tier: "daily", cost: "free" },
  { name: "Mindstream", url: "https://www.mindstream.news/", category: "AI Workflows", tier: "daily", cost: "free" },
  { name: "Ben's Bites", url: "https://bensbites.com/", category: "AI Workflows", tier: "daily", cost: "free" },
  { name: "n8n Documentation", url: "https://docs.n8n.io/", category: "AI Workflows", tier: "deep", cost: "free" },
  // Strategy
  { name: "Reforge Essays", url: "https://www.reforge.com/blog", category: "Strategy", tier: "deep", cost: "free" },
  { name: "First Round Review", url: "https://review.firstround.com/", category: "Strategy", tier: "deep", cost: "free" },
  { name: "a16z Growth Archive", url: "https://a16z.com/category/marketing/", category: "Strategy", tier: "deep", cost: "free" },
  // Certifications
  { name: "Google Skillshop (Ads + GA)", url: "https://skillshop.exceedlms.com/student/catalog", category: "Certifications", tier: "tool", cost: "free" },
  { name: "HubSpot Academy", url: "https://academy.hubspot.com/", category: "Certifications", tier: "tool", cost: "free" },
  { name: "Meta Blueprint", url: "https://www.facebookblueprint.com/student/catalog", category: "Certifications", tier: "tool", cost: "freemium" },
  { name: "Semrush Academy", url: "https://www.semrush.com/academy/", category: "Certifications", tier: "tool", cost: "free" },
  { name: "Ahrefs Academy", url: "https://academy.ahrefs.com/", category: "Certifications", tier: "tool", cost: "free" },
  // Job Boards
  { name: "Wellfound (AngelList)", url: "https://wellfound.com/jobs", category: "Job Boards", tier: "tool", cost: "free" },
  { name: "Cutshort", url: "https://cutshort.io/", category: "Job Boards", tier: "tool", cost: "free" },
  { name: "Instahyre", url: "https://instahyre.com/", category: "Job Boards", tier: "tool", cost: "free" },
  { name: "LinkedIn Jobs", url: "https://www.linkedin.com/jobs/", category: "Job Boards", tier: "tool", cost: "free" },
  { name: "Y Combinator Work at a Startup", url: "https://www.workatastartup.com/", category: "Job Boards", tier: "tool", cost: "free" },
  { name: "Demand Curve Job Board", url: "https://www.demandcurve.com/jobs", category: "Job Boards", tier: "tool", cost: "free" },
  { name: "Lenny's Job Board", url: "https://jobs.lennysnewsletter.com/", category: "Job Boards", tier: "tool", cost: "free" },
  { name: "Pallet (Demand Curve, MKT1)", url: "https://pallet.com/", category: "Job Boards", tier: "tool", cost: "free" },
  { name: "Remotive", url: "https://remotive.com/", category: "Job Boards", tier: "tool", cost: "free" },
  { name: "We Work Remotely", url: "https://weworkremotely.com/", category: "Job Boards", tier: "tool", cost: "free" },
  { name: "OnDeck Jobs", url: "https://www.beondeck.com/jobs", category: "Job Boards", tier: "tool", cost: "free" },
  { name: "MarketerHire", url: "https://marketerhire.com/", category: "Job Boards", tier: "tool", cost: "freemium" },
];

export const BOOKS = [
  { name: "Hacking Growth", author: "Sean Ellis + Morgan Brown", month: 1, why: "Foundation: AARRR + growth process + experiment cadence" },
  { name: "Obviously Awesome", author: "April Dunford", month: 2, why: "Positioning is the missing skill 90% of marketers lack" },
  { name: "Trustworthy Online Controlled Experiments", author: "Ron Kohavi et al", month: 3, why: "A/B testing done right. Read ch 1-5 only" },
  { name: "$100M Offers", author: "Alex Hormozi", month: 3, why: "Offer construction. Skim, don't drown in it" },
  { name: "The Mom Test", author: "Rob Fitzpatrick", month: 4, why: "Customer interviews without lies. Useful for landing pages" },
];

export const COMMUNITIES = [
  { name: "GrowthX India Slack", url: "https://growthx.club/", note: "Strong India network. Pay-to-join community course." },
  { name: "Demand Curve Slack", url: "https://www.demandcurve.com/community", note: "Free entry, US-focused." },
  { name: "Online Geniuses Slack", url: "https://onlinegeniuses.com/", note: "Largest marketing Slack. Noisy." },
  { name: "Superpath (Content)", url: "https://www.superpath.co/", note: "Content marketers' community." },
  { name: "r/digital_marketing", url: "https://www.reddit.com/r/digital_marketing/" },
  { name: "r/SEO", url: "https://www.reddit.com/r/SEO/" },
  { name: "r/PPC", url: "https://www.reddit.com/r/PPC/" },
];
