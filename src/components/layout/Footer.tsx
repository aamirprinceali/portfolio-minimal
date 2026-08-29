export default function Footer() {
  const year = new Date().getFullYear()
  const links = [
    { href: '#chapter-background', label: 'Background' },
    { href: '#chapter-toolkit', label: 'The Stack' },
    { href: '#chapter-work', label: 'Portfolio' },
    { href: '#chapter-work-with-me', label: 'Work With Me' },
    { href: '#chapter-record', label: 'CV' },
    { href: 'https://brickbybrickco.vercel.app', label: 'Brick by Brick' },
    { href: 'https://www.linkedin.com/in/aamirnali/', label: 'LinkedIn' },
  ]

  return (
    <footer style={{ borderTop: '1px solid #E5E4DF', marginTop: '96px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '32px 24px', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
        <span style={{ fontSize: '0.875rem', color: '#6B6B6B' }}>© {year} Aamir Ali. Built with intention.</span>
        <nav style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
          {links.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              style={{ fontSize: '0.875rem', color: '#6B6B6B', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#121212')}
              onMouseLeave={e => (e.currentTarget.style.color = '#6B6B6B')}
            >
              {label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
