import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY
      const total = document.body.scrollHeight - window.innerHeight
      setWidth(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      id="scroll-progress"
      style={{ width: `${width}%` }}
    />
  )
}
