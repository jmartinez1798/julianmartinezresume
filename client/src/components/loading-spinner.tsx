import { useState, useEffect } from "react";

export function LoadingSpinner() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1500); // Show loading for 1.5 seconds

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-white dark:bg-slate-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="relative">
          <div className="w-16 h-16 border-4 border-primary/20 rounded-full animate-spin border-t-primary mx-auto mb-4"></div>
          <div className="absolute inset-0 w-16 h-16 border-4 border-transparent rounded-full animate-ping border-t-primary/40 mx-auto"></div>
        </div>
        <div className="text-lg font-semibold text-primary mb-2">Julián Martínez</div>
        <div className="text-sm text-slate-600 dark:text-slate-400">Loading professional portfolio...</div>
      </div>
    </div>
  );
}