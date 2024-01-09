import { useEffect } from "react";
import { useState } from "react";
import Button from "../../components/button/Button";
import Heading from "../../components/common/Heading";

const slides = [
    {
        title: "Genshin Impact",
        image: "/genshin-impact-banner.jpeg",
        description: "Step Into a Vast Magical World of Adventure",
        to: "/figures/genshin-impact",
    },
    {
        title: "Honkai Star Rail",
        image: "/honkai-star-rail-banner.jpg",
        description: "Welcome to Astral Express",
        to: "/figures/honkai-star-rail",
    },
];

const HomeBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // useEffect(() => {
    //     const interval = setInterval(() => {
    //         const isLastSlide = currentIndex === slides.length - 1;
    //         const newIndex = isLastSlide ? 0 : currentIndex + 1;
    //         setCurrentIndex(newIndex);
    //     }, 5000);
    //     return () => clearInterval(interval);
    // }, [currentIndex]);

    return (
        <div className="w-full h-[1000px] relative group">
            <div
                style={{
                    backgroundImage: `url(${slides[currentIndex].image})`,
                }}
                className="w-full h-full duration-500 bg-center bg-no-repeat bg-cover"
            >
                <div className="flex flex-col justify-center px-16 overlay">
                    {/* <h1 className="text-6xl font-bold">
                        {slides[currentIndex].title}
                    </h1> */}
                    <Heading className="mb-0 text-6xl text-left text-white">
                        {slides[currentIndex].title}
                    </Heading>
                    <p className="my-8 text-xl font-medium w-full max-w-[800px]">
                        {slides[currentIndex].description}
                    </p>
                    <Button
                        className="px-8 py-4 text-xl rounded-full w-fit"
                        color="secondary"
                    >
                        Discover Now
                    </Button>
                </div>
            </div>
            <div
                className={`absolute bottom-0 z-10 flex justify-center w-full py-4 gap-x-1`}
            >
                {slides.length > 0 &&
                    slides.map((slide, index) => (
                        <span
                            key={index}
                            className={`text-xl cursor-pointer ${
                                index === currentIndex
                                    ? "text-white"
                                    : "text-gray-500"
                            }`}
                            onClick={() => setCurrentIndex(index)}
                        >
                            <svg
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                height="1em"
                                width="1em"
                            >
                                <path d="M12 18a6 6 0 100-12 6 6 0 000 12z" />
                            </svg>
                        </span>
                    ))}
            </div>
        </div>
    );
};

export default HomeBanner;
