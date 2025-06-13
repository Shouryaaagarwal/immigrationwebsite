// 'use client'

// import { FiArrowLeft, FiCheck, FiDownload, FiX } from 'react-icons/fi';
// import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react';
// import Navbar from '@/app/components/Navbar';

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   nationality: string;
//   status: 'pending' | 'done';
// }

// interface Document {
//   _id: string;
//   userId: string;
//   type: string;
//   submittedDate: Date;
//   verified: boolean;
//   fileUrl: string;
//   // Add any other document fields you have
// }

// const UserDetailsPage = ({ params }: { params: { id: string } }) => {
//   const router = useRouter();
//   const [user, setUser] = useState<User | null>(null);
//   const [documents, setDocuments] = useState<Document[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
  
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setLoading(true);
//         setError(null);
        
//         // Fetch user data
//         const userResponse = await fetch(`/api/users/open-user/${params.id}`);
//         if (!userResponse.ok) throw new Error('Failed to fetch user data');
//         const userData = await userResponse.json();
//         setUser(userData);

//         // Fetch documents data
//         const docsResponse = await fetch(`/api/users/user_documents/${params.id}`);
//         if (!docsResponse.ok) throw new Error('Failed to fetch documents');
//         const docsData = await docsResponse.json();
//         console.log('docsData', docsData);
//         setDocuments(docsData);

//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [params.id]);

//   if (loading) return <div className="text-center py-10">Loading...</div>;
//   if (error) return <div className="text-center py-10 text-red-600">{error}</div>;
//   if (!user) return <div className="text-center py-10">User not found</div>;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <div className="absolute top-[110px] left-4 z-10">
//         <button 
//           onClick={() => router.back()}
//           className="flex items-center text-blue-600 hover:text-blue-800"
//         >
//           <FiArrowLeft className="mr-2" /> Back to Users
//         </button>
//       </div>

      // <div className="max-w-6xl mx-auto px-4 pt-[160px] pb-8">
      //   <div className="bg-white shadow-md rounded-lg overflow-hidden">
      //     <div className="bg-gradient-to-r from-[#c30e16] to-[#155da9] p-6 text-white">
      //       <div className="flex items-center">
      //         <div className="flex-shrink-0 h-16 w-16 rounded-full bg-blue-300 flex items-center justify-center text-2xl font-bold text-blue-800">
      //           {user.name.charAt(0)}
      //         </div>
      //         <div className="ml-4">
      //           <h1 className="text-2xl font-bold">{user.name}</h1>
      //           <p className="text-blue-100">{user.email}</p>
      //         </div>
      //       </div>
      //     </div>

      //     <div className="p-6 mt-4">
      //       <div className="grid grid-cols-1 gap-6 mb-8">
      //         <div className="bg-gray-50 p-4 rounded-lg">
      //           <h2 className="text-lg font-semibold text-gray-800 mb-3">Basic Information</h2>
      //           <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      //             <div>
      //               <p className="text-sm text-gray-500">Full Name</p>
      //               <p className="font-medium">{user.name}</p>
      //             </div>
      //             <div>
      //               <p className="text-sm text-gray-500">Email Address</p>
      //               <p className="font-medium">{user.email}</p>
      //             </div>
      //             <div>
      //               <p className="text-sm text-gray-500">Nationality</p>
      //               <p className="font-medium">{user.nationality}</p>
      //             </div>
      //             <div>
      //               <p className="text-sm text-gray-500">Account Status</p>
      //               <span className={`px-2 py-1 rounded-full text-xs font-medium ${
      //                 user.status === 'done' ? 'bg-green-100 text-green-800' :
      //                 user.status === 'pending' ? 'bg-red-100 text-black' :
      //                 'bg-yellow-300 text-black'
      //               }`}>
      //                 {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
      //               </span>
      //             </div>
      //           </div>
      //         </div>
      //       </div>

      //       <div className="flex flex-wrap gap-4 mb-8">
      //         <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
      //           <FiCheck className="mr-2" /> Received Details
      //         </button>
      //         <button className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center">
      //           <FiCheck className="mr-2" /> Process Started
      //         </button>
      //         <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center">
      //           <FiCheck className="mr-2" /> Process Completed
      //         </button>
      //       </div>

