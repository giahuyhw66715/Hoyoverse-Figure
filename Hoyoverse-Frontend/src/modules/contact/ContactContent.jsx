import PropTypes from "prop-types";

const ContactContent = ({ children }) => {
    return <div className="flex flex-col gap-y-3">{children}</div>;
};

ContactContent.propTypes = {
    children: PropTypes.node,
};

export default ContactContent;
