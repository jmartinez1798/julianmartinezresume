import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          <div className="flex justify-center space-x-6 mb-8">
            <a 
              href="https://github.com/julianmartinez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Github className="text-xl" />
            </a>
            <a 
              href="https://linkedin.com/in/julianmartinez" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="text-xl" />
            </a>
            <a 
              href="mailto:julian1798@yahoo.com"
              className="w-12 h-12 bg-slate-800 hover:bg-slate-700 rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
            >
              <Mail className="text-xl" />
            </a>
          </div>
          
          <div className="border-t border-slate-700 pt-8">
            <p className="text-slate-400">
              © 2025 Julián Martínez. Diseñado con pasión por la excelencia en ingeniería y la innovación tecnológica.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
