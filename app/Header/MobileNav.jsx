import React from 'react';

const MobileNav = () => {
    return (
        <ul className=" z-10  gap-2  bg-[#5742AC]  absolute right-0 top-11 flex w-[200px] flex-col  rounded-lg   text-base ">
            <li className="cursor-pointer  px-6 py-2 text-white rounded-t-lg hover:bg-sky-600 ">
                Home
            </li>
            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                Services
            </li>
            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                About
            </li>
            <li className="cursor-pointer  px-6 py-2 text-white hover:bg-sky-600 ">
                Contact
            </li>
        </ul>
    );
};

export default MobileNav;