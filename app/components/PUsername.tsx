// "use client";
// import { useState } from "react";
// import Link from "next/link";

// import { MdClose } from "react-icons/md";

// import { FaFlag, FaCommentAlt, FaFileUpload, FaStar } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import { useSelector } from "react-redux";

// import Image from "next/image";
// import ThankYouMessage from "./ThankYouMessage"; // Importing the ThankYouMessage component

// export default function Username() {

//   const details = useSelector((state:any) => state.auth.user);
//   const user = {

//     name: details?.name || "John Doe",
//     email: details?.email || "abc@gmail.com",
//     nationality: details?.nationality || "Indian",

//   };

//   // State for feedback popup
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [testimonial, setTestimonial] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const maxWords = 100;

//   const handleSubmitFeedback = (e: any) => {
//     e.preventDefault();
//     console.log({ rating, testimonial });
//     setSubmitted(true);
//   };

//   const handleCloseFeedback = () => {
//     setShowFeedback(false);
//     setSubmitted(false);
//     setRating(0);
//     setTestimonial("");
//   };

//   const wordCount = testimonial.split(/\s+/).filter((word) => word.length > 0).length;

//   return (
//     <div className="relative w-full pb-20 flex items-center justify-center overflow-hidden min-h-screen">
//       {/* Blurry Background Effect */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-32 -left-20 w-96 h-96 bg-gradient-to-br from-[#155da9] to-[#c30e16] rounded-full blur-3xl opacity-50"></div>
//         <div className="absolute -bottom-40 right-0 w-80 h-80 bg-gradient-to-br from-[#c30e16] to-[#155da9] rounded-full blur-3xl opacity-50"></div>
//       </div>

//       {/* Card Container */}
//       <div className={`relative p-3 bg-white rounded-xl shadow-lg mt-5 w-full max-w-md z-10 ${showFeedback ? "blur-sm" : ""}`}>
//         {/* User Profile Section */}
//         <div className="flex flex-col items-center gap-6 w-full">
//           {/* User Icon */}
//           <div className="relative w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
//             <Image src="/signinicon.png" alt="User profile" width={96} height={96} className="object-cover" priority />
//           </div>

//           {/* User Details */}
//           <h1 className="text-2xl font-semibold text-gray-800 text-center">{user.name}</h1>

//           <div className="flex flex-col gap-2 text-gray-600 text-center">
//             <div className="flex items-center justify-center">
//               <MdEmail className="mr-2 text-lg" />
//               <span>{user.email}</span>
//             </div>
//             <div className="flex items-center justify-center">
//               <FaFlag className="mr-2 text-lg" />
//               <span>{user.nationality}</span>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <div className="border-t border-gray-200 w-full my-6"></div>

//         {/* Action Buttons */}
//         <div className="flex flex-col gap-4 w-full">
//           <Link href="/form" className="border text-center border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#155da9] hover:text-white transition duration-300 transform hover:-translate-y-1">
//             Submit Form
//           </Link>

//           <Link href="/uploaddocuments" className="border text-center flex items-center justify-center border-[#155da9] gap-4 text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#155da9] hover:text-white transition duration-300 transform hover:-translate-y-1">
//             <FaFileUpload />
//             <span>Submit Documents</span>
//           </Link>

//           <button onClick={() => setShowFeedback(true)} className="border text-center flex items-center justify-center border-[#155da9] gap-4 text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#8d8d8d] hover:text-white transition duration-300 transform hover:-translate-y-1">
//             <FaCommentAlt />
//             <span>Give Feedback</span>
//           </button>
//         </div>
//       </div>

//       {/* Feedback Popup */}
//       {showFeedback && (
//         <div className="fixed inset-0 flex items-center justify-center z-20 p-4">
//           <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleCloseFeedback}></div>

//           <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 z-30">
//             <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={handleCloseFeedback}>
//               <MdClose size={24} />
//             </button>

//             {!submitted ? (
//               <form onSubmit={handleSubmitFeedback}>
//                 <h2 className="text-2xl font-bold text-center mb-6">Share Your Feedback</h2>

