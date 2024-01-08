import PropTypes from "prop-types";

const Heading = ({ children, className = "" }) => {
    return (
        <h2
            className={`text-4xl text-center text-secondary mt-20 mb-9 font-bold ${className}`}
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
