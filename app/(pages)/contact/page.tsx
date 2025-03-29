"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { FaPhoneAlt, FaLinkedinIn } from "react-icons/fa";
import { IoLocationSharp, IoLogoTiktok } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebookF } from "react-icons/fa";


export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e: React.FormEvent) => {
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
        setFormData({ name: "", email: "", message: "" });
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
    <div className="w-full bg-white overflow-x-hidden">
      {/* Hero Section */}
      <div
        className="min-h-[55vh] md:min-h-[70vh] flex flex-col gap-2 items-center justify-center w-full bg-cover bg-center relative"
        style={{
          backgroundImage: "url('/contact15.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Navbar />
        <div className="z-20 text-center px-4">
          <h1 className="font-medium tracking-widest text-4xl md:text-5xl lg:text-6xl text-white">
            Contact
          </h1>
          <h5 className="text-[#F1F1F1] mt-4 font-thin text-sm md:text-lg tracking-widest">
            Connecting Dreams to Destinations Let's Build Your Path Together
          </h5>
        </div>
      </div>

      {/* Contact Form and Info Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <div className="flex flex-col lg:flex-row gap-8 xl:gap-12">
          {/* Contact Form */}
          <div className="rounded-xl p-6 sm:p-8 lg:p-10 flex flex-col gap-4 bg-[#f1f1f1] lg:w-1/2">
            <span className="text-lg font-medium text-gray-500">
              Contact Us
            </span>
            <h2 className="text-3xl sm:text-4xl text-gray-500">
              Get <span className="text-[#155da9]">In</span>{" "}
              <span className="text-[#c30e16]">Touch</span>
            </h2>

            <form onSubmit={submitHandler} className="flex flex-col gap-6 mt-6">
              <div className="space-y-6">
                <input
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full h-14 bg-[#e0e0e0] shadow-sm text-black focus:outline-none px-4 rounded-lg"
                  type="text"
                  required
                />
                <input
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full h-14 border-[1px] border-[#c30e16] bg-[#e0e0e0] shadow-sm text-black focus:outline-none px-4 rounded-lg"
                  type="email"
                  required
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-[#e0e0e0] shadow-sm focus:outline-none min-h-[150px] rounded-lg px-4 py-3"
                  placeholder="Message"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="border-[1px] border-[#155da9] mt-4 text-[#155da9] px-8 py-3 text-sm sm:text-base font-normal hover:bg-[#155da9] hover:text-white transition-all duration-300 hover:-translate-y-1 rounded-full"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="lg:w-1/2">
            <div className="flex flex-col h-full">
            <p className="text-gray-600 text-sm sm:text-base">
  At Seaview Immigration, we're committed to providing personalized guidance for your journey. 
  Whether you're seeking work permits, permanent residency, or family sponsorship, our team of 
  licensed consultants offers expert advice tailored to your unique situation. We understand the 
  complexities of immigration processes and are here to help you navigate every step with confidence.
</p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex flex-col items-center sm:items-start gap-3 p-4 bg-[#f8f8f8] rounded-lg">
                  <div className="text-4xl text-[#155da9]">
                    <FaPhoneAlt />
                  </div>
                  <h3 className="text-[#c30e16] font-normal">Phone Number</h3>
                  <p className="text-gray-500 text-center sm:text-left">
                    +1443323432243
                  </p>
                </div>

                <div className="flex flex-col items-center sm:items-start gap-3 p-4 bg-[#f8f8f8] rounded-lg">
                  <div className="text-4xl text-[#155da9]">
                    <MdOutlineMail />
                  </div>
                  <h3 className="text-[#c30e16] font-normal">Email</h3>
                  <p className="text-gray-500 text-center sm:text-left">
                    @seaviewimmigration
                  </p>
                </div>

                <div className="flex flex-col items-center sm:items-start gap-3 p-4 bg-[#f8f8f8] rounded-lg">
                  <div className="text-4xl text-[#c30e16]">
                    <IoLocationSharp />
                  </div>
                  <h3 className="text-[#155da9] font-normal">Location</h3>
                  <p className="text-gray-500 text-center sm:text-left">
                    124 near wall street New York
                  </p>
                </div>
              </div>

              <div className="mt-10">
  <h3 className="text-xl sm:text-2xl text-gray-700 text-center sm:text-left">
    Other Ways <span className="text-[#155da9]">To</span>{" "}
    <span className="text-[#c30e16]">Connect</span>
  </h3>
  <div className="flex justify-center sm:justify-start gap-4 mt-4">
    {[
      { icon: <RiInstagramFill />, color: "bg-[#155da9]" },
      { icon: <FaLinkedinIn />, color: "bg-[#c30e16]" },
      { icon: <FaFacebookF />, color: "bg-[#155da9]" }, // Facebook added
      { icon: <IoLogoTiktok />, color: "bg-[#c30e16]" },
    ].map((social, index) => (
      <button
        key={index}
        className={`h-12 w-12 flex items-center justify-center text-white text-xl rounded-full ${social.color} transition-transform hover:-translate-y-1 duration-300`}
      >
        {social.icon}
      </button>
    ))}
  </div>
</div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
          
    </div>


  );
}
