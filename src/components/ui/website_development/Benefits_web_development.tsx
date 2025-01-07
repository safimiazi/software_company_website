import Title from "@/components/shared/common/Title";
import ContentWidth from "@/components/shared/ContentWidth";
import { PhoneIcon } from "@/Icons";
import React from "react";

const Benefits_web_development = () => {
  const benefitData = {
    sectionTitle: "Why You Need Web Development Services",
    sectionDescription:
      "A strong online presence starts with a well-built website. Here’s why web development services are essential for your business.",
    cta: {
      text: "Schedule a call now",
      link: "/contact",
    },
    points: [
      {
        icon: "BG",
        title: "Custom Solutions for Your Business",
        description:
          "Customized websites focus on your individual requirements and help you stand out from the crowd.",
      },
      {
        icon: "BG",
        title: "Improved User Experience",
        description:
          "Professional web development ensures your site is easy to navigate, fast, and user-friendly, keeping visitors engaged.",
      },
      {
        icon: "BG",
        title: "Better Security",
        description:
          "Protect sensitive business and customer data with secure, up-to-date websites that are shielded from online threats.",
      },
      {
        icon: "BG",
        title: "Increased Conversions",
        description:
          "Expertly developed websites are designed to encourage visitors to take the next step, whether it's making a purchase or contacting you.",
      },
      {
        icon: "BG",
        title: "Scalability and Flexibility",
        description:
          "A scalable website can accommodate future growth, such as new features, services, or increased traffic.",
      },
      {
        icon: "BG",
        title: "Competitive Advantage",
        description:
          "A professional website uses the latest technology and design trends to appeal to your audience and outshine your competitors.",
      },
    ],
  };

  return (
    <div className="py-20">
      <ContentWidth>
        <div className="flex flex-col gap-10">
          {/* section header */}
          <Title
            title={benefitData.sectionTitle}
            description={benefitData.sectionDescription}
          />
          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {/* benefit card */}
            {benefitData.points.map((point, inx) => (
              <div
                key={inx}
                className="relative overflow-hidden   p-6 space-y-5  rounded-md border group hover:border-brand-color transition-all duration-300"
              >
                <div className="text-2xl group-hover:text-3xl  relative transition-all duration-500  p-2 rounded-full border w-fit  z-10 group-hover:text-white">
                  <PhoneIcon />
                </div>
                <h5 className="text-xl  relative transition-all duration-500  z-10 group-hover:text-white">
                  {point.title}
                </h5>
                <p className="text-sm   relative transition-all duration-500 z-10 group-hover:text-white">
                  {point.description}
                </p>
                <div className="absolute w-full h-0 bottom-0 left-0 group-hover:bg-brand-color group-hover:h-full transition-all duration-500  ease-in-out"></div>
              </div>
            ))}
          </div>
        </div>
      </ContentWidth>
    </div>
  );
};

export default Benefits_web_development;
