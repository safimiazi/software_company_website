import React from "react";
import ContentWidth from "../ContentWidth";

interface TeamMember {
  name: string;
  role: string;
  imageUrl: string;
  bio?: string;
}

interface TeamCategory {
  category: string;
  members: TeamMember[];
}

interface TeamSectionProps {
  data: TeamCategory[];
}

const Team: React.FC<TeamSectionProps> = ({ data }) => {
  return (
    <div className="py-20">
      <ContentWidth>
        {/* Loop through categories */}
        {data.map((category, index) => (
          <div key={index} className="mb-12">
            {/* Category Title */}
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
              {category.category}
            </h2>

            {/* Team Members */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {category.members.map((member, idx) => (
                <div
                  key={idx}
                  className=" hover:shadow-md  transition-all duration-500 hover:shadow-brand-color  hover:border-b-8 border border-brand-color rounded-md p-6 flex flex-col items-center text-center "
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <h3 className="text-lg font-semibold text-gray-900">
                    {member.name}
                  </h3>
                  <p className="text-sm text-gray-500">{member.role}</p>
                  {member.bio && (
                    <p className="text-sm text-gray-600 mt-2">{member.bio}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </ContentWidth>
    </div>
  );
};

export default Team;
