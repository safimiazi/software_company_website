import React from "react";

const Company_overview_about: React.FC = () => {
  return (
    <div className="py-16 px-6 md:px-12 lg:px-20 bg-gray-100">
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
        {/* Left: Image Section */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <img
            src="/Company_overview_banner.jpg" // Place your image in the `public` folder
            alt="About Company"
            className="rounded-lg shadow-lg"
          />
        </div>

        {/* Right: Content Section */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            About Our Company
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            We are a leading software development company dedicated to
            delivering innovative solutions to businesses worldwide. Our team of
            skilled developers, designers, and strategists work together to
            transform ideas into impactful digital experiences.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            With years of experience, we specialize in web development, mobile
            applications, digital marketing, and custom software solutions
            tailored to your business needs.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Company_overview_about;
