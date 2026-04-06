import { Link, useLocation } from 'react-router-dom'
import { PROFILE } from '../../data/info'

export default function MobileTopBar() {
  const location = useLocation()
  const titleMap = {
    '/': 'Home',
    '/projects': 'Projects',
    '/about': 'About',
    '/contact': 'Contact',
    '/resume': 'Resume',
  }

  const pageTitle = titleMap[location.pathname] || 'Portfolio'

  return (
    <header
      className="mobile-topbar"
      style={{ paddingTop: 'max(0.5rem, env(safe-area-inset-top))' }}
    >
      <div className="section-max">
        <div className="mobile-topbar__inner">
          <Link to="/" className="mobile-brand" aria-label="Go to home">
            <span className="mobile-brand__mark">SP</span>
            <span className="mobile-brand__name">{PROFILE.name.split(' ')[0]}</span>
          </Link>

          <div className="mobile-topbar__meta" aria-label="Current page">
            <span className="mobile-topbar__label">Now viewing</span>
            <strong className="mobile-topbar__title">{pageTitle}</strong>
          </div>
        </div>
      </div>
    </header>
  )
}
