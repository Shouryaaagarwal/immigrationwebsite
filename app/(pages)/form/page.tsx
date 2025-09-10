// "use client";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import Navbar from "@/app/components/Navbar";
// import { Raleway } from "next/font/google";
// import { useSelector } from "react-redux";
// import {
//   Pagination,
//   PaginationContent,
//   PaginationItem,
//   PaginationLink,
//   PaginationNext,
//   PaginationPrevious,
// } from "@/components/ui/pagination";
// import { Plus } from "lucide-react";
// import { useRouter } from "next/navigation";
// import Navbar2 from "@/app/components/Navbar2";

// const raleway = Raleway({
//   weight: ["400", "600", "800"],
//   subsets: ["latin"],
// });

// interface FormData {
//   applicationDetails: string;
//   previousVisaDetails: string;
//   uciNumber: string;
//   applicationType: string[];
//   applicantInfo: {
//     firstName: string;
//     lastName: string;
//     dob: string;
//     placeOfBirth: string;
//     eyeColor: string;
//     height: string;
//     gender: string;
//     telephone: string;
//     email: string;
//     statusInCanada: string;
//     currentAddress: string;
//     homeCountryAddress: string;
//     passportNumber: string;
//     passportIssueDate: string;
//     passportExpiryDate: string;
//     passportCountry: string;
//     maritalStatus: string;
//   };
//   spouseInfo: {
//     marriageDate: string;
//     firstName: string;
//     lastName: string;
//     dob: string;
//     placeOfBirth: string;
//     occupation: string;
//     address: string;
//   };
//   previousMarriage: {
//     marriageDate: string;
//     endDate: string;
//     spouseFirstName: string;
//     spouseLastName: string;
//     spouseDob: string;
//   };
//   parentsInfo: {
//     father: {
//       firstName: string;
//       lastName: string;
//       dob: string;
//       placeOfBirth: string;
//       occupation: string;
//       address: string;
//       dateOfDeath: string;
//     };
//     mother: {
//       firstName: string;
//       lastName: string;
//       dob: string;
//       placeOfBirth: string;
//       occupation: string;
//       address: string;
//       dateOfDeath: string;
//     };
//   };
//   educationHistory: Array<{
//     fromDate: string;
//     toDate: string;
//     instituteName: string;
//     city: string;
//     course: string;
//   }>;
//   workHistory: Array<{
//     fromDate: string;
//     toDate: string;
//     designation: string;
//     jobDuties: string;
//     city: string;
//     country: string;
//     companyName: string;
//   }>;
//   children: Array<{
//     firstName: string;
//     lastName: string;
//     relation: string;
//     dob: string;
//     placeOfBirth: string;
//     maritalStatus: string;
//     occupation: string;
//     currentAddress: string;
//     eyeColour: string;
//     heightFeet: string;
//     heightInches: string;
//   }>;
//   siblings: Array<{
//     name: string;
//     relation: string;
//     dob: string;
//     placeOfBirth: string;
//     maritalStatus: string;
//     occupation: string;
//     currentAddress: string;
//   }>;
//   addressHistory: Array<{
//     fromDate: string;
//     toDate: string;
//     address: string;
//     cityState: string;
//     country: string;
//     currentStatus: string;
//   }>;
//   travelHistory: Array<{
//     fromDate: string;
//     toDate: string;
//     place: string;
//     purpose: string;
//   }>;
//   relativesInCanada: Array<{
//     firstName: string;
//     lastName: string;
//     address: string;
//     relation: string;
//     status: string;
//     yearsInCanada: string;
//   }>;
//   ieltsScores: {
//     listening: string;
//     reading: string;
//     writing: string;
//     speaking: string;
//     overall: string;
//   };
//   questions: {
//     crime: { answer: string; details: string };
//     visa: { answer: string; details: string };
//     health: { answer: string; details: string };
//   };
// }

// export default function Form() {
//   const [page, setPage] = useState(1);
//   const [isSubmitting, setIsSubmitting] = useState(false);
//   const [formData, setFormData] = useState<FormData>({
//     applicationDetails: "",
//     previousVisaDetails: "",
//     uciNumber: "",
//     applicationType: [],
//     applicantInfo: {
//       firstName: "",
//       lastName: "",
//       dob: "",
//       placeOfBirth: "",
//       eyeColor: "",
//       height: "",
//       gender: "",
//       telephone: "",
//       email: "",
//       statusInCanada: "",
//       currentAddress: "",
//       homeCountryAddress: "",
//       passportNumber: "",
//       passportIssueDate: "",
//       passportExpiryDate: "",
//       passportCountry: "",
//       maritalStatus: "",
//     },
//     spouseInfo: {
//       marriageDate: "",
//       firstName: "",
//       lastName: "",
//       dob: "",
//       placeOfBirth: "",
//       occupation: "",
//       address: "",
//     },
//     previousMarriage: {
//       marriageDate: "",
//       endDate: "",
//       spouseFirstName: "",
//       spouseLastName: "",
//       spouseDob: "",
//     },
//     parentsInfo: {
//       father: {
//         firstName: "",
//         lastName: "",
//         dob: "",
//         placeOfBirth: "",
//         occupation: "",
//         address: "",
//         dateOfDeath: "",
//       },
//       mother: {
//         firstName: "",
//         lastName: "",
//         dob: "",
//         placeOfBirth: "",
//         occupation: "",
//         address: "",
//         dateOfDeath: "",
//       },
//     },
//     educationHistory: [],
//     workHistory: [],
//     children: [],
//     siblings: [],
//     addressHistory: [],
//     travelHistory: [],
//     relativesInCanada: [],
//     ieltsScores: {
//       listening: "",
//       reading: "",
//       writing: "",
//       speaking: "",
//       overall: "",
//     },
//     questions: {
//       crime: { answer: "", details: "" },
//       visa: { answer: "", details: "" },
//       health: { answer: "", details: "" },
//     },
//   });

//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [page]);

//   const router = useRouter();
//   const [educationRows, setEducationRows] = useState([{ id: 1 }]);
//   const [workRows, setWorkRows] = useState([{ id: 1 }]);
//   const [addressRows, setAddressRows] = useState([{ id: 1 }]);
//   const [travelRows, setTravelRows] = useState([{ id: 1 }]);
//   const [childrenRows, setChildrenRows] = useState([{ id: 1 }]);
//   const [siblingsRows, setSiblingsRows] = useState([{ id: 1 }]);
//   const [relativesRows, setRelativesRows] = useState([{ id: 1 }]);

//   const handleInputChange = (
//     e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
//   ) => {
//     const { name, value, type } = e.target;
//     const target = e.target as HTMLInputElement;
//     const checked = target.checked;

//     if (type === "checkbox") {
//       setFormData((prev) => ({
//         ...prev,
//         applicationType: checked
//           ? [...prev.applicationType, value]
//           : prev.applicationType.filter((item) => item !== value),
//       }));
//     } else if (name.startsWith("applicantInfo.")) {
//       const fieldName = name.split(".")[1];
//       setFormData((prev) => ({
//         ...prev,
//         applicantInfo: { ...prev.applicantInfo, [fieldName]: value },
//       }));
//     } else if (name.startsWith("spouseInfo.")) {
//       const fieldName = name.split(".")[1];
//       setFormData((prev) => ({
//         ...prev,
//         spouseInfo: { ...prev.spouseInfo, [fieldName]: value },
//       }));
//     } else if (name.startsWith("previousMarriage.")) {
//       const fieldName = name.split(".")[1];
//       setFormData((prev) => ({
//         ...prev,
//         previousMarriage: { ...prev.previousMarriage, [fieldName]: value },
//       }));
//     } else if (name.startsWith("parentsInfo.father.")) {
//       const fieldName = name.split(".")[2];
//       setFormData((prev) => ({
//         ...prev,
//         parentsInfo: {
//           ...prev.parentsInfo,
//           father: { ...prev.parentsInfo.father, [fieldName]: value },
//         },
//       }));
//     } else if (name.startsWith("parentsInfo.mother.")) {
//       const fieldName = name.split(".")[2];
//       setFormData((prev) => ({
//         ...prev,
//         parentsInfo: {
//           ...prev.parentsInfo,
//           mother: { ...prev.parentsInfo.mother, [fieldName]: value },
//         },
//       }));
//     } else if (name.startsWith("ieltsScores.")) {
//       const fieldName = name.split(".")[1];
//       setFormData((prev) => ({
//         ...prev,
//         ieltsScores: { ...prev.ieltsScores, [fieldName]: value },
//       }));
//     } else if (name.startsWith("questions.crime.")) {
//       const fieldName = name.split(".")[2];
//       setFormData((prev) => ({
//         ...prev,
//         questions: {
//           ...prev.questions,
//           crime: { ...prev.questions.crime, [fieldName]: value },
//         },
//       }));
//     } else if (name.startsWith("questions.visa.")) {
//       const fieldName = name.split(".")[2];
//       setFormData((prev) => ({
//         ...prev,
//         questions: {
//           ...prev.questions,
//           visa: { ...prev.questions.visa, [fieldName]: value },
//         },
//       }));
//     } else if (name.startsWith("questions.health.")) {
//       const fieldName = name.split(".")[2];
//       setFormData((prev) => ({
//         ...prev,
//         questions: {
//           ...prev.questions,
//           health: { ...prev.questions.health, [fieldName]: value },
//         },
//       }));
//     } else if (name.startsWith("educationHistory.")) {
//       const parts = name.split(".");
//       const index = parseInt(parts[1]);
//       const fieldName = parts[2];
//       setFormData((prev) => {
//         const updatedEducationHistory = [...prev.educationHistory];
//         if (!updatedEducationHistory[index]) {
//           updatedEducationHistory[index] = {
//             fromDate: "",
//             toDate: "",
//             instituteName: "",
//             city: "",
//             course: "",
//           };
//         }
//         updatedEducationHistory[index] = {
//           ...updatedEducationHistory[index],
//           [fieldName]: value,
//         };
//         return { ...prev, educationHistory: updatedEducationHistory };
//       });
//     } else if (name.startsWith("workHistory.")) {
//       const parts = name.split(".");
//       const index = parseInt(parts[1]);
//       const fieldName = parts[2];
//       setFormData((prev) => {
//         const updatedWorkHistory = [...prev.workHistory];
//         if (!updatedWorkHistory[index]) {
//           updatedWorkHistory[index] = {
//             fromDate: "",
//             toDate: "",
//             designation: "",
//             jobDuties: "",
//             city: "",
//             country: "",
//             companyName: "",
//           };
//         }
//         updatedWorkHistory[index] = {
//           ...updatedWorkHistory[index],
//           [fieldName]: value,
//         };
//         return { ...prev, workHistory: updatedWorkHistory };
//       });
//     } else if (name.startsWith("children.")) {
//       const parts = name.split(".");
//       const index = parseInt(parts[1]);
//       const fieldName = parts[2];
//       setFormData((prev) => {
//         const updatedChildren = [...prev.children];
//         if (!updatedChildren[index]) {
//           updatedChildren[index] = {
//             firstName: "",
//             lastName: "",
//             relation: "",
//             dob: "",
//             placeOfBirth: "",
//             maritalStatus: "",
//             occupation: "",
//             currentAddress: "",
//             eyeColour: "",
//             heightFeet: "",
//             heightInches: "",
//           };
//         }
//         updatedChildren[index] = {
//           ...updatedChildren[index],
//           [fieldName]: value,
//         };
//         return { ...prev, children: updatedChildren };
//       });
//     } else if (name.startsWith("siblings.")) {
//       const parts = name.split(".");
//       const index = parseInt(parts[1]);
//       const fieldName = parts[2];
//       setFormData((prev) => {
//         const updatedSiblings = [...prev.siblings];
//         if (!updatedSiblings[index]) {
//           updatedSiblings[index] = {
//             name: "",
//             relation: "",
//             dob: "",
//             placeOfBirth: "",
//             maritalStatus: "",
//             occupation: "",
//             currentAddress: "",
//           };
//         }
//         updatedSiblings[index] = {
//           ...updatedSiblings[index],
//           [fieldName]: value,
//         };
//         return { ...prev, siblings: updatedSiblings };
//       });
//     } else if (name.startsWith("addressHistory.")) {
//       const parts = name.split(".");
//       const index = parseInt(parts[1]);
//       const fieldName = parts[2];
//       setFormData((prev) => {
//         const updatedAddressHistory = [...prev.addressHistory];
//         if (!updatedAddressHistory[index]) {
//           updatedAddressHistory[index] = {
//             fromDate: "",
//             toDate: "",
//             address: "",
//             cityState: "",
//             country: "",
//             currentStatus: "",
//           };
//         }
//         updatedAddressHistory[index] = {
//           ...updatedAddressHistory[index],
//           [fieldName]: value,
//         };
//         return { ...prev, addressHistory: updatedAddressHistory };
//       });
//     } else if (name.startsWith("travelHistory.")) {
//       const parts = name.split(".");
//       const index = parseInt(parts[1]);
//       const fieldName = parts[2];
//       setFormData((prev) => {
//         const updatedTravelHistory = [...prev.travelHistory];
//         if (!updatedTravelHistory[index]) {
//           updatedTravelHistory[index] = {
//             fromDate: "",
//             toDate: "",
//             place: "",
//             purpose: "",
//           };
//         }
//         updatedTravelHistory[index] = {
//           ...updatedTravelHistory[index],
//           [fieldName]: value,
//         };
//         return { ...prev, travelHistory: updatedTravelHistory };
//       });
//     } else if (name.startsWith("relativesInCanada.")) {
//       const parts = name.split(".");
//       const index = parseInt(parts[1]);
//       const fieldName = parts[2];
//       setFormData((prev) => {
//         const updatedRelatives = [...prev.relativesInCanada];
//         if (!updatedRelatives[index]) {
//           updatedRelatives[index] = {
//             firstName: "",
//             lastName: "",
//             address: "",
//             relation: "",
//             status: "",
//             yearsInCanada: "",
//           };
//         }
//         updatedRelatives[index] = {
//           ...updatedRelatives[index],
//           [fieldName]: value,
//         };
//         return { ...prev, relativesInCanada: updatedRelatives };
//       });
//     } else {
//       setFormData((prev) => ({ ...prev, [name]: value }));
//     }
//   };

