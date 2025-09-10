// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar2 from "@/app/components/Navbar2";

// interface DocumentData {
//   _id: string;
//   userId: string;
//   applicationId: string;
//   passport?: { url: string };
//   marksheets?: { url: string; description: string }[];
//   countryVisa?: { url: string; description: string };
//   nationalId?: string;
//   previousWork?: { url: string; description: string }[];
//   birthCertificate?: { url: string; description: string };
//   previousRefusals?: { url: string }[];
// }

// const ViewDocumentsPage = () => {
//   const params = useParams();
//   const applicationId = params.id as string;

//   const [loading, setLoading] = useState(true);
//   const [docs, setDocs] = useState<DocumentData | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchDocs = async () => {
//       try {
//         const res = await axios.get(`/api/documents/upload?applicationId=${applicationId}`);
//         if (res.data?.documents?.length > 0) {
//           setDocs(res.data.documents[0]); // ✅ only one document per applicationId
//         } else {
//           setError("No documents found for this application.");
//         }
//       } catch (err) {
//         setError("Failed to fetch documents.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (applicationId) fetchDocs();
//   }, [applicationId]);

//   if (loading) {
//     return <p className="text-center mt-20 text-lg text-gray-600">Loading documents...</p>;
//   }

//   if (error) {
//     return (
//       <div className="max-w-3xl mx-auto pt-28 text-center text-red-600">
//         <p>{error}</p>
//       </div>
//     );
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       <Navbar2 />
//       <div className="pt-[110px]">
//         <h1 className="text-4xl text-[#155da9] font-normal mb-8">Uploaded Documents</h1>

//         {docs && (
//           <div className="space-y-8">
//             {/* Passport */}
//             {docs.passport?.url && (
//               <div>
//                 <h2 className="text-xl font-semibold text-[#155da9]">Passport</h2>
//                 <a href={docs.passport.url} target="_blank" className="text-blue-600 underline">
//                   View Passport
//                 </a>
//               </div>
//             )}

//             {/* National ID */}
//             {docs.nationalId && (
//               <div>
//                 <h2 className="text-xl font-semibold text-[#155da9]">National ID</h2>
//                 <a href={docs.nationalId} target="_blank" className="text-blue-600 underline">
//                   View National ID
//                 </a>
//               </div>
//             )}

//             {/* Birth Certificate */}
//             {docs.birthCertificate && (
//               <div>
//                 <h2 className="text-xl font-semibold text-[#155da9]">Birth Certificate</h2>
//                 <a href={docs.birthCertificate.url} target="_blank" className="text-blue-600 underline">
//                   {docs.birthCertificate.description || "View Birth Certificate"}
//                 </a>
//               </div>
//             )}

//             {/* Marksheets */}
//             {docs.marksheets && docs.marksheets.length > 0 && (
//               <div>
//                 <h2 className="text-xl font-semibold text-[#155da9]">Marksheets</h2>
//                 <ul className="list-disc ml-6">
//                   {docs.marksheets.map((m, i) => (
//                     <li key={i}>
//                       <a href={m.url} target="_blank" className="text-blue-600 underline">
//                         {m.description || `Marksheet ${i + 1}`}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Visas */}
//             {docs.countryVisa && (
//               <div>
//                 <h2 className="text-xl font-semibold text-[#155da9]">Visa</h2>
//                 <a href={docs.countryVisa.url} target="_blank" className="text-blue-600 underline">
//                   {docs.countryVisa.description || "View Visa"}
//                 </a>
//               </div>
//             )}

//             {/* Work Experience */}
//             {docs.previousWork && docs.previousWork.length > 0 && (
//               <div>
//                 <h2 className="text-xl font-semibold text-[#155da9]">Work Experience</h2>
//                 <ul className="list-disc ml-6">
//                   {docs.previousWork.map((w, i) => (
//                     <li key={i}>
//                       <a href={w.url} target="_blank" className="text-blue-600 underline">
//                         {w.description || `Work Document ${i + 1}`}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}

//             {/* Previous Refusals */}
//             {docs.previousRefusals && docs.previousRefusals.length > 0 && (
//               <div>
//                 <h2 className="text-xl font-semibold text-[#155da9]">Previous Visa Refusals</h2>
//                 <ul className="list-disc ml-6">
//                   {docs.previousRefusals.map((r, i) => (
//                     <li key={i}>
//                       <a href={r.url} target="_blank" className="text-blue-600 underline">
//                         Refusal Document {i + 1}
//                       </a>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewDocumentsPage;



// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar2 from "@/app/components/Navbar2";
// import { FiExternalLink, FiFile, FiArrowRight } from "react-icons/fi";

// interface DocumentData {
//   _id: string;
//   userId: string;
//   applicationId: string;
//   passport?: { url: string };
//   marksheets?: { url: string; description: string }[];
//   countryVisa?: { url: string; description: string };
//   nationalId?: string;
//   previousWork?: { url: string; description: string }[];
//   birthCertificate?: { url: string; description: string };
//   previousRefusals?: { url: string }[];
// }

// const ViewDocumentsPage = () => {
//   const params = useParams();
//   const applicationId = params.id as string;

//   const [loading, setLoading] = useState(true);
//   const [docs, setDocs] = useState<DocumentData | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchDocs = async () => {
//       try {
//         const res = await axios.get(`/api/documents/upload?applicationId=${applicationId}`);
//         if (res.data?.documents?.length > 0) {
//           setDocs(res.data.documents[0]);
//         } else {
//           setError("No documents found for this application.");
//         }
//       } catch (err) {
//         setError("Failed to fetch documents.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (applicationId) fetchDocs();
//   }, [applicationId]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="animate-pulse text-lg text-[#155da9]">Loading documents...</div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center">
//         <div className="max-w-3xl mx-auto text-center text-[#c30e16]">
//           <p>{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar2 />
//       <div className="max-w-4xl mx-auto p-6 pt-28">
//         <div className="bg-white rounded-xl shadow-md p-6 mb-8 border border-gray-200">
//           <h1 className="text-3xl font-bold text-[#155da9] mb-2">Uploaded Documents</h1>
//           <p className="text-gray-600">Review all documents submitted with your application</p>
//         </div>

//         {docs && (
//           <div className="grid grid-cols-1 gap-6">
//             {/* Passport */}
//             {docs.passport?.url && (
//               <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center">
//                     <div className="p-3 rounded-lg bg-blue-50 mr-4">
//                       <FiFile className="text-2xl text-[#155da9]" />
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-800">Passport</h2>
//                       <p className="text-gray-500">Primary identification document</p>
//                     </div>
//                   </div>
//                   <a 
//                     href={docs.passport.url} 
//                     target="_blank" 
//                     className="flex items-center px-4 py-2 bg-[#155da9] text-white rounded-lg hover:bg-blue-800 transition-colors"
//                   >
//                     <span className="mr-2">View</span>
//                     <FiArrowRight />
//                   </a>
//                 </div>
//               </div>
//             )}

