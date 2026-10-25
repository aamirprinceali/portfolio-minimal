// ─────────────────────────────────────────────────────────────────────────────
// All site copy lives here, so words can change without touching layout code.
// Sources of truth: Resume V6 Master (Oct 2026), brickbybrickops.com public
// project pages, and Aamir's project docs. Rule: nothing invented, no em dashes.
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

// Page sections, in order. Used by the nav and the hero's table of contents.
export const sections = [
  { id: 'about', label: 'About', blurb: 'From a sober living house to fintech onboarding' },
  { id: 'work', label: 'Work', blurb: 'Eight builds: the problem, the fix, the result' },
  { id: 'agents', label: 'Agents', blurb: 'The AI agents and automations I run' },
  { id: 'record', label: 'Experience', blurb: 'Roles, skills, and the résumé' },
  { id: 'practice', label: 'Brick by Brick', blurb: 'My consulting practice' },
  { id: 'contact', label: 'Contact', blurb: 'Hiring, or building something' },
]

// ── About ────────────────────────────────────────────────────────────────────
export const bio = [
  "I started in recovery services, managing a sober living home and helping residents through some of the hardest transitions of their lives. That work taught me the job underneath every job: listen first, follow through, and don't let a person fall through a crack in the process.",
  'Since then I have worked in admissions, enrollment, and onboarding across behavioral health, health tech, and now healthcare fintech. At Covered Care I run merchant onboarding end to end and lead two analysts. I built the department’s reporting framework and KPI dashboard, and I run SQL queries in Azure and Microsoft SQL Server to pull and analyze the data behind it.',
  'I also build custom AI-assisted tools for our compliance team, like an agent that reviews a merchant’s website, reviews, complaints, and pricing before approval. I use AI in my own work every day, and I have led the push to bring it into how our teams work, helping the product and compliance teams use it for data analysis, SOP writing, finding gaps, and tightening workflows.',
  "The thread through all of it: I'm at my best where service and systems overlap. When a process keeps breaking, I map it, fix it, write it down, and then build the tool that keeps it fixed. It is the same work I now do for small businesses through my practice, Brick by Brick.",
  'Off the clock, I lift, build side projects, and spend time with my dog Casper.',
]

// Short, verifiable facts from the résumé. Shown as a ledger, not a stat wall.
export const ledger = [
  { label: 'Years in client operations', value: '5+' },
  { label: 'Promotions on performance', value: '2' },
  { label: 'Quality audit score', value: '99%' },
  { label: 'Analysts I lead today', value: '2' },
]

export const pullQuote =
  'I lead with empathy, take accountability seriously, and genuinely care about the people I work with.'

// ── Work ─────────────────────────────────────────────────────────────────────
export interface CaseStudy {
  title: string
  context: string
  problem: string
  built: string
  result: string
  tags: string[]
  // caption: shown under the screenshot (used to flag sample data)
  image?: { src: string; alt: string; width: number; height: number; caption?: string }
  link?: { href: string; label: string }
}

