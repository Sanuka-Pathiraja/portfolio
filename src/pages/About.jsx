import { motion } from 'framer-motion'
import { Sparkles, Hash, Users, Heart, GraduationCap } from 'lucide-react'
import { ABOUT_CONTENT } from '../data/info'
import SEO from '../components/seo/SEO'
import SafeImage from '../components/ui/SafeImage'
import useMobileLayout from '../utils/useMobileLayout'

import universityImg from '../assets/university.png'
import schoolImg from '../assets/school (2).png'

const fade = {
  hidden: { opacity: 0, y: 20 },
  show: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }
  })
}

const sectionIcons = [Sparkles, Hash, Users, Heart]

export default function About() {
  const isMobile = useMobileLayout()

  if (isMobile) {
    return (
      <motion.div initial="hidden" animate="show" exit={{ opacity: 0 }} className="mobile-about">
        <SEO
          title="About"
          description="Personal journey, strengths, community work, and educational background of Sanuka Pathiraja."
          path="/about"
        />

        <section className="section-max mobile-about__hero">
          <p className="mobile-about__eyebrow">Personal Story</p>
          <h1>
            Beyond the <span>Binary</span>
          </h1>
          <p>
            The intersection of elegant design and system mechanics.
          </p>
        </section>

        <section className="section-max mobile-about__cards">
          <article className="mobile-about__card glass-content">
            <div className="mobile-about__card-head">
              <Sparkles size={16} />
              <h2>{ABOUT_CONTENT.journey.title}</h2>
            </div>
            <p>{ABOUT_CONTENT.journey.content}</p>
          </article>

          <article className="mobile-about__card glass-content">
            <div className="mobile-about__card-head">
              <Hash size={16} />
              <h2>Soft Skills</h2>
            </div>
            <div className="mobile-about__list">
              {ABOUT_CONTENT.softSkills.map((skill) => (
                <div key={skill.name}>
                  <h3>{skill.name}</h3>
                  <p>{skill.desc}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="mobile-about__card glass-content">
            <div className="mobile-about__card-head">
              <Users size={16} />
              <h2>Community</h2>
            </div>
            <div className="mobile-about__list">
              {ABOUT_CONTENT.community.map((community) => (
                <div key={community.name}>
                  <h3>{community.name}</h3>
                  <p>{community.desc}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="mobile-about__card glass-content">
            <div className="mobile-about__card-head">
              <Heart size={16} />
              <h2>Interests</h2>
            </div>
            <div className="mobile-about__chips">
              {ABOUT_CONTENT.interests.map((interest) => (
                <span key={interest}>{interest}</span>
              ))}
            </div>
          </article>
        </section>

        <section className="section-max mobile-about__education">
          <div className="mobile-about__edu-head">
            <GraduationCap size={17} />
            <h2>Education</h2>
          </div>

          <article className="mobile-about__edu-card glass-content">
            <SafeImage src={universityImg} alt="University" className="mobile-about__edu-image" />
            <div className="mobile-about__edu-content">
              <p>Undergraduate</p>
              <h3>University Experience</h3>
            </div>
          </article>

          <article className="mobile-about__edu-card glass-content">
            <SafeImage src={schoolImg} alt="School" className="mobile-about__edu-image" />
            <div className="mobile-about__edu-content">
              <p>Primary & Secondary</p>
              <h3>School Alma Mater</h3>
            </div>
          </article>
        </section>
      </motion.div>
    )
  }

  return (
    <motion.div initial="hidden" animate="show" exit={{ opacity: 0 }}>
      <SEO
        title="About"
        description="Personal journey, strengths, community work, and educational background of Sanuka Pathiraja."
        path="/about"
      />

      <section className="section-max pt-8 sm:pt-12 md:pt-20 pb-16 sm:pb-24 md:pb-40">

        <motion.div variants={fade} custom={0} className="text-center mb-10 sm:mb-14 md:mb-20">
          <p className="font-mono text-[11px] font-medium tracking-[0.2em] uppercase text-white/15 mb-5">// Personal Story</p>
          <h1 className="font-display text-[clamp(2rem,10vw,4.4rem)] font-bold text-white tracking-[-0.03em] leading-none mb-6">
            Beyond the <span className="text-gradient">Binary</span>
          </h1>
          <p className="text-[15px] sm:text-[17px] text-white/30 max-w-xl mx-auto font-light leading-relaxed">
            The intersection of elegant design and system mechanics.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-2.5 sm:gap-6">



          {/* ── Personal Journey ── */}
          <motion.div variants={fade} custom={1} className="glass-content p-4 sm:p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-8">
              <div className="w-9 h-9 rounded-[12px] glass-sm flex items-center justify-center text-[var(--accent)]/40 border-white/[0.04]">
                <Sparkles size={15} />
              </div>
              <h2 className="font-display text-[13px] sm:text-xl font-bold text-white/70 tracking-tight">{ABOUT_CONTENT.journey.title}</h2>
            </div>
            <p className="text-[12px] sm:text-[15px] text-white/30 font-light leading-relaxed line-clamp-6 sm:line-clamp-none">
              {ABOUT_CONTENT.journey.content}
            </p>
            <div className="h-[2px] w-16 bg-gradient-to-r from-[var(--accent)]/20 to-transparent rounded-full mt-8"></div>
          </motion.div>

          {/* ── Soft Skills ── */}
          <motion.div variants={fade} custom={2} className="glass-content p-4 sm:p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-8">
              <div className="w-9 h-9 rounded-[12px] glass-sm flex items-center justify-center text-[var(--accent)]/40 border-white/[0.04]">
                <Hash size={15} />
              </div>
              <h2 className="font-display text-[13px] sm:text-xl font-bold text-white/70 tracking-tight">Soft Skills</h2>
            </div>
            <div className="space-y-3 sm:space-y-6">
              {ABOUT_CONTENT.softSkills.map((s, i) => (
                <div key={i} className="flex gap-4 group/item">
                  <div className="w-[2px] h-auto bg-white/[0.04] group-hover/item:bg-[var(--accent)]/30 transition-colors duration-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-display text-[12px] sm:text-[15px] font-semibold text-white/50 group-hover/item:text-white/70 transition-colors">{s.name}</h4>
                    <p className="text-[11px] sm:text-[13px] text-white/20 font-light mt-1 leading-relaxed line-clamp-3 sm:line-clamp-none">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Community ── */}
          <motion.div variants={fade} custom={3} className="glass-content p-4 sm:p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-8">
              <div className="w-9 h-9 rounded-[12px] glass-sm flex items-center justify-center text-[var(--accent)]/40 border-white/[0.04]">
                <Users size={15} />
              </div>
              <h2 className="font-display text-[13px] sm:text-xl font-bold text-white/70 tracking-tight">Community</h2>
            </div>
            <div className="space-y-3 sm:space-y-6">
              {ABOUT_CONTENT.community.map((c, i) => (
                <div key={i} className="flex gap-4 group/item">
                  <div className="w-[2px] h-auto bg-white/[0.04] group-hover/item:bg-[var(--accent)]/30 transition-colors duration-500 rounded-full flex-shrink-0 mt-1"></div>
                  <div>
                    <h4 className="font-display text-[12px] sm:text-[15px] font-semibold text-white/50 group-hover/item:text-white/70 transition-colors">{c.name}</h4>
                    <p className="text-[11px] sm:text-[13px] text-white/20 font-light mt-1 leading-relaxed line-clamp-3 sm:line-clamp-none">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Interests ── */}
          <motion.div variants={fade} custom={4} className="glass-content p-4 sm:p-8 md:p-10 relative overflow-hidden group">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.06] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="flex items-center gap-2.5 sm:gap-3 mb-4 sm:mb-8">
              <div className="w-9 h-9 rounded-[12px] glass-sm flex items-center justify-center text-[var(--accent)]/40 border-white/[0.04]">
                <Heart size={15} />
              </div>
              <h2 className="font-display text-[13px] sm:text-xl font-bold text-white/70 tracking-tight">Interests</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
              {ABOUT_CONTENT.interests.map(interest => (
                <div key={interest} className="glass-sm px-5 py-3.5 border-white/[0.03] hover:border-white/[0.08] transition-all duration-300 text-center group/interest">
                  <span className="font-mono text-[11px] font-bold tracking-[0.1em] uppercase text-white/20 group-hover/interest:text-white/40 transition-colors">{interest}</span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

        {/* ── Educational History (New Image Cards) ── */}
        <div className="mt-14 sm:mt-20 md:mt-28">
          <motion.div variants={fade} custom={4} className="flex items-center justify-center gap-4 mb-12">
            <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-[var(--accent)]/40"></div>
            <div className="w-12 h-12 rounded-[16px] glass-sm flex items-center justify-center text-[var(--accent)] border-white/[0.04]">
              <GraduationCap size={20} />
            </div>
            <h2 className="font-display text-3xl font-bold text-white tracking-tight">Educational Roots</h2>
            <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-[var(--accent)]/40"></div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
            {/* University */}
            <motion.div variants={fade} custom={5} className="glass-content flex flex-col relative overflow-hidden group h-full hover:border-[var(--accent)]/20 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              
              <div className="relative h-[clamp(12rem,36vw,18rem)] w-full overflow-hidden shrink-0 border-b border-white/[0.04]">
                <SafeImage src={universityImg} alt="University" className="w-full h-full object-cover object-center opacity-[0.55] group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
                <div className="absolute bottom-6 left-6 md:left-8 z-10">
                  <span className="font-mono text-[10px] md:text-[11px] font-bold tracking-[0.2em] uppercase text-[var(--accent)] mb-2 block drop-shadow-md">Undergraduate</span>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">University Experience</h3>
                </div>
              </div>
              
              <div className="p-6 md:p-8 flex-1 flex flex-col justify-start">
                <p className="text-[15px] md:text-[16px] text-white/50 font-light leading-[1.8] group-hover:text-white/70 transition-colors duration-300">
                  This is where my tech career truly began. Immersed in full-stack development and system mechanics, I aggressively built my core programming skills here. As an active <strong className="text-white/90 font-medium">IEEE member</strong>, I continually challenged myself by participating in demanding hackathons, which significantly accelerated my practical engineering capabilities and real-world system architectural understanding.
                </p>
              </div>
            </motion.div>

            {/* School */}
            <motion.div variants={fade} custom={6} className="glass-content flex flex-col relative overflow-hidden group h-full hover:border-[var(--accent)]/20 transition-colors duration-500">
              <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/[0.1] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>
              
              <div className="relative h-[clamp(12rem,36vw,18rem)] w-full overflow-hidden shrink-0 border-b border-white/[0.04]">
                <SafeImage src={schoolImg} alt="School" className="w-full h-full object-cover object-center opacity-[0.55] group-hover:opacity-80 group-hover:scale-105 transition-all duration-700" />
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
