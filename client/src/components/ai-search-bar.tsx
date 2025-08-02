import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { useMutation, useQuery } from '@tanstack/react-query';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

export function AISearchBar() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isExpanded, setIsExpanded] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Get quick questions
  const { data: quickQuestionsData } = useQuery({
    queryKey: ['/api/ai-assistant/quick-questions'],
    enabled: isExpanded
  });

  // AI Assistant mutation
  const aiAssistantMutation = useMutation({
    mutationFn: async (question: string) => {
      const response = await fetch('/api/ai-assistant', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ question }),
      });
      if (!response.ok) {
        throw new Error('Failed to get AI response');
      }
      return response.json();
    },
    onSuccess: (data: any, question) => {
      const aiMessage: Message = {
        id: Date.now().toString() + '-ai',
        type: 'ai',
        content: data.answer,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, aiMessage]);
    },
    onError: () => {
      const errorMessage: Message = {
        id: Date.now().toString() + '-error',
        type: 'ai',
        content: "I'm experiencing some technical difficulties. Please try again or contact Julián directly through the contact form.",
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    }
  });

  const handleSendMessage = (message: string) => {
    if (!message.trim()) return;

    // Expand the chat area if not already expanded
    if (!isExpanded) {
      setIsExpanded(true);
    }

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString() + '-user',
      type: 'user',
      content: message,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');

    // Send to AI
    aiAssistantMutation.mutate(message);
  };

  const handleQuickQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage(inputValue);
    }
  };

  const handleInputFocus = () => {
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  // Auto-scroll to bottom when new messages arrive
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollElement = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollElement) {
        scrollElement.scrollTop = scrollElement.scrollHeight;
      }
    }
  }, [messages]);

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      {/* Search Input */}
      <div className="relative">
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={handleInputFocus}
          placeholder="❓ Pregúntame algo sobre mí o mi experiencia..."
          className="w-full px-6 py-4 text-lg rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-primary dark:focus:border-primary transition-all duration-300 shadow-lg hover:shadow-xl bg-white dark:bg-slate-800"
          disabled={aiAssistantMutation.isPending}
        />
        <Button
          onClick={() => handleSendMessage(inputValue)}
          disabled={!inputValue.trim() || aiAssistantMutation.isPending}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 text-white rounded-lg px-4 py-2"
        >
          {aiAssistantMutation.isPending ? (
            <Loader2 className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
        </Button>
      </div>

      {/* Chat Area - Shows when expanded */}
      {isExpanded && (
        <Card className="mt-4 border-slate-200 dark:border-slate-700 shadow-xl">
          <CardContent className="p-0">
            {/* Quick Questions */}
            {messages.length === 0 && quickQuestionsData && (quickQuestionsData as any).questions && (
              <div className="p-4 border-b border-slate-200 dark:border-slate-700">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="h-4 w-4 text-primary" />
                  <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                    Preguntas sugeridas:
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {((quickQuestionsData as any).questions || []).slice(0, 4).map((question: string, index: number) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="cursor-pointer hover:bg-primary hover:text-white transition-colors text-xs p-2 justify-center"
                      onClick={() => handleQuickQuestion(question)}
                    >
                      {question}
                    </Badge>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            <ScrollArea ref={scrollAreaRef} className="h-64">
              <div className="p-4 space-y-4">
                {messages.length === 0 && (
                  <div className="text-center text-slate-500 dark:text-slate-400 py-8">
                    <Bot className="h-8 w-8 mx-auto mb-2 opacity-50" />
                    <p className="text-sm">Haz una pregunta para empezar a chatear conmigo</p>
                  </div>
                )}
                
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-3 ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    {message.type === 'ai' && (
                      <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-white" />
                      </div>
                    )}
                    
                    <div
                      className={`max-w-[80%] p-3 rounded-lg ${
                        message.type === 'user'
                          ? 'bg-primary text-white rounded-br-sm'
                          : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-slate-100 rounded-bl-sm'
                      }`}
                    >
                      <p className="text-sm leading-relaxed whitespace-pre-wrap">
                        {message.content}
                      </p>
                    </div>

                    {message.type === 'user' && (
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                        <User className="h-4 w-4 text-white" />
                      </div>
                    )}
                  </div>
                ))}

                {aiAssistantMutation.isPending && (
                  <div className="flex gap-3 justify-start">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-600 to-purple-700 flex items-center justify-center flex-shrink-0">
                      <Bot className="h-4 w-4 text-white" />
                    </div>
                    <div className="bg-slate-100 dark:bg-slate-700 p-3 rounded-lg rounded-bl-sm">
                      <div className="flex items-center gap-2">
                        <Loader2 className="h-4 w-4 animate-spin text-primary" />
                        <span className="text-sm text-slate-600 dark:text-slate-300">
                          Pensando...
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </div>
  );
}