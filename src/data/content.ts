// ─────────────────────────────────────────────────────────────────────────────
// All site copy lives here, so words can change without touching layout code.
// Sources of truth: Resume V6 Master (Oct 2026), brickbybrickops.com public
// project pages, and Aamir's project docs.
// Rules: nothing invented, no em dashes, outcome first, no filler.
// ─────────────────────────────────────────────────────────────────────────────

export const links = {
  email: 'aamirali1211@gmail.com',
  phone: '(972) 214-4380',
  phoneHref: 'tel:+19722144380',
  linkedin: 'https://www.linkedin.com/in/aamirnali/',
  github: 'https://github.com/aamirprinceali',
  resume: '/Aamir-Ali-Resume.pdf',
  practice: 'https://brickbybrickops.com',
  practiceTools: 'https://brickbybrickops.com/tools',
  practiceProjects: 'https://brickbybrickops.com/projects',
  booking:
    'https://calendar.google.com/calendar/appointments/schedules/AcZssZ2_cAqBz1X8swu4P4EDKS5rFfR-RtTByScJiaGaE6utGysncTxUpZbB_pfW-azdpyjW1sSCg17D',
}

// Page sections, in reading order. Used by the nav and the footer.
export const sections = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'work', label: 'Work' },
  { id: 'agents', label: 'Agents' },
  { id: 'practice', label: 'Brick by Brick' },
  { id: 'contact', label: 'Contact' },
]

// ── Hero ─────────────────────────────────────────────────────────────────────
export const hero = {
  lead: 'Onboarding and operations leader who builds the systems behind the work: reporting, process, and AI-assisted tools.',
  roles: ['Onboarding & Operations Analyst, Covered Care', 'Founder, Brick by Brick'],
  location: 'Plano, TX · Open to remote',
}

// ── About ────────────────────────────────────────────────────────────────────
export const bio = [
  'Five years in client operations across behavioral health, health tech, and healthcare fintech, promoted twice on performance. At Covered Care I lead merchant onboarding: two analysts, the department’s reporting framework and SOP library, and the AI-assisted review tools Compliance uses before approval.',
  'The career started in recovery services, in admissions and sober living, where a missed follow-up has real consequences. That standard carries into every system I build: clear ownership, documented process, and numbers anyone can trace to the source.',
  'Off the clock: lifting, side projects, and my dog Casper.',
]

// Short, verifiable facts from the résumé.
export const ledger = [
  { label: 'Years in client operations', value: '5+' },
  { label: 'Promotions on performance', value: '2' },
  { label: 'Quality audit score', value: '99%' },
  { label: 'Analysts led', value: '2' },
]

// ── Featured work (exactly four, large screenshots) ──────────────────────────
export interface CaseStudy {
  title: string
  context: string
  problem: string
  built: string
  result: string
  tags: string[]
  // caption: shown under the screenshot (used to flag sample data)
  image: { src: string; alt: string; width: number; height: number; caption?: string }
  link?: { href: string; label: string }
}

