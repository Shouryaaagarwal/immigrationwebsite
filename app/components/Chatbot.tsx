"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import gsap from "gsap";
import { IoIosSend } from "react-icons/io";

const ChatbotButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { text: "Hello! I'm your virtual assistant. How can I help you today?", sender: 'bot' },
    { text: "Ask me anything and I'll do my best to assist you.", sender: 'bot' }
  ]);
  const [inputValue, setInputValue] = useState("");
  const chatWindowRef = useRef<HTMLDivElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const tl = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    tl.current = gsap.timeline({ paused: true });

    if (chatWindowRef.current) {
      tl.current
        .fromTo(chatWindowRef.current,
          { opacity: 0, y: 30, scale: 0.9 },
          { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "power3.out" }
        )
        .fromTo(chatWindowRef.current.querySelectorAll("*"),
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, stagger: 0.05, duration: 0.2 },
          "-=0.3"
        );
    }

    return () => {
      tl.current?.kill();
    };
  }, []);

  useEffect(() => {
    isOpen ? tl.current?.play() : tl.current?.reverse(0.2);
  }, [isOpen]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const newUserMessage = { text: inputValue, sender: 'user' as const };
    setMessages(prev => [...prev, newUserMessage]);
    setInputValue("");

    setTimeout(() => {
      const botResponses = [
        `I understand your question about "${inputValue}". Let me check that for you.`,
        "Thanks for your message! I'm looking into it...",
        "That's an interesting question. Here's what I found...",
        "I'm happy to help with that! Here's the information you need:"
      ];
      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)];
      setMessages(prev => [...prev, { text: randomResponse, sender: 'bot' }]);
    }, 1200);
  };

  return (
    <>
      {/* Toggle Button */}
      <div 
        className="fixed bottom-4 right-4 sm:bottom-8 sm:right-8 z-50 cursor-pointer group"
        onClick={handleToggle}
      >
        <div className="relative w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 hover:scale-110">
          <Image
            src="/chatbot.png"
            alt="Chatbot"
            fill
            className={`object-contain drop-shadow-xl transition-transform duration-300 ${
              isOpen ? "rotate-12" : "group-hover:rotate-6"
            }`}
          />
        </div>
      </div>

      {/* Chat Window */}
      <div 
        ref={chatWindowRef}
        className="fixed bottom-[calc(4rem+8px)] right-4 sm:bottom-[calc(8rem+10px)] sm:right-8 w-[calc(100vw-2rem)] max-w-xs sm:max-w-sm lg:max-w-md h-[26rem] sm:h-[32rem] bg-white/90 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200 z-50 transition-opacity overflow-hidden"
        style={{ opacity: 0, pointerEvents: isOpen ? "auto" : "none" }}
      >
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 bg-gradient-to-r from-[#155da9] to-[#b30c14] text-white shadow-sm">
            <div className="flex items-center gap-3">
              <div>
                <h3 className="text-sm font-semibold">AI Assistant</h3>
                <p className="text-xs text-white/80">Online now</p>
              </div>
            </div>
            <button onClick={handleToggle}>
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Chat Messages */}
          <div className="flex-1 px-4 py-3 overflow-y-auto bg-[#f9fafb]">
            <div className="space-y-3">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[75%] px-4 py-2 text-sm rounded-xl shadow-sm ${
                      message.sender === "user"
                        ? "bg-gradient-to-br from-[#ffd5d5] to-[#c30e16] text-white rounded-br-none"
                        : "bg-gradient-to-br from-[#c0dbf4] to-[#155da9] text-white rounded-bl-none"
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className="text-[10px] text-right mt-1 text-white/70">
                      {new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </div>

          {/* Input */}
          <div className="px-3 py-2 border-t border-gray-200 bg-white">
            <form onSubmit={handleSendMessage} className="flex items-center space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Type a message..."
                className="flex-1 h-11 rounded-full border border-gray-300 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#155da9]"
              />
              <button
                type="submit"
                className="p-3 rounded-full text-[#c30e16] hover:bg-gray-100 transition hover:rotate-45 disabled:opacity-50"
                disabled={!inputValue.trim()}
              >
                <IoIosSend className="h-6 w-6" />
              </button>
            </form>
            <p className="text-center text-xs text-gray-400 mt-1">Powered by AI Assistant</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatbotButton;
