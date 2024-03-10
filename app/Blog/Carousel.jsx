"use client"
import Dots from "./Dots";
import useCarousel from "../component/useCarousel";
const Carousel = () => {
    const { currentSlider, setCurrentSlider, sliderImages } = useCarousel();
    return (
        <div className="h-72 w-full rounded-md relative overflow-hidden">
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