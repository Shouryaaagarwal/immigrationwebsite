// "use client";

// import React, { useState, useRef, useEffect, ChangeEvent } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { setAuthUser } from "@/store/authSlice";

// const VerificationCodeInput = () => {
//   const [code, setCode] = useState<string[]>(Array(6).fill(""));
//   const [loading, setLoading] = useState(false);
//   const [resendCooldown, setResendCooldown] = useState(0);
//   const dispatch = useDispatch();
//   const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     const lastResendTime = localStorage.getItem("lastResendTime");
//     if (lastResendTime) {
//       const timeSinceLastResend = Math.floor((Date.now() - parseInt(lastResendTime)) / 1000);
//       const remainingCooldown = Math.max(30 - timeSinceLastResend, 0);
//       setResendCooldown(remainingCooldown);
//     }

//     const timer = setInterval(() => {
//       setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
//     const { value } = event.target;
//     if (/^\d*$/.test(value)) {  // Allow only digits
//       const newOtp = [...code];
//       newOtp[index] = value;
//       setCode(newOtp);

//       if (value && inputRefs.current[index + 1]) {
//         inputRefs.current[index + 1]?.focus();
//       }
//     }
//   };

//   const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>): void => {
//     if (e.key === "Backspace" && !code[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     const pasteData = e.clipboardData.getData("text").slice(0, 6);
//     if (/^\d{6}$/.test(pasteData)) {
//       const newCode = pasteData.split("");
//       setCode(newCode);
//       newCode.forEach((digit, idx) => {
//         if (inputRefs.current[idx]) {
//           inputRefs.current[idx]!.value = digit;
//         }
//       });
//       inputRefs.current[5]?.focus();
//     }
//   };

//   const handleResend = async () => {
//     try {
//       await axios.post("/api/users/resend-otp");
//       toast.success("OTP has been resent successfully!");
//       setResendCooldown(30);
//       localStorage.setItem("lastResendTime", Date.now().toString());
//     } catch (error: any) {
//       toast.error(error?.response?.data?.message || "Failed to resend OTP. Please try again.");
//     }
//   };



// const handleSubmit = async () => {
//   setLoading(true);

//   try {
//     const verificationCode = code.join("");
//     const res = await axios.post("http://localhost:3000/api/users/verify", { otp: verificationCode }, {
//       withCredentials: true,
//     });

//     const verifiedUser = res.data.data.user;
//     dispatch(setAuthUser(verifiedUser));
//     toast.success("Email verified successfully!");
//     router.push("/");
//   } catch (error: any) {
//     toast.error(error?.response?.data?.message || "Verification failed. Please try again.");
//   } finally {
//     setLoading(false);
//   }
// };

//   return (
//     <div className="flex items-center justify-center h-screen bg-gray-100">
//       <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-4 text-center">Email Verification</h2>

//         <div className="flex justify-center space-x-2 mb-6">
//           {Array.from({ length: 6 }, (_, index) => (
//             <input
//               key={index}
//               type="text"
//               maxLength={1}
//               value={code[index]}
//               onChange={(e) => handleChange(e, index)}
//               onKeyDown={(e) => handleKeyDown(index, e)}
//               onPaste={index === 0 ? handlePaste : undefined}
//               ref={(el) => { inputRefs.current[index] = el; }}
//               className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           ))}
//         </div>

//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           className={`w-full py-2 mt-4 font-medium text-white rounded-lg ${
//             loading ? "bg-gray-400" : "bg-red-600 hover:bg-red-500"
//           }`}
//         >
          
//           {loading ? "Verifying..." : "Verify Email"}
//         </button>

//         <div className="mt-4 text-center">
//           <button
//             onClick={handleResend}
//             disabled={resendCooldown > 0}
//             className={`w-full py-2 mt-2 font-medium text-white rounded-lg ${
//               resendCooldown > 0 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-500"
//             }`}
//           >
//             {resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : "Resend OTP"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerificationCodeInput;
 




// "use client";

// import React, { useState, useRef, useEffect, ChangeEvent } from "react";
// import axios from "axios";
// import { useRouter } from "next/navigation";
// import { toast } from "react-toastify";
// import { useDispatch } from "react-redux";
// import { setAuthUser } from "@/store/authSlice";

// const VerificationCodeInput = () => {
//   const [code, setCode] = useState<string[]>(Array(6).fill(""));
//   const [loading, setLoading] = useState(false);
//   const [resendCooldown, setResendCooldown] = useState(0);
//   const dispatch = useDispatch();
//   const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
//   const router = useRouter();

