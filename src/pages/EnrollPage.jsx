import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Check, ArrowLeft, ArrowRight, Loader2, CheckCircle2 } from 'lucide-react'
import Container from '../components/Container'
import PageBanner from '../components/PageBanner'
import Button from '../components/Button'
import Reveal from '../components/Reveal'
import { COURSES, getCourseBySlug } from '../data/courses'

const STEPS = [
  {
    title: 'Course',
    fields: [
      { name: 'course', label: 'Course', type: 'select', options: COURSES.map((c) => c.title), required: true },
      { name: 'intake', label: 'Preferred Intake', type: 'text', required: true },
    ],
  },
  {
    title: 'Personal Info',
    fields: [
      { name: 'fullName', label: 'Full Name', type: 'text', required: true },
      { name: 'email', label: 'Email Address', type: 'email', required: true },
      { name: 'phone', label: 'Phone Number', type: 'tel', required: true },
      { name: 'idNumber', label: 'ID Number / Waiting Card No.', type: 'text', required: true },
      { name: 'dob', label: 'Date of Birth', type: 'date', required: true },
      { name: 'gender', label: 'Gender', type: 'select', options: ['Female', 'Male', 'Prefer not to say'], required: true },
    ],
  },
  {
    title: 'Background',
    fields: [
      { name: 'location', label: 'County / Location', type: 'text', required: true },
      {
        name: 'education',
        label: 'Highest Level of Education',
        type: 'select',
        options: ['Primary', 'High School', 'Certificate', 'Diploma', 'Degree', 'Other'],
        required: true,
      },
      {
        name: 'referral',
        label: 'How Did You Hear About Us?',
        type: 'select',
        options: ['Social Media', 'Friend / Family', 'Poster / Flyer', 'Google Search', 'Other'],
        required: false,
      },
      { name: 'notes', label: 'Additional Notes', type: 'textarea', required: false },
    ],
  },
  { title: 'Review' },
]

const ALL_FIELDS = STEPS.flatMap((s) => s.fields ?? [])

