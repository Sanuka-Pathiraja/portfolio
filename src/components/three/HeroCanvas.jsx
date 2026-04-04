import { useEffect, useRef } from 'react'

/* ── Single animated racing stripe + stats row ──────── */

const STATS = [
  { num: '4+',   label: 'Projects Shipped' },
  { num: '3',    label: 'Tech Stacks'      },
  { num: '2Y',   label: 'Experience'       },
  { num: '#01',  label: 'Driver'           },
]

function RacingStripe() {
  const dotRef = useRef(null)

  useEffect(() => {
    let start = null
    let raf

    const animate = (ts) => {
      if (!start) start = ts
      const elapsed = (ts - start) % 2400         // 2.4 second loop
      const pct     = elapsed / 2400              // 0 → 1
      const ease    = pct < 0.5
        ? 2 * pct * pct
        : -1 + (4 - 2 * pct) * pct              // ease in-out

      if (dotRef.current) {
        dotRef.current.style.left = `${ease * 100}%`
      }
      raf = requestAnimationFrame(animate)
    }

    raf = requestAnimationFrame(animate)
    return () => cancelAnimationFrame(raf)
  }, [])

  return (
    <div style={{ position: 'relative', width: '100%', height: '2px', margin: '0 auto' }}>
      {/* Track */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(255, 135, 0, 0.12)',
      }} />

      {/* Glow trail */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'linear-gradient(90deg, transparent 0%, rgba(255,135,0,0.06) 40%, rgba(255,135,0,0.18) 60%, transparent 100%)',
      }} />

      {/* Scanning dot */}
      <div
        ref={dotRef}
        style={{
          position: 'absolute',
          top: '50%',
          transform: 'translateX(-50%) translateY(-50%)',
          width: '8px',
          height: '8px',
          borderRadius: '50%',
          background: '#FF8700',
          boxShadow: '0 0 12px 4px rgba(255,135,0,0.6), 0 0 30px 8px rgba(255,135,0,0.2)',
        }}
      />
    </div>
  )
}

export default function HeroHUD() {
  return (
    <div style={{ width: '100%', display: 'flex', flexDirection: 'column', gap: '36px' }}>

      {/* Racing stripe */}
      <RacingStripe />

      {/* Stats row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 1fr)',
        gap: '1px',
        background: 'rgba(255,135,0,0.08)',
        border: '1px solid rgba(255,135,0,0.08)',
      }}>
        {STATS.map(({ num, label }, i) => (
          <div
            key={label}
            style={{
              padding: '20px 24px',
              background: '#0A0A0A',
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
              transition: 'background 0.2s',
              cursor: 'default',
            }}
            onMouseEnter={e => (e.currentTarget.style.background = '#111')}
            onMouseLeave={e => (e.currentTarget.style.background = '#0A0A0A')}
          >
            <span style={{
              fontFamily: "'Barlow Condensed', sans-serif",
              fontWeight: 900,
              fontStyle: 'italic',
              fontSize: '32px',
              lineHeight: 1,
              color: i === 3 ? '#FF8700' : '#F0F0F0',
              letterSpacing: '-1px',
            }}>
              {num}
            </span>
            <span style={{
              fontFamily: "'Share Tech Mono', monospace",
              fontSize: '9px',
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: '#444',
            }}>
              {label}
            </span>
          </div>
        ))}
      </div>

    </div>
  )
}
