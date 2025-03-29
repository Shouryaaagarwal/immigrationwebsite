"use client";
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdOutlinePhone } from "react-icons/md";
import { Raleway, Rambla } from "next/font/google";
import { FaTiktok } from "react-icons/fa6";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer
      style={{ fontFamily: raleway.style.fontFamily }}
      className="bg-[#1E201E] h-[70vh] w-full text-white py-8 flex p-10 "
    >
     

      <div className="flex flex-col gap-4 w-full">
        {/* First Section */}
        <div className="relative flex items-center justify-between">
          <div className="  h-[80px] w-[200px]  rounded-md  flex items-center justify-center">
          <img
  className="h-[60px] w-auto filter invert contrast-0 brightness-100"
  src="https://seaviewimmigration.com/assets/img/logo.svg"
  alt="Logo"
/>
          </div>
          <div>
            <div className=" mt-5 flex gap-8">
              <span className="text-xl">
                <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#155da9]">
                  <FaFacebookF />
                </div>
              </span>
              <span className="text-xl">
                <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#155da9]">
                  <FaInstagram />
                </div>
              </span>
              <span className="text-xl">
                <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#c30e16]">
                  <FaLinkedinIn />
                </div>{" "}
              </span>
              <span className="text-xl">
                <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#155da9]">
                  <FaTiktok />
                </div>{" "}
              </span>
            </div>
          </div>
        </div>
        <hr className="w-full h-[0.25px] text-white bg-white border-none" />

        {/* Second Section */}
        <div className="flex items-start p-10 justify-between">
  <div className="flex flex-col gap-4">
    <h1 className="text-2xl font-semibold text-gray-500">Office</h1>
    <h1>123 streets,</h1>
    <h1>New street in Toronto,</h1>
    <h1>Canada</h1>
    <h1>@email.com</h1>
    <h1>907383473943</h1>
  </div>
  <div className="flex flex-col gap-4">
    <h1 className="text-2xl font-semibold text-gray-500">Comapny</h1>
    <h1>About Us</h1>
    <h1>Services</h1>
    <h1>Contact Us</h1>
  </div>
  <div className="flex flex-col gap-4">
    <h1 className="text-2xl text-[#155da9]">Solutions</h1>
    <h1>Students</h1>
    <h1>Immigrants</h1>
    <h1>Families</h1>
  </div>
  <div className="flex flex-col gap-4">
    <h1 className="text-2xl text-[#155da9]">Support</h1>
    <h1>One To One Sessions</h1> 
    <h1>Lorem Ipsum</h1>
    <h1>Lorem Ipsum</h1>
    <h1>Lorem Ipsum</h1>
  </div>
  <div className="flex flex-col gap-4">
    <h1 className="text-2xl font-semibold text-gray-500">Legal</h1>
    <h1>One To One Sessions</h1> 
    <h1>Lorem Ipsum</h1>
    <h1 >Lorem Ipsum</h1>
    <h1>Lorem Ipsum</h1>
  </div>
</div>
   <div className="flex mt-5 text-xs text-gray-400 items-center justify-center">  
   © 2024 SeaViewImmigrationServices, Inc. All rights reserved.
     </div>
   
      </div>
    </footer>
  );
}
  

// "use client";
// import React from "react";
// import { CgMail } from "react-icons/cg";
// import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
// import { ImLocation } from "react-icons/im";
// import { MdOutlinePhone } from "react-icons/md";
// import { Raleway } from "next/font/google";
// import { FaTiktok } from "react-icons/fa6";

// const raleway = Raleway({
//   weight: ["400", "600", "800"],
//   subsets: ["latin"],
// });

// export default function Footer() {
//   return (
//     <footer
//       style={{ fontFamily: raleway.style.fontFamily }}
//       className="bg-[#1E201E] w-full text-white py-8 px-6 sm:px-10 flex flex-col gap-8"
//     >
//       {/* Top Section */}
//       <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6">
//         {/* Logo and Social Media */}
//         <div className="flex flex-col items-center md:items-start gap-4">
//           <div className="h-[80px] w-[200px] rounded-md flex items-center justify-center">
//             <img
//               className="h-[60px] w-auto filter invert contrast-0 brightness-100"
//               src="https://seaviewimmigration.com/assets/img/logo.svg"
//               alt="Logo"
//             />
//           </div>
//           <div className="flex gap-4 mt-2">
//             <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#155da9]">
//               <FaFacebookF />
//             </div>
//             <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#155da9]">
//               <FaInstagram />
//             </div>
//             <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#c30e16]">
//               <FaLinkedinIn />
//             </div>
//             <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#155da9]">
//               <FaTiktok />
//             </div>
//           </div>
//         </div>

//         {/* Navigation Links */}
//         <div className="flex flex-wrap justify-center md:justify-between w-full gap-8">
//           <div className="flex flex-col gap-2">
//             <h1 className="text-lg font-semibold text-gray-500">Office</h1>
//             <h1 className="text-sm">123 streets,</h1>
//             <h1 className="text-sm">New street in Toronto,</h1>
//             <h1 className="text-sm">Canada</h1>
//             <h1 className="text-sm">@email.com</h1>
//             <h1 className="text-sm">907383473943</h1>
//           </div>
//           <div className="flex flex-col gap-2">
//             <h1 className="text-lg font-semibold text-gray-500">Company</h1>
//             <h1 className="text-sm">About Us</h1>
//             <h1 className="text-sm">Services</h1>
//             <h1 className="text-sm">Contact Us</h1>
//           </div>
//           <div className="flex flex-col gap-2">
//             <h1 className="text-lg text-[#155da9]">Solutions</h1>
//             <h1 className="text-sm">Students</h1>
//             <h1 className="text-sm">Immigrants</h1>
//             <h1 className="text-sm">Families</h1>
//           </div>
//           <div className="flex flex-col gap-2">
//             <h1 className="text-lg text-[#155da9]">Support</h1>
//             <h1 className="text-sm">One To One Sessions</h1>
//             <h1 className="text-sm">Lorem Ipsum</h1>
//             <h1 className="text-sm">Lorem Ipsum</h1>
//             <h1 className="text-sm">Lorem Ipsum</h1>
//           </div>
//           <div className="flex flex-col gap-2">
//             <h1 className="text-lg font-semibold text-gray-500">Legal</h1>
//             <h1 className="text-sm">One To One Sessions</h1>
//             <h1 className="text-sm">Lorem Ipsum</h1>
//             <h1 className="text-sm">Lorem Ipsum</h1>
//             <h1 className="text-sm">Lorem Ipsum</h1>
//           </div>
//         </div>
//       </div>

//       <hr className="w-full h-[0.25px] text-white bg-white border-none" />

//       {/* Bottom Section */}
//       <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 text-xs text-gray-400">
//         <p>© 2024 SeaViewImmigrationServices, Inc. All rights reserved.</p>
//       </div>
//     </footer>
//   );
// }
