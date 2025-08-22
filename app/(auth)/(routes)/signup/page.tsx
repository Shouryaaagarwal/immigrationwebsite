"use client";

import React, { useEffect, useState } from "react";
import Flag from "react-world-flags";
import "animate.css";
import Image from "next/image";
import { useRouter } from "next/navigation";
import axios from "axios";
import { Loader } from "lucide-react";
import { useDispatch } from "react-redux";
import { setAuthUser } from "@/store/authSlice";
import { toast } from "react-toastify";
import { Raleway } from "next/font/google";
import Navbar from "@/app/components/Navbar";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

const Page = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isMounted, setIsMounted] = useState(false);
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      // 1. First make the signup request
      const res = await axios.post("/api/users/signup", user, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`
        }
      });
  
      const userdata = res.data.data.user;
      
      // 2. Then update the tracker
      try {
        await axios.patch(`/api/tracker/${userdata._id}`, {
          field: "signUp",  
          value: true
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
      } catch (trackerError) {
        console.error("Failed to update tracker:", trackerError);
        // You might want to handle this error differently
      }
  
      toast.success("SignUp Successful");
      dispatch(setAuthUser(userdata));
      router.push("/verify");
    } catch (error: any) {
      toast.error(error.response?.data?.message || "An error occurred");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const goback = () => {
    router.push("/home");
  };

  return (
    <div
      style={{ fontFamily: raleway.style.fontFamily }}
      className="h-screen w-full text-gray-500"
    >
      <div className="flex xl:flex-row flex-col items-center h-full w-full">
        <div className="flex items-center h-[50vh] xl:h-screen w-full justify-between relative">
          <div className="h-[50vh] lg:h-full w-full">
            <img
              className="w-full h-full object-cover"
              src="/signup5.jpeg"
              alt="Signup"
              width={500}
              height={300}
            />
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[80%] w-[90%] rounded-xl h-[90%] bg-black bg-opacity-50 flex items-center">
            <button
              className="absolute top-5 left-5 text-white bg-opacity-70 px-4 py-2 rounded-md hover:underline flex items-center"
              onClick={() => goback()}
            >
              <span className="text-xl">
                <MdKeyboardArrowLeft />
              </span>
              Back
            </button>

            <div className="text-white flex flex-col gap-5 ml-10">
              <h1 className="text-4xl md:text-5xl lg:text-6xl">
                Let's Get <br />
                <span className="text-5xl md:text-[60px] lg:text-[70px] font-thin tracking-wider">
                  Started !
                </span>
              </h1>
            </div>
          </div>
        </div>

        <div className="h-full w-full flex items-center">
          <div
            className="w-full mr-10 bg-white rounded-md p-4 ml-2 md:p-8 md:ml-14"
            style={{ height: "620px" }}
          >
            <h2 className="md:text-5xl text-3xl sm:text-4xl text-[#c30e16] mb-6">
              Create <span className="text-[#155da9]">Account</span>
            </h2>

            <form className="mt-10" onSubmit={submitHandler}>
              <div className="flex flex-col gap-5">
                <div className="flex sm:flex-row flex-col w-full gap-3">
                  <div className="mb-4 w-full">
                    <label htmlFor="name" className="block text-xl font-semibold mb-2">
                      Name <span className="text-red-600 text-2xl">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="name"
                      value={user.name}
                      onChange={(e) => setUser({ ...user, name: e.target.value })}
                      className="w-full placeholder-gray-400 text-black border-gray-400 border-[2px] rounded-lg shadow-sm focus:outline-none p-2"
                    />
                  </div>

                  <div className="mb-4 w-full">
                    <label htmlFor="email" className="block text-xl font-semibold mb-2">
                      Email <span className="text-red-600 text-2xl">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="email"
                      value={user.email}
                      onChange={(e) => setUser({ ...user, email: e.target.value })}
                      className="w-full placeholder-gray-400 text-black border-[#155da9] focus:outline-none rounded-md shadow-sm border-[1px] p-2"
                    />
                  </div>
                </div>

                <div className="flex md:flex-row flex-col w-full gap-3">
                  <div className="mb-4 w-full">
                    <label htmlFor="password" className="block text-xl font-semibold mb-2">
                      Password <span className="text-red-600 text-2xl">*</span>
                    </label>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="enter your password"
                      value={user.password}
                      onChange={(e) => setUser({ ...user, password: e.target.value })}
                      className="w-full placeholder-gray-400 text-black border-[#c30e16] focus:outline-none rounded-md shadow-sm border-[1px] p-2"
                    />
                  </div>

                  <div className="mb-4 w-full">
                    <label htmlFor="passwordConfirm" className="block text-xl font-semibold mb-2">
                      Confirm Password <span className="text-red-600 text-2xl">*</span>
                    </label>
                    <input
                      type="password"
                      id="passwordConfirm"
                      name="passwordConfirm"
                      placeholder="confirm your password"
                      value={user.passwordConfirm}
                      onChange={(e) => setUser({ ...user, passwordConfirm: e.target.value })}
                      className="w-full placeholder-gray-400 text-black border-[#c30e16] focus:outline-none rounded-md shadow-sm border-[1px] p-2"
                    />
                  </div>
                </div>

                
                {loading ? (
                  <button
                    type="submit"
                    className="border-[#155da9] border-2 w-full mt-10 text-white bg-[#155da9] px-10 py-4 tracking-wide transition-transform duration-500 rounded-full flex items-center justify-center cursor-not-allowed"
                    disabled
                  >
                    <Loader className="animate-spin h-6 w-6" />
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="border-[#155da9] border-2 w-full mt-10 text-[#155da9] px-10 py-4 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-1 rounded-full"
                  >
                    Sign Up
                  </button>
                )}
              </div>
            </form>

            <div className="flex md:flex-row flex-col pb-10 md:pb-0 mt-3 md:mt-5 items-center justify-center">
              Already have an account?{" "}
              <Link href="/signin" className="ml-2 text-[#155da9] hover:underline font-semibold">
                Log in
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;