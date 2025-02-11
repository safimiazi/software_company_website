import ContentWidth from "@/components/shared/ContentWidth";
import { RightArrows } from "@/Icons";
import React from "react";
import web_development from "../../../../public/web_development.jpg";
import app_development from "../../../../public/app_development.webp";
import Image from "next/image";

const Projects = () => {
  const projectData = Array(10).fill({ title: "safi" });
  return (
    <div className="py-20">
      <ContentWidth>
        {/* header */}
        <div className="flex flex-col gap-10">
          <div className="flex flex-col justify-center items-center ">
            <h5 className="relative flex items-center justify-center text-subtitle text-brand-color mb-5">
              <span className="before:content-[''] before:block before:w-16 before:h-px bg-brand-color mx-4"></span>
              Top Projects
              <span className="after:content-[''] after:block after:bg-brand-color after:w-16 after:h-px mx-4"></span>
            </h5>
            <h3 className="text-title max-w-[600px] text-center">
              Empowering businesses through innovative solutions, collaboration,
              and exceptional results.
            </h3>
          </div>
          <div className="flex flex-col gap-10">
            <div
              className="overflow-hidden  "
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
              }}
            >
              <div className="inline-flex flex-nowrap gap-10      relative animate-scroll">
                {projectData.map((project, index) => (
                  <div
                    key={index}
                    className="h-60 w-60 rounded-md border  project-container"
                  >
                    <Image
                      src={app_development}
                      alt=""
                      className="h-full w-full object-cover"
                      width={1000}
                      height={1000}
                    />{" "}
                    <div className=" hover-effect-div"></div>
                    <button className="flex project-details-button items-center justify-between  rounded-full p-3 gap-2 text-white transition duration-300 ease-in-out hover:bg-brand-color-dark">
                      View
                      <span className="p-1  rounded-full text-white">
                        <RightArrows />
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
            <div
              className="overflow-hidden "
              style={{
                maskImage:
                  "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
                WebkitMaskImage:
                  "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
              }}
            >
              <div className="inline-flex flex-nowrap gap-10      relative animate-scroll2">
                {projectData.map((project, index) => (
                  <div
                    key={index}
                    className="h-60 w-60 rounded-md border project-container"
                  >
                    <Image
                      src={web_development}
                      alt=""
                      className="h-full w-full object-cover"
                      width={1000}
                      height={1000}
                    />
                    <div className=" hover-effect-div"></div>
                    <button className="flex project-details-button items-center justify-between  rounded-full p-3 gap-2 text-white transition duration-300 ease-in-out hover:bg-brand-color-dark">
                      View
                      <span className="p-1  rounded-full text-white">
                        <RightArrows />
                      </span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </ContentWidth>
    </div>
  );
};

export default Projects;
