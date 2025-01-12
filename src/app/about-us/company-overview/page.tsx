import Client_Testimonials from "@/components/shared/common/Client_Testimonials";
import Portfolio from "@/components/shared/common/Portfolio";
import TeamSection from "@/components/shared/common/TeamSection";
import TechnologiesWeUse from "@/components/shared/common/TechnologiesWeUse";
import Why_choose_us from "@/components/shared/common/Why_choose_us";
import Company_overview_about from "@/components/ui/company_overview/Company_overview_about";
import Company_overview_banner from "@/components/ui/company_overview/Company_overview_banner";
import Company_overview_services from "@/components/ui/company_overview/Company_overview_services";
import Blog from "@/components/ui/home/Blog";
import ContactUs from "@/components/ui/home/ContactUs";
import React from "react";
import { FaAndroid, FaApple, FaReact, FaSwift } from "react-icons/fa";
import { SiFlutter, SiKotlin } from "react-icons/si";
const CompanyOverview = () => {
  const teamData = [
    {
      name: "John Doe",
      role: "CEO",
      imageUrl: "../../../../public/planning.png",
      bio: "Passionate about innovation and leadership.",
    },
    {
      name: "Jane Smith",
      role: "CTO",
      imageUrl: "../../../../public/planning.png",
      bio: "Expert in scalable systems and AI solutions.",
    },
    {
      name: "Emily Johnson",
      role: "UI/UX Designer",
      imageUrl: "../../../../public/planning.png",
      bio: "Creating user-centered designs with a creative touch.",
    },
  ];

  const technologies = [
    { id: 1, name: "React Native", icon: <FaReact /> },
    { id: 2, name: "Flutter", icon: <SiFlutter /> },
    { id: 3, name: "Swift", icon: <FaSwift /> },
    { id: 4, name: "Kotlin", icon: <SiKotlin /> },
    { id: 5, name: "iOS", icon: <FaApple /> },
    { id: 6, name: "Android", icon: <FaAndroid /> },
  ];
  return (
    <div>
      <Company_overview_banner />
      <Company_overview_about />
      <Company_overview_services />
      <Why_choose_us />
      <Portfolio />
      <Client_Testimonials />
      <TeamSection
        sectionTitle="Meet Our Team"
        sectionDescription="We are a group of passionate and talented professionals dedicated to delivering the best software solutions."
        teamMembers={teamData}
      />
      <TechnologiesWeUse
        title="Technologies We Use"
        description="We leverage cutting-edge tools and frameworks to build robust and scalable mobile applications tailored to your needs."
        technologies={technologies}
      />{" "}
      <Blog/>
      <ContactUs/>
    </div>
  );
};

export default CompanyOverview;
