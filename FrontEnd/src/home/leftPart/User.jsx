import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function User({ user }) {
  const { selectedConversation, setSelectedConversation } = useConversation();
  const isSelected = selectedConversation?._id === user._id;
  const {socket, onlineUsers}=useSocketContext()
  const isOnline=onlineUsers.includes(user._id)

  return (
    <div
      className={`p-4 rounded-lg shadow-md cursor-pointer duration-300 transform hover:scale-105 ${
        isSelected ? "bg-gradient-to-r from-slate-700 to-slate-800" : "bg-slate-900"
      }`}
      onClick={() => setSelectedConversation(user)}
    >
      <div className="flex items-center space-x-4">
        {/* Avatar */}
        <div className={`avatar ${isOnline?"online":""}`}>
          <div className="w-14 h-14 rounded-full border-2 border-yellow-500 overflow-hidden">
            <img
              src="png.png"
              alt="User Avatar"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* User Details */}
        <div>
          <h1 className="text-lg font-bold text-yellow-400">{user.fullName}</h1>
          <p className="text-sm text-gray-400">Click to chat</p>
        </div>
      </div>

      {/* Hover effect */}
      <div
        className={`mt-2 h-1 rounded-full transition-all duration-300 ${
          isSelected ? "bg-yellow-400" : "bg-transparent"
        }`}
      ></div>
    </div>
  );
}

export default User;
