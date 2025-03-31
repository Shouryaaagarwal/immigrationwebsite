"use client";
import Link from "next/link";
import { FaFlag, FaCommentAlt, FaFileUpload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Image from "next/image";

export default function Username() {
  // Sample user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    nationality: "Canadian"
  };

  return (
    <div className="relative w-full pb-20 flex items-center justify-center   overflow-hidden">
      {/* Blurry Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-gradient-to-br from-[#155da9] to-[#c30e16] rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 right-0 w-80 h-80 bg-gradient-to-br from-[#c30e16] to-[#155da9] rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Card Container */}
      <div className="relative   p-3 bg-white rounded-xl shadow-lg mt-5  w-full max-w-md z-10">
        {/* User Profile Section */}
        <div className="flex flex-col items-center gap-6 w-full">
          {/* User Icon */}
          <div className="relative w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            <Image
              src="/signinicon.png"
              alt="User profile"
              width={96}
              height={96}
              className="object-cover"
              priority
            />
          </div>

          {/* User Details */}
          <h1 className="text-2xl font-semibold text-gray-800 text-center">
            {user.name}
          </h1>

          <div className="flex flex-col gap-2 text-gray-600 text-center">
            <div className="flex items-center justify-center">
              <MdEmail className="mr-2 text-lg" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center justify-center">
              <FaFlag className="mr-2 text-lg" />
              <span>{user.nationality}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 w-full my-6"></div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 w-full">
          <Link 
            href="/form" 
            className="border text-center border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#155da9] hover:text-white transition duration-300 transform hover:-translate-y-1"
          >
            Submit Form
          </Link>
          
          <Link 
            href="/uploaddocuments" 
            className="border text-center flex items-center justify-center border-[#155da9] gap-4 text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#155da9] hover:text-white transition duration-300 transform hover:-translate-y-1"
          >
            <FaFileUpload />
            <span>Submit Documents</span>
          </Link>
          
          <Link 
            href="https://www.google.com/maps/place/SEAVIEW+IMMIGRATION+SERVICES+LTD./@62.6573279,-95.989235,3z/data=!4m8!3m7!1s0x5485db7e7b9362af:0x452379f030e0fecd!8m2!3d62.6573279!4d-95.989235!9m1!1b1!16s%2Fg%2F11t7jjysgm?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
            className="border text-center flex items-center justify-center border-[#155da9] gap-4 text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#8d8d8d] hover:text-white transition duration-300 transform hover:-translate-y-1"
          >
            <FaCommentAlt />
            <span>Give Feedback</span>
          </Link>
        </div>
      </div>
    </div>
  );
} 


