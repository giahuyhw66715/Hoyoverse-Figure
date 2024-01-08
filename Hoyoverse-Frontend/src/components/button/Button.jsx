import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const Button = ({ url, children, className = "" }) => {
    if (url) {
        return <NavLink to={url}>{children}</NavLink>;
    }
    return (
        <button
            className={`font-semibold p-5 text-white rounded-xl capitalize ${className}`}
        >
            {children}
        </button>
    );
};

Button.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    url: PropTypes.string,
};

export default Button;
