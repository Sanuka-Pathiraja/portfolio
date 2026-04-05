import { useState, useEffect, useRef } from 'react'
import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion'
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
  const navigate = useNavigate()
  const prefersReducedMotion = useReducedMotion()
  const mobileMenuRef = useRef(null)
  const mobileToggleRef = useRef(null)
  const scrollPositionRef = useRef(0)

  const isLinkActive = (to) => {
    if (to === '/') return location.pathname === '/'
    return location.pathname.startsWith(to)
  }

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const body = document.body
    if (open) {
      scrollPositionRef.current = window.scrollY
      body.style.position = 'fixed'
      body.style.top = `-${scrollPositionRef.current}px`
      body.style.left = '0'
      body.style.right = '0'
      body.style.width = '100%'
      body.style.overflow = 'hidden'
    } else {
      const previousScroll = scrollPositionRef.current
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      body.style.overflow = ''
      if (previousScroll > 0) {
        window.scrollTo({ top: previousScroll, behavior: 'auto' })
      }
    }

    return () => {
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', handleResize, { passive: true })
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  useEffect(() => {
    if (!open) return undefined

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setOpen(false)
      }
    }

    const handlePointerDown = (event) => {
      const menuEl = mobileMenuRef.current
      const toggleEl = mobileToggleRef.current

      if (!menuEl || !toggleEl) return

      const clickedInsideMenu = menuEl.contains(event.target)
      const clickedToggle = toggleEl.contains(event.target)

      if (!clickedInsideMenu && !clickedToggle) {
        setOpen(false)
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    document.addEventListener('pointerdown', handlePointerDown)

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.removeEventListener('pointerdown', handlePointerDown)
    }
  }, [open])

  const handleBrandClick = () => {
    if (location.pathname !== '/') {
      navigate('/')
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 flex justify-center px-3 sm:px-4 md:pt-5 pointer-events-none"
      style={{ paddingTop: 'max(0.75rem, env(safe-area-inset-top))' }}
    >
      <div className="section-max w-full flex items-center justify-between pointer-events-auto">
        
        {/* ── LEFT: Floating Logo Island ── */}
        <div className={`transition-all duration-300 rounded-2xl border ${scrolled ? 'glass-nav bg-black/70 border-white/[0.12] shadow-[0_16px_34px_rgba(0,0,0,0.38)] px-3 py-2' : 'glass-sm bg-black/45 border-white/[0.08] px-2.5 py-1.5'}`}>
          <button
            type="button"
            onClick={handleBrandClick}
            className="flex items-center gap-2.5 sm:gap-3 group relative bg-transparent border-0 p-0 cursor-pointer"
            aria-label="Scroll to top"
          >
            <div className="absolute inset-0 bg-[var(--accent)] blur-xl opacity-0 group-hover:opacity-15 transition-opacity duration-700 rounded-full pointer-events-none"></div>
            
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl sm:rounded-2xl glass-sm flex items-center justify-center text-[var(--accent)] text-[12px] sm:text-[13px] font-bold tracking-wider font-display border border-white/[0.1] group-hover:border-[var(--accent)]/45 group-hover:shadow-[0_0_24px_rgba(103,232,249,0.216)] transition-all duration-500 bg-white/[0.03] group-hover:bg-[var(--accent)]/12 z-10">
              SP
            </div>
            <span className="font-display text-[15px] sm:text-[16px] md:text-[17px] font-semibold tracking-tight text-white/90 group-hover:text-white transition-colors duration-300 drop-shadow-md relative z-10 max-[360px]:hidden">
              {PROFILE.name.split(' ')[0]}
            </span>
          </button>
        </div>

        {/* ── RIGHT: Floating Nav Island ── */}
        <div className="flex items-center gap-2 md:gap-3">
          
          {/* Navigation Dock (Desktop) */}
          <nav
            className={`hidden md:flex items-center gap-1.5 border rounded-full relative overflow-hidden px-2 py-1.5 transition-all duration-300 ${scrolled ? 'glass-nav bg-black/70 border-white/[0.12] shadow-[0_16px_34px_rgba(0,0,0,0.38)]' : 'glass-sm border-white/[0.08] bg-white/[0.01]'}`}
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
            type="button"
            ref={mobileToggleRef}
            className={`md:hidden relative w-11 h-11 rounded-2xl flex items-center justify-center text-white/70 hover:text-white border transition-all shrink-0 ${
              scrolled || open ? 'glass-nav bg-black/65 shadow-lg border-white/[0.12]' : 'glass-sm border-white/[0.06] bg-white/[0.02]'
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-haspopup="menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              {open ? <path d="M18 6L6 18M6 6l12 12" /> : <path d="M4 8h16M4 16h16" />}
            </svg>
          </button>

        </div>
      </div>

      {/* ── MOBILE DROPDOWN ── */}
      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close mobile menu"
              className="md:hidden fixed inset-0 bg-black/55 backdrop-blur-[1px] z-40 pointer-events-auto"
              onClick={() => setOpen(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.2 }}
            />
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu"
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : -8, scale: prefersReducedMotion ? 1 : 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: prefersReducedMotion ? 0 : -8, scale: prefersReducedMotion ? 1 : 0.98 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.18, ease: 'easeOut' }}
              className="md:hidden absolute top-[calc(100%+10px)] left-3 right-3 sm:left-4 sm:right-4 glass-content rounded-2xl border border-white/[0.12] shadow-[0_30px_60px_rgba(0,0,0,0.65)] px-4 py-4 flex flex-col gap-2 z-50 pointer-events-auto"
            >
              {links.map(({ to, label }) => (
                <NavLink
                  key={to}
                  to={to}
                  end={to === '/'}
                  className={({ isActive }) =>
                    `text-[13px] font-mono tracking-[0.12em] uppercase py-3 px-4 rounded-xl no-underline transition-all ${
                      isActive ? 'bg-[var(--accent)]/12 text-[var(--accent)] border border-[var(--accent)]/25' : 'text-white/65 hover:text-white hover:bg-white/[0.05] border border-transparent'
                    }`
                  }
                  onClick={() => setOpen(false)}
                >
                  {label}
                </NavLink>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}
