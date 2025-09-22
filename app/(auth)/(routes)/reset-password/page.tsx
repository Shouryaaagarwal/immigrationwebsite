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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
      const res = await axios.post(
        "/api/users/reset-password",
        { email, otp, password, passwordConfirm },
        { withCredentials: true }
      );

      dispatch(setAuthUser(res.data.data.user));

      toast.success("Password reset successfully");
      router.push("/signin");
    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        toast.error(error.response.data?.error || "Reset Password failed. Please try again.");
      } else {
        toast.error("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

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
     

      {/* Centered Form Container */}
      <div className="absolute inset-0 flex justify-center items-center px-4 sm:px-6 md:px-10">   
      <button
        className="absolute top-5 left-5 text-white bg-opacity-70 px-4 py-2 rounded-md hover:underline flex items-center sm:px-6 sm:py-3 sm:text-lg"
        onClick={goback}
      >
        <span className="text-xl sm:text-2xl text-white">
          <MdKeyboardArrowLeft />
        </span>
        Back
      </button>
        <div className="w-full max-w-md bg-black bg-opacity-40 rounded-md p-6 sm:p-8 md:p-10 shadow-lg">
          <h2 className="text-4xl sm:text-5xl text-white mb-6 text-center">
            Reset <span>Password</span>
          </h2>

          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 sm:gap-5">
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
                  className="w-full bg-black bg-opacity-10 text-center text-white placeholder:text-white border border-white rounded-lg shadow-sm focus:outline-none p-3 sm:p-4 placeholder:tracking-widest placeholder:opacity-70 focus:bg-white focus:text-black focus:placeholder:text-black focus:placeholder:tracking-wide transition-all duration-300"
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
                  className="w-full bg-black bg-opacity-10 text-center text-white placeholder:text-white border border-white rounded-lg shadow-sm focus:outline-none p-3 sm:p-4 placeholder:tracking-widest placeholder:opacity-70 focus:bg-white focus:text-black focus:placeholder:text-black focus:placeholder:tracking-wide transition-all duration-300"
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
                  className="w-full bg-black bg-opacity-10 text-center text-white placeholder:text-white border border-white rounded-lg shadow-sm focus:outline-none p-3 sm:p-4 placeholder:tracking-widest placeholder:opacity-70 focus:bg-white focus:text-black focus:placeholder:text-black focus:placeholder:tracking-wide transition-all duration-300"
                />
              </div>
            </div>

            {/* Submit Button */}
            {loading ? (
              <button
                type="submit"
                className="border-[#155da9] border-2 w-full mt-8 sm:mt-10 text-[#155da9] px-6 py-3 sm:px-10 sm:py-4 text-sm sm:text-base tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-1 rounded-full flex items-center justify-center"
                disabled
              >
                Changing Password...
              </button>
            ) : (
              <button
                type="submit"
                className="border-white border-2 w-full mt-8 sm:mt-10 text-white px-6 py-3 sm:px-10 sm:py-4 text-sm sm:text-base tracking-wide hover:bg-[#155da9] hover:border-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-1 rounded-full"
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
   