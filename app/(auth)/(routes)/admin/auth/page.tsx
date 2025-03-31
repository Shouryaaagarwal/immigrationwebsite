// "use client"
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { setAdminAuthenticated } from '@/lib/auth';
// import Navbar from '@/app/components/Navbar';
// import { FiArrowLeft } from 'react-icons/fi';
// import Image from 'next/image';

// const AdminLoginPage = () => {
//   const [adminKey, setAdminKey] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     if (adminKey === process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY) {
//       setAdminAuthenticated(true);
//       router.push('/admin/dashboard');
//     } else {
//       setError('Invalid admin key');
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <Navbar />
      
//       <div className="container mx-auto px-4 py-6">
//         {/* Back button below navbar */}
//         <button
//           onClick={() => router.push('/home')}
//           className="flex items-center mt-[110px] text-[#155da9] hover:text-[#124b8a] transition-colors mb-6"
//         >
//           <FiArrowLeft className="mr-1" />
//           Back to Home
//         </button>

//         {/* Login form card */}
//         <div className="flex justify-center">
//           <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
//             {/* Small icon/image centered above title */}
//             <div className="flex justify-center mb-4">
//               <div className="relative h-24 w-24 rounded-full shadow-md flex items-center justify-center overflow-hidden ">
//                 <Image
//                   src="/admin.png" // Replace with your icon path
//                   alt="Admin Icon"
//                   width={50}
//                   height={50}
//                   className="object-contain"
//                   priority
//                 />
//               </div>
//             </div>
            
//             <h1 className="text-2xl font-normal text-center text-[#155da9] mb-6">Admin Portal</h1>
            
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div>
//                 <label htmlFor="adminKey" className="block text-sm font-medium text-gray-700">
//                   Admin Key
//                 </label>
//                 <input
//                   type="password"
//                   id="adminKey"
//                   value={adminKey}
//                   onChange={(e) => setAdminKey(e.target.value)}
//                   className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#155da9] focus:border-[#155da9]"
//                   required
//                 />
//               </div>

//               {error && (
//                 <div className="text-red-600 text-sm text-center">
//                   {error}
//                 </div>
//               )}

//               <div>
//                 <button
//                   type="submit"
//                   disabled={isLoading}
//                   className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#c30e16] to-[#155da9] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#155da9] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
//                 >
//                   {isLoading ? 'Authenticating...' : 'Login'}
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLoginPage;



// "use client"
// import { useState } from 'react';
// import { useRouter } from 'next/navigation';
// import { setAdminAuthenticated } from '@/lib/auth';
// import Navbar from '@/app/components/Navbar';
// import { FiArrowLeft } from 'react-icons/fi';
// import Image from 'next/image';

// const AdminLoginPage = () => {
//   const [adminKey, setAdminKey] = useState('');
//   const [error, setError] = useState('');
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError('');

//     if (adminKey === process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY) {
//       setAdminAuthenticated(true);
//       router.push('/admin/dashboard');
//     } else {
//       setError('Invalid admin key');
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#155da9] via-[#a83279] to-[#c30e16]">
//       <div className="bg-white/10 backdrop-blur-sm min-h-screen">
//         <Navbar />
        
//         <div className="container mx-auto px-4 py-6">
//           {/* Back button below navbar */}
//           <button
//             onClick={() => router.push('/home')}
//             className="flex items-center mt-[110px] text-white hover:text-gray-200 transition-colors mb-6"
//           >
//             <FiArrowLeft className="mr-1" />
//             Back to Home
//           </button>

//           {/* Login form card */}
//           <div className="flex justify-center">
//             <div className="w-full max-w-md p-8 bg-white/90 backdrop-blur-sm rounded-lg shadow-xl border border-white/20">
//               {/* Small icon/image centered above title */}
//               <div className="flex justify-center mb-4">
//                 <div className="relative h-24 w-24 rounded-full shadow-md flex items-center justify-center overflow-hidden bg-white">
//                   <Image
//                     src="/admin.png" // Replace with your icon path
//                     alt="Admin Icon"
//                     width={50}
//                     height={50}
//                     className="object-contain"
//                     priority
//                   />
//                 </div>
//               </div>
              
