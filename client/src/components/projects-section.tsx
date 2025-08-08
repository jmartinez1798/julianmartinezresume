import { useState, useEffect, Suspense } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MartinezAccent } from "./martinez-pattern";
import { 
  ExternalLink, 
  Smartphone, 
  Trophy, 
  Mic, 
  Thermometer,
  Coins,
  ArrowRight,
  Settings,
  X
} from "lucide-react";

const projects = [
  {
    title: "Spots App",
    description: "Mobile application for social venue discovery with real-time location features, serving thousands of users with Firebase backend integration.",
    technologies: ["React Native", "Firebase", "JavaScript", "UI/UX Design"],
    role: "Full-Stack Developer & UI/UX Designer",
    icon: <Smartphone className="w-6 h-6" />,
    category: "Mobile Development",
    impact: "Full-featured app development and UI/UX prototyping. Deployment stage in progress.",
    caseStudy: "#case-spots"
  },
  {
    title: "VEX Robotics World Championship",
    description: "Competitive robotics design and programming, achieving Top 30 global ranking out of 16,000+ teams through innovative mechanical solutions.",
    technologies: ["C++", "Mechanical Design", "Team Leadership", "Competition Strategy"],
    role: "Lead Programmer & Mechanical Designer",
    icon: <Trophy className="w-6 h-6" />,
    category: "Robotics & Engineering",
    impact: "Top 30 globally (16,000+ teams)",
    caseStudy: "#case-vex"
  },
  {
    title: "Heat Exchanger Design & Thermal Simulation",
    description: "Designed and simulated a cross-flow heat exchanger using analytical models and SolidWorks simulations. Focused on optimizing thermal resistance, NTU, and LMTD methods for accurate heat transfer predictions.",
    technologies: ["SolidWorks", "SMath Studio", "Heat Transfer Engineering"],
    role: "Thermal Analyst & Mechanical Designer",
    icon: <Settings className="w-6 h-6" />,
    category: "Mechanical Engineering",
    impact: "Applied mechanical engineering theory to real-world system simulation."
  },
  {
    title: "AI Voice Agent for Restaurant",
    description: "Automated ordering system using advanced voice AI technology for seamless customer experience and order processing automation.",
    technologies: ["ElevenLabs", "OpenAI API", "Voice Processing", "Automation"],
    role: "AI Developer & System Designer",
    icon: <Mic className="w-6 h-6" />,
    category: "AI & Automation",
    impact: "Streamlined order processing"
  },
  {
    title: "University of Maryland Research - Oil Spill Cleanup",
    description: "Advanced superhydrophobic and hydrophilic fiber technology development for oil-water separation, now implemented in real ocean cleanup operations.",
    technologies: ["Materials Engineering", "Research Methodology", "Technical Writing", "Fiber Technology"],
    role: "Research Engineer (1 of 3 students from Puerto Rico)",
    icon: <Thermometer className="w-6 h-6" />,
    category: "Research & Development",
    impact: "Real-world implementation in ships"
  },
  {
    title: "Blockchain Strategy & Token Ecosystem Design",
    description: "Developed and launched a Web3 token project in collaboration with the 787Crypto community. Led tokenomics strategy, community building, and branding initiatives for a real-use case Solana-based ecosystem.",
    technologies: ["Web3 Strategy", "Tokenomics", "Community Building", "Branding"],
    role: "Strategy Lead & Brand Designer",
    icon: <Coins className="w-6 h-6" />,
    category: "Web3 & Strategy",
    impact: "Token and brand adoption within Web3 community"
  }
];

const getCategoryColor = (category: string) => {
  switch (category) {
    case "Mobile Development":
      return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700";
    case "Robotics & Engineering":
      return "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200 border-orange-300 dark:border-orange-700";
    case "Mechanical Engineering":
      return "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200 border-red-300 dark:border-red-700";
    case "AI & Automation":
      return "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200 border-purple-300 dark:border-purple-700";
    case "Research & Development":
      return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700";
    case "Web3 & Strategy":
      return "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200 border-yellow-300 dark:border-yellow-700";
    default:
      return "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700";
  }
};

