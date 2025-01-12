import React from 'react';

const CompanyOverviewBanner: React.FC = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[400px] flex items-center"
            style={{ backgroundImage: `url('/Company_overview_banner.jpg')` }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>

            {/* Content */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 text-white">
                <div className="max-w-3xl">
                    <h1 className="text-4xl font-bold mb-4">Welcome to Our Company</h1>
                    <p className="text-lg max-w-[600px]">
                        At Easy Soft Bangladesh, we empower businesses with innovative software solutions tailored to their
                        needs.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default CompanyOverviewBanner;
