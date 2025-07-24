import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Spots App – Social Photo App",
    description: "Desarrollé una aplicación social de fotos usando Firebase y React Native. Integré memorias de mapas, flujos de usuario y sistemas de desafíos fotográficos que promueven el engagement y etiquetado de contenido digital.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Aplicación móvil con mapas y fotos sociales",
    technologies: ["React Native", "Firebase", "Maps API"],
    techColors: ["bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200", "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200", "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"]
  },
  {
    id: 2,
    title: "Oil-Water Separator",
    description: "Diseñé un separador de aceite-agua para el Innovation Challenge de University of Maryland usando SolidWorks e impresión 3D. Realicé pruebas y presenté en simposio STEM, obteniendo 1er lugar por solución innovadora.",
    image: "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Componentes de separador de aceite-agua y diagramas técnicos",
    technologies: ["SolidWorks", "Impresión 3D", "Testing"],
    techColors: ["bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200", "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200", "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200"]
  },
  {
    id: 3,
    title: "Automated Assembly Line (Demo)",
    description: "Construí un sistema de línea de ensamblaje a pequeña escala usando Arduino y lógica tipo PLC. Simulé un sistema de entrega de piezas para aumentar la eficiencia del proceso de manufactura.",
    image: "https://images.unsplash.com/photo-1565008447742-97f6f38c985c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Sistema automatizado con brazos robóticos y cintas transportadoras",
    technologies: ["Arduino", "PLC Logic", "Automation"],
    techColors: ["bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200", "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200", "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200"]
  },
  {
    id: 4,
    title: "Heat Exchanger Project",
    description: "Diseñé y analicé un sistema de intercambiador de calor usando ANSYS Fluent. Logré un aumento del 25% en eficiencia térmica a través de simulación computacional y optimización de flujo de fluidos.",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Análisis térmico y componentes de intercambiador de calor",
    technologies: ["ANSYS Fluent", "CFD", "Thermal Analysis"],
    techColors: ["bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200", "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200", "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200"]
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