// Ordered by how much each one does. Employer tools are shown with fictional
// sample data only: no real merchants, people, figures, or internal links.
export const featured: CaseStudy[] = [
  {
    title: 'An AI agent that reviews merchants before approval',
    context: 'AI tool · Built for the compliance team',
    problem:
      'Every new merchant needs an operational review before it can be approved: is the business real, what do customers say, and does the financing request make sense. Done by hand, that meant a pile of browser tabs per merchant and results that varied by reviewer.',
    built:
      "An agent that runs the whole check. It pulls customer reviews from Google, Yelp, and Trustpilot, checks CFPB complaints, captures every page of the business's website, cross-references the requested financing amount against actual and average procedure costs, and verifies the site's registration and domain age. Then it writes the report.",
    result:
      'Every finding comes with its evidence and source link, anything it could not verify is listed for a person to check, and the analyst always makes the final call. It drafts the review write-up too, so the analyst edits instead of starting from a blank page.',
    tags: ['JavaScript', 'Supabase', 'Google Places API', 'Web scraping', 'AI-assisted'],
    image: {
      src: '/images/ops-review-agent.webp',
      alt: 'Merchant review report for a fictional dental practice, with a suggested outcome, confidence level, section navigation, and an executive summary of website, review, pricing, and registration checks.',
      width: 1600,
      height: 1000,
      caption: 'Shown with a fictional sample merchant.',
    },
  },
  {
    title: 'Onboarding reporting and a command center for the team',
    context: 'Reporting system · Day job',
    problem:
      'Onboarding ran on scattered spreadsheets, chat threads, and tribal knowledge. Nobody could see the whole queue, and nobody could prove a number.',
    built:
      'A reporting system fed by our onboarding exports and SQL queries from Microsoft SQL Server in Azure. It shows KPIs, funnels, and time to activate by path, vertical, and source, with data-health checks that reconcile every number and a click-through to the exact merchants behind it. Around it: a work hub, activation tracking, the SOP library, and an operations agent that answers process questions from our own documentation.',
    result:
      'Used by the team every day. It is how we spot bottlenecks and keep onboarding turnaround down as application volume grows.',
    tags: ['JavaScript', 'SQL Server', 'Azure', 'KPI reporting', 'AI agent'],
    image: {
      src: '/images/onboarding-reporting.webp',
      alt: 'Onboarding reporting overview with KPI tiles for applications, pipeline, active merchants, locations, time to activate, holds, and losses, above a status mix chart.',
      width: 1600,
      height: 1000,
      caption: 'Shown with fictional sample data. Branding removed.',
    },
  },
  {
    title: 'An AI receptionist, run from Fleet Command',
    context: 'Voice AI · Personal build',
    problem:
      'Treatment centers and small businesses lose after-hours and overflow calls to voicemail. Every one of those is a person who called someone else next.',
    built:
      'A voice AI receptionist on a real phone number. It answers questions about hours, services, and pricing, qualifies the caller, books the consult, and hands distressed callers to a human. Fleet Command is the control room: every receptionist, every call, live status, and full transcripts.',
    result:
      'Has taken live calls and booked consults on a real line. One core engine with a swappable skin per industry, so a new business is a new skin, not a rebuild.',
    tags: ['Vapi', 'Node.js', 'Voice AI', 'Dashboard'],
    image: {
      src: '/images/fleet-command.webp',
      alt: 'Fleet Command dashboard showing an online receptionist, calls handled, consults booked, alerts, and recent call activity.',
      width: 1600,
      height: 1000,
    },
    link: { href: 'https://brickbybrickops.com/services/ai-receptionist', label: 'How the receptionist works' },
  },
  {
    title: 'Managr: operations for sober living homes',
    context: 'Web app · Built for a treatment facility',
    problem:
      'A treatment facility running several sober living houses had dozens of moving pieces per resident and no single place to see them.',
    built:
      'One dashboard across every home: residents, chores, medications, drug tests, incidents, messaging, calendars, and reminders, with separate views for the owner and each house manager.',
    result:
      'Shaped around how the facility actually runs. I spent years inside these houses, so I built the tool I wished I had.',
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
    problem: 'I run several projects and AI coding sessions at once, and kept losing the thread between them.',
    built:
      'One hub for every project: status, progress, next step, and the agents and tools attached. A scanner reads my machine, a live feed shows what each agent is doing, and every AI session updates it when it wraps up.',
    result: "No more 'where did I leave that' mornings. It maintains itself.",
    tags: ['React', 'Vite', 'Node.js', 'Agents'],
    image: {
      src: '/images/mission-control.webp',
      alt: 'Mission Control home screen with a clock-style dial of live agents and sessions, a live agent feed, and a table of projects with progress and next steps.',
      width: 1600,
      height: 1000,
    },
  },
  {
    title: 'brickbybrickops.com and its free tools',
    context: 'Website · Lead generation',
    problem: "Small business owners can't see what a weak website or slow follow-up is costing them.",
    built:
      'My practice’s site, plus two free tools: a website agent that grades any homepage in about 20 seconds, and a revenue calculator that estimates what missed calls and slow replies cost.',
    result: 'Both are live and give a result without a sign-up.',
    tags: ['JavaScript', 'Vercel', 'AI agent', 'SEO'],
    image: {
      src: '/images/brickbybrick-tools.webp',
      alt: 'Brick by Brick free tools page offering a website agent and a revenue calculator.',
      width: 1600,
      height: 1000,
    },
    link: { href: 'https://brickbybrickops.com/tools', label: 'Try the free tools' },
  },
]

