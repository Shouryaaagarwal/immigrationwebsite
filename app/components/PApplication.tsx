"use client";  

import React, { useState } from "react";

export default function App() {
  const [currentStep, setCurrentStep] = useState(1); // Start at step 1

  // Step data
  const steps = [
    { id: 1, label: "Step 1", description: "Complete your initial form" },
    { id: 2, label: "Step 2", description: "Upload your documents" },
    { id: 3, label: "Step 3", description: "Review and submit" },
    { id: 4, label: "Step 4", description: "Complete your application" },
  ];

  // Function to handle step progress
  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1); // Move to the next step
    }
  };

  return (
    <div className=" w-full flex flex-col items-center justify-center">
      <h1 className="text-4xl mt-10 font-thin text-[#155da9]">
        Your <span className="text-[#c30e16]">Application</span>
      </h1>
      <span className="text-gray-500 text-center mt-8 text-lg w-[75vw]">
        Track the progress of your application at every step and stay informed
        about key milestones. Your journey to completion has never been more
        transparent and seamless.
      </span>

      <div className="flex flex-col items-center justify-center w-[60vw] rounded-full p-10 mt-8 bg-gray-100">
        <div className="w-full pt-8 max-w-3xl">
          <div className="flex items-center">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex flex-col items-center justify-center flex-1"
              >
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                    currentStep >= step.id ? "bg-[#155da9]" : "bg-gray-300"
                  }`}
                >
                  {step.id}
                </div>
                <div className="text-center mt-4">
                  <p
                    className={`text-sm font-medium ${
                      currentStep >= step.id ? "text-[#c30e16]" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`absolute top-5 left-1/2 transform -translate-y-1/2 translate-x-5 ${
                      currentStep > step.id ? "bg-[#c30e16]" : "bg-gray-300"
                    }`}
                    style={{
                      width: "calc(100% - 40px)",
                      height: "1px",
                    }}
                  ></div>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mt-4">
          <button
            onClick={nextStep} // Move to the next step when clicked
            className="border-[#155da9] border-2 mt-6 text-[#155da9] px-10 py-4 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full"
          >
            {currentStep < steps.length ? "Next Step" : "Submit Application"} {/* Change button text */}
          </button>
        </div>
      </div>
    </div>
  );
}
