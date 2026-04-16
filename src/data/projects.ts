export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  status: 'In Progress' | 'Completed' | 'Concept'
  githubUrl?: string
  liveUrl?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'NextRound — Job Hunt HQ',
    description: 'A full job hunting command center built from scratch. Track every application, prep for interviews, compose recruiter emails with built-in templates, and monitor your pipeline from first apply to final offer — all in one place.',
    tags: ['React', 'TypeScript', 'Vite', 'CRM'],
    status: 'In Progress',
    githubUrl: 'https://github.com/aamirprinceali/NextRound',
  },
  {
    id: 2,
    title: 'Managr — Sober Living Ops',
    description: 'An operations platform built for sober living facilities. Manage residents, track drug tests, assign chores, log medications and meetings, and flag violations — everything a house manager needs to run a tight ship.',
    tags: ['Next.js', 'Supabase', 'Tailwind', 'Healthcare'],
    status: 'In Progress',
    githubUrl: 'https://github.com/aamirprinceali/managr',
  },
  {
    id: 3,
    title: 'HomeBase — Family Command Center',
    description: 'A mobile app that keeps the whole household on the same page. Manage family members, shared tasks, schedules, and house responsibilities — all backed by real-time Firebase sync.',
    tags: ['React Native', 'Expo', 'Firebase', 'Mobile'],
    status: 'In Progress',
    githubUrl: 'https://github.com/aamirprinceali/HomeBase',
  },
  {
    id: 4,
    title: 'HelloHero — Scheduling System',
    description: 'A scheduling system built for HelloHero, a mental health organization. Manages therapy providers across multiple schools and districts — with a visual timeline, session assignment, student tracking, and real-time provider capacity.',
    tags: ['Next.js', 'TypeScript', 'Zustand', 'Scheduling'],
    status: 'In Progress',
  },
  {
    id: 5,
    title: 'Clinician Dashboard',
    description: 'A provider-facing dashboard for HelloHero clinicians. View assigned students across school districts, track session completion, manage caseloads, and flag scheduling conflicts — all in one clean interface built to reduce admin overhead.',
    tags: ['Next.js', 'TypeScript', 'Healthcare', 'Dashboard'],
    status: 'In Progress',
  },
  {
    id: 6,
    title: 'Lead Scraping Automation',
    description: 'An automated lead generation pipeline that scrapes target websites for business contacts, deduplicates and scores the data, then pushes qualified leads directly into CRM pipelines via n8n — removing the manual research grind entirely.',
    tags: ['n8n', 'Puppeteer', 'Automation', 'CRM'],
    status: 'In Progress',
  },
]
