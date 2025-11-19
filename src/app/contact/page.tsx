'use client'

import { useState } from 'react'
import Navbar from '@/components/navbar'
import Footer from '@/components/footer'
import { Mail, Phone, Linkedin, Send, Zap } from 'lucide-react'
import Link from 'next/link'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' })
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } catch (error) {
      setSubmitStatus('error')
      setTimeout(() => setSubmitStatus('idle'), 3000)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-background">
        {/* Hero Section with Animated Background */}
        <section className="relative py-32 px-4 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br from-primary/20 to-transparent rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-accent/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
            <svg className="absolute inset-0 w-full h-full opacity-[0.03]" preserveAspectRatio="none">
              <defs>
                <pattern id="grid-contact" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid-contact)" />
            </svg>
          </div>

          <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-3 px-4 py-2 bg-linear-to-r from-primary/20 to-accent/20 rounded-full border border-primary/30">
              <Zap className="w-4 h-4 text-accent animate-pulse" />
              <span className="text-sm font-semibold text-primary">Let's Connect</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Get In <span className="bg-linear-to-r from-primary to-accent bg-clip-text text-transparent">Touch</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Have a question or ready to transform your business? We'd love to hear from you.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-32 px-4">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-foreground">Contact <span className="text-primary">Information</span></h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Reach out to us through any of these channels. We're here to help and excited to discuss your project.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {/* Email */}
                <div className="group p-6 rounded-xl border border-border bg-linear-to-br from-primary/5 to-transparent hover:border-primary/50 hover:bg-primary/10 transition duration-300">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:bg-primary/30 transition">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">Email</h3>
                      <p className="text-muted-foreground">contact@smartnex.tech</p>
                      <a href="mailto:contact@smartnex.tech" className="text-primary hover:text-accent transition text-sm font-medium inline-block">
                        Send an email →
                      </a>
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="group p-6 rounded-xl border border-border bg-linear-to-br from-accent/5 to-transparent hover:border-accent/50 hover:bg-accent/10 transition duration-300">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center group-hover:bg-accent/30 transition">
                        <Phone className="w-6 h-6 text-accent" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">Phone</h3>
                      <p className="text-muted-foreground">+91 82608 05119</p>
                      <a href="tel:+918260805119" className="text-accent hover:text-primary transition text-sm font-medium inline-block">
                        Call us →
                      </a>
                    </div>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="group p-6 rounded-xl border border-border bg-linear-to-br from-blue-500/5 to-transparent hover:border-blue-500/50 hover:bg-blue-500/10 transition duration-300">
                  <div className="flex gap-4">
                    <div className="shrink-0">
                      <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center group-hover:bg-blue-500/30 transition">
                        <Linkedin className="w-6 h-6 text-blue-500" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-semibold text-foreground">LinkedIn</h3>
                      <p className="text-muted-foreground">Smartnex Technologies</p>
                      <Link 
                        href="https://in.linkedin.com/company/smartnex-technologies"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-primary transition text-sm font-medium inline-block"
                      >
                        Connect with us →
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Response Times */}
              <div className="group p-8 rounded-xl bg-linear-to-br from-primary/10 to-accent/5 border border-primary/30 hover:border-primary/50 transition duration-300">
                <div className="flex items-start gap-4">
                  <Zap className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <div className="space-y-4">
                    <h3 className="font-semibold text-foreground text-lg">Response Times</h3>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-2 h-2 bg-linear-to-r from-primary to-accent rounded-full" />
                        Email: Within 24 hours
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-2 h-2 bg-linear-to-r from-primary to-accent rounded-full" />
                        Phone: Within 1 hour (business hours)
                      </li>
                      <li className="flex items-center gap-3 text-muted-foreground">
                        <span className="w-2 h-2 bg-linear-to-r from-primary to-accent rounded-full" />
                        LinkedIn: Within 2 hours
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="group">
              <div className="absolute -inset-1 bg-linear-to-r from-primary to-accent rounded-xl opacity-10 group-hover:opacity-20 blur-xl transition duration-300" />
              <div className="relative bg-card border border-primary/30 rounded-xl p-8">
                <h2 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h2>

                {submitStatus === 'success' && (
                  <div className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg text-green-300 text-sm animate-in">
                    ✓ Thank you! We'll get back to you within 24 hours.
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-300 text-sm">
                    ✗ Something went wrong. Please try again or email us directly.
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                      placeholder="Your name"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                      placeholder="you@example.com"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                      placeholder="+91 82608 05119"
                    />
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                      placeholder="Your company"
                    />
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-foreground mb-2">
                      Interested Service *
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition"
                    >
                      <option value="">Select a service</option>
                      <option value="healthcare">Healthcare Solutions</option>
                      <option value="software">Smart Software Solutions</option>
                      <option value="attendance">AI Attendance Management</option>
                      <option value="custom">Custom Solution</option>
                    </select>
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition resize-none"
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-linear-to-r from-primary to-accent text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 disabled:shadow-none"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-xs text-muted-foreground text-center">
                    We'll get back to you as soon as possible. Required fields are marked with *
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
