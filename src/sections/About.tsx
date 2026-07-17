import { motion } from 'framer-motion'
import { Award, FileDown, GraduationCap, Mail, MapPin, Sparkles } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { aboutParagraphs, education, profile } from '@/data/portfolio'

import { fadeUp, stagger } from '@/lib/motion'

const eduIcons = {
  graduation: GraduationCap,
  award: Award,
} as const

const quickFacts = [
  { icon: MapPin, label: 'Location', value: profile.location },
  { icon: Mail, label: 'Email', value: profile.email },
  { icon: Sparkles, label: 'Open to', value: 'Full-time roles & freelance projects' },
]

export default function About() {
  return (
    <section id="about" className="relative py-28">
      <div className="absolute right-0 top-24 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// about me"
          title="Get to know"
          highlight="me better"
          description="A developer who treats every project like a product — thoughtful, polished, and built to last."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2">
          {/* bio */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
          >
            {aboutParagraphs.map((paragraph) => (
              <motion.p key={paragraph.slice(0, 24)} variants={fadeUp} className="mb-5 leading-relaxed text-zinc-400">
                {paragraph}
              </motion.p>
            ))}

            <motion.div variants={fadeUp} className="mt-8 space-y-3">
              {quickFacts.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-4 rounded-xl glass px-5 py-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-400/10 text-emerald-300">
                    <Icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="font-mono text-[11px] uppercase tracking-widest text-zinc-500">{label}</div>
                    <div className="truncate text-sm font-medium text-zinc-200">{value}</div>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.a
              variants={fadeUp}
              href="/Adedeji_John_Abolaji_CV.pdf"
              download
              className="group mt-8 inline-flex items-center gap-2 rounded-full border border-emerald-400/40 px-7 py-3.5 font-semibold text-emerald-300 transition-colors hover:bg-emerald-400/10"
            >
              <FileDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
              Download Résumé
            </motion.a>
          </motion.div>

          {/* education timeline */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="relative"
          >
            <div className="absolute bottom-6 left-[27px] top-6 w-px bg-gradient-to-b from-emerald-400/50 via-cyan-400/30 to-transparent" />
            <div className="space-y-6">
              {education.map((item) => {
                const Icon = eduIcons[item.icon as keyof typeof eduIcons]
                return (
                  <motion.div key={item.degree} variants={fadeUp} className="relative flex gap-5">
                    <span className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-emerald-400/25 bg-[#0a0d13] text-emerald-300 glow-emerald">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div className="flex-1 rounded-2xl glass p-6 transition-colors hover:border-white/20">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-display text-lg font-semibold text-white">{item.degree}</h3>
                        <span className="rounded-full border border-cyan-400/25 bg-cyan-400/5 px-3 py-1 font-mono text-xs text-cyan-300">
                          {item.period}
                        </span>
                      </div>
                      <p className="mt-1 text-sm font-medium text-emerald-300/90">{item.institution}</p>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-400">{item.detail}</p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
