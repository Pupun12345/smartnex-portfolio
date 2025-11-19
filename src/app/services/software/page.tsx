import type { Metadata } from 'next'
import { Cog, Globe, Users, BarChart3, Shield, Zap } from 'lucide-react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { ServiceHero } from '@/components/service-hero'
import { FeatureSection } from '@/components/feature-section'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Smart Software Solutions | Smartnex Technologies',
  description: 'Custom enterprise software development: Portfolio sites, HRMS, Procurement solutions, Payment apps, and fully customized web applications at minimal cost.',
  keywords: 'software development, HRMS, procurement software, payment solutions, custom web apps, enterprise software, India tech',
  openGraph: {
    title: 'Smart Software Solutions | Smartnex Technologies',
    description: 'Enterprise-grade custom software solutions with minimal investment and maximum customization.',
    url: 'https://smartnex.tech/services/software',
  },
}

export default function SoftwarePage() {
  const features = [
    {
      icon: 'Globe',
      title: 'Portfolio & Showcase Sites',
      description: 'Professional, SEO-optimized websites to showcase your business, products, and services with modern responsive design.'
    },
    {
      icon: 'BarChart3',
      title: 'Procurement Solutions',
      description: 'End-to-end procurement platform managing vendor relationships, inventory, bidding, and purchase order automation.'
    },
    {
      icon: 'Users',
      title: 'HRMS Platform',
      description: 'Complete human resource management system handling payroll, leave management, performance, and employee analytics.'
    },
    {
      icon: 'Cog',
      title: 'Staff Management',
      description: 'Comprehensive workforce management with scheduling, task assignment, performance tracking, and team collaboration.'
    },
    {
      icon: 'Zap',
      title: 'Payment Systems',
      description: 'Secure payment processing integration with multiple gateways, invoice generation, and financial reporting.'
    },
    {
      icon: 'Shield',
      title: 'Custom Development',
      description: 'Fully customized applications built to your specific requirements with your brand identity and workflows.'
    }
  ]

  const projects = [
    {
      title: 'Portfolio & Showcase Sites',
      desc: 'Launch your digital presence with beautiful, SEO-optimized websites'
    },
    {
      title: 'HRMS Platforms',
      desc: 'Streamline HR operations with comprehensive employee management'
    },
    {
      title: 'Procurement Solutions',
      desc: 'Optimize supply chain with intelligent procurement systems'
    },
    {
      title: 'Staff Management Apps',
      desc: 'Manage your team efficiently with scheduling and task tools'
    },
    {
      title: 'Payment Applications',
      desc: 'Secure payment processing and financial management'
    },
    {
      title: 'Custom Web Apps',
      description: 'Any solution you need, fully customized to your business'
    }
  ]

  return (
    <main>
      <Navbar />
      
      <ServiceHero
        title="Smart Software Solutions"
        subtitle="Available Now"
        description="Enterprise-grade software applications tailored to your unique business needs. From portfolio sites to complex procurement systems, we deliver maximum customization at minimal cost."
        color="blue"
      />

      <section className="py-20 px-4 bg-background">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-4xl font-bold text-foreground">
              Our Software <span className="text-primary">Portfolio</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Already built and deployed for multiple clients across industries
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, i) => (
              <div
                key={i}
                className="group p-6 rounded-lg border border-border bg-card/50 hover:border-primary hover:bg-card transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureSection
        title="What Makes Us Different"
        description="Quality software doesn't have to be expensive"
        features={features}
      />

      <section className="py-20 px-4 bg-card">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-bold text-foreground">Why Choose Our Software Solutions?</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              { title: 'Affordable Pricing', desc: 'Enterprise features without the enterprise price tag' },
              { title: 'Quick Deployment', desc: 'Fast implementation with minimal disruption to your business' },
              { title: 'Full Customization', desc: 'Built exactly how you need it, no compromises' },
              { title: 'Ongoing Support', desc: 'Dedicated team ready to help with updates and improvements' },
              { title: 'Scalable Design', desc: 'Grows with your business as you expand' },
              { title: 'Modern Technology', desc: 'Built with latest frameworks and best practices' }
            ].map((item, i) => (
              <div key={i} className="flex gap-4">
                <div className="shrink-0">
                  <div className="flex items-center justify-center h-10 w-10 rounded-md bg-primary text-primary-foreground">
                    ✓
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-background">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Start Your Software Project Today</h2>
          <p className="text-lg text-muted-foreground">
            Get a free consultation and custom quote for your specific needs.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:opacity-90 transition"
          >
            Get Free Consultation
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}
