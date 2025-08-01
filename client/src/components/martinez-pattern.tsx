interface MartinezPatternProps {
  className?: string;
  opacity?: number;
}

export function MartinezPattern({ className = '', opacity = 0.05 }: MartinezPatternProps) {
  return (
    <div className={`absolute inset-0 w-full h-full overflow-hidden pointer-events-none ${className}`}>
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 80 80" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <pattern id="martinez-stripes" x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
            {/* Ultra-small, subtle watermark pattern */}
            <g transform="scale(0.08)">
              <path d="M20 25 L35 70 L45 65 L30 20 Z" fill="currentColor" transform="rotate(-15 37.5 45)" />
              <path d="M40 25 L55 70 L65 65 L50 20 Z" fill="currentColor" transform="rotate(-15 57.5 45)" />
              <path d="M60 25 L75 70 L85 65 L70 20 Z" fill="currentColor" transform="rotate(-15 77.5 45)" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#martinez-stripes)" className="text-primary" />
      </svg>
    </div>
  );
}

export function MartinezAccent({ position = 'top-right', size = 'md' }: { position?: 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left'; size?: 'sm' | 'md' | 'lg' }) {
  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  const positionClasses = {
    'top-right': 'top-4 right-4',
    'top-left': 'top-4 left-4',
    'bottom-right': 'bottom-4 right-4',
    'bottom-left': 'bottom-4 left-4'
  };

  return (
    <div className={`absolute ${positionClasses[position]} ${sizeClasses[size]} opacity-10 pointer-events-none`}>
      <svg viewBox="0 0 100 100" className="w-full h-full text-primary">
        <path d="M20 25 L35 70 L45 65 L30 20 Z" fill="currentColor" transform="rotate(-15 37.5 45)" />
        <path d="M40 25 L55 70 L65 65 L50 20 Z" fill="currentColor" transform="rotate(-15 57.5 45)" />
        <path d="M60 25 L75 70 L85 65 L70 20 Z" fill="currentColor" transform="rotate(-15 77.5 45)" />
      </svg>
    </div>
  );
}