//   useEffect(() => {
//     const lastResendTime = localStorage.getItem("lastResendTime");
//     if (lastResendTime) {
//       const timeSinceLastResend = Math.floor((Date.now() - parseInt(lastResendTime)) / 1000);
//       const remainingCooldown = Math.max(30 - timeSinceLastResend, 0);
//       setResendCooldown(remainingCooldown);
//     }

//     const timer = setInterval(() => {
//       setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0));
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
//     const { value } = event.target;
//     if (/^\d*$/.test(value)) {
//       const newOtp = [...code];
//       newOtp[index] = value;
//       setCode(newOtp);

//       if (value && inputRefs.current[index + 1]) {
//         inputRefs.current[index + 1]?.focus();
//       }
//     }
//   };

//   const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>): void => {
//     if (e.key === "Backspace" && !code[index] && index > 0) {
//       inputRefs.current[index - 1]?.focus();
//     }
//   };

//   const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
//     e.preventDefault();
//     const pasteData = e.clipboardData.getData("text").slice(0, 6);
//     if (/^\d{6}$/.test(pasteData)) {
//       const newCode = pasteData.split("");
//       setCode(newCode);
//       newCode.forEach((digit, idx) => {
//         if (inputRefs.current[idx]) {
//           inputRefs.current[idx]!.value = digit;
//         }
//       });
//       inputRefs.current[5]?.focus();
//     }
//   };

//   const handleResend = async () => {
//     try {
//       await axios.post("/api/users/resend-otp");
//       toast.success("OTP has been resent successfully!");
//       setResendCooldown(30);
//       localStorage.setItem("lastResendTime", Date.now().toString());
//     } catch (error: any) {
//       toast.error(error?.response?.data?.message || "Failed to resend OTP. Please try again.");
//     }
//   };

//   const handleSubmit = async () => {
//     setLoading(true);

//     try {
//       const verificationCode = code.join("");
//       const res = await axios.post("http://localhost:3000/api/users/verify", { otp: verificationCode }, {
//         withCredentials: true,
//       });

//       const verifiedUser = res.data.data.user;
//       dispatch(setAuthUser(verifiedUser));
//       toast.success("Email verified successfully!");
//       router.push("/");
//     } catch (error: any) {
//       toast.error(error?.response?.data?.message || "Verification failed. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
//       <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
//         <h2 className="text-2xl font-bold mb-6 text-center">Email Verification</h2>

//         {/* OTP Inputs */}
//         <div className="flex justify-center space-x-2 mb-6">
//           {Array.from({ length: 6 }, (_, index) => (
//             <input
//               key={index}
//               type="text"
//               maxLength={1}
//               value={code[index]}
//               onChange={(e) => handleChange(e, index)}
//               onKeyDown={(e) => handleKeyDown(index, e)}
//               onPaste={index === 0 ? handlePaste : undefined}
//               ref={(el) => { inputRefs.current[index] = el; }}
//               className="w-10 h-10 sm:w-12 sm:h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           ))}
//         </div>

//         {/* Submit Button */}
//         <button
//           onClick={handleSubmit}
//           disabled={loading}
//           className={`w-full py-2 mt-4 font-medium text-white rounded-lg ${
//             loading ? "bg-gray-400" : "bg-red-600 hover:bg-red-500"
//           }`}
//         >
//           {loading ? "Verifying..." : "Verify Email"}
//         </button>

//         {/* Resend Button */}
//         <div className="mt-6 text-center">
//           <button
//             onClick={handleResend}
//             disabled={resendCooldown > 0}
//             className={`w-full py-2 font-medium text-white rounded-lg ${
//               resendCooldown > 0 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-500"
//             }`}
//           >
//             {resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : "Resend OTP"}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VerificationCodeInput;
 




"use client";

import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuthUser } from "@/store/authSlice";
import { Raleway } from "next/font/google";
import { MdKeyboardArrowLeft } from "react-icons/md";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

