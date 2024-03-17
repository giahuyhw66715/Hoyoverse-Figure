import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { twMerge } from "tailwind-merge";

const Button = ({
    url,
    children,
    className = "",
    type = "button",
    color = "primary",
    onClick = () => {},
}) => {
    const buttonClassName = twMerge(
        `font-semibold p-5 border text-white rounded-xl capitalize hover:bg-transparent ${
            color === "primary"
                ? " bg-primary border-primary hover:text-primary"
                : color === "secondary"
                ? " bg-secondary border-secondary hover:text-secondary"
                : color === "violet"
                ? " hover:border-violet-500 hover:text-violet-500 bg-violet-500"
                : "bg-black border-black hover:text-black"
        }  transition-all ${className}`
    );

    if (url) {
        return (
            <NavLink to={url} className={buttonClassName}>
                {children}
            </NavLink>
        );
    }
    return (
        <button type={type} className={buttonClassName} onClick={onClick}>
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: PropTypes.oneOf(["primary", "secondary", "violet", "black"]),
    onClick: PropTypes.func,
    type: PropTypes.string,
    url: PropTypes.string,
};

export default Button;
