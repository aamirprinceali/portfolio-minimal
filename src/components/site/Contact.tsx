import { useState, type FormEvent } from 'react'
import { ArrowUpRight, Check, Loader2 } from 'lucide-react'
import { links } from '../../data/content'
import { Reveal } from './primitives'

type Status = 'idle' | 'sending' | 'success' | 'error'

// Contact: direct routes first (email, LinkedIn, phone, book a call), then a
// short form that posts to Web3Forms (the public access key is designed to
// live in the browser; it only allows sending to Aamir's inbox).
export default function Contact() {
  const [status, setStatus] = useState<Status>('idle')
  const [reason, setReason] = useState('A role on my team')

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    setStatus('sending')
    try {
      const res = await fetch('https://api.web3forms.com/submit', { method: 'POST', body: new FormData(form) })
      if (!res.ok) throw new Error('send failed')
      setStatus('success')
      form.reset()
    } catch {
      setStatus('error')
    }
  }

  const direct = [
    { label: 'Email', value: links.email, href: `mailto:${links.email}` },
    { label: 'LinkedIn', value: 'in/aamirnali', href: links.linkedin, external: true },
    { label: 'Phone', value: links.phone, href: links.phoneHref },
    { label: 'Calendar', value: 'Book a call', href: links.booking, external: true },
  ]

  const field =
    'mt-2 w-full rounded-[10px] border border-cream/15 bg-cream/[0.04] px-4 py-3 font-body text-[1rem] text-cream placeholder:text-cream/45 transition-colors focus:border-gold focus:outline-none focus-visible:outline-none'

  return (
    <section id="contact" aria-labelledby="contact-title" className="bg-ink py-24 text-cream md:py-32">
      <div className="mx-auto grid max-w-[1200px] gap-16 px-4 sm:px-6 md:grid-cols-12 md:gap-10 lg:px-10">
        <div className="md:col-span-6">
          <Reveal>
            <h2
              id="contact-title"
              className="font-display text-[clamp(3rem,7vw,5.5rem)] font-semibold leading-[0.92] tracking-[-0.02em] text-cream"
            >
              Let&rsquo;s talk.
            </h2>
            <p className="mt-6 max-w-[40ch] font-body text-lg italic leading-relaxed text-cream-dim">
              Hiring for operations, onboarding, or AI-minded ops roles? Building something and need a hand? Either way,
              I reply within one business day.
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <dl className="mt-12 border-t border-cream/15">
              {direct.map(d => (
                <div key={d.label} className="border-b border-cream/15">
                  <dt className="sr-only">{d.label}</dt>
                  <dd>
                    <a
                      href={d.href}
                      {...(d.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="group flex items-center justify-between gap-4 py-5"
                    >
                      <span className="w-24 shrink-0 font-sans text-[0.8125rem] text-cream-dim">{d.label}</span>
                      <span className="tnum flex-1 break-all font-display text-[clamp(1.375rem,2.4vw,1.75rem)] font-semibold text-cream transition-colors group-hover:text-gold sm:break-normal">
                        {d.value}
                      </span>
                      <ArrowUpRight
                        size={18}
                        aria-hidden
                        className="shrink-0 text-cream/40 transition-[transform,color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-gold"
                      />
                    </a>
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Form */}
        <Reveal delay={0.12} className="md:col-span-5 md:col-start-8">
          <div className="rounded-[16px] border border-cream/10 bg-ink-2 p-6 sm:p-8">
            {status === 'success' ? (
              <div role="status" className="py-10 text-center">
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-gold text-ink">
                  <Check size={22} aria-hidden />
                </span>
                <p className="mt-5 font-display text-3xl font-semibold">Message sent.</p>
                <p className="mt-2 font-body text-cream-dim">Thanks for reaching out. I&rsquo;ll reply within one business day.</p>
                <button
                  type="button"
                  onClick={() => setStatus('idle')}
                  className="ink-link mt-6 font-sans text-sm font-medium text-gold"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} noValidate={false}>
                <p className="font-display text-2xl font-semibold">Send a note</p>
                <input type="hidden" name="access_key" value="61182368-6cdc-4631-9ac8-be2a5293d520" />
                <input type="hidden" name="subject" value={`Portfolio inquiry: ${reason}`} />
                <input type="checkbox" name="botcheck" className="hidden" tabIndex={-1} aria-hidden />

                <fieldset className="mt-6">
                  <legend className="font-sans text-[0.8125rem] text-cream-dim">What&rsquo;s this about?</legend>
                  <div className="mt-2 flex flex-wrap gap-2">
                    {['A role on my team', 'A project for my business', 'Something else'].map(r => (
                      <label
                        key={r}
                        className={`cursor-pointer rounded-full border px-3.5 py-2 font-sans text-[0.8125rem] transition-colors has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-gold ${
                          reason === r ? 'border-gold bg-gold text-ink' : 'border-cream/20 text-cream hover:border-cream/50'
                        }`}
                      >
                        <input
                          type="radio"
                          name="reason"
                          value={r}
                          checked={reason === r}
                          onChange={() => setReason(r)}
                          className="sr-only"
                        />
                        {r}
                      </label>
                    ))}
                  </div>
                </fieldset>

                <label className="mt-5 block font-sans text-[0.8125rem] text-cream-dim" htmlFor="name">
                  Name
                </label>
                <input id="name" name="name" type="text" required autoComplete="name" placeholder="Your name" className={field} />

                <label className="mt-5 block font-sans text-[0.8125rem] text-cream-dim" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.com"
                  className={field}
                />

                <label className="mt-5 block font-sans text-[0.8125rem] text-cream-dim" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  placeholder="The role, or the problem you want solved."
                  className={`${field} resize-y`}
                />

                {status === 'error' && (
                  <p role="alert" className="mt-4 font-sans text-[0.875rem] text-[#F2A38F]">
                    That didn&rsquo;t send. Try again, or email me directly at {links.email}.
                  </p>
                )}

                <button
                  type="submit"
                  disabled={status === 'sending'}
                  className="mt-6 inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-gold font-sans text-[0.9375rem] font-medium text-ink transition-[background-color,transform] duration-300 hover:bg-[#d8b85c] active:scale-[0.98] disabled:cursor-wait disabled:opacity-70"
                >
                  {status === 'sending' ? (
                    <>
                      <Loader2 size={17} className="animate-spin" aria-hidden />
                      Sending
                    </>
                  ) : (
                    'Send message'
                  )}
                </button>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
