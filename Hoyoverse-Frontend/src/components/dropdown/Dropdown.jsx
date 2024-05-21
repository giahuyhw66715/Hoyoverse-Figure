import PropTypes from "prop-types";
import {
    closeDropdown,
    toggleDropdown,
} from "../../redux/dropdown/dropdownSlice";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import useClickOutside from "../../hooks/useClickOutside";
import { twMerge } from "tailwind-merge";
import { NavLink } from "react-router-dom";

const Dropdown = ({
    name,
    title = "Dropdown",
    setTitle,
    className = "",
    options,
    setValue,
}) => {
    const dispatch = useDispatch();
    const dropdownRef = useRef(null);
    const isDropdownOpen = useSelector(
        (state) => state.dropdowns[name] || false
    );

    const handleSelectOption = (option) => {
        setTitle(option.name);
        setValue(name, option);
        dispatch(closeDropdown(name));
    };

    useClickOutside(dropdownRef, name);

    return (
        <div className="relative inline-block" ref={dropdownRef}>
            <button
                onClick={() => dispatch(toggleDropdown(name))}
                className={twMerge(
                    `bg-dark rounded inline-flex text-white items-center justify-between ${className}`
                )}
                type="button"
            >
                <span>{title}</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>
            {isDropdownOpen && (
                <div className="absolute w-full min-w-48 no-scrollbar max-h-[300px] overflow-y-scroll py-2 mt-2 text-black bg-white rounded-lg shadow-xl left-2/4 -translate-x-2/4">
                    {/* {Children.map(children, (child) =>
                        cloneElement(child, { name })
                    )} */}
                    {options?.length > 0 &&
                        options.map((option) => {
                            if (option.url) {
                                return (
                                    <NavLink
                                        to={option.url}
                                        key={option.id}
                                        onClick={() =>
                                            handleSelectOption(option)
                                        }
                                        className="block px-4 py-2 hover:bg-gray-200"
                                    >
                                        {option.name}
                                    </NavLink>
                                );
                            }
                            return (
                                <div
                                    key={option.id}
                                    onClick={() => handleSelectOption(option)}
                                    className="block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                                >
                                    {option.name}
                                </div>
                            );
                        })}
                </div>
            )}
        </div>
    );
};

Dropdown.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
    setTitle: PropTypes.func,
    setValue: PropTypes.func,
    title: PropTypes.string,
};

export default Dropdown;
