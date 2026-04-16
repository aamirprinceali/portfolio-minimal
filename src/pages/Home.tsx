import { useState } from 'react'
import BookCover from '../components/sections/BookCover'

export default function Home() {
  const [bookOpen, setBookOpen] = useState(false)

  return (
    <div style={{ backgroundColor: '#FDFCF8', minHeight: '100vh' }}>
      <BookCover onOpen={() => setBookOpen(true)} />

      {/* Content revealed after cover opens */}
      <div
        style={{
          opacity: bookOpen ? 1 : 0,
          transform: bookOpen ? 'none' : 'translateY(16px)',
          transition: 'opacity 0.7s ease 0.2s, transform 0.7s ease 0.2s',
          pointerEvents: bookOpen ? 'auto' : 'none',
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          color: '#C9A84C',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '0.7rem', fontFamily: '"DM Sans", system-ui, sans-serif', letterSpacing: '0.18em', textTransform: 'uppercase', color: '#7A7060', marginBottom: '16px' }}>
            In This Issue
          </div>
          <h2 style={{ fontSize: '3rem', fontWeight: 600 }}>
            Chapter Nav — Coming Next
          </h2>
        </div>
      </div>
    </div>
  )
}
