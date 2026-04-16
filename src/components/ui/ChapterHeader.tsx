import { motion } from 'framer-motion'

interface ChapterHeaderProps {
  number: string        // "01"
  chapter: string       // "The Background"
  headline: string      // may contain HTML like "The story<br/>behind the work"
  deck?: string         // optional italic lead sentence
  dark?: boolean        // true for dark background sections
}

export default function ChapterHeader({ number, chapter, headline, deck, dark = false }: ChapterHeaderProps) {
  const textColor = dark ? '#F5F0E8' : '#0F0F0E'
  const mutedColor = dark ? 'rgba(245,240,232,0.45)' : '#7A7060'
  const ruleColor = dark ? 'rgba(201,168,76,0.25)' : '#E2DCCF'
  const deckBorderColor = dark ? 'rgba(201,168,76,0.5)' : '#C9A84C'
  const deckTextColor = dark ? 'rgba(245,240,232,0.6)' : '#7A7060'

  return (
    <div style={{ marginBottom: '64px' }}>
      {/* Label row */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        <span style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '0.95rem',
          fontStyle: 'italic',
          color: '#C9A84C',
          flexShrink: 0,
        }}>
          Chapter {number}
        </span>
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] as any, delay: 0.1 }}
          style={{ flex: 1, height: '1px', backgroundColor: ruleColor, transformOrigin: 'left' }}
        />
        <span style={{
          fontFamily: '"DM Sans", system-ui, sans-serif',
          fontSize: '0.6rem',
          fontWeight: 500,
          letterSpacing: '0.22em',
          textTransform: 'uppercase' as const,
          color: mutedColor,
          flexShrink: 0,
        }}>
          {chapter}
        </span>
      </motion.div>

      {/* Headline — clipPath wipe reveal */}
      <div style={{ overflow: 'hidden' }}>
        <motion.h2
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          whileInView={{ clipPath: 'inset(0 0% 0 0)' }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] as any, delay: 0.15 }}
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(3rem, 7vw, 6.5rem)',
            fontWeight: 600,
            color: textColor,
            lineHeight: 1.0,
            letterSpacing: '-0.02em',
          }}
          dangerouslySetInnerHTML={{ __html: headline }}
        />
      </div>

      {/* Deck */}
      {deck && (
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          style={{
            marginTop: '24px',
            fontFamily: '"Lora", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: deckTextColor,
            maxWidth: '580px',
            lineHeight: 1.7,
            borderLeft: `2px solid ${deckBorderColor}`,
            paddingLeft: '20px',
          }}
        >
          {deck}
        </motion.p>
      )}
    </div>
  )
}
