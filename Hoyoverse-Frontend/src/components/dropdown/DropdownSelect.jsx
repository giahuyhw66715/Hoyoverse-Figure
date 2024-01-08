import PropTypes from "prop-types";
import { useContext } from "react";
import { DropdownContext } from "../../context/DropdownContext";

const DropdownSelect = ({ border, title, type = "text", dark = false }) => {
    const { handleToggleShowDropdown } = useContext(DropdownContext);
    if (type === "text") {
        return (
            <span
                type="button"
                className={`inline-flex justify-center text-sm font-medium w-full ${
                    dark ? "text-gray-700" : "text-white"
                } hover:text-primary rounded-md ${
                    border ? "border border-gray-300" : ""
                }`}
                onClick={handleToggleShowDropdown}
            >
                {title}
                <svg
                    className="w-5 h-5 ml-2 -mr-1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M10.293 13.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                        clipRule="evenodd"
                    />
                </svg>
            </span>
        );
    }
    return (
        <button
            type="button"
            className={`inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-gray-700 rounded-md ${
                border ? "border border-gray-300" : ""
            }`}
            onClick={handleToggleShowDropdown}
        >
            {title}
            <svg
                className="w-5 h-5 ml-2 -mr-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
            >
                <path
                    fillRule="evenodd"
                    d="M10.293 13.707a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L10 11.586l3.293-3.293a1 1 0 011.414 1.414l-4 4z"
                    clipRule="evenodd"
                />
            </svg>
        </button>
    );
};

DropdownSelect.propTypes = {
    border: PropTypes.bool,
    dark: PropTypes.bool,
    title: PropTypes.string,
    type: PropTypes.string,
};

export default DropdownSelect;
