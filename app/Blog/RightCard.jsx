import React from 'react';

const RightCard = () => {
    return (
        <div className="w-[100%] lg:w-[50%] p-5 lg:p-0 shadow-md ">
            <div className="space-y-4">
                <div className="space-y-2 ">
                    <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className="flex items-center gap-5 ">
                        <h5 className='text-[#2C2347]'>CORPORATE</h5>
                        <span className='text-xs'>10 June 2024</span>
                    </div>
                </div>
                <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-[#2C2347]">Lorem ipsum dolor sit amet consectetur bibendum nunc in amet auctor enim massa</h3>
                    <button className="border-2 text-xl bg-[#e1dddd] text-[#5742AC] w-32 h-10 border-[#5742AC] hover:before:bg-[#5742AC] before:w-full before:h-0 hover:before:h-full hover:before:-z-10 hover:before:absolute before:absolute relative before:top-0 hover:before:left-0 before:duration-500 hover:text-white transform origin-top before:block">Button</button>

                </div>
            </div>
        </div>
    );
};

export default RightCard;