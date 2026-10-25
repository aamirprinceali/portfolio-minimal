import { ArrowUpRight } from 'lucide-react'
import { links } from '../../data/content'
import { Button, Reveal } from './primitives'

// Brick by Brick: one calm block about Aamir's consulting practice,
// with a route to brickbybrickops.com.
export default function Practice() {
  return (
    <section id="practice" aria-labelledby="practice-title" className="border-t border-rule bg-surface py-20 md:py-24">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <Reveal className="grid gap-8 md:grid-cols-12 md:items-end md:gap-10">
          <div className="md:col-span-8">
            <h2
              id="practice-title"
              className="font-display text-[clamp(2.25rem,4.5vw,3.5rem)] font-semibold leading-[1] tracking-[-0.015em] text-ink"
            >
              Brick by Brick
            </h2>
            <p className="mt-5 max-w-[60ch] font-body text-[1.0625rem] leading-[1.75] text-body">
              An independent consulting practice for small and mid-sized businesses: lead capture, process fixes, and
              automation, built around the tools a business already uses. Separate from my employer.
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row md:col-span-4 md:flex-col md:items-stretch lg:flex-row lg:justify-end">
            <Button href={links.practice} variant="ink" external>
              brickbybrickops.com
              <ArrowUpRight size={17} aria-hidden />
            </Button>
            <Button href={links.practiceTools} variant="outline" external>
              Free tools
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
