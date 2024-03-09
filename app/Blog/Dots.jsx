import React from 'react';

const Dots = ({ sliderImages, currentSlider, setCurrentSlider }) => {
    return (
        <div className="flex justify-center items-center rounded-full z-50 absolute bottom-4 w-full gap-1">
            {sliderImages.map((_, inx) => (
                <button key={_} onClick={() => setCurrentSlider(inx)} className={`rounded-full duration-300 bg-white ${currentSlider === inx ? "w-8" : "w-2"} h-2`}></button>
            ))}
        </div>
    );
};

export default Dots;