import React from 'react';
import LeftCard from './LeftCard';
import RightCard from './RightCard';

const Blog = () => {
    return (
        <div className='p-5 lg:p-0 lg:mx-auto mt-5 flex flex-col lg:flex-row justify-between gap-5 w-full'>
            <LeftCard />
            <RightCard />
        </div>
    );
};

export default Blog;