"use client";

import Navbar from "@/app/components/Navbar";
import React, { useState } from "react";
import { Raleway, Rambla } from "next/font/google";
import { SiVisa } from "react-icons/si";
import Footer from "@/app/components/Footer";
import { FaAward, FaGlobe, FaThumbsUp, FaUserShield } from "react-icons/fa6";
import { FaHandsHelping } from "react-icons/fa";
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
    <div style={{ fontFamily: raleway.style.fontFamily }} className="bg-white h-screen w-full">
      <div
        className="h-[55vh] md:h-[70vh] bg-white flex flex-col gap-2 items-center justify-center w-full bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/service1.avif')" }} // Background image path
      >
        <Navbar />
        <h1 className="font-medium tracking-widest text-5xl md:text-6xl lg:text-6xl z-20 text-white">
          Services{" "}
        </h1>
        <h5 className="text-[#F1F1F1] mt-4 font-thin text-sm text-center md:text-lg z-20 tracking-widest">
          Connecting Dreams to Destinations Let’s Build Your Path Together
        </h5>
      </div>
      <div className=" flex flex-col ">
        <div className="md:pl-10 p-5  mt-5 text-center sm:text-start md:mt-10">
          <span className="text-gray-500 text-3xl md:text-4xl">
            What <span className="text-[#155da9]">We</span> Can{" "}
            <span className="text-[#c30e16]">Do</span>?
          </span>
        </div>
        <div className="md:pl-10 pl-5 pr-6 text-center sm:text-start md:text-start  w-[100vw] md:w-[80vw] ">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            soluta ex cumque enim doloremque consequatur autem, perferendis quas
            officiis id.
          </p>
        </div>
      </div>
      <div className="bg-white pb-20">
  <div className="flex gap-5 mt-10 sm:mt-[150px] items-center justify-center flex-wrap px-4">
  <div className="h-[250px]  sm:h-[300px] w-[500px] sm:w-[400px] shadow-xl rounded-lg border-[2px] hover:-translate-y-2 transition-transform duration-500 border-[#155da9]">
  <div className="flex flex-col items-center justify-center mt-5 gap-3">
        {/* Image Container */}
        <div className="flex flex-col items-center justify-center">
          <div className="h-[70px] sm:h-[100px] w-[70px] sm:w-[100px] bg-[#000] rounded-full flex items-center justify-center">
            <span className="text-white text-4xl sm:text-6xl">
              <SiVisa />
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mt-5 text-center">
          <span className="text-2xl sm:text-3xl text-[#c30e16]">
            <span className="text-[#155da9]">Express</span> Entry
          </span>
        </div>

        {/* Description */}
        <div className="w-[90%] sm:w-[80%] text-sm sm:text-base text-center mt-2">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            voluptatibus.
          </span>
        </div>
      </div>
    </div>

    <div className="h-[250px]  sm:h-[300px] w-[500px] sm:w-[400px] shadow-xl rounded-lg border-[2px] hover:-translate-y-2 transition-transform duration-500 border-[#155da9]">
      <div className="flex flex-col items-center justify-center mt-5 gap-3">
        {/* Image Container */}
        <div className="flex flex-col items-center justify-center">
          <div className="h-[70px] sm:h-[100px] w-[70px] sm:w-[100px] bg-[#155da9] rounded-full flex items-center justify-center">
            <span className="text-white text-4xl sm:text-6xl">
              <SiVisa />
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mt-5 text-center">
          <span className="text-2xl sm:text-3xl text-[#c30e16]">
            <span className="text-[#155da9]">Express</span> Entry
          </span>
        </div>

        {/* Description */}
        <div className="w-[90%] sm:w-[80%] text-sm sm:text-base text-center mt-2">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            voluptatibus.
          </span>
        </div>
      </div>
    </div>

    <div className="h-[250px]  sm:h-[300px] w-[500px] sm:w-[400px] shadow-xl rounded-lg border-[2px] hover:-translate-y-2 transition-transform duration-500 border-[#155da9]">
      <div className="flex flex-col items-center justify-center mt-5 gap-3">
        {/* Image Container */}
        <div className="flex flex-col items-center justify-center">
          <div className="h-[70px] sm:h-[100px] w-[70px] sm:w-[100px] bg-[#000] rounded-full flex items-center justify-center">
            <span className="text-white text-4xl sm:text-6xl">
              <SiVisa />
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mt-5 text-center">
          <span className="text-2xl sm:text-3xl text-[#c30e16]">
            <span className="text-[#155da9]">Express</span> Entry
          </span>
        </div>

        {/* Description */}
        <div className="w-[90%] sm:w-[80%] text-sm sm:text-base text-center mt-2">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            voluptatibus.
          </span>
        </div>
      </div>
    </div>

    <div className="h-[250px]  sm:h-[300px] w-[500px] sm:w-[400px] shadow-xl rounded-lg border-[2px] hover:-translate-y-2 transition-transform duration-500 border-[#155da9]">
      <div className="flex flex-col items-center justify-center mt-5 gap-3">
        {/* Image Container */}
        <div className="flex flex-col items-center justify-center">
          <div className="h-[70px] sm:h-[100px] w-[70px] sm:w-[100px] bg-[#155da9] rounded-full flex items-center justify-center">
            <span className="text-white text-4xl sm:text-6xl">
              <SiVisa />
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mt-5 text-center">
          <span className="text-2xl sm:text-3xl text-[#c30e16]">
            <span className="text-[#155da9]">Express</span> Entry
          </span>
        </div>

        {/* Description */}
        <div className="w-[90%] sm:w-[80%] text-sm sm:text-base text-center mt-2">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            voluptatibus.
          </span>
        </div>
      </div>
    </div>
    <div className="h-[250px]  sm:h-[300px] w-[500px] sm:w-[400px] shadow-xl rounded-lg border-[2px] hover:-translate-y-2 transition-transform duration-500 border-[#155da9]">
      <div className="flex flex-col items-center justify-center mt-5 gap-3">
        {/* Image Container */}
        <div className="flex flex-col items-center justify-center">
          <div className="h-[70px] sm:h-[100px] w-[70px] sm:w-[100px] bg-[#155da9] rounded-full flex items-center justify-center">
            <span className="text-white text-4xl sm:text-6xl">
              <SiVisa />
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mt-5 text-center">
          <span className="text-2xl sm:text-3xl text-[#c30e16]">
            <span className="text-[#155da9]">Express</span> Entry
          </span>
        </div>

        {/* Description */}
        <div className="w-[90%] sm:w-[80%] text-sm sm:text-base text-center mt-2">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            voluptatibus.
          </span>
        </div>
      </div>
    </div>
    <div className="h-[250px]  sm:h-[300px] w-[500px] sm:w-[400px] shadow-xl rounded-lg border-[2px] hover:-translate-y-2 transition-transform duration-500 border-[#155da9]">
      <div className="flex flex-col items-center justify-center mt-5 gap-3">
        {/* Image Container */}
        <div className="flex flex-col items-center justify-center">
          <div className="h-[70px] sm:h-[100px] w-[70px] sm:w-[100px] bg-[#155da9] rounded-full flex items-center justify-center">
            <span className="text-white text-4xl sm:text-6xl">
              <SiVisa />
            </span>
          </div>
        </div>

        {/* Title */}
        <div className="mt-5 text-center">
          <span className="text-2xl sm:text-3xl text-[#c30e16]">
            <span className="text-[#155da9]">Express</span> Entry
          </span>
        </div>

        {/* Description */}
        <div className="w-[90%] sm:w-[80%] text-sm sm:text-base text-center mt-2">
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
            voluptatibus.
          </span>
        </div>
      </div>
    </div>
  </div>
