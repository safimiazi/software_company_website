import React from "react";
import Title from "./Title";
import ContentWidth from "../ContentWidth";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
}

interface TeamSectionProps {
  sectionTitle: string;
  sectionDescription: string;
  teamMembers: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({
  sectionTitle,
  sectionDescription,
  teamMembers,
}) => {
  return (
    <div className=" py-20">
      <ContentWidth>
        {" "}
        <div className="space-y-10">
          {/* Section Title */}
          <Title title={sectionTitle} description={sectionDescription} />
          {/* Team Members */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-white border rounded-md p-6 text-center flex flex-col items-center"
              >
                <img
                  src={member.imageUrl}
                  alt={member.name}
                  className="w-24 h-24 rounded-full object-cover mb-4"
                />
                <h3 className="text-xl font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{member.role}</p>
                {member.bio && (
                  <p className="text-gray-600 text-sm">{member.bio}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </ContentWidth>
    </div>
  );
};

export default TeamSection;
