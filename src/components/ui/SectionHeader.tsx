import Reveal from './Reveal'

interface SectionHeaderProps {
  label: string       // e.g. "01 — About"
  title: string       // may contain <br/> — rendered with dangerouslySetInnerHTML
  subtitle?: string   // optional paragraph
}

export default function SectionHeader({ label, title, subtitle }: SectionHeaderProps) {
  return (
    <div style={{ marginBottom: '56px' }}>
      <Reveal>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
          <span style={{
            fontSize: '0.7rem',
            fontWeight: 500,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: '#6B6B6B',
            whiteSpace: 'nowrap',
          }}>
            {label}
          </span>
          <div style={{ flex: 1, height: '1px', backgroundColor: '#E5E4DF' }} />
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <h2
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
            fontWeight: 600,
            color: '#121212',
            lineHeight: 1.05,
            letterSpacing: '-0.01em',
          }}
          dangerouslySetInnerHTML={{ __html: title }}
        />
      </Reveal>

      {subtitle && (
        <Reveal delay={0.2}>
          <p style={{
            marginTop: '16px',
            fontSize: '1.125rem',
            color: '#6B6B6B',
            maxWidth: '640px',
            lineHeight: 1.7,
          }}>
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  )
}
