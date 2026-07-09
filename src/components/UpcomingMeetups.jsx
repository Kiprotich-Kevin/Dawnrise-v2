import { Link } from 'react-router-dom'
import { MapPin, Clock, ArrowRight } from 'lucide-react'
import Container from './Container'

const ACCENTS = {
  primary: {
    bg: 'bg-primary-light',
    text: 'text-primary',
    button: 'border-primary text-primary hover:bg-primary hover:text-white',
  },
  red: {
    bg: 'bg-accent-red/15',
    text: 'text-accent-red',
    button: 'border-accent-red text-accent-red hover:bg-accent-red hover:text-white',
  },
}

const EVENTS = [
  {
    day: '16',
    month: 'January',
    accent: 'primary',
    title: 'Business Innovation And Development Conf.',
    location: 'California, USA',
    time: '9:00 AM - 4:00 PM',
  },
  {
    day: '21',
    month: 'January',
    accent: 'red',
    title: 'Career Guidance And Networking event',
    location: 'New York, USA',
    time: '10:00 AM - 2:00 PM',
  },
  {
    day: '29',
    month: 'January',
    accent: 'primary',
    title: 'Environmental Awareness Conference - 2025',
    location: 'Chicago, USA',
    time: '9:00 AM - 5:00 PM',
  },
]

export default function UpcomingMeetups() {
  return (
    <section className="bg-surface py-20">
      <Container>
        <div className="mb-10 grid items-center gap-6 lg:grid-cols-[280px_1fr]">
          <div className="flex items-center gap-3">
            <span className="h-0.5 w-6 shrink-0 bg-primary" />
            <span className="whitespace-nowrap text-xs font-bold uppercase tracking-wide text-primary">
              Academic Events
            </span>
          </div>
          <h2 className="text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl">
            Upcoming Academic Meetups Workshops and Seminars
          </h2>
        </div>

        <div className="flex flex-col gap-5">
          {EVENTS.map(({ day, month, accent, title, location, time }) => {
            const style = ACCENTS[accent]
            return (
              <div
                key={title}
                className={`flex flex-col gap-4 rounded-2xl p-6 sm:flex-row sm:items-center sm:justify-between ${style.bg}`}
              >
                <div className="flex items-center gap-5">
                  <div className="text-center">
                    <p className={`text-3xl font-extrabold leading-none ${style.text}`}>{day}</p>
                    <p className="mt-1 text-xs font-bold uppercase text-text-muted">{month}</p>
                  </div>
                  <div>
                    <h3 className="font-bold text-text-primary">{title}</h3>
                    <div className="mt-1 flex flex-wrap items-center gap-4 text-xs text-text-muted">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {time}
                      </span>
                    </div>
                  </div>
                </div>
                <Link
                  to="/contact"
                  className={`inline-flex w-fit items-center gap-1 rounded-full border px-4 py-2 text-xs font-bold uppercase tracking-wide transition-colors ${style.button}`}
                >
                  Register Now
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            )
          })}
        </div>
      </Container>
    </section>
  )
}
