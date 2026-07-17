import { motion } from 'framer-motion'
import { Database, Palette, Server } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { marqueeSkills, skillCategories } from '@/data/portfolio'
import { fadeUp, stagger } from '@/lib/motion'

const categoryIcons = {
  palette: Palette,
  server: Server,
  database: Database,
} as const

export default function Skills() {
  return (
    <section id="skills" className="relative py-28">
      <div className="absolute -left-24 top-1/3 h-80 w-80 rounded-full bg-emerald-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// my stack"
          title="Skills &"
          highlight="expertise"
          description="The technologies I reach for every day to design, build, and ship modern web applications."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {skillCategories.map((category) => {
            const Icon = categoryIcons[category.icon]
            return (
              <motion.div
                key={category.title}
                variants={fadeUp}
                className="rounded-2xl glass p-7 transition-colors duration-300 hover:border-white/20"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border ${category.accent}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-white">{category.title}</h3>
                <p className="mt-1 text-sm text-zinc-500">{category.blurb}</p>

                <div className="mt-7 space-y-5">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="mb-1.5 flex items-center justify-between text-sm">
                        <span className="font-medium text-zinc-300">{skill.name}</span>
                        <span className="font-mono text-xs text-zinc-500">{skill.level}%</span>
                      </div>
                      <div className="h-2 overflow-hidden rounded-full bg-white/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
                          className={`h-full rounded-full bg-gradient-to-r ${category.bar}`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </motion.div>
      </div>

      {/* marquee */}
      <div className="relative mt-20 overflow-hidden border-y border-white/5 bg-white/[0.02] py-5">
        <div className="flex w-max animate-marquee gap-10">
          {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
            <span key={`${skill}-${index}`} className="flex items-center gap-3 font-mono text-sm text-zinc-500">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
              {skill}
            </span>
          ))}
        </div>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-[#05060a] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-[#05060a] to-transparent" />
      </div>
    </section>
  )
}
