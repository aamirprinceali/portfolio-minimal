import { links, sections } from '../../data/content'

// Footer: a quiet sign-off with the section links and outside profiles.
export default function Footer() {
  const outside = [
    { label: 'Brick by Brick', href: links.practice },
    { label: 'LinkedIn', href: links.linkedin },
    { label: 'GitHub', href: links.github },
  ]
  return (
    <footer className="border-t border-cream/10 bg-ink text-cream-dim">
      <div className="mx-auto flex max-w-[1200px] flex-col gap-8 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-10">
        <p className="font-sans text-[0.8125rem]">
          <span className="font-display text-lg font-semibold text-gold">Aamir Ali</span>
          <span className="mx-3 text-cream/25">/</span>© {new Date().getFullYear()} · Plano, Texas
        </p>
        <nav aria-label="Footer" className="flex flex-wrap gap-x-6 gap-y-3 font-sans text-[0.8125rem]">
          {sections.map(s => (
            <a key={s.id} href={`#${s.id}`} className="ink-link hover:text-cream">
              {s.label}
            </a>
          ))}
          {outside.map(o => (
            <a key={o.label} href={o.href} target="_blank" rel="noopener noreferrer" className="ink-link text-cream hover:text-gold">
              {o.label}
            </a>
          ))}
        </nav>
      </div>
    </footer>
  )
}
