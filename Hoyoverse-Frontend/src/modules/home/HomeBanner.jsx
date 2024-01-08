import { useEffect } from "react";
import { useState } from "react";
import Button from "../../components/button/Button";

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
                    <h1 className="text-6xl font-bold">
                        {slides[currentIndex].title}
                    </h1>
                    <p className="my-8 text-xl font-medium w-full max-w-[800px]">
                        {slides[currentIndex].description}
                    </p>
                    <Button className="px-8 py-4 transition-all border !rounded-full border-secondary hover:text-secondary hover:bg-transparent hover:border-secondary w-fit bg-secondary text-xl">
                        Discover Now
                    </Button>
                </div>
            </div>
            {/* <div className="absolute top-0 z-10 items-center justify-between hidden w-full h-full px-10 transition-all group-hover:flex">
                <button
                    className="flex items-center justify-center p-3 bg-white rounded-full shadow-sm"
                    onClick={prevSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                    </svg>
                </button>
                <button
                    className="flex items-center justify-center p-3 bg-white rounded-full shadow-sm"
                    onClick={nextSlide}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                    </svg>
                </button>
            </div> */}
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