//             {/* National ID */}
//             {docs.nationalId && (
//               <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center">
//                     <div className="p-3 rounded-lg bg-blue-50 mr-4">
//                       <FiFile className="text-2xl text-[#155da9]" />
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-800">National ID</h2>
//                       <p className="text-gray-500">Government-issued identification</p>
//                     </div>
//                   </div>
//                   <a 
//                     href={docs.nationalId} 
//                     target="_blank" 
//                     className="flex items-center px-4 py-2 bg-[#155da9] text-white rounded-lg hover:bg-blue-800 transition-colors"
//                   >
//                     <span className="mr-2">View</span>
//                     <FiArrowRight />
//                   </a>
//                 </div>
//               </div>
//             )}

//             {/* Birth Certificate */}
//             {docs.birthCertificate && (
//               <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center">
//                     <div className="p-3 rounded-lg bg-blue-50 mr-4">
//                       <FiFile className="text-2xl text-[#155da9]" />
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-800">Birth Certificate</h2>
//                       <p className="text-gray-500">{docs.birthCertificate.description || "Official birth record document"}</p>
//                     </div>
//                   </div>
//                   <a 
//                     href={docs.birthCertificate.url} 
//                     target="_blank" 
//                     className="flex items-center px-4 py-2 bg-[#155da9] text-white rounded-lg hover:bg-blue-800 transition-colors"
//                   >
//                     <span className="mr-2">View</span>
//                     <FiArrowRight />
//                   </a>
//                 </div>
//               </div>
//             )}

//             {/* Marksheets */}
//             {docs.marksheets && docs.marksheets.length > 0 && (
//               <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                   <div className="p-3 rounded-lg bg-blue-50 mr-4">
//                     <FiFile className="text-xl text-[#155da9]" />
//                   </div>
//                   Marksheets
//                 </h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   {docs.marksheets.map((m, i) => (
//                     <div key={i} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
//                       <div>
//                         <h3 className="font-medium text-gray-700">{m.description || `Marksheet ${i + 1}`}</h3>
//                         <p className="text-sm text-gray-500">Academic record document</p>
//                       </div>
//                       <a 
//                         href={m.url} 
//                         target="_blank" 
//                         className="flex items-center px-3 py-1 bg-[#155da9] text-white rounded-lg hover:bg-blue-800 transition-colors text-sm"
//                       >
//                         <span className="mr-1">View</span>
//                         <FiArrowRight size={14} />
//                       </a>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Visa */}
//             {docs.countryVisa && (
//               <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
//                 <div className="flex items-center justify-between mb-4">
//                   <div className="flex items-center">
//                     <div className="p-3 rounded-lg bg-blue-50 mr-4">
//                       <FiFile className="text-2xl text-[#155da9]" />
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-800">Visa</h2>
//                       <p className="text-gray-500">{docs.countryVisa.description || "Entry permission document"}</p>
//                     </div>
//                   </div>
//                   <a 
//                     href={docs.countryVisa.url} 
//                     target="_blank" 
//                     className="flex items-center px-4 py-2 bg-[#155da9] text-white rounded-lg hover:bg-blue-800 transition-colors"
//                   >
//                     <span className="mr-2">View</span>
//                     <FiArrowRight />
//                   </a>
//                 </div>
//               </div>
//             )}

//             {/* Work Experience */}
//             {docs.previousWork && docs.previousWork.length > 0 && (
//               <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                   <div className="p-3 rounded-lg bg-blue-50 mr-4">
//                     <FiFile className="text-xl text-[#155da9]" />
//                   </div>
//                   Work Experience
//                 </h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   {docs.previousWork.map((w, i) => (
//                     <div key={i} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
//                       <div>
//                         <h3 className="font-medium text-gray-700">{w.description || `Work Document ${i + 1}`}</h3>
//                         <p className="text-sm text-gray-500">Employment verification document</p>
//                       </div>
//                       <a 
//                         href={w.url} 
//                         target="_blank" 
//                         className="flex items-center px-3 py-1 bg-[#155da9] text-white rounded-lg hover:bg-blue-800 transition-colors text-sm"
//                       >
//                         <span className="mr-1">View</span>
//                         <FiArrowRight size={14} />
//                       </a>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Previous Refusals */}
//             {docs.previousRefusals && docs.previousRefusals.length > 0 && (
//               <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-200 hover:shadow-md transition-shadow">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
//                   <div className="p-3 rounded-lg bg-red-50 mr-4">
//                     <FiFile className="text-xl text-[#c30e16]" />
//                   </div>
//                   Previous Visa Refusals
//                 </h2>
//                 <div className="grid grid-cols-1 gap-4">
//                   {docs.previousRefusals.map((r, i) => (
//                     <div key={i} className="flex items-center justify-between bg-gray-50 p-4 rounded-lg">
//                       <div>
//                         <h3 className="font-medium text-gray-700">Refusal Document {i + 1}</h3>
//                         <p className="text-sm text-gray-500">Previous visa application record</p>
//                       </div>
//                       <a 
//                         href={r.url} 
//                         target="_blank" 
//                         className="flex items-center px-3 py-1 bg-[#c30e16] text-white rounded-lg hover:bg-red-800 transition-colors text-sm"
//                       >
//                         <span className="mr-1">View</span>
//                         <FiArrowRight size={14} />
//                       </a>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {docs && Object.keys(docs).length <= 4 && (
//           <div className="mt-8 text-center text-gray-500">
//             <p>No additional documents uploaded</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewDocumentsPage;    






// "use client";

// import { useParams } from "next/navigation";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar2 from "@/app/components/Navbar2";

// interface DocumentData {
//   _id: string;
//   userId: string;
//   applicationId: string;
//   passport?: { url: string };
//   marksheets?: { url: string; description: string }[];
//   countryVisa?: { url: string; description: string };
//   nationalId?: string;
//   previousWork?: { url: string; description: string }[];
//   birthCertificate?: { url: string; description: string };
//   previousRefusals?: { url: string }[];
// }

// const ViewDocumentsPage = () => {
//   const params = useParams();
//   const applicationId = params.id as string;

//   const [loading, setLoading] = useState(true);
//   const [docs, setDocs] = useState<DocumentData | null>(null);
//   const [error, setError] = useState<string | null>(null);

//   useEffect(() => {
//     const fetchDocs = async () => {
//       try {
//         const res = await axios.get(`/api/documents/upload?applicationId=${applicationId}`);
//         if (res.data?.documents?.length > 0) {
//           setDocs(res.data.documents[0]);
//         } else {
//           setError("No documents found for this application.");
//         }
//       } catch (err) {
//         setError("Failed to fetch documents.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (applicationId) fetchDocs();
//   }, [applicationId]);

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center">
//         <div className="flex flex-col items-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#155da9]"></div>
//           <p className="mt-4 text-lg text-[#155da9]">Loading documents...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center">
//         <div className="max-w-md mx-auto text-center bg-white p-8 rounded-2xl shadow-lg border border-red-200">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#c30e16]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </div>
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">Document Error</h3>
//           <p className="text-[#c30e16]">{error}</p>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
//       <Navbar2 />
//       <div className="max-w-4xl mx-auto p-6 pt-28">
//         {/* Header with gradient */}
//         <div className="bg-gradient-to-r from-[#155da9] to-[#c30e16] rounded-2xl shadow-lg p-6 mb-8 text-white">
//           <h1 className="text-3xl font-normal mb-2">Uploaded Documents</h1>
//           <p className="opacity-90">Review all documents submitted with your application</p>
//         </div>

