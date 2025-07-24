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
    <section id="banking-fit" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 animate-fadeInUp">
            ¿Por qué Oriental Bank?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto animate-fadeInUp">
            Mi combinación única de formación técnica, experiencia práctica y pasión por la innovación 
            me posiciona como el candidato ideal para contribuir al éxito y crecimiento de Oriental Bank.
          </p>
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
            <h3 className="text-2xl font-bold mb-4 text-primary">Mi Compromiso con Oriental Bank</h3>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed max-w-4xl mx-auto">
              Estoy preparado para aportar mi experiencia técnica, creatividad y dedicación para impulsar 
              la transformación digital de Oriental Bank. Mi enfoque proactivo y mi pasión por la innovación 
              me permitirán contribuir significativamente a los objetivos estratégicos de la institución, 
              ya sea en roles de innovación, tecnología, automatización o soporte técnico.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}