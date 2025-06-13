// "use client";
// import Link from "next/link";
// import { FaFlag, FaCommentAlt, FaFileUpload } from "react-icons/fa";
// import { MdEmail } from "react-icons/md";
// import Image from "next/image";

// export default function Username() {
//   // Sample user data
//   const user = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     nationality: "Canadian"
//   };

//   return (
//     <div className="relative w-full pb-20 flex items-center justify-center   overflow-hidden">
//       {/* Blurry Background Effect */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-32 -left-20 w-96 h-96 bg-gradient-to-br from-[#155da9] to-[#c30e16] rounded-full blur-3xl opacity-50"></div>
//         <div className="absolute -bottom-40 right-0 w-80 h-80 bg-gradient-to-br from-[#c30e16] to-[#155da9] rounded-full blur-3xl opacity-50"></div>
//       </div>

//       {/* Card Container */}
//       <div className="relative   p-3 bg-white rounded-xl shadow-lg mt-5  w-full max-w-md z-10">
//         {/* User Profile Section */}
//         <div className="flex flex-col items-center gap-6 w-full">
//           {/* User Icon */}
//           <div className="relative w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
//             <Image
//               src="/signinicon.png"
//               alt="User profile"
//               width={96}
//               height={96}
//               className="object-cover"
//               priority
//             />
//           </div>

//           {/* User Details */}
//           <h1 className="text-2xl font-semibold text-gray-800 text-center">
//             {user.name}
//           </h1>

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
//           <Link 
//             href="/form" 
//             className="border text-center border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#155da9] hover:text-white transition duration-300 transform hover:-translate-y-1"
//           >
//             Submit Form
//           </Link>
          
//           <Link 
//             href="/uploaddocuments" 
//             className="border text-center flex items-center justify-center border-[#155da9] gap-4 text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#155da9] hover:text-white transition duration-300 transform hover:-translate-y-1"
//           >
//             <FaFileUpload />
//             <span>Submit Documents</span>
//           </Link>
          
//           <Link 
//             href="https://www.google.com/maps/place/SEAVIEW+IMMIGRATION+SERVICES+LTD./@62.6573279,-95.989235,3z/data=!4m8!3m7!1s0x5485db7e7b9362af:0x452379f030e0fecd!8m2!3d62.6573279!4d-95.989235!9m1!1b1!16s%2Fg%2F11t7jjysgm?entry=ttu&g_ep=EgoyMDI1MDMyNS4xIKXMDSoASAFQAw%3D%3D"
//             className="border text-center flex items-center justify-center border-[#155da9] gap-4 text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#8d8d8d] hover:text-white transition duration-300 transform hover:-translate-y-1"
//           >
//             <FaCommentAlt />
//             <span>Give Feedback</span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// } 


// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import { FaFlag, FaCommentAlt, FaFileUpload, FaStar } from "react-icons/fa";
// import { MdEmail, MdClose } from "react-icons/md";
// import Image from "next/image";

// export default function Username() {
//   // Sample user data
//   const user = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     nationality: "Canadian"
//   };

//   // State for feedback popup
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [testimonial, setTestimonial] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const maxWords = 150;

//   const handleSubmitFeedback = (e:any) => {
//     e.preventDefault();
//     // Here you would typically send the data to your backend
//     console.log({ rating, testimonial });
//     setSubmitted(true);
//     setTimeout(() => {
//       setShowFeedback(false);
//       setSubmitted(false);
//       setRating(0);
//       setTestimonial("");
//     }, 2000);
//   };

//   const wordCount = testimonial.split(/\s+/).filter(word => word.length > 0).length;

//   return (
//     <div className="relative w-full pb-20 flex items-center justify-center overflow-hidden min-h-screen">
//       {/* Blurry Background Effect */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-32 -left-20 w-96 h-96 bg-gradient-to-br from-[#155da9] to-[#c30e16] rounded-full blur-3xl opacity-50"></div>
//         <div className="absolute -bottom-40 right-0 w-80 h-80 bg-gradient-to-br from-[#c30e16] to-[#155da9] rounded-full blur-3xl opacity-50"></div>
//       </div>

//       {/* Card Container */}
//       <div className={`relative p-3 bg-white rounded-xl shadow-lg mt-5 w-full max-w-md z-10 ${showFeedback ? 'blur-sm' : ''}`}>
//         {/* User Profile Section */}
//         <div className="flex flex-col items-center gap-6 w-full">
//           {/* User Icon */}
//           <div className="relative w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
//             <Image
//               src="/signinicon.png"
//               alt="User profile"
//               width={96}
//               height={96}
//               className="object-cover"
//               priority
//             />
//           </div>

