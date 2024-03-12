import React from 'react';
import { Modal } from '../component/Modal';
const Team = () => {
    return (
        <div className='my-10 mx-auto p-5 w-[95%] md:w-auto lg:w-full lg:p-0 h-auto lg:h-96 bg-cover bg-center grid place-items-center' style={{ backgroundImage: 'url(/bg.png)' }}>
            <div className=' backdrop-blur-md bg-white/30 rounded p-10  text-center space-y-5 text-white h-76 lg:h-72 w-full lg:w-[80%]'>
                <h1 className='text-xl lg:text-5xl'>Creative team, intuitive solution</h1>
                <p>Experience unparalleled creativity and intuitive problem-solving with our dynamic team. We redefine possibilities with bespoke solutions crafted for your unique needs.</p>
                <Modal children={"Let's Talk"} />
            </div>
        </div>
    );
};

export default Team;