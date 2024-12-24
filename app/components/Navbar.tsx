"use client"   
import Link from "next/link";
import React, { useEffect, useState } from "react"   


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
      className={`fixed top-0 left-0 w-full flex items-center justify-between md:h-[90px] z-30 transition-all duration-300 ${
        isScrolled
          ? "bg-white text-black shadow-lg"
          : "bg-black bg-opacity-30 text-white shadow-none"
      }`}
    >
      <div>
        <img
          className="h-[60px] pl-10 "
          src="https://seaviewimmigration.com/assets/img/logo.svg"
          alt="Logo"
        />
      </div>
      <div className="pr-10 flex md:gap-10">
        <Link
          href={"/"}
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            isScrolled
              ? "text-black hover:bg-[#c30e16] hover:text-white"
              : "text-white hover:bg-[#c30e16] hover:text-white"
          }`}
        >
          Home
        </Link>
        <Link href={"/aboutus"}
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            isScrolled
              ? "text-black hover:bg-[#c30e16] hover:text-white"
              : "text-white hover:bg-[#c30e16] hover:text-white"
          }`}
        >
          About Us
        </Link>
        <Link href={"/services"}
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            isScrolled
              ? "text-black hover:bg-[#c30e16] hover:text-white"
              : "text-white hover:bg-[#c30e16] hover:text-white"
          }`}
        >
          Services
        </Link>
        <Link
          href="/contact"
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            isScrolled
              ? "text-black hover:bg-[#c30e16] hover:text-white"
              : "text-white hover:bg-[#c30e16] hover:text-white"
          }`}
        >
          Contact
        </Link>
        <button
          className={`px-4 py-2 rounded transition-colors duration-300 ${
            isScrolled
              ? "text-black hover:bg-[#c30e16] hover:text-white"
              : "text-white hover:bg-[#c30e16] hover:text-white"
          }`}
        >
          Profile
        </button>
      </div>
    </div>
    );
  }
  
