const VIDEO_SRC =
  'https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260228_065522_522e2295-ba22-457e-8fdb-fbcd68109c73.mp4'

const NAV_LINKS = ['About', 'Works', 'Services', 'Testimonial']

const TICKER_ITEMS = [
  '✦ Short-Form Video Editing',
  '✦ Reels & TikTok Content',
  '✦ Brand Storytelling',
  '✦ Motion Graphics',
  '✦ Color Grading',
  '✦ Thumbnail Design',
  '✦ YouTube Growth',
  '✦ Creator Partnerships',
]

/* ─── Icons ──────────────────────────────────────────── */
function ArrowNE() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none"
         stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="1.5" y1="11.5" x2="11.5" y2="1.5" />
      <polyline points="4.5 1.5 11.5 1.5 11.5 8.5" />
    </svg>
  )
}

function PlayTriangle() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="currentColor">
      <polygon points="2,1 12,6.5 2,12" />
    </svg>
  )
}

/* ─── Logo ───────────────────────────────────────────── */
function Logo() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '9px', userSelect: 'none' }}>
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <rect width="30" height="30" rx="8" fill="#111" />
        <path d="M9 21 L15 9 L21 21" stroke="white" strokeWidth="2"
              strokeLinecap="round" strokeLinejoin="round" />
        <line x1="11" y1="17" x2="19" y2="17" stroke="white" strokeWidth="2"
              strokeLinecap="round" />
      </svg>
      <span style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                     fontSize: '16px', letterSpacing: '-0.4px', color: '#111' }}>
        Logoisum
      </span>
    </div>
  )
}

/* ─── Floating Founder Card ──────────────────────────── */
function FounderCard() {
  return (
    <div style={{
      position: 'absolute',
      right: '6%',
      top: '50%',
      transform: 'translateY(-50%)',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '12px',
      animation: 'fade-up 0.8s ease-out 0.7s both',
      zIndex: 20,
    }}>
      {/* Frosted card */}
      <div style={{
        background: 'rgba(255,255,255,0.10)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.22)',
        borderRadius: '24px',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '14px',
        boxShadow: '0 8px 40px rgba(0,0,0,0.22), inset 0 1px 0 rgba(255,255,255,0.25)',
        minWidth: '170px',
      }}>
        {/* Photo */}
        <div style={{
          width: '96px',
          height: '96px',
          borderRadius: '50%',
          overflow: 'hidden',
          border: '2.5px solid rgba(255,255,255,0.45)',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)',
          flexShrink: 0,
        }}>
          <img
            src="/owner.png"
            alt="Logoisum Founder"
            style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }}
          />
        </div>

        {/* Name + role */}
        <div style={{ textAlign: 'center' }}>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                      fontSize: '14px', color: '#fff', letterSpacing: '-0.2px' }}>
            Sanuka Perera
          </p>
          <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 400,
                      fontSize: '12px', color: 'rgba(255,255,255,0.65)',
                      marginTop: '2px', letterSpacing: '0.01em' }}>
            Founder & Creative Director
          </p>
        </div>

        {/* Mini stats row */}
        <div style={{
          display: 'flex', gap: '16px', width: '100%',
          borderTop: '1px solid rgba(255,255,255,0.12)',
          paddingTop: '12px',
          justifyContent: 'center',
        }}>
          {[['50+', 'Clients'], ['3M+', 'Views']].map(([num, label]) => (
            <div key={label} style={{ textAlign: 'center' }}>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 700,
                          fontSize: '15px', color: '#fff' }}>
                {num}
              </p>
              <p style={{ fontFamily: "'Barlow', sans-serif", fontWeight: 400,
                          fontSize: '10px', color: 'rgba(255,255,255,0.55)',
                          textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Book button below card */}
      <button className="btn-book" style={{ fontSize: '12px', padding: '8px 8px 8px 16px' }}>
        Book with me
        <span className="arrow-circle" style={{ width: '26px', height: '26px' }}>
          <ArrowNE />
        </span>
      </button>
    </div>
  )
}