</div>

<div className="bg-[#f1f1f1]  min-h-screen  pb-10">
  <div className="flex flex-col items-center pb-[200px] mt-20 justify-center">
    {/* Heading */}
    <span className="text-2xl sm:text-3xl lg:text-4xl mt-10 text-gray-500 text-center">
      How We <span className="text-[#155da9]">Follow</span> The{" "}
      <span className="text-[#c30e16]">Process</span>
    </span>

    {/* Steps Container */}
    <div className="mt-10 sm:mt-[120px] gap-10 sm:gap-[80px] lg:gap-[150px] flex flex-wrap items-center justify-center">
      {/* Step 1 */}
      <div className="h-[250px] sm:h-[300px] lg:h-[350px] w-[250px] sm:w-[300px] lg:w-[350px] flex items-center justify-center relative rounded-full border border-[#155da9]">
        <div className="absolute right-0 top-0 transform flex items-center justify-center -translate-x-3 sm:-translate-x-4 translate-y-3 bg-[#c30e16] h-[50px] sm:h-[60px] lg:h-[70px] w-[50px] sm:w-[60px] lg:w-[70px] rounded-full">
          <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white">01</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-4 text-center">
          <span className="text-gray-500 text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider">
            <span className="text-[#155da9]">Lorem</span>, <span className="text-[#c30e16]">ipsum</span>.
          </span>
          <span className="text-sm sm:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsa!
          </span>
        </div>
      </div>

      {/* Step 2 */}
      <div className="h-[250px] sm:h-[300px] lg:h-[350px] w-[250px] sm:w-[300px] lg:w-[350px] flex items-center justify-center relative rounded-full translate-y-0 lg:translate-y-20 border border-[#c30e16]">
        <div className="absolute right-0 top-0 transform flex items-center justify-center -translate-x-3 sm:-translate-x-4 translate-y-3 bg-[#155da9] h-[50px] sm:h-[60px] lg:h-[70px] w-[50px] sm:w-[60px] lg:w-[70px] rounded-full">
          <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white">02</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-4 text-center">
          <span className="text-gray-500 text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider">
            <span className="text-[#155da9]">Lorem</span>, <span className="text-[#c30e16]">ipsum</span>.
          </span>
          <span className="text-sm sm:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsa!
          </span>
        </div>
      </div>

      {/* Step 3 */}
      <div className="h-[250px] sm:h-[300px] lg:h-[350px] w-[250px] sm:w-[300px] lg:w-[350px] flex items-center justify-center relative rounded-full border border-[#155da9]">
        <div className="absolute right-0 top-0 transform -translate-x-3 sm:-translate-x-4 translate-y-3 bg-[#c30e16] flex items-center justify-center h-[50px] sm:h-[60px] lg:h-[70px] w-[50px] sm:w-[60px] lg:w-[70px] rounded-full">
          <span className="text-lg sm:text-xl lg:text-2xl font-extrabold text-white">03</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 px-4 text-center">
          <span className="text-gray-500 text-xl sm:text-2xl lg:text-3xl font-bold tracking-wider">
            <span className="text-[#155da9]">Lorem</span>, <span className="text-[#c30e16]">ipsum</span>.
          </span>
          <span className="text-sm sm:text-base lg:text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsa!
          </span>
        </div>
      </div>
    </div>
  </div>
