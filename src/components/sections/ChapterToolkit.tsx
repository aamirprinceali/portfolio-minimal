import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Brain, Sparkles, Gem, Shuffle, Share2, Presentation, BookOpen, Palette,
  Terminal, Code2, Cloud, Zap, Users, Building2, Database, MessageSquare,
} from 'lucide-react'
import ChapterSection from '../ui/ChapterSection'
import ChapterHeader from '../ui/ChapterHeader'

const tools = [
  {
    Icon: Brain, name: 'ChatGPT', version: 'v4.0', category: 'LLM',
    desc: 'My go-to for drafting SOPs, brainstorming, rewriting communications, and research acceleration.',
    BackIcon: Terminal, backName: 'Codex', backVersion: 'latest', backCategory: 'AI Dev',
    backDesc: 'AI-powered coding assistant — I build and ship apps through conversation, without writing every line from scratch.',
  },
  {
    Icon: Sparkles, name: 'Claude', version: 'Sonnet', category: 'LLM',
    desc: 'Long-form analysis, document synthesis, complex reasoning, and building things like this site.',
    BackIcon: Code2, backName: 'Claude Code', backVersion: 'CLI', backCategory: 'AI Dev',
    backDesc: 'My primary development environment. I build, debug, and ship full applications through conversation.',
  },
  {
    Icon: Gem, name: 'Gemini', version: 'v2.0', category: 'LLM',
    desc: 'Google Workspace integration, data lookups, and quick research embedded in my daily tools.',
    BackIcon: Cloud, backName: 'Google Cloud', backVersion: 'GCP', backCategory: 'Cloud',
    backDesc: 'OAuth credentials, API setup, and cloud configuration — the infrastructure layer behind my automation workflows.',
  },
  {
    Icon: Shuffle, name: 'n8n', version: 'v1.x', category: 'Automation',
    desc: 'Open-source workflow automation — connecting apps, triggering actions, and removing manual steps.',
    BackIcon: Zap, backName: 'Zapier', backVersion: 'latest', backCategory: 'Automation',
    backDesc: 'No-code automation for quick connections between tools — I use whatever fits the job, not just what\'s popular.',
  },
  {
    Icon: Share2, name: 'Blotato', version: 'latest', category: 'Content',
    desc: 'AI-powered content repurposing and social media automation across platforms.',
    BackIcon: Users, backName: 'HubSpot', backVersion: 'CRM', backCategory: 'CRM',
    backDesc: 'Lead tracking, pipeline management, email sequences — I\'ve set up and run HubSpot for outreach operations.',
  },
  {
    Icon: Presentation, name: 'Gamma', version: 'v2.1', category: 'Productivity',
    desc: 'AI-generated presentations and docs that actually look good without hours of design work.',
    BackIcon: Building2, backName: 'Zoho CRM', backVersion: 'latest', backCategory: 'CRM',
    backDesc: 'Full CRM setup and management — contacts, pipeline automation, and reporting dashboards built from scratch.',
  },
  {
    Icon: BookOpen, name: 'Notion', version: 'v3.0', category: 'Ops',
    desc: 'My operational home base — knowledge management, project tracking, team wikis, and SOPs.',
    BackIcon: Database, backName: 'Supabase', backVersion: 'v2.0', backCategory: 'Database',
    backDesc: 'Postgres database and auth for apps I build — turns a prototype into a real, data-driven tool.',
  },
  {
    Icon: Palette, name: 'Canva', version: 'v4.0', category: 'Design',
    desc: 'Quick design work for presentations, social content, and visual assets without a designer.',
    BackIcon: MessageSquare, backName: 'Twilio', backVersion: 'latest', backCategory: 'Comms API',
    backDesc: 'Programmatic SMS and messaging — I\'ve used Twilio to build automated notification and reminder systems.',
  },
]

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easing } } }

// Shared face base styles
const faceBase: React.CSSProperties = {
  position: 'absolute',
  top: 0, right: 0, bottom: 0, left: 0,
  backfaceVisibility: 'hidden',
  borderRadius: '4px',
  padding: '24px',
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
}

const versionLabel: React.CSSProperties = {
  fontFamily: '"DM Sans", system-ui, sans-serif',
  fontSize: '0.7rem',
  color: 'rgba(245,240,232,0.3)',
  fontVariantNumeric: 'tabular-nums',
}

