import React from 'react';

interface BannerProps {
    backgroundImage: string;
    title: string;
    description: string;
}

const PageBanner: React.FC<BannerProps> = ({ backgroundImage, title, description }) => {
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
                    <p className="text-lg max-w-[600px]">{description}</p>
                </div>
            </div>
        </div>
    );
};

export default PageBanner;