export const moreWork: CaseStudy[] = [
  {
    title: 'Prospect',
    context: 'Web app · Job search CRM',
    problem: 'A job search lives in a dozen places: postings, email, calendars, notes, and memory.',
    built:
      'One command center: a pipeline board, a daily focus list, follow-up reminders, interview prep, a weekly goal, and stats on where applications stall.',
    result: 'Everything except hitting submit happens in one place.',
    tags: ['React', 'TypeScript', 'Vite'],
    image: {
      src: '/images/prospect.webp',
      alt: 'Prospect command center showing an active job hunt, applications sent, response rate, today’s follow-ups, and a pipeline summary.',
      width: 1600,
      height: 1000,
      caption: 'Shown with fictional sample data.',
    },
    link: { href: 'https://github.com/aamirprinceali/NextRound', label: 'View the code' },
  },
  {
    title: 'My first portfolio',
    context: 'Website · Design playground',
    problem: 'I wanted a portfolio that showed I could build, not just describe.',
    built:
      'A hand-built space theme in plain HTML, CSS, and JavaScript: a constellation canvas, a terminal-style card, project pages, and a full CV.',
    result: 'The playground where I learned the front-end basics this site is built on.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    image: {
      src: '/images/portfolio-space.webp',
      alt: 'Dark space-themed portfolio hero with a constellation drawing, the name Aamir Ali, and a terminal-style info card.',
      width: 1600,
      height: 1000,
    },
  },
]

export const earlierBuilds = [
  {
    title: 'ScheduleHero',
    desc: 'A scheduling tool built to replace a team’s shared Google Sheets.',
    tags: 'Next.js · Zustand',
    href: 'https://github.com/aamirprinceali/schedulehero',
  },
  {
    title: 'HomeBase',
    desc: 'A family organizer app with shared tasks, schedules, and real-time sync.',
    tags: 'React Native · Firebase',
    href: 'https://github.com/aamirprinceali/HomeBase',
  },
]

// ── Agents & automations ─────────────────────────────────────────────────────
export interface Agent {
  name: string
  does: string
  status: 'Live' | 'In use' | 'Built'
  href?: string
}

export const agents: Agent[] = [
  {
    name: 'Website agent',
    does: "Loads any homepage, runs Google's phone speed test, and grades findability, speed, trust, and local and AI search. Every finding quotes the page.",
    status: 'Live',
    href: 'https://brickbybrickops.com/tools',
  },
  {
    name: 'Voice receptionist',
    does: 'Answers calls, qualifies the caller, books the appointment, and logs a transcript. Distress always routes to a human.',
    status: 'Built',
  },
  {
    name: 'Operations review agent',
    does: "Checks a merchant before approval: Google, Yelp, and Trustpilot reviews, CFPB complaints, every page of the website, the financing request against procedure costs, and domain age. Writes the report; a person makes the call.",
    status: 'In use',
  },
  {
    name: 'Operations agent',
    does: "Answers a team's process questions straight from its own SOP library, inside the reporting dashboard.",
    status: 'In use',
  },
  {
    name: 'Mission Control scanner',
    does: 'Reads my machine for projects, agents, and tools, and keeps a live feed of what every agent is doing.',
    status: 'In use',
  },
  {
    name: 'Blog content agent',
    does: 'Researches what customers search for, drafts two options in a trained voice, and publishes the one I approve. Every note I give it becomes a rule it keeps.',
    status: 'Built',
  },
  {
    name: 'SEO audit agent',
    does: 'Audits a site on 22 checks and writes a plain-language fix list.',
    status: 'Built',
  },
  {
    name: 'Lead finder fleet',
    does: 'Lead-scraping agents on one shared engine, each tuned to an industry and data source. They compete on one scoreboard, and I keep whichever pulls the best leads.',
    status: 'Built',
  },
  {
    name: 'Session wrap-up',
    does: 'At the end of every work session, my coding agents commit the code, update the project handoff notes, and log progress to Mission Control.',
    status: 'In use',
  },
]

