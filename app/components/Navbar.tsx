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
//   ];

//   return (
//     <div
//       className={`fixed top-0 left-0 w-full flex items-center justify-between h-[70px] md:h-[90px] z-30 transition-all duration-300 px-4 md:px-10 ${
//         isScrolled
//           ? "bg-white text-black shadow-lg"
//           : "bg-black bg-opacity-0 text-white"
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
//       <div className="hidden md:flex gap-6 md:gap-10 items-center ml-auto">
//         {navLinks.map((item) => (
//           <Link
//             key={item.href}
//             href={item.href}
//             className={`px-4 py-2 rounded transition-colors duration-300 ${
//               pathname === item.href
//                 ? "text-white bg-[#c30e16]"
//                 : isScrolled
//                 ? "text-black hover:bg-[#155da9] hover:text-white"
//                 : "text-white hover:bg-[#155da9] hover:text-white"
//             }`}
//           >
//             {item.label}
//           </Link>
//         ))}

//         {/* Sign-in/Profile Icon at the end */}
//         {isSignedIn ? (
//           <>
//             <Link href="/profile">
//               <img
//                 src="/signinicon.png"
//                 alt="User Icon"
//                 title="Your Profile"
//                 className="h-8 w-8 rounded-full object-cover cursor-pointer hover:scale-105 transition-transform"
//               />
//             </Link>
//             <button
//               onClick={handleLogout}
//               disabled={isLoggingOut}
//               className={`px-4 py-2 rounded transition-colors duration-300 ${
//                 isScrolled
//                   ? "text-black hover:bg-[#155da9] hover:text-white"
//                   : "text-white hover:bg-[#155da9] hover:text-white"
//               } ${isLoggingOut ? "opacity-50 cursor-not-allowed" : ""}`}
//             >
//               {isLoggingOut ? "Logging out..." : "Logout"}
//             </button>
//           </>
//         ) : (
//           <Link href="/signup">
//             <img
//               src="/createaccount.png"
//               alt="Create Account"
//               title="Create Account"
//               className="h-8 w-8 rounded-full object-cover cursor-pointer hover:scale-105 transition-transform"
//               style={{
//                 filter: isScrolled ? "none" : "brightness(0) invert(1)",
//               }}
//             />
//           </Link>
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
//           {navLinks.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               onClick={() => setIsMenuOpen(false)}
//               className={`py-2 text-lg w-full text-center ${
//                 pathname === item.href
//                   ? "bg-[#c30e16] text-white"
//                   : "hover:bg-[#155da9] hover:text-white"
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}

//           {isSignedIn ? (
//             <>
//               <Link href="/profile" onClick={() => setIsMenuOpen(false)}>
//                 <img
//                   src="/signinicon.png"
//                   alt="User Icon"
//                   title="Your Profile"
//                   className="h-12 w-12 rounded-full object-cover mb-2"
//                 />
//               </Link>
//               <button
//                 onClick={() => {
//                   handleLogout();
//                   setIsMenuOpen(false);
//                 }}
//                 disabled={isLoggingOut}
//                 className={`py-2 text-lg w-full text-center hover:bg-[#155da9] hover:text-white ${
//                   isLoggingOut ? "opacity-50 cursor-not-allowed" : ""
//                 }`}
//               >
//                 {isLoggingOut ? "Logging out..." : "Logout"}
//               </button>
//             </>
//           ) : (
//             <Link href="/signup" onClick={() => setIsMenuOpen(false)}>
//               <img
//                 src="/createaccount.png"
//                 alt="Create Account"
//                 title="Create Account"
//                 className="h-12 w-12 rounded-full object-cover mt-2"
//                 style={{
//                   filter: isScrolled ? "none" : "brightness(0) invert(1)",
//                 }}
//               />
//             </Link>
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



 


// "use client";

// import Link from "next/link";
// import { useEffect, useRef, useState } from "react";
// import { usePathname } from "next/navigation";
// import { FiMenu, FiX } from "react-icons/fi";
// import { gsap } from "gsap";
// import { useSelector } from "react-redux";
// import { selectUser } from "@/store/authSlice";

