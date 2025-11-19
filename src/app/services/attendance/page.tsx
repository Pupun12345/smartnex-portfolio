import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ServiceHero } from '@/components/service-hero'
import { FeatureSection } from '@/components/feature-section'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Mobile Attendance Management for Construction | Smartnex Technologies',
  description: 'Mobile-first attendance system for construction companies. Supervisors take photos of workers, AI face recognition marks attendance instantly. 7-day deployment, monthly maintenance.',
  keywords: 'construction attendance, mobile attendance, field attendance, face recognition attendance, worker tracking, construction management, AI attendance',
  openGraph: {
    title: 'Mobile Attendance Management for Construction | Smartnex Technologies',
    description: 'Simple, fast attendance for construction workers. Supervisor takes photo, AI recognizes worker. No paperwork, no hassle.',
    url: 'https://smartnex.tech/services/attendance',
  },
}

export default function AttendancePage() {
  const features = [
    {
      icon: 'Smartphone',
      title: 'Mobile-First Design',
      description: 'Works on any smartphone. Supervisors take photos of workers on-site with a single tap.'
    },
    {
      icon: 'Eye',
      title: 'AI Face Recognition',
      description: 'Advanced facial recognition technology. Supervisor takes photo of worker, AI instantly verifies and marks them present.'
    },
    {
      icon: 'MapPin',
      title: 'GPS Field Tracking',
      description: 'Track exact location of workers on-site. GPS coordinates recorded with each attendance entry for complete accountability.'
    },
    {
      icon: 'Camera',
      title: 'Camera Check-in/Check-out',
      description: 'Workers check-in with photo when arriving, check-out when leaving. Captures exact time and timestamp for payroll.'
    },
    {
      icon: 'FileText',
      title: 'Generate Daily/Monthly Reports',
      description: 'Auto-generate detailed attendance reports daily or monthly. Export data, analyze patterns, track attendance trends.'
    },
    {
      icon: 'Palette',
      title: 'Your Brand',
      description: 'Fully customized with your company branding, colors, and logos. Your workers see your brand.'
    },
    {
      icon: 'Zap',
      title: '7-Day Setup',
      description: 'Rapid deployment. Your system is live and ready for workers in just 7 days.'
    },
    {
      icon: 'Headphones',
      title: 'Monthly Support',
      description: 'Dedicated support and maintenance every month. Updates, fixes, and feature requests handled.'
    }
  ]

  return (
    <main>
      <Navbar />
      
      <ServiceHero
        title="Mobile Attendance for Construction Workers"
        subtitle="Available Now"
        description="Simple, fast, and reliable. Supervisors take a photo of workers on-site, AI recognizes their face, attendance is marked instantly. No paperwork. No confusion."
        color="purple"
      />

      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                Attendance <span className="text-primary">On The Field</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Construction companies manage hundreds of workers across multiple sites. Attendance management should be simple and fast—not complicated paperwork. With Smartnex, supervisors take a photo of workers on their phone and attendance is marked instantly.
              </p>
              <ul className="space-y-3">
                {['Supervisor takes one photo', 'AI verifies worker instantly', 'Attendance marked automatically', 'GPS location recorded', 'Daily/Monthly reports generated', 'Worker data is secure', 'No additional hardware needed'].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border">
              <div className="space-y-6">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-foreground">Key Features</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="text-2xl font-bold text-purple-500">1</p>
                    <p className="text-sm text-muted-foreground">Tap Attendance</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="text-2xl font-bold text-purple-500">99%</p>
                    <p className="text-sm text-muted-foreground">Accuracy</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="text-2xl font-bold text-purple-500">∞</p>
                    <p className="text-sm text-muted-foreground">Workers</p>
                  </div>
                  <div className="p-4 bg-background rounded-lg border border-border">
                    <p className="text-2xl font-bold text-purple-500">✓</p>
                    <p className="text-sm text-muted-foreground">Your Brand</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <FeatureSection
        title="Everything You Need"
        description="Simple, powerful features built for construction"
        features={features}
      />

      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">How It Works</h2>
            <p className="text-lg text-muted-foreground">Get started in 4 simple steps</p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: '1', title: 'Download App', desc: 'Supervisors download the mobile app on their smartphone' },
              { step: '2', title: 'Take Photo', desc: 'Supervisor opens app and takes a photo of the worker' },
              { step: '3', title: 'AI Recognizes', desc: 'AI face recognition instantly identifies the worker' },
              { step: '4', title: 'Marked Present', desc: 'Attendance recorded with timestamp and location' }
            ].map((item, i) => (
              <div key={i} className="relative text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-xl mx-auto">
                  {item.step}
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
                {i < 3 && (
                  <div className="hidden md:block absolute top-8 -right-3 w-6 text-primary">→</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Perfect For Construction</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Multiple Sites', desc: 'Workers at different sites can mark attendance independently' },
              { title: 'Supervisor Approval', desc: 'Supervisors can verify and approve attendance instantly on-site' },
              { title: 'Instant Reports', desc: 'Get daily, weekly, monthly attendance reports with one click' },
              { title: 'Fraud Prevention', desc: 'AI face recognition prevents proxy attendance and spoofing' },
              { title: 'One-Time Cost', desc: 'Single payment, minimal monthly maintenance. No surprise fees' },
              { title: 'Real-Time Dashboard', desc: 'Live view of who is on-site right now across all locations' }
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg bg-card border border-border hover:border-primary transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Ready to Simplify Attendance?</h2>
          <p className="text-lg text-muted-foreground">
            Talk to us and see how this works for your construction company.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
