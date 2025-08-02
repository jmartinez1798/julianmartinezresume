import { useState, useEffect } from "react";
import { Search, Sparkles } from "lucide-react";

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

  const handleFocus = () => {
    setIsFocused(true);
    setDisplayText("");
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
    // Future implementation: trigger AI assistant popup
    console.log("Search query:", userInput);
  };

  return (
    <div className="relative max-w-3xl mx-auto mb-12">
      {/* Subtle background glow */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-2xl blur-sm opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative bg-white dark:bg-slate-800/90 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/40 focus-within:border-primary/60 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 group">
          <div className="flex items-center px-6 py-4">
            <div className="flex items-center space-x-3 mr-4">
              <div className="relative">
                <Sparkles className="w-6 h-6 text-primary animate-pulse" />
                <div className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-40"></div>
              </div>
              <Search className="w-5 h-5 text-slate-400" />
            </div>
            
            <div className="flex-1 relative">
              <input
                type="text"
                value={userInput}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                className="w-full bg-transparent text-lg text-slate-700 dark:text-slate-200 placeholder-transparent focus:outline-none"
                placeholder="Ask me anything about Julian..."
              />
              
              {/* Animated placeholder text */}
              {!isFocused && userInput === "" && (
                <div className="absolute inset-0 flex items-center pointer-events-none">
                  <span className="text-lg text-slate-500 dark:text-slate-400">
                    {displayText}
                    {showCursor && (
                      <span className="text-primary animate-pulse">|</span>
                    )}
                  </span>
                </div>
              )}
            </div>
            
            {/* Submit indicator */}
            <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </form>
      
      {/* Helper text */}
      <p className="text-center text-sm text-slate-500 dark:text-slate-400 mt-4">
        AI Assistant • Ask anything about Julian's background, skills, or projects
      </p>
    </div>
  );
}