// export default function Navbar() {
//   const pathname = usePathname();
//   const user = useSelector(selectUser);
//   const isSignedIn = !!user;

//   const [menuOpen, setMenuOpen] = useState(false);
//   const overlayRef = useRef<HTMLDivElement>(null);

//   const navLinks = [
//     { href: "/home", label: "Home" },
//     { href: "/aboutus", label: "About Us" },
//     { href: "/services", label: "Services" },
//     { href: "/contact", label: "Contact" },
//   ];

//   useEffect(() => {
//     if (menuOpen && overlayRef.current) {
//       gsap.fromTo(
//         overlayRef.current,
//         { clipPath: "circle(0% at 90% 10%)" },
//         {
//           clipPath: "circle(150% at 50% 50%)",
//           duration: 0.5,
//           ease: "power2.out",
//         }
//       );
//     } else if (overlayRef.current) {
//       gsap.to(overlayRef.current, {
//         clipPath: "circle(0% at 90% 10%)",
//         duration: 0.5,
//         ease: "power2.in",
//       });
//     }
//   }, [menuOpen]);

//   return (
//     <header className="fixed top-0 left-0 w-full z-50 text-white">
//       {/* Top bar */}
//       <div className="flex justify-between items-center px-6 py-4">
//         <Link href="/home">
//           <img
//             src="https://seaviewimmigration.com/assets/img/logo.svg"
//             alt="Logo"
//             className="h-10 w-auto"
//           />
//         </Link>
//         <button
//           onClick={() => setMenuOpen((prev) => !prev)}
//           className="text-white text-2xl z-50 md:text-3xl"
//         >
//           {menuOpen ? <FiX /> : <FiMenu />}
//         </button>
//       </div>

//       {/* Full Page Nav */}
//       <div
//         ref={overlayRef}
//         className="fixed top-0 left-0 w-full h-full bg-black text-white flex flex-col items-center justify-center gap-8 transition-all duration-300 pointer-events-none"
//         style={{
//           clipPath: "circle(0% at 90% 10%)",
//           pointerEvents: menuOpen ? "auto" : "none",
//         }}
//       >
//         {navLinks.map((item) => (
//           <Link
//             key={item.href}
//             href={item.href}
//             onClick={() => setMenuOpen(false)}
//             className={`text-2xl md:text-4xl font-semibold transition hover:text-[#c30e16] ${
//               pathname === item.href ? "text-[#c30e16]" : ""
//             }`}
//           >
//             {item.label}
//           </Link>
//         ))}

//         {isSignedIn ? (
//           <Link
//             href="/profile"
//             onClick={() => setMenuOpen(false)}
//             className="text-xl mt-4 border px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
//           >
//             Go to Profile
//           </Link>
//         ) : (
//           <Link
//             href="/signup"
//             onClick={() => setMenuOpen(false)}
//             className="text-xl mt-4 border px-6 py-2 rounded-full hover:bg-white hover:text-black transition"
//           >
//             Create Account
//           </Link>
//         )}
//       </div>
//     </header>
//   );
// }
   




// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { FiMenu, FiX } from "react-icons/fi";
// import { selectUser } from "@/store/authSlice";
// import { gsap } from "gsap";

// export default function Navbar() {
//   const pathname = usePathname();
//   const user = useSelector(selectUser);
//   const isSignedIn = !!user;

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const overlayRef = useRef<HTMLDivElement>(null);
//   const linksRef = useRef<HTMLDivElement>(null);

