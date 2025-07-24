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
              where I earned various international awards in programming and robotics design. This experience developed 
              my problem-solving skills, technical precision, and ability to work under pressure while collaborating 
              with international teams.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              My academic journey continued with <strong className="text-slate-800 dark:text-slate-200">2 years of Aerospace Engineering 
              at Pennsylvania State University, University Park (PSU)</strong>, one of the nation's top engineering programs. 
              This experience exposed me to rigorous academic standards, advanced engineering principles, and research methodologies 
              at a prestigious US research university. When the pandemic occurred, I returned to Puerto Rico where 
              Universidad Interamericana de Bayamón offered me a <strong className="text-slate-800 dark:text-slate-200">full scholarship 
              in Mechanical Engineering</strong>, recognizing my academic potential and commitment to excellence.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              A defining moment in my career was being <strong className="text-slate-800 dark:text-slate-200">selected as one of only 
              3 students from all of Puerto Rico</strong> for a fully-funded research program at University of Maryland. 
              This highly competitive selection process validated my technical abilities and research potential. During this intensive 
              6-week program, I collaborated with exceptionally gifted students from across the United States, developing advanced 
              <strong className="text-slate-800 dark:text-slate-200">superhydrophobic and hydrophilic fiber technology</strong> for oil-water separation.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              The University of Maryland experience significantly enhanced my research methodologies, technical writing, 
              and collaborative skills while working in a high-pressure, innovation-focused environment. Most importantly, 
              our research breakthrough is now being implemented in ships for ocean oil spill cleanup operations, 
              demonstrating tangible real-world impact that continues to drive my passion for engineering solutions that matter.
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
                <div className="text-sm text-slate-600 dark:text-slate-400">Dual University Experience</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div className="text-2xl font-bold text-primary">Real Impact</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Research in Use</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
