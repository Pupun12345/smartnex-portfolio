'use client'

import { Heart, Hospital, Users, Shield, Zap, Lock, Cog, Globe, BarChart3, Eye, Clock, TrendingUp, Palette, Headphones, Smartphone, MapPin, Camera, FileText, Type as type, type LucideIcon } from 'lucide-react'

// Map icon names to components
const iconMap: Record<string, LucideIcon> = {
  'Hospital': Hospital,
  'Heart': Heart,
  'Users': Users,
  'Shield': Shield,
  'Zap': Zap,
  'Lock': Lock,
  'Cog': Cog,
  'Globe': Globe,
  'BarChart3': BarChart3,
  'Eye': Eye,
  'Clock': Clock,
  'TrendingUp': TrendingUp,
  'Palette': Palette,
  'Headphones': Headphones,
  'Smartphone': Smartphone,
  'MapPin': MapPin,
  'Camera': Camera,
  'FileText': FileText,
}

interface Feature {
  icon: string // Changed from LucideIcon component to string identifier
  title: string
  description: string
}

interface FeatureSectionProps {
  title: string
  description?: string
  features: Feature[]
  layout?: 'grid' | 'stacked'
}

export function FeatureSection({ title, description, features, layout = 'grid' }: FeatureSectionProps) {
  return (
    <section className="relative py-32 px-4 bg-background overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-linear-to-br from-primary/10 to-transparent rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-linear-to-tl from-accent/10 to-transparent rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <h2 className="text-5xl md:text-6xl font-bold text-foreground leading-tight">
            {title}
          </h2>
          {description && (
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              {description}
            </p>
          )}
        </div>

        <div className={`${layout === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' : 'space-y-8'}`}>
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon]
            return (
              <div
                key={index}
                className="group relative p-8 rounded-xl border border-border bg-linear-to-br from-card/50 to-transparent hover:border-primary hover:bg-linear-to-br hover:from-primary/5 hover:to-transparent transition-all duration-300 overflow-hidden"
              >
                {/* Animated background */}
                <div className="absolute -inset-px bg-linear-to-r from-primary/0 via-primary/0 to-primary/0 group-hover:from-primary/20 group-hover:via-transparent group-hover:to-primary/20 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur -z-10" />
                
                <div className="relative z-10 space-y-4">
                  <div className="w-14 h-14 rounded-lg bg-linear-to-br from-primary/20 to-accent/10 flex items-center justify-center group-hover:from-primary/30 group-hover:to-accent/20 transition duration-300">
                    <Icon className="w-7 h-7 text-primary group-hover:text-accent transition duration-300" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition duration-300">
                    {feature.title}
                  </h3>
                  
                  <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition duration-300">
                    {feature.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
