import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { ArrowUpRight, FolderGit2, Github } from 'lucide-react'
import SectionHeading from '@/components/SectionHeading'
import { profile, projects } from '@/data/portfolio'
import { fadeUp, stagger } from '@/lib/motion'

/* ---------- hand-crafted CSS mock covers ---------- */

function BrowserFrame({ children, accent }: { children: ReactNode; accent: string }) {
  return (
    <div className={`relative aspect-[3/2] overflow-hidden bg-gradient-to-br ${accent}`}>
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="absolute inset-x-5 bottom-0 top-6 overflow-hidden rounded-t-xl border border-b-0 border-white/10 bg-[#0a0c12]/95 shadow-2xl">
        <div className="flex h-7 items-center gap-1.5 border-b border-white/5 px-3">
          <span className="h-2 w-2 rounded-full bg-rose-400/80" />
          <span className="h-2 w-2 rounded-full bg-amber-400/80" />
          <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
          <div className="ml-3 h-3 flex-1 rounded-md bg-white/5" />
        </div>
        <div className="p-3">{children}</div>
      </div>
    </div>
  )
}

function KanbanMock() {
  const columns: string[][] = [
    ['85%', '60%'],
    ['70%', '90%', '45%'],
    ['55%', '75%'],
  ]
  const dotColors = ['bg-emerald-400/80', 'bg-cyan-400/80', 'bg-violet-400/80']
  return (
    <div className="flex gap-2">
      {columns.map((cards, colIndex) => (
        <div key={colIndex} className="flex-1 space-y-1.5 rounded-lg bg-white/[0.03] p-1.5">
          <div className="flex items-center gap-1.5 px-0.5 pb-1">
            <span className={`h-1.5 w-1.5 rounded-full ${dotColors[colIndex]}`} />
            <div className="h-1.5 w-1/2 rounded bg-white/20" />
          </div>
          {cards.map((width, cardIndex) => (
            <div key={cardIndex} className="rounded-md border border-white/5 bg-white/[0.05] p-1.5">
              <div className="h-1.5 rounded bg-white/20" style={{ width }} />
              <div className="mt-1 h-1.5 w-2/5 rounded bg-white/10" />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

function ShopMock() {
  const tiles = [
    'from-cyan-400/40 to-sky-500/20',
    'from-emerald-400/40 to-teal-500/20',
    'from-violet-400/40 to-fuchsia-500/20',
    'from-amber-400/40 to-orange-500/20',
    'from-rose-400/40 to-pink-500/20',
    'from-indigo-400/40 to-blue-500/20',
  ]
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <div className="h-5 flex-1 rounded-md bg-white/[0.06]" />
        <div className="flex h-5 w-14 items-center justify-center rounded-md bg-cyan-400/80">
          <div className="h-1.5 w-6 rounded bg-zinc-950/60" />
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2">
        {tiles.map((tile, index) => (
          <div key={index} className="rounded-md border border-white/5 bg-white/[0.04] p-1.5">
            <div className={`h-8 rounded bg-gradient-to-br ${tile}`} />
            <div className="mt-1.5 h-1.5 w-4/5 rounded bg-white/20" />
            <div className="mt-1 h-1.5 w-2/5 rounded bg-emerald-400/50" />
          </div>
        ))}
      </div>
    </div>
  )
}

function ChatMock() {
  const messages = [
    { side: 'left', width: '65%', color: 'bg-white/[0.07]' },
    { side: 'right', width: '55%', color: 'bg-violet-400/30' },
    { side: 'left', width: '75%', color: 'bg-white/[0.07]' },
    { side: 'right', width: '45%', color: 'bg-cyan-400/30' },
  ]
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-1.5 pb-1">
        {['bg-emerald-400/70', 'bg-cyan-400/70', 'bg-violet-400/70', 'bg-rose-400/70'].map((color, i) => (
          <span key={i} className={`h-4 w-4 rounded-full border border-[#0a0c12] ${color}`} />
        ))}
        <div className="ml-1 h-1.5 w-16 rounded bg-white/15" />
      </div>
      {messages.map((message, index) => (
        <div
          key={index}
          className={`flex ${message.side === 'right' ? 'justify-end' : 'justify-start'}`}
        >
          <div className={`rounded-lg px-2 py-1.5 ${message.color}`} style={{ width: message.width }}>
            <div className="h-1.5 rounded bg-white/25" />
            <div className="mt-1 h-1.5 w-1/2 rounded bg-white/15" />
          </div>
        </div>
      ))}
      <div className="mt-1 flex items-center gap-2">
        <div className="h-6 flex-1 rounded-full bg-white/[0.06]" />
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-400/80">
          <ArrowUpRight className="h-3 w-3 text-zinc-950" />
        </div>
      </div>
    </div>
  )
}

const covers = {
  kanban: KanbanMock,
  shop: ShopMock,
  chat: ChatMock,
} as const

/* ---------- section ---------- */

export default function Projects() {
  return (
    <section id="projects" className="relative py-28">
      <div className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="// selected work"
          title="Featured"
          highlight="projects"
          description="Full-stack applications designed, built, and shipped end to end with the MERN stack."
        />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => {
            const Cover = covers[project.cover]
            return (
              <motion.article
                key={project.title}
                variants={fadeUp}
                className="group flex flex-col overflow-hidden rounded-2xl glass transition-all duration-300 hover:-translate-y-2 hover:border-emerald-400/30 hover:glow-emerald"
              >
                <div className="overflow-hidden">
                  <div className="transition-transform duration-500 group-hover:scale-[1.05]">
                    <BrowserFrame accent={project.accent}>
                      <Cover />
                    </BrowserFrame>
                  </div>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-0.5 font-mono text-xs text-emerald-300/80">{project.subtitle}</p>
                    </div>
                    <div className="flex shrink-0 gap-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={`${project.title} source code`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
                      >
                        <Github className="h-4 w-4" />
                      </a>
                      <a
                        href={project.demo}
                        aria-label={`${project.title} live demo`}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-zinc-400 transition-colors hover:border-cyan-400/40 hover:text-cyan-300"
                      >
                        <ArrowUpRight className="h-4 w-4" />
                      </a>
                    </div>
                  </div>

                  <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-400">{project.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 font-mono text-xs text-zinc-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.article>
            )
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-semibold text-white transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
          >
            <FolderGit2 className="h-4 w-4" />
            Explore more on GitHub
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
