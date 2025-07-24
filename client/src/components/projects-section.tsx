import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Sistema de Automatización Bancaria",
    description: "Diseñé un prototipo de sistema automatizado para procesos bancarios que aumentó la eficiencia operacional en 40%. Integré sensores, actuadores y sistemas de control para operación perfecta.",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Sistema automatizado con brazos robóticos y cintas transportadoras",
    technologies: ["Python", "Arduino", "Programación PLC"],
    techColors: ["bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200", "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200", "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"]
  },
  {
    id: 2,
    title: "Plataforma de Análisis de Datos Financieros",
    description: "Desarrollé una aplicación móvil para análisis de datos financieros usando React Native, con capacidades de visualización y reportes automatizados para instituciones bancarias.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Gráficos y análisis de datos financieros en pantalla",
    technologies: ["React Native", "Python", "MATLAB"],
    techColors: ["bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200", "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200", "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"]
  },
  {
    id: 3,
    title: "Sistema de Monitoreo IoT",
    description: "Construí un sistema IoT personalizado para monitoreo de infraestructura crítica, permitiendo medición precisa de parámetros con recolección y análisis automatizado de datos.",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Equipos de monitoreo con sensores y instrumentos de medición",
    technologies: ["IoT", "Instrumentación", "Análisis de Datos"],
    techColors: ["bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200", "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200", "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200"]
  },
  {
    id: 4,
    title: "Optimizador de Procesos Digitales",
    description: "Diseñé un algoritmo de optimización para procesos de transformación digital que maximiza la eficiencia operacional minimizando costos para aplicaciones empresariales.",
    image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Sistema de energía renovable con paneles solares y turbinas eólicas",
    technologies: ["Python", "Optimización", "Transformación Digital"],
    techColors: ["bg-emerald-100 dark:bg-emerald-900 text-emerald-800 dark:text-emerald-200", "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200", "bg-teal-100 dark:bg-teal-900 text-teal-800 dark:text-teal-200"]
  }
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fadeInUp">
          Proyectos Destacados
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
                  Ver Detalles 
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
