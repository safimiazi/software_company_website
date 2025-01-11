"use client";
import ContentWidth from "@/components/shared/ContentWidth";
import { MarketingIcon, PlusIcon, WebIcon } from "@/Icons";
import React from "react";
import { motion } from "motion/react";
import { Truncate } from "@/utility/CommonFunction";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css"; // Import Swiper styles
import "swiper/css/pagination";

const Company_overview_services = () => {
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
        icon: <WebIcon />,
        title: "Software Development",
        description:
          "Our expert team develops high-quality, custom software solutions tailored to meet the unique needs of your business, boosting efficiency and productivity.",
      },
      {
        icon: <WebIcon />,
        title: "Mobile Application Designing",
        description:
          "We create visually appealing and highly functional mobile applications that offer seamless user experiences, helping businesses connect with their customers on mobile devices.",
      },
      {
        icon: <MarketingIcon />,
        title: "Digital Marketing",
        description:
          "Our digital marketing services help businesses reach their target audience through effective online strategies, including SEO, social media marketing, and paid advertising, ensuring increased visibility and growth.",
      },
    ],
  };

  return (
    <section className="py-20">
      <ContentWidth>
        {/* Section Header */}
        <p className="text-brand-color text-xl font-bold tracking-wide uppercase">
          {serviceSectionData.heading}
        </p>
        <div className="flex items-start md:flex-row flex-col gap-3 justify-between mb-12">
          <h2 className="text-title max-w-[500px] text-3xl leading-snug">
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
        {/* <Swiper
          slidesPerView={3}
          modules={[Autoplay, Pagination]}
          spaceBetween={20}
          autoplay={{
            delay: 0, // Continuous scroll without stopping
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={3000} // Adjust speed for smoother scrolling
          loop={true} // Enable loop for infinite scrolling
          direction={"horizontal"} // Set direction to right-to-left
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
          className="grid md:grid-cols-4 grid-cols-1 gap-5"
        >
          {serviceSectionData.services.map((service, inx) => (
            <SwiperSlide key={inx}>
              <motion.div
                whileHover={{
                  background: "#FF3C00",
                  transition: {
                    duration: 0.1, // 500ms duration
                  },
                }}
                style={{ minHeight: "350px" }}
                className="bg-white rounded-sm p-8 flex flex-col group transition-all duration-500"
              >
                <div className="mb-6 text-center ">
                  <div className="text-4xl text-brand-color mb-4 group-hover:text-white transition-all duration-500">
                    {service.icon}
                  </div>
                </div>
                <h4 className="text-2xl font-semibold text-black mb-4 text-start group-hover:text-white transition-all duration-500">
                  {service.title}
                </h4>
                {/* Animation */}
        {/* <div
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
            </SwiperSlide>
          ))}
        </Swiper>  */}
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
              className="bg-white border rounded-sm p-8 flex flex-col group transition-all duration-500"
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

export default Company_overview_services;
