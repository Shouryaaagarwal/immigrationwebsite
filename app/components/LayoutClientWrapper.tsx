//     "use client";

// import { useSelector } from "react-redux";
// import { selectIsAuthenticated } from "@/store/authSlice";
// import { isAdminAuthenticated } from "@/lib/auth";
// import ChatbotButton from "./Chatbot";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// export default function LayoutClientWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   // Redux user state
//   const isUserAuthenticated = useSelector((state: any) =>
//     selectIsAuthenticated(state)
//   );

//   // Admin state (from lib/auth.ts)
//   const adminAuth = isAdminAuthenticated();

//   return (
//     <>
//       {children}

//       {/* ✅ Show Chatbot only if user OR admin is authenticated */}
//       {(isUserAuthenticated) && <ChatbotButton />}

//       <ToastContainer
//         position="top-right"
//         autoClose={5000}
//         hideProgressBar
//         closeOnClick
//         pauseOnHover
//         draggable
//         toastClassName="custom-toast"
//         className="custom-toast-body"
//         style={{ textAlign: "center" }}
//       />
//     </>
//   );
// }



"use client";

import { useSelector } from "react-redux";
import { selectIsAuthenticated } from "@/store/authSlice";
import { isAdminAuthenticated } from "@/lib/auth";
import ChatbotButton from "./Chatbot";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function LayoutClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const isUserAuthenticated = useSelector(selectIsAuthenticated); // simpler
  const adminAuth = isAdminAuthenticated();  
  console.log(adminAuth)  ;    
  console.log(isUserAuthenticated) ;

  return (
    <>
      {children}

      {/* ✅ Only show chatbot if user OR admin is authenticated */}
      {(isUserAuthenticated || adminAuth) && <ChatbotButton />}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar
        closeOnClick
        pauseOnHover
        draggable
        toastClassName="custom-toast"
        className="custom-toast-body"
        style={{ textAlign: "center" }}
      />
    </>
  );
}
