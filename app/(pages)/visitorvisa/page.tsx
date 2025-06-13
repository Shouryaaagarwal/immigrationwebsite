"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import { Raleway } from "next/font/google";
import { SiVisa } from "react-icons/si";
import SwiperNavigation from "@/app/components/SwiperNavigation";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { GiEntryDoor } from "react-icons/gi";
import { GrHome } from "react-icons/gr";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function TemporaryResidence() {
  return (
    <div
      style={{ fontFamily: raleway.style.fontFamily }}
      className="w-full h-screen bg-white"
    >
      <div
        className="h-[70vh] flex flex-col gap-2 items-center justify-center w-full bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/contact6.jpg')" }}
      >
        <Navbar />
        <h1 className="font-semibold tracking-widest text-6xl mt-10 z-20 text-white">
          Visitor Visa
        </h1>
        <h5 className="text-[#F1F1F1] mt-4 font-normal text-lg z-20 tracking-widest">
          Explore Canada's beauty with the right travel authorization
        </h5>
      </div>

      <div className="w-full bg-white">
        <div className="mt-10 px-20 pt-10 w-full">
          <h1 className="text-[17px] text-gray-500">
            Canada welcomes over 35 million temporary residents annually as one of the world's most 
            breathtaking destinations. If you're from a visa-required country, proper advance 
            application is essential. Our expertise enhances your application's accuracy and 
            approval prospects.
          </h1>

          <div className="pl-20 text-gray-600 mt-6">
            <h2 className="text-xl font-semibold text-[#155da9] mb-4">
              Visa Options:
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <h1 className="font-medium">Temporary Resident Visa (TRV)</h1>
                <p className="text-sm pl-5 mt-1">
                  Standard visitor visa for tourism, business visits, or family visits to Canada.
                </p>
              </li>
              <li>
                <h1 className="font-medium">Super Visa</h1>
                <p className="text-sm pl-5 mt-1">
                  Special long-term visa for parents and grandparents of Canadian citizens or permanent residents.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-gray-500 px-20 pt-10 w-full bg-[#f1f1f1] mt-10">
          <h1 className="font-semibold pt-6 text-gray-500">
            <span className="text-[#155da9]">Super Visa</span> Requirements
          </h1>
          
          <div className="mt-6 pb-10">
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-3">
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2"></span>
                <span>
                  Must be the parent or grandparent of a Canadian citizen or permanent resident
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2"></span>
                <span>
                  Signed letter from your Canadian host child/grandchild committing to financial support
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2"></span>
                <span>
                  Valid Canadian medical insurance covering at least $100,000 for minimum 1 year
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2"></span>
                <span>
                  Allows stays up to 2 years per entry with multiple entries for 10 years
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2"></span>
                <span>
                  Must meet standard visitor visa requirements (ties to home country, etc.)
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex w-full items-center justify-center mt-16">
          <span className="text-4xl text-[#155da9]">
            Other <span className="text-[#c30e16]">Services</span>
          </span>
        </div>

        <div className="flex gap-5 flex-wrap h-auto mb-20 items-center justify-center px-20 py-10"> 
           {/* Permanent Residence Card */}
    <Link href="/pr" className="flex-1 min-w-[250px] max-w-[400px] h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9]">
      <div className="flex flex-col items-center justify-center h-full p-4 gap-4">
        <div className="h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full flex items-center justify-center bg-[#c30e16]">
        <GrHome className="text-white text-4xl sm:text-5xl" />
        </div>
        <div className="text-center">
          <span className="text-xl sm:text-2xl text-[#c30e16]">
            <span className="text-[#155da9]">Permanent</span> Residence
          </span>
        </div>
        <p className="text-sm sm:text-base text-gray-600 text-center">
          Family sponsorship and pathways to obtain Canadian permanent resident status.
        </p>
      </div>
    </Link>

    {/* Express Entry Card */}
    <Link href="/expressentry" className="flex-1 min-w-[250px] max-w-[400px] h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9]">
      <div className="flex flex-col items-center justify-center h-full p-4 gap-4">
        <div className="h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full flex items-center justify-center bg-[#155da9]">
           <GiEntryDoor className="text-white text-4xl sm:text-5xl" />
        </div>
        <div className="text-center">
          <span className="text-xl sm:text-2xl text-[#c30e16]">
            <span className="text-[#155da9]">Express</span> Entry
          </span>
        </div>
        <p className="text-sm sm:text-base text-gray-600 text-center">
          Fast-track immigration pathway for skilled workers to obtain Canadian permanent residence.
        </p>
      </div>
    </Link>
          {/* <div className="h-[300px] w-[400px] shadow-xl rounded-lg hover:-translate-y-2 transition-transform duration-500 bg-[#fff]">
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
                  Fast-track immigration pathway for skilled workers to obtain Canadian permanent residence.
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
                  <span className="text-[#155da9]">Study</span> Permits
                </span>
              </div>
              <div className="w-[80%] text-sm text-center">
                <span>
                  Authorization for international students to pursue education at Canadian institutions.
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
                  <span className="text-[#155da9]">Work</span> Permits
                </span>
              </div>
              <div className="w-[80%] text-sm text-center">
                <span>
                  Temporary authorization for foreign nationals to work in Canada.
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
                  <span className="text-[#155da9]">Permanent</span> Residence
                </span>
              </div>
              <div className="w-[80%] text-sm text-center">
                <span>
                  Family sponsorship and other pathways to Canadian permanent residency.
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
                  <span className="text-[#155da9]">Provincial</span> Nominee
                </span>
              </div>
              <div className="w-[80%] text-sm text-center">
                <span>
                  Regional immigration programs addressing specific provincial labor needs.
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
                  <span className="text-[#155da9]">Citizenship</span> Services
                </span>
              </div>
              <div className="w-[80%] text-sm text-center">
                <span>
                  Assistance with Canadian citizenship applications and requirements.
                </span>
              </div>
            </div>
          </div> */}
        </div>

        <Footer />
      </div>
    </div>
  );
}