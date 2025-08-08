import { MartinezLogoText } from "./martinez-logo";
import { ArrowUp } from "lucide-react";

export function Footer() {
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between">
        <p className="text-sm text-slate-500 dark:text-slate-400">
          © {new Date().getFullYear()} Julián Martínez. All rights reserved.
        </p>
        <div className="flex items-center gap-4">
          <a href="https://linkedin.com/in/julianmartinez" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary">LinkedIn</a>
          <a href="https://github.com/julianmartinez" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-primary">GitHub</a>
          <button onClick={backToTop} aria-label="Back to top" className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800">
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}