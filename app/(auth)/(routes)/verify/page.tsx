"use client";

import React, { useState, useRef, useEffect, ChangeEvent } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { setAuthUser } from "@/store/authSlice";

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
    if (/^\d*$/.test(value)) {  // Allow only digits
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

  const handleResend = async () => {
    try {
      await axios.post("/api/users/resend-otp");
      toast.success("OTP has been resent successfully!");
      setResendCooldown(30);
      localStorage.setItem("lastResendTime", Date.now().toString());
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Failed to resend OTP. Please try again.");
    }
  };



const handleSubmit = async () => {
  setLoading(true);

  try {
    const verificationCode = code.join("");
    const res = await axios.post("/api/users/verify", { otp: verificationCode }, {
      withCredentials: true,
    });

    const verifiedUser = res.data.data.user;
    dispatch(setAuthUser(verifiedUser));
    toast.success("Email verified successfully!");
    router.push("/");
  } catch (error: any) {
    toast.error(error?.response?.data?.message || "Verification failed. Please try again.");
  } finally {
    setLoading(false);
  }
};

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Email Verification</h2>

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
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          ))}
        </div>

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full py-2 mt-4 font-medium text-white rounded-lg ${
            loading ? "bg-gray-400" : "bg-red-600 hover:bg-red-500"
          }`}
        >
          
          {loading ? "Verifying..." : "Verify Email"}
        </button>

        <div className="mt-4 text-center">
          <button
            onClick={handleResend}
            disabled={resendCooldown > 0}
            className={`w-full py-2 mt-2 font-medium text-white rounded-lg ${
              resendCooldown > 0 ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-500"
            }`}
          >
            {resendCooldown > 0 ? `Resend OTP in ${resendCooldown}s` : "Resend OTP"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default VerificationCodeInput;
