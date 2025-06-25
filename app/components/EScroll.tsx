"use client";
import React from "react";
import { IoMdAirplane } from "react-icons/io";
import { RiVisaLine } from "react-icons/ri";
import { FaBriefcase, FaUniversity } from "react-icons/fa";

export function StaticCardsDemo() {
  const items = [
    {
      icon: <IoMdAirplane className="text-4xl text-white" />,
      title: "Easy Application",
      description: "Seamless immigration made simple.",
    },
    {
      icon: <RiVisaLine className="text-4xl text-white" />,
      title: "Visa Assistance",
      description: "Expert guidance for your visa success.",
    },
    {
  icon: <FaBriefcase className="text-4xl text-white" />,
  title: "Work Permits ",
  description: "Helping you secure the right permits for your global career.",
},

    {
      icon: <IoMdAirplane className="text-4xl text-white" />,
      title: "Immigration Support",
      description: "Comprehensive support for your journey abroad.",
    },
  ];

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div data-scroll-section data-scroll data-scroll-speed="0.2" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl px-6 py-8"
              style={{
                background: "white",
                boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
                border: `1px solid ${idx % 2 === 0 ? "#155da9" : "#c30e16"}`,
              }}
            >
              <div className="flex flex-col items-center justify-center">
                <div 
                  className="h-[60px] w-[60px] rounded-full flex items-center justify-center mb-6"
                  style={{ 
                    backgroundColor: idx % 2 === 0 ? "#155da9" : "#c30e16" 
                  }}
                >
                  {item.icon}
                </div>
                <h2 className="text-xl text-center text-gray-700 font-medium mb-3">
                  {item.title}
                </h2>
                <p className="text-sm text-gray-500 text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}