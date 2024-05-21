import { useEffect } from "react";
import Heading from "../components/heading/Heading";

const AboutPage = () => {
    useEffect(() => {
        document.title = "About - HoYoverse";
    }, []);
    return (
        <div className="container">
            <Heading>About Hoyoverse</Heading>
            <p className="whitespace-pre-wrap text-xl font-normal text-[#333] tracking-wide leading-relaxed">
                At HoYoverse, we are committed to creating immersive virtual
                world experiences for players around the world. In addition to
                game products such as Genshin Impact, Honkai Impact 3rd, Tears
                of Themis, and Honkai: Star Rail, HoYoverse also launched the
                dynamic desktop software N0va Desktop, the community product
                HoYoLAB, and created a variety of products such as animations,
                comics, music, novels, and merchandise around our original
                creative concept. Adhering to our mission of Tech Otakus Save
                the World, we have always been committed to technology research
                and development, exploring cutting-edge technologies, and have
                accumulated leading technical capabilities in cartoon rendering,
                artificial intelligence, cloud gaming technology, and other
                fields. HoYoverse is actively engaged in globalization, with
                offices in Singapore, Montreal, Los Angeles, Tokyo, Seoul, and
                other areas.
            </p>
            <div className="flex items-center justify-between mt-20 px-10">
                <div className="flex flex-col items-center gap-y-6">
                    <img
                        src="/honkai-impact-3rd-logo.jpg"
                        alt=""
                        className="w-[90px] h-[90px] object-cover rounded-lg"
                    />
                    <span className="font-[#666]">Honkai Impact 3rd</span>
                </div>
                <div className="flex flex-col items-center gap-y-6">
                    <img
                        src="/genshin-impact-logo.jpg"
                        alt=""
                        className="w-[90px] h-[90px] object-cover rounded-lg"
                    />
                    <span className="font-[#666]">Genshin Impact</span>
                </div>
                <div className="flex flex-col items-center gap-y-6">
                    <img
                        src="/tears-of-themis-logo.jpg"
                        alt=""
                        className="w-[90px] h-[90px] object-cover rounded-lg"
                    />
                    <span className="font-[#666]">Tears of Themis</span>
                </div>
                <div className="flex flex-col items-center gap-y-6">
                    <img
                        src="/honkai-star-rail-logo.jpg"
                        alt=""
                        className="w-[90px] h-[90px] object-cover rounded-lg"
                    />
                    <span className="font-[#666]">Honkai Star Rail</span>
                </div>
            </div>
            <div className="flex items-center justify-between max-w-[1200px] w-full mx-auto mt-20">
                <div className="flex flex-col items-center gap-y-6">
                    <img
                        src="/hoyolab-logo.jpg"
                        alt=""
                        className="w-[90px] h-[90px] object-cover rounded-lg"
                    />
                    <span className="font-[#666]">Hoyolab</span>
                </div>
                <div className="flex flex-col items-center gap-y-6">
                    <img
                        src="/hoyomix-logo.jpg"
                        alt=""
                        className="w-60 h-[90px] object-contain rounded-lg"
                    />
                    <span className="font-[#666]">HOYO-MiX</span>
                </div>
                <div className="flex flex-col items-center gap-y-6">
                    <img
                        src="/nova-desktop-logo.jpg"
                        alt=""
                        className="w-[90px] h-[90px] object-cover rounded-lg"
                    />
                    <span className="font-[#666]">N0va Desktop</span>
                </div>
            </div>
        </div>
    );
};

export default AboutPage;
