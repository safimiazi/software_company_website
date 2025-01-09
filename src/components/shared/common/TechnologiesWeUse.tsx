import React from "react";

interface Technology {
  id: number;
  name: string;
  icon?: React.ReactNode; 
}

interface TechnologiesWeUseProps {
  title: string;
  description: string;
  technologies: Technology[];
}

const TechnologiesWeUse: React.FC<TechnologiesWeUseProps> = ({
  title,
  description,
  technologies,
}) => {
  return (
    <div className="py-16">
      <div className="max-w-7xl mx-auto px-6 space-y-6">
        <div className="text-center space-y-3">
          <h2 className="text-3xl font-bold">{title}</h2>
          <p className="text-gray-600">{description}</p>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {technologies.map((tech) => (
            <div
              key={tech.id}
              className="p-4 rounded-lg border border-gray-200 shadow-sm text-center hover:shadow-lg transition-all duration-300"
            >
              {tech.icon && (
                <div className="mb-3 text-brand-color text-3xl">{tech.icon}</div>
              )}
              <h4 className="text-lg font-medium">{tech.name}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechnologiesWeUse;
