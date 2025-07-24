import { MartinezLogoText } from "./martinez-logo";

export function Footer() {
  return (
    <footer className="bg-primary text-white py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <MartinezLogoText size="md" variant="light" />
            <p className="text-sm text-slate-300 leading-relaxed">
              Mechanical Engineering student committed to innovation, 
              continuous learning, and solving real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a></li>
              <li><a href="#skills" className="text-slate-300 hover:text-white transition-colors">Skills</a></li>
              <li><a href="#projects" className="text-slate-300 hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contact</h3>
            <div className="space-y-2 text-sm text-slate-300">
              <p>julian1798@yahoo.com</p>
              <p>787-397-4295</p>
              <p>Toa Alta, Puerto Rico</p>
              <p>Inter Bayamón</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-700 mt-8 pt-8 text-center">
          <p className="text-sm text-slate-400">
            © 2025 Julián Martínez. Designed with purpose and authenticity.
          </p>
        </div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-stripes" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <g transform="scale(0.3)" fill="white">
                <path d="M20 25 L35 70 L45 65 L30 20 Z" transform="rotate(-15 37.5 45)" />
                <path d="M40 25 L55 70 L65 65 L50 20 Z" transform="rotate(-15 57.5 45)" />
                <path d="M60 25 L75 70 L85 65 L70 20 Z" transform="rotate(-15 77.5 45)" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-stripes)" />
        </svg>
      </div>
    </footer>
  );
}