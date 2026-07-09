import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Check, Clock, ArrowLeft, ArrowRight } from 'lucide-react'
import Container from './Container'
import Button from './Button'
import Squiggle from './Squiggle'
import { COURSES } from '../data/courses'
import { ACCENT_STYLES } from '../data/accents'

const PROGRAM_SLUGS = [
  'healthcare-assistant-caregiver',
  'cosmetology',
  'hairdressing',
  'barbering',
  'graphic-design',
  'computer-packages',
]

const PAGE_SIZE = 4

export default function Courses() {
  const programs = PROGRAM_SLUGS.map((slug) => COURSES.find((c) => c.slug === slug)).filter(Boolean)

  const [page, setPage] = useState(0)
  const totalPages = Math.ceil(COURSES.length / PAGE_SIZE)
  const visibleCourses = COURSES.slice(page * PAGE_SIZE, page * PAGE_SIZE + PAGE_SIZE)

  const goPrev = () => setPage((p) => (p - 1 + totalPages) % totalPages)
  const goNext = () => setPage((p) => (p + 1) % totalPages)

  return (
    <section className="bg-surface-navy py-20">
      <Container>
        <div className="mb-10 grid items-center gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-6 shrink-0 bg-primary" />
            <span className="whitespace-nowrap text-xs font-bold uppercase tracking-wide text-primary">
              Academic Programs
            </span>
            <span className="hidden h-px flex-1 bg-primary/20 lg:block" />
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl">
            Our Courses – TVETA Accredited Programs
          </h2>
        </div>

        <div className="grid gap-10 lg:grid-cols-[280px_1fr]">
          <div>
            <div className="flex flex-col gap-3">
              {programs.map((course, i) => (
                <Link
                  key={course.slug}
                  to={`/courses/${course.slug}`}
                  className={`flex items-center gap-3 rounded-full px-5 py-4 text-left text-sm font-bold shadow-sm transition-colors ${
                    i === 0 ? 'bg-primary text-white' : 'bg-surface text-text-primary hover:shadow-md'
                  }`}
                >
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${
                      i === 0 ? 'bg-white' : 'bg-success'
                    }`}
                  >
                    <Check className={`h-3.5 w-3.5 ${i === 0 ? 'text-success' : 'text-white'}`} strokeWidth={3} />
                  </span>
                  {course.title}
                </Link>
              ))}
            </div>

            <Button as={Link} to="/courses" variant="outline" className="mt-4 w-full justify-center">
              View All Courses
              <ArrowRight className="h-4 w-4" />
            </Button>

            <div className="mt-10 grid w-fit grid-cols-6 gap-2">
              {Array.from({ length: 24 }).map((_, i) => (
                <span key={i} className="h-1.5 w-1.5 rounded-full bg-primary/30" />
              ))}
            </div>

            <div className="mt-8 flex items-center gap-3">
              <Squiggle className="h-8 w-5 shrink-0 text-primary" />
              <div className="flex -space-x-3">
                {[1, 2, 3].map((i) => (
                  <img
                    key={i}
                    src={`https://picsum.photos/seed/educatex-instructor-${i}/64/64`}
                    alt=""
                    className="h-9 w-9 rounded-full border-2 border-surface object-cover"
                  />
                ))}
              </div>
              <span className="text-sm font-bold text-text-primary">10+ Courses Offered</span>
            </div>
          </div>

          <div className="grid gap-6 lg:grid-cols-[1fr_auto]">
            <div className="grid gap-6 sm:grid-cols-2">
              {visibleCourses.map((course) => {
                const accent = ACCENT_STYLES[course.accent]
                return (
                  <Link
                    key={course.slug}
                    to={`/courses/${course.slug}`}
                    className="rounded-2xl bg-surface p-4 shadow-xl transition-shadow hover:shadow-2xl"
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-44 w-full rounded-xl object-cover"
                    />
                    <span
                      className={`mt-3 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase ${accent.tagBg} ${accent.tagText}`}
                    >
                      {course.category}
                    </span>
                    <h3 className="mt-2 line-clamp-2 font-bold leading-snug text-text-primary">{course.title}</h3>
                    <div className="mt-2 flex items-center gap-1 text-xs font-medium text-text-muted">
                      <Clock className="h-3.5 w-3.5" />
                      {course.duration}
                    </div>
                    <div className="mt-3 flex items-center justify-between">
                      <span className={`text-lg font-extrabold ${accent.price}`}>{course.price}</span>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${accent.button}`}
                      >
                        Enroll Now
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>

            <div className="hidden flex-col items-center justify-center gap-3 lg:flex">
              <button
                onClick={goPrev}
                aria-label="Previous courses"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-text-primary shadow-md transition-colors hover:bg-primary hover:text-white"
              >
                <ArrowLeft className="h-4 w-4" />
              </button>
              <span className="text-xs font-bold text-text-muted">
                {page + 1}/{totalPages}
              </span>
              <button
                onClick={goNext}
                aria-label="Next courses"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-surface text-text-primary shadow-md transition-colors hover:bg-primary hover:text-white"
              >
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
