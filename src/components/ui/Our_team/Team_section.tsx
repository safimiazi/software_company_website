import Team from "@/components/shared/common/Team";
import React from "react";

const Team_section = () => {
  const teamData = [
    {
      category: "Leadership",
      members: [
        {
          name: "John Doe",
          role: "CEO",
          imageUrl: "/images/john_doe.jpg",
          bio: "Leading the company with innovation and dedication.",
        },
        {
          name: "Jane Smith",
          role: "CTO",
          imageUrl: "/images/jane_smith.jpg",
          bio: "Driving technological advancements.",
        },
        {
          name: "John Doe",
          role: "CEO",
          imageUrl: "/images/john_doe.jpg",
          bio: "Leading the company with innovation and dedication.",
        },
        {
          name: "Jane Smith",
          role: "CTO",
          imageUrl: "/images/jane_smith.jpg",
          bio: "Driving technological advancements.",
        },
      ],
    },
    {
      category: "Design Team",
      members: [
        {
          name: "Emily Johnson",
          role: "UI/UX Designer",
          imageUrl: "/images/emily_johnson.jpg",
          bio: "Creating user-centered designs with elegance.",
        },
        {
          name: "Chris Evans",
          role: "Graphic Designer",
          imageUrl: "/images/chris_evans.jpg",
          bio: "Visualizing concepts with creativity.",
        },
        {
          name: "Emily Johnson",
          role: "UI/UX Designer",
          imageUrl: "/images/emily_johnson.jpg",
          bio: "Creating user-centered designs with elegance.",
        },
        {
          name: "Chris Evans",
          role: "Graphic Designer",
          imageUrl: "/images/chris_evans.jpg",
          bio: "Visualizing concepts with creativity.",
        },
      ],
    },
  ];
  return (
    <div>
      <Team data={teamData} />
    </div>
  );
};

export default Team_section;
