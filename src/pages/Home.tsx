import { useState } from 'react'
import BookCover from '../components/sections/BookCover'
import ChapterNav from '../components/sections/ChapterNav'

export default function Home() {
  const [bookOpen, setBookOpen] = useState(false)

  return (
    <div style={{ backgroundColor: '#FDFCF8' }}>
      <BookCover onOpen={() => setBookOpen(true)} />

      {/* All chapters — revealed after cover opens */}
      <div
        style={{
          opacity: bookOpen ? 1 : 0,
          transform: bookOpen ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          pointerEvents: bookOpen ? 'auto' : 'none',
        }}
      >
        <ChapterNav />
        {/* Chapter 01–05 added in subsequent tasks */}
      </div>
    </div>
  )
}
