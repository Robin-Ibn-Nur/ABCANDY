import Image from 'next/image';
import React from 'react';

const Ai = () => {
    return (
        <div className='w-[30%]'>
            <Image className='h-auto w-full' src="/ai.png" sizes='100vw' width={500} height={500} />
        </div>
    );
};

export default Ai;