// Employer tools are shown with fictional sample data only: no real merchants,
// people, figures, or internal links.
export const featured: CaseStudy[] = [
  {
    title: 'Onboarding reporting and command center',
    context: 'Covered Care · Internal reporting system',
    problem:
      'Onboarding data lived in exports, spreadsheets, and chat threads. There was no single view of the queue and no way to trace a number back to its source.',
    built:
      'A reporting system on onboarding exports and Microsoft SQL Server data in Azure. KPIs, funnels, and time to activate by path, vertical, and source, with data-health checks that reconcile every figure and drill-through to the merchants behind it. Around it: a work hub, activation tracking, the SOP library, and an operations agent that answers process questions from team documentation.',
    result:
      'The team’s daily operating view, used to find bottlenecks and hold turnaround as application volume grows.',
    tags: ['JavaScript', 'SQL Server', 'Azure', 'KPI reporting'],
    image: {
      src: '/images/onboarding-reporting.webp',
      alt: 'Onboarding reporting overview with KPI tiles for applications, pipeline, active merchants, locations, time to activate, holds, and losses, above a status mix chart.',
      width: 1600,
      height: 1000,
      caption: 'Shown with fictional sample data. Branding removed.',
    },
  },
  {
    title: 'Merchant review agent',
    context: 'Covered Care · AI tool for Compliance',
    problem:
      'Every merchant needs an operational review before approval. Done by hand, that meant a stack of browser tabs per merchant and results that varied by reviewer.',
    built:
      'An agent that runs the full check: Google, Yelp, and Trustpilot reviews, CFPB complaints, a capture of every page of the merchant’s website, the requested financing amount against actual and average procedure costs, and domain registration and age. It then drafts the review write-up.',
    result:
      'Every finding carries its evidence and source link. Anything it cannot verify is flagged for a person, and the analyst makes the final call.',
    tags: ['JavaScript', 'Supabase', 'Google Places API', 'Web scraping'],
    image: {
      src: '/images/ops-review-agent.webp',
      alt: 'Merchant review report for a fictional dental practice, with a suggested outcome, confidence level, section navigation, and an executive summary of website, review, pricing, and registration checks.',
      width: 1600,
      height: 1000,
      caption: 'Shown with a fictional sample merchant.',
    },
  },
  {
    title: 'Managr',
    context: 'Web app · Sober living operations',
    problem:
      'A treatment facility running several sober living homes had no single view of residents, required tasks, and house activity.',
    built:
      'One dashboard across every home: residents, chores, medications, drug tests, incidents, messaging, calendars, and reminders, with separate views for the owner and each house manager.',
    result: 'Designed from years of working inside these homes, around how the facility actually runs.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    image: {
      src: '/images/managr.webp',
      alt: 'Managr dashboard with occupancy across four homes, flagged residents, overdue drug tests, and nightly report status.',
      width: 1400,
      height: 790,
      caption: 'Shown with demo data.',
    },
  },
  {
    title: 'Mission Control',
    context: 'Personal operations hub',
    problem: 'Several projects and parallel AI coding sessions, with no single place to see status or next steps.',
    built:
      'One hub for every project: status, progress, next step, and the agents and tools attached. A scanner inventories the machine, a live feed tracks each agent, and every AI session logs its progress when it wraps up.',
    result: 'Stays current without manual status updates.',
    tags: ['React', 'Vite', 'Node.js'],
    image: {
      src: '/images/mission-control.webp',
      alt: 'Mission Control home screen with a clock-style dial of live agents and sessions, a live agent feed, and a table of projects with progress and next steps.',
      width: 1600,
      height: 1000,
    },
  },
]

// ── More projects (compact list, no screenshots) ─────────────────────────────
export interface ProjectRow {
  title: string
  desc: string
  tech: string
  href?: string
  linkLabel?: string
}

export const moreProjects: ProjectRow[] = [
  {
    title: 'AI receptionist and Fleet Command',
    desc: 'Voice AI receptionist on a live phone line that answers, qualifies, books consults, and routes distressed callers to a person. Managed from one dashboard.',
    tech: 'Vapi · Node.js',
    href: 'https://brickbybrickops.com/services/ai-receptionist',
    linkLabel: 'Overview',
  },
  {
    title: 'Brick by Brick free tools',
    desc: 'A website grader that scores any homepage in about 20 seconds, and a calculator for revenue lost to missed calls and slow replies. No sign-up.',
    tech: 'JavaScript · Vercel',
    href: 'https://brickbybrickops.com/tools',
    linkLabel: 'Try it',
  },
  {
    title: 'Prospect',
    desc: 'Job search CRM with a pipeline board, daily focus list, follow-up reminders, and interview prep.',
    tech: 'React · TypeScript · Vite',
    href: 'https://github.com/aamirprinceali/NextRound',
    linkLabel: 'Code',
  },
  {
    title: 'ScheduleHero',
    desc: 'Scheduling tool that replaced a team’s shared Google Sheets.',
    tech: 'Next.js · Zustand',
    href: 'https://github.com/aamirprinceali/schedulehero',
    linkLabel: 'Code',
  },
  {
    title: 'HomeBase',
    desc: 'Family organizer with shared tasks, schedules, and real-time sync.',
    tech: 'React Native · Firebase',
    href: 'https://github.com/aamirprinceali/HomeBase',
    linkLabel: 'Code',
  },
  {
    title: 'First portfolio',
    desc: 'Hand-built space-themed portfolio in plain HTML, CSS, and JavaScript.',
    tech: 'HTML · CSS · JavaScript',
  },
]

// ── Agents & automations (compact list) ──────────────────────────────────────
export interface Agent {
  name: string
  does: string
  href?: string
}

