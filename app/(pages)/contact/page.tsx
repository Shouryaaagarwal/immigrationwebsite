

"use client";

import React, { useState } from "react";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { FaPhoneAlt, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoLocationSharp, IoLogoTiktok } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { Raleway } from "next/font/google";

const raleway = Raleway({
  weight: ["400", "600", "800"],
  subsets: ["latin"],
});

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/users/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (data.success) {
        alert("Email sent successfully!");
        setFormData({ name: "", email: "", message: "" }); // Reset form
      } else {
        alert("Failed to send email.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred. Please try again.");
    }

    setIsSubmitting(false);
  };

  return (
    <div
      style={{ fontFamily: raleway.style.fontFamily }}
      className="w-full bg-white h-screen"
    >
      <div
        className="h-[70vh] bg-white flex flex-col gap-2 items-center justify-center w-full bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/contact15.jpg')" }}
      >
        <Navbar />
        <h1 className="mt-10 font-medium tracking-widest text-7xl z-20 text-white">Contact</h1>
        <h5 className="text-[#F1F1F1] mt-3 font-thin text-lg z-20 tracking-widest">
          Connecting Dreams to Destinations Let’s Build Your Path Together
        </h5>
      </div>

      <div className="flex gap-10 p-10 pl-20 h-screen w-full">
        {/* Contact Form */}
        <div className="h-[600px] rounded-xl p-10 flex flex-col gap-2 bg-[#f1f1f1] w-[40vw]">
          <span className="text-lg font-medium">Contact Us</span>
          <span className="text-5xl text-gray-500 -tracking-tight">
            Get <span className="text-[#155da9]">In</span>{" "}
            <span className="text-[#c30e16]">Touch</span>
          </span>

          <form onSubmit={submitHandler} className="flex flex-col gap-6 mt-14 flex-wrap">
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-[30vw] h-[7vh] bg-[#e0e0e0] shadow-lg text-black focus:outline-none px-4 rounded-xl"
              type="text"
              required
            />
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-[30vw] h-[7vh] bg-[#e0e0e0] border border-[#c30e16] shadow-lg text-black focus:outline-none px-4 rounded-xl"
              type="email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-[30vw] bg-[#e0e0e0] shadow-lg focus:outline-none h-[15vh] rounded-xl px-4 py-4"
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="border-[#155da9] border-2 mt-8 text-[#155da9] px-10 py-4 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Details */}
        <div className="bg-white h-[600px] w-[800px]">
          <div className="flex flex-col">
            <span className="p-10 text-gray-500">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo laborum delectus blanditiis quaerat natus vel cumque nemo
              qui ducimus est!
            </span>
            <div className="flex pl-10 mt-10 flex-wrap gap-[50px]">
              {/* Details like Phone, Email, etc. */}
              {/* Icons and text */}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
