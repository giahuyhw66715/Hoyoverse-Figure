import PropTypes from "prop-types";

const FormLayout = ({ children }) => {
    return <div className="grid grid-cols-3 gap-10 mt-5">{children}</div>;
};

FormLayout.propTypes = {
    children: PropTypes.node,
};

export default FormLayout;