//           {/* User Details */}
//           <h1 className="text-2xl font-semibold text-gray-800 text-center">
//             {user.name}
//           </h1>

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
//           <Link 
//             href="/form" 
//             className="border text-center border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#155da9] hover:text-white transition duration-300 transform hover:-translate-y-1"
//           >
//             Submit Form
//           </Link>
          
//           <Link 
//             href="/uploaddocuments" 
//             className="border text-center flex items-center justify-center border-[#155da9] gap-4 text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#155da9] hover:text-white transition duration-300 transform hover:-translate-y-1"
//           >
//             <FaFileUpload />
//             <span>Submit Documents</span>
//           </Link>
          
//           <button
//             onClick={() => setShowFeedback(true)}
//             className="border text-center flex items-center justify-center border-[#155da9] gap-4 text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#8d8d8d] hover:text-white transition duration-300 transform hover:-translate-y-1"
//           >
//             <FaCommentAlt />
//             <span>Give Feedback</span>
//           </button>
//         </div>
//       </div>

//       {/* Feedback Popup */}
//       {showFeedback && (
//         <div className="fixed inset-0 flex items-center justify-center z-20 p-4">
//           <div 
//             className="absolute inset-0 bg-black bg-opacity-50"
//             onClick={() => setShowFeedback(false)}
//           ></div>
          
//           <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 z-30">
//             <button 
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//               onClick={() => setShowFeedback(false)}
//             >
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
//                       <FaStar 
//                         className={star <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-300"} 
//                       />
//                     </button>
//                   ))}
//                 </div>
                
//                 <div className="mb-4">
//                   <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Testimonial {wordCount > maxWords && (
//                       <span className="text-red-500">({wordCount - maxWords} over limit)</span>
//                     )}
//                   </label>
//                   <textarea
//                     id="testimonial"
//                     rows={5}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#155da9]"
//                     placeholder="Share your experience (max 150 words)"
//                     value={testimonial}
//                     onChange={(e) => setTestimonial(e.target.value)}
//                     maxLength={700} // Approximate limit for 150 words
//                   />
//                   <p className="text-xs text-gray-500 mt-1">
//                     {wordCount} / {maxWords} words
//                   </p>
//                 </div>
                
