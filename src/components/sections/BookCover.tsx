import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

interface BookCoverProps {
  onOpen: () => void
}

export default function BookCover({ onOpen }: BookCoverProps) {
  const [isOpening, setIsOpening] = useState(false)
  const [isDone, setIsDone] = useState(false)

  const triggerOpen = useCallback(() => {
    if (isOpening || isDone) return
    setIsOpening(true)
    // Tell parent the book is open after animation completes
    setTimeout(() => {
      setIsDone(true)
      onOpen()
    }, 1300)
  }, [isOpening, isDone, onOpen])

  useEffect(() => {
    // Scroll (wheel) triggers open
    const onWheel = (e: WheelEvent) => {
      if (e.deltaY > 15) triggerOpen()
    }
    // Touch swipe up triggers open
    let touchStartY = 0
    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY }
    const onTouchEnd = (e: TouchEvent) => {
      if (touchStartY - e.changedTouches[0].clientY > 40) triggerOpen()
    }
    // Keyboard: space, enter, arrow down
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowDown', ' ', 'Enter'].includes(e.key)) {
        e.preventDefault()
        triggerOpen()
      }
    }

    window.addEventListener('wheel', onWheel, { passive: true })
    window.addEventListener('touchstart', onTouchStart, { passive: true })
    window.addEventListener('touchend', onTouchEnd, { passive: true })
    window.addEventListener('keydown', onKey)
    return () => {
      window.removeEventListener('wheel', onWheel)
      window.removeEventListener('touchstart', onTouchStart)
      window.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('keydown', onKey)
    }
  }, [triggerOpen])

  // Panel slide animation — easing feels like physical momentum
  const panelVariants = {
    closed: { x: '0%' },
    open: (dir: number) => ({
      x: `${dir * 105}%`,
      transition: {
        duration: 1.25,
        ease: [0.76, 0, 0.24, 1],
      },
    }),
  }

  // Cover content fades out as panels slide
  const contentVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: { duration: 0.35, ease: 'easeIn' } },
  }

  if (isDone) return null

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 500,
        backgroundColor: '#0F0F0E',
        cursor: 'pointer',
        overflow: 'hidden',
      }}
      onClick={triggerOpen}
      aria-label="Open portfolio"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && triggerOpen()}
    >
      {/* ── Left cover panel ── */}
      <motion.div
        custom={-1}
        variants={panelVariants}
        initial="closed"
        animate={isOpening ? 'open' : 'closed'}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '50%',
          height: '100%',
          backgroundColor: '#0F0F0E',
          zIndex: 20,
          // Subtle inner shadow to suggest cover depth
          boxShadow: 'inset -8px 0 24px rgba(0,0,0,0.4)',
        }}
      />

      {/* ── Right cover panel ── */}
      <motion.div
        custom={1}
        variants={panelVariants}
        initial="closed"
        animate={isOpening ? 'open' : 'closed'}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: '50%',
          height: '100%',
          backgroundColor: '#0F0F0E',
          zIndex: 20,
          boxShadow: 'inset 8px 0 24px rgba(0,0,0,0.4)',
        }}
      />

      {/* ── Spine (thin gold center line) ── */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          left: '50%',
          width: '1px',
          backgroundColor: 'rgba(201,168,76,0.25)',
          zIndex: 25,
          transform: 'translateX(-50%)',
        }}
      />

      {/* ── Cover content (centered, fades as it opens) ── */}
      <motion.div
        variants={contentVariants}
        initial="visible"
        animate={isOpening ? 'hidden' : 'visible'}
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 30,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
          padding: '48px',
          textAlign: 'center',
        }}
      >
        {/* Issue label — very top */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: '0.65rem',
            fontWeight: 400,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.5)',
            marginBottom: '40px',
          }}
        >
          Profile Edition · 2026
        </motion.div>

        {/* Top gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: '80px',
            height: '1px',
            backgroundColor: '#C9A84C',
            marginBottom: '32px',
            transformOrigin: 'center',
          }}
        />

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.65, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: 'clamp(3.5rem, 10vw, 8rem)',
            fontWeight: 600,
            color: '#C9A84C',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            lineHeight: 0.88,
          }}
        >
          Aamir<br />Ali
        </motion.h1>

        {/* Bottom gold rule */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: '80px',
            height: '1px',
            backgroundColor: '#C9A84C',
            marginTop: '32px',
            marginBottom: '28px',
            transformOrigin: 'center',
          }}
        />

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.8 }}
          style={{
            fontFamily: '"Lora", Georgia, serif',
            fontStyle: 'italic',
            fontSize: 'clamp(0.875rem, 2vw, 1.15rem)',
            color: 'rgba(201,168,76,0.7)',
            letterSpacing: '0.06em',
          }}
        >
          Not a resume. A record.
        </motion.p>

        {/* Scroll/click prompt — bounces */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          style={{ marginTop: '72px' }}
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut', delay: 1.8 }}
            style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: '0.65rem',
              fontWeight: 300,
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'rgba(201,168,76,0.4)',
            }}
          >
            Scroll or tap to open
          </motion.div>
        </motion.div>
      </motion.div>
    </div>
  )
}
