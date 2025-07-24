interface MartinezResumeLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
  variant?: 'light' | 'dark';
}

export function MartinezResumeLogo({ size = 'md', showText = true, variant = 'dark' }: MartinezResumeLogoProps) {
  const logoSizes = {
    sm: { width: '40px', height: '40px', fontSize: '16px' },
    md: { width: '60px', height: '60px', fontSize: '20px' },
    lg: { width: '80px', height: '80px', fontSize: '24px' }
  };

  const colors = {
    light: { logo: '#ffffff', text: '#ffffff', bg: '#002244' },
    dark: { logo: '#002244', text: '#002244', bg: 'transparent' }
  };

  const currentSize = logoSizes[size];
  const currentColors = colors[variant];

  return (
    <div className={`flex items-center gap-3 ${variant === 'light' ? 'bg-primary px-4 py-2 rounded' : ''}`}>
      {/* Martinez Logo */}
      <div style={{ width: currentSize.width, height: currentSize.height }}>
        <svg 
          viewBox="0 0 100 100" 
          width="100%" 
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Martinez authentic logo for resume */}
          <g>
            {/* Left diagonal stripe */}
            <path
              d="M20 20 L35 70 L45 65 L30 15 Z"
              fill={currentColors.logo}
              transform="rotate(-15 37.5 42.5)"
            />
            
            {/* Center diagonal stripe */}
            <path
              d="M40 20 L55 70 L65 65 L50 15 Z"
              fill={currentColors.logo}
              transform="rotate(-15 57.5 42.5)"
            />
            
            {/* Right diagonal stripe */}
            <path
              d="M60 20 L75 70 L85 65 L70 15 Z"
              fill={currentColors.logo}
              transform="rotate(-15 77.5 42.5)"
            />
          </g>
        </svg>
      </div>

      {/* Text */}
      {showText && (
        <div className="flex flex-col">
          <span 
            style={{ 
              fontSize: currentSize.fontSize, 
              color: currentColors.text,
              fontFamily: 'Inter, sans-serif',
              fontWeight: 'bold',
              letterSpacing: '0.5px'
            }}
          >
            Martínez
          </span>
          {size === 'lg' && (
            <span 
              style={{ 
                fontSize: `${parseInt(currentSize.fontSize) * 0.6}px`, 
                color: currentColors.text,
                fontFamily: 'Inter, sans-serif',
                fontWeight: '300',
                letterSpacing: '1px'
              }}
            >
              Engineering
            </span>
          )}
        </div>
      )}
    </div>
  );
}

// Export as SVG string for use in documents/PDFs
export function getMartinezLogoSVG(color: string = '#002244'): string {
  return `
    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <g>
        <path d="M20 20 L35 70 L45 65 L30 15 Z" fill="${color}" transform="rotate(-15 37.5 42.5)"/>
        <path d="M40 20 L55 70 L65 65 L50 15 Z" fill="${color}" transform="rotate(-15 57.5 42.5)"/>
        <path d="M60 20 L75 70 L85 65 L70 15 Z" fill="${color}" transform="rotate(-15 77.5 42.5)"/>
      </g>
    </svg>
  `;
}