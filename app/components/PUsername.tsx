"use client";
import Link from "next/link";
import { FaUserCircle, FaFlag, FaCommentAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { useSelector } from "react-redux";
import Image from "next/image";

export default function Username() {

  const details = useSelector((state:any) => state.auth.user);
  const user = {
    name: details?.name || "John Doe",
    email: details?.email || "abc@gmail.com",
    nationality: details?.nationality || "Indian",
  };

  return (
    <div className="flex items-center justify-center ">
      {/* Card Container */}
      <div className="bg-white rounded-xl shadow-md overflow-hidden w-full max-w-md">
        {/* Card Content */}
        <div className="p-8 flex flex-col items-center">
          {/* User Profile Section */}
          <div className="flex flex-col items-center gap-6 w-full">
            {/* User Icon - Using Next.js Image component */}
            <div className="relative w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
              <Image
                src="/signinicon.png" // Make sure this path is correct in your public folder
                alt="User profile"
                width={96}
                height={96}
                className="object-cover"
                priority
              />
            </div>
            
            {/* User Details - Stacked vertically */}
            <div className="flex flex-col gap-4 w-full">
              <h1 className="text-2xl font-semibold text-gray-800 text-center">
                {user.name}
              </h1>
              
              {/* Email */}
              <div className="flex items-center justify-center text-gray-600">
                <MdEmail className="mr-3 text-lg" />
                <span>{user.email}</span>
              </div>
              
              {/* Nationality */}
              <div className="flex items-center justify-center text-gray-600">
                <FaFlag className="mr-3 text-lg" />
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
              className="border-[1px] text-center border-[#155da9] mt-4 text-[#155da9] px-8 py-3 text-sm sm:text-base font-normal hover:bg-[#155da9] hover:text-white transition-all duration-300 hover:-translate-y-1 rounded-full"
            >
              Submit Form
            </Link>
            
            <Link 
              href="https://www.google.com/maps/place/SEAVIEW+IMMIGRATION+SERVICES+LTD./@62.6573279,-95.989235,3z/data=!4m8!3m7!1s0x5485db7e7b9362af:0x452379f030e0fecd!8m2!3d62.6573279!4d-95.989235!9m1!1b1!16s%2Fg%2F11t7jjysgm?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
              className="border-[1px] text-center flex items-center justify-center border-[#155da9] gap-4 hover:border-[#f1f1f1] mt-4 text-[#155da9] px-8 py-3 text-sm sm:text-base font-normal hover:bg-[#c2c1c1] hover:text-black transition-all duration-300 hover:-translate-y-1 rounded-full"
            >
              <FaCommentAlt className="text-gray-600" />
              <span>Give Feedback</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}