//                 <div className="flex justify-center mb-6">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <button key={star} type="button" className="text-3xl mx-1 focus:outline-none" onClick={() => setRating(star)} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)}>
//                       <FaStar className={star <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-300"} />
//                     </button>
//                   ))}
//                 </div>

//                 <div className="mb-4">
//                   <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Testimonial {wordCount > maxWords && <span className="text-red-500">({wordCount - maxWords} over limit)</span>}
//                   </label>
//                   <textarea id="testimonial" rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#155da9]" placeholder="Share your experience (max 100 words)" value={testimonial} onChange={(e) => setTestimonial(e.target.value)} maxLength={500} />
//                   <p className="text-xs text-gray-500 mt-1">{wordCount} / {maxWords} words</p>
//                 </div>

//                 <button type="submit" disabled={rating === 0 || wordCount > maxWords} className={`w-full py-3 px-4 rounded-full font-medium text-white transition duration-300 ${rating === 0 || wordCount > maxWords ? "bg-gray-400 cursor-not-allowed" : "bg-[#155da9] hover:bg-[#124b8a]"}`}>
//                   Submit Feedback
//                 </button>
//               </form>
//             ) : (
//               <ThankYouMessage rating={rating} onClose={handleCloseFeedback} userId={""} />
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }


// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { MdClose, MdEmail } from "react-icons/md";
// import { FaFlag, FaCommentAlt, FaFileUpload, FaStar } from "react-icons/fa";
// import { useSelector } from "react-redux";
// import Image from "next/image";
// import ThankYouMessage from "./ThankYouMessage";

// export default function Username() {
//   const details = useSelector((state: any) => state.auth.user);
//   const user = {
//     name: details?.name || "John Doe",
//     email: details?.email || "abc@gmail.com",
//     nationality: details?.nationality || "Indian",
//   };

//   const [showFeedback, setShowFeedback] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [testimonial, setTestimonial] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const maxWords = 100;

//   const handleSubmitFeedback = (e: any) => {
//     e.preventDefault();
//     console.log({ rating, testimonial });
//     setSubmitted(true);
//   };

//   const handleCloseFeedback = () => {
//     setShowFeedback(false);
//     setSubmitted(false);
//     setRating(0);
//     setTestimonial("");
//   };

//   const wordCount = testimonial.split(/\s+/).filter((word) => word.length > 0).length;

//   return (
//     <div className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-gray-100 px-4 pb-20 overflow-hidden">
//       {/* Gradient Blurs */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute -top-32 -left-20 w-96 h-96 bg-gradient-to-br from-[#155da9] to-[#c30e16] rounded-full blur-3xl opacity-50"></div>
//         <div className="absolute -bottom-40 right-0 w-80 h-80 bg-gradient-to-br from-[#c30e16] to-[#155da9] rounded-full blur-3xl opacity-50"></div>
//       </div>

//       {/* Profile Card */}
//       <div className={`relative z-10 w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl backdrop-blur-md ${showFeedback ? "blur-sm" : ""}`}>
//         {/* Profile Section */}
//         <div className="flex flex-col items-center text-center gap-4">
//           <div className="w-24 h-24 rounded-full overflow-hidden bg-gray-100 shadow-inner">
//             <Image src="/signinicon.png" alt="User" width={96} height={96} className="object-cover" />
//           </div>
//           <h2 className="text-2xl font-bold text-gray-800">{user.name}</h2>
//           <div className="text-gray-600 text-sm space-y-1">
//             <div className="flex items-center justify-center gap-2">
//               <MdEmail className="text-lg" />
//               <span>{user.email}</span>
//             </div>
//             <div className="flex items-center justify-center gap-2">
//               <FaFlag className="text-lg" />
//               <span>{user.nationality}</span>
//             </div>
//           </div>
//         </div>

//         {/* Divider */}
//         <hr className="my-6 border-gray-200" />

//         {/* Buttons */}
//         <div className="space-y-4">
//           <Link href="/form" className="block text-center border border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-medium hover:bg-[#155da9] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
//             Submit Form
//           </Link>

