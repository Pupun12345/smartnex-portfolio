'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section className="min-h-screen flex items-center justify-center bg-background px-4 py-20 overflow-hidden relative">
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-40"
          style={{
            left: '-10%',
            top: '-10%',
            animation: 'float 15s ease-in-out infinite',
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl opacity-30"
          style={{
            right: '-5%',
            bottom: '-5%',
            animation: 'float 20s ease-in-out infinite reverse',
          }}
        />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(0deg, transparent 24%, rgba(79, 172, 254, .3) 25%, rgba(79, 172, 254, .3) 26%, transparent 27%, transparent 74%, rgba(79, 172, 254, .3) 75%, rgba(79, 172, 254, .3) 76%, transparent 77%, transparent),
              linear-gradient(90deg, transparent 24%, rgba(79, 172, 254, .3) 25%, rgba(79, 172, 254, .3) 26%, transparent 27%, transparent 74%, rgba(79, 172, 254, .3) 75%, rgba(79, 172, 254, .3) 76%, transparent 77%, transparent)
            `,
            backgroundSize: '50px 50px',
            animation: 'gridMove 20s linear infinite'
          }}
        />

        {/* Animated lines */}
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none">
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(79, 172, 254)" />
              <stop offset="100%" stopColor="rgb(168, 85, 247)" />
            </linearGradient>
          </defs>
          <polyline 
            points="0,100 100,80 200,100 300,60 400,90 500,50" 
            fill="none" 
            stroke="url(#lineGradient)" 
            strokeWidth="2"
            style={{ animation: 'lineDraw 8s ease-in-out infinite' }}
          />
        </svg>
      </div>

      {/* Content */}
      <div className="max-w-5xl mx-auto text-center space-y-8 relative z-10">
        {/* Badge */}
        <div className="inline-block animate-fade-in-up">
          <span className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-semibold text-primary backdrop-blur-sm">
            Transforming Enterprises with AI & Innovation
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-balance leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="text-foreground">Enterprise Tech</span>
          <br />
          <span className="relative inline-block">
            <span className="bg-linear-to-r from-primary via-purple-500 to-accent bg-clip-text text-transparent">
              Solutions
            </span>
            <span className="absolute -bottom-2 left-0 right-0 h-1 bg-linear-to-r from-primary to-accent rounded-full opacity-50"></span>
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Healthcare integration platforms, intelligent software solutions, and AI-powered attendance systems. Smartnex Technologies empowers enterprises with cutting-edge technology designed for scale.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
          <Link
            href="/contact"
            className="group px-8 py-4 bg-linear-to-r from-primary to-purple-600 text-primary-foreground rounded-lg font-semibold hover:shadow-lg hover:shadow-primary/50 transition duration-300 transform hover:scale-105 relative overflow-hidden"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started
              <svg className="w-5 h-5 group-hover:translate-x-1 transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </Link>
          <Link
            href="/#services"
            className="px-8 py-4 border border-primary/50 text-foreground rounded-lg font-semibold hover:bg-primary/10 hover:border-primary transition duration-300 backdrop-blur-sm"
          >
            Explore Services
          </Link>
        </div>

        {/* Tech stats */}
        <div className="grid grid-cols-3 gap-8 pt-12 border-t border-border/20 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <div>
            <p className="text-3xl font-bold text-primary">3</p>
            <p className="text-sm text-muted-foreground mt-2">Business Verticals</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">50+</p>
            <p className="text-sm text-muted-foreground mt-2">Enterprise Clients</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-primary">7</p>
            <p className="text-sm text-muted-foreground mt-2">Days Quick Deploy</p>
          </div>
        </div>
      </div>
    </section>
  )
}
