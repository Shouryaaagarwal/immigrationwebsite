"use client";
import React from "react";
import { CgMail } from "react-icons/cg";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { MdOutlinePhone } from "react-icons/md";
import { Raleway, Rambla } from "next/font/google";
import { FaTiktok } from "react-icons/fa6";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function Footer() {
  return (
    <footer
      style={{ fontFamily: raleway.style.fontFamily }}
      className="bg-[#1E201E] h-[70vh] w-full text-white py-8 flex p-10 "
    >
      {/* <div className="text-white h-full bg-[#1E201E] w-full py-8 flex p-10 "> 

        <div className="map  ">
          <h1 className="text-[#155da9] font-semibold tracking-widest  text-xl">Our Office</h1>
          <div className="bg-red-400 h-[200px] w-[300px] mt-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3496.0715960829416!2d76.75672981932944!3d30.749736803107634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fed9c646e1469%3A0xddbfe8e7a9a5bac0!2sBike%20parking%20bh8!5e0!3m2!1sen!2sin!4v1730475762369!5m2!1sen!2sin"
              width="500"
              height="200"
              // style="border:0;"
              // allowfullscreen=""
              loading="lazy"
              // referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="mt-5">
            <h1 className="text-[#c30e16]">
              123 Main Street <br />
              Springfield, IL 62701 <br />
              United States
            </h1>
          </div>
        </div>
        <div className="  h-[400px] w-[800px] flex  gap-10  ml-[250px]">
          
          <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-[#c30e16] tracking-widest  text-xl">Contact</h1>
            <div className="mt-5 text-[#155da9] flex flex-col gap-8">
              <div className="flex gap-2 items-center">
                <span className="text-2xl ">
                  <CgMail />
                </span>
                <span className="font-extralight text-sm">
                  info@seaviewimmigration.com
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-2xl ">
                  <CgMail />
                </span>
                <span className="font-extralight text-sm">
                  seaviewimmigration@gmail.com
                </span>
              </div>
              <div className="flex gap-2 items-center">
                <span className="text-2xl ">
                  <MdOutlinePhone/>
                </span>
                <span className="font-extralight text-sm">+1(639) 916-1751</span>
              </div>

              <div className="flex gap-2 items-center">
                <span className="text-2xl ">
                  <ImLocation />
                </span>
                <span className="font-extralight text-sm">Appointments Only</span>
              </div>
            </div>
          </div>
         
          <div className="ml-10 flex flex-col gap-3">
            <h1 className="font-bold text-lg">Follow us</h1>
            <div className=" mt-5 flex gap-8">
              <span className="text-2xl">
                <FaFacebookF />
              </span>
              <span className="text-2xl">
                <FaInstagram />
              </span>
              <span className="text-2xl">
                <FaLinkedinIn />
              </span>
            </div>
            <div className="mt-5">
              <input
                placeholder="Enter your email"
                className="px-2 rounded-md h-[40px] w-[400px] focus:outline-none focus:ring-0"
                type="email"
              />{" "}
            </div>
            <div className="flex mt-2">
              <button className="px-10 py-3 text-white bg-[#155da9]">
                Sign Up
              </button>
            </div>
          </div>
        </div>
        </div> */}

      <div className="flex flex-col gap-4 w-full">
        {/* First Section */}
        <div className="relative flex items-center justify-between">
          <div className="  h-[80px] w-[200px]  rounded-md  flex items-center justify-center">
          <img
  className="h-[60px] w-auto filter invert contrast-0 brightness-100"
  src="https://seaviewimmigration.com/assets/img/logo.svg"
  alt="Logo"
/>
          </div>
          <div>
            <div className=" mt-5 flex gap-8">
              <span className="text-xl">
                <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#155da9]">
                  <FaFacebookF />
                </div>
              </span>
              <span className="text-xl">
                <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#155da9]">
                  <FaInstagram />
                </div>
              </span>
              <span className="text-xl">
                <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#c30e16]">
                  <FaLinkedinIn />
                </div>{" "}
              </span>
              <span className="text-xl">
                <div className="h-[40px] w-[40px] rounded-full flex items-center justify-center bg-[#155da9]">
                  <FaTiktok />
                </div>{" "}
              </span>
            </div>
          </div>
        </div>
        <hr className="w-full h-[0.25px] text-white bg-white border-none" />

        {/* Second Section */}
        <div className="flex items-start p-10 justify-between">
  <div className="flex flex-col gap-4">
    <h1 className="text-2xl font-semibold text-gray-500">Office</h1>
    <h1>123 streets,</h1>
    <h1>New street in Toronto,</h1>
    <h1>Canada</h1>
    <h1>@email.com</h1>
    <h1>907383473943</h1>
  </div>
  <div className="flex flex-col gap-4">
    <h1 className="text-2xl font-semibold text-gray-500">Comapny</h1>
    <h1>About Us</h1>
    <h1>Services</h1>
    <h1>Contact Us</h1>
  </div>
  <div className="flex flex-col gap-4">
    <h1 className="text-2xl text-[#155da9]">Solutions</h1>
    <h1>Students</h1>
    <h1>Immigrants</h1>
    <h1>Families</h1>
  </div>
  <div className="flex flex-col gap-4">
    <h1 className="text-2xl text-[#155da9]">Support</h1>
    <h1>One To One Sessions</h1> 
    <h1>Lorem Ipsum</h1>
    <h1>Lorem Ipsum</h1>
    <h1>Lorem Ipsum</h1>
  </div>
  <div className="flex flex-col gap-4">
    <h1 className="text-2xl font-semibold text-gray-500">Legal</h1>
    <h1>One To One Sessions</h1> 
    <h1>Lorem Ipsum</h1>
    <h1 >Lorem Ipsum</h1>
    <h1>Lorem Ipsum</h1>
  </div>
</div>
   <div className="flex mt-5 text-xs text-gray-400 items-center justify-center">  
   © 2024 SeaViewImmigrationServices, Inc. All rights reserved.
     </div>
   
      </div>
    </footer>
  );
}
