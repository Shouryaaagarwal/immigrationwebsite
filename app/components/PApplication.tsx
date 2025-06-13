"use client";

import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/authSlice";
import axios from "axios";

interface Document {
  id: string;
  // ... other properties
}

interface Form {
  id: string;
  // ... other properties
}

export default function App() {
  const [currentStep, setCurrentStep] = useState(1); 
  const user = useSelector(selectUser);
  const userId = user?._id;

  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [forms, setForms] = useState<Form[]>([]);
  const [loadingForms, setLoadingForms] = useState<boolean>(true);

  console.log("User ID:", userId);
  console.log("Documents:", documents);
  console.log("Forms:", forms);

  useEffect(() => {
    const fetchDocuments = async () => {
      if (!userId) return;
      
      try {
        setLoading(true);
        const response = await axios.get(`/api/users/user_documents/${userId}`);
        // Check if response.data exists and is an array
        if (Array.isArray(response.data)) {
          setDocuments(response.data);
        } else {
          setDocuments([]);
        }
      } catch (err) {
        console.error('Error fetching documents:', err);
        // Silently handle error - don't show to user
        setDocuments([]);
      } finally {
        setLoading(false);
      }
    };

    fetchDocuments();
  }, [userId]);

  useEffect(() => {
    const fetchForms = async () => {
      if (!userId) return;
      
      try {
        setLoadingForms(true);
        const response = await axios.get(`/api/users/user_forms/${userId}`);
        // Check if response.data exists and is an array
        if (Array.isArray(response.data)) {
          setForms(response.data);
        } else {
          setForms([]);
        }
      } catch (err) {
        console.error('Error fetching forms:', err);
        // Silently handle error - don't show to user
        setForms([]);
      } finally {
        setLoadingForms(false);
      }
    };

    fetchForms();
  }, [userId]);

  // Automatically progress steps based on user status and data
  useEffect(() => {
    if (!user) {
      setCurrentStep(1);
    } else if (user && forms.length > 0 && documents.length === 0) {
      setCurrentStep(2);
    } else if (user && documents.length > 0) {
      setCurrentStep(3);
    } else if (user) {
      // User is logged in but no forms or documents yet
      setCurrentStep(1);
    }
  }, [user, forms, documents]);

  const steps = [
    { id: 1, label: "Step 1", description: "Sign Up" },
    { id: 2, label: "Step 2", description: "Submit form" },
    { id: 3, label: "Step 3", description: "Filling and Submission" },
    { id: 4, label: "Step 4", description: "Result" },
  ];

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1);
    }
  };

  // Show loading state while checking user data
  if ((loading || loadingForms) && user) {
    return (
      <div className="w-full flex flex-col items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#155da9]"></div>
        <p className="mt-4 text-gray-600">Checking your application status...</p>
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
                    currentStep >= step.id ? "bg-[#155da9]" : "bg-gray-300"
                  }`}
                >
                  {step.id}
                </div>

                {/* Step Text */}
                <div className="w-[25vw] lg:w-auto lg:text-center mt-4 lg:mt-0 lg:order-2 order-1">
                  <p
                    className={`text-sm font-medium ${
                      currentStep >= step.id ? "text-[#c30e16]" : "text-gray-400"
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
        <div className="mt-6 flex flex-col items-center">
          <button
            onClick={nextStep}
            className={`border-2 px-10 py-4 tracking-wide transition-transform duration-500 hover:-translate-y-3 rounded-full ${
              currentStep === 1 && !user
                ? "border-gray-400 text-gray-400 cursor-not-allowed"
                : "border-[#155da9] text-[#155da9] hover:bg-[#155da9] hover:text-white"
            }`}
            disabled={currentStep === 1 && !user}
          >
            {currentStep < steps.length ? "Next Step" : "Success"}
          </button>
          {currentStep === 1 && !user && (
            <p className="text-red-500 text-sm mt-2">Please sign up to continue</p>
          )}
        </div>
      </div>
    </div>
  );
}