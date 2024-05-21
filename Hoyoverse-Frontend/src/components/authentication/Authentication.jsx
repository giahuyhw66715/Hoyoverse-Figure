import PropTypes from "prop-types";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Authentication = ({ children }) => {
    const { user } = useSelector((state) => state.auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (!user) {
            navigate("/sign-in");
        }
    }, [navigate, user]);

    return <div>{children}</div>;
};

Authentication.propTypes = {
    children: PropTypes.node,
};

export default Authentication;
