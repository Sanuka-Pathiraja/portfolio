import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail } from 'lucide-react'
import { PROFILE } from '../../data/info'

export default function Footer() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <footer className="relative z-10 mt-auto pt-20 pb-10">
      <div className="section-max">
        <div className="glass p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 border-white/[0.04]">

          {/* Left: Branding */}
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-[10px] glass-sm flex items-center justify-center text-[var(--accent)] text-[11px] font-bold tracking-wider font-display border-[rgba(103,232,249,0.12)]">
              SP
            </div>
            <div className="flex flex-col">
              <span className="font-display text-[14px] font-semibold text-white/70 tracking-tight leading-none">{PROFILE.name}</span>
              <div className="flex items-center gap-3 mt-1.5">
                <span className="text-[11px] text-white/20">© {new Date().getFullYear()}</span>
              </div>
            </div>
          </div>

          {/* Center: System Status */}
          <div className="flex items-center gap-3 glass-sm px-4 md:px-5 py-2 border-white/[0.04] max-w-full">
            <span className="relative flex h-[6px] w-[6px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-50"></span>
              <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-[var(--accent)]"></span>
            </span>
            <span className="font-mono text-[9px] md:text-[10px] font-medium text-white/25 tracking-[0.12em] md:tracking-[0.15em] uppercase break-words">
              Online · Colombo, LK · {time.toLocaleTimeString('en-US', { hour12: false, timeZone: 'Asia/Colombo' })}
            </span>
          </div>

          {/* Right: Socials */}
          <div className="flex items-center gap-2">
            {[
              { href: PROFILE.github, Icon: Github, label: 'Github' },
              { href: PROFILE.linkedin, Icon: Linkedin, label: 'LinkedIn' },
              { href: `mailto:${PROFILE.email}`, Icon: Mail, label: 'Email' },
            ].map(({ href, Icon, label }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                 className="w-9 h-9 rounded-[12px] glass-sm flex items-center justify-center text-white/50 hover:text-[var(--accent)] hover:border-[rgba(103,232,249,0.2)] transition-all duration-300 no-underline border-white/[0.04]"
                 aria-label={label}>
                <Icon size={15} />
              </a>
            ))}
          </div>

        </div>
      </div>
    </footer>
  )
}
