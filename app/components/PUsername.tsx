
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

// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { useRouter } from "next/navigation";
// import { useDispatch, useSelector } from "react-redux";
// import { MdClose, MdEmail } from "react-icons/md";
// import { FaFlag, FaCommentAlt, FaFileUpload, FaStar } from "react-icons/fa";
// import Image from "next/image";
// import ThankYouMessage from "./ThankYouMessage";
// import { clearAuthSuccess, selectUser } from "@/store/authSlice";

// export default function Username() {
//   const dispatch = useDispatch();
//   const router = useRouter();

//   const userDetails = useSelector((state: any) => state.auth.user);
//   const user = {
//     name: userDetails?.name || "John Doe",
//     email: userDetails?.email || "abc@gmail.com",
//     nationality: userDetails?.nationality || "Indian",
//   };

//   const [showFeedback, setShowFeedback] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [testimonial, setTestimonial] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [logoutError, setLogoutError] = useState<string | null>(null);

//   const maxWords = 100;

//   const handleLogout = async () => {
//     setLogoutError(null);
//     setIsLoggingOut(true);
//     try {
//       const response = await fetch("/api/users/logout", { method: "POST" });

//       if (!response.ok) throw new Error("Logout failed");

//       dispatch(clearAuthSuccess());
//       router.push("/home");
//       router.refresh();
//     } catch (err) {
//       setLogoutError(err instanceof Error ? err.message : "Logout failed");
//     } finally {
//       setIsLoggingOut(false);
//     }
//   };

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

//         <hr className="my-6 border-gray-200" />

//         <div className="space-y-4">
//           <Link href="/form" className="block text-center border border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-medium hover:bg-[#155da9] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
//             Submit Form
//           </Link>

//           <Link href="/uploaddocuments" className="flex items-center justify-center gap-3 border border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-medium hover:bg-[#155da9] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
//             <FaFileUpload />
//             <span>Submit Documents</span>
//           </Link>

//           <button onClick={() => setShowFeedback(true)} className="flex items-center justify-center gap-3 border border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-medium hover:bg-[#155da9] hover:text-white transition-all duration-300 transform hover:-translate-y-1">
//             <FaCommentAlt />
//             <span>Give Feedback</span>
//           </button>

//           <button
//             onClick={handleLogout}
//             disabled={isLoggingOut}
//             className={`flex items-center justify-center gap-3 border border-[#155da9] text-[#155da9] px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:-translate-y-1 ${
//               isLoggingOut ? "opacity-50 cursor-not-allowed" : "hover:bg-[#155da9] hover:text-white"
//             }`}
//           >
//             {isLoggingOut ? "Logging out..." : "Logout"}
//           </button>

//           {logoutError && <p className="text-sm text-red-600 text-center">{logoutError}</p>}
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

// <button
//   type="submit"
//   disabled={rating === 0 || wordCount > maxWords}
//   className={`w-full py-3 px-4 rounded-full font-medium text-white transition duration-300 ${rating === 0 || wordCount > maxWords ? "bg-gray-400 cursor-not-allowed" : "bg-[#155da9] hover:bg-[#124b8a]"}`}
// >
//   Submit Feedback
// </button>
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

// import { useEffect, useState } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { useDispatch, useSelector } from "react-redux";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import { MdEmail, MdClose } from "react-icons/md";
// import { FaFlag, FaFileUpload, FaClipboardCheck, FaCommentAlt, FaStar } from "react-icons/fa";
// import { clearAuthSuccess, selectUser } from "@/store/authSlice";
// import ThankYouMessage from "./ThankYouMessage";

// interface TrackerData {
//   signUp: boolean;
//   submitForm: boolean;
//   fillingAndSubmission: boolean;
//   result: boolean;
// }

// interface ApplicationTracker {
//   applicationId: string;
//   tracker: TrackerData;
// }

// export default function Username() {
//   const dispatch = useDispatch();
//   const router = useRouter();
//   const user = useSelector(selectUser);
//   const userId = user?._id || ""; // ✅ ensure userId is always a string

//   const [applications, setApplications] = useState<ApplicationTracker[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [isLoggingOut, setIsLoggingOut] = useState(false);
//   const [logoutError, setLogoutError] = useState<string | null>(null);

//   // Feedback state
//   const [showFeedback, setShowFeedback] = useState(false);
//   const [rating, setRating] = useState(0);
//   const [hoverRating, setHoverRating] = useState(0);
//   const [testimonial, setTestimonial] = useState("");
//   const [submitted, setSubmitted] = useState(false);
//   const maxWords = 100;

