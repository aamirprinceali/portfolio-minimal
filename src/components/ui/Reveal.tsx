import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface RevealProps {
  children: React.ReactNode
  delay?: number          // seconds, default 0
  className?: string
  direction?: 'up' | 'left' | 'none'  // default 'up'
}

export default function Reveal({
  children,
  delay = 0,
  className = '',
  direction = 'up',
}: RevealProps) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  const revealEasing: [number, number, number, number] = [0.22, 1, 0.36, 1]
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === 'up' ? 24 : 0,
      x: direction === 'left' ? -24 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
        ease: revealEasing,
      },
    },
  }

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={variants}
      className={className}
    >
      {children}
    </motion.div>
  )
}
