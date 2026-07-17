import { motion } from 'framer-motion'
import { fadeUp } from '@/lib/motion'

type Props = {
  eyebrow: string
  title: string
  highlight: string
  description?: string
}

export default function SectionHeading({ eyebrow, title, highlight, description }: Props) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-80px' }}
      className="mx-auto max-w-2xl text-center"
    >
      <span className="font-mono text-sm tracking-widest text-emerald-400">{eyebrow}</span>
      <h2 className="mt-3 font-display text-4xl font-bold tracking-tight text-white sm:text-5xl">
        {title} <span className="text-gradient">{highlight}</span>
      </h2>
      {description && <p className="mt-4 leading-relaxed text-zinc-400">{description}</p>}
      <div className="mx-auto mt-6 h-px w-24 bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent" />
    </motion.div>
  )
}
