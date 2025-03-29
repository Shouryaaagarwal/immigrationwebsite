"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation"; // Import useRouter from next/navigation

const Page: React.FC = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/home");
  }, [router]); 

  return <div></div>; 
};

export default Page;
