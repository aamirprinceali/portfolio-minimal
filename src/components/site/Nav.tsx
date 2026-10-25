import { useEffect, useState } from 'react'
import { Menu, X, ArrowDownToLine } from 'lucide-react'
import { sections, links } from '../../data/content'

// Top navigation. Transparent over the dark hero, then a solid ink bar once
// you scroll. Highlights the section currently on screen. On phones it
// collapses into a full-width menu (closes on link click or Escape).
export default function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState<string | null>(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Which section is on screen right now
  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    )
    sections.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const solid = scrolled || open

  return (
    <nav
      aria-label="Main"
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-300 ${
        solid ? 'border-b border-cream/10 bg-ink/95 backdrop-blur-md' : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4 sm:px-6 lg:px-10">
        <a href="#top" className="font-display text-xl font-semibold tracking-[0.01em] text-gold">
          Aamir Ali
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {sections.map(({ id, label }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                aria-current={active === id ? 'true' : undefined}
                className={`ink-link font-sans text-[0.8125rem] font-medium tracking-[0.02em] transition-colors ${
                  active === id ? 'text-gold' : 'text-cream/75 hover:text-cream'
                }`}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={links.resume}
            download=""
            className="hidden min-h-10 items-center gap-2 rounded-full border border-gold/50 px-4 font-sans text-[0.8125rem] font-medium text-gold transition-colors hover:bg-gold hover:text-ink sm:inline-flex"
          >
            <ArrowDownToLine size={15} aria-hidden />
            Résumé
          </a>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full text-cream lg:hidden"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen(o => !o)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="border-t border-cream/10 bg-ink px-4 pb-8 pt-2 sm:px-6 lg:hidden">
          <ul>
            {sections.map(({ id, label }) => (
              <li key={id} className="border-b border-cream/10">
                <a href={`#${id}`} onClick={() => setOpen(false)} className="block py-4 font-display text-2xl font-semibold text-cream">
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href={links.resume}
            download=""
            className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold font-sans font-medium text-ink"
          >
            <ArrowDownToLine size={16} aria-hidden />
            Download résumé (PDF)
          </a>
        </div>
      )}
    </nav>
  )
}
