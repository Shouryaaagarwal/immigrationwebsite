"use client";

import Navbar from "@/app/components/Navbar";
import React, { useLayoutEffect, useRef } from "react";
import { Raleway } from "next/font/google";
import { FaTools } from "react-icons/fa";
import { HiUserGroup } from "react-icons/hi2";
import { MdMiscellaneousServices } from "react-icons/md";
import SwiperNavigation from "@/app/components/SwiperNavigation";
import Footer from "@/app/components/Footer";
import Script from "next/script";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function About() {
  gsap.registerPlugin(ScrollTrigger);

  const aboutRef = useRef(null);

  const cardRefs = useRef<HTMLDivElement[]>([]);
  const imgRef = useRef<HTMLDivElement>(null); // Ref for image
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };
  useLayoutEffect(() => {
  const ctx = gsap.context(() => {
    // Zoom animation for heading
    gsap.timeline({
      scrollTrigger: {
        trigger: aboutRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
        // markers: true,
      },
    }).fromTo(
      aboutRef.current,
      { opacity: 1, scale: 0.6 },
      { opacity: 1, scale: 1.5, ease: "power2.out" }
    );   

     gsap.fromTo(
            aboutRef.current,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 1,
              ease: "power2.out",
            }
          );

    // Fade in for cards — on scroll down and up
    cardRefs.current.forEach((card) => {
      gsap.fromTo(
        card,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
            // markers: true,
          },
        }
      );
    });

    // Fade-in for image
    gsap.fromTo(
      imgRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: imgRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          // markers: true,
        },
      }
    );

    // Fade-in for client section heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: headingRef.current,
          start: "top 85%",
          end: "bottom 20%",
          toggleActions: "play reverse play reverse",
          // markers: true,
        },
      }
    );
  });

  return () => ctx.revert();
}, []);

  return (
    <div
      style={{ fontFamily: raleway.style.fontFamily }}
      className="w-full bg-white overflow-x-hidden"
    >
      {/* Hero Section */}

      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div
        data-scroll-section
        data-scroll
        data-scroll-speed="0.2"
        className="h-[55vh] md:h-[70vh] bg-white flex flex-col gap-2 items-center justify-center w-full bg-cover bg-center relative z-10"
        style={{
          backgroundImage: "url('/about1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1
          ref={aboutRef}
          className="font-medium tracking-widest text-4xl md:text-5xl lg:text-6xl z-20 text-white text-center px-4 will-change-transform"
          style={{ transformOrigin: "center center" }}
        >
          About Us
        </h1>
        <h5 className="text-[#F1F1F1] mt-4 font-thin text-sm md:text-lg z-20 tracking-widest text-center px-4">
          Connecting Dreams to Destinations Let's Build Your Path Together
        </h5>
      </div>

      {/* Introduction Section */}
      <div className="w-full bg-white py-10 px-4 md:px-10">
        <div
          data-scroll-section
          className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8"
        >
          <div data-scroll data-scroll-speed="0.2" className="md:w-1/3">
            <span className="text-gray-500 font-light text-2xl lg:text-4xl">
              <span className="text-2xl md:text-3xl lg:text-5xl tracking-wider font-light text-[#155da9]">
                Your Trusted
              </span>{" "}
              Immigration <br />
              <span className="text-[#c30e16] text-2xl md:text-3xl lg:text-5xl">
                Partner in Canada
              </span>
            </span>
          </div>
          <div
            data-scroll
            data-scroll-speed="0.2"
            className="md:w-1/3 text-gray-500"
          >
            <p className="md:mt-10">
              Founded by immigrants for immigrants, we bring firsthand
              experience and professional expertise to guide you through every
              step of your Canadian immigration journey. Our team of regulated
              consultants understands both the challenges and opportunities
              newcomers face.
            </p>
          </div>
          <div
            data-scroll
            data-scroll-speed="0.2"
            className="md:w-1/3 text-gray-500"
          >
            <p className="md:mt-10">
              We specialize in creating personalized immigration strategies for
              students, skilled workers, and families. Our success comes from
              combining regulatory knowledge with practical insights to maximize
              your chances of approval.
            </p>
          </div>
        </div>
      </div>

      {/* Features Section */}

      {/* Cards Section */}
      <div className="w-full bg-white py-10 mb-10 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div ref={addToRefs} className="shadow-xl bg-white rounded-lg p-4">
            <div className="flex items-center gap-6">
              <div className="bg-[#155da9] h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center shrink-0">
                <FaTools className="text-white text-2xl" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-semibold text-lg text-[#c30e16]">
                  Accredited Expertise
                </span>
                <span className="text-gray-500 text-sm mt-1">
                  Our ICCRC-regulated consultants stay current with all policy
                  changes to provide accurate, reliable advice for your
                  immigration needs.
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div ref={addToRefs} className="shadow-xl bg-white rounded-lg p-4">
            <div className="flex items-center gap-6">
              <div className="bg-[#c30e16] h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center shrink-0">
                <MdMiscellaneousServices className="text-white text-3xl" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-semibold text-lg text-[#155da9]">
                  Comprehensive Services
                </span>
                <span className="text-gray-500 text-sm mt-1">
                  From study permits to citizenship applications, we offer
                  end-to-end solutions tailored to your unique circumstances and
                  goals.
                </span>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div ref={addToRefs} className="shadow-xl bg-white rounded-lg p-4">
            <div className="flex items-center gap-6">
              <div className="bg-[#155da9] h-16 w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center shrink-0">
                <HiUserGroup className="text-white text-2xl" />
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-semibold text-lg text-[#c30e16]">
                  Client-Centered Approach
                </span>
                <span className="text-gray-500 text-sm mt-1">
                  We prioritize clear communication and transparency, ensuring
                  you're informed and confident at every stage of your
                  application process.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vision Section */}
      <div
        data-scroll-section
        className="w-full bg-[#f1f1f1] py-12 md:py-16 lg:py-20"
      >
        <div
          data-scroll
          data-scroll-speed="0.1"
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="w-full max-w-3xl mx-auto flex flex-col items-center text-center gap-6 p-6 md:p-8 lg:p-10">
            <h2 className="text-3xl font-normal sm:text-4xl lg:text-5xl text-gray-500">
              Our <span className="text-[#155da9]">Vision</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 leading-relaxed">
              We envision a world where immigration processes are accessible and
              understandable to all. By combining our personal immigration
              experiences with professional expertise, we aim to transform the
              complex journey of relocation into a smooth transition. Our vision
              extends beyond paperwork - we're building a community where
              newcomers feel supported from their first inquiry through
              successful settlement in Canada.
            </p>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div
        data-scroll-section
        className="w-full bg-[#f1f1f1] py-12 md:py-16 lg:py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10">
          <div
            ref={imgRef}
            className="w-full lg:w-1/2 h-64 sm:h-80 md:h-96 lg:h-[500px] rounded-lg overflow-hidden relative mx-auto mb-10"
          >
            <img
              src="/t1.avif"
              alt="Our Mission"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div
            data-scroll
            data-scroll-speed="0.1"
            className="w-full lg:w-1/2 flex flex-col gap-6 p-4 sm:p-6"
          >
            <h2 className="text-3xl font-normal sm:text-4xl lg:text-5xl text-gray-500">
              Our <span className="text-[#155da9]">Mission</span>
            </h2>
            <div className="text-sm sm:text-base lg:text-lg text-gray-600">
              We are dedicated to simplifying Canadian immigration through
              ethical, professional services that prioritize client success. Our
              mission is to:
              <ul className="list-disc pl-5 mt-4 space-y-2">
                <li>Deliver accurate, up-to-date immigration advice</li>
                <li>
                  Provide personalized strategies for each client's unique
                  situation
                </li>
                <li>
                  Maintain the highest standards of professionalism and
                  integrity
                </li>
                <li>
                  Support newcomers beyond approval with settlement resources
                </li>
                <li>Advocate for fair and accessible immigration policies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="w-full bg-white py-12 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2
            ref={headingRef}
            className="text-3xl font-normal sm:text-4xl text-gray-500 mb-12 md:mb-16"
          >
            Hear It From <span className="text-[#155da9]">Our</span>{" "}
            <span className="text-[#c30e16]">Clients</span>
          </h2>
          <div className="w-full h-[400px] sm:h-[450px] md:h-[500px]">
            <SwiperNavigation />
          </div>
        </div>
      </div>

      {/* Google Reviews Section */}
      {/* <div className="w-full bg-white ">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="reviews-section w-full flex justify-center">
            <Script 
              src="https://static.elfsight.com/platform/platform.js" 
              strategy="afterInteractive" 
            />
            <div 
              className="elfsight-app-45c6ce40-4897-465b-a0a6-c09387be1007 w-full" 
              data-elfsight-app-lazy
            />
          </div>
        </div>
      </div> */}

      <Footer />
    </div>
  );
}

// <!-- Elfsight Google Reviews | Untitled Google Reviews -->
{
  /* <script src="https://static.elfsight.com/platform/platform.js" async></script>
<div class="elfsight-app-45c6ce40-4897-465b-a0a6-c09387be1007" data-elfsight-app-lazy></div> */
}
