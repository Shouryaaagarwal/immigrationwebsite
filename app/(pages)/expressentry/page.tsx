"use client";

import React from "react";
import Navbar from "@/app/components/Navbar";
import { Raleway } from "next/font/google";
import { SiVisa } from "react-icons/si";
import SwiperNavigation from "@/app/components/SwiperNavigation";
import Footer from "@/app/components/Footer";

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
        <h5 className="text-[#F1F1F1] mt-4 font-thin text-lg z-20 tracking-widest">
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
                  <span className="text-[#155da9]">Permanent</span> Residence
                </span>
              </div>
              <div className="w-[80%] text-sm text-center">
                <span>
                  Family sponsorship and other pathways to Canadian permanent 
                  residency status.
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
                  Pursue world-class education at Canadian institutions with 
                  pathways to work and residency.
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
                  Temporary and permanent work authorization solutions for 
                  employers and foreign workers.
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
                  <span className="text-[#155da9]">Provincial</span> Nominee
                </span>
              </div>
              <div className="w-[80%] text-sm text-center">
                <span>
                  Provincial immigration programs tailored to regional labor 
                  market needs across Canada.
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
                  <span className="text-[#155da9]">Citizenship</span> Services
                </span>
              </div>
              <div className="w-[80%] text-sm text-center">
                <span>
                  Assistance with Canadian citizenship applications and 
                  requirements.
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
                  <span className="text-[#155da9]">Visitor</span> Visas
                </span>
              </div>
              <div className="w-[80%] text-sm text-center">
                <span>
                  Temporary resident visas for tourism, business visits, and 
                  family visits.
                </span>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}