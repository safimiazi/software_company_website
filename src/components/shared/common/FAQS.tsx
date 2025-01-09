"use client";
import React, { useState } from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQsProps {
  data: FAQ[];
}

const FAQs: React.FC<FAQsProps> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="py-10">
      <div className=" px-4 space-y-6">
        {data?.map((faq, index) => (
          <div
            key={index}
            className="border-b pb-4 transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="flex justify-between items-center w-full text-left"
            >
              <h3 className="text-lg font-medium">{faq.question}</h3>
              <span
                className={`transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`mt-2 overflow-hidden transition-all duration-500 ${
                activeIndex === index ? "max-h-screen" : "max-h-0"
              }`}
            >
              <p className="text-sm text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
