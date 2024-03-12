import React from 'react';
import WatchNow from '../component/WatchNow';

const RightCard = () => {
    return (
        <div className="w-[100%] lg:w-[50%] p-5 lg:p-0 shadow-md ">
            <div className="space-y-4">
                <div className="space-y-2 relative">
                    <img src="https://source.unsplash.com/random/480x360/?4" alt="" className="block object-cover object-center w-full rounded-md h-72 dark:bg-gray-500" />
                    <div className='absolute bottom-20 right-6 text-white flex items-center gap-5'>
                        <p>Watch Now</p>
                        {/* <img className=' w-6 h-6' src="/play.png" alt="" /> */}
                        <img className='outline outline-white rounded-lg bg-white w-5 h-5' src="/playButton.png" alt="" />
                    </div>
                    <div className="flex items-center gap-5 p-3">
                        <h5 className='text-[#2C2347]'>CORPORATE</h5>
                        <span className='text-xs'>10 June 2024</span>
                    </div>
                </div>
                <div className="space-y-2 p-3">
                    <h3 className="text-xl font-semibold text-[#2C2347]">Lorem ipsum dolor sit amet consectetur bibendum nunc in amet auctor enim massa</h3>
                    <WatchNow text={"Watch Now"} />
                </div>
            </div>
        </div>
    );
};

export default RightCard;