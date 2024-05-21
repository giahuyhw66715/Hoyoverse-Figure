import PropTypes from "prop-types";
import { useState } from "react";

const ImageUploader = ({ name, setValue, ...props }) => {
    const [isUpload, setIsUpload] = useState(false);
    const handleInputChange = (e) => {
        setValue(name, e.target.files);
        if (e.target.files.length > 0) setIsUpload(true);
        else setIsUpload(false);
    };
    return (
        <label
            htmlFor={name}
            className="flex items-center justify-center w-full h-full px-4 border border-gray-300 rounded-lg cursor-pointer p-5"
        >
            {isUpload ? (
                <span className="flex items-center gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <span>Image uploaded</span>
                </span>
            ) : (
                <span className="flex items-center gap-3">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                        />
                    </svg>
                    <span>Upload your images</span>
                </span>
            )}

            <input
                type="file"
                name={name}
                id={name}
                className="hidden"
                onChange={handleInputChange}
                {...props}
            />
        </label>
    );
};

ImageUploader.propTypes = {
    name: PropTypes.string,
    onChange: PropTypes.func,
    setValue: PropTypes.func,
};

export default ImageUploader;