//   const navLinks = [
//     { href: "/home", label: "Home" },
//     { href: "/aboutus", label: "About Us" },
//     { href: "/services", label: "Services" },
//     { href: "/contact", label: "Contact" },
//   ];

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   useEffect(() => {
//     if (menuOpen && overlayRef.current) {
//       gsap.fromTo(
//         overlayRef.current,
//         { opacity: 0 },
//         { opacity: 1, duration: 0.3, ease: "power2.out" }
//       );

//       gsap.fromTo(
//         linksRef.current?.children,
//         { y: 30, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           stagger: 0.1,
//           duration: 0.4,
//           ease: "power2.out",
//         }
//       );
//     } else if (!menuOpen && overlayRef.current) {
//       gsap.to(overlayRef.current, {
//         opacity: 0,
//         duration: 0.3,
//         ease: "power2.in",
//       });
//     }
//   }, [menuOpen]);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow text-black" : "bg-transparent text-white"
//       }`}
//     >
//       {/* Top Bar */}
//       <div className="flex justify-between items-center px-6 py-4">
//         <Link href="/home">
//           <img
//             src="https://seaviewimmigration.com/assets/img/logo.svg"
//             alt="Logo"
//             className="h-10 w-auto"
//             style={{
//               filter: isScrolled ? "none" : "brightness(0) invert(1)",
//             }}
//           />
//         </Link>

//         {/* Desktop: MENU + icon */}
//         <div className="hidden md:flex flex-col items-end gap-1">
//           <button
//             onClick={() => setMenuOpen(true)}
//             className="text-sm uppercase tracking-wider font-light"
//           >
//             MENU
//           </button>
//           <button onClick={() => setMenuOpen(true)} className="text-2xl">
//             <FiMenu />
//           </button>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setMenuOpen(true)}
//         >
//           <FiMenu />
//         </button>
//       </div>

//       {/* Full Page Menu */}
//       <div
//         ref={overlayRef}
//         className={`fixed inset-0 bg-white text-black flex flex-col justify-center items-center transition-opacity duration-300 ${
//           menuOpen ? "pointer-events-auto" : "pointer-events-none opacity-0"
//         }`}
//       >
//         <button
//           onClick={() => setMenuOpen(false)}
//           className="absolute top-6 right-6 text-3xl"
//         >
//           <FiX />
//         </button>

//         <div
//           ref={linksRef}
//           className="flex flex-col items-center gap-6 mt-6 text-center"
//         >
//           {navLinks.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               onClick={() => setMenuOpen(false)}
//               className={`text-2xl md:text-4xl font-light tracking-wide hover:text-[#c30e16] transition-all duration-200 ${
//                 pathname === item.href ? "text-[#c30e16]" : ""
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}

//           {isSignedIn ? (
//             <Link
//               href="/profile"
//               onClick={() => setMenuOpen(false)}
//               className="mt-6 text-lg md:text-xl font-medium border px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
//             >
//               Go to Profile
//             </Link>
//           ) : (
//             <Link
//               href="/signup"
//               onClick={() => setMenuOpen(false)}
//               className="mt-6 text-lg md:text-xl font-medium border px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
//             >
//               Create Account
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }




// "use client";

// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
// import { FiMenu, FiX } from "react-icons/fi";
// import { selectUser } from "@/store/authSlice";
// import { gsap } from "gsap";

// export default function Navbar() {
//   const pathname = usePathname();
//   const user = useSelector(selectUser);
//   const isSignedIn = !!user;

//   const [isScrolled, setIsScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const overlayRef = useRef<HTMLDivElement>(null);
//   const linksRef = useRef<HTMLDivElement>(null);

//   const navLinks = [
//     { href: "/home", label: "Home" },
//     { href: "/aboutus", label: "About Us" },
//     { href: "/services", label: "Services" },
//     { href: "/contact", label: "Contact" },
//   ];

//   // Scroll detection
//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 50);
//     window.addEventListener("scroll", onScroll);
//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // GSAP Animations
//   useEffect(() => {
//     if (menuOpen && overlayRef.current && linksRef.current) {
//       gsap.fromTo(
//         overlayRef.current,
//         { opacity: 0 },
//         { opacity: 1, duration: 0.3, ease: "power2.out" }
//       );

//       const children = Array.from(linksRef.current.children);
//       gsap.fromTo(
//         children,
//         { y: 30, opacity: 0 },
//         {
//           y: 0,
//           opacity: 1,
//           stagger: 0.1,
//           duration: 0.4,
//           ease: "power2.out",
//         }
//       );
//     } else if (!menuOpen && overlayRef.current) {
//       gsap.to(overlayRef.current, {
//         opacity: 0,
//         duration: 0.3,
//         ease: "power2.in",
//       });
//     }
//   }, [menuOpen]);