export const stack = ['Claude Code', 'ChatGPT', 'Gemini', 'Copilot', 'n8n', 'Supabase', 'SQL Server', 'Vercel', 'Playwright', 'GitHub']

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
      'Run end-to-end merchant onboarding across direct and aggregator channels: application review, financial documentation, compliance, partner communication, and activation.',
      'Built the department’s reporting framework and KPI dashboard. Run SQL queries in Azure and Microsoft SQL Server to pull and analyze onboarding data, then use it to find bottlenecks and cut turnaround time as application volume grows.',
      'Built custom AI-assisted tools for the compliance team, including a merchant review agent that checks websites, customer reviews, complaints, pricing, and domain age, and flags potential fraud indicators.',
      'Use AI tools in my own workflow every day, and lead the push to bring them into our teams’ work: helping product and compliance use AI for data analysis, SOP creation, finding gaps, and improving workflows.',
      'Established the SOP library, standardized workflows, training resources, and quality controls. Lead two onboarding analysts.',
      'Partner with aggregators and the Compliance, Finance, Sales, Product, and Development teams to resolve issues, verify ACH documentation, and get merchants activated on time.',
    ],
  },
  {
    title: 'Enrollment Operations Manager',
    company: 'HelloHero',
    dates: 'Sep 2025 to May 2026',
    bullets: [
      'Ran client onboarding operations from referral through service activation for a high-volume program.',
      'Built and led an operations and care coordination team, with the SOPs, KPIs, SLAs, and escalation paths behind it.',
      'Designed multi-channel outreach (email, SMS, calls) on CRM-integrated pipelines that lifted engagement and reduced drop-off.',
    ],
  },
  {
    title: 'Enrollment Advisor',
    company: 'Hazel Health',
    dates: 'Mar 2024 to Sep 2025',
    note: 'Promoted from Enrollment Coordinator',
    bullets: [
      'Ranked among top performers in call volume and conversion, turning inbound leads and referrals into confirmed appointments.',
      'Earned a 99% quality audit score guiding families through a complex, multi-step onboarding process.',
      'Kept a clean CRM pipeline: every interaction tracked, every follow-up on time.',
    ],
  },
  {
    title: 'Admissions Coordinator',
    company: 'Lighthouse Recovery',
    dates: 'Apr 2023 to Mar 2024',
    bullets: [
      'Handled high-volume inquiries and structured needs assessments, matching each person to the right program.',
      'Coordinated clinical, housing, and insurance teams for smooth transitions from first call to admission.',
      'Owned the pipeline from inquiry to admission with complete documentation and no follow-up gaps.',
    ],
  },
]

export const skillGroups = [
  {
    label: 'What I do',
    items: [
      'Client onboarding & lifecycle',
      'Operations process design & SOPs',
      'Team leadership',
      'KPI reporting & dashboards',
      'Data analysis & SQL queries',
      'Quality assurance & compliance',
      'Merchant & aggregator onboarding',
      'AI-assisted tool development',
      'Leading AI adoption on teams',
      'Workflow automation',
    ],
  },
  {
    label: 'Data & reporting',
    items: ['Microsoft SQL Server', 'SQL queries', 'Azure', 'Reporting & BI', 'Data analysis', 'Excel'],
  },
  { label: 'CRM & systems', items: ['Salesforce', 'HubSpot', 'Zoho', 'Airtable', 'Zendesk'] },
  { label: 'AI & automation', items: ['Claude Code', 'ChatGPT', 'Gemini', 'n8n', 'Perplexity', 'Copilot'] },
  { label: 'Ops & build', items: ['Notion', 'Supabase', 'Vercel', 'Miro', 'ConnectTeam', 'SharePoint'] },
  { label: 'Communication', items: ['Aircall', 'CloudTalk', 'Heymarket', 'Slack', 'Zoom', 'Teams'] },
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

// ── Brick by Brick ───────────────────────────────────────────────────────────
export const practiceOutcomes = [
  {
    title: 'Capture more leads',
    desc: 'AI receptionists, website chat, and instant follow-up, so the customers you already attract turn into booked work.',
  },
  {
    title: 'Fix the process',
    desc: 'I audit how work moves through the business, use the data to find where time and money leak, and fix the bottlenecks.',
  },
  {
    title: 'Automate the busywork',
    desc: 'Repetitive tasks run on their own across the tools you already use, so the team gets hours back.',
  },
]
