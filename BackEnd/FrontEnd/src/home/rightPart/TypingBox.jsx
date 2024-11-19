import React, { useState } from 'react';
import { IoSend } from "react-icons/io5";
import UseSendMessage from '../../context/useSendMessage.js';

function TypingBox() {
  const [message, setMessage] = useState("");
  const { loading, sendMessages } = UseSendMessage();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      await sendMessages(message);
      setMessage("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center p-3">
      <div className="flex w-full items-center bg-gray-800 rounded-full shadow-md hover:shadow-lg transition-all">
        
        {/* Input Field */}
        <input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-12 px-8 bg-gray-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ease-in-out"
        />
        
        {/* Send Button */}
        <button type="submit" className="ml-4 p-2 text-blue-500 hover:text-blue-400 transition-colors">
          <IoSend className="text-3xl" />
        </button>
      </div>
    </form>
  );
}

export default TypingBox;
