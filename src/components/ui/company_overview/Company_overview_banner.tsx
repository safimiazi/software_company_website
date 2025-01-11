import ContentWidth from '@/components/shared/ContentWidth';
import React from 'react';

const Company_overview_banner: React.FC = () => {
    return (
        <div
            className="relative bg-cover bg-center h-[400px] flex items-center"
            style={{ backgroundImage: `url('/Company_overview_banner.jpg')` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <div className="relative z-10 max-w-3xl ml-10 text-white">
                <ContentWidth>
                <h1 className="text-4xl font-bold mb-4">Welcome to Our Company</h1>
                <p className="text-lg max-w-[600px]">
                    At Easy Soft Bangladesh, we empower businesses with innovative software solutions tailored to their
                    needs.
                </p>
                </ContentWidth>
            </div>
        </div>
    );
};

export default Company_overview_banner;
