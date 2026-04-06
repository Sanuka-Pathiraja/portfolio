import { NavLink } from 'react-router-dom'
import { Home, FolderKanban, UserCircle2, Mail, FileText } from 'lucide-react'

const mobileLinks = [
  { to: '/', label: 'Home', Icon: Home, end: true },
  { to: '/projects', label: 'Projects', Icon: FolderKanban },
  { to: '/about', label: 'About', Icon: UserCircle2 },
  { to: '/contact', label: 'Contact', Icon: Mail },
  { to: '/resume', label: 'Resume', Icon: FileText },
]

export default function MobileBottomNav() {
  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile navigation">
      <div className="mobile-bottom-nav__inner">
        {mobileLinks.map(({ to, label, Icon, end }) => (
          <NavLink
            key={to}
            to={to}
            end={end}
            className={({ isActive }) => `mobile-bottom-nav__item ${isActive ? 'is-active' : ''}`}
          >
            <Icon size={18} aria-hidden="true" />
            <span>{label}</span>
          </NavLink>
        ))}
      </div>
    </nav>
  )
}
