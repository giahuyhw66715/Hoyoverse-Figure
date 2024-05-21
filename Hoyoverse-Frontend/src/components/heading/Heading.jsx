import PropTypes from "prop-types";
import { twMerge } from "tailwind-merge";

const Heading = ({ children, className = "" }) => {
    return (
        <h2
            className={twMerge(
                `text-4xl text-secondary capitalize mt-20 mb-9 font-bold ${className}`
            )}
        >
            {children}
        </h2>
    );
};

Heading.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};

export default Heading;