//               <h1 className="text-2xl font-normal text-center text-[#155da9] mb-6">Admin Portal</h1>
              
//               <form onSubmit={handleSubmit} className="space-y-6">
//                 <div>
//                   <label htmlFor="adminKey" className="block text-sm font-medium text-gray-700">
//                     Admin Key
//                   </label>
//                   <input
//                     type="password"
//                     id="adminKey"
//                     value={adminKey}
//                     onChange={(e) => setAdminKey(e.target.value)}
//                     className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-[#155da9] focus:border-[#155da9]"
//                     required
//                   />
//                 </div>

//                 {error && (
//                   <div className="text-red-600 text-sm text-center">
//                     {error}
//                   </div>
//                 )}

//                 <div>
//                   <button
//                     type="submit"
//                     disabled={isLoading}
//                     className={`w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gradient-to-r from-[#c30e16] to-[#155da9] hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#155da9] ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
//                   >
//                     {isLoading ? 'Authenticating...' : 'Login'}
//                   </button>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AdminLoginPage;




// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { setAdminAuthenticated } from "@/lib/auth";
// import Navbar from "@/app/components/Navbar";
// import { FiArrowLeft } from "react-icons/fi";

// const AdminLoginPage = () => {
//   const [adminKey, setAdminKey] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     if (adminKey === process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY) {
//       setAdminAuthenticated(true);
//       router.push("/admin/dashboard");
//     } else {
//       setError("Invalid admin key");
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="relative flex items-center justify-center min-h-screen bg-[#0e0b16] overflow-hidden">
//         <Navbar/>
//       {/* Blurred radial gradient circles */}
//       <div className="absolute inset-0">
//         <div className="absolute -top-32 -left-20 w-96 h-96 bg-gradient-to-br from-[#155da9] to-[#c30e16] rounded-full blur-3xl opacity-50"></div>
//         <div className="absolute -bottom-40 right-0 w-80 h-80 bg-gradient-to-br from-[#c30e16] to-[#155da9] rounded-full blur-3xl opacity-50"></div>
//       </div>

//       <div className="z-10 w-full max-w-md bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 border border-white/20">
//         <button
//           onClick={() => router.push("/home")}
//           className="flex items-center text-white hover:text-gray-300 transition mb-4"
//         >
//           <FiArrowLeft className="mr-1" />
//           Back to Home
//         </button>

//         <h1 className="text-2xl font-semibold text-white text-center mb-4">
//           Admin Login
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm text-gray-300">Admin Key</label>
//             <input
//               type="password"
//               value={adminKey}
//               onChange={(e) => setAdminKey(e.target.value)}
//               className="w-full px-4 py-2 mt-1 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155da9]"
//               required
//             />
//           </div>

//           {error && <p className="text-sm text-red-500 text-center">{error}</p>}

//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`w-full py-2 rounded-lg text-white bg-gradient-to-r from-[#c30e16] to-[#155da9] hover:opacity-90 transition ${
//               isLoading ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             {isLoading ? "Authenticating..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLoginPage;



// "use client";

// import { useState } from "react";
// import { useRouter } from "next/navigation";
// import { setAdminAuthenticated } from "@/lib/auth";
// import Navbar from "@/app/components/Navbar";
// import { FiArrowLeft } from "react-icons/fi";

// const AdminLoginPage = () => {
//   const [adminKey, setAdminKey] = useState("");
//   const [error, setError] = useState("");
//   const [isLoading, setIsLoading] = useState(false);
//   const router = useRouter();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsLoading(true);
//     setError("");

//     if (adminKey === process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY) {
//       setAdminAuthenticated(true);
//       router.push("/admin/dashboard");
//     } else {
//       setError("Invalid admin key");
//       setIsLoading(false);
//     }
//   };

