import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only on non-touch/pointer devices
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    let ringX = 0, ringY = 0
    let mouseX = 0, mouseY = 0

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
      dot.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`
    }

    const animate = () => {
      ringX += (mouseX - ringX) * 0.12
      ringY += (mouseY - ringY) * 0.12
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`
      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    const raf = requestAnimationFrame(animate)
    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(raf)
    }
  }, [])

  // Interactive glow — ring glows gold when hovering links/buttons/cards
  useEffect(() => {
    if (window.matchMedia('(hover: none)').matches) return
    const ring = ringRef.current
    if (!ring) return

    const onMove = (e: MouseEvent) => {
      const el = document.elementFromPoint(e.clientX, e.clientY)
      const isInteractive = el?.closest('a, button, [role="button"], [style*="cursor: pointer"], [style*="cursor:pointer"]')
      if (isInteractive) {
        ring.style.borderColor = 'rgba(201,168,76,0.7)'
        ring.style.boxShadow = '0 0 12px rgba(201,168,76,0.35), 0 0 28px rgba(201,168,76,0.15)'
        ring.style.width = '44px'
        ring.style.height = '44px'
      } else {
        ring.style.borderColor = 'rgba(201,168,76,0.25)'
        ring.style.boxShadow = 'none'
        ring.style.width = '36px'
        ring.style.height = '36px'
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '8px', height: '8px',
          backgroundColor: '#C9A84C',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '36px', height: '36px',
          border: '1px solid rgba(201,168,76,0.25)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          transition: 'width 0.2s ease, height 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease',
        }}
      />
    </>
  )
}
