import { useState } from 'react'
import BookCover from '../components/sections/BookCover'
import ChapterNav from '../components/sections/ChapterNav'
import ChapterBackground from '../components/sections/ChapterBackground'
import ChapterToolkit from '../components/sections/ChapterToolkit'
import ChapterWork from '../components/sections/ChapterWork'
import ChapterRecord from '../components/sections/ChapterRecord'
import ChapterWorkWithMe from '../components/sections/ChapterWorkWithMe'

export default function Home() {
  const [bookOpen, setBookOpen] = useState(false)

  return (
    <div style={{ backgroundColor: '#FDFCF8' }}>
      <BookCover onOpen={() => setBookOpen(true)} />

      <div
        style={{
          opacity: bookOpen ? 1 : 0,
          transform: bookOpen ? 'none' : 'translateY(20px)',
          transition: 'opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s',
          pointerEvents: bookOpen ? 'auto' : 'none',
        }}
      >
        <ChapterNav />
        <ChapterBackground />
        <ChapterToolkit />
        <ChapterWork />
        <ChapterRecord />
        <ChapterWorkWithMe />
      </div>
    </div>
  )
}
