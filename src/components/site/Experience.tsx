import { ArrowDownToLine } from 'lucide-react'
import { roles, skillGroups, education, certifications, links } from '../../data/content'
import { Button, Reveal, SectionHead } from './primitives'

// Experience: a dated timeline of roles from the résumé, with skills,
// education, and certifications in a sidebar, plus the PDF download.
export default function Experience() {
  return (
    <section id="record" aria-labelledby="record-title" className="bg-paper py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <SectionHead
          id="record"
          title="The record"
          deck="Five-plus years in client operations, promoted twice on performance. The same pattern in every role: take the messy process, make it repeatable."
        />

        <div className="grid gap-16 lg:grid-cols-12 lg:gap-10">
          {/* Timeline */}
          <ol className="relative lg:col-span-8">
            <span aria-hidden className="absolute bottom-2 left-[5px] top-2 w-px bg-rule md:left-[11.5rem]" />
            {roles.map((r, i) => (
              <Reveal as="li" key={r.title + r.dates} className="relative grid gap-2 pb-12 pl-8 md:grid-cols-[11.5rem_1fr] md:gap-0 md:pl-0">
                {/* Dot on the line; the current role is filled gold */}
                <span
                  aria-hidden
                  className={`absolute left-0 top-[0.55rem] h-[11px] w-[11px] rounded-full border-2 md:left-[calc(11.5rem-5px)] ${
                    i === 0 ? 'border-gold bg-gold' : 'border-rule bg-paper'
                  }`}
                />
                <p className="tnum font-sans text-[0.8125rem] font-medium text-muted md:pr-8 md:pt-1 md:text-right">
                  {r.dates}
                </p>
                <div className="md:pl-10">
                  <h3 className="font-display text-[1.75rem] font-semibold leading-tight text-ink">{r.title}</h3>
                  <p className="mt-1 font-sans text-[0.9375rem] font-medium text-gold-ink">
                    {r.company}
                    {r.note && <span className="font-normal text-muted"> · {r.note}</span>}
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {r.bullets.map(b => (
                      <li key={b} className="relative max-w-[64ch] pl-5 font-body text-[0.975rem] leading-[1.7] text-body">
                        <span aria-hidden className="absolute left-0 top-[0.8em] h-px w-2.5 bg-gold-ink" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </ol>

          {/* Sidebar */}
          <aside className="space-y-12 lg:col-span-4" aria-label="Skills and education">
            <Reveal className="rounded-[14px] bg-ink p-7 text-cream">
              <p className="font-display text-2xl font-semibold">The one-page version</p>
              <p className="mt-2 font-sans text-[0.875rem] leading-relaxed text-cream-dim">
                Résumé V6, updated October 2026. PDF, 50 KB.
              </p>
              <Button href={links.resume} download className="mt-6 w-full">
                <ArrowDownToLine size={17} aria-hidden />
                Download résumé
              </Button>
            </Reveal>

            {skillGroups.map(g => (
              <Reveal key={g.label}>
                <h3 className="border-b border-ink pb-2 font-display text-xl font-semibold italic text-ink">{g.label}</h3>
                <ul className="mt-3 flex flex-wrap gap-x-1.5 gap-y-1.5">
                  {g.items.map(s => (
                    <li key={s} className="rounded-full bg-surface px-3 py-1 font-sans text-[0.8125rem] text-body">
                      {s}
                    </li>
                  ))}
                </ul>
              </Reveal>
            ))}

            <Reveal>
              <h3 className="border-b border-ink pb-2 font-display text-xl font-semibold italic text-ink">Education</h3>
              <ul className="mt-1">
                {education.map(e => (
                  <li key={e.title} className="flex items-end border-b border-rule py-3">
                    <span>
                      <span className="block font-sans text-[0.9375rem] font-medium text-ink">{e.title}</span>
                      <span className="block font-sans text-[0.8125rem] text-muted">{e.place}</span>
                    </span>
                    <span aria-hidden className="leader text-muted" />
                    <span className="tnum font-sans text-[0.875rem] text-body">{e.year}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal>
              <h3 className="border-b border-ink pb-2 font-display text-xl font-semibold italic text-ink">
                Certifications
              </h3>
              <ul className="mt-1">
                {certifications.map(c => (
                  <li key={c} className="border-b border-rule py-3 font-sans text-[0.9375rem] text-ink">
                    {c}
                  </li>
                ))}
              </ul>
            </Reveal>
          </aside>
        </div>
      </div>
    </section>
  )
}
