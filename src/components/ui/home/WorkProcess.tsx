import ContentWidth from "@/components/shared/ContentWidth";
import React from "react";

const WorkProcess = () => {
  const wordProcessSectionData = {
    heading: "Our Process",
    title: "Streamlined Workflow for Outstanding Results",
    process: [
      {
        title: "Strategic Business Planning",
        image: "",
        description:
          "Transform your ideas into actionable strategies with our comprehensive business planning. We seamlessly integrate innovation and market insights to lay a solid foundation for success.",
      },
      {
        title: "Project Kickoff & Execution",
        image: "",
        description:
          "Launch your projects with precision and agility. Our team ensures every step is optimized, leveraging advanced tools and methodologies to meet your unique goals.",
      },
      {
        title: "Delivering Excellence",
        image: "",
        description:
          "We focus on quality and timeliness, ensuring your project is completed to perfection. From ideation to delivery, we prioritize results that exceed expectations.",
      },
    ],
  };

  return (
    <section className="py-20">
      <ContentWidth>
        <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
          {/* header */}
          <div>
            <h4 className="relative flex items-center justify-center text-title text-brand-color mb-5">
              <span className=""></span>
              {wordProcessSectionData.heading}
              <span className=""></span>
            </h4>
          </div>
          {/* card */}
          <div></div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default WorkProcess;
