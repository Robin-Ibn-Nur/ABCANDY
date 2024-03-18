import LeftCard from './LeftCard';
import RightCard from './RightCard';

const Blog = () => {
    return (
        <div className='mt-10'>
            <div className='flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-5 w-full'>
                <div className='flex items-center justify-center lg:justify-between gap-10 '>
                    <h1 className='text-[#2C2347] text-xl font-bold '>Blog</h1>
                    <div className='flex items-center justify-center gap-5'>
                        <span className='rounded-full p-2 w-fit bg-gray-200 text-[#2c2347]'>Sports</span>
                        <span className='rounded-full p-2 w-fit bg-gray-200 text-[#2c2347]'>Sports Car</span>
                        <span className='rounded-full p-2 w-fit bg-gray-200 text-[#2c2347]'>Bike</span>
                    </div>
                </div>
                <div className="flex items-center">
                    <span className='absolute '></span><input className="w-full rounded-lg bg-gray-100 px-4 py-2 text-[#1B8EF8] " type="text" placeholder='Search' />
                </div>

            </div>
            <div className='mt-5  flex flex-col lg:flex-row justify-between gap-5 w-[100%]'>
                <LeftCard />
                <RightCard />
            </div>
        </div>
    );
};

export default Blog;