//           <Link href="/uploaddocuments" className="flex items-center justify-center gap-3 text-center border border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-medium hover:bg-[#155da9] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
//             <FaFileUpload />
//             <span>Submit Documents</span>
//           </Link>

//           <button onClick={() => setShowFeedback(true)} className="flex items-center justify-center gap-3 text-center border border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-medium hover:bg-[#155da9] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
//             <FaCommentAlt />
//             <span>Give Feedback</span>
//           </button>

//           <button onClick={() => console.log("Logout logic here")} className="flex items-center justify-center gap-3 text-center border border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-medium hover:bg-[#155da9] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
//             Logout
//           </button>
//         </div>
//       </div>

//       {/* Feedback Modal */}
//       {showFeedback && (
//         <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
//           <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleCloseFeedback}></div>
//           <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 z-50">
//             <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={handleCloseFeedback}>
//               <MdClose size={24} />
//             </button>

//             {!submitted ? (
//               <form onSubmit={handleSubmitFeedback}>
//                 <h2 className="text-2xl font-bold text-center mb-6">Share Your Feedback</h2>

//                 <div className="flex justify-center mb-6">
//                   {[1, 2, 3, 4, 5].map((star) => (
//                     <button
//                       key={star}
//                       type="button"
//                       className="text-3xl mx-1 focus:outline-none"
//                       onClick={() => setRating(star)}
//                       onMouseEnter={() => setHoverRating(star)}
//                       onMouseLeave={() => setHoverRating(0)}
//                     >
//                       <FaStar className={star <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-300"} />
//                     </button>
//                   ))}
//                 </div>

//                 <div className="mb-4">
//                   <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Testimonial {wordCount > maxWords && <span className="text-red-500">({wordCount - maxWords} over limit)</span>}
//                   </label>
//                   <textarea
//                     id="testimonial"
//                     rows={5}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#155da9]"
//                     placeholder="Share your experience (max 100 words)"
//                     value={testimonial}
//                     onChange={(e) => setTestimonial(e.target.value)}
//                     maxLength={500}
//                   />
//                   <p className="text-xs text-gray-500 mt-1">{wordCount} / {maxWords} words</p>
//                 </div>