//   const addEducationRow = () => {
//     setEducationRows([...educationRows, { id: educationRows.length + 1 }]);
//     setFormData((prev) => ({
//       ...prev,
//       educationHistory: [
//         ...prev.educationHistory,
//         { fromDate: "", toDate: "", instituteName: "", city: "", course: "" },
//       ],
//     }));
//   };

//   const addWorkRow = () => {
//     setWorkRows([...workRows, { id: workRows.length + 1 }]);
//     setFormData((prev) => ({
//       ...prev,
//       workHistory: [
//         ...prev.workHistory,
//         {
//           fromDate: "",
//           toDate: "",
//           designation: "",
//           jobDuties: "",
//           city: "",
//           country: "",
//           companyName: "",
//         },
//       ],
//     }));
//   };

//   const addAddressRow = () => {
//     setAddressRows([...addressRows, { id: addressRows.length + 1 }]);
//     setFormData((prev) => ({
//       ...prev,
//       addressHistory: [
//         ...prev.addressHistory,
//         {
//           fromDate: "",
//           toDate: "",
//           address: "",
//           cityState: "",
//           country: "",
//           currentStatus: "",
//         },
//       ],
//     }));
//   };

//   const addTravelRow = () => {
//     setTravelRows([...travelRows, { id: travelRows.length + 1 }]);
//     setFormData((prev) => ({
//       ...prev,
//       travelHistory: [
//         ...prev.travelHistory,
//         { fromDate: "", toDate: "", place: "", purpose: "" },
//       ],
//     }));
//   };

//   const addChildrenRow = () => {
//     setChildrenRows([...childrenRows, { id: childrenRows.length + 1 }]);
//     setFormData((prev) => ({
//       ...prev,
//       children: [
//         ...prev.children,
//         {
//           firstName: "",
//           lastName: "",
//           relation: "",
//           dob: "",
//           placeOfBirth: "",
//           maritalStatus: "",
//           occupation: "",
//           currentAddress: "",
//           eyeColour: "",
//           heightFeet: "",
//           heightInches: "",
//         },
//       ],
//     }));
//   };

//   const addSiblingsRow = () => {
//     setSiblingsRows([...siblingsRows, { id: siblingsRows.length + 1 }]);
//     setFormData((prev) => ({
//       ...prev,
//       siblings: [
//         ...prev.siblings,
//         {
//           name: "",
//           relation: "",
//           dob: "",
//           placeOfBirth: "",
//           maritalStatus: "",
//           occupation: "",
//           currentAddress: "",
//         },
//       ],
//     }));
//   };

//   const addRelativeRow = () => {
//     setRelativesRows([...relativesRows, { id: relativesRows.length + 1 }]);
//     setFormData((prev) => ({
//       ...prev,
//       relativesInCanada: [
//         ...prev.relativesInCanada,
//         {
//           firstName: "",
//           lastName: "",
//           address: "",
//           relation: "",
//           status: "",
//           yearsInCanada: "",
//         },
//       ],
//     }));
//   };

//   const user = useSelector((state: any) => state.auth.user);
//   const userId = user?._id;

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true);
    
//     try {
//       // 1. Submit the form data
//       const res = await axios.post(
//         "http://localhost:3000/api/applicant-form",
//         { ...formData, userId },
//         {
//           headers: { "Content-Type": "application/json" },
//           withCredentials: true,
//         }
//       );     
//       console.log(res.data) ;
//        const { applicationId } = res.data.applicant; 
//        console.log(applicationId) ; 

//   if (!applicationId) {
//     throw new Error("No applicationId returned from backend");
//   }

  
//       // 2. Update the tracker to mark form as submitted
//       try {
//         await axios.patch(
//   `/api/tracker/${userId}/${applicationId}`, // <--- fix here
//           {
//             field: "formFilling",
//             value: true
//           },
//           {
//             headers: { "Content-Type": "application/json" },
//             withCredentials: true,
//           }
//         );
//       } catch (trackerError) {
//         console.error("Failed to update tracker:", trackerError);
//         // You might want to handle this error differently
//       }
  
//       // 3. Redirect after successful submission
//       router.push("/home");
//     } catch (error: any) {
//       console.error("Submission error:", error);
//     } finally {
//       setIsSubmitting(false);
//     }
//   };

//   return (
//     <div style={{ fontFamily: raleway.style.fontFamily }} className="w-full text-gray-500">
//       <Navbar2 />
//       <div className="page-container pt-[140px] pb-10 pl-4 pr-4 sm:pl-10 sm:pr-10">
//         {/* Page 1 */}
//         {page === 1 && (
//           <div className="page1 mb-10 sm:px-6 lg:px-8">
//             <h2 className="sm:text-4xl text-2xl mb-10 text-center sm:text-left">
//               PERSONAL INFORMATION SHEET
//             </h2>
//             <div className="w-full max-w-4xl mx-auto">
//               <h2 className="text-lg text-black mb-4">DETAILS OF APPLICATION:</h2>
//               <textarea
//                 className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] p-2 border rounded-md mb-4"
//                 placeholder="Enter details here..."
//                 name="applicationDetails"
//                 value={formData.applicationDetails}
//                 onChange={handleInputChange}
//               ></textarea>
//               <h2 className="text-lg text-black mb-4">
//                 Have you applied for a visa to Canada before? (If yes, please provide details):
//               </h2>
//               <textarea
//                 className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] p-2 border rounded-md mb-4"
//                 placeholder="Enter previous visa details..."
//                 name="previousVisaDetails"
//                 value={formData.previousVisaDetails}
//                 onChange={handleInputChange}
//               ></textarea>
//               <h2 className="text-lg text-black mb-4">
//                 UCI No: (8 digits number on your Canadian Permit/Visa/previous refusal letter)
//               </h2>
//               <input
//                 type="text"
//                 className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] p-2 border rounded-md mb-4"
//                 placeholder="Enter UCI Number..."
//                 name="uciNumber"
//                 value={formData.uciNumber}
//                 onChange={handleInputChange}
//               />
//               <div>
//                 <h2 className="text-lg text-black mb-4">Select Your Application Type</h2>
//                 <form className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
//                   {[
//                     "Express Entry - Principal Applicant",
//                     "PNP",
//                     "Spouse",
//                     "Study Permit",
//                     "Dependant (Over 18 Years of Age)",
//                     "Work Permit",
//                     "Visitor Visa/Super Visa",
//                   ].map((option, index) => (
//                     <div key={index} className="flex items-center">
//                       <input
//                         type="checkbox"
//                         id={option}
//                         name="applicationType"
//                         className="mr-2 w-5 h-5"
//                         value={option}
//                         checked={formData.applicationType.includes(option)}
//                         onChange={handleInputChange}
//                       />
//                       <label htmlFor={option} className="text-gray-700">
//                         {option}
//                       </label>
//                     </div>
//                   ))}
//                 </form>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Page 2 */}
//         {page === 2 && (
//           <div id="page2" className="page2 pb-10 sm:px-10">
//             <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">
//               Applicant Information
//             </h2>
//             <form className="space-y-6">
//               <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">First Name:</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter First Name"
//                     name="applicantInfo.firstName"
//                     value={formData.applicantInfo.firstName}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Last Name (Surname):</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Last Name"
//                     name="applicantInfo.lastName"
//                     value={formData.applicantInfo.lastName}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Date of Birth (dd/mm/yy):</label>
//                   <input
//                     type="date"
//                     className="w-full p-2 border rounded-md"
//                     name="applicantInfo.dob"
//                     value={formData.applicantInfo.dob}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Place of Birth:</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Place of Birth"
//                     name="applicantInfo.placeOfBirth"
//                     value={formData.applicantInfo.placeOfBirth}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Color of Eyes:</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Eye Color"
//                     name="applicantInfo.eyeColor"
//                     value={formData.applicantInfo.eyeColor}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Height (inches/cm):</label>
//                   <input
//                     type="number"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Height"
//                     name="applicantInfo.height"
//                     value={formData.applicantInfo.height}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Gender:</label>
//                   <select
//                     className="w-full p-2 border rounded-md"
//                     name="applicantInfo.gender"
//                     value={formData.applicantInfo.gender}
//                     onChange={handleInputChange}
//                   >
//                     <option value="">Select Gender</option>
//                     <option value="male">Male</option>
//                     <option value="female">Female</option>
//                     <option value="other">Other</option>
//                   </select>
//                 </div>
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Telephone No:</label>
//                   <input
//                     type="number"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Telephone No."
//                     name="applicantInfo.telephone"
//                     value={formData.applicantInfo.telephone}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Email Address:</label>
//                   <input
//                     type="email"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Email Address"
//                     name="applicantInfo.email"
//                     value={formData.applicantInfo.email}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Status in Canada (If applicable):</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Status in Canada"
//                     name="applicantInfo.statusInCanada"
//                     value={formData.applicantInfo.statusInCanada}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Current Address:</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Current Address"
//                     name="applicantInfo.currentAddress"
//                     value={formData.applicantInfo.currentAddress}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Address in Home Country:</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Address in Home Country"
//                     name="applicantInfo.homeCountryAddress"
//                     value={formData.applicantInfo.homeCountryAddress}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Passport No:</label>
//                   <input
//                     type="number"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Passport No"
//                     name="applicantInfo.passportNumber"
//                     value={formData.applicantInfo.passportNumber}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Issue Date:</label>
//                   <input
//                     type="date"
//                     className="w-full p-2 border rounded-md"
//                     name="applicantInfo.passportIssueDate"
//                     value={formData.applicantInfo.passportIssueDate}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Expiry Date:</label>
//                   <input
//                     type="date"
//                     className="w-full p-2 border rounded-md"
//                     name="applicantInfo.passportExpiryDate"
//                     value={formData.applicantInfo.passportExpiryDate}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Country of Issue:</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Country of Issue"
//                     name="applicantInfo.passportCountry"
//                     value={formData.applicantInfo.passportCountry}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="w-full">
//                 <label className="text-lg text-black mb-2">Marital Status:</label>
//                 <select
//                   className="w-full p-2 border rounded-md"
//                   name="applicantInfo.maritalStatus"
//                   value={formData.applicantInfo.maritalStatus}
//                   onChange={handleInputChange}
//                 >
//                   <option value="">Select Marital Status</option>
//                   <option value="single">Single</option>
//                   <option value="married">Married</option>
//                   <option value="divorced">Divorced</option>
//                   <option value="widowed">Widowed</option>
//                 </select>
//               </div>
//             </form>
//           </div>
//         )}

