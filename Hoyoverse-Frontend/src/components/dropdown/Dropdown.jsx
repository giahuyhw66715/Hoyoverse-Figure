import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { DropdownContext } from "../../context/DropdownContext";
import useClickOutside from "../../hooks/useClickOutside";

const Dropdown = ({ errors, name, children }) => {
    const [show, setShow] = useState(false);
    const handleToggleShowDropdown = () => setShow(!show);
    const handleCloseDropdown = () => setShow(false);
    const dropdownRef = useRef(null);
    useClickOutside(dropdownRef, handleCloseDropdown);

    return (
        <DropdownContext.Provider
            value={{
                show,
                setShow,
                handleToggleShowDropdown,
                handleCloseDropdown,
            }}
        >
            <div className="relative inline-block text-left" ref={dropdownRef}>
                {children}
                {errors[name] && (
                    <p className="pl-2 mt-2 text-red-500">
                        {errors[name].message}
                    </p>
                )}
            </div>
        </DropdownContext.Provider>
    );
};

Dropdown.propTypes = {
    children: PropTypes.node,
    errors: PropTypes.any,
    name: PropTypes.string,
};

export default Dropdown;
