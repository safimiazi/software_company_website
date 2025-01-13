import Career_banner from '@/components/ui/career/Career_banner';
import OpenPositions_career from '@/components/ui/career/OpenPositions_career';
import WhyWorkWithUs_career from '@/components/ui/career/WhyWorkWithUs_career';
import React from 'react';

const Careers = () => {
    return (
        <div>
            <Career_banner/>
            <WhyWorkWithUs_career />
            <OpenPositions_career/>

        </div>
    );
};

export default Careers;