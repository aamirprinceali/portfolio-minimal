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
  { id: 'work', label: 'Work', blurb: 'Six builds: the problem, the fix, the result' },
  { id: 'agents', label: 'Agents', blurb: 'The AI agents and automations I run' },
  { id: 'record', label: 'Experience', blurb: 'Roles, skills, and the résumé' },
  { id: 'practice', label: 'Brick by Brick', blurb: 'My consulting practice' },
  { id: 'contact', label: 'Contact', blurb: 'Hiring, or building something' },
]

// ── About ────────────────────────────────────────────────────────────────────
export const bio = [
  "I started in recovery services, managing a sober living home and helping residents through some of the hardest transitions of their lives. That work taught me the job underneath every job: listen first, follow through, and don't let a person fall through a crack in the process.",
  'Since then I have worked in admissions, enrollment, and onboarding across behavioral health, health tech, and now healthcare fintech. At Covered Care I run merchant onboarding end to end, built the department’s reporting, SOP library, and quality controls, and lead two analysts.',
  "The thread through all of it: I'm at my best where service and systems overlap. When a process keeps breaking, I map it, fix it, write it down, and then build the tool that keeps it fixed. More and more, that tool is an AI agent I build myself.",
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
  image?: { src: string; alt: string }
  link?: { href: string; label: string }
}

export const featured: CaseStudy[] = [
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
      src: '/images/fleet-command.jpg',
      alt: 'Fleet Command dashboard showing an online receptionist, calls handled, consults booked, and recent call activity.',
    },
    link: { href: 'https://brickbybrickops.com/services/ai-receptionist', label: 'How the receptionist works' },
  },
  {
    title: 'A command center for my onboarding team',
    context: 'Internal tool · Day job',
    problem:
      'Our client onboarding team ran on scattered spreadsheets, chat threads, and tribal knowledge. Nobody could see the whole queue or prove a number.',
    built:
      'One internal hub: a work queue, KPI reporting with data-health checks, the SOP library, activation tracking, and an operations agent that answers process questions from our own documentation.',
    result:
      'Used by the team every day. The reporting behind it is how we spot bottlenecks and keep onboarding turnaround down as application volume grows.',
    tags: ['JavaScript', 'KPI reporting', 'SOPs', 'AI agent'],
    image: {
      src: '/images/onboarding-command-center.jpg',
      alt: 'Onboarding command center with navigation for work hub, activations, KPI reporting, data health, and the SOP library.',
    },
  },
  {
    title: 'Managr: operations for sober living homes',
    context: 'Web app · Built for a treatment facility',
    problem:
      'A treatment facility running several sober living houses had dozens of moving pieces per resident and no single place to see them.',
    built:
      'One dashboard across every home: residents, chores, medications, drug tests, incidents, messaging, calendars, and reminders, with separate views for the owner and each house manager.',
    result:
      'Shaped around how the facility actually runs. I managed one of these houses for three years, so I built the tool I wished I had.',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind'],
    image: {
      src: '/images/managr-dashboard.jpg',
      alt: 'Managr dashboard summarizing residents, tasks, and alerts across multiple sober living homes.',
    },
  },
]

export const moreWork: CaseStudy[] = [
  {
    title: 'Onboarding workflow and fraud audit map',
    context: 'Process design · QA',
    problem: 'No one could see the full onboarding workflow at once, including where the fraud and quality checks sat.',
    built: 'An editable end-to-end map of the workflow with every fraud and QA checkpoint, one the team can actually maintain.',
    result:
      'Found a path where a failed verification step skipped compliance review entirely. The gap is closed, and the map is now the reference for training and audits.',
    tags: ['Process mapping', 'QA', 'Compliance'],
  },
  {
    title: 'Mission Control',
    context: 'Personal operations hub',
    problem: 'I run several projects and AI coding sessions at once, and kept losing the thread between them.',
    built:
      'One hub for every project: status, next step, and the agents and tools attached. A scanner reads my machine, and each AI session updates it when it wraps up.',
    result: "No more 'where did I leave that' mornings. It maintains itself.",
    tags: ['React', 'Vite', 'Zustand', 'Node.js'],
  },
  {
    title: 'brickbybrickops.com and its free tools',
    context: 'Website · Lead generation',
    problem: "Small business owners can't see what a weak website or slow follow-up is costing them.",
    built:
      'My practice’s site, plus two free tools: a website agent that grades any homepage in about 20 seconds, and a revenue calculator that estimates what missed calls and slow replies cost.',
    result: 'Both are live and give a result without a sign-up.',
    tags: ['JavaScript', 'Vercel', 'AI agent', 'SEO'],
    link: { href: 'https://brickbybrickops.com/tools', label: 'Try the free tools' },
  },
]

export const earlierBuilds = [
  {
    title: 'Prospect',
    desc: 'A job search CRM with pipeline tracking and reporting on where applications stall.',
    tags: 'React · TypeScript',
    href: 'https://github.com/aamirprinceali/NextRound',
  },
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
    name: 'Merchant review tools',
    does: "Check a merchant's website and public reviews through connected APIs, and flag potential fraud indicators for a human reviewer.",
    status: 'In use',
  },
  {
    name: 'Operations agent',
    does: "Answers a team's process questions straight from its own SOP library.",
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

export const stack = ['Claude Code', 'ChatGPT', 'Gemini', 'n8n', 'Supabase', 'Vercel', 'Playwright', 'GitHub']

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
      'Built the department’s reporting framework and KPI dashboard, and use it to find bottlenecks and cut turnaround time as application volume grows.',
      'Established the SOP library, standardized workflows, training resources, and quality controls. Lead two onboarding analysts.',
      'Designed and built internal reporting, automation, and API-connected review tools with AI development platforms, covering merchant website checks, review analysis, and fraud indicators.',
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
  {
    title: 'House Manager & Case Manager',
    company: 'Lighthouse Recovery',
    dates: '2020 to 2023',
    bullets: [
      'Ran daily operations of a sober living residence: accountability, house standards, testing, and resident support.',
      'Connected residents leaving treatment with jobs, outpatient care, and community support.',
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
      'KPI reporting & analysis',
      'Quality assurance & compliance',
      'Merchant & aggregator onboarding',
      'AI-assisted tool development',
      'Workflow automation',
    ],
  },
  { label: 'CRM & systems', items: ['Salesforce', 'HubSpot', 'Zoho', 'Airtable', 'Zendesk'] },
  { label: 'AI & automation', items: ['Claude Code', 'ChatGPT', 'Gemini', 'n8n', 'Perplexity', 'Copilot'] },
  { label: 'Ops & build', items: ['Notion', 'Supabase', 'Vercel', 'Miro', 'ConnectTeam', 'SQL Server'] },
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
