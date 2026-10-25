import { motion } from 'framer-motion'
import { ArrowDownToLine, ArrowRight, ArrowUpRight } from 'lucide-react'
import { sections, links } from '../../data/content'
import { Button, easeOut } from './primitives'

// The cover. A masthead line, the name, one plain sentence about what Aamir
// does, two routes (see the work / get the résumé), a real portrait, and the
// "In this issue" contents that double as navigation.
// This is the page's one authored motion moment: the name wipes in, the rule
// draws, the portrait unmasks from the bottom.
export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden bg-ink text-cream">
      <div className="mx-auto max-w-[1200px] px-4 pb-16 pt-24 sm:px-6 md:pb-20 md:pt-28 lg:px-10">
        {/* Masthead line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.1 }}
          className="flex flex-wrap items-center justify-between gap-x-6 gap-y-1 border-b border-cream/15 pb-4 font-sans text-[0.75rem] tracking-[0.08em] text-cream-dim"
        >
          <span>Issue No. 6 · Fall 2026</span>
          <span className="flex items-center gap-2">
            <span className="relative flex h-2 w-2" aria-hidden>
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Plano, TX · Open to remote
          </span>
        </motion.div>

        <div className="mt-12 grid items-end gap-12 md:mt-16 md:grid-cols-12 md:gap-10">
          {/* Left: name, statement, actions */}
          <div className="md:col-span-7">
            <h1 className="font-display font-semibold leading-[0.86] tracking-[-0.02em] text-gold">
              {['Aamir', 'Ali'].map((word, i) => (
                <span key={word} className="block overflow-hidden pb-[0.06em]">
                  <motion.span
                    className="block text-[clamp(4.5rem,13vw,9rem)]"
                    initial={{ clipPath: 'inset(0 100% 0 0)' }}
                    animate={{ clipPath: 'inset(0 0% 0 0)' }}
                    transition={{ duration: 1.4, delay: 0.15 + i * 0.12, ease: easeOut }}
                  >
                    {word}
                  </motion.span>
                </span>
              ))}
            </h1>

            <motion.div
              aria-hidden
              className="mt-8 h-px max-w-[34rem] origin-left bg-gold/40"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.1, delay: 0.55, ease: easeOut }}
            />

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: easeOut }}
            >
              <p className="mt-8 max-w-[30ch] font-body text-[clamp(1.375rem,2.4vw,1.875rem)] leading-[1.35] text-cream">
                I run onboarding operations by day, and I build the dashboards, AI agents, and automations that take
                the busywork out of it.
              </p>
              <p className="mt-5 font-sans text-[0.9375rem] text-cream-dim">
                Onboarding &amp; Operations Analyst at Covered Care · Founder of{' '}
                <a href={links.practice} target="_blank" rel="noopener noreferrer" className="ink-link text-cream">
                  Brick by Brick
                </a>
              </p>

              <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href="#work">
                  See the work
                  <ArrowRight size={17} aria-hidden />
                </Button>
                <Button href={links.resume} variant="outline-dark" download>
                  <ArrowDownToLine size={17} aria-hidden />
                  Download résumé
                </Button>
              </div>
            </motion.div>
          </div>

          {/* Right: portrait with caption */}
          <motion.figure
            className="md:col-span-5 md:pl-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <motion.div
              className="relative mx-auto aspect-[4/5] w-full max-w-[22rem] overflow-hidden rounded-[14px] md:ml-auto md:mr-0"
              initial={{ clipPath: 'inset(100% 0 0 0)' }}
              animate={{ clipPath: 'inset(0% 0 0 0)' }}
              transition={{ duration: 1.3, delay: 0.35, ease: easeOut }}
            >
              <img
                src="/images/aamir-ali.jpg"
                alt="Portrait of Aamir Ali"
                width={900}
                height={900}
                fetchPriority="high"
                className="h-full w-full object-cover object-[50%_30%] grayscale-[15%]"
              />
              <div aria-hidden className="absolute inset-0 ring-1 ring-inset ring-cream/10" />
            </motion.div>
            <figcaption className="mx-auto mt-3 flex max-w-[22rem] justify-between font-sans text-[0.75rem] text-cream-dim md:ml-auto md:mr-0">
              <span>Aamir Ali</span>
              <span>Operations · AI systems</span>
            </figcaption>
          </motion.figure>
        </div>

        {/* In this issue: contents that double as navigation */}
        <motion.nav
          aria-label="In this issue"
          className="mt-16 md:mt-24"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.95, ease: easeOut }}
        >
          <p className="font-display text-xl italic text-gold">In this issue</p>
          <ol className="mt-4 grid border-t border-cream/15 sm:grid-cols-2 lg:grid-cols-3">
            {sections.map(({ id, label, blurb }, i) => (
              <li key={id} className="border-b border-cream/15 sm:odd:border-r lg:border-r lg:[&:nth-child(3n)]:border-r-0">
                <a href={`#${id}`} className="group flex items-start gap-4 px-1 py-5 sm:px-5">
                  <span className="tnum pt-1 font-sans text-[0.75rem] text-gold">p.{String(i + 2).padStart(2, '0')}</span>
                  <span className="flex-1">
                    <span className="block font-display text-2xl font-semibold text-cream transition-colors group-hover:text-gold">
                      {label}
                    </span>
                    <span className="mt-1 block font-sans text-[0.8125rem] leading-snug text-cream-dim">{blurb}</span>
                  </span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden
                    className="mt-1 rotate-90 text-cream/40 transition-[transform,color] duration-300 group-hover:translate-y-0.5 group-hover:text-gold"
                  />
                </a>
              </li>
            ))}
          </ol>
        </motion.nav>
      </div>
    </section>
  )
}
