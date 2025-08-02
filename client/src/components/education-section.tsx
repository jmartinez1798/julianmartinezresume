import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, MapPin, Calendar } from 'lucide-react';

export function EducationSection() {
  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Education</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Academic foundation in mechanical and aerospace engineering
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Current Education */}
          <Card className="border-l-4 border-l-primary shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">
                      Bachelor of Mechanical Engineering
                    </CardTitle>
                    <p className="text-lg font-semibold text-primary mt-1">
                      Universidad Interamericana de Puerto Rico - Bayamón
                    </p>
                  </div>
                </div>
                <Badge variant="secondary" className="bg-green-100 text-green-800">
                  Current
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Expected: December 2025</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Bayamón, Puerto Rico</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-semibold text-gray-900">GPA: 3.2</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Academic Achievements:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Dean's List for Academic Excellence (2 Semesters)</li>
                  <li>Focus on design automation, CAD systems, and manufacturing processes</li>
                  <li>Advanced coursework in thermodynamics, materials science, and mechanical systems</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Mechanical Design</Badge>
                <Badge variant="outline">Manufacturing</Badge>
                <Badge variant="outline">Thermodynamics</Badge>
                <Badge variant="outline">Materials Science</Badge>
                <Badge variant="outline">CAD Systems</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Previous Education */}
          <Card className="border-l-4 border-l-blue-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">
                      Aerospace Engineering Studies
                    </CardTitle>
                    <p className="text-lg font-semibold text-blue-600 mt-1">
                      Pennsylvania State University
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="border-blue-200 text-blue-700">2017-2019</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">Completed foundational coursework</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <span className="text-gray-600">University Park, Pennsylvania</span>
                </div>
              </div>
              
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Foundation Studies:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Aerospace systems and vehicle design fundamentals</li>
                  <li>Advanced mathematics and engineering physics</li>
                  <li>Introduction to aerodynamics and propulsion systems</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Aerospace Systems</Badge>
                <Badge variant="outline">Vehicle Design</Badge>
                <Badge variant="outline">Aerodynamics</Badge>
                <Badge variant="outline">Engineering Physics</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Research Experience */}
          <Card className="border-l-4 border-l-purple-500 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <CardHeader className="pb-4">
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-purple-100 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-xl text-gray-900">
                      Research Program
                    </CardTitle>
                    <p className="text-lg font-semibold text-purple-600 mt-1">
                      University of Maryland - ESTEEM/SER-QUEST
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="border-purple-200 text-purple-700">
                  Research Intern
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <h4 className="font-semibold text-gray-900">Research Achievements:</h4>
                <ul className="list-disc list-inside text-gray-700 space-y-1">
                  <li>Winner of University of Maryland Innovation Symposium</li>
                  <li>Developed breakthrough oil-water separation technology</li>
                  <li>Research integrated into environmental cleanup processes by Barcasa</li>
                  <li>Presented findings at national STEM symposium</li>
                </ul>
              </div>

              <div className="flex flex-wrap gap-2 mt-4">
                <Badge variant="outline">Research & Development</Badge>
                <Badge variant="outline">Environmental Engineering</Badge>
                <Badge variant="outline">Innovation</Badge>
                <Badge variant="outline">Materials Science</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}