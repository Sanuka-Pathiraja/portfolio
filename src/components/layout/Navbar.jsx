import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PROFILE } from '../../data/info'

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/projects', label: 'Projects' },
  { to: '/contact',  label: 'Contact'  },
]

const navPillTransition = { type: 'spring', stiffness: 150, damping: 14, mass: 0.72 }

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

  const isLinkActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname.startsWith(to)
  }

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 pointer-events-none">
      <div className="section-max w-full flex items-center justify-between pointer-events-none">
        
        {/* ── LEFT: Floating Logo Island ── */}
        <div className={`pointer-events-auto transition-all duration-700 border border-transparent ${scrolled ? 'glass-nav rounded-2xl md:rounded-[20px] px-2.5 py-2 bg-black/70 shadow-[0_18px_42px_rgba(0,0,0,0.52)] backdrop-blur-xl border-white/[0.1]' : 'px-2 py-1.5 bg-transparent'}`}>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-3 group relative pr-2 bg-transparent border-0 p-0 cursor-pointer"
            aria-label="Scroll to top"
          >
            <div className="absolute inset-0 bg-[var(--accent)] blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 rounded-full pointer-events-none"></div>
            
            <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-[12px] md:rounded-[14px] glass-sm flex items-center justify-center text-[var(--accent)] text-[13px] md:text-[14px] font-bold tracking-wider font-display border border-white/[0.1] group-hover:border-[var(--accent)]/45 group-hover:shadow-[0_0_24px_rgba(103,232,249,0.216)] transition-all duration-500 bg-white/[0.03] group-hover:bg-[var(--accent)]/12 z-10">
              SP
            </div>
            <span className="font-display text-[15px] md:text-[17px] font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors duration-300 drop-shadow-md relative z-10 max-[380px]:hidden">
              {PROFILE.name.split(' ')[0]}
            </span>
          </button>
        </div>

        {/* ── RIGHT: Floating Nav Island ── */}
        <div className="flex items-center gap-2 md:gap-3 pointer-events-auto">
          
          {/* Navigation Dock (Desktop) */}
          <nav
            className={`hidden md:flex items-center gap-1.5 transition-all duration-700 border rounded-full relative overflow-hidden ${
            scrolled 
              ? 'px-2.5 py-2 border-white/[0.1] bg-black/70 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl' 
              : 'px-2 py-1.5 border-white/[0.08] bg-white/[0.01] glass-sm'
          }`}
          >
            <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.18] to-transparent pointer-events-none" />

            {links.map(({ to, label }) => {
              const isActive = isLinkActive(to)
              return (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                data-nav-active={isActive ? 'true' : 'false'}
                className={
                    `inline-flex items-center justify-center text-[12px] md:text-[13px] font-semibold px-3 md:px-4 py-2 rounded-full no-underline relative group overflow-hidden transition-[color,transform] duration-300 ${
                    isActive
                      ? 'text-[var(--accent)] z-10 drop-shadow-[0_0_14px_rgba(103,232,249,0.162)]'
                      : 'text-white/45 hover:text-white/90 hover:bg-white/[0.04] transition-colors duration-300'
                  }`
                }
              >
                  {isActive && (
                    <motion.span
                      layoutId="desktop-nav-pill"
                      aria-hidden="true"
                      className="absolute inset-0 rounded-full liquid-pill-active"
                      transition={navPillTransition}
                    />
                  )}
                  <span data-nav-label="true" className="relative z-10 tracking-wide uppercase font-mono leading-none">{label}</span>
              </NavLink>
            )})}
          </nav>

          {/* ── RESPONSIVE MOBILE MENU BUTTON ── */}
          <button
            className={`md:hidden relative w-11 h-11 rounded-2xl flex items-center justify-center text-white/70 hover:text-white border transition-all shrink-0 ${
              scrolled ? 'glass-nav bg-black/60 shadow-lg border-white/[0.08]' : 'glass-sm border-white/[0.05] bg-white/[0.02]'
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>

        </div>
      </div>

      {/* ── MOBILE DROPDOWN ── */}
      {open && (
        <div className="md:hidden absolute top-[calc(100%+12px)] left-4 right-4 glass rounded-[24px] border border-white/[0.08] shadow-[0_40px_80px_rgba(0,0,0,0.8)] backdrop-blur-3xl px-4 py-5 flex flex-col gap-2 z-50 bg-[#000000]/80">
          {links.map(({ to, label }) => (
            <NavLink
              key={to}
              to={to}
              end={to === '/'}
              className={({ isActive }) =>
                `text-[14px] font-mono tracking-wide uppercase py-3.5 px-4 rounded-[16px] no-underline transition-all ${
                  isActive ? 'bg-[var(--accent)]/10 text-[var(--accent)] border border-[var(--accent)]/20' : 'text-white/50 hover:text-white hover:bg-white/[0.05] border border-transparent'
                }`
              }
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  )
}
