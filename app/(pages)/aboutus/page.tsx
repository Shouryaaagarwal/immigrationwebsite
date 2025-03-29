"use client";

import Navbar from "@/app/components/Navbar";
import React, { useEffect } from "react";
import { Raleway } from "next/font/google"; // Corrected import path for next/font/google
import { FaTools } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2"; 
import { MdMiscellaneousServices } from "react-icons/md";
import SwiperNavigation from "@/app/components/SwiperNavigation";
import Footer from "@/app/components/Footer";  

// Shery.mouseFollower();




const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function About() {   
  return (
    <div
      style={{ fontFamily: raleway.style.fontFamily }} // Fixed style syntax
      className="w-full h-screen bg-white"
    >
      <div
        className="h-[55vh] md:h-[70vh] bg-white flex flex-col gap-2 items-center justify-center w-full bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/about1.jpg')" }} // Background image path
      >
        <Navbar />
        <h1 className="font-medium tracking-widest text-5xl md:text-6xl lg:text-6xl z-20 text-white">
          About Us{" "}
        </h1>
        <h5 className="text-[#F1F1F1] mt-4 font-thin text-sm text-center md:text-lg z-20 tracking-widest">
          Connecting Dreams to Destinations Let’s Build Your Path Together
        </h5>
      </div>
      <div className="h-screen w-full bg-white">
        <div className="w-full  flex flex-col gap-5 md:flex-row lg:gap-20 text-white">
          <div className="md:p-10 pt-4 pl-4  md:mt-10">
            <span className="text-gray-500 text-2xl lg:text-4xl">
              <span className=" text-2xl md:text-3xl lg:text-5xl  tracking-wider font-medium text-[#155da9]">
                Introduction
              </span>{" "}
              to best <br />
              <span className="text-[#c30e16] text-2xl md:text-3xl lg:text-5xl  ">
                Immigration consultancy
              </span>
            </span>
          </div>
          <div className="text-gray-500 md:w-[300px] pl-4 w-[97vw] md:mt-10  ">
            <p className=" md:mt-10">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum officiis accusantium voluptate, itaque nobis accusamus
              cupiditate dolore consectetur rem repellat.{" "}
            </p>
          </div>
          <div className="text-gray-500 md:w-[300px] pl-4 w-[97vw] md:mt-10">
            <p className="md:mt-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              dolorum quam ab ipsa animi hic modi libero assumenda ipsum
              pariatur.
            </p>{" "}
          </div>
        </div>
        {/* <div className="w-full flex items-center justify-center h-[300px]">
          <div className="flex items-center gap-4 justify-center">
          <div className="h-[150px] w-[400px] shadow-xl bg-white rounded-lg p-4">
  <div className="flex items-center gap-10">
    <div className="bg-[#155da9] h-[80px] w-[80px] rounded-full flex items-center justify-center">
      <div className="text-white text-2xl">
        <FaTools />
      </div>
    </div> 
    
    <div className="flex flex-col justify-center">
      <span className="font-semibold text-lg text-[#c30e16]">Hi there</span>
      <span className="text-gray-500 w-[210px] text-sm mt-1">
        Lorem ipsum dolor sit amet, constetur adipisicing elit. Facere, magni.
      </span>
    </div>
  </div>
</div>

            <div className="h-[150px] w-[400px] shadow-xl bg-white rounded-lg"></div>
            <div className="h-[150px] w-[400px] shadow-xl bg-white rounded-lg"></div>
          </div>
        </div> */}   

