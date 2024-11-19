import React from "react";
import Search from "./Search";
import UserDetails from "./UserDetails";
import Logout from "./Logout";

function Left() {
  return (
    <div className="w-[30%] bg-gradient-to-b from-slate-900 via-black to-slate-800 text-gray-300 flex flex-col border-r border-gray-700 shadow-lg">
      {/* Search Section */}
      <div className="sticky top-0 z-10 bg-black/50 backdrop-blur-md border-b border-gray-700">
        <Search />
      </div>

      {/* User Details Section */}
      <div
        className="flex-1 overflow-y-auto space-y-4 py-4 px-2 scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
        style={{ minHeight: "calc(88vh - 13vh)" }}
      >
        <UserDetails />
      </div>

      {/* Logout Section */}
      <div className="sticky bottom-0 bg-black/50 backdrop-blur-md border-t border-gray-700 py-2">
        <Logout />
      </div>

      
    </div>
  );
}

export default Left;
