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
        {/* Enhanced Skills Showcase - Top 5 Skills */}
        <div className="mb-12 relative">
          <div className="flex flex-wrap justify-center items-center gap-6 mb-8">
            {/* SolidWorks & ANSYS */}
            <div className="group cursor-pointer relative">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg group-hover:shadow-xl">
                <svg className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L3 7V17L12 22L21 17V7L12 2M12 4.5L18.5 8.5L12 12.5L5.5 8.5L12 4.5M5 10.5L11 14.5V19.5L5 15.5V10.5M13 14.5L19 10.5V15.5L13 19.5V14.5Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center font-medium">Design & Simulation</p>
              
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-64">
                <div className="font-semibold mb-1">Design & Simulation - 85% Proficiency</div>
                <div className="text-xs text-slate-300 mb-2">SolidWorks, ANSYS (FEA, Thermal)</div>
                <div className="text-xs text-slate-400">Achieved 25% efficiency improvement in heat exchanger design through advanced modeling and thermal analysis.</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
            </div>

            {/* Programming */}
            <div className="group cursor-pointer relative">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg group-hover:shadow-xl">
                <svg className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8,3A2,2 0 0,0 6,5V9A2,2 0 0,1 4,11H3V13H4A2,2 0 0,1 6,15V19A2,2 0 0,0 8,21H10V19H8V14A2,2 0 0,0 6,12A2,2 0 0,0 8,10V5H10V3M16,3A2,2 0 0,1 18,5V9A2,2 0 0,0 20,11H21V13H20A2,2 0 0,0 18,15V19A2,2 0 0,1 16,21H14V19H16V14A2,2 0 0,1 18,12A2,2 0 0,1 16,10V5H14V3H16Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center font-medium">Programming</p>
              
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-64">
                <div className="font-semibold mb-1">Programming - 75% Proficiency</div>
                <div className="text-xs text-slate-300 mb-2">MATLAB, Python, Prompt Engineering (Claude, GPT)</div>
                <div className="text-xs text-slate-400">Developed automation tools for data processing and engineering analysis workflows.</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>

            {/* Prototyping */}
            <div className="group cursor-pointer relative">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg group-hover:shadow-xl">
                <svg className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M7,2V4H8V18A4,4 0 0,0 12,22A4,4 0 0,0 16,18V4H17V2H7M11,16C10.4,16 10,15.6 10,15C10,14.4 10.4,14 11,14C11.6,14 12,14.4 12,15C12,15.6 11.6,16 11,16M13,12C12.4,12 12,11.6 12,11C12,10.4 12.4,10 13,10C13.6,10 14,10.4 14,11C14,11.6 13.6,12 13,12M11,8C10.4,8 10,7.6 10,7C10,6.4 10.4,6 11,6C11.6,6 12,6.4 12,7C12,7.6 11.6,8 11,8Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center font-medium">Prototyping</p>
              
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-64">
                <div className="font-semibold mb-1">Prototyping - 80% Proficiency</div>
                <div className="text-xs text-slate-300 mb-2">3D Printing, DFM Principles, GD&T</div>
                <div className="text-xs text-slate-400">Built functional prototypes with design for manufacturing principles and geometric dimensioning standards.</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-orange-500 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>

            {/* Technical Tools */}
            <div className="group cursor-pointer relative">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg group-hover:shadow-xl">
                <svg className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center font-medium">Tech Tools</p>
              
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-64">
                <div className="font-semibold mb-1">Tech Tools - 70% Proficiency</div>
                <div className="text-xs text-slate-300 mb-2">Firebase, React Native, GitHub</div>
                <div className="text-xs text-slate-400">Built Spots App for social venue discovery with real-time database and version control workflows.</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>

            {/* Soft Skills */}
            <div className="group cursor-pointer relative">
              <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg group-hover:shadow-xl">
                <svg className="w-10 h-10 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A2,2 0 0,1 14,4C14,4.74 13.6,5.39 13,5.73V7H14A7,7 0 0,1 21,14H22A1,1 0 0,1 23,15V18A1,1 0 0,1 22,19H21V20A2,2 0 0,1 19,22H5A2,2 0 0,1 3,20V19H2A1,1 0 0,1 1,18V15A1,1 0 0,1 2,14H3A7,7 0 0,1 10,7H11V5.73C10.4,5.39 10,4.74 10,4A2,2 0 0,1 12,2M5,16V20H19V16H5M15,10V12H13V10H15M7,10V12H9V10H7Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center font-medium">Soft Skills</p>
              
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-64">
                <div className="font-semibold mb-1">Soft Skills - 90% Proficiency</div>
                <div className="text-xs text-slate-300 mb-2">Relentless Work Ethic, Fast Learner, Creative Problem Solving</div>
                <div className="text-xs text-slate-400">Won 1st place in UMD competition with innovative design approach and systematic problem analysis.</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
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
        <div className="grid grid-cols-2 gap-8 max-w-sm mx-auto mb-8">
          <div className="text-center group cursor-pointer">
            <div className="text-2xl font-bold text-primary group-hover:scale-110 transition-transform duration-300">4</div>
            <div className="text-sm text-slate-600 dark:text-slate-400">Projects</div>
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
