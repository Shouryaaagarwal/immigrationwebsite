// "use client"
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { usePathname, useRouter } from "next/navigation";
// import { FiMenu, FiX } from "react-icons/fi";
// import { useSelector, useDispatch } from "react-redux";
// import { selectUser, clearAuthSuccess } from "@/store/authSlice";

// export default function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [logoutError, setLogoutError] = useState<string | null>(null);
//   const pathname = usePathname();
//   const router = useRouter();
//   const dispatch = useDispatch();
  
//   const user = useSelector(selectUser);
//   const isSignedIn = !!user;
//   console.log("User:", user);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = async () => {
//     setLogoutError(null);
//     setIsLoggingOut(true);
    
//     try {
//       const response = await fetch('/api/users/logout', { method: 'POST' });
      
//       if (!response.ok) {
//         throw new Error('Logout failed - server error');
//       }

//       dispatch(clearAuthSuccess());
//       router.push('/home');
//       router.refresh();
//     } catch (error) {
//       setLogoutError(error instanceof Error ? error.message : 'Logout failed');
//       console.error('Logout error:', error);
//     } finally {
//       setIsLoggingOut(false);
//     }
//   };

//   const navLinks = [
//     { href: "/home", label: "Home" },
//     { href: "/aboutus", label: "About Us" },
//     { href: "/services", label: "Services" },
//     { href: "/contact", label: "Contact" },
//     ...(isSignedIn 
//       ? [
//           { href: "/profile", label: "Profile" },
//           { label: "Logout", onClick: handleLogout }
//         ]
//       : [{ href: "/signin", label: "Sign-in" }])
//   ];

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full flex items-center justify-between h-[70px] md:h-[90px] z-30 transition-all duration-300 px-4 md:px-10 ${
//         isScrolled 
//           ? "bg-white text-black shadow-lg" 
//           : "bg-black bg-opacity-30 text-white"
//       }`}
//     >
//       <div>

//         <img
//   className="h-[50px] md:h-[60px] transition-all duration-300"
//   src="https://seaviewimmigration.com/assets/img/logo.svg"
//   style={{
//     filter: isScrolled ? "none" : "brightness(0) invert(1)",
//   }}
//   alt="Logo"
// />



//       </div>
      
//       {/* Desktop Navigation */}
//       <div className="hidden md:flex gap-6 md:gap-10">
//         {navLinks.map((item) => (
//           item.onClick ? (
//             <button
//               key="logout"
//               onClick={item.onClick}
//               disabled={isLoggingOut}
//               className={`px-4 py-2 rounded transition-colors duration-300 ${
//                 isScrolled 
//                   ? "text-black hover:bg-[#155da9] hover:text-white" 
//                   : "text-white hover:bg-[#155da9] hover:text-white"
//               } ${isLoggingOut ? "opacity-50 cursor-not-allowed" : ""}`}
//             >
//               {isLoggingOut ? "Logging out..." : item.label}
//             </button>
//           ) : (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`px-4 py-2 rounded transition-colors duration-300 ${
//                 pathname === item.href
//                   ? "text-white bg-[#c30e16]"
//                   : isScrolled 
//                     ? "text-black hover:bg-[#155da9] hover:text-white" 
//                     : "text-white hover:bg-[#155da9] hover:text-white"
//               }`}
//             >
//               {item.label}
//             </Link>
//           )
//         ))}
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden flex items-center">
//         <button 
//           onClick={() => setIsMenuOpen(!isMenuOpen)} 
//           className={`focus:outline-none ${
//             isScrolled ? "text-black" : "text-white"
//           }`}
//           aria-label="Toggle menu"
//         >
//           {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div className={`absolute top-[70px] left-0 w-full ${
//           isScrolled ? "bg-white text-black" : "bg-black bg-opacity-90 text-white"
//         } flex flex-col items-center py-4 md:hidden shadow-lg`}>
//           {navLinks.map((item) => (
//             item.onClick ? (
//               <button
//                 key="logout"
//                 onClick={() => {
//                   item.onClick?.();
//                   setIsMenuOpen(false);
//                 }}
//                 disabled={isLoggingOut}
//                 className={`py-2 text-lg w-full text-center ${
//                   "hover:bg-[#155da9] hover:text-white"
//                 } ${isLoggingOut ? "opacity-50 cursor-not-allowed" : ""}`}
//               >
//                 {isLoggingOut ? "Logging out..." : item.label}
//               </button>
//             ) : (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 className={`py-2 text-lg w-full text-center ${
//                   pathname === item.href
//                     ? "bg-[#c30e16] text-white"
//                     : "hover:bg-[#155da9] hover:text-white"
//                 }`}
//                 onClick={() => setIsMenuOpen(false)}
//               >
//                 {item.label}
//               </Link>
//             )
//           ))}
//         </div>
//       )}

//       {/* Error Message (optional) */}
//       {logoutError && (
//         <div className="absolute top-full left-0 w-full bg-red-100 text-red-700 p-2 text-center">
//           {logoutError}
//         </div>
//       )}
//     </div>
//   );
// }




// "use client";

// import Link from "next/link";
// import { usePathname, useRouter } from "next/navigation";
// import { useSelector, useDispatch } from "react-redux";
// import { useState, useEffect } from "react";
// import { FiMenu, FiX } from "react-icons/fi";
// import { selectUser, clearAuthSuccess } from "@/store/authSlice";

// export default function Navbar() {
//   const pathname = usePathname();
//   const router = useRouter();
//   const dispatch = useDispatch();

//   const user = useSelector(selectUser);
//   const isSignedIn = !!user;

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [logoutError, setLogoutError] = useState<string | null>(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const handleLogout = async () => {
//     setLogoutError(null);
//     setIsLoggingOut(true);
//     try {
//       const response = await fetch("/api/users/logout", {
//         method: "POST",
//       });
//       if (!response.ok) throw new Error("Logout failed");
//       dispatch(clearAuthSuccess());
//       router.push("/home");
//       router.refresh();
//     } catch (err) {
//       setLogoutError(err instanceof Error ? err.message : "Logout failed");
//     } finally {
//       setIsLoggingOut(false);
//     }
//   };

//   const navLinks = [
//     { href: "/home", label: "Home" },
//     { href: "/aboutus", label: "About Us" },
//     { href: "/services", label: "Services" },
//     { href: "/contact", label: "Contact" },
//     ...(isSignedIn
//       ? [
//           { href: "/profile", label: "Profile" },
//           { label: "Logout", onClick: handleLogout },
//         ]
//       : [{ href: "/signin", label: "Sign-in" }]),
//   ];

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full flex items-center justify-between h-[70px] md:h-[90px] z-30 transition-all duration-300 px-4 md:px-10 ${
//         isScrolled
//           ? "bg-white text-black shadow-lg"
//           : "bg-black bg-opacity-30 text-white"
//       }`}
//     >
//       {/* Logo */}
//       <div>
//         <img
//           className="h-[50px] md:h-[60px] transition-all duration-300"
//           src="https://seaviewimmigration.com/assets/img/logo.svg"
//           style={{
//             filter: isScrolled ? "none" : "brightness(0) invert(1)",
//           }}
//           alt="Logo"
//         />
//       </div>

//       {/* Desktop Nav */}
//       <div className="hidden md:flex gap-6 md:gap-10 items-center">
//         {isSignedIn && (
//           <img
//             src="/signinicon.png"
//             alt="User Icon"
//             className="h-8 w-8 rounded-full object-cover"
//           />
//         )}
//         {navLinks.map((item) =>
//           item.onClick ? (
//             <button
//               key="logout"
//               onClick={item.onClick}
//               disabled={isLoggingOut}
//               className={`px-4 py-2 rounded transition-colors duration-300 ${
//                 isScrolled
//                   ? "text-black hover:bg-[#155da9] hover:text-white"
//                   : "text-white hover:bg-[#155da9] hover:text-white"
//               } ${isLoggingOut ? "opacity-50 cursor-not-allowed" : ""}`}
//             >
//               {isLoggingOut ? "Logging out..." : item.label}
//             </button>
//           ) : (
//             <Link
//               key={item.href}
//               href={item.href}
//               className={`px-4 py-2 rounded transition-colors duration-300 ${
//                 pathname === item.href
//                   ? "text-white bg-[#c30e16]"
//                   : isScrolled
//                   ? "text-black hover:bg-[#155da9] hover:text-white"
//                   : "text-white hover:bg-[#155da9] hover:text-white"
//               }`}
//             >
//               {item.label}
//             </Link>
//           )
//         )}
//       </div>

//       {/* Mobile Menu Toggle */}
//       <div className="md:hidden flex items-center">
//         <button
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//           className={`focus:outline-none ${
//             isScrolled ? "text-black" : "text-white"
//           }`}
//         >
//           {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMenuOpen && (
//         <div
//           className={`absolute top-[70px] left-0 w-full ${
//             isScrolled
//               ? "bg-white text-black"
//               : "bg-black bg-opacity-90 text-white"
//           } flex flex-col items-center py-4 md:hidden shadow-lg`}
//         >
//           {isSignedIn && (
//             <img
//               src="/signinicon.png"
//               alt="User Icon"
//               className="h-12 w-12 rounded-full object-cover mb-4"
//             />
//           )}
//           {navLinks.map((item) =>
//             item.onClick ? (
//               <button
//                 key="logout"
//                 onClick={() => {
//                   item.onClick?.();
//                   setIsMenuOpen(false);
//                 }}
//                 disabled={isLoggingOut}
//                 className={`py-2 text-lg w-full text-center hover:bg-[#155da9] hover:text-white ${
//                   isLoggingOut ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//               >
//                 {isLoggingOut ? "Logging out..." : item.label}
//               </button>
//             ) : (
//               <Link
//                 key={item.href}
//                 href={item.href}
//                 onClick={() => setIsMenuOpen(false)}
//                 className={`py-2 text-lg w-full text-center ${
//                   pathname === item.href
//                     ? "bg-[#c30e16] text-white"
//                     : "hover:bg-[#155da9] hover:text-white"
//                 }`}
//               >
//                 {item.label}
//               </Link>
//             )
//           )}
//         </div>
//       )}

//       {/* Logout Error (if any) */}
//       {logoutError && (
//         <div className="absolute top-full left-0 w-full bg-red-100 text-red-700 p-2 text-center">
//           {logoutError}
//         </div>
//       )}
//     </div>
//   );
// }


"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { selectUser, clearAuthSuccess } from "@/store/authSlice";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  const isSignedIn = !!user;

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [logoutError, setLogoutError] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = async () => {
    setLogoutError(null);
    setIsLoggingOut(true);
    try {
      const response = await fetch("/api/users/logout", {
        method: "POST",
      });
      if (!response.ok) throw new Error("Logout failed");
      dispatch(clearAuthSuccess());
      router.push("/home");
      router.refresh();
    } catch (err) {
      setLogoutError(err instanceof Error ? err.message : "Logout failed");
    } finally {
      setIsLoggingOut(false);
    }
  };

  const navLinks = [
    { href: "/home", label: "Home" },
    { href: "/aboutus", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div
      className={`fixed top-0 left-0 w-full flex items-center justify-between h-[70px] md:h-[90px] z-30 transition-all duration-300 px-4 md:px-10 ${
        isScrolled
          ? "bg-white text-black shadow-lg"
          : "bg-black bg-opacity-30 text-white"
      }`}
    >
      {/* Logo */}
      <div>
        <img
          className="h-[50px] md:h-[60px] transition-all duration-300"
          src="https://seaviewimmigration.com/assets/img/logo.svg"
          style={{
            filter: isScrolled ? "none" : "brightness(0) invert(1)",
          }}
          alt="Logo"
        />
      </div>

      {/* Desktop Nav */}
      <div className="hidden md:flex gap-6 md:gap-10 items-center ml-auto">
        {navLinks.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`px-4 py-2 rounded transition-colors duration-300 ${
              pathname === item.href
                ? "text-white bg-[#c30e16]"
                : isScrolled
                ? "text-black hover:bg-[#155da9] hover:text-white"
                : "text-white hover:bg-[#155da9] hover:text-white"
            }`}
          >
            {item.label}
          </Link>
        ))}

        {/* Sign-in/Profile Icon at the end */}
        {isSignedIn ? (
          <>
            <Link href="/profile">
              <img
                src="/signinicon.png"
                alt="User Icon"
                title="Your Profile"
                className="h-8 w-8 rounded-full object-cover cursor-pointer hover:scale-105 transition-transform"
              />
            </Link>
            <button
              onClick={handleLogout}
              disabled={isLoggingOut}
              className={`px-4 py-2 rounded transition-colors duration-300 ${
                isScrolled
                  ? "text-black hover:bg-[#155da9] hover:text-white"
                  : "text-white hover:bg-[#155da9] hover:text-white"
              } ${isLoggingOut ? "opacity-50 cursor-not-allowed" : ""}`}
            >
              {isLoggingOut ? "Logging out..." : "Logout"}
            </button>
          </>
        ) : (
          <Link href="/signup">
            <img
              src="/createaccount.png"
              alt="Create Account"
              title="Create Account"
              className="h-8 w-8 rounded-full object-cover cursor-pointer hover:scale-105 transition-transform"
              style={{
                filter: isScrolled ? "none" : "brightness(0) invert(1)",
              }}
            />
          </Link>
        )}
      </div>

      {/* Mobile Menu Toggle */}
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
        <div
          className={`absolute top-[70px] left-0 w-full ${
            isScrolled
              ? "bg-white text-black"
              : "bg-black bg-opacity-90 text-white"
          } flex flex-col items-center py-4 md:hidden shadow-lg`}
        >
          {navLinks.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={`py-2 text-lg w-full text-center ${
                pathname === item.href
                  ? "bg-[#c30e16] text-white"
                  : "hover:bg-[#155da9] hover:text-white"
              }`}
            >
              {item.label}
            </Link>
          ))}

          {isSignedIn ? (
            <>
              <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
                <img
                  src="/signinicon.png"
                  alt="User Icon"
                  title="Your Profile"
                  className="h-12 w-12 rounded-full object-cover mb-2"
                />
              </Link>
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                disabled={isLoggingOut}
                className={`py-2 text-lg w-full text-center hover:bg-[#155da9] hover:text-white ${
                  isLoggingOut ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoggingOut ? "Logging out..." : "Logout"}
              </button>
            </>
          ) : (
            <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
              <img
                src="/createaccount.png"
                alt="Create Account"
                title="Create Account"
                className="h-12 w-12 rounded-full object-cover mt-2"
                style={{
                  filter: isScrolled ? "none" : "brightness(0) invert(1)",
                }}
              />
            </Link>
          )}
        </div>
      )}

      {/* Logout Error (if any) */}
      {logoutError && (
        <div className="absolute top-full left-0 w-full bg-red-100 text-red-700 p-2 text-center">
          {logoutError}
        </div>
      )}
    </div>
  );
}

