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
    <div style={{ fontFamily: raleway.style.fontFamily }} className="bg-white">
      <div
        className="h-[70vh] bg-white flex flex-col gap-2 items-center justify-center w-full bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/service1.avif')" }} // Background image path
      >
        <Navbar />
        <h1 className="font-medium tracking-widest text-6xl z-20 text-white">
          Services{" "}
        </h1>
        <h5 className="text-[#F1F1F1] mt-4 font-thin text-lg z-20 tracking-widest">
          Connecting Dreams to Destinations Let’s Build Your Path Together
        </h5>
      </div>
      <div className=" flex flex-col ">
        <div className="p-10 mt-10">
          <span className="text-gray-500 text-4xl">
            What <span className="text-[#155da9]">We</span> Can{" "}
            <span className="text-[#c30e16]">Do</span>?
          </span>
        </div>
        <div className="pl-10 w-[80vw] ">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            soluta ex cumque enim doloremque consequatur autem, perferendis quas
            officiis id.
          </p>
        </div>
      </div>
      <div className="bg-white pb-20 ">
        <div className=" flex gap-5 mt-[150px] items-center justify-center flex-wrap">
          <div className="h-[300px] w-[400px] shadow-xl  rounded-lg hover:-translate-y-2 transition-transform duration-500 bg-[#fff]">
            {/* <div className="flex flex-col items-center justify-center mt-5 gap-3">
              <div className="flex flex-col items-center justify-center">
                <img
                  src="https://seaviewimmigration.com/uploads/services/1/icon/service_icon-1658216966-1658216966_7673610691e01cf8fa6b.png"
                  alt=""
                  className="mx-auto"
                />
              </div>

              <div className="mt-5 text-center">
                <span className="text-3xl text-[#c30e16]">
                  <span className="text-[#155da9]">Permanent</span> Residence
                </span>
              </div>

              <div className="w-[80%] text-sm text-center">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  voluptatibus.
                </span>
              </div>
            </div> */}
            <div className="flex flex-col items-center justify-center mt-5 gap-3">
              {/* Image Container */}
              <div className="flex flex-col items-center justify-center">
                <div className="h-[100px] w-[100px] bg-[#000] rounded-full flex items-center justify-center">
                  {/* <img
                      src="https://seaviewimmigration.com/uploads/services/3/icon/service_icon-1658218167-1658218167_191ff88e5f6b110ad880.png"
                      alt=""
                      className="mx-auto"
                    /> */}
                  <span className="text-white text-6xl">
                    <SiVisa />
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="mt-5 text-center">
                <span className="text-3xl text-[#c30e16]">
                  <span className="text-[#155da9]">Express</span> Entry
                </span>
              </div>

              {/* Description */}
              <div className="w-[80%] text-sm text-center">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  voluptatibus.
                </span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-[400px] shadow-xl  rounded-lg  hover:-translate-y-2 transition-transform duration-500 border-2 border-[#c30e16] ">
            {/* <div className="flex flex-col items-center justify-center mt-5 gap-3">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="https://seaviewimmigration.com/uploads/services/2/icon/service_icon-1658217774-1658217774_89ac36d09a171c0a734b.png"
                      alt=""
                      className="mx-auto"
                    />
                  </div>

                  <div className="mt-5 text-center">
                    <span className="text-3xl text-[#c30e16]">
                      <span className="text-[#155da9]">Temporary</span> Residence
                    </span>
                  </div>

                  <div className="w-[80%] text-sm text-center">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                      voluptatibus.
                    </span>
                  </div>
                </div> */}
            <div className="flex flex-col items-center justify-center mt-5 gap-3">
              {/* Image Container */}
              <div className="flex flex-col items-center justify-center">
                <div className="h-[100px] w-[100px] bg-[#155da9] rounded-full flex items-center justify-center">
                  {/* <img
                      src="https://seaviewimmigration.com/uploads/services/3/icon/service_icon-1658218167-1658218167_191ff88e5f6b110ad880.png"
                      alt=""
                      className="mx-auto"
                    /> */}
                  <span className="text-white text-6xl">
                    <SiVisa />
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="mt-5 text-center">
                <span className="text-3xl text-[#c30e16]">
                  <span className="text-[#155da9]">Express</span> Entry
                </span>
              </div>

              {/* Description */}
              <div className="w-[80%] text-sm text-center">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  voluptatibus.
                </span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-[400px] shadow-xl  rounded-lg hover:-translate-y-2 transition-transform duration-500 bg-[#fff]">
            {/* <div className="flex flex-col items-center justify-center mt-5 gap-3">
                  <div className="flex flex-col items-center justify-center">
                    <img
                      src="https://seaviewimmigration.com/uploads/services/3/icon/service_icon-1658218167-1658218167_191ff88e5f6b110ad880.png"
                      alt=""
                      className="mx-auto"
                    />
                  </div>

                  <div className="mt-5 text-center">
                    <span className="text-3xl text-[#c30e16]">
                      <span className="text-[#155da9]">Express</span> Entry
                    </span>
                  </div>

                  <div className="w-[80%] text-sm text-center">
                    <span>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                      voluptatibus.
                    </span>
                  </div>
                </div> */}
            <div className="flex flex-col items-center justify-center mt-5 gap-3">
              {/* Image Container */}
              <div className="flex flex-col items-center justify-center">
                <div className="h-[100px] w-[100px] bg-[#000] rounded-full flex items-center justify-center">
                  {/* <img
                      src="https://seaviewimmigration.com/uploads/services/3/icon/service_icon-1658218167-1658218167_191ff88e5f6b110ad880.png"
                      alt=""
                      className="mx-auto"
                    /> */}
                  <span className="text-white text-6xl">
                    <SiVisa />
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="mt-5 text-center">
                <span className="text-3xl text-[#c30e16]">
                  <span className="text-[#155da9]">Express</span> Entry
                </span>
              </div>

              {/* Description */}
              <div className="w-[80%] text-sm text-center">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  voluptatibus.
                </span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-[400px] shadow-xl  rounded-lg border-[2px] hover:-translate-y-2 transition-transform duration-500 border-[#155da9]">
            <div className="flex flex-col items-center justify-center mt-5 gap-3">
              {/* Image Container */}
              <div className="flex flex-col items-center justify-center">
                <div className="h-[100px] w-[100px] bg-[#155da9] rounded-full flex items-center justify-center">
                  {/* <img
                      src="https://seaviewimmigration.com/uploads/services/3/icon/service_icon-1658218167-1658218167_191ff88e5f6b110ad880.png"
                      alt=""
                      className="mx-auto"
                    /> */}
                  <span className="text-white text-6xl">
                    <SiVisa />
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="mt-5 text-center">
                <span className="text-3xl text-[#c30e16]">
                  <span className="text-[#155da9]">Express</span> Entry
                </span>
              </div>

              {/* Description */}
              <div className="w-[80%] text-sm text-center">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  voluptatibus.
                </span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-[400px] shadow-xl  rounded-lg hover:-translate-y-2 transition-transform duration-500 bg-[#fff]">
            <div className="flex flex-col items-center justify-center mt-5 gap-3">
              {/* Image Container */}
              <div className="flex flex-col items-center justify-center">
                <div className="h-[100px] w-[100px] bg-[#c30e16] rounded-full flex items-center justify-center">
                  {/* <img
                      src="https://seaviewimmigration.com/uploads/services/3/icon/service_icon-1658218167-1658218167_191ff88e5f6b110ad880.png"
                      alt=""
                      className="mx-auto"
                    /> */}
                  <span className="text-white text-6xl">
                    <SiVisa />
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="mt-5 text-center">
                <span className="text-3xl text-[#c30e16]">
                  <span className="text-[#155da9]">Express</span> Entry
                </span>
              </div>

              {/* Description */}
              <div className="w-[80%] text-sm text-center">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  voluptatibus.
                </span>
              </div>
            </div>
          </div>
          <div className="h-[300px] w-[400px] shadow-xl  rounded-lg border-[2px] hover:-translate-y-2 transition-transform duration-500 border-[#155da9]">
            <div className="flex flex-col items-center justify-center mt-5 gap-3">
              {/* Image Container */}
              <div className="flex flex-col items-center justify-center">
                <div className="h-[100px] w-[100px] bg-[#155da9] rounded-full flex items-center justify-center">
                  {/* <img
                      src="https://seaviewimmigration.com/uploads/services/3/icon/service_icon-1658218167-1658218167_191ff88e5f6b110ad880.png"
                      alt=""
                      className="mx-auto"
                    /> */}
                  <span className="text-white text-6xl">
                    <SiVisa />
                  </span>
                </div>
              </div>

              {/* Title */}
              <div className="mt-5 text-center">
                <span className="text-3xl text-[#c30e16]">
                  <span className="text-[#155da9]">Express</span> Entry
                </span>
              </div>

              {/* Description */}
              <div className="w-[80%] text-sm text-center">
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero,
                  voluptatibus.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#f1f1f1] h-screen pb-10">
        <div className="flex  flex-col items-center pb-[200px] mt-20 justify-center">
          <span className="text-4xl mt-10 text-gray-500">
            How We <span className="text-[#155da9]">Follow</span> The{" "}
            <span className="text-[#c30e16]">Process</span>
          </span>
          <div className="mt-[120px] gap-[150px] flex-wrap flex items-center justify-center ">
            {/* <div className="h-[350px] w-[350px] -translate-y-4 rounded-full border border-[#155da9] "> 
                        <div className="bg-[#c30e16] h-[50px] w-[50px] rounded-full" >

                        </div>
            </div> */}   
            <div className="h-[350px] w-[350px] flex items-center justify-center relative rounded-full border border-[#155da9]">
  <div className="absolute right-0 top-0 transform flex items-center justify-center -translate-x-4 translate-y-3 bg-[#c30e16] h-[70px] w-[70px] rounded-full">
  <span className="text-2xl font-extrabold text-white">01</span>

  </div>   
  <div className="flex flex-col items-center justify-center gap-4">
   <span className="text-gray-500 text-3xl font-bold tracking-wider"> <span className="text-[#155da9] ">Lorem</span>, <span className="text-[#c30e16]">ipsum</span>.</span>  
   <span className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsa!</span>
  </div>
</div>


<div className="h-[350px] w-[350px] relative flex items-center justify-center rounded-full translate-y-20 border border-[#c30e16]">
  <div className="absolute right-0 top-0 transform flex items-center justify-center -translate-x-4 translate-y-3 bg-[#155da9] h-[70px] w-[70px] rounded-full">
  <span className="text-2xl font-extrabold text-white">02</span>

  </div>  
  <div className="flex flex-col items-center justify-center gap-4">
   <span className="text-gray-500 text-3xl font-bold tracking-wider"> <span className="text-[#155da9] ">Lorem</span>, <span className="text-[#c30e16]">ipsum</span>.</span>  
   <span className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsa!</span>
  </div>
</div>              
<div className="h-[350px] w-[350px] relative  flex items-center justify-center rounded-full border border-[#155da9]">
  <div className="absolute right-0 top-0 transform -translate-x-4 translate-y-3 bg-[#c30e16] flex items-center justify-center  h-[70px] w-[70px] rounded-full">  
    <span className="text-2xl font-extrabold text-white">03</span>
  </div>      
  <div className="flex flex-col items-center justify-center gap-4">
   <span className="text-gray-500 text-3xl font-bold tracking-wider"> <span className="text-[#155da9] ">Lorem</span>, <span className="text-[#c30e16]">ipsum</span>.</span>  
   <span className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis, ipsa!</span>
  </div>

</div>
          </div>
        </div>
      </div>

        
    

      <section className="bg-white   back bg-no-repeat  bg-cover bg-center flex gap-10    py-16 pb-[200px] ">  
        <div className="bg-[#f1f1f1] rounded-lg flex items-center flex-col  ml-10 h-[800px] w-[500px]">     
                <div className="bg-red-100  h-[550px] w-full ">      
                  <img className="object-cover object-center w-full h-full object-n" src="/service2.jpg" alt="" />
                </div>   
                <div className="text-black mt-4"> 
                 <span className="text-4xl text-gray-500 font-medium">For <span className="text-[#155da9]">More</span> <span className="text-[#c30e16]">Assistance</span></span>
                </div>   
                <span className="text-gray-500 text-center mt-5"> 
                Contact Our Experts For better Strattegy to Complete your Dreams  
                </span>     
                <button className="border-[#155da9] border-2  mt-6 text-[#155da9] px-10 py-4  tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full">
                  {" "}
                  Send Message{" "}
                </button>

          </div> 
        <div > 

        <div className="max-w-7xl mx-auto  mb-10 px-6">
          <h2 className="text-4xl text-gray-500 ">
            Frequently <span className="text-[#155da9]">Asked</span>{" "}
            <span className="text-[#c30e16]">Questions</span>
          </h2>
          <p className="mt-4 text-lg ">
            Here are some of the most common questions we get about immigration
            services. If you have more questions, feel free to contact us!
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-3 px-6">
          {faqData.map((item, index) => (
            <div
              key={index}
              onClick={() => toggleAccordion(index)}
              className="border border-[#155da9] rounded-xl  shadow-lg cursor-pointer overflow-hidden transition-all duration-300 ease-in-out"
            >
              <div
                className={`flex items-center p-6 rounded-t-lg ${
                  activeIndex === index
                    ? "bg-[#155da9] text-white"
                    : "bg-white text-[#155da9]"
                }`}
              >
                <h3
                  className={`text-xl ${
                    activeIndex === index ? "text-white" : "text-[#155da9]"
                  }  flex-1`}
                >
                  {item.question}
                </h3>
                <span
                  className={`text-2xl  transition-transform duration-500 ${
                    activeIndex === index ? "" : "text-[#c30e16]"
                  } ${activeIndex === index ? "rotate-180" : ""}`}
                >
                  <span className="text-4xl">
                    <MdKeyboardArrowDown />
                  </span>
                </span>
              </div>

              {/* Answer Section */}
              <div
                className={`p-6 text-gray-500 transition-all duration-1000 ease-in-out overflow-hidden rounded-b-lg ${
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
