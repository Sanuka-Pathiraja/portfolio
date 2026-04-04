import { motion } from 'framer-motion'
import { Github, ExternalLink, Shield, Users } from 'lucide-react'
import { PROJECTS } from '../data/info'
import { TECH_ICONS } from '../data/techIcons'

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  })
}

export default function Projects() {
  const disciplines = [
    "Client-Server Architecture", 
    "Algorithm Design", 
    "Data Structures", 
    "System Optimization", 
    "Relational Databases", 
    "Full-Stack Integration"
  ]
  // Duplicate for infinite seamless scroll
  const marqueeDisciplines = [...disciplines, ...disciplines, ...disciplines, ...disciplines]

  return (
    <motion.div initial="hidden" animate="show" exit={{ opacity: 0 }}>
      <section className="section-max pt-16 md:pt-20 pb-16 md:pb-20">

        {/* ── CORE ENGINEERING INFRASTRUCTURE (THE CUPBOARD) ── */}
        <motion.div variants={fade} custom={0} className="mb-20 md:mb-32 mt-3 md:mt-4">
          
          <div className="text-center mb-10">
            <span className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-[var(--accent)] mb-3 block drop-shadow-md">Technology Stack</span>
            <h2 className="font-display text-[clamp(1.9rem,8.2vw,3rem)] font-bold text-white tracking-[-0.03em]">
              Core Engineering <span className="text-gradient drop-shadow-[0_0_20px_rgba(103,232,249,0.2)]">Infrastructure</span>
            </h2>
          </div>

          {/* The Cupboard Container */}
          <div className="glass p-6 md:p-8 rounded-[36px] border-white/[0.04] shadow-[inset_0_0_100px_rgba(0,0,0,0.8)] relative">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 relative z-10">
              
              {TECH_ICONS.map((tech, idx) => (
                <motion.div
                  key={tech.name}
                  variants={fade}
                  custom={1 + (idx % 6)}
                  className="bg-black/60 border border-white/[0.03] p-6 rounded-[20px] flex flex-col items-center justify-center gap-5 group hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/[0.03] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 relative overflow-hidden"
                >
                  {/* Top glass reflection line for physical cube authentic feel */}
                  <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  <div className="w-12 h-12 relative z-10 flex items-center justify-center pointer-events-none group-hover:-translate-y-1.5 transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                    <img 
                      src={tech.icon} 
                      alt={tech.name} 
                      className="max-w-full max-h-full object-contain brightness-[0.7] group-hover:brightness-110 group-hover:scale-125 transition-all duration-500" 
                    />
                  </div>
                  
                  <span className="font-mono text-[9px] font-bold tracking-[0.2em] uppercase text-white/30 group-hover:text-white transition-colors z-10">
                    {tech.name}
                  </span>
                </motion.div>
              ))}

            </div>
          </div>
        </motion.div>

      </section>

      {/* ── CORE DISCIPLINES MARQUEE ── */}
      <motion.section variants={fade} custom={1} className="w-full border-y border-white/[0.03] bg-white/[0.01] py-6 md:py-8 mb-20 md:mb-32 relative overflow-hidden backdrop-blur-sm z-10">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

        <div className="marquee-container flex flex-col gap-6">
          <div className="section-max flex items-center justify-center gap-4 mb-2">
            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse shadow-[0_0_10px_var(--accent)]"></span>
            <span className="font-mono text-[10px] font-bold tracking-[0.3em] uppercase text-white/30 text-center">Core Disciplines</span>
            <span className="w-1.5 h-1.5 bg-[var(--accent)] rounded-full animate-pulse shadow-[0_0_10px_var(--accent)]"></span>
          </div>

          <div className="animate-marquee flex items-center gap-10 md:gap-16 px-10">
            {marqueeDisciplines.map((discipline, i) => (
              <div key={`${discipline}-${i}`} className="flex items-center gap-10 md:gap-16 group/marquee cursor-default">
                <span className="font-display text-[13px] md:text-[15px] font-medium tracking-[0.15em] uppercase text-white/40 group-hover/marquee:text-[var(--accent)] transition-colors whitespace-nowrap">
                  {discipline}
                </span>
                <span className="text-[var(--accent)]/40 text-[12px] opacity-60">✦</span>
              </div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Re-open container for project cards */}
      <section className="section-max pb-24 md:pb-40">
        
        {/* ── PROJECT CARDS ── */}
        <motion.div variants={fade} custom={2} className="text-center mb-14 md:mb-20">
          <p className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-white/15 mb-5">// Project Cards</p>
          <h1 className="font-display text-[clamp(2.25rem,10vw,4.5rem)] font-bold text-white tracking-[-0.03em] leading-none mb-6">
            Selected <span className="text-gradient">Creations</span>
          </h1>
          <p className="text-[17px] text-white/30 max-w-xl mx-auto font-light leading-relaxed">
            Full-stack deployments, optimization tools, and academic research.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {PROJECTS.map((proj, i) => (
            <motion.div
              key={proj.id}
              variants={fade}
              custom={i + 1}
              className="glass group p-8 md:p-10 flex flex-col relative overflow-hidden border-white/[0.04] hover:border-white/[0.08]"
            >
              {/* Top edge light */}
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              {/* Ambient glow on hover */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-400/[0.03] rounded-full blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

              {/* Header */}
              <div className="flex items-start justify-between mb-6 relative z-10">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-white/15 glass-sm px-3 py-1 border-white/[0.04] group-hover:text-white/30 group-hover:border-white/[0.08] transition-all">
                    {proj.type}
                  </span>
                </div>
                <div className="flex gap-2">
                  {proj.github && (
                    <a href={proj.github} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-[12px] glass-sm flex items-center justify-center text-white/15 hover:text-white/50 border-white/[0.04] hover:border-white/[0.1] transition-all duration-300">
                      <Github size={15} />
                    </a>
                  )}
                  {proj.live && (
                    <a href={proj.live} target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-[12px] glass-sm flex items-center justify-center text-[var(--accent)]/40 hover:text-[var(--accent)] border-white/[0.04] hover:border-[rgba(103,232,249,0.15)] transition-all duration-300">
                      <ExternalLink size={15} />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="mb-4 relative z-10 flex flex-col gap-2">
                <h2 className="font-display text-2xl font-bold text-white/80 group-hover:text-white tracking-tight transition-colors">
                  {proj.title}
                </h2>
                {proj.role && (
                  <span className="font-mono text-[10px] uppercase font-bold tracking-[0.1em] text-[var(--accent)]/90">
                    {proj.role}
                  </span>
                )}
              </div>
              <p className="text-[15px] text-white/25 font-light leading-relaxed mb-8 flex-grow relative z-10">
                {proj.desc}
              </p>

              {/* Stack Tags */}
              <div className="flex flex-wrap gap-2 pt-6 border-t border-white/[0.04] relative z-10">
                {proj.stack.map(tech => (
                  <span key={tech} className="font-mono text-[9px] font-bold tracking-[0.15em] uppercase text-white/15 glass-sm px-3 py-1 border-white/[0.03] group-hover:text-white/25 transition-colors">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </section>
    </motion.div>
  )
}
