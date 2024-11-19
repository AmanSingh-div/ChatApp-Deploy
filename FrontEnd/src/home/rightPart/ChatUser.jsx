import React from "react";
import useConversation from "../../zustand/useConversation.js";
import { useSocketContext } from "../../context/SocketContext.jsx";

function ChatUser() {
  const { selectedConversation } = useConversation();
  const {onlineUsers}=useSocketContext()
  
  
  const getOnlineUsersStatus=(userId)=>{
    return onlineUsers.includes(userId)?"online":"offline"
  }
  const colorOnlineUsersStatus=(userId)=>{
    return onlineUsers.includes(userId)?"bg-green-400" :  "bg-red-600"
  }

  return (
    <div className="flex items-center justify-between p-4 h-[10vh] bg-gradient-to-r from-black via-slate-900 to-blue-400 shadow-lg rounded-lg border border-gray-700 transition-all duration-300">
      {/* Avatar Section */}
      <div className="flex items-center space-x-4">
        <div className="avatar">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-yellow-500 shadow-md">
            <img
              src={
                selectedConversation?.avatarUrl ||
                "bat.jpg"
              }
              alt="User Avatar"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* User Info Section */}
        <div>
          {selectedConversation ? (
            <>
              <h1 className="text-lg font-semibold text-white">
                {selectedConversation.fullName}
              </h1>
              <span className="text-sm text-gray-400">
                {getOnlineUsersStatus(selectedConversation._id)}
              </span>
            </>
          ) : (
            <h1 className="text-gray-500 italic">Select a conversation</h1>
          )}
        </div>
      </div>

      {/* Status Indicator */}
      {selectedConversation && (
        <div
          className={`h-3 w-3 rounded-full ${colorOnlineUsersStatus(selectedConversation._id)}`}
        ></div>
      )}
    </div>
  );
}

export default ChatUser;
