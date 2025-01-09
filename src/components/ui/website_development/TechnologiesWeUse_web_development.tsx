import TechnologiesWeUse from "@/components/shared/common/TechnologiesWeUse";
import ContentWidth from "@/components/shared/ContentWidth";
import React from "react";
import { FaReact, FaSwift, FaAndroid, FaApple } from "react-icons/fa";
import { SiFlutter, SiKotlin } from "react-icons/si";

const TechnologiesWeUse_web_development = () => {
  const technologies = [
    { id: 1, name: "React Native", icon: <FaReact /> },
    { id: 2, name: "Flutter", icon: <SiFlutter /> },
    { id: 3, name: "Swift", icon: <FaSwift /> },
    { id: 4, name: "Kotlin", icon: <SiKotlin /> },
    { id: 5, name: "iOS", icon: <FaApple /> },
    { id: 6, name: "Android", icon: <FaAndroid /> },
  ];
  return (
    <div className="py-20">
      <ContentWidth>
        <div>
          <TechnologiesWeUse
            title="Technologies We Use"
            description="We leverage cutting-edge tools and frameworks to build robust and scalable mobile applications tailored to your needs."
            technologies={technologies}
          />
        </div>
      </ContentWidth>
    </div>
  );
};

export default TechnologiesWeUse_web_development;
