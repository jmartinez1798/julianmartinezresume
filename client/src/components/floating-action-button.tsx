import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Bot } from "lucide-react";
import { AIAssistant } from "./ai-assistant";

export function FloatingActionButton() {
  const [isAIOpen, setIsAIOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Main AI Assistant button */}
      <Button
        onClick={() => setIsAIOpen(true)}
        className="bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white rounded-full w-14 h-14 shadow-lg transform transition-all duration-300 hover:scale-110"
        title="AI Assistant - Ask about Julián"
      >
        <Bot className="h-6 w-6" />
      </Button>

      {/* AI Assistant */}
      <AIAssistant isOpen={isAIOpen} onClose={() => setIsAIOpen(false)} />
    </div>
  );
}