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

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '8px', height: '8px',
          backgroundColor: '#1E3A5F',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
          mixBlendMode: 'multiply',
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: 'fixed', top: 0, left: 0,
          width: '36px', height: '36px',
          border: '1px solid rgba(30,58,95,0.35)',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      />
    </>
  )
}
