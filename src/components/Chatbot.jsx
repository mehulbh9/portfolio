import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiMessageCircle, FiX, FiSend } from 'react-icons/fi'
import { getChatResponse } from '../data/profileKnowledge'

const INITIAL_MESSAGE = {
  role: 'bot',
  text: "Hi! I'm Mehul's portfolio assistant. Ask me about his experience, skills, projects, or background—I'm here to help recruiters and hiring managers learn more. What would you like to know?",
  timestamp: new Date()
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([INITIAL_MESSAGE])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)
  const inputRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus()
    }
  }, [isOpen])

  const handleSend = (e) => {
    e?.preventDefault()
    const text = input.trim()
    if (!text) return

    setInput('')
    setMessages(prev => [...prev, { role: 'user', text, timestamp: new Date() }])
    setIsTyping(true)

    // Simulate slight delay for natural feel
    setTimeout(() => {
      const response = getChatResponse(text)
      setMessages(prev => [...prev, { role: 'bot', text: response, timestamp: new Date() }])
      setIsTyping(false)
    }, 400)
  }

  const suggestedQuestions = [
    "Tell me about your experience",
    "What are your key skills?",
    "Why should we hire you?",
    "What are you working on at AMD?"
  ]

  return (
    <>
      {/* Floating chat button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-4 sm:right-6 z-50 w-14 h-14 rounded-full bg-cyan-500 text-slate-900 shadow-lg shadow-cyan-500/30 hover:shadow-cyan-500/50 flex items-center justify-center transition-all duration-300 hover:scale-105 touch-manipulation"
        aria-label="Open chat"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? <FiX size={24} /> : <FiMessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-4 left-4 sm:left-auto sm:right-6 z-50 w-auto max-w-md h-[min(70vh,500px)] flex flex-col rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden"
          >
            {/* Header */}
            <div className="px-4 py-3 bg-slate-800 text-white flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/30 flex items-center justify-center">
                  <FiMessageCircle size={20} />
                </div>
                <div>
                  <h3 className="font-semibold">Ask about Mehul</h3>
                  <p className="text-xs text-slate-300">Portfolio assistant for recruiters</p>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm ${
                      msg.role === 'user'
                        ? 'bg-primary text-white rounded-br-md'
                        : 'bg-white border border-slate-200 text-slate-700 shadow-sm rounded-bl-md'
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-md px-4 py-2.5 shadow-sm">
                    <span className="inline-flex gap-1">
                      <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                      <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '150ms' }} />
                      <span className="w-2 h-2 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '300ms' }} />
                    </span>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Suggested questions (show only when few messages) */}
            {messages.length <= 1 && (
              <div className="px-4 pb-2">
                <p className="text-xs text-slate-500 mb-2">Try asking:</p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((q, i) => (
                    <button
                      key={i}
                      onClick={() => setInput(q)}
                      className="text-xs px-3 py-1.5 rounded-full bg-slate-200/80 text-slate-700 hover:bg-slate-300 transition-colors"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSend} className="p-4 border-t border-slate-200 bg-white">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Ask about experience, skills, projects..."
                  className="flex-1 px-4 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-primary focus:border-primary outline-none text-sm"
                  disabled={isTyping}
                />
                <button
                  type="submit"
                  disabled={!input.trim() || isTyping}
                  className="px-4 py-2.5 rounded-xl bg-primary text-white hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  aria-label="Send"
                >
                  <FiSend size={18} />
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Chatbot
