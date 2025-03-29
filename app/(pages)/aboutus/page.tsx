// "use client";

// import Navbar from "@/app/components/Navbar";
// import React, { useEffect } from "react";
// import { Raleway } from "next/font/google"; // Corrected import path for next/font/google
// import { FaTools } from "react-icons/fa";
// import { HiUserGroup } from "react-icons/hi2";
// import { MdMiscellaneousServices } from "react-icons/md";
// import SwiperNavigation from "@/app/components/SwiperNavigation";
// import Footer from "@/app/components/Footer";

// // Shery.mouseFollower();

// const raleway = Raleway({
//   weight: ["400", "600", "800"],
//   subsets: ["latin"],
// });

// export default function About() {
//   return (
//     <div
//       style={{ fontFamily: raleway.style.fontFamily }} // Fixed style syntax
//       className="w-full h-screen bg-white"
//     >
//       <div
//         className="h-[55vh] md:h-[70vh] bg-white flex flex-col gap-2 items-center justify-center w-full bg-cover bg-center z-10"
//         style={{ backgroundImage: "url('/about1.jpg')" }} // Background image path
//       >
//         <Navbar />
//         <h1 className="font-medium tracking-widest text-5xl md:text-6xl lg:text-6xl z-20 text-white">
//           About Us{" "}
//         </h1>
//         <h5 className="text-[#F1F1F1] mt-4 font-thin text-sm text-center md:text-lg z-20 tracking-widest">
//           Connecting Dreams to Destinations Let’s Build Your Path Together
//         </h5>
//       </div>
//       <div className="h-screen w-full bg-white">
//         <div className="w-full  flex flex-col gap-5 md:flex-row lg:gap-20 text-white">
//           <div className="md:p-10 pt-4 pl-4  md:mt-10">
//             <span className="text-gray-500 text-2xl lg:text-4xl">
//               <span className=" text-2xl md:text-3xl lg:text-5xl  tracking-wider font-medium text-[#155da9]">
//                 Introduction
//               </span>{" "}
//               to best <br />
//               <span className="text-[#c30e16] text-2xl md:text-3xl lg:text-5xl  ">
//                 Immigration consultancy
//               </span>
//             </span>
//           </div>
//           <div className="text-gray-500 md:w-[300px] pl-4 w-[97vw] md:mt-10  ">
//             <p className=" md:mt-10">
//               Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//               Voluptatum officiis accusantium voluptate, itaque nobis accusamus
//               cupiditate dolore consectetur rem repellat.{" "}
//             </p>
//           </div>
//           <div className="text-gray-500 md:w-[300px] pl-4 w-[97vw] md:mt-10">
//             <p className="md:mt-10">
//               Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
//               dolorum quam ab ipsa animi hic modi libero assumenda ipsum
//               pariatur.
//             </p>{" "}
//           </div>
//         </div>

//         <div className="w-full bg-white flex items-center justify-center h-[100vh] sm:h-[50vh] lg:h-auto  pt-4 pl-3 pr-3 ">
//           <div className="flex flex-col md:flex-row items-center gap-6 mt-10 md:gap-8 justify-center w-full max-w-[1200px]">
//             {/* Card 1 */}
//             {/* <div className="h-auto w-full md:w-[400px] shadow-xl bg-white rounded-lg p-4">
//       <div className="flex items-center gap-6 md:gap-10">
//         <div className="bg-[#155da9] h-[80px] w-[80px] rounded-full flex items-center justify-center">
//           <div className="text-white text-2xl">
//             <FaTools />
//           </div>
//         </div>
//         <div className="flex flex-col justify-center">
//           <span className="font-semibold text-lg text-[#c30e16]">
//             Best Consultancy
//           </span>
//           <span className="text-gray-500 w-full md:w-[210px] text-sm mt-1">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magni.
//           </span>
//         </div>
//       </div>
//     </div> */}
//             <div className="h-auto w-full md:w-[400px] shadow-xl bg-white rounded-lg p-4">
//               <div className="flex flex-wrap items-center gap-6 md:gap-10">
//                 {/* Blue Circle with Icon */}
//                 <div className="bg-[#155da9] text-white text-2xl h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[80px] md:w-[80px] rounded-full flex items-center justify-center shrink-0">
//                   <FaTools />
//                 </div>

