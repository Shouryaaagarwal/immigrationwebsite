"use client";

import React, { useState } from "react";
import { FaUser, FaPhone, FaBars } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GiVideoConference } from "react-icons/gi";
import { Raleway } from "next/font/google"; // Importing font
import PApplication from "@/app/components/PApplication";
import PCall from "@/app/components/PCall";
import PMeeting from "@/app/components/PMeeting";
import Navbar2 from "@/app/components/Navbar2";
import PUsername from "@/app/components/PUsername";
import Navbar from "@/app/components/Navbar";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function ResponsiveSidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // For mobile sliding sidebar
  const [isExpanded, setIsExpanded] = useState(false); // For desktop hover-expand
  const [selectedSection, setSelectedSection] = useState("Username"); // Track selected section

  const items = [
    { title: "Username", icon: <FaUser className="w-5 h-5" /> },
    { title: "Application", icon: <IoDocumentTextOutline className="w-5 h-5" /> },
    { title: "Call", icon: <FaPhone className="w-5 h-5" /> },
    { title: "Meeting", icon: <GiVideoConference className="w-7 h-7" /> },
  ];

  // Function to render content based on selected section
  const renderContent = () => {
    switch (selectedSection) {
      case "Username":
        return <div><PUsername/></div>;
      case "Application":
        return <div><PApplication /></div>;
      case "Call":
        return <div><PCall /></div>;
      case "Meeting":
        return <div><PMeeting /></div>;
      default:
        return <div>Select a section</div>;
    }
  };

  return (
    <div
      style={{ fontFamily: raleway.style.fontFamily }}
      className="h-screen text-gray-400 flex flex-col"
    >
      {/* Main Layout */}   
         <Navbar2 /> 

      <div className="flex flex-1">
        {/* Sidebar */}
        <div
          className={`fixed lg:relative top-0 left-0 h-full bg-[#f1f1f1] text-gray-400 z-40 transition-all duration-300 transform ${
            isSidebarOpen
              ? "translate-x-0 w-64" // Mobile: Sidebar open
              : "-translate-x-full" // Mobile: Sidebar closed
          } lg:translate-x-0 lg:flex lg:flex-col ${
            isExpanded ? "lg:w-64" : "lg:w-20" // Desktop: Hover-expand effect
          }`}
          onMouseEnter={() => setIsExpanded(true)} // Expand on hover (desktop)
          onMouseLeave={() => setIsExpanded(false)} // Collapse on hover out (desktop)
        >
          {/* Close Button for Mobile */}
          <button
            className="absolute top-4 right-4 text-gray-400 text-lg lg:hidden"
            onClick={() => setIsSidebarOpen(false)}
          >
            ✕
          </button>

          <ul className="mt-16 space-y-3">
            {items.map((item, index) => (
              <li
                key={index}
                className={`flex items-center px-4 py-3 cursor-pointer transition-all duration-300 ${
                  selectedSection === item.title
                    ? "bg-gray-200 text-[#295F98]" // Active state
                    : "hover:bg-gray-200 text-[#3C3D37]" // Normal state
                }`}
                onClick={() => setSelectedSection(item.title)} // Update selected section
              >
                <div
                  className={`ml-2 transition-transform duration-300 ${
                    selectedSection === item.title
                      ? "text-[#295F98]"
                      : "text-[#3C3D37] hover:scale-110"
                  }`}
                >
                  {item.icon}
                </div>
                {/* Show title only if expanded */}
                <span
                  className={`ml-4 transition-opacity duration-300 ${
                    isExpanded || isSidebarOpen
                      ? "opacity-100"
                      : "opacity-0"
                  }`}
                >
                  {item.title}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* Header for Mobile */}
          <header className="p-4 bg-gray-100 shadow-md flex justify-between items-center lg:hidden">
            {/* Toggle Button for Mobile */}
            <button
              className="text-gray-700"
              onClick={() => setIsSidebarOpen(true)}
            >
              <FaBars size={24} />
            </button>
          </header>

          {/* Main Content Area */}
          <main className="flex-1 h-screen  bg-white">
            <div className="h-full text-gray-600">
              {renderContent()} {/* Dynamically render content based on selected section */}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
