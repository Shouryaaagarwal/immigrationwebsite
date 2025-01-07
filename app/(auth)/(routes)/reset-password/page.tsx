'use client';

import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setAuthUser } from "@/store/authSlice";
import axios from 'axios';
import { toast } from 'react-toastify';
import { Raleway } from "next/font/google";
import { MdKeyboardArrowLeft } from 'react-icons/md';

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

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

  //   try {
  //     const res = await axios.post(
  //       "/api/users/reset-password",
  //       {
  //         email,
  //         otp,
  //         password,
  //         passwordConfirm,
  //       },
  //       {
  //         withCredentials: true,
  //       }
  //     );

  //     // Dispatch the user data
  //     dispatch(setAuthUser(res.data.data.user));

  //     toast.success("Password reset successfully");
  //     router.push("/signin");
  //   } catch (error) {
  //     toast.error(
  //       error?.response?.data?.error ||
  //         "Reset Password failed. Please try again."
  //     );
  //   } finally {
  //     setLoading(false);
  //   }
  // };
   


  try {
    const res = await axios.post(
      "/api/users/reset-password",
      {
        email,
        otp,
        password,
        passwordConfirm,
      },
      {
        withCredentials: true,
      }
    );
  
    // Dispatch the user data
    dispatch(setAuthUser(res.data.data.user));
  
    toast.success("Password reset successfully");
    router.push("/signin");
  } catch (error: unknown) {
    if (axios.isAxiosError(error) && error.response) {
      // Axios-specific error with response
      toast.error(error.response.data?.error || "Reset Password failed. Please try again.");
    } else {
      // Generic error (fallback)
      toast.error("An unexpected error occurred. Please try again.");
    }
  } finally {
    setLoading(false);
  }
}
  const goback = () => {
    router.back();
  };

  return (
    <div
      className="relative h-screen w-full bg-cover bg-center"
      style={{
        backgroundImage: "url(/forget2.jpg)",
        fontFamily: raleway.style.fontFamily,
      }}
    >
      {/* Back Button */}
     
      {/* Centered Form Container with Black Background and Opacity */}
      <div className="absolute inset-0 flex justify-center items-center">   
      <button
        className="absolute top-5 left-5 text-black bg-opacity-70 px-4 py-2 rounded-md hover:underline flex items-center"
        onClick={goback}
      >
        <span className="text-xl text-black">
          <MdKeyboardArrowLeft />
        </span>
        Back
      </button>

        <div className="w-full max-w-md bg-black bg-opacity-40 rounded-md p-8 shadow-lg">
          <h2 className="text-5xl text-white mb-6 text-center">
            Reset <span>Password</span>
          </h2>

          <form className="mt-10" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-5">
              {/* OTP Input */}
              <div className="mb-4 w-full">
                <input
                  type="text"
                  id="otp"
                  placeholder="Enter OTP"
                  value={otp}
                  onChange={(e) => {
                    const value = e.target.value;
                    if (/^\d*$/.test(value)) setOtp(value); // Only allows numeric input
                  }}
                  className="w-full bg-black bg-opacity-10 text-center text-white placeholder:text-white border focus:bg-opacity-55  focus:border-2 focus:border-opacity-55 border-white rounded-lg shadow-sm focus:outline-none p-4 placeholder:tracking-widest placeholder:opacity-70 focus:bg-white focus:text-black focus:placeholder:text-black focus:placeholder:tracking-wide transition-all duration-300"
                />
              </div>

              {/* Password Input */}
              <div className="mb-4 w-full">
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-black bg-opacity-10 text-center text-white placeholder:text-white border border-white rounded-lg shadow-sm focus:outline-none p-4 placeholder:tracking-widest placeholder:opacity-70 focus:bg-white focus:text-black focus:placeholder:text-black focus:placeholder:tracking-wide transition-all duration-300"
                />
              </div>

              {/* Confirm Password Input */}
              <div className="mb-4 w-full">
                <input
                  type="password"
                  id="passwordConfirm"
                  placeholder="Confirm Password"
                  value={passwordConfirm}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                  className="w-full bg-black bg-opacity-10 text-center text-white placeholder:text-white border border-white rounded-lg shadow-sm focus:outline-none p-4 placeholder:tracking-widest placeholder:opacity-70 focus:bg-white focus:text-black focus:placeholder:text-black focus:placeholder:tracking-wide transition-all duration-300"
                />
              </div>
            </div>

            {/* Submit Button */}
            {loading ? (
              <button
                type="submit"
                className="border-[#155da9] border-2 w-full mt-10 text-[#155da9] px-10 py-4 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-1 rounded-full flex items-center justify-center"
                disabled
              >
                Changing Password...
              </button>
            ) : (
              <button
                type="submit"
                className="border-white border-2 w-full mt-10 text-white px-10 py-4 tracking-wide hover:bg-[#155da9] hover:border-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-1 rounded-full"
              >
                Change Password
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Page;
