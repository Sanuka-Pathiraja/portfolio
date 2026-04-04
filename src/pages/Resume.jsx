import { FileText, Download, ExternalLink } from 'lucide-react'
import { Link } from 'react-router-dom'
import { skills, timeline as experience } from '../data/projects'
import './Resume.css'

const educationItems = [
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'University',
    period: '2023 – Present',
    details: 'Studying algorithms, data structures, software engineering, and system design.',
  },
]

const resumeSkills = [
  { label: 'Python', level: 90 },
  { label: 'JavaScript / React', level: 85 },
  { label: 'Flutter / Dart', level: 80 },
  { label: 'Node.js / Express', level: 75 },
  { label: 'Data Structures & Algorithms', level: 85 },
  { label: 'Client-Server Architecture', level: 80 },
]

export default function Resume() {
  return (
    <div className="resume-page">
      {/* Hero */}
      <section className="resume-hero section">
        <div className="orb orb-purple" style={{ width: 300, height: 300, bottom: -80, right: -80 }} />
        <div className="container">
          <p className="section-label animate-fade-in-up">My Resume</p>
          <h1 className="section-title animate-fade-in-up delay-100">
            Skills & <span className="gradient-text">Experience</span>
          </h1>
          <p className="section-subtitle animate-fade-in-up delay-200">
            A snapshot of my technical background, education, and key achievements.
          </p>
          <div className="resume-hero__actions animate-fade-in-up delay-300">
            <a
              href="/resume.pdf"
              download
              className="btn btn-primary"
              id="download-resume-btn"
            >
              <Download size={16} />
              Download PDF
            </a>
            <Link to="/contact" className="btn btn-secondary">
              Get In Touch
            </Link>
          </div>
        </div>
      </section>

      {/* Resume Body */}
      <section className="resume-body section" style={{ paddingTop: 0 }}>
        <div className="container resume-body__grid">
          {/* Left Column */}
          <div className="resume-left">
            {/* About */}
            <div className="resume-section glass-card animate-fade-in-up">
              <h2 className="resume-section-title">Profile</h2>
              <p className="resume-section-text">
                Computer Science student with hands-on experience building full-stack web apps, mobile applications,
                and algorithm implementations. Passionate about understanding systems deeply and building software 
                that solves real-world problems. Active communicator (Toastmasters) and community member.
              </p>
            </div>

            {/* Education */}
            <div className="resume-section glass-card animate-fade-in-up delay-100">
              <h2 className="resume-section-title">Education</h2>
              {educationItems.map((e, i) => (
                <div key={i} className="resume-edu-item">
                  <div className="resume-edu-header">
                    <h3>{e.degree}</h3>
                    <span className="resume-edu-year">{e.period}</span>
                  </div>
                  <p className="resume-edu-inst">{e.institution}</p>
                  <p className="resume-edu-detail">{e.details}</p>
                </div>
              ))}
            </div>

            {/* Experience */}
            <div className="resume-section glass-card animate-fade-in-up delay-200">
              <h2 className="resume-section-title">Experience & Highlights</h2>
              {experience.map((item, i) => (
                <div key={i} className="resume-exp-item">
                  <div className="resume-exp-dot" />
                  <div>
                    <div className="resume-exp-header">
                      <h3>{item.title}</h3>
                      <span className="resume-exp-year">{item.year}</span>
                    </div>
                    <p className="resume-exp-desc">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column */}
          <div className="resume-right">
            {/* Skill Bars */}
            <div className="resume-section glass-card animate-fade-in-up delay-100">
              <h2 className="resume-section-title">Technical Skills</h2>
              <div className="resume-skill-bars">
                {resumeSkills.map(({ label, level }) => (
                  <div key={label} className="resume-skill-bar">
                    <div className="resume-skill-bar__header">
                      <span>{label}</span>
                      <span>{level}%</span>
                    </div>
                    <div className="resume-skill-bar__track">
                      <div
                        className="resume-skill-bar__fill"
                        style={{ '--skill-level': `${level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* All Skills */}
            <div className="resume-section glass-card animate-fade-in-up delay-200">
              <h2 className="resume-section-title">Technologies</h2>
              <div className="resume-tech-groups">
                {skills.map((group) => (
                  <div key={group.category} className="resume-tech-group">
                    <p className="resume-tech-group__label">{group.category}</p>
                    <div className="resume-tech-group__items">
                      {group.items.map((item) => (
                        <span key={item} className="tag">{item}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Strengths */}
            <div className="resume-section glass-card animate-fade-in-up delay-300">
              <h2 className="resume-section-title">Soft Skills</h2>
              <div className="resume-soft-skills">
                {[
                  'Public Speaking (Toastmasters)',
                  'Team Collaboration',
                  'Problem Solving',
                  'Critical Thinking',
                  'Written Communication',
                  'Fast Learner',
                ].map((s) => (
                  <span key={s} className="tag">{s}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
