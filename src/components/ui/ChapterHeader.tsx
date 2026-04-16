interface ChapterHeaderProps {
  number: string        // "01"
  chapter: string       // "The Background"
  headline: string      // may contain HTML like "The story<br/>behind the work"
  deck?: string         // optional italic lead sentence
}

export default function ChapterHeader({ number, chapter, headline, deck }: ChapterHeaderProps) {
  return (
    <div style={{ marginBottom: '56px' }}>
      {/* Label row: italic chapter number + rule + uppercase chapter name */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '16px',
        marginBottom: '28px',
      }}>
        <span style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: '0.95rem',
          fontStyle: 'italic',
          color: '#C9A84C',
          flexShrink: 0,
        }}>
          Chapter {number}
        </span>
        <div style={{ flex: 1, height: '1px', backgroundColor: '#E2DCCF' }} />
        <span style={{
          fontFamily: '"DM Sans", system-ui, sans-serif',
          fontSize: '0.62rem',
          fontWeight: 500,
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          color: '#7A7060',
          flexShrink: 0,
        }}>
          {chapter}
        </span>
      </div>

      {/* Display headline */}
      <h2
        style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: 'clamp(2.25rem, 5.5vw, 4.5rem)',
          fontWeight: 600,
          color: '#0F0F0E',
          lineHeight: 1.05,
          letterSpacing: '-0.015em',
        }}
        dangerouslySetInnerHTML={{ __html: headline }}
      />

      {/* Deck — italic lead sentence in Lora */}
      {deck && (
        <p style={{
          marginTop: '20px',
          fontFamily: '"Lora", Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(1rem, 2.2vw, 1.2rem)',
          color: '#7A7060',
          maxWidth: '620px',
          lineHeight: 1.7,
          borderLeft: '2px solid #C9A84C',
          paddingLeft: '20px',
        }}>
          {deck}
        </p>
      )}
    </div>
  )
}
