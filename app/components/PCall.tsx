"use client";

import { useState } from "react";

export default function Call() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
const submitHandler = async (e: any) => {
  e.preventDefault();
   console.log("Form Data:", formData); // Debugging log
  
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

    <div className="flex p-10 flex-col lg:flex-row w-full items-center justify-between gap-6">
      {/* Image Section */}

      <div
        className="min-h-[50vh] lg:min-h-[75vh] w-full bg-cover bg-center relative lg:order-2"
        style={{
          backgroundImage: `url('call1.jpg')`,
        }}
      >
        {/* ... existing image section content ... */}
      </div>

      {/* Form Section */}
      <form onSubmit={submitHandler} className="min-h-[50vh] lg:min-h-[75vh] rounded-xl flex items-center justify-center flex-col gap-2 w-full sm:w-[80vw] md:w-[40vw] lg:order-1">
        <span className="text-lg font-medium"></span>
        <span className="md:text-4xl text-3xl md:ml-10 ml-4 lg:ml-0 text-gray-500 -tracking-tight">
          Schedule <span className="text-[#155da9]">a</span>{" "}
          <span className="text-[#c30e16]">Call</span>
        </span>

        {submitMessage && (
          <div className={`mt-4 p-3 rounded-md ${submitMessage.includes("successfully") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>
            {submitMessage}
          </div>
        )}

        <div className="flex w-full flex-col gap-6 mt-8">
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full sm:w-[80vw] md:w-[50vw] lg:w-[30vw] h-[7vh] bg-[#f1f1f1] shadow-lg text-black focus:outline-none px-4 rounded-xl"
            type="text"
            aria-label="Your Name"
           
          />
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full sm:w-[80vw] md:w-[50vw] lg:w-[30vw] h-[7vh] bg-[#f1f1f1] border border-[#c30e16] shadow-lg text-black focus:outline-none px-4 rounded-xl"
            type="email"
            aria-label="Your Email Address"
        
          />
          <div className="relative w-full sm:w-[80vw] md:w-[50vw] lg:w-[30vw]">
            <select
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full h-[7vh] bg-[#f1f1f1] shadow-lg text-gray-400 placeholder-text-gray-400 focus:outline-none px-4 pr-8 rounded-xl appearance-none"
           
              aria-label="Select a Time Slot"
            >
              <option value="" disabled>
                Select a Time Slot
              </option>
              <option value="9am-10am">9:00 AM - 10:00 AM</option>
              <option value="10am-11am">10:00 AM - 11:00 AM</option>
              <option value="11am-12pm">11:00 AM - 12:00 PM</option>
              <option value="2pm-3pm">2:00 PM - 3:00 PM</option>
              <option value="3pm-4pm">3:00 PM - 4:00 PM</option>
              <option value="4pm-5pm">4:00 PM - 5:00 PM</option>
            </select>
            <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-500"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
          </div>
        </div>
        <div className="md:ml-10 ml-4 lg:ml-0">
          <button 
            type="submit"
            className="border-[#155da9] border-2 mt-8 text-[#155da9] px-10 py-4 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Booking..." : "Book Now"}
          </button>
        </div>
      </form>
    </div>
  );
}