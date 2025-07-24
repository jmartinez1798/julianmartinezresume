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
          <div className="flex flex-wrap justify-center items-center gap-4 mb-8">
            {/* Process Improvement */}
            <div className="group cursor-pointer relative">
              <div className="w-18 h-18 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg group-hover:shadow-xl">
                <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M17,13H13V17H11V13H7V11H11V7H13V11H17V13Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 text-center font-medium">Process Improvement</p>
              
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-64">
                <div className="font-semibold mb-1">Process Improvement - 80% Proficiency</div>
                <div className="text-xs text-slate-300 mb-2">Agile, Scrum, Lean methodologies</div>
                <div className="text-xs text-slate-400">Applied continuous improvement principles achieving 15% efficiency gains in academic projects.</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-blue-500 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>

            {/* Python Programming */}
            <div className="group cursor-pointer relative">
              <div className="w-18 h-18 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg group-hover:shadow-xl">
                <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.14,7.5A2.86,2.86 0 0,1 22,10.36V14.14A2.86,2.86 0 0,1 19.14,17H12C12,17.39 12.32,17.96 12.71,17.96H17V19.64A2.86,2.86 0 0,1 14.14,22.5H9.86A2.86,2.86 0 0,1 7,19.64V15.86A2.86,2.86 0 0,1 9.86,13H19.14A2.86,2.86 0 0,1 22,10.14V6.36A2.86,2.86 0 0,1 19.14,3.5H14.86A2.86,2.86 0 0,1 12,6.36V10.14A2.86,2.86 0 0,1 9.14,13H5V11.32C5,10.93 4.68,10.36 4.29,10.36H2.86A2.86,2.86 0 0,1 0,7.5V2.86A2.86,2.86 0 0,1 2.86,0H7.14A2.86,2.86 0 0,1 10,2.86V6.64A2.86,2.86 0 0,1 7.14,9.5H2V11.18C2,11.57 2.32,12.14 2.71,12.14H7.14A2.86,2.86 0 0,1 10,15V19.14A2.86,2.86 0 0,1 7.14,22H2.86A2.86,2.86 0 0,1 0,19.14V14.36A2.86,2.86 0 0,1 2.86,11.5H7.14C7.53,11.5 8.1,11.18 8.1,10.79V6.36A2.86,2.86 0 0,1 10.96,3.5H15.54A2.86,2.86 0 0,1 18.4,6.36V10.79C18.4,11.18 17.97,11.5 17.58,11.5H10.96A2.86,2.86 0 0,1 8.1,14.36V18.79C8.1,19.18 8.53,19.5 8.92,19.5H15.54A2.86,2.86 0 0,1 18.4,16.64V12.21C18.4,11.82 18.08,11.25 17.69,11.25H12.27A2.86,2.86 0 0,1 9.41,8.39V4.61A2.86,2.86 0 0,1 12.27,1.75H17.69A2.86,2.86 0 0,1 20.55,4.61V8.39C20.55,8.78 20.23,9.35 19.84,9.35H14.42A2.86,2.86 0 0,1 11.56,12.21V16.64A2.86,2.86 0 0,1 8.7,19.5H3.28A2.86,2.86 0 0,1 0.42,16.64V12.21A2.86,2.86 0 0,1 3.28,9.35H8.7C9.09,9.35 9.66,9.03 9.66,8.64V4.61A2.86,2.86 0 0,1 12.52,1.75H17.94A2.86,2.86 0 0,1 20.8,4.61V8.64C20.8,9.03 20.48,9.6 20.09,9.6H14.67A2.86,2.86 0 0,1 11.81,12.46V16.89C11.81,17.28 12.14,17.85 12.53,17.85H17.95A2.86,2.86 0 0,1 20.81,14.99V10.56A2.86,2.86 0 0,1 17.95,7.7H12.53C12.14,7.7 11.57,8.02 11.57,8.41V13.84A2.86,2.86 0 0,1 8.71,16.7H3.29A2.86,2.86 0 0,1 0.43,13.84V9.41A2.86,2.86 0 0,1 3.29,6.55H8.71C9.1,6.55 9.67,6.87 9.67,7.26V11.69A2.86,2.86 0 0,1 6.81,14.55H1.39A2.86,2.86 0 0,1 -1.47,11.69V7.26A2.86,2.86 0 0,1 1.39,4.4H6.81A2.86,2.86 0 0,1 9.67,7.26V11.69A2.86,2.86 0 0,1 6.81,14.55H1.39A2.86,2.86 0 0,1 -1.47,11.69V7.26"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 text-center font-medium">Python</p>
              
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-64">
                <div className="font-semibold mb-1">Python Programming - 75% Proficiency</div>
                <div className="text-xs text-slate-300 mb-2">Data analysis, automation scripts, engineering calculations</div>
                <div className="text-xs text-slate-400">Developed automation tools for data processing and engineering analysis workflows.</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
            </div>

            {/* SQL & Data */}
            <div className="group cursor-pointer relative">
              <div className="w-18 h-18 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg group-hover:shadow-xl">
                <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M4,3H5V5H3V4A1,1 0 0,1 4,3M20,3A1,1 0 0,1 21,4V5H19V3H20M6,3H18V5H6V3M21,6V18A1,1 0 0,1 20,19H4A1,1 0 0,1 3,18V6H21M5,7V17H19V7H5M6,8H8V10H6V8M6,11H8V13H6V11M6,14H8V16H6V14M10,8H18V10H10V8M10,11H18V13H10V11M10,14H18V16H10V14Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 text-center font-medium">SQL & Excel</p>
              
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-64">
                <div className="font-semibold mb-1">SQL & Excel - 70% Proficiency</div>
                <div className="text-xs text-slate-300 mb-2">Database queries, advanced Excel functions, data visualization</div>
                <div className="text-xs text-slate-400">Created complex data analysis reports and automated Excel workflows for engineering projects.</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>

            {/* English Proficiency */}
            <div className="group cursor-pointer relative">
              <div className="w-18 h-18 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg group-hover:shadow-xl">
                <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.87,15.07L10.33,12.56L10.36,12.53C12.1,10.59 13.34,8.36 14.07,6H17V4H10V2H8V4H1V6H12.17C11.5,7.92 10.44,9.75 9,11.35C8.07,10.32 7.3,9.19 6.69,8H4.69C5.42,9.63 6.42,11.17 7.67,12.56L2.58,17.58L4,19L9,14L12.11,17.11L12.87,15.07M18.5,10H16.5L12,22H14L15.12,19H19.87L21,22H23L18.5,10M15.88,17L17.5,12.67L19.12,17H15.88Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 text-center font-medium">English</p>
              
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-64">
                <div className="font-semibold mb-1">English Proficiency - 95% Proficiency</div>
                <div className="text-xs text-slate-300 mb-2">Business fluent, technical communication</div>
                <div className="text-xs text-slate-400">Native-level proficiency in technical writing, presentations, and international collaboration.</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '95%'}}></div>
                </div>
              </div>
            </div>

            {/* SolidWorks CAD */}
            <div className="group cursor-pointer relative">
              <div className="w-18 h-18 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg group-hover:shadow-xl">
                <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L3 7V17L12 22L21 17V7L12 2M12 4.5L18.5 8.5L12 12.5L5.5 8.5L12 4.5M5 10.5L11 14.5V19.5L5 15.5V10.5M13 14.5L19 10.5V15.5L13 19.5V14.5Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 text-center font-medium">SolidWorks</p>
              
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-64">
                <div className="font-semibold mb-1">SolidWorks CAD - 90% Proficiency</div>
                <div className="text-xs text-slate-300 mb-2">Advanced 3D modeling and technical drawings</div>
                <div className="text-xs text-slate-400">Achieved 25% design optimization in heat exchanger project through advanced modeling techniques.</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-green-500 h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
            </div>

            {/* Cloud & AWS */}
            <div className="group cursor-pointer relative">
              <div className="w-18 h-18 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center transform transition-all duration-300 group-hover:scale-110 group-hover:bg-primary/20 shadow-lg group-hover:shadow-xl">
                <svg className="w-8 h-8 text-primary group-hover:scale-110 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.35,10.04C18.67,6.59 15.64,4 12,4C9.11,4 6.6,5.64 5.35,8.04C2.34,8.36 0,10.91 0,14A6,6 0 0,0 6,20H19A5,5 0 0,0 24,15C24,12.36 21.95,10.22 19.35,10.04Z"/>
                </svg>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 text-center font-medium">AWS Cloud</p>
              
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-4 py-3 bg-slate-900 dark:bg-slate-800 text-white text-sm rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-20 w-64">
                <div className="font-semibold mb-1">AWS Cloud - 60% Proficiency</div>
                <div className="text-xs text-slate-300 mb-2">Cloud infrastructure, deployment, basic DevOps</div>
                <div className="text-xs text-slate-400">Deployed web applications using AWS services including EC2, S3, and Lambda functions.</div>
                <div className="w-full bg-slate-700 rounded-full h-2 mt-2">
                  <div className="bg-purple-500 h-2 rounded-full" style={{width: '60%'}}></div>
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
