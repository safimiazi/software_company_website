import ContentWidth from "@/components/shared/ContentWidth";
import React from "react";
import planningPhoto from "../../../../public/planning.png";
import projectsPhoto from "../../../../public/projects.png";
import workPhoto from "../../../../public/works.png";
import Image from "next/image";

const WorkProcess = () => {
  const workProcessSectionData = {
    heading: "Our Process",
    title: "We Follow the Working Process for Finished Project",
    process: [
      {
        title: "Strategic Business Planning",
        image: planningPhoto,
        description:
          "Transform your ideas into actionable strategies with our comprehensive business planning. We seamlessly integrate innovation and market insights to lay a solid foundation for success.",
      },
      {
        title: "Project Kickoff & Execution",
        image: projectsPhoto,
        description:
          "Launch your projects with precision and agility. Our team ensures every step is optimized, leveraging advanced tools and methodologies to meet your unique goals.",
      },
      {
        title: "Delivering Excellence",
        image: workPhoto,
        description:
          "We focus on quality and timeliness, ensuring your project is completed to perfection. From ideation to delivery, we prioritize results that exceed expectations.",
      },
    ],
  };

  return (
    <section className="py-20">
      <ContentWidth>
        <div className="flex flex-col gap-10 items-center justify-center">
          {/* header */}
          <div>
            <h5 className="relative flex items-center justify-center text-subtitle text-brand-color mb-5">
              <span className="before:content-[''] before:block before:w-16 before:h-px bg-brand-color mx-4"></span>
              {workProcessSectionData.heading}
              <span className="after:content-[''] after:block after:bg-brand-color after:w-16 after:h-px mx-4"></span>
            </h5>
            <h3 className="text-title max-w-[530px] text-center">
              We Follow the Working{" "}
              <span className="text-brand-color">Process </span>
              for Finished Project
            </h3>
          </div>
          {/* cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:gap-40 md:gap-20 gap-10 items-center justify-center">
            {workProcessSectionData.process.map((item, inx) => (
              <div
                key={inx}
                className="flex flex-col gap-4 items-center justify-center "
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  width={500}
                  height={500}
                  className="w-full rounded-t-lg object-cover"
                />
                <h4 className="text-lg font-semibold text-gray-800 mt-4">
                  {item.title}
                </h4>
                <p className="text-center text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
          <div></div>
        </div>
      </ContentWidth>
    </section>
  );
};

export default WorkProcess;