</div>


        
    

<section className="bg-white back bg-no-repeat bg-cover bg-center flex flex-col lg:flex-row gap-10 py-10 lg:py-16 lg:pb-[200px] px-4 sm:px-6">
  {/* Left Section */}
  <div className="bg-[#f1f1f1] rounded-lg flex flex-col items-center mx-auto lg:ml-10 h-[550px] sm:h-[650px] md:h-[650px] lg:h-[830px] w-full sm:w-[400px] lg:w-[600px]">
    {/* Image Container */}
    <div className="bg-red-100 h-[300px] sm:h-[400px] lg:h-[550px] w-full">
      <img
        className="object-cover object-center w-full h-full"
        src="/service2.jpg"
        alt=""
      />
    </div>
    {/* Text Content */}
    <div className="text-black mt-4 text-center px-4">
      <span className="text-2xl sm:text-3xl lg:text-4xl text-gray-500 font-medium">
        For <span className="text-[#155da9]">More</span>{" "}
        <span className="text-[#c30e16]">Assistance</span>
      </span>
    </div>
    <span className="text-gray-500 text-sm sm:text-base lg:text-lg text-center mt-5 px-4">
      Contact Our Experts For better Strategy to Complete your Dreams
    </span>
    {/* Button */}
    <button className="border-[#155da9] border-2 mt-6 text-[#155da9] px-8 py-3 sm:px-10 sm:py-4 text-sm sm:text-base tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full">
      Send Message
    </button>
  </div>

  {/* Right Section */}
  <div className="w-full">
    {/* FAQ Heading */}
    <div className="max-w-7xl mx-auto mb-6 sm:mb-10 px-4 sm:px-6 text-center lg:text-left">
      <h2 className="text-2xl sm:text-3xl lg:text-4xl text-gray-500">
        Frequently <span className="text-[#155da9]">Asked</span>{" "}
        <span className="text-[#c30e16]">Questions</span>
      </h2>
      <p className="mt-2 sm:mt-4 text-sm sm:text-base lg:text-lg">
        Here are some of the most common questions we get about immigration
        services. If you have more questions, feel free to contact us!
      </p>
    </div>

    {/* FAQ Items */}
    <div className="max-w-5xl mx-auto space-y-3 px-4 sm:px-6">
      {faqData.map((item, index) => (
        <div
          key={index}
          onClick={() => toggleAccordion(index)}
          className="border border-[#155da9] rounded-xl shadow-lg cursor-pointer overflow-hidden transition-all duration-300 ease-in-out"
        >
          <div
            className={`flex items-center p-4 sm:p-6 rounded-t-lg ${
              activeIndex === index
                ? "bg-[#155da9] text-white"
                : "bg-white text-[#155da9]"
            }`}
          >
            <h3
              className={`text-sm sm:text-lg lg:text-xl flex-1 ${
                activeIndex === index ? "text-white" : "text-[#155da9]"
              }`}
            >
              {item.question}
            </h3>
            <span
              className={`text-2xl transition-transform duration-500 ${
                activeIndex === index ? "" : "text-[#c30e16]"
              } ${activeIndex === index ? "rotate-180" : ""}`}
            >
              <span className="text-3xl lg:text-4xl">
                <MdKeyboardArrowDown />
              </span>
            </span>
          </div>

          {/* Answer Section */}
          <div
            className={`p-4 sm:p-6 text-sm sm:text-base lg:text-lg text-gray-500 transition-all duration-1000 ease-in-out overflow-hidden rounded-b-lg ${
              activeIndex === index
                ? "max-h-[200px] opacity-100 visible"
                : "max-h-0 opacity-0 invisible"
            }`}
            style={{
              transitionDelay: `${activeIndex === index ? "100ms" : "0ms"}`,
            }}
          >
            <p>{item.answer}</p>
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