//                 {/* Text Section */}
//                 <div className="flex flex-col justify-center">
//                   <span className="font-semibold text-sm md:text-lg text-[#c30e16]">
//                     Best Consultancy
//                   </span>
//                   <span className="text-gray-500 w-full text-sm md:w-[210px] mt-1">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Facere, magni.
//                   </span>
//                 </div>
//               </div>
//             </div>

//             {/* Card 2 */}
//             {/* <div className="h-auto w-full md:w-[400px] shadow-xl bg-white rounded-lg p-4">
//       <div className="flex items-center gap-6 md:gap-10">
//         <div className="bg-[#c30e16] h-[80px] w-[80px] rounded-full flex items-center justify-center">
//           <div className="text-white text-4xl">
//             <MdMiscellaneousServices />
//           </div>
//         </div>
//         <div className="flex flex-col justify-center">
//           <span className="font-semibold text-lg text-[#155da9]">
//             Services
//           </span>
//           <span className="text-gray-500 w-full md:w-[210px] text-sm mt-1">
//             Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magni.
//           </span>
//         </div>
//       </div>
//     </div> */}
//             <div className="h-auto w-full md:w-[450px] shadow-xl bg-white rounded-lg p-4">
//               <div className="flex flex-wrap items-center gap-6 md:gap-10">
//                 {/* Red Circle with Icon */}
//                 <div className="bg-[#c30e16] text-white text-4xl h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[80px] md:w-[80px] rounded-full flex items-center justify-center shrink-0">
//                   <MdMiscellaneousServices />
//                 </div>

//                 {/* Text Section */}
//                 <div className="flex flex-col justify-center">
//                   <span className="font-semibold text-sm md:text-lg text-[#155da9]">
//                     Services
//                   </span>
//                   <span className="text-gray-500 w-full text-sm md:w-[210px] mt-1">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Facere, magni.
//                   </span>
//                 </div>
//               </div>
//             </div>

            
//             <div className="h-auto  bg-white w-full md:w-[400px] shadow-xl rounded-lg p-4">
//               <div className="flex flex-wrap items-center h-full w-full gap-5 md:gap-10">
//                 {/* Blue Circle with Icon */}
//                 <div className="bg-[#155da9] text-white text-2xl h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[80px] md:w-[80px] rounded-full flex items-center justify-center shrink-0">
//                   <HiUserGroup />
//                 </div>