//             <div className="mt-8">
//               <h2 className="text-lg font-semibold text-gray-800 mb-4">Submitted Documents</h2>
//               {documents.length === 0 ? (
//                 <p className="text-gray-500">No documents submitted yet</p>
//               ) : (
//                 <div className="overflow-hidden border border-gray-200 rounded-lg">
//                   <table className="min-w-full divide-y divide-gray-200">
//                     <thead className="bg-gray-50">
//                       <tr>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Document Type
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Submitted Date
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Status
//                         </th>
//                         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                           Actions
//                         </th>
//                       </tr>
//                     </thead>
//                     <tbody className="bg-white divide-y divide-gray-200">
//                       {documents.map((doc) => (
//                         <tr key={doc._id}>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
//                             {doc.type}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
//                             {new Date(doc.submittedDate).toLocaleDateString()}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             {doc.verified ? (
//                               <span className="inline-flex items-center text-green-600">
//                                 <FiCheck className="mr-1" /> Verified
//                               </span>
//                             ) : (
//                               <span className="inline-flex items-center text-yellow-600">
//                                 <FiX className="mr-1" /> Pending
//                               </span>
//                             )}
//                           </td>
//                           <td className="px-6 py-4 whitespace-nowrap">
//                             <div className="flex items-center space-x-4">
//                               {doc.fileUrl && (
//                                 <a 
//                                   href={doc.fileUrl} 
//                                   download
//                                   className="p-2 bg-blue-100 text-blue-600 rounded-md hover:bg-blue-200 transition-colors"
//                                   title="Download Document"
//                                 >
//                                   <FiDownload className="h-5 w-5" />
//                                 </a>
//                               )}
//                             </div>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDetailsPage;


// 'use client'

// import { FiArrowLeft, FiCheck, FiDownload, FiExternalLink } from 'react-icons/fi';
// import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react';
// import Navbar from '@/app/components/Navbar';

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   nationality: string;
//   status: 'pending' | 'done';
// }

// interface Document {
//   _id: string;
//   userId: string;
//   type: string;
//   submittedDate: Date;
//   fileUrl: string;
// }

// const UserDetailsPage = ({ params }: { params: { id: string } }) => {
//   const router = useRouter();
//   const [user, setUser] = useState<User | null>(null);
//   const [documents, setDocuments] = useState<Document[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
  
 

// useEffect(() => {
//   async function fetchData() {
//     try {
//       setLoading(true);
//       setError(null);

//       const userResponse = await fetch(`/api/users/open-user/${params.id}`);
//       if (!userResponse.ok) throw new Error('Failed to fetch user data');
//       const userData = await userResponse.json();
//       setUser(userData);

//       const docsResponse = await fetch(`/api/users/user_documents/${params.id}`);
//       if (!docsResponse.ok) throw new Error('Failed to fetch documents');
//       const docsData = await docsResponse.json();

//       // Extract document URLs from nested objects
//       const extractedDocs = docsData.flatMap((doc: any) => {
//         return Object.entries(doc)
//           .filter(([_, value]) => typeof value === 'object' && (value as any)?.url) // Explicitly assert value as any
//           .map(([key, value]) => ({
//             _id: doc._id,
//             type: key,
//             submittedDate: doc.createdAt,
//             fileUrl: (value as any).url, // Explicitly assert value as any
//           }));
//       });

//       setDocuments(extractedDocs);
//     } catch (err) {
//       setError((err as Error).message);
//     } finally {
//       setLoading(false);
//     }
//   }

//   fetchData();
// }, [params.id]);

//   if (loading) return <div className="text-center py-10">Loading...</div>;
//   if (error) return <div className="text-center py-10 text-red-600">{error}</div>;
//   if (!user) return <div className="text-center py-10">User not found</div>;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <div className="absolute top-[110px] left-4 z-10">
//         <button 
//           onClick={() => router.back()}
//           className="flex items-center text-blue-600 hover:text-blue-800"
//         >
//           <FiArrowLeft className="mr-2" /> Back to Users
//         </button>
//       </div> 


//       <div className="max-w-6xl mx-auto px-4 pt-[160px] pb-8">
//         <div className="bg-white shadow-md rounded-lg overflow-hidden">
//           <div className="bg-gradient-to-r from-[#c30e16] to-[#155da9] p-6 text-white">
//             <div className="flex items-center">
//               <div className="flex-shrink-0 h-16 w-16 rounded-full bg-blue-300 flex items-center justify-center text-2xl font-bold text-blue-800">
//                 {user.name.charAt(0)}
//               </div>
//               <div className="ml-4">
//                 <h1 className="text-2xl font-bold">{user.name}</h1>
//                 <p className="text-blue-100">{user.email}</p>
//               </div>
//             </div>
//           </div>

