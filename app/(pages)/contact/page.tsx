// "use client";
// import React, { useEffect, useState } from "react";
// import Link from "next/link";
// import Navbar from "@/app/components/Navbar";
// import { FaHome } from "react-icons/fa"; 
// import { IoLocationSharp } from "react-icons/io5";

// import { FaPhoneAlt } from "react-icons/fa";
// import { MdOutlineMail } from "react-icons/md";
// import Footer from "@/app/components/Footer";
// import Cfooter from "@/app/components/Cfooter";
// import { FaTwitter } from "react-icons/fa";
// import { RiInstagramFill } from "react-icons/ri";
// import { FaLinkedinIn } from "react-icons/fa6";
// import { IoLogoTiktok } from "react-icons/io5";

// import { Raleway, Rambla } from "next/font/google";
// const raleway = Raleway({
//   weight: ["400", "600", "800"],
//   subsets: ["latin"],
// });

// export default function Contact() {
//   return (
//     <div
//       style={{ fontFamily: raleway.style.fontFamily }}
//       className="w-full bg-white h-screen"
//     >
//       {/* ////////////////2  */}
//       <div
//         className="h-[55vh]  bg-white flex flex-col gap-2 items-center justify-center w-full bg-cover bg-center z-10"
//         style={{ backgroundImage: "url('/contact15.jpg')" }} // Add the image path here
//       >
//         <Navbar />
//         <h1
//           className={` mt-10 font-medium tracking-widest text-7xl z-20 text-white`}
//         >
//           Contact{" "}
//         </h1>
//         <h5
//           className={`text-[#F1F1F1] mt-3 font-thin  text-lg z-20  tracking-widest`}
//         >
//           Connecting Dreams to Destinations Let’s Build Your Path Together
//         </h5>
//       </div>

//       {/* /////////////////// */}

//       {/* <div className="bg-white h-full w-full ">    
//                 <div className=" flex gap-5 items-center p-10  justify-between">
//                     <div className="bg-red-500 h-[400px] w-[500px]"> 

//                     </div>
//                     <div className="bg-red-500 h-[400px] w-[500px]"> 

//                     </div>
//                     <div className="bg-red-500 h-[400px] w-[500px]"> 

//                     </div>
//                 </div>

//           </div> */}

//       <div className="flex gap-10 p-10 pl-20 h-screen w-full ">
//         <div className=" h-[600px] rounded-xl p-10 flex flex-col gap-2 bg-[#f1f1f1] w-[40vw]">
//           <span className="text-lg font-medium"> Contact Us </span>
//           <span className="text-5xl text-gray-500 -tracking-tight ">
//             Get <span className="text-[#155da9]">In</span>{" "}
//             <span className="text-[#c30e16]">Touch</span>
//           </span>

//           <div className="flex  flex-col gap-6  mt-14 flex-wrap">
//             <input
//               placeholder="Name"
//               className="w-[30vw] h-[7vh] bg-[#e0e0e0] shadow-lg text-black focus:outline-none px-4 rounded-xl"
//               type="text"
//             />
//             <input
//               placeholder="Email"
//               className="w-[30vw] h-[7vh] bg-[#e0e0e0] border  border-[#c30e16]  shadow-lg  text-black focus:outline-none px-4 rounded-xl"
//               type="text"
//             />
//             <textarea
//               className="w-[30vw] bg-[#e0e0e0] shadow-lg focus:outline-none h-[15vh] rounded-xl px-4 py-4"
//               placeholder="Message"
//               name=""
//               id=""
//             ></textarea>
//           </div>
//           <div>
//             <button className="border-[#155da9] border-2  mt-8 text-[#155da9] px-10 py-4  tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full">
//               {" "}
//               Send Message{" "}
//             </button>
//           </div>
//         </div>
//         <div className="bg-white h-[600px] w-[800px]">
//           <div className="flex flex-col ">
//             <span className="p-10 text-gray-500">
//               {" "}
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit.
//               Explicabo laborum delectus blanditiis quaerat natus vel cumque
//               nemo qui ducimus est! Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, deserunt. 
//             </span>  

