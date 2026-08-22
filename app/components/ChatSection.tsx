"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { chatbotData } from "../data";

type Message = {
  id: number;
  text: string;
  sender: "user" | "bot";
};

export default function ChatSection() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 0,
      text: chatbotData.welcomeMessage,
      sender: "bot",
    },
  ]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const findAnswer = (question: string): string => {
    const lowerQuestion = question.toLowerCase();

    // Search through all answers
    for (const [key, data] of Object.entries(chatbotData.answers)) {
      const matches = data.keywords.some((keyword: string) =>
        lowerQuestion.includes(keyword)
      );
      if (matches) {
        return data.answer;
      }
    }

    // Default response for questions it doesn't understand
    return "That's a great question! 😊 I'd recommend checking out the relevant section of my portfolio to learn more. Feel free to ask me about my projects, experience, skills, education, photography, leadership, or what kind of person I am!";
  };

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage: Message = {
      id: messages.length,
      text: input,
      sender: "user",
    };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsTyping(true);

    setTimeout(() => {
      const response = findAnswer(input);
      const botMessage: Message = {
        id: messages.length + 1,
        text: response,
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
      setIsTyping(false);
    }, 600 + Math.random() * 400);
  };

  const handleQuestionClick = (question: string) => {
    setInput(question);
    setTimeout(() => {
      const userMessage: Message = {
        id: messages.length,
        text: question,
        sender: "user",
      };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsTyping(true);

      setTimeout(() => {
        const response = findAnswer(question);
        const botMessage: Message = {
          id: messages.length + 1,
          text: response,
          sender: "bot",
        };
        setMessages((prev) => [...prev, botMessage]);
        setIsTyping(false);
      }, 600 + Math.random() * 400);
    }, 100);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <section id="chat-section" className="py-20 px-4 bg-cream dark:bg-deep-slate">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <h2 className="text-4xl font-bold text-dark-brown dark:text-cream mb-4">
            💬 Ask Me Anything
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-warm-brown to-sunset mx-auto rounded-full" />
          <p className="text-gray-600 dark:text-gray-400 mt-4 max-w-2xl mx-auto">
            I'm Sadia's AI assistant. Ask me anything about her work, projects, skills, or what she's like as a person!
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700"
        >
          {/* Suggested Questions */}
          <div className="p-4 bg-cream dark:bg-deep-slate border-b border-gray-200 dark:border-gray-700 flex flex-wrap gap-2">
            {chatbotData.suggestedQuestions.slice(0, 8).map((question, index) => (
              <button
                key={index}
                onClick={() => handleQuestionClick(question)}
                className="text-xs px-3 py-1 bg-white dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors shadow-sm"
              >
                {question}
              </button>
            ))}
          </div>

          {/* Messages */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-4 bg-cream dark:bg-deep-slate">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === "user"
                      ? "bg-warm-brown text-white rounded-br-none"
                      : "bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-200 rounded-bl-none shadow-sm"
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-gray-800 p-3 rounded-2xl rounded-bl-none shadow-sm">
                  <div className="flex gap-1">
                    <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 dark:bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 flex gap-2">
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyPress}
              placeholder="Or type your own question..."
              className="flex-1 px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-warm-brown dark:focus:ring-terracotta text-sm"
            />
            <button
              onClick={handleSend}
              className="px-4 py-2 bg-warm-brown text-white rounded-lg hover:bg-[#6B4F10] transition-colors text-sm font-medium"
            >
              Send
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}