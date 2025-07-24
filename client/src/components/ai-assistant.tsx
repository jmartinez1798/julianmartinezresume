import { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { useMutation, useQuery } from '@tanstack/react-query';
import { apiRequest } from '@/lib/queryClient';

interface Message {
  id: string;
  type: 'user' | 'ai';
  content: string;
  timestamp: Date;
}

interface AIAssistantProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AIAssistant({ isOpen, onClose }: AIAssistantProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'ai',
      content: "Hi! I'm Julián's AI assistant. I can help answer questions about his background, skills, and experience. What would you like to know?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Get quick questions
  const { data: quickQuestionsData } = useQuery({
    queryKey: ['/api/ai-assistant/quick-questions'],
    enabled: isOpen
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

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (scrollAreaRef.current) {
      const scrollContainer = scrollAreaRef.current.querySelector('[data-radix-scroll-area-viewport]');
      if (scrollContainer) {
        scrollContainer.scrollTop = scrollContainer.scrollHeight;
      }
    }
  }, [messages]);

  // Focus input when opened
  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <Card className="fixed bottom-20 right-4 w-80 h-96 shadow-xl border-primary/20 z-50 animate-slideInUp">
      <CardHeader className="pb-3 bg-gradient-to-r from-primary to-primary/80 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-2 text-sm">
          <Bot className="h-4 w-4" />
          Ask about Julián
          <Sparkles className="h-3 w-3 ml-auto animate-pulse" />
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-0 flex flex-col h-full">
        {/* Messages Area */}
        <ScrollArea ref={scrollAreaRef} className="flex-1 p-3">
          <div className="space-y-3">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-2 rounded-lg text-sm ${
                    message.type === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-800 dark:text-slate-200'
                  }`}
                >
                  <div className="flex items-start gap-2">
                    {message.type === 'ai' && <Bot className="h-3 w-3 mt-0.5 flex-shrink-0" />}
                    {message.type === 'user' && <User className="h-3 w-3 mt-0.5 flex-shrink-0" />}
                    <span className="leading-relaxed">{message.content}</span>
                  </div>
                </div>
              </div>
            ))}
            
            {aiAssistantMutation.isPending && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-700 p-2 rounded-lg">
                  <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                    <Bot className="h-3 w-3" />
                    <Loader2 className="h-3 w-3 animate-spin" />
                    <span>Thinking...</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        {/* Quick Questions */}
        {quickQuestionsData && (quickQuestionsData as any).questions && messages.length === 1 && (
          <div className="p-3 border-t bg-slate-50 dark:bg-slate-800">
            <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Quick questions:</p>
            <div className="flex flex-wrap gap-1">
              {((quickQuestionsData as any).questions as string[]).slice(0, 3).map((question: string, index: number) => (
                <Badge
                  key={index}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-white transition-colors text-xs px-2 py-1"
                  onClick={() => handleQuickQuestion(question)}
                >
                  {question}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {/* Input Area */}
        <div className="p-3 border-t">
          <div className="flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask about Julián's background, skills..."
              className="flex-1 px-3 py-2 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-primary/20 dark:bg-slate-700 dark:border-slate-600"
              disabled={aiAssistantMutation.isPending}
            />
            <Button
              size="sm"
              onClick={() => handleSendMessage(inputValue)}
              disabled={!inputValue.trim() || aiAssistantMutation.isPending}
              className="px-3"
            >
              <Send className="h-3 w-3" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}