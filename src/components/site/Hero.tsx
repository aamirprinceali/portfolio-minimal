import { motion } from 'framer-motion'
import { ArrowDownToLine, ArrowRight } from 'lucide-react'
import { hero, links } from '../../data/content'
import { Button, easeOut } from './primitives'

// The opening screen: name, one sentence on what Aamir does, current roles,
// two actions (see the work / get the résumé), and a portrait.
// Motion is a single, short fade so the page feels settled, not staged.
export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="bg-ink text-cream">
      <motion.div
        className="mx-auto grid max-w-[1200px] items-center gap-12 px-4 pb-20 pt-28 sm:px-6 md:grid-cols-12 md:gap-10 md:pb-28 md:pt-36 lg:px-10"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        {/* Left: name, statement, roles, actions */}
        <div className="md:col-span-7">
          <p className="font-sans text-[0.8125rem] tracking-[0.04em] text-cream-dim">{hero.location}</p>
          <h1 className="mt-5 font-display text-[clamp(3.75rem,10vw,7rem)] font-semibold leading-[0.9] tracking-[-0.02em] text-gold">
            Aamir Ali
          </h1>
          <p className="mt-8 max-w-[32ch] font-body text-[clamp(1.25rem,2.2vw,1.625rem)] leading-[1.45] text-cream">
            {hero.lead}
          </p>
          <ul className="mt-6 space-y-1 font-sans text-[0.9375rem] text-cream-dim">
            {hero.roles.map(r => (
              <li key={r}>{r}</li>
            ))}
          </ul>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button href="#work">
              View selected work
              <ArrowRight size={17} aria-hidden />
            </Button>
            <Button href={links.resume} variant="outline-dark" download>
              <ArrowDownToLine size={17} aria-hidden />
              Download résumé
            </Button>
          </div>
        </div>

        {/* Right: portrait */}
        <figure className="md:col-span-5 md:pl-6">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-[20rem] overflow-hidden rounded-[12px] md:ml-auto md:mr-0">
            <img
              src="/images/aamir-ali.jpg"
              alt="Portrait of Aamir Ali"
              width={900}
              height={900}
              fetchPriority="high"
              className="h-full w-full object-cover object-[50%_30%] grayscale-[15%]"
            />
            <div aria-hidden className="absolute inset-0 rounded-[12px] ring-1 ring-inset ring-cream/10" />
          </div>
        </figure>
      </motion.div>
    </section>
  )
}
