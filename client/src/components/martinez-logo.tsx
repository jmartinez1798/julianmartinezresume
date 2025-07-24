interface MartinezLogoProps {
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'light' | 'dark' | 'primary';
  className?: string;
}

export function MartinezLogo({ size = 'md', variant = 'primary', className = '' }: MartinezLogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
    xl: 'w-24 h-24'
  };

  const getStrokeColor = () => {
    switch (variant) {
      case 'light':
        return '#ffffff';
      case 'dark':
        return '#000000';
      default:
        return '#002244'; // primary color
    }
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center justify-center`}>
      <svg 
        viewBox="0 0 100 100" 
        className="w-full h-full"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* M silhouette with three diagonal stripes forming the letter M */}
        <g>
          {/* Left diagonal stripe */}
          <path
            d="M10 80 L20 20 L30 25 L25 80 Z"
            fill={getStrokeColor()}
            className="transform origin-center"
          />
          {/* Center diagonal stripe */}
          <path
            d="M30 80 L45 20 L55 20 L50 80 Z"
            fill={getStrokeColor()}
            className="transform origin-center"
          />
          {/* Right diagonal stripe */}
          <path
            d="M70 80 L75 25 L85 20 L90 80 Z"
            fill={getStrokeColor()}
            className="transform origin-center"
          />
        </g>
      </svg>
    </div>
  );
}

export function MartinezLogoText({ size = 'md', variant = 'primary', showText = true }: MartinezLogoProps & { showText?: boolean }) {
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl',
    xl: 'text-3xl'
  };

  const getTextColor = () => {
    switch (variant) {
      case 'light':
        return 'text-white';
      case 'dark':
        return 'text-black';
      default:
        return 'text-slate-800 dark:text-white';
    }
  };

  return (
    <div className="flex items-center gap-3">
      <MartinezLogo size={size} variant={variant} />
      {showText && (
        <span className={`font-bold ${textSizeClasses[size]} ${getTextColor()} tracking-wide`}>
          Martínez
        </span>
      )}
    </div>
  );
}