const cardName: React.CSSProperties = {
  fontFamily: '"Cormorant Garamond", Georgia, serif',
  fontSize: '1.35rem',
  fontWeight: 600,
  color: '#F5F0E8',
  lineHeight: 1.1,
  marginBottom: '6px',
}

const cardDesc: React.CSSProperties = {
  fontFamily: '"Lora", Georgia, serif',
  fontSize: '0.82rem',
  color: 'rgba(245,240,232,0.55)',
  lineHeight: 1.65,
}

const categoryTag: React.CSSProperties = {
  fontFamily: '"DM Sans", system-ui, sans-serif',
  fontSize: '0.65rem',
  fontWeight: 500,
  letterSpacing: '0.12em',
  textTransform: 'uppercase' as const,
  color: 'rgba(201,168,76,0.85)',
  borderBottom: '1px solid rgba(201,168,76,0.3)',
  paddingBottom: '1px',
}

export default function ChapterToolkit() {
  const [flipped, setFlipped] = useState<Record<string, boolean>>({})

  const toggleFlip = (name: string) => {
    setFlipped(prev => ({ ...prev, [name]: !prev[name] }))
  }

  return (
    <ChapterSection id="chapter-toolkit" backgroundColor="#0F0F0E">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '96px 24px 80px' }}>
        <ChapterHeader
          number="02"
          chapter="The Stack"
          headline="AI &amp; automation,<br/>built into everything."
          deck="These aren't tools I've read about — they're part of my daily stack. The list below is just a starting point."
          dark={true}
        />

        {/* Flip hint */}
        <div style={{
          fontFamily: '"DM Sans", system-ui, sans-serif',
          fontSize: '0.65rem',
          fontWeight: 500,
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'rgba(201,168,76,0.45)',
          textAlign: 'center',
          marginBottom: '24px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '12px',
        }}>
          <span style={{ flex: 1, height: '1px', backgroundColor: 'rgba(201,168,76,0.1)' }} />
          click any card to reveal more of the stack
          <span style={{ flex: 1, height: '1px', backgroundColor: 'rgba(201,168,76,0.1)' }} />
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
            gap: '16px',
          }}
        >
          {tools.map(({ Icon, name, version, category, desc, BackIcon, backName, backVersion, backCategory, backDesc }) => {
            const isFlipped = !!flipped[name]
            return (
              <motion.div
                key={name}
                variants={item}
                onClick={() => toggleFlip(name)}
                style={{
                  perspective: '1000px',
                  cursor: 'pointer',
                  minHeight: '215px',
                  userSelect: 'none',
                }}
              >
                {/* Inner rotating container */}
                <div style={{
                  position: 'relative',
                  width: '100%',
                  height: '100%',
                  minHeight: '215px',
                  transformStyle: 'preserve-3d',
                  transition: 'transform 0.65s cubic-bezier(0.22, 1, 0.36, 1)',
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                }}>

                  {/* ── Front face ── */}
                  <div style={{
                    ...faceBase,
                    backgroundColor: 'rgba(255,255,255,0.04)',
                    border: '1px solid rgba(201,168,76,0.12)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <Icon size={20} color="#C9A84C" />
                      <span style={versionLabel}>{version}</span>
                    </div>
                    <div>
                      <div style={cardName}>{name}</div>
                      <p style={cardDesc}>{desc}</p>
                    </div>
                    <div>
                      <span style={categoryTag}>{category}</span>
                    </div>
                  </div>

                  {/* ── Back face ── */}
                  <div style={{
                    ...faceBase,
                    transform: 'rotateY(180deg)',
                    backgroundColor: 'rgba(201,168,76,0.06)',
                    border: '1px solid rgba(201,168,76,0.28)',
                  }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <BackIcon size={20} color="#C9A84C" />
                      <span style={versionLabel}>{backVersion}</span>
                    </div>
                    <div>
                      <div style={cardName}>{backName}</div>
                      <p style={cardDesc}>{backDesc}</p>
                    </div>
                    <div>
                      <span style={categoryTag}>{backCategory}</span>
                    </div>
                  </div>

                </div>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Footer line */}
        <div style={{
          marginTop: '36px',
          textAlign: 'center',
          fontFamily: '"Lora", Georgia, serif',
          fontStyle: 'italic',
          fontSize: '0.85rem',
          color: 'rgba(245,240,232,0.3)',
          letterSpacing: '0.02em',
        }}>
          These are just some of the tools in rotation — the stack keeps growing.
        </div>
      </div>
    </ChapterSection>
  )
}
