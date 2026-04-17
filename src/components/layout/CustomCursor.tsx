import { useEffect, useRef } from 'react'

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Only on pointer/mouse devices
    if (window.matchMedia('(hover: none)').matches) return

    const dot = dotRef.current
    if (!dot) return

    const onMove = (e: MouseEvent) => {
      dot.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`

      // Glow gold when hovering interactive elements
      const el = document.elementFromPoint(e.clientX, e.clientY)
      const isInteractive = el?.closest('a, button, [role="button"], input, textarea')
      if (isInteractive) {
        dot.style.width = '10px'
        dot.style.height = '10px'
        dot.style.boxShadow = '0 0 10px rgba(201,168,76,0.8), 0 0 20px rgba(201,168,76,0.4)'
      } else {
        dot.style.width = '8px'
        dot.style.height = '8px'
        dot.style.boxShadow = '0 0 4px rgba(201,168,76,0.35)'
      }
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    return () => window.removeEventListener('mousemove', onMove)
  }, [])

  return (
    <div
      ref={dotRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '8px',
        height: '8px',
        backgroundColor: '#C9A84C',
        borderRadius: '50%',
        pointerEvents: 'none',
        zIndex: 9999,
        boxShadow: '0 0 4px rgba(201,168,76,0.35)',
        transition: 'width 0.15s ease, height 0.15s ease, box-shadow 0.15s ease',
      }}
    />
  )
}
