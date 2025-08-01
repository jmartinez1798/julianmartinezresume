import { useState, useEffect } from "react";
import { X } from "lucide-react";

export function AIAssistantPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    // Check if user has previously dismissed the popup
    const dismissed = localStorage.getItem('ai-popup-dismissed');
    if (dismissed) {
      setIsDismissed(true);
      return;
    }

    // Show popup after 3 seconds
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    setIsDismissed(true);
    localStorage.setItem('ai-popup-dismissed', 'true');
  };

  if (isDismissed || !isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-24 right-4 sm:right-8 z-40 animate-fadeInUp">
      <div className="bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 p-4 max-w-xs relative">
        <button
          onClick={handleDismiss}
          className="absolute top-2 right-2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
        >
          <X className="h-4 w-4" />
        </button>
        
        <div className="pr-6">
          <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-1 flex items-center">
            <span className="mr-2">🤖</span>
            AI Assistant Available
          </h4>
          <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
            Click the purple button in the bottom right to chat with my AI Assistant.
          </p>
        </div>
        
        {/* Arrow pointing to FAB */}
        <div className="absolute -bottom-2 right-8 w-0 h-0 border-l-8 border-r-8 border-t-8 border-l-transparent border-r-transparent border-t-white dark:border-t-slate-800"></div>
      </div>
    </div>
  );
}