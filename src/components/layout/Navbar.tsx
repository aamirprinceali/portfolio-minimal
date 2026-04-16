import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '/#about', label: 'About' },
    { href: '/#tools', label: 'AI & Automation' },
    { href: '/#projects', label: 'Projects' },
    { href: '/work-with-me', label: 'Work With Me' },
    { href: '/cv', label: 'CV' },
  ]

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
        <Link to="/" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.125rem', fontWeight: 600, color: '#C9A84C', textDecoration: 'none', letterSpacing: '0.02em' }}>
          Aamir Ali
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden-mobile">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(201,168,76,0.7)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
              onMouseLeave={e => (e.currentTarget.style.color = 'rgba(201,168,76,0.7)')}
            >
              {label}
            </a>
          ))}
        </div>

        {/* Available badge */}
        <a
          href="/work-with-me"
          className="hidden-mobile"
          style={{
            display: 'flex', alignItems: 'center', gap: '8px',
            fontSize: '0.75rem', fontWeight: 500, color: '#C9A84C',
            border: '1px solid rgba(201,168,76,0.35)', borderRadius: '999px',
            padding: '6px 12px', textDecoration: 'none',
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
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{ fontSize: '0.875rem', fontWeight: 500, color: 'rgba(201,168,76,0.7)', textDecoration: 'none' }}
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
