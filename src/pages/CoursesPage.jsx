import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Clock, GraduationCap } from 'lucide-react'
import Container from '../components/Container'
import PageBanner from '../components/PageBanner'
import Reveal from '../components/Reveal'
import { COURSES } from '../data/courses'
import { ACCENT_STYLES } from '../data/accents'

const CATEGORIES = ['All', ...new Set(COURSES.map((c) => c.category))]

export default function CoursesPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filteredCourses =
    activeCategory === 'All' ? COURSES : COURSES.filter((c) => c.category === activeCategory)

  return (
    <>
      <PageBanner title="Our Courses" crumb="Courses" />

      <Reveal as="section" className="bg-surface py-20">
        <Container>
          <div className="mb-10 text-center">
            <span className="mb-3 inline-flex items-center justify-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
              <span className="h-0.5 w-6 bg-primary" />
              TVETA Accredited Programs
              <span className="h-0.5 w-6 bg-primary" />
            </span>
            <h2 className="text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl">
              All Available Courses
            </h2>
          </div>

          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                  activeCategory === category
                    ? 'bg-primary text-white'
                    : 'border border-border text-text-primary hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {filteredCourses.length === 0 ? (
            <p className="text-center text-text-muted">No courses found in this category.</p>
          ) : (
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredCourses.map((course) => {
                const accent = ACCENT_STYLES[course.accent]
                return (
                  <Link
                    key={course.slug}
                    to={`/courses/${course.slug}`}
                    className="rounded-2xl bg-surface p-4 shadow-lg transition-shadow hover:shadow-2xl"
                  >
                    <img
                      src={course.image}
                      alt={course.title}
                      className="h-44 w-full rounded-xl object-cover"
                    />
                    <span
                      className={`mt-4 inline-block rounded-full px-3 py-1 text-xs font-bold uppercase ${accent.tagBg} ${accent.tagText}`}
                    >
                      {course.category}
                    </span>
                    <h3 className="mt-3 font-bold leading-snug text-text-primary">{course.title}</h3>
                    <div className="mt-2 flex flex-wrap items-center gap-4 text-xs font-medium text-text-muted">
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <GraduationCap className="h-3.5 w-3.5" />
                        {course.entryGrade}
                      </span>
                    </div>
                    <div className="mt-4 flex items-center justify-between">
                      <span className={`text-lg font-extrabold ${accent.price}`}>{course.price}</span>
                      <span
                        className={`inline-flex items-center gap-1 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${accent.button}`}
                      >
                        View Course
                      </span>
                    </div>
                  </Link>
                )
              })}
            </div>
          )}
        </Container>
      </Reveal>
    </>
  )
}
