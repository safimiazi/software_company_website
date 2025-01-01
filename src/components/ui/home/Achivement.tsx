import ContentWidth from "@/components/shared/ContentWidth";
import React from "react";

const Achivement = () => {
  const achievementData = {
    achievement: "Finished this Achievement in 7 Years",
    stats: [
      {
        value: 1372,
        text: "Project Complete",
      },
      {
        value: 23,
        text: "Years Experience",
      },
      {
        value: 38,
        text: "Expert Member",
      },
      {
        value: "100%",
        text: "Satisfaction Rate",
      },
    ],
  };

  return (
    <div className="py-20">
      <ContentWidth>
        <h4 className="relative flex items-center justify-center text-title text-brand-color mb-5">
          <span className="before:content-[''] before:block before:w-16 before:h-px before:bg-brand-color mx-4"></span>
          {achievementData.achievement}
          <span className="after:content-[''] after:block after:w-16 after:h-px after:bg-brand-color mx-4"></span>
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-center justify-between">
          {/* card 1 */}
          {achievementData.stats?.map((item, inx) => (
            <div
              key={inx}
              className="p-10 hover:border-brand-color group relative flex flex-col justify-center items-center gap-4 border rounded-md overflow-hidden"
            >
              <h4 className="text-title">{item.value}</h4>
              <p>{item.text}</p>
              <div className="absolute bottom-0 left-0 w-full h-0 group-hover:h-2 bg-brand-color   transition-all duration-300"></div>
            </div>
          ))}
        </div>
        
      </ContentWidth>
    </div>
  );
};

export default Achivement;
