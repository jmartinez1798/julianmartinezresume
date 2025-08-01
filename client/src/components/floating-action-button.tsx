import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Bot, X } from "lucide-react";
import { AIAssistant } from "./ai-assistant";

export function FloatingActionButton() {
  const [isAIOpen, setIsAIOpen] = useState(false);
  const [showWelcomePopup, setShowWelcomePopup] = useState(false);
  const [hasSeenWelcome, setHasSeenWelcome] = useState(false);

  useEffect(() => {
    // Check if user has seen the welcome popup in this session
    const hasSeenInSession = sessionStorage.getItem('ai-welcome-seen');
    
    if (!hasSeenInSession) {
      // Show welcome popup after 3 seconds
      const timer = setTimeout(() => {
        setShowWelcomePopup(true);
      }, 3000);

      return () => clearTimeout(timer);
    } else {
      setHasSeenWelcome(true);
    }
  }, []);

  const handleOpenAssistant = () => {
    setIsAIOpen(true);
    if (!hasSeenWelcome) {
      setHasSeenWelcome(true);
      setShowWelcomePopup(false);
      sessionStorage.setItem('ai-welcome-seen', 'true');
    }
  };

  const dismissWelcomePopup = () => {
    setShowWelcomePopup(false);
    setHasSeenWelcome(true);
    sessionStorage.setItem('ai-welcome-seen', 'true');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Welcome popup */}
      {showWelcomePopup && !hasSeenWelcome && (
        <div className="absolute bottom-20 right-0 w-80 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-lg shadow-xl z-40 p-4 animate-slideInRight">
          <div className="flex items-start space-x-3">
            <div className="text-2xl">👋</div>
            <div className="flex-1">
              <h4 className="font-semibold mb-1">I'm your AI Assistant!</h4>
              <p className="text-sm text-purple-100">
                Ask me anything about my experience, skills, or projects.
              </p>
            </div>
            <Button
              onClick={dismissWelcomePopup}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 p-1"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="mt-3 flex space-x-2">
            <Button
              onClick={handleOpenAssistant}
              size="sm"
              className="bg-white text-purple-600 hover:bg-gray-100 text-xs"
            >
              Chat Now
            </Button>
            <Button
              onClick={dismissWelcomePopup}
              variant="ghost"
              size="sm"
              className="text-white hover:bg-white/20 text-xs"
            >
              Maybe Later
            </Button>
          </div>
        </div>
      )}

      {/* Main AI Assistant button */}
      <Button
        onClick={handleOpenAssistant}
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