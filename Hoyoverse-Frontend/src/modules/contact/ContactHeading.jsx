import PropTypes from "prop-types";

const ContactHeading = ({ children }) => {
    return <h5 className="text-3xl font-semibold mb-2">{children}</h5>;
};

ContactHeading.propTypes = {
    children: PropTypes.any,
};

export default ContactHeading;
