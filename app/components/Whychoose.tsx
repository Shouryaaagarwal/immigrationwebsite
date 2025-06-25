// "use client";

// export default function WhyChoose() {
//   return (
//     <div className="w-full bg-[#f1f1f1] mt-[-40px] sm:mt-[-40px] py-10 px-4">
//       <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center">
//         {/* Text Content */}
//         <div className="bg-[#f1f1f1] md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-6">
//           <h1 className="text-3xl sm:text-4xl  text-gray-500">
//             Why <span className="text-[#155da9]">Choose</span> <span className="text-[#c30e16]">Us</span>?
//           </h1>
//           <div className="flex flex-col gap-6 pt-8 max-w-md">
//             {[
//               "Simplified and Streamlined Application Process",
//               "Expert Guidance Every Step of the Way",
//               "Transparent and Honest Communication",
//               "Affordable and Competitive Fees",
//               "Personalized Solutions Tailored to Your Needs",
//             ].map((text, index) => (
//               <div key={index} className="flex items-start gap-2">
//                 <span className={`text-xl ${index % 2 === 0 ? 'text-[#155da9]' : 'text-[#c30e16]'}`}>•</span>
//                 <span className="text-gray-500 text-lg">{text}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Image Content */}
//         <div className="w-full md:w-1/2 flex justify-center pt-10 md:pt-0">
//           <img
//             src="home15.jpg"
//             alt="Why Choose Us"
//             className="w-[90%] max-w-md rounded-lg shadow-lg"
//           />
//         </div>
//       </div>
//     </div>
//   );
// }



"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register the GSAP plugin
gsap.registerPlugin(ScrollTrigger);

export default function WhyChoose() {
  // Refs for animation targets
  const containerRef = useRef<HTMLDivElement | null>(null);
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  const itemsRef = useRef<HTMLDivElement[]>([]);
  const imageRef = useRef<HTMLImageElement | null>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animate heading
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { scale: 0.8, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            ease: "power2.out",
            duration: 1,
            scrollTrigger: {
              trigger: headingRef.current,
              start: "top 80%",
              end: "top 50%",
              scrub: false,
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate list items
      if (itemsRef.current.length > 0) {
        gsap.fromTo(
          itemsRef.current,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            stagger: 0.2,
            ease: "power2.out",
            duration: 1,
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 70%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Animate image
      if (imageRef.current) {
  gsap.fromTo(
    imageRef.current,
    { opacity: 0 },
    {
      opacity: 1,
      ease: "power2.out",
      duration: 2,
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top 80%",
        end: "top 50%",
        toggleActions: "play none none reverse",
      },
    }
  );
}
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div data-scroll-section  ref={containerRef} className="w-full bg-[#f1f1f1] mt-[-40px] py-10 px-4">
      <div data-scroll data-scroll-speed="0.2"  className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center">
        {/* Text Content */}
        <div className="bg-[#f1f1f1] md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-6">
          <h1 ref={headingRef} className="text-3xl sm:text-4xl text-gray-500">
            Why <span className="text-[#155da9]">Choose</span>{" "}
            <span className="text-[#c30e16]">Us</span>?
          </h1>
          <div className="flex flex-col gap-6 pt-8 max-w-md">
            {[
              "Simplified and Streamlined Application Process",
              "Expert Guidance Every Step of the Way",
              "Transparent and Honest Communication",
              "Affordable and Competitive Fees",
              "Personalized Solutions Tailored to Your Needs",
            ].map((text, index) => (
              <div
                key={index}
                ref={(el) => {
                  if (el) itemsRef.current[index] = el;
                }}
                className="flex items-start gap-2"
              >
                <span className={`text-xl ${index % 2 === 0 ? "text-[#155da9]" : "text-[#c30e16]"}`}>
                  •
                </span>
                <span className="text-gray-500 text-lg">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 flex justify-center pt-10 md:pt-0">
          <img
            ref={imageRef}
            src="home15.jpg"
            alt="Why Choose Us"
            className="w-[90%] max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