//             <div className="flex pl-10 mt-10 flex-wrap gap-[50px]"> 
//                 <div className="flex  w-[200px]   items-center justify-center  flex-col gap-3"> 
//                      <span className="text-5xl text-[#155da9]"> <FaPhoneAlt/></span>    
//                      <span className="text-[#c30e16] mt-5 font-semibold">Phone Number</span> 
//                      <span className="text-black text-center"> +1443323432243</span> 
//                 </div>
//                 <div className="flex  w-[200px]  items-center justify-center  flex-col gap-3"> 
//                      <span className="text-5xl text-[#155da9]"> <MdOutlineMail/></span>    
//                      <span className="text-[#c30e16]  mt-5 font-semibold">Email</span> 
//                      <span className="text-black text-center"> @seaviewimmigration</span> 
//                 </div>
//                 <div className="flex   w-[200px]    items-center justify-center  flex-col gap-3"> 
//                      <span className="text-5xl font-thin text-[#c30e16]"> <IoLocationSharp/></span>    
//                      <span className="text-[#155da9]  mt-5 font-semibold">Location</span> 
//                      <span className="text-black text-center"> 124 near wall street New York</span> 
//                 </div>
//             </div>  
//             <div className=" flex  flex-col gap-5 mt-5"> 
//               <span className="p-10 text-gray-500 text-3xl" >Other Ways <span className="text-[#155da9]">To</span> <span className="text-[#c30e16]">Connect</span></span> 
//               <div className="flex pl-10 gap-10 flex-wrap">    
//                 <button className="h-[60px]  transition-transform hover:-translate-y-3 duration-500 text-white text-xl flex items-center justify-center w-[60px] rounded-full bg-gray-500"> 
//                 <FaTwitter/>
//                 </button>
//                 <button className="h-[60px] flex items-center justify-center text-xl text-white transition-transform hover:-translate-y-3 duration-500 w-[60px] rounded-full bg-[#155da9]"> 
//                   <RiInstagramFill/>
//                 </button>
//                 <button className="h-[60px] flex items-center justify-center text-xl text-white  transition-transform hover:-translate-y-3 duration-500 w-[60px] rounded-full bg-[#c30e16]"> 
//                   <FaLinkedinIn/>
//                 </button>
//                 <button className="h-[60px] transition-transform hover:-translate-y-3 duration-500 flex items-center justify-center text-white text-xl w-[60px] rounded-full bg-gray-500"> 
//                     <IoLogoTiktok/>
//                 </button>
//                 </div> 
//             </div>   
            
//           </div>
//         </div>
//       </div>   
//       <div className="bg-white w-full pb-[200px]">
//           <div className="flex flex-col gap-10 items-start p-10 ">
//             {/* Title with left alignment */}
//             <div className="mt-[100px]">
//               <span className="text-4xl text-gray-500">
//                 Where You Can <span className="text-[#155da9]">Find</span>{" "}
//                 <span className="text-[#c30e16]">Us</span>?
//               </span>
//             </div>

//             {/* Centered iframe with rounded corners and shadow */}
//             <div className="flex justify-center mt-10 w-full">
//               <div className="w-[90%] max-w-[1000px]  overflow-hidden rounded-lg shadow-lg">
              
//                 <iframe
//                   src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.8821998548988!2d76.75680687527905!3d30.74981028480758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed9c646e1469%3A0xddbfe8e7a9a5bac0!2sBike%20parking%20bh8!5e0!3m2!1sen!2sin!4v1730962275210!5m2!1sen!2sin"
//                   width="100%"
//                   height="400"
    
//                   loading="lazy"
//                 ></iframe>
//               </div>
//             </div>
  
//       <Footer/>
//     </div>
//   );
// }   




