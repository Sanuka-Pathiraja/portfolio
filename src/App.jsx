import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense, lazy, useEffect } from 'react'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Layout from './components/layout/Layout'
import Home from './pages/Home'

// Lazy load pages for code splitting
const Projects = lazy(() => import('./pages/Projects'))
const Contact = lazy(() => import('./pages/Contact'))
const About = lazy(() => import('./pages/About'))
const Resume = lazy(() => import('./pages/Resume'))
const ProjectCaseStudy = lazy(() => import('./pages/ProjectCaseStudy'))
const NotFound = lazy(() => import('./pages/NotFound'))

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--accent)]"></div>
  </div>
)

export default function App() {
  const location = useLocation()

  useEffect(() => {
    const resetToTop = () => {
      const lenis = window.__lenis
      if (lenis?.scrollTo) {
        lenis.scrollTo(0, { immediate: true, force: true })
      }

      window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    }

    resetToTop()
    const rafId = requestAnimationFrame(resetToTop)

    return () => cancelAnimationFrame(rafId)
  }, [location.key])

  useEffect(() => {
    let lenis
    let rafId
    let isMounted = true
    let edgeSettleTimer

    const shouldReduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (shouldReduceMotion) {
      return undefined
    }

    const settleToTopEdge = () => {
      if (edgeSettleTimer) clearTimeout(edgeSettleTimer)

      edgeSettleTimer = setTimeout(() => {
        const topOffset = window.scrollY || document.documentElement.scrollTop || 0

        // If the user stops very close to the top, settle to the true top position.
        if (topOffset > 0 && topOffset < 140) {
          const activeLenis = window.__lenis
          if (activeLenis?.scrollTo) {
            activeLenis.scrollTo(0, { duration: 0.45, force: true })
          } else {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
          }
        }
      }, 110)
    }

    window.addEventListener('scroll', settleToTopEdge, { passive: true })

    import('lenis').then(({ default: Lenis }) => {
      if (!isMounted) return

      lenis = new Lenis({
        duration: 1,
        smoothWheel: true,
        wheelMultiplier: 0.9,
        touchMultiplier: 1.1,
      })

      window.__lenis = lenis

      const raf = (time) => {
        lenis.raf(time)
        rafId = requestAnimationFrame(raf)
      }

      rafId = requestAnimationFrame(raf)
    })

    return () => {
      isMounted = false
      if (edgeSettleTimer) clearTimeout(edgeSettleTimer)
      window.removeEventListener('scroll', settleToTopEdge)
      if (rafId) cancelAnimationFrame(rafId)
      if (lenis) lenis.destroy()
      if (window.__lenis === lenis) {
        window.__lenis = null
      }
    }
  }, [])

  return (
    <MotionConfig reducedMotion="user">
      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<Suspense fallback={<PageLoader />}><About /></Suspense>} />
            <Route path="projects" element={<Suspense fallback={<PageLoader />}><Projects /></Suspense>} />
            <Route path="projects/:projectId" element={<Suspense fallback={<PageLoader />}><ProjectCaseStudy /></Suspense>} />
            <Route path="contact" element={<Suspense fallback={<PageLoader />}><Contact /></Suspense>} />
            <Route path="resume" element={<Suspense fallback={<PageLoader />}><Resume /></Suspense>} />
            <Route path="*" element={<Suspense fallback={<PageLoader />}><NotFound /></Suspense>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </MotionConfig>
  )
}
