import { useState, useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

interface BookCoverProps {
  onOpen: () => void
}

// Each letter animates in with a slight stamp effect
const letterVariant = {
  hidden: { opacity: 0, y: 10, scale: 0.88 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.28, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] } },
}

function NameLine({ word, delayStart }: { word: string; delayStart: number }) {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{ visible: { transition: { staggerChildren: 0.055, delayChildren: delayStart } } }}
      style={{ display: 'flex', justifyContent: 'center', gap: '0.01em' }}
    >
      {word.split('').map((letter, i) => (
        <motion.span
          key={i}
          variants={letterVariant}
          className="foil-shimmer"
          style={{ display: 'inline-block' }}
        >
          {letter}
        </motion.span>
      ))}
    </motion.div>
  )
}

export default function BookCover({ onOpen }: BookCoverProps) {
  const [isOpening, setIsOpening] = useState(false)
  const [isDone, setIsDone] = useState(false)

  // Typewriter state for role title
  const roleString = 'Operations & Customer Success Professional'
  const [roleText, setRoleText] = useState('')

  // Start typewriter after name animation finishes (~2s in)
  useEffect(() => {
    const start = setTimeout(() => {
      let i = 0
      const interval = setInterval(() => {
        i++
        setRoleText(roleString.slice(0, i))
        if (i >= roleString.length) clearInterval(interval)
      }, 38)
      return () => clearInterval(interval)
    }, 2050)
    return () => clearTimeout(start)
  }, [])

  const triggerOpen = useCallback(() => {
    if (isOpening || isDone) return
    setIsOpening(true)
    setTimeout(() => {
      setIsDone(true)
      onOpen()
    }, 1300)
  }, [isOpening, isDone, onOpen])

  useEffect(() => {
    const onWheel = (e: WheelEvent) => { if (e.deltaY > 15) triggerOpen() }
    let touchStartY = 0
    const onTouchStart = (e: TouchEvent) => { touchStartY = e.touches[0].clientY }
    const onTouchEnd = (e: TouchEvent) => { if (touchStartY - e.changedTouches[0].clientY > 40) triggerOpen() }
    const onKey = (e: KeyboardEvent) => {
      if (['ArrowDown', ' ', 'Enter'].includes(e.key)) { e.preventDefault(); triggerOpen() }
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

  const panelEase: [number, number, number, number] = [0.76, 0, 0.24, 1]
  const panelVariants = {
    closed: { x: '0%' },
    open: (dir: number) => ({
      x: `${dir * 105}%`,
      transition: { duration: 1.25, ease: panelEase },
    }),
  }

  const contentVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: { duration: 0.35, ease: 'easeIn' as const } },
  }

  if (isDone) return null

  return (
    <div
      style={{
        position: 'fixed', inset: 0, zIndex: 500,
        backgroundColor: '#0F0F0E',
        cursor: 'pointer', overflow: 'hidden',
      }}
      onClick={triggerOpen}
      aria-label="Open portfolio"
      role="button"
      tabIndex={0}
      onKeyPress={(e) => e.key === 'Enter' && triggerOpen()}
    >
      {/* Left cover panel */}
      <motion.div
        custom={-1} variants={panelVariants} initial="closed"
        animate={isOpening ? 'open' : 'closed'}
        style={{
          position: 'absolute', top: 0, left: 0, width: '50%', height: '100%',
          backgroundColor: '#0F0F0E', zIndex: 20,
          boxShadow: 'inset -8px 0 24px rgba(0,0,0,0.4)',
        }}
      />

      {/* Right cover panel */}
      <motion.div
        custom={1} variants={panelVariants} initial="closed"
        animate={isOpening ? 'open' : 'closed'}
        style={{
          position: 'absolute', top: 0, right: 0, width: '50%', height: '100%',
          backgroundColor: '#0F0F0E', zIndex: 20,
          boxShadow: 'inset 8px 0 24px rgba(0,0,0,0.4)',
        }}
      />

      {/* Spine */}
      <div style={{
        position: 'absolute', top: 0, bottom: 0, left: '50%',
        width: '1px', backgroundColor: 'rgba(201,168,76,0.25)',
        zIndex: 25, transform: 'translateX(-50%)',
      }} />

      {/* Cover content */}
      <motion.div
        variants={contentVariants} initial="visible"
        animate={isOpening ? 'hidden' : 'visible'}
        style={{
          position: 'absolute', inset: 0, zIndex: 30,
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', pointerEvents: 'none',
          padding: '48px', textAlign: 'center',
        }}
      >
        {/* Issue label */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          style={{
            fontFamily: '"DM Sans", system-ui, sans-serif',
            fontSize: '0.65rem', fontWeight: 400,
            letterSpacing: '0.22em', textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.5)', marginBottom: '40px',
          }}
        >
          Profile Edition · 2026
        </motion.div>

        {/* Top gold rule */}
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{
            width: '80px', height: '1px', backgroundColor: '#C9A84C',
            marginBottom: '32px', transformOrigin: 'center',
          }}
        />

        {/* Name — staggered letter stamp */}
        <h1 style={{
          fontFamily: '"Cormorant Garamond", Georgia, serif',
          fontSize: 'clamp(3.5rem, 10vw, 8rem)',
          fontWeight: 600,
          letterSpacing: '0.1em',
          textTransform: 'uppercase',
          lineHeight: 0.92,
          margin: 0,
        }}>
          {/* "Aamir" stamps in at 0.65s */}
          <NameLine word="Aamir" delayStart={0.65} />
          {/* "Ali" starts slightly after last letter of Aamir: 0.65 + 5*0.055 = 0.925 */}
          <NameLine word="Ali" delayStart={0.93} />
        </h1>

        {/* Gold underline draws left → right after name completes */}
        {/* Last letter of Ali: 0.93 + 2*0.055 = 1.04s → animation done ~1.04+0.28 = 1.32s */}
        <motion.div
          initial={{ scaleX: 0 }} animate={{ scaleX: 1 }}
          transition={{ delay: 1.4, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          style={{
            height: '1px', backgroundColor: '#C9A84C',
            transformOrigin: 'left center',
            width: 'min(380px, 72vw)',
            marginTop: '22px',
          }}
        />

        {/* Role title — types itself after underline draws */}
        <div style={{
          marginTop: '20px',
          fontFamily: '"Lora", Georgia, serif',
          fontStyle: 'italic',
          fontSize: 'clamp(0.78rem, 1.6vw, 0.96rem)',
          color: 'rgba(201,168,76,0.72)',
          letterSpacing: '0.04em',
          minHeight: '1.4em',
        }}>
          {roleText}
          {/* Blinking cursor while typing */}
          {roleText.length > 0 && roleText.length < roleString.length && (
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ repeat: Infinity, duration: 0.7 }}
              style={{ marginLeft: '1px', fontStyle: 'normal' }}
            >
              |
            </motion.span>
          )}
        </div>

        {/* Scroll/click prompt */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 3.0, duration: 0.6 }}
          style={{ marginTop: '64px' }}
        >
          <motion.div
            animate={{ y: [0, 7, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut', delay: 3.2 }}
            style={{
              fontFamily: '"DM Sans", system-ui, sans-serif',
              fontSize: '0.65rem', fontWeight: 300,
              letterSpacing: '0.2em', textTransform: 'uppercase',
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
