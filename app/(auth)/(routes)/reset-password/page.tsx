'use client';
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setAuthUser } from "@/store/authSlice";
import axios from 'axios';
import { toast } from 'react-toastify';

const Page = () => {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const [otp, setOtp] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useDispatch();


  const handleSubmit = async () => {
    // Validate input fields
    if (!otp || !email || !password || !passwordConfirm) {
      toast.error("All fields are required.");
      return;
    }

    if (password !== passwordConfirm) {
      toast.error("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
   
      const res = await axios.post("/api/users/reset-password", {
        email,
        otp,
        password,
        passwordConfirm
      }, {
        withCredentials: true,
      });

      // Dispatch the user data
      dispatch(setAuthUser(res.data.data.user));
      
      toast.success("Password reset successfully");
      router.push('/signin');

    } catch (error: any) {
      // Update error handling to use `response` for Axios errors
      toast.error(error?.response?.data?.error || "Reset Password failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-t from-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl p-6">
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg" style={{ height: "450px" }}>
          <h2 className="text-2xl font-bold mb-6 text-center">Reset Password</h2>

          <div className="mb-4">
            <label htmlFor="otp" className="block font-medium mb-2">OTP</label>
            <input
              type="text"
              placeholder="Enter OTP"
              value={otp}
              onChange={(e) => {
                const value = e.target.value;
                if (/^\d*$/.test(value)) setOtp(value); // Only allows numeric input
              }}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block font-medium mb-2">Password</label>
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="passwordConfirm" className="block font-medium mb-2">Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm password"
              value={passwordConfirm}
              onChange={(e) => setPasswordConfirm(e.target.value)}
              className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
            />
          </div>

          <button
            onClick={handleSubmit}
            disabled={loading} // Disable button while loading
            className={`w-full mt-6 ${loading ? 'bg-gray-400' : 'bg-red-700 hover:bg-red-500'} text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50`}
          >
            {loading ? 'Changing Password...' : 'Change Password'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
