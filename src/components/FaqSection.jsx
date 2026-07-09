import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Plus, Minus, HelpCircle, Sparkle, Clock } from 'lucide-react'
import Container from './Container'
import Button from './Button'

const FAQS = [
  {
    question: 'What do I need to bring for enrollment?',
    answer:
      'A registration fee, 1 passport photo, your ID copy or waiting card, and any previous academic report (primary or high school). Academic papers can be organized as you continue with learning.',
  },
  {
    question: 'Is Dawnrise Training Institute TVETA accredited?',
    answer:
      'Yes. Dawnrise Training Institute is TVETA accredited, so you graduate with a recognized certificate.',
  },
  {
    question: 'Can I pay my fees in installments?',
    answer:
      'Yes, we offer flexible fee payment (Lipa Pole Pole) so you can pay as you go through the course.',
  },
]

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section className="relative overflow-hidden bg-surface-navy py-20">
      <div className="absolute right-8 top-8 hidden grid-cols-6 gap-2 lg:grid">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="h-1.5 w-1.5 rounded-full bg-primary/30" />
        ))}
      </div>

      <Container className="grid items-center gap-14 lg:grid-cols-2">
        <div className="relative mx-auto max-w-sm">
          <div className="absolute -right-6 -top-6 h-56 w-56 rounded-full bg-primary" />

          <div className="absolute -left-2 bottom-20 grid grid-cols-5 gap-1.5">
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={i} className="h-1 w-1 rounded-full bg-primary/40" />
            ))}
          </div>
          <Sparkle className="absolute -left-1 top-1/2 h-5 w-5 fill-primary text-primary" />

          <img
            src="https://picsum.photos/seed/educatex-faq/460/560"
            alt="Dawnrise Institute advisor"
            className="relative mx-auto h-[420px] w-[85%] rounded-[2.5rem] object-cover shadow-xl"
          />

          <span className="absolute bottom-16 left-2 flex -rotate-6 items-center gap-1.5 rounded-xl bg-primary px-3 py-2 text-xs font-bold text-white shadow-lg">
            <Clock className="h-3.5 w-3.5" />
            24/7 Support
          </span>

          <span className="absolute right-2 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-surface shadow-xl">
            <HelpCircle className="h-5 w-5 text-primary" />
          </span>
        </div>

        <div>
          <span className="mb-3 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-primary">
            <span className="h-0.5 w-6 bg-primary" />
            University Questions
          </span>
          <h2 className="max-w-md text-3xl font-extrabold leading-tight text-text-primary sm:text-4xl">
            What you want to Know About Dawnrise Institute?
          </h2>

          <div className="mt-8 flex flex-col gap-3">
            {FAQS.map((faq, i) => {
              const isOpen = openIndex === i
              return (
                <div
                  key={faq.question}
                  className={`rounded-2xl p-5 transition-colors ${isOpen ? 'bg-surface shadow-lg' : 'bg-surface/50'}`}
                >
                  <button
                    className="flex w-full items-center justify-between gap-4 text-left text-sm font-bold text-text-primary"
                    onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  >
                    {faq.question}
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-white">
                      {isOpen ? <Minus className="h-3.5 w-3.5" /> : <Plus className="h-3.5 w-3.5" />}
                    </span>
                  </button>
                  {isOpen && <p className="mt-3 text-sm text-text-muted">{faq.answer}</p>}
                </div>
              )
            })}
          </div>

          <Button as={Link} to="/about" variant="filled" className="mt-8">
            Learn More
          </Button>
        </div>
      </Container>
    </section>
  )
}
