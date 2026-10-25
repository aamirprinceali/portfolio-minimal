import { ArrowUpRight } from 'lucide-react'
import { agents, stack } from '../../data/content'
import { Reveal, SectionHead } from './primitives'

// Agents & automations: a compact two-column list of what each agent does,
// with a link where the agent is public, and the tools they are built with.
export default function Agents() {
  return (
    <section id="agents" aria-labelledby="agents-title" className="bg-paper pb-20 md:pb-28">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <SectionHead id="agents" title="Agents and automations" />

        <Reveal>
          <ul className="grid gap-x-12 border-t border-rule md:grid-cols-2">
            {agents.map(a => (
              <li key={a.name} className="border-b border-rule py-5">
                <h3 className="font-sans text-[1rem] font-semibold text-ink">
                  {a.href ? (
                    <a href={a.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1">
                      <span className="ink-link">{a.name}</span>
                      <ArrowUpRight size={15} aria-hidden className="text-gold-ink" />
                    </a>
                  ) : (
                    a.name
                  )}
                </h3>
                <p className="mt-1 max-w-[56ch] font-body text-[0.9375rem] leading-[1.65] text-body">{a.does}</p>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="mt-6 font-sans text-[0.875rem] text-muted">
          <span className="font-medium text-body">Built with </span>
          {stack.join(' · ')}
        </p>
      </div>
    </section>
  )
}
