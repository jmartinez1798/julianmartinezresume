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
  const [currentPlaceholder, setCurrentPlaceholder] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const placeholderTexts = [
    'Ask me about Julián...',
    'Where did he study?',
    'What technologies does he master?',
    'What are his most recent projects?',
    'What is he looking for in his next job?',
    'Ask about his resume...'
  ];

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
    setIsFocused(true);
    if (!isExpanded) {
      setIsExpanded(true);
    }
  };

  const handleInputBlur = () => {
    if (inputValue === '') {
      setIsFocused(false);
    }
  };

  // Typewriter effect for placeholder
  useEffect(() => {
    if (isFocused || inputValue !== '') return;

    let currentIndex = 0;
    let currentCharIndex = 0;
    let isDeleting = false;
    let timeout: NodeJS.Timeout;

    const typeWriter = () => {
      const currentText = placeholderTexts[currentIndex];
      
      if (!isDeleting) {
        // Typing forward
        setCurrentPlaceholder(currentText.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        
        if (currentCharIndex === currentText.length) {
          // Wait before starting to delete
          timeout = setTimeout(() => {
            isDeleting = true;
            typeWriter();
          }, 2000);
          return;
        }
      } else {
        // Deleting
        setCurrentPlaceholder(currentText.substring(0, currentCharIndex - 1));
        currentCharIndex--;
        
        if (currentCharIndex === 0) {
          isDeleting = false;
          currentIndex = (currentIndex + 1) % placeholderTexts.length;
          // Wait before typing next text
          timeout = setTimeout(typeWriter, 500);
          return;
        }
      }
      
      timeout = setTimeout(typeWriter, isDeleting ? 50 : 100);
    };

    // Start the typewriter effect
    timeout = setTimeout(typeWriter, 1000);

    return () => clearTimeout(timeout);
  }, [isFocused, inputValue]);

  // Initialize placeholder
  useEffect(() => {
    if (!isFocused && inputValue === '') {
      setIsTyping(true);
    } else {
      setIsTyping(false);
      setCurrentPlaceholder('What would you like to know about me?');
    }
  }, [isFocused, inputValue]);

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
    <div className="w-full max-w-3xl mx-auto mb-8">
      {/* Search Input */}
      <div className="relative group">
        <Input
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          onFocus={handleInputFocus}
          onBlur={handleInputBlur}
          placeholder={isFocused || inputValue ? 'What would you like to know about me?' : currentPlaceholder}
          className="w-full px-6 pr-20 py-7 text-xl rounded-2xl border-2 border-slate-300 dark:border-slate-600 focus:border-primary dark:focus:border-primary transition-all duration-300 shadow-2xl hover:shadow-3xl bg-white dark:bg-slate-800 focus:ring-4 focus:ring-primary/20 hover:border-primary/50 font-medium placeholder:text-slate-400 hover:scale-[1.02] focus:scale-[1.02]"
          disabled={aiAssistantMutation.isPending}
        />
        <Button
          onClick={() => handleSendMessage(inputValue)}
          disabled={!inputValue.trim() || aiAssistantMutation.isPending}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary/90 text-white rounded-xl px-5 py-4 transition-all duration-300 hover:scale-110 active:scale-95 shadow-xl hover:shadow-2xl"
        >
          {aiAssistantMutation.isPending ? (
            <Loader2 className="h-6 w-6 animate-spin" />
          ) : (
            <Send className="h-6 w-6 transform transition-transform duration-200 group-hover:translate-x-1" />
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
                    Suggested questions:
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