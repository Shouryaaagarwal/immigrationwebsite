
"use client";

export default function Call() {
  return (
    <div className="flex p-10 flex-col lg:flex-row w-full items-center justify-between gap-6">
      {/* Image Section */}
      <div
        className="min-h-[50vh] lg:min-h-[75vh] w-full bg-cover bg-center relative lg:order-2"
        style={{
          backgroundImage: `url('call1.jpg')`, // Replace this URL with your desired background image
        }}
      >
        {/* Overlay with opacity effect */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content on top of the overlay */}
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 lg:px-6 text-white">
          <h1 className="text-4xl lg:text-5xl text-center">
            <span className="text-[#4a9cf5]">Why</span> ?
          </h1>

          <p className="text-sm  md:text-lg lg:text-lg text-center max-w-3xl">
            We are here to assist you with any queries you might have.
            Scheduling a call will give you personalized guidance to better
            understand our services and how we can meet your needs.
          </p>

          <ul className="list-disc lg:block hidden text-sm md:text-base lg:text-lg max-w-3xl text-left">
            <li>Get expert advice and solutions tailored to you</li>
            <li>Resolve your concerns quickly and efficiently</li>
            <li>Have your questions answered in real-time</li>
            <li>Flexible scheduling for your convenience</li>
          </ul>

          <p className="text-sm text-gray-400 text-center">
            Don’t wait! Book a call with us now and get the assistance you
            deserve.
          </p>
        </div>
      </div>

      {/* Form Section */}
      <div className="min-h-[50vh] lg:min-h-[75vh] rounded-xl flex items-center justify-center flex-col gap-2 w-full sm:w-[80vw] md:w-[40vw] lg:order-1">
        <span className="text-lg font-medium"></span>
        <span className="md:text-4xl text-3xl  md:ml-10 ml-4 lg:ml-0 text-gray-500 -tracking-tight">
          Schedule <span className="text-[#155da9]">a</span>{" "}
          <span className="text-[#c30e16]">Call</span>
        </span>

        <div className="flex w-full flex-col gap-6 mt-8">
          <input
            placeholder="Name"
            className="w-full sm:w-[80vw] md:w-[50vw] lg:w-[30vw] h-[7vh] bg-[#f1f1f1] shadow-lg text-black focus:outline-none px-4 rounded-xl"
            type="text"
            aria-label="Your Name"
          />
          <input
            placeholder="Email"
            className="w-full sm:w-[80vw] md:w-[50vw] lg:w-[30vw] h-[7vh] bg-[#f1f1f1] border border-[#c30e16] shadow-lg text-black focus:outline-none px-4 rounded-xl"
            type="email"
            aria-label="Your Email Address"
          />
          <div className="relative w-full sm:w-[80vw] md:w-[50vw] lg:w-[30vw]">
            <select
              className="w-full h-[7vh] bg-[#f1f1f1] shadow-lg text-gray-400 placeholder-text-gray-400 focus:outline-none px-4 pr-8 rounded-xl appearance-none"
              defaultValue=""
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
          <button className="border-[#155da9] border-2 mt-8 text-[#155da9] px-10 py-4 tracking-wide hover:bg-[#155da9] hover:text-white transition-transform duration-500 hover:-translate-y-3 rounded-full">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
}
