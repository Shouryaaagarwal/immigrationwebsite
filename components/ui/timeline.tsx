"use client";
import { useScroll, useTransform, motion } from "framer-motion";
import { Raleway } from "next/font/google";
import React, { useEffect, useRef, useState } from "react";

interface TimelineEntry {
  title: string;
  content: React.ReactNode;
}

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export const Timeline = ({ data }: { data: TimelineEntry[] }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [timelineHeight, setTimelineHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setTimelineHeight(contentRef.current.scrollHeight);
    }
  }, [data]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, timelineHeight]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div
      className="w-full bg-white dark:bg-neutral-950 font-sans md:px-10 overflow-hidden"
      style={{ fontFamily: raleway.style.fontFamily }}
      ref={containerRef}
    >
      {/* Header Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-4xl md:text-6xl lg:text-7xl mb-4 text-[#155da9] font-normal max-w-4xl">
          Know Your <span className="text-[#c30e16]">Process</span>
        </h2>
        <p className="text-neutral-700 dark:text-neutral-300 text-sm md:text-base max-w-sm">
          Professionally managed pathway to make your application easy and hassle-free
        </p>
      </div>

      {/* Timeline Section */}
      <div className="relative max-w-7xl mx-auto pb-20" ref={contentRef}>
        {data.map((item, index) => (
          <div key={index} className="flex flex-col md:flex-row items-start gap-10 pt-10 md:pt-40">
            {/* Step Indicator */}
            <div className="sticky top-40 z-40 flex flex-col md:flex-row items-center md:w-1/3">
              <div className="relative">
                <div className="h-8 w-8  ml-2 md:ml-4 lg:ml-4 rounded-full bg-white dark:bg-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-neutral-300 dark:bg-neutral-700 border border-neutral-400 dark:border-neutral-600 p-2" />
                </div>
              </div>
              <h3 className="hidden md:block  text-xl md:pl-8 lg:pl-20 md:text-3xl lg:text-4xl font-semibold text-[#155da9]">
                {item.title}
              </h3>
            </div>

            {/* Content Section */}
            <div className="relative ml-6 lg:ml-0  w-[90%] md:w-2/3 pl-6 md:pl-0">
              <h3 className="md:hidden  text-2xl mb-4   font-medium text-[#155da9]">{item.title}</h3>
              {item.content}
            </div>
          </div>
        ))}

        {/* Timeline Progress Line */}
        <div className="absolute left-6 md:left-8  top-0 h-full w-[2px] bg-neutral-200 dark:bg-neutral-700">
          <motion.div
            style={{ height: heightTransform, opacity: opacityTransform }}
            className="absolute top-0 w-[2px] bg-gradient-to-b from-[#c30e16] via-[#155da9] to-transparent"
          />
        </div>
      </div>
    </div>
  );
};

// Demo Component
import Image from "next/image";

// export function TimelineDemo() {
//   const data = [
//     {
//       title: "Sign Up",
//       content: (
//         <div>
//           <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
//             Sign up and create your personalized account.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Image
//               src="/signuppp.jpg"
//               alt="Sign Up"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-32 md:h-60  w-full shadow-lg"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Send Your Documents",
//       content: (
//         <div>
//           <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
//             Send your documents for further processing.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Image
//               src="/doc.jpeg"
//               alt="Send Documents"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-32 md:h-60 w-full shadow-lg"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Filling and Submission",
//       content: (
//         <div>
//           <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
//             We file and submit your documents professionally.
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Image
//               src="/docsubmit.jpg"
//               alt="Submission"
//               width={500}
//               height={500}
//               className="rounded-lg object-cover h-32 md:h-60 w-full shadow-lg"
//             />
//           </div>
//         </div>
//       ),
//     },
//     {
//       title: "Result",
//       content: (
//         <div>
//           <p className="text-neutral-800 dark:text-neutral-200 text-sm md:text-base font-normal mb-8">
//             Wait for the successful result!
//           </p>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//             <Image
//               src="/result.jpg"
//               alt="Result"
//               width={700}
//               height={500}
//               className="rounded-lg object-cover h-32 md:h-60 w-full shadow-lg"
//             />
//           </div>   
          
//         </div>
//       ),
//     },
//   ];

//   return (
//     <div className="w-full">
//       <Timeline data={data} />
//     </div>
//   );
// }
export function TimelineDemo() {
  const data = [
    {
      title: "Sign Up",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base lg:text-lg font-normal mb-8 lg:mb-12">
            Sign up and create your personalized account.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20">
            <div className="relative w-full h-64 lg:h-96 xl:h-[500px] rounded-xl lg:rounded-2xl overflow-hidden">
              <Image
                src="/signuppp.jpg"
                alt="Sign Up"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6 lg:p-8">
                <span className="text-white text-lg lg:text-xl font-medium">
                  Simple registration process
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Send Your Documents",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base lg:text-lg font-normal mb-8 lg:mb-12">
            Send your documents for further processing.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="relative w-full h-64 lg:h-96 xl:h-[500px] rounded-xl lg:rounded-2xl overflow-hidden">
              <Image
                src="/doc.jpeg"
                alt="Send Documents"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6 lg:p-8">
                <span className="text-white text-lg lg:text-xl font-medium">
                  Secure document submission
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Filling and Submission",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base lg:text-lg font-normal mb-8 lg:mb-12">
            We file and submit your documents professionally.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="relative w-full h-64 lg:h-96 xl:h-[500px] rounded-xl lg:rounded-2xl overflow-hidden">
              <Image
                src="/docsubmit.jpg"
                alt="Submission"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6 lg:p-8">
                <span className="text-white text-lg lg:text-xl font-medium">
                  Professional document handling
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Result",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-base lg:text-lg font-normal mb-8 lg:mb-12">
            Wait for the successful result!
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            <div className="relative w-full h-64 lg:h-96 xl:h-[500px] rounded-xl lg:rounded-2xl overflow-hidden">
              <Image
                src="/result.jpg"
                alt="Result"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent flex items-end p-6 lg:p-8">
                <span className="text-white text-lg lg:text-xl font-medium">
                  Successful application outcome
                </span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full">
      <Timeline data={data} />
    </div>
  );
}

