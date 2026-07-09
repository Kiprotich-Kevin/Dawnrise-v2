import { Quote, Star } from 'lucide-react'
import Container from './Container'

const TESTIMONIALS = [
  {
    title: 'Great Instructor!',
    text: 'Educate the ultimate destination for knowledge seekers and educators alike. We are committed to transforming special education impact global channels without a systems compliant learning.',
    name: 'John D. Alexon',
    role: 'UI Designer',
    avatarSeed: 'educatex-testimonial-1',
  },
  {
    title: 'Impressive Learning!',
    text: 'Educate the ultimate destination for knowledge seekers and educators alike. We are committed to transforming special education impact global channels without a systems compliant learning.',
    name: 'Angelina Watson',
    role: 'UI Designer',
    avatarSeed: 'educatex-testimonial-2',
  },
]

export default function Testimonials() {
  return (
    <section className="bg-dark py-20">
      <Container>
        <div className="mb-10 grid items-center gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-6 shrink-0 bg-primary" />
            <span className="whitespace-nowrap text-xs font-bold uppercase tracking-wide text-primary">
              Testimonials
            </span>
            <Star className="h-4 w-4 fill-accent-gold text-accent-gold" />
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            Real Experiences From Our Dedicated Learners
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {TESTIMONIALS.map(({ title, text, name, role, avatarSeed }) => (
            <div key={name} className="rounded-2xl bg-dark-soft p-8">
              <Quote className="h-8 w-8 fill-primary/20 text-primary/20" />
              <h3 className="mt-4 text-lg font-bold text-white">{title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">{text}</p>
              <div className="mt-5 flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-accent-gold text-accent-gold" />
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3">
                <img
                  src={`https://picsum.photos/seed/${avatarSeed}/64/64`}
                  alt={name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-bold text-white">{name}</p>
                  <p className="text-xs text-white/50">{role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 flex justify-center gap-2">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={`h-2 w-2 rounded-full ${i === 0 ? 'bg-primary' : 'bg-white/20'}`} />
          ))}
        </div>
      </Container>
    </section>
  )
}
