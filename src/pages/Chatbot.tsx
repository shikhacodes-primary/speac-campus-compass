
import { useState } from 'react';
import Layout from '../components/Layout';
import { MessageCircle, Send } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const Chatbot = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi there! I'm SPEAC's mental health support chatbot. How are you feeling today?",
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  
  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    // Add user message
    const userMessageId = Date.now();
    const userMessage: Message = {
      id: userMessageId,
      text: inputValue,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    
    // Simulate bot response (in a real app, this would call an API)
    setTimeout(() => {
      const botResponses = [
        "I understand how you're feeling. Would you like to talk more about that?",
        "Thank you for sharing. It takes courage to express your feelings.",
        "That sounds challenging. What do you think might help in this situation?",
        "I'm here to listen. Would you like me to suggest some resources that might help?"
      ];
      
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      
      const botMessage: Message = {
        id: userMessageId + 1,
        text: randomResponse,
        sender: 'bot',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, botMessage]);
    }, 1000);
  };
  
  return (
    <Layout>
      <section className="pt-16 pb-24">
        <div className="section-padding">
          <div className="text-center mb-12">
            <h1 className="heading-xl mb-6">
              SPEAC <span className="text-gradient">Mental Health</span> Chatbot
            </h1>
            <p className="text-lg mb-8 text-muted-foreground max-w-3xl mx-auto">
              Chat anonymously with our AI-powered support assistant. Available 24/7 for whenever you need someone to talk to.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-border">
              {/* Chat header */}
              <div className="bg-speac-purple text-white p-4 flex items-center">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium">SPEAC Support Assistant</div>
                  <div className="text-xs opacity-80">Online • Confidential • Secure</div>
                </div>
              </div>
              
              {/* Chat messages */}
              <div className="p-4 h-96 overflow-y-auto bg-speac-gray/50">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div 
                      key={message.id} 
                      className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div 
                        className={`max-w-xs md:max-w-md rounded-2xl p-4 ${
                          message.sender === 'user' 
                            ? 'bg-speac-purple text-white rounded-br-none' 
                            : 'bg-white shadow rounded-bl-none'
                        }`}
                      >
                        <p>{message.text}</p>
                        <div 
                          className={`text-xs mt-1 ${
                            message.sender === 'user' ? 'text-white/70' : 'text-muted-foreground'
                          }`}
                        >
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Chat input */}
              <div className="p-4 border-t">
                <form onSubmit={handleSendMessage} className="flex gap-2">
                  <input 
                    type="text" 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Type your message here..."
                    className="flex-1 rounded-full border border-border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-speac-purple/50"
                  />
                  <button 
                    type="submit" 
                    className="bg-speac-purple text-white p-3 rounded-full hover:bg-opacity-90"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </form>
              </div>
              
              <div className="px-4 py-3 bg-speac-blue/20 text-center text-sm text-muted-foreground">
                <p>This is a prototype. In a crisis, please call the National Crisis Hotline at 988.</p>
              </div>
            </div>
            
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground mb-2">Your privacy matters</p>
              <p className="text-sm text-muted-foreground">
                Conversations are anonymous and confidential. We do not store identifiable information.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Chatbot;
