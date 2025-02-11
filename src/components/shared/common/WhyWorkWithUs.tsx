/* eslint-disable @next/next/no-img-element */
// components/WhyWorkWithUs.tsx
import React from "react";
import Title from "./Title";
import ContentWidth from "../ContentWidth";

interface Benefit {
  icon: string; // URL or className for the icon
  title: string;
  description: string;
}

interface WhyWorkWithUsProps {
  benefits: Benefit[];
  sectionTitle: string;
  sectionDescription: string;
}

const WhyWorkWithUs: React.FC<WhyWorkWithUsProps> = ({
  benefits,
  sectionTitle,
  sectionDescription,
}) => {
  return (
    <section className="py-20">
      <ContentWidth>
        <div className="space-y-10">
          <Title title={sectionTitle} description={sectionDescription} />
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 border rounded-lg shadow-md hover:shadow-brand-color hover:shadow-lg transition duration-300"
              >
                <div className="flex items-center justify-center mb-4">
                  {benefit.icon.startsWith("http") ? (
                    <img
                      src={benefit.icon}
                      alt={benefit.title}
                      className="w-16 h-16"
                    />
                  ) : (
                    <i className={`${benefit.icon} text-4xl text-brand-color`}></i>
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
      </ContentWidth>
    </section>
  );
};

export default WhyWorkWithUs;