//         {/* Page 3 */}
//         {page === 3 && (
//           <div id="page3" className="page3 pb-10 sm:px-10">
//             <h3 className="text-2xl sm:text-left text-center sm:text-4xl mb-4">
//               Spouse/Common Law Partner Information
//             </h3>
//             <div className="spouse-info space-y-6 mb-10">
//               <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Date of Marriage:</label>
//                   <input
//                     type="date"
//                     className="w-full p-2 border rounded-md"
//                     name="spouseInfo.marriageDate"
//                     value={formData.spouseInfo.marriageDate}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">First Name:</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter First Name"
//                     name="spouseInfo.firstName"
//                     value={formData.spouseInfo.firstName}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Last Name:</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Last Name"
//                     name="spouseInfo.lastName"
//                     value={formData.spouseInfo.lastName}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Date of Birth (dd/mm/yy):</label>
//                   <input
//                     type="date"
//                     className="w-full p-2 border rounded-md"
//                     name="spouseInfo.dob"
//                     value={formData.spouseInfo.dob}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Place of Birth:</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Place of Birth"
//                     name="spouseInfo.placeOfBirth"
//                     value={formData.spouseInfo.placeOfBirth}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Occupation:</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Occupation"
//                     name="spouseInfo.occupation"
//                     value={formData.spouseInfo.occupation}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Spouse Address:</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Spouse Address"
//                     name="spouseInfo.address"
//                     value={formData.spouseInfo.address}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="previous-marriage-info space-y-6 mb-10">
//               <h3 className="text-4xl mb-4">If Married Previously</h3>
//               <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Date of Marriage:</label>
//                   <input
//                     type="date"
//                     className="w-full p-2 border rounded-md"
//                     name="previousMarriage.marriageDate"
//                     value={formData.previousMarriage.marriageDate}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">End Date of Marriage:</label>
//                   <input
//                     type="date"
//                     className="w-full p-2 border rounded-md"
//                     name="previousMarriage.endDate"
//                     value={formData.previousMarriage.endDate}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Spouse First Name:</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Spouse First Name"
//                     name="previousMarriage.spouseFirstName"
//                     value={formData.previousMarriage.spouseFirstName}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Spouse Last Name:</label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter Spouse Last Name"
//                     name="previousMarriage.spouseLastName"
//                     value={formData.previousMarriage.spouseLastName}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//               <div className="flex flex-col sm:flex-row gap-y-6">
//                 <div className="w-full sm:w-1/2">
//                   <label className="text-lg text-black mb-2">Date of Birth (dd/mm/yy):</label>
//                   <input
//                     type="date"
//                     className="w-full p-2 border rounded-md"
//                     name="previousMarriage.spouseDob"
//                     value={formData.previousMarriage.spouseDob}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Page 4 */}
//         {page === 4 && (
//           <div id="page4" className="page4 mb-10 sm:px-10">
//             <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">
//               Parental Information
//             </h2>
//             <div className="sm:p-6 rounded-lg mb-6">
//               <h3 className="text-2xl mb-4">Father’s Details</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-gray-700 text-sm font-semibold mb-1">
//                     First Name:
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter first name"
//                     name="parentsInfo.father.firstName"
//                     value={formData.parentsInfo.father.firstName}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-semibold mb-1">
//                     Last Name:
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter last name"
//                     name="parentsInfo.father.lastName"
//                     value={formData.parentsInfo.father.lastName}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-semibold mb-1">
//                     Date of Birth (dd/mm/yy):
//                   </label>
//                   <input
//                     type="date"
//                     className="w-full p-2 border rounded-md"
//                     name="parentsInfo.father.dob"
//                     value={formData.parentsInfo.father.dob}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-semibold mb-1">
//                     Place of Birth:
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter place of birth"
//                     name="parentsInfo.father.placeOfBirth"
//                     value={formData.parentsInfo.father.placeOfBirth}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-semibold mb-1">
//                     Occupation:
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter occupation"
//                     name="parentsInfo.father.occupation"
//                     value={formData.parentsInfo.father.occupation}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-semibold mb-1">
//                     Current Address:
//                   </label>
//                   <textarea
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter current address"
//                     name="parentsInfo.father.address"
//                     value={formData.parentsInfo.father.address}
//                     onChange={handleInputChange}
//                   ></textarea>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-semibold mb-1">
//                     If Deceased, Date of Death (if applicable):
//                   </label>
//                   <input
//                     type="date"
//                     className="w-full p-2 border rounded-md"
//                     name="parentsInfo.father.dateOfDeath"
//                     value={formData.parentsInfo.father.dateOfDeath}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//             </div>
//             <div className="sm:p-6 rounded-lg">
//               <h3 className="text-2xl mb-4">Mother’s Details</h3>
//               <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <div>
//                   <label className="block text-gray-700 text-sm font-semibold mb-1">
//                     First Name:
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter first name"
//                     name="parentsInfo.mother.firstName"
//                     value={formData.parentsInfo.mother.firstName}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-semibold mb-1">
//                     Last Name:
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter last name"
//                     name="parentsInfo.mother.lastName"
//                     value={formData.parentsInfo.mother.lastName}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-semibold mb-1">
//                     Date of Birth (dd/mm/yy):
//                   </label>
//                   <input
//                     type="date"
//                     className="w-full p-2 border rounded-md"
//                     name="parentsInfo.mother.dob"
//                     value={formData.parentsInfo.mother.dob}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-semibold mb-1">
//                     Place of Birth:
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter place of birth"
//                     name="parentsInfo.mother.placeOfBirth"
//                     value={formData.parentsInfo.mother.placeOfBirth}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-semibold mb-1">
//                     Occupation:
//                   </label>
//                   <input
//                     type="text"
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter occupation"
//                     name="parentsInfo.mother.occupation"
//                     value={formData.parentsInfo.mother.occupation}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-semibold mb-1">
//                     Current Address:
//                   </label>
//                   <textarea
//                     className="w-full p-2 border rounded-md"
//                     placeholder="Enter current address"
//                     name="parentsInfo.mother.address"
//                     value={formData.parentsInfo.mother.address}
//                     onChange={handleInputChange}
//                   ></textarea>
//                 </div>
//                 <div>
//                   <label className="block text-gray-700 text-sm font-semibold mb-1">
//                     If Deceased, Date of Death (if applicable):
//                   </label>
//                   <input
//                     type="date"
//                     className="w-full p-2 border rounded-md"
//                     name="parentsInfo.mother.dateOfDeath"
//                     value={formData.parentsInfo.mother.dateOfDeath}
//                     onChange={handleInputChange}
//                   />
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Page 5 */}
//         {page === 5 && (
//           <div id="page5" className="page5 mb-10 sm:px-10 overflow-x-auto">
//             <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">
//               Education and Work History
//             </h2>
//             <div className="mb-10">
//               <h3 className="text-2xl mb-4">Education History</h3>
//               <div className="w-full overflow-x-auto">
//                 <table className="w-full min-w-[700px] text-left">
//                   <thead>
//                     <tr className="border-b">
//                       <th className="p-2">From (dd/mm/yy)</th>
//                       <th className="p-2">To (dd/mm/yy)</th>
//                       <th className="p-2">Institute Name</th>
//                       <th className="p-2">City</th>
//                       <th className="p-2">Course</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {educationRows.map((row, index) => (
//                       <tr key={row.id} className="border-b">
//                         <td className="p-2">
//                           <input
//                             type="date"
//                             className="w-full p-1 border rounded-md"
//                             name={`educationHistory.${index}.fromDate`}
//                             value={formData.educationHistory[index]?.fromDate || ""}
//                             onChange={handleInputChange}
//                           />
//                         </td>
//                         <td className="p-2">
//                           <input
//                             type="date"
//                             className="w-full p-1 border rounded-md"
//                             name={`educationHistory.${index}.toDate`}
//                             value={formData.educationHistory[index]?.toDate || ""}
//                             onChange={handleInputChange}
//                           />
//                         </td>
//                         <td className="p-2">
//                           <input
//                             type="text"
//                             className="w-full p-1 border rounded-md"
//                             placeholder="Institute Name"
//                             name={`educationHistory.${index}.instituteName`}
//                             value={formData.educationHistory[index]?.instituteName || ""}
//                             onChange={handleInputChange}
//                           />
//                         </td>
//                         <td className="p-2">
//                           <input
//                             type="text"
//                             className="w-full p-1 border rounded-md"
//                             placeholder="City"
//                             name={`educationHistory.${index}.city`}
//                             value={formData.educationHistory[index]?.city || ""}
//                             onChange={handleInputChange}
//                           />
//                         </td>
//                         <td className="p-2">
//                           <input
//                             type="text"
//                             className="w-full p-1 border rounded-md"
//                             placeholder="Course"
//                             name={`educationHistory.${index}.course`}
//                             value={formData.educationHistory[index]?.course || ""}
//                             onChange={handleInputChange}
//                           />
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <button onClick={addEducationRow} className="mt-2 flex items-center text-[#155da9]">
//                 <Plus className="w-5 h-5 mr-1" /> Add Education Row
//               </button>
//             </div>
//             <div>
//               <h3 className="text-2xl mb-4">Work History (From 18th Birthday)</h3>
//               <div className="w-full overflow-x-auto">
//                 <table className="w-full min-w-[900px] text-left">
//                   <thead>
//                     <tr className="border-b">
//                       <th className="p-2">From (Y/M/D)</th>
//                       <th className="p-2">To (Y/M/D)</th>
//                       <th className="p-2">Designation</th>
//                       <th className="p-2">Job Duties</th>
//                       <th className="p-2">City</th>
//                       <th className="p-2">Country</th>
//                       <th className="p-2">Company Name</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     {workRows.map((row, index) => (
//                       <tr key={row.id} className="border-b">
//                         <td className="p-2">
//                           <input
//                             type="date"
//                             className="w-full p-1 border rounded-md"
//                             name={`workHistory.${index}.fromDate`}
//                             value={formData.workHistory[index]?.fromDate || ""}
//                             onChange={handleInputChange}
//                           />
//                         </td>
//                         <td className="p-2">
//                           <input
//                             type="date"
//                             className="w-full p-1 border rounded-md"
//                             name={`workHistory.${index}.toDate`}
//                             value={formData.workHistory[index]?.toDate || ""}
//                             onChange={handleInputChange}
//                           />
//                         </td>
//                         <td className="p-2">
//                           <input
//                             type="text"
//                             className="w-full p-1 border rounded-md"
//                             placeholder="Designation"
//                             name={`workHistory.${index}.designation`}
//                             value={formData.workHistory[index]?.designation || ""}
//                             onChange={handleInputChange}
//                           />
//                         </td>
//                         <td className="p-2">
//                           <input
//                             type="text"
//                             className="w-full p-1 border rounded-md"
//                             placeholder="Job Duties"
//                             name={`workHistory.${index}.jobDuties`}
//                             value={formData.workHistory[index]?.jobDuties || ""}
//                             onChange={handleInputChange}
//                           />
//                         </td>
//                         <td className="p-2">
//                           <input
//                             type="text"
//                             className="w-full p-1 border rounded-md"
//                             placeholder="City"
//                             name={`workHistory.${index}.city`}
//                             value={formData.workHistory[index]?.city || ""}
//                             onChange={handleInputChange}
//                           />
//                         </td>
//                         <td className="p-2">
//                           <input
//                             type="text"
//                             className="w-full p-1 border rounded-md"
//                             placeholder="Country"
//                             name={`workHistory.${index}.country`}
//                             value={formData.workHistory[index]?.country || ""}
//                             onChange={handleInputChange}
//                           />
//                         </td>
//                         <td className="p-2">
//                           <input
//                             type="text"
//                             className="w-full p-1 border rounded-md"
//                             placeholder="Company Name"
//                             name={`workHistory.${index}.companyName`}
//                             value={formData.workHistory[index]?.companyName || ""}
//                             onChange={handleInputChange}
//                           />
//                         </td>
//                       </tr>
//                     ))}
//                   </tbody>
//                 </table>
//               </div>
//               <button onClick={addWorkRow} className="mt-2 flex items-center text-[#155da9]">
//                 <Plus className="w-5 h-5 mr-1" /> Add Work Row
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Page 6 */}
//         {page === 6 && (
//           <div id="page6" className="page6 mb-10 sm:px-10">
//             <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">
//               Additional Information
//             </h2>
//             <div className="mb-10">
//               <h3 className="text-2xl mb-4">Children of Main Applicant</h3>
//               {childrenRows.map((row, index) => (
//                 <div key={row.id} className="mb-6 sm:p-4 border-b border-gray-300 space-y-4">
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <input
//                       type="text"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="First Name"
//                       name={`children.${index}.firstName`}
//                       value={formData.children[index]?.firstName || ""}
//                       onChange={handleInputChange}
//                     />
//                     <input
//                       type="text"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="Last Name"
//                       name={`children.${index}.lastName`}
//                       value={formData.children[index]?.lastName || ""}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div className="grid gap-4 sm:grid-cols-3">
//                     <select
//                       className="w-full p-2 border rounded-md"
//                       name={`children.${index}.relation`}
//                       value={formData.children[index]?.relation || ""}
//                       onChange={handleInputChange}
//                     >
//                       <option value="">Select Relation</option>
//                       <option value="Son">Son</option>
//                       <option value="Daughter">Daughter</option>
//                     </select>
//                     <input
//                       type="date"
//                       className="w-full p-2 border rounded-md"
//                       name={`children.${index}.dob`}
//                       value={formData.children[index]?.dob || ""}
//                       onChange={handleInputChange}
//                     />
//                     <input
//                       type="text"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="Place of Birth"
//                       name={`children.${index}.placeOfBirth`}
//                       value={formData.children[index]?.placeOfBirth || ""}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div>
//                     <p className="text-sm text-gray-500 mb-2">
//                       Marital Status: Married (M), Unmarried/Single (S), Divorced (D), Widowed (W)
//                     </p>
//                     <div className="grid gap-4 sm:grid-cols-3">
//                       <input
//                         type="text"
//                         className="w-full p-2 border rounded-md"
//                         placeholder="M / S / D / W"
//                         name={`children.${index}.maritalStatus`}
//                         value={formData.children[index]?.maritalStatus || ""}
//                         onChange={handleInputChange}
//                       />
//                       <input
//                         type="text"
//                         className="w-full p-2 border rounded-md"
//                         placeholder="Occupation"
//                         name={`children.${index}.occupation`}
//                         value={formData.children[index]?.occupation || ""}
//                         onChange={handleInputChange}
//                       />
//                       <input
//                         type="text"
//                         className="w-full p-2 border rounded-md"
//                         placeholder="Current Address"
//                         name={`children.${index}.currentAddress`}
//                         value={formData.children[index]?.currentAddress || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <input
//                       type="text"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="Eye Colour"
//                       name={`children.${index}.eyeColour`}
//                       value={formData.children[index]?.eyeColour || ""}
//                       onChange={handleInputChange}
//                     />
//                     <div className="grid grid-cols-2 gap-2">
//                       <input
//                         type="number"
//                         className="w-full p-2 border rounded-md"
//                         placeholder="Feet"
//                         name={`children.${index}.heightFeet`}
//                         value={formData.children[index]?.heightFeet || ""}
//                         onChange={handleInputChange}
//                       />
//                       <input
//                         type="number"
//                         className="w-full p-2 border rounded-md"
//                         placeholder="Inches"
//                         name={`children.${index}.heightInches`}
//                         value={formData.children[index]?.heightInches || ""}
//                         onChange={handleInputChange}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//               <button onClick={addChildrenRow} className="mt-2 flex items-center text-[#155da9]">
//                 <Plus className="w-5 h-5 mr-1" /> Add Child
//               </button>
//             </div>
//             <div>
//               <h3 className="text-2xl mb-4">Brothers & Sisters of Main Applicant</h3>
//               {siblingsRows.map((row, index) => (
//                 <div key={row.id} className="mb-6 sm:p-4 border-b border-gray-300 space-y-4">
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <input
//                       type="text"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="Name"
//                       name={`siblings.${index}.name`}
//                       value={formData.siblings[index]?.name || ""}
//                       onChange={handleInputChange}
//                     />
//                     <select
//                       className="w-full p-2 border rounded-md"
//                       name={`siblings.${index}.relation`}
//                       value={formData.siblings[index]?.relation || ""}
//                       onChange={handleInputChange}
//                     >
//                       <option value="">Select Relation</option>
//                       <option value="Brother">Brother</option>
//                       <option value="Sister">Sister</option>
//                     </select>
//                   </div>
//                   <div className="grid gap-4 sm:grid-cols-3">
//                     <input
//                       type="date"
//                       className="w-full p-2 border rounded-md"
//                       name={`siblings.${index}.dob`}
//                       value={formData.siblings[index]?.dob || ""}
//                       onChange={handleInputChange}
//                     />
//                     <input
//                       type="text"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="Place of Birth"
//                       name={`siblings.${index}.placeOfBirth`}
//                       value={formData.siblings[index]?.placeOfBirth || ""}
//                       onChange={handleInputChange}
//                     />
//                     <input
//                       type="text"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="M / S / D / W"
//                       name={`siblings.${index}.maritalStatus`}
//                       value={formData.siblings[index]?.maritalStatus || ""}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <p className="text-sm text-gray-500">
//                     Marital Status: Married (M), Unmarried/Single (S), Divorced (D), Widowed (W)
//                   </p>
//                   <div className="grid gap-4 sm:grid-cols-2">
//                     <input
//                       type="text"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="Occupation"
//                       name={`siblings.${index}.occupation`}
//                       value={formData.siblings[index]?.occupation || ""}
//                       onChange={handleInputChange}
//                     />
//                     <input
//                       type="text"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="Current Address"
//                       name={`siblings.${index}.currentAddress`}
//                       value={formData.siblings[index]?.currentAddress || ""}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>
//               ))}
//               <button onClick={addSiblingsRow} className="mt-2 flex items-center text-[#155da9]">
//                 <Plus className="w-5 h-5 mr-1" /> Add Sibling
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Page 7 */}
//         {page === 7 && (
//           <div id="page7" className="page7 mb-10 px-4 sm:px-10">
//             <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">
//               Additional Information
//             </h2>
//             <div className="mb-10">
//               <h3 className="sm:text-2xl text-lg mb-4">
//                 Address of Places the Main Applicant Has Lived Since 18th Birthday
//               </h3>
//               <p className="text-sm text-gray-500 mb-2">
//                 Do not leave any gap in the time period.
//               </p>
//               {addressRows.map((row, index) => (
//                 <div key={row.id} className="mb-6 sm:p-4 border-b border-gray-300 space-y-4">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <input
//                       type="date"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="From (Y/M/D)"
//                       name={`addressHistory.${index}.fromDate`}
//                       value={formData.addressHistory[index]?.fromDate || ""}
//                       onChange={handleInputChange}
//                     />
//                     <input
//                       type="date"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="To (Y/M/D)"
//                       name={`addressHistory.${index}.toDate`}
//                       value={formData.addressHistory[index]?.toDate || ""}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//                     <input
//                       type="text"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="Address"
//                       name={`addressHistory.${index}.address`}
//                       value={formData.addressHistory[index]?.address || ""}
//                       onChange={handleInputChange}
//                     />
//                     <input
//                       type="text"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="City/State"
//                       name={`addressHistory.${index}.cityState`}
//                       value={formData.addressHistory[index]?.cityState || ""}
//                       onChange={handleInputChange}
//                     />
//                     <input
//                       type="text"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="Country"
//                       name={`addressHistory.${index}.country`}
//                       value={formData.addressHistory[index]?.country || ""}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div>
//                     <select
//                       className="w-full p-2 border rounded-md"
//                       name={`addressHistory.${index}.currentStatus`}
//                       value={formData.addressHistory[index]?.currentStatus || ""}
//                       onChange={handleInputChange}
//                     >
//                       <option value="">Select Status</option>
//                       <option value="Studying">Studying</option>
//                       <option value="Working">Working</option>
//                       <option value="Not Employed">Not Employed</option>
//                     </select>
//                   </div>
//                 </div>
//               ))}
//               <button onClick={addAddressRow} className="mt-2 flex items-center text-[#155da9]">
//                 <Plus className="w-5 h-5 mr-1" /> Add Address
//               </button>
//             </div>
//             <div className="mb-10">
//               <h3 className="sm:text-2xl text-lg mb-4">
//                 Travel History - Details of Travel Outside Country of Residence & Origin
//               </h3>
//               {travelRows.map((row, index) => (
//                 <div key={row.id} className="mb-6 sm:p-4 border-b border-gray-300 space-y-4">
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <input
//                       type="date"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="From (dd/mm/yy)"
//                       name={`travelHistory.${index}.fromDate`}
//                       value={formData.travelHistory[index]?.fromDate || ""}
//                       onChange={handleInputChange}
//                     />
//                     <input
//                       type="date"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="To (dd/mm/yy)"
//                       name={`travelHistory.${index}.toDate`}
//                       value={formData.travelHistory[index]?.toDate || ""}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                     <input
//                       type="text"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="Place (City, Country)"
//                       name={`travelHistory.${index}.place`}
//                       value={formData.travelHistory[index]?.place || ""}
//                       onChange={handleInputChange}
//                     />
//                     <input
//                       type="text"
//                       className="w-full p-2 border rounded-md"
//                       placeholder="Purpose of Travel"
//                       name={`travelHistory.${index}.purpose`}
//                       value={formData.travelHistory[index]?.purpose || ""}
//                       onChange={handleInputChange}
//                     />
//                   </div>
//                 </div>
//               ))}
//               <button onClick={addTravelRow} className="mt-2 flex items-center text-[#155da9]">
//                 <Plus className="w-5 h-5 mr-1" /> Add Travel Record
//               </button>
//             </div>
//           </div>
//         )}