//         {docs && (
//           <div className="grid grid-cols-1 gap-6">
//             {/* Passport */}
//             {docs.passport?.url && (
//               <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-800">Passport</h2>
//                       <p className="text-gray-500">Primary identification document</p>
//                     </div>
//                   </div>
//                   <a 
//                     href={docs.passport.url} 
//                     target="_blank" 
//                     className="flex items-center px-4 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
//                   >
//                     <span className="mr-2">View Document</span>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             )}

//             {/* National ID */}
//             {docs.nationalId && (
//               <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-800">National ID</h2>
//                       <p className="text-gray-500">Government-issued identification</p>
//                     </div>
//                   </div>
//                   <a 
//                     href={docs.nationalId} 
//                     target="_blank" 
//                     className="flex items-center px-4 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
//                   >
//                     <span className="mr-2">View Document</span>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             )}

//             {/* Birth Certificate */}
//             {docs.birthCertificate && (
//               <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-800">Birth Certificate</h2>
//                       <p className="text-gray-500">{docs.birthCertificate.description || "Official birth record document"}</p>
//                     </div>
//                   </div>
//                   <a 
//                     href={docs.birthCertificate.url} 
//                     target="_blank" 
//                     className="flex items-center px-4 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
//                   >
//                     <span className="mr-2">View Document</span>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             )}

//             {/* Marksheets */}
//             {docs.marksheets && docs.marksheets.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
//                 <div className="flex items-center mb-4">
//                   <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2.32-2.32a4 4 0 00-5.65-5.65L6.34 8a4 4 0 105.65 5.65L12 14zm0 0l-2.34 2.34a4 4 0 11-5.65-5.65l2.32-2.32a4 4 0 015.65 5.65L12 14z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-semibold text-gray-800">Marksheets</h2>
//                     <p className="text-gray-500">Academic records and transcripts</p>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 gap-4">
//                   {docs.marksheets.map((m, i) => (
//                     <div key={i} className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-red-50 p-4 rounded-xl border border-blue-100">
//                       <div>
//                         <h3 className="font-medium text-gray-700">{m.description || `Marksheet ${i + 1}`}</h3>
//                         <p className="text-sm text-gray-500">Academic record document</p>
//                       </div>
//                       <a 
//                         href={m.url} 
//                         target="_blank" 
//                         className="flex items-center px-3 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-lg hover:from-blue-800 hover:to-blue-900 transition-all shadow-sm hover:shadow-md text-sm"
//                       >
//                         <span className="mr-1">View</span>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                         </svg>
//                       </a>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Visa */}
//             {docs.countryVisa && (
//               <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
//                 <div className="flex items-center justify-between">
//                   <div className="flex items-center">
//                     <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-800">Visa</h2>
//                       <p className="text-gray-500">{docs.countryVisa.description || "Entry permission document"}</p>
//                     </div>
//                   </div>
//                   <a 
//                     href={docs.countryVisa.url} 
//                     target="_blank" 
//                     className="flex items-center px-4 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
//                   >
//                     <span className="mr-2">View Document</span>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                     </svg>
//                   </a>
//                 </div>
//               </div>
//             )}

//             {/* Work Experience */}
//             {docs.previousWork && docs.previousWork.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
//                 <div className="flex items-center mb-4">
//                   <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2h2a2 2 0 002-2V6m0 0v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-semibold text-gray-800">Work Experience</h2>
//                     <p className="text-gray-500">Employment history and verification</p>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 gap-4">
//                   {docs.previousWork.map((w, i) => (
//                     <div key={i} className="flex items-center justify-between bg-gradient-to-r from-blue-50 to-red-50 p-4 rounded-xl border border-blue-100">
//                       <div>
//                         <h3 className="font-medium text-gray-700">{w.description || `Work Document ${i + 1}`}</h3>
//                         <p className="text-sm text-gray-500">Employment verification document</p>
//                       </div>
//                       <a 
//                         href={w.url} 
//                         target="_blank" 
//                         className="flex items-center px-3 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-lg hover:from-blue-800 hover:to-blue-900 transition-all shadow-sm hover:shadow-md text-sm"
//                       >
//                         <span className="mr-1">View</span>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                         </svg>
//                       </a>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Previous Refusals */}
//             {docs.previousRefusals && docs.previousRefusals.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#c30e16] hover:shadow-lg transition-all duration-300">
//                 <div className="flex items-center mb-4">
//                   <div className="p-3 rounded-xl bg-gradient-to-br from-red-100 to-red-50 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#c30e16]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-semibold text-gray-800">Previous Visa Refusals</h2>
//                     <p className="text-gray-500">History of previous application declines</p>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 gap-4">
//                   {docs.previousRefusals.map((r, i) => (
//                     <div key={i} className="flex items-center justify-between bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border border-red-100">
//                       <div>
//                         <h3 className="font-medium text-gray-700">Refusal Document {i + 1}</h3>
//                         <p className="text-sm text-gray-500">Previous visa application record</p>
//                       </div>
//                       <a 
//                         href={r.url} 
//                         target="_blank" 
//                         className="flex items-center px-3 py-2 bg-gradient-to-r from-[#c30e16] to-red-800 text-white rounded-lg hover:from-red-800 hover:to-red-900 transition-all shadow-sm hover:shadow-md text-sm"
//                       >
//                         <span className="mr-1">View</span>
//                         <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                         </svg>
//                       </a>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}
//           </div>
//         )}

//         {docs && Object.keys(docs).length <= 4 && (
//           <div className="mt-8 text-center text-gray-500 bg-white p-6 rounded-2xl shadow-md">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//             </svg>
//             <p>No additional documents uploaded</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewDocumentsPage;  






// "use client";

// import { useParams, useRouter } from "next/navigation";
// import { useEffect, useState } from "react";
// import axios from "axios";
// import Navbar2 from "@/app/components/Navbar2";

// interface DocumentData {
//   _id: string;
//   userId: string;
//   applicationId: string;
//   passport?: { url: string };
//   marksheets?: { url: string; description: string }[];
//   countryVisa?: { url: string; description: string };
//   nationalId?: string;
//   previousWork?: { url: string; description: string }[];
//   birthCertificate?: { url: string; description: string };
//   previousRefusals?: { url: string }[];
// }

// const ViewDocumentsPage = () => {
//   const params = useParams();
//   const router = useRouter();
//   const applicationId = params.id as string;

//   const [loading, setLoading] = useState(true);
//   const [docs, setDocs] = useState<DocumentData | null>(null);
//   const [error, setError] = useState<string | null>(null);
//   const [editing, setEditing] = useState<string | null>(null);
//   const [editData, setEditData] = useState<any>({});
//   const [updateSuccess, setUpdateSuccess] = useState(false);

