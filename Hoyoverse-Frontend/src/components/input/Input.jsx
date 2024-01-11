import PropTypes from "prop-types";
import { useController } from "react-hook-form";
import { twMerge } from "tailwind-merge";

const Input = ({
    control,
    errors = {},
    className = "",
    placeholder = "Search",
    icon,
    name = "",
    type = "text",
    ...props
}) => {
    const { field } = useController({
        control,
        name,
        defaultValue: "",
    });

    return (
        <div className="relative">
            <input
                type={type}
                className={twMerge(
                    `w-full text-black px-4 py-3 border border-gray-300 rounded-lg ${className}`
                )}
                placeholder={placeholder}
                name={name}
                id={name}
                onChange={(e) => {
                    console.log(e);
                }}
                {...props}
                {...field}
            />
            {errors[name] && (
                <p className="pl-2 mt-2 text-red-500">{errors[name].message}</p>
            )}
            {icon && (
                <div className="absolute right-0 flex items-center justify-center h-full px-3 text-white rounded cursor-pointer top-2/4 -translate-y-2/4 bg-primary">
                    {icon}
                </div>
            )}
        </div>
    );
};

Input.propTypes = {
    className: PropTypes.string,
    control: PropTypes.any.isRequired,
    errors: PropTypes.object,
    icon: PropTypes.any,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    type: PropTypes.string,
};

export default Input;
