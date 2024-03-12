import React from 'react';

const Ai = () => {
    return (
        <div className='p-5 lg:p-0 w-[100%] lg:w-[30%] bg-cover bg-center h-[650px] grid place-items-end ' style={{ backgroundImage: 'url(/ai.png)', padding: "10px", minHeight: "100%" }}>
            <div className='flex flex-col bg-white mb-5 mx-5 p-10'>
                <h1 className='text-[#2C2347] text-xl font-bold'>Do you need any creative service for your business?</h1>
                <button className="text-xl w-32 rounded h-14 bg-[#5742AC] text-white relative overflow-hidden group z-10 hover:text-white duration-1000"><span className="absolute bg-[#5742AC] size-36 rounded-full group-hover:scale-100 scale-0 -z-10 -left-2 -top-10 group-hover:duration-500 duration-700 origin-center transform transition-all"></span><span className="absolute bg-[#5742AC] size-36 -left-2 -top-10 rounded-full group-hover:scale-100 scale-0 -z-10 group-hover:duration-700 duration-500 origin-center transform transition-all"></span>Let's Talk</button>
            </div>
        </div>
    );
};

export default Ai;