//   useEffect(() => {
//     const fetchDocs = async () => {
//       try {
//         const res = await axios.get(`/api/documents/upload?applicationId=${applicationId}`);
//         if (res.data?.documents?.length > 0) {
//           setDocs(res.data.documents[0]);
//         } else {
//           setError("No documents found for this application.");
//         }
//       } catch (err) {
//         setError("Failed to fetch documents.");
//       } finally {
//         setLoading(false);
//       }
//     };
//     if (applicationId) fetchDocs();
//   }, [applicationId]);

//   const handleEdit = (field: string, data: any) => {
//     setEditing(field);
//     setEditData(data);
//   };

//   const handleSave = async (field: string) => {
//     try {
//       const updatePayload = { [field]: editData };
//       const res = await axios.patch(`/api/documents/upload?id=${docs?._id}`, updatePayload);
      
//       if (res.status === 200) {
//         setDocs({ ...docs, ...updatePayload } as DocumentData);
//         setEditing(null);
//         setUpdateSuccess(true);
//         setTimeout(() => setUpdateSuccess(false), 3000);
//       }
//     } catch (err) {
//       setError("Failed to update document.");
//     }
//   };

//   const handleCancel = () => {
//     setEditing(null);
//     setEditData({});
//   };

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setEditData({ ...editData, [name]: value });
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center">
//         <div className="flex flex-col items-center">
//           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#155da9]"></div>
//           <p className="mt-4 text-lg text-[#155da9]">Loading documents...</p>
//         </div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center">
//         <div className="max-w-md mx-auto text-center bg-white p-8 rounded-2xl shadow-lg border border-red-200">
//           <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#c30e16]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
//             </svg>
//           </div>
//           <h3 className="text-xl font-semibold text-gray-800 mb-2">Document Error</h3>
//           <p className="text-[#c30e16]">{error}</p>
//           <button 
//             onClick={() => router.back()} 
//             className="mt-4 px-4 py-2 bg-[#155da9] text-white rounded-lg hover:bg-blue-800 transition-colors"
//           >
//             Go Back
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
//       <Navbar2 />
      
//       {/* Back Button */}
//       <div className="max-w-4xl mx-auto px-6 pt-24">
//         <button 
//           onClick={() => router.back()} 
//           className="flex items-center text-[#155da9] hover:text-blue-800 transition-colors mb-4"
//         >
//           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
//           </svg>
//           Back
//         </button>
//       </div>

//       <div className="max-w-4xl mx-auto p-6 pt-2">
//         {/* Success Message */}
//         {updateSuccess && (
//           <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative">
//             <span className="block sm:inline">Document updated successfully!</span>
//           </div>
//         )}

//         {/* Header with gradient */}
//         <div className="bg-gradient-to-r from-[#155da9] to-[#c30e16] rounded-2xl shadow-lg p-6 mb-8 text-white">
//           <h1 className="text-3xl font-bold mb-2">Uploaded Documents</h1>
//           <p className="opacity-90">Review and manage all documents submitted with your application</p>
//         </div>

//         {docs && (
//           <div className="grid grid-cols-1 gap-6">
//             {/* Passport */}
//             {docs.passport?.url && (
//               <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
//                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                   <div className="flex items-center">
//                     <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-800">Passport</h2>
//                       <p className="text-gray-500">Primary identification document</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col sm:flex-row gap-2">
//                     <a 
//                       href={docs.passport.url} 
//                       target="_blank" 
//                       className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
//                     >
//                       <span className="mr-2">View</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                       </svg>
//                     </a>
//                     <button 
//                       onClick={() => handleEdit('passport', docs.passport)}
//                       className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-xl hover:from-gray-700 hover:to-gray-900 transition-all shadow-md hover:shadow-lg"
//                     >
//                       <span className="mr-2">Edit</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
                
//                 {editing === 'passport' && (
//                   <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
//                     <h3 className="font-medium text-blue-800 mb-2">Edit Passport Information</h3>
//                     <div className="grid grid-cols-1 gap-3">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Document URL</label>
//                         <input
//                           type="text"
//                           name="url"
//                           value={editData.url || ''}
//                           onChange={handleInputChange}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div className="flex gap-2 mt-2">
//                         <button 
//                           onClick={() => handleSave('passport')}
//                           className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
//                         >
//                           Save
//                         </button>
//                         <button 
//                           onClick={handleCancel}
//                           className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* National ID */}
//             {docs.nationalId && (
//               <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
//                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                   <div className="flex items-center">
//                     <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-800">National ID</h2>
//                       <p className="text-gray-500">Government-issued identification</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col sm:flex-row gap-2">
//                     <a 
//                       href={docs.nationalId} 
//                       target="_blank" 
//                       className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
//                     >
//                       <span className="mr-2">View</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                       </svg>
//                     </a>
//                     <button 
//                       onClick={() => handleEdit('nationalId', { url: docs.nationalId })}
//                       className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-xl hover:from-gray-700 hover:to-gray-900 transition-all shadow-md hover:shadow-lg"
//                     >
//                       <span className="mr-2">Edit</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
                
//                 {editing === 'nationalId' && (
//                   <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
//                     <h3 className="font-medium text-blue-800 mb-2">Edit National ID Information</h3>
//                     <div className="grid grid-cols-1 gap-3">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Document URL</label>
//                         <input
//                           type="text"
//                           name="url"
//                           value={editData.url || ''}
//                           onChange={handleInputChange}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div className="flex gap-2 mt-2">
//                         <button 
//                           onClick={() => handleSave('nationalId')}
//                           className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
//                         >
//                           Save
//                         </button>
//                         <button 
//                           onClick={handleCancel}
//                           className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Birth Certificate */}
//             {docs.birthCertificate && (
//               <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
//                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                   <div className="flex items-center">
//                     <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-800">Birth Certificate</h2>
//                       <p className="text-gray-500">{docs.birthCertificate.description || "Official birth record document"}</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col sm:flex-row gap-2">
//                     <a 
//                       href={docs.birthCertificate.url} 
//                       target="_blank" 
//                       className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
//                     >
//                       <span className="mr-2">View</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                       </svg>
//                     </a>
//                     <button 
//                       onClick={() => handleEdit('birthCertificate', docs.birthCertificate)}
//                       className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-xl hover:from-gray-700 hover:to-gray-900 transition-all shadow-md hover:shadow-lg"
//                     >
//                       <span className="mr-2">Edit</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
                
