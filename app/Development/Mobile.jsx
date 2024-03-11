import Image from 'next/image';
import React from 'react';

const Mobile = () => {
    return (
        <div className="space-y-4 w-[70%]">
            <div className="space-y-2 ">
                <Image className='h-auto w-full' src="/mobile.png" sizes='100vw' width={500} height={500} />

                <div className="flex items-center gap-5  p-5">
                    <h5 className='text-[#2C2347]'>DEVOLEPMENT</h5>
                    <span className='text-xs'>10 June 2024</span>
                </div>
            </div>
            <div className="space-y-2  p-5">
                <a rel="noopener noreferrer" href="#" className="block">
                    <h3 className="text-xl font-semibold text-[#2C2347]">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                </a>
                <p className="dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                <div className="flex items-center gap-2">
                    <span className='text-xs'>by</span><span>Jon Doe</span>
                </div>
            </div>
        </div>
    );
};

export default Mobile;