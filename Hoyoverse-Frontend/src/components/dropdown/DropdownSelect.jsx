import PropTypes from "prop-types";
import { useContext, useRef } from "react";
import { DropdownContext } from "../../context/DropdownContext";
import { twMerge } from "tailwind-merge";

const DropdownSelect = ({
    border = false,
    name,
    defaultValue,
    icon = true,
    dark = false,
    className = "",
    watch,
}) => {
    const { handleToggleShowDropdown } = useContext(DropdownContext);
    const titleRef = useRef(null);
    const getDropdownLabel = (name, defaultValue) => {
        const value = watch(name);
        if (value) return `${value?.id} - ${value?.name || value?.title}`;
        return defaultValue;
    };
    return (
        <span
            ref={titleRef}
            type="button"
            className={twMerge(
                `flex justify-center font-medium w-full rounded-lg cursor-pointer ${
                    dark ? "text-gray-700" : "text-white"
                }  ${
                    border ? "border border-gray-300 px-4 py-3" : ""
                } ${className}`
            )}
            onClick={handleToggleShowDropdown}
        >
            {/* <span>{title}</span> */}
            <span>{getDropdownLabel(name, defaultValue)}</span>
            {/* <span>Select</span> */}
            {icon && (
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
            )}
        </span>
    );
};

DropdownSelect.propTypes = {
    border: PropTypes.bool,
    className: PropTypes.string,
    dark: PropTypes.bool,
    defaultValue: PropTypes.string,
    icon: PropTypes.bool,
    name: PropTypes.string,
    title: PropTypes.string,
    watch: PropTypes.func,
};

export default DropdownSelect;
