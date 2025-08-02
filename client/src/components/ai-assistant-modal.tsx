import { useState } from "react";
import { X, Send, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface AIAssistantModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialQuery?: string;
}

const sampleQuestions = [
  "What are Julian's technical strengths?",
  "Can I see his résumé?",
  "What kind of projects has Julian worked on?",
  "Tell me about Julian's background in engineering.",
  "What makes Julian unique as a candidate?",
  "What programming languages does Julian know?"
];

export function AIAssistantModal({ isOpen, onClose, initialQuery = "" }: AIAssistantModalProps) {
  const [query, setQuery] = useState(initialQuery);
  const [messages, setMessages] = useState<Array<{type: 'user' | 'assistant', content: string}>>([]);
  const [isLoading, setIsLoading] = useState(false);

  if (!isOpen) return null;

  const handleSendMessage = async (messageText?: string) => {
    const textToSend = messageText || query;
    if (!textToSend.trim()) return;

    setMessages(prev => [...prev, { type: 'user', content: textToSend }]);
    setQuery('');
    setIsLoading(true);

    // Future implementation: actual AI assistant integration
    setTimeout(() => {
      const response = "I'm Julian's AI assistant! I'm currently being set up to answer questions about Julian's background, skills, and experience. Please contact Julian directly for now at the contact section below.";
      setMessages(prev => [...prev, { type: 'assistant', content: response }]);
      setIsLoading(false);
    }, 1000);
  };

  const handleQuestionClick = (question: string) => {
    handleSendMessage(question);
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200 dark:border-slate-700">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Sparkles className="w-6 h-6 text-primary" />
              <div className="absolute -inset-1 bg-primary/20 rounded-full blur opacity-40"></div>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                Julian's AI Assistant
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Ask anything about Julian's background and experience
              </p>
            </div>
          </div>
          <Button
            onClick={onClose}
            variant="ghost"
            size="sm"
            className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        {/* Messages Area */}
        <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
          {messages.length === 0 ? (
            <div className="space-y-4">
              <p className="text-slate-600 dark:text-slate-300 text-center">
                Welcome! Ask me anything about Julian. Here are some popular questions:
              </p>
              <div className="grid grid-cols-1 gap-3">
                {sampleQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuestionClick(question)}
                    className="text-left p-3 bg-slate-50 dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600 rounded-lg transition-colors duration-200 text-sm text-slate-700 dark:text-slate-300"
                  >
                    {question}
                  </button>
                ))}
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-xs lg:max-w-md px-4 py-2 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-primary text-white'
                        : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100'
                    }`}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl px-4 py-2">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse"></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                      <div className="w-2 h-2 bg-slate-400 rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Input Area */}
        <div className="border-t border-slate-200 dark:border-slate-700 p-6">
          <div className="flex space-x-3">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              placeholder="Ask about Julian's experience, skills, or projects..."
              className="flex-1 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white dark:bg-slate-700 text-slate-900 dark:text-slate-100"
            />
            <Button
              onClick={() => handleSendMessage()}
              disabled={!query.trim() || isLoading}
              className="px-4 py-2"
            >
              <Send className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}