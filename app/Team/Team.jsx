import React from 'react';
const Team = () => {
    return (
        <div className='my-10 mx-auto p-5 w-[95%] md:w-auto lg:w-full lg:p-0 h-auto lg:h-96 bg-cover bg-center grid place-items-center' style={{ backgroundImage: 'url(/bg.png)' }}>
            <div className=' backdrop-blur-md bg-white/30 rounded p-10  text-center space-y-5 text-white h-76 lg:h-72 w-full lg:w-[80%]'>
                <h1 className='text-xl lg:text-5xl'>Creative team, intuitive solution</h1>
                <p>Experience unparalleled creativity and intuitive problem-solving with our dynamic team. We redefine possibilities with bespoke solutions crafted for your unique needs.</p>
                <button type="button" className="relative inline-block text-[#2C2347] font-bold h-14 w-40 overflow-hidden border-[#2C2347] px-5 py-2 shadow-lg before:absolute before:inset-0 before:-z-10 before:block before:translate-x-[90%] before:rounded-s-full before:bg-[#2C2347] before:duration-200 after:absolute after:inset-0 after:-z-10 after:block after:-translate-x-[90%] after:rounded-e-full after:bg-[#2C2347] after:duration-500 hover:text-white before:hover:translate-x-0 after:hover:translate-x-0">Let's Talk</button>
            </div>
        </div>
    );
};

export default Team;