import Navbar from '../components/navbar'
import Hero from '../components/hero'
import Services from '../components/services'
import Clients from '../components/clients'
import Founder from '@/components/founder'
import CTASection from '../components/cta-section'
import Footer from '@/components/footer'

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <CTASection />
      <Founder />
      <Footer />
    </main>
  )
}
