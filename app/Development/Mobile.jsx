import Image from 'next/image';
import React from 'react';

const Mobile = () => {
    return (
        <div className="space-y-4 p-5 lg:p-0 w-[100%] lg:w-[70%]">
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
                <button type="button" className="relative inline-block text-[#2C2347] font-bold h-14 w-40 overflow-hidden border-[#2C2347] px-5 py-2 shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-[#2C2347] before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-[#2C2347] after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0">Read More</button>
            </div>
        </div>
    );
};

export default Mobile;