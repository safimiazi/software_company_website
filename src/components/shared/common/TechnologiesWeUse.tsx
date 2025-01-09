"use client"
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

interface Technology {
  id: number;
  name: string;
  icon?: React.ReactNode;
}

interface TechnologiesWeUseProps {
  title: string;
  description: string;
  technologies: Technology[];
}

const TechnologiesWeUse: React.FC<TechnologiesWeUseProps> = ({
  title,
  description,
  technologies,
}) => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        {/* Swiper Section */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={2}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          loop
          speed={3000}
          className="mySwiper"
        >
          {technologies.map((tech) => (
            <SwiperSlide key={tech.id} className="flex justify-center">
              <div className="p-4 rounded-lg border border-gray-200 flex items-center gap-4 shadow-sm text-center hover:shadow-lg transition-all duration-300">
                {tech.icon && (
                  <div className="mb-3 text-brand-color text-3xl">{tech.icon}</div>
                )}
                <h4 className="text-lg font-medium">{tech.name}</h4>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TechnologiesWeUse;
