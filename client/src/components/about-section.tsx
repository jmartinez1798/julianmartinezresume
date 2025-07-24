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
              real solutions through technology and design. My technical foundation was built through 
              <strong className="text-slate-800 dark:text-slate-200">multiple years competing globally in VEX Robotics</strong>, 
              earning various international awards in programming and robotics design. My academic journey continued with 
              <strong className="text-slate-800 dark:text-slate-200">2 years of Aerospace Engineering at Pennsylvania State University, University Park (PSU)</strong>. 
              When the pandemic occurred, I returned to Puerto Rico where Universidad Interamericana de Bayamón 
              offered me a <strong className="text-slate-800 dark:text-slate-200">full scholarship in Mechanical Engineering</strong>.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              A defining moment in my career was being 
              <strong className="text-slate-800 dark:text-slate-200">selected as one of only 3 students from Puerto Rico</strong> 
              for a fully-funded research program at University of Maryland. In 6 weeks, working alongside gifted US students, 
              we developed <strong className="text-slate-800 dark:text-slate-200">superhydrophobic and hydrophilic fiber technology</strong> 
              for oil-water separation. This research is now being used in ships for ocean oil spill cleanup, 
              demonstrating real-world impact that drives my passion for engineering solutions.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My goal is to start my career at a company that values 
              <strong className="text-slate-800 dark:text-slate-200">commitment</strong>, 
              <strong className="text-slate-800 dark:text-slate-200">continuous learning</strong>, and 
              impactful problem-solving, whether in the financial, technology, or engineering sectors.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div className="text-2xl font-bold text-primary">Global</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">VEX Robotics Awards</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div className="text-2xl font-bold text-primary">1 of 3</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Selected from PR</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