//         {/* Page 8 */}
//       {page === 8 && (
//     <div id="page8" className="page8 mb-10 px-4 sm:px-10">
//         <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">Additional Information</h2>

//         {/* Relatives in Canada */}
//         <div className="mb-10">
//             <h3 className="text-lg sm:text-2xl mb-4">Relatives in Canada (If any)</h3>

//             {relativesRows.map((row, index) => (
//                 <div key={row.id} className="mb-6 sm:p-4 border-b border-gray-300 space-y-4">
//                     <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
//                         <input 
//                             type="text" 
//                             className="w-full p-2 border rounded-md"
//                             placeholder="First Name"
//                             name={`relativesInCanada.${index}.firstName`}
//                             value={formData.relativesInCanada[index]?.firstName || ''}
//                             onChange={handleInputChange}
//                         />
//                         <input 
//                             type="text" 
//                             className="w-full p-2 border rounded-md"
//                             placeholder="Last Name"
//                             name={`relativesInCanada.${index}.lastName`}
//                             value={formData.relativesInCanada[index]?.lastName || ''}
//                             onChange={handleInputChange}
//                         />
//                     </div>
//                     <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
//                         <input 
//                             type="text" 
//                             className="w-full p-2 border rounded-md"
//                             placeholder="Address"
//                             name={`relativesInCanada.${index}.address`}
//                             value={formData.relativesInCanada[index]?.address || ''}
//                             onChange={handleInputChange}
//                         />
//                         <input 
//                             type="text" 
//                             className="w-full p-2 border rounded-md"
//                             placeholder="Relation with Applicant"
//                             name={`relativesInCanada.${index}.relation`}
//                             value={formData.relativesInCanada[index]?.relation || ''}
//                             onChange={handleInputChange}
//                         />
//                         <input 
//                             type="text" 
//                             className="w-full p-2 border rounded-md"
//                             placeholder="Status in Canada"
//                             name={`relativesInCanada.${index}.status`}
//                             value={formData.relativesInCanada[index]?.status || ''}
//                             onChange={handleInputChange}
//                         />
//                     </div>
//                     <input 
//                         type="text" 
//                         className="w-full p-2 border rounded-md"
//                         placeholder="How many years in Canada?"
//                         name={`relativesInCanada.${index}.yearsInCanada`}
//                         value={formData.relativesInCanada[index]?.yearsInCanada || ''}
//                         onChange={handleInputChange}
//                     />
//                 </div>
//             ))}

//             <button onClick={addRelativeRow} className="mt-2 flex items-center text-[#155da9]">
//                 <Plus className="w-5 h-5 mr-1" /> Add Relative
//             </button>
//         </div>

//         {/* IELTS Scores */}
//         <div className="mb-10">
//             <h3 className="text-lg sm:text-2xl mb-4">IELTS Score for Each Module</h3>

//             <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
//                 <input 
//                     type="text" 
//                     className="w-full p-2 border rounded-md"
//                     name="ieltsScores.listening"
//                     value={formData.ieltsScores.listening || ''}
//                     onChange={handleInputChange}
//                     placeholder="Listening Score"
//                 />
//                 <input 
//                     type="text" 
//                     className="w-full p-2 border rounded-md"
//                     name="ieltsScores.reading"
//                     value={formData.ieltsScores.reading || ''}
//                     onChange={handleInputChange}
//                     placeholder="Reading Score"
//                 />
//                 <input 
//                     type="text" 
//                     className="w-full p-2 border rounded-md"
//                     name="ieltsScores.writing"
//                     value={formData.ieltsScores.writing || ''}
//                     onChange={handleInputChange}
//                     placeholder="Writing Score"
//                 />
//             </div>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
//                 <input 
//                     type="text" 
//                     className="w-full p-2 border rounded-md"
//                     name="ieltsScores.speaking"
//                     value={formData.ieltsScores.speaking || ''}
//                     onChange={handleInputChange}
//                     placeholder="Speaking Score"
//                 />
//                 <input 
//                     type="text" 
//                     className="w-full p-2 border rounded-md"
//                     name="ieltsScores.overall"
//                     value={formData.ieltsScores.overall || ''}
//                     onChange={handleInputChange}
//                     placeholder="Overall Score"
//                 />
//             </div>
//         </div>

//         {/* Important Questions */}
//         <div className="mb-10">
//             <h3 className="text-lg sm:text-2xl mb-4">Please Read the Following and Answer Carefully</h3>
//             <p className="text-sm text-gray-500 mb-4">(Applicable to all family members in the application)</p>

//             {/* Question 1 */}
//             <div className="mb-6">
//                 <p className="font-semibold">a) Have you ever been convicted of, currently charged with, on trial for, or party to any crime/offence in any country?</p>
//                 <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
//                     <label className="flex items-center">
//                         <input 
//                             type="radio" 
//                             name="questions.crime.answer" 
//                             value="yes" 
//                             className="mr-2"
//                             checked={formData.questions.crime.answer === 'yes'}
//                             onChange={handleInputChange}
//                         /> YES
//                     </label>
//                     <label className="flex items-center">
//                         <input 
//                             type="radio" 
//                             name="questions.crime.answer" 
//                             value="no" 
//                             className="mr-2"
//                             checked={formData.questions.crime.answer === 'no'}
//                             onChange={handleInputChange}
//                         /> NO
//                     </label>
//                 </div>
//                 <textarea 
//                     className="w-full p-2 mt-2 border rounded-md"
//                     name="questions.crime.details"
//                     value={formData.questions.crime.details || ''}
//                     onChange={handleInputChange}
//                     placeholder="If yes, provide details"
//                 ></textarea>
//             </div>

