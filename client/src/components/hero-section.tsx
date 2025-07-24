import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { QRCodeGenerator } from "./qr-code-generator";
import { MartinezPattern } from "./martinez-pattern";

export function HeroSection() {
  const handleDownloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = '/JulianMartinez_Resume2025.pdf'; // This should be placed in the public folder
    link.download = 'JulianMartinez_Resume2025.pdf';
    link.target = '_blank';
    
    // Attempt to download, fallback to alert if file not found
    try {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      alert('El archivo PDF del currículum estará disponible próximamente. Por favor contacta directamente para solicitar una copia.');
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative">
      <MartinezPattern opacity={0.03} />
      <div className="max-w-4xl mx-auto text-center animate-fadeInUp relative z-10">
        {/* Engineering Visual Elements */}
        <div className="mb-8 relative">
          <div className="flex justify-center items-center space-x-8 mb-6">
            {/* Technical Icons representing skills */}
            <div className="group cursor-pointer">
              <div className="w-16 h-16 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L3 7V17L12 22L21 17V7L12 2M12 4.5L18.5 8.5L12 12.5L5.5 8.5L12 4.5M5 10.5L11 14.5V19.5L5 15.5V10.5M13 14.5L19 10.5V15.5L13 19.5V14.5Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center">CAD/3D</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="w-16 h-16 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center">Automatización</p>
            </div>
            
            <div className="group cursor-pointer">
              <div className="w-16 h-16 rounded-lg bg-primary/10 dark:bg-primary/20 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20">
                <svg className="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,18V10H16V8A4,4 0 0,0 8,8V10H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18M12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17A2,2 0 0,1 10,15A2,2 0 0,1 12,13Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center">Análisis</p>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Julián Martínez
        </h1>
        
        <div className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-2 font-semibold">
          Estudiante de Ingeniería Mecánica con interés en automatización, tecnología e innovación aplicada
        </div>
        
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Actualmente desarrollando habilidades en diseño, software y resolución de problemas reales. 
          Interesado en oportunidades que me permitan aprender, aportar valor y crecer profesionalmente.
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button
            onClick={handleDownloadResume}
            className="group relative bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-0 rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <FileText className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            Descargar CV
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
          </Button>
          
          <Button
            onClick={scrollToProjects}
            className="group relative bg-white dark:bg-slate-800 border-2 border-primary text-primary hover:bg-primary hover:text-white dark:hover:bg-primary px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl rounded-xl"
          >
            <svg className="mr-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            Ver Proyectos
          </Button>
          
          <Button
            onClick={scrollToContact}
            variant="ghost"
            className="group text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-primary/5 rounded-xl"
          >
            <svg className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contactar
          </Button>
        </div>

        {/* Engineering Stats/Highlights */}
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-8">
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">4</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Proyectos</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">3+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Años estudiando</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">∞</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Ganas de aprender</div>
          </div>
        </div>

        <QRCodeGenerator url={window.location.href} />
      </div>
    </section>
  );
}
