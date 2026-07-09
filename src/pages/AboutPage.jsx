import { useState } from 'react'
import { Users, FolderCheck, Award, GraduationCap } from 'lucide-react'
import Container from '../components/Container'
import PageBanner from '../components/PageBanner'
import About from '../components/About'
import Testimonials from '../components/Testimonials'
import BlogSection from '../components/BlogSection'
import Reveal from '../components/Reveal'
import CountUp from '../components/CountUp'

const STATS = [
  { icon: GraduationCap, value: '16+', label: 'Years of Experience' },
  { icon: FolderCheck, value: '10+', label: 'Courses Offered' },
  { icon: Users, value: '500+', label: 'Students Trained' },
  { icon: Award, value: '100%', label: 'TVETA Accredited' },
]

const MISSION_TABS = [
  {
    key: 'mission',
    label: 'Our Mission',
    body: 'To provide accessible, practical, and TVETA accredited training that equips every student — regardless of background — with the skills to build a better future. Inclusion for All.',
  },
  {
    key: 'vision',
    label: 'Our Vision',
    body: 'To be a leading technical and vocational training institute recognized for empowering communities through inclusive, hands-on education.',
  },
  {
    key: 'goal',
    label: 'Our Goal',
    body: 'To continually expand access to affordable, high-quality vocational training and help every graduate secure meaningful employment or start their own business.',
  },
]

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState('mission')
  const tab = MISSION_TABS.find((t) => t.key === activeTab)

  return (
    <>
      <PageBanner title="About Us" crumb="About Us" />

      <Reveal>
        <About ctaTo="/contact" />
      </Reveal>

      <Reveal as="section" className="bg-primary py-14">
        <Container className="grid grid-cols-2 gap-8 text-center text-white lg:grid-cols-4">
          {STATS.map(({ icon: Icon, value, label }) => (
            <div key={label} className="flex flex-col items-center gap-2">
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10">
                <Icon className="h-6 w-6" strokeWidth={1.75} />
              </span>
              <p className="text-2xl font-extrabold sm:text-3xl">
                <CountUp value={value} />
              </p>
              <p className="text-xs text-white/70 sm:text-sm">{label}</p>
            </div>
          ))}
        </Container>
      </Reveal>

      <Reveal as="section" className="bg-surface py-20">
        <Container className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
              <span className="h-0.5 w-6 bg-primary" />
              About Mission
            </span>
            <h2 className="max-w-md text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl">
              Our Main Goal is to Empower Every Student
            </h2>

            <div className="mt-6 flex flex-wrap gap-3">
              {MISSION_TABS.map(({ key, label }) => (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className={`rounded-full px-5 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                    activeTab === key
                      ? 'bg-primary text-white'
                      : 'border border-border text-text-primary hover:border-primary'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>

            <h3 className="mt-6 text-lg font-bold text-text-primary">{tab.label}</h3>
            <p className="mt-2 max-w-md text-text-muted">{tab.body}</p>
          </div>

          <img
            src="https://picsum.photos/seed/dti-about-mission/700/560"
            alt="Instructors reviewing training materials"
            className="aspect-[5/4] w-full rounded-3xl object-cover"
          />
        </Container>
      </Reveal>

      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <BlogSection />
      </Reveal>
    </>
  )
}
