"use client";

import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuthUser } from "@/store/authSlice";

const ForgotPassword = () => {
  const[email,setEmail] = useState("")
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

 


  const handleSubmit = async () => {
    setLoading(true);

    try {
   
      const res = await axios.post("/api/users/forget-password", { email }, {
        withCredentials: true,
      });
   

      toast.success("Reset password code sent to your email.");

      router.push(`/reset-password?email=${encodeURIComponent(email)}`);

    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Verification failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">
            Enter your email to get code to reset your password
        </h2>

        <div className="flex justify-center space-x-2 mb-6">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="block w-[80%] h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full py-2 mt-4 font-medium text-white rounded-lg ${
            loading ? "bg-gray-400" : "bg-red-600 hover:bg-red-500"
          }`}
        >
          {loading ? "Loading..." : "Verify Email"}
        </button>

     
      </div>
    </div>
  );
};

export default ForgotPassword
