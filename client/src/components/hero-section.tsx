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
      alert('Resume PDF will be available soon. Please contact directly to request a copy.');
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
        {/* Interactive Skills Showcase */}
        <div className="mb-12 relative">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            {/* SolidWorks CAD */}
            <div className="group cursor-pointer relative">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg group-hover:shadow-xl">
                <svg className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L3 7V17L12 22L21 17V7L12 2M12 4.5L18.5 8.5L12 12.5L5.5 8.5L12 4.5M5 10.5L11 14.5V19.5L5 15.5V10.5M13 14.5L19 10.5V15.5L13 19.5V14.5Z"/>
                </svg>
                <span className="absolute -top-2 -right-2 text-xs">🔧</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center font-medium">SolidWorks</p>
              
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-64">
                <div className="font-semibold mb-1">SolidWorks CAD - 90% Proficiency</div>
                <div className="text-xs text-slate-300">3D modeling, assemblies, technical drawings. Created water-oil separator and heat exchanger designs.</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>

            {/* Arduino/PLC */}
            <div className="group cursor-pointer relative">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg group-hover:shadow-xl">
                <svg className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A3,3 0 0,1 15,5V11A3,3 0 0,1 12,14A3,3 0 0,1 9,11V5A3,3 0 0,1 12,2M19,11C19,14.53 16.39,17.44 13,17.93V21H11V17.93C7.61,17.44 5,14.53 5,11H7A5,5 0 0,0 12,16A5,5 0 0,0 17,11H19Z"/>
                </svg>
                <span className="absolute -top-2 -right-2 text-xs">⚡</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center font-medium">Arduino/PLC</p>
              
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-64">
                <div className="font-semibold mb-1">Arduino/PLC - 70% Proficiency</div>
                <div className="text-xs text-slate-300">Automation systems, sensor integration. Built automated assembly line project.</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>

            {/* ANSYS Analysis */}
            <div className="group cursor-pointer relative">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg group-hover:shadow-xl">
                <svg className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,18V10H16V8A4,4 0 0,0 8,8V10H4V18A2,2 0 0,0 6,20H18A2,2 0 0,0 20,18M12,13A2,2 0 0,1 14,15A2,2 0 0,1 12,17A2,2 0 0,1 10,15A2,2 0 0,1 12,13Z"/>
                </svg>
                <span className="absolute -top-2 -right-2 text-xs">📊</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center font-medium">ANSYS</p>
              
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-64">
                <div className="font-semibold mb-1">ANSYS Analysis - 80% Proficiency</div>
                <div className="text-xs text-slate-300">FEA, thermal analysis, CFD. Achieved 25% efficiency improvement in heat exchanger design.</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>

            {/* React/Firebase */}
            <div className="group cursor-pointer relative">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg group-hover:shadow-xl">
                <svg className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,10.11C13.03,10.11 13.87,10.95 13.87,12C13.87,13 13.03,13.85 12,13.85C10.97,13.85 10.13,13 10.13,12C10.13,10.95 10.97,10.11 12,10.11M7.37,20C8,20.38 9.38,19.8 10.97,18.74C10.35,18.11 9.75,17.42 9.19,16.69C8.1,16.54 7,16.3 6,16C6.44,18.17 6.87,19.62 7.37,20M8.81,14.15C9.05,14.67 9.33,15.17 9.63,15.66C10.5,15.56 11.4,15.5 12.31,15.5C13.55,15.5 14.78,15.58 15.97,15.74C16.03,15.23 16.1,14.72 16.19,14.21C15.2,14.09 14.1,14 13,14C11.16,14 9.67,14.06 8.81,14.15M16.7,20C17.2,19.62 17.63,18.17 18.07,16C17.06,16.3 15.97,16.54 14.88,16.69C14.32,17.42 13.72,18.11 13.1,18.74C14.69,19.8 16.07,20.38 16.7,20M20.55,10.55C20.41,10.07 19.61,8.91 18.61,7.73C18.36,8.27 18.1,8.8 17.81,9.32C18.5,9.45 19.17,9.6 19.8,9.78C20.07,10.03 20.31,10.29 20.55,10.55M9.63,9.32C9.34,8.8 9.08,8.27 8.83,7.73C7.83,8.91 7.03,10.07 6.89,10.55C7.13,10.29 7.37,10.03 7.64,9.78C8.27,9.6 8.94,9.45 9.63,9.32M15.97,9.74C14.78,9.58 13.55,9.5 12.31,9.5C11.4,9.5 10.5,9.56 9.63,9.66C9.33,10.15 9.05,10.65 8.81,11.17C9.67,11.26 11.16,11.32 13,11.32C14.1,11.32 15.2,11.23 16.19,11.11C16.1,10.6 16.03,10.09 15.97,9.74M12,6.78C11.81,7.04 11.62,7.31 11.44,7.58C11.62,7.57 11.81,7.57 12,7.57C12.19,7.57 12.38,7.57 12.56,7.58C12.38,7.31 12.19,7.04 12,6.78M12,17.22C12.19,16.96 12.38,16.69 12.56,16.42C12.38,16.43 12.19,16.43 12,16.43C11.81,16.43 11.62,16.43 11.44,16.42C11.62,16.69 11.81,16.96 12,17.22M3.45,10.55C3.69,10.29 3.93,10.03 4.2,9.78C4.83,9.6 5.5,9.45 6.19,9.32C5.9,8.8 5.64,8.27 5.39,7.73C4.39,8.91 3.59,10.07 3.45,10.55M5.39,16.27C5.64,15.73 5.9,15.2 6.19,14.68C5.5,14.55 4.83,14.4 4.2,14.22C3.93,14.47 3.69,14.73 3.45,14.99C3.59,15.47 4.39,16.63 5.39,16.27Z"/>
                </svg>
                <span className="absolute -top-2 -right-2 text-xs">💻</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center font-medium">React/Firebase</p>
              
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-64">
                <div className="font-semibold mb-1">React/Firebase - 60% Proficiency</div>
                <div className="text-xs text-slate-300">Web/mobile development. Built Spots App for social venue discovery with real-time features.</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>

            {/* Problem Solving */}
            <div className="group cursor-pointer relative">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg group-hover:shadow-xl">
                <svg className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M5,16V20H19V16H5M15,10V12H13V10H15M7,10V12H9V10H7Z"/>
                </svg>
                <span className="absolute -top-2 -right-2 text-xs">🧠</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center font-medium">Problem Solving</p>
              
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-64">
                <div className="font-semibold mb-1">Problem Solving - 85% Proficiency</div>
                <div className="text-xs text-slate-300">Creative engineering solutions. Won 1st place in UMD competition with innovative design approach.</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Julián Martínez
        </h1>
        
        <div className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-2 font-semibold">
          Mechanical Engineering Student focused on automation, technology, and applied innovation
        </div>
        
        <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
          Currently developing skills in design, software, and real-world problem solving. 
          Seeking opportunities to learn, add value, and grow professionally in engineering and technology.
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
        <div className="grid grid-cols-3 gap-6 max-w-md mx-auto mb-8">
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">4</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Projects</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">3+</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Years Studying</div>
          </div>
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">∞</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Eagerness to Learn</div>
          </div>
        </div>

        <QRCodeGenerator url={window.location.href} />
      </div>
    </section>
  );
}
