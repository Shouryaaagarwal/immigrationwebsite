"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function Pr() {
  const [formData, setFormData] = useState({
    reading: "",
    writing: "",
    speaking: "",
    listening: "",
    gap: "",
    income: "",
    visa: "",
    ielts: "",
  });

  const [prediction, setPrediction] = useState<number | null>(null);
  const [bgState, setBgState] = useState<"initial" | "success" | "medium" | "fail">("initial");
  const needleRef = useRef<SVGLineElement>(null);
  const meterRef = useRef<SVGPathElement>(null);
  const formRef = useRef<HTMLFormElement>(null);

  // Fixed positions for blobs
  const blobPositions = [
    { top: "10%", left: "10%", size: 150 },
    { top: "30%", left: "80%", size: 180 },
    { top: "70%", left: "15%", size: 130 },
    { top: "20%", left: "50%", size: 160 },
    { top: "80%", left: "70%", size: 140 },
    { top: "40%", left: "20%", size: 170 },
  ];

  useEffect(() => {
    gsap.set(needleRef.current, {
      rotate: -90,
      transformOrigin: "bottom center",
    });
    
    gsap.set(meterRef.current, {
      strokeDashoffset: 314,
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateScore = () => {
    const total =
      (parseFloat(formData.reading) +
        parseFloat(formData.writing) +
        parseFloat(formData.speaking) +
        parseFloat(formData.listening)) *
        10 -
      parseFloat(formData.gap || "0") * 2;

    return Math.min(Math.max(total, 0), 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const score = calculateScore();
    setPrediction(score);

    const angle = gsap.utils.mapRange(0, 100, -90, 90, score);
    const dashOffset = 314 - (314 * score / 100);
    
    gsap.to(needleRef.current, {
      rotate: angle,
      transformOrigin: "bottom center",
      duration: 1.5,
      ease: "power2.out",
    });
    
    gsap.to(meterRef.current, {
      strokeDashoffset: dashOffset,
      duration: 1.5,
      ease: "power2.out",
    });

    if (score >= 75) {
      setBgState("success");
    } else if (score >= 40) {
      setBgState("medium");
    } else {
      setBgState("fail");
    }

    setTimeout(() => {
      document.getElementById("results")?.scrollIntoView({ behavior: "smooth" });
    }, 800);
  };

  const getButtonColors = () => {
    return {
      border: "border-[#155da9]",
      text: "text-[#155da9]",
      hoverBg: "hover:bg-[#155da9]",
      hoverText: "hover:text-white",
    };
  };

  const buttonColors = getButtonColors();

  return (
    <div className="relative min-h-screen w-full bg-white overflow-x-hidden" style={{ fontFamily: raleway.style.fontFamily }}>
      {/* Background blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {blobPositions.map((pos, i) => (
          <div
            key={`primary-${i}`}
            className="absolute rounded-full opacity-10 blur-xl animate-pulse-slow"
            style={{
              width: `${pos.size}px`,
              height: `${pos.size}px`,
              top: pos.top,
              left: pos.left,
              backgroundColor: "#155da9",
            }}
          />
        ))}
        {blobPositions.map((pos, i) => (
          <div
            key={`secondary-${i}`}
            className="absolute rounded-full opacity-10 blur-xl animate-pulse-medium"
            style={{
              width: `${pos.size}px`,
              height: `${pos.size}px`,
              top: `${parseInt(pos.top) + 10}%`,
              left: `${parseInt(pos.left) + 10}%`,
              backgroundColor: "#c30e16",
            }}
          />
        ))}
      </div>

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className={`absolute top-6 left-4 z-50 ${buttonColors.text} px-4 py-2 rounded-lg transition-all text-lg font-medium underline underline-offset-4 decoration-2 ${buttonColors.hoverText} ${buttonColors.hoverBg} hover:no-underline`}
      >
        ← Back
      </button>

      {/* Main Content */}
      <div className="relative mt-20 z-10 w-full px-4 py-10 flex flex-col items-center">
        {/* Header with light gradient */}
        <div className="w-full max-w-4xl mb-8 px-4">
          <div className="p-6 rounded-xl">
            <h1 className="text-4xl md:text-5xl font-normal text-center mb-2 text-gray-500">
              <span className="text-[#155da9]">Visa</span> Acceptance <span className="text-[#c30e16]">Prediction</span>
            </h1>
            <p className="text-center text-gray-600">Estimate your chances based on common visa approval factors</p>
          </div>
        </div>
        
        {/* How It Works Section */}
        <div className="w-full mt-10 max-w-6xl px-4 mb-12 md:mb-16">
          <div className="bg-white/90 mt-5 opacity-90 rounded-xl backdrop-blur-sm p-6 md:p-8 ">
            <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-center text-gray-700">
              How Our Prediction Works
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/90 p-6 rounded-lg shadow-md border-l-4 border-[#155da9]">
                <h3 className="text-xl font-semibold mb-3 text-[#155da9]">Language Scores</h3>
                <p className="text-gray-600">
                  Your IELTS scores in Reading, Writing, Speaking, and Listening directly impact your visa chances.
                </p>
              </div>
              
              <div className="bg-white/90 p-6 rounded-lg shadow-md border-l-4 border-[#c30e16]">
                <h3 className="text-xl font-semibold mb-3 text-[#c30e16]">Financial Factors</h3>
                <p className="text-gray-600">
                  Your declared family income helps assess financial stability.
                </p>
              </div>
              
              <div className="bg-white/90 p-6 rounded-lg shadow-md border-l-4 border-[#155da9]">
                <h3 className="text-xl font-semibold mb-3 text-[#155da9]">Education & Gaps</h3>
                <p className="text-gray-600">
                  Recent education or minimal gaps in your history positively influence your chances.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form and Results */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-6 md:gap-10 w-full max-w-7xl px-4">
          {/* Form Section */}
          <div className="w-full max-w-xl">
            <div className="bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border-2 border-gray-200">
                <div className="bg-gradient-to-r from-[#155da9] to-[#c30e16] p-6">
                <h2 className="text-2xl font-bold text-white">Your Visa Profile</h2>
              </div>
              <form ref={formRef} onSubmit={handleSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  {[
                    { label: "Reading Score (4-9)", name: "reading", type: "number" },
                    { label: "Writing Score (4-9)", name: "writing", type: "number" },
                    { label: "Speaking Score (4-9)", name: "speaking", type: "number" },
                    { label: "Listening Score (4-9)", name: "listening", type: "number" },
                    { label: "Gap Years", name: "gap", type: "number" },
                    { label: "Family Income (CAD)", name: "income", type: "number" },
                  ].map((field) => (
                    <div key={field.name}>
                      <label className="block mb-2 font-medium text-gray-700">{field.label}</label>
                      <input
                        type={field.type}
                        name={field.name}
                        value={formData[field.name as keyof typeof formData]}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#155da9] focus:border-[#155da9] transition-all"
                        required
                      />
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">Visa Type</label>
                    <select
                      name="visa"
                      value={formData.visa}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#155da9] focus:border-[#155da9] transition-all"
                      required
                    >
                      <option value="">Select visa type</option>
                      <option value="student">Student</option>
                      <option value="work">Work</option>
                    </select>
                  </div>
                  <div>
                    <label className="block mb-2 font-medium text-gray-700">IELTS Type</label>
                    <select
                      name="ielts"
                      value={formData.ielts}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#155da9] focus:border-[#155da9] transition-all"
                      required
                    >
                      <option value="">Select IELTS type</option>
                      <option value="general">General</option>
                      <option value="academic">Academic</option>
                    </select>
                  </div>
                </div>
              </form>
            </div>
          </div>

          {/* Results Section */}
          <div id="results" className="w-full max-w-md">
            <div className={`bg-white/90 backdrop-blur-sm rounded-xl shadow-lg overflow-hidden border-l-4 ${
              bgState === "success" ? "border-green-300" :
              bgState === "medium" ? "border-yellow-300" :
              bgState === "fail" ? "border-red-300" :
              "border-blue-300"
            } transition-all duration-500`}>
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-2xl font-bold text-gray-800">Your Prediction Results</h2>
                <p className="text-gray-600">Based on the information you provided</p>
              </div>
              
              <div className="p-6 flex flex-col items-center justify-center">
                {/* Speedometer */}
                <div className="relative w-64 h-40">
                  <svg width="100%" height="100%" viewBox="0 0 250 150">
                    <path
                      d="M25 125 A100 100 0 0 1 225 125"
                      fill="none"
                      stroke="#e5e7eb"
                      strokeWidth="20"
                    />
                    <path
                      ref={meterRef}
                      d="M25 125 A100 100 0 0 1 225 125"
                      fill="none"
                      stroke={
                        bgState === "success" ? "#10b981" :
                        bgState === "medium" ? "#f59e0b" :
                        bgState === "fail" ? "#ef4444" :
                        "#3b82f6"
                      }
                      strokeWidth="20"
                      strokeDasharray="314"
                      strokeDashoffset={314}
                      className="transition-all duration-1000 ease-out"
                    />
                    <line
                      ref={needleRef}
                      x1="125"
                      y1="125"
                      x2="125"
                      y2="40"
                      stroke="#111827"
                      strokeWidth="3"
                    />
                    <circle cx="125" cy="125" r="5" fill="#111827" />
                  </svg>
                </div>
                
                {/* Percentage display below speedometer */}
                <div className="mt-4 text-center">
                  <span className={`text-5xl font-bold ${
                    prediction === null ? "text-gray-400" :
                    bgState === "success" ? "text-green-600" :
                    bgState === "medium" ? "text-yellow-600" :
                    bgState === "fail" ? "text-red-600" :
                    "text-gray-700"
                  }`}>
                    {prediction === null ? "0%" : `${Math.round(prediction)}%`}
                  </span>
                </div>

                {prediction !== null && (
                  <div className="text-center mt-4">
                    <h3 className={`text-2xl font-bold mb-2 ${
                      bgState === "success" ? "text-green-600" :
                      bgState === "medium" ? "text-yellow-600" :
                      bgState === "fail" ? "text-red-600" :
                      "text-gray-700"
                    }`}>
                      {bgState === "success" ? "High Approval Chance" :
                       bgState === "medium" ? "Moderate Approval Chance" :
                       "Lower Approval Chance"}
                    </h3>
                  </div>
                )}

                {/* Prediction Button moved here */}
                <button
                  type="button"
                  onClick={handleSubmit}
                  className={`w-full mt-6 border-2 ${buttonColors.border} ${buttonColors.text} px-8 py-3 tracking-wide ${buttonColors.hoverBg} ${buttonColors.hoverText} transition-all duration-300 hover:-translate-y-2 rounded-full font-semibold`}
                >
                  {prediction === null ? "Predict Acceptance" : "Recalculate"}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-12 max-w-4xl px-4 text-center">
          <h2 className="text-2xl font-semibold mb-4 text-gray-700">Common Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-600">
            <div className="bg-white/90 p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-semibold text-[#155da9]">How accurate is this?</h3>
              <p>Based on common factors but doesn&apos;t guarantee actual results</p>
            </div>
            <div className="bg-white/90 p-4 rounded-lg shadow border border-gray-200">
              <h3 className="font-semibold text-[#155da9]">Most important factors?</h3>
              <p>Language scores and financial stability have highest impact</p>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Keyframes */}
      <style jsx global>{`
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.05); opacity: 0.05; }
        }

        @keyframes pulse-medium {
          0%, 100% { transform: scale(1); opacity: 0.1; }
          50% { transform: scale(1.03); opacity: 0.05; }
        }
      `}</style>
    </div>
  );
}