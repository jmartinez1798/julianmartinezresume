import { Button } from "@/components/ui/button";
import { Download, ArrowDown } from "lucide-react";
import { QRCodeGenerator } from "./qr-code-generator";

export function HeroSection() {
  const handleDownloadResume = () => {
    // In a real implementation, this would download an actual PDF file
    const link = document.createElement('a');
    link.href = 'data:application/pdf;base64,'; // This would be the actual PDF data
    link.download = 'Julian_Martinez_Resume.pdf';
    
    // For demo purposes, show an alert
    alert('Resume download would start here. In a real implementation, this would download the actual PDF file.');
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
          <img 
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=300&h=300" 
            alt="Julián Martínez - Professional Portrait" 
            className="w-32 h-32 rounded-full mx-auto shadow-xl object-cover border-4 border-white dark:border-slate-700"
          />
        </div>
        
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Julián Martínez
        </h1>
        
        <p className="text-xl sm:text-2xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto">
          Mechanical Engineering Student passionate about innovation, design, and creating solutions that matter.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button
            onClick={handleDownloadResume}
            className="bg-primary hover:bg-primary/90 text-white px-8 py-3 text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </Button>
          
          <Button
            variant="outline"
            onClick={scrollToProjects}
            className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 text-lg font-semibold transition-all duration-300"
          >
            View My Work
          </Button>
        </div>

        <QRCodeGenerator url={window.location.href} />
      </div>
    </section>
  );
}
