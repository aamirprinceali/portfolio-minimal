import { motion } from 'framer-motion'
import { Brain, Sparkles, Gem, Shuffle, Share2, Presentation, BookOpen, Palette } from 'lucide-react'
import ChapterSection from '../ui/ChapterSection'
import ChapterHeader from '../ui/ChapterHeader'

const tools = [
  { Icon: Brain, name: 'ChatGPT', version: 'v4.0', category: 'LLM', desc: 'My go-to for drafting SOPs, brainstorming, rewriting communications, and research acceleration.' },
  { Icon: Sparkles, name: 'Claude', version: 'v3.7', category: 'LLM', desc: 'Long-form analysis, document synthesis, complex reasoning, and building things like this site.' },
  { Icon: Gem, name: 'Gemini', version: 'v2.0', category: 'LLM', desc: 'Google Workspace integration, data lookups, and quick research embedded in my daily tools.' },
  { Icon: Shuffle, name: 'n8n', version: 'v1.0', category: 'Automation', desc: 'Open-source workflow automation — connecting apps, triggering actions, and removing manual steps.' },
  { Icon: Share2, name: 'Blotato', version: 'latest', category: 'Content', desc: 'AI-powered content repurposing and social media automation across platforms.' },
  { Icon: Presentation, name: 'Gamma', version: 'v2.1', category: 'Productivity', desc: 'AI-generated presentations and docs that actually look good without hours of design work.' },
  { Icon: BookOpen, name: 'Notion', version: 'v3.0', category: 'Ops', desc: 'My operational home base — knowledge management, project tracking, team wikis, and SOPs.' },
  { Icon: Palette, name: 'Canva', version: 'v4.0', category: 'Design', desc: 'Quick design work for presentations, social content, and visual assets without a designer.' },
]

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.07, delayChildren: 0.15 } } }
const item = { hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: easing } } }

export default function ChapterToolkit() {
  return (
    <ChapterSection id="chapter-toolkit" backgroundColor="#F5F2EA">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '96px 24px 80px' }}>
        <ChapterHeader
          number="02"
          chapter="The Toolkit"
          headline="AI &amp; Automation<br/>in my daily stack."
          deck="These aren't tools I've heard of — they're in my active workflow, running every day."
        />

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
          {tools.map(({ Icon, name, version, category, desc }) => (
            <motion.div
              key={name}
              variants={item}
              style={{
                backgroundColor: '#FDFCF8',
                border: '1px solid #E2DCCF',
                borderRadius: '4px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                transition: 'border-color 0.2s, box-shadow 0.2s, transform 0.2s',
                cursor: 'default',
              }}
              whileHover={{
                y: -3,
                transition: { duration: 0.2 },
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = 'rgba(201,168,76,0.5)'
                el.style.boxShadow = '0 4px 20px rgba(0,0,0,0.07)'
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLDivElement
                el.style.borderColor = '#E2DCCF'
                el.style.boxShadow = 'none'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Icon size={20} color="#C9A84C" />
                <span style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '0.7rem', color: '#7A7060', fontVariantNumeric: 'tabular-nums' }}>{version}</span>
              </div>
              <div>
                <div style={{ fontFamily: '"Cormorant Garamond", Georgia, serif', fontSize: '1.35rem', fontWeight: 600, color: '#0F0F0E', lineHeight: 1.1, marginBottom: '6px' }}>{name}</div>
                <p style={{ fontFamily: '"Lora", Georgia, serif', fontSize: '0.82rem', color: '#7A7060', lineHeight: 1.65 }}>{desc}</p>
              </div>
              <div>
                <span style={{
                  fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '0.65rem', fontWeight: 500,
                  letterSpacing: '0.12em', textTransform: 'uppercase' as const,
                  color: '#C9A84C', borderBottom: '1px solid rgba(201,168,76,0.3)',
                  paddingBottom: '1px',
                }}>
                  {category}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </ChapterSection>
  )
}
