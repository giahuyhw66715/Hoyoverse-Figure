import PropTypes from "prop-types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DropdownContext } from "../../context/DropdownContext";

const DropdownOption = ({ url = "#", children }) => {
    const { handleCloseDropdown } = useContext(DropdownContext);
    const handleSelectOptionValue = (option) => {
        console.log("🚀 ~ option:", option);
        handleCloseDropdown();
    };

    return (
        <NavLink
            to={url}
            className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
            onClick={() => handleSelectOptionValue(children)}
        >
            {children}
        </NavLink>
    );
};

DropdownOption.propTypes = {
    children: PropTypes.node,
    url: PropTypes.string,
};

export default DropdownOption;
