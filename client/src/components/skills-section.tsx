import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { MartinezAccent } from "./martinez-pattern";
import { 
  Wrench, 
  Monitor, 
  Brain, 
  Cog,
  Zap,
  Database,
  Code,
  Lightbulb,
  Users,
  MessageCircle,
  Target,
  Rocket
} from "lucide-react";

const skillCategories = [
  {
    title: "Technical Skills",
    icon: <Wrench className="w-6 h-6" />,
    skills: [
      { name: "Mechanical Design (SolidWorks)", icon: <Cog className="w-4 h-4" />, level: "Advanced" },
      { name: "3D Modeling and Drafting (AutoCAD)", icon: <Monitor className="w-4 h-4" />, level: "Advanced" },
      { name: "Simulation & Analysis (ANSYS Fluent)", icon: <Zap className="w-4 h-4" />, level: "Intermediate" },
      { name: "MATLAB for Engineering Calculations", icon: <Code className="w-4 h-4" />, level: "Advanced" },
      { name: "Basic Automation (Arduino, PLC Logic)", icon: <Cog className="w-4 h-4" />, level: "Intermediate" },
      { name: "Thermal & Fluid Systems Design", icon: <Target className="w-4 h-4" />, level: "Intermediate" }
    ],
    color: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800"
  },
  {
    title: "Software & Technology",
    icon: <Monitor className="w-6 h-6" />,
    skills: [
      { name: "React Native + Firebase (MVP development)", icon: <Database className="w-4 h-4" />, level: "Advanced" },
      { name: "Python (Scripting & Prototypes)", icon: <Code className="w-4 h-4" />, level: "Advanced" },
      { name: "SQL & Firebase for backend", icon: <Database className="w-4 h-4" />, level: "Intermediate" },
      { name: "GitHub (Version Control)", icon: <Code className="w-4 h-4" />, level: "Advanced" },
      { name: "Excel (advanced) / PowerPoint / Canva", icon: <Monitor className="w-4 h-4" />, level: "Advanced" },
      { name: "Prompt Engineering & AI Agents", icon: <Brain className="w-4 h-4" />, level: "Advanced" },
      { name: "Web Development Basics (HTML, CSS, JS)", icon: <Code className="w-4 h-4" />, level: "Intermediate" }
    ],
    color: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800"
  },
  {
    title: "Soft Skills",
    icon: <Brain className="w-6 h-6" />,
    skills: [
      { name: "Leadership & Team Management", icon: <Users className="w-4 h-4" />, level: "Advanced" },
      { name: "Cross-Functional Collaboration", icon: <Users className="w-4 h-4" />, level: "Advanced" },
      { name: "Bilingual Communication (English & Spanish)", icon: <MessageCircle className="w-4 h-4" />, level: "Advanced" },
      { name: "Problem Solving", icon: <Lightbulb className="w-4 h-4" />, level: "Advanced" },
      { name: "Self-Directed Learning", icon: <Brain className="w-4 h-4" />, level: "Advanced" },
      { name: "Creativity & Innovation", icon: <Lightbulb className="w-4 h-4" />, level: "Advanced" },
      { name: "Adaptability under pressure", icon: <Rocket className="w-4 h-4" />, level: "Advanced" },
      { name: "Public Speaking / Presentations", icon: <MessageCircle className="w-4 h-4" />, level: "Intermediate" }
    ],
    color: "bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800"
  }
];

const automationTools = [
  { name: "Arduino, PLC Logic (ladder logic basics)", category: "Automation" },
  { name: "SolidWorks, AutoCAD, ANSYS Fluent", category: "Simulation & CAD" },
  { name: "Python, SQL, Firebase, Prompt Engineering", category: "Data / AI / Backend" },
  { name: "Canva, PowerPoint, Excel, React Native", category: "Frontend / Presentation" }
];

const getLevelColor = (level: string) => {
  switch (level) {
    case "Advanced":
      return "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200 border-green-300 dark:border-green-700";
    case "Intermediate":
      return "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 border-blue-300 dark:border-blue-700";
    case "Familiar":
      return "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700";
    default:
      return "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 border-gray-300 dark:border-gray-700";
  }
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 relative bg-slate-50 dark:bg-slate-900">
      <MartinezAccent position="top-left" size="md" />
      <div className="max-w-6xl mx-auto relative z-10">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fadeInUp">
          Skills & Competencies
        </h2>
        
        {/* Main Skills Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, categoryIndex) => (
            <Card 
              key={categoryIndex} 
              className={`group hover:shadow-xl transition-all duration-300 border-2 ${category.color} ${
                categoryIndex === 0 ? 'animate-slideInLeft' : 
                categoryIndex === 1 ? 'animate-fadeInUp' : 'animate-slideInRight'
              }`}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-6">
                  <div className="text-primary mr-3">{category.icon}</div>
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-start justify-between">
                      <div className="flex items-start space-x-2 flex-1">
                        <div className="text-slate-500 dark:text-slate-400 mt-1">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-slate-800 dark:text-slate-200 leading-relaxed">
                          {skill.name}
                        </span>
                      </div>
                      <Badge 
                        variant="outline" 
                        className={`text-xs ml-2 ${getLevelColor(skill.level)}`}
                      >
                        {skill.level}
                      </Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Automation & Technology Tools Section */}
        <div className="animate-fadeInUp">
          <h3 className="text-2xl font-bold text-center mb-8 text-slate-800 dark:text-slate-200">
            Automation & Technology Tools
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {automationTools.map((tool, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 border border-slate-200 dark:border-slate-700">
                <CardContent className="p-4">
                  <div className="text-center">
                    <Badge variant="outline" className="mb-3 text-xs bg-primary/10 text-primary border-primary/20">
                      {tool.category}
                    </Badge>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                      {tool.name}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}