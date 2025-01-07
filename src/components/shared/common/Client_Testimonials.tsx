"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import Image from "next/image";
import ContentWidth from "@/components/shared/ContentWidth";
import Portfolio_image from "../../../../public/portfolio.webp";
import Title from "./Title";

const Client_Testimonials = () => {
  const testimonialData = {
    sectionTitle: "What Our Clients Say",
    sectionDescription:
      "Hear from our satisfied clients who trusted us with their projects.",
    testimonials: [
      {
        name: "John Doe",
        position: "CEO, Tech Solutions",
        message:
          "Working with Easy Soft Bangladesh was a fantastic experience. Their team delivered a top-notch website tailored to our needs.",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Jane Smith",
        position: "Founder, Green Ventures",
        message:
          "They exceeded our expectations with a beautifully designed and functional platform. Highly recommend their services!",
        image: "https://via.placeholder.com/150",
      },
      {
        name: "Michael Johnson",
        position: "Manager, Bright Marketing",
        message:
          "Professional, responsive, and highly skilled. The project was delivered on time and met all our requirements.",
        image: "https://via.placeholder.com/150",
      },
    ],
  };

  return (
    <section className="py-20">
      <ContentWidth>
        <div className="space-y-10">
          {/* Section Header */}
          <Title
            title={testimonialData.sectionTitle}
            description={testimonialData.sectionDescription}
          />

          {/* Swiper Slider */}
          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            pagination={{ clickable: true }}
            modules={[Pagination]}
            className="testimonial-slider"
          >
            {testimonialData.testimonials.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * index, duration: 0.8 }}
                  className="bg-white p-8 rounded-md border"
                >
                  <div className="flex flex-col items-center text-center">
                    <div className="w-20 h-20">
                      <Image
                        src={Portfolio_image}
                        alt={testimonial.name}
                        width={80}
                        height={80}
                        className="rounded-full w-full h-full mb-4"
                      />
                    </div>
                    <h5 className="text-xl font-semibold">
                      {testimonial.name}
                    </h5>
                    <p className="text-sm text-gray-500 mb-4">
                      {testimonial.position}
                    </p>
                    <p className="text-gray-600">{testimonial.message}</p>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </ContentWidth>
    </section>
  );
};

export default Client_Testimonials;
