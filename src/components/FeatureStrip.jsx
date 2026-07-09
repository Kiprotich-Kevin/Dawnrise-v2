import { GraduationCap, Laptop, Award } from 'lucide-react'
import Container from './Container'

const FEATURES = [
  {
    icon: GraduationCap,
    title: 'Practical Oriented Training',
    text: 'Hands-on skills training led by experienced instructors',
  },
  {
    icon: Laptop,
    title: 'Modern Equipment & Facilities',
    text: 'Learn using up-to-date tools and well-equipped facilities',
  },
  {
    icon: Award,
    title: 'Recognized Certificate Awarded',
    text: 'Graduate with a TVETA accredited certificate',
  },
]

export default function FeatureStrip() {
  return (
    <section className="bg-surface-navy py-12">
      <Container className="grid gap-8 sm:grid-cols-3">
        {FEATURES.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex items-start gap-4">
            <Icon className="h-8 w-8 shrink-0 text-primary" strokeWidth={1.75} />
            <div>
              <h3 className="font-bold text-text-primary">{title}</h3>
              <p className="mt-1 text-sm text-text-muted">{text}</p>
            </div>
          </div>
        ))}
      </Container>
    </section>
  )
}
