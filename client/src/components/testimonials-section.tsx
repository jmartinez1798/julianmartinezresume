import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    quote: "Julián is a fast learner who consistently turns ideas into tangible results.",
    name: "Faculty Mentor",
    role: "Mechanical Engineering Dept.",
  },
  {
    quote: "In robotics, his blend of design and programming elevated the team’s performance.",
    name: "Team Lead",
    role: "VEX Robotics",
  },
  {
    quote: "Sharp, reliable, and proactive — a strong contributor on any project.",
    name: "Research Supervisor",
    role: "Materials/Fluids Lab",
  },
];

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12">Testimonials</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-2 hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <p className="text-slate-700 dark:text-slate-300 italic mb-4">“{t.quote}”</p>
                <div className="text-sm text-slate-500 dark:text-slate-400">
                  <div className="font-semibold">{t.name}</div>
                  <div>{t.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}