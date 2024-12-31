import ContentWidth from "@/components/shared/ContentWidth";
import { PlusIcon, WebIcon } from "@/Icons";
import React from "react";

const Services = () => {
  const serviceSectionData = {
    heading: "Services",
    title: "We Provide Any Business Problems Services",
    services: [
      {
        icon: <WebIcon />,
        title: "Website Development",
        description:
          "We specialize in building responsive and user-friendly websites that help businesses establish a strong online presence and drive more customers to their services.",
      },
      {
        icon: <WebIcon />, // Replace with actual icon
        title: "Software Development",
        description:
          "Our expert team develops high-quality, custom software solutions tailored to meet the unique needs of your business, boosting efficiency and productivity.",
      },
      {
        icon: <WebIcon />, // Replace with actual icon
        title: "Mobile Application Designing",
        description:
          "We create visually appealing and highly functional mobile applications that offer seamless user experiences, helping businesses connect with their customers on mobile devices.",
      },
      {
        icon: <WebIcon />, // Replace with actual icon
        title: "Digital Marketing",
        description:
          "Our digital marketing services help businesses reach their target audience through effective online strategies, including SEO, social media marketing, and paid advertising, ensuring increased visibility and growth.",
      },
    ],
  };
  return (
    <section className="py-20 bg-black">
      <ContentWidth>
        <p className="text-brand-color text-xl font-bold tracking-wide uppercase">
          {serviceSectionData.heading}
        </p>
        <div className="flex items-start justify-between">
          <h2 className="text-title leading-snug text-white max-w-[500px]">
            We Provide Any Business Problems{" "}
            <span className="text-brand-color">Services</span>
          </h2>
          <button className="flex items-center justify-between bg-brand-color rounded-full p-3 gap-2 text-white">
            All Services
            <span className="p-1 bg-white rounded-full text-brand-color">
              <PlusIcon />
            </span>
          </button>
        </div>
      </ContentWidth>
    </section>
  );
};

export default Services;