export function ProjectsSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    console.log("User opened Spots App Figma Prototype");
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  useEffect(() => {
    const handleEscKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isModalOpen) {
        closeModal();
      }
    };

    if (isModalOpen) {
      document.addEventListener('keydown', handleEscKey);
    }

    return () => {
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [isModalOpen]);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-white dark:bg-slate-800">
      <MartinezAccent position="top-right" size="md" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-4 animate-fadeInUp">
          Featured Projects
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-300 text-center mb-16 max-w-3xl mx-auto">
          Showcasing real-world impact through engineering, technology, and innovation across multiple domains
        </p>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 ${
                index % 2 === 0 ? 'animate-slideInLeft' : 'animate-slideInRight'
              }`}
            >
              <CardContent className="p-8">
                <div className="grid md:grid-cols-12 gap-6 items-start">
                  {/* Icon and Category */}
                  <div className="md:col-span-2 flex flex-col items-center md:items-start">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 dark:from-primary/20 dark:to-primary/10 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                      <div className="text-primary">
                        {project.icon}
                      </div>
                    </div>
                    <Badge 
                      variant="outline" 
                      className={`text-xs ${getCategoryColor(project.category)} whitespace-nowrap`}
                    >
                      {project.category}
                    </Badge>
                  </div>

                  {/* Project Content */}
                  <div className="md:col-span-7 space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-primary transition-colors mb-2">
                        {project.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
                        Role: {project.role}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <Badge 
                            key={techIndex} 
                            variant="secondary" 
                            className="text-xs bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Impact and Action */}
                  <div className="md:col-span-3 flex flex-col items-center md:items-end space-y-3">
                    <div className="text-center md:text-right">
                      <p className="text-sm font-semibold text-primary mb-1">Impact</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {project.impact}
                      </p>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="group/btn hover:bg-primary hover:text-white transition-all duration-300 hover:shadow-lg"
                        onClick={() => {
                          if (project.title === "Spots App") {
                            openModal();
                          } else if (project.title === "VEX Robotics World Championship") {
                            window.open("https://instagram.com/ironrobotics2326/", "_blank", "noopener,noreferrer");
                          }
                        }}
                      >
                        View Details
                        <ArrowRight className="w-4 h-4 ml-2 group-hover/btn:translate-x-1 transition-transform duration-300" />
                      </Button>
                      {project.caseStudy && (
                        <a href={project.caseStudy} className="text-sm text-primary hover:underline flex items-center">
                          Case Study <ExternalLink className="w-4 h-4 ml-1" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Case study anchors */}
        <div id="case-spots" className="mt-12 text-slate-700 dark:text-slate-300">
          <h3 className="text-2xl font-bold mb-2">Case Study: Spots App</h3>
          <p className="mb-4">Problem: Social discovery without noisy feeds. Approach: MVP with RN + Firebase; focus on geofencing, map UX, and privacy. Outcome: Usability test success and planned beta.</p>
        </div>
        <div id="case-vex" className="mt-8 text-slate-700 dark:text-slate-300">
          <h3 className="text-2xl font-bold mb-2">Case Study: VEX Robotics</h3>
          <p>Problem: Consistent scoring and robustness under constraints. Approach: drivetrain tuning, code modularity, match strategy. Result: Top‑30 global ranking.</p>
        </div>

        {/* Additional Projects CTA */}
        <div className="text-center mt-12 animate-fadeInUp">
          <p className="text-slate-600 dark:text-slate-400 mb-4">
            Interested in learning more about my projects and technical approach?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            className="group hover:bg-primary hover:text-white transition-all duration-300"
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            Get In Touch
            <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
          </Button>
        </div>
      </div>

      {/* Spots App Figma Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm animate-fadeIn"
          onClick={closeModal}
        >
          <div 
            className="relative w-[95vw] h-[85vh] max-w-7xl bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-200 dark:border-slate-700 animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-slate-100">
                Spots App – UI/UX Prototype
              </h3>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeModal}
                className="hover:bg-slate-100 dark:hover:bg-slate-700 p-2"
              >
                <X className="w-5 h-5" />
              </Button>
            </div>

            {/* Modal Content */}
            <div className="p-6 h-[calc(100%-80px)]">
              <Suspense fallback={<div className="w-full h-full grid place-items-center text-slate-500">Loading…</div>}>
                <iframe
                  loading="lazy"
                  src="https://www.figma.com/embed?embed_host=share&url=https://www.figma.com/proto/xJ6EqjY8r6pme6v56cT4IW/Spots?node-id=1005-264&starting-point-node-id=1005%3A264"
                  allowFullScreen
                  className="w-full h-full border-none rounded-lg"
                  title="Spots App Figma Prototype"
                />
              </Suspense>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}