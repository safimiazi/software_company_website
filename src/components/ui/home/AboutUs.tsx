import ContentWidth from "@/components/shared/ContentWidth";
import Image from "next/image";
import React from "react";
import about from "../../../../public/about.png";
import { CheckMark, PlusIcon } from "@/Icons";

const AboutUs = () => {
  const aboutSectionData = {
    heading: "About IT-Soft",
    image: about,
    title: "Accelerating Your Path to Business Excellence",
    description:
      "At IT-Soft, we specialize in crafting innovative solutions that streamline business growth. Our approach combines collaboration with smart strategies to deliver impactful results through diverse channels and technologies.",
    points: [
      "Building reliable, long-lasting partnerships for success",
      "Transforming data into actionable, value-driven insights",
      "Driving progress through open-source collaboration",
    ],
    companyInfo: {
      founderName: "Mohebulla Miazi",
      designation: "CEO and Founder",
    },
  };

  return (
    <section className="py-20">
      <ContentWidth>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* Image */}
          <div className="flex-shrink-0 w-full md:w-[600px]">
            <Image
              src={aboutSectionData.image}
              alt="About Us"
              width={1000}
              height={1000}
              className="w-full "
            />
          </div>

          {/* Text Content */}
          <div className="text-center md:text-left space-y-4 md:space-y-6">
            <p className="text-brand-color text-xl font-bold tracking-wide uppercase">
              {aboutSectionData.heading}
            </p>
            <h2 className="text-title leading-snug">
              The Fastest Way To Achieve Your Business{" "}
              <span className="text-brand-color">Success</span>
            </h2>
            <p className="text-lg text-gray-600">
              {aboutSectionData.description}
            </p>

            {/* List of Points */}
            <ul className="space-y-2">
              {aboutSectionData.points?.map((point, inx) => (
                <li
                  key={inx}
                  className="flex items-center gap-4 text-gray-700 text-lg"
                >
                  <div className="p-1 rounded-full bg-brand-color">
                    <CheckMark className="text-white w-3 h-3" />
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="flex flex-col md:flex-row items-center justify-start gap-10">
              <button className="flex items-center justify-between bg-brand-color rounded-full p-3 gap-2 text-white">
                Learn More
                <span>
                  <PlusIcon />
                </span>
              </button>
              <div className="flex items-center justify-start gap-4">
                <Image
                  src={aboutSectionData.image}
                  alt="Founder"
                  width={56}
                  height={56}
                  className="w-14 h-14 border-2 border-brand-color rounded-full object-cover"
                />
                <div className="flex flex-col">
                  <div className="text-xl font-semibold text-gray-800">
                    {aboutSectionData.companyInfo.founderName}
                  </div>
                  <div className="text-sm text-gray-600">
                    {aboutSectionData.companyInfo.designation}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default AboutUs;
