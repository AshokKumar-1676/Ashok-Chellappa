import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Send, User, MessageCircle } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'expert';
  time: string;
}

const ChatScreen: React.FC = () => {
  const navigate = useNavigate();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: "Hi there! I'm Sarah, your Plum Hair Expert. How can I help you with your Coconut Serum today?", sender: 'expert', time: '10:00 AM' }
  ]);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      text: input,
      sender: 'user',
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInput('');

    // Simulate response
    setTimeout(() => {
      const expertMsg: Message = {
        id: Date.now() + 1,
        text: "That's a great question! For best results, I recommend applying it to damp hair before styling. Would you like a video tutorial?",
        sender: 'expert',
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, expertMsg]);
    }, 1500);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-50 pb-20"> {/* pb-20 to clear bottom nav if visible, though we might hide it */}
      {/* Header */}
      <div className="px-6 py-4 bg-white border-b border-gray-100 flex items-center shadow-sm z-10">
        <button 
          onClick={() => navigate(-1)} 
          className="mr-4 text-gray-600 hover:bg-gray-50 p-1 rounded-full transition-all duration-200 active:scale-90"
        >
          <ChevronLeft size={24} />
        </button>
        <div className="flex items-center gap-3">
            <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white border-2 border-[#F3E5F5] overflow-hidden shadow-sm flex items-center justify-center">
                    <img 
                        src="https://plumgoodness.com/cdn/shop/files/Plum_Logo_Purple_160x.png?v=1614333649" 
                        alt="Plum Expert"
                        className="w-8 h-auto object-contain"
                    />
                </div>
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full animate-pulse"></div>
            </div>
            <div>
                <h1 className="text-sm font-bold text-gray-800">Sarah (Plum Expert)</h1>
                <p className="text-[10px] text-green-600 font-bold">Online Now</p>
            </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'} animate-slide-up`}>
            <div 
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm shadow-sm transition-all hover:shadow-md ${
                msg.sender === 'user' 
                  ? 'bg-plum-primary text-white rounded-tr-none' 
                  : 'bg-white text-gray-700 rounded-tl-none border border-gray-100'
              }`}
            >
              <p>{msg.text}</p>
              <p className={`text-[10px] mt-1 text-right ${msg.sender === 'user' ? 'text-white/70' : 'text-gray-400'}`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="p-4 bg-white border-t border-gray-100">
        <form onSubmit={handleSend} className="flex gap-2">
            <input 
                type="text" 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 bg-gray-100 border-0 rounded-full px-5 py-3 text-sm focus:ring-2 focus:ring-plum-primary/50 outline-none transition-shadow focus:shadow-inner"
            />
            <button 
                type="submit" 
                className="w-12 h-12 rounded-full bg-plum-primary text-white flex items-center justify-center hover:bg-plum-deep transition-all duration-200 shadow-lg active:scale-90 disabled:opacity-50 disabled:scale-100"
                disabled={!input.trim()}
            >
                <Send size={18} />
            </button>
        </form>
      </div>
    </div>
  );
};

export default ChatScreen;