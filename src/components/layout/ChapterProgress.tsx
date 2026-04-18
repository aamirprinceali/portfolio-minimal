import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const chapters = [
  { id: 'chapter-background', label: 'Background' },
  { id: 'chapter-toolkit', label: 'The Craft' },
  { id: 'chapter-work', label: 'The Portfolio' },
  { id: 'chapter-record', label: 'The Record' },
  { id: 'chapter-work-with-me', label: 'Work With Me' },
]

export default function ChapterProgress({ visible }: { visible: boolean }) {
  const [active, setActive] = useState<string | null>(null)
  const [hovered, setHovered] = useState<string | null>(null)

  useEffect(() => {
    if (!visible) return

    const observers: IntersectionObserver[] = []

    chapters.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { threshold: 0.35 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(obs => obs.disconnect())
  }, [visible])

  if (!visible) return null

  return (
    <div
      style={{
        position: 'fixed',
        right: '18px',
        top: '50%',
        transform: 'translateY(-50%)',
        zIndex: 200,
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        alignItems: 'center',
      }}
    >
      {chapters.map(({ id, label }) => {
        const isActive = active === id
        const isHovered = hovered === id

        return (
          <div
            key={id}
            style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}
            onMouseEnter={() => setHovered(id)}
            onMouseLeave={() => setHovered(null)}
          >
            {/* Chapter label — slides in on hover */}
            <AnimatePresence>
              {isHovered && (
                <motion.a
                  href={`#${id}`}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 8 }}
                  transition={{ duration: 0.18 }}
                  style={{
                    position: 'absolute',
                    right: '18px',
                    whiteSpace: 'nowrap',
                    fontFamily: '"DM Sans", system-ui, sans-serif',
                    fontSize: '0.65rem',
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: isActive ? '#C9A84C' : 'rgba(201,168,76,0.55)',
                    textDecoration: 'none',
                  }}
                >
                  {label}
                </motion.a>
              )}
            </AnimatePresence>

            {/* Dot */}
            <a href={`#${id}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '16px', height: '16px', textDecoration: 'none' }}>
              <motion.div
                animate={{
                  width: isActive ? 8 : 5,
                  height: isActive ? 8 : 5,
                  backgroundColor: isActive ? '#C9A84C' : 'rgba(201,168,76,0.0)',
                  boxShadow: isActive ? '0 0 10px rgba(201,168,76,0.6), 0 0 24px rgba(201,168,76,0.2)' : 'none',
                  borderColor: isActive ? '#C9A84C' : 'rgba(201,168,76,0.4)',
                }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                style={{
                  borderRadius: '50%',
                  border: '1px solid rgba(201,168,76,0.4)',
                }}
              />
            </a>
          </div>
        )
      })}
    </div>
  )
}
