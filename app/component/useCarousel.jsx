"use client"
import { useEffect, useState } from "react";

const useCarousel = () => {
    const [currentSlider, setCurrentSlider] = useState(0);
    const sliderImages = ['https://source.unsplash.com/1200x670/?nature', 'https://source.unsplash.com/1200x670/?hill', 'https://source.unsplash.com/1200x670/?mountain', 'https://source.unsplash.com/1200x670/?river', 'https://source.unsplash.com/1200x670/?sea'];
    // const prevSlider = () => setCurrentSlider((currentSlider) => currentSlider === 0 ? sliderImages.length - 1 : currentSlider - 1);
    // const nextSlider = useCallback(() => setCurrentSlider((currentSlider) => currentSlider === sliderImages.length - 1 ? 0 : currentSlider + 1), [sliderImages.length]);

    // if you don't want to change the slider automatically then you can just remove the useEffect
    useEffect(() => {
        const intervalId = setInterval(() => {
            // nextSlider();
        }, 3000);
        return () => clearInterval(intervalId);
    }, []);
    return { currentSlider, setCurrentSlider, sliderImages }
};

export default useCarousel;