interface Tilt3DProps {
  children: React.ReactNode
  className?: string
  style?: React.CSSProperties
  intensity?: number
  onMouseEnter?: (e: React.MouseEvent<HTMLDivElement>) => void
  onMouseLeave?: (e: React.MouseEvent<HTMLDivElement>) => void
}

/**
 * Formerly a 3D cursor-tilt card. Tilt removed 2026-08-29 for a calmer, professional feel.
 * Kept as a plain wrapper so existing imports keep working.
 */
export default function Tilt3D({ children, className, style, onMouseEnter, onMouseLeave }: Tilt3DProps) {
  return (
    <div className={className} style={style} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      {children}
    </div>
  )
}
