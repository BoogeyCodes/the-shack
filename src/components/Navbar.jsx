import { useState } from 'react'
import Logo from './Logo.jsx'
import { brand } from '../data/menu.js'

const links = [
  { href: '#specials', label: 'Specials' },
  { href: '#menu', label: 'Menu' },
  { href: '#deals', label: 'Deals' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-30 border-b border-shack-gold/20 bg-shack-green-deep/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-[max(18px,env(safe-area-inset-left))] py-3">
        <a href="#top" className="flex items-center gap-3">
          <span className="grid h-11 w-11 place-items-center rounded-xl border border-shack-gold/40 bg-gradient-to-br from-shack-green-mid to-shack-green-deep">
            <Logo size={24} />
          </span>
          <span className="leading-none">
            <span className="block font-display text-base font-extrabold tracking-[0.14em] text-white">
              THE SHACK
            </span>
            <span className="mt-1 block text-[0.56rem] font-semibold uppercase tracking-[0.28em] text-shack-gold">
              Come Hungry · Leave Happy
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative py-1.5 text-sm font-medium text-shack-cream/90 transition hover:text-shack-gold-light"
            >
              {l.label}
              <span className="absolute inset-x-0 bottom-0 h-0.5 w-0 bg-shack-gold transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-gradient-to-br from-shack-gold-light to-shack-gold px-5 py-2.5 font-display text-sm font-bold text-shack-green-deep shadow-lg shadow-shack-gold/40 transition hover:-translate-y-0.5 sm:inline-flex"
          >
            <PhoneIcon />
            Order Now
          </a>
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-lg border border-shack-gold/30 text-shack-gold-light md:hidden"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-shack-gold/15 bg-shack-green-deep px-5 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-2.5 text-shack-cream/90 transition hover:bg-white/5 hover:text-shack-gold-light"
            >
              {l.label}
            </a>
          ))}
          <a
            href={`tel:${brand.phoneRaw}`}
            onClick={() => setOpen(false)}
            className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-br from-shack-gold-light to-shack-gold px-5 py-2.5 font-display font-bold text-shack-green-deep"
          >
            <PhoneIcon /> Call {brand.phone}
          </a>
        </nav>
      )}
    </header>
  )
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.2.4 2.5.6 3.8.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1A17 17 0 0 1 3 4c0-.6.5-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.6.6 3.8.1.4 0 .8-.3 1z" />
    </svg>
  )
}
