import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

export default function TelemetryCard({ project, index }) {
  const { id, title, subtitle, description, techStack, type, accent, status, github, live } = project

  return (
    <motion.article
      className="glass-card telemetry-card rounded-none flex flex-col"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.015, transition: { duration: 0.2 } }}
      style={{ '--card-accent': accent }}
    >
      {/* Top accent bar */}
      <div className="h-[2px] w-full" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />

      <div className="p-6 flex flex-col gap-5 flex-1">
        {/* Header row */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            {/* Mission ID */}
            <span
              className="font-mono-f1 text-[11px] tracking-widest px-2 py-0.5 border"
              style={{ color: accent, borderColor: accent + '40', background: accent + '10' }}
            >
              {id}
            </span>
            {/* Type badge */}
            <span className="font-mono-f1 text-[10px] tracking-wider text-[#555] uppercase">
              {type}
            </span>
          </div>

          {/* Status dot */}
          <div className="flex items-center gap-1.5">
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: accent, boxShadow: `0 0 6px ${accent}` }}
            />
            <span className="font-mono-f1 text-[10px] tracking-wider" style={{ color: accent }}>
              {status}
            </span>
          </div>
        </div>

        {/* Title */}
        <div>
          <h3 className="font-display font-black italic text-[28px] leading-none tracking-tight text-[#F0F0F0]">
            {title}
          </h3>
          <p className="font-mono-f1 text-[11px] tracking-widest mt-1" style={{ color: accent }}>
            {subtitle.toUpperCase()}
          </p>
        </div>

        {/* Description */}
        <p className="text-[14px] text-[#888] leading-relaxed font-[Inter] flex-1">
          {description}
        </p>

        {/* Stack */}
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span
              key={tech}
              className="font-mono-f1 text-[10px] tracking-wide px-2 py-1 border border-[rgba(255,255,255,0.07)] text-[#555]"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 pt-3 border-t border-[rgba(255,255,255,0.06)]">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono-f1 text-[11px] tracking-wider text-[#555] hover:text-[#F0F0F0] transition-colors no-underline"
            >
              <Github size={13} />
              View Source
            </a>
          )}
          {live && (
            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 font-mono-f1 text-[11px] tracking-wider no-underline"
              style={{ color: accent }}
            >
              <ExternalLink size={13} />
              Live Telemetry
            </a>
          )}
        </div>
      </div>
    </motion.article>
  )
}
