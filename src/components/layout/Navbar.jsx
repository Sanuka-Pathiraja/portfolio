import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PROFILE } from '../../data/info'

const links = [
  { to: '/',         label: 'Home'     },
  { to: '/projects', label: 'Projects' },
  { to: '/contact',  label: 'Contact'  },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()

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
        <div className={`pointer-events-auto transition-all duration-700 border border-transparent ${scrolled ? 'glass-nav rounded-2xl md:rounded-[20px] p-2 bg-black/70 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl border-white/[0.08]' : 'p-2 bg-transparent'}`}>
          <Link 
            to="/" 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="no-underline flex items-center gap-3 group relative pr-2"
          >
            <div className="absolute inset-0 bg-[var(--accent)] blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 rounded-full pointer-events-none"></div>
            
            <div className="relative w-9 h-9 md:w-10 md:h-10 rounded-[12px] md:rounded-[14px] glass-sm flex items-center justify-center text-[var(--accent)] text-[13px] md:text-[14px] font-bold tracking-wider font-display border border-white/[0.08] group-hover:border-[var(--accent)]/40 group-hover:shadow-[0_0_20px_rgba(103,232,249,0.2)] transition-all duration-500 bg-white/[0.02] group-hover:bg-[var(--accent)]/10 z-10">
              SP
            </div>
            <span className="font-display text-[15px] md:text-[17px] font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors duration-300 drop-shadow-md relative z-10 max-[380px]:hidden">
              {PROFILE.name.split(' ')[0]}
            </span>
          </Link>
        </div>

        {/* ── RIGHT: Floating Nav Island ── */}
        <div className="flex items-center gap-2 md:gap-3 pointer-events-auto">
          
          {/* Navigation Dock (Desktop) */}
          <nav className={`hidden md:flex items-center gap-1 transition-all duration-700 border rounded-full ${
            scrolled 
              ? 'p-2 border-white/[0.08] bg-black/70 shadow-[0_20px_40px_rgba(0,0,0,0.5)] backdrop-blur-xl' 
              : 'p-1.5 border-white/[0.04] bg-white/[0.01] glass-sm'
          }`}>
            {links.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `text-[12px] md:text-[13px] font-semibold px-4 md:px-5 py-2.5 rounded-full no-underline relative group overflow-hidden ${
                    isActive
                      ? 'text-[var(--accent)]'
                      : 'text-white/40 hover:text-white hover:bg-white/[0.03] transition-colors duration-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {/* The sliding Liquid Gel Pill */}
                    {isActive && (
                      <motion.div
                        layoutId="navGel"
                        transition={{ type: "spring", bounce: 0.25, duration: 0.6 }}
                        className="absolute inset-0 rounded-full z-0 pointer-events-none liquid-pill-active"
                      ></motion.div>
                    )}
                    <span className="relative z-10 tracking-wide uppercase font-mono">{label}</span>
                  </>
                )}
              </NavLink>
            ))}
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
