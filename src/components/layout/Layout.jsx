import { Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout() {
  const [ambientEnabled, setAmbientEnabled] = useState(false)
  const [shootingStar, setShootingStar] = useState(null)
  const [shootingRain, setShootingRain] = useState(null)

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isCoarsePointer = window.matchMedia('(pointer: coarse)').matches

    setAmbientEnabled(!prefersReducedMotion && !isCoarsePointer)
  }, [])

  useEffect(() => {
    let rainCleanupTimer
    let rainIntervalId

    if (!ambientEnabled) {
      setShootingStar(null)
      setShootingRain(null)
      return undefined
    }

    const randomRange = (min, max) => Math.random() * (max - min) + min
    const sides = ['left', 'right', 'top', 'bottom']

    const pickPoint = (side) => {
      if (side === 'left') return { x: -12, y: randomRange(8, 92) }
      if (side === 'right') return { x: 112, y: randomRange(8, 92) }
      if (side === 'top') return { x: randomRange(8, 92), y: -12 }
      return { x: randomRange(8, 92), y: 112 }
    }

    const launchShootingStar = () => {
      const startSide = sides[Math.floor(Math.random() * sides.length)]
      let endCandidates = []

      if (startSide === 'left') endCandidates = ['right']
      else if (startSide === 'right') endCandidates = ['left']
      else if (startSide === 'top') endCandidates = ['left', 'right']
      else endCandidates = ['left', 'right']

      const endSide = endCandidates[Math.floor(Math.random() * endCandidates.length)]

      const start = pickPoint(startSide)
      const end = pickPoint(endSide)
      const angle = (Math.atan2(end.y - start.y, end.x - start.x) * 180) / Math.PI

      const dxPx = ((end.x - start.x) / 100) * window.innerWidth
      const dyPx = ((end.y - start.y) / 100) * window.innerHeight
      const distancePx = Math.hypot(dxPx, dyPx)
      const durationSec = Math.min(0.42, Math.max(0.18, distancePx / 5200))

      setShootingStar({
        id: Date.now(),
        style: {
          '--sx': `${start.x}vw`,
          '--sy': `${start.y}vh`,
          '--tx': `${end.x}vw`,
          '--ty': `${end.y}vh`,
          '--rot': `${angle}deg`,
          '--dur': `${durationSec}s`,
        },
      })
    }

    const launchShootingRain = () => {
      const rainConfigs = [
        { top: '0px', right: '0px', delay: '0s', dur: '0.42s' },
        { top: '0px', right: '80px', delay: '0.08s', dur: '0.52s' },
        { top: '45px', right: '0px', delay: '0.14s', dur: '0.48s' },
        { top: '0px', right: '180px', delay: '0.2s', dur: '0.46s' },
        { top: '0px', right: '340px', delay: '0.26s', dur: '0.56s' },
        { top: '0px', right: '560px', delay: '0.32s', dur: '0.62s' },
        { top: '220px', right: '0px', delay: '0.38s', dur: '0.5s' },
        { top: '0px', right: '700px', delay: '0.44s', dur: '0.44s' },
        { top: '0px', right: '920px', delay: '0.5s', dur: '0.58s' },
        { top: '0px', right: '450px', delay: '0.56s', dur: '0.54s' },
      ]

      setShootingRain({ id: Date.now(), stars: rainConfigs })

      if (rainCleanupTimer) clearTimeout(rainCleanupTimer)
      rainCleanupTimer = setTimeout(() => {
        setShootingRain(null)
      }, 2200)
    }

    const firstLaunchTimer = setTimeout(launchShootingStar, 10000)
    const rainTimer = setTimeout(() => {
      launchShootingRain()
      rainIntervalId = setInterval(launchShootingRain, 120000)
    }, 50000)
    const intervalId = setInterval(launchShootingStar, 90000)

    return () => {
      clearTimeout(firstLaunchTimer)
      clearTimeout(rainTimer)
      if (rainIntervalId) clearInterval(rainIntervalId)
      clearInterval(intervalId)
      if (rainCleanupTimer) clearTimeout(rainCleanupTimer)
    }
  }, [ambientEnabled])

  return (
    <div className="flex flex-col min-h-screen bg-black relative overflow-hidden">
      <a
        href="#main-content"
        className="skip-link"
      >
        Skip to main content
      </a>

      {ambientEnabled && <div className="stars-layer stars-1"></div>}
      {ambientEnabled && <div className="stars-layer stars-2"></div>}
      {ambientEnabled && <div className="stars-layer stars-3"></div>}
      {ambientEnabled && shootingStar && (
        <div
          key={shootingStar.id}
          className="shooting-star"
          style={shootingStar.style}
          onAnimationEnd={() => setShootingStar(null)}
          aria-hidden="true"
        />
      )}
      {ambientEnabled && shootingRain && (
        <div className="shooting-rain" aria-hidden="true" key={shootingRain.id}>
          {shootingRain.stars.map((star, index) => (
            <span
              key={`${shootingRain.id}-${index}`}
              className="shooting-rain__star"
              style={{
                '--rain-top': star.top,
                '--rain-right': star.right,
                '--rain-delay': star.delay,
                '--rain-dur': star.dur,
              }}
            />
          ))}
        </div>
      )}

      <Navbar />
      <main id="main-content" className="flex-1 pt-[86px] sm:pt-[92px] md:pt-[96px] relative z-10" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
