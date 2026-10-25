import { ArrowUpRight } from 'lucide-react'
import { agents, stack } from '../../data/content'
import { Reveal, SectionHead } from './primitives'

const statusStyle: Record<string, string> = {
  Live: 'border-emerald-400/40 text-emerald-300',
  'In use': 'border-gold/50 text-gold',
  Built: 'border-cream/25 text-cream-dim',
}

// Agents & automations: an index of the AI agents Aamir has built and runs,
// described by what they do. Dark "control room" band to set it apart.
export default function Agents() {
  return (
    <section id="agents" aria-labelledby="agents-title" className="bg-ink py-24 text-cream md:py-32">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-10">
        <SectionHead
          id="agents"
          dark
          title={
            <>
              Agents &amp;
              <br />
              automations
            </>
          }
          deck="An agent is software that reads something, decides something, and does something, on a loop. The hard part is picking the job. These are the ones I have put to work."
        />

        <ol className="grid gap-x-12 border-t border-cream/15 md:grid-cols-2">
          {agents.map((a, i) => (
            <Reveal as="li" key={a.name} delay={(i % 2) * 0.06} className="border-b border-cream/15 py-7">
              <div className="flex items-baseline gap-4">
                <span className="tnum w-6 shrink-0 font-sans text-[0.75rem] text-gold">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <h3 className="font-display text-[1.75rem] font-semibold leading-tight text-cream">
                      {a.href ? (
                        <a
                          href={a.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="group inline-flex items-center gap-1.5 hover:text-gold"
                        >
                          {a.name}
                          <ArrowUpRight
                            size={18}
                            aria-hidden
                            className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          />
                        </a>
                      ) : (
                        a.name
                      )}
                    </h3>
                    <span
                      className={`rounded-full border px-2.5 py-0.5 font-sans text-[0.6875rem] font-semibold tracking-[0.08em] uppercase ${statusStyle[a.status]}`}
                    >
                      {a.status}
                    </span>
                  </div>
                  <p className="mt-2 max-w-[52ch] font-body text-[0.9875rem] leading-[1.7] text-cream-dim">{a.does}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-12 flex flex-col gap-4 md:flex-row md:items-baseline md:gap-8">
          <p className="shrink-0 font-display text-xl italic text-gold">Built with</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2 font-sans text-[0.9375rem] text-cream">
            {stack.map(s => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </Reveal>
        <p className="mt-6 max-w-[70ch] font-sans text-[0.8125rem] leading-relaxed text-cream-dim">
          <span className="text-emerald-300">Live</span> means anyone can try it.{' '}
          <span className="text-gold">In use</span> means it runs in real work every week.{' '}
          <span className="text-cream">Built</span> means finished and working, run when needed.
        </p>
      </div>
    </section>
  )
}
