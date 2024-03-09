"use client"
import LeftBtn from "./Button/LeftBtn";
import RightBtn from "./Button/RightBtn";
import Dots from "./Dots";
import useCarousel from "../component/useCarousel";
const Carousel = () => {
    const { currentSlider, setCurrentSlider, sliderImages, prevSlider, nextSlider } = useCarousel();
    return (
        <div className="h-72 w-full rounded-md relative overflow-hidden">
            {/* arrow left */}
            {/* <LeftBtn prevSlider={prevSlider} /> */}
            {/* arrow right */}
            {/* <RightBtn nextSlider={nextSlider} /> */}
            {/* dots */}
            <Dots sliderImages={sliderImages} currentSlider={currentSlider} setCurrentSlider={setCurrentSlider} />
            {/* Carousel container */}
            <div className="ease-linear duration-300 flex transform-gpu" style={{ transform: `translateX(-${currentSlider * 100}%)` }}>
                {/* sliders */}
                {sliderImages.map((slide, index) => (
                    <img key={index} src={slide} alt={`Slider - ${index + 1}`} className="min-w-full h-72 bg-black/20 sm:h-96 md:h-[670px] object-cover" />))}
            </div>
        </div>
    );
};

export default Carousel;