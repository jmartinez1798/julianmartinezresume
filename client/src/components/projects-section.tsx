import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, ExternalLink } from "lucide-react";
import { useState } from "react";
import { MartinezAccent } from "./martinez-pattern";

const projects = [
  {
    id: 1,
    title: "Spots App",
    year: "2023–Present",
    description: "Interactive map application for social events and places. Built full-stack mobile app using React Native, Firebase, and geolocation-based UX. Designed social memory system with user-tagged photos, challenge cards, and map-based interaction. Managed deployment pipeline, Firebase data structure, performance and bug testing.",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Mobile application with maps and social photos",
    technologies: ["React Native", "Firebase", "Geolocation", "UX Design"],
    techColors: ["bg-cyan-100 dark:bg-cyan-900 text-cyan-800 dark:text-cyan-200", "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200", "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200", "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200"]
  },
  {
    id: 2,
    title: "VEX Robotics Competition",
    year: "Global Championship",
    description: "Led robotics team to Top 30 globally out of 16,000+ teams in world championship. Designed autonomous competitive robots and developed advanced control logic. Mentored high school and university-level students in robot design and team strategy. Implemented sensor programming and strategic gameplay algorithms.",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "VEX robotics competition robot with sensors and programming",
    technologies: ["Robotics", "C++", "Sensors", "Team Leadership"],
    techColors: ["bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200", "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200", "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200", "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"]
  },
  {
    id: 3,
    title: "AI Agents Development",
    year: "2024",
    description: "Development and training of personalized AI agents using advanced prompt engineering techniques. Created custom agents for automation, data analysis, and intelligent task handling. Implemented Claude and GPT integration for specialized workflows and business process optimization.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "AI and machine learning interface with data visualization",
    technologies: ["AI/ML", "Prompt Engineering", "Claude", "GPT"],
    techColors: ["bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200", "bg-pink-100 dark:bg-pink-900 text-pink-800 dark:text-pink-200", "bg-indigo-100 dark:bg-indigo-900 text-indigo-800 dark:text-indigo-200", "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"]
  },
  {
    id: 4,
    title: "Pharmaceutical Process Validation",
    year: "Engineering Internship",
    description: "Assisted in pharmaceutical manufacturing workflows, SOP design, and efficiency testing. Participated in equipment verification and documentation process for FDA compliance. Applied mechanical engineering principles to manufacturing process optimization and quality assurance protocols.",
    image: "https://images.unsplash.com/photo-1581092162384-8987c1d64718?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    alt: "Pharmaceutical manufacturing equipment and process validation",
    technologies: ["Manufacturing", "FDA Compliance", "Process Optimization", "Quality Assurance"],
    techColors: ["bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200", "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200", "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200", "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200"]
  }
];

export function ProjectsSection() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <MartinezAccent position="top-right" size="lg" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fadeInUp">
          Featured Projects
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id} 
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 border-2 hover:border-primary/20 cursor-pointer ${
                index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight'
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image}
                  alt={project.alt}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                {hoveredProject === project.id && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      <ExternalLink className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                )}
              </div>
              
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <Badge variant="outline" className="text-xs">
                    {project.year}
                  </Badge>
                </div>
                <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex}
                      variant="secondary"
                      className={`${project.techColors[techIndex]} transform hover:scale-110 transition-all duration-200`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <button className="text-primary hover:text-primary/80 font-semibold inline-flex items-center group/arrow">
                  View Details 
                  <ArrowRight className="ml-2 h-4 w-4 group-hover/arrow:translate-x-2 group-hover/arrow:rotate-12 transition-all duration-300" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