//           <div className="p-6 mt-4">
//             <div className="grid grid-cols-1 gap-6 mb-8">
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <h2 className="text-lg font-semibold text-gray-800 mb-3">Basic Information</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                   <div>
//                     <p className="text-sm text-gray-500">Full Name</p>
//                     <p className="font-medium">{user.name}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Email Address</p>
//                     <p className="font-medium">{user.email}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Nationality</p>
//                     <p className="font-medium">{user.nationality}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Account Status</p>
//                     <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                       user.status === 'done' ? 'bg-green-100 text-green-800' :
//                       user.status === 'pending' ? 'bg-red-100 text-black' :
//                       'bg-yellow-300 text-black'
//                     }`}>
//                       {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-4 mb-8">
//               <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
//                 <FiCheck className="mr-2" /> Received Details
//               </button>
//               <button className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center">
//                 <FiCheck className="mr-2" /> Process Started
//               </button>
//               <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center">
//                 <FiCheck className="mr-2" /> Process Completed
//               </button>
//             </div>

 
//     <div className="max-w-5xl mx-auto px-6 pt-[140px] pb-12">
//       <div className="bg-white shadow-xl rounded-xl overflow-hidden">
//         <div className="p-8">
//           <h2 className="text-xl font-bold text-gray-800 mb-6">📄 Submitted Documents</h2>

//           {documents.length === 0 ? (
//             <p className="text-gray-500 text-center py-6">No documents submitted yet</p>
//           ) : (
//             <div className="overflow-hidden border border-gray-300 rounded-xl">
//               <table className="min-w-full bg-white">
//                 <thead
//                   className="text-white"
//                   style={{
//                     background: "linear-gradient(90deg, #155da9, #c30e16)",
//                   }}
//                 >
//                   <tr>
//                     <th className="px-6 py-4 text-left text-sm font-semibold">Document Name</th>
//                     <th className="px-6 py-4 text-left text-sm font-semibold">Submitted Date</th>
//                     <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {documents.map((doc, index) => (
//                     <tr
//                       key={doc._id}
//                       className={`border-t ${
//                         index % 2 === 0 ? "bg-gray-50" : "bg-white"
//                       }`}
//                     >
//                       <td className="px-6 py-4 text-sm font-medium text-gray-900">
//                         {doc.type}
//                       </td>
//                       <td className="px-6 py-4 text-sm text-gray-500">
//                         {new Date(doc.submittedDate).toLocaleDateString()}
//                       </td>
//                       <td className="px-6 py-4 text-sm text-center">
//                         {doc.fileUrl && (
//                           <a
//                             href={doc.fileUrl}
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="px-4 py-2 bg-gradient-to-r from-[#155da9] to-[#c30e16] text-white rounded-lg hover:opacity-90 transition flex items-center gap-2"
//                           >
//                             <FiExternalLink className="h-5 w-5" />
//                             View
//                           </a>
//                         )}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default UserDetailsPage;



// 'use client'

// import { FiArrowLeft, FiCheck, FiDownload, FiExternalLink } from 'react-icons/fi';
// import { useRouter } from 'next/navigation';
// import React, { useEffect, useState } from 'react';
// import Navbar from '@/app/components/Navbar';

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   nationality: string;
//   status: 'pending' | 'done';
// }

// interface Document {
//   _id: string;
//   userId: string;
//   type: string;
//   submittedDate: Date;
//   fileUrl: string;
// }

// const UserDetailsPage = ({ params }: { params: { id: string } }) => {
//   const router = useRouter();
//   const [user, setUser] = useState<User | null>(null);
//   const [documents, setDocuments] = useState<Document[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
  
//   useEffect(() => {
//     async function fetchData() {
//       try {
//         setLoading(true);
//         setError(null);

//         const userResponse = await fetch(`/api/users/open-user/${params.id}`);
//         if (!userResponse.ok) throw new Error('Failed to fetch user data');
//         const userData = await userResponse.json();
//         setUser(userData);

//         const docsResponse = await fetch(`/api/users/user_documents/${params.id}`);
//         if (!docsResponse.ok) throw new Error('Failed to fetch documents');
//         const docsData = await docsResponse.json();

//         // Extract document URLs from nested objects
//         const extractedDocs = docsData.flatMap((doc: any) => {
//           return Object.entries(doc)
//             .filter(([_, value]) => typeof value === 'object' && (value as any)?.url)
//             .map(([key, value]) => ({
//               _id: doc._id,
//               type: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
//               submittedDate: doc.createdAt || new Date(),
//               fileUrl: (value as any).url,
//             }));
//         });

//         setDocuments(extractedDocs);
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     }

//     fetchData();
//   }, [params.id]);