//   const wordCount = testimonial.trim().split(/\s+/).length;

//   useEffect(() => {
//     const fetchApplications = async () => {
//       if (!userId) return;

//       try {
//         const res = await axios.get(`/api/tracker/${userId}`);
//         const appList = res.data?.applications || [];

//         const trackerData = await Promise.all(
//           appList.map(async (app: any) => {
//             try {
//               const trackerRes = await axios.get(`/api/tracker/${userId}/${app.applicationId}`);
//               const raw = trackerRes.data?.tracker;

//               const mappedTracker: TrackerData = {
//                 signUp: raw.signup || false,
//                 submitForm: raw.formFilling || false,
//                 fillingAndSubmission: raw.formSubmission || false,
//                 result: raw.submissionResult || false,
//               };

//               return { applicationId: app.applicationId, tracker: mappedTracker };
//             } catch (err) {
//               return null;
//             }
//           })
//         );

//         setApplications(trackerData.filter(Boolean) as ApplicationTracker[]);
//       } catch (error) {
//         console.error("Failed to fetch applications", error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchApplications();
//   }, [userId]);

//   const handleLogout = async () => {
//     try {
//       setIsLoggingOut(true);
//       const res = await fetch("/api/users/logout", { method: "POST" });
//       if (!res.ok) throw new Error("Logout failed");

//       dispatch(clearAuthSuccess());
//       router.push("/home");
//       router.refresh();
//     } catch (err) {
//       setLogoutError("Logout failed. Try again.");
//     } finally {
//       setIsLoggingOut(false);
//     }
//   };

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

//   return (
//     <div className="w-full min-h-screen bg-gray-50 py-10 px-4 flex flex-col items-center">
//       {/* Profile Card */}
//       <div className={`w-full max-w-md bg-white shadow-lg rounded-2xl p-6 mb-10 ${showFeedback ? "blur-sm" : ""}`}>
//         <div className="flex flex-col items-center text-center">
//           <Image src="/signinicon.png" alt="User" width={96} height={96} className="rounded-full object-cover" />
//           <h2 className="mt-4 text-2xl font-bold text-[#155da9]">{user?.name || "User"}</h2>
//           <p className="text-sm text-gray-600 flex items-center mt-1">
//             <MdEmail className="mr-2" /> {user?.email}
//           </p>
//         </div>

//         <div className="mt-6 space-y-3">
//           <Link
//             href="/form"
//             className="block w-full text-center bg-[#155da9] text-white py-2 rounded-full hover:bg-[#124b8a] transition font-medium"
//           >
//             Start New Application
//           </Link>

//           <button
//             onClick={() => setShowFeedback(true)}
//             className="w-full flex items-center justify-center gap-2 text-[#155da9] border border-[#155da9] py-2 rounded-full hover:bg-[#155da9] hover:text-white transition font-medium"
//           >
//             <FaCommentAlt /> Give Feedback
//           </button>

//           <button
//             onClick={handleLogout}
//             className={`w-full text-center py-2 border border-[#c30e16] rounded-full text-[#c30e16] hover:bg-[#c30e16] hover:text-white transition font-medium ${
//               isLoggingOut ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//             disabled={isLoggingOut}
//           >
//             {isLoggingOut ? "Logging Out..." : "Logout"}
//           </button>

//           {logoutError && <p className="text-center text-sm text-red-500">{logoutError}</p>}
//         </div>
//       </div>

//       {/* Applications Section */}
//       <div className="w-full max-w-3xl">
//         <h3 className="text-xl font-semibold mb-4 text-[#155da9]">Your Applications</h3>
//         {loading ? (
//           <div className="flex justify-center items-center h-32">
//             <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full" />
//           </div>
//         ) : applications.length === 0 ? (
//           <p className="text-center text-gray-500">You have not submitted any applications yet.</p>
//         ) : (
//           <div className="space-y-5">
//             {applications.map((app) => (
//               <div key={app.applicationId} className="bg-white border border-gray-200 rounded-xl p-5 shadow-sm">
//                 <p className="text-gray-700 font-medium mb-2">
//                   📄 Application ID: <span className="text-[#c30e16]">{app.applicationId}</span>
//                 </p>
//                 <div className="flex gap-3 mt-3">
//                   {/* <Link
//                     href={`/form/view/${app.applicationId}`}
//                     className="flex items-center gap-2 px-4 py-2 bg-[#155da9] text-white rounded-full hover:bg-[#124b8a] text-sm"
//                   >
//                     <FaClipboardCheck /> View Form
//                   </Link> */}
//                                 <Link
//                 href={`/profile/viewfrom/${userId}/${app.applicationId}`}
//                 className="flex items-center gap-2 px-4 py-2 bg-[#155da9] text-white rounded-full hover:bg-[#124b8a] text-sm"
//               >
//                 <FaClipboardCheck /> View Form
//               </Link>
//                   <Link
//                     href={`/uploaddocuments/${app.applicationId}`}
//                     className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 text-sm"
//                   >
//                     <FaFileUpload /> Upload Documents
//                   </Link>
//                 </div>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Feedback Modal */}
//       {showFeedback && (
//         <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
//           <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 z-50">
//             <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={handleCloseFeedback}>
//               <MdClose size={24} />
//             </button>

