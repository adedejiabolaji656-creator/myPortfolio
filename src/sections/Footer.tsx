import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { navLinks, profile } from '@/data/portfolio'

const socials = [
  { icon: Github, href: profile.github, label: 'GitHub' },
  { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
  { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="relative border-t border-white/5 py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#home" className="flex items-center gap-2.5">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 font-display text-sm font-bold text-zinc-950">
              BJ
            </span>
            <span className="font-display text-lg font-semibold tracking-tight text-white">
              BeejayDev
            </span>
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="text-sm text-zinc-500 transition-colors hover:text-emerald-300">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-zinc-500 transition-colors hover:border-emerald-400/40 hover:text-emerald-300"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 sm:flex-row">
          <p className="text-sm text-zinc-600">
            © {year} {profile.name}. Crafted with React, Tailwind CSS & a lot of coffee.
          </p>
          <a
            href="#home"
            className="group inline-flex items-center gap-2 font-mono text-xs tracking-widest text-zinc-600 transition-colors hover:text-emerald-300"
          >
            BACK TO TOP
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-1" />
          </a>
        </div>
      </div>
    </footer>
  )
}
