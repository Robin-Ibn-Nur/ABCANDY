import React from 'react';
import Carousel from './Carousel';

const LeftCard = () => {

    return (
        <div className="w-[100%] lg:w-[50%] p-1 shadow-md ">
            <div className="space-y-4">
                <div className="space-y-2 ">

                    {/* <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" /> */}
                    <Carousel />
                    <div className="flex items-center gap-5 ">
                        <h5 className='text-[#2C2347]'>DESIGN & CREATIVE</h5>
                        <span className='text-xs'>10 June 2024</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <a rel="noopener noreferrer" href="#" className="block">
                        <h3 className="text-xl font-semibold text-[#2C2347]">Facere ipsa nulla corrupti praesentium pariatur architecto</h3>
                    </a>
                    <p className="leadi dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                    <div className="flex items-center gap-2">
                        <span className='text-xs'>by</span><span>Jon Doe</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftCard;