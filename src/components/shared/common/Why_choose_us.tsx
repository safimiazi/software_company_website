import React from "react";
import Title from "./Title";
import ContentWidth from "../ContentWidth";
import { PlusIcon } from "@/Icons";

const Why_choose_us = () => {
  const data = {
    sectionTitle: "Why Choose Us?",
    sectionDescription:
      "Choosing us means partnering with a team that is committed to your success. Here’s why you can trust us:",
    sectionData: [
      {
        id: 1,
        title: "4+ Years of Experience",
        description:
          "Our team has over four years of expertise creating high-quality, customized solutions.",
      },
      {
        id: 2,
        title: "300+ Completed Projects",
        description:
          "We have successfully completed over 300 projects, demonstrating our ability to meet diverse client needs.",
      },
      {
        id: 3,
        title: "Serving 20+ Countries",
        description:
          "Our global reach allows us to bring a wide range of perspectives and solutions to your project.",
      },
    ],
  };

  return (
    <div className="py-20">
      <ContentWidth>
        <div className="space-y-4">
          <Title
            title={data.sectionTitle}
            description={data.sectionDescription}
          />
          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {data.sectionData?.map((item, inx) => (
              <div className="p-6 rounded-md border hover:border-brand-color transition-all duration-500 space-y-2">
                <div className="p-2 rounded-full">
                  <PlusIcon />
                </div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </ContentWidth>
    </div>
  );
};

export default Why_choose_us;
