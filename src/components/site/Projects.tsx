import { ArrowUpRight } from 'lucide-react'
import { moreProjects, links } from '../../data/content'
import { Reveal, SectionHead } from './primitives'

// More projects: a compact index. One row per project: name, one line,
// tech, and a link when the project is public.
export default function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-title" className="bg-paper py-20 md:py-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <SectionHead id="projects" title="More projects" />

        <Reveal>
          <ul className="border-t border-rule">
            {moreProjects.map(p => (
              <li
                key={p.title}
                className="grid gap-1 border-b border-rule py-5 md:grid-cols-12 md:items-baseline md:gap-6"
              >
                <h3 className="font-display text-[1.375rem] font-semibold leading-tight text-ink md:col-span-3">{p.title}</h3>
                <p className="font-body text-[0.9875rem] leading-[1.65] text-body md:col-span-5">{p.desc}</p>
                <p className="font-sans text-[0.8125rem] text-muted md:col-span-2">{p.tech}</p>
                <div className="whitespace-nowrap md:col-span-2 md:text-right">
                  {p.href && (
                    <a
                      href={p.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.linkLabel}: ${p.title}`}
                      className="inline-flex items-center gap-1 font-sans text-[0.8125rem] font-medium text-gold-ink"
                    >
                      <span className="ink-link">{p.linkLabel}</span>
                      <ArrowUpRight size={14} aria-hidden />
                    </a>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-6 font-sans text-[0.875rem] text-muted">
          More code on{' '}
          <a href={links.github} target="_blank" rel="noopener noreferrer" className="ink-link text-ink">
            GitHub
          </a>
          . Client and internal tools stay private.
        </p>
      </div>
    </section>
  )
}
