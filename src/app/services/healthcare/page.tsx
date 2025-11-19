import type { Metadata } from 'next'
import { Heart, Hospital, Users, Shield, Zap, Lock } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ServiceHero } from '@/components/service-hero'
import { FeatureSection } from '@/components/feature-section'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Healthcare Solutions | Smartnex Technologies',
  description: 'Innovative healthcare middleware platform connecting clinics, hospitals, and patients. Real-time integration, patient management, and HIPAA compliance.',
  keywords: 'healthcare software, clinic management, hospital integration, patient management, healthcare middleware, telemedicine',
  openGraph: {
    title: 'Healthcare Solutions | Smartnex Technologies',
    description: 'Connect clinics, hospitals, and patients with our innovative healthcare middleware platform.',
    url: 'https://smartnex.tech/services/healthcare',
  },
}

export default function HealthcarePage() {
  const features = [
    {
      icon: 'Hospital',
      title: 'Hospital Integration',
      description: 'Seamlessly connect multiple hospitals and clinics into one unified platform for better coordination and data sharing.'
    },
    {
      icon: 'Users',
      title: 'Patient Management',
      description: 'Comprehensive patient profiles with medical history, appointments, prescriptions, and real-time health monitoring.'
    },
    {
      icon: 'Zap',
      title: 'Real-time Sync',
      description: 'Instant synchronization across all connected facilities ensuring no delays in critical patient information updates.'
    },
    {
      icon: 'Shield',
      title: 'HIPAA Compliance',
      description: 'Enterprise-grade security with end-to-end encryption and full compliance with healthcare data protection regulations.'
    },
    {
      icon: 'Heart',
      title: 'Telehealth Ready',
      description: 'Built-in telemedicine capabilities for remote consultations and follow-ups between patients and healthcare providers.'
    },
    {
      icon: 'Lock',
      title: 'Data Security',
      description: 'Military-grade encryption and regular security audits to protect sensitive patient information and maintain privacy.'
    }
  ]

  return (
    <main>
      <Navbar />
      
      <ServiceHero
        title="Healthcare Solutions"
        subtitle="Coming Soon"
        description="Revolutionizing healthcare delivery through technology. Our middleware platform bridges clinics, hospitals, and patients for seamless coordination and better patient outcomes."
        color="red"
      />

      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                The Healthcare <span className="text-primary">Middleware</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our healthcare platform acts as the central nervous system for medical institutions, connecting clinics, hospitals, diagnostic centers, and pharmacies into one intelligent ecosystem.
              </p>
              <ul className="space-y-3">
                {['Unified patient records across facilities', 'Instant appointment coordination', 'Real-time prescription sharing', 'Insurance processing integration', 'Complete audit trails'].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="space-y-4">
                <div className="h-32 bg-linear-to-br from-red-500/20 to-red-500/5 rounded-lg flex items-center justify-center">
                  <Heart className="w-16 h-16 text-red-500 opacity-20" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Currently in Development</h3>
                <p className="text-muted-foreground">We're building something revolutionary for the healthcare industry. Early adopters and partners welcome.</p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-2 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
                >
                  Express Interest
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection
        title="Key Capabilities"
        description="Comprehensive tools built for modern healthcare systems"
        features={features}
      />

      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Ready to Transform Healthcare?</h2>
          <p className="text-lg text-muted-foreground">
            Get on our waitlist for early access and exclusive partner benefits.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
          >
            Contact Us
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