//             {!submitted ? (
//               <form onSubmit={handleSubmitFeedback}>
//                 <h2 className="text-2xl font-bold text-center mb-6 text-[#155da9]">Share Your Feedback</h2>

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
//               <ThankYouMessage rating={rating} onClose={handleCloseFeedback} userId={userId} />
//             )}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }



"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import axios from "axios";
import { MdEmail, MdClose } from "react-icons/md";
import {
  FaFileUpload,
  FaClipboardCheck,
  FaCommentAlt,
  FaStar,
} from "react-icons/fa";
import {
  clearAuthStart,
  clearAuthSuccess,
  selectUser,
} from "@/store/authSlice";
import ThankYouMessage from "./ThankYouMessage";

interface TrackerData {
  signUp: boolean;
  submitForm: boolean;
  fillingAndSubmission: boolean;
  result: boolean;
}

interface ApplicationTracker {
  applicationId: string;
  tracker: TrackerData;
  hasDocuments?: boolean; // 👈 new field
}

export default function Username() {
  const dispatch = useDispatch();
  const router = useRouter();
  const user = useSelector(selectUser);
  const userId = user?._id || "";

  const [applications, setApplications] = useState<ApplicationTracker[]>([]);
  const [loading, setLoading] = useState(true);
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const [logoutError, setLogoutError] = useState<string | null>(null);

  const [showFeedback, setShowFeedback] = useState(false);
  const [rating, setRating] = useState(0);
  const [hoverRating, setHoverRating] = useState(0);
  const [testimonial, setTestimonial] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const maxWords = 100;
  const wordCount = testimonial.trim().split(/\s+/).length;

  useEffect(() => {
    const fetchApplications = async () => {
      if (!userId) return;

      try {
        const res = await axios.get(`/api/tracker/${userId}`);
        const appList = res.data?.applications || [];

        const trackerData = await Promise.all(
          appList.map(async (app: any) => {
            try {
              const trackerRes = await axios.get(
                `/api/tracker/${userId}/${app.applicationId}`
              );
              const raw = trackerRes.data?.tracker;

              // ✅ check if documents exist (using your route)
              const docsRes = await axios.get(
                `/api/documents/upload?applicationId=${app.applicationId}`
              );
              const hasDocuments = docsRes.data?.documents?.length > 0;

              const mappedTracker: TrackerData = {
                signUp: raw.signup || false,
                submitForm: raw.formFilling || false,
                fillingAndSubmission: raw.formSubmission || false,
                result: raw.submissionResult || false,
              };
              return {
                applicationId: app.applicationId,
                tracker: mappedTracker,
                hasDocuments,
              };
            } catch (err) {
              return null;
            }
          })
        );

        setApplications(trackerData.filter(Boolean) as ApplicationTracker[]);
      } catch (error) {
        console.error("Failed to fetch applications", error);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [userId]);

  const handleLogout = async () => {
    dispatch(clearAuthStart()); // this is the change
    try {
      setIsLoggingOut(true);
      const res = await fetch("/api/users/logout", { method: "POST" });
      if (!res.ok) throw new Error("Logout failed");

      dispatch(clearAuthSuccess());
      router.push("/home");
      router.refresh();
    } catch (err) {
      setLogoutError("Logout failed. Try again.");
    } finally {
      setIsLoggingOut(false);
    }
  };

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

  return (
    <div className="min-h-screen bg-white flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="bg-white w-full lg:w-80 p-6  flex flex-col items-center">
        <Image
          src="/signinicon.png"
          alt="User"
          width={100}
          height={100}
          className="rounded-full object-cover mb-4"
        />
        <h2 className="text-xl font-bold text-[#155da9] mb-1">
          {user?.name || "User"}
        </h2>
        <p className="text-sm text-gray-600 flex items-center mb-6">
          <MdEmail className="mr-2" /> {user?.email}
        </p>

        <Link
          href="/form"
          className="w-full text-center bg-[#155da9] text-white py-2 rounded-full hover:bg-[#124b8a] transition font-medium mb-3"
        >
          Start New Application
        </Link>

        <button
          onClick={() => setShowFeedback(true)}
          className="w-full flex items-center justify-center gap-2 text-[#155da9] border border-[#155da9] py-2 rounded-full hover:bg-[#155da9] hover:text-white transition font-medium mb-3"
        >
          <FaCommentAlt /> Give Feedback
        </button>

        <button
          onClick={handleLogout}
          className={`w-full text-center py-2 border border-[#c30e16] rounded-full text-[#c30e16] hover:bg-[#c30e16] hover:text-white transition font-medium ${
            isLoggingOut ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isLoggingOut}
        >
          {isLoggingOut ? "Logging Out..." : "Logout"}
        </button>

        {logoutError && (
          <p className="text-center text-sm text-red-500 mt-2">{logoutError}</p>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <h3 className="text-xl font-semibold mb-4 text-[#155da9]">
          Your Applications
        </h3>

        {loading ? (
          <div className="flex justify-center items-center h-32">
            <div className="animate-spin h-8 w-8 border-4 border-blue-500 border-t-transparent rounded-full" />
          </div>
        ) : applications.length === 0 ? (
          <p className="text-center text-gray-500">
            You have not submitted any applications yet.
          </p>
        ) : (
          <div className="space-y-5">
            {applications.map((app) => (
              <div
                key={app.applicationId}
                className="bg-white border border-gray-200 rounded-xl p-5 shadow-lg shadow-[#00000036] transition-shadow duration-500"
              >
                <p className="text-gray-700 font-medium mb-2">
                  📄 Application ID:{" "}
                  <span className="text-[#c30e16]">{app.applicationId}</span>
                </p>
                <div className="flex gap-3 mt-3">
                  <Link
                    href={`/viewform/${app.applicationId}`}
                    className="flex items-center gap-2 px-4 py-2 bg-[#155da9] text-white rounded-full hover:bg-[#124b8a] text-sm"
                  >
                    <FaClipboardCheck /> View Form
                  </Link>
                  <Link
                    href={`/uploaddocuments/${app.applicationId}`}
                    className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 text-sm"
                  >
                    <FaFileUpload /> Upload Documents
                  </Link>
                  {app.hasDocuments && (
                    <Link
                      href={`/viewdocuments/${app.applicationId}`}
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 text-sm"
                    >
                      📂 View Documents
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Feedback Modal */}
      {showFeedback && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
          <div className="relative bg-white rounded-xl shadow-xl w-full max-w-md p-6 z-50">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
              onClick={handleCloseFeedback}
            >
              <MdClose size={24} />
            </button>

            {!submitted ? (
              <form onSubmit={handleSubmitFeedback}>
                <h2 className="text-2xl font-bold text-center mb-6 text-[#155da9]">
                  Share Your Feedback
                </h2>

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
                      <FaStar
                        className={
                          star <= (hoverRating || rating)
                            ? "text-yellow-400"
                            : "text-gray-300"
                        }
                      />
                    </button>
                  ))}
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="testimonial"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Your Testimonial{" "}
                    {wordCount > maxWords && (
                      <span className="text-red-500">
                        ({wordCount - maxWords} over limit)
                      </span>
                    )}
                  </label>
                  <textarea
                    id="testimonial"
                    rows={5}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#155da9]"
                    placeholder="Share your experience (max 100 words)"
                    value={testimonial}
                    onChange={(e) => setTestimonial(e.target.value)}
                    maxLength={500}
                  />
                  <p className="text-xs text-gray-500 mt-1">
                    {wordCount} / {maxWords} words
                  </p>
                </div>

                <button
                  type="submit"
                  disabled={rating === 0 || wordCount > maxWords}
                  className={`w-full py-3 px-4 rounded-full font-medium text-white transition duration-300 ${
                    rating === 0 || wordCount > maxWords
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-[#155da9] hover:bg-[#124b8a]"
                  }`}
                >
                  Submit Feedback
                </button>
              </form>
            ) : (
              <ThankYouMessage
                rating={rating}
                onClose={handleCloseFeedback}
                userId={userId}
              />
            )}
          </div>
        </div>
      )}
    </div>
  );
}
