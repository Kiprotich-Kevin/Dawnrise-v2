import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, BadgeCheck, ChevronLeft, ChevronRight } from 'lucide-react'
import Container from './Container'
import Button from './Button'
import heroSlide1 from '../assets/hero-slide-1.png'

// TODO: swap the picsum placeholders for real campus/classroom photos when available
const SLIDES = [
  { src: heroSlide1, alt: 'Nursing students practicing clinical skills together' },
  { src: 'https://picsum.photos/seed/dti-hero-cosmetology/1600/1200', alt: 'Beauty and cosmetology training in session' },
  { src: 'https://picsum.photos/seed/dti-hero-graduation/1600/1200', alt: 'Graduates celebrating course completion' },
]

export default function Hero() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (SLIDES.length < 2) return
    const id = setInterval(() => setActive((i) => (i + 1) % SLIDES.length), 6000)
    return () => clearInterval(id)
  }, [])

  const goPrev = () => setActive((i) => (i - 1 + SLIDES.length) % SLIDES.length)
  const goNext = () => setActive((i) => (i + 1) % SLIDES.length)

  return (
    <section className="relative flex min-h-[calc(100vh-5rem)] items-center overflow-hidden bg-dark">
      {SLIDES.map((slide, i) => (
        <img
          key={slide.src}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ${
            i === active ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}
      <div className="absolute inset-0 bg-dark/45" />

      <Container className="relative">
        <div className="max-w-xl">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-light px-4 py-1.5 text-xs font-bold uppercase tracking-wide text-primary">
            <BadgeCheck className="h-4 w-4" />
            TVETA Accredited
          </span>
          <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            July 2026 Intake Ongoing
            <br />
            Dawnrise <span className="text-primary">Institute</span>
          </h1>
          <p className="mt-6 max-w-md text-base text-white/80">
            Dawnrise Training Institute is the ultimate destination for knowledge seekers and
            educators alike. Enroll today and secure your future with flexible fee payment
            (Lipa Pole Pole).
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button as={Link} to="/enroll" variant="filled">
              Enroll Today
            </Button>
            <Button as={Link} to="/courses" variant="outline" className="border-white/40 text-white hover:border-white">
              Find Course
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </Container>

      {SLIDES.length > 1 && (
        <>
          <button
            onClick={goPrev}
            aria-label="Previous slide"
            className="absolute left-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 sm:flex"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={goNext}
            aria-label="Next slide"
            className="absolute right-4 top-1/2 z-10 hidden h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20 sm:flex"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 gap-2">
            {SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                aria-label={`Go to slide ${i + 1}`}
                onClick={() => setActive(i)}
                className={`h-2 rounded-full transition-all ${
                  i === active ? 'w-8 bg-primary' : 'w-2 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </>
      )}
    </section>
  )
}
