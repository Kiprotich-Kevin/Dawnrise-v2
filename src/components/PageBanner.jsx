import { Link } from 'react-router-dom'
import Container from './Container'
import heroSlide1 from '../assets/hero-slide-1.png'

export default function PageBanner({ title, crumb, image = heroSlide1 }) {
  return (
    <section className="relative flex h-64 items-center overflow-hidden bg-dark sm:h-80">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-dark/70" />

      <Container className="relative text-center">
        <h1 className="text-3xl font-extrabold text-white sm:text-4xl">{title}</h1>
        <p className="mt-3 text-sm text-white/70">
          <Link to="/" className="hover:text-primary-light">
            Home
          </Link>
          {' / '}
          {crumb ?? title}
        </p>
      </Container>
    </section>
  )
}
