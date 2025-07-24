import { Card, CardContent } from "@/components/ui/card";
import { Building2, Zap, Target, Users2, TrendingUp, Shield } from "lucide-react";

const bankingValues = [
  {
    icon: <Zap className="text-white text-2xl" />,
    title: "Innovación Tecnológica",
    description: "Mi experiencia en automatización y desarrollo de sistemas se alinea perfectamente con los objetivos de transformación digital de Oriental Bank.",
    color: "bg-blue-500"
  },
  {
    icon: <Target className="text-white text-2xl" />,
    title: "Orientado a Resultados",
    description: "He demostrado capacidad para entregar proyectos que mejoran la eficiencia operacional hasta un 40%, un enfoque ideal para el sector bancario.",
    color: "bg-emerald-500"
  },
  {
    icon: <Users2 className="text-white text-2xl" />,
    title: "Colaboración y Adaptabilidad",
    description: "Mi experiencia trabajando en equipos multidisciplinarios me permite integrarme efectivamente en la cultura colaborativa de Oriental Bank.",
    color: "bg-purple-500"
  },
  {
    icon: <TrendingUp className="text-white text-2xl" />,
    title: "Mentalidad de Crecimiento",
    description: "Como autodidacta en tecnologías emergentes, aporto la flexibilidad necesaria para adaptarme a las necesidades cambiantes del sector financiero.",
    color: "bg-indigo-500"
  },
  {
    icon: <Shield className="text-white text-2xl" />,
    title: "Enfoque en Calidad",
    description: "Mi formación en ingeniería me ha enseñado la importancia de la precisión y confiabilidad, valores fundamentales en servicios bancarios.",
    color: "bg-red-500"
  },
  {
    icon: <Building2 className="text-white text-2xl" />,
    title: "Visión Empresarial",
    description: "Entiendo cómo la tecnología puede transformar procesos empresariales para generar valor tanto para la institución como para los clientes.",
    color: "bg-orange-500"
  }
];

export function BankingFitSection() {
  return (
    <section id="professional-areas" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fadeInUp">
            Áreas de Interés Profesional
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-fadeInUp mb-8">
            Estoy interesado en comenzar mi carrera profesional en un rol híbrido o técnico donde pueda 
            aplicar lo aprendido, seguir creciendo, y trabajar con personas que valoren la innovación 
            y el trabajo bien hecho.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl mb-2">💡</div>
                <h3 className="font-bold text-sm mb-2">Digital Innovation & Automation</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">(banca o ingeniería)</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl mb-2">🛠️</div>
                <h3 className="font-bold text-sm mb-2">Diseño y prototipado de productos</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">SolidWorks, impresión 3D</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl mb-2">📊</div>
                <h3 className="font-bold text-sm mb-2">Análisis técnico y simulación</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">ANSYS, MATLAB</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-4">
              <div className="text-center">
                <div className="text-2xl mb-2">⚙️</div>
                <h3 className="font-bold text-sm mb-2">Proyectos de mejora de procesos</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">Automatización, eficiencia</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-teal-50 to-teal-100 dark:from-teal-900/20 dark:to-teal-800/20 rounded-xl p-4 md:col-span-2 lg:col-span-1">
              <div className="text-center">
                <div className="text-2xl mb-2">🎯</div>
                <h3 className="font-bold text-sm mb-2">Soporte técnico y aprendizaje aplicado</h3>
                <p className="text-xs text-slate-600 dark:text-slate-400">IT, resolución de problemas</p>
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
            <h3 className="text-2xl font-bold mb-4 text-primary">Lo que Aporto</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto mb-6">
              Como estudiante de ingeniería comprometido con el aprendizaje continuo, aporto una perspectiva 
              fresca, habilidades técnicas en desarrollo y una fuerte motivación para contribuir al éxito 
              de proyectos significativos.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
              <div className="flex flex-col items-center p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl">
                <div className="text-2xl font-bold text-primary">✅</div>
                <div className="text-sm font-semibold text-center">Puente entre ingeniería y tecnología</div>
              </div>
              <div className="flex flex-col items-center p-3 bg-green-50 dark:bg-green-900/20 rounded-xl">
                <div className="text-2xl font-bold text-primary">✅</div>
                <div className="text-sm font-semibold text-center">Comunicación bilingüe efectiva</div>
              </div>
              <div className="flex flex-col items-center p-3 bg-purple-50 dark:bg-purple-900/20 rounded-xl">
                <div className="text-2xl font-bold text-primary">✅</div>
                <div className="text-sm font-semibold text-center">Aprendizaje autodirigido y adaptabilidad</div>
              </div>
              <div className="flex flex-col items-center p-3 bg-orange-50 dark:bg-orange-900/20 rounded-xl">
                <div className="text-2xl font-bold text-primary">✅</div>
                <div className="text-sm font-semibold text-center">Enfoque práctico en resolución de problemas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}