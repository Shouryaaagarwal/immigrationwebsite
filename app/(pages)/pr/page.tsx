"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import { useEffect } from "react";
import { Raleway } from "next/font/google"; // Corrected import path for next/font/google
import { FaTools } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { MdMiscellaneousServices } from "react-icons/md";
import SwiperNavigation from "@/app/components/SwiperNavigation";
import Footer from "@/app/components/Footer";
import { SiVisa } from "react-icons/si";
const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function Pr() {
  return (
    <div
      style={{ fontFamily: raleway.style.fontFamily }} // Fixed style syntax
      className="w-full h-screen bg-white"
    >
      <div
        className="h-[70vh] flex flex-col gap-2 items-center justify-center w-full bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/contact6.jpg')" }} // Background image path
      >
        <Navbar />
        <h1 className=" font-semibold tracking-widest text-6xl mt-10 z-20 text-white">
          Permanent <span className="">Residence</span>{" "}
        </h1>
        <h5 className="text-[#F1F1F1] mt-4 font-thin text-lg z-20 tracking-widest">
          Connecting Dreams to Destinations Let’s Build Your Path Together
        </h5>
      </div>

      <div className="h-[130vh] w-full bg-white">
        <div className="mt-10 pl-20 pr-20 pt-10 w-full h-[55vh]">
          <h1 className="text-[17px] text-gray-500">
            If you are a Canadian citizen or a permanent resident of Canada, you
            can sponsor your spouse, conjugal or common-law partner, dependent
            child (including adopted child) or other eligible relative to become
            a permanent resident under the Family Class (FC).
          </h1>

          <div className="pl-20 text-gray-600 mt-6">
            <ul className="list-disc pl-5">
              <li>
                <h1>Spouse, common-law partner, or conjugal partner.</h1>
              </li>
              <li>
                <h1>Parent or grandparent.</h1>
              </li>
              <li>
                <h1>Dependent child.</h1>
              </li>
              <li>
                <h1>Orphaned, unmarried, and under 18 years of age:</h1>
                <ul className="list-disc pl-8">
                  <li>Brother</li>
                  <li>Sister</li>
                  <li>Nephew</li>
                  <li>Niece</li>
                  <li>Grandchild</li>
                </ul>
              </li>
              <li>
                <h1>Intended adopted child under 18 years of age.</h1>
              </li>
            </ul>
          </div>
        </div>

        <div className="h-[40vh] text-gray-500 pl-20 pr-20 pt-10 w-full bg-[#f1f1f1]">
          <h1 className="font-semibold pt-6 text-gray-500">
            {" "}
            Who are <span className="text-[#155da9]">Canadian</span> citizens or
            Canadian permanent <span className="text-[#c30e16]">residents</span>
            ?
          </h1>
          <h1 className="font-semibold">Who can sponsor?</h1>
          <div className="mt-6">
            <ul className="list-none pl-5">
              <li className="flex items-start gap-2">
              <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2">
                  .
                </span>                <span>The sponsor should be 18 years or older.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2">
                  .
                </span>
                <span>Must be a Canadian citizen or permanent resident</span>
              </li>
              <li className="flex items-start gap-2">
              <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2">
                  .
                </span>                <span>
                  Prove to be able to support the family member(s) financially.
                </span>
              </li>
              <li className="flex items-start gap-2">
              <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2">
                  .
                </span>                <span>
                  Consent to provide financial support to the family member for
                  three years from the date they become permanent Canadian
                  residents.
                </span>
              </li>
            </ul>
          </div>
        </div>    
        <div className="flex  w-full items-center justify-center"> 
                    <span className="text-4xl mt-10 mb-10 text-[#155da9]">Other <span className="text-[#c30e16]">Services</span></span>
        </div>
        <div className="flex gap-5 flex-wrap h-[100vh] mb-20 items-center justify-center">
  <div className="h-[300px] w-[400px] shadow-xl rounded-lg hover:-translate-y-2 transition-transform duration-500 bg-[#fff]">
    <div className="flex flex-col items-center justify-center mt-5 gap-3">
      <div className="flex flex-col items-center justify-center">
        <div className="h-[100px] w-[100px] bg-[#000] rounded-full flex items-center justify-center">
          <span className="text-white text-6xl">
            <SiVisa />
          </span>
        </div>
      </div>

      <div className="mt-5 text-center">
        <span className="text-3xl text-[#c30e16]">
          <span className="text-[#155da9]">Express</span> Entry
        </span>
      </div>

      <div className="w-[80%] text-sm text-center">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          voluptatibus.
        </span>
      </div>
    </div>
  </div>

  <div className="h-[300px] w-[400px] shadow-xl rounded-lg hover:-translate-y-2 transition-transform duration-500 border-2 border-[#c30e16]">
    <div className="flex flex-col items-center justify-center mt-5 gap-3">
      <div className="flex flex-col items-center justify-center">
        <div className="h-[100px] w-[100px] bg-[#155da9] rounded-full flex items-center justify-center">
          <span className="text-white text-6xl">
            <SiVisa />
          </span>
        </div>
      </div>

      <div className="mt-5 text-center">
        <span className="text-3xl text-[#c30e16]">
          <span className="text-[#155da9]">Express</span> Entry
        </span>
      </div>

      <div className="w-[80%] text-sm text-center">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          voluptatibus.
        </span>
      </div>
    </div>
  </div>

  <div className="h-[300px] w-[400px] shadow-xl rounded-lg hover:-translate-y-2 transition-transform duration-500 bg-[#fff]">
    <div className="flex flex-col items-center justify-center mt-5 gap-3">
      <div className="flex flex-col items-center justify-center">
        <div className="h-[100px] w-[100px] bg-[#000] rounded-full flex items-center justify-center">
          <span className="text-white text-6xl">
            <SiVisa />
          </span>
        </div>
      </div>

      <div className="mt-5 text-center">
        <span className="text-3xl text-[#c30e16]">
          <span className="text-[#155da9]">Express</span> Entry
        </span>
      </div>

      <div className="w-[80%] text-sm text-center">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          voluptatibus.
        </span>
      </div>
    </div>
  </div>

  <div className="h-[300px] w-[400px] shadow-xl rounded-lg border-[2px] hover:-translate-y-2 transition-transform duration-500 border-[#155da9]">
    <div className="flex flex-col items-center justify-center mt-5 gap-3">
      <div className="flex flex-col items-center justify-center">
        <div className="h-[100px] w-[100px] bg-[#155da9] rounded-full flex items-center justify-center">
          <span className="text-white text-6xl">
            <SiVisa />
          </span>
        </div>
      </div>

      <div className="mt-5 text-center">
        <span className="text-3xl text-[#c30e16]">
          <span className="text-[#155da9]">Express</span> Entry
        </span>
      </div>

      <div className="w-[80%] text-sm text-center">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          voluptatibus.
        </span>
      </div>
    </div>
  </div>

  <div className="h-[300px] w-[400px] shadow-xl rounded-lg hover:-translate-y-2 transition-transform duration-500 bg-[#fff]">
    <div className="flex flex-col items-center justify-center mt-5 gap-3">
      <div className="flex flex-col items-center justify-center">
        <div className="h-[100px] w-[100px] bg-[#c30e16] rounded-full flex items-center justify-center">
          <span className="text-white text-6xl">
            <SiVisa />
          </span>
        </div>
      </div>

      <div className="mt-5 text-center">
        <span className="text-3xl text-[#c30e16]">
          <span className="text-[#155da9]">Express</span> Entry
        </span>
      </div>

      <div className="w-[80%] text-sm text-center">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          voluptatibus.
        </span>
      </div>
    </div>
  </div>   
  <div className="h-[300px] w-[400px] shadow-xl rounded-lg border-[2px] hover:-translate-y-2 transition-transform duration-500 border-[#155da9]">
    <div className="flex flex-col items-center justify-center mt-5 gap-3">
      <div className="flex flex-col items-center justify-center">
        <div className="h-[100px] w-[100px] bg-[#155da9] rounded-full flex items-center justify-center">
          <span className="text-white text-6xl">
            <SiVisa />
          </span>
        </div>
      </div>

      <div className="mt-5 text-center">
        <span className="text-3xl text-[#c30e16]">
          <span className="text-[#155da9]">Express</span> Entry
        </span>
      </div>

      <div className="w-[80%] text-sm text-center">
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
          voluptatibus.
        </span>
      </div>
    </div>
  </div>
</div>

      <Footer/>
      </div>   
    </div>
  );
}
