import { PlusIcon } from "@/Icons";
import Link from "next/link";
import React from "react";

interface BannerProps {
  backgroundImage: string;
  title: string;
  description: string;
  cta?: string;
  cta_link?: any;
}

const PageBanner: React.FC<BannerProps> = ({
  backgroundImage,
  title,
  description,
  cta,
  cta_link,
}) => {
  return (
    <div
      className="relative bg-cover bg-center h-[400px] flex items-center"
      style={{ backgroundImage: `url('${backgroundImage}')` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-lg max-w-[600px] mb-4">{description}</p>
          {cta && cta_link && (
            <Link href={`${cta_link}`}>
              <button className="flex items-center justify-between bg-brand-color rounded-full p-3 gap-2 text-white">
                {cta}
                <span className="p-1 bg-white rounded-full text-brand-color">
                  <PlusIcon />
                </span>
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
