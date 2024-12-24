
"use client";
import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/app/components/Navbar";
import { Raleway } from "next/font/google";
import { Swiper, SwiperSlide } from "swiper/react";
import { GiCommercialAirplane } from "react-icons/gi";
import { RiVisaLine } from "react-icons/ri";
import { FaUniversity } from "react-icons/fa";
import { IoDocumentAttach } from "react-icons/io5";
import { IoPersonAddSharp } from "react-icons/io5";
import { GoArrowDown } from "react-icons/go";
import { IoDocumentsSharp } from "react-icons/io5";
import { FaFileSignature } from "react-icons/fa";
import { RiFlag2Fill } from "react-icons/ri";

import "@/app/styles/styles.css";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Swiper2 from "@/app/components/Swiper2";
import Swiper1 from "@/app/components/Swiper1";
import Footer from "@/app/components/Footer";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});
interface CounterProps {
  targetValue: number;
}

const Counter: React.FC<CounterProps> = ({ targetValue }) => {
  const [count, setCount] = useState<number>(0); // Type state as number
  const counterRef = useRef<HTMLDivElement | null>(null); // Type ref as HTMLDivElement

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Increment the counter once the section is in view
          let start = 0;
          const end = targetValue;
          const duration = 2000; // duration for the count animation
          const stepTime = Math.abs(Math.floor(duration / end));

          const timer = setInterval(() => {
            start += 1;
            setCount(start);
            if (start === end) {
              clearInterval(timer);
            }
          }, stepTime);
        }
      },
      { threshold: 0.5 } // Trigger when 50% of the element is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, [targetValue]);

  return (
    <div ref={counterRef} className="flex flex-col items-center justify-center">
      <h1 className="text-4xl text-gray-500 font-semibold">{count}</h1>
    </div>
  );
};



 
export default function Contact() {
  return (
    <div
      style={{ fontFamily: raleway.style.fontFamily }}
      className="w-full bg-white h-screen"
    >
      {/* Navbar Section */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Slider Section */}
      <div className="relative bg-white h-[70vh] w-full overflow-hidden">
        <img
          src="/contact6.jpg"
          className="object-cover h-full w-full"
          alt=""
        />

        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center z-20">
          <h1 className="mt-10 font-medium tracking-widest text-7xl text-white">
            Imagine. Believe. Succeed
          </h1>
          <h5 className="text-[#F1F1F1] mt-3 font-thin text-lg tracking-widest">
            Connecting Dreams to Destinations Let’s Build Your Path Together
          </h5>
        </div>
      </div>

      {/* Black Box Section */}
      <div className="relative -translate-y-[50px] flex h-[30vh] w-full items-center justify-center z-30">
        <div
          className="absolute h-[30vh] border-[1px] border-[#c30e16] w-[70%] bg-white shadow-lg rounded-md"
          style={{
            borderRadius: "8px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.5)",
          }}
        >
          <div className="flex pl-10 pr-10 h-full w-full gap-6 justify-center items-center">
            {/* First Box */}
            <div className="h-[80%] w-[250px] flex flex-col items-center justify-center rounded-md">
              <div className="h-[70px] w-[70px] rounded-full flex items-center bg-[#155da9] justify-center">
                <span className="text-4xl text-white">
                  <IoDocumentAttach />
                </span>
              </div>

              <div className="mt-5">
                <h1 className="text-xl text-center text-gray-500">
                  Easy Application
                </h1>
                <h1 className="text-sm text-gray-400 text-center">
                  Seamless immigration made simple.
                </h1>
              </div>
            </div>

            {/* Second Box */}
            <div className="h-[80%] w-[250px] flex flex-col items-center justify-center rounded-md">
              <div className="h-[60px] w-[60px] rounded-full flex flex-col bg-[#155da9] items-center justify-center">
                <span className="text-4xl text-white">
                  <RiVisaLine />
                </span>
              </div>

              <div className="mt-5">
                <h1 className="text-xl text-center text-gray-500">
                  Visa Assistance
                </h1>
                <h1 className="text-sm text-gray-400 text-center">
                  Expert guidance for your visa success.
                </h1>
              </div>
            </div>

            {/* Third Box - Raised and Bigger */}
            <div
              className="h-[270px] flex flex-col pl-3 pr-3 items-center justify-center w-[270px] border-[2px] bg-white border-[#155da9] rounded-md relative -translate-y-3 hover:transition-transform hover:duration-300 hover:-translate-y-5 hover:ease-out shadow-xl"
              style={{
                boxShadow: "0px 6px 15px rgba(0, 0, 0, 0.4)",
              }}
            >
              <div className="h-[60px] w-[60px] rounded-full flex flex-col items-center justify-center bg-[#c30e16]">
                <span className="text-4xl text-white">
                  <FaUniversity />
                </span>
              </div>
              <div className="mt-5">
                <h1 className="text-xl text-center text-gray-500">
                  College Admissions and Counselling
                </h1>
                <h1 className="text-sm mt-1 text-gray-400 text-center">
                  Guiding you to your dream college.
                </h1>
              </div>
            </div>

            {/* Fourth Box */}
            <div className="h-[80%] flex items-center justify-center flex-col w-[250px] rounded-md">
              <div className="h-[70px] w-[70px] rounded-full flex items-center bg-[#155da9] justify-center">
                <span className="text-4xl text-white">
                  <GiCommercialAirplane />
                </span>
              </div>

              <div className="mt-5">
                <h1 className="text-xl text-center text-gray-500">
                  Immigration Support
                </h1>
                <h1 className="text-sm text-gray-400 text-center">
                  Comprehensive support for your journey abroad.
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex bg-white items-center justify-center">
        <div className="mt-10 flex items-center justify-center flex-col gap-6">
          <h1 className="text-xl text-gray-500">
            Immigration Consultants Services
          </h1>
          <h1 className="text-4xl text-gray-500">
            Where Clients <span className="text-[#155da9]">Become</span> Our{" "}
            <span className="text-[#c30e16]">Family</span>
          </h1>
          <h1 className="text-gray-500 text-xl mb-10">
            We are an immigration company that believes in touching the sky with
            eminence and hard work.
          </h1>  
          
        </div>
      </div>
      <div className="h-full w-full bg-[#f1f1f1]  ">
        <div className="flex w-full h-full   p-10 items-center justify-center">
          <div className="w-[50%]  h-full   ">
            <img className="mt-10" src="home9.jpeg" alt="" />
          </div>
          <div className="w-[50%] h-full ">
            <div className="flex flex-col gap-10 mt-[110px]  ml-10 h-full ">
              <h1 className="text-4xl text-gray-500">
                About <span className="text-[#155da9]">Us</span>
              </h1>
              <span className="text-lg">
                We are committed to walking hand in hand with our clients,
                addressing their unique needs to ensure their Canadian journey
                begins with confidence and positivity. It is our privilege to
                provide specialized support, guiding them every step of the way.
                Together, we turn aspirations into achievements and lay the
                foundation for lasting success. Our goal is to not only make the
                immigration process seamless but also to foster a relationship
                built on trust and mutual respect. By understanding each
                client’s story, we craft personalized solutions that empower
                them to thrive in their new environment. Your success is our
                greatest reward, and we are honored to be part of your journey.{" "}
              </span>   
              <div> 

              <button className="border-[#155da9] border-2  mt-6 text-[#155da9] px-10 py-4  tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full">
            {" "}
            more...{" "}
          </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-full w-full bg-white">
        <div className="text-center mb-10 ">
          <h1 className="pt-10 text-4xl text-[#c30e16]">
            <span className="text-[#155da9]">Our</span> Services
          </h1>
        </div>
        <div className="text-center">
          <span className="text-center text-lg text-gray-500">
            We Would Like to Assist You. Our Aim Is to Allow You the Freedom of
            Envision Your Canadian Dream.
          </span>
        </div>
        <Swiper2 />
        <div className="flex items-center justify-center">
          <button className="border-[#155da9] border-2  mt-6 text-[#155da9] px-10 py-4  tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full">
            {" "}
            View All Services{" "}
          </button>
        </div>
      </div>

      {/* <div className="h-full w-full bg-[#f1f1f1]"> 
                  <div className="flex pt-6 gap-4 flex-col items-center justify-center"> 
                      <h1 className="text-lg text-gray-500">We make your application hassle free</h1>   
                      <h1 className="text-4xl text-gray-500"><span className="text-[#155da9]">Navigate</span>  the Path <span className="text-[#c30e16]">Ahead</span></h1>   
                      <h1 className="text-lg text-gray-500">Effortlessly Navigate Your Application with Expert Guidance
                      </h1>   

                  </div>   

                  <div className="flex "> 
                    <div className="h-[60%] w-full bg-black"> 

                    </div>
                    <div className="h-[60%] w-full bg-red-800"> 

                    </div>

                  </div>
        
      </div> */}
      <div className="h-[130vh] w-full bg-[#f1f1f1]">
        <div className="flex pt-6 gap-4 flex-col items-center justify-center">
          <h1 className="text-lg text-gray-500">
            We make your application hassle-free
          </h1>
          <h1 className="text-4xl text-gray-500">
            <span className="text-[#155da9]">Navigate</span> the Path{" "}
            <span className="text-[#c30e16]">Ahead</span>
          </h1>
          <h1 className="text-lg text-gray-500">
            Effortlessly Navigate Your Application with Expert Guidance
          </h1>
        </div>

        

        <div
          className="relative flex h-[120vh] mt-10 justify-center items-center bg-cover bg-center"
          style={{ backgroundImage: "url('/home18.jpg')" }}
        >
          {/* Black Overlay with opacity */}
          <div className="absolute inset-0 bg-black opacity-60"></div>

          {/* Content on top of overlay */}
          <div className="relative z-10 flex flex-col justify-center items-center gap-10 h-full w-full">
            {/* Section 1 */}
            {/* <div className="flex bg-white  rounded-full p-5 opacity-35 items-center gap-10">
          <div className="h-[80px] flex items-center justify-center w-[80px] rounded-full bg-[#155da9]">
            <span className="text-3xl text-white">
              <IoPersonAddSharp />
            </span>
          </div>
          <h1 className="text-2xl text-gray-500">Sign Up</h1>
        </div> */}
            <div className="relative flex items-center gap-10">
              {/* Background with opacity */}
              <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>

              {/* Content on top of the background */}
              <div className="relative flex items-center gap-10 p-5">
                <div className="h-[80px] flex items-center justify-center w-[80px] rounded-full bg-[#155da9]">
                  <span className="text-3xl text-white">
                    <IoPersonAddSharp />
                  </span>
                </div>
                <h1 className="text-xl text-white">Sign Up</h1>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex items-center justify-center">
              <span className="text-4xl text-white">
                <GoArrowDown />
              </span>
            </div>

            {/* Section 2 */}
            <div className="relative flex items-center gap-10">
              {/* Background with opacity */}
              <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>

              {/* Content on top of the background */}
              <div className="relative flex items-center gap-10 p-5">
                <div className="h-[80px] flex items-center justify-center w-[80px] rounded-full bg-[#b9242c]">
                  <span className="text-3xl text-white">
                    <IoDocumentsSharp />
                  </span>
                </div>
                <h1 className="text-xl text-white">Send Your Documents</h1>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex items-center justify-center">
              <span className="text-4xl text-white">
                <GoArrowDown />
              </span>
            </div>

            {/* Section 3 */}
            <div className="relative flex items-center gap-10">
              {/* Background with opacity */}
              <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>

              {/* Content on top of the background */}
              <div className="relative flex items-center gap-10 p-5">
                <div className="h-[80px] flex items-center justify-center w-[80px] rounded-full bg-[#155da9]">
                  <span className="text-3xl text-white">
                    <FaFileSignature />
                  </span>
                </div>
                <h1 className="text-xl text-white">Filling and Submission</h1>
              </div>
            </div>

            {/* Arrow Down */}
            <div className="flex items-center justify-center">
              <span className="text-4xl text-white">
                <GoArrowDown />
              </span>
            </div>

            {/* Section 4 */}
            <div className="relative flex items-center gap-10">
              {/* Background with opacity */}
              <div className="absolute inset-0 bg-white rounded-full opacity-20"></div>

              {/* Content on top of the background */}
              <div className="relative flex items-center gap-10 p-5">
                <div className="h-[80px] flex items-center justify-center w-[80px] rounded-full bg-[#b9242c]">
                  <span className="text-3xl text-white">
                    <RiFlag2Fill />
                  </span>
                </div>
                <h1 className="text-xl text-white">Final Result</h1>
              </div>
            </div>
          </div>
        </div>
      </div>  


      <div className="h-[90vh] w-full bg-[#f1f1f1] "> 
                  <div className="flex bg-[#f1f1f1] h-full w-full"> 
                          <div className=" bg-[#f1f1f1]  ml-10 mt-[100px] w-full "> 
                          <div className="flex  bg-[#f1f1f1] mt-20  rounded-xl w-full flex-col items-center justify-center">
  <h1 className="text-4xl text-gray-500">
    Why <span className="text-[#155da9]">Choose</span> <span className="text-[#c30e16]">Us</span>?
  </h1>
  <div className="flex flex-col gap-8 pt-10">
    <div className="flex items-start gap-2">
      <span className="text-[#155da9] text-xl">•</span>
      <span className="text-gray-500 text-lg">
        Simplified and Streamlined Application Process
      </span>
    </div>
    <div className="flex items-start gap-2">
      <span className="text-[#c30e16] text-xl">•</span>
      <span className="text-gray-500 text-lg">
        Expert Guidance Every Step of the Way
      </span>
    </div>
    <div className="flex items-start gap-2">
      <span className="text-[#c30e16] text-xl">•</span>
      <span className="text-gray-500 text-lg">
        Transparent and Honest Communication
      </span>
    </div>
    <div className="flex items-start gap-2">
      <span className="text-[#c30e16] text-xl">•</span>
      <span className="text-gray-500 text-lg">
        Affordable and Competitive Fees
      </span>
    </div>
    <div className="flex items-start gap-2">
      <span className="text-[#c30e16] text-xl">•</span>
      <span className="text-gray-500 text-lg">
        Personalized Solutions Tailored to Your Needs
      </span>
    </div>
  </div>
</div>

                          </div>
                          <div className=" w-full  pt-20"> 
                              <img src="home15.jpg" alt="" className="mt-20 w-[90%] ml-10 " />
                          </div>
                  </div>
      </div>    

      <div className="h-[50vh]  pt-10 w-full bg-white">
  <div className="h-[40vh] w-full mt-20 relative">
    {/* Background Image */}
    <img
      src="home13.jpeg"
      alt=""
      className="h-full w-full object-cover"
    />
    {/* Black Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center gap-5 flex-col justify-center">
      <h1 className="text-4xl  text-white">
       Start <span className="">Your  <span className="text-[#155da9]">Journey</span></span>
      </h1> 
      <span className="text-gray-400 text-lg">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem, ea.</span>   
      <button className="border-white border-[1px]  mt-6 text-white px-10 py-4  tracking-wide hover:border-[#155da9] hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full">
            {" "}
              contact us{" "}
          </button>
    </div>
  </div>
</div>

      <div className="h-[10vh] pt-[100px]  w-full bg-white">
  <div className="h-[10vh] w-full bg-[#f1f1f1] flex items-center justify-center overflow-hidden relative">
    {/* Infinite Scrolling Text Container */}
    <div className="flex animate-scroll whitespace-nowrap ">
      <span className="mx-10 text-6xl text-[#155da9]">
        Exceptional guidance for immigration success!
      </span>
      <span className="mx-10 text-6xl text-[#c30e16]">
        Affordable, reliable, and transparent services.
      </span>
      <span className="mx-10 text-6xl text-[#155da9]">
        Making your journey seamless and stress-free!
      </span>
      <span className="mx-10 text-6xl text-[#c30e16]">
        Highly recommended for professional support.
      </span>
      <span className="mx-10 text-6xl text-[#155da9]">
        Trusted by thousands for immigration excellence.
      </span>
    </div>
  </div>
</div>      

<div className="h-[70vh] w-full bg-white flex flex-col items-center justify-center">
      <h1 className="text-4xl text-gray-500 mb-10">Our <span className="text-[#155da9]">Achievements</span></h1>

      {/* Counter Section */}
      <div className="flex gap-20 justify-center w-full">
        <div className="flex flex-col items-center">
          <h2 className="text-lg font-medium text-gray-400 mb-4 ">Clients Served</h2>
          <Counter targetValue={1200} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-lg font-medium text-gray-400 mb-4">Visa Applications Processed</h2>
          <Counter targetValue={1000} />
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-lg font-medium text-gray-400 mb-4">Years of Experience</h2>
          <Counter targetValue={20} />
        </div>
      </div>
    </div>




<style jsx>{`
  .animate-scroll {
    animation: scroll 12s linear infinite;
  }

  @keyframes scroll {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
`}</style>

<Footer/>
    </div>
  );
}
