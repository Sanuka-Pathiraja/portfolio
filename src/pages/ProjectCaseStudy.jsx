import { Link, useParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { PROJECTS } from '../data/info'
import SEO from '../components/seo/SEO'
import { trackEvent } from '../utils/analytics'

const sectionFade = {
  hidden: { opacity: 0, y: 18 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
}

export default function ProjectCaseStudy() {
  const { projectId } = useParams()
  const project = PROJECTS.find((item) => item.id === projectId)

  if (!project) {
    return (
      <section className="section-max pt-32 pb-28">
        <SEO
          title="Project Not Found"
          description="The requested case study could not be found."
          path={`/projects/${projectId}`}
        />
        <div className="glass-content p-10 text-center">
          <h1 className="font-display text-4xl text-white mb-4">Case Study Not Found</h1>
          <p className="text-[color:var(--text-tertiary)] mb-6">The project link may be outdated.</p>
          <Link className="px-6 py-3 rounded-full glass-sm no-underline text-white/80" to="/projects">
            Back to Projects
          </Link>
        </div>
      </section>
    )
  }

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description: project.desc,
    creator: {
      '@type': 'Person',
      name: 'Sanuka Pathiraja',
    },
    dateCreated: project.timeline,
  }

  return (
    <motion.section className="section-max pt-28 pb-28" initial="hidden" animate="show">
      <SEO
        title={`${project.title} Case Study`}
        description={project.desc}
        path={`/projects/${project.id}`}
        jsonLd={schema}
      />

      <motion.div variants={sectionFade} custom={0} className="mb-10">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-4">Case Study</p>
        <h1 className="font-display text-[clamp(2rem,6vw,3.8rem)] leading-[0.97] text-white tracking-[-0.03em] mb-4">
          {project.title}
        </h1>
        <p className="text-[color:var(--text-secondary)] max-w-3xl">{project.role} · {project.timeline}</p>
      </motion.div>

      <motion.div variants={sectionFade} custom={1} className="glass-content p-8 md:p-10 mb-6">
        <h2 className="font-display text-xl text-white/90 mb-3">Problem</h2>
        <p className="text-[color:var(--text-tertiary)]">{project.caseStudy.problem}</p>
      </motion.div>

      <motion.div variants={sectionFade} custom={2} className="glass-content p-8 md:p-10 mb-6">
        <h2 className="font-display text-xl text-white/90 mb-3">Constraints</h2>
        <ul className="list-disc pl-5 space-y-2 text-[color:var(--text-tertiary)]">
          {project.caseStudy.constraints.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </motion.div>

      <motion.div variants={sectionFade} custom={3} className="glass-content p-8 md:p-10 mb-6">
        <h2 className="font-display text-xl text-white/90 mb-3">Architecture</h2>
        <p className="text-[color:var(--text-tertiary)]">{project.caseStudy.architecture}</p>
      </motion.div>

      <motion.div variants={sectionFade} custom={4} className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <div className="glass-content p-8 md:p-10">
          <h2 className="font-display text-xl text-white/90 mb-3">Tradeoffs</h2>
          <ul className="list-disc pl-5 space-y-2 text-[color:var(--text-tertiary)]">
            {project.caseStudy.tradeoffs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>

        <div className="glass-content p-8 md:p-10">
          <h2 className="font-display text-xl text-white/90 mb-3">Results</h2>
          <ul className="list-disc pl-5 space-y-2 text-[color:var(--text-tertiary)]">
            {project.caseStudy.results.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </motion.div>

      <motion.div variants={sectionFade} custom={5} className="glass-content p-8 md:p-10 mb-10">
        <h2 className="font-display text-xl text-white/90 mb-3">What I Would Improve Next</h2>
        <p className="text-[color:var(--text-tertiary)]">{project.caseStudy.next}</p>
      </motion.div>

      <motion.div variants={sectionFade} custom={6} className="flex flex-wrap gap-3">
        <Link className="w-full sm:w-auto text-center px-6 py-3 rounded-full glass-sm no-underline text-white/80" to="/projects" onClick={() => trackEvent('case_study_back_to_projects', { projectId: project.id })}>
          Back to Projects
        </Link>
        {project.github ? (
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto text-center px-6 py-3 rounded-full glass-sm no-underline text-white/80"
            onClick={() => trackEvent('case_study_github_click', { projectId: project.id })}
          >
            View Repository
          </a>
        ) : null}
      </motion.div>
    </motion.section>
  )
}
