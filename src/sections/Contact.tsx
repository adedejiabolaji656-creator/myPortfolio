import type { FormEvent } from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, MapPin, Send } from 'lucide-react'
import { toast } from 'sonner'
import SectionHeading from '@/components/SectionHeading'
import { profile } from '@/data/portfolio'
import { fadeUp, stagger } from '@/lib/motion'

const contactCards = [
  { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: Github, label: 'GitHub', value: profile.githubHandle, href: profile.github },
  { icon: Linkedin, label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedin },
  { icon: MapPin, label: 'Location', value: profile.location, href: undefined },
]

const inputClasses =
  'w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3.5 text-sm text-zinc-200 placeholder:text-zinc-600 outline-none transition-colors focus:border-emerald-400/60 focus:bg-white/[0.06]'

export default function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    event.currentTarget.reset()
    toast.success("Message sent! I'll get back to you within 24 hours.")
  }

  return (
    <section id="contact" className="relative py-28">
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-emerald-500/[0.06] to-transparent" />
      <div className="absolute -right-24 bottom-24 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// get in touch"
          title="Let's work"
          highlight="together"
          description="Have a project in mind, a role to fill, or just want to say hi? My inbox is always open."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-2">
          {/* info side */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.h3 variants={fadeUp} className="font-display text-2xl font-semibold text-white">
              Let's build something great
            </motion.h3>
            <motion.p variants={fadeUp} className="mt-4 leading-relaxed text-zinc-400">
              I'm currently open to full-time opportunities and freelance projects. Whether you need a
              complete product built from scratch or an extra pair of hands on your team — I'd love to
              hear about it.
            </motion.p>

            <div className="mt-8 space-y-3">
              {contactCards.map(({ icon: Icon, label, value, href }) => {
                const content = (
                  <>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-300 transition-colors group-hover:bg-emerald-400/20">
                      <Icon className="h-5 w-5" />
                    </span>
                    <span className="min-w-0">
                      <span className="block font-mono text-[11px] uppercase tracking-widest text-zinc-500">
                        {label}
                      </span>
                      <span className="block truncate text-sm font-medium text-zinc-200">{value}</span>
                    </span>
                  </>
                )
                return (
                  <motion.div key={label} variants={fadeUp}>
                    {href ? (
                      <a
                        href={href}
                        target={href.startsWith('http') ? '_blank' : undefined}
                        rel="noreferrer"
                        className="group flex items-center gap-4 rounded-2xl glass px-5 py-4 transition-colors hover:border-emerald-400/30"
                      >
                        {content}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-4 rounded-2xl glass px-5 py-4">{content}</div>
                    )}
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* form side */}
          <motion.form
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            onSubmit={handleSubmit}
            className="rounded-2xl glass p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-500">
                  Your name
                </label>
                <input id="name" name="name" required placeholder="Jane Doe" className={inputClasses} />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-500">
                  Your email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="jane@company.com"
                  className={inputClasses}
                />
              </div>
            </div>

            <div className="mt-5">
              <label htmlFor="subject" className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-500">
                Subject
              </label>
              <input id="subject" name="subject" required placeholder="Let's build something together" className={inputClasses} />
            </div>

            <div className="mt-5">
              <label htmlFor="message" className="mb-2 block font-mono text-xs uppercase tracking-widest text-zinc-500">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project or opportunity..."
                className={`${inputClasses} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 px-7 py-4 font-semibold text-zinc-950 transition-transform duration-300 glow-emerald hover:scale-[1.02]"
            >
              Send message
              <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5" />
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
