import { motion } from 'framer-motion'
import ChapterSection from '../ui/ChapterSection'
import ChapterHeader from '../ui/ChapterHeader'
import { HeartHandshake, Settings2, Bot, BarChart3 } from 'lucide-react'

const bioText = [
  "I've always been drawn to work that combines people, problem-solving, and impact. I started in recovery services, managing a sober living home and helping residents navigate major life transitions. That experience gave me a strong foundation in leadership, empathy, and accountability — qualities that still shape how I work today.",
  "Since then, I've grown into operations, enrollment, and customer-facing leadership roles where I've worked closely with individuals, families, and cross-functional teams to improve experiences and drive better outcomes. I'm at my best where service and systems overlap — improving workflows, solving bottlenecks, and making complex processes feel simpler and more human.",
  "I'm also deeply interested in AI and automation, and I've spent the past few years exploring ways to use modern tools to work more efficiently, reduce friction, and build smarter systems. I enjoy learning quickly, experimenting with new technology, and finding practical ways to make work better.",
  "Outside of work, I enjoy spending time with my dog Casper, lifting weights, and working on personal projects that challenge me to keep learning and building.",
]

const skills = [
  'Healthcare Operations', 'Behavioral Health', 'Addiction Recovery',
  'Enrollment Management', 'Team Leadership', 'Process & SOP Design',
  'AI & Automation', 'Customer Success', 'Content Creation', 'Website Building',
]

const highlights = [
  { Icon: HeartHandshake, title: 'Healthcare & Recovery Background', desc: '5+ years working across behavioral health, sober living, and enrollment ops — from frontline case management to leading teams.' },
  { Icon: Settings2, title: 'Systems & Process Builder', desc: 'I build SOPs, workflows, and operational frameworks at fast-growing startups where nothing exists yet and everything needs to scale.' },
  { Icon: Bot, title: 'AI as a Force Multiplier', desc: 'I use AI tools daily to eliminate busywork, automate repetitive tasks, and make operational decisions faster and smarter.' },
  { Icon: BarChart3, title: 'Custom Tools & Dashboards', desc: 'I build custom dashboards, internal tools, and automations that give teams real visibility into their operations.' },
]

const easing: [number, number, number, number] = [0.22, 1, 0.36, 1]
const container = { hidden: {}, visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } } }
const item = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easing } } }

export default function ChapterBackground() {
  return (
    <ChapterSection id="chapter-background" backgroundColor="#FDFCF8">
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '96px 24px 80px' }}>
        <ChapterHeader
          number="01"
          chapter="The Background"
          headline="People first.<br/>Systems second."
          deck="A career built on the hardest rooms, the most human problems, and the belief that good systems make better lives."
        />

        {/* Two-column magazine layout */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 340px',
            gap: '64px',
            alignItems: 'start',
          }}
        >
          {/* Left: article body */}
          <div>
            {bioText.map((para, i) => (
              <motion.p
                key={i}
                variants={item}
                style={{
                  fontFamily: '"Lora", Georgia, serif',
                  fontSize: '1.05rem',
                  lineHeight: 1.8,
                  color: '#3D3730',
                  marginBottom: i < bioText.length - 1 ? '24px' : 0,
                }}
              >
                {para}
              </motion.p>
            ))}

            {/* Highlight cards — 2x2 grid below bio */}
            <motion.div
              variants={item}
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                marginTop: '48px',
              }}
            >
              {highlights.map(({ Icon, title, desc }) => (
                <div
                  key={title}
                  className="gold-glow"
                  style={{
                    padding: '20px',
                    backgroundColor: '#F5F2EA',
                    border: '1px solid #E2DCCF',
                    borderRadius: '4px',
                    cursor: 'default',
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = 'rgba(201,168,76,0.5)'
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLDivElement).style.borderColor = '#E2DCCF'
                  }}
                >
                  <Icon size={18} color="#C9A84C" style={{ marginBottom: '10px' }} />
                  <div style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontSize: '0.82rem',
                    fontWeight: 600,
                    color: '#0F0F0E',
                    marginBottom: '6px',
                  }}>
                    {title}
                  </div>
                  <div style={{
                    fontFamily: '"Lora", Georgia, serif',
                    fontSize: '0.82rem',
                    color: '#7A7060',
                    lineHeight: 1.6,
                  }}>
                    {desc}
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right: pull quote + skills sidebar */}
          <motion.div variants={item} style={{ position: 'sticky', top: '120px' }}>
            {/* Pull quote */}
            <div style={{
              borderLeft: '3px solid #C9A84C',
              paddingLeft: '24px',
              marginBottom: '48px',
            }}>
              <p style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontStyle: 'italic',
                fontSize: '1.45rem',
                fontWeight: 500,
                color: '#0F0F0E',
                lineHeight: 1.4,
              }}>
                "I lead with empathy, take accountability seriously, and genuinely care about the people I work with."
              </p>
            </div>

            {/* Skills sidebar */}
            <div>
              <div style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 600,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: '#7A7060',
                marginBottom: '14px',
              }}>
                Skills &amp; Expertise
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {skills.map(skill => (
                  <span key={skill} style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontSize: '0.75rem',
                    color: '#3D3730',
                    backgroundColor: '#F5F2EA',
                    border: '1px solid #E2DCCF',
                    borderRadius: '2px',
                    padding: '4px 10px',
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </ChapterSection>
  )
}
