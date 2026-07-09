import { Link } from 'react-router-dom'
import { Play, Sparkles, Home, Dumbbell, BookOpen, ArrowRight } from 'lucide-react'
import Container from './Container'
import Button from './Button'

const FEATURES = [
  { icon: Home, label: 'Student Accommodations', bg: 'bg-accent-red/15', color: 'text-accent-red' },
  { icon: Dumbbell, label: 'Gym and Sports Facilities', bg: 'bg-primary-light', color: 'text-primary' },
  { icon: BookOpen, label: 'Research and Library', bg: 'bg-accent-gold/15', color: 'text-accent-gold' },
]

export default function Approach() {
  return (
    <section className="bg-surface py-20">
      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -left-6 -top-6 h-40 w-40 rounded-3xl bg-accent-red/80" />
          <img
            src="https://picsum.photos/seed/educatex-approach/700/560"
            alt="Students in the library"
            className="relative aspect-[5/4] w-full rounded-3xl object-cover"
          />
          <button
            aria-label="Play video"
            className="absolute inset-0 m-auto flex h-16 w-16 items-center justify-center rounded-full bg-surface shadow-xl"
          >
            <Play className="ml-1 h-6 w-6 fill-primary text-primary" />
          </button>
        </div>

        <div className="relative">
          <Sparkles className="absolute right-0 top-0 hidden h-10 w-10 text-accent-gold/50 sm:block" />
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
            <span className="h-0.5 w-6 bg-primary" />
            Why Choose Us
          </span>
          <h2 className="max-w-md text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl">
            Innovative and effective learning approaches
          </h2>
          <p className="mt-4 max-w-md text-text-muted">
            Educate the ultimate destination for knowledge seekers and educators alike. We are
            committed to transforming special education impact global channels without a
            standards compliant systems.
          </p>

          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {FEATURES.map(({ icon: Icon, label, bg, color }) => (
              <div key={label} className="flex flex-col items-center gap-3">
                <span className={`flex h-14 w-14 items-center justify-center rounded-2xl ${bg}`}>
                  <Icon className={`h-6 w-6 ${color}`} strokeWidth={1.75} />
                </span>
                <span className="text-xs font-bold leading-snug text-text-primary">{label}</span>
              </div>
            ))}
          </div>

          <Button as={Link} to="/contact" variant="filled" className="mt-8">
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </Container>
    </section>
  )
}
