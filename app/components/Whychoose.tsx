"use client";

export default function WhyChoose() {
  return (
    <div className="w-full bg-[#f1f1f1] mt-[-40px] sm:mt-[-40px] py-10 px-4">
      <div className="flex flex-col md:flex-row w-full max-w-6xl mx-auto items-center">
        {/* Text Content */}
        <div className="bg-[#f1f1f1] md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left p-6">
          <h1 className="text-3xl sm:text-4xl  text-gray-500">
            Why <span className="text-[#155da9]">Choose</span> <span className="text-[#c30e16]">Us</span>?
          </h1>
          <div className="flex flex-col gap-6 pt-8 max-w-md">
            {[
              "Simplified and Streamlined Application Process",
              "Expert Guidance Every Step of the Way",
              "Transparent and Honest Communication",
              "Affordable and Competitive Fees",
              "Personalized Solutions Tailored to Your Needs",
            ].map((text, index) => (
              <div key={index} className="flex items-start gap-2">
                <span className={`text-xl ${index % 2 === 0 ? 'text-[#155da9]' : 'text-[#c30e16]'}`}>•</span>
                <span className="text-gray-500 text-lg">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Image Content */}
        <div className="w-full md:w-1/2 flex justify-center pt-10 md:pt-0">
          <img
            src="home15.jpg"
            alt="Why Choose Us"
            className="w-[90%] max-w-md rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
