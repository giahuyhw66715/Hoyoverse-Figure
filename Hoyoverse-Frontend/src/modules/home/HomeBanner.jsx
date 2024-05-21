import { useEffect } from "react";
import { useState } from "react";
import Heading from "../../components/heading/Heading";

const slides = [
    {
        title: "Genshin Impact",
        image: "bg-home-genshin",
        description: "Step Into a Vast Magical World of Adventure",
    },
    {
        title: "Honkai Star Rail",
        image: "bg-home-hsr",
        description: 'Welcome to Version 2.0 "If One Dreams At Midnight"!',
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
        <div className="w-full h-[1000px] relative group -mt-24">
            <div
                className={`w-full h-full duration-500 bg-center bg-no-repeat bg-cover ${slides[currentIndex].image}`}
            >
                <div className="flex flex-col justify-center px-16 overlay">
                    <Heading className="mb-0 text-4xl text-left text-white">
                        {slides[currentIndex].title}
                    </Heading>
                    <p className="mt-8 mb-12 text-6xl font-medium w-full max-w-[800px] leading-normal">
                        {slides[currentIndex].description}
                    </p>
                    {/* <Button
                        color="secondary"
                        className="px-8 py-6 text-xl rounded-full w-fit"
                        url={slides[currentIndex].to}
                    >
                        Discover Now
                    </Button> */}
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
