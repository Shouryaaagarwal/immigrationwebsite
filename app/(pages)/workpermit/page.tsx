"use client";

import React, { useLayoutEffect, useRef } from "react";
import Navbar from "@/app/components/Navbar";
import { Raleway } from "next/font/google";
import { GrHome } from "react-icons/gr";
import { GiEntryDoor } from "react-icons/gi";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function TemporaryResidence() {
  // Animation refs
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLHeadingElement>(null);
  const workPermitTitleRef = useRef<HTMLHeadingElement>(null);
  const workPermitItemsRef = useRef<HTMLLIElement[]>([]);
  const eligibilityTitleRef = useRef<HTMLHeadingElement>(null);
  const eligibilityItemsRef = useRef<HTMLLIElement[]>([]);
  const servicesTitleRef = useRef<HTMLSpanElement>(null);
  const serviceCardsRef = useRef<HTMLAnchorElement[]>([]);

  // Helper function to add items to ref arrays
  const addToRefs = (el: HTMLElement | null, refArray: React.MutableRefObject<HTMLElement[]>, index: number) => {
    if (el) refArray.current[index] = el;
  };

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero section animations
      gsap.from(heroTitleRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out"
      });

      gsap.from(heroSubtitleRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        delay: 0.3,
        ease: "power2.out"
      });

      // Work Permit Categories animations (starting from the "Work Permit Categories:" heading)
      gsap.from(workPermitTitleRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.7,
        scrollTrigger: {
          trigger: workPermitTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      workPermitItemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      });

      // Eligibility Criteria animations
      gsap.from(eligibilityTitleRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.7,
        scrollTrigger: {
          trigger: eligibilityTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      eligibilityItemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          x: -20,
          duration: 0.5,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      });

      // Services section animations
      gsap.from(servicesTitleRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: servicesTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      serviceCardsRef.current.forEach((card, index) => {
        gsap.from(card, {
          opacity: 0,
          y: 50,
          duration: 0.7,
          delay: index * 0.15,
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      style={{ fontFamily: raleway.style.fontFamily }}
      className="w-full bg-white overflow-x-hidden"
    >
      {/* Hero Section */}
      <div
        className="h-[70vh] flex flex-col gap-2 items-center justify-center w-full bg-cover bg-center relative"
        style={{ backgroundImage: "url(`/contact6.jpg`)" }}
      >
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <h1 
          ref={heroTitleRef}
          className="font-semibold tracking-widest text-4xl sm:text-5xl md:text-6xl mt-10 z-20 text-white text-center px-4"
        >
          Work Permits
        </h1>
        <h5 
          ref={heroSubtitleRef}
          className="text-[#F1F1F1] mt-4 font-normal text-base sm:text-lg z-20 tracking-widest text-center px-4"
        >
          Unlock career opportunities in Canada with the right work authorization
        </h5>
      </div>

      <div className="w-full bg-white">
        {/* Intro Section - Static (no animation) */}
        <div className="mt-10 px-4 sm:px-8 md:px-12 lg:px-20 pt-10 w-full">
          <p className="text-base sm:text-[17px] text-gray-500 text-center sm:text-left">
            Canada&apos;s growing economy offers vast opportunities for skilled professionals, temporary workers, and international graduates.
            A valid work permit is essential to legally work in Canada. We guide you through the application process to ensure compliance and maximize approval chances.
          </p>

          {/* Work Permit Categories Section - Animations start here */}
          <div className="mt-6 sm:mt-8 lg:mt-10 pl-0 sm:pl-10 lg:pl-20 text-gray-600">
            <h2 
              ref={workPermitTitleRef}
              className="text-lg sm:text-xl font-semibold text-[#155da9] mb-4 text-center sm:text-left"
            >
              Work Permit Categories:
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li ref={el => addToRefs(el, workPermitItemsRef, 0)} className="pl-2">
                <h1 className="font-medium text-base sm:text-lg">Employer-Specific Work Permit</h1>
                <p className="text-xs sm:text-sm pl-3 sm:pl-5 mt-1">
                  Issued for a specific employer and job role. Requires a job offer and possibly a Labour Market Impact Assessment (LMIA).
                </p>
              </li>
              <li ref={el => addToRefs(el, workPermitItemsRef, 1)} className="pl-2">
                <h1 className="font-medium text-base sm:text-lg">Open Work Permit</h1>
                <p className="text-xs sm:text-sm pl-3 sm:pl-5 mt-1">
                  Not job-specific. Suitable for spouses of skilled workers, international graduates, or individuals under special programs.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Eligibility Criteria Section */}
        <div className="text-gray-500 px-4 sm:px-8 md:px-12 lg:px-20 pt-10 w-full bg-[#f1f1f1] mt-10">
          <h1 
            ref={eligibilityTitleRef}
            className="font-semibold pt-6 text-gray-500"
          >
            <span className="text-[#155da9]">Eligibility</span> Criteria
          </h1>
          
          <div className="mt-6 pb-10">
            <ul className="list-none space-y-3">
              <li 
                ref={el => addToRefs(el, eligibilityItemsRef, 0)}
                className="flex items-start gap-3 px-2 sm:px-0"
              >
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm sm:text-base">
                  Proof of job offer or eligibility under open work permit program
                </span>
              </li>
              <li 
                ref={el => addToRefs(el, eligibilityItemsRef, 1)}
                className="flex items-start gap-3 px-2 sm:px-0"
              >
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm sm:text-base">
                  Must demonstrate intention to leave Canada upon permit expiry
                </span>
              </li>
              <li 
                ref={el => addToRefs(el, eligibilityItemsRef, 2)}
                className="flex items-start gap-3 px-2 sm:px-0"
              >
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm sm:text-base">
                  Proof of sufficient funds and no criminal record
                </span>
              </li>
              <li 
                ref={el => addToRefs(el, eligibilityItemsRef, 3)}
                className="flex items-start gap-3 px-2 sm:px-0"
              >
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm sm:text-base">
                  Medical examination (if required based on job type or stay duration)
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Services Section */}
        <div className="flex w-full items-center justify-center mt-10 sm:mt-16">
          <span 
            ref={servicesTitleRef}
            className="text-2xl sm:text-3xl md:text-4xl text-[#155da9]"
          >
            Other <span className="text-[#c30e16]">Services</span>
          </span>
        </div>

        <div className="flex flex-col sm:flex-row gap-5 flex-wrap h-auto mb-20 items-center justify-center px-4 sm:px-8 md:px-12 lg:px-20 py-8 sm:py-10">
          {/* Permanent Residence Card */}
          <Link 
            ref={el => addToRefs(el, serviceCardsRef, 0)}
            href="/pr" 
            className="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] min-w-[250px] max-w-[400px] h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9]"
          >
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
          <Link 
            ref={el => addToRefs(el, serviceCardsRef, 1)}
            href="/expressentry" 
            className="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] min-w-[250px] max-w-[400px] h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9]"
          >
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

          {/* Visitor Visa Card */}
          <Link 
            ref={el => addToRefs(el, serviceCardsRef, 2)}
            href="/visitorvisa" 
            className="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] min-w-[250px] max-w-[400px] h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9]"
          >
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