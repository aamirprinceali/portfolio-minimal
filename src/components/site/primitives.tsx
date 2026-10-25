import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

// Shared easing: fast start, long soft landing
export const easeOut: [number, number, number, number] = [0.16, 1, 0.3, 1]

// ── Reveal ───────────────────────────────────────────────────────────────────
// Content fades and rises a little as it scrolls into view. Starts nearly
// visible so nothing feels hidden; reduced-motion users get no movement
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
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.8, delay, ease: easeOut }}
    >
      {children}
    </Tag>
  )
}

// ── Section heading ──────────────────────────────────────────────────────────
// A hairline rule that draws in, then a large serif headline and an optional
// standfirst (the magazine "deck"). The heading carries itself: no eyebrow.
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
    <header className="mb-14 md:mb-20">
      <motion.div
        aria-hidden
        className={`h-px origin-left ${dark ? 'bg-cream/20' : 'bg-ink/80'}`}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: easeOut }}
      />
      <div className="mt-8 grid gap-6 md:mt-10 md:grid-cols-12 md:gap-10">
        <Reveal className="md:col-span-7">
          <h2
            id={`${id}-title`}
            className={`font-display text-[clamp(2.75rem,6vw,5rem)] font-semibold leading-[0.95] tracking-[-0.02em] ${
              dark ? 'text-cream' : 'text-ink'
            }`}
          >
            {title}
          </h2>
        </Reveal>
        {deck && (
          <Reveal delay={0.1} className="md:col-span-5 md:self-end">
            <p
              className={`max-w-[46ch] font-body text-lg italic leading-relaxed ${
                dark ? 'text-cream-dim' : 'text-muted'
              }`}
            >
              {deck}
            </p>
          </Reveal>
        )}
      </div>
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
