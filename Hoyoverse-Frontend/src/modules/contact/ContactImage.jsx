import PropTypes from "prop-types";
const ContactImage = ({ url }) => {
    return (
        <div className="w-full h-full">
            <img
                src={url}
                alt=""
                className="w-full h-full object-cover rounded-md"
            />
        </div>
    );
};

ContactImage.propTypes = {
    url: PropTypes.string,
};

export default ContactImage;
