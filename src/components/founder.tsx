'use client'

import { Linkedin, Code2, Lightbulb, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import founderImage from '@/assets/images/founder-image.webp'

export default function Founder() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
              <circle cx="25" cy="25" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#dots)" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="grid md:grid-cols-5 gap-8 items-center">
          {/* Founder Image */}
          <div className={`md:col-span-2 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-primary via-cyan-500 to-purple-500 rounded-2xl blur opacity-25 group-hover:opacity-75 transition duration-1000" />
              <div className="relative aspect-square bg-linear-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden border border-primary/30">
                <Image
                  src={founderImage}
                  alt="Himansu Sekhar Parida - Founder & CEO of Smartnex Technologies"
                  // width={500}
                  // height={500}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className={`md:col-span-3 space-y-8 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-foreground via-primary to-cyan-400 bg-clip-text text-transparent mb-3">
                Himansu Sekhar Parida
              </h2>
              <p className="text-lg bg-linear-to-r from-primary to-cyan-400 bg-clip-text text-transparent font-semibold flex items-center gap-2">
                <Zap size={18} /> Founder & CEO, Smartnex Technologies
              </p>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed">
              With a vision to democratize technology and make enterprise solutions accessible to businesses of all sizes, Himansu founded Smartnex Technologies. His mission is to bridge the gap between innovation and affordability, transforming industries through cutting-edge software.
            </p>

            <div className="space-y-4">
              <div className="group relative p-5 rounded-xl border border-primary/20 bg-linear-to-br from-primary/5 to-transparent hover:border-primary/50 transition cursor-default">
                <div className="flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-primary/20 shrink-0">
                    <Lightbulb size={20} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Our Vision</h3>
                    <p className="text-sm text-muted-foreground">
                      To empower enterprises with cutting-edge software solutions that are affordable, scalable, and customizable.
                    </p>
                  </div>
                </div>
              </div>

              <div className="group relative p-5 rounded-xl border border-cyan-500/20 bg-linear-to-br from-cyan-500/5 to-transparent hover:border-cyan-500/50 transition cursor-default">
                <div className="flex gap-4 items-start">
                  <div className="p-2 rounded-lg bg-cyan-500/20 shrink-0">
                    <Code2 size={20} className="text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">Our Mission</h3>
                    <p className="text-sm text-muted-foreground">
                      Delivering high-quality, customized software solutions with exceptional support and rapid deployment.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <Link
              href="https://in.linkedin.com/company/smartnex-technologies?trk=public_profile_topcard-current-company"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-linear-to-r from-primary/20 to-cyan-500/20 border border-primary/30 hover:border-primary text-primary hover:text-cyan-400 transition font-semibold rounded-lg group"
            >
              <Linkedin size={20} />
              Connect on LinkedIn
              <span className="group-hover:translate-x-1 transition">→</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
