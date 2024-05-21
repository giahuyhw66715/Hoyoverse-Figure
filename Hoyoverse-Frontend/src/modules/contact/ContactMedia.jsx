import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";

const ContactMedia = ({ url, imgUrl, mediaName }) => {
    return (
        <NavLink to={url} className="flex items-center flex-col gap-y-2">
            <img src={imgUrl} alt="" className="w-10 h-10 object-cover" />
            <span>{mediaName}</span>
        </NavLink>
    );
};

ContactMedia.propTypes = {
    imgUrl: PropTypes.string,
    mediaName: PropTypes.string,
    url: PropTypes.string,
};

export default ContactMedia;
