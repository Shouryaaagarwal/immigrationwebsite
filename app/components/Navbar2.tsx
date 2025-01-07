// "use client"   
// import Link from "next/link";
// import React, { useEffect, useState } from "react"   


// export default function Navbar() {   
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50); // Adjust threshold as needed
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//     return (
//       <div
//       className={`fixed top-0 left-0 w-full flex items-center justify-between md:h-[90px] z-30 transition-all duration-300 ${
//         isScrolled
//           ? "bg-[#1E201E] text-black shadow-lg"
//           : "bg-white text-black shadow-lg"
//       }`}
//     >
//       <div className="">
//       <img
//   className="h-[60px] pl-10 "
//   src="https://seaviewimmigration.com/assets/img/logo.svg"
//   alt="Logo"
// />
//       </div>
//       <div className="pr-10 flex md:gap-10">
//         <Link
//           href={"/"}
//           className={`px-4 py-2 rounded transition-colors duration-300 ${
//             isScrolled
//               ? "text-white hover:bg-[#c30e16] hover:text-gray-500"
//               : "text-black hover:bg-[#c30e16] hover:text-gray-500"
//           }`}
//         >
//           Home
//         </Link>
//         <Link href={"/aboutus"}
//           className={`px-4 py-2 rounded transition-colors duration-300 ${
//             isScrolled
//               ? "text-white hover:bg-[#c30e16] hover:text-gray-500"
//               : "text-black hover:bg-[#c30e16] hover:text-gray-500"
//           }`}
//         >
//           About Us
//         </Link>
//         <Link href={"/services"}
//           className={`px-4 py-2 rounded transition-colors duration-300 ${
//             isScrolled
//        ? "text-white hover:bg-[#c30e16] hover:text-gray-500"
//               : "text-black hover:bg-[#c30e16] hover:text-gray-500"
//           }`}
//         >
//           Services
//         </Link>
//         <Link
//           href="/contact"
//           className={`px-4 py-2 rounded transition-colors duration-300 ${
//             isScrolled
//          ? "text-white hover:bg-[#c30e16] hover:text-gray-500"
//               : "text-black hover:bg-[#c30e16] hover:text-gray-500"
//           }`}
//         >
//           Contact
//         </Link>
//         <Link href="/profile"
//           className={`px-4 py-2 rounded transition-colors duration-300 ${
//             isScrolled
//            ? "text-white hover:bg-[#c30e16] hover:text-gray-500"
//               : "text-black hover:bg-[#c30e16] hover:text-gray-500"
//           }`}
//         >
//           Profile
//         </Link>
//       </div>
//     </div>
//     );
//   }   



"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Adjust threshold as needed
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`top-0 left-0 w-full flex items-center justify-between md:h-[90px] z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1E201E] text-black shadow-lg"
          : "bg-white text-black shadow-lg"
      }`}
    >
      {/* Logo */}
      <div className="">
        <img
          className="h-[60px] pl-10"
          src="https://seaviewimmigration.com/assets/img/logo.svg"
          alt="Logo"
        />
      </div>

      {/* Navigation Links */}
      <div className="pr-10 flex md:gap-10">
        <Link
          href="/"
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            isScrolled
              ? "text-white hover:bg-[#c30e16] hover:text-gray-500"
              : "text-black hover:bg-[#c30e16] hover:text-gray-500"
          }`}
        >
          Home
        </Link>
        <Link
          href="/aboutus"
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            isScrolled
              ? "text-white hover:bg-[#c30e16] hover:text-gray-500"
              : "text-black hover:bg-[#c30e16] hover:text-gray-500"
          }`}
        >
          About Us
        </Link>
        <Link
          href="/services"
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            isScrolled
              ? "text-white hover:bg-[#c30e16] hover:text-gray-500"
              : "text-black hover:bg-[#c30e16] hover:text-gray-500"
          }`}
        >
          Services
        </Link>
        <Link
          href="/contact"
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            isScrolled
              ? "text-white hover:bg-[#c30e16] hover:text-gray-500"
              : "text-black hover:bg-[#c30e16] hover:text-gray-500"
          }`}
        >
          Contact
        </Link>
        <Link
          href="/profile"
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            isScrolled
              ? "text-white hover:bg-[#c30e16] hover:text-gray-500"
              : "text-black hover:bg-[#c30e16] hover:text-gray-500"
          }`}
        >
          Profile
        </Link>
      </div>
    </div>
  );
}

  
