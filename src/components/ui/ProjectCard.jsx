import { Github, ExternalLink } from 'lucide-react'
import './ProjectCard.css'

export default function ProjectCard({ project, index }) {
  const { title, subtitle, description, techStack, type, color, icon, features, github, live } = project

  return (
    <article
      className="project-card glass-card animate-fade-in-up"
      style={{ animationDelay: `${index * 0.1}s`, '--card-color': color }}
    >
      <div className="project-card__header">
        <div className="project-card__icon" style={{ background: `${color}20`, border: `1px solid ${color}40` }}>
          <span>{icon}</span>
        </div>
        <div className="project-card__meta">
          <span className="tag" style={{ background: `${color}15`, color: color, borderColor: `${color}30` }}>
            {type}
          </span>
        </div>
      </div>

      <div className="project-card__body">
        <h3 className="project-card__title">{title}</h3>
        <p className="project-card__subtitle">{subtitle}</p>
        <p className="project-card__desc">{description}</p>

        <ul className="project-card__features">
          {features.map((f) => (
            <li key={f}>
              <span className="project-card__feature-dot" style={{ background: color }} />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="project-card__footer">
        <div className="project-card__stack">
          {techStack.map((tech) => (
            <span key={tech} className="project-card__tech">{tech}</span>
          ))}
        </div>

        <div className="project-card__links">
          {github && (
            <a href={github} target="_blank" rel="noopener noreferrer" className="project-card__link-btn">
              <Github size={15} />
              <span>Code</span>
            </a>
          )}
          {live && (
            <a href={live} target="_blank" rel="noopener noreferrer"
              className="project-card__link-btn project-card__link-btn--primary">
              <ExternalLink size={15} />
              <span>Live</span>
            </a>
          )}
        </div>
      </div>
    </article>
  )
}
