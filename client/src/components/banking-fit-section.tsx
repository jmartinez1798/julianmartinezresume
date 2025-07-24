import { Card, CardContent } from "@/components/ui/card";
import { Building2, Zap, Target, Users2, TrendingUp, Shield } from "lucide-react";

const bankingValues = [
  {
    icon: <Zap className="text-white text-2xl" />,
    title: "Technological Innovation",
    description: "My experience in automation and system development aligns perfectly with digital transformation objectives in modern organizations.",
    color: "bg-blue-500"
  },
  {
    icon: <Target className="text-white text-2xl" />,
    title: "Results-Oriented",
    description: "Selected as 1 of 3 students from Puerto Rico for University of Maryland research program. Developed breakthrough technology now used in ocean oil spill cleanup operations.",
    color: "bg-emerald-500"
  },
  {
    icon: <Users2 className="text-white text-2xl" />,
    title: "Collaboration and Adaptability",
    description: "My experience working in multidisciplinary teams allows me to integrate effectively into collaborative organizational cultures.",
    color: "bg-purple-500"
  },
  {
    icon: <TrendingUp className="text-white text-2xl" />,
    title: "Growth Mindset",
    description: "As a self-directed learner in emerging technologies, I bring the flexibility needed to adapt to changing industry needs.",
    color: "bg-indigo-500"
  },
  {
    icon: <Shield className="text-white text-2xl" />,
    title: "Quality Focus",
    description: "My engineering training has taught me the importance of precision and reliability, fundamental values in professional services.",
    color: "bg-red-500"
  },
  {
    icon: <Building2 className="text-white text-2xl" />,
    title: "Business Vision",
    description: "I understand how technology can transform business processes to generate value for both the organization and its stakeholders.",
    color: "bg-orange-500"
  }
];

export function BankingFitSection() {
  return (
    <section id="professional-areas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fadeInUp">
            Professional Interest Areas
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-fadeInUp mb-8">
            I am interested in starting my professional career in a hybrid or technical role where I can 
            apply what I have learned, continue growing, and work with people who value innovation 
            and quality work.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl mb-2">💡</div>
                <h3 className="font-bold text-sm mb-2">Digital Innovation & Automation</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">(banking or engineering)</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl mb-2">🛠️</div>
                <h3 className="font-bold text-sm mb-2">Product Design and Prototyping</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">SolidWorks, 3D Printing</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-bold text-sm mb-2">Technical Analysis and Simulation</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">ANSYS, MATLAB</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl mb-2">⚙️</div>
                <h3 className="font-bold text-sm mb-2">Process Improvement Projects</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">Automation, efficiency</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-xl p-4 md:col-span-2 lg:col-span-1">
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-bold text-sm mb-2">Technical Support and Applied Learning</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">IT, problem solving</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {bankingValues.map((value, index) => (
            <Card 
              key={value.title}
              className={`group overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${
                index % 3 === 0 ? 'animate-slideInLeft' : 
                index % 3 === 1 ? 'animate-fadeInUp' : 'animate-slideInRight'
              }`}
            >
              <CardContent className="p-6">
                <div className={`w-14 h-14 ${value.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {value.icon}
                </div>
                <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                  {value.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl animate-fadeInUp">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-primary">What I Bring</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto mb-6">
              As an engineering student committed to continuous learning, I bring a fresh perspective, 
              developing technical skills, and strong motivation to contribute to the success 
              of meaningful projects.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="flex flex-col items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <div className="text-2xl font-bold text-primary">✅</div>
                <div className="text-sm font-semibold text-center">Bridge between engineering and technology</div>
              </div>
              <div className="flex flex-col items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <div className="text-2xl font-bold text-primary">✅</div>
                <div className="text-sm font-semibold text-center">Effective bilingual communication</div>
              </div>
              <div className="flex flex-col items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <div className="text-2xl font-bold text-primary">✅</div>
                <div className="text-sm font-semibold text-center">Self-directed learning and adaptability</div>
              </div>
              <div className="flex flex-col items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                <div className="text-2xl font-bold text-primary">✅</div>
                <div className="text-sm font-semibold text-center">Practical approach to problem solving</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}