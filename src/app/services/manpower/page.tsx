import type { Metadata } from 'next'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ServiceHero } from '@/components/service-hero'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Sitelink — India\'s Fastest Manpower Hiring Platform | Smartnex',
  description: 'Sitelink connects verified construction workers with vendors. Confirmed manpower in 24 hours, replacements in 48 hours. Built for India\'s construction industry.',
  keywords: 'Sitelink, construction manpower, verified workers, manpower hiring, construction labor India, vendor manpower, worker verification',
  openGraph: {
    title: 'Sitelink — India\'s Fastest Manpower Hiring Platform',
    description: 'Verified workers. 24-hour hiring. 48-hour replacement. Built for India\'s construction industry.',
    url: 'https://smartnex.tech/services/manpower',
  },
}

export default function ManpowerPage() {
  return (
    <main>
      <Navbar />

      <ServiceHero
        title="India's Fastest Manpower Hiring Platform"
        subtitle="Available Now"
        description="Sitelink connects verified construction workers with vendors and construction companies — delivering confirmed manpower within 24 hours and replacements within 48 hours."
        color="purple"
      />

      {/* What We Do */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl font-bold text-foreground">
                A Platform Built Around <span className="text-primary">One Promise</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Sitelink is a request-based manpower hiring system. Vendors post their requirements — role, quantity, location, and duration — and our admin team matches them with verified workers from our database, confirming deployment within 24 hours.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Every worker on Sitelink is ID-verified, skill-checked, and admin-approved before being added to our active pool — so vendors always get reliable, trusted manpower.
              </p>
              <ul className="space-y-3">
                {[
                  'Manpower confirmed in 24 hours',
                  'Replacement guaranteed in 48 hours',
                  'Every worker ID-verified & admin-approved',
                  'Workers register via mobile OTP — no paperwork',
                  'Vendors post requirements in minutes',
                ].map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-card rounded-lg p-8 border border-border space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Key Guarantees</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-background rounded-lg border border-border">
                  <p className="text-2xl font-bold text-purple-500">24h</p>
                  <p className="text-sm text-muted-foreground">Hiring Confirmed</p>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border">
                  <p className="text-2xl font-bold text-purple-500">48h</p>
                  <p className="text-sm text-muted-foreground">Replacement</p>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border">
                  <p className="text-2xl font-bold text-purple-500">100%</p>
                  <p className="text-sm text-muted-foreground">ID Verified</p>
                </div>
                <div className="p-4 bg-background rounded-lg border border-border">
                  <p className="text-2xl font-bold text-purple-500">0</p>
                  <p className="text-sm text-muted-foreground">Paperwork</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <span className="px-4 py-1 rounded-full bg-red-500/10 text-red-500 text-sm font-semibold border border-red-500/20">The Problem</span>
            <h2 className="text-4xl font-bold text-foreground py-4">Construction Manpower is Broken</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              India's construction industry employs millions of workers — yet hiring is still done through phone calls, middlemen, and unverified contacts. Vendors wait days for workers. Workers wait weeks for jobs. No one has visibility.
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Compliance is manual. Replacements take forever. And there's no single platform that connects workers, vendors, and administrators in one place.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              'No verified worker database',
              'Hiring takes days or weeks',
              'No replacement guarantee',
              'Manual, paper-based processes',
              'No transparency for vendors',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-center p-4 rounded-lg bg-red-500/5 border border-red-500/20">
                <span className="text-red-500 font-bold text-lg">✗</span>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">The Solution</span>
            <h2 className="text-4xl font-bold text-foreground py-4">Sitelink Changes Everything</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Sitelink is a mobile-first platform that digitizes the entire manpower hiring process — from worker registration and verification to vendor requests and admin matching.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-4 max-w-2xl mx-auto">
            {[
              'Manpower confirmed in 24 hours',
              'Replacement guaranteed in 48 hours',
              'Every worker ID-verified & admin-approved',
              'Workers register via mobile OTP — no paperwork',
              'Vendors post requirements in minutes',
            ].map((item, i) => (
              <div key={i} className="flex gap-3 items-center p-4 rounded-lg bg-primary/5 border border-primary/20">
                <span className="text-primary font-bold text-lg">✓</span>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">How It Works</h2>
            <p className="text-lg text-muted-foreground">Simple. Fast. Reliable. Two flows working together to deliver manpower in 24 hours.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Vendor Flow */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-primary">Vendor Flow</h3>
              <div className="space-y-4">
                {[
                  'Open app & create company profile',
                  'Login with mobile OTP',
                  'Select role, quantity, location & duration',
                  'Submit manpower request',
                  'Sitelink matches verified workers from database',
                  'Receive confirmed workers within 24 hours',
                  'Request replacement within 48 hrs if needed',
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-foreground pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Worker Flow */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-purple-500">Worker Flow</h3>
              <div className="space-y-4">
                {[
                  'Install app & create profile',
                  'Register with mobile OTP',
                  'Fill role, experience, location & salary',
                  'Upload ID proof & work experience photos',
                  'Admin verifies & approves profile',
                  'Receive job call & confirm availability',
                  'Get assigned to vendor site',
                ].map((step, i) => (
                  <div key={i} className="flex gap-4 items-start">
                    <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold text-sm shrink-0">
                      {i + 1}
                    </div>
                    <p className="text-foreground pt-1">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 px-4 bg-background">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <span className="px-4 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/20">Vision & Mission</span>
            <h2 className="text-4xl font-bold text-foreground py-4">Why We Built Sitelink</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A platform born from the real frustrations of India's construction industry — built to bring speed, trust, and dignity to every worker and vendor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                label: 'Our Vision',
                text: 'A construction industry where every worker is verified, every vendor gets manpower within 24 hours, and every replacement is handled within 48 hours — without friction.',
                color: 'border-primary/30 bg-primary/5',
                accent: 'text-primary',
              },
              {
                label: 'Our Mission',
                text: "To build India's most trusted manpower hiring platform — connecting verified construction workers with vendors through a fast, simple, and reliable request-based system.",
                color: 'border-purple-500/30 bg-purple-500/5',
                accent: 'text-purple-500',
              },
              {
                label: 'Our Values',
                text: 'Speed in delivery. Dignity for every worker. Transparency in every transaction. Accountability at every step of the hiring process.',
                color: 'border-cyan-500/30 bg-cyan-500/5',
                accent: 'text-cyan-500',
              },
            ].map((item, i) => (
              <div key={i} className={`p-6 rounded-xl border ${item.color} space-y-3`}>
                <h3 className={`text-lg font-bold ${item.accent}`}>{item.label}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Beliefs */}
      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">What We Stand For</h2>
            <p className="text-lg text-muted-foreground">Our Core Beliefs</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { title: 'Workers Deserve Dignity', desc: 'Every construction worker deserves a verified profile, fair pay, and a platform that represents them professionally.' },
              { title: 'Speed is Non-Negotiable', desc: "Construction sites can't wait. 24-hour hiring and 48-hour replacement isn't a goal — it's our guarantee." },
              { title: 'Trust Through Verification', desc: 'No unverified worker enters our network. Every profile is checked, approved, and maintained by our admin team.' },
              { title: 'Vendors Need Simplicity', desc: "Vendors shouldn't need to manage complex contracts. Post a requirement, get workers — that's it." },
            ].map((item, i) => (
              <div key={i} className="p-6 rounded-lg bg-background border border-border hover:border-primary transition-colors">
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Get in Touch */}
      <section className="py-16 px-4 bg-card">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Ready to Simplify Construction?</h2>
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
