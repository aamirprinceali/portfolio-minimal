import { motion } from 'framer-motion'
import { Printer } from 'lucide-react'
import ChapterSection from '../ui/ChapterSection'
import ChapterHeader from '../ui/ChapterHeader'

const timeline = [
  {
    dates: 'Jun 2020 – May 2023',
    role: 'House Manager / Case Manager',
    company: 'Lighthouse Recovery',
    location: 'Dallas, TX',
  },
  {
    dates: 'Apr 2023 – Feb 2024',
    role: 'Admissions Coordinator',
    company: 'Lighthouse Recovery',
    location: 'Dallas, TX',
  },
  {
    dates: 'Mar 2024 – Oct 2025',
    role: 'Enrollment Coordinator → Advisor',
    company: 'Hazel Health',
    location: 'Remote',
  },
  {
    dates: 'Oct 2025 – Present',
    role: 'Enrollment Operations Manager',
    company: 'HelloHero',
    location: 'Remote',
  },
]

const experience = [
  {
    title: 'Enrollment Operations Manager',
    company: 'HelloHero',
    location: 'Remote',
    dates: 'Oct 2025 – Present',
    bullets: [
      'Built and scaled the enrollment operations function from the ground up — designing SOPs, workflows, and team structures to support rapid growth across multiple school districts.',
      'Led a team of enrollment specialists, managing daily operations, performance tracking, and onboarding new hires into a structured, repeatable process.',
      'Partnered with clinical, product, and district leadership teams to align enrollment workflows with provider capacity and district contract requirements.',
      'Created reporting dashboards and KPI frameworks that gave leadership real-time visibility into enrollment funnel health, conversion rates, and bottlenecks.',
    ],
  },
  {
    title: 'Enrollment Advisor',
    company: 'Hazel Health',
    location: 'Remote',
    dates: 'Aug 2024 – Oct 2025',
    bullets: [
      'Served as a senior point of contact for families navigating mental and behavioral health enrollment — handling complex cases that required extra sensitivity and coordination.',
      'Consistently exceeded enrollment targets by building rapport quickly and guiding families through what is often a stressful, confusing process.',
      'Mentored junior coordinators on enrollment conversations, objection handling, and documentation best practices.',
      'Collaborated with school district liaisons and clinical teams to ensure smooth handoffs between enrollment and service delivery.',
    ],
  },
  {
    title: 'Enrollment Coordinator',
    company: 'Hazel Health',
    location: 'Remote',
    dates: 'Mar 2024 – Aug 2024',
    bullets: [
      'Managed high-volume inbound and outbound enrollment contacts for pediatric behavioral health services across multiple school districts.',
      'Handled consent collection, eligibility verification, and scheduling coordination — ensuring families were set up for service delivery quickly and accurately.',
      'Maintained detailed records in CRM and EHR systems, ensuring data integrity across all enrollment touchpoints.',
      'Identified process gaps in the enrollment pipeline and proposed workflow improvements that reduced average enrollment time.',
    ],
  },
  {
    title: 'Admissions Coordinator',
    company: 'Lighthouse Recovery',
    location: 'Dallas, TX',
    dates: 'Apr 2023 – Feb 2024',
    bullets: [
      'Managed the full admissions pipeline for a residential behavioral health and sober living facility — from initial inquiry through intake and move-in.',
      'Conducted intake screenings, gathered clinical documentation, and coordinated with insurance and clinical staff to confirm eligibility and placement.',
      'Built relationships with referring providers, treatment centers, and discharge planners to maintain a consistent referral pipeline.',
      'Streamlined the admissions process by creating structured intake checklists and communication templates that reduced time-to-admission.',
    ],
  },
  {
    title: 'House Manager / Case Manager',
    company: 'Lighthouse Recovery',
    location: 'Dallas, TX',
    dates: 'Jun 2020 – May 2023',
    bullets: [
      'Managed daily operations of a sober living residence — overseeing resident compliance, house rules enforcement, chore schedules, drug testing, and community accountability.',
      'Provided case management support to residents transitioning out of treatment — connecting them with employment resources, outpatient programs, and community support networks.',
      'Responded to crisis situations with de-escalation, documentation, and coordination with clinical and administrative leadership.',
      'Built and maintained relationships with residents, their families, and external treatment providers to support long-term recovery outcomes.',
    ],
  },
]