//   return (
//     <header
//       className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? "bg-white shadow text-black" : "bg-transparent text-white"
//       }`}
//     >
//       {/* Top Bar */}
//       <div className="flex justify-between items-center px-6 py-4">
//         <Link href="/home">
//           <img
//             src="https://seaviewimmigration.com/assets/img/logo.svg"
//             alt="Logo"
//             className="h-10 w-auto"
//             style={{
//               filter: isScrolled ? "none" : "brightness(0) invert(1)",
//             }}
//           />
//         </Link>

//         {/* Desktop MENU + Icon */}
//         <div className="hidden md:flex flex-col items-end gap-1">
//           <button
//             onClick={() => setMenuOpen(true)}
//             className="text-sm uppercase tracking-wider font-light"
//           >
//             MENU
//           </button>
//           <button onClick={() => setMenuOpen(true)} className="text-2xl">
//             <FiMenu />
//           </button>
//         </div>

//         {/* Mobile Hamburger */}
//         <button
//           className="md:hidden text-2xl"
//           onClick={() => setMenuOpen(true)}
//         >
//           <FiMenu />
//         </button>
//       </div>

//       {/* Full Page Menu */}
//       <div
//         ref={overlayRef}
//         className={`fixed inset-0 bg-white text-black flex flex-col justify-center items-center transition-opacity duration-300 ${
//           menuOpen ? "pointer-events-auto" : "pointer-events-none opacity-0"
//         }`}
//       >
//         {/* Close Icon */}
//         <button
//           onClick={() => setMenuOpen(false)}
//           className="absolute top-6 right-6 text-3xl"
//         >
//           <FiX />
//         </button>

//         {/* Links */}
//         <div
//           ref={linksRef}
//           className="flex flex-col items-center gap-6 mt-6 text-center"
//         >
//           {navLinks.map((item) => (
//             <Link
//               key={item.href}
//               href={item.href}
//               onClick={() => setMenuOpen(false)}
//               className={`text-2xl md:text-4xl font-light tracking-wide hover:text-[#c30e16] transition-all duration-200 ${
//                 pathname === item.href ? "text-[#c30e16]" : ""
//               }`}
//             >
//               {item.label}
//             </Link>
//           ))}

//           {isSignedIn ? (
//             <Link
//               href="/profile"
//               onClick={() => setMenuOpen(false)}
//               className="mt-6 text-lg md:text-xl font-medium border px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
//             >
//               Go to Profile
//             </Link>
//           ) : (
//             <Link
//               href="/signup"
//               onClick={() => setMenuOpen(false)}
//               className="mt-6 text-lg md:text-xl font-medium border px-6 py-2 rounded-full hover:bg-black hover:text-white transition"
//             >
//               Create Account
//             </Link>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }




"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { FiMenu, FiX } from "react-icons/fi";
import { selectUser } from "@/store/authSlice";
import { gsap } from "gsap";

export default function Navbar() {
  const pathname = usePathname();
  const user = useSelector(selectUser);
  const isSignedIn = !!user;

  const [isScrolled, setIsScrolled] = useState(false);
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
    const onScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white  shadow-black/50  shadow-2xl text-gray-700"
          : "bg-transparent text-white"
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/home">
          <img
            src="https://seaviewimmigration.com/assets/img/logo.svg"
            alt="Logo"
            className="h-14 w-auto"
            style={{
              filter: isScrolled ? "none" : "brightness(0) invert(1)",
            }}
          />
        </Link>

        {/* Desktop: only MENU (no icon) */}
        <button
          onClick={() => setMenuOpen(true)}
          className="hidden lg:block hover:scale-110 hover:transition-transform hover:duration-300 transition-transform duration-300 text-lg md:text-xl  font-normal tracking-wide uppercase"
        >
          MENU
        </button>

        {/* Mobile: only hamburger */}
        <button
          className="lg:hidden text-3xl"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu />
        </button>
      </div>

      {/* Full Page Overlay Menu */}
      <div
        ref={overlayRef}
        className={`fixed inset-0 bg-white text-black flex flex-col justify-center items-center transition-opacity duration-300 ${
          menuOpen ? "pointer-events-auto" : "pointer-events-none opacity-0"
        }`}
      >
        {/* Close icon */}
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
