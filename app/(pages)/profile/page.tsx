"use client";

import React, { useState } from "react";
import { FaUser, FaPhone, FaBars, FaTimes } from "react-icons/fa";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GiVideoConference } from "react-icons/gi";
import { Raleway } from "next/font/google";
import PApplication from "@/app/components/PApplication";
import PCall from "@/app/components/PCall";
import PMeeting from "@/app/components/PMeeting";
import Navbar2 from "@/app/components/Navbar2";
import PUsername from "@/app/components/PUsername";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function FixedLayoutProfile() {
  const [activePanel, setActivePanel] = useState("Username");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  const panels = [
    { id: "Username", icon: <FaUser className="w-5 h-5" /> },
    { id: "Application", icon: <IoDocumentTextOutline className="w-5 h-5" /> },
    { id: "Call", icon: <FaPhone className="w-5 h-5" /> },
    { id: "Meeting", icon: <GiVideoConference className="w-7 h-7" /> },
  ];

  const renderContent = () => {
    switch (activePanel) {
      case "Username":
        return <PUsername />;
      case "Application":
        return <PApplication />;
      case "Call":
        return <PCall />;
      case "Meeting":
        return <PMeeting />;
      default:
        return <div className="p-8">Select a panel</div>;
    }
  };

  return (
    <div
      style={{ fontFamily: raleway.style.fontFamily }}
      className="min-h-screen flex flex-col bg-gray-50"
    >
      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navbar2 />
      </div>

      {/* Main Layout */}
      <div className="flex flex-1 pt-16">
        {/* Fixed Sidebar (Desktop Only) */}
        <div
          className="hidden lg:block fixed left-0 top-24 rounded-lg  bottom-0 bg-[#f1f1f1] z-40 transition-all duration-300"
          style={{ width: isExpanded ? "16rem" : "5rem" }}
          onMouseEnter={() => setIsExpanded(true)}
          onMouseLeave={() => setIsExpanded(false)}
        >
          <div className="flex flex-col h-full p-4">
            {panels.map((panel) => (
              <button
                key={panel.id}
                onClick={() => setActivePanel(panel.id)}
                className={`flex items-center px-4 py-3 rounded-lg mb-2 transition-all ${
                  activePanel === panel.id
                    ? "bg-gray-200 text-[#295F98]"
                    : "text-[#3C3D37] hover:bg-gray-200"
                }`}
              >
                <div
                  className={`transition-transform ${
                    activePanel === panel.id
                      ? "text-[#295F98]"
                      : "text-[#3C3D37]"
                  }`}
                >
                  {panel.icon}
                </div>
                <span
                  className={`ml-4 whitespace-nowrap transition-opacity ${
                    isExpanded ? "opacity-100" : "opacity-0"
                  }`}
                >
                  {panel.id}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden">
            <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-3xl shadow-xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-bold text-lg">Menu</h3>
                <button onClick={() => setMobileMenuOpen(false)}>
                  <FaTimes className="text-gray-500" />
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {panels.map((panel) => (
                  <button
                    key={panel.id}
                    onClick={() => {
                      setActivePanel(panel.id);
                      setMobileMenuOpen(false);
                    }}
                    className={`flex items-center p-4 rounded-xl ${
                      activePanel === panel.id
                        ? "bg-gray-200 text-[#295F98]"
                        : "bg-gray-100 text-[#3C3D37]"
                    }`}
                  >
                    <span className="mr-3">{panel.icon}</span>
                    {panel.id}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Main Content Area */}
        <main
          className={`flex-1 transition-all duration-300 ${
            mobileMenuOpen ? "overflow-hidden" : "overflow-y-auto"
          } lg:ml-20`}
          style={{
            marginLeft: isExpanded && typeof window !== "undefined" && window.innerWidth >= 1024 ? "16rem" : undefined,
          }}
        >
          {/* Mobile Header */}
          <header className="lg:hidden flex items-center justify-between p-4 mt-10 bg-white border-b">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 rounded-full bg-gray-100 text-gray-800"
            >
              <FaBars />
            </button>
            <h2 className="text-lg font-semibold">{activePanel}</h2>
            <div className="w-8"></div>
          </header>

          {/* Rendered Panel Content */}
          <div className="p-4 lg:p-8">{renderContent()}</div>
        </main>
      </div>
    </div>
  );
}




