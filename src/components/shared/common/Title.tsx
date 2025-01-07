import React from "react";
interface ITitle {
  title: string;
  description: string;
}

const Title = ({ title, description }: ITitle) => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center ">
        <h5 className="relative  flex items-center justify-center text-subtitle text-brand-color mb-2">
          <span className="before:content-[''] before:block before:w-16 before:h-px bg-brand-color mx-4"></span>
          {title}
          <span className="after:content-[''] after:block after:bg-brand-color after:w-16 after:h-px mx-4"></span>
        </h5>
        <h3 className=" max-w-[600px] mt-0 text-center">{description}</h3>
      </div>
    </div>
  );
};

export default Title;
