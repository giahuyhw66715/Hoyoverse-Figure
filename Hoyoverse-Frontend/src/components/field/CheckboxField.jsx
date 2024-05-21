import PropTypes from "prop-types";
const CheckboxField = ({ children }) => {
    return <div className="flex items-center gap-x-2">{children}</div>;
};

CheckboxField.propTypes = {
    children: PropTypes.node,
};

export default CheckboxField;
