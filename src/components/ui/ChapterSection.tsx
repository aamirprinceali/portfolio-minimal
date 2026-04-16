import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const sectionEasing: [number, number, number, number] = [0.22, 1, 0.36, 1]

interface ChapterSectionProps {
  id: string
  children: React.ReactNode
  backgroundColor?: string
  style?: React.CSSProperties
}

export default function ChapterSection({
  id,
  children,
  backgroundColor = '#FDFCF8',
  style = {},
}: ChapterSectionProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: false, margin: '-8%' })

  return (
    <motion.section
      ref={ref}
      id={id}
      style={{
        minHeight: '100vh',
        backgroundColor,
        position: 'relative',
        overflow: 'hidden',
        transformStyle: 'preserve-3d',
        ...style,
      }}
      initial={{ opacity: 0, y: 48, rotateX: -5 }}
      animate={
        inView
          ? { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.9, ease: sectionEasing } }
          : { opacity: 0, y: 48, rotateX: -5, transition: { duration: 0.4 } }
      }
      // perspective must be set on parent — use wrapper div trick
    >
      <div style={{ perspective: '1400px' }}>
        {children}
      </div>
    </motion.section>
  )
}
