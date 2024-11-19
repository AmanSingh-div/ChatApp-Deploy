import React, { useEffect } from 'react';
import ChatUser from './ChatUser';
import Messages from './Messages';
import TypingBox from './TypingBox';
import useConversation from '../../zustand/useConversation.js';
import { useAuth } from '../../context/AuthProvider.jsx';

function Right() {
  const { selectedConversation, setSelectedConversation } = useConversation();

  useEffect(() => {
    return () => setSelectedConversation(null);
  }, [setSelectedConversation]);

  return (
    <div className="w-[70%] h-full flex flex-col rounded-lg shadow-lg bg-gradient-to-t from-[#1E2A47] to-[#2F4F6C] text-white" >
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <ChatUser />
          <Messages />
          <TypingBox />
        </>
      )}
    </div>
  );
}
export default Right;

const NoChatSelected = () => {
  const [authUser] = useAuth();
  return (
    <div className="flex justify-center items-center h-full bg-gradient-to-b from-[#2F4F6C] to-[#1E2A47] rounded-lg p-6">
      <div className="text-center">
        <h1 className="text-3xl font-semibold mb-4">
          Welcome, <span className="text-teal-400">{authUser.user.fullName}</span>
        </h1>
        <div className="flex justify-center items-center space-x-2 mb-6">
          <span className="text-xl text-gray-300">Select a conversation to start chatting</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6 text-gray-300 animate__animated animate__bounce animate__infinite animate__slow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
        <p className="text-gray-400 text-lg">It's easy to get started. Click on a chat to begin!</p>
      </div>
    </div>
  );
};