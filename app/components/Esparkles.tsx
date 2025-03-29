"use client";
import React, { useEffect, useState, useRef } from "react";
import { SparklesCore } from "@/components/ui/sparkles";

const Counter = ({ targetValue }: { targetValue: number }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const duration = 2000;
    const increment = targetValue / (duration / 30);

    const timer = setInterval(() => {
      start += increment;
      if (start >= targetValue) {
        start = targetValue;
        clearInterval(timer);
      }
      setCount(Math.floor(start));
    }, 30);

    return () => clearInterval(timer);
  }, [isVisible, targetValue]);

  return (
    <div ref={ref} className="text-center">
      <h2 className="text-3xl font-normal text-[#155da9]">{count}+</h2>
    </div>
  );
};

export function SparklesPreview() {
  return (
    <div className="h-auto  w-full bg-white flex flex-col items-center justify-center overflow-hidden rounded-md relative px-4 py-10">
      <h1 className="md:text-5xl text-4xl lg:text-6xl text-center text-[#155da9] relative z-20">
        <span className="text-gray-500">Our</span> Achievements
      </h1>

      {/* Gradients */}
      <div className="w-full max-w-4xl h-40 relative mt-6">
        <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-[#c30e16] to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-10 top-0 bg-gradient-to-r from-transparent via-[#c30e16] to-transparent h-px w-3/4" />
        <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-[#c30e16] to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-40 top-0 bg-gradient-to-r from-transparent via-[#c30e16] to-transparent h-px w-1/4" />

        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1200}
          className="w-full h-full"
          particleColor="#c30e16"
        />

        <div className="absolute inset-0 w-full h-full bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>

      {/* Counter Section */}
      <div className="mt-10 flex flex-wrap gap-10 justify-center w-full max-w-5xl">
        <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4">
          <h2 className="text-lg font-normal  text-gray-400 mb-2 text-center">
            Clients Served
          </h2>
          <Counter targetValue={1200} />
        </div>

        <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4">
          <h2 className="text-lg font-normal text-gray-400 mb-2 text-center">
            Visa Applications Processed
          </h2>
          <Counter targetValue={1000} />
        </div>

        <div className="flex flex-col items-center w-1/2 sm:w-1/3 md:w-1/4">
          <h2 className="text-lg font-normal  text-gray-400 mb-2 text-center">
            Years of Experience
          </h2>
          <Counter targetValue={20} />
        </div>
      </div>
    </div>
  );
}
