import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Workflow, Search, Bot, ClipboardList, Wrench, BarChart3,
  FileText, Globe, TrendingUp, Mail, Phone, Link2, Code2,
  CheckCircle2,
} from 'lucide-react'
import ChapterSection from '../ui/ChapterSection'
import ChapterHeader from '../ui/ChapterHeader'
import Tilt3D from '../ui/Tilt3D'

const operationsServices = [
  {
    Icon: ClipboardList,
    title: 'Operations Audit',
    desc: 'I review how your business actually runs — team workflows, handoffs, tools, and bottlenecks — and give you a clear picture of what to fix first.',
    tags: 'Process mapping · SOP gaps · Team efficiency',
  },
  {
    Icon: Workflow,
    title: 'Workflow & Automation Setup',
    desc: 'I build automations that eliminate repetitive manual work — connecting your tools and creating systems that run without you.',
    tags: 'n8n · Zapier · Make · Notion · Airtable',
  },
  {
    Icon: Bot,
    title: 'AI Integration Consulting',
    desc: 'I help teams identify where AI saves real time, then set it up — from prompt workflows to custom tools that fit how your team already works.',
    tags: 'ChatGPT · Claude · Gemini · Prompt Engineering',
  },
  {
    Icon: Wrench,
    title: 'Custom Internal Tools & Dashboards',
    desc: 'If you\'re tracking things in spreadsheets or managing teams through scattered messages, I build the tool that brings it all into one place.',
    tags: 'Custom dashboards · Internal tools · Data visibility',
  },
  {
    Icon: FileText,
    title: 'SOPs & Team Documentation',
    desc: 'I write the SOPs, onboarding guides, and training docs that let your team operate consistently — even when you\'re not in the room.',
    tags: 'Standard operating procedures · Onboarding · Training',
  },
]

const marketingServices = [
  {
    Icon: Search,
    title: 'SEO Audit & Technical Optimization',
    desc: 'I review your site and identify everything hurting your Google ranking — missing metadata, slow load times, bad structure — then fix it.',
    tags: 'Meta tags · Schema markup · Core Web Vitals',
  },
  {
    Icon: Globe,
    title: 'Website Design & Development',
    desc: 'I build clean, fast, SEO-ready websites that convert visitors into leads — using modern tools and following Google\'s best practices from day one.',
    tags: 'React · Next.js · Responsive · Fast load',
  },
  {
    Icon: TrendingUp,
    title: 'Google & Meta Ads Management',
    desc: 'I run and manage paid ad campaigns on Google and Facebook/Instagram — targeting the right people, at the right time, for the right budget.',
    tags: 'Google Ads · Meta Ads · Campaign setup · Reporting',
  },
  {
    Icon: BarChart3,
    title: 'Content & SEO Strategy',
    desc: 'I build a keyword-targeted content plan and write the articles, pages, and case studies that earn Google rankings over time.',
    tags: 'Keyword research · Blog content · Local SEO',
  },
]

const steps = [
  {
    number: '01',
    title: 'Reach out',
    desc: 'Send a message, email, or book a call. No long forms or commitments — just describe what you\'re working on.',
  },
  {
    number: '02',
    title: 'We talk it through',
    desc: 'A quick call or async conversation to understand the problem, the goal, and what success actually looks like.',
  },
  {
    number: '03',
    title: 'I do the work',
    desc: 'I build, consult, or document — clearly and on schedule. You stay in the loop throughout.',
  },
  {
    number: '04',
    title: 'You own it',
    desc: 'Everything I build is yours. I walk you through it and make sure you can run it independently going forward.',
  },
]

const contactLinks = [
  { Icon: Mail, label: 'aamirali1211@gmail.com', href: 'mailto:aamirali1211@gmail.com' },
  { Icon: Phone, label: '(972) 214-4380', href: 'tel:+19722144380' },
  { Icon: Link2, label: 'linkedin.com/in/aamirnali', href: 'https://linkedin.com/in/aamirnali' },
  { Icon: Code2, label: 'github.com/aamirprinceali', href: 'https://github.com/aamirprinceali' },
]

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easing } } }
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easing } } }

type FormStatus = 'idle' | 'sending' | 'success' | 'error'

const pillarHeadingStyle: React.CSSProperties = {
  fontFamily: '"DM Sans", system-ui, sans-serif',
  fontSize: '0.62rem',
  fontWeight: 600,
  letterSpacing: '0.2em',
  textTransform: 'uppercase',
  color: 'rgba(245,240,232,0.4)',
  marginBottom: '6px',
}

