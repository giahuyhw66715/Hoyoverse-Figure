import { NavLink } from "react-router-dom";

const HeaderLogo = () => {
    return (
        <NavLink to="/" className="w-full max-w-[252px] h-11">
            <img
                src="https://www.hoyoverse.com/_nuxt/img/logo-light.3def3bc.png"
                alt="Logo"
            />
        </NavLink>
    );
};

export default HeaderLogo;
