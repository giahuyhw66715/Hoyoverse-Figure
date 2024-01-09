import PropTypes from "prop-types";

const Field = ({ children }) => {
    return <div className="flex flex-col gap-2">{children}</div>;
};

Field.propTypes = {
    children: PropTypes.node,
};

export default Field;
