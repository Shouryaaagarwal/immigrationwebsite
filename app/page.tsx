"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

const Page: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to the About page as soon as the component is mounted
    router.push("/home");
  }, [router]); // Empty dependency array to run only once when the component mounts

  return <div></div>; // The component does not render anything, as it redirects instantly
};

export default Page;
z