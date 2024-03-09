"use client"
import React, { useEffect, useRef, useState } from 'react';
import Menu from './Menu';
import MobileNav from './MobileNav';

const menu = [
    <>
        <li className="group flex  cursor-pointer flex-col">
            Comunity<span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <li className="group flex  cursor-pointer flex-col">
            Blog<span className="mt-[2px] h-[3px]  w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
        <button className="border-2 text-xl bg-[#e1dddd] text-[#5742AC] w-32 h-10 border-[#5742AC] hover:before:bg-[#5742AC] before:w-full before:h-0 hover:before:h-full hover:before:-z-10 hover:before:absolute before:absolute relative before:top-0 hover:before:left-0 before:duration-500 hover:text-white transform origin-top before:block">Contact Us</button>

    </>
]

const Header = () => {
    const [dropDownState, setDropDownState] = useState(false);
    const dropDownMenuRef = useRef();

    useEffect(() => {
        const closeDropDown = (e) => {
            if (!dropDownMenuRef?.current?.contains(e?.target)) {
                setDropDownState(false);
            }
        };

        document.addEventListener('mousedown', closeDropDown);

        return () => {
            document.removeEventListener('mousedown', closeDropDown);
        };
    }, []);
    return (
        <nav className="flex items-center justify-between lg:justify-around bg-white px-4 py-2 text-black shadow-lg w-screen ">
            <ul className="hidden items-center justify-between gap-10 md:flex  text-body_text_color">
                <Menu />
            </ul>
            <div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-black transition-all duration-200 hover:scale-110 ">
                <h2 className='text-[#2C2347]'>ABCANDY</h2>
            </div>
            <ul className="hidden items-center justify-between gap-10 md:flex">

                {menu}
            </ul>
            <div ref={dropDownMenuRef} onClick={() => setDropDownState(!dropDownState)} className="relative flex transition-transform md:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="cursor-pointer" > <line x1="4" x2="20" y1="12" y2="12" /> <line x1="4" x2="20" y1="6" y2="6" /><line x1="4" x2="20" y1="18" y2="18" /> </svg>


                {dropDownState && (
                    <MobileNav />
                )}
            </div>
        </nav>
    );
};

export default Header;