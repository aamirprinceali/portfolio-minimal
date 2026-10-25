import { ArrowUpRight } from 'lucide-react'
import { featured, type CaseStudy } from '../../data/content'
import { Chip, Reveal, SectionHead } from './primitives'

// Large screenshot in a plain frame, with an optional caption
// (used to say when the data shown is a fictional sample).
function Shot({ image }: { image: CaseStudy['image'] }) {
  return (
    <figure>
      <div className="shot">
        <img
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full"
        />
      </div>
      {image.caption && <figcaption className="mt-3 font-sans text-[0.8125rem] text-muted">{image.caption}</figcaption>}
    </figure>
  )
}

// Selected work: exactly four projects. Each one is a full-width screenshot,
// then the title on the left and problem / built / result on the right.
export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-rule bg-surface py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <SectionHead
          id="work"
          title="Selected work"
          deck="Four systems in daily use. Employer tools are shown with fictional sample data."
        />

        <div className="space-y-20 md:space-y-28">
          {featured.map(study => (
            <article key={study.title} aria-labelledby={slug(study.title)}>
              <Reveal>
                <Shot image={study.image} />
              </Reveal>

              <Reveal className="mt-8 grid gap-6 md:mt-10 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-4">
                  <p className="font-sans text-[0.8125rem] text-muted">{study.context}</p>
                  <h3
                    id={slug(study.title)}
                    className="mt-2 font-display text-[clamp(1.75rem,3vw,2.375rem)] font-semibold leading-[1.05] tracking-[-0.01em] text-ink"
                  >
                    {study.title}
                  </h3>
                  <ul className="mt-5 flex flex-wrap gap-2" aria-label="Built with">
                    {study.tags.map(t => (
                      <Chip key={t}>{t}</Chip>
                    ))}
                  </ul>
                  {study.link && (
                    <a
                      href={study.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-5 inline-flex items-center gap-1.5 font-sans text-[0.9375rem] font-medium text-ink"
                    >
                      <span className="ink-link">{study.link.label}</span>
                      <ArrowUpRight size={16} aria-hidden />
                    </a>
                  )}
                </div>

                <dl className="space-y-5 md:col-span-8">
                  {[
                    { k: 'Problem', v: study.problem },
                    { k: 'Built', v: study.built },
                    { k: 'Result', v: study.result },
                  ].map(({ k, v }) => (
                    <div key={k} className="grid gap-1 sm:grid-cols-[6rem_1fr] sm:gap-6">
                      <dt className={`label pt-[0.35rem] ${k === 'Result' ? 'text-gold-ink' : 'text-muted'}`}>{k}</dt>
                      <dd className={`max-w-[64ch] font-body leading-[1.7] ${k === 'Result' ? 'text-ink' : 'text-body'}`}>{v}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

// Stable id for each project heading
function slug(s: string) {
  return 'work-' + s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}