//             {/* Question 2 */}
//             <div className="mb-6">
//                 <p className="font-semibold">b) Have you ever applied to Canada for any Visa/Permit/PR, or been approved/refused a visa/refugee application to Canada before?</p>
//                 <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
//                     <label className="flex items-center">
//                         <input 
//                             type="radio" 
//                             name="questions.visa.answer" 
//                             value="yes" 
//                             className="mr-2"
//                             checked={formData.questions.visa.answer === 'yes'}
//                             onChange={handleInputChange}
//                         /> YES
//                     </label>
//                     <label className="flex items-center">
//                         <input 
//                             type="radio" 
//                             name="questions.visa.answer" 
//                             value="no" 
//                             className="mr-2"
//                             checked={formData.questions.visa.answer === 'no'}
//                             onChange={handleInputChange}
//                         /> NO
//                     </label>
//                 </div>
//                 <textarea 
//                     className="w-full p-2 mt-2 border rounded-md"
//                     name="questions.visa.details"
//                     value={formData.questions.visa.details || ''}
//                     onChange={handleInputChange}
//                     placeholder="If yes, provide details"
//                 ></textarea>
//             </div>

//             {/* Question 3 */}
//             <div className="mb-6">
//                 <p className="font-semibold">c) Have you ever had any disease or physical or mental disorder?</p>
//                 <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
//                     <label className="flex items-center">
//                         <input 
//                             type="radio" 
//                             name="questions.health.answer" 
//                             value="yes" 
//                             className="mr-2"
//                             checked={formData.questions.health.answer === 'yes'}
//                             onChange={handleInputChange}
//                         /> YES
//                     </label>
//                     <label className="flex items-center">
//                         <input 
//                             type="radio" 
//                             name="questions.health.answer" 
//                             value="no" 
//                             className="mr-2"
//                             checked={formData.questions.health.answer === 'no'}
//                             onChange={handleInputChange}
//                         /> NO
//                     </label>
//                 </div>
//                 <textarea 
//                     className="w-full p-2 mt-2 border rounded-md"
//                     name="questions.health.details"
//                     value={formData.questions.health.details || ''}
//                     onChange={handleInputChange}
//                     placeholder="If yes, provide details"
//                 ></textarea>
//             </div>
//         </div>

//         {/* Important Note */}
//         <div className="p-4 bg-gray-100 border-l-4 border-[#155da9]">
//             <h3 className="text-lg font-semibold">Important Note:</h3>
//             <ul className="list-disc list-inside text-gray-700 mt-2">
//                 <li>We use the information mentioned in this form for assessing and filling the information required for your application.</li>
//                 <li>By signing the application, you declare that all the information stated by you in this application is up-to-date and accurate.</li>
//                 <li>In the event of any changes in your personal circumstances, please inform us at the earliest.</li>
//                 <li>Please fill a separate form for your spouse and for dependent child above age of 19 if any, with their information in it.</li>
//             </ul>
//         </div>   
//         <div className="w-full flex mt-10 items-center justify-center">
//             <button 
//                 onClick={handleSubmit}
//                 type="button"
//                 className="border-[#155da9] border-2 mt-8 text-[#155da9] px-10 py-4 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full"
//             >
//                 Submit
//             </button>
//         </div>
//     </div>
// )}

// <div className="pb-10">
//     <Pagination className="flex flex-wrap justify-center gap-2 sm:gap-4">
//         <PaginationContent className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
//             <PaginationItem>
//                 {page > 1 && (
//                     <PaginationPrevious
//                         onClick={(e) => {
//                             e.preventDefault();
//                             setPage(page - 1);
//                         }}
//                         className="px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md hover:bg-gray-100"
//                     />
//                 )}
//             </PaginationItem>

//             {[1, 2, 3, 4, 5, 6, 7, 8].map((pageNum) => (
//                 <PaginationItem key={pageNum}>
//                     <PaginationLink
//                         onClick={(e) => {
//                             e.preventDefault();
//                             setPage(pageNum);
//                         }}
//                         className={`px-3 py-2 text-sm sm:text-base border rounded-md ${
//                             page === pageNum
//                                 ? 'bg-[#155da9] text-white border-[#155da9]'
//                                 : 'text-black border-gray-300 hover:bg-gray-100'
//                         }`}
//                     >
//                         {pageNum}
//                     </PaginationLink>
//                 </PaginationItem>
//             ))}

//             <PaginationItem>
//                 {page < 8 && (
//                     <PaginationNext
//                         onClick={(e) => {
//                             e.preventDefault();
//                             setPage(page + 1);
//                         }}
//                         className="px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md hover:bg-gray-100"
//                     />
//                 )}
//             </PaginationItem>
//         </PaginationContent>
//     </Pagination>
// </div>  
// </div>   
// </div>
//   ) } 





/////////////////////// 






"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/app/components/Navbar";
import { Raleway } from "next/font/google";
import { useSelector } from "react-redux";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import Navbar2 from "@/app/components/Navbar2";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

interface FormData {
  applicationId: string;
  applicationDetails: string;
  previousVisaDetails: string;
  uciNumber: string;
  applicationType: string[];
  applicantInfo: {
    firstName: string;
    lastName: string;
    dob: string;
    placeOfBirth: string;
    eyeColor: string;
    height: string;
    gender: string;
    telephone: string;
    email: string;
    statusInCanada: string;
    currentAddress: string;
    homeCountryAddress: string;
    passportNumber: string;
    passportIssueDate: string;
    passportExpiryDate: string;
    passportCountry: string;
    maritalStatus: string;
  };
  spouseInfo: {
    marriageDate: string;
    firstName: string;
    lastName: string;
    dob: string;
    placeOfBirth: string;
    occupation: string;
    address: string;
  };
  previousMarriage: {
    marriageDate: string;
    endDate: string;
    spouseFirstName: string;
    spouseLastName: string;
    spouseDob: string;
  };
  parentsInfo: {
    father: {
      firstName: string;
      lastName: string;
      dob: string;
      placeOfBirth: string;
      occupation: string;
      address: string;
      dateOfDeath: string;
    };
    mother: {
      firstName: string;
      lastName: string;
      dob: string;
      placeOfBirth: string;
      occupation: string;
      address: string;
      dateOfDeath: string;
    };
  };
  educationHistory: Array<{
    fromDate: string;
    toDate: string;
    instituteName: string;
    city: string;
    course: string;
  }>;
  workHistory: Array<{
    fromDate: string;
    toDate: string;
    designation: string;
    jobDuties: string;
    city: string;
    country: string;
    companyName: string;
  }>;
  children: Array<{
    firstName: string;
    lastName: string;
    relation: string;
    dob: string;
    placeOfBirth: string;
    maritalStatus: string;
    occupation: string;
    currentAddress: string;
    eyeColour: string;
    heightFeet: string;
    heightInches: string;
  }>;
  siblings: Array<{
    name: string;
    relation: string;
    dob: string;
    placeOfBirth: string;
    maritalStatus: string;
    occupation: string;
    currentAddress: string;
  }>;
  addressHistory: Array<{
    fromDate: string;
    toDate: string;
    address: string;
    cityState: string;
    country: string;
    currentStatus: string;
  }>;
  travelHistory: Array<{
    fromDate: string;
    toDate: string;
    place: string;
    purpose: string;
  }>;
  relativesInCanada: Array<{
    firstName: string;
    lastName: string;
    address: string;
    relation: string;
    status: string;
    yearsInCanada: string;
  }>;
  ieltsScores: {
    listening: string;
    reading: string;
    writing: string;
    speaking: string;
    overall: string;
  };
  questions: {
    crime: { answer: string; details: string };
    visa: { answer: string; details: string };
    health: { answer: string; details: string };
  };
}