//   if (loading) return <div className="text-center py-10">Loading...</div>;
//   if (error) return <div className="text-center py-10 text-red-600">{error}</div>;
//   if (!user) return <div className="text-center py-10">User not found</div>;

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <div className="absolute top-[110px] left-4 z-10">
//         <button 
//           onClick={() => router.back()}
//           className="flex items-center text-blue-600 hover:text-blue-800"
//         >
//           <FiArrowLeft className="mr-2" /> Back to Users
//         </button>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 pt-[160px] pb-8">
//         <div className="bg-white shadow-xl rounded-xl overflow-hidden">
//           <div className="bg-gradient-to-r from-[#c30e16] to-[#155da9] p-6 text-white">
//             <div className="flex items-center">
//               <div className="flex-shrink-0 h-16 w-16 rounded-full bg-blue-300 flex items-center justify-center text-2xl font-bold text-blue-800">
//                 {user.name.charAt(0)}
//               </div>
//               <div className="ml-4">
//                 <h1 className="text-2xl font-bold">{user.name}</h1>
//                 <p className="text-blue-100">{user.email}</p>
//               </div>
//             </div>
//           </div>

//           <div className="p-8">
//             <div className="grid grid-cols-1 gap-6 mb-8">
//               <div className="bg-gray-50 p-6 rounded-xl">
//                 <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                   <div>
//                     <p className="text-sm text-gray-500">Full Name</p>
//                     <p className="font-medium text-gray-900">{user.name}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Email Address</p>
//                     <p className="font-medium text-gray-900">{user.email}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Nationality</p>
//                     <p className="font-medium text-gray-900">{user.nationality}</p>
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500">Account Status</p>
//                     <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${
//                       user.status === 'done' ? 'bg-green-100 text-green-800' :
//                       user.status === 'pending' ? 'bg-red-100 text-black' :
//                       'bg-yellow-300 text-black'
//                     }`}>
//                       {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="flex flex-wrap gap-4 mb-8">
//               <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
//                 <FiCheck className="mr-2" /> Received Details
//               </button>
//               <button className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center">
//                 <FiCheck className="mr-2" /> Process Started
//               </button>
//               <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center">
//                 <FiCheck className="mr-2" /> Process Completed
//               </button>
//             </div>

//             <div className="mt-8">
//               <h2 className="text-xl font-bold text-gray-800 mb-6">📄 Submitted Documents</h2>

//               {documents.length === 0 ? (
//                 <div className="bg-gray-50 p-8 text-center rounded-xl">
//                   <p className="text-gray-500">No documents submitted yet</p>
//                 </div>
//               ) : (
//                 <div className="overflow-hidden border border-gray-200 rounded-xl">
//                   <table className="min-w-full bg-white">
//                     <thead className="text-white" style={{
//                       background: "linear-gradient(90deg, #155da9, #c30e16)",
//                     }}>
//                       <tr>
//                         <th className="px-6 py-4 text-left text-sm font-semibold">Document Name</th>
//                         <th className="px-6 py-4 text-left text-sm font-semibold">Submitted Date</th>
//                         <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody className="divide-y divide-gray-200">
//                       {documents.map((doc, index) => (
//                         <tr key={doc._id} className={index % 2 === 0 ? "bg-gray-50" : "bg-white"}>
//                           <td className="px-6 py-4 text-sm font-medium text-gray-900">
//                             {doc.type}
//                           </td>
//                           <td className="px-6 py-4 text-sm text-gray-500">
//                             {new Date(doc.submittedDate).toLocaleDateString('en-US', {
//                               year: 'numeric',
//                               month: 'short',
//                               day: 'numeric'
//                             })}
//                           </td>
//                           <td className="px-6 py-4 text-sm text-center">
//                             <a
//                               href={doc.fileUrl}
//                               target="_blank"
//                               rel="noopener noreferrer"
//                               className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#155da9] to-[#c30e16] text-white rounded-lg hover:opacity-90 transition"
//                             >
//                               <FiExternalLink className="mr-2" />
//                               View
//                             </a>
//                           </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDetailsPage;


'use client'

import { FiArrowLeft, FiCheck, FiDownload, FiExternalLink } from 'react-icons/fi';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState, use } from 'react';
import Navbar from '@/app/components/Navbar';

interface User {
  id: string;
  name: string;
  email: string;
  nationality: string;
  status: 'pending' | 'done';
}

interface Document {
  _id: string;
  userId: string;
  type: string;
  submittedDate: Date;
  fileUrl: string;
}

const UserDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [documents, setDocuments] = useState<Document[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
   const { id: userId } = use(params);
   console.log('User ID:', userId);

  useEffect(() => {
    if (!userId) return;

    async function fetchData() {
      try {
        setLoading(true);
        setError(null);

        const [userResponse, docsResponse] = await Promise.all([
          fetch(`/api/users/open-user/${userId}`),
          fetch(`/api/users/user_documents/${userId}`)
        ]);

        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        if (!docsResponse.ok) throw new Error('Failed to fetch documents');

        const [userData, docsData] = await Promise.all([
          userResponse.json(),
          docsResponse.json()
        ]);

        setUser(userData);

        // Process documents
        const extractedDocs = docsData.flatMap((doc: any) => {
          return Object.entries(doc)
            .filter(([_, value]) => typeof value === 'object' && (value as any)?.url)
            .map(([key, value]) => ({
              _id: `${doc._id}-${key}`,
              userId: doc.userId,
              type: key.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase()),
              submittedDate: doc.createdAt || new Date(),
              fileUrl: (value as any).url,
            }));
        });

        setDocuments(extractedDocs);
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [userId]);

  console.log(documents)

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-red-600 mb-4">Error</h2>
          <p className="text-gray-700 mb-6">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <h2 className="text-xl font-semibold text-gray-600 mb-4">User Not Found</h2>
          <button
            onClick={() => router.back()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Users
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <div className="absolute top-[110px] left-4 z-10">
        <button 
          onClick={() => router.back()}
          className="flex items-center text-blue-600 hover:text-blue-800"
        >
          <FiArrowLeft className="mr-2" /> Back to Users
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-[160px] pb-8">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          <div className="bg-gradient-to-r from-[#c30e16] to-[#155da9] p-6 text-white">
            <div className="flex items-center">
              <div className="flex-shrink-0 h-16 w-16 rounded-full bg-blue-300 flex items-center justify-center text-2xl font-bold text-blue-800">
                {user.name.charAt(0)}
              </div>
              <div className="ml-4">
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-blue-100">{user.email}</p>
              </div>
            </div>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 gap-6 mb-8">
              <div className="bg-gray-50 p-6 rounded-xl">
                <h2 className="text-xl font-semibold text-gray-800 mb-4">Basic Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <p className="text-sm text-gray-500">Full Name</p>
                    <p className="font-medium text-gray-900">{user.name}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Email Address</p>
                    <p className="font-medium text-gray-900">{user.email}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Nationality</p>
                    <p className="font-medium text-gray-900">{user.nationality}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Account Status</p>
                    <span className={`px-3 py-1.5 rounded-full text-sm font-medium ${
                      user.status === 'done' ? 'bg-green-100 text-green-800' :
                      user.status === 'pending' ? 'bg-red-100 text-black' :
                      'bg-yellow-300 text-black'
                    }`}>
                      {user.status.charAt(0).toUpperCase() + user.status.slice(1)}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mb-8">
              <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors flex items-center">
                <FiCheck className="mr-2" /> Received Details
              </button>
              <button className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors flex items-center">
                <FiCheck className="mr-2" /> Process Started
              </button>
              <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors flex items-center">
                <FiCheck className="mr-2" /> Process Completed
              </button>
            </div>

            <div className="mt-8">
              <h2 className="text-xl font-bold text-gray-800 mb-6">📄 Submitted Documents</h2>

              {documents.length === 0 ? (
                <div className="bg-gray-50 p-8 text-center rounded-xl">
                  <p className="text-gray-500">No documents submitted yet</p>
                </div>
              ) : (
                <div className="overflow-hidden border border-gray-200 rounded-xl">
                  <table className="min-w-full bg-white">
                    <thead className="text-white" style={{
                      background: "linear-gradient(90deg, #155da9, #c30e16)",
                    }}>
                      <tr>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Document Name</th>
                        <th className="px-6 py-4 text-left text-sm font-semibold">Submitted Date</th>
                        <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {documents.map((doc) => (
                        <tr key={doc._id} className="bg-white hover:bg-gray-50">
                          <td className="px-6 py-4 text-sm font-medium text-gray-900">
                            {doc.type}
                          </td>
                          <td className="px-6 py-4 text-sm text-gray-500">
                            {new Date(doc.submittedDate).toLocaleDateString('en-US', {
                              year: 'numeric',
                              month: 'short',
                              day: 'numeric'
                            })}
                          </td>
                          <td className="px-6 py-4 text-sm text-center">
                            <a
                              href={doc.fileUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#155da9] to-[#c30e16] text-white rounded-lg hover:opacity-90 transition"
                            >
                              <FiExternalLink className="mr-2" />
                              View
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetailsPage;