"use client";

import Navbar from "@/app/components/Navbar";
import React, { useState, useLayoutEffect, useRef } from "react";
import { Raleway } from "next/font/google";
import { SiVisa } from "react-icons/si";
import Footer from "@/app/components/Footer";
import { MdKeyboardArrowDown } from "react-icons/md";
import { GiEntryDoor } from "react-icons/gi"; 
import { GrHome } from "react-icons/gr";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

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

  // Animation refs
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const serviceCardWrappersRef = useRef<HTMLDivElement[]>([]);
  const processSectionRef = useRef<HTMLDivElement>(null);
  const processStepsRef = useRef<HTMLDivElement[]>([]);
  const contactCardRef = useRef<HTMLDivElement>(null);
  const faqSectionRef = useRef<HTMLDivElement>(null);

  const addServiceCardWrapperToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      serviceCardWrappersRef.current[index] = el;
    }
  };

  const addProcessStepToRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      processStepsRef.current[index] = el;
    }
  };

useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Hero title zoom animation (similar to About page)
      gsap.timeline({
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true,
        }
      }).fromTo(
      titleRef.current,
      { opacity: 1, scale: 0.6 },
      { opacity: 1, scale: 1.5, ease: "power2.out" }
    );

      // Hero section animations
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        subtitleRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: 0.3,
          ease: "power2.out",
        }
      );

      // What We Do section animation with reverse play
   

      // Service cards animation with reverse play
      serviceCardWrappersRef.current.forEach((card, index) => {
        if (card) {
          gsap.fromTo(
            card,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      });

      // Process section animation with reverse play
      gsap.fromTo(
        processSectionRef.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: processSectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // Process steps animation with reverse play
      processStepsRef.current.forEach((step, index) => {
        if (step) {
          gsap.fromTo(
            step,
            { opacity: 0, y: 50 },
            {
              opacity: 1,
              y: 0,
              duration: 0.8,
              delay: index * 0.2,
              ease: "power2.out",
              scrollTrigger: {
                trigger: step,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play reverse play reverse",
              },
            }
          );
        }
      });

      // Contact card animation with reverse play
      gsap.fromTo(
        contactCardRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: contactCardRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );

      // FAQ section animation with reverse play
      gsap.fromTo(
        faqSectionRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: faqSectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play reverse play reverse",
          },
        }
      );
    });

    return () => ctx.revert();
  }, []); 


  return (
    <div style={{ fontFamily: raleway.style.fontFamily }} className="bg-white w-full overflow-x-hidden">
      {/* Hero Section */}  


        <div className="fixed top-0 left-0 w-full z-50">
              <Navbar />
            </div>
      
      <div
        ref={heroRef}    
        data-scroll-section  
        data-scroll  
        data-scroll-speed= "0.2"
        className="h-[55vh] md:h-[70vh] bg-white flex flex-col gap-2 items-center justify-center w-full bg-cover bg-center z-10"
        style={{ 
          backgroundImage: "url('/service1.avif')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat"
        }}
      >
     
       <h1 
          ref={titleRef}
          className="font-medium tracking-widest text-4xl md:text-5xl lg:text-6xl z-20 text-white text-center px-4 will-change-transform"
          style={{ transformOrigin: "center center" }}
        >
          Services
        </h1>
        <h5 
          ref={subtitleRef}
          className="text-[#F1F1F1] mt-4 font-thin text-sm md:text-lg z-20 tracking-widest text-center px-4"
        >
          Connecting Dreams to Destinations Let's Build Your Path Together
        </h5>
      </div>

      {/* What We Do Section */}
      <div  data-scroll-section 
       data-scroll data-scroll-speed = "0.1"
      
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col py-8 md:py-12"
      >
        <div     className="text-center md:text-left">
          <span className="text-gray-500 text-3xl md:text-4xl">
            What <span className="text-[#155da9]">We</span> Can{" "}
            <span className="text-[#c30e16]">Do</span>?
          </span>
        </div>
        <div    className="mt-4 text-center md:text-left">
          <p className="text-gray-600 text-sm md:text-base">
            Our comprehensive immigration services are designed to guide you through every step of your journey to Canada. 
            Whether you're seeking temporary residency, permanent status, or family reunification, our team of experts 
            provides personalized solutions tailored to your unique circumstances. We combine legal expertise with 
            compassionate service to make your transition as smooth as possible.
          </p>
        </div>
      </div>

      {/* Services Cards */}   
      <div  className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <div  className="flex flex-col sm:flex-row flex-wrap justify-center gap-6">
          {/* Permanent Residence Card */}
          <div 
            ref={(el) => addServiceCardWrapperToRefs(el, 0)}
            className="flex-1 min-w-[250px] max-w-[400px]"
          >
            <Link 
              href="/pr" 
              className="h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9] block"
            >
              <div className="flex flex-col items-center justify-center h-full p-4 gap-4">
                <div className="h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full flex items-center justify-center bg-[#c30e16]">
                  <GrHome className="text-white text-4xl sm:text-5xl" />
                </div>
                <div className="text-center">
                  <span className="text-xl sm:text-2xl text-[#c30e16]">
                    <span className="text-[#155da9]">Permanent</span> Residence
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 text-center">
                  Family sponsorship and pathways to obtain Canadian permanent resident status.
                </p>
              </div>
            </Link>
          </div>

          {/* Express Entry Card */}
          <div 
            ref={(el) => addServiceCardWrapperToRefs(el, 1)}
            className="flex-1 min-w-[250px] max-w-[400px]"
          >
            <Link 
              href="/expressentry" 
              className="h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9] block"
            >
              <div className="flex flex-col items-center justify-center h-full p-4 gap-4">
                <div className="h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full flex items-center justify-center bg-[#155da9]">
                  <GiEntryDoor className="text-white text-4xl sm:text-5xl" />
                </div>
                <div className="text-center">
                  <span className="text-xl sm:text-2xl text-[#c30e16]">
                    <span className="text-[#155da9]">Express</span> Entry
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 text-center">
                  Fast-track immigration pathway for skilled workers to obtain Canadian permanent residence.
                </p>
              </div>
            </Link>
          </div>

          {/* Visitor Visa Card */}
          <div 
            ref={(el) => addServiceCardWrapperToRefs(el, 2)}
            className="flex-1 min-w-[250px] max-w-[400px]"
          >
            <Link 
              href="/visitorvisa" 
              className="h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9] block"
            >
              <div className="flex flex-col items-center justify-center h-full p-4 gap-4">
                <div className="h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full flex items-center justify-center bg-[#c30e16]">
                  <SiVisa className="text-white text-4xl sm:text-5xl" />
                </div>
                <div className="text-center">
                  <span className="text-xl sm:text-2xl text-[#c30e16]">
                    <span className="text-[#155da9]">Visitor</span> Visa
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 text-center">
                  Temporary visas for tourism, business visits, and family visits to Canada.
                </p>
              </div>
            </Link>
          </div>   

          {/* Work Permit Card */}
          <div 
            ref={(el) => addServiceCardWrapperToRefs(el, 3)}
            className="flex-1 min-w-[250px] max-w-[400px]"
          >
            <Link 
              href="/workpermit" 
              className="h-[250px] sm:h-[300px] shadow-xl rounded-lg border-2 hover:-translate-y-2 transition-transform duration-500 border-[#155da9] block"
            >
              <div className="flex flex-col items-center justify-center h-full p-4 gap-4">
                <div className="h-[70px] w-[70px] sm:h-[100px] sm:w-[100px] rounded-full flex items-center justify-center bg-[#155da9]">
                  <GiEntryDoor className="text-white text-4xl sm:text-5xl" />
                </div>
                <div className="text-center">
                  <span className="text-xl sm:text-2xl text-[#c30e16]">
                    <span className="text-[#155da9]">Work</span> Permit
                  </span>
                </div>
                <p className="text-sm sm:text-base text-gray-600 text-center">
                  Legal authorization to work in Canada through employer-specific or open permits.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div 
        ref={processSectionRef}
        className="w-full bg-[#f1f1f1] py-12 md:py-16"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-light text-gray-500 text-center">
            How We <span className="text-[#155da9]">Manage</span> Your{" "}
            <span className="text-[#c30e16]">Immigration</span> Process
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1: Initial Consultation */}
            <div 
              ref={(el) => addProcessStepToRefs(el, 0)}
              className="h-[250px] sm:h-[300px] lg:h-[350px] w-full max-w-[350px] mx-auto flex items-center justify-center relative rounded-full border border-[#155da9]"
            >
              <div className="absolute right-0 top-0 flex items-center justify-center -translate-x-3 translate-y-3 h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] rounded-full bg-[#c30e16]">
                <span className="text-lg sm:text-xl font-extrabold text-white">01</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 px-6 text-center">
                <span className="text-gray-500 text-xl sm:text-2xl font-normal tracking-wider">
                  <span className="text-[#155da9]">Initial</span> <span className="text-[#c30e16]">Assessment</span>
                </span>
                <span className="text-sm sm:text-base">
                  We evaluate your profile, discuss options, and recommend the best immigration pathway tailored to your qualifications and goals.
                </span>
              </div>
            </div>

            {/* Step 2: Application Preparation */}
            <div 
              ref={(el) => addProcessStepToRefs(el, 1)}
              className="h-[250px] sm:h-[300px] lg:h-[350px] w-full max-w-[350px] mx-auto flex items-center justify-center relative rounded-full border border-[#c30e16] md:translate-y-10"
            >
              <div className="absolute right-0 top-0 flex items-center justify-center -translate-x-3 translate-y-3 h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] rounded-full bg-[#155da9]">
                <span className="text-lg sm:text-xl font-extrabold text-white">02</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 px-6 text-center">
                <span className="text-gray-500 text-xl sm:text-2xl font-normal tracking-wider">
                  <span className="text-[#155da9]">Document</span> <span className="text-[#c30e16]">Preparation</span>
                </span>
                <span className="text-sm sm:text-base">
                  Our experts guide you through gathering required documents, completing forms accurately, and preparing a compelling application package.
                </span>
              </div>
            </div>

            {/* Step 3: Submission & Follow-up */}
            <div 
              ref={(el) => addProcessStepToRefs(el, 2)}
              className="h-[250px] sm:h-[300px] lg:h-[350px] w-full max-w-[350px] mx-auto flex items-center justify-center relative rounded-full border border-[#155da9]"
            >
              <div className="absolute right-0 top-0 flex items-center justify-center -translate-x-3 translate-y-3 h-[50px] w-[50px] sm:h-[60px] sm:w-[60px] rounded-full bg-[#c30e16]">
                <span className="text-lg sm:text-xl font-extrabold text-white">03</span>
              </div>
              <div className="flex flex-col items-center justify-center gap-4 px-6 text-center">
                <span className="text-gray-500 text-xl sm:text-2xl font-normal tracking-wider">
                  <span className="text-[#155da9]">Submission</span> & <span className="text-[#c30e16]">Follow-up</span>
                </span>
                <span className="text-sm sm:text-base">
                  We submit your application, monitor processing times, and handle all communications with immigration authorities until final decision.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Contact & FAQ Section */}
      <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 flex flex-col lg:flex-row gap-8">
        {/* Contact Card */}
        <div 
          ref={contactCardRef}
          className="w-full lg:w-1/2 bg-[#f1f1f1] rounded-lg flex flex-col items-center h-auto lg:h-[600px]"
        >
          <div className="h-[300px] sm:h-[400px] w-full">
            <img
              className="object-cover object-center w-full h-full rounded-t-lg"
              src="/y1.jpg"
              alt="Service consultation"
            />
          </div>
          <div className="p-6 text-center">
            <h3 className="text-2xl sm:text-3xl text-gray-500 font-normal">
              For <span className="text-[#155da9]">More</span>{" "}
              <span className="text-[#c30e16]">Assistance</span>
            </h3>
            <p className="text-gray-500 mt-4 pb-7 text-sm sm:text-base">
              Contact Our Experts For better Strategy to Complete your Dreams
            </p>
           <Link href="/contact" className=" border-2 border-[#155da9] text-[#155da9] px-8 py-3  hover:bg-[#155da9] hover:text-white hover:-translate-y-2  transition-all duration-300 rounded-full">
              Send Message
            </Link>
          </div>
        </div>

        {/* FAQ Section */}
        <div 
          ref={faqSectionRef}
          className="w-full lg:w-1/2"
        >
          <h2 className="text-2xl font-normal sm:text-3xl text-gray-500 text-center lg:text-left">
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
                className="border font-light border-[#155da9] rounded-xl shadow-sm cursor-pointer overflow-hidden"
              >
                <div
                  className={`flex items-center justify-between p-4 ${activeIndex === index ? 'bg-[#155da9] text-white' : 'bg-white text-[#155da9]'}`}
                >
                  <h3 className="text-sm font-light sm:text-base font-medium">
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