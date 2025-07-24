import { useEffect, useRef, useState } from "react";
import { Settings, Laptop, Users } from "lucide-react";
import { AutomationToolsSection } from "./automation-tools-section";

interface SkillItem {
  name: string;
  percentage: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  skills: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Habilidades Técnicas",
    icon: <Settings className="text-white text-2xl" />,
    color: "bg-blue-500",
    skills: [
      { name: "Diseño Mecánico", percentage: 95 },
      { name: "Automatización", percentage: 90 },
      { name: "Arduino & PLC Logic", percentage: 85 },
      { name: "Análisis ANSYS Fluent", percentage: 88 }
    ]
  },
  {
    title: "Tecnologías y Software", 
    icon: <Laptop className="text-white text-2xl" />,
    color: "bg-emerald-500",
    skills: [
      { name: "React Native", percentage: 85 },
      { name: "Firebase", percentage: 80 },
      { name: "Python", percentage: 85 },
      { name: "SolidWorks", percentage: 95 }
    ]
  },
  {
    title: "Competencias Profesionales",
    icon: <Users className="text-white text-2xl" />,
    color: "bg-purple-500", 
    skills: [
      { name: "Resolución de Problemas", percentage: 98 },
      { name: "Comunicación Bilingüe", percentage: 88 },
      { name: "Liderazgo en Equipo", percentage: 90 },
      { name: "Innovación", percentage: 95 }
    ]
  }
];

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      ref={sectionRef}
      id="skills" 
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fadeInUp">
          Habilidades y Competencias
        </h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className={`bg-slate-50 dark:bg-slate-700 rounded-2xl p-8 shadow-lg ${
                categoryIndex === 0 ? 'animate-slideInLeft' : 
                categoryIndex === 1 ? 'animate-fadeInUp' : 'animate-slideInRight'
              }`}
            >
              <div className="text-center mb-6">
                <div className={`w-16 h-16 ${category.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span className="font-semibold">{skill.name}</span>
                      <span className="text-sm text-slate-500">{skill.percentage}%</span>
                    </div>
                    <div className="skill-bar bg-slate-200 dark:bg-slate-600 rounded-full h-3">
                      <div 
                        className={`skill-progress h-3 rounded-full ${
                          category.color === 'bg-blue-500' ? 'bg-blue-500' :
                          category.color === 'bg-emerald-500' ? 'bg-emerald-500' : 'bg-purple-500'
                        }`}
                        style={{
                          width: isVisible ? `${skill.percentage}%` : '0%',
                          transition: 'width 1.5s ease-out'
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        
        <AutomationToolsSection />
      </div>
    </section>
  );
}
