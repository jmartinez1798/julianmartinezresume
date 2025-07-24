import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle, X, Mail, Phone, Download } from "lucide-react";

export function FloatingActionButton() {
  const [isOpen, setIsOpen] = useState(false);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/JulianMartinez_Resume2025.pdf';
    link.download = 'JulianMartinez_Resume2025.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsOpen(false);
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
    setIsOpen(false);
  };

  const handleCall = () => {
    window.open('tel:+17873974295');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Action buttons */}
      <div className={`flex flex-col gap-3 mb-3 transition-all duration-300 ${
        isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4 pointer-events-none'
      }`}>
        <Button
          onClick={handleDownloadResume}
          className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-12 h-12 shadow-lg transform hover:scale-110 transition-all duration-200"
          title="Descargar CV"
        >
          <Download className="h-5 w-5" />
        </Button>
        
        <Button
          onClick={scrollToContact}
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-12 h-12 shadow-lg transform hover:scale-110 transition-all duration-200"
          title="Contactar"
        >
          <Mail className="h-5 w-5" />
        </Button>
        
        <Button
          onClick={handleCall}
          className="bg-purple-500 hover:bg-purple-600 text-white rounded-full w-12 h-12 shadow-lg transform hover:scale-110 transition-all duration-200"
          title="Llamar"
        >
          <Phone className="h-5 w-5" />
        </Button>
      </div>

      {/* Main button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={`bg-primary hover:bg-primary/90 text-white rounded-full w-14 h-14 shadow-lg transform transition-all duration-300 ${
          isOpen ? 'rotate-45 scale-110' : 'hover:scale-110'
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>
    </div>
  );
}