const skillGroups = [
  {
    label: 'Core Skills',
    skills: ['Operations Management', 'Team Leadership', 'SOP Design', 'Process Optimization', 'Stakeholder Relations', 'KPI Tracking', 'Multi-Channel Outreach', 'Data Analysis', 'Training & Onboarding', 'Change Management', 'Case Management', 'Customer Success'],
  },
  {
    label: 'AI & Automation',
    skills: ['ChatGPT', 'Claude', 'Gemini', 'n8n', 'Blotato', 'Gamma', 'Canva'],
  },
  {
    label: 'CRM & Ops Tools',
    skills: ['Salesforce', 'Zoho', 'HubSpot', 'Airtable', 'Notion', 'ConnectTeam', 'InSync (EHR)'],
  },
  {
    label: 'Tools & Communication',
    skills: ['Slack', 'Heymarket', 'CloudTalk', 'Aircall', 'Zoom', 'Google Workspace', 'MS Office'],
  },
  {
    label: 'Domains',
    skills: ['Behavioral Health', 'Addiction Recovery', 'Pediatric Healthcare', 'Sober Living Ops', 'HIPAA Compliance'],
  },
]

const education = [
  {
    degree: 'B.S. Neuroscience',
    school: 'University of Texas at Dallas',
    dates: '2011–2016',
    note: '',
  },
  {
    degree: 'A.S. General Studies',
    school: 'Collin College',
    dates: '2009–2011',
    note: '',
  },
  {
    degree: 'Google AI Certifications',
    school: 'Google',
    dates: '2024–2025',
    note: 'AI Fundamentals · AI for Brainstorming & Planning · AI for Research & Insights',
  },
]

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easing } } }
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }

