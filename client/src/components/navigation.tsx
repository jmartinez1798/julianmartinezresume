import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "./theme-provider";
import { MartinezLogoText } from "./martinez-logo";

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const { theme, setTheme } = useTheme();

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm border-b border-slate-200 dark:border-slate-700 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <button
            className="flex items-center space-x-2 focus:outline-none"
            onClick={() => scrollToSection("home")}
            aria-label="Home"
          >
            <MartinezLogoText />
          </button>

          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium hover:text-primary transition-colors ${
                  activeSection === item.id ? "text-primary" : "text-slate-600 dark:text-slate-300"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://calendly.com/your-calendly/julian-intro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="bg-primary text-white">Book a 15‑min Call</Button>
            </a>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label="Toggle theme">
              {theme === "light" ? (<Moon className="h-5 w-5" />) : (<Sun className="h-5 w-5" />)}
            </Button>
          </div>

          <div className="md:hidden flex items-center space-x-2">
            <a
              href="https://calendly.com/your-calendly/julian-intro"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="sm" className="bg-primary text-white">Call</Button>
            </a>
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")} aria-label="Toggle theme">
              {theme === "light" ? (<Moon className="h-5 w-5" />) : (<Sun className="h-5 w-5" />)}
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-slate-900 border-t border-slate-200 dark:border-slate-700">
          <div className="px-4 py-3 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 ${
                  activeSection === item.id ? "text-primary" : "text-slate-700 dark:text-slate-300"
                }`}
              >
                {item.label}
              </button>
            ))}
            <a href="https://calendly.com/your-calendly/julian-intro" target="_blank" rel="noopener noreferrer" className="block">
              <Button className="w-full bg-primary text-white">Book a 15‑min Call</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
