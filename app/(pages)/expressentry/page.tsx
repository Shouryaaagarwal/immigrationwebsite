"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import { Raleway } from "next/font/google";
import { SiVisa } from "react-icons/si";
import SwiperNavigation from "@/app/components/SwiperNavigation";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { GrHome } from "react-icons/gr";
import { GiEntryDoor } from "react-icons/gi";
import { Briefcase } from "lucide-react";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function ExpressEntry() {
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
          Express Entry
        </h1>
        <h5 className="text-white mt-4 font-normal text-lg z-20 tracking-widest">
          Fast-track your journey to Canadian permanent residency
        </h5>
      </div>

      <div className="w-full bg-white">
        <div className="mt-10 px-20 pt-10 w-full">
          <h1 className="text-[17px] text-gray-500">
            Canada's premier immigration pathway for skilled professionals seeking 
            permanent residency. Candidates create an online profile that's ranked 
            using the Comprehensive Ranking System (CRS), with top-scoring 
            applicants receiving invitations to apply for Canadian permanent status.
          </h1>

          <div className="pl-20 text-gray-600 mt-6">
            <h2 className="text-xl font-semibold text-[#155da9] mb-4">
              Key Programs Under Express Entry:
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <h1 className="font-medium">Federal Skilled Worker Program</h1>
                <p className="text-sm pl-5 mt-1">
                  Designed for professionals with foreign work experience who meet 
                  Canada's skilled worker criteria based on education, experience, 
                  and language proficiency.
                </p>
              </li>
              <li>
                <h1 className="font-medium">Federal Skilled Trades Program</h1>
                <p className="text-sm pl-5 mt-1">
                  For qualified tradespeople with experience in skilled trades 
                  occupations, addressing Canada's demand for technical expertise.
                </p>
              </li>
              <li>
                <h1 className="font-medium">Canadian Experience Class</h1>
                <p className="text-sm pl-5 mt-1">
                  Pathway for temporary foreign workers with Canadian work 
                  experience to transition to permanent residency.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-gray-500 px-20 pt-10 w-full bg-[#f1f1f1] mt-10">
          <h1 className="font-semibold pt-6 text-gray-500">
            Who <span className="text-[#155da9]">qualifies</span> for 
            <span className="text-[#c30e16]"> Express Entry</span>?
          </h1>
          
          <div className="mt-6 pb-10">
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-3">
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2"></span>
                <span>
                  Skilled professionals with at least 1 year of continuous work 
                  experience in an eligible occupation
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2"></span>
                <span>
                  Language proficiency in English or French (CLB 7 or higher for 
                  most programs)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2"></span>
                <span>
                  Educational qualifications equivalent to Canadian standards 
                  (ECA required for foreign education)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2"></span>
                <span>
                  Sufficient settlement funds (unless currently authorized to work 
                  in Canada)
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2"></span>
                <span>
                  Meet the minimum CRS score requirements (varies by draw)
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
    <Link href="/visitorvisa" className="flex-1 min-w-[250px] max-w-[400px] h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9]">
      <div className="flex flex-col items-center justify-center h-full p-4 gap-4">
        <div className="h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full flex items-center justify-center bg-[#155da9]">
          <SiVisa className="text-white text-4xl sm:text-5xl" />
        </div>
        <div className="text-center">
          <span className="text-xl sm:text-2xl text-[#c30e16]">
            <span className="text-[#155da9]">Visitor</span> Visa
          </span>
        </div>
        <p className="text-sm sm:text-base text-gray-600 text-center">
          Temporary visas for tourism, business visits, and family visits to Canada.
        </p>
      </div>
    </Link>
{/* Work Permit Card */}
<Link href="/workpermit" className="flex-1 min-w-[250px] max-w-[400px] h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9]">
  <div className="flex flex-col items-center justify-center h-full p-4 gap-4">
    <div className="h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full flex items-center justify-center bg-[#c30e16]">
      <Briefcase className="text-white text-6xl sm:text-5xl" />
    </div>
    <div className="text-center">
      <span className="text-xl sm:text-2xl text-[#c30e16]">
        <span className="text-[#155da9]">Work</span> Permit
      </span>
    </div>
    <p className="text-sm sm:text-base text-gray-600 text-center">
      Legal authorization to work in Canada through employer-specific or open permits.
    </p>
  </div>
</Link>

        </div>

        <Footer />
      </div>
    </div>
  );
}