{/* <div className="w-full flex items-center justify-center h-auto md:h-[300px] p-4">
  <div className="flex flex-col md:flex-row items-center mt-10 gap-4 justify-center w-full max-w-[1200px]">
    <div className="h-auto md:h-[150px] w-full md:w-[400px] shadow-xl bg-white rounded-lg p-4">
      <div className="flex items-center gap-6 md:gap-10">
        <div className="bg-[#155da9] h-[80px] w-[80px] rounded-full flex items-center justify-center">
          <div className="text-white text-2xl">
            <FaTools />
          </div>
        </div> 
        <div className="flex flex-col justify-center">
          <span className="font-semibold text-lg text-[#c30e16]">Best Consultancy</span>
          <span className="text-gray-500 w-[210px] text-sm mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magni.
          </span>
        </div>
      </div>
    </div>

    
    <div className="h-auto md:h-[150px] w-full md:w-[400px] shadow-xl bg-white rounded-lg p-4"> 
    <div className="flex items-center gap-6 md:gap-10">
        <div className="bg-[#c30e16] h-[80px] w-[80px] rounded-full flex items-center justify-center">
          <div className="text-white text-4xl">
                <MdMiscellaneousServices/>
          </div>
        </div> 
        <div className="flex flex-col justify-center">
          <span className="font-semibold text-lg text-[#155da9]">Services</span>
          <span className="text-gray-500 w-[210px] text-sm mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magni.
          </span>
        </div>
      </div> 
    </div>
    
    
    <div className="h-auto md:h-[150px] w-full md:w-[400px] shadow-xl bg-white rounded-lg p-4">  

    <div className="flex items-center gap-6 md:gap-10">
        <div className="bg-[#155da9] h-[80px] w-[80px] rounded-full flex items-center justify-center">
          <div className="text-white text-3xl">
            <HiUserGroup/>
          </div>
        </div> 
        <div className="flex flex-col justify-center">
          <span className="font-semibold text-lg text-[#c30e16]">Proffessional Team</span>
          <span className="text-gray-500 w-[210px] text-sm mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magni.
          </span>
        </div>
      </div>    
    </div>
  </div>
</div>  */}   
   
   <div className="w-full bg-white flex items-center justify-center h-[100vh] sm:h-[50vh] lg:h-auto  pt-4 pl-3 pr-3 ">
  <div className="flex flex-col md:flex-row items-center gap-6 mt-10 md:gap-8 justify-center w-full max-w-[1200px]">
    {/* Card 1 */}
    {/* <div className="h-auto w-full md:w-[400px] shadow-xl bg-white rounded-lg p-4">
      <div className="flex items-center gap-6 md:gap-10">
        <div className="bg-[#155da9] h-[80px] w-[80px] rounded-full flex items-center justify-center">
          <div className="text-white text-2xl">
            <FaTools />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-semibold text-lg text-[#c30e16]">
            Best Consultancy
          </span>
          <span className="text-gray-500 w-full md:w-[210px] text-sm mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magni.
          </span>
        </div>
      </div>
    </div> */}   
    <div className="h-auto w-full md:w-[400px] shadow-xl bg-white rounded-lg p-4">
  <div className="flex flex-wrap items-center gap-6 md:gap-10">
    {/* Blue Circle with Icon */}
    <div className="bg-[#155da9] text-white text-2xl h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[80px] md:w-[80px] rounded-full flex items-center justify-center shrink-0">
      <FaTools />
    </div>

    {/* Text Section */}
    <div className="flex flex-col justify-center">
      <span className="font-semibold text-sm md:text-lg text-[#c30e16]">
        Best Consultancy
      </span>
      <span className="text-gray-500 w-full text-sm md:w-[210px] mt-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magni.
      </span>
    </div>
  </div>
