"use client"   
import Link from "next/link";
import React, { useEffect, useState } from "react";   
import { usePathname } from "next/navigation";
import { FiMenu, FiX } from "react-icons/fi";

export default function Navbar() {   
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/aboutus", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
    { href: "/profile", label: "Profile" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full flex items-center justify-between h-[70px] md:h-[90px] z-30 transition-all duration-300 px-4 md:px-10 ${
        isScrolled 
          ? "bg-white text-black shadow-lg" 
          : "bg-black bg-opacity-30 text-white"
      }`}
    >
      <div>
        <img
          className="h-[50px] md:h-[60px]"
          src="https://seaviewimmigration.com/assets/img/logo.svg"
          alt="Logo"
        />
      </div>
      <div className="hidden md:flex gap-6 md:gap-10">
        {navLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className={`px-4 py-2 rounded transition-colors duration-300 ${
              pathname === href
                ? "text-white bg-[#c30e16]"
                : isScrolled 
                  ? "text-black hover:bg-[#155da9] hover:text-white" 
                  : "text-white hover:bg-[#155da9] hover:text-white"
            }`}
          >
            {label}
          </Link>
        ))}
      </div>
      <div className="md:hidden flex items-center">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)} 
          className={`focus:outline-none ${
            isScrolled ? "text-black" : "text-white"
          }`}
        >
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className={`absolute top-[70px] left-0 w-full ${
          isScrolled ? "bg-white text-black" : "bg-black bg-opacity-90 text-white"
        } flex flex-col items-center py-4 md:hidden shadow-lg`}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`py-2 text-lg w-full text-center ${
                pathname === href
                  ? "bg-[#c30e16] text-white"
                  : "hover:bg-[#155da9] hover:text-white"
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