import { useEffect } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { X, Phone, Mail, ChevronRight, ArrowUpRight } from 'lucide-react'
import Button from './Button'

export default function MobileDrawer({ open, onClose, navLinks }) {
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [open, onClose])

  return (
    <div className={`fixed inset-0 z-[60] lg:hidden ${open ? '' : 'pointer-events-none'}`} aria-hidden={!open}>
      <div
        onClick={onClose}
        className={`absolute inset-0 bg-dark/60 transition-opacity duration-300 motion-reduce:transition-none ${
          open ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className={`absolute inset-y-0 right-0 flex w-[85%] max-w-sm flex-col bg-surface shadow-2xl transition-transform duration-300 ease-out motion-reduce:transition-none ${
          open ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center justify-between border-b border-border px-5 py-5">
          <Link to="/" onClick={onClose} className="text-lg font-extrabold text-text-primary">
            DTI Menu
          </Link>
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-9 w-9 items-center justify-center rounded-full text-text-primary transition-colors hover:bg-surface-navy"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex flex-col overflow-y-auto overscroll-contain">
          {navLinks.map(({ label, to, end }) => (
            <NavLink
              key={label}
              to={to}
              end={end}
              onClick={onClose}
              className={({ isActive }) =>
                `flex items-center justify-between border-b border-border px-5 py-4 text-base font-semibold transition-colors ${
                  isActive ? 'bg-primary-light text-primary' : 'text-text-primary hover:bg-surface-navy'
                }`
              }
            >
              {label}
              <ChevronRight className="h-4 w-4 opacity-40" />
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto space-y-5 border-t border-border px-5 py-6">
          <div className="flex flex-col gap-3">
            <a href="tel:+254701123343" className="flex items-center gap-3 text-sm font-semibold text-text-primary">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent-gold/15">
                <Phone className="h-4 w-4 text-accent-gold" />
              </span>
              0701 123 343
            </a>
            <a
              href="mailto:info@dawnrisetraining.co.ke"
              className="flex items-center gap-3 text-sm font-semibold text-text-primary"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-primary-light">
                <Mail className="h-4 w-4 text-primary" />
              </span>
              info@dawnrisetraining.co.ke
            </a>
          </div>

          <div className="flex items-center gap-4 text-sm font-medium text-text-muted">
            <a href="#" className="hover:text-primary">
              Login
            </a>
            <span className="text-border">/</span>
            <a href="#" className="hover:text-primary">
              Register
            </a>
          </div>

          <Button as={Link} to="/enroll" variant="filled" className="w-full justify-center" onClick={onClose}>
            Enroll Now
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  )
}
