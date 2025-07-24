import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { QRCodeGenerator } from "./qr-code-generator";

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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center animate-fadeInUp">
        <div className="mb-8">
          <div className="w-32 h-32 rounded-full mx-auto shadow-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center border-4 border-white dark:border-slate-700 transform hover:scale-110 transition-all duration-300 cursor-pointer group">
            <div className="text-4xl font-bold text-white group-hover:rotate-12 transition-transform duration-300">JM</div>
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
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={handleDownloadResume}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <FileText className="mr-2 h-5 w-5" />
            Descargar CV
          </Button>
          
          <Button
            variant="outline"
            onClick={scrollToProjects}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
          >
            Ver Proyectos
          </Button>
        </div>

        <QRCodeGenerator url={window.location.href} />
      </div>
    </section>
  );
}