export default function Form() {
  const [page, setPage] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    applicationId: "",
    applicationDetails: "",
    previousVisaDetails: "",
    uciNumber: "",
    applicationType: [],
    applicantInfo: {
      firstName: "",
      lastName: "",
      dob: "",
      placeOfBirth: "",
      eyeColor: "",
      height: "",
      gender: "",
      telephone: "",
      email: "",
      statusInCanada: "",
      currentAddress: "",
      homeCountryAddress: "",
      passportNumber: "",
      passportIssueDate: "",
      passportExpiryDate: "",
      passportCountry: "",
      maritalStatus: "",
    },
    spouseInfo: {
      marriageDate: "",
      firstName: "",
      lastName: "",
      dob: "",
      placeOfBirth: "",
      occupation: "",
      address: "",
    },
    previousMarriage: {
      marriageDate: "",
      endDate: "",
      spouseFirstName: "",
      spouseLastName: "",
      spouseDob: "",
    },
    parentsInfo: {
      father: {
        firstName: "",
        lastName: "",
        dob: "",
        placeOfBirth: "",
        occupation: "",
        address: "",
        dateOfDeath: "",
      },
      mother: {
        firstName: "",
        lastName: "",
        dob: "",
        placeOfBirth: "",
        occupation: "",
        address: "",
        dateOfDeath: "",
      },
    },
    educationHistory: [],
    workHistory: [],
    children: [],
    siblings: [],
    addressHistory: [],
    travelHistory: [],
    relativesInCanada: [],
    ieltsScores: {
      listening: "",
      reading: "",
      writing: "",
      speaking: "",
      overall: "",
    },
    questions: {
      crime: { answer: "", details: "" },
      visa: { answer: "", details: "" },
      health: { answer: "", details: "" },
    },
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  const router = useRouter();
  const [educationRows, setEducationRows] = useState([{ id: 1 }]);
  const [workRows, setWorkRows] = useState([{ id: 1 }]);
  const [addressRows, setAddressRows] = useState([{ id: 1 }]);
  const [travelRows, setTravelRows] = useState([{ id: 1 }]);
  const [childrenRows, setChildrenRows] = useState([{ id: 1 }]);
  const [siblingsRows, setSiblingsRows] = useState([{ id: 1 }]);
  const [relativesRows, setRelativesRows] = useState([{ id: 1 }]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement;
    const checked = target.checked;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        applicationType: checked
          ? [...prev.applicationType, value]
          : prev.applicationType.filter((item) => item !== value),
      }));
    } else if (name.startsWith("applicantInfo.")) {
      const fieldName = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        applicantInfo: { ...prev.applicantInfo, [fieldName]: value },
      }));
    } else if (name.startsWith("spouseInfo.")) {
      const fieldName = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        spouseInfo: { ...prev.spouseInfo, [fieldName]: value },
      }));
    } else if (name.startsWith("previousMarriage.")) {
      const fieldName = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        previousMarriage: { ...prev.previousMarriage, [fieldName]: value },
      }));
    } else if (name.startsWith("parentsInfo.father.")) {
      const fieldName = name.split(".")[2];
      setFormData((prev) => ({
        ...prev,
        parentsInfo: {
          ...prev.parentsInfo,
          father: { ...prev.parentsInfo.father, [fieldName]: value },
        },
      }));
    } else if (name.startsWith("parentsInfo.mother.")) {
      const fieldName = name.split(".")[2];
      setFormData((prev) => ({
        ...prev,
        parentsInfo: {
          ...prev.parentsInfo,
          mother: { ...prev.parentsInfo.mother, [fieldName]: value },
        },
      }));
    } else if (name.startsWith("ieltsScores.")) {
      const fieldName = name.split(".")[1];
      setFormData((prev) => ({
        ...prev,
        ieltsScores: { ...prev.ieltsScores, [fieldName]: value },
      }));
    } else if (name.startsWith("questions.crime.")) {
      const fieldName = name.split(".")[2];
      setFormData((prev) => ({
        ...prev,
        questions: {
          ...prev.questions,
          crime: { ...prev.questions.crime, [fieldName]: value },
        },
      }));
    } else if (name.startsWith("questions.visa.")) {
      const fieldName = name.split(".")[2];
      setFormData((prev) => ({
        ...prev,
        questions: {
          ...prev.questions,
          visa: { ...prev.questions.visa, [fieldName]: value },
        },
      }));
    } else if (name.startsWith("questions.health.")) {
      const fieldName = name.split(".")[2];
      setFormData((prev) => ({
        ...prev,
        questions: {
          ...prev.questions,
          health: { ...prev.questions.health, [fieldName]: value },
        },
      }));
    } else if (name.startsWith("educationHistory.")) {
      const parts = name.split(".");
      const index = parseInt(parts[1]);
      const fieldName = parts[2];
      setFormData((prev) => {
        const updatedEducationHistory = [...prev.educationHistory];
        if (!updatedEducationHistory[index]) {
          updatedEducationHistory[index] = {
            fromDate: "",
            toDate: "",
            instituteName: "",
            city: "",
            course: "",
          };
        }
        updatedEducationHistory[index] = {
          ...updatedEducationHistory[index],
          [fieldName]: value,
        };
        return { ...prev, educationHistory: updatedEducationHistory };
      });
    } else if (name.startsWith("workHistory.")) {
      const parts = name.split(".");
      const index = parseInt(parts[1]);
      const fieldName = parts[2];
      setFormData((prev) => {
        const updatedWorkHistory = [...prev.workHistory];
        if (!updatedWorkHistory[index]) {
          updatedWorkHistory[index] = {
            fromDate: "",
            toDate: "",
            designation: "",
            jobDuties: "",
            city: "",
            country: "",
            companyName: "",
          };
        }
        updatedWorkHistory[index] = {
          ...updatedWorkHistory[index],
          [fieldName]: value,
        };
        return { ...prev, workHistory: updatedWorkHistory };
      });
    } else if (name.startsWith("children.")) {
      const parts = name.split(".");
      const index = parseInt(parts[1]);
      const fieldName = parts[2];
      setFormData((prev) => {
        const updatedChildren = [...prev.children];
        if (!updatedChildren[index]) {
          updatedChildren[index] = {
            firstName: "",
            lastName: "",
            relation: "",
            dob: "",
            placeOfBirth: "",
            maritalStatus: "",
            occupation: "",
            currentAddress: "",
            eyeColour: "",
            heightFeet: "",
            heightInches: "",
          };
        }
        updatedChildren[index] = {
          ...updatedChildren[index],
          [fieldName]: value,
        };
        return { ...prev, children: updatedChildren };
      });
    } else if (name.startsWith("siblings.")) {
      const parts = name.split(".");
      const index = parseInt(parts[1]);
      const fieldName = parts[2];
      setFormData((prev) => {
        const updatedSiblings = [...prev.siblings];
        if (!updatedSiblings[index]) {
          updatedSiblings[index] = {
            name: "",
            relation: "",
            dob: "",
            placeOfBirth: "",
            maritalStatus: "",
            occupation: "",
            currentAddress: "",
          };
        }
        updatedSiblings[index] = {
          ...updatedSiblings[index],
          [fieldName]: value,
        };
        return { ...prev, siblings: updatedSiblings };
      });
    } else if (name.startsWith("addressHistory.")) {
      const parts = name.split(".");
      const index = parseInt(parts[1]);
      const fieldName = parts[2];
      setFormData((prev) => {
        const updatedAddressHistory = [...prev.addressHistory];
        if (!updatedAddressHistory[index]) {
          updatedAddressHistory[index] = {
            fromDate: "",
            toDate: "",
            address: "",
            cityState: "",
            country: "",
            currentStatus: "",
          };
        }
        updatedAddressHistory[index] = {
          ...updatedAddressHistory[index],
          [fieldName]: value,
        };
        return { ...prev, addressHistory: updatedAddressHistory };
      });
    } else if (name.startsWith("travelHistory.")) {
      const parts = name.split(".");
      const index = parseInt(parts[1]);
      const fieldName = parts[2];
      setFormData((prev) => {
        const updatedTravelHistory = [...prev.travelHistory];
        if (!updatedTravelHistory[index]) {
          updatedTravelHistory[index] = {
            fromDate: "",
            toDate: "",
            place: "",
            purpose: "",
          };
        }
        updatedTravelHistory[index] = {
          ...updatedTravelHistory[index],
          [fieldName]: value,
        };
        return { ...prev, travelHistory: updatedTravelHistory };
      });
    } else if (name.startsWith("relativesInCanada.")) {
      const parts = name.split(".");
      const index = parseInt(parts[1]);
      const fieldName = parts[2];
      setFormData((prev) => {
        const updatedRelatives = [...prev.relativesInCanada];
        if (!updatedRelatives[index]) {
          updatedRelatives[index] = {
            firstName: "",
            lastName: "",
            address: "",
            relation: "",
            status: "",
            yearsInCanada: "",
          };
        }
        updatedRelatives[index] = {
          ...updatedRelatives[index],
          [fieldName]: value,
        };
        return { ...prev, relativesInCanada: updatedRelatives };
      });
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const addEducationRow = () => {
    setEducationRows([...educationRows, { id: educationRows.length + 1 }]);
    setFormData((prev) => ({
      ...prev,
      educationHistory: [
        ...prev.educationHistory,
        { fromDate: "", toDate: "", instituteName: "", city: "", course: "" },
      ],
    }));
  };

  const addWorkRow = () => {
    setWorkRows([...workRows, { id: workRows.length + 1 }]);
    setFormData((prev) => ({
      ...prev,
      workHistory: [
        ...prev.workHistory,
        {
          fromDate: "",
          toDate: "",
          designation: "",
          jobDuties: "",
          city: "",
          country: "",
          companyName: "",
        },
      ],
    }));
  };

  const addAddressRow = () => {
    setAddressRows([...addressRows, { id: addressRows.length + 1 }]);
    setFormData((prev) => ({
      ...prev,
      addressHistory: [
        ...prev.addressHistory,
        {
          fromDate: "",
          toDate: "",
          address: "",
          cityState: "",
          country: "",
          currentStatus: "",
        },
      ],
    }));
  };

  const addTravelRow = () => {
    setTravelRows([...travelRows, { id: travelRows.length + 1 }]);
    setFormData((prev) => ({
      ...prev,
      travelHistory: [
        ...prev.travelHistory,
        { fromDate: "", toDate: "", place: "", purpose: "" },
      ],
    }));
  };

  const addChildrenRow = () => {
    setChildrenRows([...childrenRows, { id: childrenRows.length + 1 }]);
    setFormData((prev) => ({
      ...prev,
      children: [
        ...prev.children,
        {
          firstName: "",
          lastName: "",
          relation: "",
          dob: "",
          placeOfBirth: "",
          maritalStatus: "",
          occupation: "",
          currentAddress: "",
          eyeColour: "",
          heightFeet: "",
          heightInches: "",
        },
      ],
    }));
  };

  const addSiblingsRow = () => {
    setSiblingsRows([...siblingsRows, { id: siblingsRows.length + 1 }]);
    setFormData((prev) => ({
      ...prev,
      siblings: [
        ...prev.siblings,
        {
          name: "",
          relation: "",
          dob: "",
          placeOfBirth: "",
          maritalStatus: "",
          occupation: "",
          currentAddress: "",
        },
      ],
    }));
  };

  const addRelativeRow = () => {
    setRelativesRows([...relativesRows, { id: relativesRows.length + 1 }]);
    setFormData((prev) => ({
      ...prev,
      relativesInCanada: [
        ...prev.relativesInCanada,
        {
          firstName: "",
          lastName: "",
          address: "",
          relation: "",
          status: "",
          yearsInCanada: "",
        },
      ],
    }));
  };

  const user = useSelector((state: any) => state.auth.user);
  const userId = user?._id;

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   setIsSubmitting(true);
    
  //   try {
  //     // 1. Submit the form data
  //     const res = await axios.post(
  //       "http://localhost:3000/api/applicant-form",
  //       { ...formData, userId },
  //       {
  //         headers: { "Content-Type": "application/json" },
  //         withCredentials: true,
  //       }
  //     );     
  //     console.log(res.data) ;
  //      const { applicationId } = res.data.applicant; 
  //      console.log(applicationId) ; 

  // if (!applicationId) {
  //   throw new Error("No applicationId returned from backend");
  // }

  
  //     // 2. Update the tracker to mark form as submitted
  //     try {
  //       await axios.patch(
  // `/api/tracker/${userId}/${applicationId}`, // <--- fix here
  //         {
  //           field: "formFilling",
  //           value: true
  //         },
  //         {
  //           headers: { "Content-Type": "application/json" },
  //           withCredentials: true,
  //         }
  //       );
  //     } catch (trackerError) {
  //       console.error("Failed to update tracker:", trackerError);
  //       // You might want to handle this error differently
  //     }
  
  //     // 3. Redirect after successful submission
  //     router.push("/home");
  //   } catch (error: any) {
  //     console.error("Submission error:", error);
  //   } finally {
  //     setIsSubmitting(false);
  //   }
  // };



  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    let applicationId = formData.applicationId; // If you have this field in your formData
    let res;
    
    if (applicationId) {
      // Update existing application using PATCH
      res = await axios.patch(
        `/api/applicant-form/${userId}`, // Your PATCH endpoint
        { 
          ...formData, 
          userId,
          applicationId // Include applicationId in the request body
        },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
    } else {
      // Create new application using POST
      res = await axios.post(
        "/api/applicant-form",
        { ...formData, userId },
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      
      // Get the applicationId from the response for new applications
      applicationId = res.data.applicant.applicationId;
    }
    
    console.log("Response data:", res.data);
    
    // Update the tracker to mark form as submitted
    if (applicationId) {
      try {
        await axios.patch(
          `/api/tracker/${userId}/${applicationId}`,
          {
            applicationId: applicationId,
            field: "formFilling",
            value: true
          },
          {
            headers: { "Content-Type": "application/json" },
            withCredentials: true,
          }
        );
        console.log("Tracker updated successfully");
      } catch (trackerError) {
        console.error("Failed to update tracker:", trackerError);
        // Continue even if tracker update fails
      }
    }

    // Redirect after successful submission
    router.push("/home");
  } catch (error: any) {
    console.error("Submission error:", error);
    alert("Failed to submit form. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};
  return (
    <div style={{ fontFamily: raleway.style.fontFamily }} className="w-full text-gray-500">
      <Navbar2 />
      <div className="page-container pt-[140px] pb-10 pl-4 pr-4 sm:pl-10 sm:pr-10">
        {/* Page 1 */}
        {page === 1 && (
          <div className="page1 mb-10 sm:px-6 lg:px-8">
            <h2 className="sm:text-4xl text-2xl mb-10 text-center sm:text-left">
              PERSONAL INFORMATION SHEET
            </h2>
            <div className="w-full max-w-4xl mx-auto">
              <h2 className="text-lg text-black mb-4">DETAILS OF APPLICATION:</h2>
              <textarea
                className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] p-2 border rounded-md mb-4"
                placeholder="Enter details here..."
                name="applicationDetails"
                value={formData.applicationDetails}
                onChange={handleInputChange}
              ></textarea>
              <h2 className="text-lg text-black mb-4">
                Have you applied for a visa to Canada before? (If yes, please provide details):
              </h2>
              <textarea
                className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] p-2 border rounded-md mb-4"
                placeholder="Enter previous visa details..."
                name="previousVisaDetails"
                value={formData.previousVisaDetails}
                onChange={handleInputChange}
              ></textarea>
              <h2 className="text-lg text-black mb-4">
                UCI No: (8 digits number on your Canadian Permit/Visa/previous refusal letter)
              </h2>
              <input
                type="text"
                className="w-full sm:w-[80%] md:w-[70%] lg:w-[60%] p-2 border rounded-md mb-4"
                placeholder="Enter UCI Number..."
                name="uciNumber"
                value={formData.uciNumber}
                onChange={handleInputChange}
              />
              <div>
                <h2 className="text-lg text-black mb-4">Select Your Application Type</h2>
                <form className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                  {[
                    "Express Entry - Principal Applicant",
                    "PNP",
                    "Spouse",
                    "Study Permit",
                    "Dependant (Over 18 Years of Age)",
                    "Work Permit",
                    "Visitor Visa/Super Visa",
                  ].map((option, index) => (
                    <div key={index} className="flex items-center">
                      <input
                        type="checkbox"
                        id={option}
                        name="applicationType"
                        className="mr-2 w-5 h-5"
                        value={option}
                        checked={formData.applicationType.includes(option)}
                        onChange={handleInputChange}
                      />
                      <label htmlFor={option} className="text-gray-700">
                        {option}
                      </label>
                    </div>
                  ))}
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Page 2 */}
        {page === 2 && (
          <div id="page2" className="page2 pb-10 sm:px-10">
            <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">
              Applicant Information
            </h2>
            <form className="space-y-6">
              <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">First Name:</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter First Name"
                    name="applicantInfo.firstName"
                    value={formData.applicantInfo.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Last Name (Surname):</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Last Name"
                    name="applicantInfo.lastName"
                    value={formData.applicantInfo.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Date of Birth (dd/mm/yy):</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    name="applicantInfo.dob"
                    value={formData.applicantInfo.dob}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Place of Birth:</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Place of Birth"
                    name="applicantInfo.placeOfBirth"
                    value={formData.applicantInfo.placeOfBirth}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Color of Eyes:</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Eye Color"
                    name="applicantInfo.eyeColor"
                    value={formData.applicantInfo.eyeColor}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Height (inches/cm):</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Height"
                    name="applicantInfo.height"
                    value={formData.applicantInfo.height}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Gender:</label>
                  <select
                    className="w-full p-2 border rounded-md"
                    name="applicantInfo.gender"
                    value={formData.applicantInfo.gender}
                    onChange={handleInputChange}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Telephone No:</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Telephone No."
                    name="applicantInfo.telephone"
                    value={formData.applicantInfo.telephone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Email Address:</label>
                  <input
                    type="email"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Email Address"
                    name="applicantInfo.email"
                    value={formData.applicantInfo.email}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Status in Canada (If applicable):</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Status in Canada"
                    name="applicantInfo.statusInCanada"
                    value={formData.applicantInfo.statusInCanada}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Current Address:</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Current Address"
                    name="applicantInfo.currentAddress"
                    value={formData.applicantInfo.currentAddress}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Address in Home Country:</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Address in Home Country"
                    name="applicantInfo.homeCountryAddress"
                    value={formData.applicantInfo.homeCountryAddress}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Passport No:</label>
                  <input
                    type="number"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Passport No"
                    name="applicantInfo.passportNumber"
                    value={formData.applicantInfo.passportNumber}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Issue Date:</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    name="applicantInfo.passportIssueDate"
                    value={formData.applicantInfo.passportIssueDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Expiry Date:</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    name="applicantInfo.passportExpiryDate"
                    value={formData.applicantInfo.passportExpiryDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Country of Issue:</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Country of Issue"
                    name="applicantInfo.passportCountry"
                    value={formData.applicantInfo.passportCountry}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full">
                <label className="text-lg text-black mb-2">Marital Status:</label>
                <select
                  className="w-full p-2 border rounded-md"
                  name="applicantInfo.maritalStatus"
                  value={formData.applicantInfo.maritalStatus}
                  onChange={handleInputChange}
                >
                  <option value="">Select Marital Status</option>
                  <option value="single">Single</option>
                  <option value="married">Married</option>
                  <option value="divorced">Divorced</option>
                  <option value="widowed">Widowed</option>
                </select>
              </div>
            </form>
          </div>
        )}

        {/* Page 3 */}
        {page === 3 && (
          <div id="page3" className="page3 pb-10 sm:px-10">
            <h3 className="text-2xl sm:text-left text-center sm:text-4xl mb-4">
              Spouse/Common Law Partner Information
            </h3>
            <div className="spouse-info space-y-6 mb-10">
              <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Date of Marriage:</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    name="spouseInfo.marriageDate"
                    value={formData.spouseInfo.marriageDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">First Name:</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter First Name"
                    name="spouseInfo.firstName"
                    value={formData.spouseInfo.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Last Name:</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Last Name"
                    name="spouseInfo.lastName"
                    value={formData.spouseInfo.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Date of Birth (dd/mm/yy):</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    name="spouseInfo.dob"
                    value={formData.spouseInfo.dob}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Place of Birth:</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Place of Birth"
                    name="spouseInfo.placeOfBirth"
                    value={formData.spouseInfo.placeOfBirth}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Occupation:</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Occupation"
                    name="spouseInfo.occupation"
                    value={formData.spouseInfo.occupation}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Spouse Address:</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Spouse Address"
                    name="spouseInfo.address"
                    value={formData.spouseInfo.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="previous-marriage-info space-y-6 mb-10">
              <h3 className="text-4xl mb-4">If Married Previously</h3>
              <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Date of Marriage:</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    name="previousMarriage.marriageDate"
                    value={formData.previousMarriage.marriageDate}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">End Date of Marriage:</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    name="previousMarriage.endDate"
                    value={formData.previousMarriage.endDate}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:space-x-4 gap-y-6">
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Spouse First Name:</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Spouse First Name"
                    name="previousMarriage.spouseFirstName"
                    value={formData.previousMarriage.spouseFirstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Spouse Last Name:</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter Spouse Last Name"
                    name="previousMarriage.spouseLastName"
                    value={formData.previousMarriage.spouseLastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-y-6">
                <div className="w-full sm:w-1/2">
                  <label className="text-lg text-black mb-2">Date of Birth (dd/mm/yy):</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    name="previousMarriage.spouseDob"
                    value={formData.previousMarriage.spouseDob}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Page 4 */}
        {page === 4 && (
          <div id="page4" className="page4 mb-10 sm:px-10">
            <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">
              Parental Information
            </h2>
            <div className="sm:p-6 rounded-lg mb-6">
              <h3 className="text-2xl mb-4">Father’s Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    First Name:
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter first name"
                    name="parentsInfo.father.firstName"
                    value={formData.parentsInfo.father.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter last name"
                    name="parentsInfo.father.lastName"
                    value={formData.parentsInfo.father.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Date of Birth (dd/mm/yy):
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    name="parentsInfo.father.dob"
                    value={formData.parentsInfo.father.dob}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Place of Birth:
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter place of birth"
                    name="parentsInfo.father.placeOfBirth"
                    value={formData.parentsInfo.father.placeOfBirth}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Occupation:
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter occupation"
                    name="parentsInfo.father.occupation"
                    value={formData.parentsInfo.father.occupation}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Current Address:
                  </label>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter current address"
                    name="parentsInfo.father.address"
                    value={formData.parentsInfo.father.address}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    If Deceased, Date of Death (if applicable):
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    name="parentsInfo.father.dateOfDeath"
                    value={formData.parentsInfo.father.dateOfDeath}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="sm:p-6 rounded-lg">
              <h3 className="text-2xl mb-4">Mother’s Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    First Name:
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter first name"
                    name="parentsInfo.mother.firstName"
                    value={formData.parentsInfo.mother.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Last Name:
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter last name"
                    name="parentsInfo.mother.lastName"
                    value={formData.parentsInfo.mother.lastName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Date of Birth (dd/mm/yy):
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    name="parentsInfo.mother.dob"
                    value={formData.parentsInfo.mother.dob}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Place of Birth:
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter place of birth"
                    name="parentsInfo.mother.placeOfBirth"
                    value={formData.parentsInfo.mother.placeOfBirth}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Occupation:
                  </label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter occupation"
                    name="parentsInfo.mother.occupation"
                    value={formData.parentsInfo.mother.occupation}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    Current Address:
                  </label>
                  <textarea
                    className="w-full p-2 border rounded-md"
                    placeholder="Enter current address"
                    name="parentsInfo.mother.address"
                    value={formData.parentsInfo.mother.address}
                    onChange={handleInputChange}
                  ></textarea>
                </div>
                <div>
                  <label className="block text-gray-700 text-sm font-semibold mb-1">
                    If Deceased, Date of Death (if applicable):
                  </label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-md"
                    name="parentsInfo.mother.dateOfDeath"
                    value={formData.parentsInfo.mother.dateOfDeath}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Page 5 */}
        {page === 5 && (
          <div id="page5" className="page5 mb-10 sm:px-10 overflow-x-auto">
            <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">
              Education and Work History
            </h2>
            <div className="mb-10">
              <h3 className="text-2xl mb-4">Education History</h3>
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[700px] text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="p-2">From (dd/mm/yy)</th>
                      <th className="p-2">To (dd/mm/yy)</th>
                      <th className="p-2">Institute Name</th>
                      <th className="p-2">City</th>
                      <th className="p-2">Course</th>
                    </tr>
                  </thead>
                  <tbody>
                    {educationRows.map((row, index) => (
                      <tr key={row.id} className="border-b">
                        <td className="p-2">
                          <input
                            type="date"
                            className="w-full p-1 border rounded-md"
                            name={`educationHistory.${index}.fromDate`}
                            value={formData.educationHistory[index]?.fromDate || ""}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="date"
                            className="w-full p-1 border rounded-md"
                            name={`educationHistory.${index}.toDate`}
                            value={formData.educationHistory[index]?.toDate || ""}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            className="w-full p-1 border rounded-md"
                            placeholder="Institute Name"
                            name={`educationHistory.${index}.instituteName`}
                            value={formData.educationHistory[index]?.instituteName || ""}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            className="w-full p-1 border rounded-md"
                            placeholder="City"
                            name={`educationHistory.${index}.city`}
                            value={formData.educationHistory[index]?.city || ""}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            className="w-full p-1 border rounded-md"
                            placeholder="Course"
                            name={`educationHistory.${index}.course`}
                            value={formData.educationHistory[index]?.course || ""}
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button onClick={addEducationRow} className="mt-2 flex items-center text-[#155da9]">
                <Plus className="w-5 h-5 mr-1" /> Add Education Row
              </button>
            </div>
            <div>
              <h3 className="text-2xl mb-4">Work History (From 18th Birthday)</h3>
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[900px] text-left">
                  <thead>
                    <tr className="border-b">
                      <th className="p-2">From (Y/M/D)</th>
                      <th className="p-2">To (Y/M/D)</th>
                      <th className="p-2">Designation</th>
                      <th className="p-2">Job Duties</th>
                      <th className="p-2">City</th>
                      <th className="p-2">Country</th>
                      <th className="p-2">Company Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    {workRows.map((row, index) => (
                      <tr key={row.id} className="border-b">
                        <td className="p-2">
                          <input
                            type="date"
                            className="w-full p-1 border rounded-md"
                            name={`workHistory.${index}.fromDate`}
                            value={formData.workHistory[index]?.fromDate || ""}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="date"
                            className="w-full p-1 border rounded-md"
                            name={`workHistory.${index}.toDate`}
                            value={formData.workHistory[index]?.toDate || ""}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            className="w-full p-1 border rounded-md"
                            placeholder="Designation"
                            name={`workHistory.${index}.designation`}
                            value={formData.workHistory[index]?.designation || ""}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            className="w-full p-1 border rounded-md"
                            placeholder="Job Duties"
                            name={`workHistory.${index}.jobDuties`}
                            value={formData.workHistory[index]?.jobDuties || ""}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            className="w-full p-1 border rounded-md"
                            placeholder="City"
                            name={`workHistory.${index}.city`}
                            value={formData.workHistory[index]?.city || ""}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            className="w-full p-1 border rounded-md"
                            placeholder="Country"
                            name={`workHistory.${index}.country`}
                            value={formData.workHistory[index]?.country || ""}
                            onChange={handleInputChange}
                          />
                        </td>
                        <td className="p-2">
                          <input
                            type="text"
                            className="w-full p-1 border rounded-md"
                            placeholder="Company Name"
                            name={`workHistory.${index}.companyName`}
                            value={formData.workHistory[index]?.companyName || ""}
                            onChange={handleInputChange}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button onClick={addWorkRow} className="mt-2 flex items-center text-[#155da9]">
                <Plus className="w-5 h-5 mr-1" /> Add Work Row
              </button>
            </div>
          </div>
        )}

        {/* Page 6 */}
        {page === 6 && (
          <div id="page6" className="page6 mb-10 sm:px-10">
            <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">
              Additional Information
            </h2>
            <div className="mb-10">
              <h3 className="text-2xl mb-4">Children of Main Applicant</h3>
              {childrenRows.map((row, index) => (
                <div key={row.id} className="mb-6 sm:p-4 border-b border-gray-300 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="First Name"
                      name={`children.${index}.firstName`}
                      value={formData.children[index]?.firstName || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Last Name"
                      name={`children.${index}.lastName`}
                      value={formData.children[index]?.lastName || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <select
                      className="w-full p-2 border rounded-md"
                      name={`children.${index}.relation`}
                      value={formData.children[index]?.relation || ""}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Relation</option>
                      <option value="Son">Son</option>
                      <option value="Daughter">Daughter</option>
                    </select>
                    <input
                      type="date"
                      className="w-full p-2 border rounded-md"
                      name={`children.${index}.dob`}
                      value={formData.children[index]?.dob || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Place of Birth"
                      name={`children.${index}.placeOfBirth`}
                      value={formData.children[index]?.placeOfBirth || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-2">
                      Marital Status: Married (M), Unmarried/Single (S), Divorced (D), Widowed (W)
                    </p>
                    <div className="grid gap-4 sm:grid-cols-3">
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="M / S / D / W"
                        name={`children.${index}.maritalStatus`}
                        value={formData.children[index]?.maritalStatus || ""}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="Occupation"
                        name={`children.${index}.occupation`}
                        value={formData.children[index]?.occupation || ""}
                        onChange={handleInputChange}
                      />
                      <input
                        type="text"
                        className="w-full p-2 border rounded-md"
                        placeholder="Current Address"
                        name={`children.${index}.currentAddress`}
                        value={formData.children[index]?.currentAddress || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Eye Colour"
                      name={`children.${index}.eyeColour`}
                      value={formData.children[index]?.eyeColour || ""}
                      onChange={handleInputChange}
                    />
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="number"
                        className="w-full p-2 border rounded-md"
                        placeholder="Feet"
                        name={`children.${index}.heightFeet`}
                        value={formData.children[index]?.heightFeet || ""}
                        onChange={handleInputChange}
                      />
                      <input
                        type="number"
                        className="w-full p-2 border rounded-md"
                        placeholder="Inches"
                        name={`children.${index}.heightInches`}
                        value={formData.children[index]?.heightInches || ""}
                        onChange={handleInputChange}
                      />
                    </div>
                  </div>
                </div>
              ))}
              <button onClick={addChildrenRow} className="mt-2 flex items-center text-[#155da9]">
                <Plus className="w-5 h-5 mr-1" /> Add Child
              </button>
            </div>
            <div>
              <h3 className="text-2xl mb-4">Brothers & Sisters of Main Applicant</h3>
              {siblingsRows.map((row, index) => (
                <div key={row.id} className="mb-6 sm:p-4 border-b border-gray-300 space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Name"
                      name={`siblings.${index}.name`}
                      value={formData.siblings[index]?.name || ""}
                      onChange={handleInputChange}
                    />
                    <select
                      className="w-full p-2 border rounded-md"
                      name={`siblings.${index}.relation`}
                      value={formData.siblings[index]?.relation || ""}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Relation</option>
                      <option value="Brother">Brother</option>
                      <option value="Sister">Sister</option>
                    </select>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <input
                      type="date"
                      className="w-full p-2 border rounded-md"
                      name={`siblings.${index}.dob`}
                      value={formData.siblings[index]?.dob || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Place of Birth"
                      name={`siblings.${index}.placeOfBirth`}
                      value={formData.siblings[index]?.placeOfBirth || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="M / S / D / W"
                      name={`siblings.${index}.maritalStatus`}
                      value={formData.siblings[index]?.maritalStatus || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <p className="text-sm text-gray-500">
                    Marital Status: Married (M), Unmarried/Single (S), Divorced (D), Widowed (W)
                  </p>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Occupation"
                      name={`siblings.${index}.occupation`}
                      value={formData.siblings[index]?.occupation || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Current Address"
                      name={`siblings.${index}.currentAddress`}
                      value={formData.siblings[index]?.currentAddress || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              ))}
              <button onClick={addSiblingsRow} className="mt-2 flex items-center text-[#155da9]">
                <Plus className="w-5 h-5 mr-1" /> Add Sibling
              </button>
            </div>
          </div>
        )}

        {/* Page 7 */}
        {page === 7 && (
          <div id="page7" className="page7 mb-10 px-4 sm:px-10">
            <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">
              Additional Information
            </h2>
            <div className="mb-10">
              <h3 className="sm:text-2xl text-lg mb-4">
                Address of Places the Main Applicant Has Lived Since 18th Birthday
              </h3>
              <p className="text-sm text-gray-500 mb-2">
                Do not leave any gap in the time period.
              </p>
              {addressRows.map((row, index) => (
                <div key={row.id} className="mb-6 sm:p-4 border-b border-gray-300 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="date"
                      className="w-full p-2 border rounded-md"
                      placeholder="From (Y/M/D)"
                      name={`addressHistory.${index}.fromDate`}
                      value={formData.addressHistory[index]?.fromDate || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="date"
                      className="w-full p-2 border rounded-md"
                      placeholder="To (Y/M/D)"
                      name={`addressHistory.${index}.toDate`}
                      value={formData.addressHistory[index]?.toDate || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Address"
                      name={`addressHistory.${index}.address`}
                      value={formData.addressHistory[index]?.address || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="City/State"
                      name={`addressHistory.${index}.cityState`}
                      value={formData.addressHistory[index]?.cityState || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Country"
                      name={`addressHistory.${index}.country`}
                      value={formData.addressHistory[index]?.country || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div>
                    <select
                      className="w-full p-2 border rounded-md"
                      name={`addressHistory.${index}.currentStatus`}
                      value={formData.addressHistory[index]?.currentStatus || ""}
                      onChange={handleInputChange}
                    >
                      <option value="">Select Status</option>
                      <option value="Studying">Studying</option>
                      <option value="Working">Working</option>
                      <option value="Not Employed">Not Employed</option>
                    </select>
                  </div>
                </div>
              ))}
              <button onClick={addAddressRow} className="mt-2 flex items-center text-[#155da9]">
                <Plus className="w-5 h-5 mr-1" /> Add Address
              </button>
            </div>
            <div className="mb-10">
              <h3 className="sm:text-2xl text-lg mb-4">
                Travel History - Details of Travel Outside Country of Residence & Origin
              </h3>
              {travelRows.map((row, index) => (
                <div key={row.id} className="mb-6 sm:p-4 border-b border-gray-300 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="date"
                      className="w-full p-2 border rounded-md"
                      placeholder="From (dd/mm/yy)"
                      name={`travelHistory.${index}.fromDate`}
                      value={formData.travelHistory[index]?.fromDate || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="date"
                      className="w-full p-2 border rounded-md"
                      placeholder="To (dd/mm/yy)"
                      name={`travelHistory.${index}.toDate`}
                      value={formData.travelHistory[index]?.toDate || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Place (City, Country)"
                      name={`travelHistory.${index}.place`}
                      value={formData.travelHistory[index]?.place || ""}
                      onChange={handleInputChange}
                    />
                    <input
                      type="text"
                      className="w-full p-2 border rounded-md"
                      placeholder="Purpose of Travel"
                      name={`travelHistory.${index}.purpose`}
                      value={formData.travelHistory[index]?.purpose || ""}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
              ))}
              <button onClick={addTravelRow} className="mt-2 flex items-center text-[#155da9]">
                <Plus className="w-5 h-5 mr-1" /> Add Travel Record
              </button>
            </div>
          </div>
        )}

        {/* Page 8 */}
      {page === 8 && (
    <div id="page8" className="page8 mb-10 px-4 sm:px-10">
        <h2 className="sm:text-4xl text-2xl sm:text-left text-center mb-10">Additional Information</h2>

        {/* Relatives in Canada */}
        <div className="mb-10">
            <h3 className="text-lg sm:text-2xl mb-4">Relatives in Canada (If any)</h3>

            {relativesRows.map((row, index) => (
                <div key={row.id} className="mb-6 sm:p-4 border-b border-gray-300 space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-3">
                        <input 
                            type="text" 
                            className="w-full p-2 border rounded-md"
                            placeholder="First Name"
                            name={`relativesInCanada.${index}.firstName`}
                            value={formData.relativesInCanada[index]?.firstName || ''}
                            onChange={handleInputChange}
                        />
                        <input 
                            type="text" 
                            className="w-full p-2 border rounded-md"
                            placeholder="Last Name"
                            name={`relativesInCanada.${index}.lastName`}
                            value={formData.relativesInCanada[index]?.lastName || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
                        <input 
                            type="text" 
                            className="w-full p-2 border rounded-md"
                            placeholder="Address"
                            name={`relativesInCanada.${index}.address`}
                            value={formData.relativesInCanada[index]?.address || ''}
                            onChange={handleInputChange}
                        />
                        <input 
                            type="text" 
                            className="w-full p-2 border rounded-md"
                            placeholder="Relation with Applicant"
                            name={`relativesInCanada.${index}.relation`}
                            value={formData.relativesInCanada[index]?.relation || ''}
                            onChange={handleInputChange}
                        />
                        <input 
                            type="text" 
                            className="w-full p-2 border rounded-md"
                            placeholder="Status in Canada"
                            name={`relativesInCanada.${index}.status`}
                            value={formData.relativesInCanada[index]?.status || ''}
                            onChange={handleInputChange}
                        />
                    </div>
                    <input 
                        type="text" 
                        className="w-full p-2 border rounded-md"
                        placeholder="How many years in Canada?"
                        name={`relativesInCanada.${index}.yearsInCanada`}
                        value={formData.relativesInCanada[index]?.yearsInCanada || ''}
                        onChange={handleInputChange}
                    />
                </div>
            ))}

            <button onClick={addRelativeRow} className="mt-2 flex items-center text-[#155da9]">
                <Plus className="w-5 h-5 mr-1" /> Add Relative
            </button>
        </div>

        {/* IELTS Scores */}
        <div className="mb-10">
            <h3 className="text-lg sm:text-2xl mb-4">IELTS Score for Each Module</h3>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-3">
                <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    name="ieltsScores.listening"
                    value={formData.ieltsScores.listening || ''}
                    onChange={handleInputChange}
                    placeholder="Listening Score"
                />
                <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    name="ieltsScores.reading"
                    value={formData.ieltsScores.reading || ''}
                    onChange={handleInputChange}
                    placeholder="Reading Score"
                />
                <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    name="ieltsScores.writing"
                    value={formData.ieltsScores.writing || ''}
                    onChange={handleInputChange}
                    placeholder="Writing Score"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    name="ieltsScores.speaking"
                    value={formData.ieltsScores.speaking || ''}
                    onChange={handleInputChange}
                    placeholder="Speaking Score"
                />
                <input 
                    type="text" 
                    className="w-full p-2 border rounded-md"
                    name="ieltsScores.overall"
                    value={formData.ieltsScores.overall || ''}
                    onChange={handleInputChange}
                    placeholder="Overall Score"
                />
            </div>
        </div>

        {/* Important Questions */}
        <div className="mb-10">
            <h3 className="text-lg sm:text-2xl mb-4">Please Read the Following and Answer Carefully</h3>
            <p className="text-sm text-gray-500 mb-4">(Applicable to all family members in the application)</p>

            {/* Question 1 */}
            <div className="mb-6">
                <p className="font-semibold">a) Have you ever been convicted of, currently charged with, on trial for, or party to any crime/offence in any country?</p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
                    <label className="flex items-center">
                        <input 
                            type="radio" 
                            name="questions.crime.answer" 
                            value="yes" 
                            className="mr-2"
                            checked={formData.questions.crime.answer === 'yes'}
                            onChange={handleInputChange}
                        /> YES
                    </label>
                    <label className="flex items-center">
                        <input 
                            type="radio" 
                            name="questions.crime.answer" 
                            value="no" 
                            className="mr-2"
                            checked={formData.questions.crime.answer === 'no'}
                            onChange={handleInputChange}
                        /> NO
                    </label>
                </div>
                <textarea 
                    className="w-full p-2 mt-2 border rounded-md"
                    name="questions.crime.details"
                    value={formData.questions.crime.details || ''}
                    onChange={handleInputChange}
                    placeholder="If yes, provide details"
                ></textarea>
            </div>

            {/* Question 2 */}
            <div className="mb-6">
                <p className="font-semibold">b) Have you ever applied to Canada for any Visa/Permit/PR, or been approved/refused a visa/refugee application to Canada before?</p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
                    <label className="flex items-center">
                        <input 
                            type="radio" 
                            name="questions.visa.answer" 
                            value="yes" 
                            className="mr-2"
                            checked={formData.questions.visa.answer === 'yes'}
                            onChange={handleInputChange}
                        /> YES
                    </label>
                    <label className="flex items-center">
                        <input 
                            type="radio" 
                            name="questions.visa.answer" 
                            value="no" 
                            className="mr-2"
                            checked={formData.questions.visa.answer === 'no'}
                            onChange={handleInputChange}
                        /> NO
                    </label>
                </div>
                <textarea 
                    className="w-full p-2 mt-2 border rounded-md"
                    name="questions.visa.details"
                    value={formData.questions.visa.details || ''}
                    onChange={handleInputChange}
                    placeholder="If yes, provide details"
                ></textarea>
            </div>

            {/* Question 3 */}
            <div className="mb-6">
                <p className="font-semibold">c) Have you ever had any disease or physical or mental disorder?</p>
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-2">
                    <label className="flex items-center">
                        <input 
                            type="radio" 
                            name="questions.health.answer" 
                            value="yes" 
                            className="mr-2"
                            checked={formData.questions.health.answer === 'yes'}
                            onChange={handleInputChange}
                        /> YES
                    </label>
                    <label className="flex items-center">
                        <input 
                            type="radio" 
                            name="questions.health.answer" 
                            value="no" 
                            className="mr-2"
                            checked={formData.questions.health.answer === 'no'}
                            onChange={handleInputChange}
                        /> NO
                    </label>
                </div>
                <textarea 
                    className="w-full p-2 mt-2 border rounded-md"
                    name="questions.health.details"
                    value={formData.questions.health.details || ''}
                    onChange={handleInputChange}
                    placeholder="If yes, provide details"
                ></textarea>
            </div>
        </div>

        {/* Important Note */}
        <div className="p-4 bg-gray-100 border-l-4 border-[#155da9]">
            <h3 className="text-lg font-semibold">Important Note:</h3>
            <ul className="list-disc list-inside text-gray-700 mt-2">
                <li>We use the information mentioned in this form for assessing and filling the information required for your application.</li>
                <li>By signing the application, you declare that all the information stated by you in this application is up-to-date and accurate.</li>
                <li>In the event of any changes in your personal circumstances, please inform us at the earliest.</li>
                <li>Please fill a separate form for your spouse and for dependent child above age of 19 if any, with their information in it.</li>
            </ul>
        </div>   
        <div className="w-full flex mt-10 items-center justify-center">
            <button 
                onClick={handleSubmit}
                type="button"
                className="border-[#155da9] border-2 mt-8 text-[#155da9] px-10 py-4 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full"
            >
                Submit
            </button>
        </div>
    </div>
)}

<div className="pb-10">
    <Pagination className="flex flex-wrap justify-center gap-2 sm:gap-4">
        <PaginationContent className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            <PaginationItem>
                {page > 1 && (
                    <PaginationPrevious
                        onClick={(e) => {
                            e.preventDefault();
                            setPage(page - 1);
                        }}
                        className="px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md hover:bg-gray-100"
                    />
                )}
            </PaginationItem>

            {[1, 2, 3, 4, 5, 6, 7, 8].map((pageNum) => (
                <PaginationItem key={pageNum}>
                    <PaginationLink
                        onClick={(e) => {
                            e.preventDefault();
                            setPage(pageNum);
                        }}
                        className={`px-3 py-2 text-sm sm:text-base border rounded-md ${
                            page === pageNum
                                ? 'bg-[#155da9] text-white border-[#155da9]'
                                : 'text-black border-gray-300 hover:bg-gray-100'
                        }`}
                    >
                        {pageNum}
                    </PaginationLink>
                </PaginationItem>
            ))}

            <PaginationItem>
                {page < 8 && (
                    <PaginationNext
                        onClick={(e) => {
                            e.preventDefault();
                            setPage(page + 1);
                        }}
                        className="px-3 py-2 text-sm sm:text-base border border-gray-300 rounded-md hover:bg-gray-100"
                    />
                )}
            </PaginationItem>
        </PaginationContent>
    </Pagination>
</div>  
</div>   
</div>
  ) }