/* ─── Main App ───────────────────────────────────────── */
export default function App() {
  const doubled = [...TICKER_ITEMS, ...TICKER_ITEMS]

  return (
    <div style={{ position: 'relative', width: '100%', minHeight: '100vh',
                  display: 'flex', flexDirection: 'column', background: '#000', overflow: 'hidden' }}>

      {/* ── Video ─────────────────────────────────────────── */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={VIDEO_SRC}
        autoPlay loop muted playsInline
      />

      {/* Top vignette — ensures nav text stays readable */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0,
        height: '220px', zIndex: 1,
        background: 'linear-gradient(to bottom, rgba(0,0,0,0.28) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Bottom vignette — grounds the ticker */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0,
        height: '180px', zIndex: 1,
        background: 'linear-gradient(to top, rgba(0,0,0,0.45) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* ── Content layer ─────────────────────────────────── */}
      <div style={{ position: 'relative', zIndex: 10, display: 'flex',
                    flexDirection: 'column', minHeight: '100vh' }}>

        {/* ── Floating Navbar ─────────────────────────────── */}
        <div className="anim-nav" style={{ padding: '18px 24px 0' }}>
          <nav className="floating-nav"
               style={{ maxWidth: '960px', margin: '0 auto',
                        display: 'flex', alignItems: 'center',
                        justifyContent: 'space-between',
                        padding: '12px 14px 12px 20px' }}>
            <Logo />

            {/* Center links */}
            <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
              {NAV_LINKS.map((link) => (
                <a key={link} href="#"
                   style={{ fontFamily: "'Barlow', sans-serif", fontSize: '14px',
                            fontWeight: 500, color: '#555', textDecoration: 'none',
                            letterSpacing: '-0.1px', transition: 'color 0.15s' }}
                   onMouseEnter={e => (e.currentTarget.style.color = '#111')}
                   onMouseLeave={e => (e.currentTarget.style.color = '#555')}>
                  {link}
                </a>
              ))}
            </div>

            {/* Book CTA */}
            <button className="btn-book">
              Book A Free Meeting
              <span className="arrow-circle"><ArrowNE /></span>
            </button>
          </nav>
        </div>

        {/* ── Hero ──────────────────────────────────────────── */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column',
                      alignItems: 'center', justifyContent: 'center',
                      textAlign: 'center', padding: '48px 24px 80px',
                      position: 'relative' }}>

          {/* Founder card — floats on the right */}
          <div className="hidden lg:block">
            <FounderCard />
          </div>

          {/* Live availability badge */}
          <div className="badge-pill anim-badge" style={{ marginBottom: '28px' }}>
            <span className="badge-dot" />
            Available for new projects — 2026
          </div>

          {/* Headline line 1 */}
          <h1 className="anim-line1"
              style={{ fontFamily: "'Barlow', sans-serif",
                       fontSize: 'clamp(34px, 5.8vw, 76px)',
                       fontWeight: 600, lineHeight: 1,
                       letterSpacing: '-4px', color: '#fff',
                       maxWidth: '820px' }}>
            Agency that makes your
          </h1>

          {/* Headline line 2 — Instrument Serif italic */}
          <p className="anim-line2"
             style={{ fontFamily: "'Instrument Serif', serif",
                      fontSize: 'clamp(42px, 7.2vw, 96px)',
                      fontWeight: 400, fontStyle: 'italic',
                      lineHeight: 1, letterSpacing: '-2.5px',
                      color: '#fff', marginTop: '0px' }}>
            videos &amp; reels viral
          </p>

          {/* Subtext */}
          <p className="anim-sub"
             style={{ fontFamily: "'Barlow', sans-serif", fontSize: '17px',
                      fontWeight: 500, color: 'rgba(255,255,255,0.72)',
                      maxWidth: '480px', marginTop: '24px',
                      lineHeight: 1.55, letterSpacing: '-0.1px' }}>
            Short-form video editing for Influencers, Creators and Brands
          </p>

          {/* CTA row */}
          <div className="anim-cta"
               style={{ display: 'flex', alignItems: 'center', gap: '14px',
                        marginTop: '36px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button className="btn-workreel">
              <span className="play-circle"><PlayTriangle /></span>
              See Our Workreel
            </button>
            <a href="#"
               style={{ fontFamily: "'Barlow', sans-serif", fontSize: '14px',
                        fontWeight: 500, color: 'rgba(255,255,255,0.55)',
                        textDecoration: 'none', letterSpacing: '-0.1px',
                        transition: 'color 0.2s' }}
               onMouseEnter={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.9)')}
               onMouseLeave={e => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}>
              View case studies →
            </a>
          </div>
        </div>

        {/* ── Ticker ────────────────────────────────────────── */}
        <div className="anim-ticker"
             style={{ width: '100%', overflow: 'hidden',
                      paddingBottom: '28px', paddingTop: '8px' }}>
          <div className="divider-line" style={{ marginBottom: '18px' }} />
          <div style={{ display: 'flex', overflow: 'hidden' }}>
            <div className="ticker-track">
              {doubled.map((item, i) => (
                <span key={i}
                      style={{ fontFamily: "'Barlow', sans-serif",
                               fontSize: '13px', fontWeight: 500,
                               color: 'rgba(255,255,255,0.55)',
                               letterSpacing: '0.02em', whiteSpace: 'nowrap' }}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
