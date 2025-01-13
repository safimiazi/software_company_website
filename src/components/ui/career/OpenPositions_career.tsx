import OpenPositions from "@/components/shared/common/OpenPositions";
import React from "react";

const OpenPositions_career = () => {
  const jobs = [
    {
      title: "Software Engineer",
      location: "Dhaka, Bangladesh",
      department: "Development",
      employmentType: "Full-Time",
      description:
        "We’re looking for a passionate Software Engineer to develop innovative software solutions.",
      applyLink: "https://example.com/apply/software-engineer",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      department: "Design",
      employmentType: "Contract",
      description:
        "Join our team as a UI/UX Designer to create seamless user experiences.",
      applyLink: "https://example.com/apply/ui-ux-designer",
    },
 
  ];
  return (
    <div>
      <OpenPositions
        sectionTitle="Open Positions"
        sectionDescription="Explore our current job openings and find the right role for you at Easy Soft Bangladesh."
        jobs={jobs}
      />
    </div>
  );
};

export default OpenPositions_career;
