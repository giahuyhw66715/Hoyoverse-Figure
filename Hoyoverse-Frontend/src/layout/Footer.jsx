import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className="flex flex-col items-center justify-center gap-5 p-10 mt-20 text-white bg-dark">
            <div className="flex items-center gap-x-3">
                <NavLink className="text-sm capitalize transition-all hover:underline">
                    Home
                </NavLink>
                <NavLink className="text-sm capitalize transition-all hover:underline">
                    News
                </NavLink>
                <NavLink className="text-sm capitalize transition-all hover:underline">
                    About us
                </NavLink>
                <NavLink className="text-sm capitalize transition-all hover:underline">
                    Contact
                </NavLink>
            </div>
            <div className="w-[320px] h-14 mb-2 flex-shrink-0">
                <img
                    src="/hoyoverse-logo.png"
                    alt="Logo"
                    className="object-cover w-full h-full"
                />
            </div>
            <p className="text-xs">
                Copyright © COGNOSPHERE. All Rights Reserved.
            </p>
        </div>
    );
};

export default Footer;
