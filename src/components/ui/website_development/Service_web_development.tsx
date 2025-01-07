"use client"
import Title from "@/components/shared/common/Title";
import ContentWidth from "@/components/shared/ContentWidth";
import { PhoneIcon } from "@/Icons";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion"
const Service_web_development = () => {
  const serviceData = {
    sectionTitle: "Web Development Services We Provide",
    sectionDescription:
      "We specialize in developing websites that are not only functional and secure but also built to scale with your business. Our expert team offers a comprehensive range of web development services that blend cutting-edge technology with seamless performance. Explore our services below.",
    services: [
      {
        title: "Website Security & Maintenance",
        description:
          "Keep your website secure and up-to-date with ongoing maintenance, software updates, and proactive security measures to safeguard your data and users.",
        bgColor: "bg-blue-500",
      },
      {
        title: "API & Third-Party Integrations",
        description:
          "Enhance your website’s capabilities with seamless integrations to third-party tools and services, such as payment gateways, CRM systems, and marketing platforms.",
        bgColor: "bg-green-500",
      },
      {
        title: "Database Development & Management",
        description:
          "Create a secure, scalable database solution that ensures your business data is stored, managed, and backed up effectively for fast access and reliability.",
        bgColor: "bg-red-500",
      },
      {
        title: "Content Management Systems (CMS)",
        description:
          "Take full control of your website’s content with a user-friendly CMS that allows you to easily update text, images, and other elements—no technical skills required.",
        bgColor: "bg-yellow-500",
      },
      {
        title: "Responsive Web Development",
        description:
          "Build a website that looks great and functions seamlessly on any device. We ensure your website is fully responsive and optimized for mobile, tablet, and desktop use.",
        bgColor: "bg-purple-500",
      },
      {
        title: "Cloud Hosting & Scalability",
        description:
          "Choose cloud-based hosting solutions that provide scalability and reliability. We ensure your website can grow with your business, handling high traffic and large amounts of data effortlessly.",
        bgColor: "bg-teal-500",
      },
    ],
  };

  return (
    <div className="py-20">
      <ContentWidth>
        <div className="flex flex-col gap-10">
          {/* section header */}
          <Title
            title={serviceData.sectionTitle}
            description={serviceData.sectionDescription}
          />
          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* service card */}
            {serviceData.services.map((service, inx) => (
              <div
                key={inx}
                className="relative overflow-hidden   p-6 space-y-5  rounded-md border group hover:border-brand-color transition-all duration-300"
              >
                <div className="text-2xl group-hover:text-3xl  relative transition-all duration-500  p-2 rounded-full border w-fit  z-10 group-hover:text-white">
                  <PhoneIcon />
                </div>
                <h5 className="text-xl  relative transition-all duration-500  z-10 group-hover:text-white">{service.title}</h5>
                <p className="text-sm   relative transition-all duration-500 z-10 group-hover:text-white">{service.description}</p>
                <div className="absolute w-full h-0 bottom-0 left-0 group-hover:bg-brand-color group-hover:h-full transition-all duration-500  ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>
      </ContentWidth>  
    </div>
  );
};

export default Service_web_development;
