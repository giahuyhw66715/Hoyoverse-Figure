import PropTypes from "prop-types";
import { useContext } from "react";
import { DropdownContext } from "../../context/DropdownContext";

const DropdownList = ({ children }) => {
    const { show } = useContext(DropdownContext);

    return (
        show && (
            <div className="absolute w-full mt-2 overflow-y-auto origin-top-right bg-white rounded-md shadow-lg left-2/4 -translate-x-2/4 ring-1 ring-black ring-opacity-5 min-w-48 max-h-56">
                <div
                    className="py-1"
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    {children}
                </div>
            </div>
        )
    );
};

DropdownList.propTypes = {
    children: PropTypes.node,
};

export default DropdownList;
