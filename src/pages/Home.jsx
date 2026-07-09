import Hero from '../components/Hero'
import FeatureStrip from '../components/FeatureStrip'
import About from '../components/About'
import Courses from '../components/Courses'
import CtaBanner from '../components/CtaBanner'
import Approach from '../components/Approach'
import PartnerLogos from '../components/PartnerLogos'
import Testimonials from '../components/Testimonials'
import InnovativeBanner from '../components/InnovativeBanner'
import UpcomingMeetups from '../components/UpcomingMeetups'
import MarqueeTicker from '../components/MarqueeTicker'
import FaqSection from '../components/FaqSection'
import BlogSection from '../components/BlogSection'
import Reveal from '../components/Reveal'

export default function Home() {
  return (
    <>
      <Hero />
      <Reveal>
        <FeatureStrip />
      </Reveal>
      <Reveal>
        <About />
      </Reveal>
      <Reveal>
        <Courses />
      </Reveal>
      <Reveal>
        <CtaBanner />
      </Reveal>
      <Reveal>
        <Approach />
      </Reveal>
      <Reveal>
        <PartnerLogos />
      </Reveal>
      <Reveal>
        <Testimonials />
      </Reveal>
      <Reveal>
        <InnovativeBanner />
      </Reveal>
      <Reveal>
        <UpcomingMeetups />
      </Reveal>
      <MarqueeTicker />
      <Reveal>
        <FaqSection />
      </Reveal>
      <Reveal>
        <BlogSection />
      </Reveal>
    </>
  )
}