//   return (
//     <div className="relative flex flex-col items-center min-h-screen bg-[#0e0b16] overflow-hidden">
//       {/* Navbar */}
//       <Navbar />

//       {/* Back button positioned in the left corner under Navbar */}

//       {/* Blurred radial gradient circles */}
//       <div className="absolute inset-0">
      
//         <div className="absolute -top-32 -left-20 w-96 h-96 bg-gradient-to-br from-[#155da9] to-[#c30e16] rounded-full blur-3xl opacity-50"></div>
//         <div className="absolute -bottom-40 right-0 w-80 h-80 bg-gradient-to-br from-[#c30e16] to-[#155da9] rounded-full blur-3xl opacity-50"></div>
//       </div>

//       {/* Login Form */}
//       <div className="z-10 mt-[210px] w-full max-w-md bg-white/10 backdrop-blur-lg rounded-xl shadow-xl p-6 border border-white/20"> 
//         <h1 className="text-2xl font-semibold text-white text-center mb-4">
//           Admin Login
//         </h1>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="block text-sm text-gray-300">Admin Key</label>
//             <input
//               type="password"
//               value={adminKey}
//               onChange={(e) => setAdminKey(e.target.value)}
//               className="w-full px-4 py-2 mt-1 bg-gray-900 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155da9]"
//               required
//             />
//           </div>

//           {error && <p className="text-sm text-red-500 text-center">{error}</p>}

//           <button
//             type="submit"
//             disabled={isLoading}
//             className={`w-full py-2 rounded-lg text-white bg-gradient-to-r from-[#c30e16] to-[#155da9] hover:opacity-90 transition ${
//               isLoading ? "opacity-50 cursor-not-allowed" : ""
//             }`}
//           >
//             {isLoading ? "Authenticating..." : "Login"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AdminLoginPage;


"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { setAdminAuthenticated } from "@/lib/auth";
import Navbar from "@/app/components/Navbar";
import { FiArrowLeft } from "react-icons/fi";

const AdminLoginPage = () => {
  const [adminKey, setAdminKey] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    if (adminKey === process.env.NEXT_PUBLIC_ADMIN_SECRET_KEY) {
      setAdminAuthenticated(true);
      router.push("/admin/dashboard");
    } else {
      setError("Invalid admin key");
      setIsLoading(false);
    }
  };

  return (
    <div className="relative min-h-screen bg-white overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Blurry gradient circles */}
      <div className="absolute inset-0">
        <div className="absolute -top-32 -left-20 w-96 h-96 bg-gradient-to-br from-[#155da9] to-[#c30e16] rounded-full blur-3xl opacity-40"></div>
        <div className="absolute bottom-0 -right-32 w-80 h-80 bg-gradient-to-br from-[#c30e16] to-[#155da9] rounded-full blur-3xl opacity-40"></div>
      </div>

      {/* Back Button in the Left Corner */}
      <div className="absolute mt-[40px] top-20 left-6">
        <button
          onClick={() => router.push("/home")}
          className="flex items-center text-gray-700 hover:text-gray-500 transition"
        >
          <FiArrowLeft className="mr-1" />
          Back to Home
        </button>
      </div>

      {/* Login Form */}
      <div className="flex items-center justify-center min-h-screen">
        <div className="z-10 w-full max-w-md bg-white/30 backdrop-blur-lg rounded-xl shadow-xl p-6 border border-white/20">
          <h1 className="text-2xl font-normal text-[#155da9] text-center mb-4">
            Admin Login
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm text-gray-700">Admin Key</label>
              <input
                type="password"
                value={adminKey}
                onChange={(e) => setAdminKey(e.target.value)}
                className="w-full px-4 py-2 mt-1 bg-gray-100 text-gray-800 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#155da9]"
                required
              />
            </div>

            {error && <p className="text-sm text-red-500 text-center">{error}</p>}

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 rounded-lg text-white bg-gradient-to-r from-[#c30e16] to-[#155da9] hover:opacity-90 transition ${
                isLoading ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isLoading ? "Authenticating..." : "Login"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLoginPage;
