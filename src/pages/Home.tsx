export default function Home() {
  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#FDFCF8',
      fontFamily: '"Cormorant Garamond", Georgia, serif',
    }}>
      <div style={{ textAlign: 'center' }}>
        <h1 style={{ fontSize: '6rem', fontWeight: 600, color: '#C9A84C', letterSpacing: '0.06em' }}>
          AAMIR ALI
        </h1>
        <p style={{ fontFamily: '"Lora", Georgia, serif', fontStyle: 'italic', color: '#7A7060', marginTop: '16px' }}>
          Not a resume. A record.
        </p>
        <p style={{ fontFamily: '"DM Sans", system-ui, sans-serif', fontSize: '0.75rem', color: '#7A7060', marginTop: '32px', letterSpacing: '0.1em' }}>
          Building in progress...
        </p>
      </div>
    </div>
  )
}
