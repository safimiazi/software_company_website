import React from "react";
import Title from "./Title";

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
    <div>
      <Title title={data.sectionTitle} description={data.sectionDescription} />
    </div>
  );
};

export default Why_choose_us;