//                 <button
//                   type="submit"
//                   disabled={rating === 0 || wordCount > maxWords}
//                   className={`w-full py-3 px-4 rounded-full font-medium text-white transition duration-300 ${rating === 0 || wordCount > maxWords ? "bg-gray-400 cursor-not-allowed" : "bg-[#155da9] hover:bg-[#124b8a]"}`}
//                 >
//                   Submit Feedback
//                 </button>
//               </form>
//             ) : (
//               <ThankYouMessage rating={rating} onClose={handleCloseFeedback} userId={""} />
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import React, { useState, useRef, useEffect } from "react";
import gsap from "gsap";
import { Raleway } from "next/font/google";
import { useSelector } from "react-redux";
import { selectUser } from "@/store/authSlice";
import { MdClose, MdEmail } from "react-icons/md";
import { FaFlag, FaCommentAlt, FaFileUpload, FaStar } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function VisaPredictionPage() {
  // Visa prediction state
  const [formData, setFormData] = useState({
    reading: "",
    writing: "",
    speaking: "",
    listening: "",
    gap: "",
    income: "",
    visa: "",
    ielts: "",
  });

  const [prediction, setPrediction] = useState<number | null>(null);
  const [bgState, setBgState] = useState<"initial" | "success" | "medium" | "fail">("initial");
  const needleRef = useRef<SVGLineElement>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  // Feedback state
  const user = useSelector(selectUser);
  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [testimonial, setTestimonial] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const maxWords = 100;

  useEffect(() => {
    gsap.set(needleRef.current, {
      rotate: -90,
      transformOrigin: "bottom center",
    });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const calculateScore = () => {
    const total =
      (parseFloat(formData.reading) +
      parseFloat(formData.writing) +
      parseFloat(formData.speaking) +
      parseFloat(formData.listening)) *
      10 -
      parseFloat(formData.gap || "0") * 2;
    return Math.min(Math.max(total, 0), 100);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const score = calculateScore();
    setPrediction(score);

    const angle = gsap.utils.mapRange(0, 100, -90, 90, score);
    gsap.to(needleRef.current, {
      rotate: angle,
      transformOrigin: "bottom center",
      duration: 1.5,
      ease: "power2.out",
    });

    if (score >= 75) {
      setBgState("success");
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 4000);
    } else if (score >= 40) {
      setBgState("medium");
    } else {
      setBgState("fail");
    }
  };

  const handleSubmitFeedback = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      const response = await fetch("/api/users/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating,
          testimonial,
          userId: user?._id || "",
          name: user?.name || "Anonymous",
          description: testimonial,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error(data.error || "Failed to submit feedback");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to submit feedback");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCloseFeedback = () => {
    setShowFeedback(false);
    setSubmitted(false);
    setRating(0);
    setTestimonial("");
    setError("");
  };

  const wordCount = testimonial.trim().split(/\s+/).filter(Boolean).length;

  return (
    <div
      style={{ fontFamily: raleway.style.fontFamily }}
      className={`relative min-h-screen w-full bg-white flex items-center justify-center overflow-hidden`}
    >
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-120px] left-[-100px] w-[350px] h-[350px] bg-gradient-to-br from-[#155da9] to-[#c30e16] rounded-full blur-3xl opacity-60 animate-pulse-slow" />
        <div className="absolute bottom-[-160px] right-[-80px] w-[300px] h-[300px] bg-gradient-to-br from-[#c30e16] to-[#155da9] rounded-full blur-3xl opacity-50 animate-pulse-medium" />
        <div className="absolute top-[40%] left-[40%] w-[120px] h-[120px] bg-[#155da9] rounded-full blur-2xl opacity-30 animate-bounce-slow" />
        
        {/* Success State Floral Decorations */}
        {bgState === "success" && (
          <>
            <div className="absolute top-10 left-10 w-24 h-24 opacity-70">
              <svg viewBox="0 0 100 100" fill="#4ade80">
                <path d="M50 10 Q60 30 70 10 Q80 30 90 10 Q85 40 100 50 Q85 60 90 90 Q80 70 70 90 Q60 70 50 90 Q40 70 30 90 Q20 70 10 90 Q15 60 0 50 Q15 40 10 10 Q20 30 30 10 Q40 30 50 10" />
              </svg>
            </div>
            <div className="absolute bottom-10 right-10 w-24 h-24 opacity-70">
              <svg viewBox="0 0 100 100" fill="#4ade80">
                <path d="M50 10 Q60 30 70 10 Q80 30 90 10 Q85 40 100 50 Q85 60 90 90 Q80 70 70 90 Q60 70 50 90 Q40 70 30 90 Q20 70 10 90 Q15 60 0 50 Q15 40 10 10 Q20 30 30 10 Q40 30 50 10" />
              </svg>
            </div>
          </>
        )}
        
        {/* Medium State Floral Decorations */}
        {bgState === "medium" && (
          <>
            <div className="absolute top-20 right-20 w-20 h-20 opacity-70">
              <svg viewBox="0 0 100 100" fill="#facc15">
                <path d="M50 20 Q55 35 60 20 Q65 35 70 20 Q68 40 80 50 Q68 60 70 80 Q65 65 60 80 Q55 65 50 80 Q45 65 40 80 Q35 65 30 80 Q32 60 20 50 Q32 40 30 20 Q35 35 40 20 Q45 35 50 20" />
              </svg>
            </div>
            <div className="absolute bottom-20 left-20 w-20 h-20 opacity-70">
              <svg viewBox="0 0 100 100" fill="#facc15">
                <path d="M50 20 Q55 35 60 20 Q65 35 70 20 Q68 40 80 50 Q68 60 70 80 Q65 65 60 80 Q55 65 50 80 Q45 65 40 80 Q35 65 30 80 Q32 60 20 50 Q32 40 30 20 Q35 35 40 20 Q45 35 50 20" />
              </svg>
            </div>
          </>
        )}
        
        {/* Fail State Floral Decorations */}
        {bgState === "fail" && (
          <>
            <div className="absolute top-32 left-32 w-16 h-16 opacity-70">
              <svg viewBox="0 0 100 100" fill="#f87171">
                <path d="M50 25 Q53 35 56 25 Q59 35 62 25 Q61 40 70 50 Q61 60 62 75 Q59 65 56 75 Q53 65 50 75 Q47 65 44 75 Q41 65 38 75 Q39 60 30 50 Q39 40 38 25 Q41 35 44 25 Q47 35 50 25" />
              </svg>
            </div>
            <div className="absolute bottom-32 right-32 w-16 h-16 opacity-70">
              <svg viewBox="0 0 100 100" fill="#f87171">
                <path d="M50 25 Q53 35 56 25 Q59 35 62 25 Q61 40 70 50 Q61 60 62 75 Q59 65 56 75 Q53 65 50 75 Q47 65 44 75 Q41 65 38 75 Q39 60 30 50 Q39 40 38 25 Q41 35 44 25 Q47 35 50 25" />
              </svg>
            </div>
          </>
        )}
      </div>

      {showConfetti && (
        <div className="absolute inset-0 z-50 pointer-events-none overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className="absolute w-4 h-4"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 20}%`,
                animation: `fall ${Math.random() * 2 + 2}s linear ${Math.random()}s forwards`,
              }}
            >
              <svg viewBox="0 0 24 24" fill={["#155da9", "#c30e16"][i % 2]} className="w-4 h-4">
                <path d="M12 2L15 8H9L12 2ZM12 22L9 16H15L12 22ZM2 12L8 15V9L2 12ZM22 12L16 9V15L22 12Z" />
              </svg>
            </div>
          ))}
        </div>
      )}

      {/* Back Button */}
      <button
        onClick={() => window.history.back()}
        className="absolute top-6 left-4 z-50 bg-white/80 backdrop-blur text-gray-700 px-4 py-2 rounded-lg shadow hover:bg-white transition-all"
      >
        ← Back
      </button>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 py-10">
        <h1 className="text-4xl mt-24 font-bold text-center mb-20 text-gray-800">
          Visa Acceptance Prediction
        </h1>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className={`bg-white p-6 rounded-xl shadow-lg space-y-5 w-full max-w-md z-10 border-2 ${
              bgState === "success" ? "border-green-300" :
              bgState === "medium" ? "border-yellow-300" :
              bgState === "fail" ? "border-red-300" :
              "border-blue-300"
            } transition-all duration-500`}
          >
            {[{ label: "Reading Score (4-9)", name: "reading" },
              { label: "Writing Score (4-9)", name: "writing" },
              { label: "Speaking Score (4-9)", name: "speaking" },
              { label: "Listening Score (4-9)", name: "listening" },
              { label: "Gap Years", name: "gap" },
              { label: "Family Income (CAD)", name: "income" },
            ].map((field) => (
              <div key={field.name}>
                <label className="block mb-1 font-medium">{field.label}:</label>
                <input
                  type="number"
                  name={field.name}
                  value={formData[field.name as keyof typeof formData]}
                  onChange={handleChange}
                  placeholder={`Enter ${field.label.toLowerCase()}`}
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
            ))}

            <div>
              <label className="block mb-1 font-medium">Visa Type:</label>
              <select
                name="visa"
                value={formData.visa}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select visa type</option>
                <option value="student">Student</option>
                <option value="work">Work</option>
              </select>
            </div>

            <div>
              <label className="block mb-1 font-medium">IELTS Type:</label>
              <select
                name="ielts"
                value={formData.ielts}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select IELTS type</option>
                <option value="general">General</option>
                <option value="academic">Academic</option>
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold py-2 rounded-md hover:from-blue-700 hover:to-blue-900 transition-all shadow-md"
            >
              Predict Acceptance
            </button>
          </form>

          {/* Speedometer */}
          <div className="w-full max-w-md flex flex-col items-center justify-center p-6 min-h-[300px]">
            <h2 className="text-xl font-semibold mb-4 text-gray-700">Prediction Meter</h2>
            <svg width="250" height="150" viewBox="0 0 250 150">
              {/* Background arc */}
              <path
                d="M25 125 A100 100 0 0 1 225 125"
                fill="none"
                stroke="#e5e7eb"
                strokeWidth="20"
              />
              {/* Colored arc based on state */}
              <path
                d="M25 125 A100 100 0 0 1 225 125"
                fill="none"
                stroke={
                  bgState === "success" ? "#4ade80" :
                  bgState === "medium" ? "#facc15" :
                  bgState === "fail" ? "#f87171" :
                  "#3b82f6"
                }
                strokeWidth="20"
                strokeDasharray="314"
                strokeDashoffset={
                  prediction ? 314 - (314 * prediction / 100) : 314
                }
                className="transition-all duration-1000 ease-out"
              />
              <line
                ref={needleRef}
                x1="125"
                y1="125"
                x2="125"
                y2="40"
                stroke="red"
                strokeWidth="4"
              />
              <circle cx="125" cy="125" r="6" fill="black" />
            </svg>

            {prediction !== null && (
              <p className={`mt-4 text-lg font-semibold ${
                bgState === "success" ? "text-green-600" :
                bgState === "medium" ? "text-yellow-600" :
                bgState === "fail" ? "text-red-600" :
                "text-gray-700"
              }`}>
                Acceptance Chance: {Math.round(prediction)}%
              </p>
            )}
          </div>
        </div>

        {/* Feedback Section */}
        {user && (
          <div className="mt-16 text-center">
            <button
              onClick={() => setShowFeedback(true)}
              className="bg-[#155da9] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#124b8a] transition-colors"
            >
              <FaCommentAlt className="inline mr-2" />
              Share Your Feedback
            </button>
          </div>
        )}

        {/* Feedback Modal */}
        {showFeedback && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl p-6 max-w-md w-full relative">
              <button
                onClick={handleCloseFeedback}
                className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              >
                <MdClose size={24} />
              </button>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                  <FaStar className="text-blue-500 text-2xl" />
                </div>

                {!submitted ? (
                  <form onSubmit={handleSubmitFeedback} className="w-full">
                    <h2 className="text-2xl font-bold text-center mb-4">How was your experience?</h2>
                    <div className="flex justify-center mb-6">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <button
                          key={star}
                          type="button"
                          className="text-3xl mx-1 focus:outline-none"
                          onClick={() => setRating(star)}
                          onMouseEnter={() => setHoverRating(star)}
                          onMouseLeave={() => setHoverRating(0)}
                        >
                          <FaStar className={star <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-300"} />
                        </button>
                      ))}
                    </div>

                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your feedback (optional)
                      </label>
                      <textarea
                        rows={4}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        placeholder="Tell us about your experience..."
                        value={testimonial}
                        onChange={(e) => setTestimonial(e.target.value)}
                      />
                      <p className="text-xs text-gray-500 mt-1">{wordCount} words</p>
                    </div>

                    {error && (
                      <div className="mb-4 text-red-500 text-sm">{error}</div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-gray-400"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Feedback"}
                    </button>
                  </form>
                ) : (
                  <div className="text-center">
                    <div className="text-green-500 text-5xl mb-4">✓</div>
                    <h3 className="text-xl font-bold mb-2">Thank You!</h3>
                    <p className="text-gray-600 mb-6">Your feedback has been submitted successfully.</p>
                    <button
                      onClick={handleCloseFeedback}
                      className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
                    >
                      Close
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Animation Keyframes */}
      <style jsx>{`
        @keyframes fall {
          to {
            transform: translateY(100vh) rotate(360deg);
            opacity: 0;
          }
        }

        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 0.5; }
        }

        @keyframes pulse-medium {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.03); opacity: 0.4; }
        }

        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }

        .animate-pulse-medium {
          animation: pulse-medium 4s ease-in-out infinite;
        }

        .animate-bounce-slow {
          animation: bounce-slow 8s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}