</div>


    {/* Card 2 */}
    {/* <div className="h-auto w-full md:w-[400px] shadow-xl bg-white rounded-lg p-4">
      <div className="flex items-center gap-6 md:gap-10">
        <div className="bg-[#c30e16] h-[80px] w-[80px] rounded-full flex items-center justify-center">
          <div className="text-white text-4xl">
            <MdMiscellaneousServices />
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <span className="font-semibold text-lg text-[#155da9]">
            Services
          </span>
          <span className="text-gray-500 w-full md:w-[210px] text-sm mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magni.
          </span>
        </div>
      </div>
    </div> */}   
    <div className="h-auto w-full md:w-[450px] shadow-xl bg-white rounded-lg p-4">
  <div className="flex flex-wrap items-center gap-6 md:gap-10">
    {/* Red Circle with Icon */}
    <div className="bg-[#c30e16] text-white text-4xl h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[80px] md:w-[80px] rounded-full flex items-center justify-center shrink-0">
      <MdMiscellaneousServices />
    </div>

    {/* Text Section */}
    <div className="flex flex-col justify-center">
      <span className="font-semibold text-sm md:text-lg text-[#155da9]">
        Services
      </span>
      <span className="text-gray-500 w-full text-sm md:w-[210px] mt-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magni.
      </span>
    </div>
  </div>
</div>


    {/* Card 3 */}
    {/* <div className="h-[100px] bg-red-100 w-full md:w-[400px] shadow-xl  rounded-lg  md:p-4">
      <div className="flex items-center h-full w-full bg-black gap-5 md:gap-10">
        <div className="bg-[#155da9] ml-2 text-white text-2xl  h-[50px] w-[50px] md:h-[80px] md:w-[80px] rounded-full flex items-center justify-center">
            <HiUserGroup />
          
        <div className="flex ml-10 flex-col justify-center">
          <span className="font-semibold text-sm md:text-lg text-[#c30e16]">
            Professional Team
          </span>
          <span className="text-gray-500 w-full md:w-[210px] text-sm mt-1">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magni.
          </span>
        </div>
        </div>   
       

      </div>
    </div> */}   
    <div className="h-auto  bg-white w-full md:w-[400px] shadow-xl rounded-lg p-4">
  <div className="flex flex-wrap items-center h-full w-full gap-5 md:gap-10">
    {/* Blue Circle with Icon */}
    <div className="bg-[#155da9] text-white text-2xl h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] md:h-[80px] md:w-[80px] rounded-full flex items-center justify-center shrink-0">
      <HiUserGroup />
    </div>

    {/* Text Section */}
    <div className="flex flex-col justify-center">
      <span className="font-semibold text-sm md:text-lg text-[#c30e16]">
        Professional Team
      </span>
      <span className="text-gray-500 w-full text-sm md:w-[210px] mt-1">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere, magni.
      </span>
    </div>
  </div>
</div>

  </div>
</div>




{/* <div className="Vision w-full h-[90vh] bg-[#f1f1f1] flex  items-center justify-center mt-10    ">
    <div className="p-10       flex flex-col gap-10 "> 
        <div>

        <span className="text-5xl  text-gray-500"><span >Our</span ><span className="text-[#155da9]"> Vision</span> </span>
        </div>  
        <div className="w-[50vw] ">
            <span className="text-sm">In 2013 I landed as a student in Canada for the betterment of my future. <br /> From student to become Permanent Residence and then citizen I face loads of struggles and hurdles which inspired me to become a Regulated Immigration Consultant.We believe that by walking hand in hand with our clients and taking care of their needs we ensure their Canadian experience starts off on a positive footing and we are honoured to work together to provide the specialized support.</span>
        </div>
    </div>   
    <div className="bg-[url('/about9.jpg')]  bg-no-repeat bg-cover mt-10 h-[400px] w-[600px]">    </div>
</div>     
<div className="Mission w-full h-[90vh] pb-20 gap-10 flex items-center justify-center  bg-[#f1f1f1]  ">  
<div className=" bg-[url('/about8.jpg')] bg-no-repeat bg-cover  mt-10 h-[600px] w-[400px]">    </div>

    <div className="p-10      flex flex-col gap-10 "> 
        <div className="flex w-full  h-[100px] items-end">

        <span className="text-5xl  text-gray-500"><span >Our</span ><span className="text-[#155da9]"> Mission</span> </span>
        </div>  
        <div className="w-[50vw]">
            <span className="text-sm">In 2013 I landed as a student in Canada for the betterment of my future. <br /> From student to become Permanent Residence and then citizen I face loads of struggles and hurdles which inspired me to become a Regulated Immigration Consultant.We believe that by walking hand in hand with our clients and taking care of their needs we ensure their Canadian experience starts off on a positive footing and we are honoured to work together to provide the specialized support.</span>
        </div>
    </div>
</div>     */}   

