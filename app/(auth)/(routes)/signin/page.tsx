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
import Link from "next/link";
import { Raleway } from "next/font/google"; // Corrected import path for next/font/google
import { MdKeyboardArrowRight } from "react-icons/md";

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
    email: "",
    password: "",
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;
  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(
        " http://localhost:3000/api/users/login",
        user,
        {
          withCredentials: true,
        }
      );

      const userdata = res.data.data.user;
      toast.success("Login Successfull");
      dispath(setAuthUser(userdata));
      console.log(userdata);
      router.push("/");
      console.log(res);
    } catch (error: any) {
      toast.error(error.res?.data?.message || "An error occured");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const goback = () => {
    router.back();
  };

  return (   
    <div
    style={{ fontFamily: raleway.style.fontFamily }} // Fixed style syntax
    className="h-screen w-full text-gray-500"
  >         
  <div className="flex xl:flex-row  flex-col w-full h-full items-center justify-between ">
        <div className="h-full w-full  flex order-2 xl:order-1  items-center">
          <div
            className="w-full md:mr-10 bg-white rounded-md md:p-8 p-4 ml-4 md:ml-14"
            style={{ height: "620px" }}
          >
            <h2 className="text-5xl text-[#c30e16] mb-6">
              Log <span className="text-[#155da9]">In</span>
            </h2>

            <form className="mt-10" onSubmit={submitHandler}>
              <div className="flex flex-col gap-5">
                <div className="mb-4 w-full">
                  <label
                    htmlFor="email"
                    className="block text-xl font-semibold mb-2"
                  >
                    Email <span className="text-red-600 text-2xl">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    value={user.email}
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    className="w-full placeholder-gray-400 text-black border-gray-400 border-[2px] rounded-lg shadow-sm focus:outline-none p-2"
                  />
                </div>

                <div className="mb-4 w-full">
                  <label
                    htmlFor="password"
                    className="block text-xl font-semibold mb-2"
                  >
                    Password <span className="text-red-600 text-2xl">*</span>
                  </label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="Enter your password"
                    value={user.password}
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    className="w-full placeholder-gray-400 text-black border-[#c30e16] focus:outline-none rounded-md shadow-sm border-[1px] p-2"
                  />
                </div>

                <Link
                  href="/forget-password"
                  className="text-sm text-[#c30e16] mt-4 text-right block hover:underline"
                >
                  Forgot Password
                </Link>
              </div>

              {loading && (
                <button
                  type="submit"
                  className="border-[#155da9] border-2 w-full mt-10 text-[#155da9] px-10 py-4 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-1 rounded-full flex items-center justify-center"
                  disabled
                >
                  <Loader className="animate-spin text-white h-6 w-6" />
                </button>
              )}

              {!loading && (
                <button
                  type="submit"
                  className="border-[#155da9] border-2 w-full mt-10 text-[#155da9] px-10 py-4 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-1 rounded-full"
                >
                  Log In
                </button>
              )}
            </form>
            <div className="flex md:flex-row flex-col mt-5 items-center justify-center">
              Don’t have an account?{" "}
              <Link  href = "/signup" className="ml-2 text-[#155da9] hover:underline font-semibold">Create Account</Link>
            </div>
          </div>
        </div>

        <div className="flex items-center xl:order-2 order-1  h-screen w-full justify-between relative">
          {/* Image */}
          <div className="xl:h-full h-[50vh] w-full">
            <img
              className="w-full xl:h-full h-[50vh] object-cover"
              src="/signup9.jpeg"
              alt="Signup"
              width={500}
              height={300}
            />
          </div>

          {/* Overlay div */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 lg:w-[80%] w-[90%] rounded-xl h-[90%] bg-black bg-opacity-50 flex items-center">
            {/* Back Button */}
            <button
              className="absolute top-5 right-5 text-white bg-opacity-70 px-4 py-2 rounded-md hover:underline flex items-center"
              onClick={() => goback()}
            >
              {/* Icon for back (optional, if you have an icon library) */}
              Back
              <span className="text-xl">
                <MdKeyboardArrowRight />
              </span>
            </button>

            <div className="text-white text-xl flex flex-col gap-5 ml-10  lg:ml-20">
              <h1 className=" text-3xl lg:text-6xl">
                Welcome <br />
              </h1>
              <span className="lg:mt-5 text-4xl md:text-[60px] lg:text-[70px] font-thin ">Back !</span>
            </div>
          </div>
        </div>
      </div>
    </div>   

















//     <div    
    
//     className="flex flex-col xl:flex-row w-full h-full items-center justify-between">
//   {/* Image Section */}
//   <div className="relative w-full h-[50vh] xl:h-full xl:w-1/2 order-1 xl:order-2">
//     <div className="h-full w-full">
//       <img
//         className="w-full h-full object-cover"
//         src="/signup9.jpeg"
//         alt="Signup"
//       />
//     </div>
//     {/* Overlay div */}
//     <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
//       {/* Back Button */}
//       <button
//         className="absolute top-5 right-5 text-white bg-opacity-70 px-4 py-2 rounded-md hover:underline flex items-center"
//         onClick={() => goback()}
//       >
//         Back
//         <span className="text-xl">
//           <MdKeyboardArrowRight />
//         </span>
//       </button>
//       <div className="text-white text-xl flex flex-col items-center xl:items-start gap-5">
//         <h1 className="text-6xl">Welcome</h1>
//         <span className="mt-5 text-[70px] font-thin">Back!</span>
//       </div>
//     </div>
//   </div>

//   {/* Form Section */}
//   <div className="w-full xl:w-1/2 flex items-center justify-center order-2 xl:order-1">
//     <div
//       className="w-full max-w-[500px] bg-white rounded-md p-8 shadow-md"
//       style={{ height: "620px" }}
//     >
//       <h2 className="text-5xl text-[#c30e16] mb-6">
//         Log <span className="text-[#155da9]">In</span>
//       </h2>
//       <form className="mt-10" onSubmit={submitHandler}>
//         <div className="flex flex-col gap-5">
//           <div className="mb-4 w-full">
//             <label
//               htmlFor="email"
//               className="block text-xl font-semibold mb-2"
//             >
//               Email <span className="text-red-600 text-2xl">*</span>
//             </label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//               value={user.email}
//               onChange={(e) => setUser({ ...user, email: e.target.value })}
//               className="w-full placeholder-gray-400 text-black border-gray-400 border-[2px] rounded-lg shadow-sm focus:outline-none p-2"
//             />
//           </div>
//           <div className="mb-4 w-full">
//             <label
//               htmlFor="password"
//               className="block text-xl font-semibold mb-2"
//             >
//               Password <span className="text-red-600 text-2xl">*</span>
//             </label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Enter your password"
//               value={user.password}
//               onChange={(e) =>
//                 setUser({ ...user, password: e.target.value })
//               }
//               className="w-full placeholder-gray-400 text-black border-[#c30e16] focus:outline-none rounded-md shadow-sm border-[1px] p-2"
//             />
//           </div>
//           <Link
//             href="/forget-password"
//             className="text-sm text-[#c30e16] mt-4 text-right block hover:underline"
//           >
//             Forgot Password
//           </Link>
//         </div>
//         {loading ? (
//           <button
//             type="submit"
//             className="border-[#155da9] border-2 w-full mt-10 text-[#155da9] px-10 py-4 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-1 rounded-full flex items-center justify-center"
//             disabled
//           >
//             <Loader className="animate-spin text-white h-6 w-6" />
//           </button>
//         ) : (
//           <button
//             type="submit"
//             className="border-[#155da9] border-2 w-full mt-10 text-[#155da9] px-10 py-4 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-1 rounded-full"
//           >
//             Log In
//           </button>
//         )}
//       </form>
//       <div className="flex mt-5 items-center justify-center">
//         Don’t have an account?{" "}
//         <Link
//           href="/signup"
//           className="ml-2 text-[#155da9] hover:underline font-semibold"
//         >
//           Create Account
//         </Link>
//       </div>
//     </div>
//   </div>
// </div>

  );
};

export default Page;
