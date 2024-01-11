import PropTypes from "prop-types";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { DropdownContext } from "../../context/DropdownContext";

const DropdownOption = ({
    url = "#",
    name,
    option,
    setValue,
    children,
    ...props
}) => {
    const { handleCloseDropdown } = useContext(DropdownContext);
    const handleSelectOptionValue = () => {
        setValue(name, option);
        handleCloseDropdown();
    };

    return (
        <NavLink
            to={url}
            className="block px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100 hover:text-gray-900"
            onClick={() => handleSelectOptionValue(children)}
            {...props}
        >
            {children}
        </NavLink>
    );
};

DropdownOption.propTypes = {
    children: PropTypes.node,
    name: PropTypes.any,
    onClick: PropTypes.func,
    option: PropTypes.shape({
        name: PropTypes.string,
    }),
    setValue: PropTypes.func,
    url: PropTypes.string,
};

export default DropdownOption;
