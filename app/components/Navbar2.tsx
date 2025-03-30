// "use client";

// import Link from "next/link";
// import React, { useEffect, useState } from "react";

// export default function Navbar2() {
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

//   return (
//     <div
//       className={`top-0 left-0 w-full flex items-center justify-between md:h-[90px] z-30 transition-all duration-300 ${
//         isScrolled
//           ? "bg-[#1E201E] text-black shadow-lg"
//           : "bg-white text-black shadow-lg"
//       }`}
//     >
//       {/* Logo */}
//       <div className="">
//         <img
//           className="h-[60px] pl-10"
//           src="https://seaviewimmigration.com/assets/img/logo.svg"
//           alt="Logo"
//         />
//       </div>

//       {/* Navigation Links */}
//       <div className="pr-10 flex md:gap-10">
//         <Link
//           href="/"
//           className={`px-4 py-2 rounded transition-colors duration-300 ${
//             isScrolled
//               ? "text-white hover:bg-[#155da9]"
//               : "text-black hover:bg-[#155da9] hover:text-white"
//           }`}
//         >
//           Home
//         </Link>
//         <Link
//           href="/aboutus"
//           className={`px-4 py-2 rounded transition-colors duration-300 ${
//             isScrolled
//               ? "text-white hover:bg-[#155da9]"
//               : "text-black hover:bg-[#155da9] hover:text-white"
//           }`}
//         >
//           About Us
//         </Link>
//         <Link
//           href="/services"
//           className={`px-4 py-2 rounded transition-colors duration-300 ${
//             isScrolled
//               ? "text-white hover:bg-[#155da9]"
//               : "text-black hover:bg-[#155da9] hover:text-white"
//           }`}
//         >
//           Services
//         </Link>
//         <Link
//           href="/contact"
//           className={`px-4 py-2 rounded transition-colors duration-300 ${
//             isScrolled
//               ? "text-white hover:bg-[#155da9]"
//               : "text-black hover:bg-[#155da9] hover:text-white"
//           }`}
//         >
//           Contact
//         </Link>
//         <Link
//           href="/profile"
//           className={`px-4 py-2  rounded transition-colors duration-300 ${
//             isScrolled
//               ? "text-white hover:bg-[#155da9]"
//               : "text-black hover:bg-[#155da9] hover:text-white"
//           }`}
//         >
//           Profile
//         </Link>
//       </div>
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar2() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/aboutus", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/profile", label: "Profile", isActive: true },
  ];

  return (
    <div
      className={`top-0 left-0 w-full flex items-center justify-between md:h-[90px] z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1E201E] text-black shadow-lg"
          : "bg-white text-black shadow-lg"
      }`}
    >
      {/* Logo */}
      <div className="md:pl-10 pl-4 pt-2 pb-2">
        <img
          className="md:h-[60px] h-[50px]" 
          src="https://seaviewimmigration.com/assets/img/logo.svg"
          alt="Logo"
        />
      </div>

      {/* Desktop Navigation Links - Unchanged except Profile */}
      <div className="hidden md:flex pr-10 gap-10">
        {navLinks.map(({ href, label, isActive }) => (
          <Link
            key={href}
            href={href}
            className={`px-4 py-2 rounded transition-colors duration-300 ${
              isActive
                ? "bg-[#c30e16] text-white"
                : isScrolled
                ? "text-white hover:bg-[#155da9]"
                : "text-black hover:bg-[#155da9] hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden pr-4">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`focus:outline-none ${
            isScrolled ? "text-white" : "text-black"
          }`}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`absolute top-[90px] left-0 w-full md:hidden flex flex-col items-center py-4 ${
            isScrolled ? "bg-[#1E201E]" : "bg-white"
          } shadow-lg`}
        >
          {navLinks.map(({ href, label, isActive }) => (
            <Link
              key={href}
              href={href}
              className={`w-full py-2 text-center ${
                isActive
                  ? "bg-[#c30e16] text-white"
                  : isScrolled
                  ? "text-white hover:bg-[#155da9]"
                  : "text-black hover:bg-[#155da9] hover:text-white"
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}