//                 {/* Text Section */}
//                 <div className="flex flex-col justify-center">
//                   <span className="font-semibold text-sm md:text-lg text-[#c30e16]">
//                     Professional Team
//                   </span>
//                   <span className="text-gray-500 w-full text-sm md:w-[210px] mt-1">
//                     Lorem ipsum dolor sit amet, consectetur adipisicing elit.
//                     Facere, magni.
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="w-full bg-[#f1f1f1]">
//   {/* Vision Section - Reordered for mobile */}
//   <div className="w-full mt-10 bg-[#f1f1f1]">
//   {/* Vision Section */}
//   <div className="flex flex-col items-center justify-center py-12 md:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
//     {/* Text Content - Centered on all screens */}
//     <div className="w-full max-w-3xl flex flex-col items-center text-center gap-6 p-6 md:p-8 lg:p-10">
//       <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-500">
//         Our <span className="text-[#155da9]">Vision</span>
//       </h2>
//       <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed max-w-5xl">
//         In 2013 I landed as a student in Canada for the betterment of my future.
//         From student to become Permanent Residence and then citizen I face loads
//         of struggles and hurdles which inspired me to become a Regulated
//         Immigration Consultant. We believe that by walking hand in hand with our
//         clients and taking care of their needs we ensure their Canadian
//         experience starts off on a positive footing and we are honoured to work
//         together to provide the specialized support.
//       </p>
//     </div>
//   </div>
// </div>
//   {/* Mission Section - Reordered for mobile */}
//   <div className="flex flex-col lg:flex-row items-center justify-center py-10 lg:py-20 bg-[#f1f1f1]">
//   <div className="p-6 md:p-10 flex flex-col gap-6 w-full lg:w-1/2 order-2 lg:order-2">
//       <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-500">
//         Our <span className="text-[#155da9]">Mission</span>
//       </h2>
//       <p className="text-sm sm:text-base lg:text-lg text-gray-600 w-full lg:max-w-[90%]">
//         In 2013 I landed as a student in Canada for the betterment of my future.
//         From student to become Permanent Residence and then citizen I face loads
//         of struggles and hurdles which inspired me to become a Regulated
//         Immigration Consultant. We believe that by walking hand in hand with our
//         clients and taking care of their needs we ensure their Canadian
//         experience starts off on a positive footing and we are honoured to work
//         together to provide the specialized support.
//       </p>
//     </div>
//     {/* Image - Comes first on mobile */}
//     <div className="w-full lg:w-1/2 h-[300px] sm:h-[400px] lg:h-[500px] order-1 lg:order-2">
//       <div 
//         className="w-full h-full bg-[url('/t1.avif')] bg-cover bg-center"
//         style={{
//           backgroundImage: "url('/t1.avif')",
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           backgroundRepeat: "no-repeat"
//         }}
//       ></div>
//     </div>
    
//     {/* Text Content - Comes after image on mobile */}
    
//   </div>
// </div>

        

        // <div className="feedback w-full h-screen pb-20 bg-white">
        //   <div className="md:p-10 flex flex-col">
        //     <div className="mt-10 w-full text-center sm:text-start">
        //       <span className="text-4xl  text-gray-500 text-center md:text-left">
        //         Hear It From <span className="text-[#155da9]">Our </span>
        //         <span className="text-[#c30e16] ">Customer's</span>
        //       </span>
        //     </div>
        //     <div className="w-full h-full flex justify-center mt-[100px]">
        //       <SwiperNavigation />
        //     </div>
        //   </div>
        // </div>

//         <Footer />
//       </div>
//     </div>
//   );
// }






"use client";

