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
          {/* Professional M silhouette for resume */}
          <g>
            {/* Left stroke of M */}
            <path
              d="M10 85 L18 15 L28 20 L22 85 Z"
              fill={currentColors.logo}
            />
            {/* Center stroke of M */}
            <path
              d="M28 85 L42 15 L58 15 L52 85 Z"
              fill={currentColors.logo}
            />
            {/* Right stroke of M */}
            <path
              d="M72 85 L78 20 L88 15 L90 85 Z"
              fill={currentColors.logo}
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
        <path d="M10 85 L18 15 L28 20 L22 85 Z" fill="${color}"/>
        <path d="M28 85 L42 15 L58 15 L52 85 Z" fill="${color}"/>
        <path d="M72 85 L78 20 L88 15 L90 85 Z" fill="${color}"/>
      </g>
    </svg>
  `;
}