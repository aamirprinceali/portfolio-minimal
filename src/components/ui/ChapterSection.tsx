import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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
  const inView = useInView(ref, { once: true, margin: '-5%' })

  return (
    <section
      ref={ref}
      id={id}
      style={{
        minHeight: '100vh',
        backgroundColor,
        position: 'relative',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* Page wipe overlay — sweeps left to right then exits */}
      <motion.div
        initial={{ clipPath: 'inset(0 0% 0 0)' }}
        animate={inView ? { clipPath: 'inset(0 100% 0 0)' } : { clipPath: 'inset(0 0% 0 0)' }}
        transition={{ duration: 1.0, ease: [0.76, 0, 0.24, 1] as any, delay: 0.05 }}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundColor: backgroundColor === '#0F0F0E' ? '#1A1510' : '#0F0F0E',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      />

      {/* Content — fades in after wipe */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        style={{ position: 'relative', zIndex: 1 }}
      >
        {children}
      </motion.div>
    </section>
  )
}
