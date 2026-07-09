import { Link } from 'react-router-dom'
import { ArrowRight, Star } from 'lucide-react'
import Container from './Container'
import Button from './Button'
import Squiggle from './Squiggle'

export default function InnovativeBanner() {
  return (
    <section className="relative z-10 flow-root bg-surface pb-16">
      <Container>
        <div className="relative -mt-16 overflow-hidden rounded-3xl bg-gradient-to-r from-surface-navy to-surface p-8 shadow-2xl sm:p-12 lg:-mt-24 lg:p-16">
          <div className="absolute inset-y-0 right-0 hidden w-1/2 lg:block">
            <img
              src="https://picsum.photos/seed/educatex-innovative/900/700"
              alt="Group of students"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-navy via-surface-navy/30 to-transparent" />
          </div>

          <div className="absolute right-6 top-6 hidden grid-cols-6 gap-2 lg:grid">
            {Array.from({ length: 18 }).map((_, i) => (
              <span key={i} className="h-1.5 w-1.5 rounded-full bg-primary/30" />
            ))}
          </div>

          <div className="relative max-w-md">
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
              <span className="h-0.5 w-6 bg-primary" />
              Our Approach
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl">
              Innovative and effective learning approaches
            </h2>

            <img
              src="https://picsum.photos/seed/educatex-innovative/900/700"
              alt="Group of students"
              className="mt-6 aspect-video w-full rounded-2xl object-cover lg:hidden"
            />

            <div className="mt-8 flex items-center gap-4">
              <Button as={Link} to="/contact" variant="filled">
                Get Started
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Squiggle className="h-8 w-5 text-primary" />
              <Star className="h-5 w-5 fill-accent-gold text-accent-gold" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
