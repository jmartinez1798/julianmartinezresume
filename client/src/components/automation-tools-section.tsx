import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Cpu, Zap, Github } from "lucide-react";

const automationTools = [
  {
    title: "Herramientas de Automatización",
    icon: <Cpu className="text-white text-xl" />,
    color: "bg-blue-500",
    tools: [
      { name: "Arduino", level: "Básico-Intermedio", color: "bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200" },
      { name: "PLC Logic", level: "Básico", color: "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200" },
    ]
  },
  {
    title: "Software de Diseño",
    icon: <Zap className="text-white text-xl" />,
    color: "bg-orange-500",
    tools: [
      { name: "SolidWorks", level: "Avanzado", color: "bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200" },
      { name: "ANSYS Fluent", level: "Intermedio", color: "bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200" },
    ]
  },
  {
    title: "Herramientas Complementarias",
    icon: <Github className="text-white text-xl" />,
    color: "bg-gray-600",
    tools: [
      { name: "GitHub", level: "Intermedio", color: "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200" },
      { name: "Canva", level: "Avanzado", color: "bg-slate-100 dark:bg-slate-900 text-slate-800 dark:text-slate-200" },
    ]
  }
];

export function AutomationToolsSection() {
  return (
    <div className="bg-slate-50 dark:bg-slate-700 rounded-2xl p-6 mt-8">
      <h4 className="text-lg font-bold mb-4 text-center">🤖 Herramientas de Automatización & Tecnología</h4>
      <div className="grid md:grid-cols-3 gap-4">
        {automationTools.map((category, index) => (
          <Card key={category.title} className="h-full">
            <CardContent className="p-4">
              <div className="text-center mb-3">
                <div className={`w-10 h-10 ${category.color} rounded-xl flex items-center justify-center mx-auto mb-2`}>
                  {category.icon}
                </div>
                <h5 className="font-semibold text-sm">{category.title}</h5>
              </div>
              <div className="space-y-2">
                {category.tools.map((tool) => (
                  <div key={tool.name} className="flex justify-between items-center">
                    <Badge variant="secondary" className={`${tool.color} text-xs`}>
                      {tool.name}
                    </Badge>
                    <span className="text-xs text-slate-500">{tool.level}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}