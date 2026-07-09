import { Link } from 'react-router-dom'
import { CheckCircle2, Phone, ArrowRight } from 'lucide-react'
import Container from './Container'
import Button from './Button'
import Squiggle from './Squiggle'
import CountUp from './CountUp'

const CHECKLIST = [
  'TVETA Accredited Training Programs',
  'Ladies Hostels Available',
  'Flexible Fee Payment (Lipa Pole Pole)',
]

export default function About({ ctaTo = '/about' }) {
  return (
    <section className="relative overflow-hidden bg-surface py-20">
      <Squiggle className="absolute right-8 top-0 hidden h-24 w-14 text-primary lg:block" />

      <Container className="grid gap-10 lg:grid-cols-[280px_260px_1fr]">
        <div>
          <img
            src="https://picsum.photos/seed/educatex-about-1/400/560"
            alt="Student studying online"
            className="h-[420px] w-full rounded-2xl object-cover"
          />
          <div className="mt-5 flex items-center gap-3">
            <Squiggle className="h-8 w-5 text-primary" />
            <CountUp value="16+" className="text-2xl font-extrabold text-primary" />
            <span className="text-sm leading-tight text-text-muted">
              Years of
              <br />
              Experience
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3 rounded-2xl bg-primary p-5 text-white">
            <CheckCircle2 className="h-8 w-8 shrink-0" strokeWidth={1.75} />
            <span className="font-bold leading-snug">
              Learn Online
              <br />
              Anywhere
            </span>
          </div>
          <img
            src="https://picsum.photos/seed/educatex-about-2/400/420"
            alt="Learners collaborating"
            className="h-[300px] w-full rounded-2xl object-cover"
          />
        </div>

        <div>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
            <span className="h-0.5 w-6 bg-primary" />
            About Us
          </span>
          <h2 className="text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl">
            Who We Are – Introduction to Dawnrise Training Institute
          </h2>
          <p className="mt-4 max-w-md text-text-muted">
            Educate the ultimate destination for knowledge seekers and educators alike. We are
            committed to transforming special education impact global channels without
            standards compliant systems.
          </p>

          {/* Checklist/phone/button align with the testimonial card's top and bottom */}
          <div className="mt-6 grid gap-8 lg:grid-cols-[1fr_220px]">
            <div>
              <ul className="space-y-3">
                {CHECKLIST.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-text-primary">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-2 text-sm font-bold text-text-primary">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-gold">
                  <Phone className="h-4 w-4 text-dark" />
                </span>
                0701 123 343
              </div>
              <Button as={Link} to={ctaTo} variant="filled" className="mt-4">
                More About
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="h-fit w-full rounded-2xl bg-surface-navy p-6">
              <CheckCircle2 className="h-8 w-8 text-success" />
              <p className="mt-4 text-sm font-bold leading-snug text-text-primary">
                Trusted Online And offline Best Educations
              </p>
              <p className="mt-4 text-xs text-text-muted">— John Doe</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