//                 <button
//                   type="submit"
//                   disabled={rating === 0 || wordCount > maxWords}
//                   className={`w-full py-3 px-4 rounded-full font-medium text-white transition duration-300 ${
//                     rating === 0 || wordCount > maxWords
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-[#155da9] hover:bg-[#124b8a]"
//                   }`}
//                 >
//                   Submit Feedback
//                 </button>
//               </form>
//             ) : (
//               <div className="text-center py-8">
//                 <div className="text-green-500 text-5xl mb-4">✓</div>
//                 <h3 className="text-xl font-bold mb-2">Thank You!</h3>
//                 <p className="text-gray-600">Your feedback has been submitted successfully.</p>
//               </div>
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
// import { FaFlag, FaCommentAlt, FaFileUpload, FaStar } from "react-icons/fa";
// import { MdEmail, MdClose } from "react-icons/md";
// import Image from "next/image";

// export default function Username() {
//   // Sample user data
//   const user = {
//     name: "John Doe",
//     email: "john.doe@example.com",
//     nationality: "Canadian"
//   };

//   // State for feedback popup
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [testimonial, setTestimonial] = useState("");
//   const [submitted, setSubmitted] = useState(false);

//   const maxWords = 100; // Changed from 150 to 100

//   const handleSubmitFeedback = (e: any) => {
//     e.preventDefault();
//     // Here you would typically send the data to your backend
//     console.log({ rating, testimonial });
//     setSubmitted(true);
//     setTimeout(() => {
//       setShowFeedback(false);
//       setSubmitted(false);
//       setRating(0);
//       setTestimonial("");
//     }, 2000);
//   };

//   const wordCount = testimonial.split(/\s+/).filter(word => word.length > 0).length;

//   return (
//     <div className="relative w-full pb-20 flex items-center justify-center overflow-hidden min-h-screen">
//       {/* Blurry Background Effect */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-32 -left-20 w-96 h-96 bg-gradient-to-br from-[#155da9] to-[#c30e16] rounded-full blur-3xl opacity-50"></div>
//         <div className="absolute -bottom-40 right-0 w-80 h-80 bg-gradient-to-br from-[#c30e16] to-[#155da9] rounded-full blur-3xl opacity-50"></div>
//       </div>

//       {/* Card Container */}
//       <div className={`relative p-3 bg-white rounded-xl shadow-lg mt-5 w-full max-w-md z-10 ${showFeedback ? 'blur-sm' : ''}`}>
//         {/* User Profile Section */}
//         <div className="flex flex-col items-center gap-6 w-full">
//           {/* User Icon */}
//           <div className="relative w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
//             <Image
//               src="/signinicon.png"
//               alt="User profile"
//               width={96}
//               height={96}
//               className="object-cover"
//               priority
//             />
//           </div>

//           {/* User Details */}
//           <h1 className="text-2xl font-semibold text-gray-800 text-center">
//             {user.name}
//           </h1>

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
//           <Link 
//             href="/form" 
//             className="border text-center border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#155da9] hover:text-white transition duration-300 transform hover:-translate-y-1"
//           >
//             Submit Form
//           </Link>
          
//           <Link 
//             href="/uploaddocuments" 
//             className="border text-center flex items-center justify-center border-[#155da9] gap-4 text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#155da9] hover:text-white transition duration-300 transform hover:-translate-y-1"
//           >
//             <FaFileUpload />
//             <span>Submit Documents</span>
//           </Link>
          
//           <button
//             onClick={() => setShowFeedback(true)}
//             className="border text-center flex items-center justify-center border-[#155da9] gap-4 text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#8d8d8d] hover:text-white transition duration-300 transform hover:-translate-y-1"
//           >
//             <FaCommentAlt />
//             <span>Give Feedback</span>
//           </button>
//         </div>
//       </div>

//       {/* Feedback Popup */}
//       {/* {showFeedback && (
//         <div className="fixed inset-0 flex items-center justify-center z-20 p-4">
//           <div 
//             className="absolute inset-0 bg-black bg-opacity-50"
//             onClick={() => setShowFeedback(false)}
//           ></div>
          
//           <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 z-30">
//             <button 
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//               onClick={() => setShowFeedback(false)}
//             >
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
//                       <FaStar 
//                         className={star <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-300"} 
//                       />
//                     </button>
//                   ))}
//                 </div>
                
//                 <div className="mb-4">
//                   <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
//                     Your Testimonial {wordCount > maxWords && (
//                       <span className="text-red-500">({wordCount - maxWords} over limit)</span>
//                     )}
//                   </label>
//                   <textarea
//                     id="testimonial"
//                     rows={5}
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#155da9]"
//                     placeholder="Share your experience (max 100 words)" // Updated placeholder text
//                     value={testimonial}
//                     onChange={(e) => setTestimonial(e.target.value)}
//                     maxLength={500} // Reduced from 700 to approximate 100 words
//                   />
//                   <p className="text-xs text-gray-500 mt-1">
//                     {wordCount} / {maxWords} words
//                   </p>
//                 </div>
                
//                 <button
//                   type="submit"
//                   disabled={rating === 0 || wordCount > maxWords}
//                   className={`w-full py-3 px-4 rounded-full font-medium text-white transition duration-300 ${
//                     rating === 0 || wordCount > maxWords
//                       ? "bg-gray-400 cursor-not-allowed"
//                       : "bg-[#155da9] hover:bg-[#124b8a]"
//                   }`}
//                 >
//                   Submit Feedback
//                 </button>
//               </form>
//             ) : (
//               <div className="text-center py-8">
//                 <div className="text-green-500 text-5xl mb-4">✓</div>
//                 <h3 className="text-xl font-bold mb-2">Thank You!</h3>
//                 <p className="text-gray-600">Your feedback has been submitted successfully.</p>
//               </div>
//             )}
//           </div>
//         </div>
//       )} */} 
//       {showFeedback && (
//         <div className="fixed inset-0 flex items-center justify-center z-20 p-4">
//           <div 
//             className="absolute inset-0 bg-black bg-opacity-50"
//             onClick={handleCloseFeedback}
//           ></div>
          
//           <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 z-30">
//             <button 
//               className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
//               onClick={handleCloseFeedback}
//             >
//               <MdClose size={24} />
//             </button>
            
//             {!submitted ? (
//               <form onSubmit={handleSubmitFeedback}>
//                 {/* ... (your existing feedback form) ... */}
//               </form>
//             ) : (
//               <ThankYouMessage 
//                 rating={rating} 
//                 onClose={handleCloseFeedback} 
//               />
//             )} 
//             <div>
//     </div>
//   );
// }



"use client";
import { useState } from "react";
import Link from "next/link";
import { FaFlag, FaCommentAlt, FaFileUpload, FaStar } from "react-icons/fa";
import { MdEmail, MdClose } from "react-icons/md";
import Image from "next/image";
import ThankYouMessage from "./ThankYouMessage"; // Importing the ThankYouMessage component

export default function Username() {
  // Sample user data
  const user = {
    name: "John Doe",
    email: "john.doe@example.com",
    nationality: "Canadian",
  };

  // State for feedback popup
  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [testimonial, setTestimonial] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const maxWords = 100;

  const handleSubmitFeedback = (e: any) => {
    e.preventDefault();
    console.log({ rating, testimonial });
    setSubmitted(true);
  };

  const handleCloseFeedback = () => {
    setShowFeedback(false);
    setSubmitted(false);
    setRating(0);
    setTestimonial("");
  };

  const wordCount = testimonial.split(/\s+/).filter((word) => word.length > 0).length;

  return (
    <div className="relative w-full pb-20 flex items-center justify-center overflow-hidden min-h-screen">
      {/* Blurry Background Effect */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-gradient-to-br from-[#155da9] to-[#c30e16] rounded-full blur-3xl opacity-50"></div>
        <div className="absolute -bottom-40 right-0 w-80 h-80 bg-gradient-to-br from-[#c30e16] to-[#155da9] rounded-full blur-3xl opacity-50"></div>
      </div>

      {/* Card Container */}
      <div className={`relative p-3 bg-white rounded-xl shadow-lg mt-5 w-full max-w-md z-10 ${showFeedback ? "blur-sm" : ""}`}>
        {/* User Profile Section */}
        <div className="flex flex-col items-center gap-6 w-full">
          {/* User Icon */}
          <div className="relative w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center overflow-hidden">
            <Image src="/signinicon.png" alt="User profile" width={96} height={96} className="object-cover" priority />
          </div>

          {/* User Details */}
          <h1 className="text-2xl font-semibold text-gray-800 text-center">{user.name}</h1>

          <div className="flex flex-col gap-2 text-gray-600 text-center">
            <div className="flex items-center justify-center">
              <MdEmail className="mr-2 text-lg" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center justify-center">
              <FaFlag className="mr-2 text-lg" />
              <span>{user.nationality}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-200 w-full my-6"></div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-4 w-full">
          <Link href="/form" className="border text-center border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#155da9] hover:text-white transition duration-300 transform hover:-translate-y-1">
            Submit Form
          </Link>

          <Link href="/uploaddocuments" className="border text-center flex items-center justify-center border-[#155da9] gap-4 text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#155da9] hover:text-white transition duration-300 transform hover:-translate-y-1">
            <FaFileUpload />
            <span>Submit Documents</span>
          </Link>

          <button onClick={() => setShowFeedback(true)} className="border text-center flex items-center justify-center border-[#155da9] gap-4 text-[#155da9] px-6 py-3 rounded-full font-normal hover:bg-[#8d8d8d] hover:text-white transition duration-300 transform hover:-translate-y-1">
            <FaCommentAlt />
            <span>Give Feedback</span>
          </button>
        </div>
      </div>

      {/* Feedback Popup */}
      {showFeedback && (
        <div className="fixed inset-0 flex items-center justify-center z-20 p-4">
          <div className="absolute inset-0 bg-black bg-opacity-50" onClick={handleCloseFeedback}></div>

          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 z-30">
            <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={handleCloseFeedback}>
              <MdClose size={24} />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmitFeedback}>
                <h2 className="text-2xl font-bold text-center mb-6">Share Your Feedback</h2>

                <div className="flex justify-center mb-6">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" className="text-3xl mx-1 focus:outline-none" onClick={() => setRating(star)} onMouseEnter={() => setHoverRating(star)} onMouseLeave={() => setHoverRating(0)}>
                      <FaStar className={star <= (hoverRating || rating) ? "text-yellow-400" : "text-gray-300"} />
                    </button>
                  ))}
                </div>

                <div className="mb-4">
                  <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Testimonial {wordCount > maxWords && <span className="text-red-500">({wordCount - maxWords} over limit)</span>}
                  </label>
                  <textarea id="testimonial" rows={5} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#155da9]" placeholder="Share your experience (max 100 words)" value={testimonial} onChange={(e) => setTestimonial(e.target.value)} maxLength={500} />
                  <p className="text-xs text-gray-500 mt-1">{wordCount} / {maxWords} words</p>
                </div>

                <button type="submit" disabled={rating === 0 || wordCount > maxWords} className={`w-full py-3 px-4 rounded-full font-medium text-white transition duration-300 ${rating === 0 || wordCount > maxWords ? "bg-gray-400 cursor-not-allowed" : "bg-[#155da9] hover:bg-[#124b8a]"}`}>
                  Submit Feedback
                </button>
              </form>
            ) : (
              <ThankYouMessage rating={rating} onClose={handleCloseFeedback} userId={""} />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
