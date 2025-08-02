import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { QRCodeGenerator } from "./qr-code-generator";
import { MartinezPattern } from "./martinez-pattern";
import { AISearchBar } from "./ai-search-bar";
import resumePDF from "@assets/Julian_Martinez_Resume_Final_With_TopRight_QR_1754051682310.pdf";

export function HeroSection() {
  const handleDownloadResume = () => {
    // Create a link to download the resume PDF
    const link = document.createElement('a');
    link.href = resumePDF;
    link.download = 'Julian_Martinez_Resume.pdf';
    link.target = '_blank';
    
    // Attempt to download
    try {
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading resume:', error);
      // Fallback: open in new tab if download fails
      window.open(resumePDF, '_blank');
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative bg-gradient-to-br from-slate-50 to-white dark:from-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Full-width Martinez Pattern Background */}
      <div className="absolute inset-0 w-full h-full">
        <MartinezPattern opacity={0.015} />
      </div>
      {/* Full-width background overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-primary/5"></div>
      <div className="max-w-4xl mx-auto text-center animate-fadeInUp relative z-20 px-4 sm:px-6 lg:px-8">
        {/* AI Assistant Search Bar */}
        <AISearchBar />
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Julián Martínez
        </h1>
        
        <div className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-2 font-semibold">
          Mechanical Engineer | Robotics | AI | Builder
        </div>
        
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Innovative mechanical engineer focused on engineering, technology, and real solutions. 
          Bilingual professional thriving in multidisciplinary teams, bringing ideas to life through design, automation, and continuous improvement.
        </p>
        
        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
          <Button
            onClick={handleDownloadResume}
            className="group relative bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary text-white px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-2xl border-0 rounded-xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
            <FileText className="mr-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            Download Resume
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-primary/60 rounded-xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300 -z-10"></div>
          </Button>
          
          <Button
            onClick={scrollToProjects}
            className="group relative bg-white dark:bg-slate-800 border-2 border-primary text-primary hover:bg-primary hover:text-white dark:hover:bg-primary px-10 py-4 text-lg font-bold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl rounded-xl"
          >
            <svg className="mr-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            View Projects
          </Button>
          
          <Button
            onClick={scrollToContact}
            variant="ghost"
            className="group text-primary hover:text-primary/80 dark:text-primary dark:hover:text-primary/80 px-8 py-4 text-lg font-semibold transition-all duration-300 hover:bg-primary/5 rounded-xl"
          >
            <svg className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Contact
          </Button>
        </div>

        {/* Engineering Stats/Highlights */}
        <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mb-8">
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">GPA 3.2</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Academic Excellence</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">Top 30</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">VEX Robotics Global</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">Dec 2025</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Graduation</div>
          </div>
        </div>

        <QRCodeGenerator url={window.location.href} />
      </div>
    </section>
  );
}
