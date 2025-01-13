// components/WhyWorkWithUs.tsx
import React from "react";

interface Benefit {
  icon: string; // URL or className for the icon
  title: string;
  description: string;
}

interface WhyWorkWithUsProps {
  benefits: Benefit[];
}

const WhyWorkWithUs: React.FC<WhyWorkWithUsProps> = ({ benefits }) => {
  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Why Work With Us?
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="flex items-center justify-center mb-4">
                {benefit.icon.startsWith("http") ? (
                  <img
                    src={benefit.icon}
                    alt={benefit.title}
                    className="w-16 h-16"
                  />
                ) : (
                  <i className={`${benefit.icon} text-4xl text-blue-500`}></i>
                )}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-gray-700">
                {benefit.title}
              </h3>
              <p className="text-gray-600">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyWorkWithUs;
