import PropTypes from "prop-types";

const ContactDescription = ({ children }) => {
    return <p className="text-lg">{children}</p>;
};

ContactDescription.propTypes = {
    children: PropTypes.node,
};

export default ContactDescription;
