import { Link } from 'react-router-dom'
import Container from './Container'
import Button from './Button'

export default function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary-dark py-14">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.5) 1.5px, transparent 1.5px)',
          backgroundSize: '20px 20px',
        }}
      />
      <div className="absolute inset-0 bg-primary/75" />

      <Container className="relative flex flex-col items-center justify-between gap-6 text-center lg:flex-row lg:text-left">
        <h2 className="text-2xl font-extrabold text-white sm:text-3xl">
          Your Learning Journey Begins Here
          <br className="hidden sm:block" />
          Explore – all programs Today
        </h2>
        <Button as={Link} to="/courses" variant="ghost">
          All Programs
        </Button>
      </Container>
    </section>
  )
}
