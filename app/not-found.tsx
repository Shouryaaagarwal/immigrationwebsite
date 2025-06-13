// // app/not-found.tsx

// "use client";

// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Ghost } from "lucide-react";

// export default function NotFoundPage() {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 dark:from-[#111] dark:to-[#222] transition-colors">
//       <div className="text-center">
//         <Ghost className="w-20 h-20 text-gray-500 animate-bounce mb-6" />
//         <h1 className="text-5xl font-bold text-gray-800 dark:text-white mb-4">404</h1>
//         <p className="text-xl text-gray-600 dark:text-gray-300 mb-6">Oops! Page not found.</p>
//         <Button onClick={() => router.push("/")} className="text-base px-6 py-3">
//           Back to Home
//         </Button>
//       </div>
//     </div>
//   );
// }




// "use client";

// import { useRouter } from "next/navigation";
// import { Button } from "@/components/ui/button";
// import { Ghost } from "lucide-react";

// export default function NotFoundPage() {
//   const router = useRouter();

//   return (
//     <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9fafb] dark:bg-[#111] px-4">
//       <div className="text-center">
//         <Ghost className="w-24 h-24 text-gray-500 animate-bounce mb-4" />
//         <h1 className="text-6xl font-extrabold text-[#c30e16] mb-2 tracking-tight">404</h1>
//         <p className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-4">
//           Uh-oh! Page not found.
//         </p>
//         <p className="text-base text-gray-500 dark:text-gray-400 mb-6">
//           The page you’re looking for might have been removed or is temporarily unavailable.
//         </p>
//         <Button
//           onClick={() => router.push("/home")}
//           className="bg-[#155da9] hover:bg-[#0f4580] text-white text-base px-6 py-3 rounded-xl shadow-md transition"
//         >
//           Back to Home
//         </Button>
//       </div>
//     </div>
//   );
// }




"use client";

import Link from "next/link";
import { Ghost } from "lucide-react";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f9fafb] dark:bg-[#111] px-4">
      <div className="text-center">
        <Ghost className="w-24 h-24 text-[#c30e16] animate-bounce mb-4" />
        <h1 className="text-6xl font-extrabold text-[#155da9] mb-2 tracking-tight">404</h1>
        <p className="text-2xl font-medium text-gray-700 dark:text-gray-300 mb-4">
          Uh-oh! Page not found.
        </p>
        <p className="text-base text-gray-500 dark:text-gray-400 mb-6">
          The page you’re looking for might have been removed or is temporarily unavailable.
        </p>
        <Link
          href="/"
          className="border-[#155da9] border-2 mt-10 text-[#155da9] px-10 py-4 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full inline-block"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
