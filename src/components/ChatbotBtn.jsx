import React from 'react';
import { motion } from 'framer-motion';

const ChatbotBtn = () => {
  return (
    <motion.button
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-brand text-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-brand-dark transition-colors border-2 border-white"
      aria-label="Chat with me"
      onClick={() => console.log("Chatbot clicked. Functionality pending.")}
    >
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
      </svg>
    </motion.button>
  );
};

export default ChatbotBtn;
