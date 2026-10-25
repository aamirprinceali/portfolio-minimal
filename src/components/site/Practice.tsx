import { ArrowUpRight } from 'lucide-react'
import { practiceOutcomes, links } from '../../data/content'
import { Button, Reveal, SectionHead } from './primitives'

// Brick by Brick: Aamir's consulting practice. Same story as the business
// site, told for a portfolio reader, with a clear route to brickbybrickops.com.
export default function Practice() {
  return (
    <section id="practice" aria-labelledby="practice-title" className="border-t border-rule bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <SectionHead
          id="practice"
          title={
            <>
              I also run
              <br />
              Brick by Brick.
            </>
          }
          deck="My consulting practice for small and mid-sized businesses. Same habits as the day job, pointed at owners who are tired of losing leads, time, and money to broken processes."
        />

        <Reveal className="overflow-hidden rounded-[16px] bg-ink text-cream">
          <div className="grid md:grid-cols-12">
            <div className="p-8 md:col-span-5 md:p-12">
              <p className="font-display text-[clamp(1.75rem,3vw,2.5rem)] font-semibold leading-[1.1]">
                I find where the business leaks, then build what fixes it.
              </p>
              <p className="mt-5 max-w-[44ch] font-body leading-[1.75] text-cream-dim">
                AI receptionists, CRMs, automations, dashboards, and websites, sized to the business and nothing more.
                Owners work with me directly, and they know what I am building and why before I start.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <Button href={links.practice} external>
                  Visit brickbybrickops.com
                  <ArrowUpRight size={17} aria-hidden />
                </Button>
                <Button href={links.practiceTools} variant="outline-dark" external>
                  Try the free tools
                </Button>
              </div>
            </div>

            <ol className="border-t border-cream/10 md:col-span-7 md:border-l md:border-t-0">
              {practiceOutcomes.map((o, i) => (
                <li
                  key={o.title}
                  className="grid gap-2 border-b border-cream/10 p-8 last:border-b-0 sm:grid-cols-[3rem_1fr] md:px-12 md:py-9"
                >
                  <span className="tnum font-display text-2xl italic text-gold">{i + 1}</span>
                  <div>
                    <h3 className="font-display text-[1.625rem] font-semibold leading-tight">{o.title}</h3>
                    <p className="mt-2 max-w-[52ch] font-body text-[0.975rem] leading-[1.7] text-cream-dim">{o.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Reveal>

        <p className="mt-6 font-sans text-[0.875rem] text-muted">
          Brick by Brick is independent of my employer. Based in Plano, working with businesses nationwide.
        </p>
      </div>
    </section>
  )
}
