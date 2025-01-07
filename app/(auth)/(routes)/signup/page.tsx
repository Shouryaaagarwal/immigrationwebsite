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
import { Raleway } from "next/font/google"; // Corrected import path for next/font/google
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
  const dispath = useDispatch();

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
    nationality: "",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const countryCode = e.target.value;
    setSelectedCountry(countryCode);
    setUser({ ...user, nationality: countryCode });
  };
  const countries = [
    { code: "US", name: "United States" },
    { code: "IN", name: "India" },
    { code: "CA", name: "Canada" },
    { code: "GB", name: "United Kingdom" },
    { code: "AU", name: "Australia" },
    { code: "FR", name: "France" },
    { code: "DE", name: "Germany" },
    { code: "JP", name: "Japan" },
    { code: "BR", name: "Brazil" },
    { code: "ZA", name: "South Africa" },
  ];

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(" /api/users/signup", user, {
        withCredentials: true,
      });

      const userdata = res.data.data.user;
      toast.success("SignUp Successfull");
      dispath(setAuthUser(userdata));
      console.log(userdata);
      router.push("/verify");
      console.log(res);
    } catch (error: any) {
      toast.error(error.res?.data?.message || "An error occured");
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
    style={{ fontFamily: raleway.style.fontFamily }} // Fixed style syntax
    className="h-screen w-full text-gray-500"
  >
    {/* <Navbar/> */}
    <div className=" flex items-center h-full w-full justfy-between">
      <div className="flex items-center h-screen w-full justify-between relative">
        {/* Image */}
        <div className="h-full w-full">
          <img
            className="w-full h-screen object-cover"
            src="/signup5.jpeg"
            alt="Signup"
            width={500}
            height={300}
          />
        </div>

        {/* Overlay div */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[80%] rounded-xl h-[90%] bg-black bg-opacity-50 flex items-center">
          {/* Back Button */}
          <button
            className="absolute top-5 left-5 text-white  bg-opacity-70 px-4 py-2 rounded-md hover:underline flex items-center"
            onClick={() => goback()}
          >
            {/* Icon for back (optional, if you have an icon library) */}
            <span className="text-xl">
              <MdKeyboardArrowLeft />
            </span>
            Back
          </button>

          {/* Content inside the overlay */}
          <div className="text-white text-xl flex flex-col gap-5 ml-10">
            <h1 className="text-6xl">
              Let's Get <br />
              <span className="text-[70px] font-thin tracking-wider">
                Started !
              </span>
            </h1>
          </div>
        </div>
      </div>
      <div className="h-full   w-full flex items-center  ">
        <div
          className="w-full   mr-10 bg-white rounded-md p-8 ml-14"
          style={{ height: "620px" }}
        >
          <h2
            className="text-5xl text-[#c30e16]  mb-6 
        "
          >
            Create <span className="text-[#155da9]">Account</span>
          </h2>

          <form className="mt-10" onSubmit={submitHandler}>
            <div className="flex flex-col gap-5">
              <div className="flex w-full gap-3">
                <div className="mb-4 w-full ">
                  <label
                    htmlFor="name"
                    className="block text-xl font-semibold mb-2"
                  >
                    Name <span className="text-red-600 text-2xl">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="name"
                    value={user.name}
                    onChange={(e) =>
                      setUser({ ...user, name: e.target.value })
                    }
                    className="w-full placeholder-gray-400 text-black border-gray-400 border-[2px] rounded-lg shadow-sm   focus:outline-none p-2"
                  />
                </div>

            
            <div className="mb-4">
              <label htmlFor="password" className="block font-medium mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="passwordConfirm"
                name="passwordConfirm"
                placeholder="Enter your password"
                value={user.passwordConfirm}
                onChange={(e) => setUser({...user, passwordConfirm: e.target.value})}
                className="w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2"
              />
            </div>


                <div className="mb-4 w-full">
                  <label
                    htmlFor="email"
                    className="block text-xl  font-semibold mb-2"
                  >
                    Email <span className="text-red-600 text-2xl">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    className="w-full placeholder-gray-400 text-black border-[#155da9] focus:outline-none rounded-md shadow-sm border-[1px] p-2"
                  />
                </div>
              </div>

              <div className="flex w-full gap-3">
                <div className="mb-4 w-full">
                  <label
                    htmlFor="password"
                    className="block text-xl font-semibold mb-2"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="enter your password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    className="w-full placeholder-gray-400 text-black  border-[#c30e16] focus:outline-none rounded-md shadow-sm border-[1px] p-2"
                  />
                </div>

                <div className="mb-4 w-full">
                  <label
                    htmlFor="password"
                    className="block text-xl font-semibold mb-2"
                  >
                    Confirm Password
                  </label>
                  <input
                    type="password"
                    id="passwordConfirm"
                    name="passwordConfirm"
                    placeholder="confirm password"
                    value={user.passwordConfirm}
                    onChange={(e) =>
                      setUser({ ...user, passwordConfirm: e.target.value })
                    }
                    className="w-full placeholder-gray-400 text-black border-gray-400 border-[2px] rounded-lg shadow-sm   focus:outline-none p-2"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="nationality"
                  className="block text-xl font-semibold mb-2"
                >
                  Nationality
                </label>
                <div className="flex items-center">
                  <div className="relative w-full">
                    {/* Select with Peer */}
                    <select
                      id="nationality"
                      name="nationality"
                      value={user.nationality}
                      onChange={handleCountryChange}
                      className="peer w-full pr-10  text-gray-400 border-gray-400 border-[2px] rounded-lg shadow-sm focus:outline-none p-2 appearance-none"
                    >
                      <option value="" className="text-gray-400">
                        Select your nationality
                      </option>
                      {countries.map((country) => (
                        <option key={country.code} value={country.code}>
                          {country.name}
                        </option>
                      ))}
                    </select>

                    {/* Custom Arrow with Rotate */}
                    <div className="absolute top-1/2 right-3 transform -translate-y-1/2 pointer-events-none transition-transform duration-300 peer-focus:rotate-180  peer-blur:rotate-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 text-gray-500"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.707a1 1 0 011.414 0L10 11.086l3.293-3.379a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>

                  {selectedCountry && (
                    <div className="ml-3">
                      <Flag
                        code={selectedCountry.toLowerCase()}
                        className="w-8 h-5"
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>

            {loading && (
              <button
                type="submit"
                className="border-[#155da9] border-2 w-full  mt-10 text-[#155da9] px-10 py-4  tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-1 rounded-full flex items-center justify-center"
                disabled
              >
                <Loader className="animate-spin text-white h-6 w-6" />
              </button>
            )}

            {!loading && (
              //   <button
              //     type="submit"
              //     className="w-full
              // mt-9 bg-red-700 hover:bg-red-500 text-white font-medium py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50 p-2 "
              //   >
              //     SignUp
              //   </button>
              <button
                type="submit"
                className="border-[#155da9] border-2 w-full  mt-10 text-[#155da9] px-10 py-4  tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-1 rounded-full"
              >
                {" "}
                Sign Up{" "}
              </button>
            )}
          </form>
          <div className="flex mt-5 items-center justify-center">
            Already have an account?{" "}
            <Link href="/signin" className="ml-2 text-[#155da9] hover:underline font-semibold">Log in</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
);
};

export default Page;
