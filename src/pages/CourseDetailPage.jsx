import { Link, useParams, Navigate } from 'react-router-dom'
import { Clock, GraduationCap, Wallet, CheckCircle2, ArrowRight } from 'lucide-react'
import Container from '../components/Container'
import PageBanner from '../components/PageBanner'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { COURSES, getCourseBySlug } from '../data/courses'
import { ACCENT_STYLES } from '../data/accents'

const ENROLLMENT_REQUIREMENTS = [
  'Registration Fee',
  '1 Passport Photo',
  'ID Copy / Waiting Card',
  'Previous Academic Report (Primary or High School)',
]

export default function CourseDetailPage() {
  const { slug } = useParams()
  const course = getCourseBySlug(slug)

  if (!course) return <Navigate to="/courses" replace />

  const accent = ACCENT_STYLES[course.accent]
  const otherCourses = COURSES.filter((c) => c.slug !== course.slug).slice(0, 4)

  return (
    <>
      <PageBanner title={course.title} crumb={course.title} image={course.image} />

      <Reveal as="section" className="bg-surface py-20">
        <Container className="grid gap-14 lg:grid-cols-[1fr_320px]">
          <div>
            <span
              className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase ${accent.tagBg} ${accent.tagText}`}
            >
              {course.category}
            </span>
            <h1 className="mt-3 text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl">
              {course.title}
            </h1>

            <div className="mt-4 flex flex-wrap items-center gap-6 text-sm font-medium text-text-muted">
              <span className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-primary" />
                {course.duration}
              </span>
              <span className="flex items-center gap-2">
                <GraduationCap className="h-4 w-4 text-primary" />
                Entry: {course.entryGrade}
              </span>
              <span className="flex items-center gap-2">
                <Wallet className="h-4 w-4 text-primary" />
                {course.price}
              </span>
            </div>

            <p className="mt-6 max-w-2xl text-text-muted">{course.description}</p>

            <div className="mt-10">
              <h2 className="text-lg font-bold text-text-primary">What You'll Need to Enroll</h2>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2">
                {ENROLLMENT_REQUIREMENTS.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-medium text-text-primary">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-success" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <aside className="h-fit space-y-6">
            <div className={`rounded-2xl p-6 text-white ${accent.solidButton}`}>
              <p className="text-xs font-bold uppercase tracking-wide text-white/80">Course Fee</p>
              <p className="mt-1 text-3xl font-extrabold">{course.price}</p>
              <p className="mt-1 text-sm text-white/80">{course.duration}</p>
              <Button as={Link} to={`/enroll/${course.slug}`} variant="filled" className="mt-5 w-full justify-center bg-white text-text-primary hover:bg-white/90">
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>

            <div className="rounded-2xl bg-surface-navy p-6">
              <h3 className="text-sm font-bold uppercase tracking-wide text-text-primary">Other Courses</h3>
              <ul className="mt-4 space-y-3">
                {otherCourses.map((c) => (
                  <li key={c.slug}>
                    <Link
                      to={`/courses/${c.slug}`}
                      className="flex items-center justify-between gap-2 text-sm font-medium text-text-primary hover:text-primary"
                    >
                      {c.title}
                      <ArrowRight className="h-3.5 w-3.5 shrink-0" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </Container>
      </Reveal>
    </>
  )
}
