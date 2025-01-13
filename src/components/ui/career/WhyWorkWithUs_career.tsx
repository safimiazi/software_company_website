import WhyWorkWithUs from '@/components/shared/common/WhyWorkWithUs';
import React from 'react';

const WhyWorkWithUs_career = () => {
    const benefits = [
        {
          icon: "https://cdn-icons-png.flaticon.com/512/847/847969.png", // Use any URL or icon library
          title: "Flexible Work Hours",
          description: "Enjoy the flexibility to work when you're most productive.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/2921/2921222.png",
          title: "Learning Opportunities",
          description:
            "We provide resources and training to help you grow your skills.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
          title: "Collaborative Team",
          description:
            "Work with a supportive and talented team dedicated to innovation.",
        },
        {
            icon: "https://cdn-icons-png.flaticon.com/512/3135/3135715.png",
            title: "Recognition and Rewards",
          description: "Your hard work is recognized and rewarded.",
        },
        {
          icon: "https://cdn-icons-png.flaticon.com/512/4359/4359908.png",
          title: "Health Benefits",
          description:
            "Comprehensive health insurance for you and your loved ones.",
        },
      ];
    return (
        <div>
            <WhyWorkWithUs benefits={benefits}/>
        </div>
    );
};

export default WhyWorkWithUs_career;