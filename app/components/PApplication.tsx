"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/authSlice";
import axios from "axios";

interface TrackerData {
  signUp: boolean;
  submitForm: boolean;
  fillingAndSubmission: boolean;
  result: boolean;
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(1);
  const [tracker, setTracker] = useState<TrackerData | null>(null);
  const [loading, setLoading] = useState(true);
  const user = useSelector(selectUser);
  const userId = user?._id;

  useEffect(() => {
    const fetchTrackerData = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`/api/tracker/${userId}`);
        setTracker(response.data.tracker);
      } catch (error) {
        console.error("Error fetching tracker data:", error);
      } finally {
        setLoading(false);
      }
    };

    if (userId) {
      fetchTrackerData();
    }
  }, [userId]);

  // Determine current step based on tracker data
  useEffect(() => {
    if (!tracker) return;
         console.log("Tracker data:", tracker);
console.log(
  tracker?.signUp,
  tracker?.submitForm, 
  tracker?.fillingAndSubmission,
  tracker?.result
);
    if (tracker.result) {
      setCurrentStep(4);
    } else if (tracker.fillingAndSubmission) {
      setCurrentStep(3);
    } else if (tracker.submitForm) {
      setCurrentStep(2);
    } else if (tracker.signUp) {
      setCurrentStep(1);
    }
  }, [tracker]);

  const steps = [
    { id: 1, label: "Step 1", description: "Sign Up", completed: tracker?.signUp },
    { id: 2, label: "Step 2", description: "Submit form", completed: tracker?.submitForm },
    { id: 3, label: "Step 3", description: "Filling and Submission", completed: tracker?.fillingAndSubmission },
    { id: 4, label: "Step 4", description: "Result", completed: tracker?.result },
  ];

  if (loading) {
    return (
      <div className="w-full flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden">
      <h1 className="lg:text-4xl md:text-3xl text-2xl md:mt-10 font-normal text-center text-[#155da9]">
        Your <span className="text-[#c30e16]">Application</span>
      </h1>
      <span className="text-gray-500 text-center mt-4 md:mt-8 text-sm md:text-lg lg:text-lg w-[100%] md:w-[75%]">
        Track the progress of your application at every step and stay informed
        about key milestones. Your journey to completion has never been more
        transparent and seamless.
      </span>

      <div className="flex flex-col items-center justify-center w-full max-w-4xl rounded-3xl lg:rounded-full p-6 sm:p-10 mt-8 bg-gray-100">
        <div className="w-full pt-6 sm:pt-8 max-w-3xl">
          <div className="flex flex-col lg:flex-row items-center">
            {steps.map((step, index) => (
              <div
                key={step.id}
                className="relative flex lg:flex-col items-center justify-center flex-1"
              >
                {/* Step Number */}
                <div
                  className={`w-10 h-10 order-2 lg:order-1 rounded-full flex items-center justify-center text-white font-semibold ${
                    step.completed ? "bg-[#155da9]" : "bg-gray-300"
                  }`}
                >
                  {step.id}
                </div>

                {/* Step Text */}
                <div className="w-[25vw] lg:w-auto lg:text-center mt-4 lg:mt-0 lg:order-2 order-1">
                  <p
                    className={`text-sm font-medium ${
                      step.completed ? "text-[#c30e16]" : "text-gray-400"
                    }`}
                  >
                    {step.label}
                  </p>
                  <p className="text-xs text-gray-500">{step.description}</p>
                </div>

                {/* Line Between Steps */}
                {index < steps.length - 1 && (
                  <div
                    className={`absolute lg:block hidden top-5 left-1/2 transform -translate-y-1/2 translate-x-5 ${
                      steps[index + 1].completed ? "bg-[#c30e16]" : "bg-gray-300"
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
        <div className="mt-6 flex flex-col items-center">
        
          {!user && (
            <p className="text-red-500 text-sm mt-2">Please sign up to continue</p>
          )}
        </div>
      </div>
    </div>
  );
}