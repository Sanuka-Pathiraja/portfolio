import { Link } from 'react-router-dom'
import SEO from '../components/seo/SEO'

export default function NotFound() {
  return (
    <section className="section-max pt-32 pb-28">
      <SEO title="404" description="Page not found" path="/404" />
      <div className="glass-content p-10 text-center">
        <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-[var(--accent)] mb-4">404</p>
        <h1 className="font-display text-4xl text-white mb-4">Page Not Found</h1>
        <p className="text-[color:var(--text-tertiary)] mb-8">
          The page you requested does not exist or has been moved.
        </p>
        <Link className="px-6 py-3 rounded-full glass-sm no-underline text-white/80" to="/">
          Back to Home
        </Link>
      </div>
    </section>
  )
}
