import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react'
import Container from '../components/Container'
import PageBanner from '../components/PageBanner'
import Button from '../components/Button'
import Reveal from '../components/Reveal'

const INFO_CARDS = [
  {
    icon: MapPin,
    title: 'Office Location',
    lines: ['Topsel Centre, 5th Floor', 'Ngong Road (Tarnkard Stage)', 'Nairobi County'],
  },
  {
    icon: Phone,
    title: 'Phone Number',
    lines: ['0701 123 343', '0707 484 746'],
  },
  {
    icon: Mail,
    title: 'Send Us Mail',
    lines: ['info@dawnrisetraining.co.ke'],
  },
]

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" crumb="Contact Us" />

      <Reveal as="section" className="bg-surface py-20">
        <Container>
          <div className="grid gap-6 sm:grid-cols-3">
            {INFO_CARDS.map(({ icon: Icon, title, lines }) => (
              <div key={title} className="rounded-2xl bg-surface-navy p-6 text-center">
                <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary text-white">
                  <Icon className="h-6 w-6" />
                </span>
                <h3 className="mt-4 font-bold text-text-primary">{title}</h3>
                {lines.map((line) => (
                  <p key={line} className="mt-1 text-sm text-text-muted">
                    {line}
                  </p>
                ))}
              </div>
            ))}
          </div>

          <div className="mt-16 grid gap-14 lg:grid-cols-2">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
                <span className="h-0.5 w-6 bg-primary" />
                Get In Touch
              </span>
              <h2 className="text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl">
                Have a Question? Enroll Today
              </h2>
              <p className="mt-4 max-w-md text-text-muted">
                Fill out the form and our team will get back to you, or call us directly to enroll
                for the July 2026 intake.
              </p>

              <form className="mt-8 grid gap-4" onSubmit={(e) => e.preventDefault()}>
                <div className="grid gap-4 sm:grid-cols-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="rounded-xl border border-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none"
                  />
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="rounded-xl border border-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none"
                  />
                </div>
                <input
                  type="text"
                  placeholder="Course of Interest"
                  className="rounded-xl border border-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="rounded-xl border border-border px-4 py-3 text-sm text-text-primary placeholder:text-text-muted focus:border-primary focus:outline-none"
                />
                <Button variant="filled" className="w-fit">
                  Send Message
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </form>
            </div>

            <div className="h-full min-h-[360px] overflow-hidden rounded-3xl">
              <iframe
                title="Dawnrise Training Institute location"
                src="https://www.google.com/maps?q=Ngong+Road+Nairobi+Kenya&output=embed"
                className="h-full w-full"
                loading="lazy"
              />
            </div>
          </div>
        </Container>
      </Reveal>
    </>
  )
}
