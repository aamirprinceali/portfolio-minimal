import { bio, ledger, pullQuote } from '../../data/content'
import { Reveal, SectionHead } from './primitives'

// About: the story in four short paragraphs, with a drop cap on the first,
// and a sidebar "ledger" of verifiable facts plus a pull quote.
export default function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <SectionHead
          id="about"
          title={
            <>
              People first.
              <br />
              Systems second.
            </>
          }
          deck="A career that started in the hardest rooms, and the belief that good systems make the human part of the work easier."
        />

        <div className="grid gap-16 md:grid-cols-12 md:gap-10">
          {/* Story */}
          <div className="md:col-span-7">
            {bio.map((para, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <p
                  className={`mb-6 max-w-[62ch] font-body text-[1.0625rem] leading-[1.8] text-body md:text-[1.125rem] ${
                    i === 0
                      ? 'first-letter:float-left first-letter:mr-3 first-letter:mt-1 first-letter:font-display first-letter:text-[4.6rem] first-letter:font-semibold first-letter:leading-[0.8] first-letter:text-gold-ink'
                      : ''
                  }`}
                >
                  {para}
                </p>
              </Reveal>
            ))}
          </div>

          {/* Sidebar */}
          <aside className="md:col-span-4 md:col-start-9" aria-label="At a glance">
            <Reveal>
              <h3 className="font-display text-2xl font-semibold italic text-ink">By the record</h3>
              <dl className="mt-4 border-t border-ink">
                {ledger.map(({ label, value }) => (
                  <div key={label} className="flex items-end border-b border-rule py-3.5">
                    <dt className="font-sans text-[0.875rem] text-body">{label}</dt>
                    <span aria-hidden className="leader text-muted" />
                    <dd className="tnum font-display text-[1.75rem] font-semibold leading-none text-ink">{value}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-3 font-sans text-[0.75rem] text-muted">From my résumé, October 2026.</p>
            </Reveal>

            <Reveal delay={0.1}>
              <blockquote className="mt-14 border-t border-rule pt-8">
                <p className="font-display text-[1.75rem] font-medium italic leading-[1.25] text-ink">
                  <span aria-hidden className="text-gold-ink">“</span>
                  {pullQuote}
                  <span aria-hidden className="text-gold-ink">”</span>
                </p>
              </blockquote>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  )
}
