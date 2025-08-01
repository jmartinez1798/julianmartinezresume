import { Button } from "@/components/ui/button";
import { Download, FileText } from "lucide-react";
import { QRCodeGenerator } from "./qr-code-generator";
import { MartinezPattern } from "./martinez-pattern";
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
        {/* Skills Showcase */}
        <div className="mb-12 relative">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            {/* Design & Simulation */}
            <div className="cursor-pointer">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L3 7V17L12 22L21 17V7L12 2M12 4.5L18.5 8.5L12 12.5L5.5 8.5L12 4.5M5 10.5L11 14.5V19.5L5 15.5V10.5M13 14.5L19 10.5V15.5L13 19.5V14.5Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center font-medium">Simulation</p>
            </div>

            {/* Programming */}
            <div className="cursor-pointer">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center font-medium">Programming</p>
            </div>

            {/* Prototyping */}
            <div className="cursor-pointer">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7,2V4H8V18A4,4 0 0,0 12,22A4,4 0 0,0 16,18V4H17V2H7M11,16C10.4,16 10,15.6 10,15C10,14.4 10.4,14 11,14C11.6,14 12,14.4 12,15C12,15.6 11.6,16 11,16M13,12C12.4,12 12,11.6 12,11C12,10.4 12.4,10 13,10C13.6,10 14,10.4 14,11C14,11.6 13.6,12 13,12M11,8C10.4,8 10,7.6 10,7C10,6.4 10.4,6 11,6C11.6,6 12,6.4 12,7C12,7.6 11.6,8 11,8Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center font-medium">Prototyping</p>
            </div>

            {/* Tech Tools */}
            <div className="cursor-pointer">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center font-medium">Tech Tools</p>
            </div>

            {/* Soft Skills */}
            <div className="cursor-pointer">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center shadow-lg">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M5,16V20H19V16H5M15,10V12H13V10H15M7,10V12H9V10H7Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center font-medium">Soft Skills</p>
            </div>
          </div>
        </div>
        
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