export default function EnrollPage() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const preselectedCourse = getCourseBySlug(slug)

  const [step, setStep] = useState(0)
  const [formData, setFormData] = useState({
    course: preselectedCourse?.title ?? '',
    intake: 'July 2026',
  })
  const [status, setStatus] = useState('idle')
  const [error, setError] = useState('')

  const isReview = step === STEPS.length - 1
  const currentFields = STEPS[step].fields ?? []

  function updateField(name, value) {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function isStepValid(index) {
    const fields = STEPS[index].fields ?? []
    return fields.every((f) => !f.required || String(formData[f.name] ?? '').trim() !== '')
  }

  function goNext() {
    if (!isStepValid(step)) return
    setStep((s) => Math.min(s + 1, STEPS.length - 1))
  }

  function goBack() {
    setStep((s) => Math.max(s - 1, 0))
  }

  async function handleSubmit() {
    setStatus('submitting')
    setError('')
    try {
      const res = await fetch('https://formsubmit.co/ajax/limokevin30@gmail.com', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          _subject: `New Course Registration: ${formData.course}`,
          _template: 'table',
          ...formData,
        }),
      })
      if (!res.ok) throw new Error('Submission failed')
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setError('Something went wrong sending your registration. Please try again or call us directly.')
    }
  }

  if (status === 'success') {
    return (
      <>
        <PageBanner title="Enroll Now" crumb="Enroll" />
        <Reveal as="section" className="bg-surface py-24">
          <Container className="max-w-lg text-center">
            <span className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-success text-white">
              <CheckCircle2 className="h-8 w-8" />
            </span>
            <h1 className="mt-6 text-2xl font-extrabold text-text-primary">Registration Submitted!</h1>
            <p className="mt-3 text-text-muted">
              Thanks, {formData.fullName || 'there'}. Your registration for{' '}
              <strong>{formData.course}</strong> has been sent to our admissions team. We'll reach
              out to you on {formData.phone || 'your phone'} shortly.
            </p>
            <Button variant="filled" className="mt-8" onClick={() => navigate('/')}>
              Back to Home
            </Button>
          </Container>
        </Reveal>
      </>
    )
  }

  return (
    <>
      <PageBanner title="Enroll Now" crumb="Enroll" />

      <Reveal as="section" className="bg-surface py-20">
        <Container className="max-w-2xl">
          <div className="flex items-center justify-between">
            {STEPS.map((s, i) => (
              <div key={s.title} className="flex flex-1 items-center last:flex-none">
                <div className="flex flex-col items-center gap-2">
                  <span
                    className={`flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold transition-colors ${
                      i < step
                        ? 'bg-success text-white'
                        : i === step
                          ? 'bg-primary text-white'
                          : 'bg-surface-navy text-text-muted'
                    }`}
                  >
                    {i < step ? <Check className="h-4 w-4" /> : i + 1}
                  </span>
                  <span className="hidden text-xs font-medium text-text-muted sm:block">{s.title}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <span className={`mx-2 h-0.5 flex-1 ${i < step ? 'bg-success' : 'bg-border'}`} />
                )}
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-surface-navy p-6 sm:p-10">
            {!isReview ? (
              <div className="grid gap-5 sm:grid-cols-2">
                {currentFields.map((field) => (
                  <div key={field.name} className={field.type === 'textarea' ? 'sm:col-span-2' : ''}>
                    <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-text-primary">
                      {field.label}
                      {field.required && <span className="text-accent-red"> *</span>}
                    </label>
                    {field.type === 'select' ? (
                      <select
                        value={formData[field.name] ?? ''}
                        onChange={(e) => updateField(field.name, e.target.value)}
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary focus:border-primary focus:outline-none"
                      >
                        <option value="" disabled>
                          Select {field.label}
                        </option>
                        {field.options.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    ) : field.type === 'textarea' ? (
                      <textarea
                        rows={4}
                        value={formData[field.name] ?? ''}
                        onChange={(e) => updateField(field.name, e.target.value)}
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary focus:border-primary focus:outline-none"
                      />
                    ) : (
                      <input
                        type={field.type}
                        value={formData[field.name] ?? ''}
                        onChange={(e) => updateField(field.name, e.target.value)}
                        className="w-full rounded-xl border border-border bg-surface px-4 py-3 text-sm text-text-primary focus:border-primary focus:outline-none"
                      />
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <h2 className="text-lg font-bold text-text-primary">Review Your Registration</h2>
                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                  {ALL_FIELDS.filter((f) => formData[f.name]).map((f) => (
                    <div key={f.name}>
                      <dt className="text-xs font-bold uppercase tracking-wide text-text-muted">{f.label}</dt>
                      <dd className="mt-0.5 text-sm font-medium text-text-primary">{formData[f.name]}</dd>
                    </div>
                  ))}
                </dl>
                {error && <p className="mt-5 text-sm font-medium text-accent-red">{error}</p>}
              </div>
            )}

            <div className="mt-8 flex items-center justify-between">
              <Button
                variant="outline"
                onClick={goBack}
                disabled={step === 0}
                className={step === 0 ? 'invisible' : ''}
              >
                <ArrowLeft className="h-4 w-4" />
                Back
              </Button>

              {!isReview ? (
                <Button variant="filled" onClick={goNext} disabled={!isStepValid(step)}>
                  Next
                  <ArrowRight className="h-4 w-4" />
                </Button>
              ) : (
                <Button variant="filled" onClick={handleSubmit} disabled={status === 'submitting'}>
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      Submit Registration
                      <ArrowRight className="h-4 w-4" />
                    </>
                  )}
                </Button>
              )}
            </div>
          </div>
        </Container>
      </Reveal>
    </>
  )
}