const pillarTitleStyle: React.CSSProperties = {
  fontFamily: '"Cormorant Garamond", Georgia, serif',
  fontSize: '1.65rem',
  fontWeight: 600,
  color: '#F5F0E8',
  lineHeight: 1.1,
  marginBottom: '8px',
}

const pillarDescStyle: React.CSSProperties = {
  fontFamily: '"Lora", Georgia, serif',
  fontStyle: 'italic',
  fontSize: '0.88rem',
  color: 'rgba(245,240,232,0.5)',
  lineHeight: 1.65,
  marginBottom: '28px',
  maxWidth: '440px',
}

export default function ChapterWorkWithMe() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(e.currentTarget),
      })
      if (res.ok) {
        setFormStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const inputStyle: React.CSSProperties = {
    width: '100%',
    fontFamily: '"Lora", Georgia, serif',
    fontSize: '0.9rem',
    color: '#F5F0E8',
    backgroundColor: 'rgba(255,255,255,0.06)',
    border: '1px solid rgba(201,168,76,0.2)',
    borderRadius: '4px',
    padding: '12px 16px',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  }

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontFamily: '"DM Sans", system-ui, sans-serif',
    fontSize: '0.72rem',
    fontWeight: 600,
    letterSpacing: '0.1em',
    textTransform: 'uppercase',
    color: 'rgba(245,240,232,0.55)',
    marginBottom: '8px',
  }

  return (
    <ChapterSection id="chapter-work-with-me" backgroundColor="#0F0F0E">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '96px 24px 80px' }}>

        <ChapterHeader
          number="05"
          chapter="Work With Me"
          headline="Fix what's broken inside.<br/>Build what brings people in."
          deck="Freelance operations consulting and SEO services for small businesses in the Dallas–Fort Worth area and remote. I solve two problems most businesses have at the same time."
          dark={true}
        />

        {/* Availability badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: easing }}
          style={{ marginBottom: '72px' }}
        >
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '10px',
            backgroundColor: 'rgba(201,168,76,0.08)',
            border: '1px solid rgba(201,168,76,0.25)',
            borderRadius: '4px',
            padding: '10px 18px',
          }}>
            <span style={{
              display: 'inline-block',
              width: '7px',
              height: '7px',
              borderRadius: '50%',
              backgroundColor: '#4ade80',
              boxShadow: '0 0 0 3px rgba(74,222,128,0.2)',
            }} />
            <span style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: '0.78rem',
              fontWeight: 500,
              color: 'rgba(245,240,232,0.75)',
              letterSpacing: '0.02em',
            }}>
              Currently available for freelance clients — Plano / DFW area &amp; remote
            </span>
          </div>
        </motion.div>

        {/* The two-problem pitch */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={container}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '2px',
            marginBottom: '80px',
            border: '1px solid rgba(201,168,76,0.15)',
            borderRadius: '4px',
            overflow: 'hidden',
          }}
        >
          {/* Left: the internal problem */}
          <motion.div
            variants={item}
            style={{
              padding: '40px 36px',
              backgroundColor: 'rgba(255,255,255,0.03)',
              borderRight: '1px solid rgba(201,168,76,0.12)',
            }}
          >
            <div style={pillarHeadingStyle}>Problem One</div>
            <div style={pillarTitleStyle}>Your operations are holding you back.</div>
            <p style={pillarDescStyle}>
              Missed handoffs. No SOPs. Team doing everything manually. Work that should take 10 minutes takes 2 hours. I audit how your business actually runs and build the systems, automations, and documentation that fix it.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'Operations audit — find every bottleneck',
                'Workflow automation (n8n, Zapier, Make)',
                'AI tool integration for your team',
                'SOPs, onboarding guides, training docs',
                'Custom dashboards and internal tools',
              ].map(point => (
                <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={14} color="#C9A84C" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontSize: '0.8rem',
                    color: 'rgba(245,240,232,0.6)',
                    lineHeight: 1.5,
                  }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: the external problem */}
          <motion.div
            variants={item}
            style={{
              padding: '40px 36px',
              backgroundColor: 'rgba(201,168,76,0.04)',
            }}
          >
            <div style={pillarHeadingStyle}>Problem Two</div>
            <div style={pillarTitleStyle}>Nobody can find you online.</div>
            <p style={pillarDescStyle}>
              Your website exists but Google doesn't know about it. No meta tags, no structure, no content strategy. You're invisible to the exact people looking for what you offer. I fix the technical foundation and drive real traffic — organic and paid.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                'SEO audit — find every ranking gap',
                'Technical SEO (meta, schema, speed)',
                'Content strategy and keyword targeting',
                'Google Ads and Meta Ads management',
                'Website builds, SEO-ready from day one',
              ].map(point => (
                <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                  <CheckCircle2 size={14} color="#C9A84C" style={{ marginTop: '3px', flexShrink: 0 }} />
                  <span style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontSize: '0.8rem',
                    color: 'rgba(245,240,232,0.6)',
                    lineHeight: 1.5,
                  }}>
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Why both — the positioning statement */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: easing }}
          style={{
            borderLeft: '3px solid #C9A84C',
            paddingLeft: '32px',
            marginBottom: '80px',
            maxWidth: '700px',
          }}
        >
          <p style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontStyle: 'italic',
            fontSize: '1.45rem',
            fontWeight: 500,
            color: '#F5F0E8',
            lineHeight: 1.5,
            margin: 0,
          }}>
            "Most businesses have the same two problems: things are chaotic on the inside, and nobody's finding them on the outside. I'm one person who can fix both — which means fewer vendors, faster results, and someone who understands the whole picture."
          </p>
        </motion.div>

        {/* Services — Operations pillar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          style={{ marginBottom: '56px' }}
        >
          <div style={{ marginBottom: '20px' }}>
            <div style={pillarHeadingStyle}>Pillar One</div>
            <div style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '1.3rem',
              fontWeight: 600,
              color: '#F5F0E8',
            }}>
              Operations Consulting &amp; Automation
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
            gap: '10px',
          }}>
            {operationsServices.map(({ Icon, title, desc, tags }) => (
              <motion.div
                key={title}
                variants={item}
                style={{
                  backgroundColor: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(201,168,76,0.12)',
                  borderRadius: '4px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  cursor: 'default',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(201,168,76,0.35)'
                  el.style.boxShadow = '0 4px 32px rgba(201,168,76,0.1)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(201,168,76,0.12)'
                  el.style.boxShadow = 'none'
                }}
              >
                <Icon size={16} color="#C9A84C" />
                <div style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#F5F0E8',
                  lineHeight: 1.2,
                }}>
                  {title}
                </div>
                <p style={{
                  fontFamily: '"Lora", Georgia, serif',
                  fontSize: '0.78rem',
                  color: 'rgba(245,240,232,0.5)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {desc}
                </p>
                <div style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontSize: '0.68rem',
                  color: 'rgba(201,168,76,0.6)',
                  marginTop: '4px',
                }}>
                  {tags}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Services — SEO & Marketing pillar */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          variants={container}
          style={{ marginBottom: '80px' }}
        >
          <div style={{ marginBottom: '20px' }}>
            <div style={pillarHeadingStyle}>Pillar Two</div>
            <div style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: '1.3rem',
              fontWeight: 600,
              color: '#F5F0E8',
            }}>
              SEO &amp; Digital Marketing
            </div>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))',
            gap: '10px',
          }}>
            {marketingServices.map(({ Icon, title, desc, tags }) => (
              <motion.div
                key={title}
                variants={item}
                style={{
                  backgroundColor: 'rgba(201,168,76,0.04)',
                  border: '1px solid rgba(201,168,76,0.14)',
                  borderRadius: '4px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '8px',
                  cursor: 'default',
                  transition: 'border-color 0.25s ease, box-shadow 0.25s ease',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(201,168,76,0.4)'
                  el.style.boxShadow = '0 4px 32px rgba(201,168,76,0.12)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(201,168,76,0.14)'
                  el.style.boxShadow = 'none'
                }}
              >
                <Icon size={16} color="#C9A84C" />
                <div style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '1.05rem',
                  fontWeight: 600,
                  color: '#F5F0E8',
                  lineHeight: 1.2,
                }}>
                  {title}
                </div>
                <p style={{
                  fontFamily: '"Lora", Georgia, serif',
                  fontSize: '0.78rem',
                  color: 'rgba(245,240,232,0.5)',
                  lineHeight: 1.6,
                  margin: 0,
                }}>
                  {desc}
                </p>
                <div style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontSize: '0.68rem',
                  color: 'rgba(201,168,76,0.6)',
                  marginTop: '4px',
                }}>
                  {tags}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Process steps */}
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
            color: 'rgba(245,240,232,0.4)',
            marginBottom: '24px',
          }}>
            How It Works
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '0',
          }}>
            {steps.map(({ number, title, desc }, i) => (
              <motion.div key={number} variants={item}>
                <Tilt3D
                  intensity={5}
                  style={{
                    padding: '28px 24px',
                    borderLeft: i === 0 ? '1px solid rgba(201,168,76,0.15)' : 'none',
                    borderRight: '1px solid rgba(201,168,76,0.15)',
                    borderTop: '1px solid rgba(201,168,76,0.15)',
                    borderBottom: '1px solid rgba(201,168,76,0.15)',
                    backgroundColor: 'rgba(255,255,255,0.03)',
                    transition: 'border-color 0.3s ease, box-shadow 0.3s ease',
                    cursor: 'default',
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.32)'
                    e.currentTarget.style.boxShadow = '0 6px 32px rgba(201,168,76,0.1), inset 0 0 0 1px rgba(201,168,76,0.12)'
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.borderColor = 'rgba(201,168,76,0.15)'
                    e.currentTarget.style.boxShadow = 'none'
                  }}
                >
                  <div style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: '2rem',
                    fontWeight: 500,
                    color: '#C9A84C',
                    lineHeight: 1,
                    marginBottom: '12px',
                  }}>
                    {number}
                  </div>
                  <div style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: '#F5F0E8',
                    marginBottom: '10px',
                    lineHeight: 1.2,
                  }}>
                    {title}
                  </div>
                  <p style={{
                    fontFamily: '"Lora", Georgia, serif',
                    fontSize: '0.83rem',
                    color: 'rgba(245,240,232,0.55)',
                    lineHeight: 1.65,
                    margin: 0,
                  }}>
                    {desc}
                  </p>
                </Tilt3D>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact section */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
          variants={container}
          style={{
            display: 'grid',
            gridTemplateColumns: '280px 1fr',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          {/* Left: contact info */}
          <motion.div variants={fadeUp}>
            <div style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: '0.62rem',
              fontWeight: 600,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(245,240,232,0.4)',
              marginBottom: '24px',
            }}>
              Start the Conversation
            </div>

            <p style={{
              fontFamily: '"Lora", Georgia, serif',
              fontSize: '0.9rem',
              color: 'rgba(245,240,232,0.55)',
              lineHeight: 1.7,
              marginBottom: '28px',
            }}>
              Whether you need an operations audit, an SEO fix, or both — reach out and I'll respond within 24 hours. No long sales process. Just a real conversation about your business.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {contactLinks.map(({ Icon, label, href }) => (
                <a
                  key={href}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    textDecoration: 'none',
                    color: 'rgba(245,240,232,0.6)',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(245,240,232,0.6)')}
                >
                  <Icon size={16} color="currentColor" />
                  <span style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontSize: '0.82rem',
                  }}>
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right: contact form */}
          <motion.div variants={fadeUp}>
            {formStatus === 'success' ? (
              <div style={{
                padding: '40px',
                backgroundColor: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '4px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  color: '#F5F0E8',
                  marginBottom: '12px',
                }}>
                  Message received.
                </div>
                <p style={{
                  fontFamily: '"Lora", Georgia, serif',
                  fontSize: '0.9rem',
                  color: 'rgba(245,240,232,0.55)',
                  lineHeight: 1.7,
                }}>
                  Thanks for reaching out — I'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <input type="hidden" name="access_key" value="61182368-6cdc-4631-9ac8-be2a5293d520" />
                <input type="hidden" name="subject" value="New inquiry from portfolio — Work With Me" />
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                <div>
                  <label htmlFor="name" style={labelStyle}>Name</label>
                  <input
                    id="name" name="name" type="text" required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)')}
                  />
                </div>

                <div>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input
                    id="email" name="email" type="email" required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)')}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>What are you working on?</label>
                  <textarea
                    id="message" name="message" required rows={6}
                    placeholder="Tell me about your business and what you're trying to solve — operations, SEO, ads, or all of it..."
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)')}
                    onBlur={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.2)')}
                  />
                </div>

                {formStatus === 'error' && (
                  <p style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontSize: '0.8rem',
                    color: '#c0392b',
                  }}>
                    Something went wrong. Please try again or email me directly.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    letterSpacing: '0.06em',
                    color: '#0F0F0E',
                    backgroundColor: formStatus === 'sending' ? 'rgba(201,168,76,0.5)' : '#C9A84C',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '14px 28px',
                    cursor: formStatus === 'sending' ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.2s',
                    alignSelf: 'flex-start',
                  }}
                  onMouseEnter={e => {
                    if (formStatus !== 'sending')
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#A88A2E'
                  }}
                  onMouseLeave={e => {
                    if (formStatus !== 'sending')
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#C9A84C'
                  }}
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </motion.div>
      </div>
    </ChapterSection>
  )
}
