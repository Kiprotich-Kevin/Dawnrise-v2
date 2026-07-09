import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import {
  GraduationCap,
  Search,
  ShoppingCart,
  ArrowUpRight,
  Menu,
  X,
  Phone,
  Mail,
} from 'lucide-react'
import Container from './Container'
import Button from './Button'
import MobileDrawer from './MobileDrawer'

const NAV_LINKS = [
  { label: 'Home', to: '/', end: true },
  { label: 'About', to: '/about' },
  { label: 'Courses', to: '/courses' },
  { label: 'Contact', to: '/contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <div className="hidden bg-dark py-2 lg:block">
        <Container className="flex items-center justify-between text-xs text-white/70">
          <div className="flex items-center gap-6">
            <a href="tel:+254701123343" className="flex items-center gap-2 text-accent-gold hover:text-accent-gold/80">
              <Phone className="h-3.5 w-3.5 text-accent-gold" />
              0701 123 343
            </a>
            <a href="mailto:info@dawnrisetraining.co.ke" className="flex items-center gap-2 hover:text-primary">
              <Mail className="h-3.5 w-3.5 text-primary" />
              info@dawnrisetraining.co.ke
            </a>
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-primary">
              Login
            </a>
            <span className="text-white/20">/</span>
            <a href="#" className="hover:text-primary">
              Register
            </a>
            <span className="flex items-center gap-2 text-white/70">
              <ShoppingCart className="h-3.5 w-3.5 text-primary" />
              Cart [0] item
            </span>
          </div>
        </Container>
      </div>

      <header className="sticky top-0 inset-x-0 z-50 border-b border-border bg-surface/95 backdrop-blur">
        <Container className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-extrabold text-text-primary">
            <GraduationCap className="h-7 w-7 text-primary" strokeWidth={2.5} />
            DTI
          </Link>

          <nav className="hidden items-center gap-8 lg:flex">
            {NAV_LINKS.map(({ label, to, end }) => (
              <NavLink
                key={label}
                to={to}
                end={end}
                className={({ isActive }) =>
                  `relative flex items-center gap-1 py-6 text-sm font-medium hover:text-primary ${
                    isActive ? 'text-primary' : 'text-text-primary'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {label}
                    {isActive && <span className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-primary" />}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-5 lg:flex">
            <Search className="h-5 w-5 cursor-pointer text-text-primary" />
            <Button as={Link} to="/enroll" variant="filled">
              Enroll Now
              <ArrowUpRight className="h-4 w-4" />
            </Button>
          </div>

          <button className="text-text-primary lg:hidden" onClick={() => setOpen((o) => !o)} aria-label="Toggle menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </Container>
      </header>

      <MobileDrawer open={open} onClose={() => setOpen(false)} navLinks={NAV_LINKS} />
    </>
  )
}
