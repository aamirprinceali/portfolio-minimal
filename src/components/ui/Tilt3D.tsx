import { useRef } from 'react'

interface Tilt3DProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  /** Max tilt in degrees — default 7 */
  intensity?: number
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void
}

/**
 * Wraps any card with a subtle 3D tilt that follows the cursor.
 * The card tilts toward the mouse position, creating a depth illusion.
 * Snaps smoothly back to flat on mouse leave.
 */
export default function Tilt3D({
  children, className, style, intensity = 7,
  onMouseEnter: externalEnter,
  onMouseLeave: externalLeave,
}: Tilt3DProps) {
  const ref = useRef<HTMLDivElement>(null)

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    // Normalized position: -0.5 (left/top edge) to 0.5 (right/bottom edge)
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    el.style.transform = `perspective(800px) rotateX(${-y * intensity}deg) rotateY(${x * intensity}deg) translateZ(8px)`
    el.style.transition = 'transform 0.08s ease'
  }

  const onEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    externalEnter?.(e)
  }

  const onLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current
    if (el) {
      el.style.transform = 'perspective(800px) rotateX(0deg) rotateY(0deg) translateZ(0px)'
      el.style.transition = 'transform 0.6s ease'
    }
    externalLeave?.(e)
  }

  return (
    <div
      ref={ref}
      className={className}
      style={{ ...style, transformStyle: 'preserve-3d' }}
      onMouseMove={onMove}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
    >
      {children}
    </div>
  )
}
