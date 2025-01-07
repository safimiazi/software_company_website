"use client";
import React from "react";
import Portfolio_image from "../../../../public/portfolio.webp";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import Image from "next/image";

import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper/modules";
import ContentWidth from "@/components/shared/ContentWidth";
import Title from "@/components/shared/common/Title";
import { Truncate } from "@/utility/CommonFunction";
const Portfolio_web_development = () => {
  const portfolioData = {
    sectionTitle: "Our Portfolio",
    sectionDescription:
      "Explore some of our finest projects showcasing our expertise in web development, design, and innovation. Each project is crafted with precision and tailored to meet unique client requirements.",
    projects: [
      {
        title: "E-Commerce Platform",
        description:
          "A robust e-commerce solution with seamless user experience, secure payment gateway integration, and responsive design.",
        image: Portfolio_image,
        category: "Web Development",
        link: "https://example-ecommerce.com",
      },
      {
        title: "Corporate Website",
        description:
          "A modern and professional website designed for a corporate client, featuring dynamic content management and multi-language support.",
        image: "/images/portfolio/corporate.jpg",
        category: "Web Design",
        link: "https://example-corporate.com",
      },
      {
        title: "Travel Agency Portal",
        description:
          "A comprehensive travel booking portal with API integrations for flight, hotel, and tour bookings, built for a seamless user journey.",
        image: "/images/portfolio/travel.jpg",
        category: "Full-Stack Development",
        link: "https://example-travel.com",
      },
      {
        title: "Food Delivery App",
        description:
          "A user-friendly food delivery application with real-time tracking, multiple payment options, and intuitive UI.",
        image: "/images/portfolio/food-app.jpg",
        category: "Mobile App Development",
        link: "https://example-foodapp.com",
      },
      {
        title: "Educational Platform",
        description:
          "An online learning management system with interactive features like quizzes, forums, and live classes.",
        image: "/images/portfolio/education.jpg",
        category: "Web Development",
        link: "https://example-education.com",
      },
    ],
  };

  return (
    <section className="py-20">
      <ContentWidth>
        <div className="space-y-12">
          {/* Section Header */}
          <Title
            title={portfolioData.sectionTitle}
            description={portfolioData.sectionDescription}
          />

          {/* Swiper Slider */}
          <Swiper
            spaceBetween={30}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="portfolio-slider"
            breakpoints={{
              // Small devices
              0: {
                slidesPerView: 1,
              },
              // Medium devices
              768: {
                slidesPerView: 2,
              },
              // Large devices
              1024: {
                slidesPerView: 3,
              },
            }}
          >
            {portfolioData.projects.map((project, index) => (
              <SwiperSlide key={index}>
                <div className="rounded-lg border overflow-hidden shadow-md">
                  <Image
                    src={Portfolio_image}
                    alt="Logo"
                    width={150}
                    height={150}
                    priority
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h5 className="text-lg font-semibold">{project.title}</h5>
                    <p className="text-sm text-gray-600 mt-2">
                      {Truncate(project.description, 12)}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand-color font-semibold mt-4 block"
                    >
                      View Project
                    </a>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ContentWidth>
    </section>
  );
};

export default Portfolio_web_development;
