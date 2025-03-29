

"use client";

import React, { useState } from "react";
import Link from "next/link";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import { FaHome, FaPhoneAlt, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { IoLocationSharp, IoLogoTiktok } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { RiInstagramFill } from "react-icons/ri";



export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const submitHandler = async (e: any) => {
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
    <div
      className="w-full bg-white"
    >
      {/* Hero Section */}
      <div
        className="h-[55vh] md:h-[70vh] bg-white flex flex-col gap-2 items-center justify-center w-full bg-cover bg-center z-10"
        style={{ backgroundImage: "url('/contact15.jpg')" }}
      >
        <Navbar />
        <h1 className="font-medium tracking-widest text-5xl md:text-6xl lg:text-6xl z-20 text-white">
          Contact
        </h1>
        <h5 className="text-[#F1F1F1] mt-4 font-thin text-sm text-center md:text-lg z-20 tracking-widest">
          Connecting Dreams to Destinations Let’s Build Your Path Together
        </h5>
      </div>

      {/* Contact Form and Info Section */}
      <div className="flex mb-10 flex-col lg:flex-row gap-10 p-5 sm:p-10 xl:px-20 xl:py-10 lg:h-auto">
        {/* Contact Form */}
        <div className="rounded-xl p-5 sm:p-10 flex flex-col gap-4 bg-[#f1f1f1] lg:w-2/5 w-full">
          <span className="text-lg font-medium">Contact Us</span>
          <span className="text-3xl sm:text-5xl text-gray-500">
            Get <span className="text-[#155da9]">In</span>{" "}
            <span className="text-[#c30e16]">Touch</span>
          </span>

          <form
            onSubmit={submitHandler}
            className="flex flex-col gap-6 mt-10 sm:mt-14"
          >
            <input
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full h-[6vh] sm:h-[7vh] bg-[#e0e0e0] shadow-lg text-black focus:outline-none px-4 rounded-xl"
              type="text"
              required
            />
            <input
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full h-[6vh] sm:h-[7vh] bg-[#e0e0e0] border border-[#c30e16] shadow-lg text-black focus:outline-none px-4 rounded-xl"
              type="email"
              required
            />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full bg-[#e0e0e0] shadow-lg focus:outline-none h-[12vh] sm:h-[15vh] rounded-xl px-4 py-2"
              placeholder="Message"
              required
            ></textarea>
            <button
              type="submit"
              disabled={isSubmitting}
              className="border-[#155da9] border-2 mt-8 text-[#155da9] px-8 sm:px-10 py-3 sm:py-4 text-sm sm:text-base tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-2 rounded-full"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="bg-white lg:w-3/5 w-full">
          <div className="flex flex-col">
            <span className="px-5 sm:px-10 text-gray-500 text-sm sm:text-base">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Explicabo laborum delectus blanditiis quaerat natus vel cumque
              nemo qui ducimus est! Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Commodi, deserunt.
            </span>

            <div className="flex flex-wrap gap-6 xl:gap-8 xl:w-full xl:justify-between mt-10 px-5 xl:px-10">
              <div className="flex flex-col w-full sm:w-[200px] items-center gap-3">
                <span className="text-4xl xl:text-5xl text-[#155da9]">
                  <FaPhoneAlt />
                </span>
                <span className="text-[#c30e16] mt-2 sm:mt-5 font-semibold">
                  Phone Number
                </span>
                <span className="text-black text-center text-sm sm:text-base">
                  +1443323432243
                </span>
              </div>
              <div className="flex flex-col w-full sm:w-[200px] items-center gap-3">
                <span className="text-4xl xl:text-5xl text-[#155da9]">
                  <MdOutlineMail />
                </span>
                <span className="text-[#c30e16] mt-2 sm:mt-5 font-semibold">
                  Email
                </span>
                <span className="text-black text-center text-sm sm:text-base">
                  @seaviewimmigration
                </span>
              </div>
              <div className="flex flex-col w-full sm:w-[200px] items-center gap-3">
                <span className="text-4xl xl:text-5xl text-[#c30e16]">
                  <IoLocationSharp />
                </span>
                <span className="text-[#155da9] mt-2 sm:mt-5 font-semibold">
                  Location
                </span>
                <span className="text-black text-center text-sm sm:text-base">
                  124 near wall street New York
                </span>
              </div>
            </div>

            <div className="flex flex-col gap-3 sm:gap-5 mt-5">
              <span className="px-5 text-center md:text-start mt-5 md:mt-7 sm:px-10 text-gray-500 text-xl sm:text-3xl">
                Other Ways <span className="text-[#155da9]">To</span>{" "}
                <span className="text-[#c30e16]">Connect</span>
              </span>
              <div className="flex flex-wrap justify-center sm:justify-start gap-5 sm:gap-10 mt-2 pb-10 px-5 sm:px-10">
                <button className="h-[50px] sm:h-[60px] w-[50px] sm:w-[60px] transition-transform hover:-translate-y-2 duration-500 text-white text-xl flex items-center justify-center rounded-full bg-gray-500">
                  <FaTwitter />
                </button>
                <button className="h-[50px] sm:h-[60px] w-[50px] sm:w-[60px] flex items-center justify-center text-xl text-white transition-transform hover:-translate-y-2 duration-500 rounded-full bg-[#155da9]">
                  <RiInstagramFill />
                </button>
                <button className="h-[50px] sm:h-[60px] w-[50px] sm:w-[60px] flex items-center justify-center text-xl text-white transition-transform hover:-translate-y-2 duration-500 rounded-full bg-[#c30e16]">
                  <FaLinkedinIn />
                </button>
                <button className="h-[50px] sm:h-[60px] w-[50px] sm:w-[60px] transition-transform hover:-translate-y-2 duration-500 flex items-center justify-center text-white text-xl rounded-full bg-gray-500">
                  <IoLogoTiktok />
                </button>
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

