import React from 'react';

const ContentWidth = ({children} : any) => {
    return (
        <div className='max-w-7xl mx-auto px-4'>
            {children}
        </div>
    );
};

export default ContentWidth;