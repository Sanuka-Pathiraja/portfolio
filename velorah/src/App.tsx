const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260314_131748_f2ca2a28-fed7-44c8-b9a9-bd9acdd5ec31.mp4'

const NAV_LINKS = [
  { label: 'Home', active: true },
  { label: 'Studio', active: false },
  { label: 'About', active: false },
  { label: 'Journal', active: false },
  { label: 'Reach Us', active: false },
]

export default function App() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-[hsl(201,100%,13%)]">

      {/* ── Fullscreen Video Background ───────────────────── */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={VIDEO_SRC}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* ── Content Layer ─────────────────────────────────── */}
      <div className="relative z-10 flex flex-col min-h-screen">

        {/* ── Navigation ──────────────────────────────────── */}
        <nav className="w-full">
          <div className="max-w-7xl mx-auto flex flex-row items-center justify-between px-8 py-6">

            {/* Logo */}
            <span
              className="text-3xl tracking-tight text-white select-none"
              style={{ fontFamily: "'Instrument Serif', serif" }}
            >
              Velorah<sup className="text-xs">®</sup>
            </span>

            {/* Nav Links — hidden on mobile */}
            <div className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(({ label, active }) => (
                <a
                  key={label}
                  href="#"
                  className={[
                    'text-sm transition-colors duration-200 cursor-pointer',
                    active
                      ? 'text-white'
                      : 'text-[hsl(240,4%,66%)] hover:text-white',
                  ].join(' ')}
                >
                  {label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <button
              className="liquid-glass rounded-full px-6 py-2.5 text-sm text-white
                         transition-transform duration-200 hover:scale-[1.03] cursor-pointer"
            >
              Begin Journey
            </button>
          </div>
        </nav>

        {/* ── Hero ────────────────────────────────────────── */}
        <section
          className="flex-1 flex flex-col items-center justify-center
                     text-center px-6 pt-32 pb-40"
          style={{ paddingTop: '90px', paddingBottom: '90px' }}
        >

          {/* H1 */}
          <h1
            className="animate-fade-rise text-5xl sm:text-7xl md:text-8xl font-normal
                       leading-[0.95] max-w-7xl text-white"
            style={{
              fontFamily: "'Instrument Serif', serif",
              letterSpacing: '-2.46px',
            }}
          >
            Where{' '}
            <em className="not-italic text-[hsl(240,4%,66%)]">dreams</em>
            {' '}rise{' '}
            <em className="not-italic text-[hsl(240,4%,66%)]">through the silence.</em>
          </h1>

          {/* Subtext */}
          <p
            className="animate-fade-rise-delay text-[hsl(240,4%,66%)] text-base sm:text-lg
                       max-w-2xl mt-8 leading-relaxed"
          >
            We&apos;re designing tools for deep thinkers, bold creators, and quiet rebels.
            Amid the chaos, we build digital spaces for sharp focus and inspired work.
          </p>

          {/* Hero CTA */}
          <button
            className="animate-fade-rise-delay-2 liquid-glass rounded-full px-14 py-5
                       text-base text-white mt-12 transition-transform duration-200
                       hover:scale-[1.03] cursor-pointer"
          >
            Begin Journey
          </button>

        </section>
      </div>
    </div>
  )
}
