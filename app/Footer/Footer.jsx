
const Footer = () => {
    return (
        <div className='grid place-items-start bg-[#2C2347] w-[100%] h-[278px]'>
            <div className='pl-14 mt-10'>
                <h3 className='text-white text-lg mb-2'>Connect With Us</h3>
                <div className='flex gap-5 '>
                    <span className='w-[36px] h-[36px]'>
                        <img className='cursor-pointer bg-gray-300 p-1 outline outline-2 outline-offset-2 outline-white rounded-lg' src="/instagram.png" alt="" />
                    </span>
                    <span className='w-[36px] h-[36px]'>
                        <img className='cursor-pointer bg-gray-300 p-1 outline outline-2 outline-offset-2 outline-white rounded-lg' src="/twitter.png" alt="" />
                    </span>
                    <span className='w-[36px] h-[36px]'>
                        <img className='cursor-pointer bg-gray-300 p-1 outline outline-2 outline-offset-2 outline-white rounded-lg' src="/youtube.png" alt="" />
                    </span>
                    <span className='w-[36px] h-[36px]'>
                        <img className='cursor-pointer bg-gray-300 p-1 outline outline-2 outline-offset-2 outline-white rounded-lg' src="/facebook.png" alt="" />
                    </span>
                </div>
            </div>
            <div className='flex flex-wrap gap-2 justify-between px-14 text-white w-[100%]'>
                <h4>© 2023 ABCandy Bangladesh Ltd.</h4>
                <h4>Terms of Use & Privacy Policy</h4>
            </div>
        </div>
    );
};

export default Footer;