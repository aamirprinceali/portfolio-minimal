import ChapterNav from '../components/sections/ChapterNav'
import ChapterBackground from '../components/sections/ChapterBackground'
import ChapterToolkit from '../components/sections/ChapterToolkit'
import ChapterWork from '../components/sections/ChapterWork'
import ChapterRecord from '../components/sections/ChapterRecord'
import ChapterWorkWithMe from '../components/sections/ChapterWorkWithMe'
import ChapterProgress from '../components/layout/ChapterProgress'

export default function Home() {
  // Book cover intro removed 2026-08-29: content renders immediately (professional, no novelty gate)
  const bookOpen = true

  return (
    <div style={{ backgroundColor: '#FDFCF8' }}>
      <ChapterProgress visible={bookOpen} />

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
