"use client";

import React, { useLayoutEffect, useRef } from "react";
import Navbar from "@/app/components/Navbar";
import { Raleway } from "next/font/google";
import { SiVisa } from "react-icons/si";
import Footer from "@/app/components/Footer";
import Link from "next/link";
import { Briefcase } from "lucide-react";
import { GiEntryDoor } from "react-icons/gi";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function Pr() {
  // Animation refs
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroSubtitleRef = useRef<HTMLHeadingElement>(null);
  const familyListRef = useRef<HTMLUListElement>(null);
  const familyItemsRef = useRef<HTMLLIElement[]>([]);
  const sponsorTitleRef = useRef<HTMLHeadingElement>(null);
  const sponsorItemsRef = useRef<HTMLLIElement[]>([]);
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

      // Intro text animation
      

      // Family list animations
      gsap.from(familyListRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        scrollTrigger: {
          trigger: familyListRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      familyItemsRef.current.forEach((item, index) => {
        gsap.from(item, {
          opacity: 0,
          x: -20,
          duration: 0.6,
          delay: index * 0.1,
          scrollTrigger: {
            trigger: item,
            start: "top 80%",
            toggleActions: "play none none none"
          }
        });
      });

      // Sponsor section animations
      gsap.from(sponsorTitleRef.current, {
        opacity: 0,
        x: -30,
        duration: 0.7,
        scrollTrigger: {
          trigger: sponsorTitleRef.current,
          start: "top 80%",
          toggleActions: "play none none none"
        }
      });

      sponsorItemsRef.current.forEach((item, index) => {
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
          Permanent <span>Residence</span>
        </h1>
        <h5 
          ref={heroSubtitleRef}
          className="text-[#F1F1F1] mt-4 font-normal text-base sm:text-lg z-20 tracking-widest text-center px-4"
        >
          Connecting Dreams to Destinations Let's Build Your Path Together
        </h5>
      </div>

      <div className="w-full bg-white">
        {/* Intro Section */}
        <div className="mt-10 px-4 sm:px-8 md:px-12 lg:px-20 pt-10 w-full">
          <p 
            
            className="text-base sm:text-[17px] text-gray-500 text-center sm:text-left"
          >
            If you are a Canadian citizen or a permanent resident of Canada, you
            can sponsor your spouse, conjugal or common-law partner, dependent
            child (including adopted child) or other eligible relative to become
            a permanent resident under the Family Class (FC).
          </p>

          {/* Family List Section */}
          <div className="mt-6 sm:mt-8 lg:mt-10 pl-0 sm:pl-10 lg:pl-20 text-gray-600">
            <ul 
              ref={familyListRef}
              className="list-disc pl-5 space-y-3"
            >
              <li ref={el => addToRefs(el, familyItemsRef, 0)} className="pl-2">
                <h1 className="font-medium text-base sm:text-lg">Spouse, common-law partner, or conjugal partner.</h1>
              </li>
              <li ref={el => addToRefs(el, familyItemsRef, 1)} className="pl-2">
                <h1 className="font-medium text-base sm:text-lg">Parent or grandparent.</h1>
              </li>
              <li ref={el => addToRefs(el, familyItemsRef, 2)} className="pl-2">
                <h1 className="font-medium text-base sm:text-lg">Dependent child.</h1>
              </li>
              <li ref={el => addToRefs(el, familyItemsRef, 3)} className="pl-2">
                <h1 className="font-medium text-base sm:text-lg">Orphaned, unmarried, and under 18 years of age:</h1>
                <ul className="list-disc pl-5 sm:pl-8 mt-1">
                  <li className="text-sm sm:text-base">Brother</li>
                  <li className="text-sm sm:text-base">Sister</li>
                  <li className="text-sm sm:text-base">Nephew</li>
                  <li className="text-sm sm:text-base">Niece</li>
                  <li className="text-sm sm:text-base">Grandchild</li>
                </ul>
              </li>
              <li ref={el => addToRefs(el, familyItemsRef, 4)} className="pl-2">
                <h1 className="font-medium text-base sm:text-lg">Intended adopted child under 18 years of age.</h1>
              </li>
            </ul>
          </div>
        </div>

        {/* Sponsor Section */}
        <div className="text-gray-500 px-4 sm:px-8 md:px-12 lg:px-20 pt-10 w-full bg-[#f1f1f1] mt-10">
          <h1 
            ref={sponsorTitleRef}
            className="font-semibold pt-6 text-gray-500"
          >
            Who are <span className="text-[#155da9]">Canadian</span> citizens or
            Canadian permanent <span className="text-[#c30e16]">residents</span>?
          </h1>
          <h1 className="font-semibold mt-2">Who can sponsor?</h1>
          
          <div className="mt-6 pb-10">
            <ul className="list-none space-y-3">
              <li 
                ref={el => addToRefs(el, sponsorItemsRef, 0)}
                className="flex items-start gap-3 px-2 sm:px-0"
              >
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm sm:text-base">
                  The sponsor should be 18 years or older.
                </span>
              </li>
              <li 
                ref={el => addToRefs(el, sponsorItemsRef, 1)}
                className="flex items-start gap-3 px-2 sm:px-0"
              >
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm sm:text-base">
                  Must be a Canadian citizen or permanent resident
                </span>
              </li>
              <li 
                ref={el => addToRefs(el, sponsorItemsRef, 2)}
                className="flex items-start gap-3 px-2 sm:px-0"
              >
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm sm:text-base">
                  Prove to be able to support the family member(s) financially.
                </span>
              </li>
              <li 
                ref={el => addToRefs(el, sponsorItemsRef, 3)}
                className="flex items-start gap-3 px-2 sm:px-0"
              >
                <span className="h-[6px] w-[6px] bg-[#155da9] rounded-full mt-2 flex-shrink-0"></span>
                <span className="text-sm sm:text-base">
                  Consent to provide financial support to the family member for
                  three years from the date they become permanent Canadian
                  residents.
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
          {/* Express Entry Card */}
          <Link 
            ref={el => addToRefs(el, serviceCardsRef, 0)}
            href="/expressentry" 
            className="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] min-w-[250px] max-w-[400px] h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9]"
          >
            <div className="flex flex-col items-center justify-center h-full p-4 gap-3 sm:gap-4">
              <div className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[100px] md:w-[100px] rounded-full flex items-center justify-center bg-[#155da9]">
                <GiEntryDoor className="text-white text-3xl sm:text-4xl md:text-5xl" />
              </div>
              <div className="text-center">
                <span className="text-lg sm:text-xl md:text-2xl text-[#c30e16]">
                  <span className="text-[#155da9]">Express</span> Entry
                </span>
              </div>
              <p className="text-xs sm:text-sm md:text-base text-gray-600 text-center">
                Fast-track immigration pathway for skilled workers to obtain Canadian permanent residence.
              </p>
            </div>
          </Link>

          {/* Visitor Visa Card */}
          <Link 
            ref={el => addToRefs(el, serviceCardsRef, 1)}
            href="/visitorvisa" 
            className="w-full sm:w-[calc(50%-20px)] md:w-[calc(33.333%-20px)] min-w-[250px] max-w-[400px] h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9]"
          >
            <div className="flex flex-col items-center justify-center h-full p-4 gap-3 sm:gap-4">
              <div className="h-[60px] w-[60px] sm:h-[70px] sm:w-[70px] md:h-[100px] md:w-[100px] rounded-full flex items-center justify-center bg-[#c30e16]">
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

          {/* Work Permit Card */}
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
