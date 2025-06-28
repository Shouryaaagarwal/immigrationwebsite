"use client";
import React, { useLayoutEffect, useRef } from "react";
import Navbar from "@/app/components/Navbar";
import { Raleway } from "next/font/google";
import { SiVisa } from "react-icons/si";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { GrHome } from "react-icons/gr";
import { Briefcase } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function ExpressEntry() {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLHeadingElement>(null);
  const introTextRef = useRef<HTMLParagraphElement>(null);
  const programsTitleRef = useRef<HTMLHeadingElement>(null);
  const programItemsRef = useRef<HTMLLIElement[]>([]);
  const qualifyTitleRef = useRef<HTMLHeadingElement>(null);
  const qualifyItemsRef = useRef<HTMLLIElement[]>([]);
  const servicesTitleRef = useRef<HTMLSpanElement>(null);
  const serviceCardsRef = useRef<HTMLAnchorElement[]>([]);

  // Helper function to add items to ref array
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

      // Intro text animation
      gsap.from(introTextRef.current, {
        opacity: 0,
        y: 40,
        duration: 0.8,
        scrollTrigger: {
          trigger: introTextRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      // Programs section animations
      gsap.from(programsTitleRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.7,
        scrollTrigger: {
          trigger: programsTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      programItemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          y: 30,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      });

      // Qualification section animations
      gsap.from(qualifyTitleRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.7,
        scrollTrigger: {
          trigger: qualifyTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      qualifyItemsRef.current.forEach((item, index) => {
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
        style={{ backgroundImage: "url('/contact6.jpg')" }}
      >
        <div className="fixed top-0 left-0 w-full z-50">
          <Navbar />
        </div>
        <h1 
          ref={heroTitleRef}
          className="font-semibold tracking-widest text-4xl sm:text-5xl md:text-6xl mt-10 z-20 text-white text-center px-4"
        >
          Express Entry
        </h1>
        <h5 
          ref={heroSubtitleRef}
          className="text-white mt-4 font-normal text-base sm:text-lg z-20 tracking-widest text-center px-4"
        >
          Fast-track your journey to Canadian permanent residency
        </h5>
      </div>

      <div className="w-full bg-white">
        {/* Intro Section */}
        <div className="mt-10 px-4 sm:px-8 md:px-12 lg:px-20 pt-10 w-full">
          <p 
           
            className="text-base sm:text-[17px] text-gray-500 text-center sm:text-left"
          >
            Canada's premier immigration pathway for skilled professionals seeking 
            permanent residency. Candidates create an online profile that's ranked 
            using the Comprehensive Ranking System (CRS), with top-scoring 
            applicants receiving invitations to apply for Canadian permanent status.
          </p>

          {/* Programs Section */}
          <div className="mt-6 sm:mt-8 lg:mt-10 pl-0 sm:pl-10 lg:pl-20 text-gray-600">
            <h2 
             
              className="text-lg sm:text-xl font-semibold text-[#155da9] mb-4 text-center sm:text-left"
            >
              Key Programs Under Express Entry:
            </h2>
            <ul className="list-disc pl-5 space-y-3">
              <li ref={el => addToRefs(el, programItemsRef, 0)} className="pl-2">
                <h1 className="font-medium text-base sm:text-lg">Federal Skilled Worker Program</h1>
                <p className="text-xs sm:text-sm pl-3 sm:pl-5 mt-1">
                  Designed for professionals with foreign work experience who meet 
                  Canada's skilled worker criteria based on education, experience, 
                  and language proficiency.
                </p>
              </li>
              <li ref={el => addToRefs(el, programItemsRef, 1)} className="pl-2">
                <h1 className="font-medium text-base sm:text-lg">Federal Skilled Trades Program</h1>
                <p className="text-xs sm:text-sm pl-3 sm:pl-5 mt-1">
                  For qualified tradespeople with experience in skilled trades 
                  occupations, addressing Canada's demand for technical expertise.
                </p>
              </li>
              <li ref={el => addToRefs(el, programItemsRef, 2)} className="pl-2">
                <h1 className="font-medium text-base sm:text-lg">Canadian Experience Class</h1>
                <p className="text-xs sm:text-sm pl-3 sm:pl-5 mt-1">
                  Pathway for temporary foreign workers with Canadian work 
                  experience to transition to permanent residency.
                </p>
              </li>
            </ul>
          </div>
        </div>

        {/* Qualification Section */}
        <div className="text-gray-500 px-4 sm:px-8 md:px-12 lg:px-20 pt-10 w-full bg-[#f1f1f1] mt-10">
          <h1 
            ref={qualifyTitleRef}
            className="font-semibold pt-6 text-gray-500 text-center sm:text-left"
          >
            Who <span className="text-[#155da9]">qualifies</span> for 
            <span className="text-[#c30e16]"> Express Entry</span>?
          </h1>
          
          <div className="mt-6 pb-10">
            <ul className="list-none space-y-3">
              <li 
                ref={el => addToRefs(el, qualifyItemsRef, 0)}
                className="flex items-start gap-3 px-2 sm:px-0"
              >
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm sm:text-base">
                  Skilled professionals with at least 1 year of continuous work 
                  experience in an eligible occupation
                </span>
              </li>
              <li 
                ref={el => addToRefs(el, qualifyItemsRef, 1)}
                className="flex items-start gap-3 px-2 sm:px-0"
              >
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm sm:text-base">
                  Language proficiency in English or French (CLB 7 or higher for 
                  most programs)
                </span>
              </li>
              <li 
                ref={el => addToRefs(el, qualifyItemsRef, 2)}
                className="flex items-start gap-3 px-2 sm:px-0"
              >
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm sm:text-base">
                  Educational qualifications equivalent to Canadian standards 
                  (ECA required for foreign education)
                </span>
              </li>
              <li 
                ref={el => addToRefs(el, qualifyItemsRef, 3)}
                className="flex items-start gap-3 px-2 sm:px-0"
              >
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm sm:text-base">
                  Sufficient settlement funds (unless currently authorized to work 
                  in Canada)
                </span>
              </li>
              <li 
                ref={el => addToRefs(el, qualifyItemsRef, 4)}
                className="flex items-start gap-3 px-2 sm:px-0"
              >
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm sm:text-base">
                  Meet the minimum CRS score requirements (varies by draw)
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
          <Link 
            ref={el => addToRefs(el, serviceCardsRef, 0)}
            href="/pr" 
            className="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] min-w-[250px] max-w-[400px] h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9]"
          >
            <div className="flex flex-col items-center justify-center h-full p-4 gap-3 sm:gap-4">
              <div className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[100px] md:w-[100px] rounded-full flex items-center justify-center bg-[#c30e16]">
                <GrHome className="text-white text-3xl sm:text-4xl md:text-5xl" />
              </div>
              <div className="text-center">
                <span className="text-lg sm:text-xl md:text-2xl text-[#c30e16]">
                  <span className="text-[#155da9]">Permanent</span> Residence
                </span>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center">
                Family sponsorship and pathways to obtain Canadian permanent resident status.
              </p>
            </div>
          </Link> 
          
          <Link 
            ref={el => addToRefs(el, serviceCardsRef, 1)}
            href="/visitorvisa" 
            className="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] min-w-[250px] max-w-[400px] h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9]"
          >
            <div className="flex flex-col items-center justify-center h-full p-4 gap-3 sm:gap-4">
              <div className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[100px] md:w-[100px] rounded-full flex items-center justify-center bg-[#155da9]">
                <SiVisa className="text-white text-3xl sm:text-4xl md:text-5xl" />
              </div>
              <div className="text-center">
                <span className="text-lg sm:text-xl md:text-2xl text-[#c30e16]">
                  <span className="text-[#155da9]">Visitor</span> Visa
                </span>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center">
                Temporary visas for tourism, business visits, and family visits to Canada.
              </p>
            </div>
          </Link>
          
          <Link 
            ref={el => addToRefs(el, serviceCardsRef, 2)}
            href="/workpermit" 
            className="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] min-w-[250px] max-w-[400px] h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9]"
          >
            <div className="flex flex-col items-center justify-center h-full p-4 gap-3 sm:gap-4">
              <div className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[100px] md:w-[100px] rounded-full flex items-center justify-center bg-[#c30e16]">
                <Briefcase className="text-white text-3xl sm:text-4xl md:text-5xl" />
              </div>
              <div className="text-center">
                <span className="text-lg sm:text-xl md:text-2xl text-[#c30e16]">
                  <span className="text-[#155da9]">Work</span> Permit
                </span>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center">
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