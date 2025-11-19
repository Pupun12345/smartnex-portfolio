'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Zap, Lightbulb, Code2, Target, Users } from 'lucide-react'
import founderImage from '@/assets/images/founder-image.webp'

export default function AboutContent() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section with Tech Background */}
      <section className="relative py-32 px-4 overflow-hidden border-b border-border">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-accent/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" preserveAspectRatio="none">
            <defs>
              <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid-pattern)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-linear-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30">
            <Zap className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-sm font-semibold text-primary">Powering Enterprise Innovation</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            About <span className="bg-linear-to-r from-primary via-accent to-primary bg-clip-text text-transparent">Smartnex</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Founded on the principle that innovative technology should be accessible to every business, delivering enterprise-grade solutions at affordable prices.
          </p>
        </div>
      </section>

      {/* Founder Section */}
      <section className="py-32 px-4 bg-linear-to-b from-background via-card/5 to-background">
        <div className="max-w-6xl mx-auto space-y-20">
          {/* Founder Story */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <div className="space-y-4">
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Founder's <span className="text-primary">Vision</span></h2>
                <div className="h-1 w-20 bg-linear-to-r from-primary to-accent" />
              </div>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                Himanshu Sekhar Parida founded Smartnex Technologies with a clear vision: to democratize enterprise software and make cutting-edge solutions accessible to businesses of all sizes.
              </p>
              
              <p className="text-lg text-muted-foreground leading-relaxed">
                His journey began with a simple observation – many small and medium enterprises struggle to implement modern solutions due to high costs. This inspired him to create Smartnex, a company that delivers enterprise-quality software at startup-friendly prices.
              </p>

              <div className="pt-4 space-y-4">
                <p className="text-sm font-semibold text-primary uppercase tracking-widest">Connect & Learn More</p>
                <Link
                  href="https://in.linkedin.com/company/smartnex-technologies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-linear-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition transform hover:scale-105"
                >
                  Connect with Himanshu
                  <span>→</span>
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-4 bg-linear-to-r from-primary to-accent rounded-2xl opacity-20 group-hover:opacity-30 blur-xl transition duration-300" />
              <div className="relative rounded-2xl overflow-hidden border-2 border-primary/50 group-hover:border-accent/50 transition">
                <Image
                  src={founderImage}
                  alt="Himanshu Sekhar Parida - Founder & CEO of Smartnex Technologies"
                  width={600}
                  height={600}
                  className="w-full h-auto object-cover"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Three Pillars */}
          <div className="space-y-16">
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Three <span className="text-primary">Pillars</span></h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Comprehensive solutions spanning healthcare, software, and AI</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="group relative p-8 rounded-xl border border-border bg-linear-to-br from-red-500/5 to-transparent hover:border-red-500/50 transition duration-300">
                <div className="absolute -inset-px bg-linear-to-r from-red-500/0 via-red-500/0 to-red-500/0 group-hover:from-red-500/20 group-hover:via-transparent group-hover:to-red-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl -z-10" />
                
                <div className="relative space-y-4">
                  <div className="w-14 h-14 bg-red-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-red-500 font-bold text-2xl">01</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-red-500 transition">Healthcare Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Bridging clinics, hospitals, and patients with intelligent middleware solutions. Currently under development to revolutionize healthcare connectivity.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 rounded-xl border border-border bg-linear-to-br from-blue-500/5 to-transparent hover:border-blue-500/50 transition duration-300">
                <div className="absolute -inset-px bg-linear-to-r from-blue-500/0 via-blue-500/0 to-blue-500/0 group-hover:from-blue-500/20 group-hover:via-transparent group-hover:to-blue-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl -z-10" />
                
                <div className="relative space-y-4">
                  <div className="w-14 h-14 bg-blue-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-blue-500 font-bold text-2xl">02</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-blue-500 transition">Smart Software</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Enterprise solutions including HRMS, procurement systems, portfolio websites, and custom applications tailored to your needs at minimal cost.
                  </p>
                </div>
              </div>

              <div className="group relative p-8 rounded-xl border border-border bg-linear-to-br from-purple-500/5 to-transparent hover:border-purple-500/50 transition duration-300">
                <div className="absolute -inset-px bg-linear-to-r from-purple-500/0 via-purple-500/0 to-purple-500/0 group-hover:from-purple-500/20 group-hover:via-transparent group-hover:to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur-xl -z-10" />
                
                <div className="relative space-y-4">
                  <div className="w-14 h-14 bg-purple-500/20 rounded-lg flex items-center justify-center">
                    <span className="text-purple-500 font-bold text-2xl">03</span>
                  </div>
                  <h3 className="text-xl font-bold text-foreground group-hover:text-purple-500 transition">AI Attendance</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Advanced attendance system with AI face recognition, work tracking, and overtime management. Deployed and customized within 7 days.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-32 px-4 bg-background relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <svg className="w-full h-full" preserveAspectRatio="none">
            <defs>
              <pattern id="dots" x="0" y="0" width="50" height="50" patternUnits="userSpaceOnUse">
                <circle cx="25" cy="25" r="2" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#dots)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">Our Core <span className="text-primary">Values</span></h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">Guiding principles that drive everything we do</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group p-8 rounded-xl bg-linear-to-br from-primary/5 to-transparent border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition duration-300">
              <div className="flex items-start gap-4">
                <Lightbulb className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We stay at the forefront of technology, constantly innovating to deliver solutions that give your business a competitive edge.
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-8 rounded-xl bg-linear-to-br from-accent/5 to-transparent border border-accent/20 hover:border-accent/50 hover:bg-accent/10 transition duration-300">
              <div className="flex items-start gap-4">
                <Target className="w-8 h-8 text-accent shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition">Affordability</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Enterprise-quality software shouldn't break the bank. We prove that innovation and affordability can coexist.
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-8 rounded-xl bg-linear-to-br from-primary/5 to-transparent border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition duration-300">
              <div className="flex items-start gap-4">
                <Code2 className="w-8 h-8 text-primary shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition">Customization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Every business is unique. Our solutions are built to adapt to your specific requirements, not force you into a generic mold.
                  </p>
                </div>
              </div>
            </div>

            <div className="group p-8 rounded-xl bg-linear-to-br from-accent/5 to-transparent border border-accent/20 hover:border-accent/50 hover:bg-accent/10 transition duration-300">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-accent shrink-0 mt-1" />
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition">Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our commitment doesn't end at deployment. We provide continuous support to ensure your success and satisfaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
