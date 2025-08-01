export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-slate-800 relative">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 animate-fadeInUp">
          About Me
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 animate-fadeInUp text-center">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify max-w-3xl mx-auto">
              I'm Julian Martínez, a Mechanical Engineering student from Inter Bayamón with a dual academic background that includes 2 years in Aerospace Engineering at Penn State. My experience spans competitive robotics (VEX), award-winning research at the University of Maryland, and hands-on innovation through projects like the Spots app and AI Agents. I thrive in high-pressure, tech-driven environments and am deeply committed to real-world impact through engineering, AI, and creative problem-solving. My approach combines rigorous analytical thinking with practical implementation, always focusing on solutions that matter.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify max-w-3xl mx-auto">
              My technical foundation was built through multiple years competing globally in VEX Robotics, where I earned various international awards in programming and robotics design, culminating in a Top 30 global ranking out of 16,000+ teams. This experience developed my problem-solving skills, technical precision, and ability to work under pressure while collaborating with international teams.
            </p>
            
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed text-justify max-w-3xl mx-auto">
              A defining moment in my career was being selected as one of only 3 students from all of Puerto Rico for the prestigious ESTEEM-Ser Quest program at University of Maryland. During this intensive 6-week program, I collaborated with exceptionally gifted students from across the United States, developing advanced superhydrophobic and hydrophilic fiber technology for oil-water separation. Our research breakthrough is now being implemented in ships for ocean oil spill cleanup operations, demonstrating tangible real-world impact that continues to drive my passion for engineering solutions that matter.
            </p>
            
            <div className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto">
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div className="text-xl font-bold text-primary">PSU + Inter</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Dual University</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div className="text-xl font-bold text-primary">Top 30</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">VEX Global</div>
              </div>
              <div className="text-center p-4 bg-slate-50 dark:bg-slate-700 rounded-xl">
                <div className="text-xl font-bold text-primary">Real Impact</div>
                <div className="text-sm text-slate-600 dark:text-slate-400">Research in Use</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
