import { ArrowUpRight } from 'lucide-react'
import { featured, moreWork, earlierBuilds, links, type CaseStudy } from '../../data/content'
import { Chip, Reveal, SectionHead } from './primitives'

// The three-part story every project tells: problem, what I built, result.
function Story({ study, compact = false }: { study: CaseStudy; compact?: boolean }) {
  const rows = [
    { k: 'Problem', v: study.problem },
    { k: 'What I built', v: study.built },
    { k: 'Result', v: study.result },
  ]
  return (
    <dl className={compact ? 'mt-5 space-y-4' : 'mt-7 space-y-5'}>
      {rows.map(({ k, v }) => (
        <div key={k} className={compact ? 'grid gap-1' : 'grid gap-1 sm:grid-cols-[7.5rem_1fr] sm:gap-4'}>
          <dt className={`label pt-[0.3rem] ${k === 'Result' ? 'text-gold-ink' : 'text-muted'}`}>{k}</dt>
          <dd
            className={`font-body leading-[1.7] ${compact ? 'text-[0.9375rem]' : 'text-[1rem]'} ${
              k === 'Result' ? 'text-ink' : 'text-body'
            }`}
          >
            {v}
          </dd>
        </div>
      ))}
    </dl>
  )
}

// Browser-style frame around a real screenshot, with an optional caption
// (used to say when the data shown is a fictional sample).
function Shot({ image, eager = false }: { image: NonNullable<CaseStudy['image']>; eager?: boolean }) {
  return (
    <figure>
      <div className="shot">
        <div aria-hidden className="flex h-7 items-center gap-1.5 bg-[#1b1b1d] px-3">
          <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
          <span className="h-2.5 w-2.5 rounded-full bg-cream/15" />
        </div>
        <div className="overflow-hidden">
          <img
            src={image.src}
            alt={image.alt}
            width={image.width}
            height={image.height}
            loading={eager ? 'eager' : 'lazy'}
            decoding="async"
            className="block h-auto w-full"
          />
        </div>
      </div>
      {image.caption && (
        <figcaption className="mt-3 font-sans text-[0.75rem] text-muted">{image.caption}</figcaption>
      )}
    </figure>
  )
}

function StudyLink({ link }: { link?: CaseStudy['link'] }) {
  if (!link) return null
  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-6 inline-flex items-center gap-1.5 font-sans text-[0.9375rem] font-medium text-ink"
    >
      <span className="ink-link">{link.label}</span>
      <ArrowUpRight size={16} aria-hidden />
    </a>
  )
}

export default function Work() {
  return (
    <section id="work" aria-labelledby="work-title" className="border-t border-rule bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <SectionHead
          id="work"
          title="Selected work"
          deck="Each one started as a real headache, mine or someone else's. Here is the problem, what I built, and what changed."
        />

        {/* Featured case studies, alternating sides */}
        <div className="space-y-24 md:space-y-32">
          {featured.map((study, i) => (
            <article key={study.title} className="group grid items-center gap-10 md:grid-cols-12 md:gap-12">
              <Reveal className={`md:col-span-7 ${i % 2 ? 'md:order-2' : ''}`}>
                {study.image && <Shot image={study.image} />}
              </Reveal>
              <Reveal delay={0.08} className={`md:col-span-5 ${i % 2 ? 'md:order-1' : ''}`}>
                <p className="flex items-center gap-3 font-sans text-[0.8125rem] text-muted">
                  <span className="tnum font-display text-lg italic text-gold-ink">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  {study.context}
                </p>
                <h3 className="mt-3 font-display text-[clamp(2rem,3.4vw,2.75rem)] font-semibold leading-[1.02] tracking-[-0.015em] text-ink">
                  {study.title}
                </h3>
                <Story study={study} />
                <ul className="mt-7 flex flex-wrap gap-2" aria-label="Built with">
                  {study.tags.map(t => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </ul>
                <StudyLink link={study.link} />
              </Reveal>
            </article>
          ))}
        </div>

        {/* More work: three text-led case studies in columns */}
        <div className="mt-28 md:mt-36">
          <h3 className="font-display text-3xl font-semibold text-ink md:text-4xl">More from the notebook</h3>
          <div className="mt-8 grid border-t border-ink md:grid-cols-2">
            {moreWork.map((study, i) => (
              <Reveal
                as="article"
                key={study.title}
                delay={i * 0.06}
                className={`flex flex-col border-b border-rule py-8 md:border-b-0 md:py-10 ${
                  i > 0 ? 'md:border-l md:pl-8' : 'md:pr-8'
                }`}
              >
                {study.image && (
                  <div className="mb-7">
                    <Shot image={study.image} />
                  </div>
                )}
                <p className="font-sans text-[0.8125rem] text-muted">{study.context}</p>
                <h4 className="mt-2 font-display text-[1.75rem] font-semibold leading-[1.08] text-ink">{study.title}</h4>
                <Story study={study} compact />
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Built with">
                  {study.tags.map(t => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </ul>
                <StudyLink link={study.link} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Earlier builds: compact index rows linking to public code */}
        <div className="mt-24">
          <div className="flex flex-wrap items-baseline justify-between gap-3">
            <h3 className="font-display text-2xl font-semibold italic text-ink">Earlier builds, open source</h3>
            <a
              href={links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-sans text-sm font-medium text-ink"
            >
              <span className="ink-link">All repositories on GitHub</span>
              <ArrowUpRight size={15} aria-hidden />
            </a>
          </div>
          <ul className="mt-5 border-t border-ink/80">
            {earlierBuilds.map(b => (
              <li key={b.title} className="border-b border-rule">
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group/row grid gap-1 py-5 transition-colors hover:bg-paper/70 sm:grid-cols-[12rem_1fr_auto] sm:items-baseline sm:gap-6 sm:px-3"
                >
                  <span className="font-display text-2xl font-semibold text-ink">{b.title}</span>
                  <span className="font-body text-[0.9375rem] text-body">
                    {b.desc} <span className="font-sans text-[0.8125rem] text-muted">{b.tags}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 font-sans text-[0.8125rem] font-medium text-gold-ink">
                    View code
                    <ArrowUpRight
                      size={15}
                      aria-hidden
                      className="transition-transform duration-300 group-hover/row:-translate-y-0.5 group-hover/row:translate-x-0.5"
                    />
                  </span>
                </a>
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[62ch] font-sans text-[0.875rem] leading-relaxed text-muted">
            Client and internal tools stay private. Longer write-ups of several projects live on{' '}
            <a href={links.practiceProjects} target="_blank" rel="noopener noreferrer" className="ink-link text-ink">
              the Brick by Brick projects page
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  )
}
