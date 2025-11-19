'use client'

import { Heart, Cog, Eye, ArrowRight } from 'lucide-react'
import ServiceCard from './service-card'
import { useEffect, useState } from 'react'

const services = [
  {
    icon: Heart,
    title: 'Healthcare Solutions',
    description: 'Bridging the gap between clinics, hospitals, and patients with our innovative healthcare middleware platform.',
    features: [
      'Clinic-Hospital Integration',
      'Patient Management',
      'Real-time Data Sync',
      'HIPAA Compliant'
    ],
    status: 'Under Development',
    color: 'from-red-500/20 to-rose-500/20',
    link: '/services/healthcare'
  },
  {
    icon: Cog,
    title: 'Smart Software Solutions',
    description: 'Enterprise-grade applications tailored to your business needs with minimal investment and maximum customization.',
    features: [
      'Portfolio & Showcase Sites',
      'Procurement Solutions',
      'HRMS Platforms',
      'Custom Web Apps',
      'Staff Management',
      'Payment Systems'
    ],
    status: '',
    color: 'from-blue-500/20 to-cyan-500/20',
    link: '/services/software'
  },
  {
    icon: Eye,
    title: 'AI-Powered Attendance',
    description: 'Advanced attendance management with AI face recognition, work time tracking, and overtime analytics.',
    features: [
      'AI Face Recognition',
      'Camera Check-in/Check-out',
      'GPS Field Tracking',
      'Daily/Monthly Reports',
      'Brand Customization',
      '7-Day Setup'
    ],
    status: '',
    color: 'from-purple-500/20 to-indigo-500/20',
    link: '/services/attendance'
  }
]

export default function Services() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="services" className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-700" />
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center space-y-4 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-primary/20 text-primary text-sm font-semibold border border-primary/30">
              OUR SERVICES
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-foreground via-primary to-cyan-400 bg-clip-text text-transparent">
            Service Branches
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Three pillars of innovation designed to solve modern business challenges with cutting-edge technology
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>

        <div className="relative group">
          <div className="absolute -inset-1 bg-linear-to-r from-primary via-cyan-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
          <div className="relative bg-linear-to-br from-background to-background/80 backdrop-blur-xl p-12 rounded-2xl border border-primary/20">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-bold bg-linear-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-6">
                  Why Choose Smartnex?
                </h3>
                <ul className="space-y-4">
                  {[
                    'Minimal Cost, Maximum Customization',
                    'Expert Development Team',
                    'Rapid Deployment & Support',
                    'Scalable & Future-Proof Solutions'
                  ].map((item, idx) => (
                    <li key={idx} className="flex gap-3 items-start">
                      <div className="mt-1 w-5 h-5 rounded-full bg-linear-to-r from-primary to-cyan-500 flex items-center justify-center shrink-0">
                        <span className="text-white text-xs font-bold">✓</span>
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-4">
                <h3 className="text-3xl font-bold bg-linear-to-r from-primary to-cyan-400 bg-clip-text text-transparent mb-6">
                  Our Commitment
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  We deliver enterprise-quality solutions at startup prices. Our attendance management system is deployed within 7 days with full brand customization.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  For other services, we provide flexible solutions and continuous support to ensure your success in the digital transformation journey.
                </p>
                <button className="mt-6 group/btn inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white font-semibold rounded-lg transition">
                  Get Started
                  <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.8; }
        }
        .animate-pulse { animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite; }
        .delay-700 { animation-delay: 0.7s; }
        .delay-1000 { animation-delay: 1s; }
      `}</style>
    </section>
  )
}