<div className="Vision w-full min-h-[90vh] bg-[#f1f1f1] flex flex-wrap items-center justify-center mt-10">
  {/* Text Section */}
  <div className="p-10 flex flex-col gap-10 w-full lg:w-1/2">
    <div>
      <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-500">
        <span>Our</span>
        <span className="text-[#155da9]"> Vision</span>
      </span>
    </div>
    <div className="w-full lg:w-[45vw]">
      <span className="text-xs sm:text-sm lg:text-base">
        In 2013 I landed as a student in Canada for the betterment of my future. <br /> From student to become Permanent Residence and then citizen I face loads of struggles and hurdles which inspired me to become a Regulated Immigration Consultant. We believe that by walking hand in hand with our clients and taking care of their needs we ensure their Canadian experience starts off on a positive footing and we are honoured to work together to provide the specialized support.
      </span>
    </div>
  </div>

  {/* Image Section */}
  <div className="bg-[url('/about9.jpg')] bg-no-repeat bg-cover mt-10 h-[200px] sm:h-[300px] md:h-[400px] w-full lg:w-[600px]">
  </div>
</div>

<div className="Mission w-full min-h-[90vh] pb-20 gap-10 flex flex-wrap items-center justify-center bg-[#f1f1f1]">
  {/* Image Section */}
  <div className="bg-[url('/about8.jpg')] bg-no-repeat bg-cover mt-10 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] w-full lg:w-[400px]">
  </div>

  {/* Text Section */}
  <div className="p-10 flex flex-col gap-10 w-full lg:w-1/2">
    <div className="flex w-full h-[100px] items-end">
      <span className="text-3xl sm:text-4xl lg:text-5xl text-gray-500">
        <span>Our</span>
        <span className="text-[#155da9]"> Mission</span>
      </span>
    </div>
    <div className="w-full lg:w-[50vw]">
      <span className="text-xs sm:text-sm lg:text-base">
        In 2013 I landed as a student in Canada for the betterment of my future. <br /> From student to become Permanent Residence and then citizen I face loads of struggles and hurdles which inspired me to become a Regulated Immigration Consultant. We believe that by walking hand in hand with our clients and taking care of their needs we ensure their Canadian experience starts off on a positive footing and we are honoured to work together to provide the specialized support.
      </span>
    </div>
  </div>
</div>


 



{/* abhi yeh rehta hai  */}

{/* <div className="feedback w-full h-screen pb-20 bg-white">
  <div className="md:p-10 flex flex-col">
    <div className="mt-10 w-full  ">
      <span className="text-4xl mx-4 sm:mx-0 text-gray-500">
        Hear It From <span className="text-[#155da9]">Our</span>
        <span className="text-[#c30e16] mx-10 xs:mx-0 sm:mx-0 md:mx-0"> Customer's</span>
      </span>
    </div>
    <div className="w-full  h-full flex justify-center mt-[100px]"> 
      <SwiperNavigation />
    </div> 
  </div>
</div>    */}
   
  
   <div className="feedback w-full h-screen pb-20 bg-white">
  <div className="md:p-10 flex flex-col">
    <div className="mt-10 w-full text-center sm:text-start">
      <span className="text-4xl  text-gray-500 text-center md:text-left">
        Hear It From <span className="text-[#155da9]">Our </span>
        <span className="text-[#c30e16] ">
          Customer's
        </span>
      </span>
    </div>
    <div className="w-full h-full flex justify-center mt-[100px]">
      <SwiperNavigation />
    </div>
  </div>
</div>

   











<Footer/>




      </div>
    </div>
  );
}
