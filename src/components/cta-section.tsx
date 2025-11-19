'use client'

import { ArrowRight, Zap } from 'lucide-react'
import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function CTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-20" viewBox="0 0 1200 600">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <div className={`inline-block mb-6 px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-primary/20 border border-primary/30 transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <span className="text-primary text-sm font-semibold flex items-center gap-2">
            <Zap size={16} /> Ready to Transform?
          </span>
        </div>

        <h2 className={`text-4xl md:text-6xl font-bold bg-linear-to-r from-foreground via-primary to-cyan-400 bg-clip-text text-transparent mb-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Let's Build Your Future
        </h2>

        <p className={`text-lg text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Join 50+ companies already transforming their operations with Smartnex solutions. From healthcare to enterprise software, we've got you covered.
        </p>

        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link href="/contact">
            <button className="group px-8 py-4 bg-linear-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-500/90 text-white font-semibold rounded-lg transition flex items-center gap-2">
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition" />
            </button>
          </Link>
          <Link href="#services">
            <button className="px-8 py-4 border-2 border-primary/40 hover:border-primary text-foreground font-semibold rounded-lg transition hover:bg-primary/10">
              Explore Services
            </button>
          </Link>
        </div>

        <div className={`mt-16 grid md:grid-cols-3 gap-8 pt-12 border-t border-primary/20 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { number: '50+', label: 'Clients' },
            { number: '3', label: 'Service Branches' },
            { number: '7 Days', label: 'Fast Deployment' }
          ].map((stat, idx) => (
            <div key={idx} className="space-y-2">
              <div className="text-3xl font-bold bg-linear-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
