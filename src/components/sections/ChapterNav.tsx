import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

const chapters = [
  { num: '01', title: 'The Background', subtitle: 'Where it started — the full story', href: '#chapter-background' },
  { num: '02', title: 'The Toolkit', subtitle: 'The AI and automation stack in daily use', href: '#chapter-toolkit' },
  { num: '03', title: 'The Work', subtitle: 'Projects built from scratch', href: '#chapter-work' },
  { num: '04', title: 'The Record', subtitle: 'The complete career history', href: '#chapter-record' },
  { num: '05', title: 'Work With Me', subtitle: 'What we can build together', href: '#chapter-wwm' },
]

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
}

const navEasing: [number, number, number, number] = [0.22, 1, 0.36, 1]
const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: navEasing } },
}

export default function ChapterNav() {
  return (
    <section
      id="chapter-nav"
      style={{
        minHeight: '100vh',
        backgroundColor: '#FDFCF8',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 24px',
      }}
    >
      <div style={{ maxWidth: '900px', margin: '0 auto', width: '100%' }}>
        <motion.div variants={container} initial="hidden" animate="visible">

          {/* Header block */}
          <motion.div variants={item} style={{ marginBottom: '64px' }}>
            {/* Edition label */}
            <div style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 500,
              letterSpacing: '0.22em',
              textTransform: 'uppercase',
              color: '#C9A84C',
              marginBottom: '20px',
            }}>
              Profile Edition · 2026
            </div>
            {/* Main heading */}
            <h1 style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: 'clamp(2.5rem, 6vw, 5rem)',
              fontWeight: 600,
              color: '#0F0F0E',
              lineHeight: 0.95,
              letterSpacing: '-0.01em',
            }}>
              In This Issue
            </h1>
          </motion.div>

          {/* Chapter list */}
          <div>
            {chapters.map(({ num, title, subtitle, href }) => (
              <motion.a
                key={num}
                href={href}
                variants={item}
                whileHover={{ x: 10, transition: { duration: 0.2 } }}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '24px',
                  padding: '22px 0',
                  borderTop: '1px solid #E2DCCF',
                  textDecoration: 'none',
                  color: 'inherit',
                  cursor: 'pointer',
                }}
              >
                {/* Chapter number */}
                <span style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '1rem',
                  fontStyle: 'italic',
                  color: '#C9A84C',
                  minWidth: '28px',
                  flexShrink: 0,
                }}>
                  {num}
                </span>

                {/* Title + subtitle */}
                <div style={{ flex: 1 }}>
                  <div style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: 'clamp(1.2rem, 3vw, 1.875rem)',
                    fontWeight: 600,
                    color: '#0F0F0E',
                    lineHeight: 1.1,
                  }}>
                    {title}
                  </div>
                  <div style={{
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontSize: '0.78rem',
                    color: '#7A7060',
                    marginTop: '5px',
                    letterSpacing: '0.01em',
                  }}>
                    {subtitle}
                  </div>
                </div>

                {/* Arrow */}
                <ArrowRight size={15} color="#C9A84C" style={{ flexShrink: 0, opacity: 0.7 }} />
              </motion.a>
            ))}

            {/* Closing border */}
            <motion.div variants={item} style={{ borderTop: '1px solid #E2DCCF' }} />
          </div>

          {/* Scroll hint */}
          <motion.div
            variants={item}
            style={{
              marginTop: '48px',
              display: 'flex',
              alignItems: 'center',
              gap: '14px',
            }}
          >
            <div style={{ width: '28px', height: '1px', backgroundColor: '#E2DCCF' }} />
            <span style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: '0.65rem',
              color: '#7A7060',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
            }}>
              Scroll to begin — or select a chapter above
            </span>
          </motion.div>

        </motion.div>
      </div>
    </section>
  )
}
