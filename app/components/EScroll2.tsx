"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { Raleway } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Footer from "./Footer";

// Define the TimelineEntry type
type TimelineEntry = {
  title: string;
  description?: string;
  content?: React.ReactNode;
};

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export const HorizontalTimeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const containerTop = containerRef.current.offsetTop;
      const containerHeight = containerRef.current.offsetHeight;
      const scrollPosition = window.scrollY - containerTop;

      // Calculate which section is currently in view
      const newActiveIndex = sectionRefs.current.findIndex((ref, index) => {
        if (!ref) return false;
        const sectionTop = ref.offsetTop;
        const sectionBottom = sectionTop + ref.offsetHeight;
        return scrollPosition >= sectionTop && scrollPosition < sectionBottom;
      });

      if (newActiveIndex !== -1 && newActiveIndex !== activeIndex) {
        setActiveIndex(newActiveIndex);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [activeIndex]);

  const scrollToSection = (index: number) => {
    if (sectionRefs.current[index]) {
      sectionRefs.current[index]?.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <div 
      className="w-full bg-white" 
      ref={containerRef}
      style={{ fontFamily: raleway.style.fontFamily }}
    >
      {/* Fixed Horizontal Tracker */}
      <div className="sticky top-0 z-50 bg-white py-4 shadow-sm">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between relative">
            {/* Progress Line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2 z-0">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#c30e16] to-[#155da9]"
                style={{
                  width: useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
                }}
              />
            </div>
            
            {/* Steps */}
            {data.map((item, index) => (
              <button
                key={index}
                onClick={() => scrollToSection(index)}
                className={`relative z-10 flex flex-col items-center transition-all ${activeIndex >= index ? "text-[#155da9]" : "text-gray-400"}`}
              >
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${activeIndex >= index ? "bg-[#155da9] text-white" : "bg-gray-200"}`}>
                  {index + 1}
                </div>
                <span className="text-sm font-medium">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto px-4 py-20 space-y-40">
      {data.map((item, index) => (
  <div 
    key={index} 
    ref={(el: HTMLDivElement | null) => {
      sectionRefs.current[index] = el;
    }}
    className="min-h-screen flex flex-col md:flex-row items-center gap-10"
  >
    <div className="md:w-1/2">
      <h2 className="text-3xl md:text-5xl font-bold mb-6">
        <span className="text-[#155da9]">{index + 1}. </span>
        {item.title}
      </h2>
      <p className="text-gray-600 mb-8 text-lg">
        {item.description || "Professional managed pathway"}
      </p>
    </div>
    
    <div className="md:w-1/2">
      {item.content || (
        <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
          <Image
            src={`/timeline-${index + 1}.jpg`}
            alt={item.title}
            fill
            className="object-cover"
          />
        </div>
      )}
    </div>
  </div>
))}
      </div>
    </div>
  );
};

// Demo Component
export function HorizontalTimelineDemo() {
  const data: TimelineEntry[] = [
    {
      title: "Sign Up",
      description: "Create your personalized account to get started",
      content: (
        <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/signuppp.jpg"
            alt="Sign Up"
            fill
            className="object-cover"
          />
        </div>
      )
    },
    {
      title: "Send Documents",
      description: "Upload your documents for verification",
      content: (
        <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/doc.jpeg"
            alt="Send Documents"
            fill
            className="object-cover"
          />
        </div>
      )
    },
    {
      title: "Filling & Submission",
      description: "We professionally handle your application",
      content: (
        <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/docsubmit.jpg"
            alt="Submission"
            fill
            className="object-cover"
          />
        </div>
      )
    },
    {
      title: "Get Results",
      description: "Receive your application outcome",
      content: (
        <div className="relative h-64 md:h-96 w-full rounded-xl overflow-hidden shadow-xl">
          <Image
            src="/result.jpg"
            alt="Result"
            fill
            className="object-cover"
          />
        </div>
      )
    }
  ];

  return (
    <div className="w-full">
      <HorizontalTimeline data={data} /> 
      <Footer/>
    </div>
  );
}