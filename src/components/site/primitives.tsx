import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

// Shared easing: fast start, long soft landing
export const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

// ── Reveal ───────────────────────────────────────────────────────────────────
// Content fades in with a small rise as it scrolls into view. Kept short and
// quiet on purpose; reduced-motion users get no movement
// (handled globally by <MotionConfig reducedMotion="user">).
export function Reveal({
  children,
  delay = 0,
  className = '',
  as = 'div',
}: {
  children: ReactNode
  delay?: number
  className?: string
  as?: 'div' | 'li' | 'article'
}) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -8% 0px' }}
      transition={{ duration: 0.5, delay, ease: easeOut }}
    >
      {children}
    </Tag>
  )
}

// ── Section heading ──────────────────────────────────────────────────────────
// A plain hairline rule, a serif headline, and an optional one-line summary.
export function SectionHead({
  id,
  title,
  deck,
  dark = false,
}: {
  id: string
  title: ReactNode
  deck?: ReactNode
  dark?: boolean
}) {
  return (
    <header className={`mb-12 border-t pt-8 md:mb-16 md:pt-10 ${dark ? 'border-cream/20' : 'border-ink/80'}`}>
      <Reveal>
        <h2
          id={`${id}-title`}
          className={`font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.015em] ${
            dark ? 'text-cream' : 'text-ink'
          }`}
        >
          {title}
        </h2>
        {deck && (
          <p className={`mt-4 max-w-[58ch] font-body text-[1.0625rem] leading-relaxed ${dark ? 'text-cream-dim' : 'text-muted'}`}>
            {deck}
          </p>
        )}
      </Reveal>
    </header>
  )
}

// ── Buttons ──────────────────────────────────────────────────────────────────
type BtnProps = {
  href: string
  children: ReactNode
  variant?: 'gold' | 'outline-dark' | 'ink' | 'outline'
  external?: boolean
  download?: boolean
  className?: string
}

export function Button({ href, children, variant = 'gold', external, download, className = '' }: BtnProps) {
  const base =
    'inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 font-sans text-[0.9375rem] font-medium tracking-[0.01em] transition-[background-color,color,border-color,transform] duration-300 active:scale-[0.98]'
  const styles = {
    gold: 'bg-gold text-ink hover:bg-[#d8b85c]',
    'outline-dark': 'border border-cream/30 text-cream hover:border-gold hover:text-gold',
    ink: 'bg-ink text-cream hover:bg-ink-2',
    outline: 'border border-ink/25 text-ink hover:border-ink',
  }[variant]
  return (
    <a
      href={href}
      className={`${base} ${styles} ${className}`}
      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      {...(download ? { download: '' } : {})}
    >
      {children}
    </a>
  )
}

// ── Tag chip ─────────────────────────────────────────────────────────────────
export function Chip({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <li
      className={`rounded-full border px-3 py-1 font-sans text-[0.75rem] font-medium ${
        dark ? 'border-cream/15 text-cream-dim' : 'border-rule bg-paper text-body'
      }`}
    >
      {children}
    </li>
  )
}