//                 {editing === 'birthCertificate' && (
//                   <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
//                     <h3 className="font-medium text-blue-800 mb-2">Edit Birth Certificate Information</h3>
//                     <div className="grid grid-cols-1 gap-3">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Document URL</label>
//                         <input
//                           type="text"
//                           name="url"
//                           value={editData.url || ''}
//                           onChange={handleInputChange}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                         <input
//                           type="text"
//                           name="description"
//                           value={editData.description || ''}
//                           onChange={handleInputChange}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div className="flex gap-2 mt-2">
//                         <button 
//                           onClick={() => handleSave('birthCertificate')}
//                           className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
//                         >
//                           Save
//                         </button>
//                         <button 
//                           onClick={handleCancel}
//                           className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Marksheets */}
//             {docs.marksheets && docs.marksheets.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
//                 <div className="flex items-center mb-4">
//                   <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2.32-2.32a4 4 0 00-5.65-5.65L6.34 8a4 4 0 105.65 5.65L12 14zm0 0l-2.34 2.34a4 4 0 11-5.65-5.65l2.32-2.32a4 4 0 015.65 5.65L12 14z" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-semibold text-gray-800">Marksheets</h2>
//                     <p className="text-gray-500">Academic records and transcripts</p>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 gap-4">
//                   {docs.marksheets.map((m, i) => (
//                     <div key={i} className="flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-r from-blue-50 to-red-50 p-4 rounded-xl border border-blue-100">
//                       <div className="mb-2 md:mb-0">
//                         <h3 className="font-medium text-gray-700">{m.description || `Marksheet ${i + 1}`}</h3>
//                         <p className="text-sm text-gray-500">Academic record document</p>
//                       </div>
//                       <div className="flex gap-2">
//                         <a 
//                           href={m.url} 
//                           target="_blank" 
//                           className="flex items-center px-3 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-lg hover:from-blue-800 hover:to-blue-900 transition-all shadow-sm hover:shadow-md text-sm"
//                         >
//                           <span className="mr-1">View</span>
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                           </svg>
//                         </a>
//                         <button 
//                           onClick={() => handleEdit(`marksheets[${i}]`, m)}
//                           className="flex items-center px-3 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all shadow-sm hover:shadow-md text-sm"
//                         >
//                           <span className="mr-1">Edit</span>
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             )}

//             {/* Visa */}
//             {docs.countryVisa && (
//               <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
//                 <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
//                   <div className="flex items-center">
//                     <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
//                       </svg>
//                     </div>
//                     <div>
//                       <h2 className="text-xl font-semibold text-gray-800">Visa</h2>
//                       <p className="text-gray-500">{docs.countryVisa.description || "Entry permission document"}</p>
//                     </div>
//                   </div>
//                   <div className="flex flex-col sm:flex-row gap-2">
//                     <a 
//                       href={docs.countryVisa.url} 
//                       target="_blank" 
//                       className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
//                     >
//                       <span className="mr-2">View</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                       </svg>
//                     </a>
//                     <button 
//                       onClick={() => handleEdit('countryVisa', docs.countryVisa)}
//                       className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-xl hover:from-gray-700 hover:to-gray-900 transition-all shadow-md hover:shadow-lg"
//                     >
//                       <span className="mr-2">Edit</span>
//                       <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                       </svg>
//                     </button>
//                   </div>
//                 </div>
                
//                 {editing === 'countryVisa' && (
//                   <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
//                     <h3 className="font-medium text-blue-800 mb-2">Edit Visa Information</h3>
//                     <div className="grid grid-cols-1 gap-3">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Document URL</label>
//                         <input
//                           type="text"
//                           name="url"
//                           value={editData.url || ''}
//                           onChange={handleInputChange}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                         <input
//                           type="text"
//                           name="description"
//                           value={editData.description || ''}
//                           onChange={handleInputChange}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div className="flex gap-2 mt-2">
//                         <button 
//                           onClick={() => handleSave('countryVisa')}
//                           className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
//                         >
//                           Save
//                         </button>
//                         <button 
//                           onClick={handleCancel}
//                           className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}

//                       {/* Work Experience */}
//             {docs.previousWork && docs.previousWork.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
//                 <div className="flex items-center mb-4">
//                   <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2h2a2 2 0 002-2V6m0 0v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-semibold text-gray-800">Work Experience</h2>
//                     <p className="text-gray-500">Employment history and verification</p>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 gap-4">
//                   {docs.previousWork.map((w, i) => (
//                     <div key={i} className="flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-r from-blue-50 to-red-50 p-4 rounded-xl border border-blue-100">
//                       <div className="mb-2 md:mb-0">
//                         <h3 className="font-medium text-gray-700">{w.description || `Work Document ${i + 1}`}</h3>
//                         <p className="text-sm text-gray-500">Employment verification document</p>
//                       </div>
//                       <div className="flex gap-2">
//                         <a 
//                           href={w.url} 
//                           target="_blank" 
//                           className="flex items-center px-3 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-lg hover:from-blue-800 hover:to-blue-900 transition-all shadow-sm hover:shadow-md text-sm"
//                         >
//                           <span className="mr-1">View</span>
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                           </svg>
//                         </a>
//                         <button 
//                           onClick={() => handleEdit(`previousWork[${i}]`, w)}
//                           className="flex items-center px-3 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all shadow-sm hover:shadow-md text-sm"
//                         >
//                           <span className="mr-1">Edit</span>
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 {editing && editing.startsWith('previousWork[') && (
//                   <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
//                     <h3 className="font-medium text-blue-800 mb-2">Edit Work Experience Information</h3>
//                     <div className="grid grid-cols-1 gap-3">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Document URL</label>
//                         <input
//                           type="text"
//                           name="url"
//                           value={editData.url || ''}
//                           onChange={handleInputChange}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
//                         <input
//                           type="text"
//                           name="description"
//                           value={editData.description || ''}
//                           onChange={handleInputChange}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div className="flex gap-2 mt-2">
//                         <button 
//                           onClick={() => handleSave(editing)}
//                           className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
//                         >
//                           Save
//                         </button>
//                         <button 
//                           onClick={handleCancel}
//                           className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}

//             {/* Previous Refusals */}
//             {docs.previousRefusals && docs.previousRefusals.length > 0 && (
//               <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#c30e16] hover:shadow-lg transition-all duration-300">
//                 <div className="flex items-center mb-4">
//                   <div className="p-3 rounded-xl bg-gradient-to-br from-red-100 to-red-50 mr-4">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#c30e16]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
//                     </svg>
//                   </div>
//                   <div>
//                     <h2 className="text-xl font-semibold text-gray-800">Previous Visa Refusals</h2>
//                     <p className="text-gray-500">History of previous application declines</p>
//                   </div>
//                 </div>
//                 <div className="grid grid-cols-1 gap-4">
//                   {docs.previousRefusals.map((r, i) => (
//                     <div key={i} className="flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border border-red-100">
//                       <div className="mb-2 md:mb-0">
//                         <h3 className="font-medium text-gray-700">Refusal Document {i + 1}</h3>
//                         <p className="text-sm text-gray-500">Previous visa application record</p>
//                       </div>
//                       <div className="flex gap-2">
//                         <a 
//                           href={r.url} 
//                           target="_blank" 
//                           className="flex items-center px-3 py-2 bg-gradient-to-r from-[#c30e16] to-red-800 text-white rounded-lg hover:from-red-800 hover:to-red-900 transition-all shadow-sm hover:shadow-md text-sm"
//                         >
//                           <span className="mr-1">View</span>
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
//                           </svg>
//                         </a>
//                         <button 
//                           onClick={() => handleEdit(`previousRefusals[${i}]`, r)}
//                           className="flex items-center px-3 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all shadow-sm hover:shadow-md text-sm"
//                         >
//                           <span className="mr-1">Edit</span>
//                           <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
//                           </svg>
//                         </button>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
                
//                 {editing && editing.startsWith('previousRefusals[') && (
//                   <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
//                     <h3 className="font-medium text-blue-800 mb-2">Edit Refusal Information</h3>
//                     <div className="grid grid-cols-1 gap-3">
//                       <div>
//                         <label className="block text-sm font-medium text-gray-700 mb-1">Document URL</label>
//                         <input
//                           type="text"
//                           name="url"
//                           value={editData.url || ''}
//                           onChange={handleInputChange}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                         />
//                       </div>
//                       <div className="flex gap-2 mt-2">
//                         <button 
//                           onClick={() => handleSave(editing)}
//                           className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors"
//                         >
//                           Save
//                         </button>
//                         <button 
//                           onClick={handleCancel}
//                           className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
//                         >
//                           Cancel
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 )}
//               </div>
//             )}
//           </div>
//         )}

