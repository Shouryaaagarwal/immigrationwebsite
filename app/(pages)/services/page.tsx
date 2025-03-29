"use client";

import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";
import { Raleway } from "next/font/google";
import { SiVisa } from "react-icons/si";
import Footer from "@/app/components/Footer";
import { MdKeyboardArrowDown } from "react-icons/md";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

const faqData = [
  {
    question: "What services do you offer for immigration?",
    answer:
      "We provide a wide range of immigration services including visa applications, work permits, permanent residency applications, asylum cases, family reunifications, and citizenship services.",
  },
  {
    question: "How long does the immigration process take?",
    answer:
      "The immigration process timeline can vary depending on the type of application and the country you're applying to. On average, it can take anywhere from a few months to over a year.",
  },
  {
    question: "Do I need to hire an immigration lawyer?",
    answer:
      "While it's not mandatory to hire an immigration lawyer, having a professional assist you can make the process much smoother and increase the chances of approval. We highly recommend it, especially for complex cases.",
  },
  {
    question: "What documents are required for my immigration application?",
    answer:
      "The required documents vary depending on the type of application, but common documents include identification, proof of income, educational qualifications, work experience, and any documents specific to your visa type.",
  },
  {
    question: "Can you help me if my immigration application was denied?",
    answer:
      "Yes, we can assist you in appealing a denied immigration application. We can analyze your case, provide guidance on the next steps, and help you with re-application or appeals.",
  },
  {
    question: "How much do your services cost?",
    answer:
      "Our fees depend on the complexity of your case and the services you require. We offer a consultation to assess your needs and provide you with a clear, upfront cost estimate.",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div style={{ fontFamily: raleway.style.fontFamily }} className="bg-white w-full overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="h-[55vh] md:h-[70vh] bg-white flex flex-col gap-2 items-center justify-center w-full bg-cover bg-center z-10"
        style={{ 
          backgroundImage: "url('/service1.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
        <Navbar />
        <h1 className="font-medium tracking-widest text-4xl md:text-5xl lg:text-6xl z-20 text-white text-center px-4">
          Services
        </h1>
        <h5 className="text-[#F1F1F1] mt-4 font-thin text-sm md:text-lg z-20 tracking-widest text-center px-4">
          Connecting Dreams to Destinations Let's Build Your Path Together
        </h5>
      </div>

      {/* What We Do Section */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col py-8 md:py-12">
        <div className="text-center md:text-left">
          <span className="text-gray-500 text-3xl md:text-4xl">
            What <span className="text-[#155da9]">We</span> Can{" "}
            <span className="text-[#c30e16]">Do</span>?
          </span>
        </div>
        <div className="mt-4 text-center md:text-left">
          <p className="text-gray-600 text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            soluta ex cumque enim doloremque consequatur autem, perferendis quas
            officiis id.
          </p>
        </div>
      </div>

      {/* Services Cards */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <div 
              key={item}
              className="h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9]"
            >
              <div className="flex flex-col items-center justify-center h-full p-4 gap-4">
                <div className={`h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full flex items-center justify-center ${item % 2 === 0 ? 'bg-[#155da9]' : 'bg-black'}`}>
                  <SiVisa className="text-white text-4xl sm:text-5xl" />
                </div>
                <div className="text-center">
                  <span className="text-xl sm:text-2xl text-[#c30e16]">
                    <span className="text-[#155da9]">Express</span> Entry
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, voluptatibus.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Process Section */}
      <div className="w-full bg-[#f1f1f1] py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-500 text-center">
            How We <span className="text-[#155da9]">Follow</span> The{" "}
            <span className="text-[#c30e16]">Process</span>
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((step) => (
              <div 
                key={step}
                className={`h-[250px] sm:h-[300px] lg:h-[350px] w-full max-w-[350px] mx-auto flex items-center justify-center relative rounded-full border ${step === 2 ? 'border-[#c30e16] md:translate-y-10' : 'border-[#155da9]'}`}
              >
                <div className={`absolute right-0 top-0 flex items-center justify-center -translate-x-3 translate-y-3 h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] rounded-full ${step === 2 ? 'bg-[#155da9]' : 'bg-[#c30e16]'}`}>
                  <span className="text-lg sm:text-xl font-extrabold text-white">0{step}</span>
                </div>
                <div className="flex flex-col items-center justify-center gap-4 px-6 text-center">
                  <span className="text-gray-500 text-xl sm:text-2xl font-bold tracking-wider">
                    <span className="text-[#155da9]">Lorem</span>, <span className="text-[#c30e16]">ipsum</span>.
                  </span>
                  <span className="text-sm sm:text-base">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsa!
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact & FAQ Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col lg:flex-row gap-8">
        {/* Contact Card */}
        <div className="w-full lg:w-1/2 bg-[#f1f1f1] rounded-lg flex flex-col items-center h-auto lg:h-[600px]">
          <div className="h-[300px] sm:h-[400px] w-full">
            <img
              className="object-cover object-center w-full h-full rounded-t-lg"
              src="/y1.jpg"
              alt="Service consultation"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl sm:text-3xl text-gray-500 font-medium">
              For <span className="text-[#155da9]">More</span>{" "}
              <span className="text-[#c30e16]">Assistance</span>
            </h3>
            <p className="text-gray-500 mt-4 text-sm sm:text-base">
              Contact Our Experts For better Strategy to Complete your Dreams
            </p>
            <button className="mt-6 border-2 border-[#155da9] text-[#155da9] px-8 py-3 hover:bg-[#155da9] hover:text-white transition-all duration-300 rounded-full">
              Send Message
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl sm:text-3xl text-gray-500 text-center lg:text-left">
            Frequently <span className="text-[#155da9]">Asked</span>{" "}
            <span className="text-[#c30e16]">Questions</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-center lg:text-left">
            Here are some of the most common questions we get about immigration
            services. If you have more questions, feel free to contact us!
          </p>

          <div className="mt-6 space-y-4">
            {faqData.map((item, index) => (
              <div
                key={index}
                onClick={() => toggleAccordion(index)}
                className="border border-[#155da9] rounded-xl shadow-sm cursor-pointer overflow-hidden"
              >
                <div
                  className={`flex items-center justify-between p-4 ${activeIndex === index ? 'bg-[#155da9] text-white' : 'bg-white text-[#155da9]'}`}
                >
                  <h3 className="text-sm sm:text-base font-medium">
                    {item.question}
                  </h3>
                  <MdKeyboardArrowDown 
                    className={`text-xl transition-transform ${activeIndex === index ? 'rotate-180 text-white' : 'text-[#c30e16]'}`}
                  />
                </div>
                <div
                  className={`px-4 overflow-hidden transition-all duration-300 ${activeIndex === index ? 'max-h-[200px] py-4' : 'max-h-0'}`}
                >
                  <p className="text-sm sm:text-base text-gray-600">
                    {item.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}