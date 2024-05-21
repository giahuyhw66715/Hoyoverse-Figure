import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Label = ({ htmlFor, className = "", children }) => {
    return (
        <label
            htmlFor={htmlFor}
            className={twMerge(
                `font-semibold select-none w-full cursor-pointer ${className}`
            )}
        >
            {children}
        </label>
    );
};

Label.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    htmlFor: PropTypes.string,
};

export default Label;
