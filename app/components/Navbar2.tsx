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


// "use client";

// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { FiMenu, FiX } from "react-icons/fi";

// export default function Navbar2() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const navLinks = [
//     { href: "/home", label: "Home" },
//     { href: "/aboutus", label: "About Us" },
//     { href: "/services", label: "Services" },
//     { href: "/contact", label: "Contact" },
//     { href: "/profile", label: "Profile", isActive: true },
//   ];

//   return (
//     <div
//   className="top-0 left-0 w-full flex items-center justify-between md:h-[90px] bg-white text-black shadow-lg z-30 transition-all duration-300"
// >
//   {/* Logo */}
//   <div className="md:pl-10 pl-4 pt-2 pb-2">
//     <img
//       className="md:h-[60px] h-[50px]" 
//       src="https://seaviewimmigration.com/assets/img/logo.svg"
//       alt="Logo"
//     />
//   </div>

//   {/* Desktop Navigation Links */}
//   <div className="hidden md:flex pr-10 gap-10">
//     {navLinks.map(({ href, label, isActive }) => (
//       <Link
//         key={href}
//         href={href}
//         className={`px-4 py-2 rounded transition-colors duration-300 ${
//           isActive
//             ? "bg-[#c30e16] text-white"
//             : "text-black hover:bg-[#155da9] hover:text-white"
//         }`}
//       >
//         {label}
//       </Link>
//     ))}
//   </div>

//   {/* Mobile Hamburger Button */}
//   <div className="md:hidden pr-4">
//     <button
//       onClick={() => setIsMenuOpen(!isMenuOpen)}
//       className="focus:outline-none text-black"
//     >
//       {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//     </button>
//   </div>

//   {/* Mobile Menu */}
//   {isMenuOpen && (
//     <div className="absolute top-[90px] left-0 w-full md:hidden flex flex-col items-center py-4 bg-white shadow-lg">
//       {navLinks.map(({ href, label, isActive }) => (
//         <Link
//           key={href}
//           href={href}
//           className={`w-full py-2 text-center ${
//             isActive
//               ? "bg-[#c30e16] text-white"
//               : "text-black hover:bg-[#155da9] hover:text-white"
//           }`}
//           onClick={() => setIsMenuOpen(false)}
//         >
//           {label}
//         </Link>
//       ))}
//     </div>
//   )}
// </div>

//   );
// }





"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { FiMenu, FiX } from "react-icons/fi";
import { selectUser } from "@/store/authSlice";
import { gsap } from "gsap";

export default function Navbar() {
  const pathname = usePathname();
  const user = useSelector(selectUser);
  const isSignedIn = !!user;

  const [menuOpen, setMenuOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/aboutus", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  useEffect(() => {
    if (menuOpen && overlayRef.current && linksRef.current) {
      gsap.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.3, ease: "power2.out" }
      );

      const children = Array.from(linksRef.current.children);
      gsap.fromTo(
        children,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.out",
        }
      );
    } else if (!menuOpen && overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      });
    }
  }, [menuOpen]);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white text-gray-700 shadow-black/50 shadow-2xl transition-all duration-300">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/home">
          <img
            src="https://seaviewimmigration.com/assets/img/logo.svg"
            alt="Logo"
            className="md:h-14 h-10  w-auto"
          />
        </Link>

        {/* Desktop: MENU Button */}
        <button
          onClick={() => setMenuOpen(true)}
          className="hidden lg:block hover:scale-110 hover:transition-transform hover:duration-300 transition-transform duration-300 text-lg md:text-xl font-normal tracking-wide uppercase"
        >
          MENU
        </button>

        {/* Mobile: Hamburger Icon */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Fullscreen Overlay Menu */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-white text-black flex flex-col justify-center items-center transition-opacity duration-300 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Close Icon */}
        <button
          onClick={() => setMenuOpen(false)}
          className="absolute top-6 right-6 text-4xl"
        >
          <FiX />
        </button>

        {/* Navigation Links */}
        <div
          ref={linksRef}
          className="flex flex-col items-center gap-6 mt-6 text-center"
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className={`text-2xl md:text-4xl font-light tracking-wide hover:text-[#c30e16] transition-all duration-200 ${
                pathname === item.href ? "text-[#c30e16]" : ""
              }`}
            >
              {item.label}
            </Link>
          ))}

          {isSignedIn ? (
            <Link
              href="/profile"
              onClick={() => setMenuOpen(false)}
              className="mt-6 text-lg md:text-xl font-medium border px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              Go to Profile
            </Link>
          ) : (
            <Link
              href="/signup"
              onClick={() => setMenuOpen(false)}
              className="mt-6 text-lg md:text-xl font-medium border px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
            >
              Create Account
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
