"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import {
  A11y,
  Autoplay,
  Navigation,
  Pagination,
  Scrollbar,
} from "swiper/modules";
import Link from "next/link";

// import required modules

export default function App() {
  const slides = [
    {
      title: "Innovative Web Solutions",
      description:
        "We deliver cutting-edge web development services tailored to your business needs. Build a robust online presence with our expert team.",
      image:
        "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      button: {
        text: "Learn More",
        link: "/services/web-development",
      },
    },
    {
      title: "Mobile App Development",
      description:
        "Create user-friendly and scalable mobile applications for Android and iOS platforms with our skilled developers.",
      image:
        "https://images.pexels.com/photos/6078120/pexels-photo-6078120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      button: {
        text: "Explore Apps",
        link: "/services/mobile-app-development",
      },
    },
    {
      title: "Creative UI/UX Design",
      description:
        "Enhance user experiences with intuitive and visually appealing designs. Let us craft the perfect interface for your software.",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      button: {
        text: "See Our Work",
        link: "/services/ui-ux-design",
      },
    },
    {
      title: "Boost Your Online Presence",
      description:
        "Our digital marketing strategies ensure your business reaches the right audience effectively and efficiently.",
      image:
        "https://images.pexels.com/photos/3184633/pexels-photo-3184633.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      button: {
        text: "Start Marketing",
        link: "/services/digital-marketing",
      },
    },
    {
      title: "SEO Optimization",
      description:
        "Improve your website's visibility on search engines with our proven SEO techniques. Get found by your customers easily.",
      image:
        "https://images.pexels.com/photos/571753/pexels-photo-571753.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      button: {
        text: "Optimize Now",
        link: "/services/seo-optimization",
      },
    },
  ];

  return (
    <>
      <Swiper
        slidesPerView={1}
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            const imageUrl = slides[index].image;
            return `
              <span
                class="${className} custom-pagination"
                style="
                  width: 50px;
                  height: 50px;
                  background-image: url('${imageUrl}');
                  background-size: cover;
                  background-position: center;
                  display: inline-block;
                  border-radius: 5%;
                "
              ></span>
            `;
          },
        }}
        scrollbar={{ draggable: true }}
        autoplay={{ delay: 9000 }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[625px]">
              <Image
                src={slide.image}
                alt={slide.title}
                className="h-full w-full object-cover"
                width={1000}
                height={1000}
              />
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center">
                <h2 className="text-4xl font-bold mb-4">{slide.title}</h2>
                <p className="text-lg max-w-[600px] mb-6">
                  {slide.description}
                </p>
                <Link
                  href={slide.button.link}
                  className="bg-brand-color  px-6 py-3 rounded text-white font-medium"
                >
                  {slide.button.text}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
