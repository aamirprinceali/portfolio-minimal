import { bio, ledger } from '../../data/content'
import { Reveal, SectionHead } from './primitives'

// About: a short summary on the left, four résumé facts on the right.
export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <SectionHead id="about" title="About" />

        <div className="grid gap-12 md:grid-cols-12 md:gap-10">
          {/* Summary */}
          <Reveal className="md:col-span-7">
            {bio.map((para, i) => (
              <p
                key={i}
                className={`mb-5 max-w-[62ch] font-body leading-[1.8] ${
                  i === bio.length - 1 ? 'text-[0.9375rem] text-muted' : 'text-[1.0625rem] text-body md:text-[1.125rem]'
                }`}
              >
                {para}
              </p>
            ))}
          </Reveal>

          {/* Facts */}
          <aside className="md:col-span-4 md:col-start-9" aria-label="At a glance">
            <Reveal>
              <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-[12px] border border-rule bg-rule">
                {ledger.map(({ label, value }) => (
                  <div key={label} className="flex flex-col-reverse bg-paper p-5">
                    <dt className="mt-1 font-sans text-[0.8125rem] leading-snug text-muted">{label}</dt>
                    <dd className="tnum font-display text-[2.25rem] font-semibold leading-none text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  )
}
