// "use client";

// import React, { useState, useRef, useEffect, ChangeEvent } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { setAuthUser } from "@/store/authSlice";
// import { Loader } from "lucide-react";
// import { Raleway } from "next/font/google"; // Corrected import path for next/font/google
// import { MdKeyboardArrowLeft } from "react-icons/md";

// const raleway = Raleway({
//   weight: ["400", "600", "800"],
//   subsets: ["latin"],
// });
// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
//   const [loading, setLoading] = useState(false);
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const handleSubmit = async () => {
//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "/api/users/forget-password",
//         { email },
//         {
//           withCredentials: true,
//         }
//       );

//       toast.success("Reset password code sent to your email.");

//       router.push(`/reset-password?email=${encodeURIComponent(email)}`);
//     } catch (error: any) {
//       toast.error(
//         error?.response?.data?.message ||
//           "Verification failed. Please try again."
//       );
//     } finally {
//       setLoading(false);
//     }
//   }; 

//   const goback = () => {
//     router.back();
//   };

//   return (
//     // <div className="flex items-center justify-center h-screen bg-gray-100">
//     //   <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//     //     <h2 className="text-2xl font-bold mb-4 text-center">
//     //         Enter your email to get code to reset your password
//     //     </h2>

//     //     <div className="flex justify-center space-x-2 mb-6">
//     //         <input
//     //           type="email"
//     //           value={email}
//     //           onChange={(e) => setEmail(e.target.value)}
//     //           className="block w-[80%] h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//     //         />
//     //     </div>

//     //     <button
//     //       onClick={handleSubmit}
//     //       disabled={loading}
//     //       className={`w-full py-2 mt-4 font-medium text-white rounded-lg ${
//     //         loading ? "bg-gray-400" : "bg-red-600 hover:bg-red-500"
//     //       }`}
//     //     >
//     //       {loading ? "Loading..." : "Verify Email"}
//     //     </button>

//     //   </div>
//     // </div>

//     <div
//       className="relative h-screen w-full bg-cover bg-center"
//       style={{
//         backgroundImage: "url(/forget2.jpg)",
//         fontFamily: raleway.style.fontFamily,
//       }}
//     >   
     
//       {/* Centered Form Container with Black Background and Opacity */}
//       <div className="absolute inset-0 flex justify-center items-center">   
//       <button
//                     className="absolute top-5 left-5 text-white  bg-opacity-70 px-4 py-2 rounded-md hover:underline flex items-center"
//                     onClick={() => goback()}
//                   >
//                     {/* Icon for back (optional, if you have an icon library) */}
//                     <span className="text-xl">
//                       <MdKeyboardArrowLeft />
//                     </span>
//                     Back
//                   </button>
//         <div className="w-full max-w-md bg-black bg-opacity-35 rounded-md p-8 shadow-lg">
//           <h2 className="text-5xl text-white mb-6 text-center">
//             Forgot <span className="">Password</span>
//           </h2>

//           <form className="mt-10" onSubmit={handleSubmit}>
//             <div className="flex flex-col gap-5">
//               <div className="mb-4 w-full">
//                 <input
//                   type="email"
//                   id="email"
//                   placeholder="enter your email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   className="w-full bg-white bg-opacity-10 border-2 border-white focus:border-2   mt-10  text-center text-black placeholder-white focus:placeholder-black focus:bg-white focus:border-white focus:border-opacity-55 focus:bg-opacity-55  focus: placeholder:text-xl placeholder:tracking-widest  focus:text-black  rounded-lg shadow-sm focus:outline-none p-4"
//                 />
//               </div>
//             </div>

//             {loading && (
//               <button
//                 type="submit"
//                 className="border-[#155da9] border-2 w-full mt-10 text-[#155da9] px-10 py-4 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-1 rounded-full flex items-center justify-center"
//                 disabled
//               >
//                 <Loader className="animate-spin text-white h-6 w-6" />
//               </button>
//             )}

//             {!loading && (
//               <button
//                 type="submit"
//                 className="border-white border-2 w-full mt-10 text-white px-10 py-4 tracking-wide hover:bg-[#155da9] hover:border-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-1 rounded-full"
//               >
//                 Verify Email
//               </button>
//             )}
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ForgotPassword;
  






"use client";

import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { Loader } from "lucide-react";
import { Raleway } from "next/font/google";
import { MdKeyboardArrowLeft } from "react-icons/md";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {


    e.preventDefault();
    setLoading(true);

    try {
      const res = await axios.post(
        "/api/users/forget-password",
        { email },
        {
          withCredentials: true,
        }
      );

      toast.success("Reset password code sent to your email.");
      router.push(`/reset-password?email=${encodeURIComponent(email)}`);
    } catch (error: any) {
      toast.error(
        error?.response?.data?.message ||
          "Verification failed. Please try again."
      );
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
      <div className="absolute inset-0 flex justify-center items-center px-4">   
      <button
        className="absolute top-5 left-5 text-white bg-opacity-70 px-4 py-2 rounded-md hover:underline flex items-center"
        onClick={goback}
      >
        <span className="text-xl">
          <MdKeyboardArrowLeft />
        </span>
        Back
      </button>
        <div className="w-full max-w-md bg-black bg-opacity-50 rounded-lg p-6 sm:p-8 md:p-10 shadow-lg">
          <h2 className="text-4xl sm:text-5xl text-white  mb-6 text-center">
            Forgot <span>Password</span>
          </h2>

          <form className="mt-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4 sm:gap-5">
              <div className="w-full">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white bg-opacity-10 border-2 border-white text-center text-white placeholder-white focus:placeholder-black focus:text-black focus:bg-white focus:border-white focus:outline-none rounded-lg shadow-sm p-3 sm:p-4 text-sm sm:text-base"
                />
              </div>
            </div>

            {loading ? (
              <button
                type="submit"
                className="border-[#155da9] border-2 w-full mt-8 sm:mt-10 text-[#155da9] px-8 py-3 sm:py-4 text-sm sm:text-base tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-1 rounded-full flex items-center justify-center"
                disabled
              >
                <Loader className="animate-spin text-white h-6 w-6" />
              </button>
            ) : (
              <button
                type="submit"
                className="border-white border-2 w-full mt-8 sm:mt-10 text-white px-8 py-3 sm:py-4 text-sm sm:text-base tracking-wide hover:bg-[#155da9] hover:border-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-1 rounded-full"
              >
                Verify Email
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
