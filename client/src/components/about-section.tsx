export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fadeInUp">
          Sobre Mí
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="animate-slideInLeft">
            <img 
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600" 
              alt="Modern engineering workspace with blueprints and tools" 
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </div>
          
          <div className="space-y-6 animate-slideInRight">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Soy un estudiante dedicado de Ingeniería Mecánica de Puerto Rico con una pasión por la innovación y 
              la resolución de problemas. Mi trayectoria en ingeniería ha sido impulsada por la curiosidad y el 
              deseo de crear soluciones significativas que puedan tener un impacto positivo en el sector bancario 
              y tecnológico.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Como una persona <strong className="text-slate-800 dark:text-slate-200">trabajadora</strong> y 
              <strong className="text-slate-800 dark:text-slate-200"> autodidacta</strong>, constantemente busco 
              oportunidades para expandir mis conocimientos y habilidades. Mi pasión por la 
              <strong className="text-slate-800 dark:text-slate-200"> innovación</strong> me impulsa a explorar 
              tecnologías de vanguardia y metodologías que pueden aplicarse a la transformación digital de instituciones financieras.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div className="text-2xl font-bold text-primary">3+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Años de Experiencia</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div className="text-2xl font-bold text-primary">15+</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Proyectos Completados</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
