"use client";

import React, { useEffect, useState } from "react";
import Flag from "react-world-flags";
import "animate.css"; 
import Image from 'next/image'; 
import { useRouter } from "next/navigation";
import axios from "axios";
import { Loader } from "lucide-react";
import { useDispatch } from "react-redux";
import { setAuthUser } from "@/store/authSlice";
import { toast } from "react-toastify";
import Link from "next/link";

const Page = () => {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [isMounted, setIsMounted] = useState(false);
   const router = useRouter();

   const [loading, setLoading] = useState(false);
   const dispath = useDispatch();

  const [user, setUser] = useState({
    email : "",
    password: "",
  })

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
     const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); 
    setLoading(true);
    try {
      const res = await axios.post(
       " http://localhost:3000/api/users/login", user,{
        withCredentials: true,
      });
  
      
      const userdata = res.data.data.user;
      toast.success("Login Successfull");
      dispath(setAuthUser(userdata))
      console.log(userdata);
      router.push('/');
      console.log(res);
    } catch (error:any) {
      toast.error(error.res?.data?.message || "An error occured");
      console.log(error);
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-t from-slate-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl p-6">
      
        <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg" style={{ height: "450px" }} >
          <h2 className="text-2xl font-bold mb-6 text-center
          ">Sign-In</h2>
          <form onSubmit={submitHandler}
          >
          

            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                value={user.email}
                onChange={(e) => setUser({...user, email: e.target.value})}
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password"
                value={user.password}
                onChange={(e) => setUser({...user, password: e.target.value})}
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
              />

              <Link href="/forget-password"
                className="text-sm text-red-500 mt-4 text-right block hover:underline"
                >
                  Forgot Password
                </Link>
            </div>
            <button
              type="submit"
              className="w-full mt-6 bg-red-700 hover:bg-red-500 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 disabled:bg-gray-400"
            >
              SignIn
            </button>
          </form>
        </div>

        <div className="hidden md:block text-center">
          <div className="animate__animated animate__fadeInUp">
     
            <Image
              src= "data:image/jpeg;base64,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"
              alt="Immigration"
              width={600}
              height={400}
              className="mx-auto rounded-lg shadow-lg mb-6"
            />
          </div>
         <h1 className="text-5xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-teal-400 animate__animated animate__fadeInRight">
  Welcome to Sea View Immigration!
</h1>

<p  className=" text-xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-teal-400 animate__animated animate__fadeInRight">
  Sign up now to get started!
</p>

        </div>
      </div>
    </div>
  );
};

export default Page;
