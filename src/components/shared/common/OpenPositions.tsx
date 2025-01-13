// components/OpenPositions.tsx
import React from "react";
import Title from "./Title";
import ContentWidth from "../ContentWidth";
import Link from "next/link";

interface Job {
  title: string;
  location: string;
  department: string;
  employmentType: string;
  description: string;
  applyLink: string;
}

interface OpenPositionsProps {
  jobs: Job[];
  sectionTitle: string;
  sectionDescription: string;
}

const OpenPositions: React.FC<OpenPositionsProps> = ({
  jobs,
  sectionTitle,
  sectionDescription,
}) => {
  return (
    <section className="py-20">
      <ContentWidth>
       <div className="space-y-10">
       <Title title={sectionTitle} description={sectionDescription} />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-white border p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-4">
                <span className="font-medium">Location:</span> {job.location} |{" "}
                <span className="font-medium">Department:</span>{" "}
                {job.department} |{" "}
                <span className="font-medium">Employment Type:</span>{" "}
                {job.employmentType}
              </p>
              <p className="text-gray-600 mb-4">{job.description}</p>
              <Link
                href={job.applyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-brand-color text-white px-4 py-2 rounded-md  transition duration-300"
              >
                Apply Now
              </Link>
            </div>
          ))}
        </div>
       </div>
      </ContentWidth>
    </section>
  );
};

export default OpenPositions;
