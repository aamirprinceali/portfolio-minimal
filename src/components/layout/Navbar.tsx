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
        backgroundColor: scrolled ? 'rgba(249,248,246,0.90)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid #E5E4DF' : '1px solid transparent',
        boxShadow: scrolled ? '0 1px 3px rgba(0,0,0,0.06)' : 'none',
      }}
    >
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 24px', height: '64px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <Link to="/" style={{ fontFamily: '"Cormorant Garamond", serif', fontSize: '1.125rem', fontWeight: 600, color: '#121212', textDecoration: 'none', letterSpacing: '0.02em' }}>
          Aamir Ali
        </Link>

        {/* Desktop links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }} className="hidden-mobile">
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{ fontSize: '0.875rem', fontWeight: 500, color: '#6B6B6B', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#121212')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6B6B6B')}
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
            fontSize: '0.75rem', fontWeight: 500, color: '#1E3A5F',
            border: '1px solid rgba(30,58,95,0.3)', borderRadius: '999px',
            padding: '6px 12px', textDecoration: 'none',
            transition: 'background 0.2s',
          }}
          onMouseEnter={e => (e.currentTarget.style.background = 'rgba(30,58,95,0.05)')}
          onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
        >
          <span style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e', animation: 'pulse 2s infinite' }} />
          available
        </a>

        {/* Mobile hamburger */}
        <button
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#121212', display: 'none' }}
          className="show-mobile"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div style={{ backgroundColor: '#F9F8F6', borderBottom: '1px solid #E5E4DF', padding: '16px 24px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {navLinks.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{ fontSize: '0.875rem', fontWeight: 500, color: '#6B6B6B', textDecoration: 'none' }}
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
