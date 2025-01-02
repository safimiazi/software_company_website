import ContentWidth from "@/components/shared/ContentWidth";
import { MarketingIcon, PlusIcon, WebIcon } from "@/Icons";
import Image from "next/image";
import React from "react";
import Case from "../../../../public/case1.png";
import Link from "next/link";
const CaseStudies = () => {
  const serviceSectionData = {
    heading: "Latest Works",
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
            We Serve the Best Works <br></br>
            View <span className="text-brand-color">Case Studies</span>
          </h2>
          <button className="flex items-center justify-between bg-brand-color rounded-full p-3 gap-2 text-white transition duration-300 ease-in-out hover:bg-brand-color-dark">
            All Projects
            <span className="p-1 bg-white rounded-full text-brand-color">
              <PlusIcon />
            </span>
          </button>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-4 grid-cols-1 gap-5">
          {serviceSectionData.services.map((service, inx) => (
            <div
              key={inx}
              className="relative rounded-md group z-30 card-container"
            >
              <Image
                src={Case}
                alt="About Us"
                width={1000}
                height={1000}
                className="w-full h-full"
              />
              {/* Background Gradient */}
              <div className="card-background"></div>

              {/* Content Section */}
              <div className="absolute border-t-4 border-t-brand-color bg-black z-50 group-hover:-translate-y-0 duration-300 translate-y-4 bottom-0 p-2 rounded-t-md w-9/12 max-h-fit left-1/2 transform -translate-x-1/2 text-white">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                  <span className="text-red-500 text-sm font-semibold">
                    Company
                  </span>
                </div>
                <h3 className="text-lg font-bold mt-2">
                  Corporate Finance for helpfulness Markets
                </h3>
                <Link
                  href={""}
                  className="text-sm opacity-0 group-hover:opacity-100 duration-300 font-medium mt-4 inline-flex items-center gap-2 text-gray-300 hover:text-white transition"
                >
                  Read More <span className="text-lg">+</span>
                </Link>
              </div>

              {/* Border Section */}
              <div className="absolute -bottom-5 -z-30 group-hover:border-brand-color transition-all duration-300 w-11/12 h-full left-1/2 transform -translate-x-1/2 border-b border-l border-r border-gray-400 border-opacity-40 overflow-hidden"></div>
            </div>
          ))}
        </div>
      </ContentWidth>
    </section>
  );
};

export default CaseStudies;
