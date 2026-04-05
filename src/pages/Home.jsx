import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Github, Linkedin, Mail, Sparkles, Hash, Users, GraduationCap } from 'lucide-react'
import { ABOUT_CONTENT, PROFILE } from '../data/info'
import heroImg from '../assets/WhatsApp Image 2025-08-20 at 07.35.09_aee5bf85.jpg'
import universityImg from '../assets/university.png'
import schoolImg from '../assets/school (2).png'
import ieeeImg from '../assets/IEEE.png'
import toastmasterImg from '../assets/new_TM_logo.png'
import iitImg from '../assets/IIT.png'
import uowImg from '../assets/school.png'
import SEO from '../components/seo/SEO'
import { trackEvent } from '../utils/analytics'
import SafeImage from '../components/ui/SafeImage'

const fade = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 1, ease: [0.16, 1, 0.3, 1] }
  })
}

const firstViewCardGroup = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.035,
      delayChildren: 0.04,
    },
  },
}

const firstViewCardItem = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
}

export default function Home() {
  const handleEmailClick = (event) => {
    event.preventDefault()

    const subject = encodeURIComponent('Portfolio Inquiry')
    const body = encodeURIComponent('Hi Sanuka,\n\nI would like to discuss...')
    const gmailCompose = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}&su=${subject}&body=${body}`
    const mailtoCompose = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`

    const popup = window.open(gmailCompose, '_blank', 'noopener,noreferrer')
    if (!popup) {
      window.location.href = mailtoCompose
    }

    trackEvent('social_click', { placement: 'hero', network: 'Email' })
  }

  const personSchema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: PROFILE.name,
    jobTitle: PROFILE.role,
    email: PROFILE.email,
    sameAs: [PROFILE.github, PROFILE.linkedin],
  }

  return (
    <motion.div initial={false} animate="show" exit={{ opacity: 0 }} className="relative">
      <SEO
        title="Portfolio"
        description="F1-inspired engineering portfolio featuring full-stack projects, case studies, and internship availability."
        path="/"
        jsonLd={personSchema}
      />

      {/* ═══ AMBIENT GLOWS ═══ */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-[var(--accent)]/[0.04] rounded-full blur-[150px] pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[150px] pointer-events-none"></div>

      <section className="section-max pt-6 sm:pt-8 lg:pt-14 pb-14 sm:pb-20 relative z-10 section-rhythm-lg">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-16">
          
          {/* ── LEFT: Cinematic Typography & Narrative ── */}
          <div className="w-full relative lg:col-span-7 order-2 lg:order-2">

            <motion.h1 variants={fade} custom={1} className="font-display text-[clamp(2.25rem,11vw,5.5rem)] font-bold text-white leading-[1.02] tracking-[-0.04em] mb-3 sm:mb-4 drop-shadow-2xl text-center lg:text-left">
              Sanuka <br />
              <span className="text-gradient drop-shadow-[0_0_40px_rgba(103,232,249,0.2)] py-1 md:py-2 inline-block">Pathiraja</span><span className="text-white/20 inline-block">.</span>
            </motion.h1>

            <motion.div variants={fade} custom={2} className="flex items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-5 sm:mb-6">
              <div className="h-[1px] w-12 bg-gradient-to-r from-[var(--accent)] to-transparent"></div>
              <h2 className="font-display text-[16px] sm:text-[18px] md:text-[22px] font-semibold text-[color:var(--text-secondary)] tracking-tight text-center lg:text-left">
                {PROFILE.role}
              </h2>
            </motion.div>

            <motion.p variants={fade} custom={3} className="text-[14px] sm:text-[15px] md:text-[17px] text-[color:var(--text-tertiary)] font-light leading-[1.7] max-w-xl mb-7 sm:mb-8 drop-shadow-lg text-center lg:text-left mx-auto lg:mx-0">
              {PROFILE.summary}
            </motion.p>

            {/* Interaction Row */}
            <motion.div variants={fade} custom={4} className="flex flex-col sm:flex-row items-center lg:items-start gap-4 sm:gap-5">
              <Link to="/projects" className="w-full sm:w-auto justify-center px-7 sm:px-8 py-3.5 sm:py-4 rounded-full bg-white text-black text-[15px] font-bold no-underline hover:shadow-[0_0_40px_rgba(255,255,255,0.2)] hover:scale-105 transition-all duration-500 flex items-center gap-2 group/btn z-20 relative">
                Explore Projects <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
              </Link>
              
              <div className="flex gap-3 justify-center lg:justify-start">
                {[
                  { href: PROFILE.github, Icon: Github, name: "GitHub" },
                  { href: PROFILE.linkedin, Icon: Linkedin, name: "LinkedIn" },
                  { href: '#email-compose', Icon: Mail, name: "Email" },
                ].map(({ href, Icon, name }, idx) => (
                  <a key={idx} href={href} target="_blank" rel="noopener noreferrer" aria-label={name}
                     className="w-12 h-12 sm:w-14 sm:h-14 rounded-full glass flex items-center justify-center text-white/80 hover:text-[var(--accent)] hover:border-[var(--accent)]/40 hover:bg-[var(--accent)]/10 hover:shadow-[0_0_20px_rgba(103,232,249,0.135)] hover:scale-110 transition-all duration-500 no-underline border-white/[0.08] z-20 relative"
                     onClick={name === 'Email' ? handleEmailClick : () => trackEvent('social_click', { placement: 'hero', network: name })}>
                    <Icon size={22} />
                  </a>
                ))}
              </div>
            </motion.div>

          </div>

          {/* ── RIGHT: Architectural Image Capsule ── */}
          <motion.div variants={fade} custom={2} className="w-full max-w-[320px] sm:max-w-[360px] lg:max-w-none lg:col-span-5 lg:w-full mx-auto lg:mx-0 order-1 lg:order-1 relative">
            
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
                <SafeImage
                  src={heroImg}
                  alt={PROFILE.name}
                  loading="eager"
                  fetchPriority="high"
                  className="w-full h-full object-cover object-top grayscale-[15%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)]"
                />
              </div>
            </div>
          </motion.div>
        </div>

      </section>

      {/* ═══ AFFILIATIONS & INSTITUTIONS ═══ */}
      <motion.section variants={fade} custom={5} className="section-max pb-8 sm:pb-12 relative z-10 section-divider section-rhythm-md">
        <motion.div
          variants={firstViewCardGroup}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
        >
          {[
            { img: iitImg, name: "Informatics Institute of Technology" },
            { img: uowImg, name: "School" },
            { img: ieeeImg, name: "IEEE" },
            { img: toastmasterImg, name: "Toastmasters International" }
          ].map((org, i) => (
            <motion.div 
              key={i} 
              variants={firstViewCardItem}
              title={org.name}
              className="glass-content p-3 sm:p-6 md:p-8 flex items-center justify-center group hover:border-[var(--accent)]/28 hover:bg-[var(--accent)]/[0.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.5)] transition-all duration-500 rounded-2xl md:rounded-[28px] relative overflow-hidden h-[clamp(5.25rem,20vw,9rem)]"
            >
              <div className="absolute top-0 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-white/[0.15] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              <SafeImage 
                src={org.img} 
                alt={org.name} 
                className={`${org.name === "Toastmasters International" ? "max-w-[90%] max-h-[90%]" : "max-w-[70%] max-h-[70%]"} object-contain group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] drop-shadow-[0_10px_20px_rgba(0,0,0,0.3)]`} 
              />
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ═══ MERGED ABOUT NARRATIVE ═══ */}
      <section id="about" className="section-max pt-16 md:pt-20 pb-24 md:pb-40 relative z-10 section-divider section-rhythm-lg">
        
        <motion.div variants={fade} custom={6} className="text-center mb-20">
          <p className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-white/15 mb-5">// Personal Story</p>
          <h2 className="font-display text-[clamp(2.15rem,9.5vw,3.75rem)] font-bold text-white tracking-[-0.03em] leading-[0.97] mb-6">
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

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {/* ── Soft Skills ── */}
              <motion.div variants={fade} custom={8} className="glass-content p-5 sm:p-8 md:p-10 relative overflow-hidden group">
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
              <motion.div variants={fade} custom={9} className="glass-content p-5 sm:p-8 md:p-10 relative overflow-hidden group">
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
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 relative z-10">
                <div className="rounded-2xl border border-white/[0.05] bg-white/[0.01] p-5 md:p-6">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/20">Focus</p>
                  <p className="font-display text-[18px] md:text-[20px] text-white/80 mt-2">Engineering + Delivery</p>
                  <p className="text-[13px] text-white/35 mt-2 leading-relaxed">Building strong product features with clear execution milestones.</p>
                </div>
                <div className="rounded-2xl border border-white/[0.05] bg-white/[0.01] p-5 md:p-6">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/20">Collaboration</p>
                  <p className="font-display text-[18px] md:text-[20px] text-white/80 mt-2">Team Communication</p>
                  <p className="text-[13px] text-white/35 mt-2 leading-relaxed">Keeping stakeholders aligned through concise updates and shared priorities.</p>
                </div>
                <div className="rounded-2xl border border-white/[0.05] bg-white/[0.01] p-5 md:p-6">
                  <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-white/20">Trajectory</p>
                  <p className="font-display text-[18px] md:text-[20px] text-white/80 mt-2">Internship Ready</p>
                  <p className="text-[13px] text-white/35 mt-2 leading-relaxed">Prepared to contribute as an engineer while supporting lightweight project coordination.</p>
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

          <div className="grid grid-cols-2 gap-4 lg:gap-6 items-stretch">
            {/* University */}
            <motion.div variants={fade} custom={12} className="glass-content flex flex-col relative overflow-hidden group h-full hover:border-[var(--accent)]/20 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              
              <div className="relative h-[clamp(12rem,36vw,18rem)] w-full overflow-hidden shrink-0 border-b border-white/[0.04]">
                <SafeImage src={universityImg} alt="University" className="w-full h-full object-cover object-center opacity-[0.55] group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 md:left-8 z-10">
                  <span className="font-mono text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--accent)] mb-2 block drop-shadow-md">Undergraduate</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">University of Westminster</h3>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-start">
                <p className="text-[15px] md:text-[16px] text-white/50 font-light leading-[1.8] group-hover:text-white/70 transition-colors duration-300">
                  I am currently pursuing my degree at <strong className="text-white/90 font-medium">University of Westminster</strong>, affiliated with <strong className="text-[var(--accent)] font-medium">Informatics Institute of Technology</strong>. This environment has strengthened my full-stack engineering foundations and practical teamwork through hackathons and collaborative technical projects.
                </p>
              </div>
            </motion.div>

            {/* School */}
            <motion.div variants={fade} custom={13} className="glass-content flex flex-col relative overflow-hidden group h-full hover:border-[var(--accent)]/20 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              
              <div className="relative h-[clamp(12rem,36vw,18rem)] w-full overflow-hidden shrink-0 border-b border-white/[0.04]">
                <SafeImage src={schoolImg} alt="School" className="w-full h-full object-cover object-center opacity-[0.55] group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 md:left-8 z-10">
                  <span className="font-mono text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--accent)] mb-2 block drop-shadow-md">Primary & Secondary</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">De Mazenod College</h3>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-start">
                <p className="text-[15px] md:text-[16px] text-white/50 font-light leading-[1.8] group-hover:text-white/70 transition-colors duration-300">
                  I completed my foundational academics here up to my Ordinary Levels. Beyond the classroom, I was deeply involved in athletics, proudly representing the school in badminton. Through rigorous practice, discipline, and teamwork, I was honored to achieve the title of <strong className="text-[var(--accent)] font-medium">School House Champion</strong>.
                </p>
              </div>
            </motion.div>
          </div>
        </div>

      </section>

    </motion.div>
  )
}
