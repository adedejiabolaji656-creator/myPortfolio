import { motion } from 'framer-motion'
import {
  ArrowRight,
  Atom,
  ChevronDown,
  Database,
  Github,
  Linkedin,
  Mail,
  Server,
  Sparkles,
} from 'lucide-react'
import avatar from '@/assets/profile_pics.png'
import { profile, stats } from '@/data/portfolio'
import { useTypewriter } from '@/hooks/use-typewriter'
import { fadeUp, stagger } from '@/lib/motion'

const socials = [
  { icon: Github, href: profile.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
]

const chips = [
  { icon: Atom, label: 'React', className: '-left-4 top-8 sm:-left-8', anim: 'animate-float' },
  { icon: Server, label: 'Node.js', className: '-right-4 top-24 sm:-right-8', anim: 'animate-float-delayed' },
  { icon: Database, label: 'MongoDB', className: '-left-3 bottom-24 sm:-left-10', anim: 'animate-float-slow' },
  { icon: Sparkles, label: 'Express.js', className: '-right-3 bottom-10 sm:-right-6', anim: 'animate-float' },
]

export default function Hero() {
  const typed = useTypewriter(profile.typewriterWords)

  return (
    <section id="home" className="relative min-h-screen overflow-hidden pb-20 pt-32">
      {/* backdrop */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_70%_60%_at_50%_35%,black,transparent)]" />
      <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-emerald-500/15 blur-3xl" />
      <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] rounded-full bg-cyan-500/10 blur-3xl" />
      <div className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_1fr]">
          {/* left column */}
          <motion.div variants={stagger} initial="hidden" animate="show">
            <motion.div
              variants={fadeUp}
              className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-400/20 bg-emerald-400/5 px-4 py-1.5 text-sm text-emerald-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              {profile.availability}
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl"
            >
              Hi, I'm <span className="text-gradient">{profile.name}</span>
            </motion.h1>

            <motion.h2
              variants={fadeUp}
              className="mt-4 font-display text-2xl font-semibold text-zinc-200 sm:text-3xl"
            >
              {profile.role}
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-6 font-mono text-base text-zinc-400 sm:text-lg">
              {profile.tagline}{' '}
              <span className="font-semibold text-emerald-300">{typed}</span>
              <span className="ml-0.5 inline-block h-5 w-[2px] translate-y-1 animate-caret bg-emerald-400" />
            </motion.p>

            <motion.p variants={fadeUp} className="mt-6 max-w-xl leading-relaxed text-zinc-400">
              {profile.bio}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 px-7 py-3.5 font-semibold text-zinc-950 transition-transform duration-300 glow-emerald hover:scale-[1.03]"
              >
                View my work
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 font-semibold text-white transition-colors hover:border-emerald-400/50 hover:text-emerald-300"
              >
                Get in touch
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex items-center gap-3">
              {socials.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full glass text-zinc-400 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/40 hover:text-emerald-300"
                >
                  <Icon className="h-[18px] w-[18px]" />
                </a>
              ))}
              <span className="ml-2 hidden h-px w-16 bg-gradient-to-r from-white/20 to-transparent sm:block" />
              <span className="hidden font-mono text-xs tracking-widest text-zinc-600 sm:block">
                LET'S CONNECT
              </span>
            </motion.div>
          </motion.div>

          {/* right column — avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative mx-auto w-full max-w-sm"
          >
            <div className="absolute -inset-8 rounded-full bg-gradient-to-br from-emerald-500/15 via-cyan-500/10 to-violet-500/15 blur-2xl" />
            <div className="relative rounded-[2rem] bg-gradient-to-br from-emerald-400/70 via-cyan-400/40 to-violet-500/70 p-[2px] glow-emerald">
              <img
                src={avatar}
                alt={`${profile.name} — ${profile.role}`}
                className="h-auto w-full rounded-[calc(2rem-2px)] object-cover"
              />
              <div className="pointer-events-none absolute inset-0 rounded-[calc(2rem-2px)] bg-gradient-to-t from-[#05060a]/50 via-transparent to-transparent" />
            </div>

            {chips.map(({ icon: Icon, label, className, anim }) => (
              <div
                key={label}
                className={`absolute ${className} ${anim} hidden items-center gap-2 rounded-xl glass px-3.5 py-2.5 text-sm font-medium text-zinc-200 shadow-lg sm:flex`}
              >
                <Icon className="h-4 w-4 text-emerald-300" />
                {label}
              </div>
            ))}
          </motion.div>
        </div>

        {/* stats strip */}
        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-60px' }}
          className="mt-20 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeUp}
              className="rounded-2xl glass px-6 py-5 text-center transition-colors hover:border-emerald-400/25"
            >
              <div className="font-display text-3xl font-bold text-gradient">{stat.value}</div>
              <div className="mt-1 text-sm text-zinc-500">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label="Scroll to about"
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-zinc-600 transition-colors hover:text-emerald-300 md:flex"
      >
        <span className="font-mono text-[10px] tracking-[0.3em]">SCROLL</span>
        <ChevronDown className="h-4 w-4 animate-bounce" />
      </a>
    </section>
  )
}
