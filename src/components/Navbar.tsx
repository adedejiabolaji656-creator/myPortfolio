import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks } from '@/data/portfolio'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -55% 0px' },
    )
    navLinks.forEach(({ href }) => {
      const el = document.getElementById(href.slice(1))
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-white/5 bg-[#05060a]/85 backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between px-6">
        <a href="#home" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 font-display text-sm font-bold text-zinc-950 glow-emerald">
            BJ
          </span>
          <span className="font-display text-lg font-semibold tracking-tight text-white">
            BeejayDev
          </span>
        </a>

        {/* desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  active === href.slice(1) ? 'text-white' : 'text-zinc-400 hover:text-white'
                }`}
              >
                {label}
                {active === href.slice(1) && (
                  <span className="absolute inset-x-4 -bottom-0.5 h-px bg-gradient-to-r from-emerald-400 to-cyan-400" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full border border-emerald-400/40 px-5 py-2 text-sm font-semibold text-emerald-300 transition-colors hover:bg-emerald-400/10 md:inline-flex"
        >
          Hire Me
        </a>

        {/* mobile toggle */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 transition-colors hover:bg-white/5 md:hidden"
          onClick={() => setOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* mobile panel */}
      {open && (
        <div className="border-t border-white/5 bg-[#05060a]/95 px-6 pb-6 pt-2 backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a
                  href={href}
                  onClick={() => setOpen(false)}
                  className={`block border-b border-white/5 py-3.5 text-sm font-medium transition-colors ${
                    active === href.slice(1) ? 'text-emerald-300' : 'text-zinc-300 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-gradient-to-r from-emerald-400 to-cyan-500 px-5 py-3 text-sm font-semibold text-zinc-950"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  )
}
