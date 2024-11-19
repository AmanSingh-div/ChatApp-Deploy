import React from 'react';
import { useAuth } from '../../context/AuthProvider.jsx';

function Message({ message }) {
  const authUser = JSON.parse(localStorage.getItem("BuzzApp"));
  const itsMe = message.senderId === authUser.user._id;

  const chatAlignment = itsMe ? "chat-end" : "chat-start";
  const chatColor = itsMe ? "bg-gradient-to-r from-red-700 to-red-600" : "bg-gradient-to-r from-yellow-500 to-yellow-600";
  const messageTextColor = "text-white"; 
  const createdAt = new Date(message.createdAt);
  const formattedTime = createdAt.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`p-4 ${chatAlignment} ${itsMe ? "end" : "start"}`}>
      <div className={`chat-bubble ${chatColor} ${messageTextColor} rounded-xl p-4 shadow-md max-w-[80%] transition-all`}>
        {message.message}
      </div>
      <div className="chat-footer text-white outline-black">{formattedTime}</div>
    </div>
  );
}

export default Message;
