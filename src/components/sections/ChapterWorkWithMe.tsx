import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Workflow, Globe, Bot, ClipboardList, Wrench, PenLine,
  FileText, BookOpen, Mic, Mail, Phone, Link2, Code2,
} from 'lucide-react'
import ChapterSection from '../ui/ChapterSection'
import ChapterHeader from '../ui/ChapterHeader'

const services = [
  { Icon: Workflow, title: 'Automation Setup & Integration', tags: 'n8n, Zapier, Make, Notion' },
  { Icon: Globe, title: 'Website Design & Development', tags: 'HTML/CSS/JS, Responsive, Fast Load' },
  { Icon: Bot, title: 'AI Training & Consulting', tags: 'ChatGPT, Claude, Gemini, Prompt Eng.' },
  { Icon: ClipboardList, title: 'Operations Consulting', tags: 'SOPs, Process Mapping, Team Workflows' },
  { Icon: Wrench, title: 'Custom Tool Building', tags: 'Internal Tools, Dashboards, Automation' },
  { Icon: PenLine, title: 'Content Creation', tags: 'Social Media, Copy, Documentation, Blotato' },
  { Icon: FileText, title: 'Resume Writing', tags: 'Resume, CV, LinkedIn' },
  { Icon: BookOpen, title: 'SOPs & Training Guides', tags: 'SOPs, Onboarding, Training Docs' },
  { Icon: Mic, title: 'Script Writing', tags: 'Sales Scripts, Call Cadences, Outreach' },
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
    desc: 'I build, consult, or document — clearly and efficiently. You stay in the loop throughout the whole process.',
  },
  {
    number: '04',
    title: 'You own it',
    desc: 'Everything I build or document is yours. I walk you through it and make sure you can run it independently.',
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

export default function ChapterWorkWithMe() {
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormStatus('sending')

    try {
      const form = e.currentTarget
      const data = new FormData(form)

      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: data,
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
    color: '#0F0F0E',
    backgroundColor: '#FDFCF8',
    border: '1px solid #E2DCCF',
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
    color: '#7A7060',
    marginBottom: '8px',
  }

  return (
    <ChapterSection id="chapter-work-with-me" backgroundColor="#F5F2EA">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '96px 24px 80px' }}>
        <ChapterHeader
          number="05"
          chapter="Work With Me"
          headline="Let's build<br/>something useful."
          deck="I take on a small number of freelance projects — automation, ops consulting, website builds, and AI integration."
        />

        {/* Services grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
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
            marginBottom: '24px',
          }}>
            What I Do
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
            gap: '12px',
          }}>
            {services.map(({ Icon, title, tags }) => (
              <motion.div
                key={title}
                variants={item}
                style={{
                  backgroundColor: '#FDFCF8',
                  border: '1px solid #E2DCCF',
                  borderRadius: '4px',
                  padding: '20px',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '10px',
                  transition: 'border-color 0.2s, box-shadow 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = 'rgba(201,168,76,0.5)'
                  el.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)'
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLDivElement
                  el.style.borderColor = '#E2DCCF'
                  el.style.boxShadow = 'none'
                }}
              >
                <Icon size={18} color="#C9A84C" />
                <div style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: '#0F0F0E',
                  lineHeight: 1.2,
                }}>
                  {title}
                </div>
                <div style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  fontSize: '0.7rem',
                  color: '#7A7060',
                  lineHeight: 1.5,
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
            color: '#7A7060',
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
              <motion.div
                key={number}
                variants={item}
                style={{
                  padding: '28px 24px',
                  borderLeft: i === 0 ? '1px solid #E2DCCF' : 'none',
                  borderRight: '1px solid #E2DCCF',
                  borderTop: '1px solid #E2DCCF',
                  borderBottom: '1px solid #E2DCCF',
                  backgroundColor: '#FDFCF8',
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
                  color: '#0F0F0E',
                  marginBottom: '10px',
                  lineHeight: 1.2,
                }}>
                  {title}
                </div>
                <p style={{
                  fontFamily: '"Lora", Georgia, serif',
                  fontSize: '0.83rem',
                  color: '#7A7060',
                  lineHeight: 1.65,
                  margin: 0,
                }}>
                  {desc}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact section — two column: info + form */}
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
              color: '#7A7060',
              marginBottom: '24px',
            }}>
              Get In Touch
            </div>

            <p style={{
              fontFamily: '"Lora", Georgia, serif',
              fontSize: '0.9rem',
              color: '#7A7060',
              lineHeight: 1.7,
              marginBottom: '28px',
            }}>
              Have a project in mind? Drop me a line — I respond within 24 hours.
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
                    color: '#3D3730',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#3D3730')}
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
                backgroundColor: '#FDFCF8',
                border: '1px solid rgba(201,168,76,0.3)',
                borderRadius: '4px',
                textAlign: 'center',
              }}>
                <div style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '1.6rem',
                  fontWeight: 600,
                  color: '#0F0F0E',
                  marginBottom: '12px',
                }}>
                  Message received.
                </div>
                <p style={{
                  fontFamily: '"Lora", Georgia, serif',
                  fontSize: '0.9rem',
                  color: '#7A7060',
                  lineHeight: 1.7,
                }}>
                  Thanks for reaching out — I'll be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {/* Web3Forms hidden fields */}
                <input type="hidden" name="access_key" value="61182368-6cdc-4631-9ac8-be2a5293d520" />
                <input type="hidden" name="subject" value="New message from portfolio" />
                <input type="checkbox" name="botcheck" style={{ display: 'none' }} />

                <div>
                  <label htmlFor="name" style={labelStyle}>Name</label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={e => setFormData(p => ({ ...p, name: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#E2DCCF')}
                  />
                </div>

                <div>
                  <label htmlFor="email" style={labelStyle}>Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={e => setFormData(p => ({ ...p, email: e.target.value }))}
                    style={inputStyle}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#E2DCCF')}
                  />
                </div>

                <div>
                  <label htmlFor="message" style={labelStyle}>Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    placeholder="Tell me what you're working on..."
                    value={formData.message}
                    onChange={e => setFormData(p => ({ ...p, message: e.target.value }))}
                    style={{ ...inputStyle, resize: 'vertical' }}
                    onFocus={e => (e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#E2DCCF')}
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
                    color: '#FDFCF8',
                    backgroundColor: formStatus === 'sending' ? '#7A7060' : '#0F0F0E',
                    border: 'none',
                    borderRadius: '4px',
                    padding: '14px 28px',
                    cursor: formStatus === 'sending' ? 'not-allowed' : 'pointer',
                    transition: 'background-color 0.2s',
                    alignSelf: 'flex-start',
                  }}
                  onMouseEnter={e => {
                    if (formStatus !== 'sending') {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#C9A84C'
                    }
                  }}
                  onMouseLeave={e => {
                    if (formStatus !== 'sending') {
                      (e.currentTarget as HTMLButtonElement).style.backgroundColor = '#0F0F0E'
                    }
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
