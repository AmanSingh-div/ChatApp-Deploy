import React, { useState } from "react";
import useGetAllUsers from "../../context/useGetAllUsers"
import useConversation from "../../zustand/useConversation.js";
import toast from "react-hot-toast";

function Search() {
  const [search,setSearch]=useState("")
  const [allUsers]=useGetAllUsers()
  const {setSelectedConversation}=useConversation()

  const handleSubmit=(e)=>
  {
    e.preventDefault()
    if (!search) return;
    const conversation = allUsers.find((user) =>
      user.fullName?.toLowerCase().includes(search.toLowerCase())
    );
    if (conversation) {
      setSelectedConversation(conversation);
      setSearch("");
    } else {
      toast.error("No User Found")
    }
  };


  return (
    <div className="h-[10vh] mb-4 flex items-center justify-center">
      <div className="w-full max-w-md px-4">
        <form onSubmit={handleSubmit}>
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={(e)=>setSearch(e.target.value)}
              className="w-full py-3 pl-12 pr-4 text-sm text-gray-200 bg-slate-800 border border-slate-700 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-300"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400"
            >
              <path
                fillRule="evenodd"
                d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Search;
