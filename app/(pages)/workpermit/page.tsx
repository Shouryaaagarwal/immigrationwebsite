"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import { Raleway } from "next/font/google";
import { GrHome } from "react-icons/gr";
import { GiEntryDoor } from "react-icons/gi";
import Footer from "@/app/components/Footer";
import Link from "next/link";

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
          Work Permits
        </h1>
        <h5 className="text-[#F1F1F1] mt-4 font-normal text-lg z-20 tracking-widest">
          Unlock career opportunities in Canada with the right work authorization
        </h5>
      </div>

      <div className="w-full bg-white">
        <div className="mt-10 px-20 pt-10 w-full">
          <h1 className="text-[17px] text-gray-500">
            Canada’s growing economy offers vast opportunities for skilled professionals, temporary workers, and international graduates.
            A valid work permit is essential to legally work in Canada. We guide you through the application process to ensure compliance and maximize approval chances.
          </h1>

          <div className="pl-20 text-gray-600 mt-6">
            <h2 className="text-xl font-semibold text-[#155da9] mb-4">
              Work Permit Categories:
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li>
                <h1 className="font-medium">Employer-Specific Work Permit</h1>
                <p className="text-sm pl-5 mt-1">
                  Issued for a specific employer and job role. Requires a job offer and possibly a Labour Market Impact Assessment (LMIA).
                </p>
              </li>
              <li>
                <h1 className="font-medium">Open Work Permit</h1>
                <p className="text-sm pl-5 mt-1">
                  Not job-specific. Suitable for spouses of skilled workers, international graduates, or individuals under special programs.
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="text-gray-500 px-20 pt-10 w-full bg-[#f1f1f1] mt-10">
          <h1 className="font-semibold pt-6 text-gray-500">
            <span className="text-[#155da9]">Eligibility</span> Criteria
          </h1>

          <div className="mt-6 pb-10">
            <ul className="list-none space-y-3">
              <li className="flex items-start gap-3">
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2"></span>
                <span>
                  Proof of job offer or eligibility under open work permit program
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2"></span>
                <span>
                  Must demonstrate intention to leave Canada upon permit expiry
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2"></span>
                <span>
                  Proof of sufficient funds and no criminal record
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2"></span>
                <span>
                  Medical examination (if required based on job type or stay duration)
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

          <Link href="/visitorvisa" className="flex-1 min-w-[250px] max-w-[400px] h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9]">
  <div className="flex flex-col items-center justify-center h-full p-4 gap-4">
    <div className="h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full flex items-center justify-center bg-[#c30e16]">
      <GiEntryDoor className="text-white text-4xl sm:text-5xl" />
    </div>
    <div className="text-center">
      <span className="text-xl sm:text-2xl text-[#c30e16]">
        <span className="text-[#155da9]">Visitor</span> Visa
      </span>
    </div>
    <p className="text-sm sm:text-base text-gray-600 text-center">
      Travel to Canada for tourism, family visits, or short-term business purposes with proper documentation.
    </p>
  </div>
</Link>

        </div>

        <Footer />
      </div>
    </div>
  );
}
