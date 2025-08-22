// "use client";

// import { FiArrowLeft, FiChevronRight } from "react-icons/fi";
// import { useRouter } from "next/navigation";
// import React, { useEffect, useState, use } from "react";
// import Navbar from "@/app/components/Navbar";
// import Navbar2 from "@/app/components/Navbar2";
// import axios from "axios";
// import { toast } from "react-toastify";

// interface User {
//   id: string;
//   name: string;
//   email: string;
//   nationality: string;
//   status: "pending" | "done";
// }

// interface UserForm {
//   _id: string;
//   applicationId: string;
//   userId: string;
//   overall: null | any;
//   additionalQuestions: {
//     criminalRecord: boolean;
//     previousVisaRefusal: boolean;
//     medicalIssues: boolean;
//   };
//   uciNumber: string;
//   educationHistory: any[];
//   workHistory: any[];
// }

// const UserDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
//   const router = useRouter();
//   const [user, setUser] = useState<User | null>(null);
//   const [forms, setForms] = useState<UserForm[]>([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState<string | null>(null);
//   const [selectedApplicationId, setSelectedApplicationId] = useState<string>("");

//   const { id: userId } = use(params);

//   useEffect(() => {
//     if (!userId) return;

//     const fetchData = async () => {
//       try {
//         setLoading(true);
//         setError(null);

//         // Fetch user data
//         const userResponse = await fetch(`/api/users/open-user/${userId}`);
//         if (!userResponse.ok) throw new Error("Failed to fetch user data");
//         const userData = await userResponse.json();
//         setUser(userData);

//         // Fetch user forms
//         const formsResponse = await fetch(`/api/users/user_forms/${userId}`);
//         if (!formsResponse.ok) throw new Error("Failed to fetch user forms");
//         const formsData = await formsResponse.json();
//         setForms(formsData);
//         // Set the first application ID as the default selection if forms exist
//         if (formsData.length > 0) {
//           setSelectedApplicationId(formsData[0].applicationId);
//         }
//       } catch (err) {
//         setError((err as Error).message);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, [userId]);

//   const handleViewDetails = () => {
//     if (selectedApplicationId) {
//       router.push(`/admin/user/${userId}/user-form-details/${selectedApplicationId}`);
//     }
//   };

//   const handleUpdateTracker = async () => {
//     if (!selectedApplicationId) {
//       toast.error("Please select an application first.");
//       return;
//     }

//     try {
//       const response = await axios.patch(
//         `/api/tracker/${userId}/${selectedApplicationId}`, // Fixed URL with selectedApplicationId
//         {
//           field: "submissionResult", // Updated to submissionResult as requested
//           value: true,
//         },
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );

//       if (response.data.success) {
//         toast.success("Tracker updated successfully! Submission marked as completed.");
//       }
//     } catch (trackerError) {
//       console.error("Failed to update tracker:", trackerError);
//       toast.error("Failed to update tracker. Please try again.");
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
//           <h2 className="text-xl font-semibold text-red-600 mb-4">Error</h2>
//           <p className="text-gray-700 mb-6">{error}</p>
//           <button
//             onClick={() => window.location.reload()}
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//           >
//             Retry
//           </button>
//         </div>
//       </div>
//     );
//   }

//   if (!user) {
//     return (
//       <div className="min-h-screen flex items-center justify-center bg-gray-50">
//         <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
//           <h2 className="text-xl font-semibold text-gray-600 mb-4">User Not Found</h2>
//           <button
//             onClick={() => router.back()}
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
//           >
//             Back to Users
//           </button>
//         </div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar2 />

//       <div className="absolute top-[110px] left-4 z-10">
//         <button
//           onClick={() => router.back()}
//           className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
//         >
//           <FiArrowLeft className="mr-2" /> Back to Users
//         </button>
//       </div>

//       <div className="max-w-6xl mx-auto px-4 pt-[160px] pb-8">
//         <div className="bg-white shadow-xl rounded-xl overflow-hidden">
//           {/* User Information Card */}
//           <div className="bg-gradient-to-r from-[#c30e16] to-[#155da9] p-6 text-white">
//             <div className="flex items-center space-x-4">
//               <div className="flex-shrink-0 h-16 w-16 rounded-full bg-blue-300 flex items-center justify-center text-2xl font-bold text-blue-800">
//                 {user.name.charAt(0)}
//               </div>
//               <div>
//                 <h1 className="text-2xl font-bold">{user.name}</h1>
//                 <p className="text-blue-100">{user.email}</p>
//               </div>
//             </div>
//           </div>
//           <div className="p-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <p className="text-sm text-gray-500">Nationality</p>
//                 <p className="font-medium text-gray-900">{user.nationality}</p>
//               </div>
//               <div className="bg-gray-50 p-4 rounded-lg">
//                 <p className="text-sm text-gray-500">Account Status</p>
//                 <span
//                   className={`px-3 py-1 rounded-full text-sm font-medium ${
//                     user.status === "done" ? "bg-green-100 text-green-800" : "bg-red-100 text-black"
//                   }`}
//                 >
//                   {user.status}
//                 </span>
//               </div>
//             </div>
//           </div>

