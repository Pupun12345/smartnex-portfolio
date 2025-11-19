'use client'

import { useEffect, useState } from 'react'

const clients = [
  {
    name: 'Tata Steel Vendors',
    description: 'Trusted by suppliers in India\'s largest steel manufacturing ecosystem',
    logo: '🏭'
  },
  {
    name: 'Jindal Vendors',
    description: 'Serving the vendor network of leading steel and infrastructure company',
    logo: '⚙️'
  },
  {
    name: 'Ray Engineering',
    description: 'Innovative engineering solutions provider',
    logo: '🔧'
  }
]

export default function Clients() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative py-24 px-4 bg-background overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-40 left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className={`text-center space-y-4 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block">
            <span className="px-4 py-2 rounded-full bg-linear-to-r from-cyan-500/20 to-primary/20 text-primary text-sm font-semibold border border-primary/30">
              TRUSTED BY INDUSTRY LEADERS
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold bg-linear-to-r from-foreground via-primary to-cyan-400 bg-clip-text text-transparent">
            Our Clients
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Empowering India's leading enterprises with innovative tech solutions
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {clients.map((client, index) => (
            <div
              key={index}
              className={`transition-all duration-1000 delay-${index * 200} ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
            >
              <div className="group relative">
                <div className="absolute -inset-1 bg-linear-to-r from-primary/50 to-cyan-500/50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-500" />
                <div className="relative bg-linear-to-br from-background/50 to-background/30 backdrop-blur-xl p-8 rounded-2xl border border-primary/20 group-hover:border-primary/50 transition duration-500 h-full flex flex-col justify-center">
                  <div className="text-5xl mb-4 text-center">{client.logo}</div>
                  <h3 className="text-2xl font-bold text-foreground text-center mb-2">
                    {client.name}
                  </h3>
                  <p className="text-muted-foreground text-center text-sm">
                    {client.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badge */}
        <div className="text-center">
          <p className="text-muted-foreground text-sm">
            Trusted by 50+ companies across India for enterprise solutions
          </p>
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