export const agents: Agent[] = [
  {
    name: 'Website agent',
    does: 'Grades any homepage on findability, speed, trust, and local and AI search, quoting the page for every finding.',
    href: 'https://brickbybrickops.com/tools',
  },
  {
    name: 'Operations Q&A agent',
    does: 'Answers team process questions from the SOP library, inside the reporting dashboard.',
  },
  {
    name: 'Blog content agent',
    does: 'Researches search demand, drafts two options in a trained voice, and publishes the approved one.',
  },
  {
    name: 'SEO audit agent',
    does: 'Audits a site on 22 checks and returns a plain-language fix list.',
  },
  {
    name: 'Lead finder fleet',
    does: 'Industry-tuned lead-scraping agents on one shared engine, ranked on a single scoreboard.',
  },
  {
    name: 'Session wrap-up',
    does: 'Commits code, updates handoff notes, and logs progress to Mission Control at the end of every coding session.',
  },
]

export const stack = ['Claude Code', 'ChatGPT', 'Gemini', 'n8n', 'Supabase', 'SQL Server', 'Vercel', 'Playwright']

// ── Experience (Résumé V6) ───────────────────────────────────────────────────
export interface Role {
  title: string
  company: string
  dates: string
  note?: string
  bullets: string[]
}

export const roles: Role[] = [
  {
    title: 'Onboarding & Operations Analyst',
    company: 'Covered Care',
    dates: 'May 2026 to present',
    bullets: [
      'Own end-to-end merchant onboarding across direct and aggregator channels, from application review and financial documentation through compliance and activation.',
      'Built the department’s reporting framework and KPI dashboard on Microsoft SQL Server data in Azure, used to find bottlenecks and reduce turnaround as application volume grows.',
      'Built AI-assisted, API-connected review tools for Compliance covering merchant website checks, customer-review analysis, and potential fraud indicators.',
      'Established the SOP library, standardized workflows, training resources, and quality controls.',
      'Lead two onboarding analysts through assignments, training, performance monitoring, and quality reviews.',
      'Lead AI adoption with the Product and Compliance teams for data analysis, SOP writing, and workflow gap analysis.',
      'Partner with aggregators and Compliance, Finance, Sales, Product, and Development to resolve issues, verify ACH documentation, and activate merchants on time.',
    ],
  },
  {
    title: 'Enrollment Operations Manager',
    company: 'HelloHero',
    dates: 'Sep 2025 to May 2026',
    bullets: [
      'Ran client onboarding operations from referral through service activation for a high-volume program.',
      'Built and led the operations and care coordination team, with the SOPs, KPI framework, SLAs, and escalation paths behind it.',
      'Designed multi-channel outreach (email, SMS, calls) on CRM-integrated pipelines, improving engagement and reducing program drop-off.',
      'Primary contact for external program partners.',
    ],
  },
  {
    title: 'Enrollment Advisor',
    company: 'Hazel Health',
    dates: 'Mar 2024 to Sep 2025',
    note: 'Promoted from Enrollment Coordinator',
    bullets: [
      'Top performer in call volume and conversion, turning inbound leads and referrals into confirmed appointments.',
      '99% quality audit score guiding families through a complex, multi-step onboarding process.',
      'Promoted to Advisor for performance and expanded ownership of the full client lifecycle.',
    ],
  },
  {
    title: 'Admissions Coordinator',
    company: 'Lighthouse Recovery',
    dates: 'Apr 2023 to Mar 2024',
    bullets: [
      'Ran structured needs assessments for high-volume inquiries, matching each person to the right program.',
      'Coordinated clinical, housing, and insurance teams from first contact through admission.',
      'Owned the pipeline from inquiry to admission with complete documentation and no follow-up gaps.',
    ],
  },
]

export const skillGroups = [
  {
    label: 'Core',
    items: [
      'Client onboarding & lifecycle',
      'Process design & SOPs',
      'Team leadership',
      'KPI reporting',
      'Quality assurance & compliance',
      'Merchant & aggregator onboarding',
      'AI-assisted tool development',
    ],
  },
  { label: 'Data & reporting', items: ['Microsoft SQL Server', 'Azure', 'Excel', 'Data analysis'] },
  { label: 'Systems', items: ['Salesforce', 'HubSpot', 'Zoho', 'Airtable', 'Zendesk', 'Notion', 'SharePoint'] },
  { label: 'AI & automation', items: ['Claude Code', 'ChatGPT', 'Gemini', 'Copilot', 'n8n', 'Supabase', 'Vercel'] },
]

export const education = [
  { title: 'B.S. Neuroscience', place: 'University of Texas at Dallas', year: '2016' },
  { title: 'Associate of Science', place: 'Collin College', year: '2011' },
]

export const certifications = [
  'Google AI: AI Fundamentals',
  'Google AI: AI for Brainstorming & Planning',
  'Google AI: AI for Research & Insights',
]
