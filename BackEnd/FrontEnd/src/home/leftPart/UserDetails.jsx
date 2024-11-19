import React from "react";
import User from "./User";
import UseGetAllUsers from "../../context/useGetAllUsers";

function UserDetails() {
  const [allUsers, loading] = UseGetAllUsers();

  return (
    <div className="bg-slate-900 text-white rounded-lg shadow-md overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 bg-gradient-to-r from-slate-800 to-slate-700">
        <h1 className="text-lg font-semibold text-yellow-400">Chats</h1>
      </div>

      {/* User List */}
      <div
        className="py-2 px-4 overflow-y-auto"
        style={{ maxHeight: "calc(84vh - 13vh)" }}
      >
        {loading ? (
          <div className="flex justify-center items-center py-4">
            <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : allUsers.length > 0 ? (
          allUsers.map((user, index) => <User key={index} user={user} />)
        ) : (
          <p className="text-gray-400 text-center mt-4">No users found</p>
        )}
      </div>
    </div>
  );
}

export default UserDetails;
