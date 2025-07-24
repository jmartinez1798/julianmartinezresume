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
              Estudiante de Ingeniería Mecánica comprometido con la innovación, 
              el aprendizaje continuo y la resolución de problemas reales.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Enlaces Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="text-slate-300 hover:text-white transition-colors">Sobre Mí</a></li>
              <li><a href="#skills" className="text-slate-300 hover:text-white transition-colors">Habilidades</a></li>
              <li><a href="#projects" className="text-slate-300 hover:text-white transition-colors">Proyectos</a></li>
              <li><a href="#contact" className="text-slate-300 hover:text-white transition-colors">Contacto</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="font-bold text-lg">Contacto</h3>
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
            © 2025 Julián Martínez. Diseñado con propósito y autenticidad.
          </p>
        </div>
      </div>

      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="footer-stripes" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <g transform="scale(0.3)" fill="white">
                <rect x="15" y="20" width="8" height="60" />
                <path d="M23 20 L50 55 L54 50 L27 20 Z" />
                <path d="M50 55 L77 20 L81 20 L54 50 Z" />
                <rect x="77" y="20" width="8" height="60" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-stripes)" />
        </svg>
      </div>
    </footer>
  );
}