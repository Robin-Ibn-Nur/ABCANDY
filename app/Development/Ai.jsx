import React from 'react';
import { Modal } from '../component/Modal';

const Ai = () => {
    return (
        <div className='p-5 lg:p-0 w-[100%] lg:w-[30%] bg-cover bg-center h-[650px] relative ' style={{ backgroundImage: 'url(/ai.png)', padding: "10px", minHeight: "100%" }}>
            <div className='absolute bottom-5  flex flex-col bg-white lg:ml-4 lg:mr-4 sm:p-[2%] lg:p-[5%]'>
                <h1 className='text-[#2C2347] text-xl font-bold mb-2'>Do you need any creative service for your business?</h1>
                <Modal children={"Let's Talk"} />
            </div>
        </div>
    );
};

export default Ai;