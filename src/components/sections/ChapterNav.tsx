import { useState } from 'react'
import { motion } from 'framer-motion'

const chapters = [
  { num: '01', title: 'The Background', href: '#chapter-background' },
  { num: '02', title: 'The Craft', href: '#chapter-toolkit' },
  { num: '03', title: 'The Portfolio', href: '#chapter-work' },
  { num: '04', title: 'The Record', href: '#chapter-record' },
  { num: '05', title: 'Work With Me', href: '#chapter-work-with-me' },
]

export default function ChapterNav() {
  const [nameHovered, setNameHovered] = useState(false)

  return (
    <section
      id="chapter-nav"
      style={{
        minHeight: '100vh',
        backgroundColor: '#0F0F0E',
        display: 'flex',
        alignItems: 'center',
        padding: '80px 24px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle radial gradient for depth on dark bg */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `radial-gradient(ellipse at 20% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)`,
      }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}>

          {/* LEFT — name + identity */}
          <div>
            {/* Edition label */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
              style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontSize: '0.62rem',
                fontWeight: 400,
                letterSpacing: '0.24em',
                textTransform: 'uppercase' as const,
                color: 'rgba(201,168,76,0.5)',
                marginBottom: '32px',
              }}
            >
              Profile Edition · 2026
            </motion.div>

            {/* Name — foil shimmer on hover */}
            <div
              onMouseEnter={() => setNameHovered(true)}
              onMouseLeave={() => setNameHovered(false)}
              style={{ cursor: 'default', marginBottom: '40px' }}
            >
              <div style={{ overflow: 'hidden', marginBottom: '4px' }}>
                <motion.div
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] as any, delay: 0.1 }}
                >
                  <h1
                    className={nameHovered ? 'foil-shimmer' : ''}
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: 'clamp(4.5rem, 10vw, 9rem)',
                      fontWeight: 600,
                      color: nameHovered ? undefined : '#C9A84C',
                      lineHeight: 0.88,
                      letterSpacing: '-0.01em',
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    Aamir
                  </h1>
                </motion.div>
              </div>
              <div style={{ overflow: 'hidden' }}>
                <motion.div
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] as any, delay: 0.22 }}
                >
                  <h1
                    className={nameHovered ? 'foil-shimmer' : ''}
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: 'clamp(4.5rem, 10vw, 9rem)',
                      fontWeight: 600,
                      color: nameHovered ? undefined : '#C9A84C',
                      lineHeight: 0.88,
                      letterSpacing: '-0.01em',
                      transition: 'opacity 0.3s ease',
                    }}
                  >
                    Ali
                  </h1>
                </motion.div>
              </div>
            </div>

            {/* Gold rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as any, delay: 0.5 }}
              style={{
                height: '1px',
                backgroundColor: 'rgba(201,168,76,0.35)',
                marginBottom: '28px',
                transformOrigin: 'left',
              }}
            />

            {/* Role + location */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.65 }}
            >
              <div style={{
                fontFamily: '"Lora", Georgia, serif',
                fontStyle: 'italic',
                fontSize: '1.05rem',
                color: 'rgba(245,240,232,0.65)',
                marginBottom: '6px',
              }}>
                Operations & Customer Success Professional
              </div>
              <div style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontSize: '0.78rem',
                color: 'rgba(245,240,232,0.35)',
                letterSpacing: '0.06em',
              }}>
                Plano, TX · Open to Remote
              </div>
            </motion.div>
          </div>

          {/* RIGHT — chapter list */}
          <div>
            {/* Thin top rule */}
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any, delay: 0.3 }}
              style={{
                height: '1px',
                backgroundColor: 'rgba(201,168,76,0.2)',
                marginBottom: '0',
                transformOrigin: 'left',
              }}
            />

            {chapters.map(({ num, title, href }, i) => (
              <div key={num} style={{ overflow: 'hidden' }}>
                <motion.a
                  href={href}
                  initial={{ clipPath: 'inset(0 100% 0 0)' }}
                  whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.1, delay: 0.4 + i * 0.1, ease: [0.16, 1, 0.3, 1] as any }}
                  whileHover={{ x: 8 }}
                  style={{
                    display: 'flex',
                    alignItems: 'baseline',
                    gap: '20px',
                    padding: '20px 0',
                    borderBottom: '1px solid rgba(201,168,76,0.12)',
                    textDecoration: 'none',
                    cursor: 'pointer',
                    transition: 'gap 0.2s ease',
                  }}
                >
                  <span style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontStyle: 'italic',
                    fontSize: '0.9rem',
                    color: 'rgba(201,168,76,0.6)',
                    minWidth: '24px',
                    flexShrink: 0,
                  }}>
                    {num}
                  </span>
                  <span
                    style={{
                      fontFamily: '"Cormorant Garamond", Georgia, serif',
                      fontSize: 'clamp(1.3rem, 2.8vw, 2rem)',
                      fontWeight: 600,
                      color: '#F5F0E8',
                      lineHeight: 1.1,
                      transition: 'color 0.2s ease',
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLSpanElement).style.color = '#C9A84C'}
                    onMouseLeave={e => (e.currentTarget as HTMLSpanElement).style.color = '#F5F0E8'}
                  >
                    {title}
                  </span>
                </motion.a>
              </div>
            ))}

            {/* Scroll hint */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 1.2, duration: 0.6 }}
              style={{
                marginTop: '32px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
              }}
            >
              <div style={{ width: '24px', height: '1px', backgroundColor: 'rgba(201,168,76,0.3)' }} />
              <span style={{
                fontFamily: '"DM Sans", system-ui, sans-serif',
                fontSize: '0.6rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase' as const,
                color: 'rgba(245,240,232,0.25)',
              }}>
                Scroll to read · or select a chapter
              </span>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
