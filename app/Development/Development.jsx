import React from 'react';
import Mobile from './Mobile';
import Ai from './Ai';

const Development = () => {
    return (
        <div className='flex flex-col lg:flex-row gap-5 w-[100%] '>
            <Mobile />
            <Ai />
        </div>
    );
};

export default Development;