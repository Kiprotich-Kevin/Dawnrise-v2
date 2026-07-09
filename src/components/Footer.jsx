import { Link } from 'react-router-dom'
import { BookOpen, Search, Phone, Mail, MapPin, CheckCircle2, Sparkle } from 'lucide-react'
import Container from './Container'
import { COURSES } from '../data/courses'

function FacebookIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M13.5 21v-8h2.7l.4-3.1h-3.1V8c0-.9.25-1.5 1.55-1.5H16.7V3.7C16.4 3.66 15.4 3.57 14.24 3.57c-2.34 0-3.94 1.43-3.94 4.05V10H7.6v3.1h2.7v8h3.2Z" />
    </svg>
  )
}
function YoutubeIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M21.6 7.7a2.6 2.6 0 0 0-1.85-1.85C18.1 5.4 12 5.4 12 5.4s-6.1 0-7.75.45A2.6 2.6 0 0 0 2.4 7.7 27 27 0 0 0 2 12a27 27 0 0 0 .4 4.3 2.6 2.6 0 0 0 1.85 1.85C5.9 18.6 12 18.6 12 18.6s6.1 0 7.75-.45a2.6 2.6 0 0 0 1.85-1.85A27 27 0 0 0 22 12a27 27 0 0 0-.4-4.3ZM10 15V9l5.2 3-5.2 3Z" />
    </svg>
  )
}
function InstagramIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  )
}

const FEATURED_COURSE_LINKS = COURSES.slice(0, 5).map((course) => ({
  label: course.title,
  to: `/courses/${course.slug}`,
}))

const QUICK_LINKS = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  { label: 'All Courses', to: '/courses' },
  { label: 'Contact Us', to: '/contact' },
]

const RECENT_POSTS = [
  {
    image: 'https://picsum.photos/seed/educatex-footer-post-1/120/120',
    category: 'Latest News',
    title: 'Latest News Title Here',
    date: '21 Feb, 2023',
  },
  {
    image: 'https://picsum.photos/seed/educatex-footer-post-2/120/120',
    category: 'Latest News',
    title: 'Fence Hut products to Learning.',
    date: '21 Feb, 2023',
  },
]

export default function Footer() {
  return (
    <footer className="bg-dark pt-8 text-white/70">
      <Container>
        <div className="flex flex-col gap-6 rounded-3xl bg-dark-soft p-8 lg:flex-row lg:items-center lg:justify-between">
          <Link to="/" className="flex items-center gap-2 text-xl font-extrabold text-white">
            <BookOpen className="h-7 w-7 text-primary" strokeWidth={2.5} />
            Dawnrise Training Institute
          </Link>
          <p className="text-sm font-bold uppercase tracking-wide text-white sm:text-base">
            Subscribe To Our <span className="text-primary">Newsletter</span>
          </p>
          <div className="flex items-center gap-3 rounded-full bg-white/5 py-1 pl-5 pr-1">
            <Search className="h-4 w-4 shrink-0 text-white/50" />
            <input
              type="email"
              placeholder="Email Number"
              className="w-40 bg-transparent text-sm text-white placeholder:text-white/40 focus:outline-none sm:w-56"
            />
            <button className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-white">
              <Search className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Get in Touch</h4>
            <p className="text-sm">
              For further information, fill the form below or contact us via our phone or email.
            </p>
            <ul className="mt-5 space-y-3 text-sm">
              <li className="flex items-center gap-2 text-accent-gold">
                <Phone className="h-4 w-4 shrink-0 text-accent-gold" />
                0701 123 343 / 0707 484 746
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary" />
                info@dawnrisetraining.co.ke
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                Topsel Centre, 5th Floor, Ngong Road (Tarnkard Stage), Nairobi
              </li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Our Courses</h4>
            <ul className="space-y-3 text-sm">
              {FEATURED_COURSE_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="flex items-center gap-2 hover:text-primary">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={to}>
                  <Link to={to} className="flex items-center gap-2 hover:text-primary">
                    <CheckCircle2 className="h-4 w-4 shrink-0 text-success" />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Recent Posts</h4>
            <ul className="space-y-4">
              {RECENT_POSTS.map((post) => (
                <li key={post.title} className="flex gap-3">
                  <img src={post.image} alt="" className="h-14 w-14 shrink-0 rounded-lg object-cover" />
                  <div>
                    <p className="font-bold leading-snug text-white">{post.title}</p>
                    <p className="text-xs text-white/50">{post.category}</p>
                    <p className="text-xs text-white/40">{post.date}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col-reverse items-center gap-4 border-t border-white/10 py-6 sm:flex-row sm:justify-between">
          <p className="text-xs">© 2026 Dawnrise Training Institute (DTI). All Rights Reserved.</p>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3">
              {[FacebookIcon, null, YoutubeIcon, InstagramIcon].map((Icon, i) => (
                <button
                  key={i}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-primary"
                >
                  {Icon ? <Icon className="h-4 w-4" /> : <span className="text-sm font-bold">X</span>}
                </button>
              ))}
            </div>
            <Sparkle className="hidden h-8 w-8 fill-white/20 text-white/20 sm:block" />
          </div>
        </div>
      </Container>
    </footer>
  )
}
