import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Hash, Users, GraduationCap } from 'lucide-react'
import { PROFILE, ABOUT_CONTENT } from '../data/info'
import heroImg from '../assets/WhatsApp Image 2025-08-20 at 07.35.09_aee5bf85.jpg'
import universityImg from '../assets/university.png'
import schoolImg from '../assets/school (2).png'
import ieeeImg from '../assets/IEEE.png'
import toastmasterImg from '../assets/new_TM_logo.png'
import iitImg from '../assets/IIT.png'
import uowImg from '../assets/school.png'

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }
  })
}

export default function Home() {
  return (
    <motion.div initial="hidden" animate="show" exit={{ opacity: 0 }} className="relative">

      {/* ═══ AMBIENT GLOWS ═══ */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[var(--accent)]/[0.04] rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[150px] pointer-events-none"></div>

      <section className="section-max pt-[110px] sm:pt-[120px] lg:pt-[160px] pb-16 sm:pb-20 relative z-10">
        
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-20">
          
          {/* ── LEFT: Cinematic Typography & Narrative ── */}
          <div className="flex-1 w-full relative">
            


            <motion.h1 variants={fade} custom={1} className="font-display text-[clamp(3rem,5.5vw,5.5rem)] font-bold text-white leading-[1.05] tracking-[-0.04em] mb-4 drop-shadow-2xl">
              Sanuka <br />
              <span className="text-gradient drop-shadow-[0_0_40px_rgba(103,232,249,0.2)] py-1 md:py-2 inline-block">Pathiraja</span><span className="text-white/20 inline-block">.</span>
            </motion.h1>

            <motion.div variants={fade} custom={2} className="flex items-center gap-6 mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-[var(--accent)] to-transparent"></div>
              <h2 className="font-display text-[18px] md:text-[22px] font-semibold text-white/50 tracking-tight">
                {PROFILE.role}
              </h2>
            </motion.div>

            <motion.p variants={fade} custom={3} className="text-[15px] md:text-[17px] text-white/40 font-light leading-[1.7] max-w-xl mb-8 drop-shadow-lg">
              {PROFILE.summary}
            </motion.p>

            {/* Interaction Row */}
            <motion.div variants={fade} custom={4} className="flex flex-wrap items-center gap-4 sm:gap-5">
              <Link to="/projects" className="px-8 py-4 rounded-full bg-white text-black text-[15px] font-bold no-underline hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-500 flex items-center gap-2 group/btn z-20 relative">
                Explore Projects <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex gap-3">
                {[
                  { href: PROFILE.github, Icon: Github, name: "GitHub" },
                  { href: PROFILE.linkedin, Icon: Linkedin, name: "LinkedIn" },
                  { href: `mailto:${PROFILE.email}`, Icon: Mail, name: "Email" },
                ].map(({ href, Icon, name }, idx) => (
                  <a key={idx} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}
                     className="w-12 h-12 sm:w-14 sm:h-14 rounded-full glass flex items-center justify-center text-white/80 hover:text-[var(--accent)] hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 hover:shadow-[0_0_20px_rgba(103,232,249,0.15)] hover:scale-110 transition-all duration-500 no-underline border-white/[0.08] z-20 relative">
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </motion.div>

          </div>

          {/* ── RIGHT: Architectural Image Capsule ── */}
          <motion.div variants={fade} custom={2} className="w-full max-w-[360px] lg:w-[40%] flex-shrink-0 relative">
            
            {/* Outline Rings for Depth */}
            <div className="absolute inset-[-10%] rounded-full border border-white/[0.02] animate-pulse"></div>
            <div className="absolute inset-[-20%] rounded-full border border-white/[0.01] animate-float"></div>

            {/* Core Image Capsule */}
            <div className="relative aspect-[4/5] w-full glass rounded-[32px] md:rounded-[44px] p-3 border-white/[0.05] group shadow-[0_0_80px_rgba(0,0,0,0.8)] flex items-center justify-center">
              
              {/* Inner animated gradient border effect */}
              <div className="absolute inset-0 rounded-[32px] md:rounded-[44px] bg-gradient-to-tr from-[var(--accent)]/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-0"></div>

              {/* The Image */}
              <div className="relative w-full h-full rounded-[24px] md:rounded-[36px] overflow-hidden z-10 border border-white/[0.02]">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent z-10 pointer-events-none"></div>
                <img
                  src={heroImg}
                  alt={PROFILE.name}
                  className="w-full h-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </section>

      {/* ═══ AFFILIATIONS & INSTITUTIONS ═══ */}
      <motion.section variants={fade} custom={5} className="section-max pb-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {[
            { img: iitImg, name: "Informatics Institute of Technology" },
            { img: uowImg, name: "School Alma Mater" },
            { img: ieeeImg, name: "IEEE" },
            { img: toastmasterImg, name: "Toastmasters International" }
          ].map((org, i) => (
            <motion.div 
              key={i} 
              variants={fade} 
              custom={6 + i} 
              title={org.name}
              className="glass p-6 md:p-8 flex items-center justify-center group hover:border-[var(--accent)]/30 hover:bg-[var(--accent)]/[0.03] hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] transition-all duration-500 rounded-2xl md:rounded-[28px] relative overflow-hidden h-28 md:h-36"
            >
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <img 
                src={org.img} 
                alt={org.name} 
                className={`${org.name === "Toastmasters International" ? "max-w-[90%] max-h-[90%]" : "max-w-[70%] max-h-[70%]"} object-contain group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]`} 
              />
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ═══ MERGED ABOUT NARRATIVE ═══ */}
      <section id="about" className="section-max pt-16 md:pt-20 pb-24 md:pb-40 relative z-10 border-t border-white/[0.02]">
        
        <motion.div variants={fade} custom={6} className="text-center mb-20">
          <p className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-white/15 mb-5">// Personal Story</p>
          <h2 className="font-display text-[clamp(2.15rem,9.5vw,3.75rem)] font-bold text-white tracking-[-0.03em] leading-none mb-6">
            Beyond the <span className="text-gradient">Binary</span>
          </h2>
          <p className="text-[17px] text-white/30 max-w-xl mx-auto font-light leading-relaxed">
            The intersection of elegant design and system mechanics.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8">

          {/* ── LEFT TIER: Existing Content ── */}
          <div className="lg:col-span-12 flex flex-col gap-6">
            
            {/* ── Personal Journey ── */}
            <motion.div variants={fade} custom={7} className="glass-content p-8 md:p-10 relative overflow-hidden group w-full">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-[12px] glass-sm flex items-center justify-center text-[var(--accent)]/40 border-white/[0.04]">
                  <Sparkles size={15} />
                </div>
                <h3 className="font-display text-xl font-bold text-white/70 tracking-tight">{ABOUT_CONTENT.journey.title}</h3>
              </div>
              <p className="text-[15px] text-white/30 font-light leading-relaxed">
                {ABOUT_CONTENT.journey.content}
              </p>
              <div className="h-[2px] w-16 bg-gradient-to-r from-[var(--accent)]/20 to-transparent rounded-full mt-8"></div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* ── Soft Skills ── */}
              <motion.div variants={fade} custom={8} className="glass-content p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-[12px] glass-sm flex items-center justify-center text-[var(--accent)]/40 border-white/[0.04]">
                    <Hash size={15} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white/70 tracking-tight">Soft Skills</h3>
                </div>
                <div className="space-y-6">
                  {ABOUT_CONTENT.softSkills.map((s, i) => (
                    <div key={i} className="flex gap-4 group/item">
                      <div className="w-[2px] h-auto bg-white/[0.04] group-hover/item:bg-[var(--accent)]/30 transition-colors duration-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-display text-[15px] font-semibold text-white/50 group-hover/item:text-white/70 transition-colors">{s.name}</h4>
                        <p className="text-[13px] text-white/20 font-light mt-1 leading-relaxed">{s.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* ── Community ── */}
              <motion.div variants={fade} custom={9} className="glass-content p-8 md:p-10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-9 h-9 rounded-[12px] glass-sm flex items-center justify-center text-[var(--accent)]/40 border-white/[0.04]">
                    <Users size={15} />
                  </div>
                  <h3 className="font-display text-xl font-bold text-white/70 tracking-tight">Community</h3>
                </div>
                <div className="space-y-6">
                  {ABOUT_CONTENT.community.map((c, i) => (
                    <div key={i} className="flex gap-4 group/item">
                      <div className="w-[2px] h-auto bg-white/[0.04] group-hover/item:bg-[var(--accent)]/30 transition-colors duration-500 rounded-full flex-shrink-0 mt-1"></div>
                      <div>
                        <h4 className="font-display text-[15px] font-semibold text-white/50 group-hover/item:text-white/70 transition-colors">{c.name}</h4>
                        <p className="text-[13px] text-white/20 font-light mt-1 leading-relaxed">{c.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div variants={fade} custom={10} className="glass-content p-7 md:p-9 relative overflow-hidden group">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.08] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute -right-20 -top-20 w-52 h-52 rounded-full bg-[var(--accent)]/[0.05] blur-[60px] pointer-events-none"></div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 relative z-10">
                <div className="rounded-2xl border border-white/[0.05] bg-white/[0.01] p-5 md:p-6">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/20">Focus</p>
                  <p className="font-display text-[18px] md:text-[20px] text-white/80 mt-2">Full-Stack Systems</p>
                  <p className="text-[13px] text-white/35 mt-2 leading-relaxed">Building interfaces and backend logic as one cohesive product.</p>
                </div>
                <div className="rounded-2xl border border-white/[0.05] bg-white/[0.01] p-5 md:p-6">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/20">Community</p>
                  <p className="font-display text-[18px] md:text-[20px] text-white/80 mt-2">IEEE + Toastmasters</p>
                  <p className="text-[13px] text-white/35 mt-2 leading-relaxed">Engineering growth powered by collaboration and communication.</p>
                </div>
                <div className="rounded-2xl border border-white/[0.05] bg-white/[0.01] p-5 md:p-6">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/20">Trajectory</p>
                  <p className="font-display text-[18px] md:text-[20px] text-white/80 mt-2">Internship Ready</p>
                  <p className="text-[13px] text-white/35 mt-2 leading-relaxed">Actively preparing for impactful software engineering internships.</p>
                </div>
              </div>
            </motion.div>


          </div>

        </div>

        {/* ── Educational History (New Image Cards) ── */}
        <div className="mt-28">
          <motion.div variants={fade} custom={11} className="flex items-center justify-center gap-3 sm:gap-4 mb-10 sm:mb-12">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[var(--accent)]/40"></div>
            <div className="w-12 h-12 rounded-[16px] glass-sm flex items-center justify-center text-[var(--accent)] border-white/[0.04]">
              <GraduationCap size={20} />
            </div>
            <h2 className="font-display text-[clamp(1.55rem,6.8vw,1.9rem)] font-bold text-white tracking-tight text-center">Educational Roots</h2>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[var(--accent)]/40"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* University */}
            <motion.div variants={fade} custom={12} className="glass-content flex flex-col relative overflow-hidden group h-full hover:border-[var(--accent)]/20 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              
              <div className="relative h-56 md:h-72 w-full overflow-hidden shrink-0 border-b border-white/[0.04]">
                <img src={universityImg} alt="University" className="w-full h-full object-cover object-center opacity-[0.55] group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 md:left-8 z-10">
                  <span className="font-mono text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--accent)] mb-2 block drop-shadow-md">Undergraduate</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">University Experience</h3>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-start">
                <p className="text-[15px] md:text-[16px] text-white/50 font-light leading-[1.8] group-hover:text-white/70 transition-colors duration-300">
                  This is where my tech career truly began. Immersed in full-stack development and system mechanics, I aggressively built my core programming skills here. As an active <strong className="text-white/90 font-medium">IEEE member</strong>, I continually challenged myself by participating in demanding hackathons, which significantly accelerated my practical engineering capabilities. Our team <strong className="text-[var(--accent)] font-medium">CodeX</strong> secured <strong className="text-white/90 font-medium">10th place</strong> in the CodeRally competition, competing against over 100+ teams.
                </p>
              </div>
            </motion.div>

            {/* School */}
            <motion.div variants={fade} custom={13} className="glass-content flex flex-col relative overflow-hidden group h-full hover:border-[var(--accent)]/20 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              
              <div className="relative h-56 md:h-72 w-full overflow-hidden shrink-0 border-b border-white/[0.04]">
                <img src={schoolImg} alt="School" className="w-full h-full object-cover object-center opacity-[0.55] group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 md:left-8 z-10">
                  <span className="font-mono text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--accent)] mb-2 block drop-shadow-md">Primary & Secondary</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">School Alma Mater</h3>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-start">
                <p className="text-[15px] md:text-[16px] text-white/50 font-light leading-[1.8] group-hover:text-white/70 transition-colors duration-300">
                  I completed my foundational academics here up to my Ordinary Levels. Beyond the classroom, I was deeply involved in athletics, proudly representing the school in badminton. Through rigorous practice, discipline, and teamwork, I was honored to achieve the ultimate title of <strong className="text-[var(--accent)] font-medium">School House Champion</strong> in the year 2019.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

    </motion.div>
  )
}
