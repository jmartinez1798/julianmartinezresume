import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Automated Assembly Line",
    description: "Designed and prototyped an automated assembly system that increased production efficiency by 40%. Integrated sensors, actuators, and control systems for seamless operation.",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Automated manufacturing system with robotic arms and conveyor belts",
    technologies: ["SolidWorks", "Arduino", "PLC Programming"],
    techColors: ["bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200", "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200", "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"]
  },
  {
    id: 2,
    title: "Thermal Management System",
    description: "Developed an innovative heat exchanger design for industrial applications, achieving 25% improvement in thermal efficiency through computational fluid dynamics analysis.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Heat exchanger components and thermal analysis diagrams",
    technologies: ["ANSYS Fluent", "CAD Design", "MATLAB"],
    techColors: ["bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200", "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200", "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"]
  },
  {
    id: 3,
    title: "Material Testing Apparatus",
    description: "Built a custom material testing machine for university research lab, enabling precise measurement of mechanical properties with automated data collection and analysis.",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Mechanical testing equipment with force gauges and measurement instruments",
    technologies: ["LabVIEW", "Instrumentation", "Data Analysis"],
    techColors: ["bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200", "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200", "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200"]
  },
  {
    id: 4,
    title: "Renewable Energy Optimizer",
    description: "Designed a hybrid renewable energy system optimization algorithm that maximizes energy output while minimizing costs for residential applications.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Renewable energy system with solar panels and wind turbines",
    technologies: ["Python", "Optimization", "Sustainability"],
    techColors: ["bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200", "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200", "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200"]
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fadeInUp">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight'
              }`}
            >
              <div className="overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className={project.techColors[techIndex]}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <button className="text-primary hover:text-primary/80 font-semibold inline-flex items-center group/arrow">
                  View Details 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/arrow:translate-x-1 transition-transform" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