const VerificationCodeInput = () => {
  const [code, setCode] = useState<string[]>(Array(6).fill(""));
  const [loading, setLoading] = useState(false);
  const [resendCooldown, setResendCooldown] = useState(0);
  const dispatch = useDispatch();
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const router = useRouter();

  useEffect(() => {
    const lastResendTime = localStorage.getItem("lastResendTime");
    if (lastResendTime) {
      const timeSinceLastResend = Math.floor((Date.now() - parseInt(lastResendTime)) / 1000);
      const remainingCooldown = Math.max(30 - timeSinceLastResend, 0);
      setResendCooldown(remainingCooldown);
    }

    const timer = setInterval(() => {
      setResendCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleChange = (event: ChangeEvent<HTMLInputElement>, index: number) => {
    const { value } = event.target;
    if (/^\d*$/.test(value)) {
      const newOtp = [...code];
      newOtp[index] = value;
      setCode(newOtp);

      if (value && inputRefs.current[index + 1]) {
        inputRefs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pasteData = e.clipboardData.getData("text").slice(0, 6);
    if (/^\d{6}$/.test(pasteData)) {
      const newCode = pasteData.split("");
      setCode(newCode);
      newCode.forEach((digit, idx) => {
        if (inputRefs.current[idx]) {
          inputRefs.current[idx]!.value = digit;
        }
      });
      inputRefs.current[5]?.focus();
    }
  };

  // const handleResend = async () => {
  //   try {
  //     await axios.post("/api/users/resend-otp");
  //     toast.success("OTP has been resent successfully!");
  //     setResendCooldown(30);
  //     localStorage.setItem("lastResendTime", Date.now().toString());
  //   } catch (error: any) {
  //     toast.error(error?.response?.data?.message || "Failed to resend OTP. Please try again.");
  //   }
  // };
const handleResend = async () => {
  try {
    await axios.post("/api/users/resend-otp");
    toast.success("OTP has been resent successfully!");
    setResendCooldown(30);
    localStorage.setItem("lastResendTime", Date.now().toString());
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      toast.error(
        error.response?.data?.message ||
          "Failed to resend OTP. Please try again."
      );
      console.error(error.response?.data);
    } else {
      toast.error("Something went wrong while resending OTP.");
      console.error(error);
    }
  }
};

  // const handleSubmit = async () => {
  //   setLoading(true);

  //   try {
  //     const verificationCode = code.join("");
  //     const res = await axios.post("http://localhost:3000/api/users/verify", { otp: verificationCode }, {
  //       withCredentials: true,
  //     });

  //     const verifiedUser = res.data.data.user;
  //     dispatch(setAuthUser(verifiedUser));
  //     toast.success("Email verified successfully!");
  //     router.push("/");
  //   } catch (error: any) {
  //     toast.error(error?.response?.data?.message || "Verification failed. Please try again.");
  //   } finally {
  //     setLoading(false);
  //   }
  // };

const handleSubmit = async () => {
  setLoading(true);

  try {
    const verificationCode = code.join("");
    const res = await axios.post(
      "http://localhost:3000/api/users/verify",
      { otp: verificationCode },
      { withCredentials: true }
    );

    const verifiedUser = res.data.data.user;
    dispatch(setAuthUser(verifiedUser));
    toast.success("Email verified successfully!");
    router.push("/");
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      toast.error(
        error.response?.data?.message ||
          "Verification failed. Please try again."
      );
      console.error(error.response?.data);
    } else {
      toast.error("Something went wrong. Please try again.");
      console.error(error);
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
            Verify <span>Email</span>
          </h2>

          {/* OTP Inputs */}
          <div className="flex justify-center space-x-2 mb-6">
            {Array.from({ length: 6 }, (_, index) => (
              <input
                key={index}
                type="text"
                maxLength={1}
                value={code[index]}
                onChange={(e) => handleChange(e, index)}
                onKeyDown={(e) => handleKeyDown(index, e)}
                onPaste={index === 0 ? handlePaste : undefined}
                ref={(el) => { inputRefs.current[index] = el; }}
                className="w-10 h-10 sm:w-12 sm:h-12 text-center text-xl bg-black bg-opacity-10 text-white placeholder:text-white border border-white rounded-lg shadow-sm focus:outline-none focus:bg-white focus:text-black focus:ring-2 focus:ring-indigo-500"
              />
            ))}
          </div>

          {/* Submit Button */}
          <button
            onClick={handleSubmit}
            disabled={loading}
            className={`border-white border-2 w-full mt-8 sm:mt-10 text-white px-6 py-3 sm:px-10 sm:py-4 text-sm sm:text-base tracking-wide hover:bg-[#155da9] hover:border-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-1 rounded-full ${
              loading ? "bg-gray-400 cursor-not-allowed" : ""
            }`}
          >
            {loading ? "Verifying..." : "Verify Email"}
          </button>

          {/* Resend Button */}
          <div className="mt-6 text-center">
            <button
              onClick={handleResend}
              disabled={resendCooldown > 0}
              className={`border-white border-2 w-full text-white px-6 py-3 sm:px-10 sm:py-4 text-sm sm:text-base tracking-wide transition-transform duration-500 rounded-full ${
                resendCooldown > 0
                  ? "bg-gray-400 cursor-not-allowed"
                  : "hover:bg-[#155da9] hover:border-[#155da9] hover:text-white"
              }`}
            >
              {resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : "Resend OTP"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerificationCodeInput;
