import React from 'react';
import Carousel from './Carousel';

const LeftCard = () => {

    return (
        <div className="w-[100%] lg:w-[50%] shadow-md ">
            <div className="space-y-4">
                <div className="space-y-2 ">
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
                    <p className="dark:text-gray-400">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat, excepturi.</p>
                    <div className="flex items-center gap-2">
                        <span className='text-xs'>by</span><span>Jon Doe</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LeftCard;