import Navbar from "@/app/components/Navbar";
import React from "react";
import { Raleway } from "next/font/google";
import { FaTools } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { MdMiscellaneousServices } from "react-icons/md";
import SwiperNavigation from "@/app/components/SwiperNavigation";
import Footer from "@/app/components/Footer";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function About() {
  return (
    <div
      style={{ fontFamily: raleway.style.fontFamily }}
      className="w-full bg-white"
    >
      {/* Hero Section */}
      <div
        className="h-[55vh] md:h-[70vh] bg-white flex flex-col gap-2 items-center justify-center w-full bg-cover bg-center relative z-10"
        style={{ 
          backgroundImage: "url('/about1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <Navbar />
        <h1 className="font-medium tracking-widest text-4xl md:text-5xl lg:text-6xl z-20 text-white text-center px-4">
          About Us
        </h1>
        <h5 className="text-[#F1F1F1] mt-4 font-thin text-sm md:text-lg z-20 tracking-widest text-center px-4">
          Connecting Dreams to Destinations Let's Build Your Path Together
        </h5>
      </div>

      {/* Introduction Section */}
      <div className="w-full bg-white py-10 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <span className="text-gray-500 text-2xl lg:text-4xl">
              <span className="text-2xl md:text-3xl lg:text-5xl tracking-wider font-medium text-[#155da9]">
                Introduction
              </span>{" "}
              to best <br />
              <span className="text-[#c30e16] text-2xl md:text-3xl lg:text-5xl">
                Immigration consultancy
              </span>
            </span>
          </div>
          <div className="md:w-1/3 text-gray-500">
            <p className="md:mt-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum officiis accusantium voluptate, itaque nobis accusamus
              cupiditate dolore consectetur rem repellat.
            </p>
          </div>
          <div className="md:w-1/3 text-gray-500">
            <p className="md:mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolorum quam ab ipsa animi hic modi libero assumenda ipsum
              pariatur.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full bg-white py-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Best Consultancy Card */}
          <div className="shadow-xl bg-white rounded-lg p-4">
            <div className="flex items-center gap-6">
              <div className="bg-[#155da9] h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center shrink-0">
                <FaTools className="text-white text-2xl" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-semibold text-lg text-[#c30e16]">
                  Best Consultancy
                </span>
                <span className="text-gray-500 text-sm mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magni.
                </span>
              </div>
            </div>
          </div>

          {/* Services Card */}
          <div className="shadow-xl bg-white rounded-lg p-4">
            <div className="flex items-center gap-6">
              <div className="bg-[#c30e16] h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center shrink-0">
                <MdMiscellaneousServices className="text-white text-3xl" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-semibold text-lg text-[#155da9]">
                  Services
                </span>
                <span className="text-gray-500 text-sm mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magni.
                </span>
              </div>
            </div>
          </div>

          {/* Professional Team Card */}
          <div className="shadow-xl bg-white rounded-lg p-4">
            <div className="flex items-center gap-6">
              <div className="bg-[#155da9] h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center shrink-0">
                <HiUserGroup className="text-white text-2xl" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-semibold text-lg text-[#c30e16]">
                  Professional Team
                </span>
                <span className="text-gray-500 text-sm mt-1">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magni.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div className="w-full bg-[#f1f1f1] py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-6 p-6 md:p-8 lg:p-10">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-500">
              Our <span className="text-[#155da9]">Vision</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              In 2013 I landed as a student in Canada for the betterment of my future.
              From student to become Permanent Residence and then citizen I face loads
              of struggles and hurdles which inspired me to become a Regulated
              Immigration Consultant. We believe that by walking hand in hand with our
              clients and taking care of their needs we ensure their Canadian
              experience starts off on a positive footing and we are honoured to work
              together to provide the specialized support.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="w-full bg-[#f1f1f1] py-12 md:py-16 lg:py-20">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
    {/* Image Section - Ensure proper image path and display */}
    <div className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden relative">
      <img 
        src="/t1.avif" 
        alt="Our Mission"
        className="w-full h-full object-cover object-center"
       
      />
    </div>
    
    {/* Text Content */}
    <div className="w-full lg:w-1/2 flex flex-col gap-6 p-4 sm:p-6">
      <h2 className="text-3xl sm:text-4xl lg:text-5xl text-gray-500">
        Our <span className="text-[#155da9]">Mission</span>
      </h2>
      <p className="text-sm sm:text-base lg:text-lg text-gray-600">
        In 2013 I landed as a student in Canada for the betterment of my future.
        From student to become Permanent Residence and then citizen I face loads
        of struggles and hurdles which inspired me to become a Regulated
        Immigration Consultant. We believe that by walking hand in hand with our
        clients and taking care of their needs we ensure their Canadian
        experience starts off on a positive footing and we are honoured to work
        together to provide the specialized support.
      </p>
    </div>
  </div>
</div>

      {/* Testimonials Section */}
      
      <div className="feedback w-full h-screen pb-20 bg-white">
          <div className="md:p-10 flex flex-col">
            <div className="mt-10 w-full text-center sm:text-start">
              <span className="text-4xl  text-gray-500 text-center md:text-left">
                Hear It From <span className="text-[#155da9]">Our </span>
                <span className="text-[#c30e16] ">Customer's</span>
              </span>
            </div>
            <div className="w-full h-full flex justify-center mt-[100px]">
              <SwiperNavigation />
            </div>
          </div>
        </div>


      <Footer />
    </div>
  );
}