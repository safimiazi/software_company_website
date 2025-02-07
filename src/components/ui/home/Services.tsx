"use client";
import ContentWidth from "@/components/shared/ContentWidth";
import { MarketingIcon, PlusIcon, WebIcon } from "@/Icons";
import React from "react";
import { motion } from "motion/react";
import { Truncate } from "@/utility/CommonFunction";
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
        icon: <MarketingIcon />, // Replace with actual icon
        title: "Digital Marketing",
        description:
          "Our digital marketing services help businesses reach their target audience through effective online strategies, including SEO, social media marketing, and paid advertising, ensuring increased visibility and growth.",
      },
    ],
  };
  

  return (
    <section className="py-20 bg-black">
      <ContentWidth>
        {/* Section Header */}
        <p className="text-brand-color text-xl font-bold tracking-wide uppercase">
          {serviceSectionData.heading}
        </p>
        <div className="flex items-start md:flex-row flex-col gap-3 justify-between mb-12">
          <h2 className="text-title text-white max-w-[500px] text-3xl leading-snug">
            We Provide Any Business Problems{" "}
            <span className="text-brand-color">Services</span>
          </h2>
          <button className="flex items-center justify-between bg-brand-color rounded-full p-3 gap-2 text-white transition duration-300 ease-in-out hover:bg-brand-color-dark">
            All Services
            <span className="p-1 bg-white rounded-full text-brand-color">
              <PlusIcon />
            </span>
          </button>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
          {serviceSectionData.services.map((service, inx) => (
            <motion.div
              whileHover={{
                background: "#FF3C00",
                transition: {
                  duration: 0.1, // 500ms duration
                },
              }}
              key={inx}
              className="bg-white rounded-sm p-8 flex flex-col group transition-all duration-500"
            >
              <div className="mb-6 text-center">
                <div className="text-4xl text-brand-color mb-4 group-hover:text-white transition-all duration-500">
                  {service.icon}
                </div>
              </div>
              <h4 className="text-2xl font-semibold text-black mb-4 text-start group-hover:text-white transition-all duration-500">
                {service.title}
              </h4>
              {/* Animation */}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  background: "black",
                  marginBottom: "16px",
                }}
              >
                <div className="w-8 bg-brand-color h-full animate-line group-hover:bg-white transition-all duration-500"></div>
              </div>
              <p className="text-base text-gray-600 leading-relaxed text-start flex-grow mb-4 group-hover:text-white transition-all duration-500">
                {Truncate(service.description, 8)}
              </p>
              <button className="flex items-center justify-between bg-brand-color group-hover:bg-white rounded-full p-3 gap-2 text-white transition-all duration-500">
                <span className="group-hover:text-brand-color transition-all duration-500">
                  Learn More
                </span>
                <span className="p-1 bg-white group-hover:bg-brand-color rounded-full text-brand-color group-hover:text-white transition-all duration-500">
                  <PlusIcon />
                </span>
              </button>
            </motion.div>
          ))}
        </div>
      </ContentWidth>
    </section>
  );
};

export default Services;