//           {/* User Forms Section with Dropdown */}
//           <div className="p-6">
//             <h2 className="text-xl font-semibold text-gray-800 mb-4">Applications</h2>
//             {forms.length === 0 ? (
//               <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-500">
//                 No forms found for this user
//               </div>
//             ) : (
//               <div className="space-y-4">
//                 <div className="flex items-center gap-4">
//                   <select
//                     value={selectedApplicationId}
//                     onChange={(e) => setSelectedApplicationId(e.target.value)}
//                     className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//                   >
//                     <option value="" disabled>
//                       Select an Application
//                     </option>
//                     {forms.map((form) => (
//                       <option key={form._id} value={form.applicationId}>
//                         Application ID: {form.applicationId}
//                       </option>
//                     ))}
//                   </select>
//                   <button
//                     onClick={handleViewDetails}
//                     disabled={!selectedApplicationId}
//                     className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center disabled:bg-gray-400 disabled:cursor-not-allowed"
//                   >
//                     View Details <FiChevronRight className="ml-2" />
//                   </button>
//                   <button
//                     onClick={handleUpdateTracker}
//                     disabled={!selectedApplicationId}
//                     className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center disabled:bg-gray-400 disabled:cursor-not-allowed"
//                   >
//                     Update Tracker <FiChevronRight className="ml-2" />
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default UserDetailsPage;




"use client";

import {
  FiArrowLeft,
  FiChevronRight,
  FiExternalLink,
} from "react-icons/fi";
import { useRouter } from "next/navigation";
import React, { useEffect, useState, use } from "react";
import Navbar2 from "@/app/components/Navbar2";
import axios from "axios";
import { toast } from "react-toastify";

interface User {
  id: string;
  name: string;
  email: string;
  nationality: string;
  status: "pending" | "done";
}

interface UserForm {
  _id: string;
  applicationId: string;
  userId: string;
  overall: null | any;
  additionalQuestions: {
    criminalRecord: boolean;
    previousVisaRefusal: boolean;
    medicalIssues: boolean;
  };
  uciNumber: string;
  educationHistory: any[];
  workHistory: any[];
}

interface Document {
  _id: string;
  userId: string;
  type: string;
  submittedDate: Date;
  fileUrl: string;
  description?: string;
}

const UserDetailsPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const router = useRouter();
  const [user, setUser] = useState<User | null>(null);
  const [forms, setForms] = useState<UserForm[]>([]);
  const [documents, setDocuments] = useState<Document[]>([]); // You set this however you like
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedApplicationId, setSelectedApplicationId] = useState<string>("");

  const { id: userId } = use(params);

  useEffect(() => {
    if (!userId) return;

    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);

        const userResponse = await fetch(`/api/users/open-user/${userId}`);
        const formsResponse = await fetch(`/api/users/user_forms/${userId}`);

        if (!userResponse.ok) throw new Error("Failed to fetch user data");
        if (!formsResponse.ok) throw new Error("Failed to fetch forms");

        const userData = await userResponse.json();
        const formsData = await formsResponse.json();

        setUser(userData);
        setForms(formsData);

        if (formsData.length > 0) {
          setSelectedApplicationId(formsData[0].applicationId);
        }

        // 🔵 You can setDocuments() here in your actual logic
      } catch (err) {
        setError((err as Error).message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [userId]);
useEffect(() => {
  const sentStatus = localStorage.getItem("buttonSent");
  if (sentStatus === "true") {
    setSent(true);
  }
}, []);
  // const handleViewDetails = () => {
  //   if (selectedApplicationId) {
  //     router.push(`/admin/user/${userId}/user-form-details/${selectedApplicationId}`);
  //   }
  // };  
const handleViewDetails = () => {
  if (selectedApplicationId) {
    console.log("Navigating to:", `/admin/user/${userId}/user-form-details/${selectedApplicationId}`);
    console.log("selectedApplicationId:", selectedApplicationId);
    router.push(`/admin/user/${userId}/user-form-details/${selectedApplicationId}`);
  }
};


  const handleUpdateTracker = async () => {
    if (!selectedApplicationId) {
      toast.error("Please select an application first.");
      return;
    }

    try {
      const response = await axios.patch(
        `/api/tracker/${userId}/${selectedApplicationId}`,
        {
          field: "submissionResult",
          value: true,
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        toast.success("Tracker updated successfully!");
      }
    } catch (trackerError) {
      console.error("Failed to update tracker:", trackerError);
      toast.error("Failed to update tracker.");
    }
  }; 
  
const [sent, setSent] = useState(false);

// const handleButtonClick = () => {
//   handleUpdateTracker();       // This is still your function!
//   setSent(true);               // Set 'sent' state to true after click
// };   
const handleButtonClick = () => {
  handleUpdateTracker();
  setSent(true);
  localStorage.setItem("buttonSent", "true");
};

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
      <Navbar2 />

      <div className="absolute top-[110px] left-4 z-10">
        <button
          onClick={() => router.back()}
          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <FiArrowLeft className="mr-2" /> Back to Users
        </button>
      </div>

      <div className="max-w-6xl mx-auto px-4 pt-[160px] pb-8">
        <div className="bg-white shadow-xl rounded-xl overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-[#c30e16] to-[#155da9] p-6 text-white">
            <div className="flex items-center space-x-4">
              <div className="h-16 w-16 rounded-full bg-blue-300 flex items-center justify-center text-2xl font-bold text-blue-800">
                {user.name.charAt(0)}
              </div>
              <div>
                <h1 className="text-2xl font-bold">{user.name}</h1>
                <p className="text-blue-100">{user.email}</p>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Nationality</p>
              <p className="font-medium text-gray-900">{user.nationality}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p className="text-sm text-gray-500">Account Status</p>
              <span
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  user.status === "done"
                    ? "bg-green-100 text-green-800"
                    : "bg-red-100 text-black"
                }`}
              >
                {user.status}
              </span>
            </div>
          </div>

          {/* Applications */}
          <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Applications</h2>
            {forms.length === 0 ? (
              <div className="bg-gray-50 p-4 rounded-lg text-center text-gray-500">
                No forms found for this user
              </div>
            ) : (
              <div className="flex items-center gap-4">
                <select
                  value={selectedApplicationId}
                  onChange={(e) => setSelectedApplicationId(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="" disabled>
                    Select an Application
                  </option>
                  {forms.map((form) => (
                    <option key={form._id} value={form.applicationId}>
                      Application ID: {form.applicationId}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleViewDetails}
                  disabled={!selectedApplicationId}
                  className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  View Details <FiChevronRight className="ml-2" />
                </button>
                {/* <button
                  onClick={handleUpdateTracker}
                  disabled={!selectedApplicationId}
                  className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                  Update Tracker <FiChevronRight className="ml-2" />
                </button> */}  
                <button
  onClick={handleButtonClick}
  disabled={!selectedApplicationId}
  className={`px-4 py-2 rounded-md transition-colors flex items-center ${sent ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-green-600 text-white hover:bg-green-700"} disabled:bg-gray-400 disabled:cursor-not-allowed`}
>
  {sent ? "Result Sent" : "Send Result"} <FiChevronRight className="ml-2" />
</button>

              </div>
            )}
          </div>

          {/* Documents */}
          <div className="p-6 pt-0">
            <h2 className="text-xl font-bold text-gray-800 mb-4">📄 Submitted Documents</h2>
            {documents.length === 0 ? (
              <div className="bg-gray-50 p-6 text-center rounded-xl text-gray-500">
                No documents submitted yet
              </div>
            ) : (
              <div className="overflow-hidden border border-gray-200 rounded-xl">
                <table className="min-w-full bg-white">
                  <thead
                    className="text-white"
                    style={{
                      background: "linear-gradient(90deg, #155da9, #c30e16)",
                    }}
                  >
                    <tr>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Document</th>
                      <th className="px-6 py-4 text-left text-sm font-semibold">Submitted Date</th>
                      <th className="px-6 py-4 text-center text-sm font-semibold">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {documents.map((doc) => (
                      <tr key={doc._id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 text-sm font-medium text-gray-900">
                          {doc.type}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500">
                          {new Date(doc.submittedDate).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4 text-center">
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
  );
};

export default UserDetailsPage;
