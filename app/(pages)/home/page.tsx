"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/app/components/Navbar";
import { Raleway } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { GiCommercialAirplane } from "react-icons/gi";
import { RiVisaLine } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { GoArrowDown } from "react-icons/go";
import { IoDocumentsSharp } from "react-icons/io5";
import { FaFileSignature } from "react-icons/fa";
import { RiFlag2Fill } from "react-icons/ri";

import "@/app/styles/styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Swiper2 from "@/app/components/Swiper2";
import Swiper1 from "@/app/components/Swiper1";
import Footer from "@/app/components/Footer";
import { TimelineDemo } from "@/app/components/ETimeline";
import { LampDemo } from "@/components/ui/lamp";
import { SparklesPreview } from "@/app/components/Esparkles";
import { IoMdAirplane } from "react-icons/io";
import WhyChoose from "@/app/components/Whychoose";
import { StaticCardsDemo } from "@/app/components/EScroll";
import { HorizontalTimelineDemo } from "@/app/components/EScroll2";



interface CounterProps {
  targetValue: number;
}
const images = [
  "/contact6.jpg",
  "/image6.avif",
  "/contact9.jpg",
  "/contact13.jpg",
  "/home19.avif", 
  "/home21.jpeg"
];
const Counter: React.FC<CounterProps> = ({ targetValue }) => {
  const [count, setCount] = useState<number>(0); // Type state as number
  const counterRef = useRef<HTMLDivElement | null>(null); // Type ref as HTMLDivElement

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Increment the counter once the section is in view
          let start = 0;
          const end = targetValue;
          const duration = 2000; // duration for the count animation
          const stepTime = Math.abs(Math.floor(duration / end));

          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [targetValue]);
  const [currentImage, setCurrentImage] = useState(0);

  
  return (
    <div ref={counterRef} className="flex flex-col items-center justify-center">
      <h1 className="text-4xl text-gray-500 font-semibold">{count}</h1>
    </div>
  );
};

export default function Home() {
  return (
    <div
      // style={{ fontFamily: raleway.style.fontFamily }}
      className="w-full bg-white h-screen"
    >
      {/* Navbar Section */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* <div className="relative bg-white h-[70vh] w-full overflow-hidden">
        <img
          src="/contact6.jpg"
          className="object-cover h-full w-full"
          alt=""
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20">
          <h1 className="lg:mt-10 font-medium text-center tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
            Imagine. Believe. Succeed
          </h1>
          <h5 className="text-white mt-3 p-3 font-light text-md text-center md:text-lg tracking-widest">
            Connecting Dreams to Destinations Let’s Build Your Path Together
          </h5>
        </div>
      </div> */}
<div className="relative bg-white h-[70vh] w-full overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        {images.map((img, index) => (
          <img
            key={index}
            src={img}
            className="absolute inset-0 w-full h-full object-cover opacity-0 animate-fade"
            style={{ animationDelay: `${index * 3}s` }}
            alt={`Background ${index + 1}`}
          />
        ))}
      </div>

      <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20 bg-black opacity-60">
        <h1 className="lg:mt-10 font-medium text-center tracking-widest text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
          Imagine. Believe. Succeed
        </h1>
        <h5 className="text-white mt-3 p-3 font-light text-md text-center md:text-lg tracking-widest">
          Connecting Dreams to Destinations – Let’s Build Your Path Together
        </h5>
      </div>

      <style jsx>{`
        @keyframes fade {
          0% { opacity: 0; }
          20% { opacity: 1; }
          40% { opacity: 1; }
          60% { opacity: 0; }
          100% { opacity: 0; }
        }

        .animate-fade {
          animation: fade 15s infinite;
        }
      `}</style>
    </div> 

<StaticCardsDemo/>
      

      {/* Content Section */}
      <div className="flex   h-[50vh]   lg:mt-[-40px] bg-white items-center justify-center">
        <div className="mt-10 p-2 flex items-center justify-center flex-col gap-6">
          <h1 className="text-xl text-center text-gray-500">
            Immigration Consultants Services
          </h1>
          <h1 className="md:text-4xl text-2xl text-center text-gray-500">
            Where Clients <span className="text-[#155da9]">Become</span> Our{" "}
            <span className="text-[#c30e16]">Family</span>
          </h1>
          <h1 className="text-gray-500 text-center  md:text-xl mb-10">
            We are an immigration company that believes in touching the sky with
            eminence and hard work.
          </h1>
        </div>
      </div> 


     

<div className="w-full bg-[#f1f1f1] py-10 xl:h-screen flex items-center justify-center">
  <div className="flex flex-col lg:flex-row items-center justify-center w-full h-full px-6 sm:px-10 lg:px-16">
    <div className="w-full md:w-[70%] lg:w-[50%] xl:w-[40%] flex justify-center">
      <img
        className="mt-6 lg:mt-0 max-w-full h-auto object-cover rounded-lg shadow-lg"
        src="home9.jpeg"
        alt="About Us"
      />
    </div>
    <div className="w-full lg:w-[50%] xl:w-[50%] flex flex-col gap-6 mt-10 lg:mt-0 text-center lg:text-left">
      <h1 className="text-3xl lg:ml-10 sm:text-4xl text-gray-500 ">
        About <span className="text-[#155da9]">Us</span>
      </h1>
      <span className="text-sm sm:text-lg lg:ml-10 text-gray-700 leading-relaxed max-w-4xl">
        We are committed to walking hand in hand with our clients, addressing
        their unique needs to ensure their Canadian journey begins with
        confidence and positivity. It is our privilege to provide specialized
        support, guiding them every step of the way. Together, we turn
        aspirations into achievements and lay the foundation for lasting
        success. Our goal is to not only make the immigration process seamless
        but also to foster a relationship built on trust and mutual respect.
        Your success is our greatest reward, and we are honored to be part of
        your journey.
      </span>

      <div className="flex justify-center lg:justify-start">
        <button className="border-[#155da9] lg:ml-10 border-2 text-[#155da9] px-8 py-3 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-300 hover:-translate-y-2 rounded-full">
          More...
        </button>
      </div>
    </div>
  </div>
</div>


          <LampDemo/>
      <div className="h-screen w-full mt-[-270px] bg-white">
        
        <Swiper2 />
        <div className="flex items-center justify-center">
          <button className="border-[#155da9] border-2  mt-10 text-[#155da9] px-10 py-4  tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full">
            {" "}
            View All Services{" "}
          </button>
        </div>
      </div>

      <WhyChoose/>


      <SparklesPreview/>
      <div className="h-auto pt-10 w-full bg-white flex items-center justify-center ">
    <div className="h-[40vh] w-full max-w-6xl relative rounded-lg overflow-hidden">
      <img
        src="home13.jpeg"
        alt=""
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-3xl sm:text-4xl text-white">
          Start <span>Your <span className="text-[#155da9]">Journey</span></span>
        </h1>
        <span className="text-gray-400 text-base sm:text-lg max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ea.
        </span>
        <button className="border-white border px-6 sm:px-10 py-3 sm:py-4 mt-6 text-white tracking-wide hover:border-[#155da9] hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full">
          Contact Us
        </button>
      </div>
    </div>
  </div>


        <TimelineDemo />
      
      
      {/* Show on large screens only (lg and up) */}
      
</div>
  );
}
