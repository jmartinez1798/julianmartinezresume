interface MartinezPatternProps {
  className?: string;
  opacity?: number;
}

export function MartinezPattern({ className = '', opacity = 0.05 }: MartinezPatternProps) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg 
        className="absolute inset-0 w-full h-full" 
        viewBox="0 0 400 400" 
        xmlns="http://www.w3.org/2000/svg"
        style={{ opacity }}
      >
        <defs>
          <pattern id="martinez-stripes" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
            {/* Repeating M stripes pattern */}
            <g transform="scale(0.4)">
              <path d="M15 75 L25 20 L35 25 L25 75 Z" fill="currentColor" />
              <path d="M35 75 L50 15 L65 15 L50 75 Z" fill="currentColor" />
              <path d="M65 75 L75 20 L85 25 L75 75 Z" fill="currentColor" />
            </g>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#martinez-stripes)" />
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
        <path d="M15 75 L25 20 L35 25 L25 75 Z" fill="currentColor" />
        <path d="M35 75 L50 15 L65 15 L50 75 Z" fill="currentColor" />
        <path d="M65 75 L75 20 L85 25 L75 75 Z" fill="currentColor" />
      </svg>
    </div>
  );
}