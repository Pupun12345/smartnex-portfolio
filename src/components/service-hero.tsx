'use client'

import { TechBackground } from './tech-background'

interface ServiceHeroProps {
  title: string
  subtitle: string
  description: string
  color: 'red' | 'blue' | 'purple'
}

const colorConfigs = {
  red: {
    gradient: 'from-red-500/20 to-red-500/0',
    accent: 'text-red-500',
    border: 'border-red-500/30 hover:border-red-500/50'
  },
  blue: {
    gradient: 'from-blue-500/20 to-blue-500/0',
    accent: 'text-blue-500',
    border: 'border-blue-500/30 hover:border-blue-500/50'
  },
  purple: {
    gradient: 'from-purple-500/20 to-purple-500/0',
    accent: 'text-purple-500',
    border: 'border-purple-500/30 hover:border-purple-500/50'
  }
}

export function ServiceHero({ title, subtitle, description, color }: ServiceHeroProps) {
  const config = colorConfigs[color]

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-background pt-20">
      <TechBackground />
      
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden -z-10">
        <div className={`absolute -top-40 -right-40 w-80 h-80 bg-linear-to-br ${config.gradient} rounded-full blur-3xl animate-pulse`} />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-linear-to-tr from-primary/20 to-transparent rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-6">
        <div className={`inline-flex items-center gap-3 px-4 py-2 bg-linear-to-r ${config.gradient} rounded-full border ${config.border} transition duration-300`}>
          <div className={`w-2 h-2 bg-linear-to-r from-primary to-accent rounded-full animate-pulse`} />
          <span className="text-sm font-semibold text-foreground">{subtitle}</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
          <span className={`bg-linear-to-r from-primary via-${color}-500 to-accent bg-clip-text text-transparent`}>
            {title}
          </span>
        </h1>
        
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>
      </div>
    </section>
  )
}
