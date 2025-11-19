export function TechBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* SVG Vector Lines Background */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1200 800"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D9FF" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#0099FF" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="lineGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#6366F1" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#0099FF" stopOpacity="0.1" />
          </linearGradient>
        </defs>

        {/* Diagonal lines */}
        <line x1="0" y1="0" x2="1200" y2="800" stroke="url(#lineGradient1)" strokeWidth="2" />
        <line x1="1200" y1="0" x2="0" y2="800" stroke="url(#lineGradient2)" strokeWidth="2" />
        
        {/* Grid lines */}
        <line x1="200" y1="0" x2="200" y2="800" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.2" />
        <line x1="400" y1="0" x2="400" y2="800" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.2" />
        <line x1="600" y1="0" x2="600" y2="800" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.2" />
        <line x1="800" y1="0" x2="800" y2="800" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.2" />
        <line x1="1000" y1="0" x2="1000" y2="800" stroke="url(#lineGradient1)" strokeWidth="1" opacity="0.2" />
        
        <line x1="0" y1="100" x2="1200" y2="100" stroke="url(#lineGradient2)" strokeWidth="1" opacity="0.2" />
        <line x1="0" y1="200" x2="1200" y2="200" stroke="url(#lineGradient2)" strokeWidth="1" opacity="0.2" />
        <line x1="0" y1="400" x2="1200" y2="400" stroke="url(#lineGradient2)" strokeWidth="1" opacity="0.2" />
        <line x1="0" y1="600" x2="1200" y2="600" stroke="url(#lineGradient2)" strokeWidth="1" opacity="0.2" />

        {/* Circles and nodes */}
        <circle cx="150" cy="150" r="40" stroke="#00D9FF" strokeWidth="2" opacity="0.4" />
        <circle cx="150" cy="150" r="60" stroke="#0099FF" strokeWidth="1" opacity="0.2" />
        
        <circle cx="1050" cy="650" r="50" stroke="#6366F1" strokeWidth="2" opacity="0.3" />
        <circle cx="1050" cy="650" r="80" stroke="#0099FF" strokeWidth="1" opacity="0.1" />

        {/* Connection dots */}
        <circle cx="300" cy="250" r="6" fill="#00D9FF" opacity="0.5" />
        <circle cx="900" cy="400" r="6" fill="#6366F1" opacity="0.5" />
        <circle cx="600" cy="600" r="6" fill="#00D9FF" opacity="0.3" />
      </svg>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-background/20 to-background" />
    </div>
  )
}
