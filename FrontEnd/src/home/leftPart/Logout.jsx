import React, { useState } from "react";
import { BiLogOut } from "react-icons/bi";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";


function Logout() {
  const [loading, setLoading] = useState(false);

  const handleLogout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("/api/user/logout");
      localStorage.removeItem("BuzzApp");
      Cookies.remove("jwt");
      setLoading(false);
      toast.success("Logout Successfully");
      window.location.reload();
    } catch (error) {
      console.log("Error in logout", error);
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-[10vh]">
      <button
        onClick={handleLogout}
        disabled={loading}
        className={`flex items-center space-x-2 px-6 py-2 text-white font-semibold rounded-full transition-all duration-300 ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-gradient-to-r from-red-600 to-red-800 hover:shadow-lg hover:scale-105"
        }`}
      >
        <BiLogOut className="text-2xl" />
        <span>{loading ? "Logging Out..." : "Logout"}</span>
      </button>
    </div>
  );
}

export default Logout;
