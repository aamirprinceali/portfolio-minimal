import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { href: '#chapter-background', label: 'Background', id: 'chapter-background' },
  { href: '#chapter-toolkit', label: 'Toolkit', id: 'chapter-toolkit' },
  { href: '#chapter-work', label: 'Work', id: 'chapter-work' },
  { href: '#chapter-record', label: 'CV', id: 'chapter-record' },
  { href: '#chapter-work-with-me', label: 'Work With Me', id: 'chapter-work-with-me' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [activeChapter, setActiveChapter] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Track which chapter is currently visible
  useEffect(() => {
    const observers: IntersectionObserver[] = []

    navLinks.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (!el) return

      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveChapter(id)
        },
        { threshold: 0.3 }
      )
      obs.observe(el)
      observers.push(obs)
    })

    return () => observers.forEach(obs => obs.disconnect())
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: 'all 0.3s ease',
        backgroundColor: scrolled ? 'rgba(15,15,14,0.88)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(201,168,76,0.12)' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.2)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }) }}
          style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.125rem', fontWeight: 600, color: '#C9A84C', textDecoration: 'none', letterSpacing: '0.02em' }}
        >
          Aamir Ali
        </a>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden-mobile">
          {navLinks.map(({ href, label, id }) => {
            const isActive = activeChapter === id
            return (
              <a
                key={href}
                href={href}
                style={{
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  color: isActive ? '#C9A84C' : 'rgba(201,168,76,0.5)',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                  letterSpacing: '0.04em',
                  fontFamily: '"DM Sans", system-ui, sans-serif',
                  position: 'relative',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                onMouseLeave={e => (e.currentTarget.style.color = isActive ? '#C9A84C' : 'rgba(201,168,76,0.5)')}
              >
                {label}
                {/* Active underline */}
                {isActive && (
                  <span style={{
                    position: 'absolute',
                    bottom: '-4px',
                    left: 0,
                    right: 0,
                    height: '1px',
                    backgroundColor: '#C9A84C',
                    opacity: 0.6,
                  }} />
                )}
              </a>
            )
          })}
        </div>

        {/* Available badge */}
        <a
          href="#chapter-work-with-me"
          className="hidden-mobile"
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '0.75rem', fontWeight: 500, color: '#C9A84C',
            border: '1px solid rgba(201,168,76,0.35)', borderRadius: '999px',
            padding: '6px 12px', textDecoration: 'none',
            fontFamily: '"DM Sans", system-ui, sans-serif',
            transition: 'background 0.2s, border-color 0.2s',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = 'rgba(201,168,76,0.08)'
            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.6)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = 'transparent'
            e.currentTarget.style.borderColor = 'rgba(201,168,76,0.35)'
          }}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e', animation: 'pulse 2s infinite' }} />
          available
        </a>

        {/* Mobile hamburger */}
        <button
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#C9A84C', display: 'none' }}
          className="show-mobile"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: 'rgba(15,15,14,0.96)', borderBottom: '1px solid rgba(201,168,76,0.12)', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {navLinks.map(({ href, label, id }) => (
            <a
              key={href}
              href={href}
              style={{
                fontSize: '0.875rem', fontWeight: 500,
                color: activeChapter === id ? '#C9A84C' : 'rgba(201,168,76,0.6)',
                textDecoration: 'none',
              }}
              onClick={() => setOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}
