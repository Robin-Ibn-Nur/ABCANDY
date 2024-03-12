
const Courses = () => {

    const data = [1, 2, 3]
    return (
        <div className="flex flex-wrap md:justify-around lg:justify-between gap-5 my-16">
            {data.map((card, index) => (
                <div key={card.id || index} className="max-w-[41
                0px] space-y-4 rounded-lg shadow-lg md:w-[410px] bg-[#F5F4FB]">
                    <img alt="card navigate ui" className="w-full h-[275px] object-cover  rounded-lg " src="https://source.unsplash.com/200x200/?bed" />
                    <div className="flex gap-2 p-3">
                        <h5 className="text-md font-bold">DESIGN & CREATIVE</h5> <span>10 June 2023</span>
                    </div>
                    <div className="grid gap-2 p-3">
                        <h1 className="text-2xl font-semibold ">Lorem ipsum dolor sit amet consectetur</h1>
                        <p className="text-sm text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur. Et bibendum nunc in amet auctor enim massa. Leo purus amet sem libero quisque.</p>
                        <div className="text-sm text-gray-500 font-semibold  ">by Jon Doe</div>
                    </div>
                </div>
            ))}
        </div>

    );
};

export default Courses;