//         {docs && Object.keys(docs).length <= 4 && (
//           <div className="mt-8 text-center text-gray-500 bg-white p-6 rounded-2xl shadow-md">
//             <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//             </svg>
//             <p>No additional documents uploaded</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default ViewDocumentsPage;  







"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Navbar2 from "@/app/components/Navbar2";

interface DocumentData {
  _id: string;
  userId: string;
  applicationId: string;
  passport?: { url: string };
  marksheets?: { url: string; description: string }[];
  countryVisa?: { url: string; description: string };
  nationalId?: string;
  previousWork?: { url: string; description: string }[];
  birthCertificate?: { url: string; description: string };
  previousRefusals?: { url: string ; description: string}[];
}

const ViewDocumentsPage = () => {
  const params = useParams();
  const router = useRouter();
  const applicationId = params.id as string;

  const [loading, setLoading] = useState(true);
  const [docs, setDocs] = useState<DocumentData | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [editing, setEditing] = useState<string | null>(null);
  const [editData, setEditData] = useState<any>({});
  const [updateSuccess, setUpdateSuccess] = useState(false);
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    const fetchDocs = async () => {
      try {
        const res = await axios.get(`/api/documents/upload?applicationId=${applicationId}`);
        if (res.data?.documents?.length > 0) {
          setDocs(res.data.documents[0]);
        } else {
          setError("No documents found for this application.");
        }
      } catch (err) {
        setError("Failed to fetch documents.");
      } finally {
        setLoading(false);
      }
    };
    if (applicationId) fetchDocs();
  }, [applicationId]);

  const handleEdit = (field: string, data: any) => {
    setEditing(field);
    setEditData(data || {});
  };

  const handleFileUpload = async (file: File, field: string, index?: number) => {
    setUploading(true);
    try {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("field", field);
      if (index !== undefined) {
        formData.append("index", index.toString());
      }
      formData.append("applicationId", applicationId);
      formData.append("documentId", docs?._id || "");

      const res = await axios.post("/api/documents/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.status === 200) {
        setDocs(res.data.updatedDocument);
        setEditing(null);
        setUpdateSuccess(true);
        setTimeout(() => setUpdateSuccess(false), 3000);
      }
    } catch (err) {
      setError("Failed to upload document.");
    } finally {
      setUploading(false);
    }
  };

  const handleCancel = () => {
    setEditing(null);
    setEditData({});
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setEditData({ ...editData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, field: string, index?: number) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        setError("Please upload a PDF file");
        return;
      }
      handleFileUpload(file, field, index);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center">
        <div className="flex flex-col items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#155da9]"></div>
          <p className="mt-4 text-lg text-[#155da9]">Loading documents...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-red-50 flex items-center justify-center">
        <div className="max-w-md mx-auto text-center bg-white p-8 rounded-2xl shadow-lg border border-red-200">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#c30e16]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Document Error</h3>
          <p className="text-[#c30e16]">{error}</p>
          <button 
            onClick={() => router.back()} 
            className="mt-4 px-4 py-2 bg-[#155da9] text-white rounded-lg hover:bg-blue-800 transition-colors"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-red-50">
      <Navbar2 />
      
   {/* Back Button */}
<div className="w-full px-6 pt-28">
  <button
    onClick={() => router.back()}
    className="flex items-center text-xl text-[#155da9] hover:text-blue-800 transition-colors mb-4"
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-5 w-5 mr-1"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M10 19l-7-7m0 0l7-7m-7 7h18"
      />
    </svg>
    Back
  </button>
</div>

      <div className="max-w-4xl mx-auto p-6 pt-2">
        {/* Success Message */}
        {updateSuccess && (
          <div className="mb-6 bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative">
            <span className="block sm:inline">Document updated successfully!</span>
          </div>
        )}

        {/* Header with gradient */}
        <div className="bg-gradient-to-r from-[#155da9] to-[#c30e16] rounded-2xl shadow-lg p-6 mb-8 text-white">
          <h1 className="text-3xl font-normal mb-2">Uploaded Documents</h1>
          <p className="opacity-90">Review and manage all documents submitted with your application</p>
        </div>

        {docs && (
          <div className="grid grid-cols-1 gap-6">
            {/* Passport */}
            {docs.passport?.url && (
              <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">Passport</h2>
                      <p className="text-gray-500">Primary identification document</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a 
                      href={docs.passport.url} 
                      target="_blank" 
                      className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
                    >
                      <span className="mr-2">View</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <button 
                      onClick={() => handleEdit('passport', docs.passport)}
                      className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-xl hover:from-gray-700 hover:to-gray-900 transition-all shadow-md hover:shadow-lg"
                    >
                      <span className="mr-2">Replace</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {editing === 'passport' && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-medium text-blue-800 mb-2">Replace Passport Document</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Upload new PDF file</label>
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={(e) => handleFileChange(e, 'passport')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">Only PDF files are accepted</p>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button 
                          onClick={handleCancel}
                          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                      {uploading && (
                        <div className="mt-2 text-blue-600 flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-600 mr-2"></div>
                          Uploading...
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* National ID */}
            {docs.nationalId && (
              <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">National ID</h2>
                      <p className="text-gray-500">Government-issued identification</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a 
                      href={docs.nationalId} 
                      target="_blank" 
                      className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
                    >
                      <span className="mr-2">View</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <button 
                      onClick={() => handleEdit('nationalId', { url: docs.nationalId })}
                      className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-xl hover:from-gray-700 hover:to-gray-900 transition-all shadow-md hover:shadow-lg"
                    >
                      <span className="mr-2">Replace</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {editing === 'nationalId' && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-medium text-blue-800 mb-2">Replace National ID Document</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Upload new PDF file</label>
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={(e) => handleFileChange(e, 'nationalId')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">Only PDF files are accepted</p>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button 
                          onClick={handleCancel}
                          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                      {uploading && (
                        <div className="mt-2 text-blue-600 flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-600 mr-2"></div>
                          Uploading...
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Birth Certificate */}
            {docs.birthCertificate && (
              <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">Birth Certificate</h2>
                      <p className="text-gray-500">{docs.birthCertificate.description || "Official birth record document"}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a 
                      href={docs.birthCertificate.url} 
                      target="_blank" 
                      className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
                    >
                      <span className="mr-2">View</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <button 
                      onClick={() => handleEdit('birthCertificate', docs.birthCertificate)}
                      className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-xl hover:from-gray-700 hover:to-gray-900 transition-all shadow-md hover:shadow-lg"
                    >
                      <span className="mr-2">Replace</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {editing === 'birthCertificate' && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-medium text-blue-800 mb-2">Replace Birth Certificate</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Upload new PDF file</label>
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={(e) => handleFileChange(e, 'birthCertificate')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">Only PDF files are accepted</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <input
                          type="text"
                          name="description"
                          value={editData.description || ''}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter document description"
                        />
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button 
                          onClick={handleCancel}
                          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                      {uploading && (
                        <div className="mt-2 text-blue-600 flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-600 mr-2"></div>
                          Uploading...
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Marksheets */}
            {docs.marksheets && docs.marksheets.length > 0 && (
              <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l2.32-2.32a4 4 0 00-5.65-5.65L6.34 8a4 4 0 105.65 5.65L12 14zm0 0l-2.34 2.34a4 4 0 11-5.65-5.65l2.32-2.32a4 4 0 015.65 5.65L12 14z" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">Marksheets</h2>
                    <p className="text-gray-500">Academic records and transcripts</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {docs.marksheets.map((m, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-r from-blue-50 to-red-50 p-4 rounded-xl border border-blue-100">
                      <div className="mb-2 md:mb-0">
                        <h3 className="font-medium text-gray-700">{m.description || `Marksheet ${i + 1}`}</h3>
                        <p className="text-sm text-gray-500">Academic record document</p>
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href={m.url} 
                          target="_blank" 
                          className="flex items-center px-3 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-lg hover:from-blue-800 hover:to-blue-900 transition-all shadow-sm hover:shadow-md text-sm"
                        >
                          <span className="mr-1">View</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                        <button 
                          onClick={() => handleEdit(`marksheets[${i}]`, m)}
                          className="flex items-center px-3 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all shadow-sm hover:shadow-md text-sm"
                        >
                          <span className="mr-1">Replace</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {editing && editing.startsWith('marksheets[') && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-medium text-blue-800 mb-2">Replace Marksheet</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Upload new PDF file</label>
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={(e) => handleFileChange(e, 'marksheets', parseInt(editing.match(/\[(\d+)\]/)?.[1] || '0'))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">Only PDF files are accepted</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <input
                          type="text"
                          name="description"
                          value={editData.description || ''}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter document description"
                        />
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button 
                          onClick={handleCancel}
                          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                      {uploading && (
                        <div className="mt-2 text-blue-600 flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-600 mr-2"></div>
                          Uploading...
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Visa */}
            {docs.countryVisa && (
              <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 5v2m0 4v2m0 4v2M5 5a2 2 0 00-2 2v3a2 2 0 110 4v3a2 2 0 002 2h14a2 2 0 002-2v-3a2 2 0 110-4V7a2 2 0 00-2-2H5z" />
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-semibold text-gray-800">Visa</h2>
                      <p className="text-gray-500">{docs.countryVisa.description || "Entry permission document"}</p>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <a 
                      href={docs.countryVisa.url} 
                      target="_blank" 
                      className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-xl hover:from-blue-800 hover:to-blue-900 transition-all shadow-md hover:shadow-lg"
                    >
                      <span className="mr-2">View</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a极2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 极0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                    <button 
                      onClick={() => handleEdit('countryVisa', docs.countryVisa)}
                      className="flex items-center justify-center px-4 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-xl hover:from-gray-700极to-gray-900 transition-all shadow-md hover:shadow-lg"
                    >
                      <span className="mr-2">Replace</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                      </svg>
                    </button>
                  </div>
                </div>
                
                {editing === 'countryVisa' && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-medium text-blue-800 mb-2">Replace Visa Document</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-极700 mb-2">Upload new PDF file</label>
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={(e) => handleFileChange(e, 'countryVisa')}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">Only PDF files are accepted</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <input
                          type="text"
                          name="description"
                          value={editData.description || ''}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter document description"
                        />
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button 
                          onClick={handleCancel}
                          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                      {uploading && (
                        <div className="mt-2 text-blue-600 flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-600 mr-2"></div>
                          Uploading...
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )}
                        {/* Work Experience */}
            {/* {docs.previousWork && docs.previousWork.length > 0 && (
              <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931极 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2h2a2 2 0 002-2V6m0 0v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">Work Experience</h2>
                    <p className="text-gray-500">Employment history and verification</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {docs.previousWork.map((w, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-r from-blue-50 to-red-50 p-4 rounded-xl border border-blue-100">
                      <div className="mb-2 md:mb-0">
                        <h3 className="font-medium text-gray-700">{w.description || `Work Document ${i + 1}`}</h3>
                        <p className="text-sm text-gray-500">Employment verification document</p>
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href={w.url} 
                          target="_blank" 
                          className="flex items-center px-3 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-lg hover:from-blue-800 hover:to-blue-900 transition-all shadow-sm hover:shadow-md text-sm"
                        >
                          <span className="mr-1">View</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 极24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m极0-6L10 14" />
                          </svg>
                        </a>
                        <button 
                          onClick={() => handleEdit(`previousWork[${i}]`, w)}
                          className="flex items-center px-3 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all shadow-sm hover:shadow-md text-sm"
                        >
                          <span className="mr-1">Replace</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {editing && editing.startsWith('previousWork[') && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-medium text-blue-800 mb-2">Replace Work Experience Document</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Upload new PDF file</label>
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={(e) => handleFileChange(e, 'previousWork', parseInt(editing.match(/\[(\d+)\]/)?.[1] || '0'))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">Only PDF files are accepted</p>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                        <input
                          type="text"
                          name="description"
                          value={editData.description || ''}
                          onChange={handleInputChange}
                          className="w-full px-3极 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="Enter document description"
                        />
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button 
                          onClick={handleCancel}
                          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                      {uploading && (
                        <div className="mt-2 text-blue-600 flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-600 mr-2"></div>
                          Uploading...
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )} */}   
            {/* Work Experience */}
<div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#155da9] hover:shadow-lg transition-all duration-300">
  <div className="flex items-center mb-4">
    <div className="p-3 rounded-xl bg-gradient-to-br from-blue-100 to-blue-50 mr-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#155da9]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 002 2h2a2 2 0 002-2V6m0 0v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6" />
      </svg>
    </div>
    <div>
      <h2 className="text-xl font-semibold text-gray-800">Work Experience</h2>
      <p className="text-gray-500">Employment history and verification</p>
    </div>
  </div>

  {docs.previousWork && docs.previousWork.length > 0 ? (
    <div className="grid grid-cols-1 gap-4">
      {docs.previousWork.map((w, i) => (
        <div key={i} className="flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-r from-blue-50 to-red-50 p-4 rounded-xl border border-blue-100">
          <div className="mb-2 md:mb-0">
            <h3 className="font-medium text-gray-700">{w.description || `Work Document ${i + 1}`}</h3>
            <p className="text-sm text-gray-500">Employment verification document</p>
          </div>
          <div className="flex gap-2">
            <a 
              href={w.url} 
              target="_blank" 
              className="flex items-center px-3 py-2 bg-gradient-to-r from-[#155da9] to-blue-800 text-white rounded-lg hover:from-blue-800 hover:to-blue-900 transition-all shadow-sm hover:shadow-md text-sm"
            >
              <span className="mr-1">View</span>
            </a>
            <button 
              onClick={() => handleEdit(`previousWork[${i}]`, w)}
              className="flex items-center px-3 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all shadow-sm hover:shadow-md text-sm"
            >
              <span className="mr-1">Replace</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
      <h3 className="font-medium text-blue-800 mb-2">Upload Work Experience Document</h3>
      <div className="grid grid-cols-1 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload PDF</label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => handleFileChange(e, 'previousWork', 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <p className="text-xs text-gray-500 mt-1">Only PDF files are accepted</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
          <input
            type="text"
            name="description"
            value={editData.description || ''}
            onChange={handleInputChange}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter document description"
          />
        </div>
      </div>
    </div>
  )}

  {editing && editing.startsWith('previousWork[') && (
    <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
      <h3 className="font-medium text-blue-800 mb-2">Replace Work Experience Document</h3>
      {/* same replace block as before */}
    </div>
  )}
</div>


{/* Previous Refusals */}
<div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#c30e16] hover:shadow-lg transition-all duration-300 mt-6">
  <div className="flex items-center mb-4">
    <div className="p-3 rounded-xl bg-gradient-to-br from-red-100 to-red-50 mr-4">
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#c30e16]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    </div>
    <div>
      <h2 className="text-xl font-semibold text-gray-800">Previous Visa Refusals</h2>
      <p className="text-gray-500">History of previous application declines</p>
    </div>
  </div>

  {docs.previousRefusals && docs.previousRefusals.length > 0 ? (
    <div className="grid grid-cols-1 gap-4">
      {docs.previousRefusals.map((r, i) => (
        <div key={i} className="flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border border-red-100">
          <div className="mb-2 md:mb-0">
            <h3 className="font-medium text-gray-700">{r.description || `Refusal Document ${i + 1}`}</h3>
            <p className="text-sm text-gray-500">Previous visa application record</p>
          </div>
          <div className="flex gap-2">
            <a 
              href={r.url} 
              target="_blank" 
              className="flex items-center px-3 py-2 bg-gradient-to-r from-[#c30e16] to-red-800 text-white rounded-lg hover:from-red-800 hover:to-red-900 transition-all shadow-sm hover:shadow-md text-sm"
            >
              <span className="mr-1">View</span>
            </a>
            <button 
              onClick={() => handleEdit(`previousRefusals[${i}]`, { url: r.url })}
              className="flex items-center px-3 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all shadow-sm hover:shadow-md text-sm"
            >
              <span className="mr-1">Replace</span>
            </button>
          </div>
        </div>
      ))}
    </div>
  ) : (
    <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
      <h3 className="font-medium text-red-800 mb-2">Upload Refusal Document</h3>
      <div className="grid grid-cols-1 gap-3">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload PDF</label>
          <input
            type="file"
            accept=".pdf"
            onChange={(e) => handleFileChange(e, 'previousRefusals', 0)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
          />
          <p className="text-xs text-gray-500 mt-1">Only PDF files are accepted</p>
        </div>
      </div>
    </div>
  )}

  {editing && editing.startsWith('previousRefusals[') && (
    <div className="mt-4 p-4 bg-red-50 rounded-lg border border-red-200">
      <h3 className="font-medium text-red-800 mb-2">Replace Refusal Document</h3>
      {/* same replace block as before */}
    </div>
  )}
</div>


            {/* Previous Refusals */}
            {/* {docs.previousRefusals && docs.previousRefusals.length > 0 && (
              <div className="bg-white rounded-2xl shadow-md p-6 border-l-4 border-[#c30e16] hover:shadow-lg transition-all duration-300">
                <div className="flex items-center mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-red-100 to-red-50 mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#c30e16]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">Previous Visa Refusals</h2>
                    <p className="text-gray-500">History of previous application declines</p>
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  {docs.previousRefusals.map((r, i) => (
                    <div key={i} className="flex flex-col md:flex-row md:items-center justify-between bg-gradient-to-r from-red-50 to-red-100 p-4 rounded-xl border border-red-100">
                      <div className="mb-2 md:mb-0">
                        <h3 className="font-medium text-gray-700">Refusal Document {i + 1}</h3>
                        <p className="text-sm text-gray-500">Previous visa application record</p>
                      </div>
                      <div className="flex gap-2">
                        <a 
                          href={r.url} 
                          target="_blank" 
                          className="flex items-center px-3 py-2 bg-gradient-to-r from-[#c30e16] to-red-800 text-white rounded-lg hover:from-red-800 hover:to-red-900 transition-all shadow-sm hover:shadow-md text-sm"
                        >
                          <span className="mr-1">View</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0极v6m0-6L极10 14" />
                          </svg>
                        </a>
                        <button 
                          onClick={() => handleEdit(`previousRefusals[${i}]`, { url: r.url })}
                          className="flex items-center px-3 py-2 bg-gradient-to-r from-gray-600 to-gray-800 text-white rounded-lg hover:from-gray-700 hover:to-gray-900 transition-all shadow-sm hover:shadow-md text-sm"
                        >
                          <span className="mr-1">Replace</span>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4极v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                {editing && editing.startsWith('previousRefusals[') && (
                  <div className="mt-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-medium text-blue-800 mb-2">Replace Refusal Document</h3>
                    <div className="grid grid-cols-1 gap-3">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Upload new PDF file</label>
                        <input
                          type="file"
                          accept=".pdf"
                          onChange={(e) => handleFileChange(e, 'previousRefusals', parseInt(editing.match(/\[(\d+)\]/)?.[1] || '0'))}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <p className="text-xs text-gray-500 mt-1">Only PDF files are accepted</p>
                      </div>
                      <div className="flex gap-2 mt-2">
                        <button 
                          onClick={handleCancel}
                          className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-colors"
                        >
                          Cancel
                        </button>
                      </div>
                      {uploading && (
                        <div className="mt-2 text-blue-600 flex items-center">
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-blue-600 mr-2"></div>
                          Uploading...
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            )} */}
          </div>
        )}

        {docs && Object.keys(docs).length <= 4 && (
          <div className="mt-8 text-center text-gray-500 bg-white p-6 rounded-2xl shadow-md">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-gray-400 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4极h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            <p>No additional documents uploaded</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ViewDocumentsPage;