"use client";
import React from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import { FaHome, FaPhoneAlt, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoLocationSharp, IoLogoTiktok } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import Footer from "@/app/components/Footer";
import { RiInstagramFill } from "react-icons/ri";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function Contact() {
  return (
    <div
      style={{ fontFamily: raleway.style.fontFamily }}
      className="w-full bg-white h-screen"
    >
      <div
        className="h-[70vh] bg-white flex flex-col gap-2 items-center justify-center w-full bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/contact15.jpg')" }}
      >
        <Navbar />
        <h1 className="mt-10 font-medium tracking-widest text-7xl z-20 text-white">Contact</h1>
        <h5 className="text-[#F1F1F1] mt-3 font-thin text-lg z-20 tracking-widest">
          Connecting Dreams to Destinations Let’s Build Your Path Together
        </h5>
      </div>

      {/* Contact Form and Details */}
      <div className="flex gap-10 p-10 pl-20 h-screen w-full">
        {/* Contact Form */}
        <div className="h-[600px] rounded-xl p-10 flex flex-col gap-2 bg-[#f1f1f1] w-[40vw]">
          <span className="text-lg font-medium">Contact Us</span>
          <span className="text-5xl text-gray-500 -tracking-tight">
            Get <span className="text-[#155da9]">In</span>{" "}
            <span className="text-[#c30e16]">Touch</span>
          </span>

          <div className="flex flex-col gap-6 mt-14 flex-wrap">
            <input
              placeholder="Name"
              className="w-[30vw] h-[7vh] bg-[#e0e0e0] shadow-lg text-black focus:outline-none px-4 rounded-xl"
              type="text"
            />
            <input
              placeholder="Email"
              className="w-[30vw] h-[7vh] bg-[#e0e0e0] border border-[#c30e16] shadow-lg text-black focus:outline-none px-4 rounded-xl"
              type="text"
            />
            <textarea
              className="w-[30vw] bg-[#e0e0e0] shadow-lg focus:outline-none h-[15vh] rounded-xl px-4 py-4"
              placeholder="Message"
            ></textarea>
          </div>
          <div>
            <button className="border-[#155da9] border-2 mt-8 text-[#155da9] px-10 py-4 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full">
              Send Message
            </button>
          </div>
        </div>

        {/* Contact Details */}
        <div className="bg-white h-[600px] w-[800px]">
          <div className="flex flex-col">
            <span className="p-10 text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo laborum delectus blanditiis quaerat natus vel cumque
              nemo qui ducimus est! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Commodi, deserunt.
            </span>

            <div className="flex pl-10 mt-10 flex-wrap gap-[50px]">
              <div className="flex w-[200px] items-center justify-center flex-col gap-3">
                <span className="text-5xl text-[#155da9]"><FaPhoneAlt /></span>
                <span className="text-[#c30e16] mt-5 font-semibold">Phone Number</span>
                <span className="text-black text-center">+1443323432243</span>
              </div>
              <div className="flex w-[200px] items-center justify-center flex-col gap-3">
                <span className="text-5xl text-[#155da9]"><MdOutlineMail /></span>
                <span className="text-[#c30e16] mt-5 font-semibold">Email</span>
                <span className="text-black text-center">@seaviewimmigration</span>
              </div>
              <div className="flex w-[200px] items-center justify-center flex-col gap-3">
                <span className="text-5xl font-thin text-[#c30e16]"><IoLocationSharp /></span>
                <span className="text-[#155da9] mt-5 font-semibold">Location</span>
                <span className="text-black text-center">124 near wall street New York</span>
              </div>
            </div>

            <div className="flex flex-col gap-5 mt-5">
              <span className="p-10 text-gray-500 text-3xl">
                Other Ways <span className="text-[#155da9]">To</span>{" "}
                <span className="text-[#c30e16]">Connect</span>
              </span>
              <div className="flex pl-10 gap-10 flex-wrap">
                <button className="h-[60px] transition-transform hover:-translate-y-3 duration-500 text-white text-xl flex items-center justify-center w-[60px] rounded-full bg-gray-500">
                  <FaTwitter />
                </button>
                <button className="h-[60px] flex items-center justify-center text-xl text-white transition-transform hover:-translate-y-3 duration-500 w-[60px] rounded-full bg-[#155da9]">
                  <RiInstagramFill />
                </button>
                <button className="h-[60px] flex items-center justify-center text-xl text-white transition-transform hover:-translate-y-3 duration-500 w-[60px] rounded-full bg-[#c30e16]">
                  <FaLinkedinIn />
                </button>
                <button className="h-[60px] transition-transform hover:-translate-y-3 duration-500 flex items-center justify-center text-white text-xl w-[60px] rounded-full bg-gray-500">
                  <IoLogoTiktok />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-[#f1f1f1] w-full pb-[200px]">
        <div className="flex flex-col gap-10 items-start p-10">
          <div className="mt-[50px]">
            <span className="text-4xl text-gray-500">
              Where You Can <span className="text-[#155da9]">Find</span>{" "}
              <span className="text-[#c30e16]">Us</span>?
            </span>
          </div>

          <div className="flex justify-center mt-10 w-full">
            <div className="w-[90%] max-w-[1000px] overflow-hidden rounded-lg shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3428.8821998548988!2d76.75680687527905!3d30.74981028480758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed9c646e1469%3A0xddbfe8e7a9a5bac0!2sBike%20parking%20bh8!5e0!3m2!1sen!2sin!4v1730962275210!5m2!1sen!2sin"
                width="100%"
                height="400"
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

