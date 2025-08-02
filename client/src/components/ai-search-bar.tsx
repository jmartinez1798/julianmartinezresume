import { useState, useEffect } from "react";
import { Search, CornerDownLeft } from "lucide-react";
import { AIAssistantModal } from "./ai-assistant-modal";

const examplePrompts = [
  "Ask about Julian's background",
  "What are his main technical skills?",
  "Do you want to download his resume?",
  "What projects has Julian worked on?",
  "Ask about Julian"
];

export function AISearchBar() {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showCursor, setShowCursor] = useState(true);
  const [isFocused, setIsFocused] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [glowAnimation, setGlowAnimation] = useState(false);

  useEffect(() => {
    if (!isFocused) {
      const currentPrompt = examplePrompts[currentPromptIndex];
      
      if (isTyping) {
        if (displayText.length < currentPrompt.length) {
          const timer = setTimeout(() => {
            setDisplayText(currentPrompt.slice(0, displayText.length + 1));
          }, 100);
          return () => clearTimeout(timer);
        } else {
          // Finished typing current prompt, wait then start deleting
          const timer = setTimeout(() => {
            setIsTyping(false);
          }, 2000);
          return () => clearTimeout(timer);
        }
      } else {
        if (displayText.length > 0) {
          const timer = setTimeout(() => {
            setDisplayText(displayText.slice(0, -1));
          }, 50);
          return () => clearTimeout(timer);
        } else {
          // Finished deleting, move to next prompt
          setCurrentPromptIndex((prev) => (prev + 1) % examplePrompts.length);
          setIsTyping(true);
        }
      }
    }
  }, [displayText, isTyping, currentPromptIndex, isFocused]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(cursorTimer);
  }, []);

  // Subtle glow animation every few seconds
  useEffect(() => {
    const glowTimer = setInterval(() => {
      setGlowAnimation(true);
      setTimeout(() => setGlowAnimation(false), 2000);
    }, 5000);
    return () => clearInterval(glowTimer);
  }, []);

  const handleFocus = () => {
    setIsFocused(true);
    setDisplayText("");
    setIsModalOpen(true);
  };

  const handleBlur = () => {
    if (userInput === "") {
      setIsFocused(false);
      setDisplayText("");
      setIsTyping(true);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userInput.trim()) {
      setIsModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setIsFocused(false);
    setUserInput("");
  };

  return (
    <>
      <div className="relative max-w-2xl mx-auto mb-12">
        {/* Subtle background glow with animation */}
        <div className={`absolute -inset-1 bg-gradient-to-r from-slate-200 via-primary/30 to-slate-200 dark:from-slate-600 dark:via-primary/30 dark:to-slate-600 rounded-2xl blur-sm transition-all duration-2000 ${
          glowAnimation ? 'opacity-60 scale-105' : 'opacity-30'
        }`}></div>
        
        <form onSubmit={handleSubmit} className="relative">
          <div className="relative bg-white dark:bg-slate-800/90 backdrop-blur-sm border-2 border-slate-200 hover:border-primary/40 focus-within:border-primary/60 dark:border-slate-700 dark:hover:border-primary/40 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
            <div className="flex items-center px-6 py-3">
              <div className="flex items-center space-x-3 mr-4">
                <Search className="w-5 h-5 text-slate-400" />
              </div>
              
              <div className="flex-1 relative">
                <input
                  type="text"
                  value={userInput}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  className="w-full bg-transparent text-lg text-slate-700 dark:text-slate-200 placeholder-transparent focus:outline-none font-medium"
                  placeholder="Ask me anything about Julian..."
                />
                
                {/* Animated placeholder text */}
                {!isFocused && userInput === "" && (
                  <div className="absolute inset-0 flex items-center pointer-events-none">
                    <span className="text-lg text-slate-500 dark:text-slate-400 font-medium">
                      {displayText}
                      {showCursor && (
                        <span className="text-primary animate-pulse">|</span>
                      )}
                    </span>
                  </div>
                )}
              </div>
              
              {/* Enter key indicator */}
              <div className="ml-4 opacity-0 group-hover:opacity-60 transition-opacity duration-300">
                <CornerDownLeft className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* AI Assistant Modal */}
      <AIAssistantModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        initialQuery={userInput}
      />
    </>
  );
}