import PropTypes from "prop-types";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import EyeSlashIcon from "../icon/EyeSlashIcon";
import EyeIcon from "../icon/EyeIcon";
import { useController } from "react-hook-form";
const Input = ({
    labelIcon,
    toggle = false,
    type = "text",
    placeholder = "",
    className = "",
    name,
    control,
    errors,
    ...props
}) => {
    let inputPadding = "";
    if (labelIcon && toggle) {
        inputPadding += "py-5 pl-20 pr-16";
    } else if (labelIcon) {
        inputPadding += "p-5 pl-20";
    } else if (toggle) {
        inputPadding += "p-5 pr-16";
    } else {
        inputPadding += "p-5";
    }

    const [isShow, setIsShow] = useState(false);
    const handleToggle = () => {
        setIsShow(!isShow);
    };

    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });

    return (
        <div>
            <div className="relative">
                {labelIcon && (
                    <label
                        htmlFor="email"
                        className="absolute left-0 p-5 bg-slate-100 rounded-s-xl top-2/4 -translate-y-2/4"
                    >
                        {labelIcon}
                    </label>
                )}
                <input
                    placeholder={placeholder}
                    type={
                        type === "password"
                            ? isShow
                                ? "text"
                                : "password"
                            : type
                    }
                    className={twMerge(
                        `w-full ${inputPadding} border rounded-xl ${className}`
                    )}
                    id={name}
                    name={name}
                    {...props}
                    {...field}
                />

                {toggle && (
                    <span
                        className="absolute right-0 p-5 cursor-pointer select-none top-2/4 -translate-y-2/4"
                        onClick={handleToggle}
                    >
                        {!isShow ? <EyeIcon /> : <EyeSlashIcon />}
                    </span>
                )}
            </div>
            {errors && (
                <p className="mt-4 text-red-500">{errors[name]?.message}</p>
            )}
        </div>
    );
};

Input.propTypes = {
    className: PropTypes.string,
    control: PropTypes.any,
    errors: PropTypes.any,
    labelIcon: PropTypes.any,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    toggle: PropTypes.bool,
    type: PropTypes.string,
};

export default Input;
