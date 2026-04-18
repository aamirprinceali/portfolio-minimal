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
    title: 'Prospect — Job Search CRM',
    description: 'A data-driven job search command center built from scratch. Track every application, manage your full pipeline, and use the built-in reporting and analytics to identify exactly where you\'re losing momentum — so you can make smarter decisions and improve your chances with every cycle.',
    tags: ['React', 'TypeScript', 'Vite', 'CRM', 'Analytics'],
    status: 'In Progress',
    githubUrl: 'https://github.com/aamirprinceali/NextRound',
  },
  {
    id: 2,
    title: 'Managr — Sober Living Ops',
    description: 'An operations and metrics platform for sober living facilities. Manage residents, track drug tests, log medications and meetings, and flag violations — with full reporting dashboards that help house managers spot patterns early and make data-informed decisions about resident care.',
    tags: ['Next.js', 'Supabase', 'Tailwind', 'Healthcare'],
    status: 'In Progress',
    githubUrl: 'https://github.com/aamirprinceali/managr',
  },
  {
    id: 3,
    title: 'Clarity — Scheduling System',
    description: 'A scheduling and capacity management system built for mental health service providers. Manages therapist assignments across multiple locations with a visual timeline, real-time capacity tracking, session metrics, and conflict detection — replacing spreadsheets with an actual system.',
    tags: ['Next.js', 'TypeScript', 'Zustand', 'Scheduling'],
    status: 'In Progress',
  },
  {
    id: 4,
    title: 'Resume Generator',
    description: 'An AI-powered resume builder that generates tailored, job-specific resumes from a single master profile. Analyzes job descriptions, matches requirements to your experience, and reformats everything to fit — cutting resume prep from hours to under five minutes.',
    tags: ['React', 'TypeScript', 'AI', 'Automation'],
    status: 'In Progress',
  },
  {
    id: 5,
    title: 'HomeBase — Family Command Center',
    description: 'A mobile app that keeps the whole household organized. Manage family members, shared tasks, schedules, and household responsibilities — all backed by real-time sync so nothing gets missed.',
    tags: ['React Native', 'Expo', 'Firebase', 'Mobile'],
    status: 'In Progress',
    githubUrl: 'https://github.com/aamirprinceali/HomeBase',
  },
  {
    id: 6,
    title: 'Lead Scraping Automation',
    description: 'An automated lead generation pipeline that scrapes target sites for business contacts, deduplicates and scores the data, then pushes qualified leads directly into CRM pipelines — removing the manual research grind and keeping the top of funnel full without lifting a finger.',
    tags: ['n8n', 'Puppeteer', 'Automation', 'CRM'],
    status: 'In Progress',
  },
]
