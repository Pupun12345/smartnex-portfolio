import { Type as type, type LucideIcon } from 'lucide-react'
import Link from 'next/link'

interface ServiceCardProps {
  icon: LucideIcon
  title: string
  description: string
  features: string[]
  status: string
  color: string
  link?: string
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  features,
  status,
  color,
  link
}: ServiceCardProps) {
  return (
    <div className="group relative bg-card border border-border rounded-lg hover:border-primary/50 transition hover:shadow-lg h-full">
      {/* Background gradient */}
      <div className={`absolute inset-0 bg-linear-to-br ${color} opacity-0 group-hover:opacity-100 transition rounded-lg -z-10`} />
      
      {/* Content - Use flexbox with full height to align button at bottom */}
      <div className="relative z-10 flex flex-col h-full p-6">
        {/* Icon & Status */}
        <div className="flex justify-between items-start mb-4">
          <div className="p-3 bg-primary/10 rounded-lg">
            <Icon className="w-6 h-6 text-primary" />
          </div>
          {status && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-300">
              {status}
            </span>
          )}
        </div>

        {/* Title & Description */}
        <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed">{description}</p>

        {/* Features */}
        <ul className="space-y-2 mb-6 grow">
          {features.map((feature, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
              <span className="w-1.5 h-1.5 bg-primary rounded-full" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Learn More button - Positioned at bottom using flex-grow on features list */}
        {link && (
          <Link href={link} className="w-full">
            <button className="w-full py-2 px-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition">
              Learn More
            </button>
          </Link>
        )}
      </div>
    </div>
  )
}
