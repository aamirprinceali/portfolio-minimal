import { motion } from 'framer-motion'
import { ArrowRight, MapPin } from 'lucide-react'

// Animation container — staggers children in sequence
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

// Each child fades in and rises from 32px below
const item = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1, y: 0,
    transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Hero() {
  return (
    // Full-height section with parchment background, accounting for nav height
    <section
      id="hero"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        paddingTop: '64px',
        paddingBottom: '80px',
        backgroundColor: '#F9F8F6',
        position: 'relative',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
        {/* Two-column grid: left = name/tagline/CTAs, right = stats (desktop only) */}
        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: '64px',
            alignItems: 'flex-end',
          }}
          variants={container}
          initial="hidden"
          animate="visible"
        >
          {/* ── LEFT COLUMN ── */}
          <div>
            {/* Location eyebrow — small text above the name */}
            <motion.div
              variants={item}
              style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '24px' }}
            >
              <MapPin size={13} color="#6B6B6B" />
              <span style={{ fontSize: '0.8rem', color: '#6B6B6B', letterSpacing: '0.04em' }}>
                Plano, TX &nbsp;·&nbsp; Open to Remote
              </span>
            </motion.div>

            {/* Name — the hero element. Editorial poster style, Cormorant Garamond */}
            <motion.h1
              variants={item}
              style={{
                fontFamily: '"Cormorant Garamond", Georgia, serif',
                fontSize: 'clamp(5rem, 13vw, 10rem)',
                fontWeight: 600,
                color: '#121212',
                lineHeight: 0.88,
                letterSpacing: '-0.02em',
                marginBottom: '32px',
              }}
            >
              Aamir<br />Ali
            </motion.h1>

            {/* Tagline — role label bold, rest is descriptive */}
            <motion.p
              variants={item}
              style={{
                fontSize: 'clamp(1.1rem, 2vw, 1.35rem)',
                color: '#6B6B6B',
                maxWidth: '520px',
                lineHeight: 1.65,
                marginBottom: '40px',
              }}
            >
              <span style={{ color: '#121212', fontWeight: 500 }}>
                Operations &amp; Customer Success Professional
              </span>
              {' '}— I build the systems that make teams move faster. AI is the tool I use to make those systems smarter.
            </motion.p>

            {/* CTA buttons — pill-shaped with hover states */}
            <motion.div
              variants={item}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}
            >
              {/* Primary: View Projects (navy fill) */}
              <a
                href="#projects"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  backgroundColor: '#1E3A5F', color: '#fff',
                  fontSize: '0.875rem', fontWeight: 500,
                  padding: '12px 24px', borderRadius: '999px',
                  textDecoration: 'none',
                  transition: 'background-color 0.2s, transform 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.backgroundColor = '#2A527F'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.backgroundColor = '#1E3A5F'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                View Projects <ArrowRight size={15} />
              </a>

              {/* Secondary: Work With Me (outlined) */}
              <a
                href="/work-with-me"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  backgroundColor: 'transparent', color: '#121212',
                  fontSize: '0.875rem', fontWeight: 500,
                  padding: '11px 24px', borderRadius: '999px',
                  border: '1px solid #E5E4DF',
                  textDecoration: 'none',
                  transition: 'border-color 0.2s, background-color 0.2s, transform 0.15s',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(30,58,95,0.4)'
                  e.currentTarget.style.backgroundColor = '#F0EFEB'
                  e.currentTarget.style.transform = 'translateY(-1px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = '#E5E4DF'
                  e.currentTarget.style.backgroundColor = 'transparent'
                  e.currentTarget.style.transform = 'translateY(0)'
                }}
              >
                Work With Me
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT COLUMN: Stats block (hidden on mobile via .hero-stats class) ── */}
          <motion.div
            variants={item}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '40px',
              textAlign: 'right',
              paddingBottom: '8px',
            }}
            className="hero-stats"
          >
            {[
              { num: '5+', label: 'years in\noperations' },
              { num: '3', label: 'organizations\nbuilt on' },
              { num: '100%', label: 'quality\naudit score' },
            ].map(({ num, label }) => (
              <div key={num}>
                {/* Large display number in navy */}
                <div style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: '3.5rem',
                  fontWeight: 600,
                  color: '#1E3A5F',
                  lineHeight: 1,
                }}>
                  {num}
                </div>
                {/* Descriptive label below the number */}
                <div style={{
                  fontSize: '0.75rem',
                  color: '#6B6B6B',
                  marginTop: '4px',
                  lineHeight: 1.4,
                  whiteSpace: 'pre-line',
                }}>
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator — fades in after main content animates */}
        <motion.div
          style={{ marginTop: '72px', display: 'flex', alignItems: 'center', gap: '12px' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.6 }}
        >
          <div style={{ width: '40px', height: '1px', backgroundColor: '#E5E4DF' }} />
          <span style={{ fontSize: '0.7rem', color: '#6B6B6B', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
            Scroll to explore
          </span>
        </motion.div>
      </div>

      {/* Thin horizontal rule at the very bottom of the hero */}
      <div style={{
        position: 'absolute',
        bottom: 0, left: '24px', right: '24px',
        height: '1px',
        backgroundColor: '#E5E4DF',
      }} />
    </section>
  )
}
