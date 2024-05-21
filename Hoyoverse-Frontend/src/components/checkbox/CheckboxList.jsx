import PropTypes from "prop-types";

const CheckboxList = ({ children }) => {
    return <div className="grid grid-cols-2 gap-2 mb-3">{children}</div>;
};

CheckboxList.propTypes = {
    children: PropTypes.node,
};

export default CheckboxList;
