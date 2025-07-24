export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 relative">
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
              Soy un estudiante de Ingeniería Mecánica en la Inter de Bayamón, apasionado por crear 
              soluciones reales a través de la tecnología y el diseño. Me considero una persona 
              <strong className="text-slate-800 dark:text-slate-200">autodidacta</strong>, con muchas ganas de aprender y contribuir a proyectos significativos.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Actualmente estoy desarrollando mis conocimientos en áreas como 
              <strong className="text-slate-800 dark:text-slate-200">automatización</strong>, 
              <strong className="text-slate-800 dark:text-slate-200">programación básica</strong>, 
              análisis técnico y desarrollo de productos. Cada proyecto que realizo me ayuda a crecer 
              profesionalmente y a entender mejor cómo la ingeniería puede resolver problemas del mundo real.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Mi meta es comenzar mi carrera en una empresa que valore el 
              <strong className="text-slate-800 dark:text-slate-200">compromiso</strong>, el 
              <strong className="text-slate-800 dark:text-slate-200">aprendizaje constante</strong> y la 
              resolución de problemas con impacto, ya sea en el sector financiero, tecnológico o de ingeniería.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div className="text-2xl font-bold text-primary">En desarrollo</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Habilidades Técnicas</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Proyectos Reales</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
