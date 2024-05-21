import PropTypes from "prop-types";

const ContactInfo = ({ title, description }) => {
    return (
        <p>
            <span className="font-semibold">{title}: </span>
            <span>{description}</span>
        </p>
    );
};

ContactInfo.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
};

export default ContactInfo;
