export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 relative">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fadeInUp">
          About Me
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
              I am a Mechanical Engineering student at Inter Bayamón, passionate about creating 
              real solutions through technology and design. My academic journey began with 
              <strong className="text-slate-800 dark:text-slate-200">2 years of Aerospace Engineering at Pennsylvania State University, University Park (PSU)</strong>. 
              When the pandemic occurred, I returned to Puerto Rico where Universidad Interamericana de Bayamón 
              offered me a <strong className="text-slate-800 dark:text-slate-200">full scholarship in Mechanical Engineering</strong>, 
              which I accepted to continue my studies closer to home.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              This diverse academic background between a prestigious US research university and Puerto Rico 
              has given me a unique perspective. I consider myself a 
              <strong className="text-slate-800 dark:text-slate-200">self-directed learner</strong>, currently developing knowledge in 
              <strong className="text-slate-800 dark:text-slate-200">automation</strong>, 
              <strong className="text-slate-800 dark:text-slate-200">programming</strong>, 
              technical analysis, and product development. Each project I complete helps me grow 
              professionally and better understand how engineering can solve real-world problems.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My goal is to start my career at a company that values 
              <strong className="text-slate-800 dark:text-slate-200">commitment</strong>, 
              <strong className="text-slate-800 dark:text-slate-200">continuous learning</strong>, and 
              impactful problem-solving, whether in the financial, technology, or engineering sectors.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div className="text-2xl font-bold text-primary">PSU + Inter</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Academic Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div className="text-2xl font-bold text-primary">4</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Real Projects</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
