import PropTypes from "prop-types";

const Contact = ({ children }) => {
    return (
        <div className="grid grid-cols-2 gap-x-10 items-center mt-20">
            {children}
        </div>
    );
};

Contact.propTypes = {
    children: PropTypes.node,
};

export default Contact;
