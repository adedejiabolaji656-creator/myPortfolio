import { motion } from 'framer-motion'
import { CheckCircle2, Layers, PenTool, Plug } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { services } from '@/data/portfolio'
import { fadeUp, stagger } from '@/lib/motion'

const serviceIcons = {
  layers: Layers,
  pen: PenTool,
  plug: Plug,
} as const

export default function Services() {
  return (
    <section id="services" className="relative py-28">
      <div className="absolute -right-24 top-1/4 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// what i offer"
          title="My"
          highlight="services"
          description="From the first sketch to the final deploy — here's how I can help bring your product to life."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-6 md:grid-cols-3"
        >
          {services.map((service) => {
            const Icon = serviceIcons[service.icon]
            return (
              <motion.div
                key={service.title}
                variants={fadeUp}
                className="group rounded-2xl glass p-8 transition-all duration-300 hover:-translate-y-2 hover:border-white/20 hover:shadow-[0_20px_60px_-20px_rgba(16,185,129,0.25)]"
              >
                <div
                  className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-colors duration-300 ${service.accent}`}
                >
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 font-display text-xl font-semibold text-white">{service.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{service.description}</p>
                <ul className="mt-6 space-y-2.5">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2.5 text-sm text-zinc-400">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