export default function ChapterRecord() {
  return (
    <ChapterSection id="chapter-record" backgroundColor="#FDFCF8" style={{ minHeight: 'auto' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '96px 24px 80px' }}>
        <ChapterHeader
          number="04"
          chapter="The Record"
          headline="The complete<br/>career history."
          deck="Every role, every responsibility, every result — laid out in full."
        />

        {/* Summary paragraph */}
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={fadeUp}
          style={{
            fontFamily: '"Lora", Georgia, serif',
            fontSize: '1.05rem',
            lineHeight: 1.8,
            color: '#3D3730',
            maxWidth: '720px',
            marginBottom: '72px',
          }}
        >
          Operations & Customer Success Professional with 5+ years across behavioral health, pediatric healthcare, and enrollment. I build teams, design systems, and use AI to make operations faster and smarter. From managing a sober living facility to leading enrollment operations at a venture-backed health tech startup — I've done the work at every level.
        </motion.p>

        {/* Career timeline */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={container}
          style={{ marginBottom: '80px' }}
        >
          <div style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#7A7060',
            marginBottom: '32px',
          }}>
            Career Timeline
          </div>

          <div style={{ position: 'relative', paddingLeft: '32px' }}>
            {/* Vertical line — slow gold shimmer travels down it */}
            <div
              className="timeline-shimmer-line"
              style={{
                position: 'absolute',
                left: '6px',
                top: '8px',
                bottom: '8px',
                width: '1px',
              }}
            />

            {timeline.map((entry, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  position: 'relative',
                  marginBottom: i < timeline.length - 1 ? '36px' : 0,
                }}
              >
                {/* Dot — all gold, most-recent pulses */}
                <div
                  className={i === timeline.length - 1 ? 'timeline-dot-pulse' : undefined}
                  style={{
                    position: 'absolute',
                    left: '-29px',
                    top: '6px',
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: '#C9A84C',
                    border: '2px solid #C9A84C',
                  }}
                />

                <div style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontSize: '0.72rem',
                  color: '#C9A84C',
                  marginBottom: '4px',
                  letterSpacing: '0.04em',
                }}>
                  {entry.dates}
                </div>
                <div style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '1.2rem',
                  fontWeight: 600,
                  color: '#0F0F0E',
                  lineHeight: 1.2,
                }}>
                  {entry.role}
                </div>
                <div style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontSize: '0.8rem',
                  color: '#7A7060',
                  marginTop: '2px',
                }}>
                  {entry.company} · {entry.location}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Two-column: Experience + Skills sidebar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={container}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 280px',
            gap: '64px',
            alignItems: 'start',
            marginBottom: '72px',
          }}
        >
          {/* Left: Experience entries */}
          <div>
            <div style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: '0.62rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#7A7060',
              marginBottom: '32px',
            }}>
              Experience
            </div>

            {experience.map((job, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  marginBottom: i < experience.length - 1 ? '48px' : 0,
                  paddingBottom: i < experience.length - 1 ? '48px' : 0,
                  borderBottom: i < experience.length - 1 ? '1px solid #E2DCCF' : 'none',
                }}
              >
                {/* Job header */}
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '16px', marginBottom: '4px' }}>
                  <div style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: '1.3rem',
                    fontWeight: 600,
                    color: '#0F0F0E',
                    lineHeight: 1.2,
                  }}>
                    {job.title}
                  </div>
                  <div style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontSize: '0.72rem',
                    color: '#7A7060',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    marginTop: '4px',
                  }}>
                    {job.dates}
                  </div>
                </div>
                <div style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontSize: '0.8rem',
                  color: '#7A7060',
                  marginBottom: '16px',
                }}>
                  {job.company} · {job.location}
                </div>

                {/* Bullets */}
                <ul style={{ margin: 0, padding: 0, listStyle: 'none' }}>
                  {job.bullets.map((bullet, j) => (
                    <li
                      key={j}
                      style={{
                        display: 'flex',
                        gap: '12px',
                        marginBottom: j < job.bullets.length - 1 ? '10px' : 0,
                      }}
                    >
                      <span style={{
                        color: '#C9A84C',
                        flexShrink: 0,
                        marginTop: '7px',
                        fontSize: '0.5rem',
                        lineHeight: 1,
                      }}>
                        &#9632;
                      </span>
                      <span style={{
                        fontFamily: '"Lora", Georgia, serif',
                        fontSize: '0.85rem',
                        color: '#3D3730',
                        lineHeight: 1.7,
                      }}>
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Right: Skills sidebar */}
          <motion.div variants={fadeUp} style={{ position: 'sticky', top: '120px' }}>
            <div style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: '0.62rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: '#7A7060',
              marginBottom: '24px',
            }}>
              Skills
            </div>

            {skillGroups.map((group, i) => (
              <div key={i} style={{ marginBottom: '24px' }}>
                <div style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontSize: '0.68rem',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: '#C9A84C',
                  marginBottom: '10px',
                }}>
                  {group.label}
                </div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {group.skills.map(skill => (
                    <span key={skill} style={{
                      fontFamily: '"DM Sans", system-ui, sans-serif',
                      fontSize: '0.72rem',
                      color: '#3D3730',
                      backgroundColor: '#F5F2EA',
                      border: '1px solid #E2DCCF',
                      borderRadius: '2px',
                      padding: '3px 8px',
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Education */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={container}
          style={{ marginBottom: '56px' }}
        >
          <div style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: '0.62rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#7A7060',
            marginBottom: '24px',
          }}>
            Education &amp; Certifications
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {education.map((edu, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'space-between',
                  gap: '24px',
                  paddingBottom: '20px',
                  borderBottom: i < education.length - 1 ? '1px solid #E2DCCF' : 'none',
                }}
              >
                <div>
                  <div style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: '1.2rem',
                    fontWeight: 600,
                    color: '#0F0F0E',
                    lineHeight: 1.2,
                    marginBottom: '4px',
                  }}>
                    {edu.degree}
                  </div>
                  <div style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontSize: '0.8rem',
                    color: '#7A7060',
                  }}>
                    {edu.school}
                  </div>
                  {edu.note && (
                    <div style={{
                      fontFamily: '"Lora", Georgia, serif',
                      fontSize: '0.8rem',
                      color: '#7A7060',
                      fontStyle: 'italic',
                      marginTop: '4px',
                    }}>
                      {edu.note}
                    </div>
                  )}
                </div>
                <div style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontSize: '0.72rem',
                  color: '#7A7060',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  marginTop: '4px',
                }}>
                  {edu.dates}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Print button */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-40px' }}
          variants={fadeUp}
        >
          <button
            onClick={() => window.print()}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: '0.8rem',
              fontWeight: 500,
              color: '#7A7060',
              backgroundColor: 'transparent',
              border: '1px solid #E2DCCF',
              borderRadius: '4px',
              padding: '10px 20px',
              cursor: 'pointer',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.borderColor = 'rgba(201,168,76,0.5)'
              el.style.color = '#C9A84C'
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement
              el.style.borderColor = '#E2DCCF'
              el.style.color = '#7A7060'
            }}
          >
            <Printer size={14} />
            Print / Download PDF
          </button>
        </motion.div>
      </div>
    </ChapterSection>
  )
}
